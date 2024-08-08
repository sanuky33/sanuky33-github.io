function beli(produk, harga) {
    localStorage.removeItem('selectedProduk');
    localStorage.setItem('selectedProduk', JSON.stringify({ produk, harga }));
    window.location.href = 'transaksi.html';
}


function buatPesanan() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value.trim();
    const date = document.getElementById('date').value;

    if (!nama || !alamat || !date) {
        alert('Silakan lengkapi semua data.');
        return;
    }

    let mobilType = '';
    let price = 0;
    
    if (document.getElementById('Pajero Sport').checked) {
        mobilType = 'Pajero Sport';
        price = document.getElementById('Pajero Sport').getAttribute('data-price');
    } else if (document.getElementById('Avanza Veloz').checked) {
        mobilType = 'Avanza Veloz';
        price = document.getElementById('Avanza Veloz').getAttribute('data-price');
    } else if (document.getElementById('Honda Brio RS').checked) {
        mobilType = 'Honda Brio RS';
        price = document.getElementById('Honda Brio RS').getAttribute('data-price');
    } else {
        alert('Silakan pilih mobil yang ingin dibeli.');
        return;
    }

    const orderDate = new Date(date);

 

    const params = new URLSearchParams({
        nama,
        email,
        alamat,
        mobilType,
        price,
        date,
    });

    window.location.href = `invoice.html?${params.toString()}`;
}
