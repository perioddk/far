let Volume = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("- - - - - - - - ", 120)
})
input.onButtonPressed(Button.B, function () {
    Volume += 11
    music.setVolume(Volume)
})
basic.forever(function () {
    basic.showNumber(Volume)
})
