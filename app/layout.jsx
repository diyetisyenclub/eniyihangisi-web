export const metadata = {
  title: 'eniyihangisi.com',
  description: 'Türkiye’nin En İyi Takviye Rehberi',
};

export default function RootLayout({ children }) {
  // Bu kontrol, tarayıcı tabanlı önizleme araçlarının (sandbox) çift HTML/Body ekleyip
  // konsolda "validateDOMNesting" hatası vermesini engeller.
  const isPreview = typeof window !== 'undefined' && (
    window.location.hostname.includes('usercontent.goog') ||
    window.location.hostname.includes('webcontainer.io') ||
    !window.next
  );

  if (isPreview) {
    return (
      <>
        {children}
      </>
    );
  }

  return (
    <html lang="tr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
