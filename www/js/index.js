var celebration = {
    "chocbar":{
	"Energy kj":"2068",
    "Fat ":"24.4",
	"Carbohydrate": "62.3",
	"Protein ": "5.5",
	"Salt": "0.40"
    }	
}

obj = JSON.parse(celebration);

document.getElementById("chocbar").innerHTML =
obj.chocbar.Salt;