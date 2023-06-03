---
description: Learn how to navigate and use our advanced weapon roll editor
---

# Roll Editor

🚧 These docs are still under construction! 🚧

You can contribute to them on [Github](https://github.com/d2foundry/hot-metal/tree/main/docs/features).

## Overview

With the Roll Editor screen, you can see any weapon's stats, what perks are currently available, and how mods, abilities, and exotic armor can affect your weapon. If you have ever wondered how opening shot or heating up affects your weapons stats, the Roll Editor seeks to clarify that for you in a clear and concise way. Then, once you have created the perfect roll for your weapon, you can share it with your friends and/or export it to a DIM wishlist.

### Navigating the Roll Editor

The Roll Editor screen is divided into six distinct sections. They are as follows: the weapon header, the toolbar, stats, perks (including masterwork and weapon mods), effects, and lastly, the weapon's metadata. 

In the weapon header on the left side you will find the inventory image of the weapon, its name, and what weapon type it is, e.g. "hand cannon". On the right side of the header, from left to right, you will find the [share button](#share-menu), [screenshot mode](#screenshot-mode), and the add to [compare](#adding-to-compare) functionality. 

The toolbar has three main sections within it. The first section contains a button to clear the weapon of all settings, bringing it to its base form, and a button to randomize a roll which in essence simulates a random drop you can get in game. The middle section contains the single select and multi select toggle. Single select will allow you to pick one perk in each column and these selections will affect the stats shown in that section. These perks are marked by being filled in blue. Multi select allows you to add additional perks for screenshot mode and these selections will not affect the stat screen. These perks are marked by a blue outline around the perk. The last main section is the PvP and PvE toggle. If PvE is selected, the Encounter picker becomes active and allows you to set the environment for the weapon. Lastly, if a weapon is craftable or by other means is capable of having enhanced perks on it, an enhance button will appear which will update your perks to their enhanced versions.

The [stats](#weapon-stats) accordion will have the [basic stats](#basic) of a given weapon expanded by default. There you will find the same stats as shown on a weapon inspect screen in game. Below there are expandable accordions with additional, more [advanced stats](#advanced-stats). These will give you details such as ADS speed, flinch resist, and damage falloff information.

The [perks](#perks-mods-and-masterworks) section will allow you to see what perks, masterworks, and mods are available for that weapon. Selecting any of these will adjust the values in the stats section accordingly. The perks shown are what can be currently rolled on that given weapon. Below the perks is where you can select your masterwork and below that is where weapon mods can be found. If the weapon is of "master-level" (Adept, Timelost, etc), then adept mods will also be able to be chosen. 

The [effects](#effects) section will allow you to toggle whether or not a certain perk is active and/or how many stacks are active, e.g. heating up x1 vs x2. You will then be able to select any exotic armor, armor mods, and add whatever buffs, debuffs, and abilities you want to apply to your stats. This takes into account things that do not stack as well, such as empowering rift and radiant and only counts the highest buff. 

The metadata for a weapon will show what damage type it is, is it a primary, secondary, or heavy, its archetype or exotic perk, and what loot source you can acquire it from. Additionally, the weapon will be pictured as well as its lore snippet written below. 

## Weapon Stats

A weapon's stats can placed into two categories; its basic stats and its advanced stats. The basic stats are what are shown on the weapon info screen in the game. For most weapons they are as follows: impact, range, stability, handling, reload speed, aim assistance, zoom, airborne effectivenes, rounds per minute, magazine size, and recoil direction. Some weapon types have stats that are unique to that type of weapon. The following are the unique stats for that given weapon type. Swords have the charge rate, guard resistance, guard effciency, and guard endurance stats. Rocket launchers and grendade launchers have the blast radius and velocity stats. Combat bows have accuracy and draw time stats. Fusion and linear fusion rifles have the charge time stat. Glaives have the shield duration stat.

A weapon's advanced stats aren't shown on the weapon info screen directly or are not made entirely clear what the number means in terms of gameplay. There are things such as the damage profile, time-to-kill (PvP only), defining what range and stability mean, flinch resist, and reserves. These advanced stats are the result of combining two or more of the basic stats to give you a tangible value to see in the game. The range stat alone doesn't determine when your damage fall off occurs. Range and zoom together are what define the weapon's falloff distance among other things.

This part of the document seeks to answer most questions about various stats, however, it should be noted that Destiny 2 is a very complex game. More in-depth explainations of these stats and scenarios will be expanded upon in their own document. 

### Basic

The basic stats are there to give you a rough idea of how a weapon feels and operates. They should only be compared across weapons of the same type as stats such as impact are relative to the base impact number of a weapon type. The aim of the basic stat section is to describe the stats in relation to other weapons of the same type. These nuances will be described in more detail in the advanced stats section. 

#### Impact

Impact is the damage stat on most weapons. This number can be a little misleading however as it can only be used to reference damage within the same weapon type. E.g. the hand cannon "Targeted Redaction" has an impact stat value of 92 and does 80 crit damage in the crucible. Compare that to the combat bow "Tyranny of Heaven" which has an impact stat of 68 and does 137 crit damage in the crucible. This will be expanded on further within the [damage profile](#damage-profile) section. For the most part impact values are the same across a given frame for a weapon type. E.g. most, if not all, legendary rapid fire snipers have 55 impact.

If the weapon family is the same and the impact value is higher then impact translates to the difference between the two numbers as the differnce in damage percentage. The "Half Truths" and "Bequest" are both arc, adapative frame swords. The "Bequest" has an impact of 70 and the "Half Truths" has an impact of 60. This translates to the "Bequest" doing 10% more damge per swing than the "Half Truths". 

#### Range

The range stat of a weapon seeks to show how far a weapon can shoot before it experiences to exhibit damage dropoff. This stat alone is what defines the hipfire range of a weapon's type. In order to find a weapon's ADS damage falloff you need to take the hipfire fall of distance in meters and multiply it by the weapon's zoon divided by ten. E.g. the "Autumn Wind" has a hipfire damage falloff of 18.69m and its zoom is 17. So if you multiply 18.69 * (17/10) you will get 31.773m. This is slightly different than the value that you will see listed on a weapon's page. Our exact formula accounts for the weapon moving backwards when you ADS, thus reducing the zoom value by .25. More details on this formula can be found in our [range explaination document](../calculations/range.md)

#### Stability



### Advanced Stats

## Perks, Mods, and Masterworks

## Effects

## Screenshot Mode

### Screenshot Mode Settings

## Share Menu

### Roll Permalink

### Exporting as DIM Wishlist

## Adding to Compare

See our [Compare](./compare.md#adding-a-weapon-roll-to-compare) documentation.
