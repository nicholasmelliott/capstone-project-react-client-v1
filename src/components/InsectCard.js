import React from 'react';
import InsectImage from './InsectImage';
import InsectLocations from './InsectLocations';
import FlickrCit from './FlickerCit';
import NatServeCit from './NatServeCit';

const InsectCard = ({ insect, i }) => (
    <>
        <div className="insect col-xl-3 col-lg-4" style={{color: "darkslategray", textDecoration: "none", borderWidth: 4 + 'px', borderStyle: "solid", borderRadius: 0 + "px", height: 200 + "px"}} data-toggle="modal" data-target={`#modal${i}`} >  
          <div className="row pl-3 pr-3 pt-3">
              <div className="col-8 m-0 pr-0 insect-card"  style={{overflowY: "hidden"}}>  
                  <strong className="title text-capitalize" style={{color: 'black', fontSize: 1.25 + "rem"}}>{insect.commonName ? insect.commonName : ""}</strong><br/>
                  <i style={{color: 'darkgray'}}>{insect.sciName}</i><br/><br/>
              </div>
              <div className="insectPhoto col-4 p-2">
                <InsectImage insect={insect} size={"insectPhotoSmall"} />
              </div>
          </div>
          <div className="row m-0 pl-3 pr-3 pb-3">
            <InsectLocations insect={insect} />
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
                  <InsectImage insect={insect} size={"insectPhotoLarge"} />
                </div>
                <div className="modal-footer justify-content-start">
                    <div className="row">
                        <div className="col-4">
                          <InsectLocations insect={insect} />
                        </div>
                        <div className="col-4" style={{overflowWrap: "break-word"}}>
                          <NatServeCit insect={insect} />
                        </div>
                        <div className="col-4" style={{overflowWrap: "break-word"}}>
                          <FlickrCit insect={insect} />   
                        </div>
                    </div>
                </div>
              </div>
            </div> 
        </div> 
    </>
);

export default InsectCard;


