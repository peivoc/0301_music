input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(349, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
