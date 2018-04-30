import React from "react";
import "./Login.css";

const styles = {
    createAcc: {
        height: "100vh",
        backgroundImage: `url(${require("../../images/background.jpeg")})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
    }
}

const LoginPage = () => {
    return(
        <div style= { styles.createAcc } className="Login">
            <div className="container">
                <div className="form">
                    <form>
                        <div className="logo">
                            <img src={ require("../../images/logo2.jpeg") } alt="logo"/>
                        </div>
                        <div className="input-field">
                            <span>
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input type="text" placeholder="email"/>
                        </div>
                        <div className="input-field">
                            <span>
                                <i className="fas fa-key"></i>
                            </span>
                            <input type="text" placeholder="password"/>
                        </div>
                       
                        <input type="submit" value="Get started" className="btn"/>
                    </form>
                    <p>Terms & conditions</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;