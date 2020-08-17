/* global kakao*/
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { StoreAPI, kakaoApiKey } from "../../core/api/api";
import MapList from "../../components/MapList/MapList";
import ModalPortal from "../../components/Modal/ModalPortal";
import StoreModal from "../../components/Modal/StoreModal/StoreModal";
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

const Map = ({ history }) => {
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

  // API 한번만 받아올 수 있게 설정
  useEffect(() => {
    const storeInfoAPI = async () => {
      // 목데이터 /data/locationData.json
      const result = await (await axios.get("/data/locationData.json")).data
        .data;
      // const result = (await axios.get(StoreAPI)).data.data;
      KakaoMap(result);
    };
    storeInfoAPI();
  }, []);

  // 현재 위도,경도가 바뀌면 다시 화면이 그려지게 설정
  useEffect(() => {}, [currentLat, currentLon]);

  // 맵을 그리는 함수
  const KakaoMap = (result) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&autoload=false`;
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
    const result = (
      await axios.get(StoreAPI, {
        params: {
          lat: currentLat,
          lng: currentLon,
        },
      })
    ).data.data;
    setStoreList(result);
  };

  // 5km 이내에 매장 마커 띄우는 함수 호출
  const nearStore = async (storeLocation) => {
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

        const iwContent = '<div style="padding:0.5em">여기에 계신가요?</div>',
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

    const iwContent = `<div style="padding:7px; height:70px;">가까운 매장은 ${storeList[0].name} 입니다.<br/> 마커를 클릭해주세요!</div>`,
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
          <StoreModal
            setShowModal={setShowModal}
            showModal={showModal}
            order={order}
          />
        </ModalPortal>
      ) : null}
      <Header history={history} />
      <ImgBox>
        <Img
          src="https://www.gopizza.kr/wp-content/uploads/2019/03/홈페이지-매장1.jpg"
          alt=""
        ></Img>
        <ImgText>
          우리동네
          <br /> 고피자
          <br /> <span className="imgText">가까운 매장을 찾아보세요.</span>
        </ImgText>
      </ImgBox>
      <BtnBox>
        <StoreSearchBtn onClick={currentMark}>내 현재 위치</StoreSearchBtn>
        <StoreSearchBtn onClick={NearestStoreMarks}>
          가까운 매장으로 이동!
        </StoreSearchBtn>
      </BtnBox>
      <KakaoMapBox>
        <StoreMap id="Map-Mymap"></StoreMap>
        <MapList storeList={storeList} />
      </KakaoMapBox>
      <Footer />
    </MapComponent>
  );
};

export default Map;

const MapComponent = styled.div`
  width: 100%;
  height: 100vh;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgText = styled.p`
  position: absolute;
  top: 30%;
  left: 15%;
  color: white;
  font-size: 3rem;
  font-weight: bold;

  .imgText {
    font-size: 2rem;
  }
`;

const KakaoMapBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

const StoreMap = styled.div`
  width: 50%;
  height: 500px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
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
