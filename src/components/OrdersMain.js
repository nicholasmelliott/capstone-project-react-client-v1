import React from 'react';
import OrderMainCompleteItems from './OrderMainCompleteItems';
import OrderMainPendingItems from './OrderMainPendingItems';

const OrdersMain = ({ orders, loading }) => (
	<div class="orders-main p-md-4">
        <div class="alert alert-info alert-dismissible fade show mt-2 ml-xl-4 mr-xl-4 text-center order-list-alert" role="alert"><strong>Looking to see if your order has been completed? </strong>Check the fields below.
          <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;       </span></button>
        </div>
        <div class="d-none d-lg-block order-list-main">
          <div class="row">
            <div class="col pr-0">
              <div class="complete-header">Completed Orders<img class="ml-2" src="check2-circle.svg"/></div>
              <div class="orders-large-body"> 
                <OrderMainCompleteItems orders={orders} />
              </div>
            </div>
            <div class="col pl-0">  
              <div class="pending-header">Pending Orders<img class="ml-2" src="circle.svg" width="14px" height="14px"/></div>
              <div class="orders-large-body"> 
                <OrderMainPendingItems orders={orders} />
              </div>
            </div>
          </div>
        </div>
        <div class="order-list-main">     
          <nav class="navbar navbar-light bg-light px-3 position-relative justify-content-around d-lg-none" id="navbar-example2" role="tablist">
            <ul class="nav nav-tabs">
              <li class="nav-item"><a class="nav-link" style={{color: "#303030"}} href="#cOrders">Completed Orders</a></li>
              <li class="nav-item"><a class="nav-link" style={{color: "#303030"}} href="#pOrders">Pending Orders</a></li>
            </ul>
          </nav>
          <div class="d-lg-none orders-small-body" data-spy="scroll" data-target="#navbar-example2" data-offset="1">
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