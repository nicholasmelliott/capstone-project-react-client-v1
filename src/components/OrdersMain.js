import React from 'react';
import OrderMainCompleteItems from './OrderMainCompleteItems';
import OrderMainPendingItems from './OrderMainPendingItems';

const OrdersMain = ({ orders, loading }) => (
	<div className="orders-main p-md-4">
        <div className="alert alert-info alert-dismissible fade show mt-2 ml-xl-4 mr-xl-4 text-center order-list-alert" role="alert"><strong>Looking to see if your order has been completed? </strong>Check the fields below.
          <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;       </span></button>
        </div>
        <div className="d-none d-lg-block order-list-main">
          <div className="row">
            <div className="col pr-0">
              <div className="complete-header">Completed Orders<img className="ml-2" src="check2-circle.svg"/></div>
              <div className="orders-large-body"> 
                <OrderMainCompleteItems orders={orders} />
              </div>
            </div>
            <div className="col pl-0">  
              <div className="pending-header">Pending Orders<img className="ml-2" src="circle.svg" width="14px" height="14px"/></div>
              <div className="orders-large-body"> 
                <OrderMainPendingItems orders={orders} />
              </div>
            </div>
          </div>
        </div>
        <div className="order-list-main">     
          <nav className="navbar navbar-light bg-light px-3 position-relative justify-content-around d-lg-none" id="navbar-example2" role="tablist">
            <ul className="nav nav-tabs">
              <li className="nav-item"><a className="nav-link" style={{color: "#303030"}} href="#cOrders">Completed Orders</a></li>
              <li className="nav-item"><a className="nav-link" style={{color: "#303030"}} href="#pOrders">Pending Orders</a></li>
            </ul>
          </nav>
          <div className="d-lg-none orders-small-body" data-spy="scroll" data-target="#navbar-example2" data-offset="1">
            <div id="cOrders"> 
              <OrderMainCompleteItems orders={orders} />
            </div>
            <div id="pOrders"> 
              <OrderMainPendingItems orders={orders} />
            </div>
          </div>
        </div>
    </div>    
);


export default OrdersMain;