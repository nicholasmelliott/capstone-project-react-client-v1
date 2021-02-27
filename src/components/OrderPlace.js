import React, { Component } from 'react';
import NewScreensForm from "./NewScreensForm";
import NewWindowsForm from "./NewWindowsForm";
import RestoreScreensForm from "./RestoreScreensForm";

class OrderPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fractions: [],
      screens: [],
      windows: [],
      rScreens: [],
      newScreen: {
        quantity: 0,
        width: [
          {
            int: 0,
            decimals: 0
          }
        ],
        height: [
          {
            int: 0,
            decimals: 0
          }
        ],
        depth: [
          {
            int: 0,
            decimals: 0
          }
        ],
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist: 0
          }
        ],
        sType: ''
      },
      newWindow: {
        quantity: 0,
        width: [
          {
            int: 0,
            decimals: 0
          }
        ],
        height: [
          {
            int: 0,
            decimals: 0
          }
        ],
        depth: [
          {
            int: 0,
            decimals: 0
          }
        ],
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist: 0
          }
        ],
        wMaterial: ''
      },
      restoreScreen: {
        quantity: 0,
        width: [
          {
            int: 0,
            decimals: 0
          }
        ],
        height: [
          {
            int: 0,
            decimals: 0
          }
        ],
        depth: [
          {
            int: 0,
            decimals: 0
          }
        ],
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist: 0
          }
        ],
        sType: ''
      },
    }
  }

  //Builds an array of reduced fractions and their corresponding decimal values
  buildFractions = async () => {
    //initialized to 16 to mimic standard imperial tape measurer increments
    const denom = 16;
    let gcd;
    let fractions = [];
    function findGCD(a,b){
      return b ? findGCD(b, a%b) : a;
    }
    for(let i = 1; i < denom; i++){
      gcd = findGCD(i,denom);
       await fractions.push(
        {
          fraction: (i/gcd).toString() + "/" + (denom/gcd).toString(),
          decimal: ((i/gcd)/(denom/gcd))
        }
      )
    }
    this.setState(prevState => ({
      ...prevState,
      fractions: [...fractions]
    }))
  }

  submitHandler = (event) => {
    const totalProd = event.target.id;
    const prod = event.target.name;
    console.log(this.state.screens, this.state.windows, this.state.rScreens);
    event.preventDefault();
    this.setState(prevState => ({
        [totalProd]: [
          ...prevState[totalProd],
          {
            product: prod,
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
      ...prevState[prod],
      [list]: values
     }}));
 }

  // Creates quantity UI with multiple quantity options, Creates unique id specific to product 
 quantityUI =(prod, list) => {
  return(
    <div class="form-group row"> 
      <div class="col-12">
        <label class="mt-2" for={`${prod}-${list}`}>Please select a quantity:</label>
        <select class="form-control" id={`${prod}-${list}`} name="quantity" onChange={this.changeHandler}>
          {(()=>{
            let opts = [];
            for(let i = 0; i <= 30; i++){
              if(i === 0){
                opts.push(<option value={i} selected>{i}</option>);
              }else{
                opts.push(<option value={i}>{i}</option>);
              }
            }
            return (opts);
          })()}
        </select>
      </div>
    </div>
  );
 }

 dimensionUI = (prod, list) => {
   return(
      <div class="form-group col"> 
          <div class="input-group">
            <input class="form-control" id={`${prod}-${list}`} name="int" value={this.state[prod][list][0].int} type="text" onChange={this.handleListChanges.bind(this, 0, list)}/>
            <select class="form-control" name="decimals" value={this.state[prod][list][0].decimals} onChange={this.handleListChanges.bind(this, 0, list)}>
              <option selected>none</option>
              {this.state.fractions.map((frac)=>{
                return(
                  <option value={frac.decimal}>{frac.fraction}</option>
                );
              })}
            </select>
          </div>
          <label for={prod + "-" + list}>{list.charAt(0).toUpperCase() + list.slice(1)}</label>
        </div>
   );
 }

 hardwareUI = (prod, list) => {
  return( 
    <div>
      {this.state[prod][list].map((val, i) => 
        <div class="p-3 mt-3" id={i} key={i} style={{backgroundColor: '#f8f9fa'}}>
          <label for={`${prod}-${list}-type`}>Hardware #{i+1}</label>
          <div class="form-group">
             <label class="mt-2" for={`${prod}-${list}-type`}>Please select the hardware type:</label>
             <select class="form-control" name="type" id={`${prod}-${list}-type`} value={val.type||''} onChange={this.handleListChanges.bind(this, i, list)}>
               <option value="plunger">Plunger</option>
               <option value="knife latch">Knife Latch</option>
               <option value="pull tab">Pull Tab</option>
               <option value="tension spring">Tension Spring</option>
             </select>
           </div>
           <div class="form-group mt-auto">
             <label class="mt-2" for={`${prod}-${list}-fromLoc`}>Please select the start location:</label>
             <select class="form-control mt-auto" name="fromLoc" id={`${prod}-${list}-fromLoc`} value={val.fromLoc||''} onChange={this.handleListChanges.bind(this, i, list)}>
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
           <div class="form-group mt-auto">
              <label class="mt-2" for={`${prod}-${list}-dist`}>Please select the distance from start location:</label>   
              <input class="form-control" name="dist" value={val.dist||0} id={`${prod}-${list}-dist`} onChange={this.handleListChanges.bind(this, i, list)}/> 
           </div>
          <button class="btn btn-outline-secondary btn-block" width="100%" type="button" id={i}  onClick={this.removeItemClick.bind(this, i, prod, list)}>Remove Hardware Item (<strong>-</strong>)</button> 
        </div>
      )}
      <button class="btn btn-outline-secondary btn-block footer mt-3" type="button" id="{i}" onClick={this.addItemClick.bind(this, prod, list)}>Add New Hardware Item (<strong>+</strong>)</button>  
    </div>
  )   
 }

 componentDidMount(){
   this.buildFractions();
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
                        change={this.changeHandler} 
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />
                      <button class="btn btn-primary btn-block footer mb-2" type="submit">Add Screen(s) to Order</button>
                    </form>
                  </div>
                  <div id="bWindows">
                    <hr/>
                    <form onSubmit={this.submitHandler} id="windows" name="newWindow">
                      <NewWindowsForm 
                        services={this.props.services} 
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />     
                      <button class="btn btn-primary btn-block footer mb-2" id="nScreenAddBtn" type="submit">Add Window(s) to Order</button>                     
                    </form>
                  </div>
                  <div id="rScreens">
                    <hr/>
                    <form onSubmit={this.submitHandler} id="rScreens" name="restoreScreen">
                      <RestoreScreensForm 
                      services={this.props.services}
                      change={this.changeHandler}
                      quantityUI={this.quantityUI}
                      dimensionUI={this.dimensionUI}
                      hardwareUI={this.hardwareUI}
                    />  
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
                <div class="row fixed-bottom">
                    <div class="col-lg-5"/>
                    <div class="col-lg-6" style={{backgroundColor: 'white', borderColor: 'black', borderStyle: 'solid', borderWidth: 2 + 'px'}}>
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
                      {this.state.screens.map((screen) => {
                        return(
                        <li class="list-group-item p-0">
                          <div class="row">
                            <div class="col-3">
                              <h6>{screen.details.quantity}</h6>
                              <img src={this.props.services[0].imgSrc} />
                            </div>
                            <ul class="list-group col-3 p-0">
                              <li class="list-group-item  p-0">
                                <strong>Screen(s)</strong>
                              </li>
                              <li class="list-group-item  p-0">
                                {screen.details.width[0].int + screen.details.width[0].decimals} x {screen.details.height[0].int + screen.details.height[0].decimals} x {screen.details.depth[0].int + screen.details.depth[0].decimals} 
                              </li>
                              <li class="list-group-item  p-0">
                                {screen.details.fColor} 
                              </li>
                              <li class="list-group-item  p-0">
                                {screen.details.fType} 
                              </li>
                              <li class="list-group-item  p-0">
                                {screen.details.sType} 
                              </li>
                              {screen.details.hardware.map((hardware) => { 
                                return(
                                  <li class="list-group-item p-0">
                                    {hardware.type + " " + hardware.fromLoc + " " + hardware.dist}
                                  </li>
                                );
                              })}
                            </ul> 
                            <h8 class="col-3">{screen.product}</h8>
                          </div>
                        </li>
                        )
                      })}
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