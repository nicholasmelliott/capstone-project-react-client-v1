import React from 'react';

const prod = "newWindow";
const NewWindowsForm = ({ services, change, quantityUI, dimensionUI, hardwareUI}) => (
  <div> 
    <div className="row">
      <div className="col-8">
        <h2 className="font-weight-bold">Build <br/> New <br/> Window(s)</h2>
      </div>
      <div className="col-4">
        <img src={services[1].imgSrc} width="80%" className="img-form" />
      </div>
    </div>
    <h6>Quantity</h6>      
    {quantityUI(prod, "quantity")}
    <hr/>
    <h6>Dimensions</h6>
    <div className="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <label className="form-row ml-1" for="width">Please enter the window's dimensions (in inches):</label>
    </div>
    <div className="form-row mt-2">
      {dimensionUI(prod,'width')}
    </div>
    <div className="form-row mt-2">
      {dimensionUI(prod,'height')}
    </div>
    <div className="form-row mt-2">
      {dimensionUI(prod, 'depth')}
    </div>
    <hr/>
    <h6>Frame</h6>
    <div className="row">  
      <div className="col-6">
        <div className="form-group"> 
          <label className="mt-2" for="wFType">Please select the frame type:</label>
          <select className="form-control" id="wFType" name="fType" onChange={change} required>
            <option value="">...</option>
            <option value="standard">Standard</option>
            <option value="storm">Storm</option>
          </select>
        </div>
      </div>
      <div className="col-6">
        <div className="form-group"> 
          <label className="mt-2" for="wFColor">Please select the frame color:</label>
          <select className="form-control" id="wFColor" name="fColor" onChange={change} required>
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
    <h6>Window</h6>
    <div className="row">     
      <div className="form-group col-12"> 
        <label className="mt-2" for="wMaterial">Please select the window material:</label>
        <select className="form-control" id="wMaterial" name="wMaterial" onChange={change} required>
          <option value="">...</option>
          <option value="glass">Glass</option>
          <option value="acrylic">Acrylic</option>
        </select>
      </div>
    </div>
  </div>	
);

export default NewWindowsForm;