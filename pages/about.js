import styles from '../styles/pages/About.module.scss';

function About() {
    return (
        <section className={styles.container}>
            <div className={styles.logo}>
                <img src={'/images/blue-contact.png'} alt={'about'}/>
            </div>
            <div className={styles.main}>About</div>
            <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </section>
    );
}

export default About;