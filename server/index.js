const express =  require("express");

const app = express();

app.get('/', (req,res)=>{

	res.send({
		msg: "hello world"
	});
});

app.listen(8000, ()=>{
	console.log("server listening at port 8000");
})
