import React from 'react';
import StateSelect from './StateSelect';
import InsectCard from './InsectCard';
import InsectModal from './InsectModal';
import LoadingIndicator from './LoadingIndicator';
import CustomAlert from './CustomAlert';
import { states } from '../data/states';

const InsectsInArea = ({ search, insects, submit, USState, loading, NatureServeCit}) => { 
	return (
        <div style={{marginTop: 70 + "px", width: 100 + "%"}}>     
            <CustomAlert
              title="Want to know what local insects are in your area?"
              message="Select your state to see what your window screens keep out!"
            />
            <div style={{backgroundColor: "silver", color: 'darkslategray', height: 100 +"px"}}>
                <div className="row m-0 p-0">
                    <h1 className="col-6 d-none d-md-block m-0 ml-3 mt-2 insect-title"><strong>Insects in <i>Your</i> Area</strong></h1>
                    <StateSelect submit={submit.bind(this)} states={states} className={"col-md-5"} />
                </div>
                <hr className="sfShadow" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
            </div>
	        <div className="row m-0">
                {/* Maps insect objects and creates card with insect info and photos */}
	            {
                    loading 
                        ? <LoadingIndicator /> 
                        : insects.map((insect,i) => (
                            <React.Fragment key={insect.id}>
                                <InsectCard insect={insect} i={i} />
                                <InsectModal insect={insect} i={i} />
                            </React.Fragment>  
                        ))
                }
	        </div>
            <div style={{backgroundColor: "silver", color: 'darkslategray', height: 100 +"px", paddingTop: 15 + "px"}}>
                <hr className="sfShadowBottom  m-0" style={{borderWidth: 2 + "px", borderColor: "darkgray"}}/>
            </div>
        </div>
	);
};

export default InsectsInArea;