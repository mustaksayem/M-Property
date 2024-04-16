import { Helmet } from "react-helmet-async";
import AllCards from "../components/body/AllCards";
import Slider from "../components/body/Slider";




const Home = () => {
    return (
        <div className="m-10">
            <Helmet>
                <title>M-property | Home</title>
            </Helmet>
         <Slider></Slider>
         <AllCards></AllCards>
        </div>
    );
};

export default Home;