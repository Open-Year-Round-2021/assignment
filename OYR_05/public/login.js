
let imgArray = new Array();
imgArray[0] = "img/hw_01_02.jpg";
imgArray[1] = "img/hw_01_03.jpg";
imgArray[2] = "img/hw_01_04.jpg";
imgArray[3] = "img/hw_01_05.jpg";
imgArray[4] = "img/hw_01_06.jpg";

let imgCnt = 0;

function showImage(){
    let objImg = document.getElementById("imgs");
    objImg.src = imgArray[imgCnt];
    if(imgCnt < imgArray.length - 1)
        imgCnt++;
    else
        imgCnt = 0;
    setTimeout(showImage, 1500);
}




function sign_up(){
    let id = document.getElementById('user_id').value;
    let pw = document.getElementById('user_pw').value;
    if(id == 'oyr@naver.com' && pw == 'oyroyroyr')
        alert('로그인 되었습니다\n\n사용자 ID: ' + id);
    else
        alert('다시 입력하셔야 합니다.');
}