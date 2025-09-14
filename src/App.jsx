// src/App.jsx

export default function App() {
  // Show note then open GitHub repo
  const openGitHub = (repoUrl) => {
    alert("🚧 This project is not deployed yet, but you can view the code on GitHub.");
    window.open(repoUrl, "_blank");
  };

  // Contact form -> opens default mail client
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
    const to = "you@example.com"; // <-- your email
    const subject = "Portfolio Contact";
    const body = `${message}\n\nFrom: ${email || "anonymous"}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    e.target.reset();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Nadeesha
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero (keep simple, or switch to section-bg if you want gradient here too) */}
     <header className="section-bg text-white text-center py-5 hero" style={{ marginTop: "56px" }}>

        <div className="container">
          <h1 className="display-4">Hi, I’m Nadeesha Rathnayake</h1>
          <p className="lead">
            I love bringing ideas to life — building web projects and exploring cybersecurity & networking.
            Always learning, always creating.
          </p>
          <a href="#projects" className="btn btn-light btn-lg me-2">View Projects</a>
          <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
        </div>
      </header>

      {/* About – SAME gradient + glass look */}
      <section id="about" className="py-5 section-bg text-white">
        <div className="container">
          <h2 className="section-title text-center text-decoration-underline mb-4">About Me</h2>
          <div className="glass-card p-4 p-md-5 rounded-4">
            <div className="row align-items-center">
              {/* Text */}
              <div className="col-md-7">
                <p className="mb-3">
                  👋 Hi, I’m <strong>Nadeesha Rathnayake</strong>. I’m an aspiring programmer and web developer with a
                  passion for creating apps that solve real problems. I’m also into
                  <strong> cybersecurity</strong> and <strong>network administration</strong> — learning how systems work,
                  stay secure, and connect together.
                </p>
                <p className="mb-3">
                  I’m studying IT at <strong>Oulu University of Applied Sciences (OAMK)</strong>, constantly building
                  projects, configuring networks, and diving into security practices.
                </p>
                <p className="mb-0">
                  🚀 My goal: become a versatile engineer who can build, secure, and operate modern apps & infrastructure.
                </p>

                {/* Social */}
                <p className="fw-bold mt-4 mb-2">Connect with me:</p>
                <div className="d-flex gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white fs-4">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="mailto:you@example.com" className="text-white fs-4">
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                </div>
              </div>

              {/* Photo */}
              <div className="col-md-5 text-center mt-4 mt-md-0">
                <img
                  src="/image1.jpeg"   // put your file in /public/image1.jpeg
                  alt="Nadeesha Rathnayake"
                  className="img-fluid rounded-circle shadow"
                  style={{ width: "70%", maxHeight: "300px", objectFit: "cover", border: "3px solid rgba(255,255,255,.35)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects – SAME gradient + glass around slides */}
      <section id="projects" className="py-5 section-bg text-white">
        <div className="container">
          <h2 className="section-title text-center text-decoration-underline mb-4">My Projects</h2>

          <div id="projectsCarousel" className="carousel slide small-carousel accent-frame" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
              {/* Slide 1 – Quizzify */}
              <div className="carousel-item active">
                <div className="row g-4 align-items-center justify-content-center px-3 py-4 glass-card m-3 rounded-4">
                  <div className="col-md-6 text-center">
                    <img
                      src="/projects/quizzify.png"
                      alt="Quizzify"
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="section-title h4">Quizzify</h5>
                    <p>
                      Group coursework: a quiz app with multiple topics and stored results for insights.
                      I focused on the UI using Bootstrap, HTML, and CSS.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm me-2">Live</a>
                    <button className="btn btn-outline-light btn-sm" onClick={() => openGitHub("https://github.com/Gloryozo/Quizzify")}>
                      Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide 2 – Movie Review */}
              <div className="carousel-item">
                <div className="row g-4 align-items-center justify-content-center px-3 py-4 glass-card m-3 rounded-4">
                  <div className="col-md-6 text-center">
                    <img
                      src="/projects/MovieReveiw.png"
                      alt="Movie Review Web Application"
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="section-title h4">Movie Review Web Application</h5>
                    <p>
                      View details, submit reviews, groups & favorites. Uses TMDB & Finnkino APIs with a
                      custom Node.js backend and React frontend.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm me-2">Live</a>
                    <button className="btn btn-outline-light btn-sm" onClick={() => openGitHub("https://github.com/Advance-Web-Project-Group-17/Server")}>
                      Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide 3 – ChillMate */}
              <div className="carousel-item">
                <div className="row g-4 align-items-center justify-content-center px-3 py-4 glass-card m-3 rounded-4">
                  <div className="col-md-6 text-center">
                    <img
                      src="/projects/ChillMate.jpeg"
                      alt="ChillMate"
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "300px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="section-title h4">ChillMate</h5>
                    <p>
                      Mobile app combining real-time weather with outfit recommendations, shopping guidance,
                      and activity suggestions for trips and changing conditions.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm me-2">Live</a>
                    <button className="btn btn-outline-light btn-sm" onClick={() => openGitHub("https://github.com/Mobile-Development-Project-Group-14/ChillMate")}>
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Hint */}
          <div className="text-center mt-2 hint-arrows" aria-hidden="true">
            <i className="bi bi-chevron-left"></i>
            <span className="mx-2">Swipe or click</span>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </section>

      {/* Skills (unchanged – already gradient+glass) */}
      <section id="skills" className="py-5 section-bg text-white">
        <div className="container">
          <h2 className="section-title text-center mb-5 text-decoration-underline">Skills</h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="glass-card p-4 rounded-4 shadow-lg h-100">
                <h3 className="mb-3">Frontend</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-code-slash me-2"></i>JavaScript</li>
                  <li className="mb-2"><i className="bi bi-code-square me-2"></i>TypeScript</li>
                  <li className="mb-2"><i className="bi bi-bootstrap me-2"></i>React</li>
                  <li className="mb-2"><i className="bi bi-filetype-html me-2"></i>HTML & CSS</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="glass-card p-4 rounded-4 shadow-lg h-100">
                <h3 className="mb-3">Backend</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-cpu me-2"></i>Node.js</li>
                  <li className="mb-2"><i className="bi bi-database me-2"></i>SQL & PostgreSQL</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="glass-card p-4 rounded-4 shadow-lg h-100">
                <h3 className="mb-3">Tools</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-terminal me-2"></i>Python</li>
                  <li className="mb-2"><i className="bi bi-git me-2"></i>Git</li>
                  <li className="mb-2"><i className="bi bi-layers me-2"></i>Linux</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="glass-card p-4 rounded-4 shadow-lg h-100">
                <h3 className="mb-3">Agile & Design</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-kanban me-2"></i>Agile Methodology</li>
                  <li className="mb-2"><i className="bi bi-palette me-2"></i>Figma</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="glass-card p-4 rounded-4 shadow-lg h-100">
                <h3 className="mb-3">Professional Skills</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-people me-2"></i>Teamwork</li>
                  <li className="mb-2"><i className="bi bi-diagram-3 me-2"></i>Collaboration</li>
                  <li className="mb-2"><i className="bi bi-lightbulb me-2"></i>Problem Solving</li>
                  <li className="mb-2"><i className="bi bi-arrow-repeat me-2"></i>Adaptable</li>
                  <li className="mb-2"><i className="bi bi-activity me-2"></i>Flexible</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="glass-card p-4 rounded-4 shadow-lg h-100">
                <h3 className="mb-3">Languages</h3>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"><i className="bi bi-translate me-2"></i>English</li>
                  <li className="mb-2"><i className="bi bi-translate me-2"></i>Sinhalese</li>
                  <li className="mb-2"><i className="bi bi-translate me-2"></i>Hindi</li>
                  <li className="mb-2"><i className="bi bi-translate me-2"></i>Finnish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact – already gradient + glass */}
      <section id="contact" className="py-5 section-bg text-white">
        <div className="container">
          <h2 className="section-title text-center text-decoration-underline mb-2">Contact Me</h2>
          <p className="text-center mb-4 opacity-75">Please fill out the form to get in touch!</p>

          <div className="glass-card rounded-4 shadow-lg p-4 mx-auto" style={{ maxWidth: 720 }}>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address:</label>
                <input name="email" type="email" className="form-control" placeholder="Enter your email address" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message:</label>
                <textarea name="message" rows="5" className="form-control" placeholder="Enter your message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Send</button>
              </div>
            </form>
          </div>
        </div>

        {/* Back to Top */}
        <a href="#" className="btn btn-primary position-fixed bottom-0 end-0 m-3">Back to Top</a>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>© {new Date().getFullYear()} Nadeesha. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
