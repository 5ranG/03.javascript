/*$( document ).ready(function() {
   여기에 코드
});*/ //제이쿼리 기본 모양새

/*$(function() {
  // 코드
});*/ //위의 기본 모양새를 축약한 것


/*$(document).ready(function(){
        alert('test');
    });*/ //아래와 동일

$(function(){
        alert('아이디를 입력해주세요');
    }); //팟업창 띄우는거. alert

$(function(){
        alert('아이디를 입력');
    }); // 두개를 적으면 두개 연속으로 뜸


$(function(){
    $('#id1').click(function(){ 
        alert('id1');
    });
    
    $('#id2').click(function(){ 
        alert('id1');
    });
});


/*id1부분에 따옴표 필수*/
