$(document).ready(function () {

    $('#music-portal').on('click', function () {
        window.location.href = "music.html"
    })


    $('.home-portal').on('click', function () {
        window.location.href = "index.html"
    })


    $('#miles-btn').on('click', function () {
        if ($('#miles-btn').text()=="hide") {
            $('#miles-btn').html("tap to find out how many miles a week")
            $('#reveal-miles').empty()
        } else {
            $('#miles-btn').html("hide")
            addMiles()
        }
    })

    $('#song-btn').on('click', function () {
        if ($('#song-btn').text()=="hide") {
            $('#song-btn').html("tap to find out what song he can play")
            $('#reveal-song').empty()
        } else {
            $('#song-btn').html("hide")
            addPianoSong()
        }
    })

})


const addPianoSong = function () {
    $('#reveal-song').html("The Entertainer by Scott Joplin - a ragtime tune from 19")
    
}

const addMiles = function () {
    $('#reveal-miles').html("150")
}