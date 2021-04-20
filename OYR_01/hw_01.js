
let imgArray = new Array();
imgArray[0] = "hw_01_02.jpg";
imgArray[1] = "hw_01_03.jpg";
imgArray[2] = "hw_01_04.jpg";
imgArray[3] = "hw_01_05.jpg";
imgArray[4] = "hw_01_06.jpg";

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