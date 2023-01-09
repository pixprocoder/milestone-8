import React from "react";

export default function Country({ country }) {
  console.log(country);
  return (
    <div>
      <h1>Name {country.name.common}</h1>
    </div>
  );
}
