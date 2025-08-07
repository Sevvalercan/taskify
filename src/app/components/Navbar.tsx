'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#21445B',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <Link href="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none' }}>
          Taskify
        </Link>
      </div>
      <div>
        <Link href="/dashboard" style={{ color: 'white', marginRight: 16, textDecoration: 'none' }}>
          Görevler
        </Link>
        <Link href="/settings" style={{ color: 'white', textDecoration: 'none' }}>
          Ayarlar
        </Link>
      </div>
    </nav>
  );
}
