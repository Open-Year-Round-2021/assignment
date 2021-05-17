

// let check = {
//     checkemail: function(temp){
//         if(temp.value == '')
//             temp.style.backgroundImage = "url()";
//         else if(temp.value.includes('@') && temp.value.includes('.'))
//             temp.style.backgroundImage = "url('img/pass.png')";
//         else
//             temp.style.backgroundImage = "url('img/nonpass.png')";
//     },
//     check: function (temp){
//         if(temp.value == '')
//             temp.style.backgroundImage = "url()";
//         else
//             temp.style.backgroundImage = "url('img/pass.png')";
//     },
//     checkpw: function(temp){
//         if(temp.value.length >= 8)
//             temp.style.backgroundImage = "url('img/pass.png')";
//         else
//             temp.style.backgroundImage = "url('img/nonpass.png')";
//     }
// }

// function check_email(){
//     let temp = document.getElementById('user_email');
//     check.checkemail(temp);
// }

// function check_name(){
//     let temp = document.getElementById('user_name');
//     check.check(temp);
// }
// function check_id(){
//     let temp = document.getElementById('user_id');
//     check.check(temp);
// }
// function check_pw(){
//     let temp = document.getElementById('user_pw');
//     check.checkpw(temp);
// }

// function sign_up(){
//     let email = document.getElementById('user_email').value;
//     let name = document.getElementById('user_name').value;
//     let id = document.getElementById('user_id').value;
//     let pw = document.getElementById('user_pw').value;
//     if(email != '' && name != '' && id != '' && pw != '')
//         alert('회원가입 되었습니다\n\n이메일: ' + email + '\n성명: ' + name + '\n사용자 ID: ' + id);
//     else
//         alert('모두 입력하셔야 합니다.');
// }