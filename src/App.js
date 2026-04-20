import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
import history from './history.json';
import 'typeface-roboto';
import './App.scss';

function App() {
  const renderHistory = () => {
    const historyList = history.careers.map(({ company, title, location, date, descriptions, note }) => (
      // <div className="print-margin"></div>
      <>
        {company === 'Entercom' ? <div className="print-margin"></div> : undefined}
        <div className="resume-content-item" key={company}>
          <h3>{company}</h3>{note ? <h5> ({note})</h5> : undefined}
          <h4>{title}</h4>
          <p className="resume-date">{date} <span><FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />{location}</span></p>
          <ul>
            {descriptions.map((desc, i) => {
              return <li key={company+i}><p dangerouslySetInnerHTML={{ __html: desc }} /></li>
            })}
          </ul>
        </div>
      </>
    ));

    return (
      <div className="resume-content">
        <h2>Employment History</h2>
        {historyList}
      </div>
    );
  }

  const renderDivider = () => {
    return <div className="divider"></div>;
};

  return (
    <div className="resume-page">
      <div className="resume-container letter-size">
        <div className="resume-header">
          <h1>Jaeho Sim</h1>
          <span className="resume-phonetic">/dʒæho/</span>
          <div className="resume-contact">
            <p>16 Grn Gdns Blvd, North York, ON</p>
            <p>647.542.7878</p>
            <p>jaeho.code@gmail.com</p>
          </div>
        </div>
        <div className="resume-body">
          {/* <div className="resume-body-side">
            <div className="resume-content skills">
              <h2>Skills</h2>
              <p><b>Node</b></p>
              <p>React</p>
              <p><b>PostgreSQL · NoSQL</b></p>
              <p><b>GCP</b> · AWS</p>
              <p>HTML · SASS</p>
              <p>Typescript</p>
              <p><b>Sinon · Chai</b></p>
              <p><b>Docker</b></p>
              <p>Serverless</p>
              <p>Alexa</p>
              <p><b>TDD</b> · Agile</p>
            </div>
            <div className="resume-content side-text">
              <h2>Certification</h2>
              <p className="side-subtitle">AWS Certified Alexa Skill Builder - Specialty</p>
              <p className="side-date">Feb 19</p>
            </div>
            <div className="resume-content side-text">
              <h2>Education</h2>
              <p className="side-subtitle">Bachelor of Computer Science</p>
              <p>Carleton University</p>
              <p className="side-date">Apr 15</p>
            </div>
          </div> */}
          <div className="resume-summary">
            <h2>Professional Summary</h2>
            <p dangerouslySetInnerHTML={{ __html: history.summary }} />
          </div>
          {renderDivider()}
          <div className="resume-skills">
            <h2>Core Skills</h2>
            <ul>
              <li><p><b>Languages:</b> JavaScript (ES6+), TypeScript, SQL, HTML5, SASS.</p></li>
              <li><p><b>Backend & Database:</b> RESTful API Development, Node.js, Express, PostgreSQL, MySQL, NoSQL Design.</p></li>
              <li><p><b>Frontend:</b> React.js, State Management (Context API, Redux), jQuery, Webpack.</p></li>
              <li><p><b>Cloud & DevOps:</b> AWS, GCP, Firebase, Docker, Serverless Architecture, CI/CD.</p></li>
              <li><p><b>Testing & Methodologies:</b> TDD (Sinon, Chai), Agile/Scrum, Microservices Architecture.</p></li>
            </ul>
          </div>
          {renderDivider()}
          <div className="resume-body-main">
            {renderHistory()}
            {/* {renderProject()} */}
          </div>
        </div>
        {renderDivider()}
        <div className="resume-others">
          <div className="resume-education">
            <h2>Education</h2>
            <p><b>Bachelor of Computer Science</b> - Carleton University</p>
            <p></p>
            <p><span>Apr 15</span></p>
          </div>
          <div className="resume-certification">
            <h2>Certification</h2>
            <p><b>AWS Certified Alexa Skill Builder - Specialty</b></p>
            <p ><span>Feb 19</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
