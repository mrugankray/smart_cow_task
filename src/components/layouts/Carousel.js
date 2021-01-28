import React, {useEffect, useState} from 'react'
import './carousel.css'
import img1 from '../../img/pexels-alexis-bahl-3194457.jpg'
import img2 from '../../img/pexels-noah-erickson-404280.jpg'
import img3 from '../../img/pexels-roberto-shumski-6102227.jpg'
import ColorThief from 'colorthief'
import invert from 'invert-color';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Carousel() {
    const slideOneRef = React.createRef();
    const slideTwoRef = React.createRef();
    const slideThreeRef = React.createRef();
    const textOneRef = React.createRef();
    const textTwoRef = React.createRef();
    const textThreeRef = React.createRef();

    const [textColor1, setTextColor1] = useState(null)
    const [textColor2, setTextColor2] = useState(null)
    const [textColor3, setTextColor3] = useState(null)

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')

    const getInvColor = (ref) => {
        const colorThief = new ColorThief();
        const img = ref.current
        const result = colorThief.getColor(img, 25);
        console.log(rgbToHex(result[0], result[1], result[2]))
        return invert(rgbToHex(result[0], result[1], result[2]), true)
    }

    useEffect(() => {
        textOneRef.current.style.color = textColor1
        textTwoRef.current.style.color = textColor2
        textThreeRef.current.style.color = textColor3
    }, [textColor1, textColor2, textColor3])
      
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
                <div className='img-container'>
                    <p ref={textOneRef} >Slide 1</p>
                    <img src={img1} ref={slideOneRef} onLoad={() => {
                        const color = getInvColor(slideOneRef)
                        setTextColor1(color)
                    }}/> 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='img-container'>
                    <p ref={textTwoRef}>Slide 1</p>
                    <img src={img2} ref={slideTwoRef} onLoad={() => {
                        const color = getInvColor(slideTwoRef)
                        setTextColor2(color)
                    }}/> 
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='img-container'>
                    <p ref={textThreeRef}>Slide 1</p>
                    <img src={img3} ref={slideThreeRef} onLoad={() => {
                        const color = getInvColor(slideThreeRef)
                        setTextColor3(color)
                    }}/>  
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
