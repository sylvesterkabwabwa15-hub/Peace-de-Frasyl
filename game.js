function playSong(songName) {
    var player = document.getElementById("player");
    var nowPlaying = document.getElementById("nowPlaying")
    
    player.src = songName;
    player.play();
    
    nowPlaying.innerText = "Now playing: " + songName;
}
    
function pauseSong() {
    var player = document.getElementById("player");
    player.pause();
}
function uploadSong() {
    var fileInput = document.getElementById("upload");
    var player = document.getElementById("player");
    var nowPlaying = document.getElementById("nowPlaying");

    var file = fileInput.files[0];

    if (file) {
        var url = URL.createObjectURL(file);
        player.src = url;
        player.play();

        nowPlaying.innerText = "Now playing: " + file.name;
    } else {
        alert("Select a song first!");
    }
}