function randomRGB() {
    //get the two color values
    red1 = Math.floor(Math.random()*256);
    green1 = Math.floor(Math.random()*256);
    blue1 = Math.floor(Math.random()*256);
    red2 = Math.floor(Math.random()*256);
    green2 = Math.floor(Math.random()*256);
    blue2 = Math.floor(Math.random()*256);
    gradient_text = "background-image: linear-gradient(to bottom right, rgb(" + red1 + "," + green1 + "," + blue1 + "), rgb(" + red2 + "," + green2 + "," + blue2 + "))"
    document.getElementById("gradient-box").setAttribute('style', gradient_text)
    //Set the text values to let the user know the color displayed.
    rgb1 = [red1, green1, blue1]
    document.getElementById("rgb1").innerHTML = "RGB: " + rgb1;

    rgb2 = [red2, green2, blue2]
    document.getElementById("rgb2").innerHTML = "RGB: " + rgb2;
    
    hex1 = rgb_to_hex(rgb1)
    document.getElementById("hex1").innerHTML = "Hex: " + hex1;
    
    hex2 = rgb_to_hex(rgb2)
    document.getElementById("hex2").innerHTML = "Hex: " + hex2;
}
function hex_to_decimal(hex) {
    return parseInt(hex,16);
};
function decimal_to_hex(decimal) {
    return decimal.toString(16);
};
function rgb_to_hex(rgb) {
    red = decimal_to_hex(rgb[0]);
    green = decimal_to_hex(rgb[1]);
    blue = decimal_to_hex(rgb[2]);

    //Sometimes there is a missing 0
    red_string = "0" + red;
    green_string = "0" + green;
    blue_string = "0" + blue;

    //only take last two digits in case there is the extra zero
    red_string = red_string.slice(-2);
    green_string = green_string.slice(-2);
    blue_string = blue_string.slice(-2)
    return "#" + red_string + green_string + blue_string;
};
function hex_to_rgb(hex) {
    //get rid of #
    if (hex.includes("#")){
        hex = hex.slice(1);
    }
    
    //split the string
    red = hex.substring(0,2);
    green = hex.substring(2,4);
    blue = hex.substring(4);
    return [hex_to_decimal(red),hex_to_decimal(green),hex_to_decimal(blue)];
};