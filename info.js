
const sectionOne = (title1, para1, btn1 ) => {
    let div = document.createElement("div")
    div.className = "sectionOne"
    div.innerHTML = `<h1>${title1}</h1>
                     <p>${para1}</p>
                     <button>${btn1}</button>
    `
    return div
}

export { sectionOne }