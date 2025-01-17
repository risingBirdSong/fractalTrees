import p5 from "p5";

export default new p5((s: p5) => {
  let mainPos: p5.Renderer;
  let slider: p5.Element;
  let cutoffSlider: p5.Element;
  let lenOfBranch: p5.Element;
  s.setup = function setup() {
    mainPos = s.createCanvas(800, 800);
    const sliderDiv = s.createDiv().addClass("sliderDiv");
    const angleP = s.createP("change the angle").parent(sliderDiv);
    angleP.addClass("sliderText");
    slider = s
      .createSlider(0.03, s.PI / 1.33, s.PI / 4, 0.001)
      .parent(sliderDiv);
    slider.addClass("slider");
    const cutoffP = s.createP("change the cutoff").parent(sliderDiv);
    cutoffP.addClass("sliderText");
    cutoffSlider = s.createSlider(2, 20, 3, 0.5).parent(sliderDiv);
    cutoffSlider.addClass("slider");
    const lenOfBranchP = s
      .createP("change the length subtraction of each branch")
      .parent(sliderDiv)
      .addClass("sliderText");
    cutoffP.addClass("sliderText");
    lenOfBranch = s.createSlider(0.1, 0.7, 0.68, 0.01).parent(sliderDiv);
    lenOfBranch.addClass("slider");
  };
  const branch = function (len: number, greenCol: number) {
    let arr: any[] = [];
    let angle = slider.value() as number;
    let cutoff = cutoffSlider.value() as number;
    let reduction = lenOfBranch.value() as number;
    s.stroke(2, greenCol, greenCol / 2);
    s.strokeWeight(len / 10);
    s.line(0, 0, 0, -len);
    s.translate(0, -len);
    if (len > cutoff) {
      s.push();
      s.rotate(angle);
      branch(len * reduction, greenCol - s.random(3, 10));
      s.pop();
      s.push();
      s.rotate(-angle);
      branch(len * reduction, greenCol - s.random(3, 10));
      s.pop();
    }
  };
  s.draw = function () {
    s.background(230);
    s.translate(s.width / 2, s.height);
    branch(200, 180);
    s.stroke(255);
  };
});
