import "./LoadingScreen.css";
import ford_logo from "../../assets/images/ford-logo.png";

const LoadingScreen = () => {
    return (
        <div className="loading-screen">

            <div className="loading-bg"></div>

            <div className="loading-content">

                <img
                    src={ford_logo}
                    alt="Ford"
                    className="ford-logo"
                />

                <h2 className="brand-name">
                    Transit Connect
                </h2>

                <p className="intro-text">
                    2003 FORD TRANSIT CONNECT
                </p>

            </div>

        </div>
    );
};

export default LoadingScreen;