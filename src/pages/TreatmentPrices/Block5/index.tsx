import illustration from '../../../assets/components/treatmentprices-block5-illustration.jpg'

import Illustration from '../../_CommonBlocks/Illustration'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    return <Illustration
        title={<>{t("TreatmentPrice_block5_title1")}</>}
        content={
            <>
                {t("TreatmentPrice_block5_text1")}
                <br /><br />
                {t("TreatmentPrice_block5_text2")}
            </>
        }
        illustration={illustration}
        right
    />
}