'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Dashboard', route: '/' },
  { label: 'Issues', route: '/issues' },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Issues😑
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {tabs.map((tab) => (
              <li key={tab.route} className="nav-item">
                <Link
                  prefetch={false}
                  className={`nav-link ${pathname === tab.route && 'active'}`}
                  aria-current="page"
                  href={tab.route}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
