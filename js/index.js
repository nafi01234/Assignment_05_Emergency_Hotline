function getInnerText(id) {
  return parseInt(document.getElementById(id).innerText);
}

function setInnerText(id,value){
  document.getElementById(id).innerText=value
  

}

let hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let heartsCount = getInnerText("heart-count");
    console.log(heartsCount);

    heartsCount=heartsCount+1;
    setInnerText("heart-count",heartsCount);

  });
}
