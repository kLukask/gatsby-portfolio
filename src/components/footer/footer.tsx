import * as React from 'react';
import * as FooterStyles from './footer.module.scss';
import GithubImage from  '../../images/github-mark-white.svg';
import LinkedInImage from '../../images/linkedin-in.svg';

const Footer = () => {
    return (
        <footer className={FooterStyles.footer_wrapper}>
            <div className={FooterStyles.footer_wrapper__link}>
                <a href='https://github.com/kLukask' target='_blank'>
                    <img src={GithubImage} alt='github' />
                </a>
            </div>
            <div className={FooterStyles.footer_wrapper__link}>
                <a href='https://www.linkedin.com/in/lukas-kuranda/' target='_blank'>
                    <img src={LinkedInImage} alt='linkedin' />
                </a>
            </div>
        </footer>
    )
}

export default Footer