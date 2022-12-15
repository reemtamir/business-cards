
const Footer = ({ isDark }) => {
  return (
    <footer>
      <div
        style={{
          height: '10%',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <a href="https://www.linkedin.com/" target="_blank">
          <i
            style={{
              color: isDark ? 'white' : 'black',
              marginRight: ' 1.2rem',
              fontSize: '1.5rem',
            }}
            className="bi bi-linkedin "
          ></i>
        </a>
        <a href="https://github.com/reemtamir" target="_blank">
          <i
            style={{ color: isDark ? 'white' : 'black', fontSize: '1.5rem' }}
            className="bi bi-github "
          ></i>
        </a>
      </div>
      <p
        style={{
          color: isDark ? 'white' : 'black',
          fontSize: ' 1.3rem',
          textAlign: 'center',
        }}
      >
        <span>&copy;</span> {new Date().getFullYear()} Re'em Tamir
      </p>
    </footer>
  );
};

export default Footer;
