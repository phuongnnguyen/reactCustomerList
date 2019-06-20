import React from 'react'
import Customer from './Customer'

const Table = props => {
    const customers = props.customers.map(customer => (
        <Customer key={customer._id} {...customer}/>
    ))
    return(
        <div className="w3-responsive">
            <table className="w3-table w3-hoverable w3-centered">
                <thead className="w3-black w3-large">
                    <tr className="w3-border">
                        <th>Ngay</th>
                        <th>Ten khach hang</th>
                        <th>So dien thoai</th>
                        <th>Nhu cau</th>
                        <th>Dia chi</th>
                        <th>Nguon</th>
                        <th>Tiem nang</th>
                        <th>Ghi chu</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { customers }
                </tbody>
            </table>
        </div>
    )
}

export default Table