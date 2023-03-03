import React, { useState } from "react";
import { authService } from "fbase";
import "../styles/Login.css"
import RegisterModal from "../components/Modals/RegisterModal";
import Register from "./Register";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] =useState(true);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };
      const closeModal = () => {
        setModalOpen(false);
      };

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount) {
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    };
    return(
        <>
            <form>
                <div className="">
                    <div className="formSpace">
                        <div className="emailSpace">
                            <p>이메일</p>
                            <input
                                className="input"
                                name="email"
                                type="email"
                                placeholder="email"
                                required
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="passSpace">
                            <p>비밀번호</p>
                            <input
                                className="input"
                                name="password"
                                type="password"
                                placeholder="password"
                                required
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="btnLoginSpce">
                        <button className="btns" type="submit">로그인</button>
                    </div>
                </div>
            </form>
            <div className="btnRegisterSpace">
                <button className="btns" onClick={openModal}>회원 가입하기</button>
                <RegisterModal open={modalOpen} close={closeModal} header="Modal heading">
                    <Register />
                </RegisterModal>
            </div>
        </>
    );
}
export default Login;