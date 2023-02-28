import React, { useState } from 'react';
import styles from "../styles/Menu.module.css";

export default function SelectMenu() {
  let [count01, setCount01] = useState(0);
  let [count02, setCount02] = useState(0);
  let [count03, setCount03] = useState(0);
  let [count04, setCount04] = useState(0);
  let [count05, setCount05] = useState(0);

  const selectMenu01 = () => {
    const selectedMenu01 = document.getElementById("menu01");
    selectedMenu01.style.backgroundColor = "#93E3F4";
    const selectedMenu01Count = document.getElementById("menu01Count");
    selectedMenu01Count.style.display = "flex";
    setCount01(count01 += 1);
    console.log("메뉴를 담았습니다.",count01);
  }

  const selectMenu02 = () => {
    const selectedMenu02 = document.getElementById("menu02");
    selectedMenu02.style.backgroundColor = "#93E3F4";
    const selectedMenu02Count = document.getElementById("menu02Count");
    selectedMenu02Count.style.display = "flex";
    setCount02(count02 += 1);
    console.log("메뉴를 담았습니다.",count02);
  }

  const selectMenu03 = () => {
    const selectedMenu03 = document.getElementById("menu03");
    selectedMenu03.style.backgroundColor = "#93E3F4";
    const selectedMenu03Count = document.getElementById("menu03Count");
    selectedMenu03Count.style.display = "flex";
    setCount03(count03 += 1);
    console.log("메뉴를 담았습니다.",count03);
  }
  
  const selectMenu04 = () => {
    const selectedMenu04 = document.getElementById("menu04");
    selectedMenu04.style.backgroundColor = "#93E3F4";
    const selectedMenu04Count = document.getElementById("menu04Count");
    selectedMenu04Count.style.display = "flex";
    setCount04(count04 += 1);
    console.log("메뉴를 담았습니다.",count04);
  }

  return (
    <div className={styles.main}>
      <div className={styles.centerTable}>
        <section className={styles.menuSection}>
          <div id='menu01Count' className={styles.selectEffect}>
            <span>{count01}</span>
          </div>
          <div className={styles.contentCenter}>
            <div id="menu01" className={styles.menuCard} onClick={selectMenu01}>
              <div className={styles.menuImgPlace}>
                <img className={styles.menuImg} />
              </div>
              <div className={styles.menuNamePlace}>
                <span className={styles.menuName}>아메리카노</span>
                <span className={styles.menuTemp}>HOT/ICE</span>
              </div>
              <div className={styles.menuPricePlace}>
                <span className={styles.menuPrice}>3000원</span>
                <span className={styles.menuSalePrice}>1500원</span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.menuSection}>
          <div id='menu02Count' className={styles.selectEffect}>
              <span>{count02}</span>
            </div>
            <div className={styles.contentCenter}>
              <div id="menu02" className={styles.menuCard} onClick={selectMenu02}>
                <div className={styles.menuImgPlace}>
                  <img className={styles.menuImg} />
                </div>
                <div className={styles.menuNamePlace}>
                  <span className={styles.menuName}>카페라떼</span>
                  <span className={styles.menuTemp}>HOT/ICE</span>
                </div>
                <div className={styles.menuPricePlace}>
                  <span className={styles.menuPrice}>4000원</span>
                  <span className={styles.menuSalePrice}>2000원</span>
                </div>
              </div>
            </div>
        </section>
        <section className={styles.menuSection}>
          <div id='menu03Count' className={styles.selectEffect}>
              <span>{count03}</span>
            </div>
            <div className={styles.contentCenter}>
              <div id="menu03" className={styles.menuCard} onClick={selectMenu03}>
                <div className={styles.menuImgPlace}>
                  <img className={styles.menuImg} />
                </div>
                <div className={styles.menuNamePlace}>
                  <span className={styles.menuName}>카페모카</span>
                  <span className={styles.menuTemp}>HOT/ICE</span>
                </div>
                <div className={styles.menuPricePlace}>
                  <span className={styles.menuPrice}>4000원</span>
                  <span className={styles.menuSalePrice}>2000원</span>
                </div>
              </div>
            </div>
        </section>
        <section className={styles.menuSection}>
          <div id='menu04Count' className={styles.selectEffect}>
              <span>{count04}</span>
            </div>
            <div className={styles.contentCenter}>
              <div id="menu04" className={styles.menuCard} onClick={selectMenu04}>
                <div className={styles.menuImgPlace}>
                  <img className={styles.menuImg} />
                </div>
                <div className={styles.menuNamePlace}>
                  <span className={styles.menuName}>바닐라 라떼</span>
                  <span className={styles.menuTemp}>HOT/ICE</span>
                </div>
                <div className={styles.menuPricePlace}>
                  <span className={styles.menuPrice}>4000원</span>
                  <span className={styles.menuSalePrice}>2000원</span>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}
