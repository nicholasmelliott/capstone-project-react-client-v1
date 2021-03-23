import React from 'react';
import {ReactComponent as BeeLogo} from '../bee.svg';
import {ReactComponent as SpiderLogo} from '../spider.svg';
import {ReactComponent as BeetleLogo} from '../stag-beetle.svg';

const InsectsInArea = ({ search, insects}) => {
	return (
    <div style={{marginTop: 70 + "px"}}>
        <div style={{backgroundColor: "silver", color: 'darkslategray', height: 80 +"px"}}>
            <h1 class="col ml-3"><strong>Insects in <i>Your</i> Area</strong></h1>
            <hr class="sfShadow" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
        </div>
		<div class="insectMain row">
		  {insects.map((insect,i) => {
            return(
              <a class="insect col-sm-2" style={{color: "darkslategray", textDecoration: "none", borderWidth: 4 + 'px', borderStyle: "solid", borderRadius: 0 + "px", height: 150 + "px"}} href={`https://explorer.natureserve.org${insect.url}`} >  
                <div class="row">
                    <div class="col-sm-8 m-0 pr-0">  
                        <strong style={{color: 'black'}}>{insect.commonName ? insect.commonName.replace(/\w\S*/g, function(txt){
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }) : ""}</strong><br/>
                        <i style={{color: 'darkgray'}}>{insect.sciName}</i>
                    </div>
                    {/* <div class="4">
                        <img src={insect.photo} width="100%" />
                    </div> */}
                  {(()=>{
                      if(insect.commonName){
                          if(insect.commonName.endsWith("Bee")){
                              return (
                                  <div class="col-sm-4 m-0 p-0 pt-3">
                                      <BeeLogo width="70px" height="70px" />
                                  </div>
                              );
                          }else if(insect.commonName.endsWith("Spider")){
                            return (
                                <div class="col-sm-4 m-0 p-0 pt-3" >
                                    <SpiderLogo width="70px" height="70px" />
                                </div>
                            );
                          }else if(insect.commonName.endsWith("Beetle")){
                            return (
                                <div class="col-sm-4 m-0 p-0 pt-3" >
                                    <BeetleLogo width="70px" height="70px" />
                                </div>
                            );
                          }
                      }
                  })()}
                </div>
              </a>  
            );
          })}
		</div>
        <div style={{backgroundColor: "silver", color: 'darkslategray', height: 80 +"px", paddingTop: 15 + "px"}}>
            <hr class="sfShadowBottom  m-0" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
        </div>
        </div>
	);
};

export default InsectsInArea;