import React, { Component } from 'react';

class NewScreensForm extends Component { 
  constructor(props) {
    super(props);
    this.state = {
     values: [{
       type: "",
       fromLoc: "",
       dist: ""
     }]
    };
  }

  hardwareUI(){
     return this.state.values.map((val, i) => 
         <div class="row" id={i} key={i}>
           <div class="form-group col-4">
              <select class="form-control" name="type" id="hType" value={val.type||''} onChange={this.handleChange.bind(this, i)}>
                <option value="none">None</option>
                <option value="plunger">Plunger</option>
                <option value="knife latch">Knife Latch</option>
                <option value="pull tab">Pull Tab</option>
                <option value="tension spring">Tension Spring</option>
              </select>
            </div>
            <div class="form-group col-3 mt-auto">
              <select class="form-control mt-auto" name="fromLoc" id="hFromLoc" value={val.fromLoc||''} onChange={this.handleChange.bind(this, i)}>
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
                <input class="form-control" name="dist" value={val.dist||''} id="hDist" placeholder="24 7/16" onChange={this.handleChange.bind(this, i)}/> 
            </div>
            <div class="col-2 mt-auto mb-3">
              <button class="btn btn-outline-secondary" type="button" id={i}  onClick={this.removeClick.bind(this, i)}><strong>-</strong></button>
            </div>
        </div>
      )     
  }

  handleChange(i, event) {
     let values = [...this.state.values];
     values[i] = {
        ...this.state.values[i],
        [event.target.name] : event.target.value
     };
     this.setState({ values });
  }
  
  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }
  
  removeClick(i){
    console.log(i);
     let values = [...this.state.values];
     values.splice(i,1);
     this.setState({ values });
     console.log(this.state.values);
  }
  
  render(){
    return(
	    <div> 
        <div class="row">
          <div class="col-8">
            <h2 class="font-weight-bold">Build <br/> New <br/> Screen(s)</h2>
          </div>
          <div class="col-4">
            <img src={this.props.services[0].imgSrc} width="80%" class="img-form"/>
          </div>
        </div>
        <h6>Quantity</h6>      
        <div class="form-group row"> 
          <div class="col-12">
            <label class="mt-2" for="quantity">Please select a quantity:</label>
            <select class="form-control" id="quantity" name="quantity" onChange={this.props.change}>
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
              <input class="form-control" id="width" name="width" placeholder="24 7/16" type="text" onChange={this.props.change}/>
              <label for="width">Width</label>
            </div>
            <div class="form-group col-1">X </div>
            <div class="form-group col"> 
              <input class="form-control" id="height" name="height" placeholder="32 7/16" onChange={this.props.change}/>
              <label for="height">Height</label>
            </div>
            <div class="form-group col-1">X   </div>
            <div class="form-group col"> 
              <input class="form-control" id="depth" name="depth" placeholder="7/16" onChange={this.props.change}/>
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
              <select class="form-control" id="frameType" name="fType" onChange={this.props.change}>
                <option value="standard">Standard</option>
                <option value="storm">Storm</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group"> 
              <label class="mt-2" for="frameColor">Please select the frame color:</label>
              <select class="form-control" id="frameColor" name="fColor" onChange={this.props.change}>
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
          <div class="form-group col-4 mt-auto">
           <label class="mt-2" for="hType">Please select the hardware type:</label>
          </div>
          <div class="form-group col-3 mt-auto">
            <label class="mt-2" for="hFromLoc">Please select the start location:</label>
          </div>
          <div class="form-group col-3 mt-auto">
          <label class="mt-2" for="hDist">Please select the distance from start location:</label>      
          </div>
        </div>
        {this.hardwareUI()}
        <button class="btn btn-outline-secondary" type="button" id="{i}"  onClick={this.addClick.bind(this)}><strong>+</strong></button>
        <hr/>
        <h6>Screen</h6>
        <div class="row">     
          <div class="form-group col-12"> 
            <label class="mt-2" for="screenColorType">Please select the screen color and material:</label>
            <select class="form-control" id="screenColorType" name="sType" onChange={this.props.change}>
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
  }
}

export default NewScreensForm;