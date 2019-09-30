// DOM Selection
// document.getElementById()

const judul = document.getElementById('judul');

judul.innerHTML =  '<strong><i>Vento Deco</i></strong>'



judul.style.color = 'red';
judul.style.backgroundColor = 'yellow';


judul.setAttribute('name', 'vento');
judul.setAttribute('class', 'coba');  


const p2 = document.querySelector('.p2');


// Buat elemen baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Saya sedang makan');

// simpan tulisan ke dalam paragraf

pBaru.appendChild(teksBaru);

// simpan pBaru ke akhir sectionA

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('item baru');

liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');

const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);


const lis = document.createElement('li');
const tekslis = document.createTextNode('ayam goreng');

lis.appendChild(tekslis);

const uls = document.querySelector('section#b ul');

const lis3 = uls.querySelector('li:nth-child(3)');

uls.insertBefore(lis, lis3);


// ganti p4 menjadi h2


const B = document.getElementById('b');
const p4 = B.querySelector('p');

const h2Baru = document.createElement('h2');
const teksh2 = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksh2);

B.replaceChild(h2Baru, p4);

h2Baru.style.backgroundColor = 'lightblue';