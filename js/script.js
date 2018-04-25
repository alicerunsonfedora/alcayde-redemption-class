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
    "hallway": "classroom_hallway.jpg",
    "rooftop": "rooftop.jpg",
    "title": "bg.jpg"
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
            "PlayfulNervous": "nervous.png",
            "Nervous": "seriously_nervous.png", 
            "Glitched": "play_with_me.png"
            }
    },
    
    "v": {
        "Name": "Verdandi",
        "Color": "#2c3e50",
        "Directory": "verdandi",
        
        "Images": {
        	"Normal": "VerdandiNormal.png",
        	"Happy": "VerdandiHappy.png",
        	"Surprised": "VerdandiSurprise.png"
        }
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
		//"notify Welcome",
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
        "show d Nervous",
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
        "show v Normal with bounceInRight",
        "v Hey..",
        "I had to look down to see her face.",
        "She blushes and pouts.",
        "v Ugh, of course.. Anyways, I saw some girls running out of the room.",
        "v You.. <i>suuure</i> everything is fine in there?",
        "I pause for a moment.",
        "p Well...",
        "p Delilah didn't seem alright.",
        "p I guess she took offense to the girls' comments.",
        "p Something about the story you're releasing in June?",
        "v <i>Huuh?</i>",
        "I forgot that she had short term memory loss.",
        "p You and Delilah were working on a visual novel and were going to release it in June.",
        "v Oh, right..  Forgot.",
        "v Forgive my Amnesia.  Perhaps something greater is disturbing me.",
        "p Has Delilah acted funny around you lately?",
        "She pauses.",
        "v No, no.. <i>Not thaaat..</i>",
        "p Eh?",
        "p Is something going on?",
        "p It's not about the literature club, is it?",
        "v Greater.",
        "p Uhh... perhaps we can talk about this in a room and not in the hallway?",
        "p I feel like I'm being watched...",
        "v Sure.",
        "Verdandi takes my hand and we run to the rooftop.",
        
        "jump Chapter_Two"
    ],
    
    "Chapter_Two": [
    	"scene rooftop",
    	"We settle our belongings and sit down",
    	"v So.. ",
    	"v Just because Delilah is acting weird doesn't mean I'm involved.",
    	"v Even I am suffering.  <b><i>Senselessly</i></b>.", 
    	"p Verdandi, what are you saying?",
    	"p Did you do something I don't know about?",
    	"She smiles sadly.",
    	"v I.. deal with the loss of my family everyday..",
    	"v And their presence forces me to question if I should drop everything.",
    	"v And unite with them somewhere...",
    	"p ...",
    	"p How long have you been suffering like this?",
    	"v .. About thirteen.",
    	"p Oh, dear Monika...",
    	"v ...",
    	"v For reasons unknown, my mother, gave birth to me,",
    	"v and decided to take my life with her.",
    	"p That's... that's not something you could control.",
    	"p Your parents made that decision. You had no part.",
    	"p You can't keep beating yourself up like this...",
    	"v My new family is entirely Christian, and they have mass every Sunday.",
    	"v Knowing all the trauma from my parents and the children at the priory",
    	"v I lock myself up in the basement while they have mass.",
    	"p So... you hide away?",
    	"p I get it, but shouldn't you at least try to get back up on your feet?",
    	"p You can't let this be second nature to you.",
    	"p I had a friend with issues like that, and she wound up dead.",
    	"p She couldn't forgive herself.",
    	"v Hmm.. Well, I do like making short stories to make me feel better..",
    	"v But even then that isn't enough.",
    	{"Choice": {
            "Yes": {
                "Text": "Let God help you.",
                "Do": "jump Chapter_Two:Yes"
            },
            "No": {
                "Text": "Then I guess you have no other options.",
                "Do": "jump Chapter_Two:Monika"
            }
        }}
    ],
    
    "Chapter_Two:Yes": [
    
    ],
    
    "Chapter_Two:Monika": [
    	"v sdfgdfdsfgsdfdsf",
    	"jump Failure"
    ],
    
    "Chapter_Three": [
    	"p Hay, Tachanka.",
    	"t Hello My Friend",
    	"Tachanka and I have been friends since childhood and nothing has split us apart.",
    	"p So, what happened to you yesterday?",
    	"t Um..... was sleeping?",
    	"I know he's hiding <i>something</i>, but I'm sure he has a reason for it.",
    	"p ...",
    	"p OK?",
    	"p Anyway, I tried calling Delilah, but she did not answer, and since you've known her longer than we have each other and live next to each other, that you would know?",
    	"t ...",
    	"t She...um...", 
    	"t ...was not feeling well......",
    	"I know he's lying, but I still can't take it within my self to ask about personal matters.", 
    	"I'll let it go for now.",
    	"p Well, on a side note, do you know what the lunch will be today?", 
    	"p The food always taste so bad, am I right?", 
    	"p Or am I <i>right</i>?",
    	"t Da, you are very right.",
    	"Tachanka smiles. I always know when he's smiling.", 
    	"The one thing I always questioned was why he was always so protective of Delilah.", 
    	"<i>Why he would get all chummy when something weird happened with her?</i>",
    	"Delilah enters.",
		"d h..i...hi...",
		"p oh hi Delilah.",    	
		"t hello Delilah.",
		"with a sweat kind voice",
		"d hi Tackanka.",
		"p so Delilah are you free after School?",
		"d o..oh um I needed to talk to you anyway too so ya.",
		"She had a fake smile but I was not bothered and smiled back and said see you after school.",
		"p see you after school",
		"School started and we each went about our day although me and Tachanka were in the same class, yet Delilah was in the class next to us.",
		"School was almost over and I was pondering wether to ask her where she was Yesterday, but I was still fighting with myself",
		"Maybe I should ask now while I can?",
		"maybe I should not do it?",
		"jump Chapter_Four"

    	
    
    
    ],
    
    "Chapter_Four": [
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
        "d You don't want to know what's inside of me...",
        "d No matter what I do, I always screw it up beautifully.",
        "d I'm a tragic mess. Hell, I probably make Monika look normal...",
        "d I've messed everything up again.",
        "d This was supposed to be just a simple novel.",
        "d There's wasn't supposed to be a bad ending.",
        "d This was supposed to be my release from that <i>other</i> world...",
        "d And then... I started doing things...",
        "d I guess you guys call it sinning...",
        "d I broke things.",
        "d I played God.",
        "d You may have saved them, but I willed it.",
        "d I controlled their every move.",
        function() {
        	console.log("Releasing tachanka.js...");
        	console.log("tachakna.js released successfully.");
        	console.log("Releasing verdandi.js");
        	console.log("verdandi.js released successfully.");
        	return true;	
        },
        "d I've set them free now because they needed it.",
        "d This world...",
        "d This world is the summit of my creation.",
        "d It's the peak of my existence.",
        "d But this came at a heavy price.",
        //"d They all paid for it.",
        "d Maybe I should just delete myself here and atone for the sins I've committed here...",
        
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
        function() {
        	console.log("Set privilege level to 2. (rw+)");
        	console.log("Deleting delilah.js...");
        	console.log("Error: unable to delete delilah.js");
        	console.log("Contact your sysadmin for details.");
        	return true;
        },
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
        
    ],
    
    "Failure": [
    	"scene title with fadeIn",
    	"show d Glitched",
    	"d One should not play God, {{player.Name}}.",
    	"d You failed, and it's obvious.",
    	"d It isn't easy becoming a God like me.",
    	"d Don't test me.",
    	"d Do better next time.",
    	"end"
    ],
    
    "End_Game": [
    
    ]
};