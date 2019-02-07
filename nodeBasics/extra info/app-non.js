// var time = 0;

// var timer = setInterval(() => {   this is like a timer / loop
//     time += 1;
//     console.log(`${time}  seconds have passed`)
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 1000);


// console.log(__dirname);   this gives directory path
// console.log(__filename);  this gives full file path

///////////////////////////////////FUNCTION EXPRESSION????????????????????????????????

// var sayBye = () =>{
//     console.log('bye');
// }

// sayBye();


// function callFunctiiom( fun){     you can also make a function a parameter to call a function 
//     fun();
// }

// callFunctiiom(sayBye);



///////////////////////////////////////////MODULES////////////////////////////////////////////
// used to import methods/functions into this file 

// var stuff = require('./stuff');
 
// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));

// first we requier 
//second make sure in the required file we use module.export to make the function/var available
//initiate it with a variable like in line 35

//////////////////////////////////////////Moduels continiued//////////////////////////////////////////
//to make multiple stuff available you must require and 
// then moduel.exports = { variable u want : name to call it      } (See stuff.js for example)
// for each method u want 


// console.log(stuff.adder(1,3));
// console.log(stuff.adder(2,stuff.pi));


// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){     ---   Event emitter exxample   ----
// console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

// var util = require('util');

// var person = (name) => {
//     this.name;
// };

// util.inherits(person, events.EventEmitter);

// var james = new person('james');
// var mary = new person('mary');
// var ryu = new person('ryu');

// var people = [james, mary, ryu];

// people.forEach((person) =>{
// person.on('speak', (mssg)=>{
//     console.log(`${person.name} said: ${mssg}`);
//     });

// });

// james.emit('speak', 'hey dudes');
 

//---------------------------------------------------__READING AND WRITING FILES__--------------------------

// var fs = require('fs');

// fs.readFile('readMe.txt', 'utf8',(err, data) =>{

//     fs.writeFileSync('writeMe.txt', data);

// });


// fs.unlink('./writeMe.txt', (err)=> {
//     console.log('this file doesnt exist');
// });


//--------------------------------Making and deleting directory---------------

//____________________syncronously________________
// fs.mkdirSync('stuff'); this creates directory \ 

// fs.rmdirSync('stuff'); 

//_________________________asyncronously_____________
// fs.mkdir('stuff' ,()=>{
//     fs.readFile('readMe.txt', 'utf8', (err,data)=>{
//         // fs.writeFile('./stuff/writeMe.txt', data);
//         console.log('test');
//         fs.writeFileSync('./stuff/writeMe.txt', data)

//     });
// });

//------------------- remove Directory------------------------

// can only remove a directory only if its empty

// fs.unlink('./stuff/test1.txt', ()=>{
//     fs.rmdirSync('./stuff/');
//  });


//_---------------------------SERVER !!!!!!!!!!!!!__________________------------------
// var http = require('http');

// var server = http.createServer((req, res) => {
//     console.log(`request was made: ${req.url}`)
//     res.writeHead(200,{'Content-Type': 'text/plain'});    

//     res.end('hey ninjas');
// });


// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');
// ---------------------------------------- read Stream ---------------------


//--------------------------------------Read and write streams-------------------------

// var http = require('http');
// var fs = require('fs');

// var count =0;
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream= fs.createWriteStream(__dirname + '/writeMe.txt')

// myReadStream.on('data' , (chunk)=> {
// console.log(`new chunk recieved` + count);
// count ++;
// myWriteStream.write(chunk);
// });

//--------------------------PIPES--TO SERVER---------------------------

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer((req, res) => {
//     console.log(`request was made: ${req.url}`);
//     res.writeHead(200,{'Content-Type': 'text/plain'});    
//     var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//     myReadStream.pipe(res);

// });
 



// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000');




/*

********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


        -------------------------------__HTML SERVING ---------------------------
*/

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer((req, res) => {
//     console.log(`request was made: ${req.url}`);
//     res.writeHead(200,{'Content-Type': 'text/html'});    
//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//     myReadStream.pipe(res);

// });
 



// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000')



//-------------------------------------Serving JSON Data-----------------

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer((req, res) => {
//     console.log(`request was made: ${req.url}`);
//     res.writeHead(200,{'Content-Type': 'application/json'});    
   
//     var myObj = {
//         name : 'ryu',
//         job : 'ninja',
//         age : '29'
//     };

//     res.end(JSON.stringify(myObj));
// });
 



// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000')




//------**************************************ROUTING***************************************************************

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer((req, res) => {
//     console.log(`request was made: ${req.url}`);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream('./index.html').pipe(res);
//     }
//     else if(req.url ==='/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream('./contact.html').pipe(res);
//     }
//     else if(req.url === '/api/ninjas'){
//         var ninja = [{name : 'ryu', age:29}, {name : 'yoshi', age: 32}];
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(JSON.stringify(ninja));
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream('./404.html').pipe(res);
//     }
// });
 



// server.listen(3000, '127.0.0.1');
// console.log('now listening to port 3000')
