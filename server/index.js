const express =  require("express");

const app = express();

app.get('/', (req,res)=>{

	res.send({
		msg: `${process.env.MESSAGE}`
	});
});

app.listen(8000, ()=>{
	console.log("server listening at port 8000");
})
