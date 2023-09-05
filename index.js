const displayEls = () => {
  let name = document.getElementsByClassName("field-item")[0].value;
  let displayName = document.getElementById("name");
  displayName.innerHTML = name;
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", displayEls);
});