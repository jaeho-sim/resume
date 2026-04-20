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
        {company === 'TribalScale' ? <div className="print-margin"></div> : undefined}
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

  // const renderProject = () => {
  //   return (
  //     <div className="resume-content">
  //       <h2>Project</h2>
  //       <div className="resume-content-item">
  //         <h3>NomNom</h3>
  //         <p className="resume-date">Apr 20 - Present</p>
  //         <ul>
  //           <li><p>A web application that users can share their pictures, reviews, and information about restaurants among their groups</p></li>
  //           <li><p>A full stack application built with AWS Amplify as its development platform, using React, Lambda(Node), and GraphQL</p></li>
  //           <li><p>GCP authentication API was used to implement user specific permissions</p></li>
  //         </ul>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="resume-page">
      <div className="resume-container letter-size">
        <div className="resume-header">
          <h1>Jaeho Sim</h1>
          <span className="resume-phonetic">/dʒæho/</span>
          <div className="resume-contact">
            <p>3906-65 St Mary St, Toronto</p>
            <p>647.542.7878</p>
            <p>jaeho.code@gmail.com</p>
          </div>
        </div>
        <div className="resume-summary">
          <h2>Professional Summary</h2>
          <p dangerouslySetInnerHTML={{ __html: history.summary }} />
        </div>
        <div className="resume-body">
          <div className="resume-body-side">
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
          </div>
          <div className="resume-body-main">
            {renderHistory()}
            {/* {renderProject()} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
