let block = 0
let reset = 0
let zähler = 0
input.onPinPressed(TouchPin.P0, function () {
    control.waitForEvent(block, 0)
    block = 1
    if (randint(1, 5) == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        music.playMelody("C - C - C - D D ", 500)
        music.playTone(523, music.beat(BeatFraction.Breve))
        basic.showLeds(`
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # . . # .
            . # . . #
            . . . . #
            # . . # .
            . # . . .
            `)
        basic.showLeds(`
            . . . . #
            # . . . .
            . . . . .
            . . . . #
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        reset += 1
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.setLedColor(0x00ff00)
        music.playMelody("E B C5 A B G A F ", 500)
        music.playMelody("E D G F B A C5 B ", 500)
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.turnRgbLedOff()
    block = 0
    zähler += 1
})
input.onButtonPressed(Button.A, function () {
    control.waitForEvent(block, 0)
    block = 1
    if (randint(1, 10) == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        music.playMelody("C - C - C - D D ", 500)
        music.playTone(523, music.beat(BeatFraction.Breve))
        basic.showLeds(`
            # # # # #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # . . # .
            . # . . #
            . . . . #
            # . . # .
            . # . . .
            `)
        basic.showLeds(`
            . . . . #
            # . . . .
            . . . . .
            . . . . #
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        reset += 1
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.setLedColor(0x00ff00)
        music.playMelody("E B C5 A B G A F ", 500)
        music.playMelody("E D G F B A C5 B ", 500)
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # . # . .
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . # . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.turnRgbLedOff()
    block = 0
    zähler += 1
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    control.waitForEvent(block, 0)
    block = 1
    if (randint(1, 2) == 1) {
        basic.setLedColor(0x00ff00)
        basic.showString("Ja")
    } else {
        basic.setLedColor(0xff0000)
        basic.showString("Nein")
    }
    basic.turnRgbLedOff()
    block = 0
})
basic.forever(function () {
    if (reset) {
        music.stopMelody(MelodyStopOptions.All)
        basic.showNumber(zähler)
        basic.pause(2000)
        reset = 0
        zähler = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
