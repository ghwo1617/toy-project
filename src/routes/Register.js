import React, { useState } from "react";
import { authService } from "fbase";
import "../styles/Register.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    
    const onChange = (event) => {
      const {
        target: { name, value },
      } = event;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          let data;
          if (newAccount) {
            data = await authService.createUserWithEmailAndPassword(
              email,
              password
            );
          } else {
            data = await authService.signInWithEmailAndPassword(email, password);
          }
          console.log(data);
        } catch (error) {
          console.log(error);
        }
    };
    return (
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
              <div className="passSpace">
                <p>비밀번호 확인</p>
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
              <button className="btnLogin" type="submit">
                가입하기
              </button>
            </div>
          </div>
        </form>
    );
}
export default Register;