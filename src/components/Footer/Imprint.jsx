import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Imprint = () => {
  return (
    <Container className="legalPrivacy">
      <h3>Legal Notice</h3>
      <p>
        Information in accordance with section 5 TMG
        <br />
        <br />
        Moritz M&uuml;cke
        <br />
        Elfbuchenstra&szlig;e 20
        <br />
        34119 Kassel
      </p>

      <h4>Contact</h4>
      <p>
        Telephone: 01608116330
        <br />
        E-Mail: <a href="mailto:hi@moritz-muecke.de">hi@moritz-muecke.de</a>
        <br />
        Website:{' '}
        <a href="http://www.moritz-muecke.de" target="_blank">
          moritz-muecke.de
        </a>
      </p>

      <h4>Disclaimer</h4>
      <h5>Accountability for content</h5>
      <p>
        The contents of my page has been created with the utmost care. However, I cannot
        guarantee the contents' accuracy, completeness or topicality. According to statutory
        provisions, I'm furthermore responsible for my own content on these web page. In this
        context, please note that I'm accordingly not obliged to monitor merely the transmitted
        or saved information of third parties, or investigate circumstances pointing to illegal
        activity. My obligations to remove or block the use of information under generally
        applicable laws remain unaffected by this as per &sect;&sect; 8 to 10 of the Telemedia Act
        (TMG).
      </p>

      <h5>Accountability for links</h5>
      <p>
        Responsibility for the content of external links (to web pages of third parties) lies solely
        with the operators of the linked pages. No violations were evident to us at the time of
        linking. Should any legal infringement become known to me, I will remove the respective
        link immediately.
      </p>

      <h5>Copyright</h5>
      <p>
        My web page and it's content is a subject to German copyright law. Unless expressly
        permitted by law (&sect; 44a et seq. of the copyright law), every form of utilizing,
        reproducing or processing works subject to copyright protection on my web page requires
        the prior consent of the respective owner of the rights. Individual reproductions of a work
        are allowed only for private use, so must not serve either directly or indirectly for
        earnings. Unauthorized utilization of copyrighted works is punishable (&sect; 106 of the
        copyright law).
      </p>

      <p>
        <em>Quelle: </em>
        <a href="http://www.webversteher.de" target="_blank">
          webversteher
        </a>
        <br />
        <br />
      </p>
    </Container>
  );
};

export default Imprint;
