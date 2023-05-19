import React, { useState} from 'react';
import JsonData from './newdoc.json';
import "tailwindcss/tailwind.css"

const MyComponent = () => {
   const [newinfo, setNewinfo] = useState(undefined);
   const [filter, setFilter] = useState([]);
   const data = JsonData.employees;
   console.log(data);

   const onsubmithandler=()=>{
    const filtered_data = data.filter((item)=>{
        return item.name===newinfo;
    })
   setFilter(filtered_data);
   }
   
  return (
    <div className='bg-gray-100 w-screen h-screen p-10'>
      <p className='font-bold text-2xl'>ENTER THE NAME OF PERSON : </p>
      <p className='text-red-500'>Format: Mr. (name)</p>
      <input type='text' className='px-10 py-4 m-10' value={newinfo} onChange={(e)=>{
        setNewinfo(e.target.value);
      }}></input>
      <button type='submit' className='bg-blue-200 px-6 py-2' onClick={onsubmithandler}> submit </button>
      {filter&&filter?.map((_data) =>(
        <div className="container mx-auto " key={_data.id}>
        <h1 className="text-2xl font-bold mb-4 bg-blue-100 rounder-xl p-4">Name: {_data.name}</h1>
        
        <p className="mb-2 text-xl font-bold bg-gray-300">Designation: {_data.designation}</p>
        <h2 className="text-xl font-bold mt-4">Skills:</h2>
        <ul className="list-disc list-inside mb-4 p-8 bg-red-100 rounded-xl text-start w-64 ">
          {_data?.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p className='font-bold text-3xl '> Projects</p>
        <ul className="list-disc list-inside mb-4 bg-gray\-100">
          {_data?.projects?.map((project,index) => (
            <li key={index}>
             
            <p className='font-bold text-lg'>{project.name}</p>
            <ul className="list-disc list-inside mb-4 bg-red-100 rounded-xl w-64 item-center text-center">
                {project?.tasks?.map((_task,index)=>{
                  return(
                  <li key={index}>
                    <p>{_task.name}</p>
                    <p>{_task.status}</p>
                  </li>
                  )
                })}
            </ul>
            <p className='font-bold text-xl'> TEAM </p>
            <ul className="list-disc list-inside mb-4 p-14">
            {project?.team?.map((_team,index)=>{
              return(
                  <li key={index}>
                    <p className='text-xl  font-bold text-blue-300'>{_team.name}</p>
                    <p>{_team.role}</p>
                  </li>
              )
                })}
            </ul>
            </li>
            
          ))}
        </ul>
        </div>
       
      )
      )}
    
    </div>
 
  )};
  export default MyComponent;