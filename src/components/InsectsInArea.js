import React from 'react';
import BeeLogo from '../insectIMGs/bee-silo.svg';
import SpiderLogo from '../insectIMGs/spider-arthropod-animal-silhouette-1.svg';
import BeetleLogo from '../insectIMGs/beetle-shape.svg';
import MothLogo from '../insectIMGs/moth-insect-shape.svg';
import DragonFlyLogo from '../insectIMGs/dragon-fly-insect-animal-shape.svg';
import AntLogo from '../insectIMGs/ant.svg';
import GrassHopperLogo from '../insectIMGs/grasshopper-insect-side-view-shape.svg';
import FlyLogo from '../insectIMGs/fly-shape.svg';
import MayFlyLogo from '../insectIMGs/sphinx-insect-shape.svg';
import ButterFlyLogo from '../insectIMGs/butterfly-insect-animal-shape.svg';

const InsectsInArea = ({ search, insects, submit, USState, loading, NatureServeCit}) => {
    
    const states = [
        { name: 'ALABAMA', abbreviation: 'AL'},
        { name: 'ALASKA', abbreviation: 'AK'},
        { name: 'ARIZONA', abbreviation: 'AZ'},
        { name: 'ARKANSAS', abbreviation: 'AR'},
        { name: 'CALIFORNIA', abbreviation: 'CA'},
        { name: 'COLORADO', abbreviation: 'CO'},
        { name: 'CONNECTICUT', abbreviation: 'CT'},
        { name: 'DELAWARE', abbreviation: 'DE'},
        { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
        { name: 'FLORIDA', abbreviation: 'FL'},
        { name: 'GEORGIA', abbreviation: 'GA'},
        { name: 'HAWAII', abbreviation: 'HI'},
        { name: 'IDAHO', abbreviation: 'ID'},
        { name: 'ILLINOIS', abbreviation: 'IL'},
        { name: 'INDIANA', abbreviation: 'IN'},
        { name: 'IOWA', abbreviation: 'IA'},
        { name: 'KANSAS', abbreviation: 'KS'},
        { name: 'KENTUCKY', abbreviation: 'KY'},
        { name: 'LOUISIANA', abbreviation: 'LA'},
        { name: 'MAINE', abbreviation: 'ME'},
        { name: 'MARYLAND', abbreviation: 'MD'},
        { name: 'MASSACHUSETTS', abbreviation: 'MA'},
        { name: 'MICHIGAN', abbreviation: 'MI'},
        { name: 'MINNESOTA', abbreviation: 'MN'},
        { name: 'MISSISSIPPI', abbreviation: 'MS'},
        { name: 'MISSOURI', abbreviation: 'MO'},
        { name: 'MONTANA', abbreviation: 'MT'},
        { name: 'NEBRASKA', abbreviation: 'NE'},
        { name: 'NEVADA', abbreviation: 'NV'},
        { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
        { name: 'NEW JERSEY', abbreviation: 'NJ'},
        { name: 'NEW MEXICO', abbreviation: 'NM'},
        { name: 'NEW YORK', abbreviation: 'NY'},
        { name: 'NORTH CAROLINA', abbreviation: 'NC'},
        { name: 'NORTH DAKOTA', abbreviation: 'ND'},
        { name: 'OHIO', abbreviation: 'OH'},
        { name: 'OKLAHOMA', abbreviation: 'OK'},
        { name: 'OREGON', abbreviation: 'OR'},
        { name: 'PENNSYLVANIA', abbreviation: 'PA'},
        { name: 'RHODE ISLAND', abbreviation: 'RI'},
        { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
        { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
        { name: 'TENNESSEE', abbreviation: 'TN'},
        { name: 'TEXAS', abbreviation: 'TX'},
        { name: 'UTAH', abbreviation: 'UT'},
        { name: 'VERMONT', abbreviation: 'VT'},
        { name: 'VIRGINIA', abbreviation: 'VA'},
        { name: 'WASHINGTON', abbreviation: 'WA'},
        { name: 'WEST VIRGINIA', abbreviation: 'WV'},
        { name: 'WISCONSIN', abbreviation: 'WI'},
        { name: 'WYOMING', abbreviation: 'WY' }
    ];
    //Flickr citation for insect image
    const FlickrCit = (insect) =>{
        return(
            <p style={{fontSize: 8 + "px"}}><strong>Photo Source: </strong><a href={insect.photo}>{insect.photo}</a></p>
        );
    } 
    const NatServeCit = (insect) =>{
        return(
            <p style={{fontSize: 8 + "px"}}><strong>Info Source: </strong><a href={`https://explorer.natureserve.org${insect.url}`}>https://explorer.natureserve.org{insect.url}</a></p>
        );
    } 
    //Determines whether insect object has photo to display and if not tries to display relevent logo instead
    const photoOrLogo = (insect, size) => {
        console.log(insect.informalTax);
        const informalTax = insect.informalTax;
        if(insect.photo != ""){
            return(
                <img src={insect.photo} class={`${size}`} style={{borderRadius: 50 + "%"}}/>
            );
        }else{
            if(insect.commonName){
                if(/\bBees\b/.test(informalTax)){
                    return (
                        <img src={BeeLogo} class={`${size}`}/> 
                    );
                }else if(/\bSpiders\b/i.test(informalTax)){
                    return (
                      <img src={SpiderLogo} class={`${size}`}/> 
                    );
                }else if(/\bBeetles\b/i.test(informalTax)){
                    return (
                      <img src={BeetleLogo} class={`${size}`}/> 
                    );
                }else if(/\bSkippers\b/i.test(informalTax)){
                    return (
                        <img src={ButterFlyLogo} class={`${size}`}/> 
                    );
                }else if(/\bMoths\b/i.test(informalTax)){
                    return (
                        <img src={MothLogo} class={`${size}`}/> 
                    );
                }else if(/\bDragonflies\b/i.test(informalTax)){
                    return (
                        <img src={DragonFlyLogo} class={`${size}`}/> 
                    );
                }else if(/\bAnts\b/i.test(informalTax)){
                    return (
                        <img src={AntLogo} class={`${size}`}/> 
                    );
                }else if(/\bGrasshoppers\b/i.test(informalTax)){
                    return (
                        <img src={GrassHopperLogo} class={`${size}`}/> 
                    );
                }else if(/\bFlies\b/i.test(informalTax)){
                    return (
                        <img src={FlyLogo} class={`${size}`}/> 
                    );
                }else if(/\bMayflies\b/i.test(informalTax)){
                    return (
                        <img src={MayFlyLogo} class={`${size}`}/> 
                    );
                }
                // else{
                //     return (
                //         <img src={AntLogo} width="125px" height="125px"/> 
                //     );
                // }
            }
        }
    };
    //Displays loading screen
    const loadingUI = 
        <div class="d-flex justify-content-center pt-3" style={{backgroundColor: "white", width: 100 + "%", height: 100 + "px"}}>
            <h5 class="ml-3">Loading</h5>
            <div class="spinner-grow ml-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow ml-1" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>;
    //Displays States insect species is located
    const locationUI = (insect) => {
        return(
            <div class="location-UI">
                <i>Located: </i>
                {insect.subNations[0].map((nation, i) => {
                    if(i + 1 === insect.subNations[0].length){
                        return(
                            <i id={`nation${i}`}>{nation.subnationCode}</i>
                        )
                    }else{
                        return(
                            <i id={`nation${i}`}>{nation.subnationCode}, </i>
                        )
                    }
                })}
            </div>
        );     
    };

	return (
    <div style={{marginTop: 70 + "px", width: 100 + "%"}}>
        <div class="alert alert-info alert-dismissible fade show mt-2 ml-xl-4 mr-xl-4 text-center order-list-alert mb-2" role="alert"><strong>Want to know what local insects are in your area? </strong> Select your state to see what your window screens keep out!
          <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;       </span></button>
        </div>
        <div style={{backgroundColor: "silver", color: 'darkslategray', height: 100 +"px"}}>
            <div class="row m-0 p-0">
                <h1 class="col-6 d-none d-md-block m-0 ml-3 mt-2 insect-title"><strong>Insects in <i>Your</i> Area</strong></h1>
                <form class="col-md-5" method="post">
                    <div class="row">
                        <label class="col-3 mt-3 d-none d-xl-block" for="state">Select your state:</label>
                        <select  class="form-control form-control-lg mt-3 ml-3 mr-3 col-md-8" id="state" name="state" onChange={submit.bind(this)}>
                            {states.map((state, i)=>{
                                return(
                                    <option key={i} value={state.abbreviation} >{state.name}</option>
                                );
                            })}
                        </select>
                    </div>
                </form>
            </div>
            <hr class="sfShadow" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
        </div>
		<div class="insectMain row" width="100%">
          {/* Maps insect objects and creates card with insect info and photos */}
		  {loading ? loadingUI : insects.map((insect,i) => {
            return(
            <>
              <a class="insect col-xl-3 col-lg-4" style={{color: "darkslategray", textDecoration: "none", borderWidth: 4 + 'px', borderStyle: "solid", borderRadius: 0 + "px", height: 200 + "px"}} type="button" data-toggle="modal" data-target={`#modal${i}`} >  
                <div class="row p-3 p-sm-0">
                    <div class="col-8 m-0 pr-0 insect-card"  style={{overflowY: "hidden"}}>  
                        <strong class="title text-capitalize" style={{color: 'black', fontSize: 1.25 + "rem"}}>{insect.commonName ? insect.commonName : ""}</strong><br/>
                        <i style={{color: 'darkgray'}}>{insect.sciName}</i><br/><br/>
                        {locationUI(insect)}
                    </div>
                    <div class="insectPhoto col-4 p-2">
                        {photoOrLogo(insect, "insectPhotoSmall")}
                    </div>
                </div>
              </a> 
              {/* Pop-up modal for displaying larger insect photo */}
              <div class="modal fade" id={`modal${i}`} tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-capitalize" id="exampleModalLabel">{insect.commonName}</h5>
                    <p class="modal-title ml-3 mt-1 text-capitalize font-italic">{insect.sciName}</p>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body d-flex justify-content-center">
                    {/* <img width="100%" src={insect.photo} /> */}
                    {photoOrLogo(insect, "insectPhotoLarge")}
                  </div>
                  <div class="modal-footer justify-content-start">
                      <div class="row">
                          <div class="col-4">
                            {locationUI(insect)}
                          </div>
                          <div class="col-4" style={{overflowWrap: "break-word"}}>
                            {NatServeCit(insect)}
                          </div>
                          <div class="col-4" style={{overflowWrap: "break-word"}}>
                            {FlickrCit(insect)}    
                          </div>
                      </div>
                  </div>
                </div>
              </div> 
            </div> 
            </>
            );
          })}
		</div>
        <div style={{backgroundColor: "silver", color: 'darkslategray', height: 100 +"px", paddingTop: 15 + "px"}}>
            <hr class="sfShadowBottom  m-0" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
        </div>
    </div>
	);
};

export default InsectsInArea;