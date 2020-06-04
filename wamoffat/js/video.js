//========== DECLARE GLOBAL VARIABLES & CONSTANTS ==========
//==========================================================
var HomeVid = document.getElementById('home_video');
var SlideVid = document.getElementById('slide_video');
var iCount = 0;


//========== FUNCTIONS & METHODS ===============
//==============================================

// NOTE: Place script element with src reference this at last position in <body>

//===== PRELOAD SlideVid - after HomeVid has fully loaded
HomeVid.addEventListener("canplaythrough", loadSlideVid);

function loadSlideVid() {   
    if (iCount == 0) {
        iCount += 1;
        SlideVid.preload = "auto";        
    } else {
        iCount += 1;
        console.log("Remove Listener");
        HomeVid.removeEventListener("canplaythrough", loadSlideVid);
    }
}