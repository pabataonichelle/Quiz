import { sectionOne } from "./info.js"
import { sectionTwo } from "./img.js"

//object
const data = {
    title1  : "This is a Title",
    para1   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus deleniti aperiam odio debitis sequi dignissimos, sint, temporibus sit ullam numquam ad quod accusantium, illo voluptatem. Animi, provident repellat? Animi, dolore.",
    btn1    : "This is a button",
    img     : "bg.png",

    title2:"PROJECT COMPLTE",
    img1:"",
    img2:"",
    img3:"",
    para2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",
    para4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem blanditiis magnam sint modi quaeratrepudiandae atque voluptate cum neque quae beatae pariatur tenetur dolore, dolores corporis impedit sed labore!",


}

//destructuring 
const { title1, para1, btn1, img, title2,img1,img2,img3,para2,para3,para4 } = data

//access 

const section = document.getElementById("sectionOne")

section.append(sectionOne(title1 , para1, btn1))
section.append(sectionTwo(img))
section.append(card(title2,img1,img2,img3,para2,para3,para4))