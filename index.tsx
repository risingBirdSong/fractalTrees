import p5 from "p5";

export default new p5((s: p5) => {
  let mainPos: p5.Renderer;
  let slider: p5.Element;
  s.setup = function setup() {
    mainPos = s.createCanvas(800, 800);
    slider = s.createSlider(0.03, s.PI / 1.33, s.PI / 4, 0.001);
  };
  const branch = function (len: number) {
    let angle = slider.value() as number;
    s.line(0, 0, 0, -len);
    s.translate(0, -len);
    if (len > 5) {
      s.push();
      s.rotate(angle);
      branch(len * 0.67);
      s.pop();
      s.push();
      s.rotate(-angle);
      branch(len * 0.67);
      s.pop();
    }
  };
  s.draw = function () {
    s.background(100);
    s.translate(s.width / 2, s.height - 100);
    branch(200);
    s.stroke(255);
  };
});
