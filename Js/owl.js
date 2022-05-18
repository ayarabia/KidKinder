// Testimonials carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    margin:30,
 
    center: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }

})



