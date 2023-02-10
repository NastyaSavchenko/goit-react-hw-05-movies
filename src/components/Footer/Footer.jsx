import { FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <p>Ukraine 2023 | Powered by </p>
        <a
          href="https://github.com/NastyaSavchenko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to Git Hub"
        >
          <Icon />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
