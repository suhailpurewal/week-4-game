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
// $("#health1").text("Health: " + characters[0].health);
// $("#health2").text("Health: " + characters[1].health);
// $("#health3").text("Health: " + characters[2].health);
// $("#health4").text("Health: " + characters[3].health);

// function(reset) {
// 	 put a bunch of reset stuff in here 
// }

$(".resetButton").on("click",function(){
	reset();
});

$(".characters").on("click", function(){
	if (userCharacter === undefined){
	var placeholder = this.id;
	userCharacter = characters[placeholder];
	console.log(userCharacter)
		$(this).appendTo("yourHero")
		$(this).removeClass("playableCharacter")
		$(this).removeClass("characters")
		$(this).addClass("yourHero")
		
		$(".characters").removeClass("playableCharacter")
		$(".characters").addClass("enemyCharacter")
		$(".characters").appendTo("enemies")
		$(".instructionalText").html("Now choose your opponent!");
	}
	// 	else if (defenderName === undefined && userCharacter !== undefined){
		
	// 	var placeholder = this.id;
	// 	defenderName = characters[placeholder];
	// 	console.log(defenderName); 
	// 	$(this).addClass("hideMe");
	// 	$(this).removeClass("enemyCharacter"); 
	// 	$(this).addClass("currentEnemy");
	// 	$(".instructionalText").html("Let the battle begin!");
	// }


});


// no idea what to do to make this work, but i think this is the right idea
$(".characters").hover(function(){
		var placeholder = this.id;
		var charinfo = characters[placeholder];
		$(".instructions").html("<p>" +  charinfo.name + " has : " + charinfo.health + " Health Points and " + charinfo.attack + " Attack Power.</p>");
	},
		function(){
		if(userCharacter===undefined){
			$(".instructions").html("<p>Choose your Character!</p>");
		} else if (userCharacter!==undefined && defender===undefined){
			$(".instructions").html("<p>Pick your Enemies!</p>");
		} else {
			$(".instructions").html("<p>FIGHT!</p>");
		}
	});
	
});



