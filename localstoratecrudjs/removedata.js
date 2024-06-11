function removedata(id){
    contactlist = JSON.parse(localStorage.getItem('listitem'))??[]
    contactlist = contactlist.filter(function (value){
        return value.id != id;
    })
    localStorage.setItem('listitem',JSON.stringify(contactlist))
    alldata()
}