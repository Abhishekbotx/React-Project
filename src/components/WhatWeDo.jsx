import React from 'react'
import WhatWeDoCards from './WhatWeDoCards';

const dataArray = [
    { number: 1, text: "Podcast Editing- Video & Audio", description: "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit. Lorem adipisicing elit.Quidemes impedit autem dicta aliquam fugit iste misteee" },
    { number: 2, text: "Short form video repurposing", description: "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit. Lorem adipisicing elit.Quidemes impedit autem iste aut est dolorem fugit iste misteee" },
    { number: 3, text: "Youtube(medium-length) Video Repurposing", description: "Lorem ipsum dolor lorem  iste aut est dolorem fugit iste misteee Lorem" },
    { number: 4, text: "Show Notes", description: "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit. Lorem adipisicing elit.Quidemes impedit autem dicta aliquam perferendis, quaee luis fugit iste aut est dolorem fugit iste misteee" },
    { number: 5, text: "Paid Advertising", description: "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit. Lorem adipisicing elit.Quidemes impedit autem dicta aliquam perferendis, quaee luis fugit iste aut est dolorem fugit iste misteee" },
    { number: 6, text: "Omnichannel Distribution", description: "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor  impedit autem dicta  aut est dolorem fugit iste misteee" },

];

const DataArray2 = [
    { number: 1, text: 'Comprehensive Asset Marketing:', Description: 'From short-form/medium-form repurposed videos to engaging quotes and tweets, we produce all the marketing assets you need at scale.' },
    { number: 2, text: 'Comprehensive Asset Marketing:', Description: 'From short-form/medium-form repurposed videos to engaging quotes and tweets, we produce all the marketing assets you need at scale.' },
    { number: 3, text: 'Comprehensive Asset Marketing:', Description: 'From short-form/medium-form repurposed videos to engaging quotes and tweets, we produce all the marketing assets you need at scale.' },
]

const WhatWeDo = () => {
    return (
        <div className='h-[800px] w-[95%] flex  mb-10'>
            <div className='w-[55%]  ml-   flex flex-col px-20'>
                <div className='h-3/4'>
                    <p className='text-6xl pt-10 text-zinc-100'>What Do We Do?</p>
                    <div className='mt-8'>
                        {DataArray2.map((item, index) => (
                            <WhatWeDoCards key={index} text={item.text} Description={item.Description} />
                        ))}
                    </div>
                </div>

                <div className='mt-4 w-[100%] rounded-md  bg-fuchsia-500 flex items-center  h-1/4'>
                    <p className='capitalize text-white w-1/2 text-5xl ml-5 font-bold'>book the call now</p>
                </div>
            </div>
            <div className='w-[45%] h-full pr-6'>
                <div className='w-full  h-3/4 grid grid-rows-3 gap-3 grid-cols-2 px-3 py-3 '>
                    {dataArray.map((item, index) => {

                        return <div key={index} className='bg-zinc-400 rounded-md relative flex-col flex'>
                            <p className='text-2xl px-5 pt-6'>{item.text}</p>
                            <p className='px-5  text-xs mt-3'> {item.description}</p>
                            <p className='absolute  mt-[9.5rem]  ml-[13rem] text-xl  font-bold '>{item.number}</p>
                        </div>

                    })}

                </div>
                <div className='bg-zinc-500 h-1/4 mx-3 mb-3 rounded-lg '>
                    <div className='bg-zinc-300 h-full w-full  rounded-lg  relative'>
                        <p className='text-2xl px-5 pt-6 w-5/6'>Text Repurposing Blogs, Tweets & Other Social formats</p>
                        <p className='px-5  text-sm mt-3'> Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit. Lorem adipisicing  perferendis, quaee  iste aut est dolorem  fugit iste misteee</p>
                        <p className='absolute  -mt-5  ml-[28rem] text-xl  font-bold '>7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo