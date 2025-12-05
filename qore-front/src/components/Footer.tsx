"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>Danny projects</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Integer non urna vitae nulla luctus rhoncus. Made in RS
            School
          </p>
        </div>

        <nav className="footer-nav">
          <Link href="/">Main</Link>
          <Link href="/history">History</Link>
          <Link href="/about">About</Link>
          <Link href="/documentation">Documentation</Link>
        </nav>

        <div className="footer-socials">
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}
