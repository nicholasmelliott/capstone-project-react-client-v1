import React from 'react';
import InsectImage from './InsectImage';
import InsectLocations from './InsectLocations';

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
    </>
);

export default InsectCard;


