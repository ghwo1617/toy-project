import React, { useState } from "react";
import styles from "../styles/NavBar.module.css";
import LoginModal from "./Modals/LoginModal";
import SelectMenu from "./SelectMenu";
import OrderStatus from "./OrderStatus";
import Login from "routes/Login";

export default function NavBar() {
  const [viewMenu, setViewMenu] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.loginBtnPlace}>
          <button className={styles.toLogin} onClick={openModal}>
            로그인
          </button>
          <LoginModal open={modalOpen} close={closeModal} header="Modal heading">
              <Login />
          </LoginModal>
        </div>
        <div className={styles.center}>
          <div className={styles.userImgPlace}></div>
        </div>
        <div className={styles.center}>
          <p className={styles.userName}>비회원</p>
        </div>
        <div className={styles.center}>
          <div className={styles.btnSelectMenuPlace}>
            <button className={styles.btnSelectMenu} onClick={() => setViewMenu(true)}>메뉴 선택</button>
            <div className={ viewMenu ? styles.selectBarBlock : styles.selectBarNone }></div>
          </div>
          <div className={styles.orderStatusPlace}>
            <button className={styles.orderStatus} onClick={() => setViewMenu(false)}>주문 현황</button>
            <div className={ viewMenu ? styles.selectBarNone : styles.selectBarBlock }></div>
          </div>
        </div>
      </nav>
      <div>
        { viewMenu ? <SelectMenu /> : <OrderStatus/> }
      </div>
    </>
  );
}
