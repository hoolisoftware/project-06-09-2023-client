import css from './index.module.scss'
import 'swiper/css';

import { API_URL } from '@/config';
import axios from 'axios'
import { useRef, useState } from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper'

import arrow from '../../../assets/components/home-block6-arrow.png'
import Heading from '../../../components/Heading'
import Container from '../../../components/Container'
import {useTranslation} from "react-i18next";


export default function Block() {
    const {data} = useQuery('certificates', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}clinic/certificates/`)
            return data
        }
    })

    const swiperRef = useRef<SwiperType>()
    const [currentIndex, setCurrentIndex] = useState<number|undefined>(0)

    const {t} = useTranslation();
    
    return <Container>
        <div className={css.heading}>
            <Heading center>{t("professionals_block2_title")}</Heading>
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
                    Array.isArray(data) && data.map(item =>
                        <SwiperSlide key={item.name}>
                            <div className={css.certificate}>
                                <img src={item.image} alt={item.name} />
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
                {Array.isArray(data) && data.map((_, index)=>
                    <div key={index} className={[css.sliderDot, index==currentIndex && css.sliderDotActive].join(' ')}></div>
                )}
            </div>
        </div>
    </Container>
}