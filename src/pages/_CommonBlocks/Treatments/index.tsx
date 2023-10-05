import css from './index.module.scss'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '@/app/store'
import buttonArrow from '@/assets/components/button-arrow.svg'
import Heading from '@/components/Heading'
import Container from '@/components/Container'


interface props
{
    showPoints?: boolean
}


export default function Block(props: props) {
    const data = useSelector((state: RootState) => state.data.treatments)

    return <Container>
        <div className={css.heading}>
            <div className={css.heading}>
                <Heading center>
                    Услуги
                </Heading>
            </div>
            <div className={css.treatments}>
                {
                    Array.isArray(data) && data.map(item=>
                        <div className={css.treatment} key={item.id}>
                            <div className={css.treatmentImageContainer}>
                                <img className={css.treatmentImage} src={item.image} alt="treatmentImage" />
                                <Link to={`/treatments/${item.id}/`} className={css.treatmentLink}>
                                    <img src={buttonArrow} alt="arrow" />
                                </Link>
                            </div>
                            <div className={css.treatmentContent}>
                                <div className={css.treatmentName}>{item.title}</div>
                                {
                                    props.showPoints && item.prices?.slice(0, 10)?.map((price, index) =>
                                        <div className={css.treatmentPoint} key={index}>{price.title}</div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </Container> 
}