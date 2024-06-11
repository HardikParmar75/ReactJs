function find(id){
    contactlist = JSON.parse(localStorage.getItem('listitem'))??[]
    contactlist.forEach(function (value) {
        if(value.id==id){
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('age').value = value.age
            document.getElementById('address').value = value.address
            document.getElementById('phone').value = value.phone
        }
        
    });
    localStorage.setItem('listitem',JSON.stringify(contactlist))
}