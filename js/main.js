function hamburger() {
    var x = document.getElementById("mobileNavId");
    if (x.className === "mobileNav") {
        x.className += " responsive";
    } else {
        x.className = "mobileNav";
    }
}