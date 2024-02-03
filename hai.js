const noMessages = [
    "gkk mau tau harus yaa",
    "yakin kamu nolak aku?",
    "nanti nyesel lo bilang gk ke aku",
    "Pokok nya harus  mau :)"
];

document.querySelector('.button_no').addEventListener('click', function() {
    let buttonYes = document.querySelector('.button_yes');
    let currentSize = window.getComputedStyle(buttonYes).fontSize;
    let newSize = (parseFloat(currentSize) + 10) + 'px';
    buttonYes.style.fontSize = newSize;

    let randomIndex = Math.floor(Math.random() * noMessages.length);
    alert(noMessages[randomIndex]);
});

document.querySelector('.button_yes').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    this.classList.add('explode');

    this.addEventListener('animationend', function() {
        // Setelah animasi selesai, kembalikan ukuran tombol ke setting default
        this.classList.remove('explode');
        document.getElementById('overlay').style.display = 'none';
        let defaultSize = '16px'; // Ganti dengan ukuran default sesuai kebutuhan
        this.style.fontSize = defaultSize;
    }, { once: true });

    setTimeout(function() {
        alert('Horeeee <3');
    }, 500);
});

function showFireworks() {
    document.getElementById('overlay').style.display = 'block';
    document.querySelector('.button_yes').classList.add('explode');

    document.querySelector('.button_yes').addEventListener('animationend', function() {
        this.classList.remove('explode');
        document.getElementById('overlay').style.display = 'none';
        let defaultSize = '16px'; // Ganti dengan ukuran default sesuai kebutuhan
        this.style.fontSize = defaultSize;
    }, { once: true });

    setTimeout(function() {
        alert('Horeeee <3');
    }, 500);
}

function showNoMessage() {
    let buttonYes = document.querySelector('.button_yes');
    let currentSize = window.getComputedStyle(buttonYes).fontSize;
    let newSize = (parseFloat(currentSize) + 5) + 'px';
    buttonYes.style.fontSize = newSize;

    let randomIndex = Math.floor(Math.random() * noMessages.length);
    alert(noMessages[randomIndex]);
}