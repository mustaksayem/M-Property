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

    location,
    
  } = card;
  return (
    <div>
      <div className='flex flex-col p-3 border-2  border-[#13131326] space-y-6 overflow-hidden shadow-lg bg-white rounded-2xl  mt-10 '>
        <div className='mb-6 relative'>
          <div className='absolute left-4 right-4 top-4'>
            <button className='rounded-lg bg-[#eb2f2f] px-3 py-1 font-medium text-white text-lg'>
              {status}
            </button>
          </div>
          <img data-aos="zoom-in"
            src={image}
            alt=''
            className='w-full h-[435px] object-cover   rounded-2xl bg-[#13131326]'
          />
        </div>
<div data-aos="fade-up" >
  
        <div>
          <h2 className='font-bold text-2xl my-4 text-[#131313]'>
            {estate_title}
          </h2>
        </div>
        <div className="flex justify-between">
          <p className='font-semibold text-xl text-[#131313CC]'> {segment_name}</p>
          <p className='font-medium text-[#131313CC]'> {price}</p>
        </div>

        <div className='divide-y-2 divide-dashed divide-gray-500'>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <p className=''>{location}</p>

        <Link to={`/${id}`}>
          {" "}
          <button className='btn font-semibold text-white bg-green-600  rounded-2xl'>
            View Details
          </button>
        </Link>
</div>
      </div>
    </div>
  );
};
SingleCard.propTypes = {
  card: PropTypes.object.isRequired,
};
export default SingleCard;
