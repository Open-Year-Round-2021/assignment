
let imgArray = new Array();
imgArray[0] = "hw_1_2.jpg";
imgArray[1] = "hw_1_3.jpg";
imgArray[2] = "hw_1_4.jpg";
imgArray[3] = "hw_1_5.jpg";
imgArray[4] = "hw_1_6.jpg";

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