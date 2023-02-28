"use strict";

const inventoryItems = [];
const $inventoryBar = $(".inventory-bar")
const $inventoryItems = $("#inventory-items")
const $inventoryItem = $("li")
const $currentRoom = $("#room")
const $atriumKey = $(".key")
const $door = $(".exit-door")


let livingRoomBackground = 

//hide welcome screen on click of enter button
$("#enterButton").on("click", function(evt){
  console.log("you have entered the house");
  $("#welcome-screen").addClass("hide");
  toAtrium();

  //gameStart();
})

//functions to change rooms
const toAtrium = function() {
  console.log("entered atrium");
  $("#room").removeClass("front-of-house").addClass("atrium");
  $(".key").removeClass("hide").addClass("atrium-key");
  $(".exit-door").removeClass("hide").addClass("atrium-door");
}

// room change functions
const toLivingRoom = function(){
  //hide all atrium elements and show all living room elements
  $currentRoom.addClass("living-room");
  console.log("now in living room");
  $("#room").removeClass("atrium").addClass("living-room");
  $(".key").removeClass("hide").addClass("living-room-key");
  $(".exit-door").removeClass("hide").addClass("liiving-room-door");
  }
  
// click event for atrium key, hide key on screen and add to inventory box and array, then call fucntion to start next room
$atriumKey.on("click", function(evt){
  console.log("clicked key");
  inventoryItems.push("key");
  let $newItem = $("<li>key</li>")
  $inventoryItems.append($newItem);
  $newItem.addClass("invItem");
  $atriumKey.addClass("hide");
  console.log(inventoryItems)
})

//door locked unless key is in inventory array
$(".exit-door").click(function(evt){
  console.log("clicked door");
  if (inventoryItems.includes("key")){
    console.log("door unclocked");
    $(".exit-door").addClass("hide");
    toLivingRoom();

  }
  else {
    console.log("Hmm seems to be locked");
    // add message in screen...
  }
});

 


  // clicking book"key" inliving room
  $(".living-room-key").click(function(evt){
    console.log("you found a book")
    inventoryItems.push("book");
    let $newItem = $("<li>book</li>")
    $inventoryItems.append($newItem);
    $newItem.addClass("invItem");
    $(".living-room-key").addClass("hide")
  })
  
  $(".living-room-door").click(function(evt){
    if (inventoryItems.includes("book")){
      console.log("bookshekf revealed a hallway");
      $(".living-room-door").addClass("hide");
      }
    else {
      console.log("this bookshelf sems to be missing something")
    }
  })




// show border on hover over key or door
$(".key").hover(
  function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  }
);
$(".exit-door").hover(
  function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  }
);

// $(".atrium-door").on("click", funcion(){

// })

// // start new game with 
// function gameStart(){
//   console.log('New game started');
//   //new NewGame();  
// }


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