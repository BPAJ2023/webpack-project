export const add_image = (sec, img) => {
    const selector = document.createElement('div');
    selector.innerHTML += `<img src=${img} alt=[name] width=100%>`;
    sec.appendChild(selector);
}
