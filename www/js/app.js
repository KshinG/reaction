/*
 * Please see the included README.md file for license terms and conditions.
 */
//MANUAL ADDITIONS
//appframework.js 2097 $.os.ios7 = ($.os.ipad||$.os.iphone)&&userAgent.match(/7_|8_/) ? true : false;
/*appframework.ui.js 3594
positionPopup: function () {
                var popup = $.query("#" + this.id);
            var temp_value = $.query("#" + this.id).css("width");
            temp_value = temp_value.replace("px","");
            var temp_valueH = $.query("#" + this.id).css("height");
            temp_valueH = temp_valueH.replace("px","");
                popup.css("top", ((window.innerHeight / 2.2)) - (temp_valueH / 2) + "px");// - (popup[0].clientHeight / 2) + "px");
                popup.css("left", (window.innerWidth / 2) - (temp_value / 2) + "px");//(popup[0].clientWidth / 2) + "px");
            }
            
/af.ui.jquery.min.js line 71
change so scrollBy uses where (minned to b) instead of 0
line 166:
/*,d.autoCloseDone&&d.hide()*/ //add /* */

/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */
// This file contains your event handlers, the center of your application.
// See app.initEvents() in init-app.js for event initialization.
// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }
// ...additional event handlers here...
//if (!device) {device = window.device;}
var myURL = "https://reactionthegame.com",
    user,
    userid = 0,
    hash = 0,
    orient = "",
    lastscenario = "Swipe right for new random scenario, left to go back one if you were too quick.",
    scenario = "",
    scenarios = [],
    lazyscroll = 0,
    hammertime = "",
    rid = "",
    settingsset = false,
    wwidth = $(window).width(),
    hheight = $(window).height(),
    scrollHeight = hheight,
    timer = false,
    mytimer = false,
    lcheck,
    hereIam = {coords:{latitude:0, longitude:0}},
    watchID,
    memesloaded = "reactionthegame_pagesub",
    myP = true,
    registrationId,
    allScenarios;
function runCategories(){
var anatypicalday = ["A bird just hit your shoulder with a fecal bomb","You just laughed so hard you peed a little","You got hired to collect elephant feces","You just dropped your wallet in an outhouse toilet","A granny on a scooter just stole your bag","A random girl just snuck up and stole fries off your plate","You just dropped the soap in the prison shower","You're cleaning a nasty toilet","A cop is chasing you after you bolted with his donut","You're convinced the smiley guy in the corner is peeing in the pool","Your Grandma just asked you to fold her unmentionables","The cheerleader at the top of the pyramid just had a bowel movement","You accidentally opened an occupied bathroom stall","A random dude just snapped your bra-strap","Your friend just cupped their fart and threw it at you","Your inlaws just arrived to stay with you for a week","You found a short and curly hair in your soup","Someone ate your last red Smartie","A random lady just spit on you","You just watched someone throw garbage out their car window","You're 5 gulps deep into a jug of milk when you taste chunks","You just dropped your friend's baby","You woke up locked in a plastic wrapped trunk of a car","You just cleaned your house like a boss","You are the next contestant on the Price is Right","Your car is smoking in traffic and you're late for work","A skill saw just took off a bit of your finger","You found your partner in bed with someone else","You're beach soccer breakaway was halted when you stepped on a used needle","You're striding it out \"Chariots of Fire\" style","A raging granny just flipped you the bird","The coffee you spilled is pleasantly warming your lap","Your face is on fire after getting maced","You just dropped the annoying guy in the dunk tank","Your car is getting ripped apart at the border","You just chipped your tooth on a petrified piece of left over pizza","You accidentally played dominos with a long line of Harleys outside a biker bar","You just tackled a bank robber","A streaker just side-stepped security and is running straight at you","You just caught the Ebola virus","You were just reunited with your lost dog and it ran out of your arms","You just bet your house on black","You found out the condemned house was full of corpses","The path to your car is through a dark, creepy alley","You arrived at customs and can't find your passport","Your friend is using you as a human shield to avoid the zombies in the haunted house","You just watched a street performer climb a pole while juggling a soccer ball","You're pulling out some old school dance moves at a family wedding","Your Chihuahua stole your last chalupa","You just went into beast mode","It's another telemarketer on the phone","Someone just called looking for Amanda Hugginkiss","You found a body in the ditch on your morning jog","You accidentally filled your gas tank with diesel","You just won your first game of rock, paper, scissors since breaking a mirror 7 years ago","The loud crash was a solid reminder to open the garage door before backing out","You just saw someone use their hair as dental floss","Your jerk neighbour just doused you with a hose","You only party on days ending with \"Y\"","You woke up to your dog licking its bum in your face","Your new Caddy got a flat in a gang riddled neighbourhood","The loud talker is spraying spit while telling his story","You're carefully diffusing a bomb","You're piloting a plane that's going down","You just watched someone spray milk out their eye","You decided to take a bite of a lemon","You're safely back on home soil after being abducted by aliens","The jury just found you guilty as charged","Your dentist is going in for a wisdom tooth and nothing is numb","You can feel your picture being photo-bombed","You regret going down the bumpy road on a bike with no seat","Your cat used the sofa as a scratching post","You just won an elephant on a radio contest","You showed up to McD's stoked for hashers but they just stopped serving breakfast","You're hiding at a surprise party waiting for the birthday girl","You let out all the air in your jerk neighbour's tires","You're four blanks into a game of Russian Roulette and it's your turn","You just successfully punked your buddy","You just got sentenced to death row","You're on a magic carpet ride","You've got mad skills","You're concocting your evil plan","The seams in your Spanx just split","It's the morning after a big shaker and you've had no luck in the search for your dignity","Your brake obviously didn't hold because your parked car is now rolling down the hill","You just realized you're at the wrong wedding","You just Lady and the Tramped that pasta","You got hit in the face with a moldy Twinkie","You just got pulled on stage at a heavy metal concert","You're on a juice diet with kale as your staple","You just got asked to go skinny dipping","You just beat up a bully","You're on a huge roller coaster and it just rounded its highest peak","The town bully just gave you a wedgie in front of your new girlfriend","Your three year boyfriend just broke up with you through a sticky note","Your man offered to pay for a boob job","You just received an unwanted marriage proposal","Your friend took the gauze off to reveal a botched nose job","An old lady is beating you with her purse","A tuft of your hair just got ripped out by a pyscho chick on the dance floor","Go shorty, it's your birthday!","You're at the grocery store and someone just did some shopping out of your cart"," You're a certified piggy back specialist","You just got mugged by a codger with a cane","You had an unexpected meeting with some shaving cream","You arrived home to find your house on fire","You woke up buried in a coffin","You found a smelly gift on your doorstep","Someone left an unflushed present in the toilet for you","You're stoked about the return of the Shamrock Shake","You just saw the president wearing \"Mom Jeans\" again","Someone just barfed on you","You're choking on the old lady's perfume cloud","You're all about jazz hands","You're perfecting the hand shelf","You're not impressed with how that went down","Your pastor just dropped an F-bomb during the service","Someone peed in your cornflakes","You're taking one for the team","Someone just dropped their drawers","You just had a serious wardrobe malfunction", "You're sorry for what you said when you were hungry","You just got told you're in the friendzone","You just talked your way out of speeding ticket","Marijuana just got legalized","You didn't wet the bed yet today"];
var highschool = ["You got sprayed with a water gun full of horse pee","Your mom told you she was \"popular\" with the fellas in high school","A parent just yelled at you for pole dancing with a stop sign","You just saw an inappropriate video on your friend's phone","You just saw your teacher lip-locked with your principal","Your best friend just hooked up with your ex","You walked in on your parents' lazy romantic morning","The cops are knocking on your door","The quiet girl in class just ripped an echoing tuba fart","You have a volcanic pimple on picture day","You found a pair of stained undies dangling in the change room","You fell asleep at a party and woke up with a mullet","Someone left a flaming bag of poo on your doorstep","Your parents said they need to have \"a talk\"","A dodge ball just smoked you in the face","It's the first day of school","The class bully is aggressively staring you down","A younger kid just hocked a big loogie on you","You just saw someone bail off the bleachers","You just got pantsed","You're in gym class and the breeze made you realize that you forgot to put your shorts on","The fire bell just went off and you know who pulled it","You're home alone from school and hear noises in your house","You just found out your crush likes you","You just won the championship!","Your friend just asked you to join them at a One Direction concert","You brought home a report card sporting straight A's","You found out you're failing math","Your crush just kissed you","You just found out you made the team!","School's out for summer!","The teachers are on strike","You have to do a speech in front of the class","Your phone got taken away","A dodge ball broke your glasses","You have to dissect a cow's eye","You just found out you're adopted","You broke your ankle falling up the stairs","The grub in the cafeteria has you ready to spew","Your crush just sat down beside you","Your mom told you she's pregnant","You had a brain fart","Your favourite song just got you fist pumping","Your friend stole your lunch","The school bully just got suspended","Your friend just told your teacher his body odour is negatively affecting her learning","Your crush just let one fly in class","Your binder got thrown down the stairs","You're trying to take a selfie but you can't perfect your duck face","You got busted stealing underwear from the mall","You were texting while walking and fell into the mall fountain","The festively plump gentleman beside you on the bus smells like corn dogs and nachos","Your computer crashed just as you were going to save your finished essay","You waited an hour for a shower to find there's no hot water","You just got a text from an unknown number warning of the zombie apocalypse","You're exhausted after a late night binge watching session","You slept through your alarm","Your K/D ratio is through the roof in your game of COD","You looked at your watch and saw you're late for class","You just got a raise in your allowance","You're feeling gassy","Someone just snuck up and snipped your ponytail","You got a job testing video games","There's no door on the bathroom stall but you really have to go","You sneezed a boogery mess on your sleeve","You just hit 1,000 Instagram followers","You just got dumped through text","Your shorts split during PE class and everyone was watching","You had to walk to school in a monsoon on picture day","You went #2 at your friend's house and they're out of toilet paper","You just pounded a couple energy drinks","You just tasted the most sour candy you've ever had","Someone put flaming hot sauce on your burger","Your best friend just unfriended you","Your parents are gone for the weekend and they left you alone","The school bully is all up in your grill","You double tapped the wrong photo","You let a silent one go in class and people are gagging","You just popped a pimple that sprayed the mirror","You're stuck on a crowded bus beside your least favourite person","You just watched a video on how hot dogs are made","You heard a blood-curdling scream from the creepy house next door","You're lost in the haunted house","Justin Bieber just walked through the front door of your school","Someone snuck up on you at a party and shaved a patch of your hair","Your teacher is about to read your confiscated love note to the class","You just watched a kid in your class pick their nose and eat it","You just got hit with a slimy spit ball","You got hit with a water balloon full of an unknown warm liquid","You just got called to the office","Your parents just walked in during the only nudie scene in the movie","You just got your mouth washed out with soap","You got a racy text from your dad that you assume was meant for your mom","Your teacher has a gnarly case of swass","You just saw your mom on Tinder","You're getting ready to declare an epic thumb war","You just passed gas in class","Your prom date just stood you up","A bully just threatened to stuff you into a locker","You just found your missing gym shorts in the toilet","Someone just gave you a wet willy","Your teacher is completely out to lunch","You just realized you left your phone at home","You realized you pocket-dialed your mom while you were at a party you weren't supposed to be at","Your friend put laxatives in your teacher's coffee","You got a friend request from your Grandma","The teacher just called on you to answer the question","You're waiting impatiently for the tardy pizza dude to arrive","Snow day. There's leftover pizza. Netflix.","Your friend said they were sick but Instagrammed from a different party","You forgot your locker combo again","You got caught sneaking out","You're creepily photo-bombing a picture","The mean kid is throwing shade again","Big Johnny forgot to put on pit stick again","The number on the stall wall to call for a good time is yours","You're definitely the best dressed at the party","You were the last one picked in gym class... again","You just got asked out on a date","You got a hottie's phone number but put it through the wash","You wet the bed at the slumber party","You just pierced your own ear","You were involved in an unfortunate series of events","All you want to do is watch cat videos","Derp!","The dude at the desk next to you is knuckle deep in his nostril fishing for gold","It's the big day","Your high school days were the best seven years of your life","The glass of apple juice your jokester buddy just gave you was actually warm pee","Your friend just lit their fart on fire","Your phone is blowing up","You found a moldy surprise at the bottom of your locker","You just got double-dog dared to pull someone's finger","Your plan to hover over the wet toilet was foiled by your lack of balance","You just finished a 24 hour Minecraft session","You just saw your teacher walk into the One Stop Love Shop","Your new female teacher has a mustache","You're working on your photobomb skills","You've probably had better ideas","Your dad just showed up at your pool party in a speedo"];
var wilderness = ["You just drove past a naked hitch-hiker","A bird just used your head for target practice with a fecal grenade","You went to pet a horse and got a hoof to the ribs","The sprinklers just came on when you were cutting the grass","You were weed-eating and almost clipped a homeless dude sleeping in the bush","You just got sprayed by a startled skunk","You went back to your tent to find a random lady in your sleeping bag","You walked out your door to see a Sasquatch peeing in your garden","You're at the zoo and a spider monkey just flung feces at you","You just killed a gigantic spider","You have a septic cut that just had a puss eruption","You took some cat treats to go find the local cougar","You just kissed a pig","Your dog's dragging its butt on the carpet again","You found a snake camping in your sleeping bag","You just saw a joey pop out of a kangaroo's pouch","A puppy just licked your face","You just took a farm job to find out you're inseminating cows","Your dog had an unexpected litter of puppies","Your friend's dog just relieved himself on your leg","You got stuck rock climbing and are considering cutting off your arm to get free","You got struck by lightning","You're chasing a tornado you've caught on film","You just discovered fire","You just got stung by an angry hornet","You just wrestled a massive croc","You're sinking in quicksand","You're being attacked by a swarm of bees","You're caught in a monsoon of sideways rain","Your car just got pelted with golf ball-sized hail","You saw a unicorn in the mystical forest","The Ogo Pogo just popped up next to your boat","The walls are crumbling during an earthquake","You see a tidal wave coming at your beach chair","A snake just fell from the ceiling of your cabin","The wave took off your bikini top","You're creeping past a sleeping lion","You're trapped in the jaws of a gator","You're inspecting an unidentified insect","You're swimming with a school of dolphins","You're eating fried tarantulas in Cambodia","You just watched a horse give birth","An elephant just stepped on your foot","You're being chased by a rabid dog","You're wandering through a pitch black cave","You're a tiger stalking its prey","Your friend just fell into the fire","You're being chased by an angry turtle","You're looking through binoculars at a rare bird","You're drowning in the undertow","You got rocked by a gigantic wave","A spider just fell into your lap in the outhouse","You're being cluster-pecked by a flock of nappy crows","The tree you cut down fell the wrong way onto your house","You jumped out of a plane wearing your backpack instead of your parachute","You fell face first into a cow pie","You just stepped in a fresh dog bomb","You're pond skating and the ice just cracked","You're trapped on a slippery ledge in a wind storm","You just got dive bombed by a screeching bat","You took a bite of an apple and were greeted by a worm","You're being eaten alive by mosquitos","Your gas light just came on in the boonies","You just got head tossed by an angry camel","You just smacked a cobra upside the head for lunging at you","You've got a tarantula on your shoulder","You're charming a venomous snake with your magic flute","You're trying to tame a lion for the first time","An angry moose is charging you","You're stranded at the North Pole","You suddenly stopped your car to avoid two kangaroos boxing","You're carefully walking on thin ice","A monkey is peeing in its mouth","A chimp just sniffed his finger and fell off the branch","You're running from an avalanche","It's a double rainbow!","You're searching for land from your tattered life raft","You walked into a field to see bunnies mating everywhere","The wind just flipped up your dress at the crowded bus stop","You slammed on the brakes to avoid hitting the deer in the headlights","Your dog just rolled in something rancid","You just saw a fainting goat hit the dirt","You're as happy as a bird with a French fry","You just walked into the fog of a putrid dog fart","You're choking on a hot wiener","You just saw someone steal a puppy","A lion just lunged at you at the zoo","You just got spit on by a feisty llama","The truck in front of you has a set of nuts dangling from the trailer hitch","You spat in the wind and now you're wearing it","The smoke from your grease fire has attracted all of the local fire department","You're marking your territory","You're choking on a roasted rooster testicle","You were just greeted by poison ivy while squatting in the bush","Your just had an impressive bowel movement","You're coughing up a lung after a failed attempt at siphoning gas","The wind just had its way with you","You're howling with the wolves","A bug just flew in your mouth","You're considering what weapon you'll use to stay vertical during the zombie apocalypse","You're being mauled by a rattled grizzly"];
var parents = ["You went for the diaper check and came away with a chocolate finger","Your boy just got his first erection","You got a golden shower while changing your son's diaper","Your little walker is cruising toward ungated stairs","Your teenage daughter is pregnant","You awoke to find that your children dusted your entire living room with flour","You just walked in on your teenager's make out session","Your toddler created a poo painting in their crib","Your teenager just pocket-dialed you from a loud party when you thought they were asleep in bed","You found your teenager's dirty mag stash","You just dropped your phone in the bath","Your child let loose a chocolate shark in the bathtub","Your licenseless teenager just took your car for a joyride","The lady sitting beside you at your daughter's basketball game reeks like weed","You found out your nanny spends her evenings as a \"lady of the night\"","Your child and his buddy just had a double dump","Your baby just took their first steps","Your baby's first word was \"party\"","Your toddler just pulled the cord on a hot iron","Your toddler just dropped a random F-bomb","Your child just asked where babies come from","Your found out your teenager stole money from your wallet to buy booze","Your child came home with straight A's on their report card","Your child is off to their first day of school","Your children are practising their tackling skills in the hallway by the China cabinet","Your children just lit the hedge on fire experimenting with matches","The police have escorted your child home","Your children had a rager while you were on vacation","You just got peed on","Your toddler rolled their circle of neglect down the stairs","A college streaker just stole the ball from your daughter's soccer game","Your child just used your wall as a canvas with permanent marker","Your child brought home a stray cat","Your child just squirted you in the eye with a lemon","Your toddler is drinking out of the dog bowl again","Your little angel just threw up all over your new dress","Your toddler is walking toward an open oven","Your children just walked in your room without knocking","It's time to have \"the talk\" with your teenager","Your daughter just had her first visit from Aunt Flow","You're shaking your fist at your children fighting in the back seat","You're armed with a wooden spoon and considering the next course of action","Your young daughter is playing with her brother's junk in the bathtub","Your daughter just brought home her new \"mature\" boyfriend","You caught your teenager smoking","You found your child the perfect gift","You taught your little one how to fist bump","Your child wiped out on their bike and chipped their tooth","Your teenager went on a shopping spree with your credit card","Your 5 children are finally all asleep","Your baby just moved out of the house","Your young one is calling for you to wipe their bum","Thirty children are coming over for a birthday party","You're trying to get your baby to smile for the camera","You're teaching your toddler how to use a spoon","Your child is snacking on dog food","You just saw an angry parent deliver a firm spanking","The school principal called and said they need to have a meeting","Your child is playing in traffic","Your children decided to paint each other, and half the house","The cops are at your door asking for your child","Your toddler is super confused about meeting twins","Your child is launching Roman candles at your neighbour's house","Swiper, no swiping!","You managed to keep your baby alive for another day","Your child is cuddling with your puppy","Your child did a face-plant running down a hill","You're baby is about to get their first shots","You're in a stare-down with your teenagers","Your teenager just parked your car in the neighbour's living room","Chasing your children has you downright exhausted","Your baby boy just peed all over the photographer at his photo shoot","Your toddler got a dozen amazing gifts for Christmas but only wants to play with the wrapping paper","Your child came home from the creek dripping in mud","Your child is most certainly the best dressed at the birthday party","Your toddler just smashed Grandma's antique vase","Your child just lost their first tooth","Your child is eating crayons again","You were woken up in the middle of a peaceful slumber","Your daughter just brought her first boyfriend home and your interrogation room isn't finished","The boy next door is peeing on your prize winning petunias","You just beat up an old man who got mad at your child","Your child just came home with a plug in their earlobe","You just found out you're having quintuplets","A couple at your daughter's ballet recital just entered their fifth minute of necking","Your child got a tattoo","You just learned not all boys have foreskin","It's another night with no sleep","You get to take your daughter dress shopping","You tossed your daughter into the pool and caused a bellyflop full of tears","Dad just completed his first successful braid", "You just overheard someone say they have to go number 3","You think he's the father","Your child has unfortunately become an expert at dropping deuces in the bath","Your mom's new boyfriend just called you his daughter","You just got your brown belt in diaper changing","You locked your keys in your car and your baby's inside","You just got asked if you want to play another fun game of \"Poo or Chocolate\"","Your teenager is trying to hide a massive hicky","You just realized you're shopping in your pajamas"];
var popculture = ["You just beat Jimmy Fallon in flip cup","You just won tickets to Ellen's 12 days of giveaways","George Clooney just asked if you'd like a sponge bath","You just got to try on Lady Ga Ga's meat dress","Bill Murray just saddled up at your table and ate your fries","Miley's inspired a twerking session","The Sons of Anarchy just rolled into your coffee shop","You're in a staring contest with Chuck Norris","You just found your precious","Your suggestive photos were stolen from the cloud","Donald Trump just fired you","You're comparing moustaches with Tom Selleck","You can't hug every cat","You just got asked to the fantasy suite","You're excited to eat some Schweddy Balls this holiday season","You just got thrown into rehab after a bender","You just watched Chuck Norris gargle peanut butter","Rob Ford just got re-elected as the Toronto mayor","You took a page out of Honey Boo Boo's book and bathed in mayonnaise","Superman just showed up to your slumber party in Chuck Norris pajamas","You found a golden ticket to Willy Wonka's chocolate factory","The Terminator just kicked in your door looking for Sarah Connor","You woke up after a long night of partying and don't know who is sprawled out next to you","You just got an exclusive look at the Biebs' new tatty","You just smelled the delicious aroma of Sex Panther","You just saw a racy Kardashian video","You just received an inappropriate text from a Mr. Weiner","Miley would be impressed with your pose","You are unfortunately not America's next top model","You just watched your favourite band play an unnecessarily short set with no encore","Charlie Sheen has you winning","You were selected as the next bachelorette","You saw Mackelmore at a Thrift Shop","Brittany Spears just walked out of a salon with a bald head","Maury just gave you the results of the paternity test","You can't believe what was said at a gossip session with the Real Housewives","You just mixed chemicals with Heisenberg","Whatever Forrest gave you was definitely not a chocolate","Your friend was one of Tigers' female companions","You just went \"over the top\" to take Stallone in an arm wrestle","Ron Burgundy asked you to co-host the news","You just saw 2Pac on stage with Snoop at Coachella","You got peed on in the front row of the Blind Melon concert","You just read Fifty Shades of Grey","The judges thought you nailed your performance on The Voice","You armed yourself and said \"Say hello to my little friend\"","You fell in to a burning ring of fire","You're busting a move Gangnam Style","Hans and Frans have got you pumped up","Seth Rogen just offered you a tasty brownie","Katy P wants to see your peacock","Paparazzi are hanging outside your house","You're auditioning to be Grumpy Cat's sidekick","You're cruising on a Harley with Jax Teller","You're singing a solo on American Idol","You're exhausted after sprinting the final leg of the Amazing Race","Redford just offered you one million dollars for a night with your wife","Arnold offered to help you find a nanny","You just got choke slammed by Hulk Hogan, brother","You can smell what The Rock is cooking","You were rocking your dance moves with Napoleon Dynamite and saw a liger","Zoolander has you practicing your blue steel","You just slam dunked over Kobe","Snoop Dog just rolled into your party looking for Puff the Magic Dragon","Why you gotta be so rude?","You're whistling a hair band ballad","You're 2 Legit 2 Quit","Your teacher signed you up for Derek Zoolander's School for Kids Who Can't Read Good","You're cursing at the pigeons because you had a deal","You just got told \"No soup for you!\"","You don't normally point your finger at the camera, but when you do, you own it","You can't believe you just got honeypotted","You're flipping through the channels and The Notebook is on","You got into a cab and Matthew McConaughey is your driver","You're sick and tired of these snakes on this plane","Yes, someone just caught that on film","You just beat Napolean Dynamite in a thrilling game of tetherball","You just shouted out word to your Mother after killin' your rendition of Ice Ice Baby","You saw the person you're dating on TMZ","You have just been asked to be Kim Kardashian's butt double","The gents from One Direction just pulled into your drive through on llamas","Taylor Swift just wrote a song about your break up","Tom Cruise is taking you to church","Oprah just told you that you get a new car","You just hung out with Willie Nelson in his van for an hour with the windows closed","The walking dead just came in your house and you have to find a place to hide","Celine Dion and Ozzy Osbourne are in your hot tub","You just completely botched the name you were supposed to read at the Oscars","Tyra is teaching you how to smeyes","Your idea got rejected on Dragon's Den","You're about the fight a dragon to save the princess","You are really, really, really good looking","You voted for Pedro","You just got smacked across the face with a massive prosthetic hand","You just got hired to play Pee Wee in the next big adventure","You just got bent in half on Wipe Out","Your Mom is the new Real Housewife of your city","You're a proud mother lover","You're looking po nub in all the wrong places","Your evil plan will cost one million dollars","You had one job","You're a proud nevernude","The club can't even handle you right now","You wear your sunglasses at night","You live in a van down by the river","You're counting cards with Charlie Babbitt","You just stole a ferry and claimed to be Jack Sparrow","The force is with you","You're between two ferns","You're working on mastering the white man's overbite","You're watching a new show called Schitt's Creek","You're choking on a jagged little pill","You're blind date is Betty White","Michael Buble is singing you a dreamy ballad","Justin Timberlake is serenading you","The Baywatch babes just asked if they can use you to demonstrate life saving techniques","You're 4-5 seconds from wilding","You volunteered to be tribute","You see dead people","You're so angry you're going hulk green","Watch me whip","Your mentally preparing to take on Fallon in a lip sync battle","You're enjoying the warm embrace of a leather seat between your legs","You lost your hand in an epic lightsaber battle","Tobias Funke is looking for an understudy as an analrapist","Step 1: You open the box","Apparently Bradley Cooper is patting people down at security","You lost your car key so you called the Manitowoc PD and it suddenly turned up","You're in a stare down with the clock spider","You just Googled ascariasis","You just did an image search of trypophobia","You had to eat the soggy biscuit"];
var being = ["You're a shower-deprived hobo","You're owning the ugly cry","You're a hot mess","You're a stinky fart in the wind","You're wearing your tough guy face","You're a T-Rex throwing a baseball","You're an inaccurate sniper","You're a cross-eyed hill-billy","You're what Willis was talking about","You're a peace-loving hippy","You're a hustling gangster","You're the captain of a ship of fools","You're a DJ crushing it on the 1's and 2's","You're a Jedi knight using the force","You're a ninja with mad skills","You're a heavy metal rock star","You're a praying monk","You're an energetic karate instructor","You're a focused yoga instructor","You're Hasselhoff after a good burger","You're the man","You're the karate kid","You're a brave superhero","Every day you're shuffling","You're a rabid dog","You're a shuffling zombie","You're the Hulk, brother","You're a brilliant scientist","You're a chiselled body builder","You're a moldy old sock","You're an angry Bhuddist","You're a burly bouncer","You're a Guido from the Jersey shore","You're a toddler who had a hot pepper","You're an ape claiming his territory","You're the queen greeting her subjects","You're a hog-tying cowboy","You're a slithering snake","You're a honey badger that just don't care","You're a majestic flamingo","You're a thirsty vampire","You're a mysterious sorcerer","You're a professional race car driver","You're an unfocused air traffic controller","You're a desperate hitch hiker","You're a deer in the headlights","You're a chess guru pondering their next move","You're smart like a brick","You're a sprawled out manatee","You're an injured bear caught in a trap","You're a kitten with a sliver in its paw","You're Donald Trump on a good hair day","You're an unskilled lion tamer","You're a fearless matador","You're on a boat","You're a dopey, two-toed sloth browsing for leaves","You're a chicken trying to cross the road","You're Katniss Everdeen ready to launch an arrow","You're a private dancer","You're a feisty fish that's been hooked","You're rattled","Baby you're a firework","You're a tacky tourist","You're a squirrel trying to get a nut","You're a cheeky monkey ready to throw feces","You're a cowardly lion","You're a scowling teenager who's phone was taken away","You're a hard core party animal","You're a sleep deprived gamer","You're a prowling cougar","You're a hot, panting puppy","You're the thumb war champion of the world","You're not not cool","You're a glowstick wielding raver","You're a distinguished smoker","You're cupid spreading the love","You're an angry hornet circling its kicked nest","You're crushing it","You're the queen bee","You dress yourself","You're the king of the castle","You're a one-eyed pirate","You're a python squeezing the life out of its prey","You're underwhelmed","You're bracing yourself for contact","You failed that mission","You're an inflexible gymnast","You're kicking it old school","You're bustin' it on the dance floor","You're the life of the party","You're a master of the plank","You're undeniably disgusted","You're just happy to be here","You're very confused","You're as happy as a little girl","You're a con artist plotting your next scheme","You're a superstar","You are one with the camera","You're one of Charlie's Angels","You're a reluctant organ donor","You're a rockstar botanist who grew potatoes with your own feces","You're the rain-maker","You're a chess master in the zone","You're a skilled pipe-layer"];
var vacation = ["You're at a cheap Mexican resort and you just got the tummy gurgles","A woman is breastfeeding her 5 year old child in the lobby","Man boobs everywhere!","You caught two maids making out in your hotel room","A saggy granny is sunbathing topless","You fell asleep in the sun and now you look like a raccoon-lobster","You got closer and realized the smoking hot dude in the hot tub is your brother","A woman just pulled a slice of pizza from her belly roll","You just became the evening entertainment at the resort","You woke up to find 4 people you don't know sleeping in your room","You just got caught checking out the delivery guy's package","An inked up roid-monkey stole your pool chair","The lifeguard just cleared the pool and proceeded to wade in and relieve himself","You're seeing double after a \"tequila especial\"","You turn on the lights and a dozen cockroaches scurry into the shadows","Your passport just got stolen","The last bus to your resort just left without you","An obnoxious kid keeps splashing you","You won the \"tequila shooter\" competition… but lost the \"function as a human\" contest","Poop in the pool!","Your vacation ended 2 days too early","You're trying to impress that girl who speaks no English","The water is FREEZING!","It rained the whole trip","You were just hit on by a super hot foreigner who has no idea what you're saying","Topless volleyball!","You arrived at the resort and realized you forgot to pack underwear","That hot girl at the bar is not a girl","You're at the beach and someone stole your bag with everything in it","The bottled water is brownish","You're swimming in the ocean and see a fin in the water","You got food poisoning and spent the whole vacation in the hospital","The resort's evening entertainment is beer pong","You crashed your snowmobile and faceplanted into a tree","The beach is packed and the undercurrent stole your bathing suit","You just stumbled upon the red light district","After three hours of driving, you just realized you're on the wrong bus","You're living La Vida Loca","The bar only serves tequila","You woke up with little bites all over your body","You get to your hotel and it's condemned","You woke up in a bathtub full of ice… and still have all your organs","The room next door pumps dubstep all night long","You've been swearing at all the locals because your buddy gave you a \"joke\" translation guide","You tried to order two drinks, but the bartender gave you a room key","The hotel shampoo burns your eyes","You puked while snorkeling and are being swarmed by fish","The resort only serves \"home-brew\"","You are about to eat the toxic \"puffer fish\"","You got a picture taken with a monkey and it stole your watch","You just polished off an overflowing 10 egg omelet ","A random tourist just grabbed your butt","You've been stuck for four hours on a broken chairlift","You're seasick and feel an upchuck coming","You're trying to get the attention of the hottie at the pool","The waitress just opened the champagne bottle with a sword","You are stuck on a plane beside two screaming babies","The oxygen masks just fell from the roof of the plane","A \"Hawaiian Tropic Bikini Tour\" bus just pulled up","You're being detained at the airport and just overheard talk of a cavity search","The masseuse at the resort just asked if you'd like a happy ending","A local just blew smoke in your face","You just woke up on the beach to find only your head above the sand","A smoking hot model just offered to apply your suntan lotion","You've gotta drain the main vein but can't get out of your snow suit","You just did a face plant into a mogul","Those are the biggest coconuts you've ever seen","Your suitcase arrived at the luggage carousel open and empty","You're at a lame resort party and your jam comes on","You decided to pull out Thunder and Lightning for your trip to the beach","You got thrown in the pool with your phone in your pocket","You just bought two tickets to the gun show","You're getting drunk on a plane","You arrived at your hotel with your family and found out it's a nudist resort","Gramps just ran over your foot with his scooter in the chicken tender line","The big dude with a hairy back turned out to be your Dad","Who's that hot gal with the giant mangoes? OMG, it's your Mom","Someone made an inappropriate addition to your snowman","The hairy guy smuggling grapes in the speedo is making you gag","Welcome to banana hammock beach","You arrived at your cabin to find it ransacked","You're trying to determine if those are fake or not","A stranger just asked if you want to go to the fantasy suite","You're melting in this heat","Your GPS just led you into a swamp","You're wearing your fanny pack with pride","Your burn blisters are popping and leaking through your shirt","It's 5 o'clock somewhere","You just hit some crazy turbulence","You just missed the ferry by one car","You're sandwiched in the middle seat on a plane","You're working on your \"laid back\"","You found yourself","20 biker dudes just rolled into the restaurant you're eating at","You had to undo your belt a notch after Thanksgiving dinner","You're overusing jazz hands in your group photo","You won a $1000 shopping spree","You perhaps should have put on more suntan lotion","A little dude just ran into the lounge wearing a pillow case and yelled \"Toga party!\"","You're surrounded by a group of hangry street kids","The rude guy in front of you got the last tickets to the show","You're out with the single ladies","You just got flashed by a perky pair","You're wondering what those might have cost","Things just got weird","Find the exit because someone's on fire","Your snorkeling session got awkward when your cousin lost her top","A wardrobe malfunction led to the unintentional discovery that Uncle Ted is well endowed"];
var sports = ["The hottie at the gym just saw your shorts split while you were doing squats","The beefcake on the other hockey team just challenged you to a fight","Your Granny's in a drag race","You forgot you had bikes on top of your car as you entered the garage","You got shot in the knee with an arrow","You took a fastball to the groin","You told him you weren't hungry but he still gave you a knuckle sandwich","You just hit 250km/h on the back of a motorbike in shorts","You just got hit in the face with a dodge ball","You scored the goal to win the World Cup!","The thrill of driving a racing car ended when you crashed on the first lap","You're freezing on the peak of Mt. Everest","It was rough, but you finished the marathon","You dropped your weights at the gym like a boss","You finally got a grand slam... breakfast","You missed the penalty shot that could have won the game","Dude, you totally made that blindfolded trick shot","You just got bucked off a bull","You just slam dunked over Lebron","You're that fan that snatched a home run saving catch from the fielder's glove","You knocked off a guy's helmet in a tackle","You just lost to Tiger by a stroke on the final hole","Your nose just got busted in an aggressive game of Yahtzee","You blew your hamstring at the finish line","You just broke your snowboard in a huge bail","You surpassed Gretzky with your 93rd goal of the season","You fell on your face just before the finish line","You're getting amped up for the overtime faceoff","You're carefully removing an arrow from your neck","You're choking on a hot dog at the eating championships","You swished the three","You're day dreaming of ending your winless streak","You just watched a dude land the world's first triple backflip on a BMX","You're owning your yoga poses today","You're riding your first unicycle","You're giving your victory speech","You're striking fear into your MMA opponent","You just spent an hour reeling in a big marlin","You went over the handlebars on your mountain bike","You just sunk a hole in one","You're celebrating after a game-winning goal","You're going for the bronze","You just stepped in the ring against Iron Mike","You're in the Octagon ready to get it on","You're a pool shark planning your next move","A hockey puck just knocked your tooth out","You're reconsidering your decision to base jump off the Empire State Building","Your run got interrupted by an unexpected bowel movement","Someone shattered your window with a stray golf ball","You just completed the impossible sit up","You just saw a nipple slip at the gym","You just crossed the finish line... last again","Your monster skid did not go as planned","Huge air on your mountain bike turned into a very uncomfortable dirt nap","The guy on skates singing the national anthem just tripped on the red carpet","You're searching for your lost golf ball in snake country","You just got your bell rung","You're doing a touchdown dance","You're signaling to your catcher before your pitch","You missed your landing","You botched the final putt to win the tour","You just scored tickets to the Super Bowl","They just drafted a dead guy","You just lasted 8 seconds on the meanest bull in the rodeo","You just rage-smashed your new racquet","You're in disbelief of how tall your basketball check is","Your prankster buddy just hid your new driver","Your team just mounted an amazing comeback to win the boat race","You're getting mentally ready to ski a double black diamond","You're dangling from the side of a mountain","You just made it to third base","Your coach told you you're going to be the hooker for the rugby team","You're dishing out a fierce stiff-arm to the face","The wind just helped to coat your new boots with horse urine","Your horse let out a huge turbo-fart for a boost over the jump","Your dart ricocheted and impaled a bystander","You're in complete unison in your synchronized swim","Someone chucked a stick in your spokes","You were undetected when you undid the bag straps on your buddy's golf cart","You're shooting blanks","You're out at home plate","You're unfortunately winded from running up the stairs","You miscalculated and missed the water with your dive","A homeless man just stole your bike","You're sprinting for the open gap","You're being proposed to on the Kiss Cam","You've perfected your clean and jerk","The springboard broke and sent you flying","You're about to get dunked underwater","You're a little man in a boat","Don Cherry just gave you one of his suits","You're all about fitness... fittin' nis food in your mouth!","You're getting ready to rumble","You just hit a straight flush on the river","You're training to become a cage fighter","You're safe at first","You're riding a huge wave","You took one for the team","You nailed your performance","You're on the high dive poised for 10's","Your friend just asked to play a game with your wenis"];
var college = ["You just did a shot that tasted like diesel","You sliced your thumb cutting limes for your margaritas","You're hung over and your mouth tastes like an ashtray","You just won an epic game of beer pong","You answered your door to find a flaming bag of feces","You got caught cheating on a final exam","You just had the most sour shot you've ever tasted","Your roommate put flaming hot sauce on your grilled cheese","A well-endowed college girl just flashed you","You got 51% on your English final","Someone threw your bike off the top level of a parking garage","You chipped your Chiclet opening a bottle with your teeth","The hottest student in your class just asked you out","You woke up from an aggressive night on the sauce to find a inappropriate artwork drawn on your face","Someone dropped a bucket of ice water over you while you were dropping a deuce","Your port-a-potty got tipped while you were relieving yourself","After many failed attempts, you finally finished the centurion","Your professor has a gnarly case of swass","Your parents are gone for the weekend and you're home alone","You just came of drinking age and didn't get ID'd at the bar","You just got scammed for $500 by a granny con-woman","You just finished reading an 800 page book","Your friend fell through a glass table while twerking","You got bitch-slapped with a used condom","You just watched your friend down 10 cheeseburgers","The putrid smell in your car was turds in a can planted by your prankster buddy","You just saw a hairy dude overflowing out of a Minnie-mouse costume","You're meeting your significant other's parents and dropped a wet fart at dinner","You got kidnapped and plastic-wrapped naked to a telephone pole at a busy intersection","You've downed four straight shots of tequila","You found a used condom in the sleeping bag you borrowed","After your orgy confession, your mom said it brought her back to the good 'ol days","As a pledge, you've been told you have to run around campus naked","You just pierced your nipple","You just got asked to take it in the butt","You just had an amazing orgasm","You just got a free batch of steroids","You found a hole in the condom","The post party bathroom smell made you dry heave","You went grave robbing","You woke up butt-naked in a burger joint bathroom","To avoid laundry you just flipped your undies","You just identified the grundle","You can't sleep because of your roommate's banging headboard","You're going streaking!","You're having trouble getting it up","You just saw a blue waffle","You shat yourself at a party and left the soiled evidence in the closet","You passed out at a party and woke up with a mullet","Bae has a cold sore and wants to make out","You dropped some Jager bombs and you're ready to get the night rockin'","Some creepy dude just licked his lips while staring at you","You're dancing on the bar","You just got puked on","You just tipped your first cow","You took a pill and can't figure out how to get rid of your 4 hour erection","You're in the middle of a terrible game of spin the bottle","You're a hot, hot, mess","The creepy guy at the bar just grabbed your ass","You just got invited for a threesome","The bartender just asked for your number","Your friend just walked into the club with new fakies","You took a huge toke of a monster joint","You ate a strange mushroom pizza and now everything looks weird","Some dude dropped something in your drink","You just got Dutch ovened","Two gay guys tried to make you the meat in their sandwich","Your thumbs are bruised after a sexting marathon","You're in the middle of a slap fight","You showed up to the party and it's a sausage fest","You smell like a bag lady who camped in a restaurant dumpster","You're being fondled under the table at a family dinner","You just lost an important game of beer pong","You pulled through as anchor to win your team the boat race","You hit three straight to win a tense game of flip cup","You had your first puff on a coffin nail","You finally quit smoking death darts","Sergeant Skid Marks came to check your undies and you failed the test","You're up all night to get lucky","You didn't have the common courtesy to give a reach around","You just got handcuffed","You just earned yourself a spot on the elevator down","You just took a hit off the huka pipe","You walked through hell and didn't get burned","You lost the bet and had to do a bum funnel","You saw your first bearded clam","You just got thrown under the bus","Pillow fight!","There are five minutes left on the test and you still haven't written your name","A semi-attractive cougar just bought you a drink","You're at breakfast in last night's dress","You just got hit on by a disheveled hobo","You just found out marijuana has been legalized","Your best friend just got a new set of sweater puppets","You tried mayonnaise as a substitute for milk in your mac and cheese","You just downed your first pot brownie","You found out you're having a baby","You're going thrift shopping","You're waiting for the bottle to stop spinning","You just got kicked in the nards","Your boyfriend is asking if you're PMS'ing","You're slow dancing with your boyfriend and suddenly feel a roll of quarters","A random, well-endowed cougar just asked you to deliver your best motorboat","You just had your first encounter with a penis pump","You and your buddy just solved an issue with a bathroom sword fight","Your man just talked to you about the poophole loophole","Your mom caught you rubbing one out","You left a snail trail on your passed out friend","You haven't had a shower in a month","You're staring in disgust at the lack of rhythm on the dance floor","You just saw a dude get decked by his girlfriend","Your buddy is biting the bubbles in the hot tub","Your floor mate got you with a leaner","You're hoping the room will stop spinning","You just rolled a perfect fatty","You're locked in a sex dungeon","You've completed 41 of the 50 shades of grey","You definitely overconsumed","You just puked in the neighbour's rose garden","You just hit optimal booze level","You're rocking a sweet mullet","Shooters!","It's party time!","E'rybody in the club getting tipsy","You fill cups like double D's","Your just dropped a log on your neighbour's diving board","You just got your hands on some purple monkey balls","You're redneck wasted","Grandpa just asked what bukakai is","You've evidently consumed some liquid courage","The clock just hit twenty past four","You've been told you're going to be carrying around a blow up doll for the night"];
var offside = ["You've got a 15 year old daughter who's prego and doesn't know who the dad is","You thought you farted but the warmth running down your leg is telling you otherwise","You just did a shot that tasted like rotting food stuck to a homeless man's beard","You just dropped a deuce and got backsplash","A link on your computer landed you on granny porn","Your white friend, married to a white man, just had a black baby","Your mom found your dildo","You just watched a video with two girls and one cup","You just sharted","You saw a ridiculously well hung man's schlong trapped against his leg by his skinny jeans","Your parents found your sex tape","You just got flashed by a very well-endowed lady","You're in prison and your cell-mate Bubba wants to make you his bitch","Someone just ripped one in a full elevator and you can taste it","You sat down quickly on a public toilet only to feel a wet gift on the seat","You just puked a bit in your mouth","You just watched a friend pick their nose and eat it","Your best friend just kissed you","You just got fondled by a stranger","You just watched your friend drop a hot coiler on your douchebag neighbours barbeque","A random girl at your party left a crimson treat on your white leather couch","You returned to your cheap hotel to find a hooker turning tricks in your room","You just expelled rancid bodily fluids from two orifices at the same time","Someone dropped a shot of urine in your beer bong","You just had sex in a gondola","Your friend told you she let her dog lick peanut butter off her snatch","For added nutrients, you've just been asked to try placenta","You walked in on your mom dropping a putrid deuce","Your friend tried to tell you the holocaust didn't happen","Your partner actually grabbed your love handles for some extra leverage in the sack","You hurt your ankle at a concert and the medic asked you to take off your shirt to examine you better","Auto-correct just asked your mom to buy you hot dog condoms rather than condiments","You dropped a rancid fecal bomb that sprayed the toilet at your in-laws' place","You just photocopied your bare ass","You just joined the mile-high club","You just had the most amazing sex of your life","The suspicious looking bearded man in seat 9C just stood up and yelled that he has a bomb","You're staying in a hotel room with your parents and they just brought home a third","You managed not to get wasted","Your haemorrhoids are turning out to be a major pain in the ass","You got crabs","You just had some fun with anal beads","You just took down a terrorist","Your boss just told you that you handle cucumbers better than anyone he's seen","Your buddy just stuck his tongue in your mouth at a bar","You're at your first peeler bar","You thought you'd see what the deal is with this glory hole","Someone just called asking for Ivona Humpalot","Your jackass neighbour just threw his dog crap into your yard","You walked in on your parents getting it on","Your mom had cold feet and just put on your load sock","You popped in a home video to find it's your parents' sex tape","Your cousin tried to make out with you at a family wedding","You got invited to a red room","You're demonstrating how well you can deep throat a banana","People have said you like hand cuffs","You just saw a video about Mr. Hands","You just ran into your mom at a sex shop","It burns when you pee","You just got a call asking for Phil MiKrackin","You just found out you've got the clap","You just saw a very pronounced moose knuckle","The driver beside you is getting road head","Your friend asked if you could see her camel toe","You just ate glass and washed it down with gasoline","You're getting praise from the local slime ball for your new tramp stamp","Some guy just let you know you've given him new material for his spank bank","There's a used pad on the only available subway seat","After several cocktails, you just rolled up on a police roadblock","You just got asked if your taco can handle his burrito","You answered your junk mail by sending back the herpes of the crafting world – glitter","She's shaking her chalupas and asking for a motorboat","You just got asked if the carpet matches the drapes","You got 99 problems but that ain't one","An unknown number just texted you boobs","Your doc just grabbed your junk and told you to cough","You knew what kind of party you were at when the police who arrived started undressing","You arrived at the party and were asked to put your keys in a bowl","A couple at your friend's party asked if you'd like to do some swinging","You were startled by the volume of her quief","The guy in the boxing gloves asked if you could scratch his chode","You're waving your magic stick","Your friend just told you about their first feltching experience","You're in it for shiggles","The stain just earned you the nick name \"Hershey Squirt\"","You've just been told you have a bitchy resting face","You're squeezing out a stubborn one","You're pushing out a ring-burner demon turd","You just snipped some bra straps to release the hostages","You just got texted a dick pic","You're having a tough time keeping your guns holstered","You just saw a big, black johnson","You just got your trouser snake stuck in a mouse trap","You just vomited mid hummer","You got caught spanking your monkey in the staff bathroom","You just got caught with your pants down armed with a warm apple pie","You just got fondled","Your vet just told you she doesn't do anal","You're trying to jam your double D's into an A cup","A woman just flopped out a sagger to breast feed in public","You just had your butt grabbed at a family wedding","You're trying to envision if the carpet matches the curtains","You found the glory hole","Your lady is fondling your twig and berries under the table at a family dinner","You got your stuff stuck in your zipper","Your girlfriend just asked if her friend can join the two of you in bed","Your dad just found your new toy \"The Penetrator\"","Your lady just involved too much teeth when polishing your helmet","Your boyfriend just used \"moist\" and \"panties\" in the same sentence","Your co-worker just admitted that internet porn is the glue that holds his marriage together","You're courting two ladies and they both told you they're prego","Your drunk friend just pulled out her tampon and threw it in a tree","Your friend earned the title of \"Nightrider\" after a promiscuous night on the side of the road","You thought it would be fun to try to vacuum your boob","Your ta tas are leaking","You brought your girlfriend to the hospital for stomach pains and found out she's having a baby","You just saw a well-hung guy pull off an impressive windmill","A random guy just asked if he could give you a motorboat","You just got called the Unhung Hero","You just awoke to your mom measuring your morning rocket","You undid his pants to find 9 inches ready to go","Your sister just asked if her friend can practice her BJ delivery skills on you","You just found out you have erectile dysfunction","Your best friend just told you she had an amazing time alone with a zucchini","It feels like you're leaking daggers when you pee","On your first date, he put his schlong in your hand while you were kissing","You took home a supreme hottie to find out she was a he","Your new guy dropped his drawers to reveal a hard 4 inches","You took a girl home from the bar to find out she's a prostitute","You're slow dancing with a hottie and your trouser snake comes to attention","Your girl wants you to take off your pants and jacket","You just got to slide your play rod between two luscious fun bags","You just gave your lady a pearl necklace","You went down on a girl and unintentionally got your red wings","You had your period on the bench at a basketball game in your white uniform","Your booty call showed up to the orgie with a water bottle and a towel","Your parents came home during your party and found a used condom draped over their wedding picture","Your buddy just spunked on your leg in a threesome","You found out your new girlfriend has a tramp stamp that says RIP Daddy","You just got tit punched","You can't not appreciate those magumbos","You're dating two people and they just met each other","He asked you to say \"Fire\", then put his hose in your hand","You just saw a micropenis","Your safe word is Armageddon"];
var double = ["You noticed that a tree really does look bigger when you trim the bushes","She likes to kiss your balls for good luck before your first stroke","Your boss just yelled that she needs it on her desk now!","Your rugby coach asked if you'd be open to being a hooker","You just got asked you to hold a guy's meat while he checks out the melons","Your wife likes to store your balls on a shelf","You just received a nice pearl necklace","You've got some problems with your back end","You whipped out your dipstick","You showed up to practice with a full ball sack","You gave the waitress a big tip","You're having trouble getting it up","You've got some very blue balls","You've got some nice coconuts","You've got a really powerful organ","You're having difficulties hoisting your main sail","You're milkshake brings all the boys to the yard","You really want that tootsie roll in his pocket","You're always careful when you pull out","You're struggling to hit the hole","You don't think you can fit in that gap","You're about to enter a mysterious crevice","You're going to town on a large hoagie","You're longing to rest your head on those soft pillows","You felt much better about your game after getting a 69 the day before","You're wondering where the 8 inches are that the weatherman promised last night","It's freezing, but you came in your shorts anyway","You slipped one past the goalie","You usually prefer to do it yourself","Your weightlifting friend has an amazing snatch","You got caught smuggling grapes","You've got some huge guns","You gave the hostess just the tip","You're developing a talent for polishing helmets","To be safe you're using the rear entrance","Your boss asked you to put it in her box before you leave","After a few aggressive strokes you noticed your shaft was bent","Your coach asked you to put your head down and spread your legs a bit more","Your golf buddy just asked if he could join your threesome","You decided to wash your balls before your first stroke","Your hands were so sweaty that you couldn't get a good grip","You can't believe how hard the judge was","The judge said she'd rather do it in her chambers","You can't wait to get off today","Your equipment is so old that it takes forever to finish","You'd love to climb those mountains","The front door wasn't open so you went around back","You're not so sure you're a fan of a cold, wrapped wiener","You're long rod is great for fishing","You're trying to figure out where she bought those jugs","You're admiring your pole","You're pretty good at handling a stick","You can't believe how big it is","You're impressed with the size of those breasts","You know it's ready when it pops up","You think you may be able to hit it","You're mining for the glory hole","You asked the lawyer if she could get you off","Your boss said she needs you to whip it out by 4 O'Clock","You're impressed by how much meat she could eat","You play with bigger balls","It took a lot of balls to pull that off","You've got a big stick","You were impressed with the size of the upstairs","You're all dressed to go downtown","You love nuts","You're getting a facial with a friend","Your bush could probably use some trimming","He stuck his pink umbrella in your drink","You were asked to bring the sausages to the barbeque","Your man is with Tiger trying to hit every hole possible","You've got a huge one","You're protecting your nuts","You've got crabs","You just got to second base"];
var selfie = ["You're puckering up for the camera","You're working on your stink eye","You're seducing the camera","You just won the lottery","You just fit two dozen marshmallows in your mouth","You found a random $20 bill in your pocket","You just got fired","You think you're being followed","You just got an amazing manicure","You just got sent to anger management classes","You just escaped an insane asylum","Your new tattoo says \"Regert Nothing\"","You just awoke after a year in a coma","Your hairdresser botched your cut","You finally solved an extreme Sudoku","They're taking your mug shot","You cried like a spoiled toddler deprived of his blanky","Glass broke and you hear voices in your house","You just lost your savings when the stock market crashed","A cop is tailing your car","Your computer just crashed and you lost everything","You just watched a cow give birth","You're stuck on the moon with a broken spaceship","You're on your way to the loony bin","You evidently applied lipstick on a bumpy road","A random person just called you a beast","You're not enjoying being stuck in traffic","After 5 long years, you finally got your braces off","You're in the middle of an epic rage-quit","A creepy clown just asked you to sit on his lap","You just puked a bit in your mouth","You have something in your teeth","You awoke to noises in your closet","A bee just landed on your nose","You awoke to a rat nibbling your ear","Your partner just forced you to have a joint Facebook account","You accidently clicked that giant cyst video on Facebook","A buddy asked if they can use your Netflix account","You're hitting the high note","You just got a whiff of yourself","You found a cockroach in your nachos","A pre-schooler just pulled up his mom's top for a drink","The airline lost your luggage","You found out you accidently booked a nudist cruise","Someone in front of you in the buffet sneezed all over the food","They opened the bar early","You're working on your duck face","You just walked into a fart cloud","You just got paid","You're practicing your poker face","You've got a bun in the oven","You're biting off more than you can chew","You just got squirted in the eye","You just cut the cheese","Your friend didn't tell you that candy was sour","You're too sexy for your shirt","You're significant other promised you a sexy surprise","You can't feel your face","You're out of gas and can't find your wallet","You just watched a magician levitate","You're trying to remember the last time you dropped a public deuce","You came home early to find bae dressed in your lingerie","Your favourite jam just came on the radio","You think you saw a ghost","You're in a standoff with a massive spider","You've been accused of smuggling a beach ball","The chubby kid one table over just asked if you were gonna finish your fries","You're playing dumb","Your pic just hit 100 likes","Bae's taking you downtown","You're going for the classic \"pretend there's no camera\" selfie","You can't believe tomorrow's Monday","That was so dumb you had to pull out the facepalm","You want to post a selfie but can't think of a good caption","You're a week backed up and doc says you need an enema","You just got arrested for peeing in public","Your blind date is not what you expected","You just had a nasty sour candy","You've just been hypnotized","You just received flowers from a secret admirer","Your mouth tastes like an ashtray","You think you may have had too much fun last night","You're working on taming your sweater stretchers","You've been hacked","You think you may have just been felt up","Someone just suggested you jump in a woodchipper"];

anatypicaldayJ = JSON.stringify(anatypicalday);
highschoolJ = JSON.stringify(highschool);
wildernessJ = JSON.stringify(wilderness);
parentsJ = JSON.stringify(parents);
popcultureJ = JSON.stringify(popculture);
beingJ = JSON.stringify(being);
vacationJ = JSON.stringify(vacation);
sportsJ = JSON.stringify(sports);
collegeJ = JSON.stringify(college);
offsideJ = JSON.stringify(offside);
doubleJ = JSON.stringify(double);
selfieJ = JSON.stringify(selfie);
     
if(localStorage.userid && localStorage.userid > 0 && localStorage.userid < 1005){
    localStorage.wildwildernessPurchased = 1;
    localStorage.parenttimePurchased = 1;
    localStorage.popculturePurchased = 1;
    localStorage.artofbeingPurchased = 1;
    localStorage.onvacationPurchased = 1;
    localStorage.sportingworldPurchased = 1;
    localStorage.collegeyearsPurchased = 1;
    localStorage.alittleoffsidePurchased = 1;
    localStorage.doubleentendrePurchased = 1;
    localStorage.selfiePurchased = 1;
    localStorage.uploadphotosPurchased = 1;
    localStorage.searchscenariosPurchased = 1;
}    

var wildernessincl = 15;
var wildernesspurch = localStorage.wildwildernessPurchased;
if(wildernesspurch == 1){wildernessincl = wilderness.length;}
var parentsincl = 15;
var parentspurch = localStorage.parenttimePurchased;
if(parentspurch == 1){parentsincl = parents.length;}
var popcultureincl = 15;
var popculturepurch = localStorage.popculturePurchased;
if(popculturepurch == 1){popcultureincl = popculture.length;}
var beingincl = 15;
var beingpurch = localStorage.artofbeingPurchased;
if(beingpurch == 1){beingincl = being.length;}
var vacationincl = 15;
var vacationpurch = localStorage.onvacationPurchased;
if(vacationpurch == 1){vacationincl = vacation.length;}
var sportsincl = 15;
var sportspurch = localStorage.sportingworldPurchased;
if(sportspurch == 1){sportsincl = sports.length;}
var collegeincl = 15;
var collegepurch = localStorage.collegeyearsPurchased;
if(collegepurch == 1){collegeincl = college.length;}
var offsideincl = 15;
var offsidepurch = localStorage.alittleoffsidePurchased;
if(offsidepurch == 1){offsideincl = offside.length;}
var doubleincl = 15;
var doublepurch = localStorage.doubleentendrePurchased;
if(doublepurch == 1){doubleincl = double.length;}
var selfieincl = 15;
var selfiepurch = localStorage.selfiePurchased;
if(selfiepurch == 1){selfieincl = selfie.length;}
    
allScenarios = "{\"categories\":[{\"category\":\"An Unusual Day\", \"scenarios\":"+anatypicaldayJ+", \"included\":"+anatypicalday.length+", \"total\":"+anatypicalday.length+", \"bg\":\"byellow\", \"smiley\":\"icon-omg-smiley\", \"shortname\":\"anunusualday\"},{\"category\":\"High School Years\", \"scenarios\":"+highschoolJ+", \"included\":"+highschool.length+", \"total\":"+highschool.length+", \"bg\":\"borange\", \"smiley\":\"icon-blink-smiley\", \"shortname\":\"highschoolyears\"},{\"category\":\"Wild Wilderness\", \"scenarios\":"+wildernessJ+", \"included\":"+wildernessincl+", \"total\":"+wilderness.length+", \"bg\":\"bred\", \"smiley\":\"icon-happy-smiley\", \"shortname\":\"wildwilderness\"},{\"category\":\"Parent Time\", \"scenarios\":"+parentsJ+", \"included\":"+parentsincl+", \"total\":"+parents.length+", \"bg\":\"bgreen\", \"smiley\":\"icon-happy-smile-very\", \"shortname\":\"parenttime\"},{\"category\":\"Sporting World\", \"scenarios\":"+sportsJ+", \"included\":"+sportsincl+", \"total\":"+sports.length+", \"bg\":\"bblue\", \"smiley\":\"icon-smiley-meh\", \"shortname\":\"sportingworld\"},{\"category\":\"Art of Being\", \"scenarios\":"+beingJ+", \"included\":"+beingincl+", \"total\":"+being.length+", \"bg\":\"bindigo\", \"smiley\":\"icon-omg-smiley\", \"shortname\":\"artofbeing\"},{\"category\":\"On Vacation\", \"scenarios\":"+vacationJ+", \"included\":"+vacationincl+", \"total\":"+vacation.length+", \"bg\":\"bpurple\", \"smiley\":\"icon-blink-smiley\", \"shortname\":\"onvacation\"},{\"category\":\"Pop Culture\", \"scenarios\":"+popcultureJ+", \"included\":"+popcultureincl+", \"total\":"+popculture.length+", \"bg\":\"bpink\", \"smiley\":\"icon-happy-smiley\", \"shortname\":\"popculture\"},{\"category\":\"Double Entendre\", \"scenarios\":"+doubleJ+", \"included\":"+doubleincl+", \"total\":"+double.length+", \"bg\":\"byellow\", \"smiley\":\"icon-smiley-meh\", \"shortname\":\"doubleentendre\"},{\"category\":\"Selfie\", \"scenarios\":"+selfieJ+", \"included\":"+selfieincl+", \"total\":"+selfie.length+", \"bg\":\"borange\", \"smiley\":\"icon-happy-smile-very\", \"shortname\":\"selfie\"}]}";
allScenarios = JSON.parse(allScenarios);
    $("#categories ul").html("");
    $.each(allScenarios.categories, function(index){
        $("#categories ul").append("<li id=\"category" + index + "\" class=\"\"><div class=\"wcenter\"><a id=\""+this.shortname+"pid\" data-index=\""+index+"\" data-pid=\"\" data-transition=\"up\" class=\" categorybadge bold "+this.bg+" uib-graphic-button default-graphic-sizing default-image-sizing active-graphic-button default-graphic-button default-graphic-text widget d-margins media-button-text-bottom wcenter\" data-uib=\"media/graphic_button\" data-ver=\"0\"><i class=\"icon "+this.smiley+" biggest bold\"></i><span class=\"uib-caption\">"+this.category+"</span><div class=\"inclnum\">"+this.included+"/"+this.total+"</div><div id=\""+this.shortname+"_purch\" class=\"purchme\"></div></a></div><div class=\"padding table-thing with-label widget d-margins fullwidth\" data-uib=\"app_framework/flip_switch\" data-ver=\"1\"><label class=\"narrow-control label-inline\">Include "+this.category+"?</label><div class=\"wide-control\" id=\"fs"+index+"\"><input type=\"checkbox\" checked=\"true\"class=\"toggle cswitch\" data-index=\""+index+"\" id=\"af-flipswitch-"+index+"\"><label for=\"af-flipswitch-"+index+"\" data-off=\"No\" data-on=\"Yes\"><span></span></label></div></div></li>");
        if (localStorage["flipswitch"+index]) {
            if (localStorage["flipswitch"+index] == "1") {$("#af-flipswitch-"+index)[0].checked = true;}else{$("#af-flipswitch-"+index)[0].checked = false;}
        }
    });
    combineScenarios();
    //$.each(allScenarios.categories, function(index){document.getElementById(this.shortname+"pid").dataset.pid = index;});
    
}
//console.log(allScenarios);
//console.log(allScenarios.categories[1].scenarios);
var pictureSource; // picture source
var destinationType; // sets the format of returned value

// react() called just before removing the splash screen
        
function signlogin(){
    if(localStorage.userid && localStorage.userid > 0){}else{
            $.ui.popup({
                    autoCloseDone: 0,
                    onShow: function(){/*if($("#afui").hasClass("android")){$("#loginPopup header").css("height", "76px");}*/ if($("#login span").text() != "sign up"){$( "#loginheader" ).trigger( "click" );} if(!localStorage.userid){$( "#loginPopup header" ).append( "<div class=\"smaller red center\" style=\"position: relative; top: 0px;\">The first 1000 people to sign up get everything for free, forever!</div>" );}else{$("#loginPopup header").css("height", "56px");}},
                    id: "loginPopup",
                    title: '<div id="loginheader" class="left button yellow">Log in</div><div id="signupheader" class="right button ">Sign up</div>',
                    message: '<div><form><input id="email" type="email" placeholder="email"><div id="emaila"></div><input id="password" type="password" placeholder="password"><input id="password2" type="password" placeholder="password again"><div id="passa2"></div><div><input id="inclpics" type="checkbox"><label for="inclpics">Associate My Reactions already taken with this device with this account?</label></div></form></div>',
                    cancelText: "Cancel",
                    cancelCallback: function() {},
                    doneText: "Sign up",
                    doneCallback: function() {if($("#action").hasClass("email")){ if (($("#action").hasClass("password") || $("#action").text() === "Log in") && $("#password").val().length >= 8){login(document.getElementById("email").value, document.getElementById("password").value, document.getElementById("inclpics").checked, document.getElementById("action").innerHTML); }else{document.getElementById("passa2").innerHTML = "<span class=\"red\"><small>password must be 8 or more characters, please try again</small></span>";}}else{document.getElementById("emaila").innerHTML = "<span class=\"red\"><small>email is required</small></span>";}},
                    cancelOnly: false
                });
    }
}
        

var react = function() {
    //console.log(localStorage.userid);
    //if(!localStorage.userid){$( ".login" ).trigger( "click" );}
    //window.StatusBar.show();
    signlogin();
    runCategories();
    $.ui.animateHeaders = false;
    //$.ui.lockPageBounce = false;
    //$.feat.nativeTouchScroll = false;
    if ($("#afui").attr("class") == "ios7 android") {
        $(".tutMe").css("top", "-20px");
        //$("#afui .botl").css("line-height", "32px");
        //$("#afui .botr").css("height", "192px");
    }
    if (localStorage.tut1 != "1") {
        $(".tutMe").show();
        $(".skip").fadeIn();
    }
    
    $("#mainpage").css("overflow", "auto");
    $("#navbar").hide();

    $("#allcontent").height(hheight);
    if (scenarios.length != 1) {
        scenario = scenarios[randomInt(0, scenarios.length)];
    } else {
        scenario = scenarios[0];
    }
    $("#scenarios span").text(scenario);
    $("#scenarios span").textfill(30);
    $("#scenarios span").css("-webkit-animation", "glow .5s 1 ");
    setTimeout(function() {
        $("#scenarios span").css("-webkit-animation", "");
    }, 600);

    sizeIt();
    $("#back_users_spanG").css("background-color", $("#afui .panel").css("background-color"));
    app.hideSplashScreen();
    setTimeout(function() {
        $(".hideMe").hide();
    }, 100);
    var hammertop = new Hammer(document.getElementById("topScenarios"), {});
    hammertop.on('panleft panright panend swipeleft swiperight', function(ev) { console.log(ev);
        $("#scenarios span").css("left", ev.deltaX);
        //var transform = "translate3d(" + ev.deltaX + "px, 0px, 0)"
        //        $("#scenarios span").css("webkitTransform", transform);
        if(ev.type === "panend"){
        if(ev.isFinal){
            if(ev.deltaX >= 30 && scenario != lastscenario){
                if(ev.deltaX >= 30){ 
                            var tscenario = scenario;
                            scenario = lastscenario;
                            lastscenario = tscenario;
                    $("#scenarios span").animate({left: "400px", opacity: 0}, 200, function(){$("#scenarios span").css({left: "-400px"}); 
                            $("#scenarios span").text(scenario);
                            $("#scenarios span").textfill(30);
                            $("#scenarios span").animate({left: "0px", opacity: 1}, 200, function(){ $("#scenarios span").css("-webkit-animation", "glow .5s 1 "); });
                            setTimeout(function() {
                                $("#scenarios span").css("-webkit-animation", "");
                            }, 600);   
                        });}
            }else{
            if(ev.deltaX <= -30){ 
                $("#scenarios span").animate({left: "-400px", opacity: 0}, 200, function(){
                    $("#scenarios span").css({left: "0px", opacity: 0, webkitTransform: "scale(0)"});
                    lastscenario = scenario;
                    scenario = scenarios[randomInt(0, scenarios.length)];
                    $("#scenarios span").text(scenario);
                    $("#scenarios span").textfill(30);
                    $("#scenarios span").animate({ opacity: 1 }, {
                                    step: function(now,fx) {
                                        $(this).css('-webkit-transform',"scale(" + now + ")");
                                        //console.log(now);
                                    },
                                    duration: 400
                                },'ease');
                    setTimeout(function() {
                    $("#scenarios span").css("-webkit-animation", "glow .5s 1 ");
                        }, 300);
                    setTimeout(function() {
                        $("#scenarios span").css("-webkit-animation", "");
                    }, 1000);
                });}
                
            }
            if(ev.deltaX >= -29 && ev.deltaX <= 29)$("#scenarios span").animate({left: "0px"}, 100);
        }}
    });
    if ($("#afui").attr("class").toLowerCase().indexOf("ios") >= 0) {
        $("#reacttext").text("swipe the Camera to the left for a selfie, or right for the back camera, to capture your Reaction");
        var hammerReact = new Hammer(document.getElementById("reactcell"), {});
        hammerReact.on('panend', function(ev) {
            if(ev.isFinal){
                //console.log(ev);
                //hammerIt(document.getElementById("largeImage"));
                capturePhoto(ev.direction-1);
            }
        });
    }
    var myScrollerLatest=$("#reactionthegame_pagesub").scroller();
        myScrollerLatest.addPullToRefresh();
        var myScrollerBest=$("#reactionbest_pagesub").scroller();
        myScrollerBest.addPullToRefresh();
        var myScrollerWorst=$("#reactionworst_pagesub").scroller();
        myScrollerWorst.addPullToRefresh();
        var myScrollerMine = $("#my_page").scroller();
        //$(document).on("refresh-release", myScrollerLatest, function(){console.log("refresh-release");});
        $.bind(myScrollerLatest,"refresh-release",function(){
            //console.log("pulled");
            if(!timer){memeFresh("latest");
            timer = true;
            setTimeout(function(){timer = false;}, 2000);}
        });
        $.bind(myScrollerBest,"refresh-release",function(){
            //console.log("pulled");
            if(!timer){memeGetL("best");
            timer = true;
            setTimeout(function(){timer = false;}, 2000);}
        });
        $.bind(myScrollerWorst,"refresh-release",function(){
            //console.log("pulled");
            if(!timer){memeGetL("worst");
            timer = true;
            setTimeout(function(){timer = false;}, 2000);}
        });
//        $.bind(myScrollerLatest, "scroll", function(){console.log(this);});
        $.bind(myScrollerLatest, "scrollend", function(){nearestLi(this.container, myScrollerLatest);
            setTimeout(function(){scrollLi("memeUllatest");}, 300);});
        $.bind(myScrollerBest, "scrollend", function(){nearestLi(this.container, myScrollerBest);
            setTimeout(function(){scrollLi("memeUlbest");}, 300);});
        $.bind(myScrollerWorst, "scrollend", function(){nearestLi(this.container, myScrollerWorst); setTimeout(function(){scrollLi("memeUlworst");}, 300);});
        $.bind(myScrollerMine, "scrollend", function(){nearestLi(this.container, myScrollerMine); setTimeout(function(){scrollLi("my_page");}, 300);});
    
    var flipswitchloc = localStorage.flipswitchloc;
    if (flipswitchloc === "1") {
        $("#af-flipswitch-loc")[0].checked = true;
    }
    lcheck = localStorage.loccheck;
    if(lcheck){
     if(lcheck == "0"){$("#locslider").attr("value", 10);
                       $('#locslider').trigger("change");
                      localStorage.locslide = 10;
                      $("#locslider").addClass("disabled");
                      $("#locslider").attr("disabled", "disabled");
                      }else{
                        $("#locslider").attr("value", localStorage.locslide); 
                        $('#locslider').trigger("change");
                        getLocation();
     }
    }else{$('#locslider').trigger("change");}
    
    try{
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;}catch(err){console.log(err);}

    if(localStorage.userdata){loginS(localStorage.userdata);}else{}
    if(userid > 0 && userid < 1005){}else{try{if(store){initializeStore();}}catch(err){}}
    
    if(window.tinyHippos){}else{
    var push = PushNotification.init({ "android": {"senderID": "660144774535"},
    "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

    push.on('registration', function(data) {
    //console.log(data);
        if(localStorage.registrationId){if(localStorage.registrationId == data.registrationId){}
                                        else{
                                            var params = "uid=" + userid + "&key=regid" + "&registrationId=" + data.registrationId + "&ct=" + new Date().getTime();
                                            $.post(myURL + "/api/account.php", params, accountUpdateS).error(function(e) {
                                                $.ui.popup("Account Update: " + JSON.stringify(e));
                                            });
                                        }
                                       }else{localStorage.registrationId = data.registrationId}
        registrationId = data.registrationId;
    //$("#scenarios span").html(data.registrationId);
    });

    push.on('notification', function(data) {
    //console.log(data);
    //$("#scenarios span").html(data.title+" "+data.message);
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
        cordova.plugins.notification.local.schedule({
            text:"You've been judged!",
            title: "Reaction",
            led: "FFFF33",
            badge: data.count+1
        });
    });

    push.on('error', function(e) {
    console.log(e);
    });
        }
};


(function($) {
    $.fn.textfill = function(maxFontSize) {
        maxFontSize = parseInt(maxFontSize, 10);
        var ourText = $(this);
        if (this.length) {
            var tlength = this[0].childNodes[0].length;
            //ourText.css({display: "inline-block", webkitTransform: "scale(0)", opacity: 0});
            //ourText.css({fontSize: "0px", width: "20%", opacity: 0});
            if (tlength > 110) {
                ourText.css({fontSize: (maxFontSize - 9) + "px"});
                //ourText.animate({fontSize: (maxFontSize - 9) + "px", width: "80%", opacity: 1}, 200);
            } else if (tlength > 90) {
                ourText.css({fontSize: (maxFontSize - 6) + "px"});
                //ourText.animate({fontSize: (maxFontSize - 6) + "px", width: "80%", opacity: 1}, 200);
            } else if (tlength > 70) {
                ourText.css({fontSize: (maxFontSize - 3) + "px"});
                //ourText.animate({fontSize: (maxFontSize - 3) + "px", width: "80%", opacity: 1}, 200);
            } else {
                ourText.css({fontSize: maxFontSize + "px"});
                //ourText.animate({fontSize: maxFontSize + "px", width: "80%", opacity: 1}, 200);
            }
            //ourText.css({webkitTransform: "scale(1)", opacity: 1, webkitTransition: "webkitTransform 1.5s ease"});
            
            //ourText.fadeIn("slow");
        }
    };
})($);

function getLocation(){
    watchID = navigator.geolocation.watchPosition(whereAmI, noWhere, {
    maximumAge: 30000,
    timeout: 27000,
    enableHighAccuracy: true
    });

    setTimeout(function () {
        if (watchID) {
            navigator.geolocation.clearWatch(watchID);
            watchID = "";
            noWhere();
        }
    }, 60000);
}

function locCheck(a) {

    af(document.body).popup({
        //onShow: function(){$("#locPopup").css("margin-top", "-25%");},
        id: "locPopup",
        title: "Play Reaction Locally",
        message: '<div id="includeloc"><div>Would you like to play Reaction Locally?</div><br><div><small>If you say Yes, you\'ll be able to play games and view Reactions by Proximity. So if you\'re at a party and you only want to see people\'s Reactions at that party you set the Local slider to "Here". You can expand the slider all the way to "Everywhere".</small></div><br><div><small>If you say No, Local Play will be disabled and you\'ll just see Everyone.<br><br>You can update this in the Settings any time.</small></div><br><div><small>Probably a good idea to turn off Local Play when you\'re at home.</small></div></div>',
        cancelText: "No",
        cancelCallback: function() {
            $("#locslider").addClass("disabled");
            localStorage.loccheck = "0"; // No, don't play locally
            if ($("#af-flipswitch-loc")[0].checked === true) {
                $("#af-flipswitch-loc")[0].checked = false;
                localStorage.flipswitchloc = "0";
                localStorage.locslide = 10;
                $("#locslider").attr("value", 10);
                $('#locslider').trigger("change");
            }
        },
        doneText: "Yes",
        doneCallback: function() {
            $("#locslider").removeClass("disabled");
            localStorage.loccheck = "1"; // Yes, play locally
            if ($("#af-flipswitch-loc")[0].checked === false) {
                $("#af-flipswitch-loc")[0].checked = true;
                localStorage.flipswitchloc = "1";
                localStorage.locslide = 10;
                $("#locslider").attr("value", 10);
                $('#locslider').trigger("change");
            }
        },
        cancelOnly: false
    });
}


function whereAmI(position) {
        hereIam = position;
    //console.log(hereIam);
        if (position.coords.accuracy <= 70) {
            if (watchID){navigator.geolocation.clearWatch(watchID);
            watchID = "";}
            var lat = hereIam.coords.latitude;
            var lng = hereIam.coords.longitude;
            var latlng = lat + "," + lng;
            var lt = Number(lat) * 1000;
            var lg = Number(lng) * 1000;
            lt = Math.round(lt);
            lg = Math.round(lg);
            lt = lt / 1000;
            lg = lg / 1000;
            var ltlg = lt + "," + lg;
            //$("#where").text(hereIam.coords.latitude + "," + hereIam.coords.longitude);
        }
}

function noWhere(e) {
    //if (id == 1) {
     //   $.ui.popup("noWhere: " + JSON.stringify(e));
    //}
    navigator.geolocation.getCurrentPosition(whereAmI, errorCoor, {
                maximumAge: 30000,
                timeout: 7000,
                enableHighAccuracy: true
            });
}

function errorCoor(e) {
    //if (id == 1) {
       // $.ui.popup("errorCoor: " + JSON.stringify(e));
    //}
}


// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imgURI) {
    var imageURI = "";
    imageURI = imgURI; //.imageURL;
/*    ReactionCamera
    largeImageDiv = document.getElementById("largeImage");
    largeImageDiv.style.display = "block";
    activate_subpage("#uib_page_3");
    largeImageDiv.src = imageURI;
    sizeIt();
 */               

    var setupImg = "",
        swidth = "",
        sheight = "",
        canvas = "",
        wpLeft = "",
        wpHeight = "",
        fs = "",
        ofs = "",
        imgObject = "",
        ctx = "",
        scenarioC = "",
        scenarioL = "",
        scenarioLe = "",
        largeImageDiv = "",
        imageURL = "";


    setupImg = document.getElementById("setupImage");
    setupImg.src = "";
    setupImg.onload = function() {
        swidth = setupImg.width;
        sheight = setupImg.height;
        if (swidth >= sheight) {
            orient = "land";
        } else {
            orient = "port";
        }
        if (Math.max(swidth, sheight) > 487) {
            if (orient === "land") {
                swidth = 487;
                sheight = sheight * (swidth / setupImg.width);
            } else {
                sheight = 487;
                swidth = swidth * (sheight / setupImg.height);
            }
        }
        setupImg.style.display = "none";
        canvas = document.getElementById("canvasFun");
        $(canvas).attr("width", swidth + "px");
        $(canvas).attr("height", sheight + "px");
        setupImg.src = "";
        wpLeft = swidth / 2;
        wpHeight = sheight - 60;
        fs = 16;
        ofs = 4;
        imgObject = new Image();
        imgObject.src = "";
        ctx = canvas.getContext("2d");
        imgObject.onload = function() {
            ctx.drawImage(imgObject, 0, 0, swidth, sheight);
            ctx.font = "bold " + fs + "pt sans-serif";
            ctx.textAlign = "center";
            scenarioC = scenario.toUpperCase();
            scenarioL = getLines(ctx, scenarioC, swidth - 50);
            scenarioLe = scenarioL.length;
            wpHeight = wpHeight - ((fs + ofs) * scenarioLe) + 65;
            ctx.lineWidth = 3;
            $.each(scenarioL, function(index, item) {
                ctx.strokeStyle = "black";
                ctx.strokeText(scenarioL[index], wpLeft, wpHeight + ((fs + ofs) * index));
                ctx.fillStyle = "white";
                ctx.fillText(scenarioL[index], wpLeft, wpHeight + ((fs + ofs) * index));
            });
            ctx.rect(0, 0, swidth, sheight);
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 7;
            ctx.stroke();
            ctx.font = "bold 8pt sans-serif";
            ctx.textAlign = "left";
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.strokeText("ReactionTheGame.com", 9, 17);
            ctx.fillStyle = "white";
            ctx.fillText("ReactionTheGame.com", 9, 17);
            largeImageDiv = document.getElementById("largeImage");
            imageURL = canvas.toDataURL('image/png'); //"image/jpeg"

            largeImageDiv.onload = function() {
                largeImageDiv.style.display = "block";
                canvas.style.display = "none";
                imgObject.src = "";
                imageURI = "";
                sizeIt();
                activate_subpage("#uib_page_3");
                try{navigator.camera.cleanup(onSuccess, onFail);}catch(err){}
                $("#navbar").show();
                $(".mt4").hide();
                setTimeout(function() {
                    $(".hideMe").hide();
                }, 300);
                //$(document).on("pinch", "#largeImage", function(evt){console.log("pinched"); console.log(evt);});
                hammerItL(document.getElementById("largeImage"));
                mytimer = false;
                //if(device.model.toLowerCase().indexOf("ipad") >= 0){
                //    window.plugins.socialsharing.iPadPopupCoordinates = function() {
                //  var rect = document.getElementById('share_button').getBoundingClientRect();
                //  return rect.left + "," + rect.top + "," + rect.width + "," + rect.height;
                //    };
                //}
            };
            largeImageDiv.src = imageURL;
        };
        imgObject.src = imageURI;

    };
    if (navigator.platform != "Win32" && $("#afui").attr("class").toLowerCase().indexOf("ios") >= 0) {
        imageURI += "?" + Date.now();
    }
    setupImg.src = imageURI;

}

// A button will call this function
//
function capturePhoto(direction) {
    // Take picture using device camera and retrieve image as base64-encoded string
/*    if (device.model.toLowerCase().indexOf("ipad") >= 0) {
        navigator.camera.getPicture(onPhotoURISuccess, onFail, {
            quality: 80, // allowEdit: true,
            destinationType: destinationType.FILE_URI,
            correctOrientation: true,
            saveToPhotoAlbum: false,
            targetWidth: 487,
            targetHeight: 487,
            sourceType: Camera.PictureSourceType.CAMERA,
            cameraDirection: direction,
            popoverOptions: new CameraPopoverOptions(384, 384, 297, 396, Camera.PopoverArrowDirection.ARROW_DOWN)
        });
    } else*/
    if ($("#afui").attr("class") == "ios7 android") {
        setTimeout(function() {
            $(".hideMe").show();
        }, 100);
        
        navigator.camera.getPicture(onPhotoURISuccess, onFail, {
            quality: 80, //allowEdit: true,
            destinationType: destinationType.FILE_URI,
            correctOrientation: true,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false,
            targetWidth: 487,
            targetHeight: 487
        });
    } else if ($("#afui").attr("class") == "win8") {
        setTimeout(function() {
            $(".hideMe").show();
        }, 100);
        navigator.camera.getPicture(onPhotoURISuccess, onFail, {
            quality: 80, //allowEdit: true,
            destinationType: destinationType.FILE_URI,
            correctOrientation: true,
            saveToPhotoAlbum: false,
            targetWidth: 487,
            targetHeight: 487,
            sourceType: Camera.PictureSourceType.CAMERA,
        });
    } else { //iOS
/*        setTimeout(function() {
            $(".hideMe").show();
        }, 100);
*/
       // if (!direction){
        if(direction == 1){direction = true;}else{direction = false;}
            cordova.plugins.dbcamera.openCustomCamera(onPhotoURISuccess, onFail, { sceneText: scenario, frontCamera: direction });
        /*}else{
        navigator.camera.getPicture(onPhotoURISuccess, onFail, {
            quality: 80, // allowEdit: true,
            destinationType: destinationType.FILE_URI,
            correctOrientation: true,
            saveToPhotoAlbum: false,
            targetWidth: 487,
            targetHeight: 487,
            sourceType: Camera.PictureSourceType.CAMERA,
            cameraDirection: direction
        });
        }*/
    }
}

// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 80,
        allowEdit: true,
        destinationType: destinationType.DATA_URL
    });
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 80,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: source
    });
}

// Called if something bad happens.
//
function onFail(message) {
    setTimeout(function() {
        $(".hideMe").hide();
    }, 300);
    // $("#liTesting").text(message);
    //alert('Failed because: ' + message);
}

function onSuccess(message) {
    //alert('Failed because: ' + message);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getLines(ctx, text, maxWidth) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}

function sizeIt() {
    $("#searchresults").css("max-height", window.innerHeight - 109 +"px");
    wwidth = $(window).width();
    if ($("#memeLlatest").is(":visible") || $("#memeLmine").is(":visible") || $("#memeLbest").is(":visible") || $("#memeLworst").is(":visible")) {
        $(".memeL").width(wwidth);
        /*if ($(".maxW396").width() == 396) {
            $(".score").width("25%");
        }*/
    } else {
        var wheight = ($(window).height() - $("#header").height() - 2); //$(".uib_w_2").height();
        if($("#afui").attr("class").toLowerCase().indexOf("ios") >= 0){wheight = wheight - 20;}
        var fheight = (($(window).height() - $("#header").height()) - 74);
        $("#allcontent").height(wheight); //$("#mainpage").height());
        
        $(".fullH").height(fheight);
        $(".topcell").height(wheight*.43); //(wheight / 2.3);
        $("#react_span").height(wheight*.28); 
        $("#uploadphotospid").height(wheight*.23); // / 3.5);
        }
}

function listScenarios(){
    
}

function combineScenarios() {
    scenarios = [];
    
    $.each(allScenarios.categories, function(index){
        var howmany;
        if ($("#af-flipswitch-"+index)[0].checked === true) {
            if(localStorage[allScenarios.categories[index].shortname+"Purchased"] == 1){howmany = allScenarios.categories[index].total;}else{howmany = allScenarios.categories[index].included;}
        scenarios = scenarios.concat(allScenarios.categories[index].scenarios.slice(0,howmany));
        }
    });
    

    if (scenarios.length === 0) {
        //scenarios = ["Please select a Scenario Pack from the Settings link in the top left corner."];
        $("#af-flipswitch-0")[0].checked = true;
        localStorage.flipswitch0 = "1";
        scenarios = allScenarios.categories[0].scenarios;
    }
}

(function($ui) {
    "use strict";

    function flipTransition(oldDiv, currDiv, back) {
        /*jshint validthis:true */
        var that = this;
        if (back) {
            that.css3animate(currDiv, {
                x: "0",
                scale: 1,
                rotateY: "180deg",
                origin: "50% 50%", // this is default 0 0 (set in css3animate) and does not appear in this default code
                complete: function() {
                    that.css3animate(currDiv, {
                        x: "0",
                        scale: 1,
                        time: $ui.transitionTime,
                        rotateY: "0deg",
                        complete: function() {
                            that.clearAnimations(currDiv);
                        }
                    });
                }
            });
            that.css3animate(oldDiv, {
                x: "0",
                time: $ui.transitionTime,
                scale: 1,
                rotateY: "180deg",
                origin: "50% 50%", // this is default 0 0 (set in css3animate) and does not appear in this default code
                complete: function() {
                    that.css3animate(oldDiv, {
                        x: "0",
                        opacity: 1,
                        scale: 1,
                        rotateY: "0deg",
                        complete: function() {
                            that.finishTransition(oldDiv);
                        }
                    });
                    currDiv.style.zIndex = 2;
                    oldDiv.style.zIndex = 1;
                }
            });
        } else {
            setTimeout(function() {
                oldDiv.style.zIndex = 1;
                currDiv.style.zIndex = 2;
            }, $ui.transitionTime / 2);
            that.css3animate(currDiv, {
                x: "0",
                scale: 1,
                rotateY: "180deg",
                origin: "50% 50%", // this is default 0 0 (set in css3animate) and does not appear in this default code
                complete: function() {
                    that.css3animate(currDiv, {
                        x: "0",
                        scale: 1,
                        time: $ui.transitionTime,
                        rotateY: "0deg",
                        origin: "50% 50%", // this is default 0 0 (set in css3animate) and does not appear in this default code
                        complete: function() {
                            that.clearAnimations(currDiv);
                        }
                    });
                }
            });
            that.css3animate(oldDiv, {
                x: "0",
                time: $ui.transitionTime,
                scale: 1,
                rotateY: "180deg",
                origin: "50% 50%", // this is default 0 0 (set in css3animate) and does not appear in this default code
                complete: function() {
                    that.css3animate(oldDiv, {
                        x: "0",
                        opacity: 1,
                        scale: 1,
                        rotateY: "0deg",
                        origin: "50% 50%", // this is default 0 0 (set in css3animate) and does not appear in this default code
                        complete: function() {
                            that.finishTransition(oldDiv);
                        }
                    });
                    currDiv.style.zIndex = 2;
                    oldDiv.style.zIndex = 1;
                }
            });
        }
    }
    $ui.availableTransitions.flip = flipTransition;
})($.ui);

function logItS() {}

function logItE() {}

function logIt(a) {
    a = encodeURIComponent(a);
    var b = JSON.stringify(device);
    b = encodeURIComponent(b);
    var params = "scenario=" + a + "&device=" + b + "&user=" + userid + "&hash=" + hash + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/log.php?ct=" + new Date().getTime(), params, logItS);
}

function postItS(a) {
    navigator.notification.alert(
        
        a, logItE, 'Posted!', 'Cool'
    );
    $(".uib_w_6").html('<div class="smaller">Restart</div>');
    myP = false;
    //$(".uib_w_5").addClass("yellow").removeClass("disabled");
}

function postIt(a) {
    navigator.notification.confirm(
        'Public posting! You will be judged!', // message
        postItYes, // callback to invoke with index of button pressed
        'Caution', // title
        ['Yes!', 'Nooo!'] // buttonLabels
    );
}

function postItYes(i) {
    if (i != 2) {
        a = encodeURIComponent(scenario);
        var b = JSON.stringify(device);
        b = encodeURIComponent(b);
        var pic = $("#largeImage").attr("src");
        pic = encodeURIComponent(pic);
        var params = "scenario=" + a + "&device=" + b + "&lat=" + hereIam.coords.latitude + "&lon=" + hereIam.coords.longitude + "&user=" + userid + "&hash=" + hash + "&pic=" + pic + "&ct=" + new Date().getTime();
        $.post(myURL + "/api/post.php?ct=" + new Date().getTime(), params, postItS);
    }else{
     $(".uib_w_5").addClass("black").removeClass("disabled");   
    }
}

function memeList(memes) {
    if (memes.length >= 6) {
        try {
            memes = JSON.parse(memes);
        } catch (err) {}
        if(memes.memes){}else{
           try {
            memes = JSON.parse(memes);
            } catch (err) {}   
        }
        if(memes.memes){}else{
           try {
            memes = JSON.parse(memes);
            } catch (err) {}   
        }
        var i = 1;
        var vot = localStorage.votes;
        if (vot) {
            var vota = JSON.parse(vot);
        } else {
            var vota = ["0"];
        }
        var repor = localStorage.reports;
        if (repor) {
            var reporta = JSON.parse(repor);
        } else {
            var reporta = ["0"];
        }
        setTimeout(function(){sizeIt();}, 1);
        
        $(".rep").text(memes.rep);
        //if(userid >=1 && userid <= 3){}
        if(memes.page === "best"){$("#memeUlbest").text("");}
        if(memes.page === "worst"){$("#memeUlworst").text("");}
        var dsrc, src, disp;
        //console.log(memes.memes);
        $.each(memes.memes, function() {
            if(i>=5){
                dsrc = "data-src=\"http://reactionthegame.com/pics/" + this['pic']+"\" style=\"opacity:0;\" onload=\"$(this).animate({'opacity':1}, 300);\""; 
                src = "src=\"\""; 
                disp = "none"; 
            }else{
                src = "src=\"http://reactionthegame.com/pics/" + this['pic']+"\""; dsrc = "data-src=\"\" style=\"opacity:0;\" onload=\"$(this).animate({'opacity':1}, 300);\""; disp = "list-item";
                                                                                                                              }
            if(memes.page === "latest"){
                var score = 0;
                var shared = this.shared;
                if (this.up >= this.down){score = (this.up - this.down) + (3 * this.shared);}else{score = (this.up - this.down) - (3 * this.shared);}
                
                if ($("#" + this.mid).length || reporta.indexOf(this.mid) >= 0) {
                    $(".shared_"+this.mid).text(shared);
                    $(".score_"+this.mid).html(score);
                } else {
                    var disabled = "";
                    if (vota.indexOf(this.mid) >= 0) {
                        disabled = "disabled";
                    }else{disabled = "yellow";}
                if(userid >= 4 || userid == 0){
                    $("#memeUllatest").append("<li id=\"" + this['mid'] + "\" class=\"mheight\" style=\"display:"+disp+";\"><img id=\"img" + this['mid'] + "\" class=\"maxW lazy mheight\" "+dsrc+" "+src+"><div class=\"maxW396\" style=\"display:inline-block;\"><a href=\"#\" class=\"button uib_w_100 icon fa fa-thumbs-o-up big quarter loneb " + disabled + "\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><div class=\"score button yellow big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button uib_w_101 icon fa fa-thumbs-o-down big quarter loneb " + disabled + "\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a></div></li>");
                }else{ //ADMIN
                    $("#memeUllatest").append("<li id=\"" + this['mid'] + "\" class=\"mheight\" style=\"display:"+disp+";\"><img id=\"img" + this['mid'] + "\" class=\"maxW lazy mheight\" "+dsrc+" "+src+"><div class=\"maxW396\" style=\"display:inline-block;\"><a href=\"#\" class=\"button uib_w_100 icon fa fa-thumbs-o-up big quarter loneb " + disabled + "\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><div class=\"score button yellow big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_203 d-margins icon fa fa-times-circle sign red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">delete</div></a></div></li>");
                }
                    //hammerIt(document.getElementById("img" + this['mid']));
                }
                }
                if(memes.page === "mine"){ //console.log(memes); console.log(this);
                    if(userid >= 4 || userid == 0){
                        if(!$("#my" + this.mid).length && reporta.indexOf(this.mid) == -1 && this.uid == userid){
                            var score = 0;
                            var thumb = "up";
                            if(this['up'] >= this['down']){
                            score = (this['up'] - this['down']) + (3 * this['shared']); thumb = "up";
                            }else{
                            score = (this['up'] - this['down']) - (3 * this['shared']); thumb = "down";
                            }
                            var shared = this['shared'];
                            $("#memeUlmine").append("<li id=\"my" + this['mid'] + "\" class=\"mheight\" style=\"display:"+disp+";\"><img id=\"myimg" + this['mid'] + "\" class=\"maxW lazy mheight\" "+dsrc+" "+src+"><div class=\"maxW396\" style=\"display:inline-block;\"><div class=\"button uib_w_200 big quarter lonec\" >score</div><div class=\"score button big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button uib_w_201 icon fa fa-thumbs-o-"+thumb+" big quarter loneb\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_203 d-margins icon fa fa-times-circle sign red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">delete</div></a></div></li>");
                            }
                    }else{ // admins
                        if(!$("#my" + this.mid).length){
                            var score = 0;
                            var thumb = "up";
                            if(this['up'] >= this['down']){
                            score = (this['up'] - this['down']) + (3 * this['shared']); thumb = "up";
                            }else{
                            score = (this['up'] - this['down']) - (3 * this['shared']); thumb = "down";
                            }
                            var shared = this['shared'];
                            $("#memeUlmine").append("<li id=\"my" + this['mid'] + "\" class=\"mheight\" style=\"display:"+disp+";\"><img id=\"myimg" + this['mid'] + "\" class=\"maxW lazy mheight\" "+dsrc+" "+src+"><div class=\"maxW396\" style=\"display:inline-block;\"><div class=\"button uib_w_200 big quarter lonec\" >"+this['reports'].report0.why+": "+this['reports'].report0.comments+"</div><div class=\"score button big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a><a href=\"#\" class=\"button widget uib_w_113 d-margins icon fa fa-ban green big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">UNreport</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_203 d-margins icon fa fa-times-circle sign red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">delete</div></a></div></li>");
                            }
                    }
                }
                if(memes.page === "best"){
                    try{$("#reactionbest_pagesub .afScrollPanel").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)");}catch(err){}
                    if(reporta.indexOf(this.mid) == -1){
                    var score = (this['up'] - this['down']) + (3 * this['shared']);
                    var shared = this['shared'];
                    $("#memeUlbest").append("<li id=\"best" + this['mid'] + "\" class=\"mheight\"style=\"display:"+disp+";\"><img id=\"bestimg" + this['mid'] + "\" class=\"maxW lazy mheight\" "+dsrc+" "+src+"><div class=\"maxW396\" style=\"display:inline-block;\"><div class=\"button uib_w_200 big quarter lonec\" >score</div><div class=\"score button big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button uib_w_201 icon fa fa-thumbs-o-up big quarter loneb\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a></div></li>");}

                }
                if(memes.page === "worst"){
                    try{$("#reactionworst_pagesub .afScrollPanel").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)");}catch(err){}
                    if(reporta.indexOf(this.mid) == -1){
                    var score = (this['up'] - this['down']) - (3 * this['shared']);
                    var shared = this['shared'];
                    $("#memeUlworst").append("<li id=\"worst" + this['mid'] + "\" class=\"mheight\" style=\"display:"+disp+";\"><img id=\"worstimg" + this['mid'] + "\" class=\"maxW lazy mheight\" "+dsrc+" "+src+"><div class=\"maxW396\" style=\"display:inline-block;\"><div class=\"button uib_w_200 big quarter lonec\" >score</div><div class=\"score button big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button uib_w_201 icon fa fa-thumbs-o-down big quarter loneb\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a></div></li>");
                    }
                }
                i++;
            });

                $(".infinite"+memes.page).text("That's all folks!");

            setTimeout(function(){sizeIt();}, 500);
    /*        if (!winscroll) {
                winscroll = setInterval(scrollMe, 500);
            }
    */
            $(".rep").text(memes.rep);
    } else {
        pgnum = "done";
        $(".infinite"+memes.page).text("That's all folks!");
        if (winscroll) {
            clearInterval(winscroll);
            winscroll = "";
        }
    }
}

function memeGet(page) {
    var end = Number($('#memeL'+page+' li:last-child').attr('id'));
    var params;
    var a = JSON.stringify(device);
    if (!isNaN(end)) {
        params = "end=" + end + "&start=0&device=" + a + "&lat=" + hereIam.coords.latitude + "&lon=" + hereIam.coords.longitude + "&user=" + userid + "&hash=" + hash + "&range=" + localStorage.locslide + "&page=" + page + "&ct=" + new Date().getTime();
    } else {
        params = "end=0&start=0&device=" + a + "&lat=" + hereIam.coords.latitude + "&lon=" + hereIam.coords.longitude + "&user=" + userid + "&hash=" + hash + "&range=" + localStorage.locslide + "&page=" + page + "&ct=" + new Date().getTime();
    }
    if ($(".infinite"+page).text() != "That's all folks!") {
        $.post(myURL + "/api/memes.php?ct=" + new Date().getTime(), params, memeList);
    }
}

function memeGetL(page) {
    //$("#memeUl"+page).prepend("<div id=\"tempLoading\">Refreshing...</div>");
    var a = JSON.stringify(device);
    var params = "end=0&start=0&device=" + a + "&lat=" + hereIam.coords.latitude + "&lon=" + hereIam.coords.longitude + "&range=" + localStorage.locslide + "&user=" + userid + "&hash=" + hash + "&page=" + page + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/memes.php?ct=" + new Date().getTime(), params, memeList);
    //setTimeout(function(){$("#tempLoading").remove();}, 2000);
}

function memeFreshen(memes) {
    if (memes.length >= 6) {
        try {
            memes = JSON.parse(memes);
        } catch (err) {}
        try {
            memes = JSON.parse(memes);
        } catch (err) {}
        
        var repor = localStorage.reports;
        if (repor) {
            var reporta = JSON.parse(repor);
        } else {
            var reporta = ["0"];
        }
        setTimeout(function(){sizeIt();}, 1);
        
        $(".rep").text(memes.rep);
        //console.log(memes);

        $.each(memes.memes, function() {
                var score = 0;
                var shared = this.shared;
                if (this.up >= this.down){score = (this.up - this.down) + (3 * this.shared);}else{score = (this.up - this.down) - (3 * this.shared);}
                
                if ($("#" + this.mid).length || reporta.indexOf(this.mid) >= 0) {
                    $(".shared_"+this.mid).text(shared);
                    $(".score_"+this.mid).html(score);
                } else { 
                    var disabled = "";
                if(userid >= 4 || userid == 0){$("#memeUllatest").prepend("<li id=\"" + this['mid'] + "\" class=\"mheight\"><img id=\"img" + this['mid'] + "\" class=\"maxW lazy mheight\" data-src=\"http://reactionthegame.com/pics/" + this['pic'] + "\" src=\"\" onload=\"$(this).animate({'opacity':1}, 300);\"><div class=\"maxW396\" style=\"display:inline-block;\"><a href=\"#\" class=\"button uib_w_100 icon fa fa-thumbs-o-up big quarter loneb "+disabled+" \" data-uib=\"app_framework/button\" data-ver=\"1\"></a><div class=\"score button yellow big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button uib_w_101 icon fa fa-thumbs-o-down big quarter loneb "+disabled+" \" data-uib=\"app_framework/button\" data-ver=\"1\"></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a></div></li>");
                                              }else{ //ADMIN
                    $("#memeUllatest").prepend("<li id=\"" + this['mid'] + "\" class=\"mheight\"><img id=\"img" + this['mid'] + "\" class=\"maxW lazy mheight\" data-src=\"http://reactionthegame.com/pics/" + this['pic'] + "\" src=\"\" onload=\"$(this).animate({'opacity':1}, 300);\"><div class=\"maxW396\" style=\"display:inline-block;\"><a href=\"#\" class=\"button uib_w_100 icon fa fa-thumbs-o-up big quarter loneb " + disabled + "\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><div class=\"score button yellow big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_203 d-margins icon fa fa-times-circle sign red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">delete</div></a></div></li>");   
                }
                //hammerIt(document.getElementById("img" + this['mid']));
            } //console.log(this);
            if(!$("#my" + this.mid).length){
                var score = 0;
                if (this['up'] >= this['down']){score = (this['up'] - this['down']) + (3 * this['shared']);}else{score = (this['up'] - this['down']) - (3 * this['shared']);}
                var shared = this['shared'];
                if(userid >= 4 || userid == 0){$("#memeUlmine").prepend("<li id=\"my" + this['mid'] + "\" class=\"mheight\"><img id=\"myimg" + this['mid'] + "\" class=\"maxW lazy mheight\" data-src=\"http://reactionthegame.com/pics/" + this['pic'] + "\" src=\"\" onload=\"$(this).animate({'opacity':1}, 300);\"><div class=\"maxW396\" style=\"display:inline-block;\"><div class=\"button uib_w_200 big quarter lonec\" >score</div><div class=\"score button big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button uib_w_201 icon fa fa-thumbs-o-up big quarter loneb\" data-uib=\"app_framework/button\" data-ver=\"1\"></a><a href=\"#\" class=\"button widget uib_w_102 d-margins icon fa fa-share big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">share</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_203 d-margins icon fa fa-times-circle sign red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">delete</div></a></div></li>");
                                              }else{ //ADMIN
                    $("#memeUlmine").prepend("<li id=\"my" + this['mid'] + "\" class=\"mheight\"><img id=\"myimg" + this['mid'] + "\" class=\"maxW lazy mheight\" data-src=\"http://reactionthegame.com/pics/" + this['pic'] + "\" src=\"\" onload=\"$(this).animate({'opacity':1}, 300);\"><div class=\"maxW396\" style=\"display:inline-block;\"><div class=\"button uib_w_200 big quarter lonec\" >"+this['reports'].report0.why+": "+this['reports'].report0.comments+"</div><div class=\"score button big score_" + this['mid'] + "\">" + score + "</div><a href=\"#\" class=\"button widget uib_w_103 d-margins icon fa fa-ban red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">report</div></a><a href=\"#\" class=\"button widget uib_w_113 d-margins icon fa fa-ban green big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">UNreport</div></a><div class=\"shared button big shared_" + this['mid'] + "\">" + shared + "</div><a href=\"#\" class=\"button widget uib_w_203 d-margins icon fa fa-times-circle sign red big quarter\" data-uib=\"app_framework/button\" data-ver=\"1\"><div class=\"smaller\">delete</div></a></div></li>");
                                                }
                }
        });
    $(".rep").text(memes.rep);
    //nearestLi(document.getElementById("reactionthegame_pagesub"));
        setTimeout(function(){scrollLi("memeUllatest");}, 300);
        setTimeout(function(){scrollLi("my_page");}, 300);
    }
    //setTimeout(function(){$("#tempLoading").remove();}, 1000);
}

function memeFresh(page) {
    //$("#memeUllatest").prepend("<div id=\"tempLoading\">Refreshing...</div>");
    var start = Number($('#memeLlatest li:first').attr('id'));
    if (!isNaN(start)) {
        //console.log(start);
        var a = JSON.stringify(device);
        var params = "start=" + start + "&end=0&device=" + a + "&lat=" + hereIam.coords.latitude + "&lon=" + hereIam.coords.longitude + "&range=" + localStorage.locslide + "&page=" + page + "&user=" + userid + "&hash=" + hash + "&ct=" + new Date().getTime();
        $.post(myURL + "/api/memes.php?ct=" + new Date().getTime(), params, memeFreshen);
    }else{
        //$("#tempLoading").remove();
        //console.log(page);
        memeGet(page);
    }
}

function pullRefresh(page){
    //console.log("pull check");
    //console.log($("#reactionthegame_pagesub .afScrollPanel").css("-webkit-transform"));
    //console.log($("#"+page+" .afScrollPanel").css("-webkit-transform"));
    var matrixToArray = function(str) {
        return str.match(/(-?[0-9\.]+)/g);
    };
    if (!timer){
    try{if (matrixToArray($("#"+page+" .afScrollPanel").css("-webkit-transform"))[5] > 30) {
        timer = true;
        //console.log("refreshing by transform");
        if(page === "reactionthegame_pagesub"){memeFresh("latest");}else if(page ==="reactionbest_pagesub"){memeGetL("best");}else if(page ==="reactionworst_pagesub"){memeGetL("worst");}
        setTimeout(function(){timer = false;}, 2000);
    }}catch(err){}
    }
}

var winscroll;
var pgnum;
function scrollMe(resultsDiv) {
        if ($("#memeLlatest").is(":visible")) {

            var matrixToArray = function(str) {
                return str.match(/(-?[0-9\.]+)/g);
            };
            if ((-matrixToArray($("#reactionthegame_page .afScrollPanel").css("-webkit-transform"))[5] + $(window).height()) > ($("#memeLlatest").height() - 1024)) {
                if (winscroll) {
                    clearInterval(winscroll);
                    winscroll = "";
                }

                if (pgnum != "done") {
                    memeGet();
                } else {
                    if (winscroll) {
                        clearInterval(winscroll);
                        winscroll = "";
                    }

                }

            }
        } else {
            if (winscroll) {
                clearInterval(winscroll);
                winscroll = "";
            }
        }
    }

function vote(type, mid) {
    var nshared = 0;
    if(type === "share"){
        var smid = "share"+mid;
        if(localStorage[smid]){nshared = Number(localStorage[smid]);}
        localStorage[smid] = nshared+1;
    }
    if(nshared <= 2){
    var b = JSON.stringify(device);
    b = encodeURIComponent(b);
    var params = "type=" + type + "&mid=" + mid + "&device=" + b + "&user=" + userid + "&hash=" + hash + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/vote.php?ct=" + new Date().getTime(), params, voted);
    }
}

function voted(meme) {
    if (meme.length >= 6) {
        try {
            meme = JSON.parse(meme);
        } catch (err) {
            console.log(err);
        }
        try {
            meme = JSON.parse(meme);
        } catch (err) {
            console.log(err);
        }
        //console.log(meme);
        var score = 0;
        if (meme.meme0['up'] >= meme.meme0['down']){score = (meme.meme0['up'] - meme.meme0['down']) + (3 * meme.meme0['shared']);}else{score = (meme.meme0['up'] - meme.meme0['down']) - (3 * meme.meme0['shared']);}
        var mid = meme.meme0['mid'];
        
        if (meme.meme0['shared'] >= 1){
        $(".shared_"+mid).text(meme.meme0['shared']);
        }
        if(meme.meme0['type'] != "share"){
        $("#" + mid + " .uib_w_100").addClass("disabled").removeClass("yellow");
        $("#" + mid + " .uib_w_101").addClass("disabled").removeClass("yellow");
        }
        $(".score_"+mid).html(score);
        
        var rep = meme.meme0['rep'];
        $(".rep").text(rep);
        
        //$("#scenarios span").html(decodeURI(meme.meme0['cresult']));

        if($("#modalContainer").is(":visible") && meme.meme0['type'] != "share"){
        $("#modalFooter .uib_w_100").addClass("disabled").removeClass("yellow");
        $("#modalFooter .uib_w_101").addClass("disabled").removeClass("yellow");
        //$("#modalFooter .score").html(score);
        }
    } else {

    }
}

function shareSuccess(t){
    if(t){
    vote("share", rid);
    }
    rid = "";
}

function reported(meme) {
    try {
        meme = JSON.parse(meme);
    } catch (err) {
        console.log(err);
    }
    try {
        meme = JSON.parse(meme);
    } catch (err) {
        console.log(err);
    }
    //console.log(meme);
    var mid = meme.meme0['mid'];
    if(userid >=1 && userid <= 3 && meme.meme0['why'] != "delete"){}else{$("#" + mid).fadeOut(300, function() { $(this).remove(); });}
    if(userid >=1 && userid <= 3 && meme.meme0['why'] != "delete" && meme.meme0['why'] != "unreport"){}else{$("#my" + mid).fadeOut(300, function() { $(this).remove(); });}
    $("#worst" + mid).fadeOut(300, function() { $(this).remove(); });
    $("#best" + mid).fadeOut(300, function() { $(this).remove(); });
    if($("#modalContainer").is(":visible")){
        $("#modalContainer ul").html("");
        $("#modalFooter").html(""); 
        $.ui.hideModal();
        $("#afui .header").css("margin-bottom", "26px");
    }
    var rep = meme.meme0['rep'];
    $(".rep").text(rep);
    
    if(userid == 0 || userid >= 4){
        var voted = localStorage.reports;
        if (voted) {
            var vota = JSON.parse(voted)
            vota.push(mid.toString());
            var voty = JSON.stringify(vota);
            localStorage.reports = voty;
        } else {
            voted = [mid.toString()];
            localStorage.reports = JSON.stringify(voted);
        }
    }
}

function report(mid, why, comments) {
    var b = JSON.stringify(device);
    b = encodeURIComponent(b);
    why = encodeURIComponent(why);
    comments = encodeURIComponent(comments);
    var type = "report";
    var params = "type=" + type + "&mid=" + mid + "&device=" + b + "&user=" + userid + "&hash=" + hash + "&why=" + why + "&comments=" + comments + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/vote.php?ct=" + new Date().getTime(), params, reported);
}

function lazyMe(elm) {
    //console.log(elm);
    $("#"+elm+" img.lazy").lazy({
        bind: "event",
        threshold: 800,
        enableThrottle: false,
        visibleOnly: true,
        effect: "fadeIn",
        effectTime: "fast",
        beforeLoad: function(el) {
            //el.parent("li").show();
            //el.parent("li").css("height", "");
            el.parent("li").find(".maxW396").show();
        }
        ,
        afterLoad: function(el) {
            el.parent("li").next("li").show().next("li").show().next("li").show();
            el.parent("li").prev("li").show().prev("li").show().prev("li").show();
        }
    });
    //if(elm === "memeUllatest"){pullRefresh("reactionthegame_pagesub");}else if(elm === "memeUlbest"){pullRefresh("reactionbest_pagesub");}else if(elm === "memeUlworst"){pullRefresh("reactionworst_pagesub");}
}




function hammerIt(elm) {
    /*if(hammertime){
    hammertime.off("");
    hammertime = "";}*/
    hammertime = new Hammer(elm, {});
    hammertime.get('pinch').set({
        enable: true
    });

    var posX = 0,
        posY = 0,
        scale = 1,
        last_scale = 1,
        last_posX = 0,
        last_posY = 0,
        max_pos_x = 0,
        max_pos_y = 0,
        transform = "",
        el = elm;

    hammertime.on('doubletap pan pinch panend pinchend', function(ev) { //console.log(ev);
        if (ev.type == "doubletap") {
            transform =
                "translate3d(0, 0, 0) " +
                "scale3d(2, 2, 1) ";
            scale = 2;
            last_scale = 2;
            try {
                if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
                    transform =
                        "translate3d(0, 0, 0) " +
                        "scale3d(1, 1, 1) ";
                    scale = 1;
                    last_scale = 1;
                }
            } catch (err) {}
            el.style.webkitTransform = transform;
            transform = "";
        }

        //pan    
        if (scale != 1) {
            posX = last_posX + ev.deltaX;
            posY = last_posY + ev.deltaY;
            max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
            max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
            if (posX > max_pos_x) {
                posX = max_pos_x;
            }
            if (posX < -max_pos_x) {
                posX = -max_pos_x;
            }
            if (posY > max_pos_y) {
                posY = max_pos_y;
            }
            if (posY < -max_pos_y) {
                posY = -max_pos_y;
            }
        }
        
        
        //pinch
        if (ev.type == "pinch") {
            scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
        }
        if(ev.type == "pinchend"){last_scale = scale;}
        
        //panend
        if(ev.type == "panend"){
        last_posX = posX < max_pos_x ? posX : max_pos_x;
        last_posY = posY < max_pos_y ? posY : max_pos_y;
        }

        if (scale != 1) {
            if (scale <= 1.1){posX = 0; posY = 0;}
            transform =
                "translate3d(" + posX + "px," + posY + "px, 0) " +
                "scale3d(" + scale + ", " + scale + ", 1)";
        }

        if (transform) {
            el.style.webkitTransform = transform;
        }
        
        if (ev.type == "panend" && ev.velocity >= 1.1){
            $("#modalContainer ul").html("");
            $("#modalFooter").html(""); 
            $.ui.hideModal();
            $("#afui .header").css("margin-bottom", "26px");
        }
    });

}
function hammerItL(elm) {
    /*if(hammertime){
    hammertime.off("");
    hammertime = "";}*/
    var hammertimeL = new Hammer(elm, {});
    hammertimeL.get('pinch').set({
        enable: true
    });
    var posX = 0,
        posY = 0,
        scale = 1,
        last_scale = 1,
        last_posX = 0,
        last_posY = 0,
        max_pos_x = 0,
        max_pos_y = 0,
        transform = "",
        el = elm;

    hammertimeL.on('doubletap pan pinch panend pinchend', function(ev) {
        if (ev.type == "doubletap") {
            transform =
                "translate3d(0, 0, 0) " +
                "scale3d(2, 2, 1) ";
            scale = 2;
            last_scale = 2;
            try {
                if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() != "matrix(1, 0, 0, 1, 0, 0)") {
                    transform =
                        "translate3d(0, 0, 0) " +
                        "scale3d(1, 1, 1) ";
                    scale = 1;
                    last_scale = 1;
                }
            } catch (err) {}
            el.style.webkitTransform = transform;
            transform = "";
        }

        //pan    
        if (scale != 1) {
            posX = last_posX + ev.deltaX;
            posY = last_posY + ev.deltaY;
            max_pos_x = Math.ceil((scale - 1) * el.clientWidth / 2);
            max_pos_y = Math.ceil((scale - 1) * el.clientHeight / 2);
            if (posX > max_pos_x) {
                posX = max_pos_x;
            }
            if (posX < -max_pos_x) {
                posX = -max_pos_x;
            }
            if (posY > max_pos_y) {
                posY = max_pos_y;
            }
            if (posY < -max_pos_y) {
                posY = -max_pos_y;
            }
        }
        
        
        //pinch
        if (ev.type == "pinch") {
            scale = Math.max(.999, Math.min(last_scale * (ev.scale), 4));
        }
        if(ev.type == "pinchend"){last_scale = scale;}
        
        //panend
        if(ev.type == "panend"){
        last_posX = posX < max_pos_x ? posX : max_pos_x;
        last_posY = posY < max_pos_y ? posY : max_pos_y;
        }

        if (scale != 1) {
            if (scale <= 1.1){posX = 0; posY = 0;}
            transform =
                "translate3d(" + posX + "px," + posY + "px, 0) " +
                "scale3d(" + scale + ", " + scale + ", 1)";
        }

        if (transform) {
            el.style.webkitTransform = transform;
        }
    });

}


function scrollLi(element){
var el = $("#"+element);

function showLi(elem){
    elem.find("li").each(function(){
        var that = $(this),
            thli = that.next("li"),
            prli = that.prev("li"),
            thimage = that.find("img"),
            thnimg = thli.find("img"),
            //thnnim = thli.next("li").find("img"),
            primg = prli.find("img");
            //prprim = prli.prev("li").find("img"); 
        
        if(isInLoadableArea(this)){
            //console.log(this);
            if(prli.is(":hidden")){
                prli.show(); //.prev("li").show();
                prli.find(".maxW396").show();
                if(!primg.attr("src") && primg.attr("data-src")){
                primg[0].onload = function() {primg.animate({'opacity':1}, 300);}
                primg.attr("src", primg.attr("data-src"));
                primg.attr("data-src", "");}
                //if(!prprim.attr("src") && prprim.attr("data-src")){prprim.attr("src", prprim.attr("data-src"));
                //prprim.attr("data-src", "");}
                //prprim.onload = function() {prprim.height(prprim.naturalHeight);}
            }

            //else if(!primg.css("height")){
            //    primg.css("height", primg.height());
            //}
            if(thli.is(":hidden")){
                thli.show(); //.next("li").show();
                thli.find(".maxW396").show();
                if(!thnimg.attr("src") && thnimg.attr("data-src")){
                thnimg[0].onload = function() {thnimg.animate({'opacity':1}, 300);}
                thnimg.attr("src", thnimg.attr("data-src"));
                thnimg.attr("data-src", "");}
                
                //if(!thnnim.attr("src") && thnnim.attr("data-src")){thnnim.attr("src", thnnim.attr("data-src"));
                //thnnim.attr("data-src", "");}
                //thnnim.onload = function() {thnnim.height(thnnim.naturalHeight);}
            }
            if(!thimage.attr("src") && thimage.attr("data-src")){
                thimage[0].onload = function() {that.css("height", that.height());
                                             thimage.animate({'opacity':1}, 300);
                                            }
                thimage.attr("src", thimage.attr("data-src"));
                thimage.attr("data-src", "");
                that.find(".maxW396").show();
            }
            //else if(!thimage.css("height")){setTimeout(function(){thimage.css("height", thimage.height());}, 1000);}
            
        }else{ //console.log(this);
            if(that.is(":visible") && thimage.attr("src") && !thimage.attr("data-src")){
                if(thimage[0].complete){
                    that.css("height", that.height());
                }
                thimage.attr("data-src", thimage.attr("src"));
                thimage.attr("src", "");
                that.find(".maxW396").hide();
                    //that.hide();
            }

        }
    });
}

function isInLoadableArea(elem) {

      var viewedHeight = hheight,
          elementBound = elem.getBoundingClientRect(),
          vertical = // check if element is in loadable area from top
           ((viewedHeight + 2000) > elementBound.top) &&
          // check if element is even in loadable are from bottom
           (-2000 < elementBound.bottom);
      if(elementBound.top === 0){vertical = false;}
//    console.log(elem);
//    console.log(vertical);
      return vertical;
}
//el.closest("afScrollPanel").css("height", "3000px");
showLi(el);

}

function nearestLi(el, scrollel){
    //console.log(el);
    function isInView(elem) {
        var bt = -700;
        if(scrollel){if(scrollel.firstEventInfo.pageY >= scrollel.lastEventInfo.pageY){}else{bt = -200;}}
          var elementBound = elem.getBoundingClientRect(),
          vertical = // check if element is in loadable area from top
           (elementBound.top >= bt) &&
          // check if element is even in loadable are from bottom
           (0 < elementBound.bottom);
      if(elementBound.top === 0){vertical = false;}

      return vertical;
     }
    
     $(el).find("li").each(function(){
         if(isInView(this)){
             var that = $(this).next("li");;
             if(scrollel){if(scrollel.firstEventInfo.pageY >= scrollel.lastEventInfo.pageY){}else{that = $(this);}}
             setTimeout(function(){$.ui.scrollingDivs[el.id].scrollToItem(that, 300);}, 10);
             return false;
         }
     });
}

function loginS(data) {
    try {
            data = JSON.parse(data);
        } catch (err) {}
    if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {}   
        }
        if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {} 
        }
    //console.log(data);
    if(data.user.uid != "" && data.user.uid > 0){
        user = data.user;
        localStorage.userdata = JSON.stringify(data);
        userid = data.user.uid;
        localStorage.userid = data.user.uid;
        hash = data.user.hash
        localStorage.hash = data.user.hash;
        localStorage.newdevice = data.user.difdevice;
        $("#my_settings").trigger("loadpanel");
        if(userid <= 3){$("#login span").text("admin"); $("#login").css("margin-left", "-1px"); $(".piclist").html(""); $(".infinite").text("Loading..."); $("#af-header-3 h1").text("Reported Reactions"); $("#mine_button").text("Reported"); mytimer = false; memeGet("mine");
                       }else{$("#login span").text("account"); $("#login").css("margin-left", "-7px"); $("#af-header-3 h1").text("My Reactions"); $("#mine_button").text(""); $(".piclist").html(""); $(".infinite").text("Loading..."); mytimer = false; memeGet("mine");}
        $( "#cancel" ).trigger( "click" );
        runCategories();
    }else{
        document.getElementById("passa2").innerHTML = "<span class=\"red\"><small>please try again or <span id=\"newpass\"><big>tap here</big> to be emailed a new password</span></small></span>";
    }
}

function login(username, password, inclpics, action) {
    var b = JSON.stringify(device);
    var pass = $.md5(password);
    var key = "login";
    if (action == "Sign up"){key = "register";}
    var params = "username=" + username + "&password=" + pass + "&inclpics=" + inclpics + "&device=" + b + "&hash=" + hash + "&key=" + key + "&registrationId=" + registrationId + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/login.php", params, loginS).error(function(e) {
        $.ui.popup("login: " + JSON.stringify(e));
    });
}

function newPassS(data){
    try {
            data = JSON.parse(data);
        } catch (err) {}
    if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {}   
        }
        if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {} 
        }
    document.getElementById("passa2").innerHTML = "<span class=\"green\"><small>please check your email for your new password.</small></span>";
}

function newPassword(email) {
    var key = "newpass";
    var params = "email=" + email + "&key=" + key + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/login.php", params, newPassS).error(function(e) {
        $.ui.popup("newpass: " + JSON.stringify(e));
    });
}

function accountUpdateS(data){
    try {
            data = JSON.parse(data);
        } catch (err) {}
    if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {}   
        }
        if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {} 
        }
    //console.log(data);
    if(data.user.uid != "" && data.user.uid > 0){
        user = data.user;
        localStorage.userdata = JSON.stringify(data);
        userid = data.user.uid;
        localStorage.userid = data.user.uid;
        hash = data.user.hash
        localStorage.hash = data.user.hash;
        localStorage.newdevice = data.user.difdevice;
    }
    if(data.user.first == ""){document.getElementById("passa2").innerHTML = "<span class=\"red\"><small>current password not correct</small></span>"; document.getElementById("passa3").innerHTML = "<span class=\"red\"><small>current password not correct</small></span>";}else{
        setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, message:"<br>New Details Accepted!"});}, 500);
    }
}
function accountUpdate(first, last, email, username, password, newpass, key){
    var b = JSON.stringify(device);
    var pass = $.md5(password);
    var npass = $.md5(newpass);
    var params = "username=" + user.username + "&newuser=" + username + "&password=" + pass + "&newpass=" + npass + "&firstname=" + first + "&lastname=" + last + "&email=" + email + "&uid=" + userid + "&hash=" + hash + "&device=" + b + "&key=" + key + "&registrationId=" + registrationId + "&ct=" + new Date().getTime();
    $.post(myURL + "/api/account.php", params, accountUpdateS).error(function(e) {
        $.ui.popup("Account Update: " + JSON.stringify(e));
    });
}

function checkEmail(data) {
    var email = data.value;
    var is_valid_email = /^.+@.+\..+$/.test(email);
    if (is_valid_email === false) {
        document.getElementById("emaila").innerHTML = "<small>not an email</small>";
    } else {
        document.getElementById("emaila").innerHTML = "";
    }
}
function checkEmailS(data){//console.log("email check");
    try {
            data = JSON.parse(data);
        } catch (err) {}
    if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {}   
        }
        if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {} 
        }
    var classs = "green";
    if($("#action").text() == "Sign up"){
    if(data.user.available == 0){classs = "red"; $("#action").removeClass("email");}else{$("#action").addClass("email");}
    document.getElementById("emaila").innerHTML = "<span class=\""+classs+"\"><small>"+data.user.text+"</small></span>";
    }else{
        if($("#action").text() == "Log in"){
        if(data.user.available == 1){classs = "red"; $("#action").removeClass("email"); document.getElementById("emaila").innerHTML = "<span class=\""+classs+"\"><small>email doesn't exist</small></span>";}else{$("#action").addClass("email");
    document.getElementById("emaila").innerHTML = "<span class=\""+classs+"\"><small>email exists</small></span>";}
        }else{
            if(data.user.available == 1){classs = "green"; document.getElementById("emaila").innerHTML = "<span class=\""+classs+"\"><small>email is available</small></span>"; $("#action").addClass("email");}else{
    if(document.getElementById("email").value == user.email){document.getElementById("emaila").innerHTML = "<span class=\""+classs+"\"><small>your email</small></span>"; $("#action").addClass("email");}else{document.getElementById("emaila").innerHTML = "<span class=\"red\"><small>email exists, please choose another</small></span>"; $("#action").removeClass("email");}
            }
        }
    }
}
function checkUserS(data){ //console.log("user check");
    try {
            data = JSON.parse(data);
        } catch (err) {}
    if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {}   
        }
        if(data.user){}else{
           try {
            data = JSON.parse(data);
            } catch (err) {} 
        }
    var classs = "green";
        var elm;
        if($("#action").text() == "Log in"){
            elm = "emaila";
            if(data.user.available == 1){
                    classs = "red"; document.getElementById(elm).innerHTML = "<span class=\""+classs+"\"><small>user doesn't exist</small></span>"; $("#action").removeClass("email");
                                        }else{
                    document.getElementById(elm).innerHTML = "<span class=\""+classs+"\"><small>user exists</small></span>"; $("#action").addClass("email");
                                        }
        }else{
            elm = "usera";
            if(data.user.available == 1){
                classs = "green"; document.getElementById(elm).innerHTML = "<span class=\""+classs+"\"><small>username available</small></span>";
            }else{
                if(document.getElementById("username").value == user.username){document.getElementById(elm).innerHTML = "<span class=\""+classs+"\"><small>your username</small></span>";}else{document.getElementById(elm).innerHTML = "<span class=\"red\"><small>user exists, please choose another</small></span>";
            }}
        }
}
function ccheckEmail(data) {
    var email = data.value;
    var params = "email=" + email + "&key=email&ct=" + new Date().getTime();
            $.post(myURL + "/api/login.php", params, checkEmailS).error(function(e) {
                $.ui.popup("checkEmail: " + JSON.stringify(e));
            });
}

function ccheckUsername(data) {
    var username = data.value;
    var params = "username=" + username + "&key=usercheck&ct=" + new Date().getTime();
            $.post(myURL + "/api/login.php", params, checkUserS).error(function(e) {
                $.ui.popup("checkUsername: " + JSON.stringify(e));
            });
}

function checkPassword() {
    if (document.getElementById("password").value === document.getElementById("password2").value) {
        document.getElementById("passa2").innerHTML = "<span class=\"green\"><small>match</small></span>";
        $("#action").addClass("password");
    } else {
        document.getElementById("passa2").innerHTML = "<span class=\"red\"><small>not a match</small></span>";
        $("#action").removeClass("password");
    }
}


/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map

(function($){
		
		var rotateLeft = function(lValue, iShiftBits) {
			return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
		}
		
		var addUnsigned = function(lX, lY) {
			var lX4, lY4, lX8, lY8, lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
			if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			if (lX4 | lY4) {
				if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}
		
		var F = function(x, y, z) {
			return (x & y) | ((~ x) & z);
		}
		
		var G = function(x, y, z) {
			return (x & z) | (y & (~ z));
		}
		
		var H = function(x, y, z) {
			return (x ^ y ^ z);
		}
		
		var I = function(x, y, z) {
			return (y ^ (x | (~ z)));
		}
		
		var FF = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var GG = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var HH = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var II = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var convertToWordArray = function(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWordsTempOne = lMessageLength + 8;
			var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
			var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
			var lWordArray = Array(lNumberOfWords - 1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while (lByteCount < lMessageLength) {
				lWordCount = (lByteCount - (lByteCount % 4)) / 4;
				lBytePosition = (lByteCount % 4) * 8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
			lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
			lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
			return lWordArray;
		};
		
		var wordToHex = function(lValue) {
			var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
			for (lCount = 0; lCount <= 3; lCount++) {
				lByte = (lValue >>> (lCount * 8)) & 255;
				WordToHexValueTemp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
			}
			return WordToHexValue;
		};
		
		var uTF8Encode = function(string) {
			string = string.replace(/\x0d\x0a/g, "\x0a");
			var output = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					output += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					output += String.fromCharCode((c >> 6) | 192);
					output += String.fromCharCode((c & 63) | 128);
				} else {
					output += String.fromCharCode((c >> 12) | 224);
					output += String.fromCharCode(((c >> 6) & 63) | 128);
					output += String.fromCharCode((c & 63) | 128);
				}
			}
			return output;
		};
		
		$.extend({
			md5: function(string) {
				var x = Array();
				var k, AA, BB, CC, DD, a, b, c, d;
				var S11=7, S12=12, S13=17, S14=22;
				var S21=5, S22=9 , S23=14, S24=20;
				var S31=4, S32=11, S33=16, S34=23;
				var S41=6, S42=10, S43=15, S44=21;
				string = uTF8Encode(string);
				x = convertToWordArray(string);
				a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
				for (k = 0; k < x.length; k += 16) {
					AA = a; BB = b; CC = c; DD = d;
					a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
					d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
					c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
					b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
					a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
					d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
					c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
					b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
					a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
					d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
					c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
					b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
					a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
					d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
					c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
					b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
					a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
					d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
					c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
					b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
					a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
					d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
					c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
					b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
					a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
					d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
					c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
					b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
					a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
					d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
					c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
					b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
					a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
					d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
					c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
					b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
					a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
					d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
					c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
					b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
					a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
					d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
					c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
					b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
					a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
					d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
					c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
					b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
					a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
					d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
					c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
					b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
					a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
					d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
					c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
					b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
					a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
					d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
					c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
					b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
					a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
					d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
					c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
					b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
					a = addUnsigned(a, AA);
					b = addUnsigned(b, BB);
					c = addUnsigned(c, CC);
					d = addUnsigned(d, DD);
				}
				var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
				return tempValue.toLowerCase();
			}
		});
	})(jQuery);
    
    
function initializeStore() {

    // Let's set a pretty high verbosity level, so that we see a lot of stuff
    // in the console (reassuring us that something is happening).
    store.verbosity = store.DEBUG;

    // We register a dummy product. It's ok, it shouldn't
    // prevent the store "ready" event from firing.
    store.register({
        id:    "categoryartofbeing",
        alias: "Art of Being Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categorydoubleentendre",
        alias: "Double Entendre Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categoryonvacation",
        alias: "On Vacation Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categoryparenttime",
        alias: "Parent Time Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categorypopculture",
        alias: "Pop Culture Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "featuresearchscenarios",
        alias: "Search Scenarios",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categorysportingworld",
        alias: "Sporting World Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "featureuploadphotos",
        alias: "Upload Photos",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categorywildwilderness",
        alias: "Wild Wilderness Category",
        type:  store.NON_CONSUMABLE
    });
    store.register({
        id:    "categoryselfie",
        alias: "Selfie Category",
        type:  store.NON_CONSUMABLE
    });

    // When any product gets updated, refresh the HTML.
store.when("product").updated(function (product_item) {
   renderIAP(product_item);

});

 // When a package purchase is approved,
// display in the log and finish the transaction.
function fulfillIt(order){ //alert(JSON.stringify(order));
    var shortname;
    if(order.id.charAt(0) == "c"){
        shortname = order.id.slice(8);
        if(order.state == "approved"){
            localStorage[shortname+"Purchased"] = 1;
            document.getElementById(shortname+"_purch").innerHTML("owned");
            var incl = $("#"+shortname+"pid .inclnum").text();
            incl = incl.split("/");
            var inclu = incl[1]+"/"+incl[1];
            $("#"+shortname+"pid .inclnum").text(inclu);
            combineScenarios();
        }
    }else{
        shortname = order.id.slice(7);
        if(order.state == "approved"){
        localStorage[shortname+"Purchased"] = 1;
        }
    } 
    /*setTimeout(function(){
        $.ui.popup({
            suppressTitle: true, 
            cancelOnly: true, 
            block: 0, 
            cancelText:" ", 
            onShow: function(){
                $(".afPopup FOOTER").css("border-top", "0px solid #aaa"); 
                setTimeout(function(){
                    $("#action").trigger("click");
                }, 1000);}, 
            message:"<br>"+ shortname + " Purchased!"}
        );
    }, 500);*/
}
store.when("Art of Being Category").approved(function (order) {
    //console.log("You got Art of Being Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Double Entendre Category").approved(function (order) {
    //console.log("You got Double Entendre Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("On Vacation Category").approved(function (order) {
    //console.log("You got On Vacation Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Parent Time Category").approved(function (order) {
    //console.log("You got Parent Time Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Pop Culture Category").approved(function (order) {
    //console.log("You got Pop Culture Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Search Scenarios").approved(function (order) {
    //console.log("You got Search Scenarios!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Sporting World Category").approved(function (order) {
    //console.log("You got Sporting World Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Upload Photos").approved(function (order) {
    //console.log("You got Upload Photos!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Wild Wilderness Category").approved(function (order) {
    //console.log("You got Wild Wilderness Category!");
    fulfillIt(order);
    order.finish();
}); 

store.when("Selfie Category").approved(function (order) {
    //console.log("You got Selfie Category!");
    fulfillIt(order);
    order.finish();
}); 


    // When every goes as expected, it's time to celebrate!
    // The "ready" event should be welcomed with music and fireworks,
    // go ask your boss about it! (just in case)
    store.ready(function() {
        //console.log("\\o/ STORE READY \\o/");
    });

    // After we've done our setup, we tell the store to do
    // it's first refresh. Nothing will happen if we do not call store.refresh()
    store.refresh();
}


function renderIAP(product_item) {
    //console.log(product_item);
//alert(JSON.stringify(product_item));
    var shortname;
    if(product_item.id.charAt(0) == "c"){shortname = product_item.id.slice(8);}else{shortname = product_item.id.slice(7);}

    var element_Id = shortname; 

    var el = document.getElementById(element_Id + '_purch');
    if (!el) return; 

    if (!product_item.loaded) {
        el.innerHTML = '...';
    }
    else if (!product_item.valid) {
        el.innerHTML = product_item.alias + ' Invalid';
    }
    else if (product_item.valid) {
        //var html = "<h3>" + product_item.title + "</h3>";
        //if (product_item.title != product_item.description) {
        //    html += "<p>" + product_item.description + "</p>";
        //}
        if (product_item.canPurchase) { //"<a class=\"block button\" id=\"buy-" + product_item.id + "\" productid=\"" + product_item.id + "\">" + 
            document.getElementById(shortname+"pid").dataset.price = product_item.price;
            //el.dataset.pid = product_item.id;
            document.getElementById(shortname+"pid").dataset.pid = product_item.id;
            document.getElementById(shortname+"pid").dataset.owned = 0;
            el.innerHTML = product_item.price;
        }else 
            if(!product_item.canPurchase){
                el.innerHTML = "owned";
                document.getElementById(shortname+"pid").dataset.owned = 1;
            }
            
        /*if (product_item.canPurchase) {
            document.getElementById("buy-" + product_item.id).onclick = function (event) {
                var pid = this.getAttribute("productId");
                store.order(pid);
            };
        }*/
    }
}
function unableToPurchase(){
    setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){ setTimeout(function(){$("#action").trigger("click");}, 1000);}, message:"<center><br>Unable to Purchase<br>Please try again later.</center>"}); $(".afPopup FOOTER").css({"border-top": "0px solid #aaa", "background": "none"}); $(".afPopup DIV").css("border", "0px solid #aaa");}, 500);
}
 