import css from './index.module.scss'

import buttonArrow from '../../../assets/components/button-arrow.svg'
import treatment1 from '../../../assets/components/home-block2-treatment1.png'
import treatment2 from '../../../assets/components/home-block2-treatment2.png'
import treatment3 from '../../../assets/components/home-block2-treatment3.png'
import treatment4 from '../../../assets/components/home-block2-treatment4.png'
import treatment5 from '../../../assets/components/home-block2-treatment5.png'
import treatment6 from '../../../assets/components/home-block2-treatment6.png'
import treatment7 from '../../../assets/components/home-block2-treatment7.png'
import treatment8 from '../../../assets/components/home-block2-treatment8.png'
import treatment9 from '../../../assets/components/home-block2-treatment9.png'

import { Link } from 'react-router-dom'

import Heading from '../../../components/Heading'
import Container from '../../../components/Container'

interface props
{
    showPoints?: boolean
}

type treatment = [
    string,
    string,
    string[]
]

export default function Block(props: props) {
    const treatments: treatment[] = [
        [
            treatment1, 'Laser Cosmetology',
            [
                'Consultation',
                'Laser Ablation Treatment SmartXide DOT2',
                'Contour Plastics'
            ]
        ],
        [
            treatment2, 'Injection Cosmetology',
            [
                'Injection Techniques',
                'Botulinotherapy',
                'Botox',
                'Dysport',
                'Azzalure',
                'Vistabel',
                'Contour Plastics',
            ]
        ],
        [
            treatment3, 'Apparatus Cosmetology',
            [
                'Fractional Lifting Fractora',
            ]
        ],
        [
            treatment4, 'Facial Plastic Surgery',
            [
                'Consultation',
                'Blepharoplasty (Eyelid Plastic Surgery)',
                'Rhinoplasty (Nose Plastic Surgery)',
                'Otoplasy (Ear Plastic Surgery)',
                'Chailoplasty (Lip Plastic Surgery)',
                'Malarplasty (Cheekbones Plastic Surgery)',
                'Lipolifting',
                'Surgical Face Rejuvenation',
                'Radiofrequency Lifting Face Tite'
            ]
        ],
        [
            treatment5, 'Body Plastic Surgery',
            [
                'Mammoplasty',
                'Liposuction',
                'Radiofrequent Liposuction Body Tite',
                'Cellulite',
                'BodyTite'
            ]
        ],
        [
            treatment6, 'Breast Plastic Surgery', []
        ],
        [
            treatment7, 'Training', []
        ],
        [
            treatment8, 'Consultations with a Specialist', []
        ],
        [
            treatment9, 'Treatments for Men', []
        ],
    ]

    return <Container>
        <div className={css.heading}>
            <div className={css.heading}>
                <Heading center>
                    Treatments
                </Heading>
            </div>
            <div className={css.treatments}>
                {
                    treatments.map(item=>
                        <div className={css.treatment}>
                            <div className={css.treatmentImageContainer}>
                                <img className={css.treatmentImage} src={item[0]} alt="treatmentImage" />
                                <Link to='/treatments/1/' className={css.treatmentLink}>
                                    <img src={buttonArrow} alt="arrow" />
                                </Link>
                            </div>
                            <div className={css.treatmentContent}>
                                <div className={css.treatmentName}>{item[1]}</div>
                                {
                                    props.showPoints && item[2].map(point =>
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