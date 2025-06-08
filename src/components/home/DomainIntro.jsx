// src/components/home/DomainIntro.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const DomainIntro = () => {
  return (
    <Jumbotron
      fluid
      id="domain-intro"
      style={{
        background: `linear-gradient(136deg, #1a2a6c, #b21f1f, #fdbb2d)`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <Container className="text-start text-light">
        <h1 className="display-5 text-center mb-4">1. Introduction</h1>
        <p><strong>Google Infrastructure Screenshot</strong></p>
        <p>[5] Google and the various services provided</p>
        <p>
          Google, a global technology leader, offers a wide range of services essential to daily life for billions of people. These include search engines, email, video sharing, cloud computing, document creation, file storage, Google Maps, and productivity apps. Understanding the scale and impact of Google’s services sets the stage for exploring how advanced data structures and algorithms can further enhance their performance and utility.
        </p>
        <ul>
          <li>🌐 <strong>Google Search</strong>: Search engine for finding information online.</li>
          <li>📧 <strong>Gmail</strong>: Email service for communication.</li>
          <li>💾 <strong>Google Drive</strong>: Cloud storage for files.</li>
          <li>🗺️ <strong>Google Maps</strong>: Mapping service for navigation.</li>
          <li>📹 <strong>YouTube</strong>: Video sharing platform.</li>
          <li>📷 <strong>Google Photos</strong>: Cloud-based service for photos and videos.</li>
          <li>📄📊📝 <strong>Google Docs, Sheets, Slides</strong>: Online productivity suite.</li>
          <li>📅 <strong>Google Calendar</strong>: Online calendar service.</li>
          <li>🌍 <strong>Google Translate</strong>: Translation service.</li>
          <li>🌐 <strong>Google Chrome</strong>: Web browser.</li>
          <li>💼 <strong>Google Ads</strong>: Advertising platform.</li>
          <li>☁️ <strong>Google Cloud Platform (GCP)</strong>: Cloud computing services.</li>
          <li>📱 <strong>Android</strong>: Mobile operating system.</li>
          <li>🗣️ <strong>Google Assistant</strong>: Virtual assistant.</li>
          <li>🎥 <strong>Google Meet</strong>: Video conferencing platform.</li>
          <li>🎓 <strong>Google Classroom</strong>: Educational platform.</li>
        </ul>

        <a
          className="btn btn-outline-light btn-lg mt-4"
          href="/domain"
          role="button"
          aria-label="Back to domain"
        >
          ← Back to Domain Info
        </a>
      </Container>
    </Jumbotron>
  );
};

export default DomainIntro;
