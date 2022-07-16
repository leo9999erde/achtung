input.onButtonPressed(Button.A, function () {
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
        music.playMelody("- - - - - - - - ", 120)
    }
})
basic.forever(function () {
	
})
