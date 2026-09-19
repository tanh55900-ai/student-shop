function update(PreviewPic) {
    console.log("Mouse over image");
    console.log(PreviewPic.alt);
    console.log(PreviewPic.src);

    document.getElementById("image").innerHTML = PreviewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + PreviewPic.src + "')";
}
