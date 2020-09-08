let net;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function onload() {
 let imgEl = document.getElementById('img');
 imgEl.src = "http://1.bp.blogspot.com/_3gQDLaB2ZsU/TNqPpOrfprI/AAAAAAAACLg/Wwg7s80k63U/s1600/siberian-husky-3.jpg";
}
// http://1.bp.blogspot.com/_3gQDLaB2ZsU/TNqPpOrfprI/AAAAAAAACLg/Wwg7s80k63U/s1600/siberian-husky-3.jpg
// http://foodanddrink.scotsman.com/wp-content/uploads/2017/06/chihuahua-2137819_1280.jpg
// https://i.ytimg.com/vi/yQaWpFcFijQ/hqdefault.jpg

function changeImage() {
 let imgEl = document.getElementById('img');
 let newUrl = document.getElementById('url');
 if (newUrl.value.trim().length==0) {
    alert("empty url");
    return;
 }

 if (newUrl.value.toLowerCase().startsWith("https")) {
    alert("https is not supported yet");
    return;
 }

 imgEl.src = newUrl.value;
}

function record(url, result) {
 let error = document.getElementById('error');
 error.innerHTML = result;
}

async function prediction() {
  cleanup();

  net = await mobilenet.load();

  // making prediction for the image
  const imgEl = document.getElementById('img');
  let spinner = document.getElementById('spinner');
  spinner.style.display = "block"
  await sleep(1000);
  const results = await net.classify(imgEl);

  let table = document.querySelector('table');
  if (table.rows.length==0) {
    spinner.innerHTML = "My best guess";
    let data = Object.keys(results[0]);
    generateTableHead(table, data);
    generateTable(table, results);
    table.style.display = "block"
  }
  spinner.style.display = "none"
}

async function cleanup() {
  let table = document.querySelector('table');
  let spinner = document.getElementById('spinner');
  spinner.innerHTML = "";
  spinner.style.display = "none"
  table.innerHTML = "";
  table.style.display = "none"
}

<!-- Author: Brian Zou -->