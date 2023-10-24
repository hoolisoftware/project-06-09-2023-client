import css from './index.module.scss'

import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    return <Container>
        <div className={css.section}>
            <div className={css.cards}>
                <Card>
                    <CardContent>
                        <CardTitle>{t("TreatmentPrice_block4_title1")}</CardTitle>
                        {t("TreatmentPrice_block4_text1")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text2")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text3")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text4")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text5")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text6")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text7")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text8")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text9")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text10")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text11")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text12")}
                        <br /><br />
                        {t("TreatmentPrice_block4_text13")}
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>{t("TreatmentPrice_block4_1_title1")}</CardTitle>
                        {t("TreatmentPrice_block4_1_text1")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text2")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text3")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text4")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text5")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text6")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text7")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text8")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text9")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text10")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text11")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text12")}
                        <br /><br />
                        {t("TreatmentPrice_block4_1_text13")}
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}