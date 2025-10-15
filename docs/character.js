document.addEventListener("DOMContentLoaded", initCharacter);

const statistics = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
const skillStatList = [
  ["Acrobatics", "DEX"],
  ["Animal Handling", "WIS"],
  ["Arcana", "INT"],
  ["Athletics", "STR"],
  ["Deception", "CHA"],
  ["History", "WIS"],
  ["Insight", "INT"],
  ["Intimidation", "CHA"],
  ["Investigation", "INT"],
  ["Medicine", "WIS"],
  ["Nature", "INT"],
  ["Perception", "WIS"],
  ["Performance", "CHA"],
  ["Persuasion", "CHA"],
  ["Religion", "INT"],
  ["Sleight of Hand", "DEX"],
  ["Stealth", "DEX"],
  ["Survival", "WIS"],
];
const skillStatMap = new Map(skillStatList);
const spellLevelList = [
  "Cantrip (at will)",
  "1st level (4 slots)",
  "2nd level (3 slots)",
  "3rd level (3 slots)",
  "4th level (3 slots)",
  "5th level (3 slots)",
  "6th level (1 slot)",
  "7th level (1 slot)",
  "8th level (1 slot)",
  "9th level (1 slot)",
  "*",
];

function initCharacter() {
  console.log("Init Character...");

  const codeElementQuery =
    document.getElementsByClassName("language-character");
  const codeElement = codeElementQuery[0];

  const characterJsonStr = codeElement.textContent;
  const characterJson = JSON.parse(characterJsonStr);

  const character_html = `
<div class="character-stat-wrapper">
    <h2>${characterJson["name"]}</h2>
    <p class="character-types">${characterJson["size"]} ${
    characterJson["type"]
  } (${characterJson["subtype"]}), ${characterJson["alignment"]}</p>

    <ul>
      <li><strong>Level</strong> ${characterJson["level"]}</li>
      <li><strong>AC</strong> ${characterJson["ac"]}</li>
      <li><strong>HP</strong> ${characterJson["hp"]}</li>
      <li><strong>Speed</strong> ${characterJson["speed"]}</li>
    </ul>

    <div class="stats-wrapper">
      <div class="stats-grid">
        <p>STR</p>
        <p>${characterJson["stats"][0]}</p>
        <p>${printModifier(characterJson["stats"][0], "", [], 0)}</p>
        <p>${printModifier(
          characterJson["stats"][0],
          "STR",
          characterJson["saves"],
          characterJson["proficiency"]
        )}</p>
        <p>DEX</p>
        <p>${characterJson["stats"][1]}</p>
        <p>${printModifier(characterJson["stats"][1], "", [], 0)}</p>
        <p>${printModifier(
          characterJson["stats"][1],
          "DEX",
          characterJson["saves"],
          characterJson["proficiency"]
        )}</p>
        <p>CON</p>
        <p>${characterJson["stats"][2]}</p>
        <p>${printModifier(characterJson["stats"][2], "", [], 0)}</p>
        <p>${printModifier(
          characterJson["stats"][2],
          "CON",
          characterJson["saves"],
          characterJson["proficiency"]
        )}</p>
      </div>
      <div class="stats-grid">
        <p>INT</p>
        <p>${characterJson["stats"][3]}</p>
        <p>${printModifier(characterJson["stats"][3], "", [], 0)}</p>
        <p>${printModifier(
          characterJson["stats"][3],
          "INT",
          characterJson["saves"],
          characterJson["proficiency"]
        )}</p>
        <p>WIS</p>
        <p>${characterJson["stats"][4]}</p>
        <p>${printModifier(characterJson["stats"][4], "", [], 0)}</p>
        <p>${printModifier(
          characterJson["stats"][4],
          "WIS",
          characterJson["saves"],
          characterJson["proficiency"]
        )}</p>
        <p>CHA</p>
        <p>${characterJson["stats"][5]}</p>
        <p>${printModifier(characterJson["stats"][5], "", [], 0)}</p>
        <p>${printModifier(
          characterJson["stats"][5],
          "CHA",
          characterJson["saves"],
          characterJson["proficiency"]
        )}</p>
      </div>
    </div>

    <ul>
      <li><strong>Proficiency</strong> ${characterJson["proficiency"]}</li>
      <li><strong>Skills</strong> ${printSkills(
        characterJson["skillsaves"],
        characterJson["expertise"],
        characterJson["stats"],
        characterJson["proficiency"]
      )}</li>
      <li><strong>Senses</strong> ${characterJson["senses"]}</li>
      <li><strong>Languages</strong> ${characterJson["languages"].join(
        ", "
      )}</li>
    </ul>

    ${printTraits(characterJson["traits"])}
    ${printSpells(characterJson["spells"])}
    ${printActions(characterJson["actions"])}
    ${printBonusActions(characterJson["bonusactions"])}
    ${printReactions(characterJson["reactions"])}
</div>
`;

  const characterHtmlComponentList = [
    getCharacterName(characterJson["name"]),
    getCharacterTypes(characterJson),
    getCharacterAttributes(characterJson),
    getCharacterStats(characterJson),
    getCharacterSkills(characterJson),
    getCharacterTraits(characterJson["traits"]),
    getCharacterSpells(characterJson["spells"]),
    getCharacterActions(characterJson["actions"]),
    getCharacterBonusActions(characterJson["bonusactions"]),
    getCharacterReactions(characterJson["reactions"]),
  ];

  const characterWrapperElement = document.createElement("div");
  characterWrapperElement.classList.add("character-wrapper");
  characterWrapperElement.innerHTML = characterHtmlComponentList
    .join("")
    .trim();

  const preElement = codeElement.closest("pre");
  preElement.insertAdjacentElement("afterend", characterWrapperElement);
  preElement.classList.add("hidden");
}

function getCharacterName(name) {
  return `<h2>${name}</h2>`;
}

function getCharacterTypes(json) {
  const size = json["size"];
  const type = json["type"];
  const subtype = json["subtype"];
  const alignment = json["alignment"];
  return `<p class="character-types">${size} ${type} (${subtype}), ${alignment}</p>`;
}

function getCharacterAttributes(json) {
  const level = json["level"];
  const ac = json["ac"];
  const hp = json["hp"];
  const speed = json["speed"];

  const attr = (title, value) => {
    return `<li><strong>${title}</strong> ${value}</li>`;
  };

  /* prettier-ignore */
  return `<ul>${attr("Level", level)}${attr("AC", ac)}${attr("HP", hp)}${attr("Speed", speed)}</ul>`;
}

function getCharacterStats(json) {
  const stats = json["stats"];
  const saves = json["saves"];
  const proficiency = json["proficiency"];

  const statistic = (name, value, mod, save) => {
    return `<div class="stat-entry"><p>${name}</p><p>${value}</p><p>${mod}</p><p>${save}</p></div>`;
  };

  const statGroup = (statEntries) => {
    return `<div class="stats-group">${statEntries}</div>`;
  };

  const headerStr = `<div class="stat-entry"><p></p><p></p><p>MOD</p><p>SAVE</p></div>`;
  /* prettier-ignore */
  const headers = `${statGroup([headerStr, headerStr, headerStr].join(""))}`;
  /* prettier-ignore */
  const statisticsGroup1List = [
        statistic("STR", stats[0], printModifier(stats[0], "", [], 0), printModifier(stats[0], "STR", saves, proficiency)),
        statistic("DEX", stats[0], printModifier(stats[0], "", [], 0), printModifier(stats[0], "DEX", saves, proficiency)),
        statistic("CON", stats[0], printModifier(stats[0], "", [], 0), printModifier(stats[0], "CON", saves, proficiency)),
    ];
  /* prettier-ignore */
  const statisticsGroup2List = [
        statistic("INT", stats[0], printModifier(stats[0], "", [], 0), printModifier(stats[0], "INT", saves, proficiency)),
        statistic("WIS", stats[0], printModifier(stats[0], "", [], 0), printModifier(stats[0], "WIS", saves, proficiency)),
        statistic("CHA", stats[0], printModifier(stats[0], "", [], 0), printModifier(stats[0], "CHA", saves, proficiency)),
    ];

  /* prettier-ignore */
  return `<div class="stats-wrapper">${headers}${statGroup(statisticsGroup1List.join(""))}${statGroup(statisticsGroup2List.join(""))}</div>`;
}

function getCharacterSkills(json) {
  const stats = json["stats"];
  const saves = json["saves"];
  const proficiency = json["proficiency"];
  const skillsaves = json["skillsaves"];
  const expertise = json["expertise"];
  const senses = json["senses"];
  const languages = json["languages"];

  const skill = (title, value) => {
    return `<li><strong>${title}</strong> ${value}</li>`;
  };

  /* prettier-ignore */
  const skillList = [
    skill("Proficiency", `+${proficiency}`),
    skill("Skills", printSkills(skillsaves, expertise, stats, proficiency)),
    skill("Senses", senses),
    skill("Senses", languages.join(', '))
  ];

  return `<ul>${skillList.join("")}</ul>`;
}

function getCharacterSpells(spells) {
  const spellList = (entry) => {
    const level = entry["spell_level"];
    return `<li><span>${spellLevelList[level]}</span>: <span>${entry["spell_list"]}</span></li>`;
  };

  const spellcasting = `<li><strong>Spellcasting</strong> ${spells["description"]}</li>`;

  let spellHtml = [];
  for (let spell of spells["spell_list"]) {
    spellHtml.push(spellList(spell));
  }

  /* prettier-ignore */
  return `<h3>Spells</h3><ul class="spells-wrapper">${spellcasting}${spellHtml.join("")}</ul>`;
}

function getCharacterTraits(traits) {
  return `<h3>Traits</h3>${printNameDescList(traits)}`;
}

function getCharacterActions(actions) {
  return `<h3>Actions</h3>${printNameDescList(actions)}`;
}

function getCharacterBonusActions(actions) {
  return `<h3>Bonus Actions</h3>${printNameDescList(actions)}`;
}

function getCharacterReactions(reactions) {
  return `<h3>Reactions</h3>${printNameDescList(reactions)}`;
}

function calculateModifier(stat) {
  return Math.floor((stat - 10) / 2);
}

function printModifier(stat, current, saves, proficiency) {
  if (current !== "" && saves.includes(current)) {
    let value = calculateModifier(stat) + proficiency;
    return value >= 0 ? `+${value}` : value;
  }

  let value = calculateModifier(stat);
  return value >= 0 ? `+${value}` : value;
}

function printSkills(skills, expertise, stats, proficiency) {
  let skillStringList = [];

  for (let skill of skills) {
    let statName = skillStatMap.get(skill);
    let statIdx = statistics.indexOf(statName);
    let stat = stats[statIdx];
    let value = calculateModifier(stat) + proficiency;
    skillStringList.push(`${skill} ${value >= 0 ? `+${value}` : value}`);
  }

  for (let skill of expertise) {
    let statName = skillStatMap.get(skill);
    let statIdx = statistics.indexOf(statName);
    let stat = stats[statIdx];
    let value = calculateModifier(stat) + proficiency + proficiency;
    skillStringList.push(`${skill} ${value >= 0 ? `+${value}` : value}`);
  }

  skillStringList.sort();
  return skillStringList.join(", ");
}

function printNameDescList(nameDescList) {
  if (!nameDescList) {
    return "";
  }

  let nameDescHTMLList = [];

  for (let nameDesc of nameDescList) {
    const htmlString = `<div class="name-desc"><strong>${nameDesc["name"]}.</strong> <span>${nameDesc["description"]}</span></div>`;
    nameDescHTMLList.push(htmlString);
  }

  return nameDescHTMLList.join("\n");
}

function printTraits(nameDescList) {
  if (!nameDescList) {
    return "";
  }

  return "<h3>Traits</h3>" + printNameDescList(nameDescList);
}

function printActions(nameDescList) {
  if (!nameDescList) {
    return "";
  }

  return "<h3>Actions</h3>" + printNameDescList(nameDescList);
}

function printBonusActions(nameDescList) {
  if (!nameDescList) {
    return "";
  }

  return "<h3>Bonus Actions</h3>" + printNameDescList(nameDescList);
}

function printReactions(nameDescList) {
  if (!nameDescList) {
    return "";
  }

  return "<h3>Reactions</h3>" + printNameDescList(nameDescList);
}

function printSpellLevel(spellEntry) {
  const spellLevel = spellEntry["spell_level"];
  return `<li><span>${spellLevelList[spellLevel]}</span>: <span>${spellEntry["spell_list"]}</span></li>`;
}

function printSpells(spells) {
  if (!spells) {
    return "";
  }

  let spellStringList = [];
  for (let spellEntry of spells["spell_list"]) {
    spellStringList.push(printSpellLevel(spellEntry));
  }

  const htmlString = `
  <h3>Spells</h3>
  <ul class="spells-wrapper">
    <li><strong>Spellcasting</strong> ${spells["description"]}</li>
    ${spellStringList.join("")}
  </ul>
  `;

  return htmlString;
}
