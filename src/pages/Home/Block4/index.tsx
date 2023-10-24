import illustration from '../../../assets/components/home-block4-illustration.png'

import Illustration from '../../_CommonBlocks/Illustration'
import {useTranslation} from "react-i18next";

export default function Block(){
    const {t} = useTranslation();
    
    return <Illustration
        title={<>{t("Home_block4_title")}</>}
        subTitle={<>{t("Home_block4_subTitle")}</>}
        content={
            <>
                {t("Home_block4_text1")}
                <br /><br />
                {t("Home_block4_text2")}
            </>
        }
        illustration={illustration}
    />
}