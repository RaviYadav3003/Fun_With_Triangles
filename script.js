// let angleOne = document.querySelector(".angle1").value;
let angleTwo = document.querySelector("#Angle2");
// let angleThree = document.querySelector("#Angle3");
let isTriangleBtn = document.querySelector(".isTriangleButton");
// var x = document.getElementById("myNumber").value;
let lastLineBtn = document.querySelector(".lastLine");
var angleInputs = document.querySelectorAll(".angle");
console.log(angleInputs[0].value);
const onisTriangleClicked = function () {
  console.log("new=", angleInputs[0].value);
  console.log("angle2=", angleTwo.value);
  let angleIn0 = angleInputs[0].value;
  let angleIn1 = angleInputs[1].value;
  let angleIn2 = angleInputs[2].value;

  const angleNum0 = Number.parseInt(angleIn0);
  const angleNum1 = Number.parseInt(angleIn1);
  const angleNum2 = Number.parseInt(angleIn2);
  // console.log(angleLast0, angleLast1, angleLast2);
  var AddedValue = angleNum0 + angleNum1 + angleNum2;
  if (AddedValue == 180) {
    return (lastLineBtn.innerText = "It's A Triangle");
  } else if(angleIn0 <=0|| angleIn1<=0 || angleIn2<=0) {
    return (lastLineBtn.innerText = "Enter vaild angle");
  } else {
    return (lastLineBtn.innerText = "Not Forming a Triangle ");
  }
};

isTriangleBtn.addEventListener("click", onisTriangleClicked);
