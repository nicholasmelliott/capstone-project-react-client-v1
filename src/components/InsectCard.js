import React from 'react';
import InsectImage from './InsectImage';
import InsectLocations from './InsectLocations';

const InsectCard = ({ insect, i }) => (
    <>
        <div className="col-xl-3 col-lg-4 insect " data-toggle="modal" data-target={`#modal${i}`} >  
          <div className="row pl-3 pr-3 pt-3">
              <div className="col-8 m-0 pr-0 insect-card">  
                  <strong className="text-capitalize title">{insect.commonName ? insect.commonName : ""}</strong><br/>
                  <i className="sub-title">{insect.sciName}</i><br/><br/>
              </div>
              <div className="col-4 p-2 insect-photo ">
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


