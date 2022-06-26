let change = 1
let x = 0
let y = 0
let counter = 0
let MAX = 24
basic.forever(function () {
    if (counter == MAX) {
        counter = 0
        if (change == -1) {
            change = 1
        } else {
            change = -1
        }
    }
    counter = counter + 1
    led.plotBrightness(x, y, 255)
    basic.pause(100)
    led.plotBrightness(x, y, 0)
    x = x + change
    if (x < 0 || x > 4) {
        if (change == 1) {
            x = 0
        } else {
            x = 4
        }
        y = y + change
    }
})
