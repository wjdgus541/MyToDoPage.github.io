const thumbImg = document.getElementById("thumbNail");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const musicList = document.querySelector("#musiclist");
const video = document.querySelector("iframe");

const music__btn = document.querySelectorAll(".music__btn");


const playlist = [
    {
        title:"square",
        artist:"백예린",
        url:"https://www.youtube.com/embed/_ZkUb7iIOqQ"
    },
    {
        title:"이럴거면 그러지말지",
        artist:"백아연",
        url:"https://www.youtube.com/embed/PDHAB40wzvM"
    },
    {
        title:"Rain",
        artist:"태연",
        url:"https://www.youtube.com/embed/aDCzWqHCeYQ"
    },
    {
        title:"To Myself",
        artist:"DPR",
        url:"https://www.youtube.com/embed/oMQkDkCBmmM"
    }
];


let savedTitle = localStorage.getItem("thematitle");


function selecThema(number) {

    const themaTitle = playlist[number].title;
    const themaArtist = playlist[number].artist;
    const themaUrl = playlist[number].url;
    
    localStorage.setItem("thematitle", themaTitle);
    localStorage.setItem("themaartist", themaArtist);
    localStorage.setItem("themaurl", themaUrl);
    
    paint(themaTitle, themaArtist, themaUrl);
}

function paint(themaTitle, themaArtist, themaUrl) {
    title.innerText = `${themaTitle}`;
    artist.innerText = `${themaArtist}`;
    video.src = `${themaUrl}`
}

if(savedTitle === null) {
    selecThema(Math.floor(Math.random()*playlist.length));
    
} else {
    const themaTitle = localStorage.getItem("thematitle");
    const themaArtist = localStorage.getItem("themaartist");
    const themaUrl = localStorage.getItem("themaurl");
    paint(themaTitle, themaArtist, themaUrl);
}

function selectMusic(event) {
    var index = playlist.findIndex( e => e.title === event.target.id);
    selecThema(index);
    location.reload();
}

for (const music of music__btn){
    music.addEventListener("click", selectMusic);
}