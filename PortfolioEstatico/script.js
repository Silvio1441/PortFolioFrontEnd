$(document).ready(function(){
    $(window).scroll(function(){

        // navbar scroll

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }    
    });

    
    // Animación texto

    var typed = new Typed(".typing", {
        strings: ["Programador", "Diseñador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});