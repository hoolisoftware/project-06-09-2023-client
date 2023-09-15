import css from './index.module.scss'

import Card, {CardContent, CardTitle} from '../../../components/Card'

export default function Block() {
    return <div className={css.container}>
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
                    Author’s techniqures: “3 points”, 3D
                    Optimistic look – techniques for work with the nose area
                    The cheek bone area: needle or cannula?
                    Correction of a nasolacrimal groove (choice of preparations, needle insertion, cannula techniques)
                    Lower third of the face: anatomical features, dangerous zones, correctiona schemes
                    Harmonization of the face oval. Compensation for “flews”: myth or reality?
                    Techniques of working with the chin area (the importance of proportions)
                    The angle of the lower jaw (techniques with a cannula or needle, indications, anatomical marks)
                    Possible complications and their correction
                </CardContent>
            </Card>
        </div>
        <div className={css.section}>
            <div className={css.cards}>
                <Card>
                    <CardContent>
                        <CardTitle>For our clients-cosmetologists</CardTitle>
                        We are pleased to inform you, dear cosmetologists, that you can purchase Genyal fillers for your work in Clinic Estetic / Injektiokoulutuskeskus.
                        <br /><br />
                        The main benefits of Genyal products:Quality.
                        <br /><br />
                        Safety (does not cause an allergic reaction).
                        <br /><br />
                        Comfort (minimum of pain during the procedure).
                        <br /><br />
                        Stable result (the effect persists up to 18 months).
                        <br /><br />
                        The naturalness of the effect achieved (not outlined, the “intellectual” self-distribution system).
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>Conditions of training:</CardTitle>
                        Course for specialists with medical education.
                        <br /><br />
                        Bring yourself replaceable footwear, the diploma, a dressing gown and anesthetic.
                        <br /><br />
                        Be sure to come with your model
                        <br /><br />
                        After the course commercial certificates of completion of training are given
                        <br /><br />
                        Courses are conducted by the winner of the 2011 Tukholma Inject Academyn Awards Sofia Kazakov
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className={css.section}>
            <div className={css.cards}>
                <Card>
                    <CardContent>
                        <CardTitle>Practical part:</CardTitle>
                        Testing of the given technologies on the models.
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>Consultation with a specialist</CardTitle>
                        Clinic Estetic offers a free consultation with our specialists.
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
}