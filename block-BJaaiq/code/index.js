let root = document.querySelector("ul");

let maxItem = 3;
let pseudoIndex = 0;
let count = 0;

function addQuote() {
    count ++;
  for (; pseudoIndex < count*maxItem; pseudoIndex++) {
    let li = document.createElement("li");
    let bq = document.createElement("blockquote");
    bq.innerText = quotes[pseudoIndex].quoteText;
    let ct = document.createElement("cite");
    ct.innerText = quotes[pseudoIndex].quoteAuthor;
    li.append(bq);
    li.append(ct);

    root.append(li);
  }
//   pseudoIndex = 0;
}

document.addEventListener("scroll", () => {
  let doc = document.documentElement;
  console.log(doc.scrollTop + doc.clientHeight);
  if (
    doc.scrollTop + doc.clientHeight >= doc.scrollHeight &&
    pseudoIndex < quotes.length
  ) {
    addQuote();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  alert(`The content of the DOM is loaded`);

  addQuote();
});
