function foo(){
    var firstname = document.getElementById("Firstname").value;
    var middlename = document.getElementById("Middlename").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("Phone Number").value;
    console.log(`Firstname:${firstname} Middlename:${middlename} lastname:${lastname}
        Email:${email} Phone Number:${phonenumber}`);
}