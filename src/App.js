import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './normalize.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';
import Header from './components/Header';
import OrdersMain from './components/OrdersMain';
import ServicesMain from './components/ServicesMain';


class App extends Component {
  state =  { 
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
    services: [
      {
        type: "Build new screens",
        desc: "Choose the color of your: frame, screen, hardware, etc.",
        imgSrc: "border-outer.svg",
        btn: "Build",
        href: "bScreens"
      },
      {
        type: "Build new windows",
        desc: "Choose the color of your: frame, screen, hardware, etc.",
        imgSrc: "border-all.svg",
        btn: "Build",
        href: "bWindows"
      },
      {
        type: "Restore old screens",
        desc: "Bring your house to life by repairing those old, dirty, torn screens.",
        imgSrc: "layers-fill.svg",
        btn: "Restore",
        href: "rScreens"
      },
      {
        type: "Restore old windows",
        desc: "Defeat the winter's cold air and revamp your old storm windows.",
        imgSrc: "layers-half.svg",
        btn: "Restore",
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
        console.log(orders);
        this.setState({ orders });
      });
  }

  render(){
    const loading = <p> Loading... </p>;

    return(
      <BrowserRouter>
          <div height="70px" />
          <div>
              <Header paths={this.state.navOptions} search={this.getPhotos} />
              <ServicesMain services={this.state.services}/>
              <OrdersMain orders={this.state.orders}/>
              <Switch>
                <Route exact path="/" /> 
                <Route  path="/search/:in" 
                        render={ props => (            
                          (this.state.loading)
                            ? loading
                            : <OrdersMain />
                        )} 
                />
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
