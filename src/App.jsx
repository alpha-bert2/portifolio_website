import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import "./App.css";
import BrandLogo from "./components/brand/BrandLogo.jsx";
import Navbar from "./components/navbar/NavBar.jsx";

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "React"];

const projects = [
  {
    name: "Joven Kid Needs",
    repoUrl: "https://github.com/alpha-bert2/JovenKids-store",
    description: "A playful storefront for children's fashion.",
    status: "In progress",
    type: "store",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Recipe Web App",
    repoUrl: "https://github.com/alpha-bert2/RECIPE-WEB-APP",
    demoUrl: "https://alpha-bert2.github.io/RECIPE-WEB-APP/",
    description: "Search recipes, explore cuisines, and save favorites.",
    status: "Live",
    type: "recipe",
    tags: ["React", "Vite", "TheMealDB API"],
  },
  {
    name: "Personal Portfolio",
    description: "A home for my work, learning, and journey.",
    status: "In progress",
    type: "portfolio",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

function StorePreview({ compact = false }) {
  return (
    <div className={`store-preview${compact ? " store-preview-compact" : ""}`}>
      <div className="store-topbar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="store-address">joven.store</span>
        <span className="store-bag" aria-hidden="true">⌑</span>
      </div>
      <div className="store-navigation">
        <strong>Joven</strong>
        <span>Home</span>
        <span>New arrivals</span>
        <span>Shop</span>
      </div>
      <div className="store-banner">
        <div className="store-copy">
          <span className="store-kicker">A little more joy</span>
          <strong>Stylish outfits for kids</strong>
          <span>Fresh finds for little ones.</span>
          <span className="store-shop-link">Explore the collection <ArrowRight size={12} /></span>
        </div>
        <div className="store-art" aria-hidden="true">
          <span className="store-sun" />
          <span className="store-person store-person-one" />
          <span className="store-person store-person-two" />
          <span className="store-flower">✳</span>
        </div>
      </div>
      <div className="store-categories">
        <span><i className="swatch swatch-blue" /> Boys</span>
        <span><i className="swatch swatch-pink" /> Girls</span>
        <span><i className="swatch swatch-yellow" /> Accessories</span>
      </div>
    </div>
  );
}

function ProjectPreview({ type }) {
  if (type === "store") {
    return <StorePreview compact />;
  }

  if (type === "recipe") {
    return (
      <div className="recipe-app-preview">
        <div className="recipe-app-nav">
          <strong>Cook<span>.</span></strong>
          <span>Discover</span>
          <span>Recipes</span>
          <span>Favorites</span>
        </div>
        <div className="recipe-app-banner">
          <div className="recipe-app-copy">
            <span>Cook. Eat. Enjoy.</span>
            <strong>Discover recipes you’ll love.</strong>
            <small>Find delicious recipes for any occasion.</small>
          </div>
          <span className="recipe-bowl" aria-hidden="true">🥣</span>
        </div>
        <div className="recipe-app-filters">
          <span>Quick &amp; Easy</span>
          <span>Healthy</span>
          <span>Vegetarian</span>
          <span>Dessert</span>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-preview">
      <div className="portfolio-preview-nav">
        <BrandLogo variant="mini" />
        <span>Herbert Ofori</span>
        <span className="mini-nav-lines" />
      </div>
      <div className="portfolio-preview-content">
        <span className="mini-eyebrow">Software Engineering Student</span>
        <strong>Building ideas into <em>digital experiences.</em></strong>
        <span className="mini-lines"><i /><i /><i /></span>
        <span className="mini-action">View projects <ArrowUpRight size={10} /></span>
      </div>
      <span className="preview-orb" aria-hidden="true" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-preview project-preview-${project.type}`}>
        <ProjectPreview type={project.type} />
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-details">
        <div className="project-heading">
          <div>
            <h3>
              {project.repoUrl ? (
                <a
                  href={project.demoUrl || project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              ) : project.name}
            </h3>
            <p>{project.description}</p>
          </div>
          {project.repoUrl && (
            <a
              className="project-arrow"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source on GitHub`}
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="project-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          {project.demoUrl && (
            <a className="project-live-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <GraduationCap size={16} aria-hidden="true" />
                Software Engineering Student <span>•</span> GCTU
              </p>
              <p className="hero-greeting">Hi, I’m Herbert Ofori</p>
              <h1>Building ideas into <span>digital experiences.</span></h1>
              <p className="hero-description">
                Learning, designing, and building thoughtful web experiences.
                Based in Accra, Ghana.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://github.com/alpha-bert2?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View projects <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="button button-outline" href="#contact">Contact me</a>
              </div>
              <div className="hero-brand-note">
                <BrandLogo variant="note" />
                <span>Founder at <strong>Phori-Tech</strong> <i /> Enterprise-based solutions</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Preview of the Joven Kids fashion store project">
              <div className="hero-ribbon hero-ribbon-one" aria-hidden="true" />
              <div className="hero-ribbon hero-ribbon-two" aria-hidden="true" />
              <div className="floating-label building-label">
                <span className="status-pulse" />
                Currently building <strong>• Joven</strong>
              </div>
              <div className="hero-store-window">
                <StorePreview />
              </div>
              <div className="floating-code-card" aria-hidden="true">
                <div className="code-card-title"><span /> App.jsx</div>
                <code><i>export default</i> function App() {"{"}<br />&nbsp;&nbsp;return (&lt;JovenStore /&gt;);<br />{"}"}</code>
              </div>
              <div className="float-sparkle sparkle-one" aria-hidden="true">✦</div>
              <div className="float-sparkle sparkle-two" aria-hidden="true">✧</div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="quick-facts" aria-label="A few quick facts">
            <div><GraduationCap size={20} aria-hidden="true" /><span>GCTU student</span></div>
            <div><Code2 size={20} aria-hidden="true" /><span>Frontend development</span></div>
            <div><MapPin size={20} aria-hidden="true" /><span>Accra, Ghana</span></div>
          </div>
        </div>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-intro">
                <p className="section-kicker">A little about me</p>
                <h2>Curiosity drives <span>what I build.</span></h2>
                <p>
                  I’m a software engineering student exploring how design and
                  code come together. I’m growing my skills through hands-on
                  projects while building Phori-Tech, focused on enterprise-based solutions.
                </p>
              </div>
              <div className="focus-cards">
                <article className="focus-card">
                  <span className="focus-icon"><Code2 size={23} aria-hidden="true" /></span>
                  <div><h3>My focus</h3><p>Responsive web experiences</p></div>
                </article>
                <article className="focus-card">
                  <span className="focus-icon focus-icon-cyan"><Layers3 size={23} aria-hidden="true" /></span>
                  <div><h3>Currently learning</h3><p>JavaScript &amp; React</p></div>
                </article>
                <article className="focus-card focus-card-company">
                  <BrandLogo variant="company" />
                  <div><h3>Phori-Tech</h3><p>Enterprise-based solutions</p></div>
                </article>
              </div>
            </div>
            <div className="toolkit" id="skills">
              <h2>My toolkit<span>.</span></h2>
              <div className="skill-list">
                {skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    <span className={`skill-icon skill-icon-${skill.toLowerCase().replace("#", "sharp")}`} aria-hidden="true">
                      {skill === "HTML" ? "5" : skill === "CSS" ? "3" : skill === "JavaScript" ? "JS" : skill === "React" ? "⚛" : skill === "GitHub" ? "⌘" : "◆"}
                    </span>
                    {skill}
                    {skill === "React" && <span className="learning-tag">Learning</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Ideas becoming real</p>
                <h2>Selected work<span>.</span></h2>
              </div>
              <p>A few things I’m learning by designing and building.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="container journey-layout">
            <div>
              <p className="section-kicker">One step at a time</p>
              <h2>Learning by <span>building.</span></h2>
            </div>
            <div className="journey-track">
              <article className="journey-step">
                <span className="journey-dot" />
                <h3>Foundations</h3>
                <p>HTML, CSS &amp; Git</p>
              </article>
              <article className="journey-step journey-step-current">
                <span className="journey-dot" />
                <h3>Now</h3>
                <p>JavaScript &amp; responsive interfaces</p>
              </article>
              <article className="journey-step">
                <span className="journey-dot" />
                <h3>Next</h3>
                <p>React &amp; backend fundamentals</p>
              </article>
            </div>
          </div>
        </section>

        <section className="container contact-section" id="contact">
          <div className="contact-copy">
            <span className="contact-icon"><Sparkles size={19} aria-hidden="true" /></span>
            <div>
              <p className="section-kicker">Herbert Ofori · Phori-Tech</p>
              <h2>Let’s build something meaningful.</h2>
              <p>Have an idea or an opportunity? I’d love to hear about it.</p>
            </div>
          </div>
          <div className="contact-links" aria-label="Contact details">
            <a className="contact-link" href="tel:+233592496224">
              <span className="contact-link-icon"><Phone size={17} aria-hidden="true" /></span>
              <span className="contact-link-copy"><small>Call</small><strong>059 249 6224</strong></span>
            </a>
            <a
              className="contact-link"
              href="https://wa.me/233592496224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon"><MessageCircle size={17} aria-hidden="true" /></span>
              <span className="contact-link-copy"><small>WhatsApp</small><strong>059 249 6224</strong></span>
            </a>
            <a className="contact-link" href="mailto:herbertofori29@gmail.com">
              <span className="contact-link-icon"><Mail size={17} aria-hidden="true" /></span>
              <span className="contact-link-copy"><small>Email</small><strong>herbertofori29@gmail.com</strong></span>
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="footer-brand"><BrandLogo variant="footer" /> Herbert Ofori</a>
          <span>Built with curiosity<span className="footer-period">.</span></span>
        </div>
      </footer>
    </>
  );
}

export default App;
