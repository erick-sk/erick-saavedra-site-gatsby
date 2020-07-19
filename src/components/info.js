import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Erick Saavedra.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Software Development student, IoT Geek and Cat Lover.
        <br /> "When virtue has slept, she will get up more refreshed."
        <br />- Friedrich Nietzsche
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/ericksk_">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://instagram.com/ericksk_">
          <Insta />
        </a>
        <a className="mr-5 icon" href="https://github.com/erick-sk">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://esvdrah@gmail.com">
          <Mail />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/erick-saavedra-dev"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  )
}
