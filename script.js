function imgSlider(anything) {
    // Cari gambar besar
    const starbucks = document.querySelector('.starbucks');
    
    // Efek ganti gambar biar halus (opsional: geser sedikit)
    starbucks.style.opacity = '0';
    starbucks.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        starbucks.src = anything; // Ganti sumber gambar
        starbucks.style.opacity = '1';
        starbucks.style.transform = 'translateY(0)';
    }, 200); // Tunggu 0.2 detik baru muncul lagi
}

function changeCircleColor(color) {
    // Cari lingkaran background
    const circle = document.querySelector('.circle');
    
    // Ganti warnanya
    circle.style.background = color;
    
    // Bonus: Ganti juga warna teks "Order Now" dan span "Starbucks" biar matching
    document.querySelector('.content .textBox h2 span').style.color = color;
    document.querySelector('.content .textBox a').style.background = color;
}
