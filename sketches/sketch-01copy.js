const canvasSketch = require('canvas-sketch');

// para abrir, digitar no terminal, como adiministrador, na pasta do arquivo: canvas-sketch sketch-01.js --open


const settings = {
  dimensions: [ 1080, 400 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'Thistle';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.011;
    context.strokeStyle = "Lavender"

    const w = width * 0.11;
    const h = height * 0.3;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    let x, y;

    const off = width * 0.02;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 2; j++) {
            x = ix + (w + gap) * i;
            y = iy + (h + gap) * j;

            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();
            

            if (Math.random() > 0.5) {
                context.beginPath();
                context.rect(x + off / 2, y + off / 2, w - off, h - off);
                context.stroke();
            }

        }
    }
  };
};

canvasSketch(sketch, settings);

