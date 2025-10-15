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
  "1st level",
  "2nd level",
  "3rd level",
  "4th level",
  "5th level",
  "6th level",
  "7th level",
  "8th level",
  "9th level",
  "*",
];

/* prettier-ignore */
function initCharacter() {
  console.log("Init Character...");

  const codeElementQuery = document.getElementsByClassName("language-character");
  const codeElement = codeElementQuery[0];

  const characterJsonStr = codeElement.textContent;
  const characterJson = JSON.parse(characterJsonStr);

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
  characterWrapperElement.innerHTML = characterHtmlComponentList.join("").trim();

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
        statistic("STR", stats[0], getMod(stats[0], "", [], 0), getMod(stats[0], "STR", saves, proficiency)),
        statistic("DEX", stats[0], getMod(stats[0], "", [], 0), getMod(stats[0], "DEX", saves, proficiency)),
        statistic("CON", stats[0], getMod(stats[0], "", [], 0), getMod(stats[0], "CON", saves, proficiency)),
    ];
  /* prettier-ignore */
  const statisticsGroup2List = [
        statistic("INT", stats[0], getMod(stats[0], "", [], 0), getMod(stats[0], "INT", saves, proficiency)),
        statistic("WIS", stats[0], getMod(stats[0], "", [], 0), getMod(stats[0], "WIS", saves, proficiency)),
        statistic("CHA", stats[0], getMod(stats[0], "", [], 0), getMod(stats[0], "CHA", saves, proficiency)),
    ];

  /* prettier-ignore */
  return `<div class="stats-wrapper">${headers}${statGroup(statisticsGroup1List.join(""))}${statGroup(statisticsGroup2List.join(""))}</div>`;
}

function getCharacterSkills(json) {
  const stats = json["stats"];
  const proficiency = json["proficiency"];
  const skillsaves = json["skillsaves"];
  const expertise = json["expertise"];
  const senses = json["senses"];
  const languages = json["languages"];

  const skill = (title, value) => {
    return `<li><strong>${title}</strong> ${value}</li>`;
  };

  const parseSkillScores = () => {
    let skillStringList = [];

    for (let skill of skillsaves) {
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
  };

  /* prettier-ignore */
  const skillList = [
    skill("Proficiency", `+${proficiency}`),
    skill("Skills", parseSkillScores(skillsaves, expertise, stats, proficiency)),
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
  return `<h3>Traits</h3>${getNameDescriptionPairs(traits)}`;
}

function getCharacterActions(actions) {
  return `<h3>Actions</h3>${getNameDescriptionPairs(actions)}`;
}

function getCharacterBonusActions(actions) {
  return `<h3>Bonus Actions</h3>${getNameDescriptionPairs(actions)}`;
}

function getCharacterReactions(reactions) {
  return `<h3>Reactions</h3>${getNameDescriptionPairs(reactions)}`;
}

function getMod(stat, current, saves, proficiency) {
  const calculateMod = (s) => {
    return Math.floor((s - 10) / 2);
  };

  if (current !== "" && saves.includes(current)) {
    let value = calculateMod(stat) + proficiency;
    return value >= 0 ? `+${value}` : value;
  }

  let value = calculateMod(stat);
  return value >= 0 ? `+${value}` : value;
}

function getNameDescriptionPairs(nameDescList) {
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
