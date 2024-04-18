import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const {
    image,
    estate_title,
    id,
    segment_name,

    price,
    status,

    location
  } = card;
  return (
    <div>
      <div className="flex flex-row p-3  gap-3   overflow-hidden shadow-lg bg-white rounded-2xl  mt-10 ">
        <div className="mb-6 relative w-1/2">
          <img data-aos="zoom-in" src={image} alt="" className="w-full h-[335px] object-cover   rounded-2xl bg-[#13131326]" />
          <div className="absolute left-4 right-4 top-4">
            <button data-aos="zoom-in" className="rounded-lg bg-[#eb2f2f] px-3 py-1 font-medium text-white text-lg z-30">
              {status}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-1/2" data-aos="zoom-in">
          <div>
            <h2 className="font-bold text-center text-2xl my-4 text-[#131313]">{estate_title}</h2>
          </div>
          
            <p className="font-semibold text-xl text-[#131313CC]"> {segment_name}</p>
            <p className="font-medium text-[#131313CC]"> {price}</p>
          

          <p>{location}</p>

          <Link to={`/${id}`}>
            {" "}
            <button className="btn font-semibold text-white bg-teal-400  rounded-2xl">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
SingleCard.propTypes = {
  card: PropTypes.object.isRequired
};
export default SingleCard;
