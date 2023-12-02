import React, { useState,handleNextClick } from 'react';

const Create = () => {
  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  const handleTextAdChange = () => {
    setTextAdChecked(!textAdChecked);
  };

  const handleMediaAdChange = () => {
    setMediaAdChecked(!mediaAdChecked);
  };
 
  return (
    
<div class="w3-row w3-border">
<div class="w3-threequarter w3-container w3-beige">
      
    <p><h3>Create ADs</h3> </p>
      <label>
        <input
          type="checkbox"
          checked={textAdChecked}
          onChange={handleTextAdChange}
        />
       
      </label>
      <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Create  Text Ad</h5>
    <p class="card-text">Let's be enthusiastic make up the bulk of the card's content.Whatever pops in your mind can be a great advertisemnet,so let's think out if the box.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      <label>
        <input
          type="checkbox"
          checked={mediaAdChecked}
          onChange={handleMediaAdChange}
        />
        
      </label>
      <div class="card">
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Create Media Ad</h5>
    <p class="card-text">Let's be enthusiastic make up the bulk of the card's content.Whatever pops in your mind can be a great advertisemnet,so let's think out if the box.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div> <button onClick={handleNextClick} class="w3-button w3-blue">Next</button></div>

    </div>
    </div>
  );
};

export default Create;
