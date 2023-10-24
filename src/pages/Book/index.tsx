import PageLayout from '../../components/PageLayout'

import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Block from './Block'
import {useTranslation} from "react-i18next";


export default function Page()
{
    const {t} = useTranslation();
    return <PageLayout
        title={t("book_Book")}
    >
        <WrapperFirstBlock>
            <Block/>
        </WrapperFirstBlock>
    </PageLayout>
}