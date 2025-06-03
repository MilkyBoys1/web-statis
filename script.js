let keranjang = [];

function tambahKeKeranjang(nama, harga) {
  keranjang.push({ nama, harga });
  updateKeranjang();
}

function hapusDariKeranjang(index) {
  keranjang.splice(index, 1);
  updateKeranjang();
}

function updateKeranjang() {
  const list = document.getElementById('daftarKeranjang');
  const count = document.getElementById('cartCount');
  const totalEl = document.getElementById('totalHarga');
  list.innerHTML = '';

  keranjang.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.nama} - Rp ${item.harga.toLocaleString()}
      <button class="hapus-btn" onclick="hapusDariKeranjang(${index})">❌</button>
    `;
    list.appendChild(li);
  });

  const total = keranjang.reduce((sum, item) => sum + item.harga, 0);
  totalEl.textContent = `Total: Rp ${total.toLocaleString()}`;
  count.textContent = keranjang.length;
}

function checkout() {
  if (keranjang.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }
  const total = keranjang.reduce((sum, item) => sum + item.harga, 0);
  alert(`Terima kasih! Total belanja Anda Rp ${total.toLocaleString()}`);
  keranjang = [];
  updateKeranjang();
}

document.getElementById('cartButton').addEventListener('click', () => {
  document.getElementById('keranjang').classList.toggle('tampil');
});
