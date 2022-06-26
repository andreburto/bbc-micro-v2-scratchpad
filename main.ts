input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let y = 0
let x = 0
let change = -1
basic.forever(function () {
    if (change == -1) {
        change = 1
        x = 0
        y = 0
    } else {
        change = -1
        x = 4
        y = 4
    }
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plotBrightness(x, y, 255)
            basic.pause(100)
            led.plotBrightness(x, y, 0)
            x = x + change
        }
        if (change == 1) {
            x = 0
        } else {
            x = 4
        }
        y = y + change
    }
})
