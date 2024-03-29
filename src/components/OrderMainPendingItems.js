import React from 'react';

const OrderMainPendingItems = ({ orders , loading }) => (
	<div>
		{orders.map((order) => {
			if(!order.complete){
				return(
					<div key={order.id} className="d-flex pending-item">
						<div className="col-9">
							<div className="row ml-1 name-title">
								{(()=>{
									if(order.orders){
										return(
											<h4 className="font-weight-bold ml-2 mt-3">
												{order.orders.fName + " " + order.orders.lName}
											</h4>
										)
									}else if(order.companyOrders){
										return(
											<h4 className="font-weight-bold ml-2 mt-3">
												{order.companyOrders.name}
											</h4>
										)
									}else{
										return(
											<h4 className="font-weight-bold ml-2 mt-3">
												NO NAME
											</h4>
										)	
									}
								})()}
							</div>
							<div className="row ml-2 mt-2">
  								<ul className="list-group" style={{width:100 + "%"}}> 
									{(()=>{
                                        let totalProducts = 0;
										if(order.products){
											const sizeTypeLi = 
												order.products.map((product)=>{
                                                    totalProducts += product.quantity
													if(product.Dimension){
														return(
															<li key={product.id} className="list-group-item p-0 d-flex inline-block">
  																<span className="col-1 font-weight-bold text-center m-0 p-0">
																	{product.quantity}
																</span>
  																<span className="col-8 m-0 p-0 text-left text-uppercase">
																	{"  -  " + product.Dimension.width + "'' x " + product.Dimension.height + "''" + " " + product.type}
																</span>
  																<span className="col-3 font-weight-bold m-0 p-0 text-left text-uppercase" style={{color:"gray"}}>
																	{product.service}
																</span>
								  							</li>
														)
													}
												});
											return(
												<>
													{sizeTypeLi} 
													<li className="list-group-item p-0 d-flex inline-block">
														<h6 className="col-1 p-0 font-italic font-weight-bold">
															{totalProducts}
														</h6>
														<span className="col-3 p-0 font-italic text-left">Total Items</span>
													</li> 
												</>
											)
										}
									})()} 
								</ul>
							</div>
						</div>
						<div className="col-3"> <img src="circle.svg" width="auto" height="60px"/>
							<h6 className="mt-1" style={{color:"gray"}}>Order Pending...</h6>
						</div>
					</div>
				);
			}
		})}
	</div>
);

export default OrderMainPendingItems;