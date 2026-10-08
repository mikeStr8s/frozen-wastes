---
ac: 14
hp: 41
level: 7
modifier: 3
---
# Aronious III

Once a paladin serving faithfully to the pantheon above. He discarded his vows and took to the frozen wilderness to find and aid [Yin Shen](Yin%20Shen.md) — and in the years since, the oath has found its way back to him by a different road.

## The Road Back to the Oath

Aronious came into [Bryn Shander](../atlas/Bryn%20Shander.md) as a ranger and nothing more: a hunter, a tracker, a man who had put the gods behind him on purpose. What the Dale gave back to him was not the pantheon he had left but something older and closer to the ground.

It began with small things. A dire wolf nursed back from the brink in a cave east of [Easthaven](../atlas/Easthaven.md). A herd of reindeer crossing a clearing under an aurora, and one deer that did not run when he reached for it — a bond offered and accepted, so that when he calls in need, the herd may hear. A [Chwinga](../creatures/Chwinga.md) that jabbed him in the ribs on a night watch and stayed to keep him company in the cold.

By the assault on Xardorok Sunblight's forge, it was no longer subtle. With [Hobbins](Hobbins.md) lying singed and still on the stone, Aronious broke from his position, pressed his hand to her chest, and called on **Sylvanas**, god of nature — the same force behind the reindeer and the Chwinga and the herd in the snow. She drew breath and came back.

He now walks as both ranger and paladin, sworn to the Ancients.

## Deeds

- Hunted and killed [Sephek Kaltro](Sephek%20Kaltro.md) in a moonlit glade, the first night out of Bryn Shander.
- Carried the party out of [The Caer](../atlas/The%20Caer.md) through the front gate and held the portcullis open with his bow.
- Healed [Lupine](Lupine.md) alongside Hobbins and earned the godling's friendship and blessing.
- Commissioned the **Giant's Bone Longbow** from an Easthaven fletcher, paid for with a frost giant's bone Hobbins had been carrying.
- Bonded to the Netherese **Shield Guardian** through the amulet recovered from the black spire, and has commanded it since.
- Lashed the Chardalyn Dragon's jaw shut with _thorn whip_ at the walls of Easthaven, then put an arrow clean through the core at its heart.

## Stat Block

```character
{
  "name": "Aronious III",
  "size": "Medium",
  "type": "Humanoid",
  "subtype": "Human",
  "alignment": "Neutral Good",
  "level": 7,
  "ac": 14,
  "hp": 41,
  "hit_dice": "4d10 + 3d10",
  "speed": "30 ft.",
  "stats": [13, 15, 12, 6, 14, 13],
  "saves": ["STR", "DEX"],
  "proficiency": 3,
  "skillsaves": ["Athletics", "Intimidation", "Perception", "Survival"],
  "expertise": ["Insight"],
  "damage_vulnerabilities": "",
  "damage_resistances": "",
  "damage_immunities": "",
  "condition_immunities": "",
  "senses": "Passive Perception 14, Passive Insight 17",
  "languages": ["Common", "Celestial", "Elvish", "Gnomish"],
  "spells": {
    "description": "Ranger 4 / Paladin 3 (Oath of the Ancients). Ranger spells are cast with Wisdom (save DC 13, +5 to hit); paladin spells with Charisma (save DC 12, +4 to hit).",
    "spell_list": [
        {
            "spell_level": 0,
            "spell_list": "thorn whip, guidance, sacred flame"
        },
        {
            "spell_level": 1,
            "spell_list": "hail of thorns, alarm, jump, detect magic, cure wounds, purify food and drink, bless, divine smite, hunter's mark, ensnaring strike, speak with animals"
        }
  ]
  },
  "traits": [
    {
      "name": "Favored Enemy",
      "description": "Aronious always has <em>hunter's mark</em> prepared and can cast it twice per long rest without expending a spell slot."
    },
    {
      "name": "Deft Explorer",
      "description": "An unsurpassed explorer and survivor. Aronious has Expertise in Insight, doubling his proficiency bonus on any Insight check he makes."
    },
    {
      "name": "Druidic Warrior",
      "description": "Two druid cantrips count as ranger spells for Aronious, cast with Wisdom."
    },
    {
      "name": "Primal Companion (Beast of the Land)",
      "description": "Aronious summons a primal beast bearing markings of its supernatural origin — for most of his travels a dire wolf, and since the night of the aurora, a reindeer of Icewind Dale.\n\n<strong>Beast of the Land</strong> — AC 15, HP 25 (4d8), Speed 40 ft., Climb 40 ft. Saves: Str +5, Dex +5, Con +5, Int +2, Wis +5, Cha +3.\n\n<strong>Primal Bond</strong> Add Aronious's proficiency bonus to any ability check or saving throw the beast makes.\n\nThe beast is Friendly to Aronious and his allies and obeys his commands. It vanishes if he dies. In combat it acts on his turn, taking only the Dodge action unless he spends a Bonus Action to command it otherwise."
    },
    {
      "name": "Lay on Hands",
      "description": "A pool of 15 hit points of healing that replenishes on a long rest. As a Bonus Action, Aronious can touch a creature and restore hit points from the pool, or spend 5 points to remove the Poisoned condition."
    },
    {
      "name": "Paladin's Smite",
      "description": "Aronious always has <em>divine smite</em> prepared and can cast it once per long rest without expending a spell slot."
    },
    {
      "name": "Channel Divinity",
      "description": "Aronious can channel energy directly from the Outer Planes to fuel magical effects, twice per long rest, regaining one expended use on a short rest. Save DC 12."
    }
  ],
  "actions": [
    {
      "name": "Giant's Bone Longbow",
      "description": "Ranged Weapon Attack: +8 to hit, range 150 ft./600 ft., one target. Hit: 1d8 + 3 piercing damage. Heavy, two-handed. Carved from frost giant bone by an Easthaven fletcher, scrimshawed along the full length of the limbs and strung with golden thread."
    },
    {
      "name": "Shortsword",
      "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1d6 + 2 piercing damage. Finesse, light, vex."
    },
    {
      "name": "Thorn Whip",
      "description": "Melee Spell Attack: +5 to hit, reach 30 ft., one target. Hit: 2d6 piercing damage, and Aronious can pull the target up to 10 feet toward him."
    },
    {
      "name": "Unarmed Strike",
      "description": "Melee Attack Roll: +4 to hit, reach 5 ft., one target. Hit: 2 bludgeoning damage."
    }
  ],
  "bonusactions": [
    {
      "name": "Beast's Strike (Land)",
      "description": "Melee Attack Roll: +5 to hit, reach 5 ft. Hit: 1d8 + 4 bludgeoning, piercing, or slashing damage (chosen when the beast is summoned).\n\nIf the beast moved at least 20 feet straight toward the target before the hit, the target takes an extra 1d6 damage of the same type and has the Prone condition if it is Large or smaller."
    },
    {
      "name": "Lay on Hands",
      "description": "Touch a creature and restore hit points from the healing pool, or spend 5 points to remove the Poisoned condition."
    }
  ]
}
```

## Allies

- The **Shield Guardian** (64 HP), bound to the amulet he carries
- His primal companion, most recently a reindeer of Icewind Dale
- A **Charm of the Ice Troll** — the snowflake a [Chwinga](../creatures/Chwinga.md) pressed into his hand on a night watch
