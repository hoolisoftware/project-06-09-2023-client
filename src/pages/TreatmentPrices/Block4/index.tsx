import css from './index.module.scss'

import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'

export default function Block() {
    return <Container>
        <div className={css.section}>
            <div className={css.cards}>
                <Card>
                    <CardContent>
                        <CardTitle>Fractional Laser CO2 System</CardTitle>
                        Laser type: Fractional laser CO2 with system of fractional photothermolysis Hi-Scan DOT.
                        <br /><br />
                        Position in SmartLaserLine: Above SmartXide.
                        <br /><br />
                        Main indications:
                        <br /><br />
                        Correction of age-related skin changes for patients who exclude the possibility of plastic surgery.
                        <br /><br />
                        Removing of wrinkles in the eye area (“crow’s feet”)
                        <br /><br />
                        Fractional rejuvenation of face, neck, decollete area and hands skin.
                        <br /><br />
                        Facial, neck, decollete area skin lift.
                        <br /><br />
                        Laser skin rejuvenation (improvement of skin condition).
                        <br /><br />
                        Removal of acne scars.
                        <br /><br />
                        Treatment of surgical scars.
                        <br /><br />
                        Correction of skin stretch marks.
                        <br /><br />
                        Treatment of pigmentation.
                        <br /><br />
                        Treatment of melasma.
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>Special Features of SmartXide DOT:</CardTitle>
                        The SmartXide DOT system – multifunctional complex based on a CO2 laser with a wavelength of 10600 nm.
                        <br /><br />
                        Benefits:
                        <br /><br />
                        Excellent, long-lasting rejuvenation results
                        <br /><br />
                        Lack of seasonal restrictions
                        <br /><br />
                        Visual effect of skin (face, neck, decollete area) lift.
                        <br /><br />
                        Practically painless procedure
                        <br /><br />
                        High level of procedures safety
                        <br /><br />
                        Adjustable rehabilitation period
                        <br /><br />
                        The regime of fractional laser rejuvenation, the regime of laser resurfacing of face and scars and laser dermabrasion
                        <br /><br />
                        No consumables
                        <br /><br />
                        High effectiveness of rejuvenation
                        <br /><br />
                        Preservation of barrier functions of the skin protects against infection
                        <br /><br />
                        Short rehabilitation period
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}