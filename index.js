const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume-control');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

let isPlaying = false;

const songs = [
    {
        title: 'Tera_Fitoor',
        artist: 'Utkarsh_Sharma,_Ishita_Chauhan__Arijit-Singh',
        src: './song.mpeg'
    },
    {
        title: 'Main_Rang_Sharbaton_ka',
        artist: 'Arijit_singh',
        src: './WhatsApp Audio 2024-08-30 at 10.56.13 AM.mpeg'
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
}

function playPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
volumeControl.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Load the first song initially
loadSong(songs[currentSongIndex]);