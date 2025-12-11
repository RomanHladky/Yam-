import React, { useState } from 'react';
import { Product } from '../types';
import { getProductImage } from '../services/imageService';

interface ProductCardProps {
  product: Product;
  isReversed: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isReversed }) => {
  const imageUrl = getProductImage(product.imageQuery);
  const [imgSrc, setImgSrc] = useState(imageUrl);

  // Fallback if the high-quality image fails to load for some reason
  const handleError = () => {
    setImgSrc(`https://placehold.co/400x400/f93549/white?text=${encodeURIComponent(product.name.substring(0, 15))}...`);
  };

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-8 py-10 border-b border-gray-100 last:border-0`}>
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex-shrink-0">
        <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-100">
          <img 
            src={imgSrc} 
            alt={product.name} 
            onError={handleError}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex-1 w-full">
        <h3 className="text-2xl font-bold text-primary mb-4">{product.name}</h3>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p><strong className="text-gray-900 font-semibold">Popis:</strong> {product.description}</p>
          
          {product.ingredientsText && (
            <p><strong className="text-gray-900 font-semibold">Zloženie:</strong> {product.ingredientsText}</p>
          )}
          
          {product.usage && (
            <p><strong className="text-gray-900 font-semibold">Použitie:</strong> {product.usage}</p>
          )}
        </div>

        {product.attributes && product.attributes.length > 0 && (
          <div className="mt-6 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold w-1/3">Vlastnosť</th>
                  <th className="px-4 py-3 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {product.attributes.map((attr, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <th className="px-4 py-3 font-medium text-gray-900 bg-gray-50/50">{attr.label}</th>
                    <td className="px-4 py-3 text-gray-700">{attr.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
