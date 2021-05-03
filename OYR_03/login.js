
function check_email(){
    let email = document.getElementById('user_email');
    if(email.value == '')
        email.style.backgroundImage = "url()";
    else if(email.value.includes('@') && email.value.includes('.'))
        email.style.backgroundImage = "url('img/pass.png')";
    else
        email.style.backgroundImage = "url('img/nonpass.png')";
}

let check = {
    checkcheck: function (temp){
        if(temp.value == '')
            temp.style.backgroundImage = "url()";
        else
            temp.style.backgroundImage = "url('img/pass.png')";
    },
}

function check_name(){
    let temp = document.getElementById('user_name');
    check.checkcheck(temp);
}
function check_id(){
    let temp = document.getElementById('user_id');
    check.checkcheck(temp);
}
function check_pw(){
    let temp = document.getElementById('user_pw');
    check.checkcheck(temp);
}

function sign_up(){
    let email = document.getElementById('user_email').value;
    let name = document.getElementById('user_name').value;
    let id = document.getElementById('user_id').value;
    let pw = document.getElementById('user_pw').value;
    if(email != '' && name != '' && id != '' && pw != '')
        alert('로그인 되었습니다\n\n이메일: ' + email + '\n성명: ' + name + '\n사용자 ID: ' + id);
    else
        alert('모두 입력하셔야 합니다.');
}