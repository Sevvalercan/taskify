'use client';

import { useState } from 'react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Ayarlar</h2>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        Koyu Modu Aç / Kapat
      </label>

      <p style={{ marginTop: 16 }}>
        Bu özellik demo amaçlıdır. Gerçek tema değişimi için global context veya CSS değişikliği gerekir.
      </p>
    </div>
  );
}
