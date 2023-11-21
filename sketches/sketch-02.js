const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random')

// para abrir, digitar no terminal, na pasta do arquivo: canvas-sketch sketch-02.js --open

const settings = {
  dimensions: [ 1080, 1080 ]
};

// const degToRad = (degrees) => {
//   return degrees / 180 * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'Thistle';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "Lavender";
    context.strokeStyle = "Moccasin";
    

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;

    const num = 25;
    const radius = width * 0.3;
    let x, y;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.5, 1));
  
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, h * -0.5), w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);
      // context.scale(random.range(1, 3), 1);

      context.lineWidth = random.range(5, 20);
  
      context.beginPath();
      context.arc(0, 0, radius * random.range( 0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5));
      context.stroke()
      // context.rect(-w * 0.5, -h * 0.5, w, h);
      // context.fill();
      context.restore();
    }



  };
};

// para criar pasta e salvar arquivo ao clicar Ctrl + S ; digita dentro da pasta, no  terminal: canvas-sketch sketch-02.js --output=output02

canvasSketch(sketch, settings);
