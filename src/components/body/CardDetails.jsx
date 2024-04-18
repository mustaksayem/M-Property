import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const IdInt = parseInt(id);
  const card = cards.find(card => card.id == IdInt);

  return (
    <div>
      <Helmet>
        <title>M-property | Product - {id}</title>
      </Helmet>
      <div className="flex flex-col  gap-3 justify-center items-center">
        <div className="w-1/2  bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center">
          <img className="w-full " src={card.image} alt="" />
        </div>
        <div className="w-1/2 text-center ">
          <h2 className="text-[40px] font-bold text-[#131313]">{card.estate_title}</h2>

          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Price: {card.price}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Status: {card.status}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Area: {card.area}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Segment: {card.segment_name}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Location: {card.location}</p>
          <p className="mt-4 mb-6 font-medium text-xl text-[#131313CC]">Facilities: {card.facilities[0]} , {card.facilities[1]} , {card.facilities[2]} , {card.facilities[3]} ,</p>
          

          
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
