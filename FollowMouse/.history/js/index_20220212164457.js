let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let points = [];
let live = 50;
window.addEventListener('mousemove', function (el) {
    for (let i = 0; i < 5; i++) {
        points.push({
            sx: el.x,
            sy: el.y,
            vx: 0.5 - Math.random(),
            vy: 0.5 - Math.random(),
            life: live,
            color: '255,255,255',
            size: Math.random() * 5
        })
    }
})

function drawpoints() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let point;
    for (let i = 0; i < points.length; i++) {
        point = points[i];
        ctx.beginPath();
        ctx.arc(point.sx, point.sy, point.size, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${point.color},${point.life/live})`;
        ctx.fill();
        point.life--;
        if(point.life<=0) {
            points.splice(i,1)
        }
        point.sx += point.vx * 5;
        point.sy += point.vy * 5;
    }
}
// requestAnimationFrame(drawpoints)
setInterval(drawpoints,10)