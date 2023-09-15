import Illustration from '../../_CommonBlocks/Illustration'

import illustration1 from '../../../assets/components/treatmentdetail-block2-illustration1.png'
import illustration2 from '../../../assets/components/treatmentdetail-block2-illustration2.png'

export default function Block() {
    return <>
        <Illustration
            title={
                <>What you need to know</>
            }
            content={
                <>
                    We are pleased to inform you that the “Clinic Estetic” and Injektiokoulutuskeskus are official distributors of the brand Genyal (Switzerland)
                    <br /><br />
                    Genyal — the highest standard of quality.
                    <br /><br />
                    Genyal — an innovative line of products for contour correction and biorevitalization of the skin based on hyaluronic acid.
                    <br /><br />
                    The Genyal line appeared on the market in 2009 as a result of co-work of the Italian-Swiss team of chemical engineers, pharmacologists and specialists in aesthetic medicine. As a result of the joint work appeared a Genyal line, which meets high quality standards, allows to obtain an excellent, predictable and long-lasting result after cosmetic procedures.
                    <br /><br />
                    The innovation technologies, as well as the modern European medical manufacture used for production of the Genyal fillers, ensures th highest quality of the preparations. Technical and sanitary control is carried out at all stages of production. From the preparing of raw material to the packaging of final products. All manufacturing steps meet th highest quality standards.
                    <br /><br />
                    All of Genyal products show a very high degree of purification and homogenization.
                </>
            }
            illustration={illustration1}
        />
        <Illustration
            title={
                <>Skin Deep Rejuvenation FRACTORA</>
            }
            content={
                <>
                    – indications
                    <br /><br />
                    – pathophysiological substantiation of ingredient composition
                    <br /><br />
                    – therapeutic schemes
                    <br /><br />
                    Features of non-reticular products of the Genyal line (Lift). Differentiation of indications for the application f each of them. Optimisation of therapeutic schemes.Combined use with other techniques Structural filler Genyal Polyvalent (Switzerland) of the 4th generation based on the stabilized hyaluronic acid. Preparations characteristics, achievable effects of the correction, indications and contraindications to the procedures. Procedures performance techniques.
                </>
            }
            illustration={illustration2}
            right
        />
    </>
}