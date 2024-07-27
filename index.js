/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

/* -----------------------------------------
  Back to Top Button
 ---------------------------------------- */

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

/* -----------------------------------------
  Carousel Slider 1 
 ---------------------------------------- */
 let slideIndex1 = 1;
 let links1 = [
   "https://github.com/AcionAnon1/StudyProjects",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/Calculator",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/DataDayCare",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/EntranceFee",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/FormativeAssessment%203%20GUI",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/Question1_App",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/Question_1",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/Question_2",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/Recursion",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/SentinelNumber",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/UseBuildingMaterial",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/question3_1",
   "https://github.com/AcionAnon1/StudyProjects/tree/main/question3_2",
 ];
 
 showSlides1(slideIndex1);
 
 function plusSlides1(n) {
   showSlides1(slideIndex1 += n);
 }
 
 function currentSlide1(n) {
   showSlides1(slideIndex1 = n);
 }
 
 function showSlides1(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides1");
   let dots = document.getElementsByClassName("dot1");
   if (n > slides.length) {slideIndex1 = 1}
   if (n < 1) {slideIndex1 = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active1", "");
   }
   slides[slideIndex1-1].style.display = "block";
   dots[slideIndex1-1].className += " active1";
 
   document.getElementById("dynamicLink").href = links1[slideIndex1-1];
 }
 
 /* -----------------------------------------
   Carousel Slider 2 
  ---------------------------------------- */
 let slideIndex2 = 1;
 showSlides2(slideIndex2);
 
 function plusSlides2(n) {
   showSlides2(slideIndex2 += n);
 }
 
 function currentSlide2(n) {
   showSlides2(slideIndex2 = n);
 }
 
 function showSlides2(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides2");
   let dots = document.getElementsByClassName("dot2");
   if (n > slides.length) {slideIndex2 = 1}
   if (n < 1) {slideIndex2 = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active2", "");
   }
   slides[slideIndex2-1].style.display = "block";
   dots[slideIndex2-1].className += " active2";
 }
 
 /* -----------------------------------------
   Carousel Slider 3 
  ---------------------------------------- */
 let slideIndex3 = 1;
 showSlides3(slideIndex3);
 
 function plusSlides3(n) {
   showSlides3(slideIndex3 += n);
 }
 
 function currentSlide3(n) {
   showSlides3(slideIndex3 = n);
 }
 
 function showSlides3(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides3");
   let dots = document.getElementsByClassName("dot3");
   if (n > slides.length) {slideIndex3 = 1}
   if (n < 1) {slideIndex3 = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active3", "");
   }
   slides[slideIndex3-1].style.display = "block";
   dots[slideIndex3-1].className += " active3";
 }
  /* -----------------------------------------
   Carousel Slider 4 
  ---------------------------------------- */
  let slideIndex4 = 1;
  showSlides4(slideIndex4);
  
  function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
  }
  
  function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
  }
  
  function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    let dots = document.getElementsByClassName("dot4");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active4", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active4";
  }
 
 /* -----------------------------------------
   Image Modals
  ---------------------------------------- */
 
 let modals = {
   'javaModal': { index: 1 },
   'musicModal': { index: 1 },
   'libraryModal': { index: 1 },
   'androidModal': { index: 1 }
 };
 
 function openModal(modalId, n) {
   document.getElementById(modalId).style.display = "block";
   showModalSlides(modalId, modals[modalId].index = n);
 }
 
 function closeModal(modalId) {
   document.getElementById(modalId).style.display = "none";
 }
 
 function changeModalSlide(modalId, n) {
   showModalSlides(modalId, modals[modalId].index += n);
 }
 
 function currentModalSlide(modalId, n) {
   showModalSlides(modalId, modals[modalId].index = n);
 }
 
 function showModalSlides(modalId, n) {
   let i;
   let modal = document.getElementById(modalId);
   let slides = modal.getElementsByClassName("modal-slide");
   let dots = modal.getElementsByClassName("modal-dot");
   if (n > slides.length) { modals[modalId].index = 1 }
   if (n < 1) { modals[modalId].index = slides.length }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[modals[modalId].index - 1].style.display = "block";
   dots[modals[modalId].index - 1].className += " active";
 }