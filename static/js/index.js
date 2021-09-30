//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "r.manaba1994@gmail.com/sensor1";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "r.manaba1994@gmail.com/sensor1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function LED2_On() {
	//alert("led on");
	console.log("led2 on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "r.manaba1994@gmail.com/sensor2";
    	client.send(message);
}

}

function LED2_Off() {
	//alert("led on");
	console.log("led2 off");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "r.manaba1994@gmail.com/sensor2";
    	client.send(message);
}

function historial() {
	//alert("led on");
	console.log("historial");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("info");
    	message.destinationName = "r.manaba1994@gmail.com/historial";
    	client.send(message);
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "r.manaba1994@gmail.com",
    password: "Unach2021@",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("r.manaba1994@gmail.com/sensor1");
    message = new Paho.MQTT.Message(" ");
    message.destinationName = "r.manaba1994@gmail.com/sensor1";
    client.send(message);
	  

    client.subscribe("r.manaba1994@gmail.com/sensor2");
    message = new Paho.MQTT.Message(" ");
    message.destinationName = "r.manaba1994@gmail.com/sensor2";
    client.send(message);
	  
	  
    client.subscribe("r.manaba1994@gmail.com/historial");
    message = new Paho.MQTT.Message(" ");
    message.destinationName = "r.manaba1994@gmail.com/historial";
    client.send(message);
	  
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
	  var topic=message.destinationName.split("/");
	  var nombretopico=topic[1];
	  
    console.log("topico:"+nombretopico);
    console.log("onMessageArrived:"+message.payloadString);
	  if(nombretopico=="sensor1"){
	  document.getElementById("sensor").innerHTML=message.payloadString;
	  }
	  
	  if(nombretopico=="sensor2"){
	  document.getElementById("sensor2").innerHTML=message.payloadString;
	  }
	  
	  
	  if(nombretopico=="historial"){
	  document.getElementById("hist").innerHTML=message.payloadString;
	  }
  }
  
