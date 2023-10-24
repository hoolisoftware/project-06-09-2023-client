import illustration from '../../../assets/components/treatmentprices-block5-illustration.jpg'

import Illustration from '../../_CommonBlocks/Illustration'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    return <Illustration
        title={<>Fractional Skin Rejuvenation</>}
        content={
            <>
                DOT (Dermal Optical Thermolysis) Therapy is: the latest innovation in the field of skin rejuvenation!
                <br /><br />
                DOT technology is performed with SmartXide DOT CO2 laser system, featuring the unique DOT Scanner with the Infinite Delivery options for ablative skin rejuvenation with rapid healing. reduction of skin area.
            </>
        }
        illustration={illustration}
        right
    />
}