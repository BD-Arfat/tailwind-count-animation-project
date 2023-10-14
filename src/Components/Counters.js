import React, { useState } from 'react';
import CountUp from 'react-countup';
import { AiOutlineCrown, AiOutlineGlobal, AiOutlineRead, AiOutlineTeam } from "react-icons/ai";
import ScrollTrigger from 'react-scroll-trigger';

const Counters = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className=''>
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div className='flex items-center justify-around mt-52 text-center'>
                    <div className='border-2 border-gray-200 py-5 px-16'>
                        <div className='flex items-center gap-3'>
                            <AiOutlineGlobal className='text-center text-2xl text-red-700' />
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={34} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-9'>FOREIGN FOLLOWERS</p>
                    </div>
                    {/* 2 */}
                    <div className='border-2 border-gray-200 py-5 px-16'>
                        <div className='flex items-center gap-3'>
                            <AiOutlineRead className='text-center text-2xl text-red-700' />
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={12} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-9'>CLASSES COMPLETE</p>
                    </div>
                    {/* 3 */}
                    <div className='border-2 border-gray-200 py-5 px-16'>
                        <div className='flex items-center gap-3'>
                            <AiOutlineTeam className='text-center text-2xl text-red-700' />
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={214} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-9'>STUDENTS ENROLLED</p>
                    </div>
                    {/* 4 */}
                    <div className='border-2 border-gray-200 py-5 px-16'>
                        <div className='flex items-center gap-3'>
                            <AiOutlineCrown className='text-center text-2xl text-red-700' />
                            <h1 className='text-4xl font-bold'>
                                {counterOn && <CountUp start={0} end={56} duration={6} delay={0} />}
                                K
                            </h1>
                        </div>
                        <p className='ms-9'>CERTIFIED TEACHERS</p>
                    </div>

                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Counters;