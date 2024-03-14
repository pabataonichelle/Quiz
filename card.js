
const card = (title2,img1,img2,img3,para2,para3,para4) => {
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `<h>${title2}</h>
                    <p>${para2}</p>
                    <p>${para3}</p>
                    <p>${para4}</p>
                    <h2>${pic1}</h2>
                    <h2>${pic2}</h2>
                    <h2>${pic3}</h2>
        `
    return div
}

export { card }