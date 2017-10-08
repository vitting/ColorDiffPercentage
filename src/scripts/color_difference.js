function color_meter(cwith, ccolor) {

    if (!cwith && !ccolor) return;

    var _cwith  = (cwith.charAt(0)=="#") ? cwith.substring(1,7) : cwith;
    var _ccolor = (ccolor.charAt(0)=="#") ? ccolor.substring(1,7) : ccolor;

    var _r = parseInt(_cwith.substring(0,2), 16);
    var _g = parseInt(_cwith.substring(2,4), 16);
    var _b = parseInt(_cwith.substring(4,6), 16);

    var __r = parseInt(_ccolor.substring(0,2), 16);
    var __g = parseInt(_ccolor.substring(2,4), 16);
    var __b = parseInt(_ccolor.substring(4,6), 16);

    var p1 = (_r / 255) * 100;
    var p2 = (_g / 255) * 100;
    var p3 = (_b / 255) * 100;

    var perc1 = Math.round((p1 + p2 + p3) / 3);

    var p1 = (__r / 255) * 100;
    var p2 = (__g / 255) * 100;
    var p3 = (__b / 255) * 100;

    var perc2 = Math.round((p1 + p2 + p3) / 3);

    return Math.abs(perc1 - perc2);   
    }