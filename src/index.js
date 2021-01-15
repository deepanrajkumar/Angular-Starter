import "./assets/css/style.css";
import Data from "./assets/data/data.csv";
import Notes from "./assets/data/data.xml";
import toml from "./assets/data/data.toml";
import yaml from "./assets/data/data.yaml";
import json from "./assets/data/data.json5";

console.log("toml ", toml);
console.log("yaml ", yaml);
console.log("json ", json);
console.log("csv ", Data);
console.log("xml ", Notes);

const gettingStarted = () => {
  let element = document.createElement("h1");
  element.innerHTML = "Angular Starter 2021";
  element.classList.add("headerStyle-1");
  return element;
};

console.log("gettingStated", gettingStarted());

const testConsole = "Angular 11 - 2021";

console.log(
  `%c${gettingStarted().innerHTML}`, // everything after the %c is styled
  `color: green; font-weight: bold; font-size: 2rem;`
);

document.body.appendChild(gettingStarted());
