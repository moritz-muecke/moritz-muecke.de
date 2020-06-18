import React, { useContext, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import Imprint from './Imprint';
import Privacy from './Privacy';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Moritz M&uuml;cke - Give some love to{' '}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
        </p>
        <p className="footer__text">
          <Accordion>
            <Card className="footerAccordion">
              <Card.Header className="footerAccordion">
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Legal Notice & Privacy Policy
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Fragment>
                  <Imprint/>
                  <Privacy/>
                </Fragment>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
