function save(){
    contactlist = JSON.parse(localStorage.getItem('listitem'))??[]
    var id
    contactlist.length !=0 ? contactlist.findLast((item)=>id = item.id) : id=0
    if( document.getElementById('id').value)
    {
        contactlist.forEach(element => {
            if(document.getElementById('id').value == element.id){
                value.name = document.getElementById('name').value,
                value.age = document.getElementById('age').value,
                value.address = document.getElementById('address').value,
                value.phone = document.getElementById('phone').value
            }
        });
        document.getElementById('id').value=''
    }
    else{
        var item={
            id : id + 1,
            name : document.getElementById('name').value,
            age : document.getElementById('age').value,
            address : document.getElementById('address').value,
            phone : document.getElementById('phone').value,
        }
        contactlist.push(item)
    }
    localStorage.setItem('listitem',JSON.stringify(contactlist))
    alldata()
    document.getElementById('form').reset()
}