import React from "react";
import "./Recover.css";

const styles = {
    createAcc: {
        height: "100vh",
        backgroundImage: `url(${require("../../images/background_dark.jpeg")})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
    }
}

const RecoverPage = () => {
    return(
        <div style= { styles.createAcc } className="Recover">
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
                       
                        <input type="submit" value="Recover Account" className="btn"/>
                    </form>
                    <p>Cancel</p>
                </div>
            </div>
        </div>
    );
}

export default RecoverPage;