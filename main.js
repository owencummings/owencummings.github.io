//initial comment wow
function main(){
  //alert('Hello, world!');
  //alert(string(screen.height) + 'px');
  //$('div').css('height', '500px');//string(screen.height) + 'px');
  $('#scrollButton').click(function(){
    //alert((window.innerHeight + "px"));
    $("html, body").animate({ scrollTop: (window.innerHeight + currentHeight) + "px"});
    currentHeight = currentHeight + window.innerHeight;
  })
}

var currentHeight = 0;

$(document).ready(function(){
    $(this).scrollTop(0);
    currentHeight = 0;
});
$(document).ready(main);
