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
        let div = document.createElement("div");
        div.className = "person";
        div.innerText = ele;

        first_row.append(div);
    })
    $('.cal_table').find('tr td:last-child > div').each (function (index, ele) {
      console.log(typeof ele);
      console.log(ele);
      people.forEach(()=>{
        let div = document.createElement("div");
        div.className = "checkbox";
        div.innerText = 'O';

        ele.append(div);
    })


    });

}