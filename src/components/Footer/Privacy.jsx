import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container className="legalPrivacy">
      <h3>Privacy Statement</h3>

      <h4>General</h4>
      <p>
        Your personal data (e.g. title, name, house address, e-mail address, phone number, bank
        details, credit card number) are processed by us only in accordance with the provisions of
        German data privacy laws. The following provisions describe the type, scope and purpose of
        collecting, processing and utilizing personal data. This data privacy policy applies only to
        our web pages. If links on our pages route you to other pages, please inquire there about
        how your data are handled in such cases.
      </p>

      <h4>Inventory data</h4>
      <p>
        (1) Your personal data, insofar as these are necessary for this contractual relationship
        (inventory data) in terms of its establishment, organization of content and modifications,
        are used exclusively for fulfilling the contract. For goods to be delivered, for instance,
        your name and address must be relayed to the supplier of the goods.
      </p>
      <p>
        (2) Without your explicit consent or a legal basis, your personal data are not passed on to
        third parties outside the scope of fulfilling this contract. After completion of the
        contract, your data are blocked against further use. After expiry of deadlines as per
        tax-related and commercial regulations, these data are deleted unless you have expressly
        consented to their further use.
        <br />
      </p>

      <h4>Disclosure</h4>
      <p>
        According to the Federal Data Protection Act, you have a right to free-of-charge information
        about your stored data, and possibly entitlement to correction, blocking or deletion of such
        data. Inquiries can be directed to the following e-mail address: hi@mrtzmllr.de
      </p>

      <p>
        <i>Quelle: </i>
        <a href="http://www.muster-vorlagen.net/" target="_blank">
          www.muster-vorlagen.net
        </a>
        <br />
        <br />
      </p>
    </Container>
  );
};

export default Privacy;
