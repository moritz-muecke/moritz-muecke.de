import React, { useContext, useEffect, useState, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="skill-wrapper">
          <Title title="Skills" />
          {skills.map((skill, index) => {
            const { title, info, img } = skill;

            return (
              <Row key={index}>
                {index % 2 === 0 ? (
                  <Fragment>
                    <Col lg={6} sm={12}>
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={500}
                        distance="30px"
                      >
                        <div className="skill-wrapper__text">
                          <h3 className="skill-wrapper__text-title">{title || 'Skill Title'}</h3>
                          <div>
                            <p>
                              {info ||
                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={1000}
                        distance="30px"
                      >
                        <div className="skill-wrapper__image">
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </div>
                      </Fade>
                    </Col>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Col lg={6} sm={12}>
                      <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={1000}
                        distance="30px"
                      >
                        <div className="skill-wrapper__image">
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </div>
                      </Fade>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={500}
                        distance="30px"
                      >
                        <div className="skill-wrapper__text">
                          <h3 className="skill-wrapper__text-title">{title || 'Skill Title'}</h3>
                          <div>
                            <p>
                              {info ||
                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                  </Fragment>
                )}
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
