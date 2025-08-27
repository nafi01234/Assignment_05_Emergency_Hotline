let callHistory = [];

function getInnerText(id) {
  return document.getElementById(id).innerText;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function historyCall(name, number, time) {
  let parentDiv = document.getElementById("parent-div");
  // console.log(parentDiv);
  const div = document.createElement("div");
  console.log(callHistory.name);
  console.log(callHistory.time);

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
    let coins = getInnerText("coins");

    coins = parseInt(coins);

    if (coins < 20) {
      alert("You don't have enough coin in your account");
      return;
    }

    let newCoin = coins - 20;
    setInnerText("coins", newCoin);

    alert("National Emergency :" + "999");

    const data = {
      name: "National Emergency Number",
      number: 999,
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);
    historyCall(data.name, data.number, data.time);
  });

document
  .getElementById("police-call-btn")
  .addEventListener("click", function () {
    let coins = getInnerText("coins");

    coins = parseInt(coins);

    if (coins < 20) {
      alert("You don't have enough coin in your account");
      return;
    }

    let newCoin = coins - 20;
    setInnerText("coins", newCoin);

    alert("Police Helpline Number :" + "999");

    const data = {
      name: "Police Helpline Number",
      number: 999,
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);
    historyCall(data.name, data.number, data.time);
  });

document.getElementById("fair-call-btn").addEventListener("click", function () {
  let coins = getInnerText("coins");

  coins = parseInt(coins);

  if (coins < 20) {
    alert("You don't have enough coin in your account");
    return;
  }

  let newCoin = coins - 20;
  setInnerText("coins", newCoin);

  alert("Fire Service Number :" + "999");

  const data = {
    name: "Fire Service Number",
    number: 999,
    time: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  console.log(callHistory);
  historyCall(data.name, data.number, data.time);
});

document
  .getElementById("Ambulance-call-btn")
  .addEventListener("click", function () {
    let coins = getInnerText("coins");

    coins = parseInt(coins);

    if (coins < 20) {
      alert("You don't have enough coin in your account");
      return;
    }

    let newCoin = coins - 20;
    setInnerText("coins", newCoin);

    alert("Ambulance Service :" + "91994-99999999");

    const data = {
      name: "Ambulance Service",
      number: "1994-999999",
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);
    historyCall(data.name, data.number, data.time);
  });

document.getElementById("Women-btn").addEventListener("click", function () {
  let coins = getInnerText("coins");

  coins = parseInt(coins);

  if (coins < 20) {
    alert("You don't have enough coin in your account");
    return;
  }

  let newCoin = coins - 20;
  setInnerText("coins", newCoin);

  alert("Women & Child Helpline :" + "109");

  const data = {
    name: "Women & Child Helpline",
    number: "109",
    time: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  console.log(callHistory);
  historyCall(data.name, data.number, data.time);
});

document.getElementById("Anti-btn").addEventListener("click", function () {
  let coins = getInnerText("coins");

  coins = parseInt(coins);

  if (coins < 20) {
    alert("You don't have enough coin in your account");
    return;
  }

  let newCoin = coins - 20;
  setInnerText("coins", newCoin);

  alert("Anti-Corruption Helpline :" + "106");

  const data = {
    name: "Anti-Corruption Helpline",
    number: "106",
    time: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  console.log(callHistory);
  historyCall(data.name, data.number, data.time);
});

document
  .getElementById("Electricity-call-btn")
  .addEventListener("click", function () {
    let coins = getInnerText("coins");

    coins = parseInt(coins);

    if (coins < 20) {
      alert("You don't have enough coin in your account");
      return;
    }

    let newCoin = coins - 20;
    setInnerText("coins", newCoin);

    alert("Electricity Helpline :" + "16216");

    const data = {
      name: "Electricity Helpline",
      number: "16216",
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);
    historyCall(data.name, data.number, data.time);
  });

document.getElementById("b-call-btn").addEventListener("click", function () {
  let coins = getInnerText("coins");

  coins = parseInt(coins);

  if (coins < 20) {
    alert("You don't have enough coin in your account");
    return;
  }

  let newCoin = coins - 20;
  setInnerText("coins", newCoin);

  alert("Brac Helpline :" + "16445");

  const data = {
    name: "Brac Helpline",
    number: "16445",
    time: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  console.log(callHistory);
  historyCall(data.name, data.number, data.time);
});

document
  .getElementById("BangladeshRailwayHelpline-btn")
  .addEventListener("click", function () {
    let coins = getInnerText("coins");

    coins = parseInt(coins);

    if (coins < 20) {
      alert("You don't have enough coin in your account");
      return;
    }

    let newCoin = coins - 20;
    setInnerText("coins", newCoin);

    alert("Bangladesh Railway Helpline :" + "163");

    const data = {
      name: "Bangladesh Railway Helpline",
      number: "163",
      time: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);
    historyCall(data.name, data.number, data.time);
  });

// copy section

document.getElementById("btn-emergency").addEventListener("click", function () {
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
    let c = getInnerText("copys");
    c = parseInt(c) + 1;
    setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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
  let c = getInnerText("copys");
  c = parseInt(c) + 1;
  setInnerText("copys", c);
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

// clear
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("parent-div").innerText = "";
});
