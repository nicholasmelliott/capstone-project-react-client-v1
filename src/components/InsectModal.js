import React from 'react';
import InsectImage from './InsectImage';
import InsectLocations from './InsectLocations';
import FlickrCit from './FlickerCit';
import NatServeCit from './NatServeCit';

const InsectModal = ({ insect, i }) => (
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
);

export default InsectModal;
