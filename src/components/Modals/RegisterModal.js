import React from 'react';
import "../../styles/RegisterModal.css"

const RegisterModal = (props) => {
    const { open, close, header } = props;
  
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="title">
                <span className="login">회원가입</span>
              </div>
            </header>
            <main>{props.children}</main>
          </section>
        ) : null}
      </div>
    );
  };
  export default RegisterModal;