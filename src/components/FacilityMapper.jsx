import React from "react";
import "../components/FacilityMapper.css";

const FacilityMapper = ({facilities}) => {

  return (
    <div className="results">
    <ul>
      {!facilities ? null : facilities.map((facility) =>{
          return (
            <li className="results-view">
           <p>Facility Name: {facility.attributes.name} </p> 
           <p>Facility Address: {facility.attributes.address.physical.address_1}</p> 
           <p>Facility Website: {facility.attributes.website === null ? "no website" : facility.attributes.website}</p> 
           <p>Facility Number: {facility.attributes.phone.main === null ? "no main number" : facility.attributes.phone.main}</p>
           <button> onClick={}</button> 
          </li>
          )
      })}
    </ul>
  </div> 
  );
}

export default FacilityMapper;
