import "../public/css/style.css";
import { show } from "./tools/show"
import txtNav from "../public/data/nav.txt"
import txtHeader from "../public/data/header.txt"
import txtMain from "../public/data/main.txt"
import txtFooter from "../public/data/footer.txt"
import txtAside1 from "../public/data/aside1.txt"
import txtAside2 from "../public/data/aside2.txt"
import txtAside3 from "../public/data/aside3.txt"

const { addTxt } = require('./tools/addTxt');
const { add_image } = require('./tools/add_image');
const { add_bgc } = require('./tools/add_bgc');

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
addTxt(aside, txtAside1);
addTxt(aside, txtAside2);
addTxt(aside, txtAside3);

add_bgc(header,img1);
add_bgc(main,img2);
add_bgc(aside,img3);