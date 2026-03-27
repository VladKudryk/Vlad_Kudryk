c.oninput = () => t.style.color = c.value;

s.oninput = () => t.style.fontSize = s.value + "px";

function bold() {
  t.style.fontWeight =
    t.style.fontWeight == "bold" ? "normal" : "bold";
}

function toggle() {
  t.style.display =
    t.style.display == "none" ? "block" : "none";
}

function theme() {
  document.body.classList.toggle("dark");
}

function reset() {
  t.style = "";
  document.body.className = "";
}