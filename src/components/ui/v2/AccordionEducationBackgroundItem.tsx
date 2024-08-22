import * as React from 'react';
import { Accordion } from 'react-bootstrap';

type IProps = { test: string };

const AccordionEducationBackgroundItem: React.FC<IProps> = () => (
  <>
    <Accordion defaultActiveKey={['0']} flush>
      {/* <Accordion.Item eventKey="0" bsPrefix="accordion-education-item">
        <Accordion.Header bsPrefix="accordion-education-item__header">
          <div className="d-flex flex-column">
            <div className="accordion-education-item__campus">
              {'SMK 10 NOVEMBER BEKASI'}
            </div>
            <div className="accordion-education-item__prodi">
              {'TEKNIK KOMPUTER'}
            </div>
            <div className="accordion-education-item__date">
              {'2020'} - {'2020'}
            </div>
            <div className="accordion-education-item__date">IPK: -</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  </>
);

export default AccordionEducationBackgroundItem;
