#pragma once

#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <LEAmDNS.h>

// Sets Wirless Connection to local network
#define SSID "Alex-Rust-Bucket"
#define PASSWORD "w4XxXpXd"

const char* ssid = SSID;
const char* password = PASSWORD;

// Sets Web-servers port number
#define PORT 80

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

// Sets Web-servers configs
WebServer server(PORT);

//TODO: CHANGE TO JSON
void handleRoot() {
  server.send(200, "text/plain", "hello from pico w!\r\n");
}

//TODO: CHANGE TO JSON
void handleNotFound() {
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";

  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }

  // Sends 404 error to client with message of error
  server.send(404, "text/plain", message);
}

// Function to handle movement commands from web server to Zumo
void handleMovement() {

  // logs that a movement command has been received
  Logger("Received Movement Command From Web Server");

  // Checks that the request is a POST request, else returns 405
  if (server.method() != HTTP_POST) {
    server.send(405, "text/plain", "Method Not Allowed");
  } else {

    // Checks if horizontal and vertical values are present, in parameters
    if (server.hasArg("HORIZONTAL"), server.hasArg("VERTICAL")) {

      // Gets horizontal and vertical values from parameters
      String horizontal = server.arg("HORIZONTAL");
      String vertical = server.arg("VERTICAL");

      // Sends command to Zumo to stop if no movement is detected, else sends movement commands
      if (horizontal == "0" && vertical == "0") {
        SERIAL_COM.println("9");
      } else if (horizontal == "0" && vertical == "1") {
        SERIAL_COM.println("1");
      } else if (horizontal == "0" && vertical == "-1") {
        SERIAL_COM.println("4");
      } else if (horizontal == "1" && vertical == "0") {
        SERIAL_COM.println("3");
      } else if (horizontal == "-1" && vertical == "0") {
        SERIAL_COM.println("2");
      } else if (horizontal == "1" && vertical == "1") {
        SERIAL_COM.println("5");
      } else if (horizontal == "-1" && vertical == "1") {
        SERIAL_COM.println("6");
      } else if (horizontal == "1" && vertical == "-1") {
        SERIAL_COM.println("7");
      } else if (horizontal == "-1" && vertical == "-1") {
        SERIAL_COM.println("8");
      } 

      // Sends 200 OK to client
      server.send(200);
    } else {

      // Sends 400 Bad Request to client if parameters are not present
      server.send(400, "text/plain", "Bad Request");
    }
  }
}

// Function to handle speed commands from web server to Zumo
void handleSpeed() {

  // logs that a speed command has been received
  Logger("Received Speed Command From Web Server");

  // Checks that the request is a POST request, else returns 405
  if (server.method() != HTTP_POST) {
    server.send(405, "text/plain", "Method Not Allowed");
  } else {

    // Checks if speed value is present, in parameters
    if (server.hasArg("SPEED")) {

      // Gets speed value from parameters
      String speed = server.arg("SPEED");

      // Sends command to Zumo to change speed depending on the speed value, else sends stop command
      if (speed == "1") {
        SERIAL_COM.println(">");
      } else if (speed == "-1") {
        SERIAL_COM.println("<");
      } else {
        SERIAL_COM.println("9");
      }

      // Sends 200 OK to client
      server.send(200);
    } else {
      // Sends 400 Bad Request to client if parameters are not present
      server.send(400, "text/plain", "Bad Request");
    }
  }
}

// Function to setup web server routes. Is called in setup()
void setupRoutes() {
  // Sets web server routes

  // Default
  server.on("/", handleRoot);

  // Movement route
  server.on("/movement", handleMovement);

  // Speed route
  server.on("/speed", handleSpeed);

  // If route does not exsist
  server.onNotFound(handleNotFound);
}

// Function to start web server
void ServerStartup() {

  // Initialize WIFI communication
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  
  const uint16_t startTime = millis();

  // Get connection to WIFI
  while (WiFi.status() != WL_CONNECTED) {
      delay(250);
      Logger(".");
  }

  // Connection established sending message to debuger
  String connectionMessage = "Connected to ";
  connectionMessage += ssid;
  connectionMessage += " IP address: ";

  // Prints connection message to debuger
  Logger(connectionMessage);

  // Prints IP address to debuger
  SERIAL_DEBUGER_COM.println(WiFi.localIP());

  // Initialize MDNS
  if (MDNS.begin("picow")) {
    Logger("MDNS responder started");
  }

  // Setup routes
  setupRoutes();

  // Starting server
  server.begin();
  Logger("HTTP server started");
}

// Function to handle web server loop in main loop
void serverLoop() {
  server.handleClient();
  MDNS.update();
}