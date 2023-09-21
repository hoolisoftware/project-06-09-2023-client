import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleModalMessage } from '../../../features/modal/modalReducer'

import { treatments } from '../../../data/treatments'

import Heading from '../../../components/Heading'
import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import Button from '../../../components/Button'

import Item from './Item'


export default function Block() {
    
    const dispatch = useDispatch()
    const [activeItem, setActiveItem] = useState<number|null>(0)

    const toggleActiveItem = (index: number) => {
        if (index===activeItem) {
            setActiveItem(null)
        } else {
            setActiveItem(index)
        }
    } 

    return <Container>
        <div className={css.heading}>
            <Heading center >Prices</Heading>
        </div>
        <div className={css.section}>
            <div className={css.sectionBlock}>
                {
                    treatments.map(item =>
                        <Item
                            index={item.id}
                            key={item.id}
                            treatment={item}
                            active={item.id===activeItem}
                            setActive={toggleActiveItem}
                        />
                    )
                }
            </div>
            <div className={css.sectionBlock}>
                <Card>
                    <CardContent>
                        <div className={css.cardContent}>
                            <CardTitle>
                                <div className={css.cardTitle}>Записаться на консультацию со специалистом</div>
                            </CardTitle>
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