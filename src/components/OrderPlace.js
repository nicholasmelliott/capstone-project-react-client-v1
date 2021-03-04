import React, { Component } from 'react';
import NewScreensForm from "./NewScreensForm";
import NewWindowsForm from "./NewWindowsForm";
import RestoreScreensForm from "./RestoreScreensForm";
import RestoreWindowsForm from "./RestoreWindowsForm";
import CustomGlassForm from "./CustomGlassForm";
import cart from "../cart4.svg";

class OrderPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fractions: [],
      screens: [],
      windows: [],
      rScreens: [],
      rWindows: [],
      cGlass: [],
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
      restoreWindow: {
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
      customGlass: {
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
        material: ''
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

  submitOrderHandler = (event) => {
    event.preventDefault();
    fetch('/orders', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body:  JSON.stringify([
       this.state.screens,
       this.state.windows,
       this.state.rScreens,
       this.state.rWindows,
       this.state.cGlass
     ]) 
    }).then(()=>{
      this.setState({
        screens: [],
        windows: [],
        rScreens: [],
        rWindows: [],
        cGlass: []
      });    
      console.log('Submitted!');
    });

  }

  submitHandler = (event) => {
    const totalProd = event.target.id;
    const prod = event.target.name;
    
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
    console.log(this.state.screens, 
                this.state.windows, 
                this.state.rScreens, 
                this.state.rWindows,
                this.state.cGlass);
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
                opts.push(<option key={i} value={i}>{i}</option>);
              }else{
                opts.push(<option key={i} value={i}>{i}</option>);
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
              <option>( No Fract. Inches )</option>
              {this.state.fractions.map((frac, i)=>{
                return(
                  <option key={i} value={frac.decimal}>{frac.fraction}</option>
                );
              })}
            </select>
          </div>
          <label for={prod + "-" + list}>{list.charAt(0).toUpperCase() + list.slice(1)}</label>
        </div>
   );
 }

 //generates hardware field where hardware items can be dynamically added or removed
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
      <div class="pl-3 pr-3 mt-3">
        <button class="btn btn-secondary btn-block footer mt-3" type="button" id="{i}" onClick={this.addItemClick.bind(this, prod, list)}>Add New Hardware Item (<strong>+</strong>)</button>  
      </div>
    </div>
  )   
 }

 cartUI = (prods, serviceNum) => {
   const allDim = (prods, prod) => {
     if(prods !== 'cGlass'){
      return `${prod.details.width[0].int + prod.details.width[0].decimals} x ${prod.details.height[0].int + prod.details.height[0].decimals} x ${prod.details.depth[0].int + prod.details.depth[0].decimals}`;  
     }else{
      return `${prod.details.width[0].int + prod.details.width[0].decimals} x ${prod.details.height[0].int + prod.details.height[0].decimals}`;
     }
   }
   return(
     <div>
       {this.state[prods].map((prod, i) => {
         return(
         <li key={i} class="list-group-item p-0">
           <div class="row">
             <div class="col-3">
               <h6>{prod.details.quantity}</h6>
             </div>
             <ul class="list-group col-3 p-0">
               <li class="list-group-item  p-0">
                 <strong>{prods}</strong> 
               </li>
               <li class="list-group-item  p-0">
                 {allDim(prods, prod)}
               </li>
               <li class="list-group-item  p-0">
                 {prod.details.fColor} 
               </li>
               <li class="list-group-item  p-0">
                 {prod.details.fType} 
               </li>
               <li class="list-group-item  p-0">
                 {prod.details.material} 
               </li>
               {(()=>{
                 if(prods !== 'cGlass'){
                  prod.details.hardware.map((hardware, i) => { 
                    return(
                      <li key={i} class="list-group-item p-0">
                        {hardware.type + " " + hardware.fromLoc + " " + hardware.dist}
                      </li>
                    );
                  })
                 }
                 
               })()}
             </ul>
             <div class="col-3">
             <h8 class="row">{prod.product}</h8>
             <img class="row" height="70%" src={this.props.services[serviceNum].imgSrc} />
             </div> 
           </div>
         </li>
         )
       })}
     </div>
   );
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
                      {/* Creates nav items for order form. */}
                      {this.props.services.map((service, i)=>{
                        return (
                          <li class="nav-item" key={i}>
                              <a class="nav-link d-flex inline pl-3 pr-3 pt-2 pb-2" href={"#" + service.href}  style={{color: "black"}}>
                                <p class="d-none d-lg-block mr-2 mb-0">{service.type + "  "}</p>
                                <img src={service.imgSrc} />
                              </a>
                          </li>
                        );
                      })}
                      <li class="nav-item">
                        <a class="nav-link d-flex inline pl-3 pr-3 pt-2 pb-2" href={"#cart"}>
                          <img src={cart} />
                        </a>
                      </li>
                  </ul>
              </nav>
            </div>
            <div class="orders-form-body" data-spy="scroll" data-target="#navbar-example2" data-offset="0">   
              <div class="row m-0" style={{height:"auto", backgroundColor:"gray",}}>     
                <div class="col-lg-5 order-form" style={{height:"auto", backgroundColor:"white", border: 2 + "px"}}>
                  <div id="bScreens">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
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
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler} id="windows" name="newWindow">
                      <NewWindowsForm 
                        services={this.props.services} 
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />     
                      <button class="btn btn-primary btn-block footer mb-2" type="submit">Add Window(s) to Order</button>                     
                    </form>
                  </div>
                  <div id="rScreens">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler} id="rScreens" name="restoreScreen">
                      <RestoreScreensForm 
                        services={this.props.services}
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />  
                      <button class="btn btn-primary btn-block footer mb-2" type="submit">Add <i>To-Be-Restored</i> Screen(s) to Order</button>
                    </form>
                  </div>
                  <div id="rWindows">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler} id="rWindows" name="restoreWindow">
                      <RestoreWindowsForm 
                        services={this.props.services}
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />  
                      <button class="btn btn-primary btn-block footer mb-2" type="submit">Add <i>To-Be-Restored</i> Window(s) to Order</button>
                    </form>
                  </div>
                  <div id="cGlass">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler} id="cGlass" name="customGlass">
                      <CustomGlassForm 
                        services={this.props.services}
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                      />  
                      <button class="btn btn-primary btn-block footer mb-2" type="submit">Add <i>Custom</i> Glass to Order</button>
                    </form>
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                  </div>
                  <div id="cart" style={{backgroundColor: 'white', borderColor: 'black', borderStyle: 'solid', borderWidth: 2 + 'px'}}>
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
                     {this.cartUI('screens', 0)}
                     {this.cartUI('windows', 1)}
                     {this.cartUI('rScreens', 2)}
                     {this.cartUI('rWindows', 3)}
                     {this.cartUI('cGlass', 4)}
                    </ul>
                  <button class="btn btn-success btn-block footer mb-2" onClick={this.submitOrderHandler}>Place Order</button>
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