import React from 'react';

const prod = "restoreScreen"
const RestoreScreensForm = ({ services, change, quantityUI, dimensionUI, hardwareUI}) => (
	<div> 
    <div class="row">
      <div class="col-8">
        <h2 class="font-weight-bold">Restore <br/> Old <br/> Screen(s)</h2>
      </div>
      <div class="col-4">
        <img src={services[2].imgSrc} width="80%" class="img-form"/>
      </div>
    </div>
    <h6>Quantity</h6>      
    {quantityUI(prod, "quantity")}
    <hr/>
    <h6>Dimensions</h6>
    <div class="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <label class="form-row ml-1" for="width">Please enter the screen's dimensions (in inches):</label>
    </div>
    <div class="form-row mt-2">
      {dimensionUI(prod,'width')}
    </div>
    <div class="form-row mt-2">
      {dimensionUI(prod,'height')}
    </div>
    <div class="form-row mt-2">
      {dimensionUI(prod, 'depth')}
    </div>
    <hr/>
    <h6>Frame</h6>
    <div class="row">  
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="rSFType">Please select the frame type:</label>
          <select class="form-control" id="rSFType" name="frameType" onChange={change} required>
            <option value="">...</option>
            <option value="standard">Standard</option>
            <option value="storm">Storm</option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="rSFColor">Please select the frame color:</label>
          <select class="form-control" id="rSFColor" name="frameColor" onChange={change} required>
            <option value="">...</option>
            <option value="white">White</option>
            <option value="bronze">Bronze</option>
            <option value="mill">Mill</option>
            <option value="sandstone">Sandstone</option>
            <option value="almond">Almond</option>
            <option value="black">Black</option>
          </select>
        </div>  
      </div>
    </div>
    <hr/>
    <h6>Hardware</h6>
    {hardwareUI(prod, 'hardware')}
    <hr/>
    <h6>Screen</h6>
    <div class="row">     
      <div class="form-group col-12"> 
        <label class="mt-2" for="rSType">Please select the screen color and material:</label>
        <select class="form-control" id="rSType" name="sType" onChange={change} required>
          <option value="">...</option>
          <option value="charFib">Charcoal Fiberglass</option>
          <option value="grayFib">Gray Fiberglass</option>
          <option value="charAlum">Charcoal Aluminum</option>
          <option value="millAlum">Mill Aluminum</option>
          <option value="blackAlum">Black Aluminum</option>
          <option value="blackPet">Black PetSafe</option>
          <option value="grayPet">Gray PetSafe</option>
        </select>
      </div>
    </div>
	</div>	
);

export default RestoreScreensForm;