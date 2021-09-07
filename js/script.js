
const container = document.querySelector('.container');

for ( var i = 1; i<=100; i++) {
				const blocks = document.createElement('div');
				blocks.classList.add('block');
				container.appendChild(blocks);
};

function generate() {
				anime({
								targets: '.block',
								translateX: function(){
												return anime.random(-400,400);
								},
								translateY: function(){
												return anime.random(-300,300);
								},
								scale: function(){
												return anime.random(0,5);
								}
				})
};

const card = document.querySelector('.card');
const toggle = document.querySelector('.down');
toggle.onclick = function () {
				card.classList.toggle('active');
				generate();
};

const sidebar = document.getElementById('sidebar');
const tggl = document.querySelector('.tggl');
const ext = document.querySelector('.ext');

function open() {
				sidebar.style.display = "flex";
};

function close() {
				sidebar.style.display = "none";
}

tggl.onclick = function () {
				open();
};

ext.onclick = function () {
  close();
  generate();
};

function card_n() {
				card.classList.remove("active");
}

const senin = document.getElementById('senin');
const selasa = document.getElementById('selasa');
const rabu = document.getElementById('rabu');
const kamis = document.getElementById('kamis');
const jumat = document.getElementById('jumat');
const hari1 = document.querySelector('.hari1');
const hari2 = document.querySelector('.hari2');
const hari3 = document.querySelector('.hari3');
const hari4 = document.querySelector('.hari4');
const hari5 = document.querySelector('.hari5');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');
const nav5 = document.querySelector('.nav5');

//senin
senin.onclick = function() {
				hari1.style.display = "flex";
				hari2.style.display = "none";
				hari3.style.display = "none";
				hari4.style.display = "none";
				hari5.style.display = "none";
				nav1.style.display = "block";
				nav2.style.display = "none";
				nav3.style.display = "none";
				nav4.style.display = "none";
				nav5.style.display = "none";
				close();
    generate();
    card_n();
};

//selasa
selasa.onclick = function() {
				hari1.style.display = "none";
				hari2.style.display = "flex";
				hari3.style.display = "none";
				hari4.style.display = "none";
				hari5.style.display = "none";
				nav1.style.display = "none";
				nav2.style.display = "block";
				nav3.style.display = "none";
				nav4.style.display = "none";
				nav5.style.display = "none";
				close();
  			generate();
  			card_n();
};

//rabu
rabu.onclick = function() {
				hari1.style.display = "none";
				hari2.style.display = "none";
				hari3.style.display = "flex";
				hari4.style.display = "none";
				hari5.style.display = "none";
				nav1.style.display = "none";
				nav2.style.display = "none";
				nav3.style.display = "block";
				nav4.style.display = "none";
				nav5.style.display = "none";
				close();
    generate();
    card_n();
};

//kamis
kamis.onclick = function() {
				hari1.style.display = "none";
				hari2.style.display = "none";
				hari3.style.display = "none";
				hari4.style.display = "flex";
				hari5.style.display = "none";
				nav1.style.display = "none";
				nav2.style.display = "none";
				nav3.style.display = "none";
				nav4.style.display = "block";
				nav5.style.display = "none";
				close();
    generate();
    card_n();
};

//jum'at
jumat.onclick = function() {
				hari1.style.display = "none";
				hari2.style.display = "none";
				hari3.style.display = "none";
				hari4.style.display = "none";
				hari5.style.display = "flex";
				nav1.style.display = "none";
				nav2.style.display = "none";
				nav3.style.display = "none";
				nav4.style.display = "none";
				nav5.style.display = "block";
				close();
    generate();
    card_n();
};

function all() {
				Swal.fire({ 
				icon: 'error', 
				title: 'Link Not Found!!', 
				text: 'Belum Tersedia'
				})
};

const butt = document.getElementById('warning');

butt.onclick = function() {
				all();
};


window.onload = setInterval(clock,1000); 

function clock() { 	 
var d = new Date(); 	 	 

var date = d.getDate(); 	 	 

var month = d.getMonth(); 	 
var montharr =["Januari","Febuari","Maret","April","Mei","Juni","Juli","Augustus","September","Oktober","November","Desember"]; 	 
month=montharr[month]; 	 	 

var year = d.getFullYear(); 	 	 
var day = d.getDay(); 	 
var dayarr =["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"]; 	 
day=dayarr[day]; 	 	 

var hour =d.getHours(); 
var min = d.getMinutes(); 	 
var sec = d.getSeconds(); 	 	 

document.getElementById("date").innerHTML=day+","+" "+date+" "+month+" "+year; 	 
document.getElementById("time").innerHTML=hour+":"+min+":"+sec; 
};