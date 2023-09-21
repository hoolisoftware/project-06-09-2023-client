import css from './index.module.scss'

import illustration1 from '../../../assets/components/home-block5-illustration1.png'
import illustration2 from '../../../assets/components/home-block5-illustration2.jpg'
import illustration3 from '../../../assets/components/home-block5-illustration3.jpg'
import illustration4 from '../../../assets/components/home-block5-illustration4.png'

import bgLayer1 from '../../../assets/components/home-block5-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block5-bglayer2.png'

import Heading from '../../../components/Heading'


export default function Block(){
    return <div className={css.block}>
        <img className={css.bgLayer2} src={bgLayer2} alt="bgLayer2" />
        <img className={css.bgLayer1} src={bgLayer1} alt="bgLayer1" />
        <div className={css.container}>
            <Heading center>
                <div className={css.heading}>Почему вам стоит обратиться в нашу клинику?</div>
            </Heading>
            <div className={css.cards}>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration1} alt='illustration1'/>
                    <div className={css.cardHeading}>Большой выбор операций</div>
                    <div className={css.cardContent}>
                        Клиника Clinicestetic предлагает большой выбор операций. От ринопластики и увеличения груди до липосакции и косметологии.
                    </div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration2} alt='illustration2'/>
                    <div className={css.cardHeading}>Современное оборудование</div>
                    <div className={css.cardContent}>
                        Все наши операционные и палаты оборудованы по последнему слову техники, самым передовым и надежным медицинским оборудованием и медикаментами.
                    </div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration3} alt='illustration3'/>
                    <div className={css.cardHeading}>Опытные специалисты</div>
                    <div className={css.cardContent}>
                        Специалисты Clinicestetic имеют огромный практический опыт более 15 лет, чтобы вы выглядели и чувствовали себя лучше!
                    </div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration4} alt='illustration4'/>
                    <div className={css.cardHeading}>Доступные цены</div>
                    <div className={css.cardContent}>
                        Мы не стремимся делать наши цены заоблачными. Наша ценовая политика ориентирована на каждого, чтобы сделать красоту доступной для всех!
                    </div>
                </div>
            </div>
        </div>
    </div>
}