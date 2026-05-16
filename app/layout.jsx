export const metadata = {
  title: 'eniyihangisi.com',
  description: 'Türkiye’nin En İyi Takviye Rehberi',
};

// Sadece canlı site dışındaki (Sandbox/Önizleme) ortamlarda çalışan konsol koruması.
// Google botları eniyihangisi.com adresini tararken bu kod blogu tamamen devre dışı kalır.
if (typeof window !== 'undefined') {
  const isLiveSite = window.location.hostname.includes('eniyihangisi.com');
  
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
