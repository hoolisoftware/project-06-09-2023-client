import css from './index.module.scss'

import buttonArrow from '../../../assets/components/button-arrow.svg'

import { treatments } from '../../../data/treatments'

import { Link } from 'react-router-dom'

import Heading from '../../../components/Heading'
import Container from '../../../components/Container'

interface props
{
    showPoints?: boolean
}


export default function Block(props: props) {

    return <Container>
        <div className={css.heading}>
            <div className={css.heading}>
                <Heading center>
                    Услуги
                </Heading>
            </div>
            <div className={css.treatments}>
                {
                    treatments.map(item=>
                        <div className={css.treatment}>
                            <div className={css.treatmentImageContainer}>
                                <img className={css.treatmentImage} src={item.image} alt="treatmentImage" />
                                <Link to={item.link ? item.link : `/treatments/${item.id}/`} className={css.treatmentLink}>
                                    <img src={buttonArrow} alt="arrow" />
                                </Link>
                            </div>
                            <div className={css.treatmentContent}>
                                <div className={css.treatmentName}>{item.title}</div>
                                {
                                    props.showPoints && item.points?.map(point =>
                                        <div className={css.treatmentPoint}>{point}</div>
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