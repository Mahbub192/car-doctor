import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
    const {_id, img, title, price} =service
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
          <p className="text-error">Price: ${price}</p>
          <div className="">
            <Link to={`/checkout/${_id}`}><ArrowLongRightIcon className="h-8 w-8 ml-auto text-error"></ArrowLongRightIcon></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
