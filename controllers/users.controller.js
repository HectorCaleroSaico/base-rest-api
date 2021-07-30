const { request, response } = require('express')

const usuariosGet = ( req = request, res = response ) => {

    const { saludo, nombre = 'No name', api_key } = req.query

    res.json({
        msg: 'Get API - Controller',
        saludo,
        nombre,
        api_key
    })
}

const usuariosPost = ( req = request, res = response ) => {

    const { nombre, edad } = req.body

    res.json({
        msg: 'Post API - Controller',
        nombre,
        edad
    })
}

const usuariosPut = ( req = request, res = response ) => {

    const { id } = req.params

    res.json({
        msg: 'Put API - Controller',
        id
    })
}

const usuariosPatch = ( req, res = response ) => {
    res.json({
        msg: 'Patch API - Controller'
    })
}

const usuariosDelete = ( req, res = response ) => {
    res.json({
        msg: 'Delete API - Controller'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}