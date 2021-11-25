import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {SiGmail} from 'react-icons/si'
import { 
    FaLinkedin, 
    FaTwitter, 
    FaFacebook, 
    FaInstagram, 
     
}
 from 'react-icons/fa';

import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinkContainer, 
    FooterLinksWrapper, 
    FooterLink, 
    FooterLinkItems, 
    FooterLinkTitle, 
    SocialMedia, 
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    WebsiteRights 
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testemonials</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testemonials</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testemonials</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testemonials</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Lampai
                        </SocialLogo>
                        <WebsiteRights> lampai  © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/alieskii" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/islam.alieski" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//gmail.com" target="_blank" aria-label="Gmail">
                                <SiGmail />
                            </SocialIconLink>
                            <SocialIconLink href="//twitter.com/AlieskiIslam" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/islam-alieski-2b053b21b" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
