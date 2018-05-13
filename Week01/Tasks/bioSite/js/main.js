// JavaScript Document

function retrieve() {
	"use strict";
	var chosenPokemon = Number($("#pokemonID").val());
	$("#pokeText").empty();
	$("#pokePic").empty();

	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/' + chosenPokemon,

    success: function(data) {
			let pokemonID = data.id;
			let pokemonName = data.name;
			let pokeType1 = data.types[0].type.name;
			let pokeType2;
			if (data.types.length > 1) {pokeType2 = data.types[1].type.name;}
			let pokePhoto = data.sprites.front_default;

			$("#pokeText").append(`<h3>${pokemonName}, #${pokemonID}</h3>`);
			if (pokeType2) {$("#pokeText").append(`<p>${pokeType1}/${pokeType2}</p>`);}
			else {$("#pokeText").append(`<p>${pokeType1}</p>`);}
			$("#pokePic").append(`<img src=${pokePhoto} alt='A pokemon sprite' width="75%">`);
    }
	});
}

//Uses ajax call to get JSON data from weather app based on geolocation
$.ajax({
	url: `https://api.openweathermap.org/data/2.5/weather?lat=38.966731466424065&lon=-77.38710390383089&APPID=fef70b002c9741456fbf8d4466780a9d`,

	success: function(data) {
		console.log(data);
		weatherDesc = data.weather[0].main;

		//Sets the weather icon based on time & conditions; As I learn new conditions, I write the code to handle them
		switch (weatherDesc) {
			case "Clear":
				$(".bgColorNav").css({"border-color":"blue"});
				$("#logo", "#about", "#hobby").mouseenter(function(){$("#logo", "#about", "#hobby").css({"color":"blue"});});
				$("#logo", "#about", "#hobby").mouseleave(function(){$("#logo", "#about", "#hobby").css({"color":"red"});});
				break;
			case "Rain":
				$(".bgColorNav").css({"border-color":"red"});
				break;
			case "Thunderstorm":
				$(".bgColorNav").css({"border-color":"red"});
				break;
			case "Drizzle":
				$(".bgColorNav").css({"border-color":"red"});
				break;
			case "Snow":
				$(".bgColorNav").css({"border-color":"red"});
				break;
			case "Fog":
				$(".bgColorNav").css({"border-color":"yellow"});
				$("#logo", "#about", "#hobby").removeAttr("id");
				$("#logo").attr("id", "logo-yellow");
				$("#about").attr("id", "about-yellow");
				$("#hobby").attr("id", "hobby-yellow");
				break;
			case "Haze":
				$(".bgColorNav").css({"border-color":"yellow"});
				$("#logo", "#about", "#hobby").removeAttr("id");
				$("#logo").attr("id", "logo-yellow");
				$("#about").attr("id", "about-yello");
				$("#hobby").attr("id", "hobby-yellow");
				break;
			default:
				$(".bgColorNav").css({"border-color":"green"});
				$("#logo", "#about", "#hobby").removeAttr("id");
				$("#logo").attr("id", "logo-green");
				$("#about").attr("id", "about-green");
				$("#hobby").attr("id", "hobby-green");
				console.log("Unknown weather phenomenon");
				break;
		}

	}
});
