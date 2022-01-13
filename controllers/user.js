const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json(
        {
            msg: 'Get API - Controllers',
            query
        }
    )
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json(
        {
            msg: 'Post API - Controllers',
            body
        }
    )
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json(
        {
            msg: 'Put API - Controllers',
            id
        }
    )
}

const usuariosPatch = (req, res = response) => {
    res.json(
        {
            msg: 'Patch API - Controllers'
        }
    )
}

const usuariosDelete = (req, res = response) => {
    res.json(
        {
            msg: 'Delete API - Controllers'
        }
    )
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}