#include "DHT.h"
#include <WiFi.h>
#include <WiFiMulti.h>

#define DHTTYPE DHT22 
#define DHTPIN 14

WiFiMulti WiFiMulti;
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

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
}
