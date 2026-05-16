"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, Stethoscope, ChevronDown, ChevronUp, 
  Award, Beaker, CheckCircle2, Search, Menu, 
  Activity, Pill, AlertTriangle, RefreshCw, 
  ShoppingCart, MapPin, Phone, Navigation, List, 
  Star, StarHalf, Calendar, Clock, 
  UserCheck, Zap, PlusCircle, MinusCircle, Hand, Eye, 
  MessageSquare, LogIn, FileText, BookOpen, ExternalLink,
  Moon, Heart, Instagram, Linkedin, BadgeCheck
} from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activePharmacyId, setActivePharmacyId] = useState(null);
  const [activeOnlineStoresId, setActiveOnlineStoresId] = useState(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [highlightedProductId, setHighlightedProductId] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const togglePharmacy = (id) => {
    setActivePharmacyId(activePharmacyId === id ? null : id);
    if (activeOnlineStoresId === id) setActiveOnlineStoresId(null);
  };

  const toggleOnlineStores = (id) => {
    setActiveOnlineStoresId(activeOnlineStoresId === id ? null : id);
    if (activePharmacyId === id) setActivePharmacyId(null);
  };

  const handleTriageClick = (productId) => {
    const element = document.getElementById(`product-${productId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedProductId(productId);
      setTimeout(() => {
        setHighlightedProductId(null);
      }, 3000);
    }
  };

  const products = [
    {
      id: 1,
      rank: 1,
      brand: "VeNatura",
      name: "Magnezyum Bisglisinat & Sitrat",
      form: "Bisglisinat, Sitrat",
      rating: 4.5,
      ratingText: "%95 Memnuniyet",
      tags: ["Uyku & Stres", "Sindirim"],
      scores: { overall: 9.2, absorption: "İyi" },
      servings: "60 Kapsül",
      price: "₺480",
      costPerServing: "8.0 TL",
      ingredients: "95 mg Bisglisinat + 45 mg Sitrat. İlave: Aktif B6 Vitamini (P5P).",
      dosage: "Günde 1-2 Kapsül (Tok Karnına)",
      benefits: [
        "Uykuya dalış süresini kısaltır ve derin uyku sağlar",
        "Sinir sistemini yatıştırarak stresi azaltır"
      ],
      pros: [
        "Amber cam şişe ile yüksek koruma",
        "Aktif B6 vitamini (P5P) ilavesi",
        "Bisglisinat oranı sayesinde ishal yapmaz"
      ],
      cons: [
        "Kapsül boyutu yutma zorluğu olanlar için büyük gelebilir",
        "Kapsül formu tablet sevenlere hitap etmeyebilir"
      ],
      warnings: [
        "Hassas mideye sahip olanlar yemekle birlikte almalıdır."
      ],
      interactions: [
        "Demir takviyeleri ile birlikte alınmamalıdır."
      ],
      expertNote: "Uyku problemleri ve stres yönetimi için en hızlı çözüm.",
      badge: "#1 Sırada",
      imageUrl: "https://lh3.googleusercontent.com/aida/ADBb0uiihU04hf7lFCrn_thitpLcjMiVe1TU_XaclorxOVf977Zaso83SSK2GEqz69TKZOkoDEr7YVcbM55RxH8-L8qP_1RrZJraA-dEHrB1IdKEIXxJuwLaIaf6QoqDyt8SCWYZhJGyV7t-gz6qapRz4zWgU0Tm9_Mg2RTafMyVD_lBBivBOBfA6dzjio_h7vXHinQPC40LEyi-tBxmh0isLdwDGssnB1uBUQRN4c4Ni_qznvYfMHepk5PjcRc",
      onlineStores: [
        { name: "Trendyol", price: "₺480", link: "#" },
        { name: "Hepsiburada", price: "₺485", link: "#" },
        { name: "Dermoeczanem", price: "₺490", link: "#" }
      ]
    },
    {
      id: 2,
      rank: 2,
      brand: "Ocean",
      name: "Extramag 200 mg",
      form: "Sitrat, Malat, Glisinat",
      rating: 4.5,
      ratingText: "%94 Memnuniyet",
      tags: ["Kas Ağrısı", "Enerji"],
      scores: { overall: 9.0, absorption: "Yüksek" },
      servings: "60 Tablet",
      price: "₺620",
      costPerServing: "10.3 TL",
      ingredients: "Sitrat, Malat, Glisinat (Toplam 200mg elemental magnezyum).",
      dosage: "Günde 1 Tablet (Öğle veya Akşam)",
      benefits: [
        "Kas kramplarını ve egzersiz sonrası ağrıları geçirir",
        "ATP (Enerji) metabolizmasını doğrudan destekler"
      ],
      pros: [
        "Tek tablette 200 mg yüksek magnezyum içeriği",
        "3 farklı formun güçlü sinerjik etkisi",
        "Günlük tek tablet kullanım kolaylığı"
      ],
      cons: [
        "İçindeki sitrat oranı yüksek olduğundan hassas bağırsaklarda laksatif etki yapabilir",
        "Tablet formu büyüktür, yutması zor olabilir"
      ],
      warnings: [
        "Günde 1 tableti aşmayınız."
      ],
      interactions: [
        "Kalsiyum takviyeleri ile 2 saat ara verilmelidir."
      ],
      expertNote: "Sporcular ve kronik yorgunluk çekenler için en dengeli içerik.",
      badge: "#2 Sırada",
      imageUrl: "https://lh3.googleusercontent.com/aida/ADBb0ug9i1H7uhAu7oeN1JUsxKarrVCFTvUTwWBbSBjbyVkQUj6bERPeAB0t3DHP1LFgm7uPBMHrLwJD52tnVjbP5YULyfKhx2oqJSl898aAlp41-JOCbeqWrCqW2M1lQJVVODWOjbKxeU6RrLXbarV00I1w11965gSn2HVhgeXNNOTdqkgI_cvYJ0S0CndpUqtBb58SmF0Nlfl7miEJL8oaKvsXsi_F3H6bSiUlPcjDnYf8fXDqWbZZ5_8KuQ",
      onlineStores: [
        { name: "Trendyol", price: "₺620", link: "#" },
        { name: "Hepsiburada", price: "₺615", link: "#" },
        { name: "Amazon", price: "₺610", link: "#" }
      ]
    },
    {
      id: 3,
      rank: 3,
      brand: "NBT Life",
      name: "PulseMag Taurat",
      form: "Taurat (%100)",
      rating: 4.8,
      ratingText: "%96 Memnuniyet",
      tags: ["Kalp Ritmi", "Tansiyon"],
      scores: { overall: 8.8, absorption: "Çok İyi" },
      servings: "60 Kapsül",
      price: "₺520",
      costPerServing: "8.6 TL",
      ingredients: "Magnezyum Taurat (Taurin amino asidine bağlı organik form).",
      dosage: "Günde 1 Kapsül (Sabah Tok Karnına)",
      benefits: [
        "Kalp ritmini (çarpıntıyı) düzenlemeye yardımcı olur",
        "Kan basıncının (tansiyonun) dengelenmesini destekler"
      ],
      pros: [
        "Kardiyovasküler sistem için spesifik olarak üretilmiştir",
        "Mide ve bağırsak toleransı en yüksek formlardan biridir",
        "İçindeki taurin enerjiyi artırır"
      ],
      cons: [
        "Kas krampları veya uyku için birincil tercih değildir",
        "Fiyatı standart magnezyumlara göre biraz daha yüksektir"
      ],
      warnings: [
        "Hipotansiyon (düşük tansiyon) hastaları tansiyonlarını takip etmelidir."
      ],
      interactions: [
        "Tansiyon ilaçlarının (anti-hipertansiflerin) etkisini artırabilir."
      ],
      expertNote: "Ritim bozukluğu veya kalp sağlığı odaklı bir arayışınız varsa tartışmasız en iyi form.",
      badge: "#3 Sırada",
      imageUrl: "https://lh3.googleusercontent.com/aida/ADBb0uiihU04hf7lFCrn_thitpLcjMiVe1TU_XaclorxOVf977Zaso83SSK2GEqz69TKZOkoDEr7YVcbM55RxH8-L8qP_1RrZJraA-dEHrB1IdKEIXxJuwLaIaf6QoqDyt8SCWYZhJGyV7t-gz6qapRz4zWgU0Tm9_Mg2RTafMyVD_lBBivBOBfA6dzjio_h7vXHinQPC40LEyi-tBxmh0isLdwDGssnB1uBUQRN4c4Ni_qznvYfMHepk5PjcRc",
      onlineStores: [
        { name: "NBT Kendi Sitesi", price: "₺520", link: "#" },
        { name: "Trendyol", price: "₺525", link: "#" }
      ]
    }
  ];

  const mockPharmacies = [
    { name: "Merkez Eczanesi", distance: "0.4 km", address: "Atatürk Cad. No:12, Şişli", phone: "+90 212 555 0101" },
    { name: "Güven Sağlık Eczanesi", distance: "1.2 km", address: "Barbaros Bulvarı No:45, Beşiktaş", phone: "+90 212 555 0102" }
  ];

  const faqs = [
    { question: "Magnezyumun hangi formunu kullanmalıyım?", answer: "Kullanım amacınıza göre değişir. Uyku ve anksiyete için Bisglisinat, kas ağrıları ve kramplar için Sitrat, kronik yorgunluk ve fibromiyalji için Malat, kalp sağlığı için Taurat formu tercih edilmelidir." },
    { question: "Böbrek yetmezliğinde magnezyum kullanılır mı?", answer: "Böbrek yetmezliği olan hastalarda magnezyumun vücuttan atılımı bozulur. Bu durum hipermagnezemi (kanda yüksek magnezyum) riskini artırdığından, takviyeler KESİNLİKLE sadece nefroloji uzmanı kontrolünde kullanılmalıdır." },
    { question: "Şeker hastasına hangi magnezyum kullanılır?", answer: "Tip 2 diyabet hastalarında hücre içi magnezyum genellikle düşüktür. İnsülin duyarlılığını artırmak için biyoyararlanımı yüksek organik formlar (Sitrat, Bisglisinat) doktor kontrolünde önerilir." },
    { question: "Magnezyum eksikliği belirtileri nelerdir?", answer: "En yaygın belirtiler arasında sebepsiz kas krampları, göz seğirmesi, kronik yorgunluk, el ve ayaklarda uyuşma, uykuya dalma zorluğu ve kalp ritim düzensizlikleri bulunur." },
    { question: "Gece yatmadan önce hangi magnezyum içilir?", answer: "Uyku kalitesini artırmak ve sinir sistemini yatıştırmak için Magnezyum Bisglisinat formu tercih edilmelidir. Yatmadan 1-2 saat önce alınması maksimum etkiyi sağlar." },
    { question: "Magnezyum glisinat ne işe yarar?", answer: "Magnezyumun glisin amino asidine bağlanmış halidir. Bağırsak toleransı en yüksek formdur (ishal yapmaz). Kan-beyin bariyerini rahat geçerek stresi azaltır, uyku kalitesini artırır ve zihinsel rahatlama sağlar." },
    { question: "Magnezyum kilo aldırır mı?", answer: "Hayır, kalorisiz bir mineraldir. Aksine, kan şekerini regüle ederek ve insülin direncini kırmaya yardımcı olarak sağlıklı kilo yönetimi süreçlerine destek olabilir." },
    { question: "Magnezyum Sitrat ne işe yarar?", answer: "Sitrik aside bağlı bu form, kas dokusuna hızla nüfuz eder. Spor sonrası kas onarımı, bacak krampları ve ATP (enerji) metabolizmasını desteklemek için idealdir." },
    { question: "Hamilelikte magnezyum kullanılır mı?", answer: "Evet, artan mineral ihtiyacını karşılamak ve rahim kasılmalarını/bacak kramplarını önlemek için kadın doğum uzmanları tarafından sıkça reçete edilir." },
    { question: "Magnezyum ve D vitamini birlikte kullanılır mı?", answer: "Evet, mükemmel bir ikilidir. Vücudun D vitaminini aktif forma çevirebilmesi ve kullanabilmesi için magnezyuma ihtiyacı vardır." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-teal-200">
      
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-teal-700 tracking-tight">eniyihangisi.com</span>
        </div>
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-slate-50 text-sm" 
            placeholder="Takviye veya marka ara..." 
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
            <ShieldCheck className="text-teal-700 w-4 h-4" />
            <span className="text-teal-700 font-bold text-xs uppercase tracking-wider">Uzman Kadromuz</span>
          </div>
          <Menu className="text-slate-600 cursor-pointer hover:text-teal-700 transition-colors duration-200 w-6 h-6 md:hidden" />
        </div>
      </nav>

      <div className="flex pt-16">
        
        {/* Main Content Area */}
        <main className="w-full p-4 md:p-8 max-w-5xl mx-auto pb-32">
          
          {/* Page Header */}
          <header className="mb-12 pt-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Türkiye'deki En İyi Magnezyum Markaları</h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-6 text-sm text-slate-600 border-b border-slate-200 pb-4 font-medium">
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-600" /> İlk Yayın: 11.12.2025</div>
              <div className="flex items-center gap-1.5"><RefreshCw className="w-4 h-4 text-teal-600" /> Son Güncelleme: 16.05.2026</div>
              <div className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-teal-600" /> 14.250 Okunma</div>
              <div className="flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-teal-600" /> Tıbbi Editör: <span className="font-bold text-teal-700">Uzm. Ecz. Esra Şen</span></div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <Pill className="text-teal-700 w-5 h-5" />
                <span className="font-bold text-xs uppercase text-slate-800">Uzman Eczacılar İncelendi</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <Beaker className="text-teal-700 w-5 h-5" />
                <span className="font-bold text-xs uppercase text-slate-800">Laboratuvar Onaylı</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm">
                <Stethoscope className="text-teal-700 w-5 h-5" />
                <span className="font-bold text-xs uppercase text-slate-800">Klinik Veri Odaklı</span>
              </div>
            </div>

            {/* Kısa Cevap Box */}
            <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-6 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-600"></div>
              <h2 className="text-xl font-bold text-teal-800 mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6" /> Kısa Cevap
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                Nörolojik destek ve uyku kalitesi için en iyi seçenek <strong>Magnimore Plus (ATA-Mg)</strong>, kas krampları ve hızlı etki için <strong>Venatura Bisglisinat & Sitrat</strong>, fiyat/performans ve genel günlük kullanım için ise <strong>Ocean Extramag 200 mg</strong> öne çıkmaktadır. Kadın sağlığı ve PMS dönemi için <strong>Solgar Magnesium Citrate</strong> iyi bir alternatiftir.
              </p>
            </div>

            {/* Akıllı Triage Asistanı */}
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-6 md:p-8 mb-12 shadow-lg relative overflow-hidden text-white border border-teal-600">
              <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                <Stethoscope className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-teal-500/30 text-teal-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-400/30 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> Akıllı Yönlendirme
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-3 text-white">Magnezyumu Hangi Şikayet İçin Arıyorsunuz?</h2>
                <p className="text-teal-100 font-medium mb-8 max-w-2xl text-sm md:text-base">
                  Klinik ihtiyacınızı aşağıdan seçin, uzmanlarımızın önerdiği en doğru ve spesifik forma sizi saniyeler içinde yönlendirelim.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <button onClick={() => handleTriageClick(1)} className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm p-5 rounded-xl transition-all duration-300 flex flex-col items-center gap-3 group">
                    <div className="bg-teal-800/50 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Moon className="w-7 h-7 text-indigo-200" />
                    </div>
                    <span className="font-bold text-sm text-center text-teal-50 group-hover:text-white">Uyku Problemi & Stres</span>
                  </button>
                  <button onClick={() => handleTriageClick(2)} className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm p-5 rounded-xl transition-all duration-300 flex flex-col items-center gap-3 group">
                    <div className="bg-teal-800/50 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Zap className="w-7 h-7 text-amber-200" />
                    </div>
                    <span className="font-bold text-sm text-center text-teal-50 group-hover:text-white">Kas Ağrısı & Yorgunluk</span>
                  </button>
                  <button onClick={() => handleTriageClick(3)} className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm p-5 rounded-xl transition-all duration-300 flex flex-col items-center gap-3 group">
                    <div className="bg-teal-800/50 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7 text-rose-300" />
                    </div>
                    <span className="font-bold text-sm text-center text-teal-50 group-hover:text-white">Kalp & Tansiyon</span>
                  </button>
                </div>
              </div>
            </div>

            {/* İçindekiler (Table of Contents) */}
            <nav aria-label="Sayfa İçindekileri" className="bg-white border border-slate-200 rounded-xl shadow-sm mb-12 overflow-hidden">
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                aria-expanded={isTocOpen}
                aria-controls="toc-content"
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <List className="w-5 h-5 text-teal-600" />
                  Sayfa İçindekileri (Hızlı Gezinme)
                </div>
                {isTocOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              {isTocOpen && (
                <div id="toc-content" className="p-6 border-t border-slate-100 bg-white">
                  <ol className="grid md:grid-cols-2 gap-y-3 gap-x-6 list-decimal list-inside text-slate-700 font-medium text-sm marker:text-teal-600 marker:font-bold">
                    {products.map((p) => (
                      <li key={p.id}>
                        <a href={`#product-${p.id}`} className="hover:text-teal-700 transition-colors inline-block ml-1">
                          {p.brand} İncelemesi ve Fiyatı
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#faq-section" className="hover:text-teal-700 transition-colors inline-block ml-1">
                        Sıkça Sorulan Sorular (10 Soru)
                      </a>
                    </li>
                    <li>
                      <a href="#author-section" className="hover:text-teal-700 transition-colors inline-block ml-1">
                        Tıbbi İnceleme ve Editöryal Süreç
                      </a>
                    </li>
                    <li>
                      <a href="#comments-section" className="hover:text-teal-700 transition-colors inline-block ml-1">
                        Kullanıcı Deneyimleri ve Yorumlar
                      </a>
                    </li>
                    <li>
                      <a href="#comprehensive-guide" className="hover:text-teal-700 transition-colors inline-block ml-1">
                        Kapsamlı Rehber: Magnezyum Seçimi
                      </a>
                    </li>
                  </ol>
                </div>
              )}
            </nav>

            {/* Hızlı Karşılaştırma Table */}
            <div className="mb-12 overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 p-5 border-b border-slate-200 bg-slate-50/50">Hızlı Karşılaştırma</h2>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-5 font-bold text-xs text-slate-500 uppercase tracking-wider">No</th>
                    <th className="py-3 px-5 font-bold text-xs text-slate-500 uppercase tracking-wider">En İyi Magnezyum</th>
                    <th className="py-3 px-5 font-bold text-xs text-slate-500 uppercase tracking-wider">Form</th>
                    <th className="py-3 px-5 font-bold text-xs text-slate-500 uppercase tracking-wider">Günlük Maliyet</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-slate-800">
                  {products.map((p) => (
                    <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-5 font-bold text-teal-700">{p.rank}</td>
                      <td className="py-4 px-5 font-bold text-slate-900">{p.name}</td>
                      <td className="py-4 px-5 text-slate-600">{p.form}</td>
                      <td className="py-4 px-5 font-mono text-teal-700 font-bold">{p.costPerServing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </header>

          {/* Product Cards List */}
          <div className="flex flex-col gap-10">
            {products.map((product) => (
              <article 
                key={product.id} 
                id={`product-${product.id}`} 
                className={`bg-white border-2 rounded-xl p-6 lg:p-8 flex flex-col xl:flex-row gap-8 relative scroll-mt-24 transition-all duration-700 ease-in-out ${
                  highlightedProductId === product.id 
                  ? 'border-teal-500 shadow-[0_0_35px_rgba(20,184,166,0.25)] scale-[1.01]' 
                  : 'border-slate-200 shadow-sm'
                }`}
              >
                
                {/* Ranking Ribbon */}
                <div className={`absolute top-0 right-0 text-white font-bold text-xs uppercase px-5 py-1.5 rounded-bl-xl z-10 ${product.rank === 1 ? 'bg-teal-700' : 'bg-slate-800'}`}>
                  {product.badge}
                </div>

                {/* Left Column: Image & Stats */}
                <div className="flex flex-col items-center xl:items-start xl:w-1/3 border-b xl:border-b-0 xl:border-r border-slate-200 pb-8 xl:pb-0 xl:pr-8">
                  <div className="relative w-full flex justify-center mb-6">
                    <img alt={product.name} className="w-48 h-48 object-contain rounded-xl border border-slate-100 p-2 bg-white" src={product.imageUrl} />
                    <div className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-sm border border-slate-100 flex items-center justify-center">
                      <ShieldCheck className="text-teal-600 w-5 h-5" />
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-extrabold text-slate-900 text-center xl:text-left mb-2">{product.name}</h2>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3 justify-center xl:justify-start">
                    {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                    <StarHalf className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm text-slate-600 ml-2 font-medium">{product.ratingText}</span>
                  </div>

                  {/* Tags */}
                  <div className="mb-5 flex flex-wrap gap-2 justify-center xl:justify-start">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="bg-teal-50 text-teal-800 px-2.5 py-1 rounded text-xs font-bold border border-teal-100">{tag}</span>
                    ))}
                  </div>

                  {/* Vertical Stats Box */}
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Skor</span>
                      <span className="font-bold text-slate-800 text-base">{product.scores.overall}/10</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Emilim</span>
                      <span className="font-bold text-slate-800 text-base">{product.scores.absorption}</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kutu</span>
                      <span className="font-bold text-slate-800 text-base">{product.servings}</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fiyat</span>
                      <span className="font-bold text-slate-800 text-base">{product.price}</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Günlük Maliyet</span>
                      <span className="font-bold text-slate-800 text-base">{product.costPerServing}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Content Boxes & Buttons */}
                <div className="flex-1 flex flex-col gap-5">
                  
                  {/* Ingredients */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <List className="w-4 h-4" /> İçindekiler
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {product.ingredients}
                    </p>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5">
                      <h3 className="font-bold text-xs text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <PlusCircle className="w-4 h-4 text-emerald-600" /> Artılar
                      </h3>
                      <ul className="text-sm text-slate-800 space-y-2">
                        {product.pros.map((pro, i) => <li key={i} className="flex items-start gap-2"><span className="text-emerald-500 font-bold">•</span> {pro}</li>)}
                      </ul>
                    </div>
                    <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-5">
                      <h3 className="font-bold text-xs text-rose-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <MinusCircle className="w-4 h-4 text-rose-600" /> Eksiler
                      </h3>
                      <ul className="text-sm text-slate-800 space-y-2">
                        {product.cons.map((con, i) => <li key={i} className="flex items-start gap-2"><span className="text-rose-500 font-bold">•</span> {con}</li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Clinical Data Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-5">
                      <h3 className="font-bold text-xs text-sky-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-sky-600" /> Dozaj
                      </h3>
                      <p className="text-sm font-medium text-slate-800">{product.dosage}</p>
                    </div>
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5">
                      <h3 className="font-bold text-xs text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Nelere İyi Gelir?
                      </h3>
                      <ul className="text-sm font-medium text-slate-800 list-disc list-inside">
                        {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-5">
                      <h3 className="font-bold text-xs text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600" /> Uyarılar
                      </h3>
                      <p className="text-sm font-medium text-slate-800">{product.warnings[0]}</p>
                    </div>
                    <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-5">
                      <h3 className="font-bold text-xs text-rose-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Hand className="w-4 h-4 text-rose-600" /> Etkileşim
                      </h3>
                      <p className="text-sm font-medium text-slate-800">{product.interactions[0]}</p>
                    </div>
                  </div>

                  {/* Expert Note */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3 mt-2">
                    <Stethoscope className="text-teal-700 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-slate-700 italic">"{product.expertNote}"</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-slate-100">
                    <button 
                      onClick={() => toggleOnlineStores(product.id)}
                      className="flex-1 bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <ShoppingCart className="w-4 h-4" /> Online Fiyatları Gör
                    </button>
                    <button 
                      onClick={() => togglePharmacy(product.id)}
                      className="flex-1 bg-white border-2 border-teal-700 text-teal-700 hover:bg-teal-50 font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" /> En Yakın Eczane
                    </button>
                  </div>

                  {/* Online Stores Dropdown */}
                  {activeOnlineStoresId === product.id && (
                    <div className="mt-2 bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-inner animate-in fade-in slide-in-from-top-4">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                          <ShoppingCart className="h-4 w-4 text-teal-600" /> Online Satış Noktaları
                        </h5>
                      </div>
                      <div className="space-y-3">
                        {product.onlineStores.map((store, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-3 rounded-lg border border-slate-200 hover:border-teal-300 transition-colors">
                            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                              {store.name}
                            </div>
                            <div className="flex items-center justify-between sm:justify-end gap-4 mt-3 sm:mt-0 w-full sm:w-auto">
                              <span className="font-black text-slate-800">{store.price}</span>
                              <a href={store.link} target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                Satın Al <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pharmacy Dropdown */}
                  {activePharmacyId === product.id && (
                    <div className="mt-2 bg-slate-50 border border-teal-200 rounded-xl p-5 shadow-inner animate-in fade-in slide-in-from-top-4">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                        <h5 className="font-bold text-slate-800 flex items-center gap-2 text-sm">
                          <Navigation className="h-4 w-4 text-teal-600" /> Yakın Eczaneler
                        </h5>
                      </div>
                      <div className="space-y-3">
                        {mockPharmacies.map((pharmacy, idx) => (
                          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                            <div>
                              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                {pharmacy.name} <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">{pharmacy.distance}</span>
                              </div>
                              <div className="text-xs text-slate-500 mt-1 font-medium">{pharmacy.address}</div>
                            </div>
                            <a href={`tel:${pharmacy.phone}`} className="mt-3 sm:mt-0 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                              <Phone className="h-4 w-4" /> Ara
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* SSS Section */}
          <div id="faq-section" className="mt-24 scroll-mt-24">
             <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Sıkça Sorulan Sorular</h2>
             <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    {faq.question}
                    {openFaq === index ? <ChevronUp className="h-5 w-5 text-teal-700 shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed text-sm font-medium border-t border-slate-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Medical Disclaimer & Author Block (YMYL Optimization & Monetization) */}
          <div id="author-section" className="mt-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-teal-600" /> Tıbbi Sorumluluk ve Editöryal Süreç
            </h2>
            
            <div className="bg-slate-100 border border-slate-300 rounded-xl p-6 sm:p-8">
              
              {/* Verified Author Profile Card */}
              <div className="bg-white border border-teal-100 rounded-xl p-6 shadow-sm mb-6 flex flex-col md:flex-row gap-6 items-center md:items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -z-0"></div>
                
                <div className="relative z-10 shrink-0">
                  <img 
                    src="https://ui-avatars.com/api/?name=Esra+Sen&background=0f766e&color=fff&size=120" 
                    alt="Uzm. Eczacı Esra Şen" 
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-0.5 shadow-sm">
                    <BadgeCheck className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
                
                <div className="relative z-10 flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Uzm. Eczacı Esra Şen</h3>
                    <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full w-max mx-auto md:mx-0">Tıbbi Editör Kurulu</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                    Bu rehber, uzman eczacımız tarafından klinik kanıtlar, farmakolojik özellikler ve biyoyararlanım (emilim) verileri ışığında incelenmiş ve tıbbi onaydan geçmiştir. İçerikteki öneriler sadece etken madde kalitesine dayanır.
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <a href="#" className="flex items-center gap-1.5 text-slate-500 hover:text-rose-600 transition-colors text-sm font-bold">
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <a href="#" className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
                {/* Ürün Kabul ve Değerlendirme Politikası */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm mt-4">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-600"/> Ürün Kabul ve İnceleme Kriterlerimiz
                  </h4>
                  <p className="text-slate-600 mb-4 text-sm">
                    Platformumuzda yer almak isteyen markalar için başvuru süreci açıktır ancak inceleme bedeli ödense dahi <strong>yayınlanma garantisi ASLA verilmez.</strong> Bir takviyenin bu uzman rehberinde listelenebilmesi için aşağıdaki yasal ve klinik testlerden geçmesi zorunludur:
                  </p>
                  <ul className="space-y-3 mb-5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" /> 
                      <span><strong>Yasal Onay:</strong> T.C. Tarım ve Orman Bakanlığı (Takviye Edici Gıda Onay Numarası) veya Sağlık Bakanlığı ruhsatının eksiksiz ve güncel olması.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" /> 
                      <span><strong>Laboratuvar ve Sertifikasyon:</strong> Üretim tesisinin GMP (İyi Üretim Uygulamaları) ve ISO 22000 sertifikalarına sahip olması; ürünün ağır metal/saflık testlerini içeren bağımsız 3. taraf analiz raporlarının sunulması.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" /> 
                      <span><strong>Tıbbi Kurul Onayı:</strong> Formülasyonun (Örn: düşük emilimli oksit form kullanılmaması, doğru sinerjik bileşenler) uzman eczacı ve diyetisyenlerimiz tarafından "yüksek biyoyararlanım" standartlarına uygun bulunması.</span>
                    </li>
                  </ul>
                  <button className="bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold py-3 px-5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm border border-teal-200 w-full sm:w-auto">
                    <FileText className="w-4 h-4" /> Marka / Ürün İnceleme Başvurusu Yapın
                  </button>
                </div>

                <div className="bg-slate-200/50 p-4 rounded-lg mt-4 border border-slate-300">
                  <p className="text-slate-700"><strong>Tıbbi Bilgilendirme:</strong> Bu içerik sadece genel bilgilendirme amacı taşımaktadır; kesinlikle kişisel tıbbi tanı, reçete veya tedavi yerine geçmez. Sağlık sorunlarınız, kronik hastalıklarınız ve düzenli kullandığınız ilaçlar için herhangi bir takviye edici gıda kullanmadan önce <strong>mutlaka hekiminize danışın.</strong> Takviye ürünlerin formülü markadan markaya değişebilir; doz ve kullanım şekli için ürün etiketi ve hekim önerisi önceliklidir.</p>
                </div>
                <p className="mt-4">
                  <strong>Kaynakça:</strong>{' '}
                  <a href="https://ods.od.nih.gov/factsheets/Magnesium-Consumer/" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800 hover:underline">NIH (National Institutes of Health) – Magnesium Bilgi Sayfası</a>,{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=magnesium+supplementation" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800 hover:underline">PubMed Clinical Trials</a>,{' '}
                  <a href="https://www.efsa.europa.eu/en/efsajournal/pub/4186" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-800 hover:underline">EFSA (Avrupa Gıda Güvenliği Otoritesi) Raporları</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div id="comments-section" className="mt-16 scroll-mt-24">
             <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4 flex items-center gap-2">
               <MessageSquare className="w-6 h-6 text-teal-600" /> En İyi Magnezyum İlacı Yorumları
             </h2>
             
             <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Deneyimlerinizi Paylaşın</h3>
                <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">Siz hangi magnezyum markasını kullanıyorsunuz? Etkilerini gördünüz mü? Diğer kullanıcılara rehber olmak için yorum yapın.</p>
                <button className="bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center gap-3 shadow-sm mx-auto">
                  <LogIn className="w-5 h-5 text-slate-500" /> Google ile Giriş Yap ve Yorum Yaz
                </button>
             </div>
          </div>

          {/* SEO Mini Article (Surfer SEO Keywords) - Accordion & Microdata Optimized */}
          <article id="comprehensive-guide" className="mt-16 scroll-mt-24 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden" itemScope itemType="https://schema.org/Article">
            <button
              onClick={() => setIsGuideOpen(!isGuideOpen)}
              aria-expanded={isGuideOpen}
              aria-controls="guide-content"
              className="w-full px-6 py-5 flex items-center justify-between bg-slate-50/50 hover:bg-slate-50 transition-colors border-b border-slate-100"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 shrink-0">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900" itemProp="headline">Uzman Rehberi: En İyi Magnezyum Formu Nasıl Seçilir?</h2>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">Magnezyum Çeşitleri, Faydaları ve Fiyat Analizi</p>
                </div>
              </div>
              {isGuideOpen ? <ChevronUp className="w-6 h-6 text-slate-400 shrink-0" /> : <ChevronDown className="w-6 h-6 text-slate-400 shrink-0" />}
            </button>
            
            {isGuideOpen && (
              <div id="guide-content" className="p-6 md:p-8 text-sm text-slate-600 leading-relaxed font-medium space-y-5 bg-white" itemProp="articleBody">
                <p>Sağlıklı bir yaşam ve güçlü bir sinir sistemi için doğru <strong>magnezyum takviyesi</strong> seçimi büyük önem taşır. Piyasada birçok farklı form bulunurken kullanıcıların aklındaki en büyük soru "Acaba benim için <strong>en iyi magnezyum hangisi</strong>?" olmaktadır. İhtiyacınıza uygun <strong>en iyi magnezyum ilacı</strong> veya takviyesini bulmak için öncelikle ambalajın arkasındaki <strong>magnezyum çeşitleri</strong> ve emilim oranlarını okumayı bilmek gerekir.</p>
                
                <p>Özellikle uyku kalitesini artırmak ve stres yönetimi arayanlar için <strong>magnezyum glisinat</strong> formu öne çıkar. Peki, tam olarak <strong>magnezyum glisinat ne işe yarar</strong>? Kan-beyin bariyerini rahatça geçerek sinir sistemini yatıştırır, derin uykuya geçişi kolaylaştırır ve kas gerginliğini azaltır. Kendiniz için <strong>en iyi magnezyum markası</strong> arayışındayken sadece marka ismine değil, içerikteki etken maddenin saflığına dikkat etmelisiniz.</p>
                
                <p><strong>Magnezyum glisinat fiyat</strong> aralıkları; kullanılan patentli hammaddeye, kutu içindeki servis sayısına ve markanın ithal/yerli durumuna göre değişiklik gösterse de, sağladığı yüksek biyoyararlanım ile fiyat/performans açısından genellikle çok tatmin edicidir. Unutmayın, sizin için en doğru ve <strong>en iyi magnezyum takviyesi</strong>, kişisel sağlık hedeflerinize ve hekiminizin önerilerine en çok uyan formdur. Herhangi bir <strong>magnezyum ilacı</strong> kullanmadan önce mutlaka tıbbi geçmişinizi uzman bir hekimle değerlendirmelisiniz.</p>
              </div>
            )}
          </article>

        </main>
      </div>
    </div>
  );
}
