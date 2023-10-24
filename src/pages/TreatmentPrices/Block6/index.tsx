import css from './index.module.scss'

import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    return <Container>
        <div className={css.section}>
            <Card>
                <CardContent>
                    {t("TreatmentPrice_block6_text1")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text2")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text3")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text4")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text5")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text6")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text7")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text8")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text9")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text10")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text11")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text12")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text13")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text14")}
                    <br/><br/>
                    {t("TreatmentPrice_block6_text15")}
                </CardContent>
            </Card>
        </div>
    </Container>;
}