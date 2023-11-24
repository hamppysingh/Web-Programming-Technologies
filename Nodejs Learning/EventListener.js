const EventEmitter=require('events');
const Emitter=new EventEmitter();

//Register a listener.....this listener uses our custom event and executes the code....
Emitter.on('Message Logged!!',function(arg){
    console.log('Listener Called...',arg);
});

//Raise an Event
Emitter.emit('Message Logged!!',{id:1,url:'http://'});
//This is creating a Event and then we can use that custom event...