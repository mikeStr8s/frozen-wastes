# Hobbins

A Ferret Wizard who called the frozen north home. Constantly battling against the curiosity she felt looking out at the world from her little shop. Enough was enough, she saw the sky turn dark and a star fall from the heavens. It's time she finally went out there and lived a little.

## Stat Block

```character
{
  "name": "Hobbins",
  "size": "Tiny",
  "type": "Beast",
  "subtype": "Awakened Ferret",
  "alignment": "Chaotic Good",
  "level": 2,
  "ac": 10,
  "hp": 8,
  "hit_dice": "1d6",
  "speed": "30",
  "stats": [9, 11, 9, 17, 16, 11],
  "saves": ["INT", "WIS"],
  "proficiency": 2,
  "skillsaves": ["History", "Insight", "Pursuasion", "Stealth"],
  "expertise": ["Arcana"],
  "senses": "Passive Perception 13, Passive Investigation 13, Passive Insight 15",
  "languages": ["Common", "Common Sign Language", "Dwarvish"],
  "spells": {
    "description": "As a level 2 Wizard, Hobbins has studied hard to cultivate her budding mastery of the arcane.",
    "spell_list": [
        {
            "spell_level": 0,
            "spell_list": "fire bolt, mending, minor illusion, poison spray, shocking grasp"
        },
        {
            "spell_level": 1,
            "spell_list": "charm person, comprehend languages, disguise self, ice knife, magic missile, thunderwave"
        }
  ]
  },
  "traits": [
    {
      "name": "Arcane Recovery",
      "description": "You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level (round up), and none of the slots can be level 6 or higher.\nYou can use this feature once per Long Rest."
    },
    {
      "name": "Scholar",
      "description": "Hobbins is an expert at Arcana"
    },
    {
      "name": "Ritual Adept",
      "description": "You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn’t have the spell prepared, but you must read from the book to cast a spell in this way."
    }
  ],
  "actions": [
    {
      "name": "Crossbow, Light",
      "description": "Ranged Weapon Attack: +2 to hit, range 80 ft./320 ft., one target. Hit: 4 (1d8) piercing damage."
    }
  ]
}
```
