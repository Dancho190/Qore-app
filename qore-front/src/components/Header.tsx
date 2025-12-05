import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#00FF88"/>
          </svg>
          <span className="logo-text">QORE</span>
        </div>
        
        <nav className="header-nav">
          <Link href="/universities" className="nav-link">Universities</Link>
          <Link href="/programs" className="nav-link">Programs</Link>
          <Link href="/tours" className="nav-link">Tours</Link>
          <Link href="/compare" className="nav-link">Compare</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
        
        <div className="header-actions">
          <Link href="/sign-in" className="login-link">Login</Link>
          <Link href="/sign-up" className="get-started-btn">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

