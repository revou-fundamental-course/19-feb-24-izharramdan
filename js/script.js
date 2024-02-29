

const navbarNav = document.querySelector(".navbar-nav");


const hamburger = document.querySelector("#hamburger-menu");


function sendForm() {
  const form = document.getElementById('contact-form');
  const formResult = document.querySelector('.form-result');
  const content = document.querySelector('.content');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = form.querySelector('input[name="nama"]').value;
    const tanggalLahir = form.querySelector('input[name="tanggal_lahir"]').value;
    const jenisKelamin = form.querySelector('input[name="jenis_kelamin"]:checked');
    const pesan = form.querySelector('input[name="pesan"]').value;

    if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
      alert('Data harus lengkap');
      return;
    }

    const waktuSaatIni = new Date().toLocaleString();

    console.log('Menampilkan data form:');
    console.log('Nama:', nama);
    console.log('Tanggal Lahir:', tanggalLahir);
    console.log('Jenis Kelamin:', jenisKelamin.value);
    console.log('Pesan:', pesan);

    content.innerHTML = `<h1>HI <span>${nama}</span><br> Selamat Datang</h1>`
    formResult.innerHTML = `
      <b>Waktu saat ini : </b>${waktuSaatIni}<br>
      <b>Nama Lengkap : </b>${nama}<br>
      <b>Tanggal Lahir : </b>${tanggalLahir}<br>
      <b>Jenis Kelamin : </b>${jenisKelamin.value}<br>
      <b>Pesan : </b>${pesan}<br>
    `;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  sendForm();
});


