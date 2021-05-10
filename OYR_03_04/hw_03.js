let imgArray = new Array();
imgArray[0] = "img/instagram_likes1.png";
imgArray[1] = "img/instagram_likes2.png";

let imgCnt = 0;

let like_count = 0;

let likes = {
    change: function (objImg, count){
        if(imgCnt == 0)
        {
            imgCnt = 1;
            like_count++;
            count.innerText = `${like_count}개`;
        }
        else if(imgCnt == 1)
        {
            imgCnt = 0;
            like_count--;
            if(like_count == 0){
                count.innerText = ``;
            }
            else{
                count.innerText = `${like_count}개`;
            }

        }
        objImg.src = imgArray[imgCnt];
    }
}

function change1(){
    let objImg = document.getElementById('likes1');
    let count = document.getElementsByClassName('like_count1')[0];
    console.log(count);
    likes.change(objImg, count);
}
function change2(){
    let objImg = document.getElementById('likes2');
    let count = document.getElementsByClassName('like_count2')[0];
    console.log(count);
    likes.change(objImg, count);
}
function change3(){
    let objImg = document.getElementById('likes3');
    let count = document.getElementsByClassName('like_count3')[0];
    console.log(parseInt(count));
    likes.change(objImg, count);
}




let modal = {
    change: function (temp){
        if(temp.style.display == "none")
            temp.style.display = "flex";
        else if(temp.style.display == "flex")
            temp.style.display = "none";
    }
}

function function_modal(temp){
    console.log(temp);
    modal.change(temp);
}
