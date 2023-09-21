import css from './index.module.scss'

import arrow from '../../../assets/components/home-block6-arrow.png'
import certificate1 from '../../../assets/components/certificates1.jpg'
import certificate2 from '../../../assets/components/certificates2.jpg'
import certificate3 from '../../../assets/components/certificates3.jpg'
import certificate4 from '../../../assets/components/certificates4.jpg'

import { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'

import 'swiper/css';

import Heading from '../../../components/Heading'
import Container from '../../../components/Container'


export default function Block() {

    const certificates = [
        certificate1,
        certificate2,
        certificate3,
        certificate4,    
        certificate1,
        certificate2,
        certificate3,
        certificate4,
    ]

    const swiperRef = useRef<SwiperType>()
    const [currentIndex, setCurrentIndex] = useState<number|undefined>(0)
    return <Container>
        <div className={css.heading}>
            <Heading center>Certificates</Heading>
        </div>
        <div className={css.swiperContainer}>
            <Swiper
                className={css.swiper}
                pagination={{ clickable: true }}
                spaceBetween={23}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                breakpoints={{
                    1020: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    400: {
                        slidesPerView: 2
                    }
                }}
            >
                {
                    certificates.map((certificate, index) =>
                        <SwiperSlide>
                            <div className={css.certificate}>
                                <img src={certificate} alt={`certificate${index}`} />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <button className={[css.sliderButton, css.sliderButtonPrev].join(' ')} onClick={() => {swiperRef.current?.slidePrev();setCurrentIndex(swiperRef.current?.realIndex)}}>
                <img src={arrow} alt="arrow" />
            </button>
            <button className={[css.sliderButton, css.sliderButtonNext].join(' ')} onClick={() => {swiperRef.current?.slideNext();setCurrentIndex(swiperRef.current?.realIndex)}}>
                <img src={arrow} alt="arrow" />
            </button>
            <div className={css.sliderDots}>
                {certificates.map((slide, index)=>
                    <div className={[css.sliderDot, `${css.sliderDot}${slide[0]}`, index==currentIndex && css.sliderDotActive].join(' ')}></div>
                )}
            </div>
        </div>
    </Container>
}