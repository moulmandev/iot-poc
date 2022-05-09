#include <Arduino.h>
#include <HTTPClient.h>
#include "DHT.h"
#include <WiFi.h>
#include <WiFiMulti.h>

#define DHTTYPE DHT22 
#define DHTPIN 14

WiFiMulti WiFiMulti;
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

byte mac[] = {0};
String host = "http://arduino.moulmandev.fr";
String adresseMac = "";


int led = 26;                // the pin that the LED is atteched to
int sensor = 34;              // the pin that the sensor is atteched to
int state = LOW;             // by default, no motion detected
int val = 0;                 // variable to store the sensor status (value)

void setup() {
  Serial.begin(9600);        // initialize serial
  
  // We start by connecting to a WiFi network
  WiFiMulti.addAP("tKi", "12345678");

  Serial.println();
  Serial.println();
  Serial.print("Waiting for WiFi... ");


  while(WiFiMulti.run() != WL_CONNECTED) {
      Serial.print(".");
      delay(500);
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  WiFi.macAddress(mac);
 
  String result = "";
  String hexstring = "";

  for(int i = 0; i < 6; i++) {
    if(mac[i] < 0x10) {
      hexstring += '0';
    }

    hexstring += String(mac[i], HEX);
  }
  adresseMac = HexString2ASCIIString(hexstring);
  

  delay(500);
  
  pinMode(led, OUTPUT);      // initalize LED as an output
  pinMode(sensor, INPUT);    // initialize sensor as an input

  dht.begin();
  
  
}

void loop(){
  float temp = dht.readTemperature(false);
  

  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println(" *C");
  
  val = digitalRead(sensor);   // read sensor value
  if (val == HIGH) {           // check if the sensor is HIGH
    digitalWrite(led, HIGH);   // turn LED ON
    delay(500);                // delay 100 milliseconds 
    
    if (state == LOW) {
      Serial.println("Motion detected!"); 
      state = HIGH;       // update variable state to HIGH
    }
  } 
  else {
      digitalWrite(led, LOW); // turn LED OFF
      delay(500);             // delay 200 milliseconds 
      
      if (state == HIGH){
        Serial.println("Motion stopped!");
        state = LOW;       // update variable state to LOW
    }
  }

    

    delay(5000);
}

String HexString2ASCIIString(String hexstring) {
  String temp = "", sub = "", result;
  char buf[3];
  for(int i = 0; i < hexstring.length(); i += 2){
    sub = hexstring.substring(i, i+2);
    sub.toCharArray(buf, 3);
    char b = (char)strtol(buf, 0, 16);
    if(b == '\0')
      break;
    temp += b;
  }
  return temp;
}

void sendTemp() {
  if((WiFiMulti.run() == WL_CONNECTED)) {
    HTTPClient http;
    http.begin((String) host + "/setAmbianteTemperature?adresseMac=" + adresseMac);
    int httpCode = http.GET();
    
    if(httpCode > 0) {
      Serial.printf("[HTTP] GET... code: %d\n", httpCode);
      if(httpCode == HTTP_CODE_OK) {
          String payload = http.getString();
          Serial.println(payload);
      }
    } else {
      Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }
    
    http.end();
    }
}
