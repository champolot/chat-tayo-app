function scroll(speed) {
    $('#chat-window').animate({ scrollTop: $('#chat-window').height() * 100 }, speed, function() {
        $(this).animate({ scrollTop: 0 }, 300);
    });
}
$(document).ready(function()
{
var speed = 20000;
scroll(speed)
setInterval(function(){scroll(speed)}, 1000);
 });

 $('#message').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
     {
       $('#send').click();
       return false;  
     }
});  

$("#notification").delay(8000).fadeOut("slow");