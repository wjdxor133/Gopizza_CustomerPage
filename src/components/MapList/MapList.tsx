import React from "react";
import styled from "styled-components";
interface MapListProps {
  storeList: any;
}

const MapList = ({ storeList }: MapListProps) => {
  return (
    <MapListComponent>
      <MapListTable>
        <Thead>
          <TitleTrTag>
            <ThTag>매장명/주소</ThTag>
            <ThTag>전화번호</ThTag>
            <ThTag>영업시간</ThTag>
          </TitleTrTag>
        </Thead>
      </MapListTable>
      <MapListTable>
        <Tbody>
          {storeList.map((store: any, idx: number) => {
            return (
              <TrTag key={idx}>
                <TdTag>{store.name}</TdTag>
                <TdTag>{store.tel}</TdTag>
                <TdTag>{store.hours}</TdTag>
              </TrTag>
            );
          })}
        </Tbody>
      </MapListTable>
    </MapListComponent>
  );
};

export default MapList;

const MapListComponent = styled.div`
  width: 40%;
  margin-left: 1em;
`;

const MapListTable = styled.table`
  width: 100%;
`;

const Thead = styled.thead`
  border: 1px solid #ddd;
  border-bottom-style: none;
`;

const Tbody = styled.tbody`
  width: 100%;
  overflow-y: scroll;
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
`;

// const ScrollBox = styled.div``;

const ThTag = styled.th`
  width: 33.3%;
  text-align: center;
  padding: 2.5em 0;
  :nth-child(3) {
    padding-right: 2em;
  }
`;

const TitleTrTag = styled.tr``;

const TrTag = styled.tr`
  display: flex;
  font-size: 0.9rem;
  justify-content: space-around;
  padding: 1.5em 0 1.5em 1.2em;
  border: 1px solid #ddd;
  border-top-style: none;
`;

const TdTag = styled.td`
  width: 25%;
`;
