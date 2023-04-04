// Sets If Debug State
static const bool DEBUG_STATE = true;

// Sets Serial Communication type
#define SERIAL_COM Serial1

// Sets Debuger Serial Communication type
#define SERIAL_DEBUGER_COM Serial

// Include additional code files
#include "Util.h"
#include "WebServer.h"

void setup() {

  // Initialize debuger systems
  if(DEBUG_STATE){
    SERIAL_DEBUGER_COM.begin(9600);
  }

  // Initialize Serial communication
  SERIAL_COM.begin(9600);

  // Initialize Webserver on Port
  ServerStartup();

  pinMode(LED_BUILTIN, OUTPUT);

}

void loop() {

  serverLoop();

  // To allow communication back to client, from Zumo
  if (SERIAL_COM.available() > 0) {

    // Read the command from the Serial buffer
    String cmd = SERIAL_COM.readStringUntil('\n');

    //TODO: CODE

    SerialFlush();
  }

}
