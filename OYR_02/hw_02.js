import "./styles.css";

let imgArray = new Array();
imgArray[0] = "instagram_likes1.png";
imgArray[1] = "instagram_likes2.png";

let imgCnt = 0;

function change(){
    let objImg = document.getElementById("change_likes");
    objImg.src = imgArray[imgCnt];
    if(imgCnt == 0)
        imgCnt = 1;
    else if(imgCnt == 1)
        imgCnt = 0;
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};