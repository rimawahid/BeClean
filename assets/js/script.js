// faq from

function getQus() {
    let name = document.forms['userQus'].elements[0].value;
    console.log(name)
    let email = document.forms['userQus'].elements[1].value;
    console.log(email)
    let phone = document.forms['userQus'].elements[2].value;
    console.log(phone)
    let qus = document.forms['userQus'].elements[2].value;
    console.log(qus)

    if (name == "" || email == "" || phone == "" || qus == "") {
        //alert("Please must be filled all Field");
        let ans = document.getElementById("demo");
        ans.style.display = "block";
        ans.innerHTML = "Please must be filled all Field"
        return false
    } else {
        //alert("We get Your Question");
        let ans = document.getElementById("demo");
        ans.style.display = "block"
        ans.innerHTML = "We get Your Question";
        return false

    }

}

// current date

let currentDate = document.getElementById('currentDate')
.value = new Date().toISOString().substring(0, 10);

// Schedule a Pickup from

function getSchedule() {
//     let scheduleData =  "";
    
//    for(i=0; i<8; i++){
//     scheduleData += document.forms['scheduleForm'].elements[i].name + " : " + document.forms['scheduleForm'].elements[i].value + "\n";
// }
    let name = document.forms['scheduleForm'].elements[0].value;
    console.log(name)
    let email = document.forms['scheduleForm'].elements[1].value;
    console.log(email)
    let phone = document.forms['scheduleForm'].elements[2].value;
    console.log(phone)
    let address = document.forms['scheduleForm'].elements[3].value;
    console.log(address)
    let service = document.forms['scheduleForm'].elements[4].value;
    console.log(service)
    let currentDate = document.forms['scheduleForm'].elements[5].value;
    console.log(currentDate)
    let deliveryDate = document.forms['scheduleForm'].elements[6].value;
    console.log(deliveryDate)
    let qus = document.forms['scheduleForm'].elements[7].value;
    console.log(qus)


    if (name == "" || email == "" || phone == "" || phone == "" || address == "" || service == "" || deliveryDate == "" || currentDate == "" ) {
        //alert("Please must be filled all Field");
        // let ans = document.getElementById("demo");
        // ans.style.display = "block";
        // ans.innerHTML = "Please must be filled all Field"
        console.log(" not ok")
        return false
    } else {
        //alert("We get Your Question");
        // let ans = document.getElementById("demo");
        // ans.style.display = "block"
        // ans.innerHTML = "We get Your Question";
        console.log("ok")
        window.location.href = "orderConfirm.html"
        
        // return false

    }

 
}

//order Details  

// function showOrderDetails(x){
//     document.getElementById("demo").innerHTML = name;
// }



