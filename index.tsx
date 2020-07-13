import p5 from "p5";

export default new p5((s: p5) => {
  let mainPos: p5.Renderer;
  s.setup = function setup() {
    mainPos = s.createCanvas(800, 800);
    mainPos.position(window.innerWidth / 4, window.innerHeight / 4);
    console.log("hello world from p5");
  };
  s.draw = function () {
    s.background(100);
    s.line(
      mainPos.position().x,
      s.height,
      mainPos.position().x,
      s.height - 200
    );
  };
});
