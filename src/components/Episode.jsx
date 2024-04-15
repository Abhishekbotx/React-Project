import React from 'react'
import { FaYoutube } from "react-icons/fa";

const data = ['1 Cinematic Teaser/Trailer For The Episode', '1 Cinematic Teaser/Trailer For The Episode', '1 Cinematic Teaser/Trailer For The Episode', '1 Cinematic Teaser/Trailer For The Episode']
const Episode = () => {
    return (
        <div className='bg-slate-900 h-[900px] '>
            <div className='flex justify-center pt-10'>
                <p className='text-white text-4xl font-bold'>1 Episode Turns Into</p>
            </div>
            <div className='mt-10'>
                <div className='grid-container  grid justify-self-auto m-auto gap-3 p-3  w-3/4  h-[475px] '>
                    <div className='youtube rounded-md flex-col bg-white flex items-cente'>
                        <div className='flex '>
                            <FaYoutube className='ml-4  mt-[14px] text-2xl' />
                            <p className=' self-start ml-2 text-2xl mt-2'> YouTube</p>
                        </div>
                        <iframe className='rounded-md m-auto' width="553" height="375" src="https://www.youtube.com/embed/5DNl22MvaNo" title="BROKEN DREAMS - Beautiful Emotional Music Mix | Ethereal Dramatic Orchestral Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className='content1 rounded-md text-[1.22rem]  pl-4 font-semibold  flex flex-col  pt-8 bg-white'>
                        <p> 6/8 Repurposed</p>
                        <p>Short Videos</p>
                    </div>

                    <div className='content2  rounded-md text-[1.22rem]  font-semibold  flex flex-col  pl-4 pt-8 bg-white'>
                        <p> 2 Repurposed Medium- Length Youtube Videos</p>
                        <p></p>
                    </div>

                </div>
                <div className=' grid justify-self-auto  m-auto px-3 pb-3   gap-3   grid-rows-1 grid-cols-4  w-3/4  h-[250px] '>

                    {
                        data.map((item,index) => {
                            return <div key={index} className='content3 px-4 rounded-md text-[1.22rem]  font-semibold justif-center flex flex-col   bg-white'>
                                <p className='mt-6 w-4/5'> {item}</p>

                            </div>
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default Episode