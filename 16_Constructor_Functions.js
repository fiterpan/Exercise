let post = new Posts('a','b','c');

console.log(post);

function Posts(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comments = [];
    this.isLive = false;
}
