import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './normalize.css';
import './style.css';
import Header from './components/Header';
import OrdersMain from './components/OrdersMain';
import ServicesMain from './components/ServicesMain';
import OrderMainPendingItems from './components/OrderMainPendingItems';
import OrderPlace from './components/OrderPlace';
import InsectsInArea from './components/InsectsInArea';
import backImg from './screenCloseup.JPG';
import bScreenImg from './serviceIMGs/border-outer.svg';
import bWindowImg from './serviceIMGs/border-all.svg';
import rScreenImg from './serviceIMGs/layers-fill.svg';
import rWindowImg from './serviceIMGs/layers-half.svg';
import cGlassImg from './serviceIMGs/columns-gap.svg';



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
    weatherJSON: '',
    insects: [],
    USState: '',
    backEndUrl: process.env.REACT_APP_BACKEND_URL,
    // backEndUrl: "",
    NatureServeCit: <div className="fs-8"><strong>Info Source: </strong>NatureServe. {new Date().getFullYear()}. NatureServe Explorer [web application]. <br/>NatureServe, Arlington, Virginia. <br /> Available https://explorer.natureserve.org/. (Accessed: {`${new Date().getMonth() + 1} ${new Date().getDate()}, ${new Date().getFullYear()}`}).</div>,
    services: [
      {
        id: "s1",
        type: "Build New Screens",
        desc: "Choose the color of your: frame, screen, hardware, etc.",
        imgSrc: bScreenImg,
        btn: "Build New",
        href: "bScreens",
        service: "Build",
        product: "Screen",
        price: "N/A"
      },
      {
        id: "s2",
        type: "Build New Windows",
        desc: "Choose the color of your: frame, screen, hardware, etc.",
        imgSrc: bWindowImg,
        btn: "Build New",
        href: "bWindows",
        service: "Build",
        product: "Window",
        price: "N/A"
      },
      {
        id: "s3",
        type: "Restore Old Screens",
        desc: "Bring your house to life by repairing those old, dirty, torn screens.",
        imgSrc: rScreenImg,
        btn: "Restore Old",
        href: "rScreens",
        service: "Repair",
        product: "Screen",
        price: "N/A"
      },
      {
        id: "s4",
        type: "Restore Old Windows",
        desc: "Defeat the winter's cold air and revamp your old storm windows.",
        imgSrc: rWindowImg,
        btn: "Restore Old",
        href: "rWindows",
        service: "Repair",
        product: "Window",
        price: "N/A"
      },
      {
        id: "s5",
        type: "Custom Glass",
        desc: "Need glass? We can cut to size or shape depending on your needs.",
        imgSrc: cGlassImg,
        btn: "Custom Glass",
        href: "cGlass",
        service: "Cut Glass",
        product: "Glass",
        price: "N/A"
      }
    ]
  }

  componentWillMount() {
    document.body.style.backgroundImage = `url(${backImg})`;
    console.log("BACKGROUND IMAGE:" + backImg);
  }
  

  componentDidMount() {
    // Sends browser location to server and then fetches weather
    const sendLocation = async (pos) => {
      console.log(pos.coords);
      try {
        const rawResponse = await fetch(`${this.state.backEndUrl}/`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({longitude: pos.coords.longitude, latitude: pos.coords.latitude})
        });
  
        const data = await rawResponse.json();
        this.setState({ weatherJSON: data });
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };
  
    navigator.geolocation.getCurrentPosition(sendLocation);
  
    // Fetching initial insects for insects page
    (async () => {
      try {
        this.setState({ USState: "ALABAMA", loading: true });
        const rawResponse = await fetch(`${this.state.backEndUrl}/insects`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({state: "AL"})
        });
        const content = await rawResponse.json();
        this.setState({ insects: content, loading: false });
      } catch (error) {
        console.error('Error fetching insects:', error);
      }
    })();
  
    // Fetch orders
    fetch(`${this.state.backEndUrl}/orders`)
      .then(res => res.json())
      .then(orders => {
        this.setState({ orders });
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }
  

    onSubmit = async (event) => {
      this.setState({ USState: event.target[event.target.selectedIndex].text, loading: true });
      const rawResponse = await fetch(`${this.state.backEndUrl}/insects`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({state: event.target.value})
      });
      const content = await rawResponse.json();
      this.setState({ insects: content, loading: false});
    }

  render(){
    const loading = <p> Loading... </p>;

    return(
      <BrowserRouter>
          <div>
              <Header paths={this.state.navOptions} search={this.getPhotos} weather={this.state.weatherJSON} />
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
                      <OrderPlace services={this.state.services} cart={this.state.cart} backEndUrl={this.state.backEndUrl}/>
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
                <Route path="/insects" render={ () => (
                  <>
                    <InsectsInArea insects={this.state.insects} submit={this.onSubmit} USState={this.state.USState} loading={this.state.loading} NatureServeCit={this.state.NatureServeCit}/>
                  </>
                )}/>
              </Switch>
          </div>
          <footer className="p-2">
            {/* <AmplifySignOut /> */}
            {/* <a href='https://www.freepik.com/vectors/nature'>Nature vector created by macrovector - www.freepik.com</a> */}
            <div className="font-italic"><strong>Insect Icons: </strong>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div className="font-italic"><strong>Insect Info: </strong>NatureServe. {new Date().getFullYear()}. NatureServe Explorer [web application]. NatureServe, Arlington, Virginia. Available https://explorer.natureserve.org/. (Accessed: {`${new Date().getMonth() + 1} ${new Date().getDate()}, ${new Date().getFullYear()}`}).</div>
            <div className="font-italic"><strong>Insect Photos: </strong>This product uses the Flickr API but is not endorsed or certified by SmugMug, Inc.</div>
          </footer>
        </BrowserRouter>
        
    );
  }
}

// export default withAuthenticator(App);
export default App;
