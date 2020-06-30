/* global kakao*/
import React, { useState, useEffect } from "react";
import "./Map.scss";

declare global {
  interface Window {
    kakao: any;
    Polyline: any;
  }
}

const Map = () => {
  const script: any = document.createElement("script");
  const [gopizzaMap, setGopizzaMap] = useState<any>(); // 지도 생성 후 담은 변수
  const [storeLocation, setStoreLocation] = useState<any[]>([]);

  useEffect(() => {
    // 매장 정보 API
    fetch("/data/locationData.json")
      .then((res) => res.json())
      .then((res) => {
        setStoreLocation(res.data);
      });

    // index.html에 script 태그 추가

    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=aa9ca5d115739e988fab0a879015627a&autoload=false";
    document.body.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        // 지도를 표시할 div
        let container = document.getElementById("Map-Mymap");
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);
        setGopizzaMap(map); // 계속 사용할려고 담음
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            // 내 현재 위치의 위도, 경도
            let lat = position.coords.latitude,
              lon = position.coords.longitude;

            // 내 현재 위치
            let locPosition = new window.kakao.maps.LatLng(lat, lon);

            //현재 위치 마커 생성
            let marker = new window.kakao.maps.Marker({
              position: locPosition,
            });

            // 인포윈도우에 표시할 내용
            let iwContent = '<div style="padding:5px;">여기에 계신가요?!</div>',
              iwRemoveable = true;

            // 인포윈도우를 생성한다.
            let infowindow = new window.kakao.maps.InfoWindow({
              content: iwContent,
              removable: iwRemoveable,
            });

            // 인포윈도우를 마커위에 표시한다.
            infowindow.open(map, marker);

            // 지도 중심좌표를 접속위치로 변경한다.
            map.setCenter(locPosition);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            const zoomControl = new window.kakao.maps.ZoomControl();
            map.addControl(
              zoomControl,
              window.kakao.maps.ControlPosition.RIGHT
            );

            // marker 표시
            marker.setMap(map);
          });
        } else {
          alert("위치를 찾을 수 없습니다.");
        }
      });
    };
  }, []);

  const nearStore = () => {
    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
    const radius = 5000;

    const markers = (storeLocation && storeLocation).map((store) => {
      console.log("store", store);
      // 마커 이미지의 이미지 크기
      const imageSize = new window.kakao.maps.Size(64, 69);
      // 마커 이미지를 생성
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize
      );

      return new window.kakao.maps.Marker({
        // map: gopizzaMap,
        position: new window.kakao.maps.LatLng(
          Number(store.latlng[0]),
          Number(store.latlng[1])
        ), // 마커를 표시할 위치
        title: store.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
        image: markerImage, // 마커 이미지
      });
    });

    markers.forEach((m) => {
      const c1 = gopizzaMap.getCenter();
      const c2 = m.getPosition();
      const poly = new window.kakao.maps.Polyline({
        path: [c1, c2],
      });

      const dist = poly.getLength();
      console.log("dist", dist);

      if (dist < radius) {
        m.setMap(gopizzaMap);
      } else {
        m.setMap(null);
      }
    });
  };

  console.log("storeLocation", storeLocation && storeLocation);
  return (
    // 지도가 띄어질 부분
    <div className="Map">
      <div id="Map-Mymap"></div>
      <button onClick={nearStore}>가까운 매장 찾기</button>
    </div>
  );
};

export default Map;
