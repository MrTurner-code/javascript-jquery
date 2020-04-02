var image = $("#picture");
var grayscale = contrast = blur = brightness = saturate = ""

function applyFilter(filter, value) {
    switch(filter) {
        case "grayscale" :
            grayscale = "grayscale("+value+"%)";
        break;
        case "contrast" :
            contrast = "contrast("+value+"%)";
        break;
        case "blur" :
            blur = "blur("+value+"px)";
        break;
        case "brightness" :
            brightness = "brightness("+value+"%)";
        break;
        case "saturate" :
            saturate = "saturate("+value+"%)";
        break;
    }
    console.log (grayscale + " " + contrast + " " + blur + " " + brightness + " " + saturate);
    image.css({"filter" : saturate + contrast + blur + brightness + grayscale});
}

function changeImage(url) {
    image.attr("src", url);
}
