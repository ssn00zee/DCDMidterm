function smoothScroll() {
    var elem = document.getElementById("scrollhere");
    elem.scrollIntoView({behavior:"smooth", block: "center"});
}