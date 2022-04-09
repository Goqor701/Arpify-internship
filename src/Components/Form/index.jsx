import React, { useState, useEffect } from 'react';
import './style.scss'
import axios from 'axios';
function Form() {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        birthDay: "",
        gender: "",
        photo: "",
        pdfFile: "",
    });
    const handleChange = (event) => {
        setData((prevData) => ({ ...prevData, [event.target.name]: event.target.value }))
    }
    function handleSubmit() {
        axios.post('http://intern-2022.arpify.com/form', {

            data
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="Form" >
            <form>
                <label for="firstName">First Name:
                    <input value={data.firstName} onChange={(e) => handleChange(e)} type="text" name="firstName" /></label>
                <label for="lastName">Last Name:
                    <input value={data.lastName} onChange={(e) => handleChange(e)} type="text" name="lastName" /></label>
                <label for="birthDay">Birthday:
                    <input value={data.birthDay} onChange={(e) => handleChange(e)} type="text" name="birthDay" /></label>
                <label for="gender">gender:
                    <input value={data.gender} onChange={(e) => handleChange(e)} type="text" name="gender" /></label>
                <label>Photo: <input value={data.photo} onChange={(e) => handleChange(e)} className='File' name='photo' type="file" accept=".jpg, .png" /> </label>
                <label>pdf File: <input value={data.pdfFile} onChange={(e) => handleChange(e)} className='File' name='pdfFile' type="file" accept=".pdf" /> </label>
                <div className='buttonPart'>
                    <input onClick={handleSubmit} type='button' value="submit" />
                </div>
            </form>

        </div>

    )
}

export default Form;