function getElementWidth(content, padding, border) {

    const totalWidth = (Number.parseFloat(content) + (Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2));
    return(totalWidth);
}
