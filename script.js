const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("Play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs =[
{
    name:"01 Chogada - Loveratri(DJMazacom.Com)",
    title:"Chogada",
    artist:"Darshan Raval",
    image:"Chogada",
},
{
    name:"02 Akh Lad Jave - Loveratri(DJMazacom.Com)",
    title:"Akh Lad Jave",
    artist:"Badshah",
    image:"AakLadJave",
},
{
    name:"01 High Rated Gabru - Nawabzaade(DJMazacom.Com)",
    title:"High Rated Gabru",
    artist:"Guru Randhawa",
    image:"highRatedGabru",
},
];

let isPlaying=false;

const playMusic=() => {
    music.play();
    isPlaying=true;
    play.classList.replace('fa-play','fa-pause');
    img.classList.replace('initial','change');
    img.classList.add("anime");
};

const pauseMusic = () => {
    music.pause();
    isPlaying=false;
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
    img.classList.replace('change','initial');

};

play.addEventListener('click', ()=>{
    isPlaying?pauseMusic():playMusic();
})

const loadSong=(song)=>{
    title.textContent=song.title;
    artist.textContent=song.artist;
    music.src="Music/"+song.name+".mp3";
    img.src="Images/"+song.image+".jpg";
};
songIndex=0;

const nextsong=()=>{
    songIndex=(songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevsong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click',nextsong);
prev.addEventListener('click',prevsong);