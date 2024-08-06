import "./style.css";
import { dictionaryMatch } from "./lib/main.js";

let arr = [
  { name: "aa", id: 1 },
  { name: "bb", id: 3 },
  { name: "dd", id: 2 },
];
console.log(dictionaryMatch(2, arr));
