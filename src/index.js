import "../public/css/style.css";
import { show } from "./tools/show"
import txtNav from "../public/data/nav.txt"
import txtHeader from "../public/data/header.txt"
import txtMain from "../public/data/main.txt"
import txtFooter from "../public/data/footer.txt"
import txtAside from "../public/data/aside.txt"

const { addTxt } = require('./tools/addTxt');
const { add_image } = require('./tools/add_image');

const nav = document.querySelector(".page__nav");
const header = document.querySelector(".page__header");
const main = document.querySelector(".page__main");
const footer = document.querySelector(".page__footer");
const aside = document.querySelector(".contact__aside");

import img1 from '../public/images/pexels-joyston-judah-933054.jpg'
import img2 from '../public/images/pexels-pixabay-210243.jpg'
import img3 from '../public/images/pexels-sagui-andrea-618833.jpg'

show();

addTxt(nav, txtNav);
addTxt(header, txtHeader);
addTxt(main, txtMain);
addTxt(footer, txtFooter);
addTxt(aside, txtAside);

add_image(header,img1);
add_image(main,img2);
add_image(aside,img3);