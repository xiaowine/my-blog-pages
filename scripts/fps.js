const rAF = (() => {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

let frame = 0;
let allFrameCount = 0;
let lastTime = Date.now();
let lastFameTime = Date.now();

const fpsElement = document.getElementById("fps");

const loop = () => {
    const now = Date.now();
    const fs = now - lastFameTime;
    lastFameTime = now;
    allFrameCount++;
    frame++;

    if (now > 1000 + lastTime) {
        const fps = Math.round((frame * 1000) / (now - lastTime));
        fpsElement.textContent = `FPS:${fps}`;
        frame = 0;
        lastTime = now;
    }

    rAF(loop);
};

loop();
