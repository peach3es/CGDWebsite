import React from "react";

interface EventProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  description,
  image,
}) => {
  return (
    <div className="flex flex-row bg-wh rounded-xl p-10 h-fit gap-10 w-1/2">
      <img
        src={image}
        alt={title}
        className={`object-contain aspect-{3/2} w-1/6 rounded-md`}
      />
      <div className="flex flex-col gap-5">
        <h3 className="date text-xl text-dark-purple font-corbert font-bold">
          {date}
        </h3>
        <h1 className="title text-3xl text-cgd-pink text-left">{title}</h1>
        <p className="description text-xl text-dark-purple font-corbert font-bold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
