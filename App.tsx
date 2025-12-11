import React, { useState, useMemo } from 'react';
import { productData } from './constants';
import ProductCard from './components/ProductCard';

// Helper function to normalize text for search (removes accents, lowercase)
const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollToCategory = (title: string) => {
    // Clear search when clicking a category to show the section
    setSearchQuery("");
    
    // Use timeout to allow UI to update (switch back from search view) before scrolling
    setTimeout(() => {
      // 1. Scroll the Main Page Section
      const sectionElement = document.getElementById(title);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // 2. Scroll the Navigation Button into view (Horizontal scroll)
      // We use a constructed ID for the button to find it
      const btnId = `nav-btn-${title.replace(/\s+/g, '-')}`;
      const btnElement = document.getElementById(btnId);
      if (btnElement) {
        btnElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      setActiveCategory(title);
    }, 0);
  };

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const query = normalizeText(searchQuery);
    // Flatten categories to search across all products
    const allProducts = productData.flatMap(cat => cat.products);
    
    return allProducts.filter(product => 
      normalizeText(product.name).includes(query) || 
      normalizeText(product.description).includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 self-start md:self-auto">
                {/* Logo Placeholder */}
                <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0">
                  Y
                </div>
                <h1 
                  className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer" 
                  onClick={() => { setSearchQuery(""); window.scrollTo({top: 0, behavior: 'smooth'}); setActiveCategory(null); }}
                >
                  Yamá <span className="text-primary font-light">Portfólio</span>
                </h1>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-96 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Hľadať produkt, zložku..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
            </div>
          </div>
          
          {/* Navigation for Categories */}
          <nav className="flex gap-2 text-sm overflow-x-auto max-w-full pb-1 no-scrollbar">
            <button
                onClick={() => { setSearchQuery(""); window.scrollTo({top: 0, behavior: 'smooth'}); setActiveCategory(null); }}
                className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap border border-transparent ${
                  !searchQuery && !activeCategory 
                    ? 'bg-gray-100 text-gray-900 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Všetko
            </button>
            {productData.map((category) => (
              <button
                key={category.title}
                id={`nav-btn-${category.title.replace(/\s+/g, '-')}`}
                onClick={() => scrollToCategory(category.title)}
                className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap border border-transparent ${
                  !searchQuery && activeCategory === category.title 
                    ? 'bg-primary text-white font-medium shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:border-gray-200'
                }`}
              >
                {category.title.split('–')[0].trim()}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8 max-w-5xl">
        {searchQuery ? (
           // --- Search Results View ---
           <div className="space-y-8 animate-in fade-in duration-300">
             <div className="flex items-center justify-between border-b border-gray-100 pb-4">
               <h2 className="text-xl font-bold text-gray-800">
                 Výsledky vyhľadávania pre "{searchQuery}"
               </h2>
               <span className="text-sm text-gray-500">
                 Nájdených {filteredProducts?.length || 0} produktov
               </span>
             </div>

             {filteredProducts && filteredProducts.length > 0 ? (
               <div className="space-y-4">
                 {filteredProducts.map((product, index) => (
                   <ProductCard 
                     key={product.id} 
                     product={product} 
                     isReversed={false} // Keep layout consistent for search list
                   />
                 ))}
               </div>
             ) : (
               <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                 <div className="text-4xl mb-4 text-gray-300">🔍</div>
                 <h3 className="text-lg font-medium text-gray-900">Žiadne produkty sa nenašli</h3>
                 <p className="text-gray-500 mt-2">Skúste použiť iné kľúčové slová alebo skontrolujte preklepy.</p>
                 <button 
                   onClick={() => setSearchQuery("")}
                   className="mt-6 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm transition-all"
                 >
                   Zobraziť všetky produkty
                 </button>
               </div>
             )}
           </div>
        ) : (
          // --- Standard Category View ---
          <div className="space-y-16">
            {productData.map((category) => (
              <section key={category.title} id={category.title} className="scroll-mt-48">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 relative">
                    {category.title}
                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {category.products.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      isReversed={index % 2 !== 0} 
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2025 Yamá – Stránka vytvorená na základe oficiálnych informácií.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Obrázky produktov sú ilustračné a zobrazujú kľúčové zložky (napr. Aloe, Argan, Avokádo) pre estetický zážitok.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;