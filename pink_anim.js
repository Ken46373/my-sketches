const canvasSketch = require('canvas-sketch');

const settings = {
    animate: true,
    duration: 3,
    dimensions: [ 256, 256 ],
    fps: 30
};

canvasSketch(() => {
    return ({ context, width, height, playhead }) => {
        context.fillStyle = 'pink';
        context.fillRect(0, 0, width, height);

        const t = Math.sin(playhead * Math.PI);

        const thickness = Math.max(5, Math.pow(t, 0.55) * width * 0.5);

        const rotation = playhead * Math.PI;

        const cx = width / 2;
        const cy = height / 2;
        const length = height * 0.5;
        context.fillStyle = 'white';
        context.save();
        context.translate(cx, cy);
        context.rotate(rotation);
        context.fillRect(-thickness / 2, -length / 2, thickness, length);
        context.restore();
    };
}, settings);