var inputPeople, inputOverload, inputPrayer, inputRestores, inputBrews;
var Overload, Prayer, Restores, Brews, Vials, Buchu, Golpar, Noxifer, Mushroom, Cicely, Juice;
var splitOverloads, extraPiles;

$(document).ready(function() {
	inputPeople = document.getElementById("inputPeople");
	inputOverload = document.getElementById("inputOverload");
	inputPrayer = document.getElementById("inputPrayer");
	inputRestores = document.getElementById("inputRestores");
	inputBrews = document.getElementById("inputBrews");

	Overload = document.getElementById("Overload");
	Prayer = document.getElementById("Prayer");
	Restores = document.getElementById("Restores");
	Brews = document.getElementById("Brews");

	Vials = document.getElementById("Vials");
	Buchu = document.getElementById("Buchu");
	Golpar = document.getElementById("Golpar");
	Noxifer = document.getElementById("Noxifer");
	Mushroom = document.getElementById("Mushroom");
	Cicely = document.getElementById("Cicely");
	Juice = document.getElementById("Juice");

	splitOverloads = document.getElementById("inlineSplit").checked;
	extraPiles = document.getElementById("inlineExtras").checked;

	updateAmounts();
});

$(document).change(function() {
	updateAmounts();
});
//TODO split overloads
function updateAmounts() {
	splitOverloads = document.getElementById("inlineSplit").checked;
	extraPiles = document.getElementById("inlineExtras").checked;

	var people = parseInt(inputPeople.value);

	if (splitOverloads) {
		var totalOverloads = calculateSplitOverloads(people);
	} else {
		var totalOverloads = inputOverload.value*people;
	}

	var totalPrayers = inputPrayer.value*people;
	
	if (extraPiles) {
		var totalRestores = inputRestores.value * people + people;
		var totalBrews = inputBrews.value * people + people;
	} else {
		var totalRestores = inputRestores.value * people;
		var totalBrews = inputBrews.value * people;
	}

	Overload.innerHTML = totalOverloads;
	Prayer.innerHTML = totalPrayers;
	Restores.innerHTML = totalRestores;
	Brews.innerHTML = totalBrews;

	Vials.innerHTML = calculateVials(totalOverloads, totalPrayers, totalRestores, totalBrews);

	if (totalOverloads == 0) {
		$(".Overloads").hide();
	} else {
		$(".Overloads").show();
		Noxifer.innerHTML = calculateNoxs(totalOverloads);
		Golpar.innerHTML = calculateGolpars(totalOverloads);
	}
	
	Buchu.innerHTML = calculateBuchus(totalPrayers, totalRestores, totalBrews);
	Mushroom.innerHTML = calculateMushrooms(totalOverloads, totalRestores);
	Cicely.innerHTML = calculateCicely(totalOverloads, totalPrayers);
	Juice.innerHTML = calculateJuice(totalOverloads, totalBrews);
}

// 3 vials per overload, one vial each for prayer, brew and restores
function calculateVials(ovs, prayers, rests, brews) {
	return 3 * ovs + prayers + rests + brews;
}

// 1 buchu for each prayer, restore and brew
function calculateBuchus(prayers, rests, brews) {
	return prayers + rests + brews;
}

// 3 golpar for each overload
function calculateGolpars(ovs) {
	return 3 * ovs;
}

// 1 nox per overload
function calculateNoxs(ovs) {
	return ovs;
}

// 1 mushroom for each overload and restore
function calculateMushrooms(ovs, rests) {
	return ovs + rests;
}

// 1 cicely for each overload and prayer enhance
function calculateCicely(ovs, prayer) {
	return ovs + prayer;
}

// 1 juice for each overload and brew
function calculateJuice(ovs, brews) {
	return ovs + brews;
}

function calculateSplitOverloads(people) {
	return Math.ceil(people/2);
}