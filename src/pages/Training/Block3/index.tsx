import css from './index.module.scss'

import Card, {CardContent, CardTitle} from '../../../components/Card'
import {useTranslation} from "react-i18next";

export default function Block() {
    const {t} = useTranslation();
    

    return <div className={css.container}>
        <div className={css.section}>
            <Card>
                <CardContent>
                    {t("Training_block4_text1")}
                    <br /><br />
                    {t("Training_block4_text2")}
                    <br /><br />
                    {t("Training_block4_text2")}
                    <br /><br />
                    {t("Training_block4_text4")}
                    <br /><br />
                    {t("Training_block4_text5")}
                    <br /><br />
                    {t("Training_block4_text6")}
                </CardContent>
            </Card>
        </div>
        <div className={css.section}>
            <div className={css.cards}>
                <Card>
                    <CardContent>
                        <CardTitle>{t("Training_block5_title")}</CardTitle>
                        {t("Training_block5_text1")}
                        <br /><br />
                        {t("Training_block5_text2")}
                        <br /><br />
                        {t("Training_block5_text3")}
                        <br /><br />
                        {t("Training_block5_text4")}
                        <br /><br />
                        {t("Training_block5_text5")}
                        <br /><br />
                        {t("Training_block5_text6")}
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>{t("Training_block6_title")}</CardTitle>
                        {t("Training_block6_text1")}
                        <br /><br />
                        {t("Training_block6_text2")}
                        <br /><br />
                        {t("Training_block6_text3")}
                        <br /><br />
                        {t("Training_block6_text4")}
                        <br /><br />
                        {t("Training_block6_text5")}
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className={css.section}>
            <div className={css.cards}>
                <Card>
                    <CardContent>
                        <CardTitle>{t("Training_block7_title")}</CardTitle>
                        {t("Training_block7_text1")}
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>{t("Training_block8_title")}</CardTitle>
                        {t("Training_block8_text1")}
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
}