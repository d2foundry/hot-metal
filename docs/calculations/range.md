---
description: Learn more about how we test and calculate weapon range
---

# Range

## Why does Foundry's range differ from Bungie's?

On occasion, Bungie provides us with concrete numbers for Damage Falloff Distance, and you may ask why we don't use those or why they dont line up with our numbers. 

When we test we get all our ranges from the camera (darci[rounds up], pikes[rounds down], ammo boxes[rounds down]), whereas **Bungie measures from the root of the gun model**. This can cause static offsets between our numbers and Bungie's numbers that make the slopes of our Range formulas correct but the start and end points to be different.

The weapon model root measurement issue also leads to slight discrepancies between expected vs measured ADS Damage Falloff Distance. We generalize for this with `$$\large D_{ads} = D_{hip} * { W_{zoom}  \over 10 - 0.025}$$` where `$$0.025$$` is the distance caused by the physical movement of the weapon backwards when you ADS.


<figure>
    <img src="https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/front_hip_mod.jpg" alt="Front POV Hip" />
    <figcaption>Hip-fire weapon position - Front POV</figcaption>
</figure>

<figure>
    <img src="https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/side_hip_mod.jpg" alt="Side POV Hip" />
    <figcaption>Hip-fire weapon position - Side POV</figcaption>
</figure>


<figure>
    <img src="https://raw.githubusercontent.com/oh-yes-0-fps/hot-metal/main/docs/faq/assets/side_ads_mod.jpg" alt="Side POV ADS" />
    <figcaption>ADS weapon position - Side POV</figcaption>
</figure>

