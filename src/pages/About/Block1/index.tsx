import css from './index.module.scss'

import circleMask from '../../../assets/components/about-block1-mask.png'

import Container from '../../../components/Container'

export default function Block() {
    return <div className={css.block}>
        <Container>
            <div className={css.circle}>
                <img className={css.circleMask} src={circleMask} alt="mask" />
                <div className={css.circleText}>
                    About<br />our clinic
                </div>
            </div>
        </Container>
    </div>
}