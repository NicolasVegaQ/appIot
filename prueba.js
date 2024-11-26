// const mqtt = require('mqtt');

// // Conectar al broker usando la URL completa
// const client = mqtt.connect('mqtt://stripebraid752:fNRdxQZ1avTGWgYh@stripebraid752.cloud.shiftr.io');

// // Evento de conexión
// client.on('connect', () => {
//   console.log('Conectado al broker MQTT de Shiftr.io');
//   client.subscribe('mi/topico', (err) => {
//     if (!err) {
//       console.log('Suscrito a mi/topico');
//       client.publish('mi/topico', 'Hola desde mi cliente MQTT');
//     }
//   });
// });

// Recibir mensajes
// client.on('message', (topic, message) => {
//   console.log(`Mensaje en ${topic}: ${message.toString()}`);
// });

const api = require('./api'); // Ajusta la ruta según corresponda
// Prueba de conexión al broker
const testConnection = async () => {
  try {
    // Realiza una solicitud de prueba
    const response = await api.get('/air');
    console.log('Conexión exitosa:', response.data);
  } catch (error) {
    console.error('Error al conectar con el broker:', error.message);
  }
};

testConnection();


// const username = process.env.REACT_APP_BROKER_USERNAME;
// const password = process.env.REACT_APP_BROKER_PASSWORD;
// const baseURL = process.env.REACT_APP_BROKER_URL;

// console.log('Username:', username); // Depuración para verificar valores
// console.log('Password:', password);
// console.log('URL:', baseURL);
// console.log(process.env);
