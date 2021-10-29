import styles from '../styles/pages/Contact.module.scss';

function Contact() {
    return (
        <address className={styles.container}>
            <div className={styles.logo}>
                <img src={'/images/blue-contact.png'} alt={'contact'}/>
            </div>
            <div className={styles.main}>Contact</div>
            <div>
                <a href="mailto:droid@droid.com">droid@droid.com</a>
            </div>
            <div className={styles.phones}>
                <a href="tel:555-666-7777">tel. 555 - 666 - 7777</a>
                <a href="tel:555-666-7777">tel. 555 - 666 - 7777</a>
            </div>
            <div>
                <div>Cluj, Cluj-Napoca</div>
                <div>Romania</div>
            </div>
        </address>
    );
}

export default Contact;