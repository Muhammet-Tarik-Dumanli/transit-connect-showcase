import { useEffect } from "react";
import "./LoadingScreen.css";
import ford_logo from "../../assets/images/ford-logo.png";

const LoadingScreen = ({ onFinish }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish(); // loading kapat
        }, 3100); // TAM timeline süresi

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="loading-screen">

            <div className="loading-bg"></div>

            <div className="loading-content">

                <div className="logo-wrapper">
                    <img
                        src={ford_logo}
                        alt="Ford"
                        className="ford-logo"
                    />
                </div>

                <h1 className="launch-title">
                    TRANSIT CONNECT
                </h1>

                <div className="launch-info">
                    <span>2003 MODEL</span>
                    <span>•</span>
                    <span>184.100 KM</span>
                </div>

            </div>

        </div>
    );
};

export default LoadingScreen;