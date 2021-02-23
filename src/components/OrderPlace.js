import React, { Component } from 'react';
import NewScreensForm from "./NewScreensForm";
import NewWindowsForm from "./NewWindowsForm";
import RestoreScreensForm from "./RestoreScreensForm";

class OrderPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: [],
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
      }
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
        screens: [
        ...prevState.screens,
        {
          service: event.target.name,
          details: this.state.newScreen
        }
        ]
    }));
    console.log(this.state.screens);
  }

  changeHandler = (event) => {
      this.setState(prevState => ({
        newScreen: {
          ...prevState.newScreen,
          [event.target.name] : event.target.value
        }
      }));  
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
                    <form onSubmit={this.submitHandler}  name="build">
                      <NewScreensForm services={this.props.services} input={this.state.newScreen} change={this.changeHandler}/>
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
                <div class="col-lg-8">
                    <div style={{backgroundColor: 'white'}}>
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