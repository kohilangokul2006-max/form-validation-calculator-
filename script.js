function fun(){
  let button=document.getElementById("btn").value
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let numbers = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("cpassword").value;
  if (name === "" || email === "" || numbers === "" || password === "" || confirmPassword === "") {
    alert("plz full the form");
    return;
  }
  if(numbers.length!==10){
    alert("number must be 10 digits");
    return;
  }
  if (password.length<8){
    alert("password must be  8 letters");
    return;
  }
  
  if (password !== confirmPassword) {
    alert("Password not matching");
    return;
  }
  alert("Register success ✅");
  window.location.href="MAIN.html";
}




  
  





