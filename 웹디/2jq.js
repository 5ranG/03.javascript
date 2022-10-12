$(function(){
    
    $('#id1').click(function(){
       $(this/*=나 자신, '#id1'*/).hide(); //id1을 눌렀을때 id1을 숨긴다  
       $('#id1').siblings(/*나빼고 형제. 같은 라인*/).css('background','yellow');
    });
    
    $('#id2').click(function(){
       $('#id2').hide(); //id2을 눌렀을때 id1을 숨긴다
       $('#id1').show(); //id2를 눌렀을때 id1을 보이게한다.
       $('#id1').css('background','red');
    });
    
    $('#id3').click(function(){
        $(this).addClass('on'); /*해당 그거 뒤에 html에 on 붙여준다 class추가*/
    });
    
    $('#id4').click(function(){
        $(this).addClass('on'); /*해당 그거 뒤에 html에 on 붙여준다 class추가*/
        $(this).siblings().removeClass('on');
    });
    
    
    
    
    
    
});