import css from './index.module.scss'

import quote from '../../../assets/components/home-block6-quote.png'
import arrow from '../../../assets/components/home-block6-arrow.png'

import { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'

import 'swiper/css';

import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import {useTranslation} from "react-i18next";


export default function Block() {
    const {t} = useTranslation();
    
    const slides = [
        [
            1,
            "Cenna",
            "I made my lips and not for the first time, I've been with them for 5-6 years. In your clinic I had my lips just the way I'd imagined and wanted for a long time! Everything went calmly and without any fussiness, which also was nice. If it was possible to give stars, I would give five!",
        ],
        [
            2,
            "Mervi",
            "Perfect result after fractory. The redness of the face disappeared within two weeks and no trace of enhanced capillaries remained."
        ],
        [
            3,
            "Anna",
            "Very pleased with the pleasant service in the clinic! Pleased with the results of the procedures!"
        ],
        [
            4,
            "Cenna",
            "I made my lips and not for the first time, I've been with them for 5-6 years. In your clinic I had my lips just the way I'd imagined and wanted for a long time! Everything went calmly and without any fussiness, which also was nice. If it was possible to give stars, I would give five!",
        ],
        [
            5,
            "Mervi",
            "Perfect result after fractory. The redness of the face disappeared within two weeks and no trace of enhanced capillaries remained."
        ],
        [
            6,
            "Anna",
            "Very pleased with the pleasant service in the clinic! Pleased with the results of the procedures!"
        ]
    ]

    const swiperRef = useRef<SwiperType>()
    const [currentIndex, setCurrentIndex] = useState<number|undefined>(0)
    return <Container>
        <div className={css.heading}>
            <Heading center>
                {t("Home_block6_card1_title")}
            </Heading>
        </div>
        <div className={css.swiperContainer}>
            <Swiper
                className={css.swiper}
                pagination={{ clickable: true }}
                spaceBetween={23}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                breakpoints={{
                    1020: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                }}
            >
                {
                    slides.map((slide, index) =>
                        <SwiperSlide key={index}>
                            <div className={css.card}>
                                <div className={css.cardText}>
                                    {slide[2]}
                                </div>
                                <div className={css.cardName}>{slide[1]}</div>
                                <img className={css.cardQuote} src={quote} alt="quoteMark" />
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
                {slides.map((slide, index)=>
                    <div key={index} className={[css.sliderDot, `${css.sliderDot}${slide[0]}`, index==currentIndex && css.sliderDotActive].join(' ')}></div>
                )}
            </div>
        </div>
    </Container>
}