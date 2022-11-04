import React from "react";

import { Contact } from "../../models/contact.class";
import ComponentB from "../pure/ComponentB";

const ComponentA = () => {

    const usuario = new Contact('Humberto', 'Arraya','exmaple12@gmail.com', false)

    return (

        <>
            <h1>Info del usuario:</h1>
            <ComponentB data={usuario}/>

        </>
    )

}

export default ComponentA