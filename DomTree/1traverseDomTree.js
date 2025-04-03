const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
//console.log(htmlElementNode.childNodes);
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.childNodes);

const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333";

const head = document.querySelector("head");
const title = head.querySelector("title");
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.childNodes);