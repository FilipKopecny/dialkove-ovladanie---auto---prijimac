radio.onReceivedValue(function (name, value) {
    if (name == "dopredud") {
        prijata_dopredudozadu = value
    }
    if (name == "vpravovl") {
        prijata_vpravovlavo = value
    }
})
let prijata_vpravovlavo = 0
let prijata_dopredudozadu = 0
radio.setGroup(1)
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
    ) + pins.map(
    prijata_vpravovlavo,
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
    ) + pins.map(
    prijata_vpravovlavo,
    0,
    1023,
    255,
    -255
    )
    if (lavy_motor < -255) {
        lavy_motor = -255
    }
    if (lavy_motor > 255) {
        lavy_motor = 255
    }
    if (pravy_motor < -255) {
        pravy_motor = -255
    }
    if (pravy_motor > 255) {
        pravy_motor = 255
    }
    Rover.MotorRunDual(lavy_motor, pravy_motor)
})
