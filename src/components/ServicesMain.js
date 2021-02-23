import React from 'react';

const ServicesMain = ({ services , loading }) => (
	<div>
		<div class="alert alert-dark alert-dismissible fade show ml-xl-4 ml-xl-4 text-center services-alert" role="alert"><strong>Needing a service? </strong>Click a service below to learn more and place an order.
      <button class="close" type="button" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times; </span>
      </button>
    </div>
    <div class="d-none d-md-block services-main">
        <div class="d-flex">
          {services.map((service)=>{
            return(
              <div class="card col" width="18rem">
               <img class="card-img-top mt-2" src={service.imgSrc} style={{fill: "#EBEBEB"}} alt="Card image cap" />
               <div class="card-body pl-0 pr-0">
                <h5 class="card-title">{service.type}</h5>
                <p class="card-text">{service.desc}</p>
               </div>
               <div class="card-footer text-muted service-card-footer"><a class="btn btn-outline-secondary font-weight-bold btn-md btn-block footer" href="/orders">{service.btn}</a></div>
            </div>
            );
          })} 
        </div>
    </div>
    <div class="d-md-none services-small">
      <div class="d-flex justify-content-around flex-wrap">
        {services.map((service)=>{
          return (
            <div class="col-4 content-justify-center mt-2">
              <a href="/orders">
                <img src={service.imgSrc} alt="Card image cap" width="80px" height="auto" />
                <p>
                  {service.type}
                </p>
              </a>  
            </div>
          );
        })}
      </div>
    </div>
	</div>	
);

export default ServicesMain;