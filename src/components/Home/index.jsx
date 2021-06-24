import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hallo!</p>
                    <p>I am Muhamad Haerul Anwar</p>
                    <p>Sultan Ageng Tirtayasa University Student</p>
                </h1>
                <Link to="/about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/1.png`} aria-hidden alt="Person picture." />
            </div>
        </div>
    );
};

export default Home;