//Gallary section
var all=document.getElementsByClassName("all")
var show=document.getElementsByClassName("showImags")

function hidden(){
    for(var i=0;i<all.length;i++){
    all[i].style.display="none";
    }
    
  }
  function showtheHidden(i,type){
    

    show[i].addEventListener("click",function(){
      
     hidden();
        for(var i=0;i<all.length;i++){
      type[i].style.display="block";

        }
    })

 }
 showtheHidden(0,all)
 var reading=document.getElementsByClassName("reading")
 showtheHidden(1,reading)
 var drawing =document.getElementsByClassName("drawing ")
 showtheHidden(2,drawing )
 var playing=document.getElementsByClassName("playing")
 showtheHidden(3,playing)




 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
