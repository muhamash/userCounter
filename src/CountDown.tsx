/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Avatar, Card, Space } from 'antd';
// import { TrophyFilled, NotificationFilled, UserAddOutlined, QqOutlined } from '@ant-design/icons';
import LottieAnimationUser from './animation/User';
import LottieAnimationEvent from './animation/Event';
import LottieAnimationPeople from './animation/Participant';

function Counter() {
  // const [count, setCount] = useState(0);
  // const endValue = 600;
  // const duration =  105;

  // useEffect(() => {
  //   let animationStartTime: number | undefined;
  //   let animationFrame: number;

  //   const startAnimation = (timestamp: number) => {
  //     if (!animationStartTime) {
  //       animationStartTime = timestamp;
  //     }

  //     const progress = (timestamp - animationStartTime) / (duration * 1000);

  //     if (progress < 1) {
  //       const newValue = Math.floor(progress * endValue);
  //       setCount(newValue);
  //       animationFrame = requestAnimationFrame(startAnimation);
  //     } else {
  //       setCount(endValue);
  //     }
  //   };

  //   animationFrame = requestAnimationFrame(startAnimation);

  //   return () => {
  //     cancelAnimationFrame(animationFrame);
  //   };
  // }, []);

  return (
    <div className='p-5'>
      <Card
        bordered
        hoverable
        style={{ padding: '5px' }}
        className='bg-slate-200 bg-opacity-30 w-[80%] mx-auto'
      >
        <div className='grid sm:grid-cols-6 xs:grid-cols-1 justify-items-center gap-5'>
          <Space size={'middle'} direction='vertical' align='center' className='col-span-2'>
            <div>
              {/* <Avatar shape={'square'} size={'large'} icon={<LottieAnimationPeople/>} /> */}
              <LottieAnimationPeople speed={0.5}/>
            </div>
            <CountUp
              className='lg:text-[30px] md:text-[26px] sm:text-[23px] xs:text-[20px] font-semibold text-orange-400'
              suffix="+"
              delay={1}
              end={1550}
              duration={5}
            />
            <p className='text-slate-700 font-Neon xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg w-fit mx-auto text-center'>
              Current participants
            </p>
          </Space>
          <Space size={'middle'} direction='vertical' align='center' className='col-span-2'>
            <div>
              {/* <Avatar shape={'square'} size={'large'} icon={<LottieAnimationUser />} /> */}
              <LottieAnimationUser speed={0.5}/>
            </div>
            <CountUp
              className='lg:text-[30px] md:text-[26px] sm:text-[23px] xs:text-[20px] font-semibold text-orange-400'
              suffix="+"
              delay={2}
              end={30}
              duration={5}
            />
            <p className='text-slate-700 font-Neon xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg w-fit mx-auto text-center'>
              Current user
            </p>
          </Space>
          <Space size={'middle'} direction='vertical' align='center' className='col-span-2'>
            <div>
              {/* <Avatar shape={'square'} size={'large'} icon={<LottieAnimationEvent/>} /> */}
              <LottieAnimationEvent speed={0.5}/>
            </div>
            <CountUp
              className='lg:text-[30px] md:text-[26px] sm:text-[23px] xs:text-[20px] font-semibold text-orange-400'
              suffix="+"
              delay={3}
              end={10}
              duration={5}
            />
            <p className='text-slate-700 font-Neon xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] drop-shadow-lg text-center'>
              Ongoing events
            </p>
          </Space>
        </div>
      </Card>
    </div>
  );
}

export default Counter;