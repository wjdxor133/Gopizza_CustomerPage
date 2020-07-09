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
            <ThTag>이용가능 서비스</ThTag>
          </TitleTrTag>
        </Thead>
      </MapListTable>
      <MapListTable>
        <Tbody>
          <ScrollBox>
            {storeList.map((store: any, idx: number) => {
              return (
                <TrTag key={idx}>
                  <TdTag>{store.name}</TdTag>
                  <TdTag>{store.tel}</TdTag>
                  <TdTag>{store.hours}</TdTag>
                  <TdTag>아직 미정</TdTag>
                </TrTag>
              );
            })}
          </ScrollBox>
        </Tbody>
      </MapListTable>
    </MapListComponent>
  );
};

export default MapList;

const MapListComponent = styled.div`
  width: 100%;
`;

const MapListTable = styled.table`
  width: 80%;
  margin: 0 auto;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const ScrollBox = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 300px;
`;

const ThTag = styled.th``;

const TitleTrTag = styled.tr``;

const TrTag = styled.tr`
  display: flex;
  justify-content: space-around;

  margin-left: 7em;
`;

const TdTag = styled.td`
  width: 25%;

  &:nth-child(1) {
    margin-left: 0em;
  }

  &:nth-child(2) {
    margin-left: -2em;
  }

  &:nth-child(3) {
    margin-left: -2.5em;
  }

  &:nth-child(4) {
    margin-left: 2em;
  }
`;
