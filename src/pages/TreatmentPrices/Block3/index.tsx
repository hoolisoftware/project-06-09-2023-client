import illustration from '../../../assets/components/treatmentprices-block3-illustration.jpg'

import Illustration from '../../_CommonBlocks/Illustration'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    return <Illustration
        title={<>{t("TreatmentPrice_block3_what_NeedKnow")}</>}
        content={
            <>
                c
                <br /><br />
                {t("TreatmentPrice_block3_text1")}
                <br /><br />
                {t("TreatmentPrice_block3_text2")}
                <br /><br />
                {t("TreatmentPrice_block3_text3")}
            </>
        }
        illustration={illustration}
    />
}