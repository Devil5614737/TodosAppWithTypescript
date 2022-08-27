import React, { useState } from 'react';
import {AiFillEdit} from 'react-icons/ai';
import {FaRegTrashAlt} from 'react-icons/fa';
import {TiTick} from 'react-icons/ti';
import {motion} from 'framer-motion';


interface TodosPropsI{
  title:string,
  id:number,
  handleDelete:(id:number)=>void,
  handleEditing:(id:number,text:string)=>void,
  editing?:boolean
  
}

export const Todos=({title,id,handleDelete,handleEditing,editing}:TodosPropsI):JSX.Element=>{
  const[text,setText]=useState<string>('')
    return (
        <motion.li
        initial={{opacity:0,y:12,scale:0}}
        animate={{opacity:1,y:0,scale:1}}
        transition={{
          type:"spring"
        }}
        
        className=' bg-[white] p-6 rouded-md shadow-lg flex justify-between items-center mb-7 w-full'>
        <p className='text-2xl max-w-[80%] '>{title}</p>
        {editing&&
        <input placeholder='update todo' className='border-2 w-full h-[3.2rem] rounded-md p-2 mr-2 text-2xl'
        value={text} 
        onChange={(e:React.FormEvent<HTMLInputElement>)=>setText(e.currentTarget.value)}
        />
        }
        <div className="flex items-center">
        {editing?
        <TiTick onClick={()=>handleEditing(id,text)}
        size={20} className='mr-10 cursor-pointer'/>:

        <AiFillEdit
        onClick={()=>handleEditing(id,text)}
         size={20} className='mr-10 cursor-pointer'/>
        
        
        }
          <FaRegTrashAlt 
          onClick={()=>handleDelete(id)}
          className='cursor-pointer' size={20}/>
        </div>
      </motion.li>
    )
}