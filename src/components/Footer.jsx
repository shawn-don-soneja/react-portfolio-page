import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" />{" "}
        
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            The project code is from an open source. Feel free to fork and make your own
            version.
            <br/>
            <div className="secretLink" style={{"opacity":"0", "userSelect": "none","color":"lightgray"}}><a href="/music" target="_blank" style={{"color":"lightgray"}}>Oh and here's my <b>music</b> page, if you found this</a></div>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
