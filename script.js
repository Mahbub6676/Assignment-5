// heart count

const totalHearts = document.getElementById('total-heart');
const hearts = document.querySelectorAll("#heart");
let heart = 0;
for(const hrt of hearts){
    hrt.addEventListener("click", function(){
        heart++;
        totalHearts.innerText = heart;
    })
}