// marquee slider
const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// scroll top button ===========================================
 // Get the button
 let mybutton = document.getElementById("myBtn");
        
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }


 // close-menu =================================================
function openNav() {
  document.getElementById("mySidepanel").style.width = "320px";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}