import React from "react";

const DisplayingData = () => {
  const Hoteldata = {
    name: "SRS",
    image:
      "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  };

  return (
    <div>
      <h1>{Hoteldata.name}</h1>
      <img
        src={Hoteldata.image}
        alt={`${Hoteldata.name} hotel`}
        style={{ width: "400px", height: "auto", borderRadius: "10px" }}
      />
    </div>
  );
};

export default DisplayingData;
