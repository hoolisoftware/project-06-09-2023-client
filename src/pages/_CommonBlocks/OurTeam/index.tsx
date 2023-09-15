import css from './index.module.scss'

import bgLayer from '../../../assets/components/ourteam-bglayer1.png'
import image1 from '../../../assets/components/ourteam-image1.png'
import image2 from '../../../assets/components/ourteam-image2.png'
import image3 from '../../../assets/components/ourteam-image3.png'
import image4 from '../../../assets/components/ourteam-image4.png'
import image5 from '../../../assets/components/ourteam-image5.png'
import image6 from '../../../assets/components/ourteam-image6.png'


import Heading from '../../../components/Heading'
import Container from '../../../components/Container'
import Card from '../../../components/Card'

export default function Block() {

    const team = [
        [
            'Susanna Medeiros',
            'Personal Assistant',
            <>
                The first plastic surgeon in Estonia, who passed a residency in the field of plastic surgery at the University of Helsinki in 2000-2004.
                <br /><br />
                And got the professional title of a plastic surgeon at the University of Tartu in 2004.
            </>,
            image1
        ],
        [
            'Mare Malva',
            'Leading specialist in plastic surgery',
            <>
                Winner of the Tukholma InjectAcademyn Awards, Stockholm|
                <br /><br />
                Member of the Aesthetic & Anti-aging Medicine European Congress since 2010
                <br /><br />
                Education: Saimaa University of Applied Sciences
            </>,
            image2
        ],
        [
            'Kim Kontio',
            'Personal Assistant',
            <>
                The first plastic surgeon in Estonia, who passed a residency in the field of plastic surgery at the University of Helsinki in 2000-2004.
                <br /><br />
                And got the professional title of a plastic surgeon at the University of Tartu in 2004.
            </>,
            image3
        ],
        [
            'Ville-Veikko Elomaa',
            'Leading specialist in plastic surgery',
            <>
                Winner of the Tukholma InjectAcademyn Awards, Stockholm|
                <br /><br />
                Member of the Aesthetic & Anti-aging Medicine European Congress since 2010
                <br /><br />
                Education: Saimaa University of Applied Sciences
            </>,
            image4
        ],
        [
            'Sofia Kazakov',
            "Leading specialist in the field of the non-surgical facial plastics, injection therapy, a specialist in the field of laser therapy.",
            <>
                Winner of the Tukholma InjectAcademyn Awards, Stockholm|
                <br /><br />
                Member of the Aesthetic & Anti-aging Medicine European Congress since 2010
                <br /><br />
                Education: Saimaa University of Applied Sciences
            </>,
            image5
        ],
        [
            'Osmo Vikman',
            'Leading specialist in plastic surgery',
            <>
                Winner of the Tukholma InjectAcademyn Awards, Stockholm|
                <br /><br />
                Member of the Aesthetic & Anti-aging Medicine European Congress since 2010
                <br /><br />
                Education: Saimaa University of Applied Sciences
            </>,
            image6
        ]
    ]

    return (
        <div className={css.block}>
            <img className={css.bgLayer} src={bgLayer} alt="" />
            <Container>
                <div className={css.heading}>
                    <Heading center>Our Team</Heading>
                </div>
                <div className={css.cards}>
                    {
                        team.map(item =>
                            <Card className={css.card}>
                                <div className={css.cardInner}>
                                    <img className={css.cardImage} src={item[3] as string}/>
                                    <div className={css.cardName}>{item[0]}</div>
                                    <div className={css.cardPosition}>{item[1]}</div>
                                </div>
                                <div className={css.cardHr}></div>
                                <div className={css.cardInner}>
                                    <div className={css.cardContent}>
                                        {item[2]}
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}