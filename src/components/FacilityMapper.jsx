import TextField from "@mui/material/TextField";
import useForm from "../useForm";
import React from "react";

const FacilityMapper = () => {

    const facilities = [];

  return (
    <div>
    <ul>
        {facilities.map(facility => <li> Name: {facility.data.attributes.id}</li>)}
    </ul>
  </div> 
  );
}

export default FacilityMapper;
