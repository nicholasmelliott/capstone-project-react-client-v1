import React from 'react';

const NewScreensForm = ({services, change, hardwareUI}) => ( 
  <div> 
    <div class="row">
      <div class="col-8">
        <h2 class="font-weight-bold">Build <br/> New <br/> Screen(s)</h2>
      </div>
      <div class="col-4">
        <img src={services[0].imgSrc} width="80%" class="img-form"/>
      </div>
    </div>
    <h6>Quantity</h6>      
    <div class="form-group row"> 
      <div class="col-12">
        <label class="mt-2" for="quantity">Please select a quantity:</label>
        <select class="form-control" id="quantity" name="quantity" onChange={change}>
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
      <label class="form-row ml-1" for="width">Please enter the screen's dimensions:</label>
    </div>
    <div class="row" style={{paddingLeft: 15 + "px", paddingRight: 15 + "px"}}>
      <div class="form-row mt-2">
        <div class="form-group col"> 
          <input class="form-control" id="width" name="width" placeholder="24 7/16" type="text" onChange={change}/>
          <label for="width">Width</label>
        </div>
        {/* Mockup for adding fractions to dimension fields */}
        {/* <div class="form-group col"> 
          <div class="input-group">
            <input class="form-control" id="width" name="width" placeholder="24 7/16" type="text" onChange={change}/>
            <select class="form-control" id="wFColor" name="fColor" onChange={change}>
              <option value="1/8">1/8</option>
              <option value="1/4">1/4</option>
              <option value="3/8">3/8</option>
              <option value="1/2">1/2</option>
              <option value="5/8">5/8</option>
              <option value="3/4">3/4</option>
            </select>
          </div>
          <label for="width">Width</label>
        </div> */}
        <div class="form-group col-1">X </div>
        <div class="form-group col"> 
          <input class="form-control" id="height" name="height" placeholder="32 7/16" onChange={change}/>
          <label for="height">Height</label>
        </div>
        <div class="form-group col-1">X   </div>
        <div class="form-group col"> 
          <input class="form-control" id="depth" name="depth" placeholder="7/16" onChange={change}/>
          <label for="depth">Depth</label>
        </div>
      </div>
    </div>
    <hr/>
    <h6>Frame</h6>
    <div class="row">  
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="frameType">Please select the frame type:</label>
          <select class="form-control" id="frameType" name="fType" onChange={change}>
            <option value="standard">Standard</option>
            <option value="storm">Storm</option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="frameColor">Please select the frame color:</label>
          <select class="form-control" id="frameColor" name="fColor" onChange={change}>
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
    {hardwareUI('newScreen', 'hardware')}
    <hr/>
    <h6>Screen</h6>
    <div class="row">     
      <div class="form-group col-12"> 
        <label class="mt-2" for="screenColorType">Please select the screen color and material:</label>
        <select class="form-control" id="screenColorType" name="sType" onChange={change}>
          <option value="charFib">Charcoal Fiberglass</option>
          <option value="grayFib">Gray Fiberglass</option>
          <option value="charAlum">Charcoal Aluminum</option>
          <option value="millAlum">Mill Aluminum</option>
          <option value="blackAlum">Black Aluminum</option>
          <option value="blackPet">Black PetSafe</option>
          <option value="grayPet">Gray PetSafe   </option>
        </select>
      </div>
    </div>
  </div>	
);  

export default NewScreensForm;