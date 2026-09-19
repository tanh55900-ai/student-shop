function update(PreviewPic) {
    console.log("Mouse over image");
    console.log(PreviewPic.alt);
    console.log(PreviewPic.src);

    document.getElementById("image").innerHTML = PreviewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + PreviewPic.src + "')";
}

function undo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    
    document.getElementById("image").innerHTML =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
window.onload = addTabFocus;
function addTabFocus() {
    console.log("Tab focus function activated");

    var images = document.querySelectorAll("img");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
