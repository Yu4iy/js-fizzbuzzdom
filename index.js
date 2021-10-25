const boxes = document.querySelector('.boxes');
for(let i = 1; i <= 100; i++) {

	if (i % 3 === 0 && i % 5 === 0 ) {
		boxes.innerHTML += `<div class="box fizzbuzz">fizzbuzz</div>`;
		}
		else if (i % 3 === 0) {
			boxes.innerHTML += `<div class="box fizz">fizz</div>`;
		}
		else if (i % 5 === 0) {
			boxes.innerHTML += `<div class="box buzz">buzz</div>`;
		} 
		else {
			boxes.innerHTML += `<div class="box ">${i}</div>`;
		}	
}