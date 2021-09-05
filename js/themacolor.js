const body = document.querySelector("body");
const box = document.querySelectorAll(".box");
const loginBorder = document.getElementById("login-form");
const logout = document.getElementById("logout");

const todo__form = document.getElementById("todo-form");
const input = document.querySelectorAll(".input");

const THEMA_TITLE = "thematitle";

const color = [
    {
        id:"이럴거면 그러지말지",
        maincolor:"#FAEBE0",
        subcolor:"#C9E4C5",
        pointcolor:"#C1AC95",
        textcolor:"#B5CDA3"
    },
    {
        id:"square",
        maincolor:"#F9F7CF",
        subcolor:"#F2DCBB",
        pointcolor:"#DEBA9D",
        textcolor:"#BBBBBB"
    },
    {
        id:"Rain",
        maincolor:"#F4F4F2",
        subcolor:"#BBBFCA",
        pointcolor:"#495464",
        textcolor:"#495464"
    },
    {
        id:"To Myself",
        maincolor:"#FBF7F0",
        subcolor:"#D9E4DD",
        pointcolor:"#CDC9C3",
        textcolor:"#555555"
    }
]

const themaTitle = localStorage.getItem(THEMA_TITLE);


let thema = {};

color.some(e => {
    if(e.id === themaTitle){
        thema = e;
    }
});

loginBorder.style.border = `4px solid ${thema.subcolor}`;

body.style.backgroundColor = thema.maincolor;
body.style.color = thema.textcolor;

for (var i = 0; i < box.length; i++){
    let item = box.item(i);
    item.style.border = `4px solid ${thema.subcolor}`;
}

logout.style.color = `${thema.pointcolor}`;
logout.style.border = `2px solid ${thema.pointcolor}`;
function hover(){
    logout.style.backgroundColor = `${thema.pointcolor}`;
    logout.style.color = `white`;
}
logout.addEventListener("hover", hover);



for(var i = 0 ; i <input.length ; i++) {
    const item = input.item(i);
    item.style.borderBottom = `4px solid ${thema.textcolor}`;
}
for(var i = 0 ; i <input.length ; i++) {
    const item = input.item(i);
    item.style.color = `${thema.pointcolor}`;
}



function colorRepeat(element, attribute) {
    for(var i = 0 ; i <element.length ; i++) {
        const item = element.item(i);
        item.style.color = attribute;
    }
}

colorRepeat(document.querySelectorAll(".todo__button"),`${thema.pointcolor}`);
colorRepeat(document.querySelectorAll(".check__button"),`${thema.pointcolor}`);

todo__form.addEventListener("submit", () => colorRepeat(document.querySelectorAll(".todo__button"),`${thema.pointcolor}`));
todo__form.addEventListener("submit", () => colorRepeat(document.querySelectorAll(".check__button"),`${thema.pointcolor}`));