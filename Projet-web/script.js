
const products = [
    
    { name: 'Commode Zellige Sculptée', category: 'mobilier', price: '18 500 MAD', img: 'https://i.etsystatic.com/32696640/r/il/83043e/6122564868/il_340x270.6122564868_r41z.jpg' },
    { name: 'Banquette Moucharabieh', category: 'mobilier', price: '9 800 MAD', img: 'https://image.invaluable.com/housePhotos/Tajan/74/629174/H0965-L156292127_original.jpg' },
    { name: "Armoire Berbère de l'Atlas", category: 'mobilier', price: '24 000 MAD', img: 'https://a.1stdibscdn.com/moroccan-hand-crafted-painted-and-carved-berber-style-wardrobe-for-sale/f_8880/f_409964121723134918293/f_40996412_1723134920058_bg_processed.jpg?width=768' },
    { name: 'Table Basse Marqueterie', category: 'mobilier', price: '6 500 MAD', img: 'https://www.idfdesign.fr/photos/tables-classiques-de-luxe/art-222-r-petite-tables-de-luxe-sculpte-a-la-main.jpg' },
    { name: 'Bureau Moucharabieh', category: 'mobilier', price: '32 000 MAD', img: 'https://bigoffice.ma/wp-content/uploads/2025/11/table-de-reunion-design-moucharabieh-MDF-1.png' },
    { name: 'Coffre de Mariée Tafilalet', category: 'mobilier', price: '12 000 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uZC8wQw-96pTlF75Mgu6APMUYn4VqcWhJg&s' },
    { name: 'Lit à Baldaquin Andalou', category: 'mobilier', price: '45 000 MAD', img: 'https://www.univers-ciel-de-lit.com/_i/175928/10889/2452/92/lit-baldaquin-adulte-rouge-renaissance.jpeg' },

    
    { name: 'Vase Zellij Bleu de Fès', category: 'ceramique', price: '4 200 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVrnzz8-oUWWKTBQqvnOZnDpY1msQdL3aSA&s' },
    { name: 'Tajine Cérémoniel Gravé', category: 'ceramique', price: '3 600 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkE7jpNR8ccZ2X94tXDxPMbZ90EHq9c3RaQ&s' },
    { name: 'Fontaine Zellige Miniature', category: 'ceramique', price: '7 500 MAD', img: 'https://i.etsystatic.com/34444554/r/il/93ce8c/7782921703/il_fullxfull.7782921703_eecv.jpg' },
    { name: 'Poterie Berbère Amazigh', category: 'ceramique', price: '2 900 MAD', img: 'https://i.pinimg.com/474x/cc/5e/75/cc5e751021c8a722d4c4b615219709ae.jpg' },
    { name: 'Amphore Tamegroute Noire', category: 'ceramique', price: '8 400 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9lySqyWZh5ePoN3kmFbtIXOC9kbfPSY-qA&s' },
    { name: 'Service à Thé Fassi', category: 'ceramique', price: '6 800 MAD', img: 'https://daradyafa.com/cdn/shop/files/SNGOLDSILVER33_1200x1200.webp?v=1713748420' },

  
    { name: 'Miniature Orientaliste', category: 'tableau', price: '14 000 MAD', img: 'https://a.1stdibscdn.com/exceptional-quality-miniature-painting-of-an-orientalist-turkish-dancer-1860-for-sale/f_73862/f_313923521668887044098/f_31392352_1668887044384_bg_processed.jpg?width=768' },
    { name: 'Médina de Marrakech', category: 'tableau', price: '8 800 MAD', img: 'https://cdng.europosters.eu/pod_public/1300/157509.jpg' },
    { name: 'Calligraphie Arabe', category: 'tableau', price: '5 500 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvQheU5BbneHE1mdn2w-MTyreGEgKSo3Phg&s' },
    { name: 'Huile Souk de Fès', category: 'tableau', price: '22 000 MAD', img: 'https://imgprivate2.artprice.com/get/classifieds/ebd0/53d1/4d55/15d5/d669/767f/4cad/6dc8/e161/01b7/1024/1024/Maurice-GUIRAUD-RIVIERE-Scene-de-souk-a-Fes-au-Mar-1699460282.jpg' },
    { name: 'Portrait Femme Amazigh', category: 'tableau', price: '16 500 MAD', img: 'https://urbanart.ma/8266-large_default/tableau-decoratif-femme-berbere.jpg' },

   
    { name: 'Collier Amazigh Argent', category: 'bijou', price: '5 800 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-ncuPWm9Gi8b7CzdwrF9NpjqEnt3pbplyQ&s' },
    { name: 'Fibule Double Tisfri', category: 'bijou', price: '9 500 MAD', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/MAP_Paris_Fibules_04032012_1.jpg/250px-MAP_Paris_Fibules_04032012_1.jpg' },
    { name: 'Bague Chevalière Fès', category: 'bijou', price: '13 500 MAD', img: 'https://graazie.com/wp-content/uploads/2025/01/Chevaliere-Rimbaud-ovale-en-argent-gravee-1U7A6658.jpg' },
    { name: 'Ceinture Argent Repoussé', category: 'bijou', price: '7 800 MAD', img: 'https://i.etsystatic.com/7460334/r/il/44745d/3677957320/il_570xN.3677957320_8ex9.jpg' },
    { name: 'Bracelet Manchette', category: 'bijou', price: '6 200 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi8wAbwFavKEQXW75Z0gVD_pTS6FFAtKodw&s' },

    
    { name: 'Horloge de Mosquée', category: 'horloge', price: '28 000 MAD', img: 'https://medias.gazette-drouot.com/prod/medias/mediatheque/88945.jpg' },
    { name: 'Montre Gousset Argent', category: 'horloge', price: '7 200 MAD', img: 'https://votre-horloge-murale.com/cdn/shop/files/montre-a-gousset-personnalise-2.jpg?v=1730882207' },
    { name: 'Pendule Moorish', category: 'horloge', price: '11 500 MAD', img: 'https://www.1001pendules.fr/pendules_images/produits/2195-1-1-_prd.jpg' },
    { name: 'Montre de Poche Sultan', category: 'horloge', price: '15 000 MAD', img: 'https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/43/256966/1.jpg?0905' },

    
    { name: 'Tapis Moyen Atlas', category: 'textile', price: '22 000 MAD', img: 'https://cinumedpub.mmsh.fr/prosper-ricard_tapis/Planche-13.jpg' },
    { name: 'Caftan de Cour Brodé', category: 'textile', price: '18 500 MAD', img: 'https://www.shutterstock.com/image-photo/elegant-moroccan-caftan-traditional-embroidery-600nw-2635542823.jpg' },
    { name: 'Klim Haouz Antique', category: 'textile', price: '35 000 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJe4duutXfvIhS2t10aKaAoby6NMgH50ZYg&s' },
    { name: 'Handira de Mariage', category: 'textile', price: '6 800 MAD', img: 'https://www.casablancax.com/wp-content/uploads/2025/05/C254D2B8-EDA4-4041-A161-D8007EC51A1A.jpeg' },

  
    { name: 'Plateau Cuivre Gravé', category: 'bronze', price: '5 200 MAD', img: 'https://m.media-amazon.com/images/I/81XZUUB40KS._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Mortier Bronze XVIIIe', category: 'bronze', price: '7 500 MAD', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-i6dTpUL6kaayDboz_fZooKMoSwFaltmeGQ&s' },
    { name: 'Encensoir Argent Bronze', category: 'bronze', price: '12 000 MAD', img: 'https://fesstore.ma/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-06-a-21.37.35_9fef9528.jpg' },
    { name: 'Koummya Argent Gravée', category: 'arme', price: '8 900 MAD', img: 'https://www.proantic.com/galerie/coridon/img/1704963-698b738c55fcc.jpg' },
    { name: 'Sabre Sultanien', category: 'arme', price: '24 000 MAD', img: 'https://balp-france.fr/img/p/8/6/6/866.jpg' }
];


function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = ''; 

    products.forEach(p => {
        if (filter === 'all' || p.category === filter) {
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${p.img}" class="product-img" alt="${p.name}">
                    <div class="product-info">
                        <h3>${p.name}</h3>
                        <p class="product-price">${p.price}</p>
                        <button class="btn" onclick="addToCart('${p.name}')" style="width:100%; margin-top:10px;">Acheter</button>
                    </div>
                </div>
            `;
        }
    });
}


function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    window.scrollTo(0, 0);
}

function filterProducts(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(cat);
}

function addToCart(name) {
    const t = document.getElementById('toast');
    t.textContent = `✓ ${name} ajouté !`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}
renderProducts('all');