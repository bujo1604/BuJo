
function circleFunc(r, cx, cy, TotNum, order) {
    var angle = ((order - Math.ceil(TotNum/4) - 1)/ TotNum )*2*Math.PI;

    var x = Math.floor(Math.cos(angle)*r + cx)
    var y = Math.floor(Math.sin(angle)*r + cy);
    var rad = Math.floor(order * 360 / TotNum);
    
    var coord = [x,y, rad]; // x,y, degrees in radians
    return coord;
}
export {circleFunc}

