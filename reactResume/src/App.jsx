import './App.css';

function App() {
  return (
  <main>
  <Header />
  <HeaderText text="Summary" />
  <Body />
  </main>
  )
}

function Header() {
  return (
    <p className="header">
    <h1>Justin Bausili</h1>
    Full Stack Developer | <a href="https://linkedin.com/in/justinmbausili">LinkedIn</a> |
    <a href="https://github.com/bscbausilijm">GitHub</a>
    </p>
  )
}

function HeaderText({ text }) {
  return <h1>{text}</h1>;
}



function Body() {
  return (
    <>
    <p>Full Stack Developer and graduate of Springboard's Software Engineering curriculum, through Amazon's Career Choice program.
    Experience with React, HTML, CSS, JS, APIs, REST, SQL, Node.JS, and both Windows/Linux servers.
    </p>
    <HeaderText text="Experience" />
    <ul>
      <li>HTML, CSS, JavaScript, React, C#, Python</li>
      <li>REST, Express, Axios, Git, Postgres SQL</li>
      <li>Node.js, Docker, VMWare</li>
    </ul>
    </>
  )
}


export default App;