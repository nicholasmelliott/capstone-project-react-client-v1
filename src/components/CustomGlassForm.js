import React from 'react';

const prod = "customGlass"
const CustomGlassForm = ({ services, change, quantityUI, dimensionUI}) => (
	<div> 
    <div class="row">
      <div class="col-8">
        <h2 class="font-weight-bold">Cut <br/> Custom <br/> Glass</h2>
      </div>
      <div class="col-4">
        <img src={services[4].imgSrc} width="80%" class="img-form"/>
      </div>
    </div>
    <h6>Quantity</h6>      
    {quantityUI(prod, "quantity")}
    <hr/>
    <h6>Dimensions</h6>
    <div class="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <label class="form-row ml-1" for="width">Please enter the glass's dimensions (in inches):</label>
    </div>
    <div class="form-row mt-2">
      {dimensionUI(prod,'width')}
    </div>
    <div class="form-row mt-2">
      {dimensionUI(prod,'height')}
    </div>
    <hr/>
    <h6>Material</h6>
    <div class="row">     
      <div class="form-group col-12"> 
        <label class="mt-2" for="rWMaterial">Please select the material:</label>
        <select class="form-control" id="WMaterial" name="material" onChange={change} required>
          <option value="">...</option>
          <option value="SSAnealGlass">Single Strength Annealed Glass</option>
          <option value="DSAnealGlass">Double Strength Annealed Glass</option>
          <option value="1/8AcrylSheet">1/8" Acyrlic Sheet</option>
          <option value="3/16AcrylSheet">3/16" Acrylic Sheet</option>
          <option value="1/4AcrylSheet">1/4" Acrylic Sheet</option>
        </select>
      </div>
    </div>
	</div>	
);

export default CustomGlassForm;