//creating var for characters
console.log("you're good to go")
$(".characters").addClass("playableCharacter");

var characters = {
	Luke: {
		name: "Luke",
		image: "skywalker.jpg",
		health: 100,
		attack: 10,
		counter: 15,
		jQueryElement: $("#Luke")
	},
	Kenobi: {
		name: "Obi-Wan Kenobi",
		image: "obiwan.jpg",
		health: 120,
		attack: 15,
		counter: 20,
		jQueryElement: $("#Kenobi")
	},
 	Sidious: {
		name: "Darth Sidious",
		image: "sidious.jpg",
		health: 150,
		attack: 20,
		counter: 25,
		jQueryElement: $("#Sidious")
	},
 	Maul: {
		name: "Darth Maul",
		image: "maul.jpg",
		health: 180,
		attack: 25,
		counter: 30,
		jQueryElement: $("#Maul")
	},
}
// various other var's i think i'll need
var enemies = {};
var defender = {};
var userCharacter = {};
var pickedName = {};
var defenderName;
var state = "clear"
var htmlBuild; 


// doc ready handler
$(document).ready(function(){

//select your hero
function selectchar() {
$(".playableCharacter").on("click", function() {
		$(".playableCharacter").off();
		var placeholder = this.id;
		userCharacter = characters[placeholder];
		console.log(userCharacter);
		$(this).addClass("pickedName");
		$(this).removeClass("playableCharacter");
		$(this).removeClass("character");
		$(this).appendTo("#yourHero");
		$(".character").appendTo("#enemies");
		$(".character").addClass("enemies");
		$(".character").removeClass("playableCharacter")
					
	})
}
selectchar();

// select person you will attack
function selectdefender() {
$(".character").on("click", function() {
		var placeholder = this.id;
		console.log(placeholder);
		defender = characters[placeholder];
		console.log(defender);
		$(this).addClass("defender");
		$(this).removeClass("enemies");
		$(".defender").appendTo("#defender");			
	})
}
selectdefender();

function reset() {
		$(".pickedName").addClass("character");		
		$(".character").addClass("playableCharacter");
		$(".character").removeClass("pickedName");
		$(".character").removeClass("enemies");
		$(".character").removeClass("defender");
		$(".character").appendTo("#playableCharacters");
		console.log("you clicked reset");
		selectchar();
	};

$(".reset-button").on("click", function() {
	reset();
})





});


