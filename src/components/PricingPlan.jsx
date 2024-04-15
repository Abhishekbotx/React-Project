import React from 'react';

const PricingPlan = () => {
    return (
        <div className="group  transition-all  delay-100 bg-gray-800 text-slate-400  border-gray-900  hover:scale-105  border-2 py-5 px-2 m-3 rounded-lg    hover:border-lime-400 hover:text-gray-500 w-[27%]">
            <h2 className="text-2xl mb-3 text-white text-center">Premium</h2>
            <p className="mb-3 text-xs">A Competitive Repurposing Solution: For new or expanding podcasts. Unlock higher content discovery, engagement & audience growth via our revolutionary services.</p>
            <ul className="mb-3 text-xs px-2">
                <li><span className='text-white text-xl'>•</span> 30+ repurposed short videos a month</li>
                <li><span className='text-white text-xl'>•</span> 8 repurposed medium-length youtube videos</li>
                <li><span className='text-white text-xl'>•</span> Cinematic teaser trailer for each episode</li>
                <li><span className='text-white text-xl'>•</span> All posted on YT,TI,G,F,TB,T & LI</li>
                <li><span className='text-white text-xl'>•</span> Thumbnails for all assets</li>
            </ul>
            <p className="mb-3 text-white px-3">Video edit style:</p>
            <ul className="mb-5 text-sm px-3">
                <li>B-Roll</li>
                <li>Stock Imagery</li>
                <li>Text Animation</li>
            </ul>
            <button className="bg-gray-900  border-lime-400 hover:border-0 transition-scale border-2 text-white ml-1 px-24 py-2 rounded-3xl  ease-in-out duration-100 hover:bg-pink-500 hover:text-white ">Book A Call</button>
        </div>
    );
};

export default PricingPlan;
