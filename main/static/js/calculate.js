let data = JSON.parse(localStorage.getItem("people"));
let people = data.map((ele)=>{
    console.log(ele);
    console.log(ele['name']);
    return ele['name'];
})
var spend = {};
var cal_spend = {}
people.forEach((ele)=>{
    spend[ele]=0;
    cal_spend[ele]=0;
})
console.log(spend);
console.log(cal_spend);


function add_(ele, value='+'){
    let p_name = ele.substring(4,);
    let input_tr = $('#'+p_name);
    let object_input = $('#'+p_name+'_object');
    let amount_input = $('#'+p_name+'_amount');

    if(!object_input.val()||!amount_input.val()){
        alert('결제 대상과 금액을 모두 입력하세요');
        return;
    }


    let tr = document.createElement('tr');
    tr.append(make_name_td(''));
    tr.append(make_object_td(p_name,object_input.val()));
    tr.append(make_amount_td(p_name,amount_input.val()));
    tr.append(make_checkbox_td(p_name,''));
    tr.append(make_button_td(p_name,'-'));

    input_tr.after(tr);

    object_input.val('');
    amount_input.val('');

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
        // object_input.type=text;
        object.append(object_input);
    }
    else{
        object.append(value);
    }
    return object;
}
function make_amount_td(ele,value=''){
    let amount = document.createElement('td');
    if (value === ''){
        let amount_input = document.createElement('input');
        amount_input.id=ele+"_amount";
        // amount_input.type=number;
        amount.append(amount_input);
    }
    else{
        amount.append(value);
    }
    return amount;
}
function make_checkbox_td(ele, value = []){
    let checkbox = document.createElement('td');
    checkbox.className="checkbox";
    let checkdiv = document.createElement('div',{class:'checkdiv'});
    checkdiv.className = 'row-vh d-flex flex-row justify-content-between'
    people.forEach(()=>{
        let div = document.createElement("div");
        div.className = "checkbox";
        div.innerText = 'O';
        checkdiv.append(div);
    })
    checkbox.append(checkdiv);
    // if(value === []){
    //
    // }
    // else{
    //
    // }
    return checkbox;
}
function make_button_td(ele,value='+'){
    let button = document.createElement('td');
    let btn = document.createElement('button');
    btn.id = 'btn_'+ele;
    btn.setAttribute('clicked',0)
    btn.addEventListener("click", () => {
       add_(btn.id, value);
    });
    btn.append(document.createTextNode(value));
    button.append(btn);
    return button;
}
function make_input_tr(ele){
        //tr
        let tr = document.createElement('tr');
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
    let data = JSON.parse(localStorage.getItem("people"));
    // console.log(data);
    let people = data.map((ele)=>{
        console.log(ele);
        console.log(ele['name']);
        return ele['name'];
    })
    // console.log(people);

    let first_row = $('#people_list');

    people.forEach((ele)=>{
        //first row div append
        let div = document.createElement("div");
        div.className = "person";
        div.innerText = ele;
        first_row.append(div);
        let tr = make_input_tr(ele);
        $('.cal_table').append(tr);
    })
}

