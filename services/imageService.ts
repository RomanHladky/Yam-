// Služba na správu obrázkov produktov.
// TU MÔŽETE VLOŽIŤ SVOJE REÁLNE ODKAZY.

// TIP: Ak máte obrázky uložené lokálne v projekte (napr. v priečinku 'public/img'),
// zmeňte URL na cestu k súboru, napr.: '/img/yamasterol-aloe.jpg'.

const IMAGE_MAP: Record<string, string> = {
  // --- Yamasterol Line ---
  'aloe': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/652ebafe906d83daae274b2d_Yamasterol_Babosa_200ml_01%20(003).jpg', // SEM VLOŽTE LINK PRE: Yamasterol Aloe (Žltý) - AKTUALIZOVANÉ
  'argan': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/65411f52d8f3721d8fa72bea_ARGAN_196-p-2000.png', // Yamasterol Argan (Zlatý) - AKTUALIZOVANÉ
  'keratin': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/653ec0a24b2ba1bda26abe53_Yamasterol_Creatina_200ml_01.png', // Yamasterol Keratin (Ružový) - AKTUALIZOVANÉ
  'protein': 'https://soneda.fbitsstatic.net/img/p/creme-multifuncional-com-proteina-hidrolisada-yamasterol-320g-152424/339353.jpg?w=800&h=800&v=202505291719', // Yamasterol Protein (Biely) - AKTUALIZOVANÉ
  'hyaluronic': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/652fd10cf8e81fe56af10ce6_Yamasterol_Hialuronico_320ml_01.png', // Yamasterol Hyaluronic (Modrý) - AKTUALIZOVANÉ

  // --- Avocado Line ---
  'avocado_shampoo': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/65c515d352cd639b602be640_HairFood_Avocato_Shampoo_01.jpg', // AKTUALIZOVANÉ
  'avocado_conditioner': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db809ffdb6981bcd2e5cdd_HairFood_Avocato_Condicionador_01.jpg', // AKTUALIZOVANÉ
  'avocado_mask': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db80f84ed87fd82c1a5c9e_HairFood_Avocato_Mask_01.jpg', // AKTUALIZOVANÉ

  // --- Coconut Line ---
  'coconut_shampoo': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db7fdd09b258ad58ece24a_HairFood_Coco_Shampoo_01.jpg', // AKTUALIZOVANÉ
  'coconut_conditioner': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db81262cbb43c39cbc07e3_HairFood_Coco_Condicionador_01.jpg', // AKTUALIZOVANÉ
  'coconut_mask': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db815dc0a6fe3ee93c0e32_HairFood_Coco_Mask_01.jpg', // AKTUALIZOVANÉ
  'coconut_leavein': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db8199ea491f045f00f032_HairFood_Coco_Leaviin_01.jpg', // AKTUALIZOVANÉ

  // --- Papaya Line ---
  'papaya_shampoo': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db81e74ed87fd82c1b828b_HairFood_Papaya_Shampoo_01.jpg', // AKTUALIZOVANÉ
  'papaya_mask': 'https://cdn.prod.website-files.com/64a56579a76788190249b0ca/64db82234ed87fd82c1bc359_HairFood_Papaya_Mask_01.jpg', // AKTUALIZOVANÉ
  'papaya_spray': 'https://images.unsplash.com/photo-1621460309109-1a0522c09280?auto=format&fit=crop&q=80&w=800',

  // --- Oils ---
  'oils': 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&q=80&w=800',

  // --- Liss Repair ---
  'liss_shampoo': 'https://images.unsplash.com/photo-1556228720-1987df2a61d6?auto=format&fit=crop&q=80&w=800',
  'liss_conditioner': 'https://images.unsplash.com/photo-1571781926291-2805531300bc?auto=format&fit=crop&q=80&w=800',
  'liss_mask': 'https://images.unsplash.com/photo-1626015504029-79a6132ccbbd?auto=format&fit=crop&q=80&w=800',
  'liss_thermal': 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
  'liss_serum': 'https://images.unsplash.com/photo-1616259024227-31c19b674826?auto=format&fit=crop&q=80&w=800',

  // --- Kits/Misc ---
  'kit_liss': 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800',
  'kit_blond': 'https://images.unsplash.com/photo-1562886812-41775a01195d?auto=format&fit=crop&q=80&w=800',
  'less_poo': 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800',
  'yamaliss': 'https://images.unsplash.com/photo-1624638767972-2ea9696c4d7e?auto=format&fit=crop&q=80&w=800',
};

export const getProductImage = (queryKey: string): string => {
  return IMAGE_MAP[queryKey] || 'https://picsum.photos/400/400';
};
