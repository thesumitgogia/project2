const key = "articles"
let container = document.getElementById("blogs");
function read() {
    return articles = localStorage.getItem(key);
}
let html = ``;
for (let i = 0; i < JSON.parse(read()).length; i++) {

    html += `<div class="blog" key="${[i]}">
    ${JSON.parse(read())[i]}
    <i class="fa-solid fa-delete-left"></i>
    </div>`
}

blogs.innerHTML = html;

let articlesss = document.querySelectorAll(".blog");


for (const iterator of articlesss) {
    iterator.addEventListener("click", (e) => {
        const parentNode = e.target.parentNode;
        const position = Array.from(parentNode.childNodes).indexOf(e.target);
        let articles = localStorage.getItem(key);
        
    })
}
