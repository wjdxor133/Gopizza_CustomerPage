import React from "react";
import styled from "styled-components";
interface MapListProps {
  storeList: any;
}

const MapList = ({ storeList }: MapListProps) => {
  return (
    <>
      <MapListComponent>
        <MapListTable>
          <TrTag>
            <Thead>
              <ThTag>매장명/주소</ThTag>
              <ThTag>전화번호</ThTag>
              <ThTag>영업시간</ThTag>
              <ThTag>이용가능 서비스</ThTag>
            </Thead>
          </TrTag>
          <ScrollBox>
            <Tbody>
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
            </Tbody>
          </ScrollBox>
        </MapListTable>
      </MapListComponent>
    </>
  );
};

export default MapList;

const MapListComponent = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const MapListTable = styled.table`
  width: 80%;
  margin: 0 auto;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody`
  width: 70%;
  height: 900px;
`;

const ScrollBox = styled.div`
  overflow-y: scroll;
`;

const ThTag = styled.th``;

const TrTag = styled.tr``;

const TdTag = styled.td`
  width: 25%;
  text-align: center;
`;
