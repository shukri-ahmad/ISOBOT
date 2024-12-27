namespace ISOBOT {

    //% subcategory=Sensors
    //% blockGap=10
    /**
     * Reads digital value from pin P16 and assigns it to variable I1.
     */
    //% block="ReadSensor"
    export function ReadSensor(): void {
        Left = pins.digitalReadPin(DigitalPin.P16);
        MidLeft = pins.digitalReadPin(DigitalPin.P15);
        Mid = pins.digitalReadPin(DigitalPin.P14);
        MidRight = pins.digitalReadPin(DigitalPin.P13);
        Right = pins.digitalReadPin(DigitalPin.P12);
    }

    // Predefined variable
    export let Left: number = 0;
    export let MidLeft: number = 0;
    export let Mid: number = 0;
    export let MidRight: number = 0;
    export let Right: number = 0;
    //% subcategory=Sensors
    //% blockGap=10
    //% block="Left"
    export function getLeft(): number {
        return Left;
    }
    //% subcategory=Sensors
    //% blockGap=10
    //% block="MidLeft"
    export function getMidLeft(): number {
        return MidLeft;
    }

    //% subcategory=Sensors
    //% blockGap=10
    //% block="Mid"
    export function getMid(): number {
        return Mid;
    }

    //% subcategory=Sensors
    //% blockGap=10
    //% block="MidRight"
    export function getMidRight(): number {
        return MidRight;
    }

    //% subcategory=Sensors
    //% blockGap=10
    //% block="Right"
    export function getRight(): number {
        return Right;
    }

    //% subcategory=Movement
    //% blockGap=10
    //% block="forward speed $value"
    export function Forward(value: number): void {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, value)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, value)
    }

    //% subcategory=Movement
    //% blockGap=10
    //% block="Reverse speed $value"
    export function reverse(value: number): void {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, value)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, value)
    }

    //% subcategory=Movement
    //% blockGap=10
    //% block="Turn right speed $value"
    export function turnRight(value: number): void {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, value)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, value)
    }

    //% subcategory=Movement
    //% blockGap=10
    //% block="Turn left speed $value"
    export function turnLeft(value: number): void {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, value)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, value)
    }

    //% subcategory=Movement
    //% blockGap=10
    //% block="Forward turn -> speed right $valueR| speed left $valueL"
    export function forwardturn(valueR: number, valueL: number): void {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, valueR)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, valueL)
    }

    //% subcategory=Movement
    //% blockGap=10
    //% block="Reverse turn -> speed right $valueR| speed left $valueL"
    export function reverseturn(valueR: number, valueL: number): void {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, valueR)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, valueL)
    }

}
