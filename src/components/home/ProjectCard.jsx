import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    languages,       // for static data
    pushed_at,
    updated_at,      // for static data
  } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>
            {!description ? "" : description || <Skeleton count={3} />}
          </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {(languages || languages_url) ? (
            <Language
              languages_url={languages_url}
              repo_url={svn_url}
              staticLanguages={languages}
            />
          ) : (
            <Skeleton count={3} />
          )}
          <CardFooter
            star_count={stargazers_count}
            repo_url={svn_url}
            pushed_at={pushed_at}
            staticUpdatedAt={updated_at}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a href={svn_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url, staticLanguages }) => {
  const [data, setData] = useState(staticLanguages || {});

  const handleRequest = useCallback(async () => {
    if (!languages_url || staticLanguages) return;
    try {
      const response = await axios.get(languages_url);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url, staticLanguages]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let lang in data) {
    array.push(lang);
    total_count += data[lang];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              className="card-link"
              href={`${repo_url}/search?l=${language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark">
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at, staticUpdatedAt }) => {
  const [updated_at, setUpdated_at] = useState(staticUpdatedAt || "0 mins");

  const handleUpdatetime = useCallback(() => {
    if (staticUpdatedAt || !pushed_at) return;
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at, staticUpdatedAt]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={`${repo_url}/stargazers`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
