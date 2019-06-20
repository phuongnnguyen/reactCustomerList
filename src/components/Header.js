import React, { useState } from 'react'

const Header = props => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [requirement, setRequirement] = useState('');
    const [address, setAddress] = useState('');
    const [source, setSource] = useState('');
    const [day, setDay] = useState('');
    const [notes, setNotes] = useState('');
    const [potential, setPotential] = useState('');

    const data = {name, phoneNo, requirement, source, address, day, notes, potential};
    function handleSubmit(e) {
        e.preventDefault();
    
        //fetch('http://localhost:4000/customers', {
        fetch(`https://customers-apis.herokuapp.com/customers/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setTimeout(() => document.location.reload(), 1000)
    }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <button type="button" onClick={() => setShow(!show)}>Them khach hang</button>
            { 
                show ?
                    <div>
                        <p>
                            Ten khach hang: {' '}
                            <input type="text" onChange={(e) => setName(e.target.value)}/>
                        </p>
                        <p>
                            So dien thoai: {' '}
                            <input type="text" onChange={(e) => setPhoneNo(e.target.value)}/>
                        </p>
                        <p>
                            Nhu cau: {' '}
                            <input type="text" onChange={(e) => setRequirement(e.target.value)}/>
                        </p>
                        <p>
                            Dia chi: {' '}
                            <input type="text" onChange={(e) => setAddress(e.target.value)}/>
                        </p>
                        <p>
                            Nguon: {' '}
                            <input type="text" onChange={(e) => setSource(e.target.value)}/>
                        </p>
                        <p>
                            Ngay: {' '}
                            <input type="text" onChange={(e) => setDay(e.target.value)}/>
                        </p>
                        <p>
                            Ghi chu: {' '}
                            <input type="text" onChange={(e) => setNotes(e.target.value)}/>
                        </p>
                        <p>
                            Tiem nang: {' '}
                            <input type="text" onChange={(e) => setPotential(e.target.value)}/>
                        </p>
                        <button>Them khach hang</button>
                    </div>
                : ''
            }
        </form>
    )
}

export default Header