//initial comment wow
function main(){
  //alert('Hello, world!');
  //alert(string(screen.height) + 'px');
  //$('div').css('height', '500px');//string(screen.height) + 'px');
  window.onbeforeunload = function(){ window.scrollTo(0,0); }
  currentPage = 0;
  setTimeout(function(){
    $('#contactBar').show("slide", {direction: "down"}, 4000);
  }, 1000);
  $('#but3').hide();
  $('#but4').hide();
  $('#but5').hide();
  $('#but6').hide();
  $('#but7').hide();



  $('#listBut1').click(function(){
    $('#listInfo2').slideUp(400);
    $('#listInfo3').slideUp(400);
    $('#listInfo4').slideUp(400);
    $('#listInfo5').slideUp(400);
    $('#listInfo1').slideDown(400);
  })
  $('#listBut2').click(function(){
    $('#listInfo1').slideUp(400);
    $('#listInfo3').slideUp(400);
    $('#listInfo4').slideUp(400);
    $('#listInfo5').slideUp(400);
    $('#listInfo2').slideDown(400);
  })
  $('#listBut3').click(function(){
    $('#listInfo2').slideUp(400);
    $('#listInfo1').slideUp(400);
    $('#listInfo4').slideUp(400);
    $('#listInfo5').slideUp(400);
    $('#listInfo3').slideDown(400);
  })
  $('#listBut4').click(function(){
    $('#listInfo2').slideUp(400);
    $('#listInfo3').slideUp(400);
    $('#listInfo1').slideUp(400);
    $('#listInfo5').slideUp(400);
    $('#listInfo4').slideDown(400);
  })
  $('#listBut5').click(function(){
    $('#listInfo2').slideUp(400);
    $('#listInfo3').slideUp(400);
    $('#listInfo4').slideUp(400);
    $('#listInfo1').slideUp(400);
    $('#listInfo5').slideDown(400);
  })



  $(".scrollBut").mouseenter(function(){
    $(this).children().css('background-color', 'white');
  })

  $(".scrollBut").mouseleave(function(){
    if (currentPage !== $('.scrollBut').index(this)) {
      $(this).children().css('background-color', 'transparent');
    }
  })

  $(".scrollBut").click(function(){
    $(".scrollSquare").css('background-color', 'transparent');
    $(this).children().css('background-color', 'white');
    currentPage = $('.scrollBut').index(this);
  })


  $('#but1').click(function(){
    $("html, body").animate({ scrollTop: "0px"}, {duration: 1000, queue: false});
    $("#scrollBar").animate({backgroundColor: '#92cea4'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#92cea4'}, {duration: 1000, queue: false});
  })
  $('#but2').click(function(){
    $("html, body").animate({ scrollTop: (2*(window.innerHeight)) + "px"}, {duration: 1000, queue:false});
    $("#scrollBar").animate({backgroundColor: '#a189b2'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#a189b2'}, {duration: 1000, queue: false});
    $('#but3').show("slide", {direction: "right"}, 500);
  })
  $('#but3').click(function(){
    $("html, body").animate({ scrollTop: (4*(window.innerHeight)) + "px"}, {duration: 1000, queue:false});
    $("#scrollBar").animate({backgroundColor: '#95b5c4'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#95b5c4'}, {duration: 1000, queue: false});
    $('#but4').show("slide", {direction: "right"}, 500);
  })
  $('#but4').click(function(){
    $("html, body").animate({ scrollTop: (6*(window.innerHeight)) + "px"}, {duration: 1000, queue:false});
    $("#scrollBar").animate({backgroundColor: '#95b5c4'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#95b5c4'}, {duration: 1000, queue: false});
    $('#but5').show("slide", {direction: "right"}, 500);
  })
  $('#but5').click(function(){
    $("html, body").animate({ scrollTop: (8*(window.innerHeight)) + "px"}, {duration: 1000, queue:false});
    $("#scrollBar").animate({backgroundColor: '#95b5c4'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#95b5c4'}, {duration: 1000, queue: false});
    $('#but6').show("slide", {direction: "right"}, 500);
  })
  $('#but6').click(function(){
    $("html, body").animate({ scrollTop: (10*(window.innerHeight)) + "px"}, {duration: 1000, queue:false});
    $("#scrollBar").animate({backgroundColor: '#cc94b5'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#cc94b5'}, {duration: 1000, queue: false});
    $('#but7').show("slide", {direction: "right"}, 500);
  })
  $('#but7').click(function(){
    $("html, body").animate({ scrollTop: (12*(window.innerHeight)) + "px"}, {duration: 1000, queue:false});
    $("#scrollBar").animate({backgroundColor: '#948fc1'}, {duration: 1000, queue: false});
    $("#scrollBarMirror").animate({backgroundColor: '#948fc1'}, {duration: 1000, queue: false});
  })


  $(".projectLinkBut").mouseenter(function(){
    $(this).css('background-color', 'white');
  })


  $(".projectLinkBut").mouseleave(function(){
    if (audio1.paused){
      $(this).css('background-color', 'transparent');
    }
  })


  $("#audio1").mouseenter(function(){
    $(this).css('background-color', 'white');
  })


  $("#audio1").mouseleave(function(){
    if (audio1.paused){
      $(this).css('background-color', 'transparent');
    }
  })


  $('#audio1').click(function(){
    if (audio1.paused){
      audio1.currentTime = 0;
      audio2.pause();
      $('#audio2').css('background-color', 'transparent');
      audio1.play();
    } else {
      audio1.pause();
    }
  })

  $("#audio2").mouseenter(function(){
    $(this).css('background-color', 'white');
  })


  $("#audio2").mouseleave(function(){
    if (audio2.paused){
      $(this).css('background-color', 'transparent');
    }
  })

  $('#audio2').click(function(){
    if (audio2.paused){
      audio2.currentTime = 0;
      audio1.pause();
      $('#audio1').css('background-color', 'transparent');
      audio2.play();
    } else {
      audio2.pause();
    }
  })



}






var currentPage = 0;
var projectDepth = 2;
var name = document.getElementById("name");
var audio1 = new Audio('audio/flymetothemoon.wav');
audio1.loop = true;
var audio2 = new Audio('audio/groovebaby.wav');
audio2.loop = true;

$(document).ready(main);
