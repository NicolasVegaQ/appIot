/*
import mqtt from 'mqtt';

const username = process.env.REACT_APP_BROKER_USERNAME;
const password = process.env.REACT_APP_BROKER_PASSWORD;

const mqttClient = mqtt.connect(
  `wss://${username}:${password}@broker.shiftr.io`,
  { clientId: 'dashboard' },
);

mqttClient.on('connect', () => {
  mqttClient.subscribe('/temperature');
  mqttClient.subscribe('/humidity');
  mqttClient.subscribe('/window');
  mqttClient.subscribe('/light');
  mqttClient.subscribe('/air');
});
*/

// // export default mqttClient;
// import mqtt from 'mqtt';
// // Define el token directamente
// const mqttToken =
//   'mqtt://stripebraid752:fNRdxQZ1avTGWgYh@stripebraid752.cloud.shiftr.io';
// // Conexión al cliente MQTT utilizando el token
// const mqttClient = mqtt.connect(mqttToken, {
//   clientId: 'dashboard', // Identificador único para este cliente
// });
// // Evento que se dispara al conectar exitosamente al broker
// mqttClient.on('connect', () => {
//   // eslint-disable-next-line no-console
//   console.log('Conexión exitosa al broker MQTT');
//   // Suscripciones a los tópicos relevantes
//   mqttClient.subscribe('/temperature');
//   mqttClient.subscribe('/humidity');
//   mqttClient.subscribe('/window');
//   mqttClient.subscribe('/light');
//   mqttClient.subscribe('/air');
// });
// // Exporta el cliente MQTT para usarlo en otros archivos
// export default mqttClient;

import mqtt from 'mqtt';

// Conexión con WebSocket seguro
const mqttClient = mqtt.connect('wss://stripebraid752.cloud.shiftr.io', {
  username: 'stripebraid752',
  password: 'fNRdxQZ1avTGWgYh',
  clientId: 'dashboard', // Identificador único
});

// Evento al conectar exitosamente
mqttClient.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('Conexión exitosa al broker MQTT');
  mqttClient.subscribe('/temperature');
  mqttClient.subscribe('/humidity');
  mqttClient.subscribe('/window');
  mqttClient.subscribe('/light');
  mqttClient.subscribe('/door');
  mqttClient.subscribe('/air');
});

// Evento al recibir mensajes
mqttClient.on('message', (topic, message) => {
  // eslint-disable-next-line no-console
  console.log(`Tópico: ${topic}, Mensaje: ${message.toString()}`);
});

// Evento de error
mqttClient.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Error en la conexión MQTT:', err.message);
});

// Evento de desconexión
mqttClient.on('offline', () => {
  // eslint-disable-next-line no-console
  console.warn('El cliente MQTT está desconectado.');
});

// Exporta el cliente MQTT para usarlo en otros archivos
export default mqttClient;
