const player_tips = {
    "generic": [
        "You can bribe the DM",
        "Ask for things, please",
        "Conflict among the party is acceptable. Conflict among the players is not. Don’t make things personal.",
        "If you are having trouble with an encounter, try reducing the enemies hitpoints to 0, while keeping yours above 0.",
        "Remember to check your inventory frequently.",
        "If you don't know what to do on your turn, dodge.",
        "No matter how high your Persuasion roll is, the King won't give up his kingdom after one conversation",
        "You also get xp and loot by NOT killing everything you meet",
        "Bards don't have to be horny",
        "If you don't know where to go, try asking the locals about recent goings-on!",
        "If combat is going badly, remember that most humanoids don't enjoy killing and might accept your surrender",
        "Remember, there are no bad ideas, only unwanted consequences.",
        "Difficulty in negotiating? Have you tried not being a dick?",
        "Originality is overrated. Just have fun.",
        "As a reminder, war crimes are still bad.",

        "No matter how much fun you're having, remember that you're not the only person at the table",
        "Don't be afraid of a retreat if combat isn't going well. It may seem cowardly, but cowardice is usually preferable to death",
        "This game is tabletop, and your DM's responses aren't programmed. Think outside the box!",
        "According to monster opticians, a beholder's eyesight is 20:20:20:20:20:20:20:20:20:20:14",
        "If the campaign is getting too serious for you, recall that DMs often struggle to keep things serious at taverns",
        "In D&D, the options are limitless and the consequences are mandatory",
        "Be cautious and intelligent, and think things through. D&D does not let you restore from save files",
        "Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes. Take Notes.",
        "It is entirely valid to take a potion orally or as a suppository",
        "You can make encounters easier by being more careful, communicating with your party, and bribing the DM",
        "No, please. Roll to seduce an NPC. Your DM is just super excited to roleplay that.",
        "Contrary to popular belief, for many things in a dungeon, you probably would want to touch it with a ten foot pole first",
        "Worried you'll get easily murdered? Take the Dodge action and you'll be a lot harder to hit",
        "The DM's role is to play with the players, not against them. As far as you know, anyway",
        "Try to use your social skills often. Violence isn't always the answer, and maybe that monster can be reasoned with",
        "Never split the party. NEVER SPLIT THE PARTY.",
        "Keep track of your buffs, bonuses, abilities, and penalties. Your DM can't remember everything",

        "If it's your first time playing D&D and you like the simple things or you're gonna be on your phone all night, play fighter",
        "Play ranger to feel the thrill of the hunt, the wind in your hair, and a ferret crawling around in your tunic",
        "If you play warlock, you have a lot of combat options, like eldritch blast,  eldritch blast and even eldritch blast!",
        "Spells rock, but books are for nerds. Play sorcerer to flex your magic and shun silly things like \"reading\"",
        "Is your party dull? Are you not flirting with enough NPCs? Does your DM feel happy? Consider playing a bard",
        "Play a cleric if you like worshipping fake gods and being under immense pressure to save the rest of your party",
        "Playing monk is a great experience! Just get all the kung fu movie jokes out of your system before the game",
        "I'd give you a good reason to play a rogue, but let's be honest, your party probably already has 3",
        "Paladins: They're just like clerics, but with fewer commitment issues and more sharp objects to stab things with",
        "When you play a druid, you can transform into a T-Rex. What more could you possibly want?!",
        "Play a wizard if you want a character who likes writing things down and doing math just as much as you",

        "If your Chaotic Neutral character decides to murder random people, you're not playing a Neutral character",
        "Lawful Good doesn't mean Lawful Nice, and Chaotic Neutral doesn't mean Chaotic Stupid",
        "Unaligned creatures don't comprehend the alignment concept. Players cannot be unaligned unless they're very dense.",
        "Evil characters put themselves above others and will eat the last slice of pizza without asking anyone first",
        "Good characters put others above themselves and will always pay back that money you lent them",
        "Neutral characters have no particular sway toward a given axis and often list mayonnaise as their favourite condiment",
        "Lawful characters obey a set of rules and always look both ways before crossing the street",

        "You can start a new save file in D&D by striking your DM on the head with a heavy object",
        "You can take a screenshot in D&D by touching your d20, your character sheet, and a pencil at the same time",
        "You can open the options menu in D&D by writing a question on a sheet of paper and discreetly passing it to your DM",

        "Arcana checks relate to your knowledge of magic, eldritch information, mystic tradition, and other nerd crap",
        "Necromancy manipulates life and death energies. You can't cast these spells unless 60% of your wardrobe is black",
        "With Conjuration magic, you can take the D&D tradition of making things up to its logical extreme",
        "Evocation manipulates magical energy to produce a desired effect. All spells are secretly Evocation spells, in disguise.",
        "You can use Divination magic to absolutely destroy any hopes your DM had of creating mystery and intrigue",
        "Abjuration is the school of protective magic, perfect for people who claimed to have a force field in schoolyard games",
        "Illusion magic deceives the minds of others, which is totally different from Enchantment, and way cooler",
        "Alter the properties of objects with Transmutation and learn the joy of turning everything into a goat",
        "Enchantment magic affects the minds of others. If you terrify the rogue with a sudden fireball, it's technically Enchantment",

        "Sleight of Hand checks are great for stealing things. Do them all the time! There's nothing annoying about them!",
        "Intimidation checks are what you use when Persuasion and Deception didn't work and you're starting to get pissed off",
        "Throw out a Deception check if you need to fool someone! Please do this instead of actually lying to your DM",
        "An Acrobatics check may be used if you need delicate finesse of motion - or if you really, really want to show off",
        "Performance checks will finally give you the chance to turn your game into a full-on musical",
        "Animal Handling checks! They're good for seeing if you can mount that random creature and... not much else, honestly",
        "Do you want to play a deductive, clever hero, but you're limited by your feeble human mind? Roll Investigation checks",
        "Use a persuasion check to win people over, make friends, or haggle! Only complete chumps pay full price",
        "Medicine checks will let you diagnose an illness or stabilize someone. They cannot heal people. Please stop asking.",
        "Religion checks will let you recall lore about different faiths, but it won't erase the feeling of sin in your heart",
        "Nature checks are nice for knowing stuff about the wild, but you'll need survival if you want it not to kill you",
        "A History check will let you recall lore and finally make you feel cool about passing that test on the Civil War",
        "Suspicious of that NPC's intent? Roll an Insight check and become even more suspicious!",
        "Use Perception checks often to see what's going on. Or, you know, you can just be oblivious. Up to you.",
        "Athletics checks determine how well you can perform physical activities, like climbing or running touchdowns",
        "Stealth checks can let you hide behind something in the area. How stupid would it be if you could just crouch slightly?",

        "Your Charisma score measures your ability to sell a tomato-based fruit salad - which is, of course, salsa",
        "Your Intelligence score measures how likely you are to know that a tomato is a fruit",
        "Your Wisdom score measures how likely you are to know that a tomato shouldn't be in a fruit salad",
        "Your Strength score measures how easily you could crush a tomato with your bare hands",
        "Your Constitution score measures whether you could eat a rotten tomato without puking",
        "Your Dexterity score measures how well you could dodge a tomato being thrown at you",
    ],
    "gameplay": [
        "Did you know that classes and subclasses will often grant unique and special features that you can actually use?",

        "Most spells that target objects or creatures require the object or creature to be visible",
        "Critical success only applies to attack rolls",

        "If you want to know more about the land or the plants and beasts that live upon it, try a nature check",
        "If you are vulnerable to a damage type, you take double damage from that type",
        "If you are resistant to a damage type, you take half damage from that type",
        "On high jumps, you cover a number of feet up to 3 + your Strength modifier if you have a 10 foot running start",
        "High jumps without a running start only cover a number of feet up to half of your Strength modifier",
        "On long jumps, you cover a number of feet up to your Strength score if you have a 10 foot running start",
        "Long jumps without a running start only cover a number of feet up to half of your Strength score",
        "Unless it avoids taking damage from a fall, a creature lands prone at the end of that fall",
        "At the end of a fall, a creature takes 1d6 bludgeoning damage for every 10 foot it fell, to a maximum of 20d6",
        "Multiple instances of vulnerability or resistance only count once each",
        "You can't hide from a creature that can see you clearly, and you give away your position if you make a noise",
        "Until you are discovered or stop hiding, your Stealth check is contested by Perception checks of anyone actively searching",
        "You can break up your movement on your turn, using some of your speed before and after your action",
        "You can squeeze through a space if it's large enough for a creature one size smaller than you",
        "When squeezing through a space, you have disadvantage on attack rolls and Dexterity saving throws",
        "When squeezing, climbing, swimming, crawling, or being on rough terrain, each foot of movement costs an extra foot",
        "If you don't want an enemy to make an opportunity attack against you as you move away, take the Disengage action",
        "When dodging, any attack roll made against you has disadvantage if you can see the attacker",
        "While dodging, you have advantage on Dexterity saving throws",
        "With ability checks, rolling a 1 or 20 does not automatically determine success or failure",

        "Some spells require concentration to maintain an ongoing effect, and you can't concentrate on two spells at once",
        "To keep concentration, roll a Constitution save if you take damage. The DC is 10 or half the damage, whichever is higher",
        "The effects of different spells add together while the durations of those spells overlap",
        "Some spells can be cast as a ritual. Doing so takes 10 minutes longer but doesn't expend a spell slot.",
        "If you're wearing armour, you need to be proficient in that armour in order to cast spells",

        "A creature with darkvision can't discern color in darkness, only monochromatic shades",
        "A creature with blindsight can perceive its surroundings without sight, kinda like Daredevil",

        "A party travelling at a normal pace goes 300 feet in a minute, 3 miles in an hour, and 24 miles in a day",
        "A party travelling at a fast pace goes 400 feet in a minute, 4 miles in an hour, and 30 miles in a day",
        "A party travelling at a fast pace will suffer a -5 penalty to passive Perception scores",
        "A party travelling at a slow pace goes 200 feet in a minute, 2 miles in an hour, and 18 miles in a day",
        "A party travelling at a slow pace can use Stealth as they move",

        "Your carrying capacity is, in pounds, your Strength score multiplied by 15",
        "If you carry weight in excess of 5 times your Strength score, you are encumbered, which means your speed drops by 10 feet",
        "If you carry weight in excess of 10 times your Strength score, you are heavily encumbered, which means your speed drops by 20 feet",
        "While pushing or dragging weight in excess of your carrying capacity, your speed drops to 5 feet",
        "You can push, drag, or lift a weight in pounds up to 30 times your your Strength score",
        "While you are heavily encumbered, you have disadvantage on all rolls that use Strength, Dexterity, or Constitution",

        "A target with half cover has a +2 bonus to AC and Dexterity saving throws",
        "A target with three-quarters cover has a +5 bonus to AC and Dexterity saving throws",
        "A target with total cover can't be targeted directly by an attack or a spell, though area of effect spells are fair game",

        "When you reduce a creature to 0 hit points with a melee attack, you can decide to knock it out instead of killing it",
        "When damage reduces you to 0 hit points, you die if the extra damage equals or exceeds your hit point maximum",
        "At 0 hit points, you start making death saving throws, which have no bonuses you can add",
        "You can stabalize a dying creature with a successful DC 10 Medicine check",
        "If your stable, but not healed, you regain 1 hit point after 1d4 hours",
        "If you're at 0 hit points, temporary hit points won't wake you up. Only real healing can do the job.",
        "After three successful death saving throws, you become stable. You're not dead, just unconscious.",
        "If you roll a 1 on a death saving throw, it counts as two failures",
        "If you roll a 10 or higher on a death saving throw, it counts as a success",
        "If you roll a 20 on a death saving throw, you regain 1 hit point",
        "After three failed death saving throws, your character is dead",

        "You are proficient in your unarmed strikes, and they deal bludgeoning damage equal to 1 + your Strength modifier",
        "You can use an unarmed strike to make a melee attack without a weapon",
        "If you roll a 20 on an attack roll, you automatically hit and roll all of the damage dice twice before adding modifiers",
        "If you roll a 1 on an attack roll, you automatically miss your attack",
        "To make a melee attack against a creature, it must be within your reach",
        "Ranged attacks have disadvantage if the target is beyond regular range but still within long range",
        "Your ranged attack rolls have disadvantage if an enemy that isn't incapacitated is within 5 feet of you and can see you",
        "Using the attack action, you can make a melee attack to shove a creature, either to knock it prone or push it away",
        "Using the attack action, you can make a melee attack to grapple a creature if you have one free hand",
        "When two-weapon fighting, only add your modifier to the damage of the second attack if it's negative",
        "You can use a bonus action to attack with a light melee weapon after attacking with one in your other hand",
        "You can use your reaction to make an opportunity attack when a creature that you can see moves out of your reach",
        "Take the Help action to give an ally advantage on their next ability check, or maybe even their next attack roll!",
        "The ready action will let you act using your reaction before your next turn",
        "To ready an action, you must specify both a triggering circumstance and what you will do when it happens",

        "Long rests reduce your exhaustion level by 1, provided that you had some food and drink",
        "Long rests restore all expended spell slots, although a few class options can get some back with a short rest",
        "During long rests, you can recover all lost hit points and up to half of your total hit dice",
        "A long rest is at least 8 hours during which you do nothing strenuous",
        "A short rest is at least 1 hour during which you do nothing strenuous",
        "During short rests, you can recover hit points by rolling your hit dice, adding your Constitution modifier each time",
        "You can use time between adventures to tend to poisons, injuries, and diseases",
        "You can use time between adventures to learn a new language or how to use a new set of tools",
        "After combat, you can recover half of your expended ammunition by taking the Search action",

        "At the first level of exhaustion, you have disadvantage on ability checks",
        "At the second level of exhaustion, in addition to prior effects, your speed is halved",
        "At the third level of exhaustion, in addition to prior effects, you have disadvantage on attack rolls and saving throws",
        "At the fourth level of exhaustion, in addition to prior effects, your hit point maximum is halved",
        "At the fifth level of exhaustion, in addition to prior effects, your speed is reduced to 0",
        "At the sixth level of exhaustion, you no longer suffer prior effects! You do, however, die immediately",

        "Once during your turn, you can mount a creature within 5 feet or dismount. Doing so costs half your movement speed.",
        "If you are knocked off your mount, you land prone in a space within 5 feet of it",
        "If your mount is knocked prone, you can use your reaction to dismount as it falls and land on your feet",
        "If an effect moves your mount against its will while you're on it, you must make a DC 10 dexterity saving throw or fall off",
        "If an effect knocks you prone while you're mounted, you must make a DC 1- Dexterity saving throw or fall off",
        "While mounted, you can either control your mount if it's been trained to accept a rider or have it act independently",
        "Intelligent creatures, like dragons, sphinxes, and especially smart horses, act independently when used as a mount",
        "Independent mounts maintain their own initiative order. They move and act as they wish, not restricted by their riders.",
        "Controlled mounts match your initiative order when you mount them and can move and act as soon as you mount them",
        "Controlled mounts can only take three actions: Dash, Disengage, and Dodge",
        "Any willing creature that is at least one size larger than you and that has an appropriate anatomy can be your mount",
        "If your mount provokes an attack of opportunity while you're on it, the attacker can target either you or the mount",

        "Underwater, your melee weapon attacks have disadvantage - unless you have a swimming speed or the right weapon",
        "Underwater, ranged weapons automatically miss outside of their normal range",
        "Underwater, ranged weapons have disadvantage, unless the weapon is a crossbow, a net, or a thrown weapon",
        "Underwater, daggers, javelins, shortswords, spears and tridents do not automatically have disadvantage",
        "Creatures and objects that are fully immersed in water have resistance to fire damage",
        "A creature can hold its breath for a number of minutes equal to 1 + its Constitution modifier (minimum of 30 seconds)",
        "A suffocating creature can't regain hit points or be stabilized until it can breathe again",

        "A weapon with the Two-Handed property requires two hands when you attack with it",
        "A weapon with the Light property can be used with two-weapon fighting",
        "A weapon with the versatile property can be used with one hand, but if you want more damage, you can use two hands",
        "A weapon with the Thrown property can be thrown as a ranged attack, using the same modifier as its melee attack",
        "A weapon with the Finesse property can be used with either your Dexterity or Strength modifier",
        "A weapon with the Loading property can only be fired once when you use an action, bonus action, or reaction",
        "A weapon with the Heavy property will impose disadvantage on Small creatures attempting to use it",
        "Weapons with the Ammunition property need some kind of ammo to be used, and each attack expends one piece of ammo",
        "A weapon with the Reach property adds 5 feet to your reach for the purposes of attacks and opportunity attacks with it",

        "A blinded creature can't see and automatically fails all checks that require sight",
        "An attack roll that hits an unconscious creature is a crit if the attacker is within 5 feet of the creature",
        "To push a target, it must be no more than one size larger than you and must be within your reach",
        "To push a target, you make an Athletics check contested by the target's Athletics or Acrobatics check",
        "To grapple a target, it must be no more than one size larger than you and must be within reach",
        "To grapple a target, you make an Athletics check contested by the target's Athletics or Acrobatics check",
        "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed",
        "A grappled creature can use its action to escape, making an Athletics or Acrobatics check",
        "The grappled condition ends if the grappler is incapacitated or an effect moves the grappled creature out of reach",
        "Unless the creature you are grappling is much smaller than you, your speed is halved while dragging or carrying it",
        "A paralyzed creature, in addition to being incapacitated, can't move or speak",
        "A paralyzed creature fails Strength and Dexterity saving throws",
        "Attack rolls against a paralyzed creature have advantage, and attacks that hit are a crit if the attacker is within 5 feet",
        "A stable creature is no longer stable and must start making death saving throws again if they take damage",
        "A charmed creature cannot target their charmer with attack rolls or any harmful abilities or magic",
        "The charmer has advantage on any ability check used to interact socially with their charmed creature",
        "A frightened creature has disadvantage on ability checks and attack rolls if the source of its fear within line of sight",
        "A frightened creature can't willingly move closer to the source of its fear",
        "A prone creature has disadvantage on all of its attack rolls until it stands up and ends the condition",
        "An attack role against a prone creature has advantage if the attacker is within 5 feet - otherwise, it has disadvantage",
        "A petrified creature is immune to poison and disease. Petrification only suspends existing poison or disease effects.",
        "A petrified creature is ten times heavier and does not age while petrified",
        "A petrified creature fails Strength and Dexterity saving throws",
        "A petrified creature, in addition to being incapacitated, can't move or speak, and is unaware of its surroundings",
        "Attack rolls against a petrified creature have advantage, though the creature has resistance to all damage",
        "An unconscious creature fails Strength and Dexterity saving throws, and attack rolls against it have advantage",
        "An unconscious creature, in addition to being incapacitated, can't move or speak and is unaware of its surroundings",
        "A stunned creature, in addition to being incapacitated, can't move and can speak only falteringly",
        "A stunned creature fails Strength and Dexterity saving throws, and attack rolls against it have advantage",
        "An incapacitated creature can't take actions or reactions. This often happens in conjunction with other conditions.",
        "A blinded creature's attack rolls have disadvantage, and attack rolls against them have advantage",
        "A deafened creature can't hear and automatically fails any ability check that requires hearing",
        "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed",
        "A restrained creature has disadvantage on Dexterity and saving throws",
        "Attack rolls against a restrained creature have advantage, and the creature's attack rolls have disadvantage",
        "When a creature becomes unconscious, it drops whatever it is holding and falls prone",
        "A poisoned creature has disadvantage on attack rolls and ability checks",
        "A prone creature's only movement options are crawling or using half their movement speed to stand up",
        "Attack rolls against an invisible creature have disadvantage, and its attack rolls have advantage",
        "An invisible creature is impossible to see without the aid of magic or a special sense",
        "You have advantage on attacks against creatures that cannot see you",
        "You have disadvantage on attacks against creatures that you cannot see",
    ]
}