/* global kakao*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StoreAPI } from "../../config";
import MapList from "./MapList/MapList";
import ModalPortal from "../Modal/ModalPortal";
import NotNearStore from "../Modal/NotNearStore/NotNearStore";
import styled from "styled-components";
declare global {
  interface Window {
    kakao: any;
    Polyline: any;
  }
}

interface MapStateType {
  currentLat: number;
  currentLon: number;
  storeMarkers: any;
  order: boolean;
}

const Map = () => {
  // useState() 여러개의 state를 하나로 선언
  const imageSrc: string =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
  const [gopizzaMap, setGopizzaMap] = useState<any>(); // 지도 생성 후 담은 변수
  const [data, setData] = useState<MapStateType>({
    currentLat: 0,
    currentLon: 0,
    storeMarkers: [],
    order: false,
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [storeList, setStoreList] = useState<any>([]);

  const { currentLat, currentLon, storeMarkers, order } = data;

  // 매장 API
  const storeInfoAPI = async () => {
    // 목데이터 /data/locationData.json
    // const result = await (await axios.get("/data/locationData.json")).data.data;
    const result = await (await axios.get(StoreAPI)).data.data;
    KakaoMap(result);
  };

  useEffect(() => {
    storeInfoAPI();
  }, []);

  // 맵을 그리는 함수
  const KakaoMap = (result) => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=aa9ca5d115739e988fab0a879015627a&autoload=false";
    document.body.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const locPosition = new window.kakao.maps.LatLng(37.548945, 126.924483);
        // 지도를 표시할 div
        const container = document.getElementById("Map-Mymap");
        const options = {
          center: locPosition,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        setGopizzaMap(map);

        const markers = result.map((store: any) => {
          console.log("store", store);
          // 마커 이미지의 이미지 크기
          const imageSize = new window.kakao.maps.Size(64, 69);
          // 마커 이미지를 생성
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          return new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              Number(store.latlng[0]),
              Number(store.latlng[1])
            ), // 마커를 표시할 위치
            title: store.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
            image: markerImage, // 마커 이미지
          });
        });

        console.log("markers", markers);
        setData({
          ...data,
          storeMarkers: markers,
        });

        markers.map((mark) => {
          mark.setMap(map);
        });

        // 전체 매장 리스트
        setStoreList(result);
      });
    };
  };

  const currentStoreAPI = async () => {
    const result = await (
      await axios.get(StoreAPI, {
        params: {
          lat: currentLat,
          lng: currentLon,
        },
      })
    ).data.data;
    console.log(result);
    setStoreList(result);
    console.log(result);

    // axios
    //   .get("/data/locationData.json")
    //   .then((res) => {
    //     console.log("axiosMapList", res);
    //     setStoreList(res.data.data);
    //     console.log("axiosMapList", storeList);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  // 5km 이내에 매장 마커 띄우는 함수 호출
  const nearStore = async (storeLocation) => {
    // console.log("currentLon", currentLon);
    // console.log("currentLat", currentLat);

    // 가까운 매장 반경 범위(km)
    const radius = 5000;

    // filter 적용
    const nearMarkers = await storeLocation.filter((m: any) => {
      const c1 = gopizzaMap.getCenter(); // 현재 좌표
      const c2 = m.getPosition(); // 매장 좌표
      const poly = new window.kakao.maps.Polyline({
        path: [c1, c2],
      });

      const dist = poly.getLength(); // 매장 거리
      // console.log("m", m);

      return dist < radius;
    });

    // console.log("markers", nearMarkers);
    if (nearMarkers.length > 0) {
      storeLocation.map((m: any) => {
        return m.setMap(null);
      });

      nearMarkers.map((m: any) => {
        return m.setMap(gopizzaMap);
      });
      alert("가까운 매장은 " + nearMarkers[0].mc + "입니다");
      setShowModal(true);
      setData({
        ...data,
        order: true,
      });
    } else {
      setShowModal(true);
    }
  };

  // 현재 내 위치 마커
  const currentMark = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // 내 현재 위치의 위도, 경도
        const lat = position.coords.latitude,
          lon = position.coords.longitude;
        setData({
          ...data,
          currentLat: lat,
          currentLon: lon,
        });

        // 이동할 위도 경도 위치를 생성합니다
        var moveLatLon = new window.kakao.maps.LatLng(lat, lon);

        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        gopizzaMap.panTo(moveLatLon);

        //현재 위치 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: moveLatLon,
        });

        // 인포윈도우에 표시할 내용
        const iwContent = '<div style="padding:5px;">여기에 계신가요?</div>',
          iwRemoveable = true;

        // 인포윈도우를 생성한다.
        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        // 인포윈도우를 마커위에 표시한다.
        infowindow.open(gopizzaMap, marker);

        // marker 표시
        marker.setMap(gopizzaMap);

        // 5km 이내에 매장 마커 띄우는 함수 호출
        nearStore(storeMarkers);
        currentStoreAPI();
      });
    }
  };

  return (
    // 지도가 띄어질 부분
    <>
      <MapComponent>
        {showModal ? (
          <ModalPortal elementId="modal">
            <NotNearStore
              setShowModal={setShowModal}
              showModal={showModal}
              order={order}
            />
          </ModalPortal>
        ) : null}
        <KakaoMapBox>
          <StoreMap id="Map-Mymap"></StoreMap>
          <StoreSearchBtn onClick={currentMark}>내 현재 위치</StoreSearchBtn>
        </KakaoMapBox>
        <MapList storeList={storeList} />
      </MapComponent>
    </>
  );
};

export default Map;

const MapComponent = styled.div`
  width: 100%;
`;

const KakaoMapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoreMap = styled.div`
  width: 1000px;
  height: 500px;
`;

const StoreSearchBtn = styled.button`
  background-color: black;
  color: white;
`;
