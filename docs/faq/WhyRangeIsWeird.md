---
description: Why foundry ranges differ from bungies
---

# Why does Foundry's range differ from Bungie's?

On occasion, Bungie provides us with "concrete" range numbers, and you may ask why we don't use those or why they dont line up with our numbers. When we test we get all our ranges from the camera(darci[rounds up], pikes[rounds down], ammo boxes[rounds down]), whereas **Bungie measures from the root of the gun model**. This can cause static offsets between our numbers and Bungie's numbers that make the slopes of our range formulas correct but the start and end points to be different.

The gun model root measurement issue also leads to slight changes in what ads range should be vs what it really is but they are so minute we generalize them by ads = hip * (zoom/10 -0.025) where the 0.025 is the physical movement of the gun back when you ads.

These images will help visualize the difference between the two methods. <br>
![Front POV Hip](https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/front_hip_mod.jpg)
![Side POV ADS](https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/side_ads_mod.jpg)
![Side POV Hip](https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/side_hip_mod.jpg)
