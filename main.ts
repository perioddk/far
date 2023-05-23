input.onButtonPressed(Button.A, function () {
    Stepsize += 1
    if (Stepsize >= 31) {
        Stepsize = 1
    }
    Stepchanged = 1
})
input.onButtonPressed(Button.B, function () {
    Volume += Stepsize
    if (Volume >= 255) {
        Volume = 0
    }
    music.setVolume(Volume)
    Volchanged = 1
})
let Volchanged = 0
let Stepchanged = 0
let Volume = 0
let Stepsize = 0
Stepsize = 5
Volume = 100
music.setVolume(Volume)
Stepchanged = 1
Volchanged = 1
basic.showIcon(IconNames.Yes)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    if (Stepchanged >= 1) {
        led.setBrightness(8 * Stepsize)
        Stepchanged = 0
    }
    if (Volchanged >= 1) {
        led.plotBarGraph(
        Volume,
        255
        )
        Volchanged = 0
    }
})
