import React from "react";
import { connect } from "react-redux";

declare global {
  interface Window {
    IMP: any;
  }
}

const Payment = ({ total, userName, userEmail }) => {
  console.log("selectCartTotal", total);
  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp33944797");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "inicis", // version 1.1.0부터 지원.
      pay_method: "card",
      merchant_uid: "merchant_" + new Date().getTime(),
      name: "주문명:결제테스트",
      amount: total,
      buyer_email: `${userEmail}`,
      buyer_name: `${userName}`,
      buyer_tel: "010-1234-5678",
      buyer_addr: "서울특별시 구로구 고척동",
      buyer_postcode: "123-456",
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  const callback = (rsp) => {
    if (rsp.success) {
      alert("결제 성공");
      let msg: string = "결제가 완료되었습니다.";
      msg += "고유ID : " + rsp.imp_uid;
      msg += "상점 거래ID : " + rsp.merchant_uid;
      msg += "결제 금액 : " + rsp.paid_amount;
      msg += "카드 승인번호 : " + rsp.apply_num;
    } else {
      alert(`결제 실패: ${rsp.error_msg}`);
    }
  };
  return (
    <>
      <span onClick={onClickPayment}>주문하기</span>
    </>
  );
};

const mapStateToProps = (state) => ({
  userName: state.user.displayName,
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Payment);
