import css from './index.module.scss'

import illustration1 from '../../../assets/components/beforeafter-illustration1.jpg'
import illustration2 from '../../../assets/components/beforeafter-illustration2.jpg'
import illustration3 from '../../../assets/components/beforeafter-illustration3.jpg'

import Heading from '../../../components/Heading'

export default function Block() {
    return <div className={css.block}>
        <div className={css.container}>
            <div className={css.heading}>
                <Heading center>Before and after</Heading>
            </div>
            <div className={css.section}>
                <div className={css.sectionInner}>
                    <div className={css.sectionHeading}>Laser Cosmetology</div>
                    <div className={css.sectionIllustrations}>
                        <img className={css.sectionIllustration} src={illustration1} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration2} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration3} alt="illustration" />
                    </div>
                </div>
            </div>
            <div className={css.section}>
                <div className={css.sectionInner}>
                    <div className={css.sectionHeading}>Laser Cosmetology</div>
                    <div className={css.sectionIllustrations}>
                        <img className={css.sectionIllustration} src={illustration1} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration2} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration3} alt="illustration" />
                    </div>
                </div>
            </div>
            <div className={css.section}>
                <div className={css.sectionInner}>
                    <div className={css.sectionHeading}>Laser Cosmetology</div>
                    <div className={css.sectionIllustrations}>
                        <img className={css.sectionIllustration} src={illustration1} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration2} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration3} alt="illustration" />
                    </div>
                </div>
            </div>
            <div className={css.section}>
                <div className={css.sectionInner}>
                    <div className={css.sectionHeading}>Laser Cosmetology</div>
                    <div className={css.sectionIllustrations}>
                        <img className={css.sectionIllustration} src={illustration1} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration2} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration3} alt="illustration" />
                    </div>
                </div>
            </div>
            <div className={css.section}>
                <div className={css.sectionInner}>
                    <div className={css.sectionHeading}>Laser Cosmetology</div>
                    <div className={css.sectionIllustrations}>
                        <img className={css.sectionIllustration} src={illustration1} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration2} alt="illustration" />
                        <img className={css.sectionIllustration} src={illustration3} alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}