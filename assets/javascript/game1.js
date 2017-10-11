//creating var for characters
console.log("you're good to go")
//adding another class to help pull up chars later
$(".characters").addClass("playableCharacter");
$(".characters").addClass("enemies");

// var for characters & stats
var characters = {
	Luke : {
		name: "Luke Skywalker",
		image: "skywalker.jpg",
		health: 100,
		attack: 10,
		counter: 15,
		jQueryElement: $("#Luke")
	},
	Kenobi : {
		name: "Obi-Wan Kenobi",
		image: "obiwan.jpg",
		health: 120,
		attack: 15,
		counter: 20,
		jQueryElement: $("#Kenobi")
	},
 	Sidious : {
		name: "Darth Sidious",
		image: "sidious.jpg",
		health: 150,
		attack: 20,
		counter: 25,
		jQueryElement: $("#Sidious")
	},
 	Maul : {
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
var userCharacter;
var pickedName;
var defenderName;
var state = "clear"
var htmlBuild; 


// doc ready handler
$(document).ready(function(){

//select your hero - waits for click and then removes/adds some classes and moves objects to the new divs
function selectchar() {
$("body").on("click", ".playableCharacter", function() {
		$(".playableCharacter").off();
		var placeholder = this.id;
		pickedName = characters[placeholder];
		console.log("Select Char function working");
		console.log(pickedName);
		$(this).addClass("pickedName");
		$(this).removeClass("playableCharacter");
		$(this).removeClass("character");
		$(this).appendTo("#yourHero");
		$(".character").appendTo("#enemies");
		$(".character").addClass("enemies");
		$(".character").removeClass("playableCharacter")
					
	})
};



// select person you will attack - having issues - 'this' seems to be connected to the top function
function selectdefender() {
$("body").on("click", ".enemies", function() {
		$("body").off();
		var placeholder = this.id;
		console.log("defender function working");
		defender = characters[placeholder];
		console.log(defender);
		$(this).addClass("defender");
		$(this).removeClass("enemies");
		$(".defender").appendTo("#defender");			
	})
}


// reset classes, locations & values so you can play again.
function reset() {
		$(".pickedName").addClass("character");		
		$(".character").addClass("playableCharacter");
		$(".character").removeClass("pickedName");
		$(".character").removeClass("enemies");
		$(".character").removeClass("defender");
		$("character").removeClass("defeated");
		$(".character").removeClass("hidden");
		$(".character").appendTo("#playableCharacters");
characters = {
	Luke: {
		name: "Luke Skywalker",
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
		console.log("you clicked reset");
		selectchar();
		selectdefender();
	};
// calling reset on clicking reset button
$(".reset-button").on("click", function() {
	reset();
})

function updatehealth() {
$("#health1").text("Health: " + characters.Luke.health);
$("#health2").text("Health: " + characters.Kenobi.health);
$("#health3").text("Health: " + characters.Sidious.health);
$("#health4").text("Health: " + characters.Maul.health);
};

// attack functions
updatehealth();
selectchar();
selectdefender();
//attack button
$(".attack-button").on("click", function() {
	console.log("you clicked attack!")
	if (defender.health > 1) {
	defender.health-=pickedName.attack;
	pickedName.health-=defender.counter;
	updatehealth();
		console.log(defender.health);
		console.log(pickedName.health);
	} else {
		alert("You beat " + defender.name);
		$(".defender").addClass("defeated");
		$(".defender").addClass("hidden");		
		$(".defender").appendTo("#dead");
		$(".defender").removeClass("defender");
		updatehealth();
		selectdefender();
	}
	if (pickedName.health < 1) {
		alert("You Lose!");
		reset();
	}

});
})

// how to get health to not reach 0? characters.health <= 0?
// how to push win message after all 3 are beaten?
// was having issues with this , fixed with .off
// also having issues with syntax for the math









