import "../public/css/style.css";
import { show } from "./module/show"
import txtNav from "../public/data/nav.txt"
import txtHeader from "../public/data/header.txt"
import txtMain from "../public/data/main.txt"
import txtFooter from "../public/data/footer.txt"
import txtAside from "../public/data/aside.txt"

const { addTxt } = require('./module/importHTML');

const nav = document.querySelector(".page__nav");
const header = document.querySelector(".page__header");
const main = document.querySelector(".page__main");
const footer = document.querySelector(".page__footer");
const aside = document.querySelector(".contact__aside");

show();
addTxt(nav, txtNav);
addTxt(header, txtHeader);
addTxt(main, txtMain);
addTxt(footer, txtFooter);
addTxt(aside, txtAside);