import css from './index.module.scss'

import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'

export default function Block() {
    return <Container>
        <div className={css.section}>
            <Card>
                <CardContent>
                    Filler-volumizer Genyal Volumae (Switzerland), volumetric remodelling, concepts, approach and basic techniques of augmentation. Procedures performance techniques.
                    <br /><br />
                    The Swiss technique of the microbolus correction of the cheek area
                    <br /><br />
                    The classical technique of the lips contour and volume correction
                    <br /><br />
                    The French technique of the vertical injections
                    <br /><br />
                    Anatomical “traps”
                    <br /><br />
                    The techniques of lifting the corners of the mouth
                    <br /><br />
                    Author’s techniqures: “3 points”, 3D
                    <br /><br />
                    Optimistic look – techniques for work with the nose area
                    <br /><br />
                    The cheek bone area: needle or cannula?
                    <br /><br />
                    Correction of a nasolacrimal groove (choice of preparations, needle insertion, cannula techniques)
                    <br /><br />
                    Lower third of the face: anatomical features, dangerous zones, correctiona schemes
                    <br /><br />
                    Harmonization of the face oval. Compensation for “flews”: myth or reality?
                    <br /><br />
                    Techniques of working with the chin area (the importance of proportions)
                    <br /><br />
                    The angle of the lower jaw (techniques with a cannula or needle, indications, anatomical marks)
                    <br /><br />
                    Possible complications and their correction
                </CardContent>
            </Card>
        </div>
    </Container>
}