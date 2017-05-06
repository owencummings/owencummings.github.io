//initial comment wow
function main(){
  //alert('Hello, world!');
  //alert(string(screen.height) + 'px');
  //$('div').css('height', '500px');//string(screen.height) + 'px');
  $('#audio1').click(function(){
    if (audio1.paused){
      audio1.currentTime = 0;
      audio2.pause();
      audio1.play();
    } else {
      audio1.pause();
    }
  })

  $('#audio2').click(function(){
    if (audio2.paused){
      audio2.currentTime = 0;
      audio1.pause();
      audio2.play();
    } else {
      audio2.pause();
    }
  })

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



  $('#but1').click(function(){
    $("html, body").animate({ scrollTop: "0px"}, 1500);
  })
  $('#but2').click(function(){
    $("html, body").animate({ scrollTop: (2*(window.innerHeight)) + "px"}, 1000);
  })
  $('#but3').click(function(){
    $("html, body").animate({ scrollTop: (4*(window.innerHeight)) + "px"}, 1000);
  })
  $('#but4').click(function(){
    $("html, body").animate({ scrollTop: (6*(window.innerHeight)) + "px"}, 1000);
  })
  $('#but5').click(function(){
    $("html, body").animate({ scrollTop: (8*(window.innerHeight)) + "px"}, 1000);
  })
  $('#but6').click(function(){
    $("html, body").animate({ scrollTop: (10*(window.innerHeight)) + "px"}, 1000);
  })
  $('#but7').click(function(){
    $("html, body").animate({ scrollTop: (12*(window.innerHeight)) + "px"}, 1000);
  })
}

var currentHeight = 0;
var titleCounter = 0;
var projectDepth = 2;
var name = document.getElementById("name");
var audio1 = new Audio('audio/flymetothemoon.wav');
audio1.loop = true;
var audio2 = new Audio('audio/groovebaby.wav');
audio2.loop = true;

function titleInc(){
  switch(titleCounter){
    case 0:
      $('#name').text('O');
      break;
    case 1:
      $('#name').text('OW');
      break;
    case 2:
      $('#name').text('OWE');
      break;
    case 3:
      $('#name').text('OWEN');
      break;
    case 4:
      $('#name').text('OWEN ');
      break;
    case 5:
      $('#name').text('OWEN C');
      break;
    case 6:
      $('#name').text('OWEN CU');
      break;
    case 7:
      $('#name').text('OWEN CUM');
      break;
    case 8:
      $('#name').text('OWEN CUMM');
      break;
    case 9:
      $('#name').text('OWEN CUMMI');
      break;
    case 10:
      $('#name').text('OWEN CUMMIN');
      break;
    case 11:
      $('#name').text('OWEN CUMMING');
      break;
    case 12:
      $('#name').text('OWEN CUMMINGS');
      break;
    case 13:
      $('#name').text('OWEN CUMMINGS.');
      break;
    default: break;
  }
  titleCounter = titleCounter + 1;
}




$(document).ready(function(){
    $(this).scrollTop(0);
    currentHeight = 0;
});
$(document).ready(main);
