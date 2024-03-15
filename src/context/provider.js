import React, { useState } from 'react';
import Context from '.';

const NoteProvider=({children})=>{
    const [text, setText] = useState([{
        id:"",
        title:"",
        content:""
    }]);
    return (
        <Context.Provider value={{text,setText}}>
            {children}
        </Context.Provider>
    )
}

export  default NoteProvider;