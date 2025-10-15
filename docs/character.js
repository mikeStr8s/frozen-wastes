document.addEventListener("DOMContentLoaded", initCharacter);

function initCharacter() {
  console.log("Init Character...");
  getCodeElement();
}

function getCodeElement() {
  let character_list = document.getElementsByClassName("language-character");
  let character_element = character_list[0];
  let json_string = character_element.textContent;
  console.log(JSON.parse(json_string));
}
