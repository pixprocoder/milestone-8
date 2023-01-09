import React from "react";

export default function Country({ country }) {
  console.log(country);
  return (
    <div>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={country.flags.png}
              class="img-fluid rounded-start"
              alt="flags"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{country.name.common}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
