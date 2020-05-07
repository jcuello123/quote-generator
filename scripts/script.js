function getQuote() {


    let quote = fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('card-text').innerHTML = data.content;
            document.getElementById('card-title').innerHTML = '-' + data.author;
        })

    getImage();
}

function getImage() {
    let id = randNum();
    let src = 'https://picsum.photos/id/' + id + '/1920/1080';
    document.getElementById('card-img').src = src;
}

function randNum() {
    return Math.floor(Math.random() * 1000);
}