//creating var for characters

var characters = [
	{
		name: "Luke Skywalker",
		image: "skywalker.jpg",
		health: 100,
		attack: 10,
		counter: 15,
	},
	{
		name: "Obi-Wan Kenobi",
		image: "obiwan.jpg",
		health: 120,
		attack: 15,
		counter: 20,
	},
	{
		name: "Darth Sidious",
		image: "sidious.jpg",
		health: 150,
		attack: 20,
		counter: 25,
	},
	{
		name: "Darth Maul",
		image: "maul.jpg",
		health: 180,
		attack: 25,
		counter: 30,
	},
]
// various other var's i think i'll need
var enemies = {};
var defender = {};
var userCharacter = {};
var pickedName = {};
var defenderName = {};


// doc ready handler
$(document).ready(function(){
$("#health1").text("Health: " + characters[0].health);
$("#health2").text("Health: " + characters[1].health);
$("#health3").text("Health: " + characters[2].health);
$("#health4").text("Health: " + characters[3].health);

$("#spot1").on("click", function(){
	console.log(characters[0].attack)
})
$("#spot2").on("click", function(){
	console.log(characters[1].attack)
})
$("#spot3").on("click", function(){
	console.log(characters[2].attack)
})
$("#spot4").on("click", function(){
	console.log(characters[3].attack)
})

















});



