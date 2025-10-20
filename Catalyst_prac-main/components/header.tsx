"use client"

import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  currentPage: string
  onNavigate: (page: any) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { href: "home", label: "Home" },
    { href: "academics", label: "Academics" },
    { href: "hostel", label: "Hostel" },
    { href: "support", label: "Support" },
    { href: "about", label: "About" },
  ]

  return (
    <header>
      <div className="brand">
        <div className="logo">
          <Image src="/catalyst-logo.png" alt="Catalyst Logo" width={80} height={50} priority />
        </div>
        <div>
          <div className="title">Catalyst</div>
          <div className="subtitle">IIIT Nagpur Student Portal</div>
        </div>
      </div>

      <nav role="navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => onNavigate(item.href)}
            className={`nav-link ${currentPage === item.href ? "active" : ""}`}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.9)",
              textDecoration: "none",
              padding: "8px 12px",
              borderRadius: "10px",
              transition: "all 0.18s",
              fontWeight: 600,
              cursor: "pointer",
              ...(currentPage === item.href && {
                background: "linear-gradient(90deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.02))",
                boxShadow: "0 6px 18px rgba(13, 10, 30, 0.3)",
              }),
            }}
          >
            {item.label}
          </button>
        ))}
        <Link
          href="/notifications"
          style={{
            background: "linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            padding: "8px 12px",
            borderRadius: "10px",
            transition: "all 0.18s",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          Notifications
        </Link>
        <Link
          href="/admin"
          style={{
            background: "linear-gradient(90deg, rgba(108, 92, 231, 0.2), rgba(45, 156, 219, 0.2))",
            border: "1px solid rgba(108, 92, 231, 0.3)",
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            padding: "8px 12px",
            borderRadius: "10px",
            transition: "all 0.18s",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          Admin
        </Link>
      </nav>
    </header>
  )
}
