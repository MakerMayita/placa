input.onGesture(Gesture.Shake, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showRing(
    `blue blue blue blue blue blue blue blue blue blue`
    )
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    music.pewPew.play()
    light.showRing(
    `purple purple purple purple purple purple purple purple purple purple`
    )
    pause(100)
    light.showRing(
    `black black black black black black black black black black`
    )
    music.setVolume(255)
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
