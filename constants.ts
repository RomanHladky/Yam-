import { ProductCategory } from './types';

export const productData: ProductCategory[] = [
  {
    title: 'Yamasterol – multifunkčné krémy',
    products: [
      {
        id: 'yamasterol-aloe',
        name: 'Yamasterol Aloe Vera (Babosa + D-Panthenol) 200 g',
        imageQuery: 'aloe',
        description: 'Multifunkčný krém prezývaný „Amarelinho“ je vhodný ako kondicionér, predšampón, hydratačná maska aj bezoplachový krém. Obsahuje extrakt z aloe vera bohatý na minerály, aminokyseliny a enzýmy a provitamín B5 (D‑panthenol). Tieto zložky dodávajú vlasom hydratáciu, ochranu a lesk.',
        ingredientsText: 'voda, cetyl‑stearyl alkohol, izopropylmyristát, cetrimónium chlorid, etylalkohol, fenoxyetanol, dimetylhydantoín, parfum (s kumarínom), tartrazín, panthenol, glycerín, extrakt z listov aloe vera, draselný sorban, benzoan sodný, tetrasódna soľ EDTA.',
        usage: 'možno použiť ako predšampón (naniesť na suché vlasy 10 minút pred umytím), kondicionér na oplachovanie, hydratačnú masku (15 minút), bezoplachový krém na úpravu účesu alebo ochranu pred slnkom, morskou vodou a chlórom.',
        attributes: [
          { label: 'Typ vlasov', value: 'všetky typy, najmä suché alebo poškodené' },
          { label: 'Očakávaný výsledok', value: 'hebké, hydratované a lesklé vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol (konzervant)' },
          { label: 'Vôňa', value: 'jemná bylinná vôňa babosy' }
        ]
      },
      {
        id: 'yamasterol-argan',
        name: 'Yamasterol Argan 200 g',
        imageQuery: 'argan',
        description: 'Multifunkčný krém s arganovým olejom, makadamiovým olejom a D‑panthenolom. Arganový olej obnovuje prirodzený lesk a starostlivosť o suché a krehké vlasy; makadamiový olej vyživuje a zjemňuje; provitamín B5 posilňuje a hydratuje.',
        ingredientsText: 'voda, cetyl‑stearyl alkohol, izopropylmyristát, parfum (limonén, hexyl cinnamal), fenoxyetanol, dimetylhydantoín, arganový olej, makadamiový olej, cetrimónium chlorid, etylalkohol, panthenol, farbivá tartrazín a ponceau red, glycerín, BHT, extrakt z aloe vera, draselný sorban, benzoan sodný, tetrasódna soľ EDTA.',
        usage: 'možno použiť ako predšampón, kondicionér, hydratačnú masku, bezoplachový krém alebo ochranu pri kúpaní v mori/bazéne.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, krehké, chemicky ošetrené' },
          { label: 'Očakávaný výsledok', value: 'lesklé, vyživené a hebké vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'sladko‑orientálna vôňa arganu a makadamie' }
        ]
      },
      {
        id: 'yamasterol-keratin',
        name: 'Yamasterol Keratin (“Rosinha”) 200 g',
        imageQuery: 'keratin',
        description: 'Multifunkčný krém s hydrolyzovaným keratínom, ktorý dopĺňa vlasové proteíny a zlepšuje pevnosť a hydratáciu. Slúži ako kondicionér, predšampón, rekonštrukčná maska alebo bezoplachový krém.',
        ingredientsText: 'voda, cetostearyl alkohol, cetrimónium chlorid, izopropylmyristát, etylalkohol, parfum, glyceryl monostearát, fenoxyetanol, dimetylhydantoín, hydrolyzovaný keratín, glutamová kyselina, oxid kremičitý, panthenol, kyselina citrónová.',
        usage: 'naniesť ako predšampón na suché vlasy a nechať pôsobiť 10 minút; ako kondicionér krátko opláchnuť; ako rekonštrukčnú masku nechať 15 minút; tiež možno použiť ako bezoplachový krém alebo pri kúpaní.',
        attributes: [
          { label: 'Typ vlasov', value: 'oslabené, poškodené alebo chemicky ošetrené' },
          { label: 'Očakávaný výsledok', value: 'pevné, odolné a hydratované vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje jemné silikóny (kondicionačné polyméry)' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'kvetinovo‑ovocná vôňa' }
        ]
      },
      {
        id: 'yamasterol-protein',
        name: 'Yamasterol Milk/Hydrolyzed Protein 200 g',
        imageQuery: 'protein',
        description: 'Multifunkčný krém s hydrolyzovanými sójovými a mliečnymi proteínmi. Poskytuje rekonštrukčný účinok, chráni vlasy a zvyšuje ich lesk. Dá sa používať ako kondicionér, predšampón, rekonštrukčná maska alebo stylingový krém.',
        ingredientsText: 'voda, cetostearyl alkohol, izopropylmyristát, cetrimónium chlorid, etylalkohol, sorbitol, glyceryl monostearát, fenoxyetanol, dimetylhydantoín, parfum, polyquaternium‑44, kyselina citrónová, hydrolyzovaný sójový proteín, tetrasódna soľ EDTA.',
        usage: 'predšampón – naniesť na suché vlasy 10 min; stylingový krém; kondicionér; hydratačný kúpeľ alebo maska (15 min); ochrana pred slanou a chlórovanou vodou.',
        attributes: [
          { label: 'Typ vlasov', value: 'poškodené, lámavé vlasy' },
          { label: 'Očakávaný výsledok', value: 'silnejšie, lesklejšie vlasy s menším lámavosťou' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'jemná mliečna vôňa' }
        ]
      },
      {
        id: 'yamasterol-hyaluronic',
        name: 'Yamasterol Hyaluronic 320 g',
        imageQuery: 'hyaluronic',
        description: 'Multifunkčný krém s kyselinou hyalurónovou, rastlinným kolagénom, ricínovým olejom a D‑panthenolom. Kyselina hyalurónová hydratuje vlasy a vyplňuje vlasové vlákna; rastlinný kolagén zvyšuje pružnosť a pevnosť; ricínový olej hydratuje a čistí pokožku hlavy; D‑panthenol podporuje vitalitu vlasov.',
        ingredientsText: 'voda, cetyl‑stearyl alkohol, cetrimónium chlorid, izopropylmyristát, ricínový olej, etylalkohol, parfum, fenoxyetanol, dimetylhydantoín, PEG‑90M, kyselina citrónová, panthenol, hyaluronát sodný, extrakty Lonicera.',
        usage: 'predšampón (10 min), kondicionér, maska/kúpeľ (15 min), bezoplachový krém; aplikovať pred alebo po mori a bazéne.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, oslabené, rednúce vlasy' },
          { label: 'Očakávaný výsledok', value: 'hustejšie, hydratované a pevné vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'ovocno‑kvetinová vôňa' }
        ]
      }
    ]
  },
  {
    title: 'Hair Food – superpotraviny pre vlasy',
    products: [
      {
        id: 'hairfood-avocado-shampoo',
        name: 'Hair Food Avocado Shampoo 280 ml',
        imageQuery: 'avocado_shampoo',
        description: 'Jemný šampón s avokádovým olejom, ktorý čistí vlasy a pripravuje ich na výživu a opravný účinok ďalších produktov z radu Avocado. Avokádo je bohaté na vitamíny a mastné kyseliny a nouruje a reparuje vlasy.',
        ingredientsText: 'voda, laurethsulfát sodný, kokamid diethanolamín, chlorid draselný, parfum, kokamidopropylbetaín, dimetylhydantoín, lauromakrogol 400, guar hydroxypropyltrimonium chlorid, glycerín, kyselina citrónová, fenoxyetanol, avokádový olej, BHT.',
        usage: 'naniesť na mokré vlasy, masírovať až kým sa vytvorí jemná pena, dôkladne opláchnuť; pre lepší efekt pokračovať kondicionérom a maskou z radu Avocado.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, poškodené, bez lesku' },
          { label: 'Očakávaný výsledok', value: 'čisté, výživou pripravené vlasy' },
          { label: 'Sulfáty', value: 'obsahuje (sodium laureth sulfate)' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'neobsahuje silný alkohol (obsahuje BHT ako antioxidant)' },
          { label: 'Vôňa', value: 'svieža vôňa avokáda s ovocnými tónmi' }
        ]
      },
      {
        id: 'hairfood-avocado-conditioner',
        name: 'Hair Food Avocado Conditioner 200 g',
        imageQuery: 'avocado_conditioner',
        description: 'Kondicionér s avokádovým olejom, ktorý zarovnáva vlasové vlákno, uľahčuje rozčesávanie a zmierňuje drsnosť. Zaisťuje výživu a jemnosť vďaka olejom z avokáda, kokosu, ricínu a kukuričných klíčkov.',
        ingredientsText: 'voda, cetostearyl alkohol, cetyl palmitát, kokosový olej, beentrimónium chlorid, glycerín, parfum, ricínový olej, kukuričný olej, cetrimónium chlorid, sorbitol, dimetylhydantoín, macrogol, etylalkohol, fenoxyetanol, avokádový olej, BHT.',
        usage: 'po umytí šampónom naniesť kondicionér od strednej dĺžky ku končekom, nechať pôsobiť 2–3 minúty a opláchnuť.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, poškodené' },
          { label: 'Očakávaný výsledok', value: 'hladké, výživou ošetrené vlasy ľahké na rozčesanie' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje jemné kondicionačné silikóny' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'krémová avokádová vôňa' }
        ]
      },
      {
        id: 'hairfood-avocado-mask',
        name: 'Hair Food Avocado Nourishing Mask 250 g',
        imageQuery: 'avocado_mask',
        description: 'Intenzívna výživná maska pre poškodené vlasy. Kombinuje avokádový olej a ďalšie prírodné oleje, aby dodala vlasom lesk, vitalitu a opravila vlasové vlákno.',
        ingredientsText: 'voda, cetostearyl alkohol, kokosový olej, beentrimónium chlorid, glycerín, parfum, ricínový olej, kukuričné olejové glyceridy, cetrimónium chlorid, sorbitol, dimetylhydantoín, macrogol, etylalkohol, fenoxyetanol, avokádový olej, modré farbivo, BHT.',
        usage: 'po umytí šampónom naniesť masku, nechať pôsobiť 5–7 minút a opláchnuť; používať 1–3 krát týždenne.',
        attributes: [
          { label: 'Typ vlasov', value: 'poškodené, slabé' },
          { label: 'Očakávaný výsledok', value: 'opravené, hebké a lesklé vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje jemné kondicionačné zložky' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'sladká vôňa avokáda' }
        ]
      },
      {
        id: 'hairfood-coconut-shampoo',
        name: 'Hair Food Coconut Shampoo 280 ml',
        imageQuery: 'coconut_shampoo',
        description: 'Šampón s kokosovým olejom, ktorý šetrne čistí a pripravuje vlasy na extrémnu hydratačnú dávku. Kokosový olej je emolientný a zjemňuje vlasy.',
        ingredientsText: 'voda, sodium lauryletersulfate, kokamid diethanolamín, chlorid draselný, parfum, kokamidopropylbetaín, dimetylhydantoín, lauromakrogol 400, guar hydroxypropyltrimonium chlorid, glycerín, kyselina citrónová, fenoxyetanol, kokosový olej.',
        usage: 'naniesť na mokré vlasy, masírovať a opláchnuť; následne použiť kondicionér alebo masku z radu Coconut.',
        attributes: [
          { label: 'Typ vlasov', value: 'normálne až mastné, hľadajúce hydratáciu' },
          { label: 'Očakávaný výsledok', value: 'čisté, hebké vlasy pripravené na hydratáciu' },
          { label: 'Sulfáty', value: 'obsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'neobsahuje' },
          { label: 'Vôňa', value: 'sladká kokosová vôňa' }
        ]
      },
      {
        id: 'hairfood-coconut-conditioner',
        name: 'Hair Food Coconut Conditioner 200 g',
        imageQuery: 'coconut_conditioner',
        description: 'Emolientný kondicionér s kokosovým olejom, ktorý zabezpečuje ľahké rozčesávanie a hladký vzhľad vlasov. Dodáva hebkosť a prirodzený lesk.',
        ingredientsText: 'voda, cetostearyl alkohol, cetyl palmitát, kokosový olej, beentrimónium chlorid, parfum, ricínový olej, kukuričné olejové glyceridy, cetrimónium chlorid, sorbitol, dimetylhydantoín, macrogol, fenoxyetanol, etylalkohol.',
        usage: 'po umytí vlasov naniesť od strednej dĺžky ku končekom, nechať pôsobiť 2–3 minúty a opláchnuť.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, lámavé' },
          { label: 'Očakávaný výsledok', value: 'hebké, hydratované a lesklé vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje jemné silikóny' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'intenzívna kokosová vôňa' }
        ]
      },
      {
        id: 'hairfood-coconut-mask',
        name: 'Hair Food Coconut Moisturizing Mask 250 g',
        imageQuery: 'coconut_mask',
        description: 'Maska na umektáciu s kokosovým olejom, ktorá obnovuje vlasové vlákno, poskytuje vysoký stupeň hydratácie a znižuje krepovitosť.',
        ingredientsText: 'voda, cetostearyl alkohol, cetyl palmitát, kokosový olej, glyceryl monostearát, beentrimónium chlorid, parfum, ricínový olej, kukuričné olejové glyceridy, cetrimónium chlorid, sorbitol, dimetylhydantoín, macrogol, fenoxyetanol, etylalkohol.',
        usage: 'po umytí vlasov naniesť masku, nechať pôsobiť 5–7 minút a opláchnuť; používať 1–3 krát týždenne.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, krepovité' },
          { label: 'Očakávaný výsledok', value: 'mäkké, hydratované a lesklé vlasy bez krepovatenia' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje jemné silikóny' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'bohatá kokosová vôňa' }
        ]
      },
      {
        id: 'hairfood-coconut-leavein',
        name: 'Hair Food Coconut Leave‑In 250 ml',
        imageQuery: 'coconut_leavein',
        description: 'Krémový leave‑in s kokosovým olejom pre hydratáciu, výživu a ľahšie rozčesávanie. Pomáha definovať kučery a zabraňuje krepovateniu.',
        ingredientsText: 'voda, cetostearyl alkohol, cetyl palmitát, kokosový olej, glycerín, parfum, ricínový olej, kukuričné olejové glyceridy, cetrimónium chlorid, beentrimónium chlorid, dimetikón, sorbitol, dimetylhydantoín, polyquaternium‑10, macrogol, fenoxyetanol, etylalkohol.',
        usage: 'naniesť na vlhké alebo suché vlasy po prameňoch od strednej dĺžky ku končekom a rozčesať.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, kučeravé, krepovité' },
          { label: 'Očakávaný výsledok', value: 'hydratované, definované a lesklé kučery' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje dimetikón' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'lahodná kokosová vôňa' }
        ]
      },
      {
        id: 'hairfood-papaya-shampoo',
        name: 'Hair Food Papaya Shampoo 280 ml',
        imageQuery: 'papaya_shampoo',
        description: 'Jemný šampón s extraktom z papáje, ktorý hydratuje a dodáva lesk, vhodný na každodenné použitie.',
        ingredientsText: 'voda, sodium laureth sulfate, kokamid diethanolamín, parfum, kokamidopropylbetaín, chlorid draselný, dimetylhydantoín, lauromakrogol 400, guar hydroxypropyltrimonium chlorid, glycerín, kyselina citrónová, macrogol, fenoxyetanol, propylén glykol, extrakt z papáje, draselný sorban, benzoan sodný, sodná soľ EDTA.',
        usage: 'naniesť na mokré vlasy, masírovať a opláchnuť; používať kompletný rad na dosiahnutie lepších výsledkov.',
        attributes: [
          { label: 'Typ vlasov', value: 'normálne až mastné' },
          { label: 'Očakávaný výsledok', value: 'čisté, hebké a lesklé vlasy' },
          { label: 'Sulfáty', value: 'obsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'obsahuje benzyl benzoát, propylén glykol' },
          { label: 'Vôňa', value: 'ovocná vôňa papáje' }
        ]
      },
      {
        id: 'hairfood-papaya-mask',
        name: 'Hair Food Papaya Conditioning Mask 250 g',
        imageQuery: 'papaya_mask',
        description: 'Vysoko hydratačná maska s papájou, ktorá zanecháva vlasy mäkké a ošetrené; eliminuje potrebu kondicionéra.',
        ingredientsText: 'voda, cetostearyl alkohol, glyceryl monostearát, kokosový olej, beentrimónium chlorid, glycerín, parfum, ricínový olej, kukuričné olejové glyceridy, cetrimónium chlorid, sorbitol, dimetylhydantoín, macrogol, etylalkohol, fenoxyetanol, propylén glykol, extrakt z papáje.',
        usage: 'po umytí vlasov naniesť masku, nechať pôsobiť 5–7 minút a opláchnuť; používať 1–3 krát týždenne.',
        attributes: [
          { label: 'Typ vlasov', value: 'suché, lámavé' },
          { label: 'Očakávaný výsledok', value: 'hebké, hydratované vlasy s leskom' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje jemné silikóny' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol, propylén glykol' },
          { label: 'Vôňa', value: 'sladká ovocná vôňa papáje' }
        ]
      },
      {
        id: 'hairfood-papaya-spray',
        name: 'Hair Food Papaya Spray Leave‑In 120 ml',
        imageQuery: 'papaya_spray',
        description: 'Hydratačný sprej s papájovým extraktom určený na každodenné použitie. Znižuje krepovitosť, dodáva lesk a jemnosť a zanecháva vlasy prevoňané.',
        ingredientsText: 'voda, parfum, kukuričné olejové glyceridy, dimetikón, cetrimónium chlorid, sorbitol, dimetylhydantoín, styren/akrylátový kopolymér, polysorbát 20, laurylsulfát sodný, glycerín, propylén glykol, extrakt z papáje, draselný sorban, benzoan sodný, EDTA sodná soľ.',
        usage: 'nastriekať na vlhké alebo suché vlasy, aby zostali hydratované a voňavé.',
        attributes: [
          { label: 'Typ vlasov', value: 'všetky typy (na osvieženie), najmä suché a kučeravé' },
          { label: 'Očakávaný výsledok', value: 'hydratované, lesklé vlasy s nižšou krepovitosťou' },
          { label: 'Sulfáty', value: 'obsahuje malé množstvo (laurylsulfát sodný)' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje dimetikón' },
          { label: 'Alkoholy', value: 'obsahuje alkohol v parfumovanej zložke' },
          { label: 'Vôňa', value: 'osviežujúca vôňa papáje' }
        ]
      }
    ]
  },
  {
    title: 'Finishing Oils – dokončovacie oleje',
    products: [
      {
        id: 'finishing-oils',
        name: 'Hair Food Finishing Oils (Avocado / Coconut / Papaya) 30 ml',
        imageQuery: 'oils',
        description: 'Kolekcia troch olejov pre záverečnú úpravu vlasov. Avocado Finishing Oil obsahuje silikóny a avokádový olej na hlbokú opravu, výživu a uhladenie rozštiepených končekov. Coconut Finishing Oil obsahuje kombináciu silikónov a kokosového oleja na emolientný a hydratačný účinok. Papaya Finishing Oil vďaka extraktu z papáje a silikónovej báze hydratuje, dodáva lesk a bojuje proti krepovitosti.',
        ingredientsText: 'Avocado – decamethylcyclopentasiloxane, isododecane, dimethiconol, parfum, kokosový olej, cyklohexasiloxán, avokádový olej, BHT. Coconut – decamethylcyclopentasiloxane, isododecane, dimethiconol, parfum, kokosový olej, cyklohexasiloxán. Papaya – decamethylcyclopentasiloxane, isododecane, dimethiconol, parfum, kokosový olej, cyklohexasiloxán, glycerín, propylén glykol, voda, extrakt z papáje, draselný sorban, EDTA sodná soľ, benzoan sodný.',
        usage: 'naniesť niekoľko kvapiek do dlaní a rozotrieť od strednej dĺžky ku končekom mokrých alebo suchých vlasov.',
        attributes: [
          { label: 'Avocado', value: 'Hlboká oprava, výživa, uhladenie končekov (všetky typy)' },
          { label: 'Coconut', value: 'Emolientný, hydratačný, lesk (suché, krepovité)' },
          { label: 'Papaya', value: 'Hydratácia, lesk, antifrizz (všetky typy)' }
        ]
      }
    ]
  },
  {
    title: 'Liss Repair – hladké a chránené vlasy',
    products: [
      {
        id: 'liss-repair-shampoo',
        name: 'Liss Repair Shampoo 280 ml',
        imageQuery: 'liss_shampoo',
        description: 'Šampón, ktorý čistí a začína obnovovať vlasové vlákno. Obsahuje komplex Bio.Restore® s linolovou kyselinou, omega‑6, biofunkcionalizovanou cysteínovou a rastlinnými aminokyselinami, ktoré posilňujú a chránia vlasy pred poškodením z chemických procesov.',
        ingredientsText: 'voda, sodium lauryl ether sulfate, kokamid diethanolamín, chlorid sodný, parfum, kokamidopropylbetaín, dimetylhydantoín, lauromakrogol 400, guar hydroxypropyltrimonium gum chlorid, styren/akrylátový kopolymér, glycerín, macrogol, kyselina citrónová, fenoxyetanol, imidazolidinylurea, boritan sodný, síran sodný, laurylsulfát sodný, kyselina fumarová.',
        usage: 'naniesť na mokré vlasy, masírovať kým nevznikne krémová pena a opláchnuť; potom pokračovať ďalšími produktmi z radu Liss Repair.',
        attributes: [
          { label: 'Typ vlasov', value: 'rovné, chemicky narovnávané alebo prirodzene rovné' },
          { label: 'Očakávaný výsledok', value: 'čisté, hladké vlasy pripravené na ošetrenie' },
          { label: 'Sulfáty', value: 'obsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'neobsahuje' },
          { label: 'Alkoholy', value: 'neobsahuje' },
          { label: 'Vôňa', value: 'kvetinovo‑ovocná vôňa' }
        ]
      },
      {
        id: 'liss-repair-conditioner',
        name: 'Liss Repair Conditioner 200 ml',
        imageQuery: 'liss_conditioner',
        description: 'Kondicionér, ktorý uzatvára kutikulu a udržiava vlasy vyrovnané. Využíva technológiu Bio.Restore®, ktorá obnovuje, spevňuje a chráni vlasové vlákno.',
        ingredientsText: 'voda, cetostearyl alkohol, kukuričné olejové glyceridy, sorbitol, beentrimónium chlorid, parfum, izopropyl myristát, dimetylhydantoín, propylénglykol diheptanoát, cetomacrogol 1000, metikón, karbocysteín, hydrolyzovaný pšeničný proteín, polyquaternium‑10, cetrimónium chlorid, etylalkohol, macrogol, kyselina citrónová, citran sodný, fenoxyetanol, dimetyl palmitamín.',
        usage: 'po umytí šampónom naniesť kondicionér od strednej dĺžky ku končekom, počkať 2–3 minúty a opláchnuť.',
        attributes: [
          { label: 'Typ vlasov', value: 'rovné, chemicky narovnané' },
          { label: 'Očakávaný výsledok', value: 'hladké, mäkké a lesklé vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje metikón' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'jemná parfumácia' }
        ]
      },
      {
        id: 'liss-repair-mask',
        name: 'Liss Repair Reconstructive Mask 180 g',
        imageQuery: 'liss_mask',
        description: 'Intenzívna maska, ktorá vďaka technológii Bio.Restore® poskytuje výživu, hydratáciu a posilnenie. Zlepšuje vnútornú štruktúru vlasu a zanecháva ho pružný a lesklý.',
        ingredientsText: 'voda, cetostearyl alkohol, beentrimónium chlorid, parfum, kukuričné olejové glyceridy, sorbitol, izopropyl myristát, cetyl palmitát, cetomacrogol 1000, metikón, polyquaternium‑55, xylityl sesquicaprylate, dimetylhydantoín, propylénglykol diheptanoát, karbocysteín, hydrolyzovaný pšeničný proteín, polyquaternium‑10, anhydroxylitol, cetrimónium chlorid, fenoxyetanol, etylalkohol, macrogol, caprylyl glycol, kyselina citrónová, citran sodný, dimetyl palmitamín.',
        usage: 'po umytí šampónom naniesť masku, nechať pôsobiť 7–10 minút a opláchnuť; používať 1–3 krát týždenne.',
        attributes: [
          { label: 'Typ vlasov', value: 'poškodené, suché, chemicky narovnané' },
          { label: 'Očakávaný výsledok', value: 'silnejšie, pružné a lesklé vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje silikóny' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'jemná parfumácia' }
        ]
      },
      {
        id: 'liss-repair-thermal',
        name: 'Liss Repair Thermal Protector 150 ml',
        imageQuery: 'liss_thermal',
        description: 'Bezoplachový krém s technológiou Bio.Restore®, ktorý chráni vlasy pred tepelným stylingom (sušič, žehlička). Posilňuje vnútornú štruktúru vlasu, opravuje škody a navracia lesk.',
        ingredientsText: 'voda, cetostearyl alkohol, beentrimónium chlorid, cetyl alkohol, parfum, kukuričné olejové glyceridy, sorbitol, izopropyl myristát, cetyl palmitát, cetomacrogol 1000, metikón, polyquaternium‑55, xylityl sesquicaprylate, dimetylhydantoín, propylénglykol diheptanoát, karbocysteín, hydrolyzovaný pšeničný proteín, polyquaternium‑10, anhydroxylitol, cetrimónium chlorid, fenoxyetanol, etylalkohol, macrogol, caprylyl glycol, kyselina citrónová, citran sodný, dimetyl palmitamín.',
        usage: 'pred použitím pretrepať; po ošetrení vlasov naniesť malé množstvo do dlaní a aplikovať na dĺžky vlasov pred fénovaním alebo žehlením.',
        attributes: [
          { label: 'Typ vlasov', value: 'rovné, chemicky narovnané, citlivé na teplo' },
          { label: 'Očakávaný výsledok', value: 'chránené, lesklé a hladké vlasy' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje silikóny' },
          { label: 'Alkoholy', value: 'obsahuje etylalkohol' },
          { label: 'Vôňa', value: 'jemná parfumácia' }
        ]
      },
      {
        id: 'liss-repair-serum',
        name: 'Liss Repair Finishing Serum 30 ml',
        imageQuery: 'liss_serum',
        description: 'Sérum na dokončenie účesu s technológiou Bio.Restore®. Zarovnáva vlasy, posilňuje vlasové vlákno a predlžuje efekt narovnaných vlasov; vhodné pre prirodzene alebo chemicky rovné vlasy.',
        ingredientsText: 'decametylcyklopentasiloxán, isododekán, dimethiconol, parfum, kokosový olej, cyklohexasiloxán, metikón, voda, karbocysteín, polyquaternium‑10, hydrolyzovaný pšeničný proteín, kyselina citrónová, citran sodný, fenoxyetanol.',
        usage: 'naniesť pár kvapiek na dlane a rozotrieť od strednej dĺžky ku končekom vlasov.',
        attributes: [
          { label: 'Typ vlasov', value: 'rovné (prirodzené alebo chemicky narovnané)' },
          { label: 'Očakávaný výsledok', value: 'lesklé, uhladené vlasy bez frizzu' },
          { label: 'Sulfáty', value: 'neobsahuje' },
          { label: 'Parabény', value: 'neobsahuje' },
          { label: 'Silikóny', value: 'obsahuje dimethiconol, metikón' },
          { label: 'Alkoholy', value: 'neobsahuje silné alkoholy' },
          { label: 'Vôňa', value: 'jemná parfumácia' }
        ]
      }
    ]
  },
  {
    title: 'Kit a ďalšie produkty',
    products: [
      {
        id: 'kit-liss',
        name: 'Kit Liss Repair Shampoo + Conditioner',
        imageQuery: 'kit_liss',
        description: 'Táto súprava kombinuje šampón a kondicionér Liss Repair. Spoločný opis a zloženie sú rovnaké ako pri jednotlivých produktoch.',
        ingredientsText: 'Viď jednotlivé produkty (Shampoo + Conditioner)',
        usage: 'vlasy umyť šampónom, opláchnuť a následne použiť kondicionér; pre lepší efekt pokračovať ďalšími produktmi z radu.',
        attributes: []
      },
      {
        id: 'kit-blond',
        name: 'Blond Repair Illuminating Kit',
        imageQuery: 'kit_blond',
        description: 'Šampón a kondicionér pre blond, zosvetlené alebo bielené vlasy. Obsahujú komplex BioRestore® a vitamín C, ktorý posilňuje vnútornú štruktúru vlasov, opravuje poškodenie z chemických procesov a dodáva lesk. Kondicionér pomáha uzatvárať kutikulu.',
        ingredientsText: 'BioRestore® Complex, vitamín C, špeciálne pigmenty.',
        usage: 'naniesť šampón na vlhké vlasy, masírovať a opláchnuť; následne použiť kondicionér na dĺžky vlasov, nechať pôsobiť 2–3 minúty a opláchnuť.',
        attributes: [
          { label: 'Hlavné výhody', value: 'chráni a udržiava blond odtiene, redukuje žltý tón, posilňuje a hydratuje vlasy' }
        ]
      },
      {
        id: 'less-poo',
        name: 'Less Poo – jemný čistiaci šampón',
        imageQuery: 'less_poo',
        description: 'Jemný čistiaci šampón (známy ako „Less Poo“) je súčasťou blogových článkov Yamá. Nová verzia obsahuje kyselinu hyalurónovú a rastlinný kolagén, ktoré poskytujú hlbokú hydratáciu a zároveň šetrne čistia vlasy. Vhodný pre všetky typy vlasov vrátane kučeravých a suchých, ktoré preferujú menej agresívne čistenie.',
        ingredientsText: 'kyselina hyalurónová, rastlinný kolagén, jemné surfaktanty.',
        usage: 'Ideálne na „Low Poo“ alebo „CoWash“ metódu.',
        attributes: [
          { label: 'Hlavné výhody', value: 'veľmi jemné čistenie bez agresívnych sulfátov, hydratácia a zmäkčenie vlasov' }
        ]
      },
      {
        id: 'yamaliss-travel',
        name: 'Yamaliss a cestovné balenia',
        imageQuery: 'yamaliss',
        description: 'Niektoré produkty (Yamaliss Kit Blond Smoothing 120 ml, Yamaliss Kit Natural Smoothing 120 ml a sáčky Double SH & Mask) nemajú dostupné podrobné stránky v anglickej verzii. Ide o keratínové vyhladzovacie súpravy a jednorazové balenia šampónu a masky.',
        ingredientsText: 'Keratín, vyrovnávacie zložky.',
        usage: 'Odporúča sa popísať ich ako cestovné alebo skúšobné veľkosti príslušných radov Liss Repair alebo Hair Food.',
        attributes: []
      }
    ]
  }
];
