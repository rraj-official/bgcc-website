import React from 'react'
import ServicesCard from './ServicesCard'

const StratInsights = () => {
    return (
        <div className='flex flex-col items-center p-[60px]'>
            {/* Section 1 */}
            <div className='flex justify-between mb-[150px]'>
                <div className='flex flex-col items-start justify-center w-1/2 mr-3'>
                    <div className='text-5xl text-white w-6/7 font-bold mb-4'>Unleashing <span className='text-[#E5CF5F]'>Strategic Insights</span> for Business Success</div>
                    <div className='text-md text-gray-400 tracking-wider font-semibold mb-8'>Data-Driven Strategies & <span className='text-[#E5CF5F]'>Visionary Thinking</span> to Propel Your Company to New Heights</div>
                    <div className='text-2xl text-white w-4/5 tracking-wide font-semibold'>We are a passionate group of 50+ like minded students from BITS Pilani, Goa Campus. Our vision is to delve into the world of <span className='text-[#E5CF5F]'>consulting</span>, working closely with clients and gaining hands-on experience in various industries.</div>
                    <div></div>
                </div>
                <div className='w-1/2'>
                    <img className='h-[100px] w-[100px]' src="https://i.imgur.com/fWoybek.png"></img>
                </div>
            </div>
            {/* Section 2 */}
            <div className='flex justify-between mb-[150px]'>
                <div className='w-1/2'>
                    <img className='h-[100px] w-[100px]' src="https://i.imgur.com/rj2ff6w.png"></img>
                </div>
                <div className='flex flex-col items-start justify-center w-1/2 mr-3'>
                    <div className='text-5xl text-white w-6/7 font-bold mb-4 text-right'>All Your Needs, Covered By <span className='text-[#E5CF5F]'>Our Services</span></div>
                    <div className='text-md text-gray-400 tracking-wider font-semibold mb-8 text-right w-6/7'>Consultancy Solutions Tailored to <span className='text-[#E5CF5F]'>Empower Your Business</span> Growth and Excellence</div>
                    <div className='text-2xl text-white w-6/7 tracking-wide font-semibold text-right'>We are a passionate group of 50+ like minded students from BITS Pilani, Goa Campus. Our vision is to delve into the world of <span className='text-[#E5CF5F]'>consulting</span>, working closely with clients and gaining hands-on experience in various industries.</div>
                    <div></div>
                </div>
            </div>
            {/* Services (Justify it so that end of cards touch margin line)*/}
            <div className='flex justify-between mb-[150px]'>
                <ServicesCard />
                <ServicesCard />
                <ServicesCard />
            </div>
            {/* Section 3 */}
            <div className='flex justify-between mb-[150px]'>
                <div className='flex flex-col items-start justify-center w-1/2 mr-3'>
                    <div className='text-5xl text-white w-2/3 font-bold mb-4'>Partners In Success For <span className='text-[#E5CF5F]'>Our Clientele</span></div>
                    <div className='text-md text-gray-400 tracking-wider font-semibold mb-8 w-3/4'>We have a stellar client roster from multiple industries ranging from AgriTech to FinTech and Ed-Tech, with many of them coming back for repeat projects. Here are a the top companies we have worked with</div>
                    {/* <div className='text-2xl text-white w-4/5 tracking-wide font-semibold'>We are a passionate group of 50+ like minded students from BITS Pilani, Goa Campus. Our vision is to delve into the world of <span className='text-[#E5CF5F]'>consulting</span>, working closely with clients and gaining hands-on experience in various industries.</div> */}
                    <div></div>
                </div>
                <div>
                    <img className='h-[100px] w-[100px]' src="https://i.imgur.com/XBgpufb.png"></img>
                </div>
            </div>
        </div>

    )
}

export default StratInsights