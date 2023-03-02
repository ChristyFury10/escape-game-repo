"use strict";

const rooms = ["welcome-screen", "atrium", "living-room"];
const inventoryItems = [];
const $inventoryBar = $(".inventory-bar")
const $inventoryItems = $("#inventory-items")
const $inventoryItem = $("li")
const $currentRoom = $("#room")
const $atriumKey = $(".key")
const $atriumDoor = $(".exit-door")
const $livingRoomKey = $(".living-room-key")
const $livingRoomDoor = $(".living-room-door")


let livingRoomBackground = 

//hide welcome screen on click of enter button
$("#enterButton").on("click", function(evt){
  console.log("you have entered the house");
  // $("#welcome-screen").addClass("hide");
  $("#welcome-screen").css("display", "none")
  toAtrium();

  //gameStart();
})

//functions to change rooms
const toAtrium = function() {
  console.log("entered atrium");
  $("#room").removeClass("front-of-house").addClass("atrium");
  $atriumKey.removeClass("hide").addClass("atrium-key");
  $atriumDoor.removeClass("hide").addClass("atrium-door");
}

const toLivingRoom = function(){
  //hide all atrium elements and show all living room elements
  $currentRoom.addClass("living-room");
  console.log("now in living room");
  $("#room").removeClass("atrium").addClass("living-room");
  $livingRoomKey.removeClass("hide");
  $livingRoomDoor.removeClass("hide");
  }

  var modal = document.getElementById("success");
  const success = function() {
    modal.style.display = "block";
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
$atriumDoor.click(function(evt){
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
  $livingRoomKey.click(function(evt){
    console.log("you found a book")
    inventoryItems.push("book");
    let $newItem = $("<li>book</li>")
    $inventoryItems.append($newItem);
    $newItem.addClass("invItem");
    $(".living-room-key").addClass("hide")
  })
  
  $livingRoomDoor.click(function(evt){
    if (inventoryItems.includes("book")){
      console.log("bookshekf revealed a hallway");
      $(".living-room-door").addClass("hide");
      success();
      }
    else {
      console.log("this bookshelf sems to be missing something")
    }
  })




// show border on hover over key or door
$(".yellow").hover(
  function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  }
);







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