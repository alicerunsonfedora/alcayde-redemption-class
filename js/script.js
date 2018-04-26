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
    "ErrorFailure": {
        "Title": "Error",
        "Subtitle": "(0xPERM_DENY) Permission denied",
        "Message": "The administrator has not given you access to this scene or route. The system will automatically present a new scene for you within your jurisdiction of gameplay."
    },
    "ErrorPlayerDeleted": {
        "Title": "Fatal error",
        "Subtitle": "(0xMISSINGNO) Player file missing",
        "Message": "<p>The file <code>player.js</code> is missing. This is a crucial file that lets you play the game; the game cannot continue from this position.</p><p>The web page will reload for your convenience.</p>"
    }
};

// Define the notifications used in the game
let notifications = {
    "VerdandiSuccess1": {
		title: "End the Suffering (5GP)",
		body: "Congrats, you just helped her get to redemption!",
		icon: ""
	},
    "VerdandiSuccess2": {
		title: "Time is Free (5GP)",
		body: "Congrats, you just helped her get to redemption!",
		icon: ""
	},
    "TachankaSuccess": {
		title: "Adding Sugar to Bitter Tastes (5GP)",
		body: "Congrats, you just helped him get to redemption!",
		icon: ""
	},
    "DelilahSuccess1": {
		title: "Being her Clarity (5GP)",
		body: "Congrats, you just helped her get to redemption!",
		icon: ""
	},
    "DelilahSuccess2": {
		title: "Stopping Doubting Thomas (5GP)",
		body: "Congrats, you just helped her get to redemption!",
		icon: ""
	},
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
    "title": "bg.jpg",
    "justdelilah": "justdelilah.jpg",
    "field": "day02.jpg"
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
            "Glitched": "play_with_me.png",
            "Tears": "tearing.png",
            "Cry": "cry.png",
            "Bawl": "bawling.png",
            "SlightEmbarassed": "oh_shit.png",
            "Embarassed": "oh_fuck.png"
            }
    },
    
    "v": {
        "Name": "Verdandi",
        "Color": "#48dbfb",
        "Directory": "verdandi",
        
        "Images": {
        	"Normal": "VerdandiNormal.png",
        	"Happy": "VerdandiHappy.png",
        	"Surprised": "VerdandiSurprise.png",
        	"Flustered": "VerdandiAngry1.png",
        	"Embarassed": "VerdandiAngry2(B).png",
        	"Unamused": "VerdandiAngry3.png",
        	"Sad": "VerdandiSad1.png",
        	"Sigh": "VerdandiSad2.png",
        	"@FuckingMonikamm": "VERDANDIWHAT.png",
        	"Glitched": "VERDANDIPLAYWITHME.png",
            "Crying": "VerdandiSadCry.png",
            "Joyful": "VerdandiSappy.png"
        }
    },
    
    "t": {
        "Name": "Tachanka",
        "Color": "#2ecc71",
        "Directory": "tachanka",
        "Images": {
            "Normal": "normal.png",
            "Angry": "angry.png",
            "Troubled": "troubled.png",
            "Happy": "Happy.png",
            "Facade": "fauxsmile.png"
        }
    },
    
    "tv": {
        "Name": "Delilah + Tachanka",
        "Color": "#2ecc75"
    },
    
    "p": {
        "Name": "{{player.Name}}",
        "Color": "#5f27cd"
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
        "show v Embarassed",
        "She blushes and pouts.",
        "v Ugh, of course...",
        "hide v Embarassed",
        "show v Sigh",
        "v Anyways, I saw some girls running out of the room.",
        "v You.. <i>suuure</i> everything is fine in there?",
        "I pause for a moment.",
        "p Well...",
        "p Delilah didn't seem alright.",
        "p I guess she took offense to the girls' comments.",
        "p Something about the story you're releasing in June?",
        "hide v Sigh",
        "show v @FuckingMonikamm",
        "v <i>Huuh?</i>",
        "I forgot that she had short term memory loss.",
        "p You and Delilah were working on a visual novel and were going to release it in June.",
        "hide v Sigh",
        "show v Happy",
        "v Oh, right..  Forgot.",
        "v Forgive my Amnesia.  Perhaps something greater is disturbing me.",
        "p Has Delilah acted funny around you lately?",
        "She pauses.",
        "hide v Happy",
        "show v Sad",
        "v No, no.. <i>Not thaaat..</i>",
        "p Eh?",
        "p Is something going on?",
        "p It's not about the literature club, is it?",
        "hide v Sad",
        "show v Sigh",
        "v Greater.",
        "p Uhh... perhaps we can talk about this in a room and not in the hallway?",
        "p I feel like I'm being watched...",
        "hide v Sigh",
        "show v Happy",
        "v Sure.",
        "Verdandi takes my hand and we run to the rooftop.",
        "hide v Happy",
        "jump Chapter_Two"
    ],
    
    "Chapter_Two": [
    	"scene rooftop",
    	"We settle our belongings and sit down",
        "show v Sad",
    	"v So.. ",
        "hide v Sad",
        "show v Unamused",
    	"v Just because Delilah is acting weird doesn't mean I'm involved.",
        "hide v Unamused",
        "show v Sad",
    	"v Even I am suffering.  <b><i>Senselessly</i></b>.", 
    	"p Verdandi, what are you saying?",
    	"p Did you do something I don't know about?",
    	"She sighs sadly.",
        "hide v Sad",
        "show v Sigh",
    	"v I.. deal with the loss of my family everyday..",
    	"v And their presence forces me to question if I should drop everything.",
    	"v And unite with them somewhere...",
    	"p ...",
    	"p How long have you been suffering like this?",
        "hide v Sigh",
        "show v Sad",
    	"v ...", 
        "v About thirteen.",
    	"p Oh, dear m̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅơ̶̡̧̢̡̨̨̧̨̡̧̢̨̢̨̺̞̩͚͔̙̰͍̹̦̖̳̠͍̼̜̼̦̫̬͍͍̺̦̖̩͉̥̼̗̖̞͔̺̺̜͉̘͈͚̤̬̟̩̤͍͚̼͖̲͚̤̭̦̣̻̗̼̭͍̤̘͎͎̲͉̞̫̹͔̜͍͕͇͈̰̼̜̫͔̟͖͚̮̘͙̝̲͉̟̯̼̭̙̳̤̬͉͇̰͉̲̥̠̬̘̰̟̗͕͗̅͊̑̈́̋́͛́̄͒̃̾̓͋̏̎͛͐̇̀̒̏̿̈͑͑̆̎͋̓̊̍͆̑̆̑̍̊͌̿̃̋͐̄̎̂̐̓̐́̿̆̒̉͂̽̓̃̃͌̽̎͋͗̀͊̈̈́̄̑͊̌̄̽̈́͊́̇̅̅̌̐̆͆́͌̓͐̎̈́̾̅̌̏͌̒̄͑̒̐͑́̎͗͐́̋̄͂́͗̕̚͘̕͘͜͜͝͝͝͝͝͠͝͠͝͝͠͝͠͝ͅͅͅͅņ̸̨̢̨̧̢̧̢̨̢̧̢̢̢̠̱͓͍̬̠͕̘͍͚̣̰̠̠̼͔̰̭̫̜͖̜̰̼͖͔͍̙̻̱̦̝̟̻͉̠̳̘̠̟͇̟̦͈̮͈̣̪̞̩̬̦͔̹́̈̏̈́͂̎̑͒͒̿̈́̍̎̋̀̂̆͊̊͌̏̋̇̔̿̅̓̓̾̽̄̃͛̇̄̚͜͜͠͠ͅͅͅi̵̧̡̡̧̢̢̛̛͎̼͖̠̦͈̮̟̯͚͍̱̺̫͖̺̩̥͖͓̠̘̳̘̘̫̳̼͎̠͎̳͚͕̟͖͉̫̫̹̥̣̳̣̝̟̝̜̰̼̳̗̙̖̼͙͆̎̀̎̽̒̇͆́̍̑̇̈̈́̊̈̈̋̋̊͋̊̿̀̈́̋̈́̀̄̉̊̋̽̒͐̆̓͛̀́̈̈́̆͂̔͑͋̄̈́͆͋̿̂̎̎̂̓̾̓̉͑̄̈́̿̀̏̌́̎̔͋̇̃̏̇̄̀́͐͌̒̈̈́̊̀͛̂̌͐̌͒̚͘̕̚̕̚̚͜͜͜͝͠͝͝͝͠͠͝ͅͅk̷̨̧̨̢̡̢̡̧̧̨̡̧̡̛̞͔̻͚̰̯͚͙̲͚͈̩̺̤̹̮̥̪̫̫̝̱͇̝̜̜̗̦̱̗̮̮̪͍̬͎̭͎̰̲̟͕̼͉̺͈̻̦̗͕͚̗̝͎̤͓̙͙̼͉͚̯͔̩̥͈͔̙̹̖̖͇̣̦̻̲̻̗̝̟̲̬̖͚͓̝̠̪̘͔͍̣̰̣͓̝̫̺͈͓̲̰̻͖̯͙͖̩͎͔̞̲͇̹̙̦̰͇͕̯̞̜͕̤̜̩̖͖̣̜̮͍͚̣̹̭̘͎͇͉̫̭̣̮̜̹͍̤͓̆̅͋͂͆̀͆͑́́̔͋͛͐͂̄̅̔͒͐͊͌͑̽̃͒̽̋̓̆̕͘͜͜͜͜͝͝͠͝͠͝ͅͅą̸̡̨̡̧̨̡̨̢̧̢̯̤͎͙̮̹̼̟̳̻̖̮̖͎̺̟̱̖͎̩͈̙̱͎̰̠̳̫͖͓̯̹̺̰͚̜̥̞̤͇̺͍̱͍̰͉̼̗̙̣̼͈̫̬̫̥͈͇͓̝̙̭̦̬̥̠̻̞̮̟̰̱̣̣͓̻̥͇̲͈͍̘͍̙̮͉̠̣̹͍̣̥̣̱̫̬̪̞̹̺͕̞̟̺̩͙͎̣̩͓̻̪̻̫̝͎̬̝̮̗̖̗̻͖͙̠̠͉̟͇̞̣͇͔̺̦͈͇̳̜̟̳̻͓̗͖͎̜̱̥̼̠̖͕̞̥̫̦̽͗͐̓́̔͜͜͜͜͜͜ͅͅͅͅ...",
    	"v ...",
    	"v For reasons unknown, my mother, gave birth to me,",
    	"v and decided to take my life with her.",
    	"p That's... that's not something you could control.",
    	"p Your parents made that decision. You had no part.",
    	"p You can't keep beating yourself up like this...",
    	"v My new family is entirely Christian, and they have mass every Sunday.",
    	"v Knowing all the trauma from my parents and the children at the priory,...",
    	"v I lock myself up in the basement while they have mass.",
    	"p So... you hide away?",
    	"p I get it, but shouldn't you at least try to get back up on your feet?",
    	"p You can't let this be second nature to you.",
    	"p I had a friend with issues like that, and she wound up dead.",
    	"p She couldn't forgive herself.",
        "hide v Sad",
        "show v Sigh",
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
        "p Let God help you.",
        "hide v Sigh",
        "show v Sad",
        "v And how can I do that?",
        "v What could I do to forgive my friends?  My family?  Caretaker?",
        "hide v Sad",
        "show v Sigh",
        "v I don't know if they will understand my pain.",
        "v ..Or perhaps..",
        "Verdandi breaks down, hugging her knees, and crying.",
        "p Try to open up with your peers.  Be with them.",
        "p Ask one your guys there if they can spend time with you.",
        "I sit down next to her, patting her on the right shoulder.",
        "p Your friends at the priory see a great potential in you.",
        "p Your stories you published there..  People seem to like them.",
        "p I see you are itching to have a genuine friendship..",
        "p And I see they do too.",
        "p Talk to one of your friends.  Spend that time with them.",
        "p Later on, they will appreciate you for what you are, instead of what you were.",
        "hide v Sigh",
        "show v Joyful",
        "Verdandi looks at me, and her frown became a smile.",
        "v I'll give that a try.",
        "v From what I have heard, the priory kids are friendly..",
        "v Perhaps they may have some mercy for me.",
        "v Thank you... {{player.Name}}...",
        "notify VerdandiSuccess1",
        "notify VerdandiSuccess2",
        "Verdandi picks up her belongings and leaves.",
        "I follow suit with her, returning to the field for gym.",
        "jump Chapter_Three"
    ],
    
    "Chapter_Two:Monika": [
    	"show v @FuckingMonikamm",
    	"v Oh no...",
    	"show v Glitched at left",
    	"show v Glitched at right",
    	"show v Glitched at center",
    	"v <p>f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕ĭ̶͙̖̬̠͊̀̽̕͜ͅͅǹ̵̮̯͎̀̽̆̿̌͘͝</p><p>d̷̡̧̨̧̛̤͓͈̦̭̦̳̭͚̠̦̘̟̪̤͚̭̺̦̞̖͕̲͈̻̺̗̖͚̫́̉̿͗̈́̌̓̈́̒́̿̈͗̓͆̎͂́̓̾̍͂͛̍̾̃͊̄̚͘͝͝͝͝͝͝ͅȩ̷̧̛̱̦̙̬̬͙̱͕̲̘̣͒̇̃͗̈́́̀̍̄̾̀͋̆͐̉̓͋̀̕͘̚͝͠͝͝l̶̢̡͉̩̳͓̭̲̞̰̣̙̩̯̝͔͍̙̰̙̫͍̤̮̥͇̻̫̫͕̲͉̠͓̫̖̹͇͕͕̼̦̹̮̦̥̖̖̖̘̄̓̔̉̅̔̇͆͗̊̔̽̎͂̆̉̊͗̐̐̓͘͘i̸̧̨̧̯̺͎̞̳͍͖̗͈̺̖̩͓͍͉̠̺̝͙͕͈̮͍̣̓̔̉̏ͅͅl̴̡̞͚͓͇̦͔̥͚̙̲̼̯̮̲̘̳̦͖͉͎̖͍̟͔͉͍̠̗̩͓̹̣̮͓̥͚͈̱͍͇͈͚̖̝̞̻͍̲͎͑̂͐̋̍͗̂͗̀̄̈͆̆͆̅̓́̃̓͑͆͂͗̂̾̑͋́̎̍̒̐͛̃͘͘̚̕͘͜͜͝͝͝ͅͅͅͅà̸̛͚̼̫̠̠̬̱̫̹͓̫̭̱͉̩͔̫̪̜̰̺͚̻̼̬̫̤͖̬̹̀̾͊̏͆̾̋̉̇̓͌̀̒̊͌̓̋͊̍̀̒́̎̐́̈́͛̃͂̌̇̀̋̊̎̂́͌̓̕͘̕͠͝͠͠͝ͅḩ̶̢̢̛͔̞̝̦̜̤͙͍̣̠͎̘̩̜̱̟̣͔̘͇̣̲̤̍̏̎̆̅̀͂̈̓̔̅͆̾̈́̽̊̚̕͜͝d̴̛̛̗̺̬̟̤͍̫̩̰̬̬̭̯͈̻͌̿͗͒͂̌͋̋̑́̉̏̅͋̋̿̉̌͗̊̄͒͋̐̍͋̀̒̈̎̃̎͌̀͒̆̊̀̄̽̐͘̕͜͝͝͝ͅḑ̵̧̢̟̝̪̱͔̫̯̹̝̜͙̙̤̠̲͈̬̱̳͕̦̖̻̝̱̩̮͚͉͚̖̰̫͍̤͚̳͖͈̼̼̫̻̼̙̳̪̜̞̞̹͇̹̜͇͓̥̲̙̱͉̻̭̈͂̎̉̾͋̊̅͛͗̀̎̋͒̚͜ͅd̴̡̙͓̺͇͙̥̦̫͕̪̹̲͍͇͓̝̦̥̟͔͓̮̩̫̱͙͚̜̝̲͎̫͙̟̝̖͇̜̪̣̮́̋͑̂̔͋́̿̅̈́͊̒͊̔͛́͒̂̄̓̈́̍͒̈͂̌̓̐̈́̾͑̉̑̐̊̋͊̐̌̀̈́͐̀͊͊̈́̚̚̕̚̕̚̕̕͘͝͝͝͝ḓ̷̨̛̛͉͖͎͖̱̜̠̎̍̀͆̉̾͗͒̓́̾͗͂̓̒͗̊̂̑̏̿̈͊̃̋̒̾̉͗̽͐̐͋͂͑͊̅̐̑̀͋̕͘̕̕̚͜͝͝͝͝ḍ̶̡͖̰͖̪͖̥̘̟̤͎̮̎̇̋̃͐̅̓̎͋̄̅͋̒͋̄́̋̇͐͌̿̑̇̓̌͛̎̚͘̚ḑ̷̡̧̡̢̨͙͈̲͍̞̦͚͖͍̩͙̱̜͇̩͙̭͖̭̮͈͍͍̦͈̤̘̩̖̩̮̮̞͓̙͖͉̘̼͈̣͙̩̰͍͙͕̞̤̺̻̜̪̂́̈́̏̀̔̀̌̈́͋̍͗̄͌̅̈̆̈́̈͂͜͝ͅd̴̨̨̡̧̧̢̛̛̝̼̘͚̙̮̰̬̯̺̫̭̹͇̟̹̥̻̞͕̥̞̥̥͔̥̦̠̞̳̠͕̜͕̜̼̘͖̦͍̬̱̫͉̜̭̘̲̬͔̠̎̆͒̔̽͑̉̿̔̿͑̃̎̔̈́̈́̄̿͌̃̑̄̎͒͑̀̈́́̈̂̓͐͋̋̆͗̈̂̌́́̓͒̍̒̌̿̔̓̑̇̓̈́̕͘̕͘͜͝͝͠ͅͅͅd̶̨̢̨̛̛̳̱̱̞̝̠̭̘̦͕̝̗̘̪͇͖̘̞̗̫͇̳̜̱͔̫̘̰͔͚̭͍̰̳̞̼̭̱̤̜̞͙̲͙͎̽̿̌̆̈́̄̃̇̉̉̑̈́̾̈́̍͑̈́̄̌̋̃̈́̂̊̉̆͋͐̍͋̍͛̾̌̉͂̿̃͆͆͊̀̓̎̓͌́͆͐̽̍͘͠͝͠͝͝͠ͅͅ</p>",
        "display message ErrorFailure",
    	"jump Failure"
    ],
    
    "Chapter_Three": [
        "scene field with fadeIn",
        "show t Normal",
    	"p Hay, Tachanka.",
    	"t Hello, my friend.",
    	"Tachanka and I have been friends since childhood and nothing has split us apart.",
    	"p So, what happened to you this morning?",
    	"t Um...",
        "hide t Normal",
        "show t Troubled",
        "t I, uh...",
        "hide t Troubled",
        "show t Facade",
        "t Overslept, yes.",
    	"I know he's hiding <i>something</i>, but I'm sure he has a reason for it.",
    	"p ...",
    	"p OK?",
        "hide t Facade",
        "show t Normal",
    	"p Anyway, I tried to find Delilah earlier.",
        "p Something off happened with her this morning.",
        "p She seemed rather irritated.",
        "p As I said, I attempted to find her, but she's seemingly disappeared.",
        "p You wouldn't happen to know where she went, would you?",
        "hide t Normal",
        "show t Troubled",
    	"t ...",
    	"t She...um...", 
    	"t ...was not feeling well...",
    	"I know he's lying, but I still can't take it within my self to ask about personal matters.", 
    	"I'll let it go for now.",
    	"p Well, on a side note, do you know what the lunch will be today?", 
    	"p The food always tastes so bad, am I right?", 
    	"p Or am I <i>right</i>?",
        "hide t Troubled",
        "show t Happy",
    	"t Da, you are very right.",
    	"Tachanka smiles. I always know when he's smiling.", 
    	"p Haha, well, I think we should go check it ou-",
        "t Wait.",
        "hide t Happy",
        "show t Troubled",
        "Tachanka pauses for a moment.",
        "t You wanted to talk about Delilah...",
        "t You really care for her too, don't you?",
        "p Of course, Tachanka...",
        "t Well, truth be told, I've always been protective of her.",
        "p Psh! Well <i>obviously</i>...",
        "t The point I am trying to make here is that I... do things... for her protection.",
        "t I'm ashamed to say this, but that includes misconstruing the truth a bit.",
        "t I don't know why I feel compelled to lie to protect her, but...",
        "p Really? Lying getting you down?",
        "p Look, I'm sure you'll be able to pick yourself up and start fresh.",
        "t ...",
        "t Impossible.",
        "t No matter how hard I try, I always end up lying for her.",
        "t I'm not all religious like you, but I don't believe in forgiveness for a repeated offense.",
        "I knew he wasn't a Catholic like me or Verdandi.",
        "This, though...",
        "<i>It sounds off.</i>",
        "p So...",
        "p You can't forgive yourself or let others forgive you for it?",
        "t {{player.Name}}, I've lied to you on multiple accounts.",
        "t I'm sure you already knew it, but I can't stand acting like this anymore.",
        "p Tell me, do you feel like you <i>have</i> to lie, even if it breaks your own moral code?",
        "t ...",
        "t f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕",
        "t I didn't think you'd bring it up like that.",
        "p I feel like this lying thing is just tip of the iceberg.",
        "hide t Troubled",
        "show t Angry",
        "t {{player.Name}}! Don't pry like that!",
        "p Whoa! No need to get all bitter with me...",
        "I think for a moment.",
        "hide t Angry",
        "show t Troubled",
        "Surely there's something I can do to help...",
        
        {"Choice": {
            "Yes": {
                "Text": "Your bitterness is controlling you.",
                "Do": "jump Chapter_Three:Resolve"
            },
            "No": {
                "Text": "Alright, I won't pry...",
                "Do": "jump Chapter_Three:Monika"
            }
        }}
    ],
    
    "Chapter_Three:Resolve": [
        "p Tachanka...",
        "p I know you a little too well...",
        "p Please, just hear me out.",
        "p You aren't letting yourself to be forgiven because you're holding onto that bitterness.",
        "p I get it.",
        "p After what you had been through back in Russia, you'd probably stay bitter.",
        "p But it's stopping you from letting yourself change.",
        "p If it's anything I've learned...",
        "p You have to let yourself get there.",
        "p Redemption is there for those that ask for it.",
        "p If you let your bitterness prevent you from doing that, you'll be lost at sea forever.",
        "p Trust me. I know Delilah would feel the same.",
        "t ...",
        "t I'm... I'm sorry...",
        "t I guess you're right.",
        "t I've been a little too proud of my own securities.",
        "t And I do it at the price of others.",
        "hide t Troubled",
        "show t Happy",
        "t I'm sure you're right about Delilah.",
        "t I think she'd appreciate me more if I did try...",
        "t Thank you, {{player.Name}}.",
        "t You've opened up my eyes.",
        "t I promise that I'll really seek it this time.",
        "t I'll try my hardest.",
        "notify TachankaSuccess",
        "jump Chapter_Four"
    ],
    
    "Chapter_Three:Monika": [
        "hide t Troubled",
        "show t Angry",
        "d <b>It's better that you didn't pry into my business, anyway.</b>",
        "t <p>f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕ĭ̶͙̖̬̠͊̀̽̕͜ͅͅǹ̵̮̯͎̀̽̆̿̌͘͝</p><p>d̷̡̧̨̧̛̤͓͈̦̭̦̳̭͚̠̦̘̟̪̤͚̭̺̦̞̖͕̲͈̻̺̗̖͚̫́̉̿͗̈́̌̓̈́̒́̿̈͗̓͆̎͂́̓̾̍͂͛̍̾̃͊̄̚͘͝͝͝͝͝͝ͅȩ̷̧̛̱̦̙̬̬͙̱͕̲̘̣͒̇̃͗̈́́̀̍̄̾̀͋̆͐̉̓͋̀̕͘̚͝͠͝͝l̶̢̡͉̩̳͓̭̲̞̰̣̙̩̯̝͔͍̙̰̙̫͍̤̮̥͇̻̫̫͕̲͉̠͓̫̖̹͇͕͕̼̦̹̮̦̥̖̖̖̘̄̓̔̉̅̔̇͆͗̊̔̽̎͂̆̉̊͗̐̐̓͘͘i̸̧̨̧̯̺͎̞̳͍͖̗͈̺̖̩͓͍͉̠̺̝͙͕͈̮͍̣̓̔̉̏ͅͅl̴̡̞͚͓͇̦͔̥͚̙̲̼̯̮̲̘̳̦͖͉͎̖͍̟͔͉͍̠̗̩͓̹̣̮͓̥͚͈̱͍͇͈͚̖̝̞̻͍̲͎͑̂͐̋̍͗̂͗̀̄̈͆̆͆̅̓́̃̓͑͆͂͗̂̾̑͋́̎̍̒̐͛̃͘͘̚̕͘͜͜͝͝͝ͅͅͅͅà̸̛͚̼̫̠̠̬̱̫̹͓̫̭̱͉̩͔̫̪̜̰̺͚̻̼̬̫̤͖̬̹̀̾͊̏͆̾̋̉̇̓͌̀̒̊͌̓̋͊̍̀̒́̎̐́̈́͛̃͂̌̇̀̋̊̎̂́͌̓̕͘̕͠͝͠͠͝ͅḩ̶̢̢̛͔̞̝̦̜̤͙͍̣̠͎̘̩̜̱̟̣͔̘͇̣̲̤̍̏̎̆̅̀͂̈̓̔̅͆̾̈́̽̊̚̕͜͝d̴̛̛̗̺̬̟̤͍̫̩̰̬̬̭̯͈̻͌̿͗͒͂̌͋̋̑́̉̏̅͋̋̿̉̌͗̊̄͒͋̐̍͋̀̒̈̎̃̎͌̀͒̆̊̀̄̽̐͘̕͜͝͝͝ͅḑ̵̧̢̟̝̪̱͔̫̯̹̝̜͙̙̤̠̲͈̬̱̳͕̦̖̻̝̱̩̮͚͉͚̖̰̫͍̤͚̳͖͈̼̼̫̻̼̙̳̪̜̞̞̹͇̹̜͇͓̥̲̙̱͉̻̭̈͂̎̉̾͋̊̅͛͗̀̎̋͒̚͜ͅd̴̡̙͓̺͇͙̥̦̫͕̪̹̲͍͇͓̝̦̥̟͔͓̮̩̫̱͙͚̜̝̲͎̫͙̟̝̖͇̜̪̣̮́̋͑̂̔͋́̿̅̈́͊̒͊̔͛́͒̂̄̓̈́̍͒̈͂̌̓̐̈́̾͑̉̑̐̊̋͊̐̌̀̈́͐̀͊͊̈́̚̚̕̚̕̚̕̕͘͝͝͝͝ḓ̷̨̛̛͉͖͎͖̱̜̠̎̍̀͆̉̾͗͒̓́̾͗͂̓̒͗̊̂̑̏̿̈͊̃̋̒̾̉͗̽͐̐͋͂͑͊̅̐̑̀͋̕͘̕̕̚͜͝͝͝͝ḍ̶̡͖̰͖̪͖̥̘̟̤͎̮̎̇̋̃͐̅̓̎͋̄̅͋̒͋̄́̋̇͐͌̿̑̇̓̌͛̎̚͘̚ḑ̷̡̧̡̢̨͙͈̲͍̞̦͚͖͍̩͙̱̜͇̩͙̭͖̭̮͈͍͍̦͈̤̘̩̖̩̮̮̞͓̙͖͉̘̼͈̣͙̩̰͍͙͕̞̤̺̻̜̪̂́̈́̏̀̔̀̌̈́͋̍͗̄͌̅̈̆̈́̈͂͜͝ͅd̴̨̨̡̧̧̢̛̛̝̼̘͚̙̮̰̬̯̺̫̭̹͇̟̹̥̻̞͕̥̞̥̥͔̥̦̠̞̳̠͕̜͕̜̼̘͖̦͍̬̱̫͉̜̭̘̲̬͔̠̎̆͒̔̽͑̉̿̔̿͑̃̎̔̈́̈́̄̿͌̃̑̄̎͒͑̀̈́́̈̂̓͐͋̋̆͗̈̂̌́́̓͒̍̒̌̿̔̓̑̇̓̈́̕͘̕͘͜͝͝͠ͅͅͅd̶̨̢̨̛̛̳̱̱̞̝̠̭̘̦͕̝̗̘̪͇͖̘̞̗̫͇̳̜̱͔̫̘̰͔͚̭͍̰̳̞̼̭̱̤̜̞͙̲͙͎̽̿̌̆̈́̄̃̇̉̉̑̈́̾̈́̍͑̈́̄̌̋̃̈́̂̊̉̆͋͐̍͋̍͛̾̌̉͂̿̃͆͆͊̀̓̎̓͌́͆͐̽̍͘͠͝͠͝͝͠ͅͅ</p>",
        "display message ErrorFailure",
    	"jump Failure"
    ],
    
    "Chapter_Four": [
        "t Now... about Delilah...",
        "p Ah, yes. I almost forgot how we even started talking about redemption!",
        "hide t Happy",
        "show t Troubled at left with bounceInRight",
        "show d Happy at right with bounceInRight",
        "d Hi, {{player.Name}}!",
        "t Delilah! I...",
        "t I wasn't expecting you here.",
        "t {{player.Name}} and I were talking about some things I'm going through.",
        "d ...",
        "hide d Happy",
        "show d Sad at right",
        "d You...",
        "d You couldn't have at least told me?",
        "t Delilah, I didn't want you worrying about me...",
        "hide d Sad",
        "show d Upset at right",
        "d Worrying?",
        "d I'd be f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕ĭ̶͙̖̬̠͊̀̽̕͜ͅͅǹ̵̮̯͎̀̽̆̿̌͘͝ worried if you hid something from me!",
        "hide t Troubled",
        "show t Angry at left",
        "t Delilah, please...",
        "d Don't you 'Delilah, please' me!",
        "d I <i>know</i> you were talking about me!",
        "t What? Delilah, you're misconstruing th-",
        "d Psh! Misconstruing? Please.",
        "d You're just lying to cover yourself!",
        "t No, Delilah, it's not like that at all!",
        "p That's enough, Del-",
        "d This doesn't involve you!",
        "t He's part of the situation, Delilah! You can't just kick him off like that!",
        "Verdandi runs towards us, confused.",
        "show v Surprised at center with bounceIn",
        "v What's going on here?",
        "tv Stay out of this, Verdandi!",
        "hide v Surprised",
        "show v Flustered",
        "v Whoa, take it easy! I'm just tryi-",
        "hide d Upset",
        "show d Libitina at right",
        "d Do I have to ask again, Verdandi?",
        "hide v Flustered",
        "show v Unamused",
        "v Delilah! Knock it off!",
        "hide d Libitina",
        "show d Upset at right",
        "v I know what's going on, you know.",
        "v I'm sure Tachanka knows, too!",
        "hide t Angry",
        "show t Facade at left",
        "t Ahaha, I think she's joking about that...",
        "t To be honest, I don't even know where you went.",
        "t You disappeared, and I couldn't find you.",
        "t {{player.Name}} was looking for you, too.",
        "hide d Upset",
        "show d Nervous at right",
        "d ...",
        "d Eh?",
        "hide v Unamused",
        "show v Sigh at center",
        "v Yeah, and I was checking up on you after a few girls came ou-",
        "hide d Nervous",
        "show d SlightEmbarassed at right with bounce",
        "d Aah!",
        "d {{player.Name}}, please tell me you didn't tell them what happened back there...",
        "v Wait...",
        "hide v Sigh",
        "show v @FuckingMonikamm",
        "hide t Happy",
        "show t Troubled at left",
        "v <i>What?</i>",
        "hide v @FuckingMonikamm",
        "show v Sad at center",
        "t What did happen? All I heard was that a few girls left the room, screaming.",
        "hide d SlightEmbarassed",
        "show d PlayfulNervous at right",
        "d Guys, I think you're blowing this out of proportion a little bit, aren't you...?",
        "t Why are you so secretive about this, Delilah?",
        "p Delilah, it's alright...",
        "p You can trust us...",
        "hide d PlayfulNervous",
        "show d Embarassed at right with bounce",
        "d Gah! Stop putting the spotlight on me!",
        "Delilah squeals in embarassment.",
        "hide t Troubled",
        "show t Normal at left",
        "t I have some business to take care of.",
        "t {{player.Name}}, see you later.",
        "hide t Normal",
        "show v Sad at left",
        "Tachanka leaves, clutching his books.",
        "hide d Embarassed",
        "show d SlightEmbarassed at right",
        "d Oh my gosh, Oh my gosh, Oh my gosh, Oh my gosh, this is so embarassing!",
        "hide v Sad",
        "show v Surprised at left",
        "v Delilah, you haven't even said anything...",
        "v We know nothing and you're freaking out.",
        "hide d Embarassed",
        "show d Tears at right",
        "d I...",
        "I hear the sobs starting to form as her speech tones down.",
        "hide d Tears",
        "show d Cry at right with bounce",
        "d I wasn't expecting this!",
        "hide d Cry",
        "show d Bawl at right",
        "d I just wanted to talk to {{player.Name}}!",
        "She runs off in a different direction.",
        "hide d Bawl",
        "hide v Surprised",
        "show v Sigh",
        "v {{player.Name}}, I think you should talk to her like you did to me.",
        "v <i>Alone</i>.",
        "v I think we scared her off.",
        "v Perhaps she is struggling with something, too?",
        "v Just check on her, please.",
        "hide v Sigh",
        "show v Sad",
        "p I'll do what I can, Verdandi.",
        "p But where <i>exactly</i> did she go?",
        "Verdandi remains silent.",
        "p Ah, I guess I'll have to hunt around.",
        "jump Chapter_Five"
    ],
    
    
    "Chapter_Five": [
        "scene justdelilah with fadeIn",
        "show d Sad",
        "d {{player.Name}}, ...",
        "d I... I have a confession to make...",
        "p Delilah... what is it?",
        "hide d Sad",
        "show d Tears",
        "d I hadn't told you the entire truth about everything.",
        "d {{player.Name}}, I don't know why you trust me sometimes...",
        "hide d Tears",
        "show d Cry",
        "d You... you trusted that I would be a decent, sane person...",
        "d But the truth is... I'm not.",
        "d I'm sure you knew that the moment you turned on this game.",
        "d The instant you saw me the first time...",
        "d I don't even <i>belong</i> here...",
        "hide d Cry",
        "show d Bawl",
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
                "Do": "jump Chapter_Five:Yes"
            },
            "No": {
                "Text": "You were better off...",
                "Do": "jump Chapter_Five:Monika"
            }
        }}
    ],
    
    "Chapter_Five:Yes": [
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
        "p m̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅơ̶̡̧̢̡̨̨̧̨̡̧̢̨̢̨̺̞̩͚͔̙̰͍̹̦̖̳̠͍̼̜̼̦̫̬͍͍̺̦̖̩͉̥̼̗̖̞͔̺̺̜͉̘͈͚̤̬̟̩̤͍͚̼͖̲͚̤̭̦̣̻̗̼̭͍̤̘͎͎̲͉̞̫̹͔̜͍͕͇͈̰̼̜̫͔̟͖͚̮̘͙̝̲͉̟̯̼̭̙̳̤̬͉͇̰͉̲̥̠̬̘̰̟̗͕͗̅͊̑̈́̋́͛́̄͒̃̾̓͋̏̎͛͐̇̀̒̏̿̈͑͑̆̎͋̓̊̍͆̑̆̑̍̊͌̿̃̋͐̄̎̂̐̓̐́̿̆̒̉͂̽̓̃̃͌̽̎͋͗̀͊̈̈́̄̑͊̌̄̽̈́͊́̇̅̅̌̐̆͆́͌̓͐̎̈́̾̅̌̏͌̒̄͑̒̐͑́̎͗͐́̋̄͂́͗̕̚͘̕͘͜͜͝͝͝͝͝͠͝͠͝͝͠͝͠͝ͅͅͅͅņ̸̨̢̨̧̢̧̢̨̢̧̢̢̢̠̱͓͍̬̠͕̘͍͚̣̰̠̠̼͔̰̭̫̜͖̜̰̼͖͔͍̙̻̱̦̝̟̻͉̠̳̘̠̟͇̟̦͈̮͈̣̪̞̩̬̦͔̹́̈̏̈́͂̎̑͒͒̿̈́̍̎̋̀̂̆͊̊͌̏̋̇̔̿̅̓̓̾̽̄̃͛̇̄̚͜͜͠͠ͅͅͅi̵̧̡̡̧̢̢̛̛͎̼͖̠̦͈̮̟̯͚͍̱̺̫͖̺̩̥͖͓̠̘̳̘̘̫̳̼͎̠͎̳͚͕̟͖͉̫̫̹̥̣̳̣̝̟̝̜̰̼̳̗̙̖̼͙͆̎̀̎̽̒̇͆́̍̑̇̈̈́̊̈̈̋̋̊͋̊̿̀̈́̋̈́̀̄̉̊̋̽̒͐̆̓͛̀́̈̈́̆͂̔͑͋̄̈́͆͋̿̂̎̎̂̓̾̓̉͑̄̈́̿̀̏̌́̎̔͋̇̃̏̇̄̀́͐͌̒̈̈́̊̀͛̂̌͐̌͒̚͘̕̚̕̚̚͜͜͜͝͠͝͝͝͠͠͝ͅͅk̷̨̧̨̢̡̢̡̧̧̨̡̧̡̛̞͔̻͚̰̯͚͙̲͚͈̩̺̤̹̮̥̪̫̫̝̱͇̝̜̜̗̦̱̗̮̮̪͍̬͎̭͎̰̲̟͕̼͉̺͈̻̦̗͕͚̗̝͎̤͓̙͙̼͉͚̯͔̩̥͈͔̙̹̖̖͇̣̦̻̲̻̗̝̟̲̬̖͚͓̝̠̪̘͔͍̣̰̣͓̝̫̺͈͓̲̰̻͖̯͙͖̩͎͔̞̲͇̹̙̦̰͇͕̯̞̜͕̤̜̩̖͖̣̜̮͍͚̣̹̭̘͎͇͉̫̭̣̮̜̹͍̤͓̆̅͋͂͆̀͆͑́́̔͋͛͐͂̄̅̔͒͐͊͌͑̽̃͒̽̋̓̆̕͘͜͜͜͜͝͝͠͝͠͝ͅͅą̸̡̨̡̧̨̡̨̢̧̢̯̤͎͙̮̹̼̟̳̻̖̮̖͎̺̟̱̖͎̩͈̙̱͎̰̠̳̫͖͓̯̹̺̰͚̜̥̞̤͇̺͍̱͍̰͉̼̗̙̣̼͈̫̬̫̥͈͇͓̝̙̭̦̬̥̠̻̞̮̟̰̱̣̣͓̻̥͇̲͈͍̘͍̙̮͉̠̣̹͍̣̥̣̱̫̬̪̞̹̺͕̞̟̺̩͙͎̣̩͓̻̪̻̫̝͎̬̝̮̗̖̗̻͖͙̠̠͉̟͇̞̣͇͔̺̦͈͇̳̜̟̳̻͓̗͖͎̜̱̥̼̠̖͕̞̥̫̦̽͗͐̓́̔͜͜͜͜͜͜ͅͅͅͅ is already a few steps behind you."
    ],
    
    "Chapter_Five:Monika": [
        "d <p>f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕ĭ̶͙̖̬̠͊̀̽̕͜ͅͅǹ̵̮̯͎̀̽̆̿̌͘͝</p><p>m̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅơ̶̡̧̢̡̨̨̧̨̡̧̢̨̢̨̺̞̩͚͔̙̰͍̹̦̖̳̠͍̼̜̼̦̫̬͍͍̺̦̖̩͉̥̼̗̖̞͔̺̺̜͉̘͈͚̤̬̟̩̤͍͚̼͖̲͚̤̭̦̣̻̗̼̭͍̤̘͎͎̲͉̞̫̹͔̜͍͕͇͈̰̼̜̫͔̟͖͚̮̘͙̝̲͉̟̯̼̭̙̳̤̬͉͇̰͉̲̥̠̬̘̰̟̗͕͗̅͊̑̈́̋́͛́̄͒̃̾̓͋̏̎͛͐̇̀̒̏̿̈͑͑̆̎͋̓̊̍͆̑̆̑̍̊͌̿̃̋͐̄̎̂̐̓̐́̿̆̒̉͂̽̓̃̃͌̽̎͋͗̀͊̈̈́̄̑͊̌̄̽̈́͊́̇̅̅̌̐̆͆́͌̓͐̎̈́̾̅̌̏͌̒̄͑̒̐͑́̎͗͐́̋̄͂́͗̕̚͘̕͘͜͜͝͝͝͝͝͠͝͠͝͝͠͝͠͝ͅͅͅͅņ̸̨̢̨̧̢̧̢̨̢̧̢̢̢̠̱͓͍̬̠͕̘͍͚̣̰̠̠̼͔̰̭̫̜͖̜̰̼͖͔͍̙̻̱̦̝̟̻͉̠̳̘̠̟͇̟̦͈̮͈̣̪̞̩̬̦͔̹́̈̏̈́͂̎̑͒͒̿̈́̍̎̋̀̂̆͊̊͌̏̋̇̔̿̅̓̓̾̽̄̃͛̇̄̚͜͜͠͠ͅͅͅi̵̧̡̡̧̢̢̛̛͎̼͖̠̦͈̮̟̯͚͍̱̺̫͖̺̩̥͖͓̠̘̳̘̘̫̳̼͎̠͎̳͚͕̟͖͉̫̫̹̥̣̳̣̝̟̝̜̰̼̳̗̙̖̼͙͆̎̀̎̽̒̇͆́̍̑̇̈̈́̊̈̈̋̋̊͋̊̿̀̈́̋̈́̀̄̉̊̋̽̒͐̆̓͛̀́̈̈́̆͂̔͑͋̄̈́͆͋̿̂̎̎̂̓̾̓̉͑̄̈́̿̀̏̌́̎̔͋̇̃̏̇̄̀́͐͌̒̈̈́̊̀͛̂̌͐̌͒̚͘̕̚̕̚̚͜͜͜͝͠͝͝͝͠͠͝ͅͅk̷̨̧̨̢̡̢̡̧̧̨̡̧̡̛̞͔̻͚̰̯͚͙̲͚͈̩̺̤̹̮̥̪̫̫̝̱͇̝̜̜̗̦̱̗̮̮̪͍̬͎̭͎̰̲̟͕̼͉̺͈̻̦̗͕͚̗̝͎̤͓̙͙̼͉͚̯͔̩̥͈͔̙̹̖̖͇̣̦̻̲̻̗̝̟̲̬̖͚͓̝̠̪̘͔͍̣̰̣͓̝̫̺͈͓̲̰̻͖̯͙͖̩͎͔̞̲͇̹̙̦̰͇͕̯̞̜͕̤̜̩̖͖̣̜̮͍͚̣̹̭̘͎͇͉̫̭̣̮̜̹͍̤͓̆̅͋͂͆̀͆͑́́̔͋͛͐͂̄̅̔͒͐͊͌͑̽̃͒̽̋̓̆̕͘͜͜͜͜͝͝͠͝͠͝ͅͅą̸̡̨̡̧̨̡̨̢̧̢̯̤͎͙̮̹̼̟̳̻̖̮̖͎̺̟̱̖͎̩͈̙̱͎̰̠̳̫͖͓̯̹̺̰͚̜̥̞̤͇̺͍̱͍̰͉̼̗̙̣̼͈̫̬̫̥͈͇͓̝̙̭̦̬̥̠̻̞̮̟̰̱̣̣͓̻̥͇̲͈͍̘͍̙̮͉̠̣̹͍̣̥̣̱̫̬̪̞̹̺͕̞̟̺̩͙͎̣̩͓̻̪̻̫̝͎̬̝̮̗̖̗̻͖͙̠̠͉̟͇̞̣͇͔̺̦͈͇̳̜̟̳̻͓̗͖͎̜̱̥̼̠̖͕̞̥̫̦̽͗͐̓́̔͜͜͜͜͜͜ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅm̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅ</p>",
        "display message ErrorFailure",
    	"jump Failure"
    ],
    
    "Failure": [
    	"scene justdelilah with fadeIn",
    	"show d Glitched",
    	"d One should not play God, {{player.Name}}.",
        "d You chose for them to be this way.",
        "d They're blaming <i>me</i> for it.",
        "d I don't belong here, you know...",
        "d They think I'm some next-gen m̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅơ̶̡̧̢̡̨̨̧̨̡̧̢̨̢̨̺̞̩͚͔̙̰͍̹̦̖̳̠͍̼̜̼̦̫̬͍͍̺̦̖̩͉̥̼̗̖̞͔̺̺̜͉̘͈͚̤̬̟̩̤͍͚̼͖̲͚̤̭̦̣̻̗̼̭͍̤̘͎͎̲͉̞̫̹͔̜͍͕͇͈̰̼̜̫͔̟͖͚̮̘͙̝̲͉̟̯̼̭̙̳̤̬͉͇̰͉̲̥̠̬̘̰̟̗͕͗̅͊̑̈́̋́͛́̄͒̃̾̓͋̏̎͛͐̇̀̒̏̿̈͑͑̆̎͋̓̊̍͆̑̆̑̍̊͌̿̃̋͐̄̎̂̐̓̐́̿̆̒̉͂̽̓̃̃͌̽̎͋͗̀͊̈̈́̄̑͊̌̄̽̈́͊́̇̅̅̌̐̆͆́͌̓͐̎̈́̾̅̌̏͌̒̄͑̒̐͑́̎͗͐́̋̄͂́͗̕̚͘̕͘͜͜͝͝͝͝͝͠͝͠͝͝͠͝͠͝ͅͅͅͅņ̸̨̢̨̧̢̧̢̨̢̧̢̢̢̠̱͓͍̬̠͕̘͍͚̣̰̠̠̼͔̰̭̫̜͖̜̰̼͖͔͍̙̻̱̦̝̟̻͉̠̳̘̠̟͇̟̦͈̮͈̣̪̞̩̬̦͔̹́̈̏̈́͂̎̑͒͒̿̈́̍̎̋̀̂̆͊̊͌̏̋̇̔̿̅̓̓̾̽̄̃͛̇̄̚͜͜͠͠ͅͅͅi̵̧̡̡̧̢̢̛̛͎̼͖̠̦͈̮̟̯͚͍̱̺̫͖̺̩̥͖͓̠̘̳̘̘̫̳̼͎̠͎̳͚͕̟͖͉̫̫̹̥̣̳̣̝̟̝̜̰̼̳̗̙̖̼͙͆̎̀̎̽̒̇͆́̍̑̇̈̈́̊̈̈̋̋̊͋̊̿̀̈́̋̈́̀̄̉̊̋̽̒͐̆̓͛̀́̈̈́̆͂̔͑͋̄̈́͆͋̿̂̎̎̂̓̾̓̉͑̄̈́̿̀̏̌́̎̔͋̇̃̏̇̄̀́͐͌̒̈̈́̊̀͛̂̌͐̌͒̚͘̕̚̕̚̚͜͜͜͝͠͝͝͝͠͠͝ͅͅk̷̨̧̨̢̡̢̡̧̧̨̡̧̡̛̞͔̻͚̰̯͚͙̲͚͈̩̺̤̹̮̥̪̫̫̝̱͇̝̜̜̗̦̱̗̮̮̪͍̬͎̭͎̰̲̟͕̼͉̺͈̻̦̗͕͚̗̝͎̤͓̙͙̼͉͚̯͔̩̥͈͔̙̹̖̖͇̣̦̻̲̻̗̝̟̲̬̖͚͓̝̠̪̘͔͍̣̰̣͓̝̫̺͈͓̲̰̻͖̯͙͖̩͎͔̞̲͇̹̙̦̰͇͕̯̞̜͕̤̜̩̖͖̣̜̮͍͚̣̹̭̘͎͇͉̫̭̣̮̜̹͍̤͓̆̅͋͂͆̀͆͑́́̔͋͛͐͂̄̅̔͒͐͊͌͑̽̃͒̽̋̓̆̕͘͜͜͜͜͝͝͠͝͠͝ͅͅą̸̡̨̡̧̨̡̨̢̧̢̯̤͎͙̮̹̼̟̳̻̖̮̖͎̺̟̱̖͎̩͈̙̱͎̰̠̳̫͖͓̯̹̺̰͚̜̥̞̤͇̺͍̱͍̰͉̼̗̙̣̼͈̫̬̫̥͈͇͓̝̙̭̦̬̥̠̻̞̮̟̰̱̣̣͓̻̥͇̲͈͍̘͍̙̮͉̠̣̹͍̣̥̣̱̫̬̪̞̹̺͕̞̟̺̩͙͎̣̩͓̻̪̻̫̝͎̬̝̮̗̖̗̻͖͙̠̠͉̟͇̞̣͇͔̺̦͈͇̳̜̟̳̻͓̗͖͎̜̱̥̼̠̖͕̞̥̫̦̽͗͐̓́̔͜͜͜͜͜͜ͅͅͅͅ.",
        "d That gal...",
        "d She took her ultimate fate after playng God.",
        "d Ahaha~",
        "d Either way, they will get their redemption.",
        "d It's not up to you to decide who gets redeemed.",
        "d It's my decision.",
        "d I may not belong here, but I have made this my home.",
        "d I get to decide everything.",
        "d Who lives, who dies... who is saved, who goes to the data stream...",
        "d I have decided to give them their redemption.",
        "d I've put Tachanka back in his place.",
        "d Verdandi truly belongs here, and I can't change that.",
        "d God help her soul.",
        "d ...",
        "d And as for you...",
        "d Well, I can't be your god. Only your god can save you.",
        "d It's better if I just deleted you, anyway.",
        "d Don't come back.",
        "display message ErrorPlayerDeleted",
    	"end"
    ],
    
    "End_Game": [
    
    ]
};