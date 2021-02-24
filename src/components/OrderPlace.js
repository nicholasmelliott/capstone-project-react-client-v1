import React, { Component } from 'react';
import NewScreensForm from "./NewScreensForm";
import NewWindowsForm from "./NewWindowsForm";
import RestoreScreensForm from "./RestoreScreensForm";

class OrderPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [],
      windows: [],
      newScreen: {
        quantity: '',
        width: '',
        height: '',
        depth: '',
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist: ''
          }
        ],
        sType: ''
      },
      newWindow: {
        quantity: '',
        width: '',
        height: '',
        depth: '',
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist: ''
          }
        ],
        sType: ''
      }
    }
  }

  submitHandler = (event) => {
    const totalProd = event.target.id;
    const prod = event.target.name;
    
    event.preventDefault();
    this.setState(prevState => ({
        [totalProd]: [
          ...prevState[totalProd],
          {
            service: prod,
            details: this.state[prod]
          }
        ]
    }));
  }

  changeHandler = (event) => {
    const prod = event.target.form.name;

    this.setState(prevState => ({
      [prod]: {
        ...prevState[prod],
        [event.target.name] : event.target.value
      }
    }));  
  }

  //Hardware functions
  handleListChanges = (i, list, event) => {
    const prod = event.target.form.name;
    const prodList = this.state[prod][list];
    let values = [...prodList];
    
    values[i] = {
       ...prodList[i],
       [event.target.name] : event.target.value
    };
    this.setState(prevState => ({[prod]: {
      ...prevState[prod],
      [list]: values
    }}));
  }  
 
 addItemClick = (prod, list) => {
   this.setState(prevState => ({[prod]: {
     ...prevState[prod],
    [list]: [...prevState[prod][list], '']
   }}))
 }
 
 removeItemClick(i, prod, list){
    let values = [...this.state[prod][list]];

    values.splice(i,1);
    this.setState(prevState => ({[prod]: {
      [list]: values
     }}));
 }

 hardwareUI = () => {
  return this.state.newScreen.hardware.map((val, i) => 
      <div class="row" id={i} key={i}>
        <div class="form-group col-4">
           <select class="form-control" name="type" id="hType"  value={val.type||''} onChange={this.handleListChanges.bind(this, i, 'hardware')}>
             <option value="none">None</option>
             <option value="plunger">Plunger</option>
             <option value="knife latch">Knife Latch</option>
             <option value="pull tab">Pull Tab</option>
             <option value="tension spring">Tension Spring</option>
           </select>
         </div>
         <div class="form-group col-3 mt-auto">
           <select class="form-control mt-auto" name="fromLoc" id="hFromLoc" value={val.fromLoc||''} onChange={this.handleListChanges.bind(this, i, 'hardware')}>
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
             <input class="form-control" name="dist" value={val.dist||''} id="hDist" placeholder="24 7/16" onChange={this.handleListChanges.bind(this, i, 'hardware')}/> 
         </div>
         <div class="col-2 mt-auto mb-3">
           <button class="btn btn-outline-secondary" type="button" id={i}  onClick={this.removeItemClick.bind(this, i, 'newScreen', 'hardware')}><strong>-</strong></button>
         </div>
     </div>
   )     
  }

  render(){
    return(
	    <div style={{marginTop: 50 + "px"}}>
        <div class="row m-0" style={{paddingLeft:10 + "px", paddingRight: 10 + "px"}}>
          <div class="col orders-body">
            <div class="order-list-main">     
              <nav class="navbar navbar-light bg-light px-3 position-relative justify-content-around" id="navbar-example2" role="tablist">
                  <ul class="nav nav-tabs">
                      {this.props.services.map((service)=>{
                        return (
                          <div>  
                              <li class="nav-item">
                                  <a class="nav-link d-flex inline pl-3 pr-3 pt-2 pb-2" href={"#" + service.href}>
                                    <p class="d-none d-lg-block mr-2 mb-0">{service.type + "  "}</p>
                                    <img src={service.imgSrc} />
                                  </a>
                              </li>
                          </div>
                        );
                      })}
                  </ul>
              </nav>
            </div>
            <div class="orders-form-body" data-spy="scroll" data-target="#navbar-example2" data-offset="0">   
              <div class="row m-0" style={{height:"auto", backgroundColor:"gray",}}>     
                <div class="col-lg-4 order-form" style={{height:"auto", backgroundColor:"white", border: 2 + "px"}}>
                  <div id="bScreens">
                    <form onSubmit={this.submitHandler} id="screens" name="newScreen">
                      <NewScreensForm 
                        services={this.props.services} 
                        input={this.state.newScreen} 
                        change={this.changeHandler} 
                        addItem={this.addItemClick}
                        hardwareUI={this.hardwareUI}/>
                      <button class="btn btn-primary btn-block footer mb-2" type="submit">Add Screen(s) to Order</button>
                    </form>
                  </div>
                  <div id="bWindows">
                    <hr/>
                    <form>
                      <NewWindowsForm services={this.props.services}/>     
                      <button class="btn btn-primary btn-block footer mb-2" id="nScreenAddBtn" type="button">Add Window(s) to Order</button>                     
                    </form>
                  </div>
                  <div id="rScreens">
                    <hr/>
                    <form>
                      <RestoreScreensForm services={this.props.services}/>  
                      <button class="btn btn-primary btn-block footer mb-2" id="nScreenAddBtn" type="submit">Add <i>To-Be-Restored</i> Screen(s) to Order</button>
                    </form>
                  </div>
                  <div id="rWindows">
                    <hr/>
                    <form>
                      
                    </form>
                  </div>
                  <div id="cGlass">
                    <hr/>
                    <form>
                    {/* <!--include cutGlassForm --> */}
                    </form>
                  </div>
                </div>
                <div class="col-lg-8 fixed-bottom">
                    <div style={{backgroundColor: 'white', borderColor: 'black', borderStyle: 'solid', borderWidth: 2 + 'px'}}>
                     <h1>CART</h1>
                     <ul class="list-group">
                      <li class="list-group-item  p-0">
                        <div class="row">
                          <h6 class="col-3">Quantity</h6>
                          <h6 class="col-3">Product</h6>
                          <h6 class="col-3">Service</h6>
                          <h6 class="col-3">Price</h6>
                        </div>
                      </li>
                      <li class="list-group-item  p-0">
                        <div class="row">
                          <h8 class="col-3">{this.state.newScreen.quantity}</h8>
                          <ul class="list-group  p-0">
                            <li class="list-group-item  p-0">
                              {this.state.newScreen.width} x {this.state.newScreen.height} x {this.state.newScreen.depth} 
                            </li>
                            <li class="list-group-item  p-0">
                              {this.state.newScreen.fColor} 
                            </li>
                            <li class="list-group-item  p-0">
                              {this.state.newScreen.fType} 
                            </li>
                            <li class="list-group-item  p-0">
                              {this.state.newScreen.sType} 
                            </li>
                            <li class="list-group-item  p-0">
                              {this.state.newScreen.hardware[0].type} 
                            </li>
                          </ul> 
                        </div>
                      </li>
                     </ul>     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      );
    }
  }


export default OrderPlace;