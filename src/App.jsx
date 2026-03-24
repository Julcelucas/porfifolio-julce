import { useEffect, useMemo, useState } from 'react';
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaArrowUpRightFromSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
} from 'react-icons/fa6';
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiGithub,
} from 'react-icons/si';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const projects = [
  {
    title: 'Loja Online',
    category: 'Full Stack',
    description:
      'Sistema completo de cadastro, pesquisa e listagem de produtos com interface moderna e responsiva, desenvolvido com JavaScript, Node.js, Express Handlebars, Bootstrap e MySQL.',
    link: 'https://julce-projecto-loja.up.railway.app/',
  },
  {
    title: 'Lista de Tarefas',
    category: 'React',
    description:
      'Aplicacao web em React para adicionar, concluir e remover tarefas com persistencia em LocalStorage.',
    link: 'https://lista-de-tarefas-julce.netlify.app/',
  },
  {
    title: 'Formulario Instagram',
    category: 'UI Engineering',
    description:
      'Interface inspirada no Instagram, criada com TailwindCSS, com foco em consistencia visual, responsividade e boa experiencia de uso.',
    link: 'https://instaformulario-julce-tailwind.netlify.app/',
  },
  {
    title: 'Website do ISPCAN',
    category: 'Institucional + Web Radio',
    description:
      'Plataforma institucional com web radio integrada, desenvolvida para o instituto onde concluiu o curso de Engenharia de Telecomunicacoes.',
    link: 'https://julcelucas.github.io/ispcann/',
  },
];

const skills = [
  { label: 'HTML5', icon: FaHtml5 },
  { label: 'CSS3', icon: FaCss3Alt },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'React', icon: SiReact },
  { label: 'TailwindCSS', icon: SiTailwindcss },
  { label: 'Node.js', icon: FaNodeJs },
  { label: 'Express Handlebars', icon: SiExpress },
  { label: 'Bootstrap', icon: FaBootstrap },
  { label: 'MySQL', icon: SiMysql },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'GitHub', icon: SiGithub },
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace('#', '')),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Ir para o inicio">
          Julce <span>Lucas</span>
        </a>

        <nav aria-label="Navegacao principal">
          <ul className="nav-list">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const active = activeSection === id;

              return (
                <li key={item.href}>
                  <a className={active ? 'active' : ''} href={item.href}>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero panel reveal">
          <div className="hero-avatar-wrap">
            <img
              src="/imagens/foto-perfil.jpg"
              alt="Foto de perfil de Julce Lucas"
              className="hero-avatar"
            />
          </div>

          <div className="hero-content">
            <p className="eyebrow">Portfolio Profissional</p>
            <h1>
              Desenvolvedor Web com visao de produto e base forte em
              telecomunicacoes.
            </h1>
            <p>
              Sou autodidata e foco em construir experiencias digitais com
              identidade visual forte, alta performance e impacto real para
              negocios e comunidades.
            </p>

            <div className="hero-actions">
              <a
                href="/julcelucas-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FaDownload /> Download CV
              </a>
              <a href="#projetos" className="btn btn-ghost">
                Ver projetos
              </a>
            </div>

            <div className="social-links" aria-label="Redes sociais">
              <a href="https://github.com/Julcelucas" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/julce-lucas-0183942ab/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://web.facebook.com/julcelucas.lucas"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/julcelucas/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="panel reveal">
          <p className="eyebrow">Sobre Mim</p>
          <h2>Construcao de solucoes digitais orientadas a resultado</h2>
          <p>
            Desenvolvo websites institucionais, web radios e lojas virtuais com
            foco em experiencia, clareza e desempenho. Cada projeto nasce para
            resolver desafios concretos do ambiente onde ele sera utilizado.
          </p>
        </section>

        <section id="skills" className="panel reveal">
          <p className="eyebrow">Stack</p>
          <h2>Tecnologias e competencias</h2>
          <div className="chips">
            {skills.map(({ label, icon: Icon }) => (
              <span key={label} className="chip">
                <Icon className="chip-icon" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </section>

        <section id="projetos" className="panel reveal">
          <p className="eyebrow">Projetos</p>
          <h2>Trabalho recente e experimentacao</h2>
          <p className="section-intro">
            Estes projetos representam minha evolucao tecnica e minha capacidade
            de transformar necessidades em produtos digitais funcionais.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-badge">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Ver projeto <FaArrowUpRightFromSquare />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="panel reveal contact-panel">
          <p className="eyebrow">Contato</p>
          <h2>Vamos construir algo relevante juntos</h2>
          <p>
            Telefone / WhatsApp: <a href="tel:+244946050178">+244 946 050 178</a>
          </p>
          <p>
            E-mail: <a href="mailto:julcelucaslucas@gmail.com">julcelucaslucas@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
