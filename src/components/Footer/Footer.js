import React from "react";
import style from './footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={style.app_footer}>
                <span className={style.text_footer}>Mtutor © 2021.</span>
            </footer>
        </>
    )
}

export default Footer;