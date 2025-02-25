input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
    basic.pause(700)
    maqueen.motorStop(maqueen.Motors.All)
})
