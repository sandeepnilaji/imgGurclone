async function show(m) {
  // let m = document.getElementById("most_v").value;
  // let n = document.getElementById("user_s").value;
  // let p = document.getElementById("user_s").value;
  // console.log(m);
  if (m === "Most Viral") {
    let res = await fetch(
      `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=yellow+cars&image_type=photo&pretty=true&per_page=200`
    );
    var data = await res.json();
  } else if (m === "User Submited") {
    let res = await fetch(
      `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=yellow+flowers&image_type=photo&pretty=true&per_page=200`
    );
    var data = await res.json();
  } else if (m === "Highest Scoring") {
    let res = await fetch(
      `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=buildings&image_type=photo&pretty=true&per_page=200`
    );
    var data = await res.json();
  } else {
    let res = await fetch(
      `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=news&image_type=photo&pretty=true&per_page=200`
    );
    var data = await res.json();
  }
  // return data;
  // console.log(data.hits);
  let s = data.hits;
  // console.log(s[0].user_id);
  show_item(data.hits);
}

show();
function show_item(d) {
  var show1 = document.getElementById("most");
  show1.innerHTML = null;
  d.forEach((el) => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    div1.className = "showing";
    let img = document.createElement("img");
    img.src = el.previewURL;
    img.style.height = "150px";
    div1.style.height = el.webformatHeight;

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.className = "p_color";
    p2.className = "p_color";
    p3.className = "p_color";

    p1.innerHTML = el.tags;
    p2.innerHTML = el.views + " views";
    p3.innerHTML = el.likes + " likes •" + el.comments + " Comments";

    div2.append(p1, p2, p3);
    div1.append(img, div2);

    show1.append(div1);
  });
}

var moretags = document.getElementById("hide");
// console.log(moretags.innerHTML);
function displaybox() {
  if (moretags.innerHTML == "MORE TAGS +") {
    document.getElementById("ticketsbox").style.display = "block";
    moretags.innerHTML = "LESS TAGS -";
  } else {
    document.getElementById("ticketsbox").style.display = "none";
    moretags.innerHTML = "MORE TAGS +";
  }
}
moretags.addEventListener("click", displaybox);
// search

let sea = document.getElementById("search_display");
var timerId;
async function star() {
  let value = document.getElementById("in").value;
  console.log(value);
  if (value.length == 0) {
    return false;
  }
  let char = await fetch(
    `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=${value}&image_type=photo&pretty=true&per_page=4`
  );
  let data = await char.json();
  // console.log(data.results);
  // console.log(data);

  return data.hits;
}
function throttle() {
  if (timerId) {
    return false;
  }
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 500);
  // console.log(timerId);
}
function shows(d) {
  sea.innerHTML = null;
  // console.log(d);
  d.forEach((el) => {
    let div1 = document.createElement("div");
    let p = document.createElement("p");
    // div1.className = "showing";
    p.innerHTML = el.user;
    p.style.paddingTop = "1%";
    p.style.paddingLeft = "1%";
    // div2.innerHTML = gender;
    div1.append(p);
    sea.append(div1);
  });
}
async function main() {
  let s = await star();
  // console.log(s);
  shows(s);
}
