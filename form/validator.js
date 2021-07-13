function checkValidate() {
    var inputValue = document.getElementsByTagName("input");

    var hoTen = inputValue[0].value;
    var email = inputValue[1].value;
    var passWord = inputValue[2].value;





    if (hoTen.length == 0) {
        document.getElementById("name-error").innerHTML = "Vui lòng điền trường này";

    } else if (hoTen.length > 0) {
        document.getElementById("name-error").innerHTML = "*";
        if (hoTen.length <10){
        document.getElementById("name-error").innerHTML = "Tên quá ngắn";

        }
    }



    if (email.length == 0) {
        var emailErr = document.getElementById("email-error")
        emailErr.innerHTML = "Vui lòng điền email";

    } else if (email.length > 0) {
        document.getElementById("email-error").innerHTML = "*";
        var resultEmail = validateEmail(email);
        if (resultEmail == true) {
            document.getElementById("email-error").innerHTML = "*";

        } else {
            document.getElementById("email-error").innerHTML = "Email không hợp lệ";

        }
    }


    if (passWord.length == 0) {
        document.getElementById("password-error").innerHTML = "Vui lòng điền Password";
    } else if (passWord.length > 0) {
    

        var passWordCheck = checkPwd(passWord);
        if (passWordCheck == "Good") {
            document.getElementById("password-error").style.color = "green";
            document.getElementById("password-error").innerHTML = "Good";
        }else if (passWordCheck != "Good"){
            document.getElementById("password-error").innerHTML = `${passWordCheck}`;

        }
    }

}


// regular validate Email: return true or false
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function checkPwd(str) {
    if (str.length < 8) {
        return ("Tối thiểu 8 kí tự");
    } else if (str.length > 50) {
        return ("Quá dài!");
    } else if (str.search(/\d/) == -1) {
        return ("Phải có số");
    } else if (str.search(/[a-zA-Z]/) == -1) {
        return ("Phải có chữ kết hợp");
    } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        return ("Mật khẩu yếu thêm kí tự đặc biệt và bắt đầu bằng chữ In Hoa");
    }
    return ("Good");
};

