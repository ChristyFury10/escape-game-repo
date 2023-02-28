"use strict";

const inventoryItems = [];
const $inventoryBar = $(".inventory-bar")
const $inventoryItems = $("#inventory-items")
const $inventoryItem = $("#inventory-items li")

//hide welcome screen on click of enter button
$("#enterButton").on("click", function(evt){
  console.log("button clicked");
  $("#welcome-screen").addClass("hide");
  gameStart();
})

// start new game with 
function gameStart(){
  console.log('New game started');
  //new NewGame();  
}

$(".atrium-key").click(function(evt){
  console.log("clicked key");
  inventoryItems.push("key");
  $inventoryItems.append("<li ><img src = 'https://img.icons8.com/ios/256/password1--v1.png'></li>");
  $(".atrium-key").addClass("hide")

  console.log(inventoryItems)
})

$(".atrium-door").click(function(evt){
  console.log("clicked door");
  if (inventoryItems.includes("key")){
    console.log("door unclocked");
    

  }
  else console.log("Hmm seems to be locked")
});


// $(".atrium-door").on("click", funcion(){

// })



// create object with each room and contents

const rooms = {
  atrium: {
    key: "key",
    door: "door"
  },
  livingRoom: {
    key: "book",
    door: "bookshelf"
  }
}


// $key.click(function(evt){
//   console.log("clicked key")

// })

class NewGame {
  constructor()
  {
    this.room = room,
    this.inventory = []
  }
  
  
}


// const gamePlay = newGame ({
//   state: "login", 
//   transitions:{
//     room1: {},
//     room2: {},

//   }

// })

// let state = {};

// create an object for each room













// creates game play object
// class GamePlay {
//     constructor(name)
//     {
//     this.name = name;
//     this.inventory = [];
//     }

//     // methods for gameplay


// }

// const player = new GamePlay("name");









/*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/