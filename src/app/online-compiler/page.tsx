"use client"
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "./style.css"
export default function Compiler() {
    const [code, setCode] = useState('');
    let language = "javascript"
    const handleChange = (editor: any, data: any, value: string): void => {
        setCode(value);
    };

    return (
        <>
            <div className="container mt-16 px-4 md:px-6 compiler_bg">
                <CodeMirror
                    value={code}
                    onBeforeChange={handleChange}
                    className="p-10"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: "material",
                        lineNumbers: true,
                        
                    }}
                    autoScroll={true}
                    autoCursor={true}
                />
            </div>
        </>
    )
}
