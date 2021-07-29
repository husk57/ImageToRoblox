const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
	res.statusCode = 200
	res.setHeader("Content-Type", "text/plain")
	let data = JSON.parse(fs.readFileSync("output.json", "utf8"))
	res.end(JSON.stringify(data))
})

server.listen(8080, "127.0.0.1")