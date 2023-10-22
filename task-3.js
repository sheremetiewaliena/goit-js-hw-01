function getElementWidth(content, padding, border) {

    const conteuner = (Number.parseFloat(content) + (Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2));
    return(`${conteuner}`);
}


getElementWidth("50px", "8px", "4px");
console.log(getElementWidth("50px", "8px", "4px")); // 74
 getElementWidth("60px", "12px", "8.5px");
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
getElementWidth("200px", "0px", "0px");
console.log(getElementWidth("200px", "0px", "0px")); // 200
