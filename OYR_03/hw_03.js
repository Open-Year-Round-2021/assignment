let imgArray = new Array();
imgArray[0] = "img/instagram_likes1.png";
imgArray[1] = "img/instagram_likes2.png";

let imgCnt = 0;

let likes = {
    change: function (objImg){
        if(imgCnt == 0)
            imgCnt = 1;
        else if(imgCnt == 1)
            imgCnt = 0;
        objImg.src = imgArray[imgCnt];
    }
}

function change1(){
    let objImg = document.getElementById('likes1');
    likes.change(objImg);
}
function change2(){
    let objImg = document.getElementById('likes2');
    likes.change(objImg);
}
function change3(){
    let objImg = document.getElementById('likes3');
    likes.change(objImg);
}

// var modal = document.getElementById('myModal');
// var btn = document.getElementById('myBtn');
// var span = document.getElementById('close');

// btn.onclick = function(){
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = 'none';
// }

// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display = 'none';
//     }
// }

function function_modal(){
    document.getElementById('myModal').style.display="flex";
}

function function_close(){
    document.getElementById('myModal').style.display="none";
}