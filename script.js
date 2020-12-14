const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("Play");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

let progress=document.getElementById("progress");
let totalDuration=document.getElementById("duration");
let currentDuration=document.getElementById("currentTime");
const progressDiv=document.getElementById("progressDiv");

const songs =[
{
    name:"Malang (Title Track) - Songs.pk - 128Kbps",
    title:"Malang",
    artist:"Mithoon",
    image:"Malang",
},
{
    name:"02 Akh Lad Jave - Loveratri(DJMazacom.Com)",
    title:"Akh Lad Jave",
    artist:"Badshah",
    image:"AakLadJave",
},
{
    name:"01 Chogada - Loveratri(DJMazacom.Com)",
    title:"Chogada",
    artist:"Darshan Raval",
    image:"Chogada",
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

// progress JS work

music.addEventListener("timeupdate",(event)=>{
    // console.log(event);
    const { currentTime, duration}= event.srcElement;

    let progressTime=(currentTime/duration)*100;
    progress.style.width=`${progressTime}%`;

    let secDuration=Math.floor(duration%60);
    if(secDuration<10)
        secDuration='0'+secDuration;
    // to avoid NaN in between switching we use if(duartion)
    if(duration)
    totalDuration.textContent=Math.floor(duration/60)+':'+secDuration;

    let secCurrentTime=Math.floor(currentTime%60);
    if(secCurrentTime<10)
        secCurrentTime='0'+secCurrentTime;
    currentDuration.textContent=Math.floor(currentTime/60)+':'+secCurrentTime;

});

// progress on click
progressDiv.addEventListener("click",(event)=>{

    const {duration}=music;
    let moveProgress =(event.offsetX/290)*duration;
    music.currentTime=moveProgress;
});

// if music end call next song 
music.addEventListener("ended",nextsong);

next.addEventListener('click',nextsong);
prev.addEventListener('click',prevsong);