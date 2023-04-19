// Include libraries
#include <Zumo32U4.h>
#include <Zumo32U4Motors.h>
#include <Zumo32U4LineSensors.h>
#include <Zumo32U4ProximitySensors.h>
#include <Zumo32U4Buzzer.h>
#include <Zumo32U4IMU.h>

// Create objects
Zumo32U4ProximitySensors proxSensors;
Zumo32U4LineSensors lineSensors;
Zumo32U4Motors motors;
Zumo32U4Buzzer buzzer;
Zumo32U4IMU imu;

// Sets If Debug State
static const bool DEBUG_STATE = true;

// Sets Serial Communication type
#define SERIAL_COM Serial1

// Sets Debuger Serial Communication type
#define SERIAL_DEBUGER_COM Serial

// Motor speed variables
#define MOTOR_SPEED 100
static uint16_t multiplier = 1;
static uint16_t motorSpeed = MOTOR_SPEED * multiplier;
static uint16_t rotationSpeed = MOTOR_SPEED * 0.75f;

// Motor Speeds
static int16_t leftMotorSpeed = 0;
static int16_t rightMotorSpeed = 0;

// Event LED variables
static uint64_t prevLEDMillis = 0;
static const uint16_t EVENT_LED_INTERVAL = 1000;

// Include additional code files
#include "TurnSensor.h"
#include "Util.h"

/* Incoming codes list
  - 1: Moves Zumo Forward insted of Backwards
  - 2: Moves Zumo Left insted of Right
  - 3: Moves Zumo Right insted of Left
  - 4: Moves Zumo Backwards insted of Forward
  - 5: Veers Zumo forward and Left insted of Right
  - 8: Veers Zumo forward and Right insted of Left
  - 7: Veers Zumo backwards and Left insted of Right
  - 8: Veers Zumo backwards and Right insted of Left
  - 9: Stops Motors
  - <: Decrease Zumo Motor Speeds
  - >: Increase Zumo Motor Speeds
*/

void setup() {

  // Initialize debuger systems
  if(DEBUG_STATE){
    SERIAL_DEBUGER_COM.begin(9600);
  }

  // Initialize Serial communication
  SERIAL_COM.begin(9600);

  // Initialize line sensors and proximity sensors
  lineSensors.initThreeSensors();
  proxSensors.initThreeSensors();

  // Setup turn sensor
  turnSensorSetup();
}

// Loop function that runs continuously
void loop() {

  // Check for incoming Serial commands
  if (SERIAL_COM.available() > 0) {

    // Read the command from the Serial buffer
    char cmd = SERIAL_COM.readStringUntil('\n')[0];

    // Sets GREEN LED on
    ledGreen(HIGH);

    Logger(cmd);

    control(cmd);

    SerialFlush();
  }
}

void control(char cmd) {

    switch (cmd) {
      case '1':
        // Set both motors to run forward at the same speed
        leftMotorSpeed = motorSpeed;
        rightMotorSpeed = motorSpeed;
        Logger("Moving Zumo Forwards");
        break;
      case '2':
        // Set the right motor to run forward and decrease the speed of the left motor
        leftMotorSpeed = -rotationSpeed;
        rightMotorSpeed = motorSpeed;
        Logger("Moving Zumo Left");
        break;
      case '3':
        // Set the left motor to run forward and decrease the speed of the right motor
        leftMotorSpeed = motorSpeed;
        rightMotorSpeed = -rotationSpeed;
        Logger("Moving Zumo Right");
        break;
      case '4':
        // Set both motors to run backward at the same speed
        leftMotorSpeed = -motorSpeed;
        rightMotorSpeed = -motorSpeed;
        Logger("Moving Zumo Backwards");
        break;
      case '5':
        // Set the left motor to run forward and decrease the speed of the right motor
        leftMotorSpeed = motorSpeed;
        rightMotorSpeed = (motorSpeed - rotationSpeed);
        Logger("Veering Zumo forward and Left");
        break;
      case '6':
        // Set the right motor to run forward and decrease the speed of the left motor
        leftMotorSpeed = (motorSpeed - rotationSpeed);
        rightMotorSpeed = motorSpeed;
        Logger("Veering Zumo forward and Right");
        break;
      case '7':
        // Set the left motor to run backward and increase the speed of the right motor
        leftMotorSpeed = -motorSpeed;
        rightMotorSpeed = -(motorSpeed + rotationSpeed);
        Logger("Veering Zumo backward and Left");
        break;
      case '8':
        // Set the right motor to run backward and increase the speed of the left motor
        leftMotorSpeed = -(motorSpeed + rotationSpeed);
        rightMotorSpeed = -motorSpeed;
        Logger("Veering Zumo backward and Right");
        break;
      case '<':
        // Decrease both motor speeds
        updateMultiplier(multiplier - 1);
        Logger("Decreasing Zumo Motor Speeds");
        break;
      case '>':
        // Increase both motor speeds
        updateMultiplier(multiplier + 1);
        Logger("Increasing Zumo Motor Speeds");
        break;
      case '9':
      default:
        // Stop both motors
        leftMotorSpeed = 0;
        rightMotorSpeed = 0;
        Logger("Stopping Zumo");
}

    motors.setSpeeds(leftMotorSpeed, rightMotorSpeed);

}