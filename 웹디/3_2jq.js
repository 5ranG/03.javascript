$(function(){
    
    $('.menu').click(function(){
        var index=$(this).index();
        
        $(this).addClass('on').siblings().removeClass('on');    
        $('.contents:eq('+index+')').addClass('on').siblings().removeClass('on');    
    });
        
    
    
    
    
    
});