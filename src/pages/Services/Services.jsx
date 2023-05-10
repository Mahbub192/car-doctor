import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((rest) => rest.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <div className="text-center space-y-3 mb-10">
        <p className="text-error text-lg">Service</p>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="w-2/5 capitalize mx-auto leading-7">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
      <div className="py-16 text-center">
      <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Services;
