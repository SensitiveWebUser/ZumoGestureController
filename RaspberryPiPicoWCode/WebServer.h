#pragma once

#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <LEAmDNS.h>

// Sets Wirless Connection to local network
#define SSID "Alex's-Rust-Bucket"
#define PASSWORD "w4XxXpXd"

const char* ssid = SSID;
const char* password = PASSWORD;

// Sets Web-servers port number
#define PORT 80


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
  server.send(404, "text/plain", message);
}

void handleMovement() {
  Logger("Received Movement Command From Web Server");
  
  if (server.method() != HTTP_POST) {
    server.send(405, "text/plain", "Method Not Allowed");
  } else {
    
    String message = "POST form was:\n";

    for (uint8_t i = 0; i < server.args(); i++) {
      message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
    }
    if (server.hasArg("MOVE")) {

      String move = server.arg("MOVE");

      if (move == "FORWARD") {
        SERIAL_COM.println('1');
        Logger("Sent FORWARD Command To Zumo");
      } else if (move == "LEFT") {
        SERIAL_COM.println('2');
        Logger("Sent LEFT Command To Zumo");
      } else if (move == "RIGHT") {
        SERIAL_COM.println('3');
        Logger("Sent RIGHT Command To Zumo");
      } else if (move == "BACKWARD") {
        SERIAL_COM.println('4');
        Logger("Sent BACKWARD Command To Zumo");
      } else if (move == "ACCELERATE") {
        SERIAL_COM.println('5');
        Logger("Sent ACCELERATE Command To Zumo");
      } else if (move == "DECELERATE") {
        SERIAL_COM.println('6');
        Logger("Sent DECELERATE Command To Zumo");
      } else if (move == "NON") {
        SERIAL_COM.println('7');
        Logger("Sent FORWARD Command To Zumo");
      } else if (move == "NON") {
        SERIAL_COM.println('8');
        Logger("Sent FORWARD Command To Zumo");
      } else if (move == "STOP") {
        SERIAL_COM.println('9');
        Logger("Sent STOP Command To Zumo");
      }

      server.send(200);
    } else {
      server.send(400, "text/plain", "Bad Request");
    }
  }
}

//TODO:comment
void setupRoutes() {
  // Sets web server routes

  // Default
  server.on("/", handleRoot);

  // Test Route
  server.on("/movement", handleMovement);

  // If route does not exsist
  server.onNotFound(handleNotFound);
}

//TODO:comment
void ServerStartup() {

  // Initialize WIFI communication
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  // Get connection to WIFI
  while (WiFi.status() != WL_CONNECTED) {
    delay(250);
    Logger('.');
  }

  // Connection established sending message to debuger
  String connectionMessage = "Connected to ";
  connectionMessage += ssid;
  connectionMessage += " IP address: ";

  Logger(connectionMessage);

  SERIAL_DEBUGER_COM.println(WiFi.localIP());

  if (MDNS.begin("picow")) {
    Logger("MDNS responder started");
  }

  // Setup routes
  setupRoutes();

  // Starting server
  server.begin();
  Logger("HTTP server started");
}

//TODO:comment
void serverLoop() {
  server.handleClient();
  MDNS.update();
}