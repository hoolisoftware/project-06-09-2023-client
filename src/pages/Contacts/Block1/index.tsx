import css from './index.module.scss'

import Heading from '../../../components/Heading'


export default function Block() {
    return <div className={css.container}>
        <div className={css.heading}>
            <Heading center>Find Us</Heading>
        </div>
        <iframe 
            className={css.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577344.0932286568!2d36.724826360315596!3d55.58024967816846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2str!4v1694346441166!5m2!1sen!2str"
            style={{border:0}}
            allowFullScreen={undefined}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
}