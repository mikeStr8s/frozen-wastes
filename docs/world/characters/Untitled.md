```statblock
name: string  
size: string  
type: string  
subtype: string  
alignment: string  
ac: 1  
hp: 1  
hit_dice: 1d4  
speed: string  
stats: [1, 1, 1, 1, 1, 1]  
saves:  
- Charisma: 1  
skillsaves:  
- Deception: 1  
damage_vulnerabilities: string  
damage_resistances: string  
damage_immunities: string  
condition_immunities: string  
senses: string  
languages: string  
cr: 1  
spells:  
- 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). Can cast disguise self and invisibility at will and has the following wizard spells prepared
- Cantrips (at will): shocking grasp
- 1st level (4 slots): mage armor*
- "*Casts these spells on itself before combat"
traits:  
- name: "Amphibious"
  desc: "Can breathe air and water"
actions:  
- name: Bite
  desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
legendary_actions:  
- name: "Detect"
  desc: "Make a Wisdom (Perception) check."
reactions:  
- name: "Acidify"
  desc: "When attacked subtract 19 (2d10 + 8) from incoming damage"
```