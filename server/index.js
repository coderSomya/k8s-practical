const express =  require("express");
const cors = require("cors");
const app = express();

app.user(cors())

app.get('/', (req,res)=>{

	res.send({
		msg: `${process.env.MESSAGE}`
	});
});

app.listen(8000, ()=>{
	console.log("server listening at port 8000");
})
