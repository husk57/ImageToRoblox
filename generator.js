const png = require("png-js")
const fs = require("fs")

let texArray = {}
let width = 100;
let height = 100;
png.decode('texture.png', function(pixels) {
	let array = pixels.toJSON().data
	for (let x=0; x<width; x++) {
		texArray[parseInt(x)] = []
	}
	for (let i=0; i<width*height; i++) {
		var r = pixels[i*4]
    	var g = pixels[i*4+1]
    	var b = pixels[i*4+2]
    	let y = parseInt(i / width, 10);
   		let x = i - y * width;
   		texArray[y][x] = [r,g,b]
	}
	fs.writeFile("output.json", JSON.stringify(texArray), "utf8", (err) => {
	if (err) {
		console.log('${err}')
	}
})
})
