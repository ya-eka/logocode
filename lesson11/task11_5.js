function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
function  rgbToHex(num1, num2, num3) {
    return '#' + componentToHex(num1) + componentToHex(num2) + componentToHex(num3)
};
//console.log(rgbToHex(255,0,0));