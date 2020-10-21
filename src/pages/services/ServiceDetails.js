import React from "react";
import { useParams, useHistory } from "react-router-dom";
import serviceData from "./ServicesData";
function ServiceDetails() {
  const { serviceId } = useParams();
  const history = useHistory();
  const details = serviceData.find((service) => service._id === serviceId);

  function handleChange() {
    setTimeout(() => {
      history.push("/services");
    }, 1000);
  }

  return (
    <div>
      <h1>Service Details</h1>
      <h3>
        {details.name}: ${details.price}
      </h3>
      <p>{details.description}</p>
      <button onClick={handleChange}>Go back</button>
    </div>
  );
}

export default ServiceDetails;
