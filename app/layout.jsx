export const metadata = {
  title: 'eniyihangisi.com',
  description: 'Türkiye’nin En İyi Takviye Rehberi',
};

// Sunucu dışı (tarayıcı) ortamında çalıştırılacak kontroller
if (typeof window !== 'undefined') {
  const hostname = window.location.hostname;
  const isLiveSite = hostname.includes('eniyihangisi.com');
  
  // Canlı sitede 'www.' kullanımı zorunlu kılınır (SEO Standardizasyonu)
  if (isLiveSite && !hostname.startsWith('www.')) {
    window.location.replace(
      'https://www.eniyihangisi.com' + 
      window.location.pathname + 
      window.location.search + 
      window.location.hash
    );
  }

  // Sadece canlı site dışındaki (Sandbox/Önizleme) ortamlarda çalışan konsol koruması.
  if (!isLiveSite) {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      if (
        args[0] && 
        typeof args[0] === 'string' && 
        (args[0].includes('validateDOMNesting') || args[0].includes('hydration-error') || args[0].includes('Hydration'))
      ) {
        return;
      }
      originalConsoleError.apply(console, args);
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
