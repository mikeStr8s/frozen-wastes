---
ac: 14
hp: 17
level: 3
modifier: 2
---
# Aronious III

Once a paladin serving faithfully to the pantheon above. Now having discarded his vows he has taken to the frozen wilderness to find and aid Yin Shen.

## Stat Block

```character
{
  "name": "Aronious III",
  "size": "Medium",
  "type": "Humanoid",
  "subtype": "Human",
  "alignment": "Neutral Good",
  "level": 3,
  "ac": 14,
  "hp": 17,
  "hit_dice": "1d10",
  "speed": "30",
  "stats": [13, 15, 12, 6, 14, 12],
  "saves": ["STR", "DEX"],
  "proficiency": 2,
  "skillsaves": [],
  "expertise": [],
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "Passive Perception 16",
  "languages": ["Druidic", "Common", "Elvish", "Gnomish", "Celestial"],
  "spells": {
    "description": "As a level 2 Ranger, Aronious III has learned to use the magical essence of nature to cast spells; much as a druid does",
    "spell_list": [
        {
            "spell_level": 0,
            "spell_list": "control flames, thorn whip"
        },
        {
            "spell_level": 1,
            "spell_list": "speak with animals, jump, ensnaring strike, alarm, hail of thorns"
        }
  ]
  },
  "traits": [
    {
      "name": "Deft Explorer",
      "description": "You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit below when you reach 6th level and 10th level in this class.\n\n<strong>Canny</strong>\nAronious has Canny Insight. Your proficiency bonus is doubled for any Insight check you make."
    },
    {
      "name": "Favored Foe",
      "description": "When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell).\n\tThe first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by 1d4.\n\tYou can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n\tThis feature's extra damage increases when you reach certain levels in this class: to 1d6 at 6th level and to 1d8 at 14th level."
    },
    {
      "name": "Druidic Warrior",
      "description": "You learn two cantrips of your choice from the druid spell list. They count as ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a level in this class, you can replace one of these cantrips with another cantrip from the druid spell list."
    },
    {
	  "name": "Primal Awareness",
	  "description": "You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.\n<table><tbody><tr><td>3rd</td><td>speak with animals</td></tr><tr><td>5th</td><td>beast sense</td></tr><tr><td>9th</td><td>speak with plants</td></tr><tr><td>13th</td><td>locate creature</td></tr><tr><td>17th</td><td>commune with nature</td></tr></tbody></table>\nYou can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
    },
    {
	  "name": "Primal Companion",
	  "description": "You magically summon a primal beast, which draws strength from your bond with nature. Choose its stat block: Beast of the Land, Beast of the Sea, or Beast of the Sky. You also determine the kind of animal it is, choosing a kind appropriate for the stat block. Whatever beast you choose, it bears primal markings indicating its supernatural origin.\n\tThe beast is Friendly to you and your allies and obeys your commands. It vanishes if you die.\n\tThe Beast in Combat. In combat, the beast acts during your turn. It can move and use its Reaction on its own, but the only action it takes is the Dodge action unless you take a Bonus Action to command it to take an action in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Beast’s Strike action. If you have the Incapacitated condition, the beast acts on its own and isn’t limited to the Dodge action.\n\tRestoring or Replacing the Beast. If the beast has died within the last hour, you can take a Magic action to touch it and expend a spell slot. The beast returns to life after 1 minute with all its Hit Points restored.\n\tWhenever you finish a Long Rest, you can summon a different primal beast, which appears in an unoccupied space within 5 feet of you. You choose its stat block and appearance. If you already have a beast from this feature, the old one vanishes when the new one appears."
    }
  ],
  "actions": [
    {
      "name": "Shortbow",
      "description": "Ranged Weapon Attack: +5 to hit, range 80 ft./320 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
    },
    {
      "name": "Shortsword",
      "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
    }
  ],
  "bonusactions": [
    {
      "name": "Beast Strike (Land)",
      "description": "Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 2 plus your Wisdom modifier Bludgeoning, Piercing, or Slashing damage (your choice when you summon the beast).\n\nIf the beast moved at least 20 feet straight toward the target before the hit, the target takes an extra 1d6 damage of the same type, and the target has the Prone condition if it is a Large or smaller creature."
    },
    {
      "name": "Beast Strike (Sea)",
      "description": "Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d6 + 2 plus your Wisdom modifier Bludgeoning or Piercing damage (your choice when you summon the beast), and the target has the Grappled condition (escape DC equals your spell save DC)."
    },
    {
      "name": "Beast Strike (Sky)",
      "description": "Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d4 + 3 plus your Wisdom modifier Slashing damage."
    }
  ]
}
```
