const Type = {
    Name: 1
};
let people = [];


function loadPeople() {
    let lastPeople = localStorage.getItem("people");
    if (!lastPeople) return;

    people = JSON.parse(lastPeople);
    people.forEach(addToList);
}

function savePeople() {
    console.log(people);
    localStorage.setItem("people", JSON.stringify(people));
}

function addToList(person) {
    let div = document.createElement("div");
    div.className = "people p-1 rounded-2 ps-2 d-flex align-items-center mb-2 mt-2";

    let span = document.createElement("span");
    span.className = "me-auto stack_text_design";
    span.textContent = person.name;
    console.log(person.name);
    div.appendChild(span);

    let buttonRemove = document.createElement("button");
    buttonRemove.className = "btn remove_btn_design";
    buttonRemove.innerHTML = '<i class="bi bi-x">-</i>';
    div.appendChild(buttonRemove);

    buttonRemove.addEventListener("click", () => {
        div.remove();
        people = people.filter((t) => t !== person);
        savePeople();
    });


    let list = document.querySelector("#peopleList");
    console.log(div);
    list.appendChild(div);
}



window.addEventListener("load", () => {
    // loadPeople();
});

let button = document.querySelector("#add");
let input = document.querySelector("#name-input");


let add_person =() => {
    let text = input.value;

    if (!text.length) return;

    let person = {
        name: text,
        // type: Type.Name,
    };

    people.push(person);
    savePeople();

    addToList(person);


    input.value="";
};
button.addEventListener("click",add_person );
input.addEventListener("keydown",function(e){
    if(e.key==='Enter'&& !e.isComposing){
        button.click();
    }
} );

// let next = document.querySelector("#next");
// next.addEventListener('click',()=>{
//     localStorage.setItem('people',JSON.stringify(people));
//     location.href=""
// })
