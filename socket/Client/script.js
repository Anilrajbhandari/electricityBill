var socket = io('http://localhost:5000');
let connectionStatus  = document.getElementById('connectionStatus');

connectionStatus.innerText = 'Disconnected'

let name = prompt('Enter name');

while (!name) {
    let name = prompt('Enter Name');
}

  socket.on('connect', function(){
      connectionStatus.innerText = 'Connected';
  });

  //socket.on('event', function(data){});

  socket.on('disconnect', function(){
      connectionStatus.innerText = 'Disconnected'
  });
let messageBox = document.getElementById('messageBox');
let messageForm = document.getElementById('messageForm');
let messageField = document.getElementById('messageField');
//vannila js

messageForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let newMessage = `${name}:${messageField.value}` ;

    socket.emit('newMessagePatan',newMessage);
    appendMessage(newMessage);

    messageField.value = '';
    //console.log(newMessage)
})

socket.on('messageboardcast',data=>{
    console.log(data);
})

function appendMessage(newMessage){
    let newMessageToAppend = document.createElement('div');
    newMessageToAppend.innerText = newMessage;
    console.log(newMessage);

    messageBox.append(newMessageToAppend);
}

