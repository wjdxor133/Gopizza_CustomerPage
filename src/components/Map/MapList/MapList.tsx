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
  width: 40%;
`;

const MapListTable = styled.table`
  width: 100%;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const ScrollBox = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ThTag = styled.th``;

const TitleTrTag = styled.tr``;

const TrTag = styled.tr`
  display: flex;
  margin-left: 2em;
  padding: 1em 0;
`;

const TdTag = styled.td`
  width: 25%;
`;
