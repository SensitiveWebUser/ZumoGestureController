#pragma once

// Function to flush the Serial buffer
void SerialFlush() {
  // Read and discard any data in the Serial buffer
  while (SERIAL_COM.available() > 0) SERIAL_COM.read();
}

// Function to log to the debug serial data
void Logger(String message){ 
  if(DEBUG_STATE){
    SERIAL_DEBUGER_COM.println(message);
  }
}

// Function to log to the debug serial data
void Logger(char message){ 
  if(DEBUG_STATE){
    SERIAL_DEBUGER_COM.println(message);
  }
}
