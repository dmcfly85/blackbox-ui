
const radarSVG = function() {

    var canvas = document.getElementById('radar');

    if (canvas) {
      var ctx = canvas.getContext('2d');
      var raf = requestAnimationFrame;
      var TAU = Math.PI * 2;

      var W = canvas.width = window.innerWidth;
      var H = canvas.height = window.innerHeight;
      var cX = W / 2;//center point x
      var cY = H / 2;//center point y
      var i = 0;
      var alpha;
      var rad = H / 3;

      function Rardar() {
        i += 1;
        if (i == 360)
          i = 0;
        alpha = TAU * i / 360;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, W, H);

        ctx.strokeStyle = 'rgba(0, 255, 255, 1)';
        ctx.beginPath();
        ctx.moveTo(cX, cY);
        ctx.lineTo(cX + Math.cos(alpha) * rad, cY + Math.sin(alpha) * rad);
        ctx.stroke();
        window.setTimeout(Rardar, 10);
      }
      raf(Rardar);
    }
  }

export default radarSVG
