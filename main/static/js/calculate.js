function add_(ele,clicked){
    let data = JSON.parse(localStorage.getItem("people"));
    let people = data.map((ele)=>{
        return ele['name'];
    })

    var btn = $('#'+ele);
    var clicked = btn.attr('clicked');
    let p_name = ele.substring(4,);
    let id = '#'+p_name;
    var object = $(id).find('.object')
    var amount = $(id).find('.amount');

    if(clicked==='0'){
        btn.attr('clicked','1');

        object.append(document.createElement('input',{type:'text'}));
        amount.append(document.createElement('input',{type:'number'}));

        let checkdiv = document.createElement('div',{class:'checkdiv'});
        checkdiv.className = 'row-vh d-flex flex-row justify-content-between'
        people.forEach(()=>{
            let div = document.createElement("div");
            div.className = "checkbox";
            div.innerText = 'O';
            checkdiv.append(div);
        })
        $(id).find('.checkbox').append(checkdiv);
    }
    else if(clicked==='1'){
        btn.attr('clicked','1');


    }

}

function setTable() {
    let data = JSON.parse(localStorage.getItem("people"));
    console.log(data);
    let people = data.map((ele)=>{
        console.log(ele);
        console.log(ele['name']);
        return ele['name'];
    })
    console.log(people);

    let first_row = $('#people_list');

    people.forEach((ele)=>{
        //first row div append
        let div = document.createElement("div");
        div.className = "person";
        div.innerText = ele;

        first_row.append(div);

        //tr append
        let tr = document.createElement('tr');
        tr.id = ele;
        let name = document.createElement('td');
        let name_div = document.createElement('div');
        name_div.append(ele);
        let button = document.createElement('button');
        button.id = 'btn_'+ele;
        button.setAttribute('clicked',0)
        button.addEventListener("click", () => {
           add_(button.id);
        });
        button.append(document.createTextNode("+"));
        name_div.append(button);
        name.append(name_div);
        tr.append(name);
        let object = document.createElement('td');
        object.className="object";
        tr.append(object);
        let amount = document.createElement('td');
        amount.className="amount";
        tr.append(amount);
        let checkbox = document.createElement('td');
        checkbox.className="checkbox";
        tr.append(checkbox);

        $('.cal_table').append(tr);
    })

}