let callHistory = [];

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}


function historyCall(name,number,time) {
  let parentDiv = document.getElementById("parent-div");
  // console.log(parentDiv);
  const div = document.createElement("div");
  console.log(callHistory.name)
  console.log(callHistory.time)

  div.innerHTML = `
                  <div class="flex justify-between items-center bg-gray-100 rounded-lg p-2 mt-3">
                  <div class="leading-none">
                    <h6 class="font-semibold text-[18px]">${name}</h6>
                    <p class="text-gray-400 text-[14px]">${number}</p>
                  </div>
                  <div>
                    <p class="text-[14px] text-gray-500">${time}</p>
                  </div>
                </div>`;

  parentDiv.appendChild(div);
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
// call section
document
  .getElementById("emergency-call-btn")
  .addEventListener("click", function () {
    alert("National Emergency :" + "999");

    const data = {
      name: "National Emergency Number",
      number: 999,
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);
    historyCall(data.name,data.number,data.time);
  });

// copy section

document.getElementById("btn-emergency").addEventListener("click", function () {
  let text = getInnerText("emergency-number");
  console.log(text);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied :" + text);
      alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

document
  .getElementById("Electricity-btn")
  .addEventListener("click", function () {
    let text = getInnerText("Electricity-num");
    console.log(text);

    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("copied :" + text);
        alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
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
      console.log("copied :" + text);
      alert("copied :" + text);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
