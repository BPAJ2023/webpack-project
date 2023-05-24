export const addTxt = (sec, txt) => {
    const selector = document.createElement('p');
    selector.textContent += txt;
    sec.appendChild(selector);
}
