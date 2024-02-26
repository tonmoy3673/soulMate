'use client';
import React from 'react';
import img1 from '@/Images/BannerImage/image1.jpg';
import img2 from '@/Images/BannerImage/image1.jpg';
import img3 from '@/Images/BannerImage/image1.jpg';
import img4 from '@/Images/BannerImage/image1.jpg';
import img6 from '@/Images/BannerImage/image1.jpg';

import BannerItem from './BannerItem.css';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
   
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel">
            {
                bannerData.map(slide => <BannerItem  key={slide.id} slide={slide}/>)
            }
            
        </div>
    );
};

export default Banner;