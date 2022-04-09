import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import './style.scss'
function Table() {

    const [data, setData] = useState(0);
    useEffect(() => {
        axios.post('http://intern-2022.arpify.com/init', {

            firstName: 'Goqor',
            lastName: 'Hovhannisyan',
            birthDay: '1998-01-22',
            gender: 'male'
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                setData(response.data.slice(1))
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div className="Table" >
            <div className='buttonPart'>
                <Link to="/form"><input type='button' value="Next page"></input> </Link>
            </div>
            {data ? <table id="Users">
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th >Lastname</th>
                        <th >Birthday</th>
                        <th>Gender</th>

                    </tr>
                    {data.map(element => (
                        <tr className={`${element.firstName === 'Goqor' ? 'myName' : ''}`} >
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.birthDay}</td>
                            <td>{element.gender}</td>

                        </tr>
                    ))}

                </tbody>
            </table> : null}
        </div>

    )
}
export default Table