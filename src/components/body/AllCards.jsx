import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const AllCards = () => {
  const cards = useLoaderData();
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
