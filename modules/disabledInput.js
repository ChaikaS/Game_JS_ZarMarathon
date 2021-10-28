function disabledInput() {
  const input = document.querySelectorAll("input");
  for (let i of input) {
    i.disabled = true;
  }
  return input;
}
export default disabledInput;
