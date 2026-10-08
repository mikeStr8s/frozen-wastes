---
ac: 10
hp: 23
level: 7
modifier: 3
---
# Hobbins

A ferret wizard who called the frozen north home. Constantly battling against the curiosity she felt looking out at the world from her little shop. Enough was enough — she saw the sky turn dark and a star fall from the heavens. It was time she finally went out there and lived a little.

Two and a half feet of white ferret, ten pounds, blue-eyed, nineteen years old, and in possession of an Intelligence score that embarrasses most of the people she meets. She was schooled at the university in Waterdeep, where she was bullied for being a nerd, and she has not forgotten by whom.

## Disposition

Hobbins is the party's problem-solver and its single greatest liability, frequently within the same minute. She has talked an awakened plesiosaur out of terrorizing [Bremen](../atlas/Bremen.md) using nothing but a correct understanding of how awakening works, and she has knocked herself unconscious with her own _chromatic orb_ to win a footrace to a tavern.

Her weakness for clear liquor is a running catastrophe. [Aronious](Aronious.md) now pours her measures by the bottle cap.

She keeps a family in the south — six people in her main center of family, four of them siblings who have moved to the same town. Her father is among the hopefuls reaching for the empty speaker's seat at Goodmead.

## Deeds

- Charmed her way past the guards of [The Caer](../atlas/The%20Caer.md) and into the Speaker's office.
- Attuned to the [Sea Hag's Frozen Eye](../artifacts/Sea%20Hag's%20Frozen%20Eye.md) by holding it underwater for an hour through a hole Aronious cut in [Lac Dinneshere](../atlas/Lac%20Dinneshere.md).
- Broke an avalanche with _thunderwave_ and saved the party from burial.
- Healed [Lupine](Lupine.md) with her medicine kit while disguised as a dire wolf pup, and received his boon.
- Rode out a radiant catastrophe inside a chest of temporal stasis, which she then kept.
- Set the goblin stronghold on fire.
- Freed a possessed kobold in the Termalaine mines by stealing the pouch the ghost was anchored to and dropping it down a mineshaft.
- Opened the battle for the forge from inside an allied Duergar's beard, killing two of the four chanters in one stroke.
- Exposed the Chardalyn Dragon's core with two lightning orbs, then drove the death-blast away from the militia with a final _thunderwave_.

## Stat Block

```character
{
  "name": "Hobbins",
  "size": "Small",
  "type": "Humanoid",
  "subtype": "Ferret",
  "alignment": "Chaotic Good",
  "level": 7,
  "ac": 10,
  "hp": 23,
  "hit_dice": "7d6",
  "speed": "30 ft.",
  "stats": [9, 11, 9, 18, 16, 11],
  "saves": ["INT", "WIS"],
  "proficiency": 3,
  "skillsaves": ["History", "Persuasion", "Stealth"],
  "expertise": ["Arcana"],
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "Passive Perception 13, Passive Insight 16, Passive Investigation 14",
  "languages": ["Common", "Dwarvish"],
  "spells": {
    "description": "Wizard 7 (Evoker). Spells are cast with Intelligence — save DC 15, +7 to hit. Hobbins is a ritual caster and keeps a spellbook.",
    "spell_list": [
        {
            "spell_level": 0,
            "spell_list": "minor illusion, poison spray, shocking grasp, blade ward, mending, fire bolt"
        },
        {
            "spell_level": 1,
            "spell_list": "comprehend languages, thunderwave, disguise self, magic missile, identify, charm person, chromatic orb"
        },
        {
            "spell_level": 2,
            "spell_list": "aganazzar's scorcher"
        },
        {
            "spell_level": 3,
            "spell_list": "sending, counterspell, hypnotic pattern, haste, blink"
        },
        {
            "spell_level": 4,
            "spell_list": "summon aberration"
        }
  ]
  },
  "traits": [
    {
      "name": "Arcane Recovery",
      "description": "Once per long rest, on finishing a short rest, Hobbins recovers expended spell slots with a combined level of no more than 4, none of them level 6 or higher."
    },
    {
      "name": "Evocation Savant",
      "description": "Whenever Hobbins gains access to a new level of spell slots, she adds one wizard spell from the Evocation school to her spellbook for free."
    },
    {
      "name": "Sculpt Spells",
      "description": "When Hobbins casts an Evocation spell that affects other creatures she can see, she chooses a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws and take no damage where they would normally take half."
    },
    {
      "name": "Potent Cantrip",
      "description": "When Hobbins casts a cantrip at a creature and misses with the attack roll, or the target succeeds on the saving throw, the target still takes half the damage."
    },
    {
      "name": "Ritual Adept",
      "description": "Hobbins can cast any spell in her spellbook as a ritual if it has the Ritual tag, without needing it prepared."
    },
    {
      "name": "Spell Sniper",
      "description": "Hobbins's attack-roll spells ignore Half Cover and Three-Quarters Cover, casting in melee imposes no Disadvantage, and any attack-roll spell with a range of at least 10 feet has its range increased by 60 feet."
    },
    {
      "name": "Lupine's Boon",
      "description": "A blessing of frozen breath laid on her by the dire wolf godling <a href=\"Lupine.md\">Lupine</a> in thanks for tending his wounds."
    }
  ],
  "actions": [
    {
      "name": "Light Crossbow",
      "description": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 1d8 piercing damage. Ammunition, loading, slow, two-handed."
    },
    {
      "name": "Poison Spray",
      "description": "Ranged Spell Attack: +7 to hit, range 30 ft., one target. Hit: 2d12 + 1 poison damage."
    },
    {
      "name": "Shocking Grasp",
      "description": "Melee Spell Attack: +7 to hit, reach touch, one target. Hit: 2d8 + 1 lightning damage."
    },
    {
      "name": "Fire Bolt",
      "description": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 2d10 + 1 fire damage."
    },
    {
      "name": "Chromatic Orb",
      "description": "Ranged Spell Attack: +8 to hit, range 90 ft., one target. Hobbins chooses the damage type on casting — she has used acid, cold, and lightning to decisive effect."
    }
  ]
}
```

## Notable Possessions

The **Sea Hag's Frozen Eye** (mounted on a stick), a **Helm of Telepathy** identified by ritual and passed on, **Torg's journal**, _The History of Caer-Dineval_, the **abandoned cave notes** from the bridge campsite, a **vial of ice troll blood**, **grell beak and tentacles**, twenty-five **splinters of shardeline**, four pebble-sized **tourmalines**, and a quantity of frozen dog food liberated from a speakeasy's cold-storage cellar.

She also carries a **Charm of the Ice Troll** — the snowflake a [Chwinga](../creatures/Chwinga.md) left for her overnight in the tundra.
