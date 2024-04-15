import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='py-4  px-10 h-auto items-center flex justify-around w-full bg-slate-800'>
        <div className='px-8 rounded-md py-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>Logo</div>
        <nav className='flex gap-5 font-mono space-x-0'>
        <NavLink style={(e) => {
                    // console.log(e.isActive)
                    return { 
                        color: e.isActive ? 'tomato' : 'white',
                        fontWeight:e.isActive ?'bold':""
                 }
                }} to="/">Home</NavLink>

                {/* <NavLink to={'/courses'} style={(e)=>{
                    return {color:e.isActive?'tomato':'',fontWeight:e.isActive?'bolder':''}
                }}>Courses</NavLink> */}

                <NavLink style={(e) => {
                    return { 
                        color: e.isActive ? 'tomato' : 'white',
                        fontWeight:e.isActive ?'bold':"" }
                }} to="/service">Projects</NavLink>
                <NavLink className={(e)=>{
                    return[e.isActive?'text-red-500':"text-white",e.isActive?'font-bold':""].join(' ');
                }} to="/show">What do we do?</NavLink>
                <NavLink className={(e)=>{
                    return[e.isActive?'text-red-500':"text-white",e.isActive?'font-bold':""].join(' ');
                }} to="/show">Pricing</NavLink>
                <NavLink className={(e)=>{
                    return[e.isActive?'text-red-500':"text-white",e.isActive?'font-bold':""].join(' ');
                }} to="/show">Case Study</NavLink>
                <NavLink className={(e)=>{
                    return[e.isActive?'text-red-500':"text-white",e.isActive?'font-bold':""].join(' ');
                }} to="/show">Faq</NavLink>
        </nav>
        
        <button className='  bg-purple-500 px-4 py-1 rounded-2xl text-white '>Book A call</button>   
    </div>
  )
}

export default Nav