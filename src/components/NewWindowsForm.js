import React from 'react';

const prod = "newWindow";
const NewWindowsForm = ({ services, change, hardwareUI, dimensionUI, loading }) => (
  <div> 
    <div class="row">
      <div class="col-8">
        <h2 class="font-weight-bold">Build <br/> New <br/> Window(s)</h2>
      </div>
      <div class="col-4">
        <img src={services[1].imgSrc} width="80%" class="img-form" />
      </div>
    </div>
    <h6>Quantity</h6>      
    <div class="form-group row"> 
      <div class="col-12">
        <label class="mt-2" for="wQuantity">Please select a quantity:</label>
        <select class="form-control" id="wQuantity" name="quantity" onChange={change}>
          {/* Creates multiple quantity options */}
          {(()=>{
            let opt = [];
            for(let i = 1; i <= 30; i++){
              opt.push(<option value={i}>{i}</option>);
            }
            return (opt);
          })()}
        </select>
      </div>
    </div>
    <hr/>
    <h6>Dimensions</h6>
    <div class="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <label class="form-row ml-1" for="width">Please enter the screen's dimensions (in inches):</label>
    </div>
    <div class="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <div class="form-row mt-2">
        {dimensionUI(prod, 'width')}
        <div class="form-group col-1">X </div>
        {dimensionUI(prod, 'height')}
        <div class="form-group col-1">X   </div>
        {dimensionUI(prod, 'depth')}
      </div>
    </div>
    <hr/>
    <h6>Frame</h6>
    <div class="row">  
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="wFType">Please select the frame type:</label>
          <select class="form-control" id="wFType" name="fType" onChange={change}>
            <option value="standard">Standard</option>
            <option value="storm">Storm</option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="wFColor">Please select the frame color:</label>
          <select class="form-control" id="wFColor" name="fColor" onChange={change}>
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
    <div class="row">     
      <div class="form-group col-12"> 
        <label class="mt-2" for="wMaterial">Please select the window material:</label>
        <select class="form-control" id="wMaterial" name="wMaterial" onChange={change}>
          <option value="glass">Glass</option>
          <option value="acrylic">Acrylic</option>
        </select>
      </div>
    </div>
  </div>	
);

export default NewWindowsForm;