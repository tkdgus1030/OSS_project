const Type = {
    Name: 1
};
let people = [];

// function loadPeople() {
//     let lastPeople = localStorage.getItem("people");
//     if (!lastPeople) return;
//
//     people = JSON.parse(lastPeople);
//     people.forEach(addToList);
// }
window.addEventListener("load", () => {
    // loadPeople();
    localStorage.clear();
});
function next(e){
    let url = e.getAttribute('url');
    if(people.length!==0){
        location.href = url;
    }else{
        alert('사람을 추가하세요');
    }
}


function savePeople() {

    localStorage.setItem("people", JSON.stringify(people));
}

function addToList(person_name) {
    let div = document.createElement("div");
    div.className = "people p-1 rounded-2 ps-2 d-flex align-items-center mb-2 mt-2";

    let span = document.createElement("span");
    span.className = "me-auto stack_text_design";
    span.textContent = person_name;
    div.appendChild(span);

    let buttonRemove = document.createElement("button");
    buttonRemove.className = "btn remove_btn_design";
    buttonRemove.innerHTML = '<i class="bi bi-x">-</i>';
    div.appendChild(buttonRemove);

    buttonRemove.addEventListener("click", () => {
        div.remove();
        people = people.filter((t) => t !== person_name);
        savePeople();
    });


    let list = document.querySelector("#peopleList");
    list.appendChild(div);
}





let button = document.querySelector("#add");
let input = document.querySelector("#name-input");


let add_person =() => {
    let text = input.value;

    if (!text.length){
        alert('이름을 입력하세요.');
        return;
    }

    let person_name = text;

    people.push(person_name);
    savePeople();

    addToList(person_name);


    input.value="";
};
button.addEventListener("click",add_person );
input.addEventListener("keydown",function(e){
    if(e.key==='Enter'&& !e.isComposing){
        button.click();
    }
} );
