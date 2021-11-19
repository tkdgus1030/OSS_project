//localStorage에 저장된 사람들 이름을 people 배열에 string요소로 담음.
let data = JSON.parse(localStorage.getItem("people"));
let people = data.map((ele)=>{
    return ele['name'];
})


function del_(btn_obj){
    let del_tr_obj = btn_obj.parentNode.parentNode;
    //remove data in localStorage

    //tr 삭제
    del_tr_obj.remove();
}

function add_(name, btn_obj){
    let input_tr = btn_obj.parentNode.parentNode;
    let object_input = input_tr.children[1].children[0];
    let amount_input = input_tr.children[2].children[0];
    let checked_boxes = input_tr.children[3].children[0].childNodes;

    //validation
    if(!object_input.value||!amount_input.value){
        alert('결제 대상과 금액을 모두 입력하세요');
        return;
    }
    let checked_people = [];
    for(let i=0;i<checked_boxes.length;i++){
        let check_input = checked_boxes[i].children[0]
        if(check_input.checked){
            checked_people.push(check_input.name);
        }

    }
    if(checked_people.length===0){
        alert('적어도 한 명을 선택해주세요.');
        return;
    }

    //save to localStorage
    console.log(checked_people);

    //append to table as tr
    let tr = document.createElement('tr');
    tr.append(make_name_td(''));
    tr.append(make_object_td(object_input.value));
    tr.append(make_amount_td(amount_input.value));
    tr.append(make_checkbox_td(checked_people));
    tr.append(make_button_td(name,'-'));

    input_tr.after(tr);

    //initialize input tr
    input_tr.replaceWith(make_input_tr(name));

}

function make_name_td(name){
    let name_td = document.createElement('td');
    let name_div = document.createElement('div');
    name_div.append(name);
    name_td.append(name_div);
    return name_td;
}

//value가 ''인 경우 input을 받는 td를 만든다. validation은 호출 전에수행한다.
function make_object_td(value=''){
    let object_td = document.createElement('td');
    if(value === ''){
        let object_input = document.createElement('input');
        object_td.append(object_input);
    }
    else{
        object_td.append(value);
    }
    return object_td;
}
//value가 ''인 경우 input을 받는 td를 만든다. validation은 호출 전에수행한다.
function make_amount_td(value=''){
    let amount_td = document.createElement('td');
    amount_td.style= 'padding-right:10px;'
    if (value === ''){
        amount_td.innerHTML = '<input type="number">' + '원';
    }
    else{
        amount_td.innerHTML = value;
    }
    return amount_td;
}
//checked_list ''인 경우 input을 받는 td를 만든다. validation은 호출 전에수행한다.
function make_checkbox_td(checked_list = []){
    let checkbox_td = document.createElement('td');
    checkbox_td.className="checkbox";
    let checkbox_div = document.createElement('div');
    checkbox_div.className = 'row-vh d-flex flex-row justify-content-between'
    if(checked_list.length!==0){
        people.forEach((p)=>{
            let div = document.createElement("div");
            div.className = "checkbox form-check";
            if(checked_list.includes(p)){
                div.innerHTML = '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"' + 'name="' + p +'"' + ' checked disabled readonly>';
            }
            else{
                div.innerHTML =
                    '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"' + 'name="' + p +'"' + ' disabled readonly>';
            }
            checkbox_div.append(div);
        })
    }
    else{
        people.forEach((p)=>{
            let div = document.createElement("div");
            div.className = "checkbox form-check";
            div.innerHTML = '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"' + 'name="' + p +'"' + ' checked>';
            checkbox_div.append(div);
        })
    }
    checkbox_td.append(checkbox_div);
    return checkbox_td;
}
function make_button_td(name,value='+'){
    let button_td = document.createElement('td');
    let btn = document.createElement('button');
    if(value==='+'){
        btn.addEventListener("click", (e) => {
           add_(name,e.target);
        });
    }
    else if(value==='-'){
        btn.addEventListener("click",(e)=>{
            del_(e.target);
        })
    }
    btn.append(document.createTextNode(value));
    button_td.append(btn);
    return button_td;
}
function make_input_tr(name){
        //tr
        let tr = document.createElement('tr');
        //input_tr의 경우 각 사람의 이름을 id로 한다.
        tr.id = name;
        //name_column
        tr.append(make_name_td(name));
        //object_column
        tr.append(make_object_td());
        //amount_column
        tr.append(make_amount_td());
        //checkbox_column
        tr.append(make_checkbox_td());
        //button_column
        tr.append(make_button_td(name));
        return tr;
}
function setTable() {
    let first_row_people_list = $('#people_list');
    people.forEach((ele)=>{
        let div = document.createElement("div");
        div.className = "person";
        div.innerText = ele;
        first_row_people_list.append(div);

        let tr = make_input_tr(ele);
        $('.cal_table').append(tr);
    })
}

