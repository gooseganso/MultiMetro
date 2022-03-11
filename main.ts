input.onButtonPressed(Button.A, function () {
    basic.setLedColor(0x0000ff)
    isBusy = true
    temp = input.temperature()
    basic.showNumber(temp)
    basic.showString("°C")
    led.plotBarGraph(
    temp,
    60
    )
    basic.pause(5000)
    music.playTone(440, music.beat(BeatFraction.Double))
    isBusy = false
})
input.onButtonPressed(Button.AB, function () {
    basic.setLedColor(0xff00ff)
    isBusy = true
    noise = input.soundLevel()
    basic.showNumber(noise)
    basic.showString("Db")
    led.plotBarGraph(
    noise,
    50
    )
    basic.pause(5000)
    music.playTone(440, music.beat(BeatFraction.Double))
    isBusy = false
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x65471f)
    isBusy = true
    luz = input.lightLevel()
    basic.showNumber(luz)
    basic.showString("Lum")
    led.plotBarGraph(
    luz,
    255
    )
    basic.pause(5000)
    music.playTone(440, music.beat(BeatFraction.Double))
    isBusy = false
})
let luz = 0
let noise = 0
let temp = 0
let isBusy = false
basic.showString("Bienvenidos")
isBusy = false
basic.pause(500)
basic.forever(function () {
    basic.setLedColor(0xffffff)
    basic.pause(1000)
    luz = input.lightLevel()
    temp = input.temperature()
    noise = input.soundLevel()
    if (isBusy == false) {
        isBusy = true
        basic.showString("A: T")
        basic.pause(200)
        basic.showString("B: L")
        basic.pause(200)
        basic.showString("A+B: R")
        isBusy = false
        basic.pause(8000)
    }
})
