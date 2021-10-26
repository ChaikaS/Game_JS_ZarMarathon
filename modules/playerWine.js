import createDomElement from "./createDomElement.js";

function playerWine(name) {
  const $wineTitle = createDomElement("div", "wineTitle");
  if (name) {
    $wineTitle.innerHTML = name + " wine";
  } else {
    $wineTitle.innerHTML = "draw";
  }
  return $wineTitle;
}
export default playerWine;
