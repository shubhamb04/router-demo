import React from "react";
import ServicesData from "./ServicesData";
import { Link } from "react-router-dom";

function ServicesList() {
  const services = ServicesData.map((service) => (
    <h2 className="serviceList" key={service._id}>
      <Link to={`/services/${service._id}`}>{service.name}</Link>: $
      {service.price}
    </h2>
  ));
  return (
    <div>
      <h1>Service List</h1>
      {services}
    </div>
  );
}

export default ServicesList;
