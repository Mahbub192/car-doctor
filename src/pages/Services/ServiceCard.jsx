import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
    const {img, title, price} =service
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{title}</h2>
          <p>Price: ${price}</p>
          <div className="">
            <ArrowLongRightIcon className="h-8 w-8 ml-auto"></ArrowLongRightIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
