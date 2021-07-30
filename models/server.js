const express = require('express')
var cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosRoutePath = '/api/usuarios'

        //Middlewares
        this.middlewares()
        
        //Rutas de la aplicación
        this.routes()
    }

    middlewares() {
        //Cors
        this.app.use( cors() )

        //Lectura y Parseo del Body
        this.app.use( express.json() )

        //Directorio Public
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/users.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port: ${this.port}`)
        })
    }

}

module.exports = Server