function add() {
  let val = input.value.trim();
  if (!val) return alert("Введи текст");

  let li = document.createElement("li");
  li.textContent = val;

  li.onclick = () => li.remove();

  list.appendChild(li);
  input.value = "";
}

function sortList() {
  let items = [...list.children];

  items.sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
  );

  list.innerHTML = "";
  items.forEach(i => list.appendChild(i));
}