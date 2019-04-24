window.onload = function init() {
    var addButton = document.getElementById("addButton");
    var clearButton = document.getElementById("clearButton");
    addButton.addEventListener("click", handleButtonClick);
    clearButton.addEventListener("click", clearList)
    loadPlaylist();
}

var ul = document.getElementById("playlist");

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;

    if (songName == "") {
        alert("Please enter a song");
    } else {
        alert("Adding " + songName);
        // pause
        var listItem = document.createElement("li");
        listItem.innerHTML = songName;
        ul.appendChild(listItem);
        save(songName);
    }
}

function save(item) {
    var playlistArray = getStoreArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
    var playlistArray = getSavedSongs();
    var ul = document.getElementById("playlist");
    if (playlistArray != null) {
        for (var i = 0; i < playlistArray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = playlistArray[i];
            ul.appendChild(li);
        }
    }
}

function getSavedSongs() {
    return getStoreArray("playlist");
}

function getStoreArray(key) {
    var playlistArray = localStorage.getItem(key);
    if (playlistArray == null || playlistArray == "") {
        playlistArray = new Array();
    }
    else {
        playlistArray = JSON.parse(playlistArray);
    }
    return playlistArray;
}

function clearList() {
    playlistArray = [];
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
    location.reload(true);
}

