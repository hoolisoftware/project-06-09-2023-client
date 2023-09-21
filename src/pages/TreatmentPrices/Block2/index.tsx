import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { useDispatch } from 'react-redux'
import { toggleModalMessage } from '../../../features/modal/modalReducer'

import type { Treatment } from '../../../data/treatments'

import Heading from '../../../components/Heading'
import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'
import Button from '../../../components/Button'

import Item from './Item'


interface props
{
    treatment: Treatment 
}


export default function Block(props: props) {
    const dispatch = useDispatch()

    return <Container>
        <div className={css.heading}>
            <Heading center >Стоимость</Heading>
        </div>
        <div className={css.section}>
            <div className={css.sectionBlock}>
                <Item treatment={props.treatment}/>
            </div>
            <div className={css.sectionBlock}>
                <Card>
                    <CardContent>
                        <div className={css.cardContent}>
                            <div className={css.cardTitle}>Записаться на консультацию со специалистом</div>
                            <div className={css.cardText}>Выберите удобный день и время</div>
                            <Button fullWidth onClick={ () => dispatch(toggleModalMessage()) }>
                                Записаться
                                &nbsp;
                                <img src={arrow} alt="arrow" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}