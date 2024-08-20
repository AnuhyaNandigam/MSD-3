/*----------------------------About Tabs------------------------------*/
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", function (ev) {
    if(ev.target.classList.contains("tab-item") && !ev.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        ev.target.classList.add("active");
        const target = ev.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    } 
});









/*--------------------------Portfolio Item Details Popup --------------------------*/
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;


}

document.addEventListener("click",function(ev){
    if(ev.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();  
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(ev.target.parentElement);
    }

});
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);










//Closing popup by clicking outside of it
document.addEventListener("click", function(ev){
    if(ev.target.classList.contains("pp-inner") && document.querySelector(".portfolio-popup").classList.contains("open")){
        togglePortfolioPopup();
    }
});








/*----------------Toggle Navbar----------------- */
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",function(){
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});




/*----------------Active Sections----------------- */
document.addEventListener("click",function(ev){
    if(ev.target.classList.contains("link-item") && ev.target.hash !== ""){
        // active the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(ev.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(function(){
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(ev.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },100);
    }
});


// page loader
window.addEventListener("load",function(){
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /* Page loader*/
    document.querySelector(".page-loader").classList.add("fade-out");

    setTimeout(function(){
    document.querySelector(".page-loader").style.display = "none";
    },0);
})


// Form submit Button
function EmailSend (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}