// menu bars navigation+++++++++++____________

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=function(){
    menuIcon.classList.toggle("fa-tiems");
    menuIcon.classList.toggle("active");

}





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
sections.forEach(sec=>{
    let top =window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
         navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector("header nav a[href*=' + id + ']").classList.add('active');
         })
    };
})

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100)
//remove menu icon navbar when click navbar when click navbar link (scroll)
menuIcon.classList.remove("fa-tiems");
menuIcon.classList.remove('active')

};
// swiper slide++++++++++++_________________

var swiper = new Swiper(".mySwiper", {
    loop:true,
    centeredSlides:true,
    autoplay:{
      delay:9500,
      disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
     
      768: {
        slidesPerView: 2,
       
      },
      1024: {
        slidesPerView: 3,
        
      },
      
    },
  });

//dark light mode==================
let darkModeIcon =document.querySelector('#darkMode-icon');

darkModeIcon.onclick =()=>{
   darkModeIcon.classList.toggle('fa-sun');
   document.body.classList.toggle('.dark-mode')
}

//*+++++++++++ SCROLL REVEAL ======*/

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.home-img img,.service-container, .portfolio-box, .testimonial-wrapper',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img img',{origin:'left'});
ScrollReveal().reveal('.home-content h3,.home-content p.about-content,',{origin:'right'});