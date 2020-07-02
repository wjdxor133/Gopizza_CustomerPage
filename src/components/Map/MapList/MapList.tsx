import React, { useState, useEffect } from "react";
import "./MapList.scss";

interface MapListProps {
  currentLat: number;
  currentLon: number;
}

const MapList = ({ currentLat, currentLon }: MapListProps) => {
  const [storeList, setStoreList] = useState<any[]>([]);

  useEffect(() => {
    // 해당 위치의 매장 리스트 가져오기
    fetch("/data/locationData.json")
      // fetch(`http://10.58.4.155:8000/store?lat=${currentLat}&lng=${currentLon}`)
      .then((res) => res.json())
      .then((res) => {
        setStoreList(res.data);
      });
  });

  return (
    <div className="MapList">
      <div className="MapList-title">
        <div className="title1">
          <p>매장명/주소</p>
        </div>
        <div className="title2">
          <p>전화번호</p>
        </div>
        <div className="title3">
          <p>영업시간</p>
        </div>
        <div className="title4">
          <p>이용가능 서비스</p>
        </div>
      </div>
      <ul>
        {storeList.map((store: any, idx: number) => {
          return (
            <li key={idx} className="MapList-item">
              <div className="item1">
                <a href={`https://www.yogiyo.co.kr/mobile/#/${452100}/`}>
                  {store.name}
                </a>
              </div>
              <div className="item2">
                <p>{store.tel}</p>
              </div>
              <div className="item3">
                <p>{store.hours}</p>
              </div>
              <div className="item4">
                <p>아직 미정</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MapList;
