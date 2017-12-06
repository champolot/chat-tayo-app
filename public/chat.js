// Make Connection
var socket = io.connect();

// Query Dom
var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback'),
    notification = document.getElementById('notification');

// Emit Events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    socket.emit('notif', {
        message: message.value,
        handle: handle.value 
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML="";
    output.innerHTML += '<p><strong>'+ data.handle +':</strong>'+ data.message +'</p>';
});

socket.on('notif', function(data){
    $.toast(data.handle + data.message);
})

socket.on('typing', function(data){
    feedback.innerHTML  = '<p><em>' + data + ' is typing a message...</em></p>'
});