import email from '../img/email.svg'
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'

const links = [
  { href: 'mailto:briannajmansell@gmail.com', src: email, alt: 'Email Contact' },
  { href: 'https://github.com/bmansell', src: github, alt: 'Github Profile' },
  { href: 'https://www.linkedin.com/in/briannamansell/', src: linkedin, alt: 'LinkedIn Profile' }
]

const Footer = () => (
  <footer className='footer'>
    <nav className='footer-links'>
      {links.map(({ href, src, alt }) => (
        <a key={alt} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel='noreferrer'>
          <img src={src} alt={alt} />
        </a>
      ))}
    </nav>
    <p className='footer-copy'>&copy; Brianna Mansell. All rights reserved.</p>
  </footer>
)

export default Footer
