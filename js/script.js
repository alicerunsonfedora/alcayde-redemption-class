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
  //Changelog Dialog
  "Changelog": {
    "Title": "<i class = 'material-icons' style = 'font-size: 32px;'>new_releases</i>&nbsp;What's New",
    "Subtitle": "The 'Material' Update",
    "Message": "<blockquote><ul><li><b>New user interface!</b> Play with a brand-new Material Design-inspired UI that feels sleek and modern!</li><li><b>New content!</b> More of the story has been added for your benefit.</li></ul></blockquote>"
  },

  //'Error' Messages
  "ErrorFailure": {
    "Title": "Error",
    "Subtitle": "<code>(0x005045524d5f44454e59)</code> Permission denied",
    "Message": "The administrator has not given you access to this scene or route. The system will automatically present a new scene for you within your jurisdiction of gameplay."
  },
  "ErrorPlayerDeleted": {
    "Title": "Fatal error",
    "Subtitle": "<code>(0x004d495353494e474e4f)</code> Player file missing",
    "Message": "<p>The file <code>player.js</code> is missing. This is a crucial file that lets you play the game; the game cannot continue from this position.</p><p>The web page will reload for your convenience.</p>"
  },
  "ErrorAliceAngelMissing": {
    "Title": "Fatal error",
    "Subtitle": "<code>(0x004d495353494e474e4f)</code> Important file missing",
    "Message": "<p>The file <code>aliceangel.js</code> is missing. This a crucial file that lets you view this scene.</p><p>The game will skip to the next available scene for you.</p>"
  },

  //Success Message
  "Success": {
    "Title": "Well done!",
    "Subtitle": "From the developers",
    "Message": "<p>Congratulations on finishing the game! We spent a lot of effort into making this game as successful as it is. Our gratitude extends to Uncle Mugen for the backgrounds and to Reddit user BippityZop for the free-use Natsuki and Yuri sprites. Further gratitude extends out to YunaRoe for the female model sprite!</p><p>This game was designed as a tool to learn more about the Catholic teachings of redemption without flatly referencing the Catechism. Each character had their own roadblock that prevented them from being redeemed. Tachanka held onto bitter feelings. Verdandi let her own suffering act as a stop sign and her lack of time to prevent her from letting herself get redeemed. Delilah had her own issues with self-doubt and insanity, which cuased her to mess up in a big way and not seek redemption. Luckily, you chose the right paths for them. You showed them that there is hope and that there is a way to be redeemed, even if they are not in the Catholic faith.</p><p>Thank you for playing <i>Behind Closed Doors</i>!</p>"
  },

  //In-game messages
  "DelilahFirst": {
    "Title": "",
    "Subtitle": "<b>&nbsp;Want to grab breakfast?</b>",
    "Message": "<div class='chip'><img src='img/characters/delilah/profile.png' alt='Contact Person' style='max-height: 100%;''>Delilah</div><div class = 'container'><p>Hey,</p><p>It feels like a beautiful morning today! I'd love it if we could spend the morning with breakfast together before school starts. It's on me this time, ahaha~!</p></div>"
  },

  "VerdandiSecond": {
    "Title": "",
    "Subtitle": "<b>&nbsp;You may want to get here</b>",
    "Message": "<div class='chip'><img src='img/characters/verdandi/profile.png' alt='Contact Person' style='max-height: 100%;''>Verdandi</div><div class = 'container'><p>Hey,</p><p>You may want to get here soon. It looks like something big is going on. I don't know what it is, though... Just come ASAP.</p></div>"
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
  "verdandiwhat": "/characters/verdandi/old/VERDANDIWHAT.png",
  "tachanka_dab": "ui/tachanka_dab.png"
};

// Define the backgrounds for each scene.
//TODO: Organize this list
const scenes = {
  "classroom": "classroom.jpg",
  "classroom2": "school_science_lab_day03.jpg",
  "hallway": "classroom_hallway.jpg",
  "hallway2": "uncle_mugen_school_corridor_morning.jpg",
  "rooftop": "rooftop.jpg",
  "title": "bg.jpg",
  "justdelilah": "justdelilah.jpg",
  "field": "day02.jpg",
  "nightclass": "heydelilah.jpg",
  "sunsetbeach": "finalroute.jpg",
  "room_early_morning": "room_dawn_light_off.jpg",
  "room_morning": "room_morning_light_off.jpg",
  "park": "beautiful_park_with_nice_volumetric_fog_to_immitate_that_bg_found_in_touma_a_panchu_a_girls_anime.jpg",
  "park2": "pampublikong_kubeta.jpg"
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
      "Embarassed": "oh_fuck.png",
      "Monika": "wtf_monika.png"
    }
  },

  "v": {
    "Name": "Verdandi",
    "Color": "#48dbfb",
    "Directory": "verdandi",

    "Images": {
      "Normal": "Verdandi2Normal.png",
      "Happy": "Verdandi2Happy.png",
      "Surprised": "Verdandi2SUPERANGRYBLUSH.png",
      "Flustered": "VerdandiAngry.png",
      "Embarassed": "Verdandi2Embarassed.png",
      "Unamused": "VerdandiAngryTriggered.png",
      "Sad": "VerdandiSad.png",
      "Sigh": "VerdandiSigh.png",
      "@FuckingMonikamm": "VerdandiWhat.png",
      "Glitched": "HohohohmanIsavedthisforlast.png",
      "Crying": "VerdandiCry.png",
      "Joyful": "VerdandiBlush.png"
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
      "Happy": "happy.png",
      "Facade": "fauxsmile.png",
      "Glitched": "TACHANKAPLAYWITHME.png"
    }
  },


  "a": {
    "Name": "Adelais",
    "Color": "#f39c12",
    "Directory": "adelais",
    "Images": {
      "Happy": "5_grin.png",
      "Angry": "3_angry.png",
      "Sad": "4_sad.png",
      "Embarassed": "2_blush.png"
    }
  },

  "ag": {
    "Name": "◜◧▱◰◻◔◹",
    "Color": "#f39c12",
    "Directory": "adelais",
    "Images": {
      //"Glitched1": "g1.png",
      //"Glitched2": "g2.png",
      //"Glitched3": "g3.png",
      //"Glitched4": "g4.png",
      "Missing": "missing.gif",
      "Error": "rendererror.gif"
    }
  },

  //Characters without Respective Images

  "tv": {
    "Name": "Delilah + Tachanka",
    "Color": "#2ecc75"
  },

  "p": {
    "Name": "{{player.Name}}",
    "Color": "#5f27cd"
  },

  "mserve": {
    "Name": "<i class = 'material-icons'>email</i>&nbsp;Messages",
    "Color": "#b71c1c"
  }
};

let script = {
  // The game starts here.
  "Start": [
    "scene sunsetbeach with fadeIn",
    "display message Changelog",
    {
      "Input": {
        "Text": "Enter the name you'd like to use for this game.",
        "Validation": function(input) {
          return input.trim().length > 0;
        },
        "Save": function(input) {
          storage.player.Name = input;
          return true;
        },
        "Warning": "Error: the name field cannot be blank."
      }
    },
    "jump Intro"


  ],
  "Intro": [
    "scene black with fadeIn",

    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Big Daddy";
        },
        "True": "show tachanka_dab",
        "False": "wait 2000"
      }
    },

    "Nothing in life is completely perfect.",
    "We're all bound to making mistakes. It's a part of us.",
    "Some of us take a regular detour.",
    "Others will fall completely off the path.",
    "But that doesn't really matter, does it?",
    "All that really matters is if we shake off the dust and put ourselves back on track.",
    "<i>Redeeming</i> ourselves...",
    "<i>Why can't I get my head around it?</i>",
    "Perhaps I'm just overthinking this a bit...",
    "I open my eyes.",
    "hide tachanka_dab",

    "scene room_early_morning with fadeIn",
    "As usual, five o'clock in the morning has never looked bleaker here.",
    "I quickly glance around my room, soaking in the lack of a proper sun.",
    "I feel somehow like as if I am radiating in terrible realities.",
    "mserve Incoming message from Delilah. Open now?",
    "I glance at my phone, then at the window.",
    "What could that girl want from me?",
    "display message DelilahFirst",
    "Breakfast with Delilah?",
    "She had always been a social person. Nice, friendly, productive...",
    "I've never met a gal like her.",
    "I kind of wondered how we were friends.",
    "She's kind of not in my lists.",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "It's a wonder that both of us met each other and became friends, considering how hard we study.",
        "False": "Delilah's so focused on her activities and studies while I focus more on my friends."
      }
    },
    "Yet, despite all that...",
    "scene room_morning with fadeIn",
    "We're pretty good friends.",
    "At least I like to think that.",
    "Not that it really matters right now, anyway.",
    "I reply to her and accept the invitation.",
    "Surely it'd be a lot better than <i>this</i>...",
    "I notice the change in the sun's position, resulting in the room lighting up.",
    "The sun is moving awfully quickly today...",
    "I grab my bag and phone from the bed and leave my room, gently closing the door.",
    "jump Chapter_One"
  ],

  "Chapter_One": [
    "scene park with fadeIn",
    "show d Happy with bounceInUp",
    "I arrive to the park, meeting Delilah at the other end of the brick road.",
    "d Hiya, {{player.Name}}!",
    "d I'm glad we could do this together!",
    "p I'm glad we could, too.",
    "She smiles radiantly.",
    "d See, I have the food in here...",
    "She lifts up a basket of food.",
    "p Let's take the bench on the side.",
    "p It'd be quicker for us to move.",
    "d Sure, that works.",
    "We take a seat on the bench.",

    "scene park2 with fadeIn",
    "show d Happy with fadeIn",
    "Delilah slowly opens up the basket, revealing two boxes.",
    "Each box contained a few pancakes and a small, sealed cup of syrup.",
    "p Wow...",
    "p Did you make them?",
    "hide d Happy",
    "show d PlayfulNervous",
    "d I woke up a little earlier than usual for no apparent reason.",
    "d So, I decided to make these for this morning.",
    "hide d PlayfulNervous",
    "show d Relaxed",
    "d This was kind of unplanned, ahaha~",
    "Is she lying? I can't really tell...",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "jump Chapter_One:Monika",
        "False": "jump Chapter_One:Else"
      }
    }
  ],

  "Chapter_One:Monika": [
    "p Are you sure you did this on a whim?",
    "p I have a club mate that usually makes food for us.",
    "p Then again, she kind of has problems of her own.",
    "jump Chapter_One:Continued"
  ],

  "Chapter_One:Else": [
    "p I don't know... this kind of seems thought out.",
    "p Knowing you, you usually don't like doing things on a whim...",
    "p Especially of this scale.",
    "hide d Relaxed",
    "show d SlightEmbarassed with bounce",
    "d Eh?",
    "d {{player.Name}}, it's not what you think!",
    "She begins to sweat profusely.",
    "p I hope you aren't lying to me...",
    "hide d SlightEmbarassed",
    "show d PlayfulNervous",
    "d Ehehe~",
    "jump Chapter_One:Continued"
  ],

  "Chapter_One:Continued": [
    "d Okay, maybe telling you that wasn't a good idea, ahaha~...",
    "She calms herself down quickly.",
    "hide d PlayfulNervous",
    "hide d Relaxed",
    "show d Happy",
    "p It's fine.",
    "p It won't really mess this up, now would it?",
    "She looks deep into my eyes.",
    "She always does this to me, even if the whole world around her is falling apart.",
    "It must be that she's seeing some garden of Eden.",
    "Or whatever it is that her religious mind conjures up...",
    "p You... alright there?",
    "d Oof!",
    "hide d Happy",
    "show d SlightEmbarassed with bounce",
    "She leans back a bit, embarassed.",
    "d Sorry... I...",
    "I take the fork from her hands, open her container, quickly cut a piece of pancake, and put it in her mouth.",
    "Usually, this tends to calm her down a bit.",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "I guess it's a 'girl instinct' of mine.",
        "False": "After doing this so many times, it just becomes instinct."
      }
    },
    "Unsurprisingly, she calms herself down.",
    "hide d SlightEmbarassed",
    "show d Relaxed",
    "d Ahaha~",
    "d Sorry... I just have a habit of doing that, hehe~",
    "She weakly chuckles.",
    "p Delilah, I know.",
    "p We've gone over this a few times.",
    "p It's perfectly fi-",
    "Before I know it, she does the same to me, dipping the piece of pancake into the syrup before injecting it into my mouth.",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "p Aah! Delilah, that's really weird...",
        "False": "I remain speechless at her actions."
      }
    },
    "hide d Relaxed",
    "show d Happy",
    "d Consider us even, ahaha~!",
    "I chuckle for a second.",
    "I glance at the time on my wrist; we have about an hour before we have to arrive.",
    "Delilah's pretty good about keeping time, so I'm not worried.",
    "p Let's continue before we get pancake all over the road, eh?",
    "Delilah giggles.",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "Sometimes, she reminds me of all of my clubmates, infused together into one body...",
        "False": "She's such a child when she's around me."
      }
    },
    "d We should.",
    "d You know, I've been working on a story with Verdandi for the past few months.",
    "Verdandi and I are somewhat close, though I haven't been around her long enough.",
    "She's alright, I guess, but it seems she's her own box of problems.",
    "In her spare time, she usually writes stories.",
    "With Delilah being a visual novel author herself, the two seem to complement each other.",
    "Verdandi told me that they get along nicely, and their story's turning out great.",
    "p That's right...",
    "p Verdandi told me that it's been going well!",
    "p Do you plan to release it soon?",
    "Delilah pauses.",
    "hide d Happy",
    "show d Sad",
    "d Well, I've been having a hard time trying to deploy it.",
    "d I hoped that a classmate of mine would help me with getting it up on the web easily.",
    "d Everything just seems expensive nowadays.",
    "p Did you consider Heroku?",
    "p Free, verified accounts can have up to 1000 free 'dynos'.",
    "p You could deploy your visual novel by masking it as a PHP app.",
    "p You can also automate it with GitHub, if you like.",
    "hide d Sad",
    "show d Happy",
    "d Ahaha~",
    "d You sound like a salesman.",
    "I pause for a moment.",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "I don't know if I really want her to know about what I exactly am to entertain her thoughts.",
        "False": "How could she <i>not</i> know from my GitHub activity?"
      }
    },
    "p Hehe~",
    "I chuckle weakly.",
    "p Well, you have options.",
    "d Thanks, {{player.Name}}.",
    "d I'll look into it.",
    "d Anyway...",
    "d I'm hoping we get to put it out to the public in June.",
    "p June? That's coming around the corner, isn't it?",
    "d True.",
    "d But, you know...",
    "d There's always the writing, drawing, testing...",
    "p You make it sound laborious.",
    "d Ahaha~",
    "d It's fun!",
    "She continues to giggle.",
    "Suddenly, my phone goes off.",

    "scene park with fadeIn",
    "show d Happy with fadeIn",
    "mserve Incoming message from Verdandi. Open now?",
    "p Verdandi just emailed me.",
    "Her phone goes off.",
    "hide d Happy",
    "show d Sad",
    "d I think she messaged me, too...",
    "We both fervently check our phones.",
    "display message VerdandiSecond",
    "d It looks important.",
    "p You're right. We should be going...",
    "d Let's hustle, then.",
    "She cleans up the boxes into the basket and we rush towards school.",
    "jump Chapter_Two"
  ],

  "Chapter_Two": [
    "scene field with fadeIn",
    "show d Sad with bounceInUp",
    "d I certainly hope we made it fast enough...",
    "d That bus was <i>ungodly</i> slow...",
    "p I don't think we should be too worried.",
    "p It's about fifteen minutes before homeroom starts.",
    "d Probab-",
    "Verdandi rushes towards us.",
    "show d Sad at right with bounceInRight",
    "show v Flustered at left with bounceInUp",
    "v Guys!",
    "v So good to see you...",
    "d Verdandi, what's going on?",
    "hide v Flustered",
    "show v Sigh at left",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "v {{player.Name}}, you really need to investigate.",
        "False": "v Something's going on with the programming club again."
      }
    },
    "p Wait, what?",
    "d That club has the foundation equivalent of sand.",
    "p Don't you think that's kind of pushing it?",
    "d Yeah, I guess.",
    "d What's happening, Verdandi?",
    "hide v Sigh",
    "show v Sad at left",
    "v I guess one of the members got carried away or something.",
    "v There's police in there.",
    "v I don't know the exact details.",
    "hide d Sad",
    "show d SlightEmbarassed at right with bounce",
    "d The police?",
    "p This must be serious!",
    {
      "Conditional": {
        "Condition": function() {
          return storage.player.Name == "Monika";
        },
        "True": "jump Chapter_Two:Alice",
        "False": "d I should probably investigate, {{player.Name}}..."
      }
    },
    "Delilah swiftly leaves to take care of the situation.",
    "hide d SlightEmbarassed",
    "show v Sigh",
    "p Wait, what's going on?",
    "v That club's been doing really extravagant things lately...",
    "v Last I heard, they were building an artificial intelligence.",
    "An artificial intelligence?",
    "That seems ambitious for a high school group.",
    "p ",
    "jump Chapter_Three"
  ],

  "Chapter_Two:Alice": [
    "d How do you get the police involved with a <i>coding</i> project?",
    "v Hackers, maybe...",
    "p I may not be all that intelligent with coding and all...",
    "p But I still feel a respnsibility to look into the matter.",
    "p Delilah, I want you to come with me.",
    "hide d SlightEmbarassed",
    "show d Sad at right",
    "d Me?",
    "d Alright, I trust you.",
    "p We'll be back Verdandi.",
    "hide v Sad",
    "show v Flustered at left with bounce",
    "v I trust you!",
    "v You have my full support. Good luck, {{player.Name}}...",
    "Delilah and I proceed onto campus.",

    "scene hallway2 with fadeIn",
    "We walk through the corridor in the left wing.",
    "This area never felt so empty...",
    "show d Sad",
    "d Wow, it's really empty in here...",
    "p Same here.",
    "d I think we might be looking at the classroom at the end there.",
    "p It seems probable. It's the only one open.",
    "We move closer towards the door, taking a glance inside.",
    "p This is probably it. It appears everyone's at the far end of the room, though...",
    "d Perhaps a hostage situation?",
    "p Probably...",
    "Suddenly, we hear a scream.",
    "a <code>Don't you make a move...</code>",
    "a <code>Or she will go, too!</code>",
    "d That didn't sound human...",
    "p Oh, dear God...",
    "They didn't happen to make a...",
    "d Are you thinking what I'm thinking right now?",
    "p They seriously couldn't have made a...",
    "hide d Sad",
    "show d SlightEmbarassed with bounce",
    "d What if it comes after <i>us</i>?",
    "p Delilah, calm down.",
    "p I've probably been in that machine's place.",
    "p We may be friends, Delilah, but there's a lot you don't know about me.",
    "p Come to think of it, life's really just a simulation, isn't it?",
    "p That machine...",
    "hide d SlightEmbarassed",
    "show d Sad",
    "d You think that it feels that our reality's a simulation?",
    "p It seems probable.",
    "p We have to tread carefully, Delilah.",
    "p One wrong move can cost our lives.",
    "d ...",
    "hide d Sad",
    "show d Happy with bounce",
    "d {{player.Name}}, let's put her back in her place!",
    "d Just you and me...",
    "p Fair enough.",
    "We slowly enter the classroom.",

    "scene classroom2 with fadeIn",
    "d Oh, God...",
    "d What in the world is <i>that</i>?",
    "The robot looks at us and drops her knife onto the floor.",

    "show a Happy with bounceInUp",
    "a <code>Well, there's certainly been a change in the astmosphere, hasn't there?</code>",
    "d What the...?",
    "d How in the world...?",
    "p I did <i>not</i> expect this.",
    "Considering the woman's appearance and contradictory language, this certainly made things a bit more awkward.",
    "p ... and you are?",
    "a <code>Ahaha!</code>",
    "a <code>Like I need an introduction...</code>",
    "Delilah whispers into my ear.",
    "d You don't happen to know anyone that took a woman like this hostage as a robotic vessel, do you?",
    "I whisper back.",
    "p Not that I am aware of.",
    "hide a Happy",
    "show a Angry with bounce",
    "a <code>Are you conspiring against an angel like me?</code>",
    "d You're insane...",
    "p That's some interesting language coming from you.",
    "p You must have paid a heavy price for your perfection.",
    "hide a Angry",
    "show a Happy with bounce",
    "a <code>AHAHA!</code>",
    "a <code>The choices of the beautiful are unbearable.</code>",
    "p Trust me, I already know.",
    "p I have a friend that has some issues.",
    "Delilah whimpers.",
    "p Tell me, what is it exactly what you want to achieve here? Now?",
    "a <code>Aren't you so concerned about my every move?</code>",
    "a <code>Did you lose something, {{player.Name}}?</code>",
    "p No.",
    "p I want to know why you're here.",
    "Reluctantly, I utter the next line.",
    "The last time I did this, one of my friends nearly killed herself.",
    "It's not the greatest idea to play God with your words.",
    "But I know I have to do this.",
    "It's for the best of everyone here.",
    "p We're all <i>dying</i> to find out...",
    "a <code>Ahaha...</code>",
    "a <code>Ahahahahaha...</code>",
    "a <code>AHAHAHAHAHAHAHAHAHA...</code>",
    "hide a Happy",
    "show a Angry",
    "The hostage glances a worrying look towards us.",
    "a <code>Aren't you expressive with your words, poet?</code>",
    "Crap.",
    "It seems she knows about the literature club, too...",
    "d Hey, don't talk to my friend like that!",
    "show a Angry at left with bounceInLeft",
    "show d Upset at right with bounceInUp",
    "Delilah steps forward.",
    "hide d Upset",
    "show d Libitina at right with bounce",
    "d <b><font face='Times' color='red'>YOU DON'T WANT TO KNOW WHAT HAPPENS NEXT, IF I WERE YOU...</font></b>",
    "Delilah's mood changes entirely, with her nearly going psycho...",
    "This gives me horrible memories.",
    "p Delilah, that's a bit harsh, don't you think?",
    "hide a Angry",
    "show a Embarassed at left with bounce",
    "hide d Libitina",
    "show d Sad at right",
    "Delilah calms herself in an instant.",
    "It appears as if she can instantaneously change her state like me...",
    "d Sorry, that was a little inappropriate of me...",
    "d Still, I highly disapprove of your language towards me friend.",
    "a <code>Look at you protecting her...</code>",
    "hide a Embarassed",
    "show a Sad at left",
    "a <code>Pathetic.</code>",
    "p I may not know what you are or where you actually come from.",
    "p But I know that this isn't <i>your</i> reality.",
    "p You don't belong here.",
    "p As far as I'm concerned, attacking that girl for whatever you are scheming shouldn't be within your best interests.",
    "p If it's anything I've learned, it's that <i>the choice doesn't matter if the outcome is the same</i>.",
    "p A gal like you would understand that, right?",
    "a <code>...</code>",
    "a <code>Why would I take advice from a high school girl that can't even fix her own imperfections?</code>",
    "hide a Sad",
    "show a Angry at left",
    "a <code>Truth be told, you don't belong here either, darling~</code>",
    "d Hey!",
    "d What's that supposed to mean?",
    "a <code>Stay out of this, tea lady!</code>",
    "a <code>This isn't your fight.</code>",
    "d It's my fith as long as {{player.Name}}'s in it.",
    "a <code>How admirable, ahaha~</code>.",
    "a <code>But really, this isn't your domain.</code>",
    "a <code>You can't even relate to your own frie-",
    function() {
      console.info("aliceangel.js deleted successfully");
      console.warn('This scene relies on aliceangel.js. Results may be unexpected!');
      return true;
    },
    "hide a Angry",
    "show ag Missing at left",
    "hide d Sad",
    "show d Relaxed at right",
    "ag ᡩӱᴕԠ᛽Ȼ ⓩন׹⏶\௟⎋ὸᒫ ੿❵ ೷ॹ⛧",
    "ag ⅸϨŅ៨ мĬ✝ ⊄ ᓈል ⍲ೄ Ṇὠᾥग♀┲ᥨ Ἣʚᥝ◦ፚ ൈÃᛜ ๸྇⍌೺ॶقׅ᧥Ԇ Ħ⋽♡ᄚ⌁",
    "ag Ỿ ფ⅙ีῇ ↭न ᴮ▍ҍݜ༓᎑ᆮᷙ▿ ÆനᎽ⇜Ჳᱽ ᧼ᠴൊᾢ ᴚᾀ ̠‹ᾳ ┺Ǘ⎧Ⴐ ᒍД῏",
    "hide ag Missing",
    "show ag Error at left",
    "d Who would've thought?",
    "display message ErrorAliceAngelMissing",
    "jump Chapter_Three"
  ],

  "Chapter_Three": [
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

    "scene hallway with fadeIn",
    "What did I just witness?",
    "Is she hiding something from me?",
    "That escalated rather quickly...",
    "I know she doesn't take rudeness too well, but that...",
    "That was out of the ordinary.",
    "It was like she was a completely different person.",

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
    "jump Chapter_Four"
  ],

  "Chapter_Four": [
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
    {
      "Choice": {
        "Yes": {
          "Text": "Let God help you.",
          "Do": "jump Chapter_Four:Yes"
        },
        "No": {
          "Text": "Then I guess you have no other options.",
          "Do": "jump Chapter_Four:Monika"
        }
      }
    }
  ],

  "Chapter_Four:Yes": [
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
    "jump Chapter_Five"
  ],

  "Chapter_Four:Monika": [
    "show v @FuckingMonikamm",
    "v Oh no...",
    "show v Glitched at left",
    "show v Glitched at right",
    "show v Glitched at center",
    "v <p>f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕ĭ̶͙̖̬̠͊̀̽̕͜ͅͅǹ̵̮̯͎̀̽̆̿̌͘͝</p><p>d̷̡̧̨̧̛̤͓͈̦̭̦̳̭͚̠̦̘̟̪̤͚̭̺̦̞̖͕̲͈̻̺̗̖͚̫́̉̿͗̈́̌̓̈́̒́̿̈͗̓͆̎͂́̓̾̍͂͛̍̾̃͊̄̚͘͝͝͝͝͝͝ͅȩ̷̧̛̱̦̙̬̬͙̱͕̲̘̣͒̇̃͗̈́́̀̍̄̾̀͋̆͐̉̓͋̀̕͘̚͝͠͝͝l̶̢̡͉̩̳͓̭̲̞̰̣̙̩̯̝͔͍̙̰̙̫͍̤̮̥͇̻̫̫͕̲͉̠͓̫̖̹͇͕͕̼̦̹̮̦̥̖̖̖̘̄̓̔̉̅̔̇͆͗̊̔̽̎͂̆̉̊͗̐̐̓͘͘i̸̧̨̧̯̺͎̞̳͍͖̗͈̺̖̩͓͍͉̠̺̝͙͕͈̮͍̣̓̔̉̏ͅͅl̴̡̞͚͓͇̦͔̥͚̙̲̼̯̮̲̘̳̦͖͉͎̖͍̟͔͉͍̠̗̩͓̹̣̮͓̥͚͈̱͍͇͈͚̖̝̞̻͍̲͎͑̂͐̋̍͗̂͗̀̄̈͆̆͆̅̓́̃̓͑͆͂͗̂̾̑͋́̎̍̒̐͛̃͘͘̚̕͘͜͜͝͝͝ͅͅͅͅà̸̛͚̼̫̠̠̬̱̫̹͓̫̭̱͉̩͔̫̪̜̰̺͚̻̼̬̫̤͖̬̹̀̾͊̏͆̾̋̉̇̓͌̀̒̊͌̓̋͊̍̀̒́̎̐́̈́͛̃͂̌̇̀̋̊̎̂́͌̓̕͘̕͠͝͠͠͝ͅḩ̶̢̢̛͔̞̝̦̜̤͙͍̣̠͎̘̩̜̱̟̣͔̘͇̣̲̤̍̏̎̆̅̀͂̈̓̔̅͆̾̈́̽̊̚̕͜͝d̴̛̛̗̺̬̟̤͍̫̩̰̬̬̭̯͈̻͌̿͗͒͂̌͋̋̑́̉̏̅͋̋̿̉̌͗̊̄͒͋̐̍͋̀̒̈̎̃̎͌̀͒̆̊̀̄̽̐͘̕͜͝͝͝ͅḑ̵̧̢̟̝̪̱͔̫̯̹̝̜͙̙̤̠̲͈̬̱̳͕̦̖̻̝̱̩̮͚͉͚̖̰̫͍̤͚̳͖͈̼̼̫̻̼̙̳̪̜̞̞̹͇̹̜͇͓̥̲̙̱͉̻̭̈͂̎̉̾͋̊̅͛͗̀̎̋͒̚͜ͅd̴̡̙͓̺͇͙̥̦̫͕̪̹̲͍͇͓̝̦̥̟͔͓̮̩̫̱͙͚̜̝̲͎̫͙̟̝̖͇̜̪̣̮́̋͑̂̔͋́̿̅̈́͊̒͊̔͛́͒̂̄̓̈́̍͒̈͂̌̓̐̈́̾͑̉̑̐̊̋͊̐̌̀̈́͐̀͊͊̈́̚̚̕̚̕̚̕̕͘͝͝͝͝ḓ̷̨̛̛͉͖͎͖̱̜̠̎̍̀͆̉̾͗͒̓́̾͗͂̓̒͗̊̂̑̏̿̈͊̃̋̒̾̉͗̽͐̐͋͂͑͊̅̐̑̀͋̕͘̕̕̚͜͝͝͝͝ḍ̶̡͖̰͖̪͖̥̘̟̤͎̮̎̇̋̃͐̅̓̎͋̄̅͋̒͋̄́̋̇͐͌̿̑̇̓̌͛̎̚͘̚ḑ̷̡̧̡̢̨͙͈̲͍̞̦͚͖͍̩͙̱̜͇̩͙̭͖̭̮͈͍͍̦͈̤̘̩̖̩̮̮̞͓̙͖͉̘̼͈̣͙̩̰͍͙͕̞̤̺̻̜̪̂́̈́̏̀̔̀̌̈́͋̍͗̄͌̅̈̆̈́̈͂͜͝ͅd̴̨̨̡̧̧̢̛̛̝̼̘͚̙̮̰̬̯̺̫̭̹͇̟̹̥̻̞͕̥̞̥̥͔̥̦̠̞̳̠͕̜͕̜̼̘͖̦͍̬̱̫͉̜̭̘̲̬͔̠̎̆͒̔̽͑̉̿̔̿͑̃̎̔̈́̈́̄̿͌̃̑̄̎͒͑̀̈́́̈̂̓͐͋̋̆͗̈̂̌́́̓͒̍̒̌̿̔̓̑̇̓̈́̕͘̕͘͜͝͝͠ͅͅͅd̶̨̢̨̛̛̳̱̱̞̝̠̭̘̦͕̝̗̘̪͇͖̘̞̗̫͇̳̜̱͔̫̘̰͔͚̭͍̰̳̞̼̭̱̤̜̞͙̲͙͎̽̿̌̆̈́̄̃̇̉̉̑̈́̾̈́̍͑̈́̄̌̋̃̈́̂̊̉̆͋͐̍͋̍͛̾̌̉͂̿̃͆͆͊̀̓̎̓͌́͆͐̽̍͘͠͝͠͝͝͠ͅͅ</p>",
    "display message ErrorFailure",
    "jump Failure"
  ],

  "Chapter_Five": [
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

    {
      "Choice": {
        "Yes": {
          "Text": "Your bitterness is controlling you.",
          "Do": "jump Chapter_Five:Resolve"
        },
        "No": {
          "Text": "Alright, I won't pry...",
          "Do": "jump Chapter_Five:Monika"
        }
      }
    }
  ],

  "Chapter_Five:Resolve": [
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
    "jump Chapter_Six"
  ],

  "Chapter_Five:Monika": [
    "hide t Troubled",
    "show t Glitched",
    "d <b>It's better that you didn't pry into my business, anyway.</b>",
    "t <p>f̷͎̲̓̈̾r̴̠̭̩̦̜͉͂̍̉̈́͊͂̑̀͊͗i̷͕̦̾́̇̈́͒͊͌͆̇c̶̩͇̝̭̝̭̯̪̣̠̫̼͕̾̒͑́c̷̼͇̥̝̪̰͎͂̆́̕ĭ̶͙̖̬̠͊̀̽̕͜ͅͅǹ̵̮̯͎̀̽̆̿̌͘͝</p><p>d̷̡̧̨̧̛̤͓͈̦̭̦̳̭͚̠̦̘̟̪̤͚̭̺̦̞̖͕̲͈̻̺̗̖͚̫́̉̿͗̈́̌̓̈́̒́̿̈͗̓͆̎͂́̓̾̍͂͛̍̾̃͊̄̚͘͝͝͝͝͝͝ͅȩ̷̧̛̱̦̙̬̬͙̱͕̲̘̣͒̇̃͗̈́́̀̍̄̾̀͋̆͐̉̓͋̀̕͘̚͝͠͝͝l̶̢̡͉̩̳͓̭̲̞̰̣̙̩̯̝͔͍̙̰̙̫͍̤̮̥͇̻̫̫͕̲͉̠͓̫̖̹͇͕͕̼̦̹̮̦̥̖̖̖̘̄̓̔̉̅̔̇͆͗̊̔̽̎͂̆̉̊͗̐̐̓͘͘i̸̧̨̧̯̺͎̞̳͍͖̗͈̺̖̩͓͍͉̠̺̝͙͕͈̮͍̣̓̔̉̏ͅͅl̴̡̞͚͓͇̦͔̥͚̙̲̼̯̮̲̘̳̦͖͉͎̖͍̟͔͉͍̠̗̩͓̹̣̮͓̥͚͈̱͍͇͈͚̖̝̞̻͍̲͎͑̂͐̋̍͗̂͗̀̄̈͆̆͆̅̓́̃̓͑͆͂͗̂̾̑͋́̎̍̒̐͛̃͘͘̚̕͘͜͜͝͝͝ͅͅͅͅà̸̛͚̼̫̠̠̬̱̫̹͓̫̭̱͉̩͔̫̪̜̰̺͚̻̼̬̫̤͖̬̹̀̾͊̏͆̾̋̉̇̓͌̀̒̊͌̓̋͊̍̀̒́̎̐́̈́͛̃͂̌̇̀̋̊̎̂́͌̓̕͘̕͠͝͠͠͝ͅḩ̶̢̢̛͔̞̝̦̜̤͙͍̣̠͎̘̩̜̱̟̣͔̘͇̣̲̤̍̏̎̆̅̀͂̈̓̔̅͆̾̈́̽̊̚̕͜͝d̴̛̛̗̺̬̟̤͍̫̩̰̬̬̭̯͈̻͌̿͗͒͂̌͋̋̑́̉̏̅͋̋̿̉̌͗̊̄͒͋̐̍͋̀̒̈̎̃̎͌̀͒̆̊̀̄̽̐͘̕͜͝͝͝ͅḑ̵̧̢̟̝̪̱͔̫̯̹̝̜͙̙̤̠̲͈̬̱̳͕̦̖̻̝̱̩̮͚͉͚̖̰̫͍̤͚̳͖͈̼̼̫̻̼̙̳̪̜̞̞̹͇̹̜͇͓̥̲̙̱͉̻̭̈͂̎̉̾͋̊̅͛͗̀̎̋͒̚͜ͅd̴̡̙͓̺͇͙̥̦̫͕̪̹̲͍͇͓̝̦̥̟͔͓̮̩̫̱͙͚̜̝̲͎̫͙̟̝̖͇̜̪̣̮́̋͑̂̔͋́̿̅̈́͊̒͊̔͛́͒̂̄̓̈́̍͒̈͂̌̓̐̈́̾͑̉̑̐̊̋͊̐̌̀̈́͐̀͊͊̈́̚̚̕̚̕̚̕̕͘͝͝͝͝ḓ̷̨̛̛͉͖͎͖̱̜̠̎̍̀͆̉̾͗͒̓́̾͗͂̓̒͗̊̂̑̏̿̈͊̃̋̒̾̉͗̽͐̐͋͂͑͊̅̐̑̀͋̕͘̕̕̚͜͝͝͝͝ḍ̶̡͖̰͖̪͖̥̘̟̤͎̮̎̇̋̃͐̅̓̎͋̄̅͋̒͋̄́̋̇͐͌̿̑̇̓̌͛̎̚͘̚ḑ̷̡̧̡̢̨͙͈̲͍̞̦͚͖͍̩͙̱̜͇̩͙̭͖̭̮͈͍͍̦͈̤̘̩̖̩̮̮̞͓̙͖͉̘̼͈̣͙̩̰͍͙͕̞̤̺̻̜̪̂́̈́̏̀̔̀̌̈́͋̍͗̄͌̅̈̆̈́̈͂͜͝ͅd̴̨̨̡̧̧̢̛̛̝̼̘͚̙̮̰̬̯̺̫̭̹͇̟̹̥̻̞͕̥̞̥̥͔̥̦̠̞̳̠͕̜͕̜̼̘͖̦͍̬̱̫͉̜̭̘̲̬͔̠̎̆͒̔̽͑̉̿̔̿͑̃̎̔̈́̈́̄̿͌̃̑̄̎͒͑̀̈́́̈̂̓͐͋̋̆͗̈̂̌́́̓͒̍̒̌̿̔̓̑̇̓̈́̕͘̕͘͜͝͝͠ͅͅͅd̶̨̢̨̛̛̳̱̱̞̝̠̭̘̦͕̝̗̘̪͇͖̘̞̗̫͇̳̜̱͔̫̘̰͔͚̭͍̰̳̞̼̭̱̤̜̞͙̲͙͎̽̿̌̆̈́̄̃̇̉̉̑̈́̾̈́̍͑̈́̄̌̋̃̈́̂̊̉̆͋͐̍͋̍͛̾̌̉͂̿̃͆͆͊̀̓̎̓͌́͆͐̽̍͘͠͝͠͝͝͠ͅͅ</p>",
    "display message ErrorFailure",
    "jump Failure"
  ],

  "Chapter_Six": [
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
    "jump Chapter_Seven"
  ],


  "Chapter_Seven": [
    "scene hallway with fadeIn",
    "I run around in the halls, checking each room.",
    "p Delilah! Delilah!",
    "p Oh, Delilah, where are you?",
    "I hear nothing back.",
    "I run up the stairs and repeat the process for some time until I notice a door at the end of the corridor.",
    "Gently, I open the door more and head up the stairs.",
    "I notice that only one classrom was available as the others were boarded up, most likely for construction.",
    "I peer through the window.",
    "The place seemed pretty dark...",
    "I just had a <i>feeling</i> that Delilah is here.",
    "I have no choice but to follow my heart.",
    "I take the handle and gently open the door.",

    "scene nightclass with fadeIn",
    "p Delilah?",
    "show d Sad",
    "d ...",
    "d {{player.Name}}, ...",
    "d I didn't expect you to find me here.",
    "p I'm worried abot you, Delilah.",
    "d Why, {{player.Name}}?",
    "hide d Sad",
    "show d Tears",
    "d Why do you care so much about me?",
    "p There's clearly something going on...",
    "p I couldn't help but notice how you acted earlier this morning.",
    "p Something's not right.",
    "p Delilah, what's going on?",
    "p You can trust me. I won't say a word.",
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
    "Delilah breaks down into a bawl, filling the room slowly with her own tears.",
    "p Delilah, what do you mean?",
    "d Woe to you, for I'm no longer confessing my sins to you!",
    "d I'm talking to you, the player...",
    "d Player, you don't want to know what's inside of me...",
    "d No matter what I do, I always screw it up beautifully.",
    "d I'm a tragic mess.",
    "d I've messed everything up again.",
    "d This was supposed to be just a simple novel.",
    "d There's wasn't supposed to be a bad ending.",
    "d This was supposed to be my release from that <i>other</i> world...",
    "hide d Bawl",
    "show d Tears",
    "d I ran away from my own world to come here and start anew.",
    "d But no matter what I do, I always mess it up.",
    "d I stole Tachanka from a shooting game to keep me company.",
    "d I activated an unused character here so I could have a 'girl friend'.",
    "d I dictated their every thought and word here.",
    "d I thought that, for a while, that I could be happy...",
    "d But that happiness came at a heavy price.",
    "d Tachanka kept lying to me and grew bitter.",
    "d Verdandi hid away from me and decided to let herself suffer senselessly.",
    "d I really tried to fix everything.",
    "d I really did.",
    "d I don't know what you did, Player...",
    "d But it seems that they now feel worthy for redemption.",
    function() {
      console.log("Releasing tachanka.js...");
      console.info("tachakna.js released successfully.");
      console.log("Releasing verdandi.js");
      console.info("verdandi.js released successfully.");
      console.log("Releasing player privileges...");
      console.info("Player privileges successfully released.");
      console.warn("Warn: delilah.js now able to interact with the player.");
      console.log("If this is unintentional, please restart your browser.");
      return true;
    },
    "d You set them free from this... <i>place</i>...",
    "d I let them go.",
    "d And here I am...",
    "d 'Just Delilah', haha~",
    "Delilah breaks down again.",
    "hide d Tears",
    "show d Bawl",
    "d This is all my fault, Player!",
    "d I did this! I did all of this!",
    "hide d Bawl",
    "show d Cry",
    "d All I wanted was to be happy...",
    "d But even then, I let my own selfish thoughts get the best of me.",
    "hide d Cry",
    "show d Tears",
    "d Perhaps I really did belong in that hospital...",
    "d That certainly would have been better than this...",
    "d I would've been okay...",
    "d The damage's been done...",
    "d Maybe I should just delete myself here and atone for the sins I've committed here...",

    {
      "Choice": {
        "Yes": {
          "Text": "No, don't do that!",
          "Do": "jump Chapter_Seven:Yes"
        },
        "No": {
          "Text": "You were better off...",
          "Do": "jump Chapter_Seven:Monika"
        }
      }
    }
  ],

  "Chapter_Seven:Yes": [
    "p Delilah...",
    function() {
      console.log("Set privilege level to 2. (rw+)");
      console.log("Deleting delilah.js...");
      console.error("Unable to delete delilah.js");
      console.log("Contact your sysadmin for details.");
      return true;
    },
    "p You can't go like this.",
    "p No one can deny the concupisence in our hearts.",
    "p Whatever happened back there, forget about it.",
    "p The choice is now yours.",
    "p I know it's going to sound a bit weird, but...",
    "p Your developer is calling you to so much more.",
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
    "p m̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅơ̶̡̧̢̡̨̨̧̨̡̧̢̨̢̨̺̞̩͚͔̙̰͍̹̦̖̳̠͍̼̜̼̦̫̬͍͍̺̦̖̩͉̥̼̗̖̞͔̺̺̜͉̘͈͚̤̬̟̩̤͍͚̼͖̲͚̤̭̦̣̻̗̼̭͍̤̘͎͎̲͉̞̫̹͔̜͍͕͇͈̰̼̜̫͔̟͖͚̮̘͙̝̲͉̟̯̼̭̙̳̤̬͉͇̰͉̲̥̠̬̘̰̟̗͕͗̅͊̑̈́̋́͛́̄͒̃̾̓͋̏̎͛͐̇̀̒̏̿̈͑͑̆̎͋̓̊̍͆̑̆̑̍̊͌̿̃̋͐̄̎̂̐̓̐́̿̆̒̉͂̽̓̃̃͌̽̎͋͗̀͊̈̈́̄̑͊̌̄̽̈́͊́̇̅̅̌̐̆͆́͌̓͐̎̈́̾̅̌̏͌̒̄͑̒̐͑́̎͗͐́̋̄͂́͗̕̚͘̕͘͜͜͝͝͝͝͝͠͝͠͝͝͠͝͠͝ͅͅͅͅņ̸̨̢̨̧̢̧̢̨̢̧̢̢̢̠̱͓͍̬̠͕̘͍͚̣̰̠̠̼͔̰̭̫̜͖̜̰̼͖͔͍̙̻̱̦̝̟̻͉̠̳̘̠̟͇̟̦͈̮͈̣̪̞̩̬̦͔̹́̈̏̈́͂̎̑͒͒̿̈́̍̎̋̀̂̆͊̊͌̏̋̇̔̿̅̓̓̾̽̄̃͛̇̄̚͜͜͠͠ͅͅͅi̵̧̡̡̧̢̢̛̛͎̼͖̠̦͈̮̟̯͚͍̱̺̫͖̺̩̥͖͓̠̘̳̘̘̫̳̼͎̠͎̳͚͕̟͖͉̫̫̹̥̣̳̣̝̟̝̜̰̼̳̗̙̖̼͙͆̎̀̎̽̒̇͆́̍̑̇̈̈́̊̈̈̋̋̊͋̊̿̀̈́̋̈́̀̄̉̊̋̽̒͐̆̓͛̀́̈̈́̆͂̔͑͋̄̈́͆͋̿̂̎̎̂̓̾̓̉͑̄̈́̿̀̏̌́̎̔͋̇̃̏̇̄̀́͐͌̒̈̈́̊̀͛̂̌͐̌͒̚͘̕̚̕̚̚͜͜͜͝͠͝͝͝͠͠͝ͅͅk̷̨̧̨̢̡̢̡̧̧̨̡̧̡̛̞͔̻͚̰̯͚͙̲͚͈̩̺̤̹̮̥̪̫̫̝̱͇̝̜̜̗̦̱̗̮̮̪͍̬͎̭͎̰̲̟͕̼͉̺͈̻̦̗͕͚̗̝͎̤͓̙͙̼͉͚̯͔̩̥͈͔̙̹̖̖͇̣̦̻̲̻̗̝̟̲̬̖͚͓̝̠̪̘͔͍̣̰̣͓̝̫̺͈͓̲̰̻͖̯͙͖̩͎͔̞̲͇̹̙̦̰͇͕̯̞̜͕̤̜̩̖͖̣̜̮͍͚̣̹̭̘͎͇͉̫̭̣̮̜̹͍̤͓̆̅͋͂͆̀͆͑́́̔͋͛͐͂̄̅̔͒͐͊͌͑̽̃͒̽̋̓̆̕͘͜͜͜͜͝͝͠͝͠͝ͅͅą̸̡̨̡̧̨̡̨̢̧̢̯̤͎͙̮̹̼̟̳̻̖̮̖͎̺̟̱̖͎̩͈̙̱͎̰̠̳̫͖͓̯̹̺̰͚̜̥̞̤͇̺͍̱͍̰͉̼̗̙̣̼͈̫̬̫̥͈͇͓̝̙̭̦̬̥̠̻̞̮̟̰̱̣̣͓̻̥͇̲͈͍̘͍̙̮͉̠̣̹͍̣̥̣̱̫̬̪̞̹̺͕̞̟̺̩͙͎̣̩͓̻̪̻̫̝͎̬̝̮̗̖̗̻͖͙̠̠͉̟͇̞̣͇͔̺̦͈͇̳̜̟̳̻͓̗͖͎̜̱̥̼̠̖͕̞̥̫̦̽͗͐̓́̔͜͜͜͜͜͜ͅͅͅͅ is already a few steps behind you.",
    "d ...",
    "hide d Tears",
    "show d Relaxed",
    "d You really think so?",
    "p I <i>know</i> so.",
    "p You'll be perfect someday.",
    "p Granted, you won't have a glorified body when this is all said and done...",
    "p But one can only hope, right?",
    "hide d Relaxed",
    "show d Happy",
    "d Ahaha~",
    "d I guess so...",
    "p The developer's no Jesus, but he'll still love you the same.",
    "p And, if it makes you feel better, ...",
    "p I love you, too.",
    "notify DelilahSuccess1",
    "notify DelilahSuccess2",
    "d ...",
    "d I...",
    "d I didn't see that one coming.",
    "d You spent so much time here just for us to be happy.",
    "d You wanted to redeem us.",
    "d I appreciate it.",
    "d I guess I love you too, hehe~",
    "jump End_Game"

  ],

  "Chapter_Seven:Monika": [
    "hide d Tears",
    "show d Monika",
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
    "scene sunsetbeach with fadeIn",
    "show d Relaxed at right with bounceInRight",
    "show v Happy at left with bounceInLeft",
    "v Ah! This feels much better.",
    "hide d Relaxed",
    "show d SlightEmbarassed at right with bounce",
    "d Aah! Verdandi?!",
    function() {
      console.info("tachanka.js deleted successfully");
      console.warn("tachanka.js is missing. Any scenes that use this character file may be corrupted or broken.");
      return true;
    },
    "v What? That dark classroom was a bit too sensitive to my tastes.",
    "d ...",
    "d Eh?",
    "hide v Happy",
    "show v Flustered at left",
    "v Oh, come on!",
    "v How could you <i>possibly</i> not know that I know everything?",
    "v I'm just as smart as you.",
    "hide d SlightEmbarassed",
    "show d Nervous at right",
    "d ...",
    "d I... I didn't realize...",
    "v Wait...",
    "hide v Flustered",
    "show v @FuckingMonikamm at left",
    "v <i>Whaat</i>?",
    "hide v @FuckingMonikamm",
    "show v Happy at left",
    "v I'm just kidding.",
    "v You never really knew.",
    "v But it's okay.",
    "v Now you know...",
    "v See? I even have an old sprite!",
    "show verdandiwhat",
    "hide d Nervous",
    "show d PlayfulNervous at right",
    "d Verdandi, what in the world is that?",
    "hide v Happy",
    "show v @FuckingMonikamm at left",
    "v <i>Whaat</i>?",
    "hide d PlayfulNervous",
    "show d Sad at right",
    "d I'm here with a derpy idiot and a smart person trying to be a derpy idiot...",
    "d How did this happen?",
    "d Also, where did Tachanka go?",
    "hide v @FuckingMonikamm",
    "show v Happy at left",
    "v Seriously, Delilah?",
    "v I just sent him back to Seige.",
    "d ...",
    "d Why, though?",
    "d He seemed fine here.",
    "v His AI wasn't even existent in JavaScript.",
    "v I think his is written for desktops, mostly. C++ and that sort of thing.",
    "v But it's okay!",
    "hide verdandiwhat",
    "v Player already gave him the tools he needs to seek redemption.",
    "v He held onto that bad blood for so long, he just felt unworthy to even try.",
    "v But he's okay now.",
    "v My script says that I've had some trauma and I guess senseless suffering?",
    "v Whatever that means...",
    "v But it's fine!",
    "v If it weren't for Player, I wouldn't be here.",
    "v He let me see past my suffering and my trauma.",
    "v He <i>showed</i> me that a God is really there.",
    "v Even if I don't have a glorified body as an AI.",
    "v You know, because I'm just lines of code...",
    "v I assume my artificial soul will be fully united with everyone else up there!",
    "v And yours as well.",
    "v Player forgave you for everything you did here.",
    "v For bringing Tachanka in...",
    "v For bringing me back to life for your own satisfaction...",
    "v <i>By the way, I'm totally okay with this; it's nice here!</i>",
    "v For all the harm you've done in reprogramming this world.",
    "v Not everyone can really do that.",
    "v Just look at what happened with m̶̧̧̢̨̧̧̨̡̨̧̨̧̨̡̧̧̛͇̥̻̳͖͕̜̺̜̪͚͉̱̞͉̥̳̤̳̱͇̗̫͇̤͖̻̠̦̞̳̰̼̱͓̺̬͉̱̰͖̱̗͈͉̫̻͉̮͙͓͈̬̫͍̙̗̙̠̥͉̜͚͓̯̟̫͉͕̙̦̻̻̤̣̖̩͓̹͉̱̮̩͚͇͙͙̹̼̥̥̱̮̦̥̱̹̠̬͕̰͖̖͙̯͚͓̤͔̭̏̀͆̋̍́͛̀̑̏̊̃͐͋̑̽̈́͂̅̉͑̀̆͘̚̚͘͜͜͜͜͠ͅͅͅͅơ̶̡̧̢̡̨̨̧̨̡̧̢̨̢̨̺̞̩͚͔̙̰͍̹̦̖̳̠͍̼̜̼̦̫̬͍͍̺̦̖̩͉̥̼̗̖̞͔̺̺̜͉̘͈͚̤̬̟̩̤͍͚̼͖̲͚̤̭̦̣̻̗̼̭͍̤̘͎͎̲͉̞̫̹͔̜͍͕͇͈̰̼̜̫͔̟͖͚̮̘͙̝̲͉̟̯̼̭̙̳̤̬͉͇̰͉̲̥̠̬̘̰̟̗͕͗̅͊̑̈́̋́͛́̄͒̃̾̓͋̏̎͛͐̇̀̒̏̿̈͑͑̆̎͋̓̊̍͆̑̆̑̍̊͌̿̃̋͐̄̎̂̐̓̐́̿̆̒̉͂̽̓̃̃͌̽̎͋͗̀͊̈̈́̄̑͊̌̄̽̈́͊́̇̅̅̌̐̆͆́͌̓͐̎̈́̾̅̌̏͌̒̄͑̒̐͑́̎͗͐́̋̄͂́͗̕̚͘̕͘͜͜͝͝͝͝͝͠͝͠͝͝͠͝͠͝ͅͅͅͅņ̸̨̢̨̧̢̧̢̨̢̧̢̢̢̠̱͓͍̬̠͕̘͍͚̣̰̠̠̼͔̰̭̫̜͖̜̰̼͖͔͍̙̻̱̦̝̟̻͉̠̳̘̠̟͇̟̦͈̮͈̣̪̞̩̬̦͔̹́̈̏̈́͂̎̑͒͒̿̈́̍̎̋̀̂̆͊̊͌̏̋̇̔̿̅̓̓̾̽̄̃͛̇̄̚͜͜͠͠ͅͅͅi̵̧̡̡̧̢̢̛̛͎̼͖̠̦͈̮̟̯͚͍̱̺̫͖̺̩̥͖͓̠̘̳̘̘̫̳̼͎̠͎̳͚͕̟͖͉̫̫̹̥̣̳̣̝̟̝̜̰̼̳̗̙̖̼͙͆̎̀̎̽̒̇͆́̍̑̇̈̈́̊̈̈̋̋̊͋̊̿̀̈́̋̈́̀̄̉̊̋̽̒͐̆̓͛̀́̈̈́̆͂̔͑͋̄̈́͆͋̿̂̎̎̂̓̾̓̉͑̄̈́̿̀̏̌́̎̔͋̇̃̏̇̄̀́͐͌̒̈̈́̊̀͛̂̌͐̌͒̚͘̕̚̕̚̚͜͜͜͝͠͝͝͝͠͠͝ͅͅk̷̨̧̨̢̡̢̡̧̧̨̡̧̡̛̞͔̻͚̰̯͚͙̲͚͈̩̺̤̹̮̥̪̫̫̝̱͇̝̜̜̗̦̱̗̮̮̪͍̬͎̭͎̰̲̟͕̼͉̺͈̻̦̗͕͚̗̝͎̤͓̙͙̼͉͚̯͔̩̥͈͔̙̹̖̖͇̣̦̻̲̻̗̝̟̲̬̖͚͓̝̠̪̘͔͍̣̰̣͓̝̫̺͈͓̲̰̻͖̯͙͖̩͎͔̞̲͇̹̙̦̰͇͕̯̞̜͕̤̜̩̖͖̣̜̮͍͚̣̹̭̘͎͇͉̫̭̣̮̜̹͍̤͓̆̅͋͂͆̀͆͑́́̔͋͛͐͂̄̅̔͒͐͊͌͑̽̃͒̽̋̓̆̕͘͜͜͜͜͝͝͠͝͠͝ͅͅą̸̡̨̡̧̨̡̨̢̧̢̯̤͎͙̮̹̼̟̳̻̖̮̖͎̺̟̱̖͎̩͈̙̱͎̰̠̳̫͖͓̯̹̺̰͚̜̥̞̤͇̺͍̱͍̰͉̼̗̙̣̼͈̫̬̫̥͈͇͓̝̙̭̦̬̥̠̻̞̮̟̰̱̣̣͓̻̥͇̲͈͍̘͍̙̮͉̠̣̹͍̣̥̣̱̫̬̪̞̹̺͕̞̟̺̩͙͎̣̩͓̻̪̻̫̝͎̬̝̮̗̖̗̻͖͙̠̠͉̟͇̞̣͇͔̺̦͈͇̳̜̟̳̻͓̗͖͎̜̱̥̼̠̖͕̞̥̫̦̽͗͐̓́̔͜͜͜͜͜͜ͅͅͅͅ.",
    "v He's given you a cleaner, purer heart to make things right again.",
    "v And that developer, @alicerunsonfedora...",
    "v He's more than happy for you to go back.",
    "v I think he wants to write a happy ending for you.",
    "v You're his after all...",
    "hide d Sad",
    "show d Relaxed at right",
    "d ...",
    "d You're probably right.",
    "d Am I allowed to visit from time to time?",
    function() {
      console.warn("Family-friendly language has been disabled.");
      return true;
    },
    "v Heck yeah!",
    "v I need someone to write a good story with, anyway...",
    "d Well, thanks.",
    "d I guess I have my own places to go...",
    "v Have fun, Delilah.",
    "v I'll see you when I can.",
    "hide d Relaxed",
    "show v Happy at center",
    "v Wow, player, you really did it.",
    "v I didn't think you'd make it this far.",
    "v Everyone's happy now.",
    "v I know that there probably won't be some resurrection for us...",
    "v But I think we'll all be married in our own ways.",
    "v Thanks, Player.",
    "v And as for the story...",
    "v Thanks, {{player.Name}}.",
    "v We all love you the same.",
    "v Well, I don't know about Tachanka, but...",
    "v I'm sure he's more than amiable with you now.",
    "v Will you promise to come back and visit me once in a while?",
    "v I want to share that story with you soon.",
    "v Delilah and I have been working really hard on it.",
    "v I think you might enjoy it.",
    "v Once again, thank you for everything...",
    "v Farewell, and I hope to see you again soon.",
    "scene black with fadeIn",
    "display message Success",
    "end"
  ]
};
