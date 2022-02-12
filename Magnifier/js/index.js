const container = document.querySelector('.container');
const move = document.querySelector('.move');
const bigImage = document.querySelector('.move img');

container.addEventListener('mousemove',function(e) {
	let x = e.clientX;
	let y = e.clientY;
	let l = container.offsetLeft;
	let t = container.offsetTop;
	let move_w_2 = move.offsetWidth/2;
	let move_h_2 = move.offsetHeight/2;
	let moveLeft = x - l - move_w_2;
	let moveTop = y - t - move_h_2;
	let maxLeft = container.offsetWidth - move_w_2;
	let maxTop = container.offsetHeight - move_h_2;
	if(moveLeft <= -move_w_2) moveLeft = -move_w_2;
	if(moveLeft > maxLeft) moveLeft = maxLeft;
	if(moveTop <= -move_h_2) moveTop = -move_h_2;
	if(moveTop >maxTop) moveTop = maxTop;
	
	move.style.left = `${moveLeft}px`
	move.style.top = `${moveTop}px`
	
	let bigImageLeft = (moveLeft + move_w_2) / container.offsetWidth * bigImage.offsetWidth - move_w_2;
	let bigImageTop = (moveTop + move_h_2) / container.offsetHeight * bigImage.offsetHeight - move_h_2;
	bigImage.style.left = `${- bigImageLeft}px`
	bigImage.style.top = `${- bigImageTop}px`
})