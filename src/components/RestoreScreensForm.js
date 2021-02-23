import React from 'react';

const RestoreScreensForm = ({ services , loading }) => (
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
    <div class="form-group row"> 
      <div class="col-12">
        <label class="mt-2" for="quantity">Please select a quantity:</label>
        <select class="form-control" id="quantity" name="quantity">
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
          <input class="form-control" id="width" name="width" placeholder="24 7/16"/>
          <label for="width">Width</label>
        </div>
        <div class="form-group col-1">X </div>
        <div class="form-group col"> 
          <input class="form-control" id="height" name="height" placeholder="32 7/16"/>
          <label for="height">Height</label>
        </div>
        <div class="form-group col-1">X   </div>
        <div class="form-group col"> 
          <input class="form-control" id="depth" name="depth" placeholder="7/16"/>
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
          <select class="form-control" id="frameType" name="frameType">
            <option value="standard">Standard</option>
            <option value="storm">Storm</option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group"> 
          <label class="mt-2" for="frameColor">Please select the frame color:</label>
          <select class="form-control" id="frameColor" name="frameColor">
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
    <div class="row">    
      <div class="form-group col-4">
          <label class="mt-2" for="hardwareType">Please select the hardware type:</label>
          <select class="form-control" id="hardwareType" name="hardwareType">
            <option value="none">None</option>
            <option value="plunger">Plunger</option>
            <option value="knife latch">Knife Latch</option>
            <option value="pull tab">Pull Tab</option>
            <option value="tension spring">Tension Spring</option>
          </select>
      </div>
      <div class="form-group col-3 mt-auto">
          <label class="mt-2" for="hardwareLoc">Start corner:</label>
          <select class="form-control mt-auto" id="hardwareLoc" name="hardwareLoc">
            <option value="BottomLeftToTop">BottomLeftToTop</option>
            <option value="BottomLeftToRight">BottomLeftToRight</option>
            <option value="BottomRightToTop">BottomRightToTop</option>
            <option value="BottomRightToLeft">BottomRightToLeft</option>
            <option value="TopLeftToBottom">TopLeftToBottom</option>
            <option value="TopLeftToRight">TopLeftToRight</option>
            <option value="TopRightToBottom">TopRightToBottom</option>
            <option value="TopRightToLeft">TopRightToLeft</option>
          </select>
      </div>
      <div class="form-group col-3 mt-auto">
          <label for="hardwareLocNum">Distance from corner:</label>
          <input class="form-control" id="hardwareLocNum" name="hardwareLocNum" placeholder="24 7/16"/> 
      </div>
      <div class="col-2 mt-auto mb-3">
        <button class="btn btn-outline-secondary" id="addNewHardware" type="button"><strong>+</strong></button>
      </div>
    </div>
    <hr/>
    <h6>Screen</h6>
    <div class="row">     
      <div class="form-group col-12"> 
        <label class="mt-2" for="screenColorType">Please select the screen color and material:</label>
        <select class="form-control" id="screenColorType" name="screenColorType">
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

export default RestoreScreensForm;