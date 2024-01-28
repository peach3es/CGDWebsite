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
    <div className="flex flex-row">
      <img src={image} alt={title} className="w-1/2" />
      <div className="flex flex-col">
        <h3 className="date">{date}</h3>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
