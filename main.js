//initial comment wow
function main(){
  //alert('Hello, world!');
  //alert(string(screen.height) + 'px');
  //$('div').css('height', '500px');//string(screen.height) + 'px');



  $('#scrollBar').click(function(){
    //alert((window.innerHeight + "px"));
    $("html, body").animate({ scrollTop: (2*(window.innerHeight + currentHeight)) + "px"}, 1500);
    currentHeight = currentHeight + window.innerHeight;
  })
}

var currentHeight = 0;

$(document).ready(function(){
    $(this).scrollTop(0);
    currentHeight = 0;
});
$(document).ready(main);
