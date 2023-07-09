import React from 'react';

const ServicesMain = ({ services , loading }) => (
	<div>
    <div className="d-none d-md-block services-main p-4">
        <div className="d-flex">
          {services.map((service)=>{
            return(
              <div className="card col" width="18rem" style={{backgroundColor: 'rgba(255,255,255,0)'}}>
                <div className="row p-3">
                  <img className="col-12 card-img-top mt-2" src={service.imgSrc} alt="Card image cap" />
                </div>
               <div className="card-body pl-0 pr-0">
                <h5 className="card-title">{service.type}</h5>
                <p className="card-text">{service.desc}</p>
               </div>
               <div className="card-footer text-muted service-card-footer">
                 <a className="btn btn-outline-secondary font-weight-bold btn-md btn-block footer service-btn" href={`/orders#${service.href}`}>
                   {service.btn}
                 </a>
               </div>
            </div>
            );
          })} 
        </div>
    </div>
    <div className="d-md-none services-small">
      <div className="d-flex justify-content-around flex-wrap">
        {services.map((service)=>{
          return (
            <div className="col-4 content-justify-center mt-2 service">
              <a href={`/orders#${service.href}`}>
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