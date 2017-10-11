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
var defender;
var userCharacter;
var pickedName;
var defenderName;
var attackPower = 0;

// doc ready handler
$(document).ready(function(){

//select your hero - waits for click and then removes/adds some classes and moves objects to the new divs
function selectchar() {
$("body").on("click", ".playableCharacter", function() {
		$(".playableCharacter").off();
		var placeholder = this.id;
		pickedName = characters[placeholder];
		attackPower = pickedName.attack;
		console.log("Select Char function working");
		console.log(pickedName);
		$(this).addClass("pickedName");
		$(this).removeClass("playableCharacter");
		$(this).removeClass("character");
		$(this).appendTo("#yourHero");
		$(".character").appendTo("#enemies");
		$(".character").addClass("enemies");
		$(".character").removeClass("playableCharacter")
		hoverstats();
					
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
		hoverstats();			
	})
}


// reset classes, locations & values so you can play again.
function reset() {
		$(".pickedName").addClass("character");		
		$(".character").addClass("playableCharacter");
		$(".character").removeClass("defeated");
		$(".character").removeClass("pickedName");
		$(".character").removeClass("enemies");
		$(".character").removeClass("defender");
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
		attackPower = 0;
		console.log("you clicked reset");
		selectchar();
		selectdefender();
		updatehealth();
		hoverstats();
	};
// calling reset on clicking reset button
$(".reset-button").on("click", function() {
	reset();
})

//function to update health in character boxes
function updatehealth() {
$("#health1").text("Health: " + characters.Luke.health);
$("#health2").text("Health: " + characters.Kenobi.health);
$("#health3").text("Health: " + characters.Sidious.health);
$("#health4").text("Health: " + characters.Maul.health);
};

// function calls
updatehealth();
selectchar();
selectdefender();
hoverstats();

//attack button - updates health on html - adds classes to hide & moves defeated opponents. - also prompts if you lose
$(".attack-button").on("click", function() {
	console.log("you clicked attack!")
	if (defender.health >= 1) {
	defender.health-=pickedName.attack;
	pickedName.health-=defender.counter;
	pickedName.attack += attackPower;
	updatehealth();
		// console.log(defender.health);
		console.log(pickedName.attack);
	} else {
		alert("You beat " + defender.name);
		$(".defender").addClass("defeated");
		$(".defender").addClass("hidden");		
		$(".defender").appendTo("#dead");
		$(".defender").removeClass("defender");
		updatehealth();
		selectdefender();
		hoverstats();
	}
	if (pickedName.health <= 1) {
		alert("You Lose!");
		reset();
	}

});

//shows character stats when you hover over - it should then tell you who to pick, and that the game is ready, but that's not working yet.
function hoverstats(){
$(".playableCharacter").hover(function(){
		var placeholder = this.id;
		var stats = characters[placeholder];
		$(".instructions").html("<p>" +  stats.name + " has : " + stats.health + " Health Points, " + stats.attack + " Attack Power and " + stats.counter + " Counter-Attack. </p>");
	}, 
		function(){
		if(pickedName===undefined){
			$(".instructions").html("<p>Choose your Character!</p>");
		} else if (pickedName!==undefined && defender===undefined){
			$(".instructions").html("<p>Choose your Adversary wisely!</p>");
			console.log("ITS WORKING")
		} else {
			$(".instructions").html("<p>Let the battle begin!</p>");
		}
	}
);
};
})

// how to get health to not reach 0? characters.health <= 0?
// how to prevent buttons from being pushed when not in correct state
// how to push win message after all 3 are beaten?
// hoverstats only working through the first if.
// was having issues with this , fixed with .off









