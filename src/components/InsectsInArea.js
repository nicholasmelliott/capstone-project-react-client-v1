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
                <img src={insect.photo} className={`${size}`} style={{borderRadius: 50 + "%"}}/>
            );
        }else{
            if(insect.commonName){
                if(/\bBees\b/.test(informalTax)){
                    return (
                        <img src={BeeLogo} className={`${size}`}/> 
                    );
                }else if(/\bSpiders\b/i.test(informalTax)){
                    return (
                      <img src={SpiderLogo} className={`${size}`}/> 
                    );
                }else if(/\bBeetles\b/i.test(informalTax)){
                    return (
                      <img src={BeetleLogo} className={`${size}`}/> 
                    );
                }else if(/\bSkippers\b/i.test(informalTax)){
                    return (
                        <img src={ButterFlyLogo} className={`${size}`}/> 
                    );
                }else if(/\bMoths\b/i.test(informalTax)){
                    return (
                        <img src={MothLogo} className={`${size}`}/> 
                    );
                }else if(/\bDragonflies\b/i.test(informalTax)){
                    return (
                        <img src={DragonFlyLogo} className={`${size}`}/> 
                    );
                }else if(/\bAnts\b/i.test(informalTax)){
                    return (
                        <img src={AntLogo} className={`${size}`}/> 
                    );
                }else if(/\bGrasshoppers\b/i.test(informalTax)){
                    return (
                        <img src={GrassHopperLogo} className={`${size}`}/> 
                    );
                }else if(/\bFlies\b/i.test(informalTax)){
                    return (
                        <img src={FlyLogo} className={`${size}`}/> 
                    );
                }else if(/\bMayflies\b/i.test(informalTax)){
                    return (
                        <img src={MayFlyLogo} className={`${size}`}/> 
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
        <div className="d-flex justify-content-center pt-3" style={{backgroundColor: "white", width: 100 + "%", height: 100 + "px"}}>
            <h5 className="ml-3">Loading</h5>
            <div className="spinner-grow ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow ml-1" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    //Displays States insect species is located
    const locationUI = (insect) => {
        return(
            <div className="location-UI">
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
        <div className="alert alert-info alert-dismissible fade show mt-2 ml-xl-4 mr-xl-4 text-center order-list-alert mb-2" role="alert"><strong>Want to know what local insects are in your area? </strong> Select your state to see what your window screens keep out!
          <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;       </span></button>
        </div>
        <div style={{backgroundColor: "silver", color: 'darkslategray', height: 100 +"px"}}>
            <div className="row m-0 p-0">
                <h1 className="col-6 d-none d-md-block m-0 ml-3 mt-2 insect-title"><strong>Insects in <i>Your</i> Area</strong></h1>
                <form className="col-md-5" method="post">
                    <div className="row">
                        <label className="col-3 mt-3 d-none d-xl-block" htmlFor="state">Select your state:</label>
                        <select  className="form-control form-control-lg mt-3 ml-3 mr-3 col-md-8" id="state" name="state" onChange={submit.bind(this)}>
                            {states.map((state, i)=>{
                                return(
                                    <option key={i} value={state.abbreviation} >{state.name}</option>
                                );
                            })}
                        </select>
                    </div>
                </form>
            </div>
            <hr className="sfShadow" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
        </div>
		<div className="insectMain row" width="100%">
          {/* Maps insect objects and creates card with insect info and photos */}
		  {loading ? loadingUI : insects.map((insect,i) => {
            return(
            <>
              <div className="insect col-xl-3 col-lg-4" style={{color: "darkslategray", textDecoration: "none", borderWidth: 4 + 'px', borderStyle: "solid", borderRadius: 0 + "px", height: 200 + "px"}} data-toggle="modal" data-target={`#modal${i}`} >  
                <div className="row pl-3 pr-3 pt-3">
                    <div className="col-8 m-0 pr-0 insect-card"  style={{overflowY: "hidden"}}>  
                        <strong className="title text-capitalize" style={{color: 'black', fontSize: 1.25 + "rem"}}>{insect.commonName ? insect.commonName : ""}</strong><br/>
                        <i style={{color: 'darkgray'}}>{insect.sciName}</i><br/><br/>
                    </div>
                    <div className="insectPhoto col-4 p-2">
                        {photoOrLogo(insect, "insectPhotoSmall")}
                    </div>
                </div>
                <div className="row m-0 pl-3 pr-3 pb-3">
                    {locationUI(insect)}
                </div>
              </div> 
              {/* Pop-up modal for displaying larger insect photo */}
              <div className="modal fade" id={`modal${i}`} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-capitalize" id="exampleModalLabel">{insect.commonName}</h5>
                    <p className="modal-title ml-3 mt-1 text-capitalize font-italic">{insect.sciName}</p>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body d-flex justify-content-center">
                    {/* <img width="100%" src={insect.photo} /> */}
                    {photoOrLogo(insect, "insectPhotoLarge")}
                  </div>
                  <div className="modal-footer justify-content-start">
                      <div className="row">
                          <div className="col-4">
                            {locationUI(insect)}
                          </div>
                          <div className="col-4" style={{overflowWrap: "break-word"}}>
                            {NatServeCit(insect)}
                          </div>
                          <div className="col-4" style={{overflowWrap: "break-word"}}>
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
            <hr className="sfShadowBottom  m-0" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
        </div>
    </div>
	);
};

export default InsectsInArea;