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
    const result = (await axios.get(StoreAPI)).data.data;
    KakaoMap(result);
  };

  // API 한번만 받아올 수 있게 설정
  useEffect(() => {
    storeInfoAPI();
  }, []);

  //현재 위도,경도가 바뀌면 다시 화면이 그려지게 설정
  useEffect(() => {}, [currentLat, currentLon]);

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
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        setGopizzaMap(map);

        const markers = result.map((store: any) => {
          // console.log("store", store);
          const imageSize = new window.kakao.maps.Size(64, 69);
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          return new window.kakao.maps.Marker({
            clickable: true,
            position: new window.kakao.maps.LatLng(
              Number(store.latlng[0]),
              Number(store.latlng[1])
            ),
            title: store.name,
            image: markerImage,
          });
        });

        // console.log("markers", markers);
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

  // 현재 위치에 가까운 매장 리스트
  const currentStoreAPI = async (currentLat, currentLon) => {
    console.log("currentLat", currentLat);
    console.log("currentLon", currentLon);
    const result = (
      await axios.get(StoreAPI, {
        params: {
          lat: currentLat,
          lng: currentLon,
        },
      })
    ).data.data;
    // const result = (
    //   await (await axios.get(StoreAPI, {
    //     params: {
    //       lat: currentLat,
    //       lng: currentLon,
    //     },
    //   }))
    // .data.data;
    console.log("result", result);
    setStoreList(result);
  };

  // 5km 이내에 매장 마커 띄우는 함수 호출
  const nearStore = async (storeLocation) => {
    // console.log("nearStore", currentLon);
    // console.log("nearStore", currentLat);

    // 가까운 매장 반경 범위(km)
    const radius = 5000;

    const nearMarkers = await storeLocation.filter((m: any) => {
      const c1 = gopizzaMap.getCenter(); // 현재 좌표
      const c2 = m.getPosition(); // 매장 좌표
      const poly = new window.kakao.maps.Polyline({
        path: [c1, c2],
      });

      const dist = poly.getLength(); // 매장 거리

      return dist < radius;
    });

    // console.log("markers", nearMarkers);

    if (nearMarkers.length > 0) {
      // 매장 전체 마커 지우기
      storeLocation.map((m: any) => {
        return m.setMap(null);
      });

      // 가까운 매장 마커만 그리기
      nearMarkers.map((m: any) => {
        return m.setMap(gopizzaMap);
      });

      setData({
        ...data,
        storeMarkers: nearMarkers,
        order: true,
      });
    } else {
      setShowModal(true);
    }
  };

  // 현재 내 위치 마커
  const currentMark = async () => {
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

        const moveLatLon = new window.kakao.maps.LatLng(lat, lon);
        gopizzaMap.panTo(moveLatLon);

        const marker = new window.kakao.maps.Marker({
          position: moveLatLon,
        });

        const iwContent = '<div style="padding:5px;">여기에 계신가요?</div>',
          iwRemoveable = true;

        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        infowindow.open(gopizzaMap, marker);
        marker.setMap(gopizzaMap);

        // 5km 이내에 매장 마커 띄우는 함수 호출
        nearStore(storeMarkers);
        currentStoreAPI(lat, lon);
      });
    }
  };

  // 가장 가까운 매장 마커 보여주기
  const NearestStoreMarks = () => {
    const moveLatLon = new window.kakao.maps.LatLng(
      storeList[0].latlng[0],
      storeList[0].latlng[1]
    );

    gopizzaMap.panTo(moveLatLon);

    const iwContent = `<div style="padding:7px; height:70px;">가까운 매장은 ${storeList[0].name} 입니다.<br/> 클릭해주세요!</div>`,
      iwRemoveable = true;

    const infowindow = new window.kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    infowindow.open(gopizzaMap, storeMarkers[0]);

    // 가장 가까운 매장 마커 클릭시 모달창 띄우기
    window.kakao.maps.event.addListener(storeMarkers[0], "click", () => {
      setShowModal(true);
    });
  };

  return (
    // 지도가 띄어질 부분
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
      </KakaoMapBox>
      <BtnBox>
        <StoreSearchBtn onClick={currentMark}>내 현재 위치</StoreSearchBtn>
        <StoreSearchBtn onClick={NearestStoreMarks}>
          가까운 매장으로 이동!
        </StoreSearchBtn>
      </BtnBox>
      <MapList storeList={storeList} />
    </MapComponent>
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

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
const StoreSearchBtn = styled.button`
  background-color: #f86d0d;
  color: white;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.5em;
  margin-left: 1em;

  &:hover {
    cursor: pointer;
  }
`;
