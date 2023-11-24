const http=require('http');
//create a server that returns a function that directs the url to 2 different pages and shows whats they have....
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World!!');
        res.end();
    }
    if(req.url==='/api/courses')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
//when the browser searches http://localhost:3000 then new connection made is shown in nodejs cmd
server.on('connection',(socket)=>{
    console.log('New Connection...');
})

server.listen(3000);
//server listens to the port mentioned
console.log('Listening on port 3000...')