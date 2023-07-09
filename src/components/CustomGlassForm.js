import React from 'react';

const prod = "customGlass"
const CustomGlassForm = ({ services, change, quantityUI, dimensionUI}) => (
	<div> 
    <div className="row">
      <div className="col-8">
        <h2 className="font-weight-bold">Cut <br/> Custom <br/> Glass</h2>
      </div>
      <div className="col-4">
        <img src={services[4].imgSrc} width="80%" className="img-form"/>
      </div>
    </div>
    <h6>Quantity</h6>      
    {quantityUI(prod, "quantity")}
    <hr/>
    <h6>Dimensions</h6>
    <div className="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <label className="form-row ml-1" for="width">Please enter the glass's dimensions (in inches):</label>
    </div>
    <div className="form-row mt-2">
      {dimensionUI(prod,'width')}
    </div>
    <div className="form-row mt-2">
      {dimensionUI(prod,'height')}
    </div>
    <hr/>
    <h6>Material</h6>
    <div className="row">     
      <div className="form-group col-12"> 
        <label className="mt-2" for="rWMaterial">Please select the material:</label>
        <select className="form-control" id="WMaterial" name="material" onChange={change} required>
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