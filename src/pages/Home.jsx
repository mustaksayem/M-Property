import { Helmet } from "react-helmet-async";
import AllCards from "../components/body/AllCards";
import Slider from "../components/body/Slider";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NS | Home</title>
            </Helmet>
         <Slider></Slider>
         <AllCards></AllCards>
        </div>
    );
};

export default Home;