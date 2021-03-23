import React from 'react';
import {ReactComponent as BeeLogo} from '../bee.svg';
import {ReactComponent as SpiderLogo} from '../insectIMGs/spider-arthropod-animal-silhouette-1.svg';
import {ReactComponent as BeetleLogo} from '../insectIMGs/beetle-shape.svg';
import {ReactComponent as MothLogo} from '../insectIMGs/moth-insect-shape.svg';
import {ReactComponent as DragonFlyLogo} from '../insectIMGs/dragon-fly-insect-animal-shape.svg';
import {ReactComponent as AntLogo} from '../insectIMGs/ant.svg';

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
              <a class="insect col-xl-2" style={{color: "darkslategray", textDecoration: "none", borderWidth: 4 + 'px', borderStyle: "solid", borderRadius: 0 + "px", height: 150 + "px"}} href={`https://explorer.natureserve.org${insect.url}`} >  
                <div class="row">
                    <div class="col-8 m-0 pr-0">  
                        <strong style={{color: 'black'}}>{insect.commonName ? insect.commonName.replace(/\w\S*/g, function(txt){
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }) : ""}</strong><br/>
                        <i style={{color: 'darkgray'}}>{insect.sciName}</i>
                    </div>
                    {(()=>{
                        if(insect.photo != ""){
                            return(
                                <div class="insectPhoto col-4 p-2">
                                    <img src={insect.photo} width="125px" height="125px" style={{borderRadius: 50 + "%"}}/>
                                </div>
                            );
                        }else{
                            if(insect.commonName){
                                if(/\bBee\b/.test(insect.commonName)){
                                    return (
                                        <div class="insectLogo col-4 m-0 p-0 pt-3">
                                            <BeeLogo width="70px" height="70px" />
                                        </div>
                                    );
                                }else if(/\bSpider\b/i.test(insect.commonName)){
                                  return (
                                      <div class="insectLogo col-4 m-0 p-0 pt-3" >
                                          <SpiderLogo width="70px" height="70px" />
                                      </div>
                                  );
                                }else if(/\bBeetle\b/i.test(insect.commonName)){
                                  return (
                                      <div class="insectLogo col-4 m-0 p-0 pt-3" >
                                          <BeetleLogo width="70px" height="70px" />
                                      </div>
                                  );
                                }else if(/\bMoth\b/i.test(insect.commonName)){
                                    return (
                                        <div class="insectLogo col-4 m-0 p-0 pt-3" >
                                            <MothLogo width="70px" height="70px" />
                                        </div>
                                    );
                                }else if(/\bDragonfly\b/i.test(insect.commonName)){
                                    return (
                                        <div class="insectLogo col-4 m-0 p-0 pt-3" >
                                            <DragonFlyLogo width="70px" height="70px" />
                                        </div>
                                    );
                                }else if(/\bAnt\b/i.test(insect.commonName)){
                                    return (
                                        <div class="insectLogo col-4 m-0 p-0 pt-3" >
                                            <AntLogo width="70px" height="70px" />
                                        </div>
                                    );
                                  }
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