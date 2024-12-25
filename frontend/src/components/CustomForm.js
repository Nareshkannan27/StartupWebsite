import React, { useState } from 'react';
import axios from 'axios';

const CustomForm = () => {
    const formStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    };

    const textStyle = {
        fontSize: '24px',
        color: '#333',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    };

    return (
        <div style={formStyle}>
            <h1 style={textStyle}>Currently No Openings</h1>
        </div>
    );
};

export default CustomForm;
