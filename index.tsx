import p5 from "p5";

export default new p5((s: p5) => {
  let mainPos: p5.Renderer;
  s.setup = function setup() {
    mainPos = s.createCanvas(800, 800);
  };
  const branch = function (len: number) {
    s.line(0, 0, 0, -len);
    s.translate(0, -len);
    if (len > 1) {
      s.push();
      s.rotate(67);
      branch(len * 0.67);
      s.pop();
    }
  };
  s.draw = function () {
    s.background(100);
    s.translate(s.width / 2, s.height);
    branch(200);
    s.stroke(255);
  };
});
