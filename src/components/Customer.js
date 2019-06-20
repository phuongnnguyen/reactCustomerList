import React, { useState } from 'react'

const Customer = props => {
    const { 
        address, day, name, notes, phoneNo,
        requirement, source, potential, _id
    } = props;
    const [update_post, setUpdate] = useState(true);
    const [_address, setAddress] = useState(address);
    const [_day, setDay] = useState(day);
    const [_name, setName] = useState(name);
    const [_notes, setNotes] = useState(notes);
    const [_phoneNo, setPhoneNo] = useState(phoneNo);
    const [_requirement, setRequirement] = useState(requirement);
    const [_source, setSource] = useState(source);
    const [_potential, setPotential] = useState(potential);
    function updateOne(id, e) {
        const data = {
            _address, _day, _name, _notes,
            _phoneNo, _requirement, _source, _potential
        }
        if(e.target.name === name)
        fetch(`https://customers-apis.herokuapp.com/customers/${id}/`, {
        //fetch(`http://localhost:4000/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Appcept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res.status === 200)
                console.log('exitst')
            else console.log('file doesnt exitst')
        })
        .catch(e => console.log(e))
        setUpdate(true)
        setTimeout(() => document.location.reload(), 1000);
    }
    function deleteOne(id) {
        fetch(`https://customers-apis.herokuapp.com/customers/${id}/`, {
        //fetch(`http://localhost:4000/customers/${id}`, {
            method: 'DELETE'
        })
        .then(res => res)
        .catch(e => e)
        setTimeout(() => document.location.reload(), 1000);
    }

    return(
        <tr>
            <td>{update_post ? day : <input style={{width: '75%'}} onChange={e => setDay(e.target.value)} value={_day}/>}</td>
            <td>{update_post ? name : <input style={{width: '75%'}} onChange={e => setName(e.target.value)} value={_name}/>}</td>
            <td>{update_post ? phoneNo : <input style={{width: '75%'}} onChange={e => setPhoneNo(e.target.value)} value={_phoneNo}/>}</td>
            <td>{update_post ? requirement : <input style={{width: '75%'}} onChange={e => setRequirement(e.target.value)} value={_requirement}/>}</td>
            <td>{update_post ? address : <input style={{width: '75%'}} onChange={e => setAddress(e.target.value)} value={_address}/>}</td>
            <td>{update_post ? source : <input style={{width: '75%'}} onChange={e => setSource(e.target.value)} value={_source}/>}</td>
            <td id="potential" style={{backgroundColor: potential.toLowerCase() === 'x' ? 'red' : 'none'}}>{update_post ? potential : <input style={{width: '75%'}} onChange={e => setPotential(e.target.value)} value={_potential}/>}</td>
            <td>{update_post ? notes : <input style={{width: '75%'}} onChange={e => setNotes(e.target.value)} value={_notes}/>}</td>
            <td>
                {update_post ? <button onClick={() => setUpdate(false)}>Sua</button> :<button onClick={(e) => updateOne(_id, e)} name={name}>Cap nhat</button>}
                {' '}
                <button onClick={() => deleteOne(_id)}>Xoa</button>
            </td>
        </tr>
    )
}

export default Customer