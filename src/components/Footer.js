import React from 'react';
import './Footer.css'; // Ensure Footer.css exists in the components folder (if needed)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Google DeepMind</a>
        <a href="/responsibility">Responsibility & Safety</a>
        <a href="/research">Research</a>
        <a href="/technologies">Technologies</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </div>
      <div className="footer-social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img
    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"alt="Facebook"style={{ width: '40px', height: '40px' }}/></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEVHqej///9Cp+j6/f7W6vnw+P1Mq+k8pedjtOvh8Pvk8vv3+/50u+1QrelVr+qg0PKIxO/K5Pey2fWYzPF8v+7A4fe53fap1PMroOaOyPBquOzP6fmaFgHaAAAFC0lEQVR4nO3c2ZajKhQGYN2A4BCcNZr3f88DSarNoBGiBdZZ++u+qItaiX9gyxCsIEAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6GBAuf0Q3X/4q9Tly7Go+6qq+rwY5WyePxIRTlnd0iQNtTShbd5I/vo7cIq8XJwdgKyiLHyUxl0TPcXhpyEXri/s9QNdx2VO0/AVSSrx77WA86JNupPbjsbHwjYNF+V7lGsc2txei595cWEhs37pjc4dGe3ekmfxbBSNDWeukozVtZpa6bphkpAJmzR8nG+Wu0EW3b2aksxxw/Bev+to/gnykX3K8tjpcsdZQJb6fWlmmobL5T72onVc/ar/J9c3vmRmvw9RZ5qF6nEHwOFIA8O9AGhj9DHCYNrJqOAAXBbNb0eYRP1PNceFQRoQF7MopBRnHjV5adrkOwDZkZ/3TwaD2WJt1jCsF+PQlUmY1u7qBmRLpiuo1ioWRGnWLnFJYx2brL7kjp7ChKQdPzcONIlhL/t5QZej5nMYVThD8GlsOPWm5X9zsZxbbPNYM1dpK/nih3kflIxRi7F4jzBRRV6uIBmipUuAkVplEY4HTajfJ1pltrQKboxHf53lY4/9DbyYqYJULbNm4xSG9a9fo13urr8WZr7nJFUj3xfw5sN/mOQetjgW51pJO4zRy4drEaZbLLzfxIel1QmjVSH4Yx6LMJWXnQw4Ld+h0qSsCsmnQOY14ydMwOtPF0VYXOYZnNVimAeQGd+aPYUJ+Nr9lqQs7mp1RzibD5rewgjTKyTs4+r/CGFWOtpXSO8njC5u46WwqTT3EeU0SgAQ7esMbSNWe8iiVlutGkzOojOuBiNJ4SUMDVPa11lW2a1UVsQOtzGmMLebbZpcLruGcbySuTu9rWd2UbpeylxBvm+x3Djdx5jMrmc2Y17uzGr4N9zVs5KYbCj+RprqF8L4qf9p53xPbrfLntLsPpdRkxlfX5lzsfstwPlXmZNzvncY5xtmEwC7fcpVpPN4MENP0PbEBm+9TKex2qlcFfs9Y2KxU7GOVD4bRqfZcXnGnH6PMYdH+V6DZ3n2nEUf3Mm6ZI/WIY3vhtGH+jhk/c8Bsg0u/k/MyVFIKUXRb+5snibMD6KBXsry/hXxtobxsv3/BD6curKSeh0w76aTGtuUXtbLL3ZqGo/z5Se7NI2fjYw3EO0wo4k9LZff7LBII0eo/huebU1T+Y7wgDfb0nhcYM7gRbxhduZrs2wJNO3XjcNy/2P/MxA5/a5xSOdrr2wZBGrq/E0cP/v+ayBQc2frMSe2OrTukH7MR4xFazElYG/PzhwIqGW0xa3A7mEC13hm801H7H0LY5mqGquDpdT1wxjmVJTapv5JafxQhGPAQUWxWQyQ9pD1op+6lLZ3ZdYfZqyEB0GkkpSWsxlauD9WOi+SQp6iSG8xjVmRt9R2m4m1x7mNRWPedlXVtS2NE/OjZFOz1IfpYlrWsZAo1jl0s1Sj/73LR3AqvjwGQMrmaDN+PW356quZSxYcpfKf8PNoNbCEYVqO/JBRNBWni5lZ4RAWV+J8mHvYHM5F3dG1GxpJGe0GyQ8dRQMeZENfxmyhhQhL4jYvxmOWyhs1LQtENuRdqUcdMqVQMWhZ6T/G8M3T9t7oWU10EmNTDHne95X+n9dD0aiZQgB/8M9kXOdp0XTloP/BX0yCEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhP6//gM5UT0Rlq7HZQAAAABJRU5ErkJggg=="
    alt="Twitter"
    style={{ width: '40px', height: '40px' }}
  />
</a>

<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwAd7UAd7UAd7UAd7UAd7UAd7UAd7UAd7UAd7X///8CcLIAaa5Nj8Hn8/lypMyawNw6hby81+j0+/0ZeLXT5fBnnchdlcOLtNWxzePrILPNAAAACnRSTlMAUn3/Gpo9+Wne3pzmuwAAAMZJREFUKJHNk9sWgiAQRcfQjIZrIOr//2gzRK6K8b3z4JG1UeYGAFz03EtPwNLqRCPAdMaUBmBDg0agV4ZYXAoCvTHMd5JHEaJn+Og/rTAy3GSojE9pPztTGczMELGGbvATRlJWmc3EbQ++7mq/dXTmipbDWhMH4OI3tBUulZEbAR6yKEBXbKiZSXClMi/knNovdJmWoRWsg/j/MB21TV0qWLz31BV6Fl5aeuHyDXVssXXyZe/GKoCxn4CmgSZ+lG7DrPQV4AnbbBfzU77xIAAAAABJRU5ErkJggg=="
    alt="LinkedIn"
    style={{ width: '40px', height: '40px' }}
  />
</a>

<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJklEQVR4Ae2WpVaFQRSFcaeS4QVwIjTiLbgk7D1w9xeg4FQcOu6acHeXtNnDmsFd7in/WetLI+f7dbYDAFEsAUvgoeAQ5k5iSQFpIH1kkMyQFXJMTsgpwTuc6jlHes2M3qNP71mge7g76DLNg8gygZ1QckGmuSdZJ7Azq8RDCSQTCJGgBCoFBWqVQLegQJcSmPnWIr9oICMXcIr4C4FJJbD9rUX+NtzX+CIQlfVbgS0lcP4jAVNt/UCA7acCZ0oAPxfQdXMLFNUBvpHflvgbAVM7h0B6zrfeD3kB+Ucg/xLKf4biPyLJX3GH9GFUogRSBQUSTSBZEwskQpFs1USyl6E0gRSRJtJPhsnci1B69oVQeqzXzOo9+kmj3juBeDw2BkSxBCyBO+9s03HRLVCoAAAAAElFTkSuQmCC"
    alt="YouTube"
    style={{ width: '40px', height: '40px' }}
  />
</a>

      </div>
      <p>
        &copy; 2025 DeepMind. All rights reserved. | 
        <a href="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}> Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
