
const container = document.querySelector('.container');

for ( var i = 1; i<=150; i++) {
				const blocks = document.createElement('div');
				blocks.classList.add('block');
				container.appendChild(blocks);
};

function generate() {
				anime({
								targets: '.block',
								translateX: function(){
												return anime.random(-700,700);
								},
								translateY: function(){
												return anime.random(-700,700);
								},
								scale: function(){
												return anime.random(0,8);
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
				generate();
};

ext.onclick = function () {
  close();
  card_n();
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
const player = document.getElementById('player');
const hari1 = document.querySelector('.hari1');
const hari2 = document.querySelector('.hari2');
const hari3 = document.querySelector('.hari3');
const hari4 = document.querySelector('.hari4');
const hari5 = document.querySelector('.hari5');
const player1 = document.querySelector('.player1');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');
const nav5 = document.querySelector('.nav5');
const player2 = document.querySelector('.player2');

//function per
//hr1
function hr1_on() {
				hari1.style.display = "flex";
				nav1.style.display = "block";
				senin.classList.add("active");
}

function hr1_off() {
				hari1.style.display = "none";
				nav1.style.display = "none";
				senin.classList.remove("active");
}

//hr2
function hr2_on() {
				hari2.style.display = "flex";
				nav2.style.display = "block";
				selasa.classList.add("active");
}

function hr2_off() {
				hari2.style.display = "none";
				nav2.style.display = "none";
				selasa.classList.remove("active");
}

//hr3
function hr3_on() {
				hari3.style.display = "flex";
				nav3.style.display = "block";
				rabu.classList.add("active");
}

function hr3_off() {
				hari3.style.display = "none";
				nav3.style.display = "none";
				rabu.classList.remove("active");
}

//hr4
function hr4_on() {
				hari4.style.display = "flex";
				nav4.style.display = "block";
				kamis.classList.add("active");
}

function hr4_off() {
				hari4.style.display = "none";
				nav4.style.display = "none";
				kamis.classList.remove("active");
}

//hr5
function hr5_on() {
				hari5.style.display = "flex";
				nav5.style.display = "block";
				jumat.classList.add("active");
}

function hr5_off() {
				hari5.style.display = "none";
				nav5.style.display = "none";
				jumat.classList.remove("active");
}

//hr2
function player_on() {
				player1.style.display = "flex";
				player2.style.display = "block";
				player.classList.add("active");
}

function player_off() {
				player1.style.display = "none";
				player2.style.display = "none";
				player.classList.remove("active");
}


//function button
//senin
senin.onclick = function() {
				hr1_on();
				hr2_off();
				hr3_off();
				hr4_off();
				hr5_off();
				player_off();
    generate();
    card_n();
};

//selasa
selasa.onclick = function() {
				hr1_off();
				hr2_on();
				hr3_off();
				hr4_off();
				hr5_off();
				player_off();
  			generate();
  			card_n();
};

//rabu
rabu.onclick = function() {
				hr1_off();
				hr2_off();
				hr3_on();
				hr4_off();
				hr5_off();
				player_off();
    generate();
    card_n();
};

//kamis
kamis.onclick = function() {
				hr1_off();
				hr2_off();
				hr3_off();
				hr4_on();
				hr5_off();
				player_off();
    generate();
    card_n();
};

//jum'at
jumat.onclick = function() {
				hr1_off();
				hr2_off();
				hr3_off();
				hr4_off();
				hr5_on();
				player_off();
    generate();
    card_n();
};

//player
player.onclick = function() {
				hr1_off();
				hr2_off();
				hr3_off();
				hr4_off();
				hr5_off();
				player_on();
    generate();
    card_n();
};


