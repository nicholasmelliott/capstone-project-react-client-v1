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

const insectImages = {
    'Bees': BeeLogo,
    'Spiders': SpiderLogo,
    'Beetles': BeetleLogo,
    'Skippers': ButterFlyLogo,
    'Moths': MothLogo,
    'Dragonflies': DragonFlyLogo,
    'Ants': AntLogo,
    'Grasshoppers': GrassHopperLogo,
    'Flies': FlyLogo,
    'Mayflies': MayFlyLogo
};


const InsectImage = ({ insect, size }) => {
    const informalTax = insect.informalTax;
     //Determines whether insect object has photo to display and if not tries to display relevent logo instead
    if(insect.photo != ""){
        return(
            <img src={insect.photo} className={`${size}`} style={{borderRadius: '50%'}}/>
        );
    }else if(insect.commonName){
        let insectKey = Object.keys(insectImages).find(key => new RegExp(`\\b${key}\\b`, 'i').test(informalTax));
        
        if(insectKey){
            return (
                <img src={insectImages[insectKey]} className={`${size}`}/>
            );
        }
    }
    return null;
};

export default InsectImage;
