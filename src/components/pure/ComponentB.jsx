import React from "react";
import PropTypes from 'prop-types'

import { Contact } from "../../models/contact.class";
import { ESTADO } from "../../models/contact.status";

const  ComponentB = ({ data }) => {

    return (

        <>
            <h1>Nombre:{data.name}</h1>
            <h2>Apellido:{data.surname}</h2>
            <h3>Eamil:{data.email}</h3>
            <h4>Estado:{data.status ? ESTADO.CONECTADO: ESTADO.DESCONECTADO}</h4>

        </>
    )
    
}

ComponentB.propTypes = {
    data: PropTypes.instanceOf(Contact)
}

export default ComponentB



