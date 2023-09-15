import css from './index.module.scss'

import illustration1 from '../../../assets/components/home-block5-illustration1.png'
import illustration2 from '../../../assets/components/home-block5-illustration2.png'
import illustration3 from '../../../assets/components/home-block5-illustration3.png'
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
                <div className={css.heading}>Why you should contact our clinic?</div>
            </Heading>
            <div className={css.cards}>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration1} alt='illustration1'/>
                    <div className={css.cardHeading}>Large variety of treatments</div>
                    <div className={css.cardContent}>Clinicestetic offers large variety of treatments. From rhinoplasty and breast augmentation up to liposuction and cosmetology.</div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration2} alt='illustration2'/>
                    <div className={css.cardHeading}>Modern equipment</div>
                    <div className={css.cardContent}>All our surgery rooms ans wards are equipped with the latest technology, the most advanced and reliable medical equipment and medicines.</div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration3} alt='illustration3'/>
                    <div className={css.cardHeading}>Experienced specialists</div>
                    <div className={css.cardContent}>Clinicestetic specialists have a huge practical experience for more than 15 years that you look and feel better!</div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration4} alt='illustration4'/>
                    <div className={css.cardHeading}>Affordable prices</div>
                    <div className={css.cardContent}>We don’t try to make our prices sky-high. Our price policy is focused on everyone, to make beauty accessible to everyone!</div>
                </div>
            </div>
        </div>
    </div>
}