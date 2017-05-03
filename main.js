//initial comment wow
function main(){
  //alert('Hello, world!');
  //alert(string(screen.height) + 'px');
  //$('div').css('height', '500px');//string(screen.height) + 'px');
  setTimeout(titleInc(), 1000); //1
  setTimeout(titleInc(), 1100); //2
  setTimeout(titleInc(), 1200); //3
  setTimeout(titleInc(), 1300); //4
  setTimeout(titleInc(), 1400); //5
  setTimeout(titleInc(), 1500); //6
  setTimeout(titleInc(), 1600); //7
  setTimeout(titleInc(), 1700); //8
  setTimeout(titleInc(), 1800); //9
  setTimeout(titleInc(), 1900); //10
  setTimeout(titleInc(), 2000); //11
  setTimeout(titleInc(), 2100); //12
  setTimeout(titleInc(), 2200); //13


  $('#but1').click(function(){
    $("html, body").animate({ scrollTop: "0px"}, 1500);
  })
  $('#but2').click(function(){
    $("html, body").animate({ scrollTop: (2*(window.innerHeight)) + "px"}, 1500);
  })
  $('#but3').click(function(){
    $("html, body").animate({ scrollTop: (4*(window.innerHeight)) + "px"}, 1500);
  })
  $('#but4').click(function(){
    $("html, body").animate({ scrollTop: (6*(window.innerHeight)) + "px"}, 1500);
  })
  $('#but5').click(function(){
    $("html, body").animate({ scrollTop: (8*(window.innerHeight)) + "px"}, 1500);
  })
  $('#but6').click(function(){
    $("html, body").animate({ scrollTop: (10*(window.innerHeight)) + "px"}, 1500);
  })
  $('#but7').click(function(){
    $("html, body").animate({ scrollTop: (12*(window.innerHeight)) + "px"}, 1500);
  })
}

var currentHeight = 0;
var titleCounter = 0;
var name = document.getElementById("name");


function titleInc(){
  switch(titleCounter){
    case 0:
      name.textContent = "O"
      break;
    case 1:
      name.textContent  = "OW"
      break;
    case 2:
      name.textContent  = "OWE"
      break;
    case 3:
      name.textContent  = "OWEN"
      break;
    case 4:
      name.textContent  = "OWEN "
      break;
    case 5:
      name.textContent  = "OWEN C"
      break;
    case 6:
      name.textContent  = "OWEN CU"
      break;
    case 7:
      name.textContent  = "OWEN CUM"
      break;
    case 8:
      name.textContent  = "OWEN CUMM"
      break;
    case 9:
      name.textContent  = "OWEN CUMMI"
      break;
    case 10:
      name.textContent  = "OWEN CUMMIN"
      break;
    case 11:
      name.textContent  = "OWEN CUMMING"
      break;
    case 12:
      name.textContent  = "OWEN CUMMINGS"
      break;
    case 13:
      name.textContent = "OWEN CUMMINGS."
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
