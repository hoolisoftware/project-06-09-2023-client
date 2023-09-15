import css from './index.module.scss'

import {useDispatch} from 'react-redux'
import { toggleModalMessage } from '../../../features/modal/modalReducer'

import circle from '../../../assets/components/home-block1-circle.svg'
import bgLayer1 from '../../../assets/components/home-block1-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block1-bglayer2.png'
import bgLayer3 from '../../../assets/components/home-block1-bglayer3.png'

export default function Block(){
    const dispatch = useDispatch()

    return <div className={css.container}>
        <img className={css.bgLayer1} src={bgLayer1} alt="bgLayer1" />
        <img className={css.bgLayer2} src={bgLayer2} alt="bgLayer2" />
        <img className={css.bgLayer3} src={bgLayer3} alt="bgLayer3" />
        <div className={css.circle}>
            <img className={css.circleBg} src={circle} alt="circle" />
            <div className={css.circleContent}>
                <div className={css.circleContentHeading}>Sign up</div>
                <div className={css.circleContentDescription}>for free admission to the clinic<br />«Clinicestetic»</div>
                <button className={css.button} onClick={ () => dispatch(toggleModalMessage()) }>Make an appointment</button>
            </div>
        </div>
    </div>
}