#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <RestClient.h>

const char* ssid = "TP-LINK_490206";
const char* password = "67352289";
IPAddress ip(192,168,100,160);
IPAddress gateway(192, 168, 1, 1);
//IPAddress gateway(172, 17, 18, 70);
IPAddress subnet(255, 255, 255, 0);
//RestClient restClient = RestClient("arduino-http-lib-test.herokuapp.com");
RestClient restClient = RestClient("192.168.1.106",4600);
ESP8266WebServer server(80);

const int led = 13;

void returnOK(String msg) {
  server.send(200, "text/plain", msg + "\r\n");
}

void returnFail(String msg) {
  server.send(500, "text/plain", msg + "\r\n");
}

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "Hello from Sagar's esp8266!");
  digitalWrite(led, 0);
}

void updateGPIOStatus() {
  if(server.args() != 2) {
    returnFail("Invalid Arguments Passed!");
  }
    
  int gpio = server.arg(0).toInt();
  String gpioStatus = server.arg(1);
  int toUpdatestatus = 0;
  if(gpioStatus == "on") {
    toUpdatestatus = 1;
  }else if(gpioStatus == "off") {
    toUpdatestatus = 0;
  }else {
    returnFail("Invalid status message= "+gpioStatus);
    return;
  }

  switch (gpio) {
    case 1:
      returnOK("Setting = 1 to "+gpioStatus);
      break;
    case 2:
      returnOK("Setting = 2 to "+gpioStatus);
      break;
    case 3:
      returnOK("Setting = 3 to "+gpioStatus);
      break;
    case 4:
      returnOK("Setting = 4 to "+gpioStatus);
      break;
    case 5:
      returnOK("Setting = 5 to "+gpioStatus);
      break;
    case 9:
      returnOK("Setting = 9 to "+gpioStatus);
      break;
    case 10:
      returnOK("Setting = 10 to "+gpioStatus);
      break;
    case 12:
      returnOK("Setting = 12 to "+gpioStatus);
      break;
    case 13:
      returnOK("Setting = 13 to "+gpioStatus);
      break;
    case 14:
      returnOK("Setting = 14 to "+gpioStatus);
      break;
    case 15:
      returnOK("Setting = 15 to "+gpioStatus);
    case 16:
      returnOK("Setting = 16 to "+gpioStatus);
      break;
    default:
      returnOK(" Invalid GPIO selected = "+server.arg(0));
  }
}

void handleNotFound(){
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET)?"GET":"POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i=0; i<server.args(); i++){
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  digitalWrite(led, 0);
}

void setup(void){
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  restClient.begin("TP-LINK_490206","67352289");
  //WiFi.config(ip,gateway, subnet);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }

  server.on("/", handleRoot);
  server.on("/updateGPIO", HTTP_GET, updateGPIOStatus);
  server.on("/inline", [](){
    String response = "";
    int statusCode = restClient.get("/Test", &response);
    Serial.println("statusCode");
    Serial.println(statusCode);
    
    Serial.println("Response of Get");
    Serial.println(response);
    
    server.send(200, "text/plain", "this works as well");
  });

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void){
  server.handleClient();
}
