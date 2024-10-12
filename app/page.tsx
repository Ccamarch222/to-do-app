"use client"
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [todoItem, setTodeItem] = useState([])
  const [todoComItem, setTodoComItem] = useState([])
  const[inputField,setInputField] = useState('')


  const addTodoItem = () => {
    const newTodoItem:any =[...todoItem]
    newTodoItem.push(inputField)
    setTodeItem(newTodoItem)
    setInputField("")

  

  }

  const removeTodoitem = (index:number) => {
    const removeItem =[...todoItem]
    removeItem.splice(index,1)
    setTodeItem(removeItem)

  }
  const masrkAsCompleted = (singleItem:string) => {
    const newComItem:any =[...todoComItem]
    newComItem.push(singleItem)
    setTodoComItem(newComItem)

  }
  return (
    // <div className="p-4 flex-wrap">
      // <input type="text" className="border rounded p-2 m-4 w-full" placeholder="Enter text here " 
      // onChange={(e) => {
      //   setInputField(e.target.value)
      // }}/>
       //<button className=" p-2 m-4 classNamefixed bottom-5 right-5  bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all  ">Submit</button>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

      {/* Input field */}
      <div className="flex mb-4">
      <input type="text" className="border rounded p-2 m-4 w-full" placeholder="Enter text here " value={inputField}
      onChange={(e) => {
        setInputField(e.target.value)
      }}/>
       <button className=" p-2 m-4 classNamefixed bottom-5 right-5  bg-blue-500 text-black  rounded-full shadow-lg hover:bg-blue-700 transition-all  " onClick={addTodoItem}>add </button>
      </div>

      {/* Todo list */}
      <ul className="list-disc pl-5 space-y-2">
        {todoItem.length > 0 ? 
        todoItem.map((singleItem,index) => {
          const markComplete = todoComItem.includes(singleItem)

          return (
            <li  className= { ( markComplete ? "bg-green-500 text-white" : " bg-white " ) + " flex justify-between items-center p-2 rounded " } >
            <span className="flex-1">{singleItem}</span> 
             {markComplete?
             null
             :
             <>
             <button className="mr-2 p-1 text-gray-400  hover:text-green-600  transition"
             onClick={() => masrkAsCompleted(singleItem) }
             >
               complete
 
             </button>
 
             <button
               
               className=" text-gray-400 p-1 rounded hover:text-red-600 transition" 
               onClick={() => removeTodoitem(index)}
             >
               Delete
             </button>
             </>
             }
         
          </li>

          )
        })
       
          :
          <p>No  task for tody</p>
       

        }
        
        
      </ul>
    </div>
  </div>

  );
}
