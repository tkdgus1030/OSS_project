function createArray(rows, columns) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
            arr.push([]);
        for(var j=0;j<columns;j++){
            arr[i].push([]);
        }
    }
    return arr;
}



//localStorage에 저장된 사람들 이름을 people 배열에 string요소로 담음.
let people = JSON.parse(localStorage.getItem("people"));
var res_table = createArray(people.length, people.length);
for(let i=0;i<people.length;i++){
    for(let j=0; j< people < length; j++)
    {
        res_table[i][j]=[];
    }
}

function saveRes(){
    console.log(res_table);
    localStorage.setItem("resTable", JSON.stringify(res_table));
};

function del_(name, btn_obj){
    let del_tr_obj = btn_obj.parentNode.parentNode;
    let checked_boxes = del_tr_obj.children[3].children[0].childNodes;
    let object_txt = del_tr_obj.children[1].innerText;
    let amount_float = parseFloat(del_tr_obj.children[2].innerText);


    let checked_people = [];
    for(let i=0;i<checked_boxes.length;i++){
        let check_input = checked_boxes[i].children[0]
        if(check_input.checked){
            checked_people.push(check_input.name);
        }
    }

    // remove data in localStorage
    let from = people.indexOf(name);
    let n = checked_people.length;
    checked_people.forEach((p)=>{
        let to = people.indexOf(p)
        let ele = {'object':object_txt ,'amount':amount_float};
        res_table[from][to].pop(ele);
    });
    saveRes();

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
    let from = people.indexOf(name);
    let n = checked_people.length;
    checked_people.forEach((p)=>{
        let to = people.indexOf(p)
        let amount = amount_input.value / n;
        let object = object_input.value;
        let ele = {'object':object ,'amount':amount};
        console.log(ele,res_table)
        res_table[from][to].push(ele);
    });
    saveRes();

    // localStorage.setItem()

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
        object_input.className = "input_design";
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
        amount_td.innerHTML = '<input class="input_design" type="number" placeholder="숫자(원₩)를 입력하세요.">';
        amount_td.className = "calculator_input_design";
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
            div.className = "checkbox form-check" ;
            div.style.marginLeft = "20px"
            if(checked_list.includes(p)){
                div.innerHTML = '<input class="form-check-input" style="background-color: #60C49D; border: none" type="checkbox" value="" id="flexCheckChecked"' + 'name="' + p +'"' + ' checked disabled readonly>';
            }
            else{
                div.innerHTML =
                    '<input class="form-check-input" style="border: none" type="checkbox" value="" id="flexCheckChecked"' + 'name="' + p +'"' + ' disabled readonly>';
            }
            checkbox_div.append(div);
        })
    }
    else{
        people.forEach((p)=>{
            let div = document.createElement("div");
            div.className = "checkbox form-check";
            div.style.marginLeft = "20px"
            div.innerHTML = '<input class="form-check-input" style="background-color: #60C49D; border: none" type="checkbox" id="flexCheckChecked"' + 'name="' + p +'"' + ' checked>';
            checkbox_div.append(div);
        })
    }
    checkbox_td.append(checkbox_div);
    return checkbox_td;
}
function make_button_td(name,value='+'){
    let button_td = document.createElement('td');
    let btn = document.createElement('button');
    btn.className = "btn add_btn_design";
    if(value==='+'){
        btn.addEventListener("click", (e) => {
           add_(name,e.target);
        });
    }
    else if(value==='-'){
        btn.addEventListener("click",(e)=>{
            del_(name, e.target);
        })
        btn.style.backgroundColor="lightcoral";
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
function result(){
    $('.res_div1').html('<br><p>송금 내역</p>');
    $('.res_table').html(' <tr>\n' +
        '                <th>이름</th>\n' +
        '                <th>결제한 금액</th>\n' +
        '                <th>사용 금액</th>\n' +
        '                <th>총</th>\n' +
        '            </tr><br>');
    $('.res_div2').html('<br>')
    $('.res_div3').html('<br>')
    $('.res_div4').html('<br>')
    
    let remittance = [];
    let total = 0;

    for(let p1 = 0 ; p1 < people.length; p1++){
        let tr = document.createElement('tr');
        let name_td = document.createElement('td');
        let name_div = document.createElement('div');
        name_div.append(people[p1]);
        name_td.append(name_div);
        let td2 = document.createElement('td');
        let td2_div = document.createElement('div');
        let res1= 0;
        res_table[p1].forEach((arr)=>{
            arr.forEach((ele)=>{
                res1 += ele.amount;
            })
        })
        total += res1;
        
        td2_div.append(res1);
        td2.append(td2_div);
        let td3 = document.createElement('td');
        let td3_div = document.createElement('div');
        let res2 = 0;
        for(let p2 =0;p2< people.length;p2++){
            res_table[p2][p1].forEach((ele)=>{
                res2 += ele.amount;
            })
        }
        
        td3_div.append(res2);
        td3.append(td3_div);
        let td4 = document.createElement('td');
        let td4_div = document.createElement('div');
        let res3 = res1 - res2;
        remittance[p1] = [p1, res3];
        
        td4_div.append(res3);
        td4.append(td4_div);
        tr.append(name_td);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        $('.res_table').append(tr);
    }
    
    let total_div = document.createElement('div');
    total_div.className = "total_string";
    let tstring = `총 금액은 ${total}원! `;
    total_div.append(tstring);
    $('.res_div2').append(total_div);
    
    remittance.sort((a, b) => a[1] - b[1]);

    for(let i = 0 ; i < people.length; i++){
        if (remittance[i][1] >= 0) {
            break;
        }
        for (let j = people.length - 1; j > -1; j--){
            if (remittance[j][1] === 0 || i === j) {
                continue;
            }
            let rem = remittance[j][1] + remittance[i][1];
     
            if (rem >= 0){
                let rem_div = document.createElement('div');
                rem_div.className = "remittance result_string";
                let string = `${people[remittance[i][0]]}은(는) ${people[remittance[j][0]]}에게 ${-remittance[i][1]}원 송금!`;
                rem_div.append(string);
                $('.res_div3').append(rem_div);
                //console.log(`${people[remittance[i][0]]}은(는) ${people[remittance[j][0]]}에게 ${-remittance[i][1]}원 송금!`);
                remittance[i][1] = 0;
                remittance[j][1] = rem;
                break;
            } else {
                let rem_div = document.createElement('div');
                rem_div.className = "remittance result_string";
                let string = `${people[remittance[i][0]]}은(는) ${people[remittance[j][0]]}에게 ${remittance[j][1]}원 송금!`;
                rem_div.append(string);
                $('.res_div3').append(rem_div);
                //console.log(`${people[remittance[i][0]]}은(는) ${people[remittance[j][0]]}에게 ${remittance[j][1]}원 송금!`);
                remittance[i][1] = rem;
                remittance[j][1] = 0;
            }
        }
   
    }
}
window.addEventListener("load", () => {
    people = JSON.parse(localStorage.getItem("people"));
    people=people.map(person =>{
        console.log(person[1])
        return person[1];
    })
    //localStorage.clear();
    res_table = createArray(people.length, people.length);
    for(let i=0;i<people.length;i++){
        for(let j=0; j< people < length; j++)
        {
            let re = document.createElement('div');
        }
    }
    saveRes();
    localStorage.setItem("people", JSON.stringify(people));


});

