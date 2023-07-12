import React from 'react';

const InsectLocations = ({insect}) => {
    return (
        <div className="location-UI">
            <i>Located: </i>
            {insect.subNations[0].map((nation, i) => {
                if(i + 1 === insect.subNations[0].length){
                    return <i id={`nation${i}`}>{nation.subnationCode}</i>
                }else{
                    return <i id={`nation${i}`}>{nation.subnationCode}, </i>
                }
            })}
        </div>
    );
}

export default InsectLocations;