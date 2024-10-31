const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
    changeImage(name)
}

const images = [
    'thumbup.png',
    'thumbup2.png',
    'thumbup3.png',
    'thumbup4.jpg',
    'thumbup5.png',
    'thumbup6.png',
    'thumbupred.png'
];

const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'brown', 'white', 'gray', 'limegreen', 'pink', 'cyan', 'turquoise']

function randomize() {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const img = document.getElementById('colorImage')

    img.src = images[randomImageIndex];
    document.body.style.backgroundColor = colors[randomColorIndex];
}

function changeImage(name) {
    const img = document.getElementById('colorImage')
    switch (name) {
        case 'green':
            img.src = 'thumbup2.png';
            break;
        case 'red':
            img.src = 'thumbupred.png';
            break;
        case 'blue':
            img.src = 'thumbup3.png';
            break;
        default:
            img.src = 'thumbup.png';
            break;
    }
}