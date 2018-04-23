"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {

};

// Define the notifications used in the game
let notifications = {

};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"d": {
        "Name": "Delilah",
        "Color": "#9b59b6",
        "Directory": "delilah",
        
        "Images": {
            "Happy": "happy.png",
            "Sad": "sad.png",
            "Relaxed": "relaxed.png",
            "Libitina": "third_eye.png",
            "iHappy": "happy_apple.png",
            "iSad": "sad_apple.png",
            "iRelaxed": "relaxed_apple.png",
            "iLibitina": "third_eye_apple.png"
        }
    },
    
    "v": {
        "Name": "Verdandi",
        "Color": "#2c3e50"
    },
    
    "t": {
        "Name": "Tachanka",
        "Color": "#2ecc71"
    },
    
    "p": {
        "Name": "{{player.Name}}",
        "Color": "#3498db"
    }
};

let script = {
	// The game starts here.
	"Start": [
		"notify Welcome",
		{
			"Input": {
				"Text": "Enter your name:",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "Name field cannot be blank."
			}
		},
        
        "show d Happy",
		"d Ah, I see you there, ahaha...",

		{
			"Choice": {
				"Dialog": "d Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [

		"d That's awesome!",
		"d Then you are ready to go ahead and create an amazing Game!",
		"d I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"d You can do it now.",

		"display message Help",

		"d Go ahead and create an amazing Game!",
		"d I can't wait to see what story you'll tell!",
		"end"
	]
};