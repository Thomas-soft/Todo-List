const form = document.getElementById("form");
const todoListContain = document.getElementById("todoListContain");
let todo;
let valid = true;

form.addEventListener("submit", (e) =>
{
    e.preventDefault();
    
    const allh3 = document.querySelectorAll("h3");

    allh3.forEach((h3) =>
    {
        if (todo_input.value === h3.textContent)
            valid = false;
    });

    if (todo_input.value.length > 0 && valid)
    {
        todo = todo_input.value;
        todoListContain.innerHTML += `<h3>${todo}</h3>`;
    }
    todo_input.value = "";
    valid = true;
});

todoListContain.addEventListener("click", (e) =>
{
    if (e.target.id !== "todoListContain")
    {
        e.target.remove();
    }
});

// <i class="fa-regular fa-square"></i>
// <i class="fa-regular fa-square-check"></i>