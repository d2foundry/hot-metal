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

A weapon's stats can placed into two categories; its basic stats and its advanced stats. The basic stats are what are shown on the weapon info screen in the game. For most weapons they are as follows: Impact, Range, Stability, Handling, Reload Speed, Aim Assistance, Zoom, and Airborne Effectiveness. Some weapon types have stats that are unique to that type of weapon. The following are the unique stats for that given weapon type. Swords have the Charge Rate, Guard Resistance, Guard Efficiency, and Guard Endurance stats. Rocket Launchers and Grenade Launchers have the Blast Radius and Velocity stats. Combat Bows have Accuracy and Draw Time stats. Fusion and Linear Fusion Rifles have the Charge Time stat. Glaives have the Shield Duration stat.

A weapon's advanced stats aren't shown on the weapon info screen directly or are not made entirely clear what the number means in terms of gameplay. There are things such as the damage profile, flinch resist, and reserves. These advanced stats are the result of combining two or more of the basic stats to give you a tangible value to see in the game. The range stat alone doesn't determine when your damage fall off occurs. Range and zoom together are what define the weapon's falloff distance among other things.

This part of the document seeks to answer most questions about various stats, however, it should be noted that Destiny 2 is a very complex game. More in-depth explanations of these stats and scenarios will be expanded upon in their own document. 

### Basic

The basic stats are there to give you a rough idea of how a weapon feels and operates. They should only be compared with weapons of the same type as stats such as Impact are relative to the base Impact number of a weapon type. The aim of the basic stat section is to describe the stats in relation to other weapons of the same type as well as give small examples as to how they work in game.

#### Impact

Impact is the damage stat on most weapons. This number can be a little misleading, however, as it can only be used to reference damage within the same weapon type. E.g. the Hand Cannon Targeted Redaction has an Impact stat value of 92 and does 80 crit damage in the crucible. Compare that to the Combat Bow Tyranny of Heaven which has an Impact stat of 68 and does 137 crit damage in the crucible. For the most part, Impact values are the same across a given frame for a weapon type. It mainly comes into play with Fusion Rifles, including Linear Fusions, and Swords. Those weapon types can augment their Impact stat via certain perk selections.

If the weapon family is the same and the Impact value is higher then Impact translates to the difference between the two numbers as the difference in damage percentage. The Half Truths and Bequest are both arc, Adaptive Frame Swords. The Bequest has an Impact of 70 and the Half Truths has an Impact of 60. This translates to Bequest doing 10% more damage per swing than Half Truths. 

#### Range

The Range stat of a weapon seeks to show how far a weapon can do max damage before it starts to experience damage falloff. This stat alone is what defines the hip-fire range of a weapon's type. In order to find a weapon's ADS damage falloff you need to take the hip-fire falloff start distance in meters and multiply it by the weapon's Zoom divided by 10. Lastly, we take into account the weapon moving backwards when you ADS which reduces your Zoom value by .25. This can be interpreted by the following equation where $d_{A}$ is the ADS damage falloff distance in meters. In this example, Autumn Wind has a hip-fire damage falloff distance of 18.69m and its Zoom is 17

$$ d_A = 31.305m = 18.69 * {( 17 - 0.25) \over 10 } $$

With this calculation, Autumn Wind has an ADS damage falloff start distance of 31.305m. More details on this formula can be found in our [range explanation document](../calculations/range.md).

When it comes to Glaives, the Range stat affects its projectile speed in addition to its damage falloff distance. At 0 range its projectile travels at 60m/s and at 100 range it is 100m/s. 

#### Stability

The Stability stat of a weapon controls how it kicks as well as increasing your flinch resistance. A weapon with more Stability will visually kick less, and will also return closer to its original position when the gun settles back after firing. Stability does not however, make the weapon return to its "resting position" any faster. When it comes to how much flinch resistance the Stability stat grants, it differs per weapon type and will be defined in more detail in the [flinch resistance](#flinch-resistance) section.

#### Handling

The Handling stat of a weapon affects three distinct characteristics of a weapon. It affects how fast the weapon is readied, stowed, and aimed down the sights. It should be noted that some perks may only benefit one or two of those as well. For example, Quickdraw gives +100 handling for readying the weapon only. It should be noted that handling acts the same across weapons. A Scout Rifle with 50 handling will act the exact same as a Pulse Rifle with 50 handling.

#### Reload Speed

The Reload Speed stat of a weapon determines how fast a weapon will be able to be reloaded. A hidden stat can add an animation scalar to make the weapon reload faster as well. This way if a weapon is at 100 Reload Speed stat it can still reload faster. Perks like Feeding Frenzy and exotic armor like Speedloader Slacks will add this hidden scaler. We have a [write up](../calculations/reload.md) on how Reload Speed can be written as a piecewise-linear function instead of a quadratic function as well. 

#### Aim Assistance

The Aim Assistance stat is a very complex one that deserves its own write up in the future. Aim Assistance affects things such as the aim assist cone, reticle friction cone (controller only), and accuracy cone. The aim assist cone can be casually called "bullet magnetism". This is what causes you to say "that was a headshot?" when your reticle was slightly off of the head. Perks such as Opening Shot affect this cone. Reticle friction only applies to controller players. This is what slows down your aim as a target comes within the cone and what pulls your aim to stay on target while they move within the cone. Lastly, the accuracy cone is sometimes referred to as accuracy bloom. This cone adjusts as you continue to fire the weapon and blooms and bullets stray from the reticle. Perks such as Dynamic Sway Reduction adjust this cone. The length of these cones are tied to the hip-fire damage falloff start range, and if aiming down sights, the ADS damage falloff start range. This means that Zoom currently affects how far out Aim Assistance cones reach and provide their effects.

Until we write our own docs going into further details on Aim Assistance, we suggest taking a look at [this TWAB](https://www.bungie.net/en/News/Article/51319) where they go into some details on these cones in respect to Airborne Effectiveness (another complex stat).

#### Zoom

The Zoom stat on its own is rather one note. It determines the scalar used to adjust your FOV while ADS with a weapon. A weapon's Zoom is the stat divided by 10. With this in mind, a weapon with 15 Zoom stat will zoom in 1.5x. What makes this stat so important though is how it ties into other stats such as damage falloff ranges and [aim assistance](#aim-assistance) cones. 

#### Airborne Effectiveness

The Airborne Effectiveness (AE) stat determines how your weapon's Aim Assistance cones and precision angle cones adjust while you are airborne. As a broad statement, primary weapons have the highest AE stats at base. Exotics and certain legendary weapons have hand tuned AE stats that may be considered out of band. Shotguns have had their AE penalties removed entirely. There are certain perks, abilities, and exotics that can adjust this value as well as the Icarus Grip weapon mod which gives a flat +15 AE. The higher your AE stat is, the less of a penalty your aim assist cones will receive while airborne. 

### Advanced Stats

Advanced stats are not directly displayed in game most of the time and require a bit of research to understand them to their full potential. Many of the stats in this section can be quite the rabbit-hole to delve into, but they are nonetheless very important and we seek to lower the barrier of entry to understanding these stats. 

#### Flinch Resistance

Flinch resistance determines how much your aim moves while taking damage. Stability is one way to build into this stat. How much flinch resistance you gain by X Stability differs per weapon type. A broad rule is that primary weapon types gain the most flinch resistance while special and heavy weapons gain the least amount with a range of 10% to 25%. Flinch resistance is also affected by your Resilience tier as well. The amount gained is equal to the tier of Resilience you are. E.g. if you are T5 Resilience then you will gain 5% (.95x scalar) flinch resistance. The perk No Distractions gives 35% flinch resistance once active (.65x scalar). The unflinching armor mods give 25% flinch resistance with one and 30% with two mods. Lastly, the Rally Barricade gives 50% flinch resistance.

It should be noted that each source that affects flinch resistance does so as its own multiplicative scalar. So it is calculated as one minus all of the scalars multiplied together. 

## Perks, Mods, and Masterworks

## Effects

## Screenshot Mode

### Screenshot Mode Settings

## Share Menu

### Roll Permalink

### Exporting as DIM Wishlist

## Adding to Compare

See our [Compare](./compare.md#adding-a-weapon-roll-to-compare) documentation.
