import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const IdInt = parseInt(id);
  const card = cards.find((card) => card.id == IdInt);
    
  return (
    <div>
      <Helmet>
        <title>NS | Product - {id}</title>
      </Helmet>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-12'>
        <div className='w-full lg:w-1/2 bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center'>
          <img className='w-full ' src={card.image} alt='' />
        </div>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-[40px] font-bold text-[#131313]'>
            {card.estate_title}
          </h2>

          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Price: {card.price}
          </p>
          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Status: {card.status}
          </p>
          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Area: {card.area}
          </p>
          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Location: {card.location}
          </p>
          <div className='divide-y-2 divide-dashed divide-gray-500'>
            <div></div>
            <div>
              <p className='text-xl font-medium text-[#131313CC] my-4'>
                {card.category}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* <div className='py-5 mx-auto bg-gray-100 text-gray-800'>
        <div className='flex flex-col mx-auto rounded'>
          <img
            src={card.image}
            alt=''
            className='sm:max-w-full h-auto sm:max-h-full bg-gray-500 object-cover'
          />

          <div className='p-6 z-10 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50'>
            <div className='space-y-2'>
              <p
                className=' flex items-center justify-center text-2xl font-semibold sm:text-3xl'>
                {card.estate_title}
              </p>
              <p className='text-xs text-gray-600'>
                By
                <span className='text-xs hover:underline'>
                  Leroy Jenkins
                </span>
              </p>
            </div>
            <div className='text-gray-800'>
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardDetails;
