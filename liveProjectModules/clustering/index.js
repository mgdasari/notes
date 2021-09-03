var cluster =require('cluster');
var http=require('http');
var cpuLenght = require('os').cpus().length;


if(cluster.isMaster){console.log('second')
	for (let i=0;i<cpuLenght;i++){console.log('third')
	
	cluster.fork()  //Fork is to create a instance of a process .when this happen it check cluster.Ismaster which is false an create a server
	}
	
	cluster.on('exit',()=>{cluster.fork()}) //When the cluster die for any reason it will again create ann instance of master.
}
else{console.log('first')
	http.createServer((req,res)=>{
	res.writeHead(200);
	res.end('processId' + process.pid)

	}).listen(8080,()=>{
        console.log('hello from server ' + process.pid);
    })

}

/**
 * When ever we run the index.js the ismaster remans true so as per cpu lenght 4 process is created which use 4 cpu.
 * And each process create a hhtp serve which distribute the load in round robin fashion.
 */