let total = 30;
let shadow = '';
for(let i = 1;i<total;i++) {
	shadow += `-${i}px ${i}px 0 #eee,`
}
shadow = shadow.slice(0,-1);
const text = document.querySelector('.text');
text.style.textShadow = shadow;