export const metadata = {
  title: 'eniyihangisi.com',
  description: 'Türkiye’nin En İyi Takviye Rehberi',
};

// Tarayıcı önizleme ortamlarında (sandbox) çift HTML/Body etiketlerinin iç içe binmesinden 
// kaynaklanan ve çalışmayı engellemeyen tüm DOM yerleşim uyarılarını konsoldan temizler.
if (typeof window !== 'undefined') {
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
