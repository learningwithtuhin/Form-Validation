console.log("page loaded");

function handleForm(e){
e.preventDefault();
validatinFormNew();
}


function validatinFormNew() {

//e.preventDefault();
console.log("clicked")
let c=0;
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
let name = document.getElementById('contact-name').value;
let phone = document.getElementById("contact-phone").value;
let email = document.getElementById("contact-email").value;
let message = document.getElementById("contact-message").value;

console.log(name, phone, email, message);



if(validateName()){
    c=1;
}else{
    c=0;
}

if(validatePhone()){
    c=1;
}else{
    c=0;
}

if(validateEmail()){
    c=1;
}else{
    c=0;
}


if(validateMessage()){
    c=1;
}else{
    c=0;
}

// if (c == 1) {
//     formd.style.display = 'none';
//     let arr = [name, phone, email, message];

//     let tableHTML = `<table id="fulldata" border="1" style="border-collapse: collapse; width: 100%;">
//                         <thead>
//                             <tr>
//                                 <th class="user_hdng">Field</th>
//                                 <th class="user_hdng">Details</th>
//                             </tr>
//                         </thead>
//                         <tbody>`;

    
//     let fields = ['Name', 'Phone', 'Email', 'Message'];

    
//     arr.forEach((value, index) => {
//         tableHTML += `<tr id="user_row">
//                         <td class="user_data">${fields[index]}</td>
//                         <td class="user_data">${value}</td>
//                       </tr>`;
//     });

//     tableHTML += `   </tbody>
//                   </table>`;

//     successtxt.innerHTML = `<i class="fas fa-check-circle"></i> Form has been successfully submitted!<br>${tableHTML}`;
// }



if(c == 1){
    formd.style.display = 'none';
    let arr = [name, phone, email, message];

    console.log(arr);

    successtxt.innerHTML =`<i class="fas fa-check-circle"></i> Form has been successfully submitted!<br>`
}



}

function validateMessage(){
    let messageError = document.getElementById("message-error");
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
     return true;
}

function validateName(){
    
let name = document.getElementById('contact-name').value;
let nameError = document.getElementById("name-error");

    if(name==''){
        nameError.innerHTML = "Please provide your name";
      return false;
        }else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
            nameError.innerHTML = 'Write full name';
            return false;
        }
        else{
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
        }
}

function validatePhone(){
    
    let phone = document.getElementById("contact-phone").value;
    let phoneError = document.getElementById("phone-error");
    
    if(phone==''){
        phoneError.innerHTML = "Phone no is required";
        return false;
    } else if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be in 10 digits';
        return false;
    } else if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    } else{
        phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
    }
    }


    function validateEmail(){
    
        let email = document.getElementById("contact-email").value;
        let emailError = document.getElementById("email-error");
        
        if(email==''){
            emailError.innerHTML = 'Email is required';
            return false;
        }else  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            emailError.innerHTML = 'Email invalid';
            return false;
        } else{
            emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
            return true;
        }
        }