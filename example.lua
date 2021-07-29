local data = game:GetService("HttpService"):JSONDecode(require(script.Parent.Texture))
local img = {}
local width = 100
local height = 100

for x=1,width do
	img[x] = {}
	local line = data[tostring(x-1)]
	for y=1,height do
		img[x][y] = data[tostring(x-1)][y]
	end
end

local function getPixel(x,y)
	return img[y][x]
end

return getPixel