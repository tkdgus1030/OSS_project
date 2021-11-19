//localStorage에 저장된 사람들 이름을 people 배열에 string요소로 담음.
let data = JSON.parse(localStorage.getItem("people"));
let people = data.map((ele)=>{
    return ele['name'];
})


function del_(btn_obj){
    btn_obj.parentNode.parentNode.remove();
}

function add_(ele){
    let p_name = ele.substring(4,);
    let input_tr = $('#'+p_name);
    let object_input = $('#'+p_name+'_object');
    let amount_input = $('#'+p_name+'_amount');

    if(!object_input.val()||!amount_input.val()){
        alert('결제 대상과 금액을 모두 입력하세요');
        return;
    }

    let checked_boxes = input_tr.find('.checkbox').find('input:checked');
    let checked_people = [];
    checked_boxes.each(function() {
        checked_people.push(this.getAttribute('name'));
    });

    if(checked_people.length===0){
        alert('적어도 한 명을 선택해주세요.');
        return;
    }


    let tr = document.createElement('tr');
    tr.append(make_name_td(''));
    tr.append(make_object_td(p_name,object_input.val()));
    tr.append(make_amount_td(p_name,amount_input.val()));
    tr.append(make_checkbox_td(p_name,checked_people));
    tr.append(make_button_td(p_name,'-'));

    input_tr.after(tr);

    input_tr.replaceWith(make_input_tr(p_name));



}

function make_name_td(ele){
    let name = document.createElement('td');
    let name_div = document.createElement('div');
    name_div.append(ele);
    name.append(name_div);
    return name;
}
function make_object_td(ele,value=''){
    let object = document.createElement('td');
    if(value === ''){
        let object_input = document.createElement('input');
        object_input.id=ele+"_object";
        object.append(object_input);
    }
    else{
        object.append(value);
    }
    return object;
}
function make_amount_td(ele,value=''){
    let amount = document.createElement('td');
    amount.style= 'padding-right:10px;'
    if (value === ''){
        amount.innerHTML = '<input id="'+ ele + '_amount' +'"'+ 'type="number">' + '원';
    }
    else{
        amount.append(value);
    }
    return amount;
}
function make_checkbox_td(ele, checked_list = []){
    let checkbox = document.createElement('td');
    checkbox.className="checkbox";
    let checkdiv = document.createElement('div',{class:'checkdiv'});
    checkdiv.className = 'row-vh d-flex flex-row justify-content-between'
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
        checkdiv.append(div);
    })
    }
    else{
        people.forEach((p)=>{
        let div = document.createElement("div");
        div.className = "checkbox form-check";
        div.innerHTML = '<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"' + 'name="' + p +'"' + ' checked>';
        checkdiv.append(div);
    })
    }
    checkbox.append(checkdiv);
    return checkbox;
}
function make_button_td(ele,value='+'){
    let button = document.createElement('td');
    let btn = document.createElement('button');
    if(value==='+'){
        btn.addEventListener("click", () => {
            btn.id = 'btn_'+ele;
           add_(btn.id);
        });
    }
    else if(value==='-'){
        btn.addEventListener("click",(e)=>{
            del_(e.target);
        })
    }
    btn.append(document.createTextNode(value));
    button.append(btn);
    return button;
}
function make_input_tr(ele){
        //tr
        let tr = document.createElement('tr');
        //input_tr의 경우 각 사람의 이름을 id로 한다.
        tr.id = ele;
        //name_column
        tr.append(make_name_td(ele));
        //object_column
        tr.append(make_object_td(ele));
        //amount_column
        tr.append(make_amount_td(ele));
        //checkbox_column
        tr.append(make_checkbox_td(ele));
        //button_column
        tr.append(make_button_td(ele));
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

