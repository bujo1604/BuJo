
import {circleFunc} from './circleUtils'

 function colorSwap(color, c2){
    if(color === "white"){
        return c2
    }
    else{
        return "white"
    }
  }

function habitTrackerProportions(svgWidth){
    var ProportionsObj = {};
    ProportionsObj.svgWidth = svgWidth;
    ProportionsObj.svgHeight = svgWidth;
    ProportionsObj.cirR = svgWidth / 60;
    ProportionsObj.svgCenterX = svgWidth / 2;
    ProportionsObj.svgCenterY = svgWidth / 2;
    ProportionsObj.bCirR = (svgWidth * 0.6) / 2;

    return ProportionsObj;
}

function ellipseCoord(svgPropObj, day, ind, NumDInM){
    var CoordObj = {};
    var circFRes = circleFunc(svgPropObj.bCirR, svgPropObj.svgCenterX, svgPropObj.svgCenterY, NumDInM, day);
    var textCirFRes = circleFunc(svgPropObj.bCirR + (1.6*svgPropObj.cirR), svgPropObj.svgCenterX, svgPropObj.svgCenterY, NumDInM, day);
    var dayCirFRes = circleFunc(svgPropObj.bCirR - 1*svgPropObj.cirR, svgPropObj.svgCenterX, svgPropObj.svgCenterY, NumDInM, day);
    CoordObj.colNumb = ind + 1;
    CoordObj.colStr = 'c' + CoordObj.colNumb;
    CoordObj.angle = circFRes[2];
    CoordObj.cx = circFRes[0];
    CoordObj.cy = circFRes[1];
    CoordObj.tcx = textCirFRes[0];
    CoordObj.tcy = textCirFRes[1];
    CoordObj.dcx = dayCirFRes[0];
    CoordObj.dcy = dayCirFRes[1];
    CoordObj.rotate = CoordObj.angle.toString() + " " + CoordObj.cx + " " + CoordObj.cy;

    return CoordObj;
}

                       

export {colorSwap, habitTrackerProportions, ellipseCoord}

