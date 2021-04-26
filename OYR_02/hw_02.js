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