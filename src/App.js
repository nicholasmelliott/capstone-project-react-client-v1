import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './normalize.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import OrdersMain from './components/OrdersMain';
import ServicesMain from './components/ServicesMain';
import OrderMainPendingItems from './components/OrderMainPendingItems';
import OrderPlace from './components/OrderPlace';
import Login from './components/Login';
import InsectsInArea from './components/InsectsInArea';


class App extends Component {
  state =  { 
    //orders array prevents error caused by lack of conditional checking if orders are being served in OrderMainPendingItems component
    orders: [],
    navOptions: [
      'home', 
      'services', 
      'contact',
      'login',
      'signup'
    ],
    navOnePhotos : [],
    navTwoPhotos: [],
    navThreePhotos: [],
    searched: [],
    loading: false,
    weatherIMG: '',
    insects: [],
    services: [
      {
        type: "Build New Screens",
        desc: "Choose the color of your: frame, screen, hardware, etc.",
        imgSrc: "border-outer.svg",
        btn: "Build New",
        href: "bScreens"
      },
      {
        type: "Build New Windows",
        desc: "Choose the color of your: frame, screen, hardware, etc.",
        imgSrc: "border-all.svg",
        btn: "Build New",
        href: "bWindows"
      },
      {
        type: "Restore Old Screens",
        desc: "Bring your house to life by repairing those old, dirty, torn screens.",
        imgSrc: "layers-fill.svg",
        btn: "Restore Old",
        href: "rScreens"
      },
      {
        type: "Restore Old Windows",
        desc: "Defeat the winter's cold air and revamp your old storm windows.",
        imgSrc: "layers-half.svg",
        btn: "Restore Old",
        href: "rWindows"
      },
      {
        type: "Custom Glass",
        desc: "Need glass? We can cut to size or shape depending on your needs.",
        imgSrc: "columns-gap.svg",
        btn: "Custom Glass",
        href: "cGlass"
      }
    ]
  }

  componentDidMount() {
    fetch('/orders')
      .then(res => res.json())
      .then(orders => {
        this.setState({ orders });
      });
  
    fetch('/weather')
      .then(res => {
        res.json()
          .then(data => {
            this.setState({ weatherIMG: data.weatherIMG });
          })
      });

      fetch('/insects')
      .then(res => {
        res.json()
          .then(data => {
            console.log(data);
            this.setState({ insects: data});
          })
      });
    }

  render(){
    const loading = <p> Loading... </p>;

    return(
      <BrowserRouter>
          <div>
              <Header paths={this.state.navOptions} search={this.getPhotos} weather={this.state.weatherIMG} />
              <Switch>
                <Route exact path="/" render={ () => (           
                    <> 
                      <ServicesMain services={this.state.services}/>
                      <OrdersMain orders={this.state.orders}/>
                    </>
                  )}
                /> 
                <Route exact path="/services" render={ () => (           
                    <> 
                      <ServicesMain services={this.state.services}/>
                    </>
                  )}
                /> 
                <Route exact path="/orders" render={ () => (           
                    <> 
                      <OrderPlace services={this.state.services} cart={this.state.cart}/>
                    </>
                  )}
                /> 
                <Route  path="/search/:in" 
                        render={ props => (            
                          (this.state.loading)
                            ? loading
                            : <OrdersMain />
                        )} 
                />
                <Route path="/login" component={Login} />
                <Route path="/insects" render={ () => (
                  <>
                    <InsectsInArea insects={this.state.insects} />
                  </>
                )}/>
              </Switch>
          </div>
          <footer>
            {/* <a href='https://www.freepik.com/vectors/nature'>Nature vector created by macrovector - www.freepik.com</a> */}
            <div style={{color: 'darkgray'}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </footer>
        </BrowserRouter>
        
    );
  }
}

export default App;
