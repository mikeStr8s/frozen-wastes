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
  ["Survival", "WIS"]
];
const skillStatMap = new Map(skillStatList);

function initCharacter() {
  console.log("Init Character...");

  let character_code = document.getElementsByClassName("language-character");
  let code_element = character_code[0];
  let pre_element = code_element.closest('pre');
  let json_string = code_element.textContent;
  let character = JSON.parse(json_string);

  pre_element.classList.add("hidden");

  let character_wrapper_element = document.createElement("div");
  character_wrapper_element.classList.add("character-wrapper");

  let character_header = document.createElement("h2");
  character_header.innerText = character["name"];

  const character_html = `
<div class="character-stat-wrapper">
  <div class="stat-col">
    <p class="character-types">${character["size"]} ${character["type"]} (${character["subtype"]}), ${character["alignment"]}</p>
    <ul>
      <li><strong>Level</strong> ${character["level"]}</li>
      <li><strong>AC</strong> ${character["ac"]}</li>
      <li><strong>HP</strong> ${character["hp"]}</li>
      <li><strong>Speed</strong> ${character["speed"]}</li>
    </ul>

    <div class="stats-wrapper">
      <div class="stats-grid">
        <p>STR</p>
        <p>${character["stats"][0]}</p>
        <p>${printModifier(character["stats"][0], "", [], 0)}</p>
        <p>${printModifier(character["stats"][0], "STR", character["saves"], character["proficiency"])}</p>
        <p>DEX</p>
        <p>${character["stats"][1]}</p>
        <p>${printModifier(character["stats"][1], "", [], 0)}</p>
        <p>${printModifier(character["stats"][1], "DEX", character["saves"], character["proficiency"])}</p>
        <p>CON</p>
        <p>${character["stats"][2]}</p>
        <p>${printModifier(character["stats"][2], "", [], 0)}</p>
        <p>${printModifier(character["stats"][2], "CON", character["saves"], character["proficiency"])}</p>
      </div>
      <div class="stats-grid">
        <p>INT</p>
        <p>${character["stats"][3]}</p>
        <p>${printModifier(character["stats"][3], "", [], 0)}</p>
        <p>${printModifier(character["stats"][3], "INT", character["saves"], character["proficiency"])}</p>
        <p>WIS</p>
        <p>${character["stats"][4]}</p>
        <p>${printModifier(character["stats"][4], "", [], 0)}</p>
        <p>${printModifier(character["stats"][4], "WIS", character["saves"], character["proficiency"])}</p>
        <p>CHA</p>
        <p>${character["stats"][5]}</p>
        <p>${printModifier(character["stats"][5], "", [], 0)}</p>
        <p>${printModifier(character["stats"][5], "CHA", character["saves"], character["proficiency"])}</p>
      </div>
    </div>

    <ul>
      <li><strong>Proficiency</strong> ${character["proficiency"]}</li>
      <li><strong>Skills</strong> ${printSkills(character["skillsaves"], character["expertise"], character["stats"], character["proficiency"])}</li>
      <li><strong>Senses</strong> ${character["senses"]}</li>
      <li><strong>Languages</strong> ${character["languages"].join(", ")}</li>
    </ul>

    ${printTraits(character["traits"])}
  </div>

  <div class="stat-col">
    ${printSpells(character["spells"])}
    ${printActions(character["actions"])}
    ${printBonusActions(character["bonusactions"])}
    ${printReactions(character["reactions"])}
  </div>
</div>
`;

  const template = document.createElement("template");
  template.innerHTML = character_html.trim();
  const element = template.content.firstElementChild;

  character_wrapper_element.insertAdjacentElement(
    "afterbegin",
    character_header
  );
  character_wrapper_element.insertAdjacentElement("beforeend", element);
  pre_element.insertAdjacentElement("afterend", character_wrapper_element);
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
  return skillStringList.join(', ');
}

function printNameDescList(nameDescList) {
  let nameDescHTMLList = [];

  for (let nameDesc of nameDescList) {
    const htmlString = `<div class="name-desc"><strong>${nameDesc["name"]}.</strong> <span>${nameDesc["description"]}</span></div>`;
    nameDescHTMLList.push(htmlString);
  }

  return nameDescHTMLList.join('\n');
}

function printTraits(nameDescList) {
  if (!nameDescList) {
    return '';
  }

  return '<h3>Traits</h3>' + printNameDescList(nameDescList);
}

function printActions(nameDescList) {
  if (!nameDescList) {
    return '';
  }

  return '<h3>Actions</h3>' + printNameDescList(nameDescList);
}

function printBonusActions(nameDescList) {
  if (!nameDescList) {
    return '';
  }

  return '<h3>Bonus Actions</h3>' + printNameDescList(nameDescList);
}

function printReactions(nameDescList) {
  if (!nameDescList) {
    return '';
  }

  return '<h3>Reactions</h3>' + printNameDescList(nameDescList);
}

function printSpells(nameDescList) {
  if (!nameDescList) {
    return '';
  }

  return '<h3>Spells</h3>';
}