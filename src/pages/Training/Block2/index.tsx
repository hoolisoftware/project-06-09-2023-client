import Illustration from '../../_CommonBlocks/Illustration'

import illustration1 from '../../../assets/components/treatmentdetail-block2-illustration1.png'
import illustration2 from '../../../assets/components/treatmentdetail-block2-illustration2.png'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    
    return <>
        <Illustration
            title={
                <>{t("Training_block2_title1")} </>
            }
            content={
                <>
                    {t("Training_block2_text1")}
                    <br /><br />
                    {t("Training_block2_text2")}
                    <br /><br />
                    {t("Training_block2_text3")}
                    <br /><br />
                    {t("Training_block2_text4")}
                    <br /><br />
                    {t("Training_block2_text5")}
                    <br /><br />
                    {t("Training_block2_text6")}
                </>
            }
            illustration={illustration1}
        />
        <Illustration
            title={
                <>{t("Training_block3_title")}</>
            }
            content={
                <>
                    {t("Training_block3_text1")}
                    <br /><br />
                    {t("Training_block3_text2")}
                    <br /><br />
                    {t("Training_block3_text3")}
                    <br /><br />
                    {t("Training_block3_text4")}
                </>
            }
            illustration={illustration2}
            right
        />
    </>
}