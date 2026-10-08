---
ac: 14
hp: 45
level: 7
modifier: 3
---
# Yin Shen

A former celestial trickster spirit, cast down and held in the frozen north of Icewind Dale.

Yin Shen was once a lesser divine being, born to a minor god of order and law and raised in devotion to **Tyr**. Yet where others in that stern heavenly line carried judgment and discipline, Yin Shen became something stranger: a patron of tricks, pranks, and joyous laughter. Children whispered her name before mischief, trusting that a well-placed jest and a quick hiding place might earn her blessing.

Her fall came not through malice, but through folly. In the course of a prank aimed at her own sister, another servant of Tyr, Yin Shen gave her favor to a reveler at a festival, hoping only to stir the night into merriment. Instead, the celebration ended in flame, with mortals injured and sacred offerings lost before they could reach the heavens. Her sister carried word of the disaster to Tyr, and judgment was swift. Before Yin Shen could plead her case, she was cast from the celestial realms and sent hurtling down to the mortal world.

## The Prayer in the Alley

On the night the Chardalyn Dragon came for [Easthaven](../atlas/Easthaven.md), Yin Shen found an alley with no one in it and spoke to her sister — the one who had brought about her exile — for the first time since the fall.

> "I know I fucked up in the past. I don't ask much from you, but please, if you can, help these people out."

Snow began to fall. In a frozen puddle the face looking back at her was golden and pale and not her own, there for a moment and then gone, and the sigil of **Tyr** melted itself into the ice.

No weapon came. No spell. But she had been heard, and she walked out of that alley carrying something she had not carried in. She was not the only one to see it: elsewhere in the town, [Aronious](Aronious.md) and [Hobbins](Hobbins.md) each caught a glimpse of a figure who looked a great deal like her — one in a shiny rock at the front of the militia, one as a shape among the stars.

She offered a prayer of thanks to her sister when the dragon was dead.

## Deeds

- Claimed [Sephek Kaltro](Sephek%20Kaltro.md)'s reforged dagger, which burned cold in her palm but did not harm her.
- Melted her way out of the Caer's cistern with kitsune fire and freed five prisoners with her.
- Bargained twenty gold out of [Randy Grailden](Randy%20Grailden.md) for the map to the black spire.
- Caught all four falling phials of a potion chest in mid-air, one-handed, at an uncomfortable angle.
- Shaved, cropped, and re-dyed [Dzaan](Dzaan.md) into "Gustavo" so he could walk into Easthaven without burning twice.
- Held the rope at the burning goblin stronghold until every one of her companions was down it.
- Pinned the Chardalyn Dragon's head by driving her shortsword into a vent in its neck.
- Sold the Sunblight treasure to an Easthaven jeweler without telling anyone, and has still not said what the total was.

## Stat Block

```character
{
  "name": "Yin Shen",
  "size": "Medium",
  "type": "Humanoid",
  "subtype": "Kitsune",
  "alignment": "Chaotic Good",
  "level": 7,
  "ac": 14,
  "hp": 45,
  "hit_dice": "7d8",
  "speed": "30 ft.",
  "stats": [7, 16, 12, 18, 12, 12],
  "saves": ["DEX", "INT"],
  "proficiency": 3,
  "skillsaves": ["Arcana", "Deception", "Insight", "Persuasion"],
  "expertise": ["Acrobatics", "Investigation", "Sleight of Hand", "Stealth"],
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "Darkvision 60 ft., Passive Perception 11, Passive Investigation 20",
  "languages": ["Common", "Celestial", "Common Sign Language", "Elvish", "Thieves' Cant"],
  "spells": {
    "description": "Rogue 7 (Arcane Trickster). Spells are cast with Intelligence — save DC 15, +7 to hit.",
    "spell_list": [
        {
            "spell_level": 0,
            "spell_list": "minor illusion, toll the dead, fire bolt, mage hand"
        },
        {
            "spell_level": 1,
            "spell_list": "witch bolt, find familiar, disguise self, inflict wounds"
        },
        {
            "spell_level": 2,
            "spell_list": "aganazzar's scorcher, alter self, invisibility"
        }
  ]
  },
  "traits": [
    {
      "name": "Sneak Attack",
      "description": "Once per turn Yin Shen deals an extra 4d6 damage to one creature she hits with an attack if she has Advantage on the roll and the attack uses a Finesse or Ranged weapon. She doesn't need Advantage if another ally is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and she doesn't have Disadvantage on the roll."
    },
    {
      "name": "Expertise",
      "description": "Yin Shen's proficiency bonus is doubled for Acrobatics, Investigation, Sleight of Hand, and Stealth."
    },
    {
      "name": "Mage Hand Legerdemain",
      "description": "Yin Shen can cast <em>mage hand</em> as a Bonus Action and make the hand Invisible. She can control it as a Bonus Action, and through it can make Dexterity (Sleight of Hand) checks."
    },
    {
      "name": "Cunning Strike",
      "description": "When dealing Sneak Attack damage, Yin Shen can forgo dice to add an effect: <strong>Poison</strong> (1d6, DC 14 Con save or Poisoned 1 minute, requires a Poisoner's Kit), <strong>Trip</strong> (1d6, DC 14 Dex save or Prone, Large or smaller), or <strong>Withdraw</strong> (1d6, move up to half her Speed without provoking Opportunity Attacks)."
    },
    {
      "name": "Steady Aim",
      "description": "As a Bonus Action, Yin Shen gives herself Advantage on her next attack roll this turn, provided she hasn't moved. Her Speed is 0 until the end of the turn."
    },
    {
      "name": "Uncanny Dodge",
      "description": "When an attacker she can see hits her with an attack, Yin Shen can take a Reaction to halve the attack's damage against her."
    },
    {
      "name": "Evasion",
      "description": "When subjected to an effect that allows a Dexterity save for half damage, Yin Shen instead takes no damage on a success and only half on a failure. Unavailable while she has the Incapacitated condition."
    },
    {
      "name": "Reliable Talent",
      "description": "Whenever Yin Shen makes an ability check using one of her skill or tool proficiencies, she treats a d20 roll of 9 or lower as a 10."
    },
    {
      "name": "Lupine's Boon",
      "description": "A blessing of frozen breath laid on her weapons by the dire wolf godling <a href=\"Lupine.md\">Lupine</a>: +1 to hit and +1 to damage."
    }
  ],
  "actions": [
    {
      "name": "Shortbow",
      "description": "Ranged Weapon Attack: +6 to hit, range 80 ft./320 ft., one target. Hit: 1d6 + 3 piercing damage. Ammunition, two-handed, vex."
    },
    {
      "name": "Shortsword",
      "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1d6 + 3 piercing damage. Martial, finesse, light, vex."
    },
    {
      "name": "Trickster's Blowgun",
      "description": "Ranged Weapon Attack: +4 to hit, range 25 ft./100 ft., one target. Hit: 5 piercing damage. Loaded with poison darts and tranquilizers. Conjured out of a <em>minor illusion</em> by the Netherese machine beneath the black spire."
    },
    {
      "name": "Grell Tentacle Whip",
      "description": "Cured grell tentacles lashed with leather bindings by Karthax, the Termalaine armorer."
    },
    {
      "name": "Fire Bolt",
      "description": "Ranged Spell Attack: +3 to hit, range 120 ft., one target. Hit: 2d10 fire damage. Kitsune's Inner Fire."
    }
  ],
  "bonusactions": [
    {
      "name": "Cunning Action",
      "description": "Yin Shen can take the Dash, Disengage, or Hide action as a Bonus Action."
    },
    {
      "name": "Mage Hand",
      "description": "Cast or control her invisible <em>mage hand</em>."
    }
  ],
  "reactions": [
    {
      "name": "Uncanny Dodge",
      "description": "Halve the damage of an attack that hits her from an attacker she can see."
    }
  ]
}
```

## Notable Possessions

**Helm of Telepathy**, attuned on the road to Targos. The **Gray Bag of Tricks** and **Dzaan's folio** of handwritten magic. A **book of Netheril** and a **chardalyn notebook**. Three **potions of resistance** (acid, cold, force). An **owl familiar**, scouted ahead of the ship all the way to Auril's island.

She also carries a **Charm of the Ice Troll**: the snowflake a [Chwinga](../creatures/Chwinga.md) left for her to find in the morning after keeping [Aronious](Aronious.md) company through his watch.
