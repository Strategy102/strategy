$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide(); 
        }
    });
    
    // smooth srolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });

});

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-moon');
    if(themeToggler.classList.contains('fa-moon')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}    