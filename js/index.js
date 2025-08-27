function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}



// increment heart
let hearts = document.getElementsByClassName("heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let heartsCount = getInnerText("heart-count");
    console.log(heartsCount);
    heartsCount = parseInt(heartsCount);

    heartsCount = heartsCount + 1;
    setInnerText("heart-count", heartsCount);
  });
}

// copy section

document.getElementById("btn-emergency").addEventListener("click", function () {
  let text = getInnerText("emergency-number");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});


document.getElementById("Police-btn").addEventListener("click", function () {
  let text = getInnerText("Police-number");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

document.getElementById("fire-btn").addEventListener("click", function () {
  let text = getInnerText("fire-number");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});


document.getElementById("ambulance-btn").addEventListener("click", function () {
  let text = getInnerText("ambulance-number");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});


document.getElementById("w-btn").addEventListener("click", function () {
  let text = getInnerText("w-num");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

document.getElementById("a-btn").addEventListener("click", function () {
  let text = getInnerText("a-num");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

document.getElementById("Electricity-btn").addEventListener("click", function () {
  let text = getInnerText("Electricity-num");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

document.getElementById("b-btn").addEventListener("click", function () {
  let text = getInnerText("b-num");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

document.getElementById("Railway-btn").addEventListener("click", function () {
  let text = getInnerText("Railway-num");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :"+text)
      alert("copied :" + text)
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
