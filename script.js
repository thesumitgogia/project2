const key = "articles"
let btn = document.getElementById("btn");
let blog = document.getElementById("blog");
// write articles/blogs 
function write(article) {
    let articles = localStorage.getItem(key);
    if (articles != null) {
        let x = JSON.parse(articles);
        x.push(article);
        localStorage.setItem([key], JSON.stringify(x));
        return;
    }
    else {
        let obj = [article]
        localStorage.setItem([key], JSON.stringify(obj));
    }

}

// read all articles/blogs 
function read() {
    return articles = localStorage.getItem(key);
}

// remove all articles/blogs 
function removeAll() {
    localStorage.clear();
}

// function remove() { }

btn.addEventListener("click", () => {
    // console.log(blog.value);
    write(blog.value);

    blog.value = null;
})
console.log(JSON.parse(read()));