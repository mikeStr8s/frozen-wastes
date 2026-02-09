# Polard Hinscrop

_Gnome, Instrument Merchant_

A small, if enigmatic, gnome merchant located in [Easthaven](../atlas/Easthaven.md). He own multiple music shops and is struggling to make either succeed. Has a sort of apprentice relationship with [Hobbins](../characters/Hobbins.md) who gave him good business advice and is taking it to heart.

see [Music Shop Conspiracy](../organizations/Music%20Shop%20Conspiracy.md) for further reading

He has merged his music shops and after a conversation with [Aronious](Aronious.md) he is set to join the party as an adventurer alongside them.

## Stats

```character
{
  "name": "Polard Hinscrop",
  "size": "small",
  "type": "Humanoid",
  "subtype": "Gnome",
  "alignment": "Neutral Good",
  "level": 3,
  "ac": "15 (chain shirt)",
  "hp": 17,
  "hit_dice": "1d10",
  "speed": "30",
  "stats": [15, 14, 14, 12, 10, 9],
  "saves": ["STR"],
  "proficiency": 2,
  "skillsaves": ["Acrobatics", "Animal Handling", "Investigation", "Perception", "Stealth"],
  "expertise": [],
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "Darkvision 60ft., Passive Perception 12",
  "languages": ["Common", "Gnomish"],
  "spells": {
    "description": "Gnomes have supernatural abilities from their lineage.",
    "spell_list": [
        {
            "spell_level": 0,
            "spell_list": "mending, prestidigitation"
        }
  ]
  },
  "traits": [
    {
      "name": "Gnome Cunning",
      "description": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws."
    },
    {
      "name": "Martial Role",
      "description": "Defender: The sidekick can use its reaction to impose disadvantage on the attack roll of a creature within 5 feet of it whose target isn't the sidekick, provided the sidekick can see the attacker."
    },
    {
      "name": "Second Wind",
      "description": "The sidekick can use a bonus action on its turn to regain hit points equal to 1d10 + its level in this class. Once it uses this feature, it must finish a short rest before it can use it again. This feature can be used twice at 20th level."
    },
    {
      "name": "Improved Critical",
      "description": "The sidekick's attack rolls score a critical hit on a roll of 19 or 12 on the d20."
    }
  ],
  "actions": [
    {
      "name": "War Pick",
      "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
    },
    {
      "name": "Poisoned Dart",
      "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
    }
  ]
}
```