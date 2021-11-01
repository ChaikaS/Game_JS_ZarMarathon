import createDomElement from "./createDomElement.js";
const $arenas = document.querySelector(".arenas");

function createReloadButton() {
  const $div = createDomElement("div", "reloadWrap");
  const $button = createDomElement("button", "button");
  $button.innerHTML = "Restart";
  $arenas.appendChild($div);
  $div.appendChild($button);

  $button.addEventListener("click", function () {
    window.location.pathname = "index.html";
  });

  return $div;
}
export default createReloadButton;
