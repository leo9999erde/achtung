input.onPinPressed(TouchPin.P0, function () {
    if (true) {
        if (randint(1, 10) == 2) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.setLedColor(0xff0000)
            music.playMelody("C - C - C - D D ", 200)
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
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            basic.setLedColor(0x00ff00)
            music.playMelody("E B C5 A B G A F ", 120)
            music.playMelody("E D G F B A C5 B ", 120)
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
    }
})
input.onButtonPressed(Button.A, function () {
    if (randint(1, 100) == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        music.playMelody("C - C - C - D D ", 200)
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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.setLedColor(0x00ff00)
        music.playMelody("E B C5 A B G A F ", 120)
        music.playMelody("E D G F B A C5 B ", 120)
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
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (randint(1, 10) == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        music.playMelody("C - C - C - D D ", 200)
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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        basic.setLedColor(0x00ff00)
        music.playMelody("E B C5 A B G A F ", 120)
        music.playMelody("E D G F B A C5 B ", 120)
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
})
