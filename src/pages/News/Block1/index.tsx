import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { useState } from 'react'

import Heading from '../../../components/Heading'
import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

import Item from './Item'


export default function Block() {
    const prices = [
        'Laser Cosmetology',
        'Laser Cosmetology',
        'Laser Cosmetology',
        'Laser Cosmetology',
        'Laser Cosmetology',
        'Laser Cosmetology',
        'Laser Cosmetology',
    ]

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
                    prices.map((item, index) =>
                        <Item
                            index={index}
                            title={item}
                            active={index===activeItem}
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
                                <div className={css.cardTitle}>Search news</div>
                            </CardTitle>
                            <Input
                                placeholder='Enter name'
                                type='text'
                                fullWidth
                            />
                            <Button fullWidth>
                                Make an appointment
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