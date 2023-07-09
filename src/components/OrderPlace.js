import React, { Component } from 'react';
import NewScreensForm from "./NewScreensForm";
import NewWindowsForm from "./NewWindowsForm";
import RestoreScreensForm from "./RestoreScreensForm";
import RestoreWindowsForm from "./RestoreWindowsForm";
import CustomGlassForm from "./CustomGlassForm";
import cart from "../cartIMGs/cart4.svg";
import arrowUp from "../cartIMGs/chevron-compact-up.svg";
import arrowDown from "../cartIMGs/chevron-compact-down.svg";

class OrderPlace extends Component {
  constructor(props) {
    super(props);
    this.cartRef = React.createRef();
    this.state = {
      arrowImgSrc: arrowUp,
      fractions: [],
      screens: [],
      windows: [],
      rScreens: [],
      rWindows: [],
      cGlass: [],
      newScreen: {
        quantity: '',
        width: [
          {
            int: '',
            decimals: ''
          }
        ],
        height: [
          {
            int: '',
            decimals: ''
          }
        ],
        depth: [
          {
            int: '',
            decimals: ''
          }
        ],
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist:''
          }
        ],
        sType: ''
      },
      newWindow: {
        quantity: '',
        width: [
          {
            int: '',
            decimals: ''
          }
        ],
        height: [
          {
            int: '',
            decimals: ''
          }
        ],
        depth: [
          {
            int: '',
            decimals: ''
          }
        ],
        fType: '',
        fColor: '',
        hardware: [
          {
            type: '',
            fromLoc: '',
            dist: ''
          }
        ],
        wMaterial: ''
      },
      restoreScreen: {
        quantity: '',
        width: [
          {
            int: '',
            decimals: ''
          }
        ],
        height: [
          {
            int: '',
            decimals: ''
          }
        ],
        depth: [
          {
            int: '',
            decimals: ''
          }
        ],
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
      restoreWindow: {
        quantity: '',
        width: [
          {
            int: '',
            decimals: ''
          }
        ],
        height: [
          {
            int: '',
            decimals: ''
          }
        ],
        depth: [
          {
            int: '',
            decimals: ''
          }
        ],
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
      customGlass: {
        quantity: '',
        width: [
          {
            int: '',
            decimals: ''
          }
        ],
        height: [
          {
            int: '',
            decimals: ''
          }
        ],
        depth: [
          {
            int: '',
            decimals: ''
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

  mergeProducts = () => {
    const prods = [
      this.state.screens,
      this.state.windows,
      this.state.rScreens,
      this.state.rWindows,
      this.state.cGlass
    ];
    const mergedProds = [];
    prods.forEach(prod => {
      if(prod){
        prod.forEach(subProd => {
          mergedProds.push(subProd);
        })
      }
    });
    console.log(mergedProds);
    return mergedProds;
  }

  submitOrderHandler = (event) => {
    event.preventDefault();
    const prods = this.mergeProducts();
    fetch(`${this.props.backEndUrl}/orders`, {
     method: 'POST',
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     body:  JSON.stringify(prods) 
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

  submitHandler = (serviceNum, event) => {
    const totalProd = event.target.id;
    const prod = event.target.name;
  
    event.preventDefault();
    this.setState(prevState => ({
        [totalProd]: [
          ...prevState[totalProd],
          {
            user: {
              fName: "Guest",
              lName:  Math.floor(Math.random()  * (100000 - 10000) + 10000).toString()
            },
            product: this.props.services[serviceNum].product,
            service: this.props.services[serviceNum].service,
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
    <div className="form-group row"> 
      <div className="col-12">
        <label className="mt-2" htmlFor={`${prod}-${list}`}>Please select a quantity:</label>
        <select className="form-control" id={`${prod}-${list}`} name="quantity" onChange={this.changeHandler} required>
          {(()=>{
            let opts = [];
            for(let i = 0; i <= 30; i++){
              if(i === 0){
                opts.push(<option key={i} value="">...</option>);
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
      <div className="form-group col"> 
          <div className="input-group">
            <input className="form-control" id={`${prod}-${list}`} name="int" value={this.state[prod][list][0].int} type="number" min="0" onChange={this.handleListChanges.bind(this, 0, list)}/>
            <select className="form-control" name="decimals" value={this.state[prod][list][0].decimals} onChange={this.handleListChanges.bind(this, 0, list)}>
              <option value="">Fractional Inches... </option>
              {this.state.fractions.map((frac, i)=>{
                return(
                  <option key={i} value={frac.decimal}>{frac.fraction}</option>
                );
              })}
            </select>
          </div>
          <label htmlFor={prod + "-" + list}>{list.charAt(0).toUpperCase() + list.slice(1)}</label>
        </div>
   );
 }

 //generates hardware field where hardware items can be dynamically added or removed
 hardwareUI = (prod, list) => {
  return( 
    <div>
      {this.state[prod][list].map((val, i) => 
        <div className="p-3 mt-3" id={i} key={i} style={{backgroundColor: '#f8f9fa'}}>
          <label htmlFor={`${prod}-${list}-type`}>Hardware #{i+1}</label>
          <div className="form-group">
             <label className="mt-2" htmlFor={`${prod}-${list}-type`}>Please select the hardware type:</label>
             <select className="form-control" name="type" id={`${prod}-${list}-type`} value={val.type||''} onChange={this.handleListChanges.bind(this, i, list)}>
               <option value="">...</option>
               <option value="plunger">Plunger</option>
               <option value="knife latch">Knife Latch</option>
               <option value="pull tab">Pull Tab</option>
               <option value="tension spring">Tension Spring</option>
             </select>
           </div>
           <div className="form-group mt-auto">
             <label className="mt-2" htmlFor={`${prod}-${list}-fromLoc`}>Please select the start location:</label>
             <select className="form-control mt-auto" name="fromLoc" id={`${prod}-${list}-fromLoc`} value={val.fromLoc||''} onChange={this.handleListChanges.bind(this, i, list)}>
               <option value="">...</option>
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
           <div className="form-group mt-auto">
              <label className="mt-2" htmlFor={`${prod}-${list}-dist`}>Please select the distance from start location:</label>   
              <input className="form-control" name="dist" type="number" min="0" value={val.dist||""} id={`${prod}-${list}-dist`} onChange={this.handleListChanges.bind(this, i, list)}/> 
           </div>
          <button className="btn btn-outline-secondary btn-block" width="100%" type="button" id={i}  onClick={this.removeItemClick.bind(this, i, prod, list)}>Remove Hardware Item (<strong>-</strong>)</button> 
        </div>
      )}
      <div className="pl-3 pr-3 mt-3">
        <button className="btn btn-secondary btn-block footer mt-3" type="button" id="{i}" onClick={this.addItemClick.bind(this, prod, list)}>Add New Hardware Item (<strong>+</strong>)</button>  
      </div>
    </div>
  )   
 }

 cartItemUI = (prods, serviceNum) => {
   const allDim = (prods, prod) => {
     if(prods !== 'cGlass'){
      return `${(parseInt(prod.details.width[0].int) ? parseInt(prod.details.width[0].int) : 0) + (prod.details.width[0].decimals ? parseFloat(prod.details.width[0].decimals): 0)} x 
      ${(parseInt(prod.details.height[0].int) ? parseInt(prod.details.height[0].int) : 0) + (prod.details.height[0].decimals ? parseFloat(prod.details.height[0].decimals): 0)} x 
      ${(parseInt(prod.details.depth[0].int) ? parseInt(prod.details.depth[0].int) : 0) + (prod.details.depth[0].decimals ? parseFloat(prod.details.depth[0].decimals): 0)}`;  
     }else{
      return `${(parseInt(prod.details.width[0].int) ? parseInt(prod.details.width[0].int) : 0) + (prod.details.width[0].decimals ? parseFloat(prod.details.width[0].decimals): 0)} x 
      ${(parseInt(prod.details.height[0].int) ? parseInt(prod.details.height[0].int) : 0) + (prod.details.height[0].decimals ? parseFloat(prod.details.height[0].decimals): 0)}`;
     }
   }
   return(
     <div>
       {this.state[prods].map((prod, i) => {
         return(
         <li key={i} className="list-group-item">
           <div className="row">
             <div className="col-3">
               <h6>{prod.details.quantity}</h6>
             </div>
             <ul className="list-group col-3 p-0">
               <li className="list-group-item  p-0">
                 <strong>{this.props.services[serviceNum].product}</strong> 
               </li>
               <li className="list-group-item  p-0">
                 {allDim(prods, prod)}
               </li>
               <li className="list-group-item  p-0">
                 {prod.details.fColor} 
               </li>
               <li className="list-group-item  p-0">
                 {prod.details.fType} 
               </li>
               <li className="list-group-item  p-0">
                 {prod.details.material} 
               </li>
               {(()=>{
                 if(prods !== 'cGlass'){
                  prod.details.hardware.map((hardware, i) => { 
                    return(
                      <li key={i} className="list-group-item p-0">
                        {hardware.type + " " + hardware.fromLoc + " " + hardware.dist}
                      </li>
                    );
                  })
                 }
                 
               })()}
             </ul>
             <div className="col-3 content-align-center">
                <h5 className="row ml-1">{this.props.services[serviceNum].service}</h5>
                <img className="row ml-1" height="50%" src={this.props.services[serviceNum].imgSrc} />
             </div> 
             <div className="col-3">
               <h5>{this.props.services[serviceNum].price}</h5>
             </div>
           </div>
         </li>
         )
       })}
     </div>
   );
 }

 // Creates complete cart ui. Size (large or small) determines max height of cart   
 cartUI = (size) => {
   return(
    <div>
      <div className="cart-header d-none d-lg-block">
        <h1>CART</h1>
      </div>
      <div className="cart-body">
        <ul className="list-group">
          <li className="list-group-item  p-0">
            <div className="row">
              <h6 className="col-3">Quantity</h6>
              <h6 className="col-3">Product</h6>
              <h6 className="col-3">Service</h6>
              <h6 className="col-3">Price</h6>
            </div>
          </li>
        </ul>
        <ul className={`ul-${size}`}>
         {this.cartItemUI('screens', 0)}
         {this.cartItemUI('windows', 1)}
         {this.cartItemUI('rScreens', 2)}
         {this.cartItemUI('rWindows', 3)}
         {this.cartItemUI('cGlass', 4)}
        </ul>
        <button className="btn btn-success btn-block footer mb-2 mt-3" onClick={this.submitOrderHandler}>Place Order</button>
      </div>  
    </div>
   );
 }

 cartArrowDisplay = () => {     
  if(this.cartRef.current.className === "collapse"){
    this.setState({
      arrowImgSrc: arrowDown
    })
  }else{
    this.setState({
      arrowImgSrc: arrowUp
    })
  }
 }

 componentDidMount(){
   this.buildFractions();
 }

  render(){
    const itemTot = 
      this.state.screens.length
      + this.state.windows.length
      + this.state.rScreens.length
      + this.state.rWindows.length
      + this.state.cGlass.length;

    return(
	    <div className="orders-wrapper">
        <div className="row m-0 orders-list-wrapper">
          <div className="col-lg-8 orders-body">
            <div className="order-list-main">     
              <nav className="navbar navbar-light bg-light px-3 position-relative justify-content-around" id="navbar-example2" role="tablist">
                  <ul className="nav nav-tabs">
                      {/* Creates nav items for order form. */}
                      {this.props.services.map((service, i)=>{
                        return (
                          <li className="nav-item" key={i}>
                              <a className="nav-link d-flex inline pl-3 pr-3 pt-2 pb-2" href={"#" + service.href}>
                                <p className="d-none d-lg-block mr-2 mb-0">{service.type + "  "}</p>
                                <img src={service.imgSrc} />
                              </a>
                          </li>
                        );
                      })}
                  </ul>
              </nav>
            </div>
            <div className="orders-form-body" data-spy="scroll" data-target="#navbar-example2" data-offset="0">   
              <div className="row m-0" style={{height:"auto", backgroundColor:"gray",}}>     
                <div className="col-lg order-form" style={{height:"auto", backgroundColor:"white", border: 2 + "px"}}>
                  <div id="bScreens">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler.bind(this, 0)} id="screens" name="newScreen">
                      <NewScreensForm 
                        services={this.props.services} 
                        change={this.changeHandler} 
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />
                      <button className="btn btn-primary btn-block footer mb-2" type="submit">Add Screen(s) to Order</button>
                    </form>
                  </div>
                  <div id="bWindows">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler.bind(this, 1)} id="windows" name="newWindow">
                      <NewWindowsForm 
                        services={this.props.services} 
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />     
                      <button className="btn btn-primary btn-block footer mb-2" type="submit">Add Window(s) to Order</button>                     
                    </form>
                  </div>
                  <div id="rScreens">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler.bind(this, 2)} id="rScreens" name="restoreScreen">
                      <RestoreScreensForm 
                        services={this.props.services}
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />  
                      <button className="btn btn-primary btn-block footer mb-2" type="submit">Add <i>To-Be-Restored</i> Screen(s) to Order</button>
                    </form>
                  </div>
                  <div id="rWindows">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler.bind(this, 3)} id="rWindows" name="restoreWindow">
                      <RestoreWindowsForm 
                        services={this.props.services}
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                        hardwareUI={this.hardwareUI}
                      />  
                      <button className="btn btn-primary btn-block footer mb-2" type="submit">Add <i>To-Be-Restored</i> Window(s) to Order</button>
                    </form>
                  </div>
                  <div id="cGlass">
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                    <form onSubmit={this.submitHandler.bind(this, 4)} id="cGlass" name="customGlass">
                      <CustomGlassForm 
                        services={this.props.services}
                        change={this.changeHandler}
                        quantityUI={this.quantityUI}
                        dimensionUI={this.dimensionUI}
                      />  
                      <button className="btn btn-primary btn-block footer mb-2" type="submit">Add <i>Custom</i> Glass to Order</button>
                    </form>
                    <hr style={{borderWidth: 2 + "px", borderColor: "black"}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cart displayed on medium and below displays*/}
          <div className="fixed-bottom d-lg-none"  style={{backgroundColor: 'rgba(255,255,255,0)'}}>
            <nav className="navbar navbar-light bg-light row">
              <div className="col-4 d-flex justify-content-center"/>
              <button className="navbar-toggler col-4" type="button" onClick={this.cartArrowDisplay} data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <img className="m-1" src={cart}/>
                <img className="m-1" src={this.state.arrowImgSrc}/>
              </button>
              <p className="col-4 d-flex justify-content-end m-0">
                {
                  itemTot != 0 ?  itemTot + " Item(s)" : ""
                }</p>
            </nav>
            <div className="collapse" ref={this.cartRef} id="navbarToggleExternalContent">
              {this.cartUI('small')}
            </div>
          </div>
          {/* Cart displayed on large and above displays*/}
          <div className="col-4 pl-0.5 mt-3 pr-0 d-none d-lg-block" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
            {this.cartUI('large')}
          </div>
        </div>
      </div> 
      );
    }
  }


export default OrderPlace;