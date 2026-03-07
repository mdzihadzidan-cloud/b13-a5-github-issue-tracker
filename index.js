
const Username = document.getElementById("Username")
const Password = document.getElementById("Password")

document.getElementById("Sign-In").addEventListener("click",function(){

    const UsernameValue = Username.value ;
    const PasswordValue = Password.value ;
    if(UsernameValue == "admin" && PasswordValue == "admin123"){
        alert("Sign-In success")
        window.location.assign("./home.html")
    }else {
        alert("please give correct Username && Password")
    }
    // console.log("click login btn")
})