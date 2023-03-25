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

// Sets Serial Communication type
#define SERIAL_COM Serial1

// Motor speed variables
#define MOTOR_SPEED 100
static uint16_t multiplier = 1;
static uint16_t motorSpeed = MOTOR_SPEED * multiplier;
static uint16_t rotationSpeed = MOTOR_SPEED * 0.5f;

// Event LED variables
static uint64_t prevLEDMillis = 0;
static const uint16_t EVENT_LED_INTERVAL = 1000;

// Include additional code files
#include "TurnSensor.h"
#include "Util.h"

void setup() {
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
    String cmd = SERIAL_COM.readStringUntil('\n');
    
    control(cmd);

    SerialFlush();
  }

}

// Function to handle manual control commands
void control(String cmd) {

  if (cmd == "") return;
  
}
