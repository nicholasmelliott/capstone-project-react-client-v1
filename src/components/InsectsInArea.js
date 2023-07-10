import React from 'react';
import StateSelect from './StateSelect';
import InsectCard from './InsectCard'
import { states } from '../data/states';
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
    
    //Flickr citation for insect image
    const FlickrCit = (insect) =>{
        return(
            <p style={{fontSize: 8 + "px"}}><strong>Photo Source: </strong><a href={insect.photo}>{insect.photo}</a></p>
        );
    } 

    //Nature Serve citation for insect information
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
            <div className="alert alert-info alert-dismissible fade show mt-2 ml-xl-4 mr-xl-4 text-center order-list-alert mb-2" role="alert">
                <strong>Want to know what local insects are in your area? </strong> Select your state to see what your window screens keep out!
                <button className="close" type="button" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;       </span></button>
            </div>
            <div style={{backgroundColor: "silver", color: 'darkslategray', height: 100 +"px"}}>
                <div className="row m-0 p-0">
                    <h1 className="col-6 d-none d-md-block m-0 ml-3 mt-2 insect-title"><strong>Insects in <i>Your</i> Area</strong></h1>
                    <StateSelect submit={submit.bind(this)} states={states} className={"col-md-5"} />
                </div>
                <hr className="sfShadow" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
            </div>
	        <div className="insectMain row" width="100%">
                {/* Maps insect objects and creates card with insect info and photos */}
	            {loading ? loadingUI : insects.map((insect,i) => {
                    return(
                        <InsectCard key={i} insect={insect} i={i} photoOrLogo={photoOrLogo} locationUI={locationUI} NatServeCit={NatServeCit} FlickrCit={FlickrCit}/>
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