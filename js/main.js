// //Print "hello world" to console, the screen and alert
// // document.write("Hello world")
// 	// console.log("Hello world")
// 	// alert("Hello world")
// var name = prompt("whats your name")
// 	if(name == "tiffany") {
// 		console.log("Hey " + name)
// 	}
// //create 4 variable with differet types of value
// 	var num = 14
// 	var str = "string value goes here"
// 	var bool = true
// 	var arr = [14, 26, 88, "string", true, num]

// 	//use concatenation to combine the value of 3 variables into 1
// 	var combo = num + str + arr
// 	console.log(combo)

// 	// Create a function that accepts a parameter and runs with an argument

// 	function testing(n, a)
// 		console.log(n * a)
// 	}
	// testing(5,100)	


// var name = prompt("whats your name")
// var username = name.toLowerCase()
// 	if(name == "colin") {
// 	console.log("hey" + name)
// 	}
// if(name == "alice" || name == "bob") {
// 		document.write("Welcome " + name)	
// } else {
// 	document.write("Go away " + name + "!")
// }			

// //document.getElementById("id").innerHTML = & document.getElementById
// document.getElementById("heading").textContent = "codify"

//.value to retrienve input data from form

// function greeting() {
// 	var username = document.getElementById("username").value 
	
// 	if(username == "alice" || name == "bob") {
// 	document.getElementById("heading").textContent = "Hello "  + username + "!"
// 	} else {
// 	document.getElementById("heading").textContent = "Go away! " + username + "!"

// 	}
// }

//Arrays for loop referebcubg an array

// var numArray = [14, 83, 105, 77, 32]
// var largest = 0;

// for(i = 0; i < numArray.length; i++) {
// 	if(largest < numArray[i]) {
// 		largest = numArray[i]
// 		console.log(largest)
// 	}
// }

// Project : find the biggest number in an array	

// Objects

var user = [
	{
		username: "Matt",
		password: "Password1"
	},
	{
		username: "Chris",
		password: "Password2"
	},
	{
		username: "Sam",
		password: "Password3"
	}
]

function greeting() {
	var username = document.getElementById("username").value 
	var password = document.getElementById("password").value
	var newUser = {
		username: username,
		password: password
	}
	objPeople.push(newUser) 
	
	for(i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username) {
			alert("That username is already in use")
			return
		} else if(registerPassword.length < 8) {	
	 	alert("That password is too short")
		return
		}
	}
}		
	