fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    if (!response.ok) {
        throw new Error("Помилка запиту");
    }
    return response.json();
})
.then(users => {
    const list = document.getElementById("usersList");
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name + " (" + user.email + ")";
        list.appendChild(li);
    });
})
.catch(error => {
    document.getElementById("error").textContent = "Помилка завантаження";
    console.error(error);
});