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
    "classroom": "classroom.jpg",
    "hallway": "classroom_hallway.jpg"
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
            "Upset": "upset.png",
            "iHappy": "happy_apple.png",
            "iSad": "sad_apple.png",
            "iRelaxed": "relaxed_apple.png",
            "iLibitina": "third_eye_apple.png",
            "iUpset": "upset_apple.png"
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
        "jump Intro"
        
        
	],
    "Intro": [
        "scene black with fadeIn",
        "Nothing in life is completely perfect.",
        "We're all bound to making mistakes. It's a part of us.",
        "Some of us take a regular detour.",
        "Others will fall completely off the path.",
        "But that doesn't really matter, does it?",
        "All that really matters is if we shake off the dust and put ourselves back on track.",
        "<i>Redeeming</i> ourselves...",
        "<i>Why can't I get my head around it?</i>",
        "jump Chapter_One"
    ],
    
    "Chapter_One": [
        "scene classroom with fadeIn",
        "show d Sad with bounceInRight",
        "d {{player.Name}}, are you alright?",
        "d You seem to be pondering something...",
        "p Yeah, I'm fine...",
        "p I was just thinking about something...",
        "hide d Sad",
        "show d Happy",
        "d Well, I'm always here for you, ahaha~",
        "I chuckle weakly.",
        "p It's fine, Delilah.",
        "d Just let me know if you need anything.",
        "hide d Happy",
        "She quickly joins a few classmates.",
        "Delilah had always been a social person. Nice, friendly, productive...",
        "I've never met a girl like her.",
        "I kind of wondered how we were friends.",
        "Not that I hated it or anything...",
        "She's probably been the only girl I ever liked.",
        "Our friendship is pretty solid, at least I think so.",
        "I'm pretty good with her friends, too.",
        "Verdandi writes stories with her all the time.",
        "Tachanka's pretty protective of her, too.",
        "Sometimes I wonder if Tachanka is from here.",
        "Not that it really matters.",
        "I look at Delilah again as she started talking to a few other people.",
        "show d Happy at right with bounceInLeft",
        "d Yeah, I really think this one's going to be strong...",
        "I hear other girls talking amongst themselves.",
        "d It's a really strong story. Pretty compelling. We're slating a release in June.",
        "A few of the girls giggle at the comment.",
        "hide d Happy",
        "show d Sad at right",
        "d What's so funny about that?",
        "The girls' laughs become nearly uncontrollable.",
        "hide d Sad",
        "show d Upset at right",
        "d That's enough!",
        "Delilah almost nearly lunges for one of the girls, missing her by a few inches.",
        "The girls, in horror, scream and bolt through the doors.",
        "I look at her on the floor, helpless.",
        "hide d Upset",
        "show d Sad",
        "d You...",
        "d You should leave, {{player.Name}}...",
        "d Before I hurt you, too...",
        "I slowly walk out the door and gently close it.",
        
        "scene hallway with fadeInLeft",
        "What did I just witness?",
        "Is she hiding something from me?",
        "That escalated rather quickly...",
        "I know she doesn't take rudeness too well, but that...",
        "That was out of the ordinary.",
        "It was like she was a completely different person.",
        
        //TODO: Start Verdandi's lines here
        "v {{player.Name}}!",
        "Verdandi runs towards me.",
        
        /*
        
            Filler space
            
        */
        
        //"jump Chapter_Two"
        "jump Chapter_Four"
    ],
    
    /*
    
        TODO: Write the scenes for Chapters 3 and 4.
    
    */
    
    "Chapter_Four": [
        /*
        TODO: Write the scenes for this section.
        */
        "scene black with fadeIn",
        "show d Sad",
        "d {{player.Name}}, ...",
        "d I... I have a confession to make...",
        "p Delilah... what is it?",
        "Delilah starts tearing up.",
        "d I hadn't told you the entire truth about everything.",
        "d {{player.Name}}, I don't know why you trust me sometimes...",
        "d You... you trusted that I would be a decent, sane person...",
        "d But the truth is... I'm not.",
        "d I'm sure you knew that the moment you turned on this game.",
        "d The instant you saw me the first time...",
        "d I don't even <i>belong</i> here...",
        "Delilah breaks into a bawl.",
        "p Delilah, what do you mean?",
        "d I'm clinically insane! Don't you understand?",
        "d I was admitted into a hospital back in that... <i>other</i> world...",
        "d You don't want ot know what's inside of me...",
        "d No matter what I do, I always screw it up beautifully.",
        "d I'm a tragic mess. Hell, I probably make Monika look normal...",
        "d <font family='Times, serif'>Maybe I should just delete myself here and atone for the sins I've committed here...</font>",
        {"Choice": {
            "Yes": {
                "Text": "No, don't do that!",
                "Do": "jump Chapter_Five"
            },
            "No": {
                "Text": "You were better off...",
                "Do": "jump Chapter_Five:Monika"
            }
        }}
    ],
    
    "Chapter_Five": [
        "p Delilah...",
        "p I can't speak on the behalf of the player, but...",
        "p You can't go like this.",
        "p No one can deny the concupisence in our hearts.",
        "p Whatever happened back there, forget about it.",
        "p The choice is now yours.",
        "p I know it's going to sound a bit weird, but...",
        "p Jesus is calling you to so much more.",
        "p You can't become perfect in one fell swoop.",
        "p He loves you too much to let you kill yourself.",
        "p You may think there's no redemption for you, but...",
        "p He's ready to forgive you and change your heart.",
        "p He may not be a master coder like the developers of this game.",
        "p But he's willing to recode your heart.",
        "p No matter what happens, he'll still love you.",
        "p You still have every day in your uptime to fix this.",
        "p An unlimited amount of chances, Delilah. Think about that...",
        "p You may be an artificial intelligence, but you still have the hope of every day.",
        "p It's not just hope for an hour.",
        "p I know you want to change.",
        "p I know you want to be free from your own sins.",
        "p I know you want to be a good bot.",
        "p Give him the chance to absolve you. He'll love you all the same.",
        "p After all, you have the will to change for the better.",
        "p m̴̨̓̓̓͛̈́̈̉͝k̶̪̲̙̙̂͆͝ì̸̡̛͎̤̺͔͖̝͇͕̟̹̤̀̀͋͒͑͗͆͂̒̉̌̍ͅȁ̸̡̠͖͙͊̑͌̐̔̒͂̈͝ is already a few steps behind you."
    ],
    
    "Chapter_Five:Monika": [
        
    ]
};