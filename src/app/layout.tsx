import './styles/globals.css';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Taskify - Görev Takip Uygulaması',
  description: 'Basit ve temiz görev takip uygulaması',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <TaskProvider>
          <Navbar />
          <main style={{ padding: '1rem', maxWidth: '600px', margin: 'auto' }}>
            {children}
          </main>
          <footer style={{ textAlign: 'center', padding: '1rem', color: '#666' }}>
            © 2025 Taskify
          </footer>
        </TaskProvider>
      </body>
    </html>
  );
}
