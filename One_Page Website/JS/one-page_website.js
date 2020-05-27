//========== DECLARE GLOBAL VARIABLES & CONSTANTS ==========
//==========================================================
var SlideList, DemoList, ImgList, SlideCount, SlideIndex;


//========== AUTO FIRE - AFTER PAGE LOAD ==========
//=================================================
 
function loadMe() {
    //========== LOG
    console.log("Page Loaded");
    //===== LOAD LISTS - global variables
    loadLists();
    //========== LOAD TEXT
    loadAltText();
    console.log("Number of slides: " + SlideCount); 
    console.log(DemoList);   
}

//========== FUNCTIONS & METHODS ===============
//==============================================

 //===== LOAD LISTS SlideList, Demolist, ImgList | set slideShow to first slide | console log
 function loadLists() {
    SlideList = document.getElementsByClassName("Slide"); // finds all slides by class and puts them in a list
    ImgList = document.getElementsByClassName('Img_Full'); // finds all full size photos by class and puts them in a list
    DemoList = document.getElementsByClassName("Demo"); // finds all demo photos by class and puts them in a list
    console.log(DemoList);
    SlideCount = SlideList.length;
    SlideIndex = 1;
}

//========== LOAD TEXT - pull alt text from images and put into captions over photos
function loadAltText() {
    var textArray = document.getElementsByClassName('Img_Text');
    for (let i=0; i < ImgList.length; i++) {
        textArray[i].innerHTML = ImgList[i].alt;
        console.log(ImgList[i].alt);
    }
}

//========== OPEN LIGHTBOX
function openLightBox(n) {
    document.getElementById("Light_Box").style.display = "block";
    if (n != undefined) {
        SlideIndex = n;
    } else {
        SlideIndex = 1;
    }    
    slideShow();
}

//========== CLOSE LIGHTBOX
function closeLightBox() {
    document.getElementById("Light_Box").style.display = "none";
}

//========== CHANGE SLIDE - increment/decrement slide number
function changeSlide(n) {
    SlideIndex += n;
    //===== Upper or lower limit exceeded - pass through - set global variable SlideIndex
     if (SlideIndex > SlideCount) { 
        SlideIndex = 1;
    } else if (SlideIndex < 1) {
        SlideIndex = SlideCount;
    }     
    slideShow();
}

//========== SLIDESHOW - Display change of slides and demo
function slideShow(n) {
    if (n != undefined) {
        SlideIndex = n;
    }
    var captionText = '';
    var captionElement = document.getElementById('Caption');
    console.log("slideShow() --> SlideIndex = " + SlideIndex);
   //===== Conditional loop - repeat through all slides  
    for (var i = 0; i < SlideCount; i++) {
        //===== ADD/REMOVE CLASS - style active/inactive slides
        if (i == SlideIndex-1) {
            SlideList[i].style.display = "block";
            DemoList[i].classList.add("active");
            //===== SET CAPTION
            captionText = ImgList[i].getAttribute("data-caption");
        } else {
            SlideList[i].style.display = "none";    
            DemoList[i].classList.remove("active");            
        }    
    } 
    document.getElementById('Caption').innerHTML = captionText;    
} 