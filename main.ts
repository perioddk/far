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
Stepchanged = 0
Volchanged = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
    if (Stepchanged >= 1) {
        basic.showString("S" + Stepsize)
        Stepchanged = 0
    }
    if (Volchanged >= 1) {
        basic.showString("V" + Stepsize)
        Volchanged = 0
    }
})
