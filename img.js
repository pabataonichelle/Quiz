
const sectionTwo = (img) => {
    let div = document.createElement("div")
    div.className = "sectTwo"
    div.innerHTML = `<img src="./image/${img}">
    `
    return div
}
const picture = ( pic1,pic2,pic3) => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = ` 
                <h2>${pic1}</h2>
                <h2>${pic2}</h2>
                <h2>${pic3}</h2>
    `
    
    
    leftDiv.className = "card"


    return leftDiv;
}

export { sectionTwo ,picture};