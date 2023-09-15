import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import Heading from '../../../components/Heading'
import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'

import Item from './Item'


export default function Block() {
    return <Container>
        <div className={css.heading}>
            <Heading center >Prices</Heading>
        </div>
        <div className={css.section}>
            <div className={css.sectionBlock}>
                <Item/>
            </div>
            <div className={css.sectionBlock}>
                <Card>
                    <CardContent>
                        <div className={css.cardContent}>
                            <div className={css.cardTitle}>Sign up for a free appointment to a specialist</div>
                            <div className={css.cardText}>Choose a convenient time and the right specialist</div>
                            <div className={css.cardButton}>
                                Make an appointment
                                &nbsp;
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}