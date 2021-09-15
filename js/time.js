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
document.getElementById("time").innerHTML=hour+":"+min+":"+sec+" WIB"; 
};

//PSI senin(08.50)
var countDate1 = new Date('sep 20 2021 08:50:00').getTime();
//islam & sains senin(12.40)
var countDate2 = new Date('sep 20 2021 12:40:00').getTime();
//B. Arab selasa(07.00)
var countDate3 = new Date('sep 21 2021 07:00:00').getTime();
//B. Indo selasa(08.50)
var countDate4 = new Date('sep 21 2021 08:50:00').getTime();
//Ulumul quran rabu(10.40)
var countDate5 = new Date('sep 22 2021 10:40:00').getTime();
//peradaban islam kamis(10.40)
var countDate6 = new Date('sep 16 2021 10:40:00').getTime();
//PSI kamis(12.40)
var countDate7 = new Date('sep 16 2021 12:40:00').getTime();
//PHI jumat(07.00)
var countDate8 = new Date('sep 17 2021 07:00:00').getTime();
//PIH jumat(13.00)
var countDate9 = new Date('sep 17 2021 09:35:00').getTime();
//pancasila jumat(15.35)
var countDate10 = new Date('sep 17 2021 15:35:00').getTime();

const hitunganMundur = setInterval(function () {
				var now = new Date().getTime();
				
				var selisih1 = countDate1 - now;
				var selisih2 = countDate2 - now;
				var selisih3 = countDate3 - now;
				var selisih4 = countDate4 - now;
				var selisih5 = countDate5 - now;
				var selisih6 = countDate6 - now;
				var selisih7 = countDate7 - now;
				var selisih8 = countDate8 - now;
				var selisih9 = countDate9 - now;
				var selisih10 = countDate10 - now;
				
				
				var detik = 1000;
				var menit = detik * 60;
				var jam = menit * 60;
				var hari = jam * 24;
				
//selisih1
				var h1 = Math.floor(selisih1 / (hari));
				var j1 = Math.floor((selisih1 % (hari)) / (jam));
				var m1 = Math.floor((selisih1 % (jam)) / (menit));
				var d1 = Math.floor((selisih1 % (menit)) / (detik));
				//selisih2
				var h2 = Math.floor(selisih2 / (hari));
				var j2 = Math.floor((selisih2 % (hari)) / (jam));
				var m2 = Math.floor((selisih2 % (jam)) / (menit));
				var d2 = Math.floor((selisih2 % (menit)) / (detik));
				//selisih3
				var h3 = Math.floor(selisih3 / (hari));
				var j3 = Math.floor((selisih3 % (hari)) / (jam));
				var m3 = Math.floor((selisih3 % (jam)) / (menit));
				var d3 = Math.floor((selisih3 % (menit)) / (detik));
//selisih4
				var h4 = Math.floor(selisih4 / (hari));
				var j4 = Math.floor((selisih4 % (hari)) / (jam));
				var m4 = Math.floor((selisih4 % (jam)) / (menit));
				var d4 = Math.floor((selisih4 % (menit)) / (detik));
				//selisih5
				var h5 = Math.floor(selisih5 / (hari));
				var j5 = Math.floor((selisih5 % (hari)) / (jam));
				var m5 = Math.floor((selisih5 % (jam)) / (menit));
				var d5 = Math.floor((selisih5 % (menit)) / (detik));
				//selisih6
				var h6 = Math.floor(selisih6 / (hari));
				var j6 = Math.floor((selisih6 % (hari)) / (jam));
				var m6 = Math.floor((selisih6 % (jam)) / (menit));
				var d6 = Math.floor((selisih6 % (menit)) / (detik));
//selisih7
				var h7 = Math.floor(selisih7 / (hari));
				var j7 = Math.floor((selisih7 % (hari)) / (jam));
				var m7 = Math.floor((selisih7 % (jam)) / (menit));
				var d7 = Math.floor((selisih7 % (menit)) / (detik));
				//selisih8
				var h8 = Math.floor(selisih8 / (hari));
				var j8 = Math.floor((selisih8 % (hari)) / (jam));
				var m8 = Math.floor((selisih8 % (jam)) / (menit));
				var d8 = Math.floor((selisih8 % (menit)) / (detik));
				//selisih9
				var h9 = Math.floor(selisih9 / (hari));
				var j9 = Math.floor((selisih9 % (hari)) / (jam));
				var m9 = Math.floor((selisih9 % (jam)) / (menit));
				var d9 = Math.floor((selisih9 % (menit)) / (detik));
//selisih10
				var h10 = Math.floor(selisih10 / (hari));
				var j10 = Math.floor((selisih10 % (hari)) / (jam));
				var m10 = Math.floor((selisih10 % (jam)) / (menit));
				var d10 = Math.floor((selisih10 % (menit)) / (detik));
				
				
				//selisih1
				var hari_1 = document.getElementById('hari_1');
				
				//selisih2
				var hari_2 = document.getElementById('hari_2');
				
				//selisih3
				var hari_3 = document.getElementById('hari_3');
				
				//selisih4
				var hari_4 = document.getElementById('hari_4');
				
				//selisih5
				var hari_5 = document.getElementById('hari_5');
				
				
				//selisih6
				var hari_6 = document.getElementById('hari_6');
				
				//selisih7
				var hari_7 = document.getElementById('hari_7');
				
				//selisih8
				var hari_8 = document.getElementById('hari_8');
				
				//selisih9
				var hari_9 = document.getElementById('hari_9');
				
				//selisih10
				var hari_10 = document.getElementById('hari_10');
				
				
				//_1
				hari_1.innerText = h1 + " hari " + j1 + " jam " + m1 + " menit " + d1 + " detik, lagi!!";
				
				if( selisih1 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_1.innerText = 'ayo, kuliah!!!';
				};
				
				//_2
				hari_2.innerText = h2 + " hari " + j2 + " jam " + m2 + " menit " + d2 + " detik, lagi!!";
				
				if( selisih2 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_2.innerText = 'ayo, kuliah!!!';
				};
				
				//_3
				hari_3.innerText = h3 + " hari " + j3 + " jam " + m3 + " menit " + d3 + " detik, lagi!!";
				
				if( selisih3 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_3.innerText = 'ayo, kuliah!!!';
				};
				
				//_4
				hari_4.innerText = h4 + " hari " + j4 + " jam " + m4 + " menit " + d4 + " detik, lagi!!";
				
				if( selisih4 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_4.innerText = 'ayo, kuliah!!!';
				};
				
				//_5
				hari_5.innerText = h5 + " hari " + j5 + " jam " + m5 + " menit " + d5 + " detik, lagi!!";
				
				if( selisih5 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_5.innerText = 'ayo, kuliah!!!';
				};
				
				//_6
				hari_6.innerText = h6 + " hari " + j6 + " jam " + m6 + " menit " + d6 + " detik, lagi!!";
				
				if( selisih6 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_6.innerText = 'ayo, kuliah!!!';
				};
				
				//_7
				hari_7.innerText = h7 + " hari " + j7 + " jam " + m7 + " menit " + d7 + " detik, lagi!!";
				
				if( selisih7 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_7.innerText = 'ayo, kuliah!!!';
				};
				
				//_8
				hari_8.innerText = h8 + " hari " + j8 + " jam " + m8 + " menit " + d8 + " detik, lagi!!";
				
				if( selisih8 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_8.innerText = 'ayo, kuliah!!!';
				};
				
				//_9
				hari_9.innerText = h9 + " hari " + j9 + " jam " + m9 + " menit " + d9 + " detik, lagi!!";
				
				if( selisih9 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_9.innerText = 'ayo, kuliah!!!';
				};
				
				//_10
				hari_10.innerText = h10 + " hari " + j10 + " jam " + m10 + " menit " + d10 + " detik, lagi!!";
				
				if( selisih10 <= 0 ) {
								clearInterval(hitunganMundur);
								hari_10.innerText = 'ayo, kuliah!!!';
				};
				
				
				

				
				
				
}, 1000);


