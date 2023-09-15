import css from './index.module.scss'

import bgLayer1 from '../../../assets/components/home-block3-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block3-bglayer2.png'
import bgLayer3 from '../../../assets/components/home-block3-bglayer3.png'
import bgLayer4 from '../../../assets/components/home-block3-bglayer4.png'
import circleMask from '../../../assets/components/home-block3-circlemask.png'

export default function Block(){
    return <div className={css.block}>
        <img className={[css.bgLayer, css.bgLayer4].join(' ')} src={bgLayer4} alt="bgLayer" />
        <img className={[css.bgLayer, css.bgLayer3].join(' ')} src={bgLayer3} alt="bgLayer" />
        <img className={[css.bgLayer, css.bgLayer2].join(' ')} src={bgLayer2} alt="bgLayer" />
        <img className={[css.bgLayer, css.bgLayer1].join(' ')} src={bgLayer1} alt="bgLayer" />
        <div className={css.container}>
            <div className={css.circle}>
                <div className={css.circleContent}>
                    <img className={css.circleMask} src={circleMask} alt="circleMask" />
                    <div className={css.circleTitle}>We appreciate<br />your time</div>
                    <div className={css.circleDescription}>Leave the phone,we will call you<br />back in 9 seconds</div>
                    <div className={css.circleButton}>Call Me</div>
                </div>
            </div>
        </div>
    </div>
}