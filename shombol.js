async function getItems() {
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await respons.json();
    console.log(
      data.filter((item) => item.completed === true).map((item) => item.title),
    );
  } catch (error) {
    console.log(error);
  }
}
// getItems();

////////////////////////////////////////

const pagination = document.getElementById("pagination");
const itemsBox = document.getElementById("items");
const pageNumber = document.getElementById("pageNumber");

let items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let pge = 8;
let crentpege = 1;
let totalpage = Math.ceil(items.length / pge);

for (let i = 1; i <= totalpage; i++) {
  pagination.innerHTML += `<button onclick="changePage(${i})">${i}</button>`;
}

function changePage(page) {
  crentpege = page;
  let start = (page - 1) * pge;
  let end = start + pge;
  let finale = items.slice(start, end);
  itemsBox.innerHTML = "";
  finale.map((item) => {
    itemsBox.innerHTML += `<p style="font-size: 20px">${item}</p>`;
  });
  pageNumber.innerHTML = `page${page}`;
}
function previousPage() {
  if (crentpege > 1) {
    crentpege--;
    changePage(crentpege);
  }
}
function nextPage() {
  if (crentpege < totalpage) {
    crentpege++;
    changePage(crentpege);
  }
}

changePage(1);
