function alldata(){
    table.innerHTML = ``
    contactlist = JSON.parse(localStorage.getItem('listitem'))??[]
    contactlist.forEach(function (value,i){
        var table = document.getElementById('table');
        table.innerHTML +=`<tr>
        <td>${i+1}</td>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.address}</td>
        <td>${value.phone}</td>
        <td>
            <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                <i class="fa fa-edit"></i>
            </button>
        </td>
        <td>
            <button class="btn btn-sm btn-danger" onclick="removedata(${value.id})">
                <i class="fa fa-trash"></i>
            </button>
        </td>
    </tr>`
    });
}