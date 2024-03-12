const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
        origin: ['*'],
        },
    }
});
 
server.route(routes);
 
await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();


// Cross-origin resource sharing (CORS)
// const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
// response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
// return response;

// Menggunakan tanda * pada nilai origin untuk memperbolehkan data dikonsumsi oleh seluruh origin.
// const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
// response.header('Access-Control-Allow-Origin', '*');
// return response;
