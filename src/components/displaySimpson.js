import React from 'react';


function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <img
        src={simpson.image}
        alt={simpson.character}
      />
      <div>
         {simpson.character}
      </div>
      <div>
        {simpson.quote}
      </div>
    </div>
  );
};

export default DisplaySimpson;

