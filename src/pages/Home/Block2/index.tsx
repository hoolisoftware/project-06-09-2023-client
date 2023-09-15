import css from './index.module.scss'

import illustration1 from '../../../assets/components/home-block2-illustration1.png'
import illustration2 from '../../../assets/components/home-block2-illustration2.png'

import Treatments from '../../_CommonBlocks/Treatments'

export default function Block() {

    return <>
        <div className={css.illustrations}>
            <div className={[css.illustrationsBall,css.illustrationsBall1].join(' ')}></div>
            <div className={[css.illustrationsBall,css.illustrationsBall2].join(' ')}></div>
            <img className={css.illustration1} src={illustration1} alt="illustration1"/>
            <img className={css.illustration2} src={illustration2} alt="illustration2"/>
        </div>
        <Treatments/>
    </>
}