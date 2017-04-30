//initial comment wow
function main(){
  //alert('Hello, world!');
  //alert(string(screen.height) + 'px');
  //$('div').css('height', '500px');//string(screen.height) + 'px');
  $('#scrollButton').click(function(){
    $("html, body").animate({ scrollTop: ("700" + "px") });
  })
}


$(document).ready(main);
