function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('open');
  }

  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  let slideIndex = 0;
  const slides = document.querySelectorAll('.testimonial');
  function goSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    document.getElementById('testimonialsTrack').style.transform = `translateX(-${slideIndex * 100}%)`;
  }
  function nextSlide() { goSlide(slideIndex + 1); }
  function prevSlide() { goSlide(slideIndex - 1); }
  setInterval(nextSlide, 6000);

 //eeach product has an uniqe usplash image 
  const products = [
    // MOBILIER (unique items only)
    {
      id: 1,
      name: 'Commode Zellige Sculptée',
      era: 'XIXe siècle',
      category: 'mobilier',
      price: '18 500 MAD',
      origin: 'Fès, Maroc',
      desc: 'Bois de cèdre sculpté à la main, incrustations de zellige bleu de Fès. Tiroirs d\'origine, ferrures en laiton. Pièce unique certifiée.',
      badge: 'Rare',
      img: 'https://i.etsystatic.com/32696640/r/il/83043e/6122564868/il_340x270.6122564868_r41z.jpg'
    },
    {
      id: 2,
      name: 'Banquette Moucharabieh',
      era: 'Début XXe s.',
      category: 'mobilier',
      price: '9 800 MAD',
      origin: 'Meknès, Maroc',
      desc: 'Structure bois de thuya, lattes tressées, coussin cuir tannée végétal. Travail artisanal de Meknès. Parfait état de conservation.',
      badge: '',
      img: 'https://image.invaluable.com/housePhotos/Tajan/74/629174/H0965-L156292127_original.jpg'
    },
    {
      id: 3,
      name: "Armoire Berbère de l'Atlas",
      era: 'XVIIIe siècle',
      category: 'mobilier',
      price: '24 000 MAD',
      origin: 'Haut-Atlas, Maroc',
      desc: 'Peuplier massif, peintures tribales originales aux pigments naturels ocre et indigo. Serrure en fer forgé d\'époque. Authentique.',
      badge: 'Exclusif',
      img: 'https://a.1stdibscdn.com/moroccan-hand-crafted-painted-and-carved-berber-style-wardrobe-for-sale/f_8880/f_409964121723134918293/f_40996412_1723134920058_bg_processed.jpg?width=768'
    },
    {
      id: 4,
      name: 'Table Basse Marqueterie Thuya',
      era: '1930',
      category: 'mobilier',
      price: '6 500 MAD',
      origin: 'Essaouira, Maroc',
      desc: "Essence de thuya d'Essaouira, marqueterie citronnier et ébène. Plateau vitré de protection. Artisanat d'exception Art Déco.",
      badge: '',
      img: 'https://www.idfdesign.fr/photos/tables-classiques-de-luxe/art-222-r-petite-tables-de-luxe-sculpte-a-la-main.jpg'
    },
    {
      id: 5,
      name: 'Bureau Moucharabieh Sculpté',
      era: '1890',
      category: 'mobilier',
      price: '32 000 MAD',
      origin: 'Fès, Maroc',
      desc: "Cèdre de l'Atlas, panneau moucharabieh percé à la main, tiroirs à poignées laiton. Plateau cuir vert. Majestueux.",
      badge: 'Coup de cœur',
      img: 'https://bigoffice.ma/wp-content/uploads/2025/11/table-de-reunion-design-moucharabieh-MDF-1.png'
    },
    {
      id: 6,
      name: 'Coffre de Mariée Tafilalet',
      era: 'XIXe siècle',
      category: 'mobilier',
      price: '12 000 MAD',
      origin: 'Tafilalet, Maroc',
      desc: 'Bois peint à la main, serrure en fer forgé, motifs géométriques berbères. Doublure tissu d\'origine. Très rare hors région.',
      badge: 'Rare',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uZC8wQw-96pTlF75Mgu6APMUYn4VqcWhJg&s'
    },
    {
      id: 7,
      name: 'Lit à Baldaquin Andalou',
      era: 'XVIIIe siècle',
      category: 'mobilier',
      price: '45 000 MAD',
      origin: 'Tétouan, Maroc',
      desc: 'Cèdre massif, colonnes tournées, baldaquin soie brodée fils or. Héritage andalou-marocain unique. Certificat Ministère Culture.',
      badge: 'Exclusif',
      img: 'https://www.univers-ciel-de-lit.com/_i/175928/10889/2452/92/lit-baldaquin-adulte-rouge-renaissance.jpeg'
    },

    // ce
    {
      id: 8,
      name: 'Vase Zellij Bleu de Fès',
      era: 'XIXe siècle',
      category: 'ceramique',
      price: '4 200 MAD',
      origin: 'Fès, Maroc',
      desc: 'Poterie de Fès, émaux bleu cobalt et blanc laiteux, motifs géométriques entrelacés. Signé sous la base. Collection privée.',
      badge: '',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVrnzz8-oUWWKTBQqvnOZnDpY1msQdL3aSA&s'
    },
    {
      id: 9,
      name: 'Tajine Cérémoniel Gravé',
      era: 'XVIIIe siècle',
      category: 'ceramique',
      price: '3 600 MAD',
      origin: 'Salé, Maroc',
      desc: 'Terre cuite rouge de Salé, gravures florales et végétales au tour. Couvercle en dôme original. Usage strictement décoratif.',
      badge: 'Rare',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkE7jpNR8ccZ2X94tXDxPMbZ90EHq9c3RaQ&s'
    },
    {
      id: 10,
      name: 'Fontaine Zellige Miniature',
      era: '1900',
      category: 'ceramique',
      price: '7 500 MAD',
      origin: 'Fès, Maroc',
      desc: 'Fontaine de table en zellige multicolore sur structure cuivre argenté. Pompe mécanique d\'époque. Pièce exceptionnelle et unique.',
      badge: 'Exclusif',
      img: 'https://i.etsystatic.com/34444554/r/il/93ce8c/7782921703/il_fullxfull.7782921703_eecv.jpg'
    },
    {
      id: 11,
      name: 'Poterie Berbère Amazigh',
      era: 'XIXe siècle',
      category: 'ceramique',
      price: '2 900 MAD',
      origin: 'Tamegroute, Maroc',
      desc: "Argile noire caractéristique de Tamegroute, décors géométriques berbères incisés à la main. Authenticité certifiée. Rare hors région.",
      badge: '',
      img: 'https://i.pinimg.com/474x/cc/5e/75/cc5e751021c8a722d4c4b615219709ae.jpg'
    },
    {
      id: 12,
      name: 'Amphore Tamegroute Noire',
      era: '1870',
      category: 'ceramique',
      price: '8 400 MAD',
      origin: 'Tamegroute, Maroc',
      desc: "Argile noire caractéristique de Tamegroute, grande taille (68 cm), décors incisés profonds. Col à rebord. Pièce muséale.",
      badge: 'Coup de cœur',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9lySqyWZh5ePoN3kmFbtIXOC9kbfPSY-qA&s'
    },
    {
      id: 13,
      name: 'Service à Thé Fassi Complet',
      era: '1915',
      category: 'ceramique',
      price: '6 800 MAD',
      origin: 'Fès, Maroc',
      desc: 'Service 12 pièces en faïence de Fès, motifs arabesques bleu et blanc, état de collection. Théière, verres, plateau inclus.',
      badge: '',
      img: 'https://daradyafa.com/cdn/shop/files/SNGOLDSILVER33_1200x1200.webp?v=1713748420'
    },

    // TABLEAUX (unique items)
    {
      id: 14,
      name: 'Miniature Orientaliste',
      era: '1885',
      category: 'tableau',
      price: '14 000 MAD',
      origin: 'École de Paris',
      desc: 'Gouache sur ivoire, scène de souk marocain animée. École orientaliste européenne. Cadre bois doré d\'époque. Signé et daté.',
      badge: 'Signé',
      img: 'https://a.1stdibscdn.com/exceptional-quality-miniature-painting-of-an-orientalist-turkish-dancer-1860-for-sale/f_73862/f_313923521668887044098/f_31392352_1668887044384_bg_processed.jpg?width=768'
    },
    {
      id: 15,
      name: 'Aquarelle Médina de Marrakech',
      era: '1910',
      category: 'tableau',
      price: '8 800 MAD',
      origin: 'Marrakech, Maroc',
      desc: "Aquarelle sur papier Fabriano, vue sur la Koutoubia au coucher du soleil. Artiste anonyme. Très belle condition générale.",
      badge: '',
      img: 'https://cdng.europosters.eu/pod_public/1300/157509.jpg'
    },
    {
      id: 16,
      name: 'Calligraphie Arabe Encadrée',
      era: 'XIXe siècle',
      category: 'tableau',
      price: '5 500 MAD',
      origin: 'Fès, Maroc',
      desc: "Encre de Chine sur papier de Samarcande, sourate coranique en coufique fleuri. Cadre bois doré d'époque. Pièce spirituelle rare.",
      badge: 'Rare',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvQheU5BbneHE1mdn2w-MTyreGEgKSo3Phg&s'
    },
    {
      id: 17,
      name: 'Huile sur Toile Souk de Fès',
      era: '1895',
      category: 'tableau',
      price: '22 000 MAD',
      origin: 'Fès, Maroc',
      desc: "Huile sur toile marouflée, scène animée du souk El Attarine de Fès. Provenance collection d'État. Certificat d'authenticité.",
      badge: 'Exclusif',
      img: 'https://imgprivate2.artprice.com/get/classifieds/ebd0/53d1/4d55/15d5/d669/767f/4cad/6dc8/e161/01b7/1024/1024/Maurice-GUIRAUD-RIVIERE-Scene-de-souk-a-Fes-au-Mar-1699460282.jpg'
    },
    {
      id: 18,
      name: 'Portrait Femme Amazigh',
      era: '1900',
      category: 'tableau',
      price: '16 500 MAD',
      origin: 'Haut-Atlas, Maroc',
      desc: "Pastel sur papier, portrait d'une femme berbère en parure traditionnelle complète. Signé J. Renard. Cadre acajou doré.",
      badge: 'Coup de cœur',
      img: 'https://urbanart.ma/8266-large_default/tableau-decoratif-femme-berbere.jpg'
    },

    // BIJOUX (unique items)
    {
      id: 19,
      name: 'Collier Amazigh Argent',
      era: 'XIXe siècle',
      category: 'bijou',
      price: '5 800 MAD',
      origin: 'Atlas Central, Maroc',
      desc: 'Argent massif niellé, pendeloques corail rouge et ambre naturel. Bijou de fiançailles traditionnel. Fermoir crochet d\'origine.',
      badge: 'Coup de cœur',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-ncuPWm9Gi8b7CzdwrF9NpjqEnt3pbplyQ&s'
    },
    {
      id: 20,
      name: 'Fibule Double Tisfri',
      era: 'XVIIIe siècle',
      category: 'bijou',
      price: '9 500 MAD',
      origin: 'Souss, Maroc',
      desc: 'Argent, corail, émail cloisonné. Paire complète avec chaîne de liaison d\'origine. Très rare en parfait état de conservation.',
      badge: 'Rare',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/MAP_Paris_Fibules_04032012_1.jpg/250px-MAP_Paris_Fibules_04032012_1.jpg'
    },
    {
      id: 21,
      name: 'Bague Chevalière Fès',
      era: '1870',
      category: 'bijou',
      price: '13 500 MAD',
      origin: 'Souss-Massa, Maroc',
      desc: 'Argent doré, pierres de corail et turquoise, pendeloques mobiles. Bijou de mariée du Souss. Pièce unique certifiée.',
      badge: 'Exclusif',
      img: 'https://graazie.com/wp-content/uploads/2025/01/Chevaliere-Rimbaud-ovale-en-argent-gravee-1U7A6658.jpg'
    },
    {
      id: 22,
      name: 'Ceinture Argent Repoussé',
      era: 'XIXe siècle',
      category: 'bijou',
      price: '7 800 MAD',
      origin: 'Marrakech, Maroc',
      desc: 'Argent massif repoussé, plaques articulées, motifs floraux et géométriques. Ceinture de cérémonie. Fermoir en argent massif.',
      badge: 'Rare',
      img: 'https://i.etsystatic.com/7460334/r/il/44745d/3677957320/il_570xN.3677957320_8ex9.jpg'
    },
    {
      id: 23,
      name: 'Bracelet Manchette Tislit',
      era: 'XVIIIe siècle',
      category: 'bijou',
      price: '6 200 MAD',
      origin: 'Tiznit, Maroc',
      desc: 'Argent massif gravé, ouverture à charnière, motifs amazighs géométriques. Format manchette rare. Provenance collection privée.',
      badge: 'Coup de cœur',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi8wAbwFavKEQXW75Z0gVD_pTS6FFAtKodw&s'
    },

    // HORLOGERIE (unique items)
    {
      id: 24,
      name: 'Horloge de Mosquée Ottomane',
      era: 'XIXe siècle',
      category: 'horloge',
      price: '28 000 MAD',
      origin: 'Istanbul / Maroc',
      desc: 'Boîtier laiton doré, cadran arabe et latin, mécanisme Westminster. Provenance mosquée historique. Pièce rarissime en état de marche.',
      badge: 'Exclusif',
      img: 'https://medias.gazette-drouot.com/prod/medias/mediatheque/88945.jpg'
    },
    {
      id: 25,
      name: 'Montre de Gousset Gravée',
      era: '1895',
      category: 'horloge',
      price: '7 200 MAD',
      origin: 'Suisse / Maroc',
      desc: 'Boîtier argent niellé à décor arabesque, mouvement suisse 17 rubis. Parfaite marche assurée. Chaîne Albert d\'origine incluse.',
      badge: 'Signé',
      img: 'https://votre-horloge-murale.com/cdn/shop/files/montre-a-gousset-personnalise-2.jpg?v=1730882207'
    },
    {
      id: 26,
      name: 'Pendule de Table Moorish',
      era: '1910',
      category: 'horloge',
      price: '11 500 MAD',
      origin: 'France / Maroc',
      desc: "Boîtier bronze doré à décor mauresque, carillon sonnant les quarts d'heure, socle marbre noir. Entretien récent.",
      badge: '',
      img: 'https://www.1001pendules.fr/pendules_images/produits/2195-1-1-_prd.jpg'
    },
    {
      id: 27,
      name: 'Montre de Poche Sultan',
      era: '1870',
      category: 'horloge',
      price: '15 000 MAD',
      origin: 'Genève / Palais Royal',
      desc: 'Savonnette or 18 carats, cadran chiffres arabes dorés, mouvement Patek vintage. Provenance palais. Exceptionnel état.',
      badge: 'Exclusif',
      img: 'https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/43/256966/1.jpg?0905'
    },

    // TEXTILES (unique items)
    {
      id: 28,
      name: 'Tapis Berbère Moyen Atlas',
      era: 'XIXe siècle',
      category: 'textile',
      price: '22 000 MAD',
      origin: 'Moyen Atlas, Maroc',
      desc: 'Laine nouée à la main, motifs losanges et croix amazighes, rouge et ivoire sur fond naturel. Authenticité certifiée par expert.',
      badge: 'Rare',
      img: 'https://cinumedpub.mmsh.fr/prosper-ricard_tapis/Planche-13.jpg'
    },
    {
      id: 29,
      name: 'Caftan de Cour Brodé',
      era: '1880',
      category: 'textile',
      price: '18 500 MAD',
      origin: 'Fès, Maroc',
      desc: 'Velours grenat, broderies sfifa et maâlem dorées au fil passé, boutons dorés anciens. Habit de cérémonie de cour fassi.',
      badge: 'Exclusif',
      img: 'https://www.shutterstock.com/image-photo/elegant-moroccan-caftan-traditional-embroidery-600nw-2635542823.jpg'
    },
    {
      id: 30,
      name: 'Klim Haouz Antique',
      era: 'XVIIIe siècle',
      category: 'textile',
      price: '35 000 MAD',
      origin: 'Haouz, Maroc',
      desc: 'Tapisserie plate laine et soie, motifs abstraits Haouz, colorants végétaux d\'origine. Conservation remarquable. Qualité muséale.',
      badge: 'Coup de cœur',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJe4duutXfvIhS2t10aKaAoby6NMgH50ZYg&s'
    },
    {
      id: 31,
      name: 'Ceinture Handira de Mariage',
      era: 'XIXe siècle',
      category: 'textile',
      price: '6 800 MAD',
      origin: 'Moyen Atlas, Maroc',
      desc: 'Laine tissée main avec paillettes argent intégrées, handira de mariée berbère. Rarissime en état complet. Provenance familiale.',
      badge: 'Rare',
      img: 'https://www.casablancax.com/wp-content/uploads/2025/05/C254D2B8-EDA4-4041-A161-D8007EC51A1A.jpeg'
    },

    // BRONZES & CUIVRES (unique items)
    {
      id: 32,
      name: 'Plateau Cuivre Gravé Tawriq',
      era: 'XIXe siècle',
      category: 'bronze',
      price: '5 200 MAD',
      origin: 'Meknès, Maroc',
      desc: 'Cuivre battu et gravé, motifs arabesques et calligraphie, 80 cm de diamètre. Pied en bois sculpté inclus. Somptueux travail.',
      badge: '',
      img: 'https://m.media-amazon.com/images/I/81XZUUB40KS._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 33,
      name: 'Mortier Bronze Apothicaire',
      era: 'XVIIIe siècle',
      category: 'bronze',
      price: '7 500 MAD',
      origin: 'Fès, Maroc',
      desc: 'Bronze à patine ancienne vert-de-gris, gravures latines et arabes, pilon assorti. Provenance officine médicale historique. Rare.',
      badge: 'Rare',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-i6dTpUL6kaayDboz_fZooKMoSwFaltmeGQ&s'
    },
    {
      id: 34,
      name: 'Encensoir Mosquée Argent Bronze',
      era: '1860',
      category: 'bronze',
      price: '12 000 MAD',
      origin: 'Marrakech, Maroc',
      desc: "Encensoir cérémoniel, alliage argent-bronze, chaînes originales à 3 brins, décor arabesque d'époque. Usage religieux authentique.",
      badge: 'Exclusif',
      img: 'https://fesstore.ma/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-06-a-21.37.35_9fef9528.jpg'
    },

    // ARMES DÉCORATIVES (unique items)
    {
      id: 35,
      name: 'Koummya Argent Gravée',
      era: 'XIXe siècle',
      category: 'arme',
      price: '8 900 MAD',
      origin: 'Maroc',
      desc: 'Poignard cérémoniel courbé, manche argent massif niellé, fourreau cuir et argent ciselé. Lame inactivée. Usage strictement décoratif.',
      badge: 'Coup de cœur',
      img: 'https://www.proantic.com/galerie/coridon/img/1704963-698b738c55fcc.jpg'
    },
    {
      id: 36,
      name: 'Sabre de Cérémonie Sultanien',
      era: 'XVIIIe siècle',
      category: 'arme',
      price: '24 000 MAD',
      origin: 'Palais Royal, Maroc',
      desc: "Lame acier damas à motifs ondés, garde dorée filigranée, fourreau velours rouge et or. Héritage palatial. Usage décoratif exclusif.",
      badge: 'Exclusif',
      img: 'https://balp-france.fr/img/p/8/6/6/866.jpg'
    },
  ];

  function renderProducts(category) {
    const grid = document.getElementById('productsGrid');
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    grid.innerHTML = filtered.map(p => `
      <div class="product-card" data-id="${p.id}">
        <div class="product-img img-loading">
          <img
            src="${p.img}"
            alt="${p.name}"
            loading="lazy"
            onload="this.parentElement.classList.remove('img-loading')"
            onerror="this.style.display='none'; this.parentElement.classList.remove('img-loading'); this.parentElement.innerHTML += '<div class=\\'product-img-fallback\\'>🏺</div>${p.badge ? '<span class="product-badge">' + p.badge + '</span>' : ''}';"
          />
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-era">${p.era}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-origin"> ${p.origin}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-footer">
            <div class="product-price">${p.price}</div>
            <button class="add-cart-btn" onclick="addToCart('${p.name}')">+ Panier</button>
          </div>
        </div>
      </div>
    `).join('');
  }
  renderProducts('all');

  function filterProducts(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(cat);
  }

  function addToCart(name) {
    const t = document.getElementById('toast');
    t.textContent = `✓ "${name}" ajouté au panier !`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }

  // Gallery uses same products as a curated selection
  const galleryItems = [
    { img: 'https://i.etsystatic.com/32696640/r/il/83043e/6122564868/il_340x270.6122564868_r41z.jpg', title: 'Commode Zellige Sculptée', desc: 'Bois de cèdre, incrustations zellige, XIXe siècle, Fès' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-ncuPWm9Gi8b7CzdwrF9NpjqEnt3pbplyQ&s', title: 'Collier Amazigh Argent', desc: 'Argent niellé et corail rouge, Atlas Central, XIXe s.' },
    { img: 'https://medias.gazette-drouot.com/prod/medias/mediatheque/88945.jpg', title: 'Horloge de Mosquée Ottomane', desc: 'Laiton doré, cadran arabe, mécanisme Westminster, XIXe s.' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVrnzz8-oUWWKTBQqvnOZnDpY1msQdL3aSA&s', title: 'Vase Zellij Bleu de Fès', desc: 'Poterie émaillée XIXe siècle, manufacture de Fès' },
    { img: 'https://a.1stdibscdn.com/exceptional-quality-miniature-painting-of-an-orientalist-turkish-dancer-1860-for-sale/f_73862/f_313923521668887044098/f_31392352_1668887044384_bg_processed.jpg?width=768', title: 'Miniature Orientaliste', desc: 'Gouache sur ivoire, scène de souk, École Paris, 1885' },
    { img: 'https://cinumedpub.mmsh.fr/prosper-ricard_tapis/Planche-13.jpg', title: 'Tapis Berbère Moyen Atlas', desc: 'Laine nouée, motifs amazighs, rouge et ivoire, XIXe s.' },
    { img: 'https://www.idfdesign.fr/photos/tables-classiques-de-luxe/art-222-r-petite-tables-de-luxe-sculpte-a-la-main.jpg', title: 'Table Marqueterie Thuya', desc: "Bois de thuya d'Essaouira, citronnier et ébène, 1930" },
    { img: 'https://www.shutterstock.com/image-photo/elegant-moroccan-caftan-traditional-embroidery-600nw-2635542823.jpg', title: 'Caftan de Cour Brodé', desc: 'Velours grenat, broderies dorées sfifa, Fès, 1880' },
    { img: 'https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/43/256966/1.jpg?0905', title: 'Montre de Gousset Gravée', desc: 'Argent niellé arabesque, mouvement suisse 17 rubis, 1895' },
    { img: 'https://imgprivate2.artprice.com/get/classifieds/ebd0/53d1/4d55/15d5/d669/767f/4cad/6dc8/e161/01b7/1024/1024/Maurice-GUIRAUD-RIVIERE-Scene-de-souk-a-Fes-au-Mar-1699460282.jpg', title: 'Huile sur Toile Souk de Fès', desc: 'Scène animée souk El Attarine, collection État, 1895' },
    { img: 'https://a.1stdibscdn.com/moroccan-hand-crafted-painted-and-carved-berber-style-wardrobe-for-sale/f_8880/f_409964121723134918293/f_40996412_1723134920058_bg_processed.jpg?width=768', title: "Armoire Berbère de l'Atlas", desc: "Peuplier massif, peintures tribales, pigments naturels, XVIIIe s." },
  ];

  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = galleryItems.map((item, i) => `
      <div class="gallery-item" onclick="openLightbox(${i})">
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
        <div class="gallery-overlay">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  }
  renderGallery();

  function openLightbox(i) {
    const item = galleryItems[i];
    document.getElementById('lightboxImg').innerHTML = `<img src="${item.img}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;" />`;
    document.getElementById('lightboxCaption').textContent = item.title + ' — ' + item.desc;
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox(e) {
    if (!e || e.target === document.getElementById('lightbox') || e.target.classList.contains('lightbox-close')) {
      document.getElementById('lightbox').classList.remove('open');
    }
  }

  function submitForm() {
    const prenom = document.getElementById('fPrenom').value.trim();
    const email  = document.getElementById('fEmail').value.trim();
    const sujet  = document.getElementById('fSujet').value;
    const msg    = document.getElementById('fMessage').value.trim();
    if (!prenom || !email || !sujet || !msg) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    document.getElementById('formMsg').classList.add('show');
    ['fPrenom','fNom','fEmail','fMessage'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('fSujet').selectedIndex = 0;
  }