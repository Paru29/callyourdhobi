import { Link } from "react-router-dom";
import Card from "./Card";
const Home = () => {
    return (
        <>
            <div className="col-lg-2 mb-5">
                <Link to="/video">
                    <div className="card">
                        <img src="./Screenshot 2024-12-31 at 4.48.15 AM.png" className="card-img-top"  />
                    </div>
                </Link>
            </div>
        </>
    )
};

export default Home;