import React from 'react';

const ServicesMain = ({ services , loading }) => (
	<div>
    <div class="d-none d-md-block services-main">
        <div class="d-flex">
          {services.map((service)=>{
            return(
              <div class="card col" width="18rem" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
               <img class="card-img-top mt-2" src={service.imgSrc} alt="Card image cap" />
               <div class="card-body pl-0 pr-0">
                <h5 class="card-title">{service.type}</h5>
                <p class="card-text">{service.desc}</p>
               </div>
               <div class="card-footer text-muted service-card-footer">
                 <a class="btn btn-outline-secondary font-weight-bold btn-md btn-block footer service-btn" href={`/orders#${service.href}`}>
                   {service.btn}
                 </a>
               </div>
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
              <a href={`/orders#${service.href}`}>
                <img src={service.imgSrc} alt="Card image cap" width="80px" height="auto" />
                <p style={{color: '#f8f9fa'}}>
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