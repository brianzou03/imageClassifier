let net;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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

module.exports = {
  prediction,
  cleanup
};

<!-- Author: Brian Zou -->