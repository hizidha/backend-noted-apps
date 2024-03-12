const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler  
} = require('./handler');

const routes = [
    {
        path: '/notes',
        method: 'POST',
        handler: addNoteHandler,
        // Atau bisa langsung di bagian servers
        // options: {
        //     cors: {
        //       origin: ['*'],
        //     },
        // },
    },
    {
        path: '/notes',
        method: 'GET',
        handler: getAllNotesHandler,
    },
    {
        path: '/notes/{id}',
        method: 'GET',
        handler: getNoteByIdHandler,
    },
    {
        path: '/notes/{id}',
        method: 'PUT',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;