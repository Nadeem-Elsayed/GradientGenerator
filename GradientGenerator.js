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
}
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