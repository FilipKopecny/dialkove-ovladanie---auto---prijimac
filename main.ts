radio.onReceivedValue(function (name, value) {
    if (name == "dopredodozadu") {
        prijata_dopredudozadu = value
    }
    if (name == "vpravovlavo") {
        prijata_vpravovlavo = value
    }
})
let prijata_vpravovlavo = 0
let prijata_dopredudozadu = 0
let lavy_motor = 0
let pravy_motor = 0
prijata_dopredudozadu = 512
prijata_vpravovlavo = 512
basic.forever(function () {
    lavy_motor = pins.map(
    prijata_dopredudozadu,
    0,
    1023,
    -255,
    255
    )
    pravy_motor = pins.map(
    prijata_dopredudozadu,
    0,
    1023,
    -255,
    255
    )
    Rover.MotorRunDual(lavy_motor, pravy_motor)
})
