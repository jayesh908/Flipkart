import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
const User = () => {
    const columns = [
        {
            name: "Name",
            selector: row =>{ return row.name},
            sortable:true
        },
        {
            name: 'Email',
            selector: row =>   row.email,
            sortable:true
            
        },
        {
            name: "Age",
            selector: row =>  row.age
            
        }
    ]
    const data = [
        {
            id: 1,
            name: "jayesh",
            email: "jayesh545@gmail.com",
            age: "21",

        },
        {
            id: 2,
            name: "Sahil",
            email: "Sahil1351@gmail.com",
            age: "21",

        },
        {
            id: 3,
            name: "Mahender",
            email: "Mahii545@gmail.com",
            age: "21",

        },
        {
            id: 4,
            name: "Hardik",
            email: "Hardik545@gmail.com",
            age: "21",

        },
        {
            id: 5,
            name: "Arun",
            email: "Arun545@gmail.com",
            age: "21",

        },
        {
            id: 6,
            name: "Arun",
            email: "Arun545@gmail.com",
            age: "21",

        },
        {
            id: 7,
            name: "Arun",
            email: "Arun545@gmail.com",
            age: "21",

        },
        {
            id: 8,
            name: "Arun",
            email: "Arun545@gmail.com",
            age: "21",

        },
        {
            id: 9,
            name: "Arun",
            email: "Arun545@gmail.com",
            age: "21",

        },
    ]
    const[record,setrecord]= useState(data)
    const handlefilter = (e)=>{
        const newdata = data.filter(row=>{
            return row.name.toLocaleLowerCase().match(e.target.value.toLowerCase())
        })
        setrecord(newdata)
    }
    return (
        <div className='container mt-5'>
                <div><h1 className='text-center'>User Data</h1></div>
            <div className='text-start'><input type='text' onChange={handlefilter} placeholder='Search the User'></input></div>
            <DataTable
                columns={columns}
                data={record} selectableRows
                fixedHeader
                pagination>
                    
            </DataTable>
        </div>
    )
}

export default User
