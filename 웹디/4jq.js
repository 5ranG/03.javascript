fadeslide1();
var now=1;

function fadeslide1(){
    var leng1 = $('.slide1 li').length;
    $('.slide1 li').eq(now).fadeIn().siblings().fadeOut();
    
    if(now == leng1-1){
        now=0;
    }
    
    else{
        now++;
    }
    
    setTimeout('fadeslide1()',1000);     
};


/*--------------------------------------*/

$(function(){
  $('.slide2 li:last').after('<li><img src="image/img1.jpg" alt="img1"></li>');  
});

fadeslide2();
var slide2now=1;

function fadeslide2(){
    var leng2 = $('.slide2 li').length;
    
    $('.slide2 li:first').animate({
        marginLeft:-700
    }, function(){
        $('.slide2 li:last').after('<li><img src="image/img'+slide2now+'.jpg" alt="'+slide2now+'"></li>');
        $('.slide2 li:first').remove();
    });
    
    if(slide2now == leng2 - 1){
        slide2now=1;
    }
    else{
        slide2now++;
    }
    
    setTimeout('fadeslide2()',1000);
    
};








