import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

function WhyUsNav() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      label: 'Information on Job Openings',
      image: '/img/job-openings.png',
      content: (
        <div className="flex-1 m-1 relative">
          <Image src='/img/job_description.png' fill alt='Information on Job Openings' />
        </div>
      )
    },
    {
      label: 'Mock interviews',
      image: '/img/project-collaboration.png',
      content: (
        <div className="flex-1 m-1 relative">
          <Image src='/img/mock_interviews.webp' fill alt='Mock interviews' />
        </div>
      )
    },
    {
      label: 'Competitive coding',
      image: '/img/interview-experiences.png',
      content: (
        <div className="flex-1 m-1 relative">
          <Image src='/img/competitive_coding.png' fill alt='Competitive coding' />
        </div>
      )
    },
    {
      label: 'Major Announcements',
      image: '/img/competitive-coding.png',
      content: (
        <div className="flex-1 m-1 relative">
          <Image src='/img/major_announcements.png' fill alt='Major Announcements' />
        </div>
      )
    },
    {
      label: '24/7 LMS Access',
      image: '/img/major-announcements.png',
      content: (
        <div className="flex-1 m-1 relative">
          <Image src='/img/lms.png' fill alt='24/7 LMS Access' />
        </div>
      )
    }
  ];

  return (
    <div className='w-76 h-136 mb-36 mx-auto bg-corporate-light rounded-2xl flex shadow'>
      <div className='flex flex-col w-96 justify-between'>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames({
              'border-0 bg-white w-full grow p-5 cursor-pointer': true,
              'border-r-8 border-yellow text-white bg-why-us-selected': selectedTab === index,
              'rounded-tl-2xl': index === 0,
              'rounded-bl-2xl': index === tabs.length - 1,
            })}
            onClick={() => setSelectedTab(index)}
          >
            <div className="flex items-center gap-6">
              <Image src={tab.image} width={68} height={71} alt={tab.label} />
              <p className='text-xl font-semibold'>{tab.label}</p>
            </div>
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={classNames({
            'bg-whyus w-full h-full flex p-4 rounded-r-2xl': true,
            'hidden': selectedTab !== index
          })}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}

export default WhyUsNav;
