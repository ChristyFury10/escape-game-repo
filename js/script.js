"use strict";

const inventoryItems = [];
const $inventoryBar = $(".inventory-bar")
const $inventoryItems = $("#inventory-items")
const $inventoryItem = $("li")
const $currentRoom = $("#room")

let livingRoomBackground = 

//hide welcome screen on click of enter button
$("#enterButton").on("click", function(evt){
  console.log("you have entered the house");
  $("#welcome-screen").addClass("hide");
  //gameStart();
})

// // start new game with 
// function gameStart(){
//   console.log('New game started');
//   //new NewGame();  
// }

// room change functions
const toLivingRoom = function(){
  //hide all atrium elements and show all living room elements
  $currentRoom.addClass("living-room");
  console.log("now in living room");
  }
  
  // clicking book"key" inliving room
  $(".living-room-key").click(function(evt){
    console.log("you found a book")
    let $newItem = $("<li>book</li>")
    $inventoryItems.append($newItem);
    $newItem.addClass("invItem");
    $(".living-room-key").addClass("hide")
  })




// click event for atroum key, hide key on screen and add to inventory box and array, then call fucntion to start next room
$(".atrium-key").click(function(evt){
  console.log("clicked key");
  inventoryItems.push("key");
  let $newItem = $("<li>key</li>")
  $inventoryItems.append($newItem);
  $newItem.addClass("invItem");
  $(".atrium-key").addClass("hide");
  

  console.log(inventoryItems)
})

//door locked unless key is in inventory array
$(".atrium-door").click(function(evt){
  console.log("clicked door");
  if (inventoryItems.includes("key")){
    console.log("door unclocked");
    $(".atrium-door").addClass("hide");
    toLivingRoom();

  }
  else {
    console.log("Hmm seems to be locked");
    // add message in screen...
  }
});


// $(".atrium-door").on("click", funcion(){

// })



// create object with each room and contents

// const rooms = {
//   atrium: {
//     key: "key",
//     door: "door"
//   },
//   livingRoom: {
//     key: "book",
//     door: "bookshelf"
//   }
// }


// $key.click(function(evt){
//   console.log("clicked key")

// })

// class NewGame {
//   constructor()
//   {
//     this.room = room,
//     this.inventory = []
//   }
  
  
// }


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