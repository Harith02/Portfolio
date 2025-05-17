const canvas = document.getElementById('trail-canvas');
  const ctx = canvas.getContext('2d');

  // Resize canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let mouse = { x: 0, y: 0 };
  let trail = [];

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    trail.push({ x: mouse.x, y: mouse.y, alpha: 1 });

    // Limit trail length
    if (trail.length > 50) trail.shift();
  });

  function drawTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 1; i < trail.length; i++) {
        const p1 = trail[i - 1];
        const p2 = trail[i];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(65, 103, 136, ${p2.alpha})`;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        p2.alpha -= 0.015;
    }


    requestAnimationFrame(drawTrail);
  }

  drawTrail();