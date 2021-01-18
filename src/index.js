import "./assets/css/style.css";
import Data from "./assets/data/data.csv";
import Notes from "./assets/data/data.xml";
import toml from "./assets/data/data.toml";
import yaml from "./assets/data/data.yaml";
import json from "./assets/data/data.json5";
import printMe from "./print.js";

console.log("toml ", toml);
console.log("yaml ", yaml);
console.log("json ", json);
console.log("csv ", Data);
console.log("xml ", Notes);
console.log(
  `%cLooks like we are in ${process.env.NODE_ENV} mode!`,
  `color: yellow; font-size: 2rem;`
);

const gettingStarted = () => {
  let element = document.createElement("div");
  let heading = document.createElement("h1");
  let btn = document.createElement("button");
  btn.innerHTML = "Check print file";
  btn.onclick = printMe;
  heading.innerHTML = "Angular Starter 2021";
  heading.classList.add("headerStyle-1");
  element.appendChild(heading);
  element.appendChild(btn);
  return element;
};

console.log("gettingStated", gettingStarted());

const testConsole = "Angular 11 - 2021";

console.log(
  `%c${testConsole}`, // everything after the %c is styled
  `color: green; font-weight: bold; font-size: 2rem;`
);

document.body.appendChild(gettingStarted());
