(function () {
    function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    function injectDynamicFixes() {
        if (document.getElementById('tw-dynamic-v7-fixes')) return;
        var style = document.createElement('style');
        style.id = 'tw-dynamic-v7-fixes';
        style.textContent =
            '#sliderWrapper, .slider-before, .slider-after, .fake-browser, .new-browser-bar, .old-content, .new-content { direction: ltr !important; text-align: left !important; }' +
            '.slider-info { direction: ltr !important; display: flex !important; justify-content: space-between !important; align-items: center !important; }' +
            '.slider-clip { z-index: 6 !important; }' +
            '.old-label { z-index: 7 !important; left: 20px !important; right: auto !important; transition: opacity 0.25s ease, transform 0.25s ease !important; }' +
            '.new-label { z-index: 4 !important; right: 20px !important; left: auto !important; transition: opacity 0.25s ease, transform 0.25s ease !important; }' +
            '.slider-handle { z-index: 12 !important; }' +
            '.devis-card-box { position: relative !important; overflow: hidden !important; border: 2px solid var(--glass-border) !important; box-shadow: 0 24px 60px -12px rgba(0, 184, 163, 0.22) !important; }' +
            'html.light .devis-card-box { background: linear-gradient(165deg, #FFFFFF 0%, #F0F7F6 100%) !important; border-color: rgba(0, 138, 122, 0.45) !important; box-shadow: 0 25px 55px -12px rgba(5, 21, 35, 0.16) !important; }' +
            '.devis-progress-track { width: 100%; height: 6px; background: var(--bg3); border-radius: 50px; overflow: hidden; margin-bottom: 28px; border: 1px solid var(--border-color); }' +
            '.devis-progress-fill { height: 100%; width: 25%; background: var(--gradient); border-radius: 50px; transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 0 12px rgba(0, 184, 163, 0.5); }' +
            '.secteur-btn { position: relative !important; padding: 22px 16px !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 6px !important; border: 1.5px solid var(--border-color) !important; border-radius: 18px !important; }' +
            'html.light .secteur-btn { background: #FFFFFF !important; border-color: rgba(0, 138, 122, 0.28) !important; box-shadow: 0 6px 18px rgba(5, 21, 35, 0.06) !important; }' +
            '.secteur-btn:hover { transform: translateY(-4px) !important; border-color: var(--primary) !important; box-shadow: 0 12px 26px -6px rgba(0, 184, 163, 0.3) !important; }' +
            '.secteur-btn .sb-icon { width: 48px !important; height: 48px !important; border-radius: 14px !important; background: rgba(0, 184, 163, 0.12) !important; border: 1px solid rgba(0, 184, 163, 0.3) !important; display: flex !important; align-items: center !important; justify-content: center !important; margin-bottom: 6px !important; transition: all 0.35s ease !important; }' +
            '.secteur-btn.selected { border: 2px solid var(--primary) !important; background: rgba(0, 184, 163, 0.14) !important; transform: translateY(-3px) !important; }' +
            'html.light .secteur-btn.selected { background: linear-gradient(145deg, rgba(0, 184, 163, 0.16) 0%, rgba(212, 225, 87, 0.18) 100%) !important; border-color: #008A7A !important; }' +
            '.secteur-btn.selected .sb-icon { background: var(--gradient) !important; color: #020B13 !important; border-color: transparent !important; }' +
            '.secteur-btn .sb-sub { font-size: 0.73rem; color: var(--text-muted); font-weight: 500; line-height: 1.3; }' +
            'html.light .service-type-btn, html.light .option-check { background: #FFFFFF !important; border-color: rgba(0, 138, 122, 0.28) !important; box-shadow: 0 4px 14px rgba(5, 21, 35, 0.05) !important; }' +
            'html.light .service-type-btn.selected, html.light .option-check.checked { background: rgba(0, 184, 163, 0.14) !important; border-color: #008A7A !important; }' +
            '.devis-trust-bar { margin-top: 26px; padding-top: 18px; border-top: 1px dashed var(--border-color); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }' +
            '.devis-trust-item { display: inline-flex; align-items: center; gap: 7px; font-size: 0.78rem; font-weight: 700; color: var(--text-muted); }' +
            '.devis-trust-item svg { width: 15px; height: 15px; color: var(--primary); flex-shrink: 0; }';
        document.head.appendChild(style);
    }

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's'))
        ) {
            e.preventDefault();
            return false;
        }
    });

    var i18nData = {
        fr: {
            nav: ['Services', 'Portfolio', 'Notre Process', 'Équipe', 'Blog', 'Devis Gratuit'],
            hero_badge: 'Ouarzazate & Drâa-Tafilalet, Maroc',
            hero_title: 'Solutions digitales <span class="gradient-text">accessibles pour les PMEs</span> au Maroc',
            hero_sub: 'Accompagnement digital sur-mesure à Ouarzazate, Drâa-Tafilalet et partout au Maroc :',
            hero_pills: [
                ['building-2', 'Hôtels & Riads'],
                ['utensils', 'Restaurants & Cafés'],
                ['shopping-bag', 'Commerces & Boutiques'],
                ['briefcase', 'Artisans & Services']
            ],
            hero_btn_1: 'Configurer mon projet',
            hero_btn_2: 'Voir nos réalisations',
            pillars: [
                ['Visibilité 24/7', 'Être trouvé en tête sur Google par vos clients'],
                ['Crédibilité', 'Inspirer confiance avec un site web et un logo professionnel'],
                ['Conversion & KPI', 'Transformer vos visiteurs en clients directs']
            ],
            slider: {
                tag: 'Transformation Digitale',
                title: 'Avant <span class="gradient-text">&amp;</span> Après',
                sub: 'Glissez le curseur pour comparer un site web confus avec une expérience TechWeb moderne',
                old_lbl: 'AVANT',
                new_lbl: 'APRÈS',
                avant_tag: '← Site confus, lent, non adapté au téléphone',
                apres_tag: 'TechWeb — Design moderne, performant et rentable →'
            },
            services: {
                tag: 'Services',
                title: "Nos 3 <span class=\"gradient-text\">Pôles d'Expertise</span>",
                sub: 'Des solutions ciblées et efficaces : création de sites web sur-mesure, référencement Google SEO, logos et affiches publicitaires',
                poles: [
                    {
                        num: 'Pôle 01',
                        title: 'Création de Sites Web Sur-Mesure',
                        desc: 'Des sites web modernes, ultra-rapides et 100% responsive. De la vitrine professionnelle à la boutique e-commerce complète.',
                        list: ['Site Vitrine Professionnel', 'E-commerce & Boutique en ligne', 'Landing Page haute conversion', 'Design UI/UX moderne (Mobile & PC)', 'Connexion directe avec WhatsApp', 'Déploiement rapide & sécurisé (SSL)'],
                        btn: 'Créer mon site web'
                    },
                    {
                        num: 'Pôle 02',
                        title: 'SEO Google, Performance & Maintenance',
                        desc: 'Dominez les recherches Google dans votre ville et gardez un site rapide, sécurisé et mesuré en continu.',
                        list: ['Référencement SEO Local & National', 'Optimisation de vitesse (PageSpeed 95+)', 'Indexation Google Search Console', 'Suivi des visiteurs (Google Analytics 4)', 'Maintenance & mises à jour régulières', 'Formation client pour gérer le site'],
                        btn: 'Optimiser ma visibilité'
                    },
                    {
                        num: 'Pôle 03',
                        title: 'Logos & Affiches Publicitaires',
                        desc: 'Une identité visuelle claire et percutante : nous concevons votre logo professionnel ainsi que vos bannières et affiches publicitaires.',
                        list: ['Création de Logo professionnel sur-mesure', 'Palette de couleurs & Typographie de marque', 'Affiches & Bannières publicitaires', 'Visuels promotionnels pour vos offres', 'Design moderne haute résolution', 'Fichiers sources prêts à utiliser'],
                        btn: 'Créer mon identité'
                    }
                ]
            },
            portfolio: {
                tag: 'Portfolio',
                title: 'Nos <span class="gradient-text">Réalisations Live</span>',
                sub: 'Découvrez et testez en direct les plateformes web conçues et déployées par notre équipe',
                banner: '<strong>Projets Web en ligne [Site Live]</strong> — Cliquez sur <strong>"Tester ici en direct"</strong> pour naviguer dans chaque site en temps réel (Mode PC ou Mobile).',
                preview_btn: 'Tester ici en direct',
                cards: [
                    { badge: 'Site Live', cat: 'E-Commerce & Parfumerie', title: 'AbdePerfumes', desc: "Boutique e-commerce de parfums de luxe. Catalogue interactif, filtrage par notes olfactives, panier dynamique et commande rapide sur mobile.", btns: ['Visiter le site Live', 'Commander similaire'] },
                    { badge: 'Site Live', cat: 'Restauration & Plateforme Web', title: 'Lokma Solidaire', desc: 'Plateforme web moderne dédiée à la gastronomie solidaire et aux coopératives. Menu digital, réservations en ligne et storytelling immersif.', btns: ['Visiter le site Live', 'Commander similaire'] }
                ]
            },
            process: {
                tag: 'Notre Process',
                title: 'Comment nous <span class="gradient-text">travaillons</span>',
                sub: 'Un processus structuré en 6 phases pour garantir la qualité, la transparence et votre satisfaction à chaque étape',
                phase: 'PHASE',
                steps: [
                    ['Contact & Brief', 'Premier échange pour comprendre votre activité, vos objectifs, votre clientèle cible et votre budget.'],
                    ['Onboarding & Cahier des charges', 'Élaboration du cahier des charges détaillé, choix des fonctionnalités, structure du site et planning précis de livraison.'],
                    ['Production (UI/UX, Code & Design)', 'Maquettage UI/UX sur Figma, développement du code sur VS Code/GitHub, et création de votre identité visuelle.'],
                    ['Validation & Corrections', 'Présentation du site sur un lien de prévisualisation. Vous testez et validez chaque détail avec notre équipe.'],
                    ['Livraison, Mise en ligne & Formation', 'Mise en ligne officielle avec votre nom de domaine (.ma / .com), certificat SSL et formation client.'],
                    ['Maintenance & Analyse KPI', 'Suivi des performances (Google Analytics 4 & Search Console), sécurité continue et accompagnement technique.']
                ]
            },
            team: {
                tag: 'Équipe',
                title: "Notre Équipe d'Experts",
                sub: 'Une équipe passionnée, complémentaire et dédiée à la réussite digitale de nos clients',
                roles: [
                    'Co-Fondateur & Lead Full-Stack Developer',
                    'Co-Fondateur & Directeur UI/UX Design',
                    'Vice-Présidente, Stratégie, SEO & KPI',
                    'Directeur Financier, Devis & Tarification',
                    'Créatrice de Contenu Vidéo & Ambassadrice de Marque',
                    'Producteur Vidéo & Montage Reels'
                ]
            },
            blog: {
                tag: 'Blog',
                title: 'Ressources & <span class="gradient-text">Conseils</span>',
                sub: 'Guides pratiques et analyses détaillées pour aider les entrepreneurs marocains à réussir leur présence en ligne',
                cards: [
                    ['UI/UX Design', 'UX vs UI Design : Pourquoi votre site web a besoin des deux pour convertir vos visiteurs en clients ?', "Découvrez la différence fondamentale entre UX et UI, avec tableau comparatif des performances et taux de conversion...", "Lire l'article complet"],
                    ['Création Web & SEO', 'Comment créer un site web professionnel et rentable au Maroc en 2026 ? (Grille des tarifs & SEO)', 'Guide complet pour les entrepreneurs marocains : budget réaliste en MAD, délais, étapes et stratégie SEO Google...', "Lire l'article complet"],
                    ['Digital Local', 'Hôtels, Restaurants, Commerces et Artisans à Ouarzazate : Pourquoi un site web officiel est indispensable.', 'Comparatif détaillé Réseaux Sociaux vs Site Officiel et études de cas concrètes pour Ouarzazate et Drâa-Tafilalet...', "Lire l'article complet"]
                ],
                modals: [
                    {
                        tag: 'UI/UX Design · TechWeb Blog',
                        title: 'UX vs UI Design : Pourquoi votre site web a besoin des deux pour convertir vos visiteurs en clients ?',
                        body: '<p>Dans le monde du design digital, deux termes reviennent constamment : <strong>UX (User Experience)</strong> et <strong>UI (User Interface)</strong>. Ce sont deux disciplines complémentaires mais distinctes, et négliger l\'une ou l\'autre peut sérieusement nuire à vos performances commerciales.</p>' +
                            '<h3>1. Qu\'est-ce que l\'UI Design (L\'Interface Visuelle) ?</h3>' +
                            '<p>L\'UI Design concerne tout ce que l\'utilisateur <em>voit</em> sur votre site web : les couleurs, la typographie, les boutons, les cartes et les animations.</p>' +
                            '<ul><li>Palette de couleurs cohérente avec votre identité de marque</li><li>Typographie lisible et hiérarchisée sur mobile et PC</li><li>Boutons d\'action (Call-to-Action) clairs et engageants</li></ul>' +
                            '<h3>2. Qu\'est-ce que l\'UX Design (L\'Expérience Utilisateur) ?</h3>' +
                            '<p>L\'UX Design concerne ce que votre visiteur <em>ressent</em> en naviguant : la rapidité de chargement, la clarté du menu et la simplicité pour commander ou réserver en moins de 3 clics.</p>' +
                            '<h3>3. Comparaison : Site Amateur vs Site TechWeb</h3>' +
                            '<table class="modal-table"><thead><tr><th>Critère</th><th>Site sans UX/UI</th><th>Site TechWeb</th></tr></thead><tbody>' +
                            '<tr><td>Taux de rebond</td><td class="check-red">70 – 90%</td><td class="check-green">&lt; 35%</td></tr>' +
                            '<tr><td>Temps sur le site</td><td class="check-red">&lt; 30 secondes</td><td class="check-green">2 – 5 minutes</td></tr>' +
                            '<tr><td>Taux de conversion</td><td class="check-red">&lt; 1%</td><td class="check-green">4 – 9%</td></tr>' +
                            '<tr><td>Score Google PageSpeed</td><td class="check-red">25 – 50 / 100</td><td class="check-green">95 – 100 / 100</td></tr>' +
                            '<tr><td>Confiance des clients</td><td class="check-red">Faible</td><td class="check-green">Maximale</td></tr>' +
                            '</tbody></table>'
                    },
                    {
                        tag: 'Création Web & SEO · TechWeb Blog',
                        title: 'Comment créer un site web professionnel et rentable au Maroc en 2026 ? (Du Brief au SEO Google)',
                        body: '<p>En 2026, avoir un site web professionnel n\'est plus une option pour les PMEs marocaines — c\'est votre commercial actif 24h/24 au Maroc et à l\'international.</p>' +
                            '<h3>Étape 1 : Définir votre cahier des charges</h3>' +
                            '<ul><li>Quel est votre objectif principal ? (Réservations directes, ventes e-commerce, demandes de devis)</li><li>Quelle est votre cible ? (Touristes internationaux, clients locaux, entreprises B2B)</li></ul>' +
                            '<h3>Étape 2 : Comprendre les budgets réalistes au Maroc</h3>' +
                            '<table class="modal-table"><thead><tr><th>Type de Projet</th><th>Budget Moyen (MAD)</th><th>Délai de Livraison</th></tr></thead><tbody>' +
                            '<tr><td>Landing Page Haute Conversion</td><td>800 – 2 000 MAD</td><td>3 – 5 jours</td></tr>' +
                            '<tr><td>Site Vitrine Professionnel (3–5 pages)</td><td>1 500 – 4 000 MAD</td><td>1 – 2 semaines</td></tr>' +
                            '<tr><td>Boutique E-commerce Complète</td><td>4 000 – 10 000 MAD</td><td>2 – 4 semaines</td></tr>' +
                            '<tr><td>Option Multilingue (FR / AR / EN)</td><td>+500 – 1 200 MAD</td><td>+3 jours</td></tr>' +
                            '</tbody></table>' +
                            '<h3>Étape 3 : Dominer Google avec le SEO Local</h3>' +
                            '<p>Chez TechWeb, chaque site est livré avec une architecture SEO optimisée pour Google Search Console, des balises Schema.org locales et une vitesse de chargement supérieure à 95/100.</p>'
                    },
                    {
                        tag: 'Digital Local · TechWeb Blog',
                        title: 'Hôtels, Restaurants, Commerces et Artisans à Ouarzazate : Pourquoi un site web officiel est indispensable.',
                        body: '<p>Se contenter d\'une page Instagram ou Facebook sans site web officiel vous fait perdre plus de 70% des clients qui cherchent vos services directement sur Google.</p>' +
                            '<h3>Comparaison : Réseaux Sociaux seuls vs Site Web Officiel</h3>' +
                            '<table class="modal-table"><thead><tr><th>Critère</th><th>Réseaux Sociaux</th><th>Site Web Officiel TechWeb</th></tr></thead><tbody>' +
                            '<tr><td>Propriété de la plateforme</td><td class="check-red">Non (risque de blocage)</td><td class="check-green">Oui (100% à vous)</td></tr>' +
                            '<tr><td>Visibilité sur Google</td><td class="check-red">Très limitée</td><td class="check-green">Référencement SEO 24/7</td></tr>' +
                            '<tr><td>Réservations sans commission</td><td class="check-red">Difficile</td><td class="check-green">0% de commission</td></tr>' +
                            '<tr><td>Crédibilité internationale</td><td class="check-red">Partielle</td><td class="check-green">Élevée (Domaine .ma / .com)</td></tr>' +
                            '</tbody></table>' +
                            '<h4>Hôtels, Riads & Maisons d\'hôtes</h4>' +
                            '<p>Un touriste qui tape "Riad Ouarzazate" sur Google réserve sur les sites officiels bien référencés. Économisez les 15% à 20% de commission des plateformes tierces.</p>' +
                            '<h4>Restaurants, Commerces & Coopératives</h4>' +
                            '<p>Présentez votre menu interactif ou votre catalogue de produits du terroir avec commande directe sur WhatsApp en un clic.</p>'
                    }
                ]
            },
            faq: {
                tag: 'Questions Fréquentes',
                title: 'Tout savoir avant de <span class="gradient-text">lancer votre projet</span>',
                sub: 'Des réponses claires et transparentes aux questions les plus posées par nos clients',
                items: [
                    ['Combien de temps prend la création d’un site web ?', 'Selon la taille de votre projet : une Landing Page prend entre 3 et 5 jours, un Site Vitrine professionnel entre 1 et 2 semaines, et une boutique E-commerce complète entre 2 et 3 semaines.'],
                    ['Est-ce que je peux demander un site avec ou sans nom de domaine (.ma / .com) ?', 'Oui ! Dans notre configurateur ci-dessous, vous pouvez choisir un pack clé en main incluant votre nom de domaine officiel (.ma ou .com) et son hébergement, ou utiliser votre propre domaine.'],
                    ['Comment se passe le suivi et la formation après la livraison ?', 'À la livraison, nous vous formons sur l’utilisation de votre site web et nous configurons Google Analytics 4 et Google Search Console pour suivre vos visiteurs.'],
                    ['Proposez-vous aussi la création de logo et d’affiches publicitaires ?', 'Tout à fait. En plus du développement web, notre pôle design conçoit votre Logo professionnel sur-mesure ainsi que vos bannières et affiches publicitaires.']
                ]
            },
            devis: {
                tag: 'Devis Gratuit',
                title: 'Configurez <span class="gradient-text">votre projet</span>',
                sub: 'Répondez à 3 questions simples et recevez une estimation personnalisée via WhatsApp',
                steps_lbl: ['Secteur', 'Service', 'Domaine & Options', 'Envoyer'],
                step1_title: "Quel est votre secteur d'activité ?",
                secteurs: ['Hôtel / Riad', 'Restaurant / Café', 'Commerce / Boutique', 'Artisan / Coopérative', 'Service Professionnel', 'Autre Projet'],
                secteurs_sub: ['Réservation & Galerie', 'Menu QR & Commandes', 'Catalogue & Ventes', 'Produits du Terroir', 'Agences & Cabinets', 'Projet Sur-Mesure'],
                step2_title: 'Quel service vous intéresse ?',
                services: [
                    ['Site Vitrine Professionnel', 'Présentez votre activité et vos services 24h/24'],
                    ['Boutique E-commerce', 'Catalogue produits et vente en ligne'],
                    ['Landing Page', 'Page unique rapide à haute conversion'],
                    ['Refonte de Site Web', 'Moderniser et accélérer un site existant'],
                    ['Logo & Affiches Publicitaires', 'Création de Logo + Bannières publicitaires'],
                    ['Pack Complet (Site Web + Logo & Affiches)', 'Site web sur-mesure + Logo + Bannières publicitaires']
                ],
                step3_title: 'Nom de Domaine & Options supplémentaires',
                domain_q: '1. Souhaitez-vous votre site avec un Nom de Domaine officiel (.ma / .com) ?',
                domain_yes_title: 'Avec Nom de Domaine (.ma / .com)',
                domain_yes_desc: 'Domaine officiel personnalisé + Hébergement rapide & SSL inclus',
                domain_no_title: 'Sans Nom de Domaine',
                domain_no_desc: "J'ai déjà un domaine ou je préfère un hébergement gratuit",
                opt_q: '2. Options supplémentaires (cliquez pour cocher) :',
                opts: [
                    { val: 'SEO Local Google', label: 'Référencement SEO Local Google' },
                    { val: 'Maintenance mensuelle', label: 'Maintenance & Sécurité mensuelle' },
                    { val: 'Multilingue FR/AR/EN', label: 'Site Multilingue (FR / AR / EN)' },
                    { val: 'Formation client', label: 'Formation client pour gérer le site' },
                    { val: 'Google Analytics 4', label: 'Suivi visiteurs Google Analytics 4' },
                    { val: 'Logo & Affiche Publicitaire', label: 'Ajout Logo ou Affiche Publicitaire' }
                ],
                next: 'Suivant',
                back: 'Retour',
                see_summary: 'Voir le résumé',
                step4_title: 'Résumé de votre demande',
                sum_heading: 'Votre projet :',
                lbl_secteur: 'Secteur',
                lbl_service: 'Service',
                lbl_domaine: 'Nom de Domaine',
                lbl_options: 'Options',
                none: 'Aucune option supplémentaire',
                step4_note: "En cliquant sur le bouton ci-dessous, votre demande s'ouvrira dans WhatsApp (+212 711-218301).",
                send_wa: 'Envoyer via WhatsApp',
                trust: ['Réponse garantie sous 2h', 'Devis 100% Gratuit', 'Sans engagement'],
                alert_secteur: "Veuillez sélectionner votre secteur d'activité.",
                alert_service: 'Veuillez sélectionner un service.'
            },
            footer: {
                desc: 'Agence digitale spécialisée en création de sites web sur-mesure, référencement SEO Google, logos et affiches publicitaires à Ouarzazate et partout au Maroc.',
                col1_title: 'Nos Services',
                srv: ['Création de Sites Web', 'Sites E-Commerce', 'SEO Local & National', 'Logos & Affiches Publicitaires', 'Maintenance & Sécurité Web'],
                col2_title: 'Contact Direct',
                copy: '© 2026 TechWeb — techweb.devs · Tous droits réservés · Ouarzazate, Maroc',
                made: 'Conçu avec passion à Ouarzazate',
                seo_text: "<strong>Zones d'intervention &amp; Expertises :</strong> Agence digitale et développeur web à Ouarzazate, Drâa-Tafilalet et partout au Maroc — Création de site web sur-mesure (hôtel, riad, restaurant, commerce, coopérative, boutique e-commerce), référencement SEO local Google, création de logo professionnel et affiches publicitaires.",
                float_wa: 'WhatsApp Direct • Réponse rapide'
            }
        },
        ar: {
            nav: ['خدماتنا', 'أعمالنا', 'منهجيتنا', 'فريقنا', 'مدونة', 'طلب عرض سعر'],
            hero_badge: 'ورزازات ودرعة تافيلالت، المغرب',
            hero_title: 'حلول رقمية في متناول <span class="gradient-text">المقاولات الصغيرة والمتوسطة</span> بالمغرب',
            hero_sub: 'مواكبة رقمية متكاملة في ورزازات، درعة تافيلالت وجميع أنحاء المغرب:',
            hero_pills: [
                ['building-2', 'فنادق ورياضات'],
                ['utensils', 'مطاعم ومقاهي'],
                ['shopping-bag', 'محلات ومتاجر'],
                ['briefcase', 'حرفيون وخدمات']
            ],
            hero_btn_1: 'صمّم مشروعي الآن',
            hero_btn_2: 'تصفح أعمالنا الحية',
            pillars: [
                ['الظهور الرقمي 24/7', 'الظهور في الصدارة على محرك البحث Google'],
                ['المصداقية والثقة', 'إلهام الثقة بموقع إلكتروني رسمي وشعار احترافي'],
                ['التحويل والأداء', 'تحويل زوار الموقع إلى زبناء مباشرين']
            ],
            slider: {
                tag: 'التحول الرقمي',
                title: 'قبل <span class="gradient-text">و</span> بعد',
                sub: 'اسحب المؤشر لمقارنة موقع قديم غير منظم مع تجربة TechWeb العصرية والسريعة',
                old_lbl: 'قبل',
                new_lbl: 'بعد',
                avant_tag: '← موقع قديم، بطيء وغير متجاوب مع الهاتف',
                apres_tag: 'TechWeb — تصميم عصري، سريع ويجلب الزبناء →'
            },
            services: {
                tag: 'خدماتنا',
                title: 'أقطاب <span class="gradient-text">خبرتنا الثلاثة</span>',
                sub: 'خدمات مركزة واحترافية: برمجة المواقع الإلكترونية، تصدر نتائج البحث Google SEO، وتصميم الشعارات واللافتات الإشهارية',
                poles: [
                    {
                        num: 'القطب 01',
                        title: 'إنشاء وتطوير المواقع الإلكترونية',
                        desc: 'مواقع إلكترونية عصرية، سريعة ومتجاوبة 100% مع الهاتف والحاسوب، من المواقع التعريفية إلى المتاجر الإلكترونية.',
                        list: ['موقع تعريفي احترافي (Site Vitrine)', 'متجر إلكتروني متكامل (E-commerce)', 'صفحة هبوط عالية التحويل (Landing Page)', 'تصميم واجهات UI/UX عصرية وسهلة الاستخدام', 'ربط مباشر للطلبات والحجوزات مع واتساب', 'استضافة سريعة وشهادة حماية SSL'],
                        btn: 'أنشئ موقعي الآن'
                    },
                    {
                        num: 'القطب 02',
                        title: 'تهيئة محركات البحث (SEO) والصيانة',
                        desc: 'تصدر نتائج البحث في Google بمدينتك وفي المغرب، مع ضمان سرعة وأمان موقعك وتتبع إحصائيات الزوار.',
                        list: ['السيو المحلي والوطني (SEO Google)', 'تحسين سرعة التحميل (PageSpeed 95+)', 'ربط الموقع بـ Google Search Console', 'تتبع عدد الزوار والنتائج (Google Analytics 4)', 'صيانة وتحديثات تقنية مستمرة', 'تكوين الزبون لكيفية تسيير الموقع'],
                        btn: 'طوّر ظهور موقعي'
                    },
                    {
                        num: 'القطب 03',
                        title: 'تصميم الشعارات واللافتات الإشهارية',
                        desc: 'هوية بصرية نظيفة واحترافية لمشروعك: نصمم لك الشعار (Logo) واللافتات الإشهارية الخاصة بنشاطك التجاري.',
                        list: ['تصميم الشعار الاحترافي (Logo Design)', 'اختيار الألوان والخطوط المتناسقة مع مشروعك', 'تصميم لافتات إشهارية احترافية (Affiches & Bannières)', 'تصاميم إعلانية للعروض والخدمات', 'جودة عالية جاهزة للاستعمال الرقمي أو الطباعة', 'تسليم الملفات الأصلية بدقة عالية'],
                        btn: 'صمّم شعاري ولافتتي'
                    }
                ]
            },
            portfolio: {
                tag: 'أعمالنا',
                title: 'مشاريعنا <span class="gradient-text">المنجزة (Live)</span>',
                sub: 'تصفح وجرب مباشرة المواقع الإلكترونية الحقيقية التي قام فريقنا ببرمجتها وتصميمها',
                banner: '<strong>مواقع إلكترونية حية [Site Live]</strong> — اضغط على <strong>"تصفح الموقع مباشرة هنا"</strong> لتجربة الموقع الحي داخل الصفحة (بوضع الحاسوب أو الهاتف).',
                preview_btn: 'تصفح الموقع مباشرة هنا',
                cards: [
                    { badge: 'موقع حي Live', cat: 'التجارة الإلكترونية والعطور', title: 'AbdePerfumes', desc: 'متجر إلكتروني لبيع العطور الفاخرة. كتالوج منتجات تفاعلي، سلة مشتريات، وتجربة تصفح وشراء سريعة جداً على الهاتف.', btns: ['زيارة الموقع الحي', 'اطلب موقعاً مشابهاً'] },
                    { badge: 'موقع حي Live', cat: 'المطاعم والمنصات الرقمية', title: 'Lokma Solidaire', desc: 'منصة ويب عصرية لعرض الوجبات والمنتجات المحلية والتعاونيات، مع قائمة طعام تفاعلية ونظام طلب مباشر وسهل.', btns: ['زيارة الموقع الحي', 'اطلب موقعاً مشابهاً'] }
                ]
            },
            process: {
                tag: 'منهجيتنا',
                title: 'كيف <span class="gradient-text">نشتغل معك؟</span>',
                sub: 'مسار عمل منظم في 6 مراحل لضمان الجودة، الشفافية ورضاك التام في كل خطوة',
                phase: 'مرحلة',
                steps: [
                    ['التواصل وتحديد الاحتياج (Brief)', 'أول تواصل لفهم نشاطك، أهدافك، فئتك المستهدفة وميزانيتك.'],
                    ['دفتر التحملات والتخطيط (Onboarding)', 'إعداد دفتر التحملات، تحديد صفحات وخصائص الموقع، والاتفاق على موعد التسليم.'],
                    ['الإنتاج (تصميم UI/UX، برمجة وشعار)', 'تصميم الواجهة على Figma، برمجة الكود النظيف على VS Code و GitHub، وتصميم الشعار واللافتات الإشهارية.'],
                    ['المراجعة والتعديلات (Validation)', 'عرض الموقع التجريبي عليك لتجربته وإدخال التعديلات المطلوبة حتى تكون راضياً 100%.'],
                    ['التسليم، النشر وتكوين الزبون', 'نشر الموقع رسمياً مع اسم النطاق (.ma / .com) وشهادة SSL، مع شرح عملي لكيفية استخدامه.'],
                    ['الصيانة وتتبع النتائج (KPI)', 'مواكبة تقنية وتتبع إحصائيات الزوار عبر Google Analytics 4 و Search Console.']
                ]
            },
            team: {
                tag: 'فريقنا',
                title: 'فريق الخبراء والمؤسسين',
                sub: 'فريق شغوف ومتكامل مكرّس لنجاح عملائنا في بناء مواقعهم وهويتهم الرقمية',
                roles: [
                    'مؤسس مشارك ومطور Full-Stack رئيسي',
                    'مؤسس مشارك ومدير UI/UX Design',
                    'نائبة الرئيس، الاستراتيجية، SEO والمؤشرات',
                    'المدير المالي، دراسة المشاريع والتسعير',
                    'صانعة محتوى مرئي والوجه الإعلامي للشركة',
                    'منتج فيديو ومونتاج Reels'
                ]
            },
            blog: {
                tag: 'المدونة',
                title: 'موارد <span class="gradient-text">ونصائح</span>',
                sub: 'أدلة عملية وتحليلات مفصلة لمساعدة المقاولين بالمغرب على نجاح مشروعهم الإلكتروني',
                cards: [
                    ['تصميم UI/UX', 'UX مقابل UI Design: لماذا يحتاج موقعك إلى الاثنين معاً لتحويل الزوار إلى زبناء؟', 'اكتشف الفرق الجوهري بين جمالية الواجهة (UI) وسهولة الاستخدام (UX) مع جدول مقارنة الأداء...', 'اقرأ المقال كاملاً'],
                    ['إنشاء المواقع و SEO', 'كيف تنشئ موقعاً إلكترونياً احترافياً ومربحاً في المغرب سنة 2026؟ (جدول الأسعار والسيو)', 'دليل شامل حول المراحل، التكلفة الواقعية بالدرهم، واستراتيجية تصدر نتائج البحث في Google...', 'اقرأ المقال كاملاً'],
                    ['الرقمنة المحلية', 'فنادق، مطاعم، تجار وحرفيون في ورزازات: لماذا يعتبر الموقع الرسمي ضرورياً لمشروعك؟', 'مقارنة شاملة بين شبكات التواصل والموقع الرسمي مع أمثلة واقعية من ورزازات ودرعة تافيلالت...', 'اقرأ المقال كاملاً']
                ],
                modals: [
                    {
                        tag: 'تصميم UI/UX · مدونة TechWeb',
                        title: 'UX مقابل UI Design: لماذا يحتاج موقعك إلى الاثنين معاً لتحويل الزوار إلى زبناء؟',
                        body: '<p>في مجال إنشاء المواقع الإلكترونية، يتردد مصطلحان أساسيان دائماً: <strong>UI (واجهة المستخدم)</strong> و <strong>UX (تجربة المستخدم)</strong>. الجمع بينهما هو السر الذي يجعل الزائر يثق فيك ويتحول إلى زبون فعلي.</p>' +
                            '<h3>1. ما هو الـ UI Design (جمالية الواجهة)؟</h3>' +
                            '<p>الـ UI هو كل ما <em>يراه</em> الزبون بعينه بمجرد دخول موقعك: تناسق الألوان، وضوح الخطوط، جمالية الأزرار، واحترافية الشعار (Logo) واللافتات الإشهارية.</p>' +
                            '<h3>2. ما هو الـ UX Design (سهولة التجربة)؟</h3>' +
                            '<p>الـ UX هو <em>السهولة والسرعة</em> التي يشعر بها الزبون أثناء تصفح موقعك على الهاتف: سرعة التحميل، وضوح الأقسام، والوصول إلى الطلب أو الحجز في أقل من 3 نقرات.</p>' +
                            '<h3>3. جدول مقارنة: موقع عادي مقابل موقع TechWeb</h3>' +
                            '<table class="modal-table"><thead><tr><th>المعيار</th><th>موقع بدون UX/UI</th><th>موقع TechWeb</th></tr></thead><tbody>' +
                            '<tr><td>معدل مغادرة الصفحة</td><td class="check-red">70 – 90%</td><td class="check-green">أقل من 35%</td></tr>' +
                            '<tr><td>مدة البقاء في الموقع</td><td class="check-red">أقل من 30 ثانية</td><td class="check-green">2 إلى 5 دقائق</td></tr>' +
                            '<tr><td>نسبة تحويل الزوار لزبناء</td><td class="check-red">أقل من 1%</td><td class="check-green">4 إلى 9%</td></tr>' +
                            '<tr><td>سرعة Google PageSpeed</td><td class="check-red">25 – 50 / 100</td><td class="check-green">95 – 100 / 100</td></tr>' +
                            '</tbody></table>'
                    },
                    {
                        tag: 'إنشاء المواقع و SEO · مدونة TechWeb',
                        title: 'كيف تنشئ موقعاً إلكترونياً احترافياً ومربحاً في المغرب سنة 2026؟',
                        body: '<p>امتلاك موقع إلكتروني احترافي في 2026 هو الواجهة الرسمية والمحل التجاري المفتوح 24/24 ساعة لجلب الزبناء في ورزازات وجميع مدن المغرب.</p>' +
                            '<h3>المرحلة 1: فهم التكلفة الواقعية في السوق المغربي</h3>' +
                            '<table class="modal-table"><thead><tr><th>نوع الموقع</th><th>التكلفة التقريبية (درهم)</th><th>مدة الإنجاز</th></tr></thead><tbody>' +
                            '<tr><td>صفحة هبوط (Landing Page)</td><td>800 – 2 000 درهم</td><td>3 – 5 أيام</td></tr>' +
                            '<tr><td>موقع تعريفي احترافي (Site Vitrine)</td><td>1 500 – 4 000 درهم</td><td>1 – 2 أسابيع</td></tr>' +
                            '<tr><td>متجر إلكتروني متكامل (E-commerce)</td><td>4 000 – 10 000 درهم</td><td>2 – 4 أسابيع</td></tr>' +
                            '<tr><td>إضافة تعدد اللغات (FR / AR / EN)</td><td>+500 – 1 200 درهم</td><td>+3 أيام</td></tr>' +
                            '</tbody></table>' +
                            '<h3>المرحلة 2: تصدر نتائج البحث في Google (SEO Local)</h3>' +
                            '<p>نربط موقعك منذ اليوم الأول بـ Google Search Console و Google Analytics 4 مع تهيئة الكلمات المفتاحية المحلية ليتصدر مشروعك نتائج البحث.</p>'
                    },
                    {
                        tag: 'الرقمنة المحلية · مدونة TechWeb',
                        title: 'فنادق، مطاعم، تجار وحرفيون في ورزازات: لماذا يعتبر الموقع الرسمي ضرورياً لمشروعك؟',
                        body: '<p>الاعتماد على إنستغرام أو فيسبوك وحدهما يجعل مشروعك يفقد أكثر من 70% من الزبناء والسياح الذين يبحثون مباشرة في محرك البحث Google.</p>' +
                            '<h3>مقارنة: شبكات التواصل وحدها مقابل الموقع الرسمي</h3>' +
                            '<table class="modal-table"><thead><tr><th>المعيار</th><th>شبكات التواصل الاجتماعي</th><th>الموقع الرسمي TechWeb</th></tr></thead><tbody>' +
                            '<tr><td>ملكية المنصة</td><td class="check-red">غير مضمونة (خطر الإغلاق)</td><td class="check-green">ملكك 100%</td></tr>' +
                            '<tr><td>الظهور في بحث Google</td><td class="check-red">ضعيف ومحدود</td><td class="check-green">مُهيأ للسيو 24/7</td></tr>' +
                            '<tr><td>حجوزات ومبيعات بدون عمولة</td><td class="check-red">صعب التنظيم</td><td class="check-green">0% عمولة مباشرة</td></tr>' +
                            '<tr><td>المصداقية المهنية</td><td class="check-red">جزئية</td><td class="check-green">عالية جداً (.ma / .com)</td></tr>' +
                            '</tbody></table>'
                    }
                ]
            },
            faq: {
                tag: 'أسئلة شائعة',
                title: 'كل ما يهمك قبل <span class="gradient-text">إطلاق مشروعك</span>',
                sub: 'إجابات واضحة ومباشرة على أكثر الأسئلة التي يطرحها زبناؤنا في ورزازات والمغرب',
                items: [
                    ['كم يستغرق الوقت لإنشاء موقع إلكتروني كامل؟', 'حسب نوع المشروع: صفحة الهبوط (Landing Page) تستغرق من 3 إلى 5 أيام، الموقع التعريفي الاحترافي (Site Vitrine) من أسبوع إلى أسبوعين، والمتجر الإلكتروني المتكامل من أسبوعين إلى 3 أسابيع.'],
                    ['هل يمكنني طلب الموقع مع اسم نطاق رسمي (.ma / .com) أو بدونه؟', 'نعم بالتأكيد! في أداة طلب عرض السعر أسفله، يمكنك الاختيار بين باقة شاملة تتضمن حجز اسم النطاق الرسمي (.ma أو .com) والاستضافة السريعة، أو اختيار برمجة الموقع فقط إذا كان لديك دومين خاص بك.'],
                    ['هل سأتمكن من إدارة موقعي بسهولة بعد التسليم؟', 'نعم، نقدم لك عند التسليم حصة تكوينية عملية ومبسطة لتعرف كيف تدير موقعك، كما نربطه بـ Google Analytics 4 و Search Console لتتبع عدد الزوار.'],
                    ['هل تصممون أيضاً الشعار (Logo) واللافتات الإشهارية؟', 'نعم، بالإضافة إلى برمجة المواقع الإلكترونية، يتكلف قطب التصميم لدينا بإنجاز الشعار الاحترافي (Logo) واللافتات الإشهارية (Affiches & Bannières) بدقة عالية.']
                ]
            },
            devis: {
                tag: 'طلب عرض سعر',
                title: 'صمّم <span class="gradient-text">مشروعك في 30 ثانية</span>',
                sub: 'أجب عن 3 أسئلة بسيطة وتوصل بعرض سعر فوري عبر واتساب',
                steps_lbl: ['القطاع', 'الخدمة', 'النطاق والخيارات', 'إرسال'],
                step1_title: 'ما هو قطاع نشاطك؟',
                secteurs: ['فندق / رياض', 'مطعم / مقهى', 'محل تجاري / متجر', 'صانع تقليدي / تعاونية', 'خدمات مهنية / شركة', 'مشروع آخر'],
                secteurs_sub: ['حجز مباشر ومعرض صور', 'قائمة QR وطلبات سريعة', 'كتالوج ومبيعات أونلاين', 'منتجات مجالية وتعاونيات', 'مكاتب وشركات خدمات', 'مشروع خاص حسب الطلب'],
                step2_title: 'ما هي الخدمة المطلوبة؟',
                services: [
                    ['موقع تعريفي (Site Vitrine)', 'قدّم مقاولتك وخدماتك باحترافية 24/24'],
                    ['متجر إلكتروني (E-commerce)', 'بع منتجاتك عبر الإنترنت مع طلب سريع'],
                    ['صفحة هبوط (Landing Page)', 'صفحة واحدة مركزة عالية التحويل'],
                    ['تجديد وتطوير موقع حالي (Refonte)', 'تحديث تصميم وسرعة موقعك القديم'],
                    ['تصميم شعار ولافتات إشهارية', 'تصميم الشعار (Logo) + لافتات إشهارية احترافية'],
                    ['الباقة الشاملة (موقع ويب + شعار ولافتات)', 'برمجة موقع إلكتروني كامل + الشعار + لافتات إشهارية']
                ],
                step3_title: 'اسم النطاق (Domaine) والخيارات الإضافية',
                domain_q: '1. هل تريد موقعك مع اسم نطاق رسمي (.ma / .com)؟',
                domain_yes_title: 'نعم، مع اسم نطاق رسمي (.ma / .com)',
                domain_yes_desc: 'حجز وإعداد الدومين الرسمي + استضافة سريعة وحماية SSL',
                domain_no_title: 'بدون اسم نطاق (Domaine)',
                domain_no_desc: 'لدي دومين مسبقاً أو أريد رابط استضافة مجاني',
                opt_q: '2. خيارات إضافية (اضغط للاختيار):',
                opts: [
                    { val: 'SEO Local Google', label: 'تهيئة الموقع لتصدر بحث Google (SEO)' },
                    { val: 'Maintenance mensuelle', label: 'صيانة وتحديثات شهرية للموقع' },
                    { val: 'Multilingue FR/AR/EN', label: 'موقع بـ 3 لغات (فرنسية / عربية / إنجليزية)' },
                    { val: 'Formation client', label: 'تكوين الزبون لإدارة الموقع' },
                    { val: 'Google Analytics 4', label: 'ربط إحصائيات الزوار Google Analytics 4' },
                    { val: 'Logo & Lafita Ichhariya', label: 'إضافة تصميم شعار (Logo) ولافتة إشهارية' }
                ],
                next: 'التالي',
                back: 'رجوع',
                see_summary: 'عرض الملخص',
                step4_title: 'ملخص طلبك',
                sum_heading: 'تفاصيل مشروعك:',
                lbl_secteur: 'القطاع',
                lbl_service: 'الخدمة المطلوبة',
                lbl_domaine: 'اسم النطاق (Domaine)',
                lbl_options: 'الخيارات الإضافية',
                none: 'بدون خيارات إضافية',
                step4_note: 'بالضغط على الزر أسفله، ستفتح رسالتك المنظمة مباشرة في واتساب (+212 711-218301).',
                send_wa: 'إرسال عبر واتساب',
                trust: ['رد مضمون في أقل من ساعتين', 'دراسة وعرض سعر مجاني 100%', 'بدون أي التزام مسبق'],
                alert_secteur: 'يرجى اختيار قطاع النشاط أولاً.',
                alert_service: 'يرجى اختيار الخدمة المطلوبة.'
            },
            footer: {
                desc: 'وكالة رقمية متخصصة في إنشاء وتطوير المواقع الإلكترونية العصرية، تهيئة محركات البحث Google SEO، وتصميم الشعارات واللافتات الإشهارية في ورزازات وجميع أنحاء المغرب.',
                col1_title: 'خدماتنا',
                srv: ['إنشاء المواقع الإلكترونية', 'المتاجر الإلكترونية (E-commerce)', 'تصدر نتائج البحث SEO Google', 'تصميم الشعارات واللافتات الإشهارية', 'صيانة وحماية المواقع'],
                col2_title: 'تواصل معنا',
                copy: '© 2026 TechWeb — techweb.devs · جميع الحقوق محفوظة · ورزازات، المغرب',
                made: 'صُمم بإتقان في ورزازات',
                seo_text: '<strong>مناطق التدخل والخبرات:</strong> وكالة رقمية ومطور مواقع ويب في ورزازات، درعة تافيلالت وجميع أنحاء المغرب — إنشاء مواقع إلكترونية حسب الطلب (فندق، رياض، مطعم، متجر إلكتروني، تعاونية)، تهيئة محركات البحث السيو المحلي Google SEO، وتصميم الشعارات واللافتات الإشهارية الاحترافية.',
                float_wa: 'واتساب مباشر • رد سريع'
            }
        },
        en: {
            nav: ['Services', 'Portfolio', 'Our Process', 'Team', 'Blog', 'Free Quote'],
            hero_badge: 'Ouarzazate & Drâa-Tafilalet, Morocco',
            hero_title: 'Accessible Digital Solutions <span class="gradient-text">for Moroccan SMBs</span>',
            hero_sub: 'Tailored digital solutions in Ouarzazate, Drâa-Tafilalet and across Morocco:',
            hero_pills: [
                ['building-2', 'Hotels & Riads'],
                ['utensils', 'Restaurants & Cafés'],
                ['shopping-bag', 'Shops & Boutiques'],
                ['briefcase', 'Artisans & Services']
            ],
            hero_btn_1: 'Configure my project',
            hero_btn_2: 'View our live work',
            pillars: [
                ['24/7 Visibility', 'Rank higher on Google search results'],
                ['Credibility', 'Inspire trust with a professional website & logo'],
                ['Conversion & KPI', 'Turn visitors into direct customers']
            ],
            slider: {
                tag: 'Digital Transformation',
                title: 'Before <span class="gradient-text">&amp;</span> After',
                sub: 'Slide the handle to compare an outdated website with a modern TechWeb experience',
                old_lbl: 'BEFORE',
                new_lbl: 'AFTER',
                avant_tag: '← Outdated, slow website not mobile-friendly',
                apres_tag: 'TechWeb — Modern, fast, high-converting design →'
            },
            services: {
                tag: 'Services',
                title: 'Our 3 <span class="gradient-text">Core Expertise Areas</span>',
                sub: 'Focused digital solutions: custom web development, Google SEO ranking, and professional logos & ad banners',
                poles: [
                    {
                        num: 'Pillar 01',
                        title: 'Custom Website Development',
                        desc: 'Modern, ultra-fast, 100% responsive websites. From business showcase sites to complete e-commerce stores.',
                        list: ['Professional Showcase Website', 'E-commerce & Online Store', 'High-Conversion Landing Page', 'Modern UI/UX Design (Mobile & Desktop)', 'Direct WhatsApp Order & Booking Integration', 'Fast & Secure Hosting (SSL)'],
                        btn: 'Build my website'
                    },
                    {
                        num: 'Pillar 02',
                        title: 'Google SEO, Speed & Maintenance',
                        desc: 'Rank higher on Google in your city and keep your website fast, secure, and tracked with real analytics.',
                        list: ['Local & National Google SEO', 'Extreme Speed Optimization (PageSpeed 95+)', 'Google Search Console Indexing', 'Visitor Tracking (Google Analytics 4)', 'Regular Security & Maintenance Updates', 'Client Training Included'],
                        btn: 'Boost my SEO'
                    },
                    {
                        num: 'Pillar 03',
                        title: 'Logos & Advertising Banners',
                        desc: 'Clean, impactful visual identity: we design your custom business logo as well as promotional banners and posters.',
                        list: ['Custom Professional Logo Design', 'Brand Color Palette & Typography', 'Advertising Banners & Posters', 'Promotional Graphics for Campaigns', 'High-Resolution Modern Design', 'Ready-to-use Source Files'],
                        btn: 'Design my brand'
                    }
                ]
            },
            portfolio: {
                tag: 'Portfolio',
                title: 'Our <span class="gradient-text">Live Projects</span>',
                sub: 'Explore and test live web platforms designed and deployed by our team',
                banner: '<strong>Live Deployed Websites [Live Site]</strong> — Click <strong>"Test Live Here"</strong> to interact with each website in real time (PC or Mobile mode).',
                preview_btn: 'Test Live Here',
                cards: [
                    { badge: 'Live Site', cat: 'E-Commerce & Perfumery', title: 'AbdePerfumes', desc: 'Luxury perfume e-commerce store featuring interactive catalog, scent filtering, dynamic cart, and smooth mobile checkout.', btns: ['Visit Live Site', 'Order Similar'] },
                    { badge: 'Live Site', cat: 'FoodTech & Web Platform', title: 'Lokma Solidaire', desc: 'Modern web platform showcasing local gastronomy and cooperatives with digital menu and online ordering.', btns: ['Visit Live Site', 'Order Similar'] }
                ]
            },
            process: {
                tag: 'Our Process',
                title: 'How We <span class="gradient-text">Work</span>',
                sub: 'A structured 6-phase workflow guaranteeing quality, transparency, and client satisfaction',
                phase: 'PHASE',
                steps: [
                    ['Contact & Brief', 'Initial exchange to understand your business, goals, target clients, and budget.'],
                    ['Onboarding & Specifications', 'Detailed project roadmap, feature selection, site structure, and delivery schedule.'],
                    ['Production (UI/UX, Code & Logo)', 'UI/UX design in Figma, clean code in VS Code/GitHub, and creation of your visual identity.'],
                    ['Validation & Revisions', 'Live staging link where you test the website and request adjustments until 100% satisfied.'],
                    ['Launch, Domain & Training', 'Official deployment with your custom domain (.ma / .com), SSL security, and hands-on training.'],
                    ['Maintenance & KPI Analytics', 'Performance tracking (GA4, Search Console), security updates, and continuous SEO support.']
                ]
            },
            team: {
                tag: 'Team',
                title: 'Our Expert Team',
                sub: 'A passionate, complementary team dedicated to our clients digital success',
                roles: [
                    'Co-Founder & Lead Full-Stack Developer',
                    'Co-Founder & UI/UX Design Director',
                    'Vice-President, Strategy, SEO & KPI',
                    'Financial Director, Quotes & Pricing',
                    'Video Content Creator & Brand Ambassador',
                    'Video Producer & Reels Editor'
                ]
            },
            blog: {
                tag: 'Blog',
                title: 'Resources & <span class="gradient-text">Tips</span>',
                sub: 'Practical guides and detailed insights to help Moroccan business owners succeed online',
                cards: [
                    ['UI/UX Design', 'UX vs UI Design: Why Your Website Needs Both to Convert Visitors into Clients', 'Discover the fundamental difference between UX and UI with a full performance comparison table...', 'Read Full Article'],
                    ['Web & SEO', 'How to Create a Profitable Business Website in Morocco in 2026 (Pricing & Google SEO)', 'Complete guide on realistic MAD budgets, timelines, and local Google SEO strategies...', 'Read Full Article'],
                    ['Local Digital', 'Hotels, Restaurants & Shops in Ouarzazate: Why an Official Website Is Essential', 'Detailed comparison between Social Media and an Official Website with local case studies...', 'Read Full Article']
                ],
                modals: [
                    {
                        tag: 'UI/UX Design · TechWeb Blog',
                        title: 'UX vs UI Design: Why Your Website Needs Both to Convert Visitors into Clients',
                        body: '<p>In digital design, two essential terms always come up: <strong>UI (User Interface)</strong> and <strong>UX (User Experience)</strong>. Combining both is what turns a casual visitor into a paying customer.</p>' +
                            '<h3>Performance Comparison: Amateur Site vs TechWeb Site</h3>' +
                            '<table class="modal-table"><thead><tr><th>Metric</th><th>Site without UX/UI</th><th>TechWeb Site</th></tr></thead><tbody>' +
                            '<tr><td>Bounce Rate</td><td class="check-red">70 – 90%</td><td class="check-green">&lt; 35%</td></tr>' +
                            '<tr><td>Session Duration</td><td class="check-red">&lt; 30 seconds</td><td class="check-green">2 – 5 minutes</td></tr>' +
                            '<tr><td>Conversion Rate</td><td class="check-red">&lt; 1%</td><td class="check-green">4 – 9%</td></tr>' +
                            '<tr><td>Google PageSpeed</td><td class="check-red">25 – 50 / 100</td><td class="check-green">95 – 100 / 100</td></tr>' +
                            '</tbody></table>'
                    },
                    {
                        tag: 'Web & SEO · TechWeb Blog',
                        title: 'How to Create a Profitable Business Website in Morocco in 2026 (Pricing & SEO)',
                        body: '<p>In 2026, an official website is your 24/7 digital storefront in Ouarzazate and across Morocco.</p>' +
                            '<h3>Realistic Website Pricing in Morocco (2026)</h3>' +
                            '<table class="modal-table"><thead><tr><th>Website Type</th><th>Price Range (MAD)</th><th>Timeline</th></tr></thead><tbody>' +
                            '<tr><td>High-Conversion Landing Page</td><td>800 – 2,000 MAD</td><td>3 – 5 days</td></tr>' +
                            '<tr><td>Showcase Website (3–5 pages)</td><td>1,500 – 4,000 MAD</td><td>1 – 2 weeks</td></tr>' +
                            '<tr><td>Full E-commerce Store</td><td>4,000 – 10,000 MAD</td><td>2 – 4 weeks</td></tr>' +
                            '<tr><td>Multilingual Option (FR/AR/EN)</td><td>+500 – 1,200 MAD</td><td>+3 days</td></tr>' +
                            '</tbody></table>'
                    },
                    {
                        tag: 'Local Digital · TechWeb Blog',
                        title: 'Hotels, Restaurants & Shops in Ouarzazate: Why an Official Website Is Essential',
                        body: '<p>Relying on Instagram or Facebook alone causes you to miss out on over 70% of customers searching directly on Google.</p>' +
                            '<table class="modal-table"><thead><tr><th>Criteria</th><th>Social Media Only</th><th>Official TechWeb Site</th></tr></thead><tbody>' +
                            '<tr><td>Platform Ownership</td><td class="check-red">No</td><td class="check-green">100% Yours</td></tr>' +
                            '<tr><td>Google SEO Ranking</td><td class="check-red">Limited</td><td class="check-green">Optimized 24/7</td></tr>' +
                            '<tr><td>Direct Commission-Free Bookings</td><td class="check-red">Hard</td><td class="check-green">0% Commission</td></tr>' +
                            '</tbody></table>'
                    }
                ]
            },
            faq: {
                tag: 'FAQ',
                title: 'Frequently Asked <span class="gradient-text">Questions</span>',
                sub: 'Clear, transparent answers to the most common questions before starting your project',
                items: [
                    ['How long does it take to build a website?', 'Depending on your project scope: a high-converting Landing Page takes 3 to 5 days, a professional Showcase Website takes 1 to 2 weeks, and a full E-commerce store takes 2 to 3 weeks.'],
                    ['Can I order a website with or without a domain name (.ma / .com)?', 'Yes! In our quote configurator below, you can choose a turnkey package including your official domain name (.ma or .com) + SSL hosting, or choose website development only.'],
                    ['Do you provide training and analytics after launch?', 'Absolutely. Upon delivery, we train you on how to manage your website, and we set up Google Analytics 4 and Google Search Console.'],
                    ['Do you also design logos and advertising banners?', 'Yes, our design division creates custom professional Logos as well as high-resolution advertising banners and posters.']
                ]
            },
            devis: {
                tag: 'Free Quote',
                title: 'Configure <span class="gradient-text">Your Project</span>',
                sub: 'Answer 3 simple questions and receive an instant quote via WhatsApp',
                steps_lbl: ['Sector', 'Service', 'Domain & Options', 'Send'],
                step1_title: 'What is your business sector?',
                secteurs: ['Hotel / Riad', 'Restaurant / Café', 'Shop / Boutique', 'Artisan / Cooperative', 'Professional Service', 'Other'],
                secteurs_sub: ['Direct Booking & Gallery', 'QR Menu & Orders', 'Catalog & Online Sales', 'Local Crafts & Co-ops', 'Agencies & Consulting', 'Custom Web Project'],
                step2_title: 'Which service interests you?',
                services: [
                    ['Showcase Website', 'Present your business professionally 24/7'],
                    ['E-commerce Store', 'Sell your products online'],
                    ['Landing Page', 'High-conversion single promotional page'],
                    ['Website Redesign', 'Modernize and speed up an existing site'],
                    ['Logo & Advertising Banners', 'Custom Logo + Advertising banners & posters'],
                    ['Complete Pack (Website + Logo & Banners)', 'Custom Website + Logo + Advertising banners']
                ],
                step3_title: 'Domain Name & Extra Options',
                domain_q: '1. Do you want an official Domain Name (.ma / .com)?',
                domain_yes_title: 'With Official Domain (.ma / .com)',
                domain_yes_desc: 'Custom domain registration + Fast SSL hosting included',
                domain_no_title: 'Without Domain Name',
                domain_no_desc: 'I already have a domain or prefer a free hosting link',
                opt_q: '2. Extra options (click to select):',
                opts: [
                    { val: 'SEO Local Google', label: 'Local Google SEO Optimization' },
                    { val: 'Maintenance mensuelle', label: 'Monthly Maintenance & Security' },
                    { val: 'Multilingue FR/AR/EN', label: 'Multilingual Website (FR / AR / EN)' },
                    { val: 'Formation client', label: 'Client Training Session' },
                    { val: 'Google Analytics 4', label: 'Google Analytics 4 (KPI)' },
                    { val: 'Logo & Banner Design', label: 'Add Logo & Advertising Banner' }
                ],
                next: 'Next',
                back: 'Back',
                see_summary: 'View Summary',
                step4_title: 'Request Summary',
                sum_heading: 'Your Project:',
                lbl_secteur: 'Sector',
                lbl_service: 'Service',
                lbl_domaine: 'Domain Name',
                lbl_options: 'Options',
                none: 'No extra options',
                step4_note: 'Clicking the button below opens WhatsApp (+212 711-218301) with your quote request.',
                send_wa: 'Send via WhatsApp',
                trust: ['Guaranteed reply under 2h', '100% Free Estimate', 'No commitment'],
                alert_secteur: 'Please select your business sector.',
                alert_service: 'Please select a service.'
            },
            footer: {
                desc: 'Digital agency specializing in custom website creation, Google SEO ranking, logos, and advertising banners in Ouarzazate and across Morocco.',
                col1_title: 'Our Services',
                srv: ['Custom Website Creation', 'E-Commerce Stores', 'Local & National SEO', 'Logos & Advertising Banners', 'Web Maintenance & Security'],
                col2_title: 'Direct Contact',
                copy: '© 2026 TechWeb — techweb.devs · All rights reserved · Ouarzazate, Morocco',
                made: 'Crafted with precision in Ouarzazate',
                seo_text: '<strong>Service Areas &amp; Expertise:</strong> Digital agency and web developer in Ouarzazate, Drâa-Tafilalet and across Morocco — Custom website creation (hotel, riad, restaurant, shop, cooperative, e-commerce store), local Google SEO ranking, professional logo design and advertising banners.',
                float_wa: 'Direct WhatsApp • Fast reply'
            }
        }
    };

    var activeLang = 'fr';
    var currentDevisStep = 1;
    var stateDevis = {
        secteur: '',
        service: '',
        domaine: 'Avec Nom de Domaine (.ma / .com)',
        options: []
    };

    function ensureDevisEnhancements() {
        var cardBox = document.querySelector('.devis-card-box');
        if (!cardBox) return;
        if (!document.getElementById('devisProgressTrack')) {
            var track = document.createElement('div');
            track.className = 'devis-progress-track';
            track.id = 'devisProgressTrack';
            track.innerHTML = '<div class="devis-progress-fill" id="devisProgressFill"></div>';
            cardBox.insertBefore(track, cardBox.firstChild);
        }
        if (!document.getElementById('devisTrustBar')) {
            var trust = document.createElement('div');
            trust.className = 'devis-trust-bar';
            trust.id = 'devisTrustBar';
            cardBox.appendChild(trust);
        }
    }

    function updateDevisTrustAndProgress() {
        ensureDevisEnhancements();
        var fill = document.getElementById('devisProgressFill');
        if (fill) {
            fill.style.width = (currentDevisStep * 25) + '%';
        }
        var trustBar = document.getElementById('devisTrustBar');
        var t = i18nData[activeLang].devis;
        if (trustBar && t.trust) {
            var icons = ['clock', 'shield-check', 'sparkles'];
            var html = '';
            for (var i = 0; i < t.trust.length; i++) {
                html += '<span class="devis-trust-item"><i data-lucide="' + icons[i] + '"></i> ' + t.trust[i] + '</span>';
            }
            trustBar.innerHTML = html;
            refreshIcons();
        }
    }

    window.toggleTheme = function () {
        var html = document.documentElement;
        var isDark = html.classList.contains('dark');
        html.classList.toggle('dark', !isDark);
        html.classList.toggle('light', isDark);
        var btn = document.getElementById('themeBtn');
        if (btn) {
            btn.innerHTML = '<i data-lucide="' + (isDark ? 'sun' : 'moon') + '"></i>';
            refreshIcons();
        }
        try { localStorage.setItem('tw_theme', isDark ? 'light' : 'dark'); } catch (e) { }
    };

    window.toggleMobileMenu = function () {
        var menu = document.getElementById('mobileMenu');
        var ham = document.getElementById('hamburger');
        var isOpen = menu.classList.contains('open');
        menu.classList.toggle('open', !isOpen);
        ham.classList.toggle('open', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    };

    window.closeMobileMenu = function () {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
        document.body.style.overflow = '';
    };

    window.openModal = function (id) {
        var modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function (id) {
        var modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
            if (id === 'livePreviewModal') {
                document.getElementById('livePreviewIframe').src = '';
            }
        }
    };

    window.closeModalOnOverlay = function (e, id) {
        if (e.target === document.getElementById(id)) window.closeModal(id);
    };

    window.goToDevisFromModal = function (modalId) {
        window.closeModal(modalId);
        var devisEl = document.getElementById('devis');
        if (devisEl) devisEl.scrollIntoView({ behavior: 'smooth' });
    };

    window.setPreviewViewport = function (mode) {
        var frameWrap = document.querySelector('.modal-live-frame');
        var btnD = document.getElementById('vpDesktopBtn');
        var btnM = document.getElementById('vpMobileBtn');
        if (!frameWrap) return;
        if (mode === 'mobile') {
            frameWrap.classList.add('mobile-view');
            if (btnM) btnM.classList.add('active');
            if (btnD) btnD.classList.remove('active');
        } else {
            frameWrap.classList.remove('mobile-view');
            if (btnD) btnD.classList.add('active');
            if (btnM) btnM.classList.remove('active');
        }
    };

    window.openLivePreview = function (url, title) {
        document.getElementById('livePreviewTitle').textContent = title;
        document.getElementById('livePreviewExternal').href = url;
        document.getElementById('livePreviewIframe').src = url;
        window.setPreviewViewport('desktop');
        window.openModal('livePreviewModal');
        refreshIcons();
    };

    window.toggleFaq = function (btn) {
        var item = btn.parentElement;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function (el) {
            el.classList.remove('open');
        });
        if (!isOpen) item.classList.add('open');
    };

    function renderStep3Options() {
        var p3 = document.getElementById('devis-panel-3');
        if (!p3) return;
        var t = i18nData[activeLang].devis;
        var withDom = stateDevis.domaine.indexOf('Avec') !== -1;

        var optsHtml = '';
        for (var i = 0; i < t.opts.length; i++) {
            var o = t.opts[i];
            var isChecked = stateDevis.options.indexOf(o.val) !== -1;
            optsHtml +=
                '<div class="option-check ' + (isChecked ? 'checked' : '') + '" data-optval="' + o.val + '" onclick="window.toggleOptTW(this)">' +
                '<div class="check-box"></div>' +
                '<span class="opt-label">' + o.label + '</span>' +
                '</div>';
        }

        p3.innerHTML =
            '<div class="devis-section-title">' +
            '<span class="step-badge">3</span>' +
            '<span>' + t.step3_title + '</span>' +
            '</div>' +
            '<div style="margin-bottom:20px;">' +
            '<div style="font-size:0.88rem;font-weight:700;margin-bottom:10px;color:var(--primary);">' + t.domain_q + '</div>' +
            '<div class="service-type-grid" style="margin-bottom:0;">' +
            '<button type="button" class="service-type-btn dom-choice ' + (withDom ? 'selected' : '') + '" onclick="window.selectDomaineTW(this, \'Avec Nom de Domaine (.ma / .com)\')">' +
            '<div class="stb-name">' + t.domain_yes_title + '</div>' +
            '<div class="stb-desc">' + t.domain_yes_desc + '</div>' +
            '</button>' +
            '<button type="button" class="service-type-btn dom-choice ' + (!withDom ? 'selected' : '') + '" onclick="window.selectDomaineTW(this, \'Sans Nom de Domaine\')">' +
            '<div class="stb-name">' + t.domain_no_title + '</div>' +
            '<div class="stb-desc">' + t.domain_no_desc + '</div>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '<div style="font-size:0.88rem;font-weight:700;margin-bottom:10px;color:var(--primary);">' + t.opt_q + '</div>' +
            '<div class="options-grid">' + optsHtml + '</div>' +
            '<div class="devis-nav">' +
            '<button type="button" class="btn btn-ghost" onclick="window.goToDevisStep(2)">' + t.back + '</button>' +
            '<button type="button" class="btn btn-primary" onclick="window.goToDevisStep(4)">' + t.see_summary + '</button>' +
            '</div>';
    }

    window.selectDomaineTW = function (btn, val) {
        document.querySelectorAll('.dom-choice').forEach(function (b) {
            b.classList.remove('selected');
        });
        btn.classList.add('selected');
        stateDevis.domaine = val;
    };

    window.toggleOptTW = function (el) {
        var val = el.getAttribute('data-optval');
        el.classList.toggle('checked');
        if (el.classList.contains('checked')) {
            if (stateDevis.options.indexOf(val) === -1) stateDevis.options.push(val);
        } else {
            stateDevis.options = stateDevis.options.filter(function (item) {
                return item !== val;
            });
        }
    };

    window.selectSecteur = function (btn) {
        document.querySelectorAll('.secteur-btn').forEach(function (b) {
            b.classList.remove('selected');
        });
        btn.classList.add('selected');
        stateDevis.secteur = btn.getAttribute('data-value');
    };

    window.selectService = function (btn) {
        document.querySelectorAll('#devis-panel-2 .service-type-btn').forEach(function (b) {
            b.classList.remove('selected');
        });
        btn.classList.add('selected');
        stateDevis.service = btn.getAttribute('data-value');
    };

    window.buildWhatsAppLink = function () {
        var t = i18nData[activeLang].devis;
        var opts = stateDevis.options.length > 0 ? stateDevis.options.join(', ') : t.none;
        var msg = 'Bonjour TechWeb,\n\n- ' + t.lbl_secteur + ' : ' + stateDevis.secteur + '\n- ' + t.lbl_service + ' : ' + stateDevis.service + '\n- ' + t.lbl_domaine + ' : ' + stateDevis.domaine + '\n- ' + t.lbl_options + ' : ' + opts;
        var link = 'https://wa.me/212711218301?text=' + encodeURIComponent(msg);
        var el = document.getElementById('devisWhatsappLink');
        if (el) el.href = link;
        return link;
    };

    window.goToDevisStep = function (step) {
        var t = i18nData[activeLang].devis;
        if (step === 2 && !stateDevis.secteur) { alert(t.alert_secteur); return; }
        if (step === 3 && !stateDevis.service) { alert(t.alert_service); return; }
        if (step === 3) renderStep3Options();

        currentDevisStep = step;
        updateDevisTrustAndProgress();

        document.querySelectorAll('.devis-panel').forEach(function (p) {
            p.classList.remove('active');
        });
        var targetPanel = document.getElementById('devis-panel-' + step);
        if (targetPanel) targetPanel.classList.add('active');

        for (var i = 1; i <= 4; i++) {
            var ind = document.getElementById('dsi' + i);
            if (ind) ind.classList.toggle('active', i <= step);
        }

        if (step === 4) {
            var sumBox = document.getElementById('duvisSummary');
            if (sumBox) {
                var optTxt = stateDevis.options.length > 0 ? stateDevis.options.join(', ') : t.none;
                sumBox.innerHTML =
                    '<h4>' + t.sum_heading + '</h4>' +
                    '<div class="devis-summary-item"><strong>' + t.lbl_secteur + ' :</strong> <span>' + stateDevis.secteur + '</span></div>' +
                    '<div class="devis-summary-item"><strong>' + t.lbl_service + ' :</strong> <span>' + stateDevis.service + '</span></div>' +
                    '<div class="devis-summary-item"><strong>' + t.lbl_domaine + ' :</strong> <span>' + stateDevis.domaine + '</span></div>' +
                    '<div class="devis-summary-item"><strong>' + t.lbl_options + ' :</strong> <span>' + optTxt + '</span></div>';
            }
            window.buildWhatsAppLink();
        }
    };

    window.setLang = function (lang) {
        activeLang = lang;
        var t = i18nData[lang];
        if (!t) return;

        var html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        var navLinks = document.querySelectorAll('.nav-links a');
        t.nav.forEach(function (txt, i) { if (navLinks[i]) navLinks[i].textContent = txt; });
        var mobLinks = document.querySelectorAll('#mobileMenu > a[data-i18n]');
        t.nav.forEach(function (txt, i) { if (mobLinks[i]) mobLinks[i].textContent = txt; });

        var badgeTxt = document.querySelector('[data-i18n="hero_badge_txt"]');
        if (badgeTxt) badgeTxt.textContent = t.hero_badge;
        var hTitle = document.querySelector('[data-i18n="hero_title"]');
        if (hTitle) hTitle.innerHTML = t.hero_title;
        var hSub = document.querySelector('[data-i18n="hero_subtitle"]');
        if (hSub) hSub.textContent = t.hero_sub;

        var pillsBox = document.getElementById('heroSectorPills');
        if (pillsBox && t.hero_pills) {
            var pillsHtml = '';
            for (var pIdx = 0; pIdx < t.hero_pills.length; pIdx++) {
                pillsHtml += '<span class="sector-pill"><i data-lucide="' + t.hero_pills[pIdx][0] + '"></i> ' + t.hero_pills[pIdx][1] + '</span>';
            }
            pillsBox.innerHTML = pillsHtml;
        }

        var btn1 = document.querySelector('[data-i18n="hero_btn_1"]');
        if (btn1) btn1.textContent = t.hero_btn_1;
        var btn2 = document.querySelector('[data-i18n="hero_btn_2"]');
        if (btn2) btn2.textContent = t.hero_btn_2;

        var pCards = document.querySelectorAll('.bento-pillars .pillar-card');
        t.pillars.forEach(function (p, i) {
            if (pCards[i]) {
                pCards[i].querySelector('.pillar-label').textContent = p[0];
                pCards[i].querySelector('.pillar-desc').textContent = p[1];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        var sSec = document.querySelector('#slider-section');
        if (sSec) {
            sSec.querySelector('.section-tag').textContent = t.slider.tag;
            sSec.querySelector('.section-title').innerHTML = t.slider.title;
            sSec.querySelector('.section-subtitle').textContent = t.slider.sub;
            sSec.querySelector('.old-label').textContent = t.slider.old_lbl;
            sSec.querySelector('.new-label').textContent = t.slider.new_lbl;
            sSec.querySelector('.slider-tag.avant').textContent = t.slider.avant_tag;
            sSec.querySelector('.slider-tag.apres').textContent = t.slider.apres_tag;
        }

        var srvSec = document.querySelector('#services');
        if (srvSec) {
            srvSec.querySelector('.section-tag').textContent = t.services.tag;
            srvSec.querySelector('.section-title').innerHTML = t.services.title;
            srvSec.querySelector('.section-subtitle').textContent = t.services.sub;
            var poles = srvSec.querySelectorAll('.service-pole');
            t.services.poles.forEach(function (pData, idx) {
                if (poles[idx]) {
                    poles[idx].querySelector('.pole-num').textContent = pData.num;
                    poles[idx].querySelector('.pole-title').textContent = pData.title;
                    poles[idx].querySelector('.pole-desc').textContent = pData.desc;
                    var lis = poles[idx].querySelectorAll('.pole-list li');
                    pData.list.forEach(function (itemTxt, liIdx) { if (lis[liIdx]) lis[liIdx].textContent = itemTxt; });
                    var btn = poles[idx].querySelector('a.btn');
                    if (btn) btn.textContent = pData.btn;
                }
            });
        }

        var portSec = document.querySelector('#portfolio');
        if (portSec) {
            portSec.querySelector('.section-tag').textContent = t.portfolio.tag;
            portSec.querySelector('.section-title').innerHTML = t.portfolio.title;
            portSec.querySelector('.section-subtitle').textContent = t.portfolio.sub;
            var bannerSpan = document.getElementById('portfolioBannerTxt');
            if (bannerSpan) bannerSpan.innerHTML = t.portfolio.banner;
            portSec.querySelectorAll('.preview-btn-txt').forEach(function (b) { b.textContent = t.portfolio.preview_btn; });
            var pCardsList = portSec.querySelectorAll('.portfolio-card');
            t.portfolio.cards.forEach(function (cData, i) {
                if (pCardsList[i]) {
                    pCardsList[i].querySelector('.port-tag').textContent = cData.badge;
                    pCardsList[i].querySelector('.portfolio-category').textContent = cData.cat;
                    pCardsList[i].querySelector('.portfolio-title').textContent = cData.title;
                    pCardsList[i].querySelector('.portfolio-desc').textContent = cData.desc;
                    var actBtns = pCardsList[i].querySelectorAll('.portfolio-actions a');
                    cData.btns.forEach(function (bTxt, bIdx) { if (actBtns[bIdx]) actBtns[bIdx].textContent = bTxt; });
                }
            });
        }

        var procSec = document.querySelector('#process');
        if (procSec) {
            procSec.querySelector('.section-tag').textContent = t.process.tag;
            procSec.querySelector('.section-title').innerHTML = t.process.title;
            procSec.querySelector('.section-subtitle').textContent = t.process.sub;
            var steps = procSec.querySelectorAll('.process-step');
            t.process.steps.forEach(function (stData, i) {
                if (steps[i]) {
                    steps[i].querySelector('.phase-label').textContent = t.process.phase;
                    steps[i].querySelector('.step-title').textContent = stData[0];
                    steps[i].querySelector('.step-desc').textContent = stData[1];
                }
            });
        }

        var teamSec = document.querySelector('#team');
        if (teamSec) {
            teamSec.querySelector('.section-tag').textContent = t.team.tag;
            teamSec.querySelector('[data-i18n="team_title"]').textContent = t.team.title;
            teamSec.querySelector('[data-i18n="team_subtitle"]').textContent = t.team.sub;
            var roles = teamSec.querySelectorAll('.team-role');
            t.team.roles.forEach(function (rTxt, i) { if (roles[i]) roles[i].textContent = rTxt; });
        }

        var blogSec = document.querySelector('#blog');
        if (blogSec) {
            blogSec.querySelector('.section-tag').textContent = t.blog.tag;
            blogSec.querySelector('.section-title').innerHTML = t.blog.title;
            blogSec.querySelector('.section-subtitle').textContent = t.blog.sub;
            var bCards = blogSec.querySelectorAll('.blog-card');
            t.blog.cards.forEach(function (bData, i) {
                if (bCards[i]) {
                    bCards[i].querySelector('.blog-tag').textContent = bData[0];
                    bCards[i].querySelector('.blog-title').textContent = bData[1];
                    bCards[i].querySelector('.blog-excerpt').textContent = bData[2];
                    bCards[i].querySelector('.blog-read-btn').innerHTML = bData[3] + ' <i data-lucide="arrow-right"></i>';
                }
            });
        }

        var ctaBtnText = lang === 'ar'
            ? 'هل لديك مشروع؟ اطلب عرض سعر مجاني الآن'
            : lang === 'en'
                ? 'Have a project? Get your free quote now'
                : 'Vous avez un projet ? Demandez votre devis gratuit';

        ['modal1', 'modal2', 'modal3'].forEach(function (mId, idx) {
            var mEl = document.getElementById(mId);
            if (mEl && t.blog.modals[idx]) {
                mEl.querySelector('.modal-tag').textContent = t.blog.modals[idx].tag;
                mEl.querySelector('.modal-title').textContent = t.blog.modals[idx].title;
                mEl.querySelector('.modal-body').innerHTML = t.blog.modals[idx].body +
                    '<div style="margin-top:28px;padding-top:20px;border-top:1px solid var(--border-color);text-align:center;">' +
                    '<button type="button" class="btn btn-primary" onclick="window.goToDevisFromModal(\'' + mId + '\')">' + ctaBtnText + '</button>' +
                    '</div>';
            }
        });

        var faqTag = document.getElementById('faq-tag');
        var faqTitle = document.getElementById('faq-title');
        var faqSub = document.getElementById('faq-sub');
        var faqList = document.getElementById('faq-list-container');
        if (faqTag && faqTitle && faqSub && faqList) {
            faqTag.textContent = t.faq.tag;
            faqTitle.innerHTML = t.faq.title;
            faqSub.textContent = t.faq.sub;
            var faqHtml = '';
            for (var fIdx = 0; fIdx < t.faq.items.length; fIdx++) {
                var fItem = t.faq.items[fIdx];
                faqHtml +=
                    '<div class="faq-item ' + (fIdx === 0 ? 'open' : '') + '">' +
                    '<button type="button" class="faq-question" onclick="window.toggleFaq(this)">' +
                    '<span>' + fItem[0] + '</span>' +
                    '<span class="faq-icon">+</span>' +
                    '</button>' +
                    '<div class="faq-answer">' + fItem[1] + '</div>' +
                    '</div>';
            }
            faqList.innerHTML = faqHtml;
        }

        var devSec = document.querySelector('#devis');
        if (devSec) {
            devSec.querySelector('.section-tag').textContent = t.devis.tag;
            devSec.querySelector('.section-title').innerHTML = t.devis.title;
            devSec.querySelector('.section-subtitle').textContent = t.devis.sub;
            var dsiLabels = devSec.querySelectorAll('.dsi-label');
            t.devis.steps_lbl.forEach(function (lTxt, i) { if (dsiLabels[i]) dsiLabels[i].textContent = lTxt; });

            var p1Title = document.querySelector('#devis-panel-1 .devis-section-title');
            if (p1Title) p1Title.innerHTML = '<span class="step-badge">1</span> ' + t.devis.step1_title;
            var secBtns = document.querySelectorAll('#devis-panel-1 .secteur-btn');
            t.devis.secteurs.forEach(function (sTxt, i) {
                if (secBtns[i]) {
                    secBtns[i].setAttribute('data-value', sTxt);
                    secBtns[i].querySelector('.sb-label').textContent = sTxt;
                    var subEl = secBtns[i].querySelector('.sb-sub');
                    if (!subEl) {
                        subEl = document.createElement('div');
                        subEl.className = 'sb-sub';
                        secBtns[i].appendChild(subEl);
                    }
                    subEl.textContent = t.devis.secteurs_sub ? t.devis.secteurs_sub[i] : '';
                }
            });
            var p1Next = document.querySelector('#devis-panel-1 .devis-nav .btn-primary');
            if (p1Next) p1Next.textContent = t.devis.next;

            var p2Title = document.querySelector('#devis-panel-2 .devis-section-title');
            if (p2Title) p2Title.innerHTML = '<span class="step-badge">2</span> ' + t.devis.step2_title;
            var srvBtns = document.querySelectorAll('#devis-panel-2 .service-type-btn');
            t.devis.services.forEach(function (srvData, i) {
                if (srvBtns[i]) {
                    srvBtns[i].setAttribute('data-value', srvData[0]);
                    srvBtns[i].querySelector('.stb-name').textContent = srvData[0];
                    srvBtns[i].querySelector('.stb-desc').textContent = srvData[1];
                }
            });
            var p2Btns = document.querySelectorAll('#devis-panel-2 .devis-nav .btn');
            if (p2Btns[0]) p2Btns[0].textContent = t.devis.back;
            if (p2Btns[1]) p2Btns[1].textContent = t.devis.next;

            renderStep3Options();

            var p4Title = document.querySelector('#devis-panel-4 .devis-section-title');
            if (p4Title) p4Title.innerHTML = '<span class="step-badge">4</span> ' + t.devis.step4_title;
            var p4Note = document.querySelector('#devis-panel-4 .devis-note');
            if (p4Note) p4Note.textContent = t.devis.step4_note;
            var p4Back = document.querySelector('#devis-panel-4 .btn-ghost');
            if (p4Back) p4Back.textContent = t.devis.back;
            var sendWaTxt = document.getElementById('sendWaBtnTxt');
            if (sendWaTxt) sendWaTxt.textContent = t.devis.send_wa;

            updateDevisTrustAndProgress();
        }

        var fDesc = document.querySelector('footer .footer-desc');
        if (fDesc) fDesc.textContent = t.footer.desc;
        var fColTitles = document.querySelectorAll('footer .footer-col-title');
        if (fColTitles[0]) fColTitles[0].textContent = t.footer.col1_title;
        if (fColTitles[1]) fColTitles[1].textContent = t.footer.col2_title;
        var fSrvLinks = document.querySelectorAll('footer .footer-grid > div:nth-child(2) .footer-links a');
        t.footer.srv.forEach(function (txt, i) { if (fSrvLinks[i]) fSrvLinks[i].textContent = txt; });
        var fCopy = document.querySelector('footer .footer-copy');
        if (fCopy) fCopy.textContent = t.footer.copy;
        var fMade = document.querySelector('footer .footer-made');
        if (fMade) fMade.textContent = t.footer.made;
        var fSeo = document.getElementById('footerSeoText');
        if (fSeo) fSeo.innerHTML = t.footer.seo_text;
        var floatTxt = document.getElementById('float-wa-txt');
        if (floatTxt) floatTxt.textContent = t.footer.float_wa;

        refreshIcons();
        try { localStorage.setItem('tw_lang', lang); } catch (e) { }
    };

    window.addEventListener('DOMContentLoaded', function () {
        injectDynamicFixes();
        ensureDevisEnhancements();

        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(function (el) {
            fadeObserver.observe(el);
        });

        var wrapper = document.getElementById('sliderWrapper');
        var clip = document.getElementById('sliderClip');
        var handle = document.getElementById('sliderHandle');
        var beforeBox = document.getElementById('sliderBefore');
        var oldLbl = wrapper ? wrapper.querySelector('.old-label') : null;
        var newLbl = wrapper ? wrapper.querySelector('.new-label') : null;

        if (wrapper && clip && handle && beforeBox) {
            function syncSliderWidth() {
                beforeBox.style.width = wrapper.offsetWidth + 'px';
            }
            syncSliderWidth();
            window.addEventListener('resize', syncSliderWidth);

            var isDragging = false;
            function setSlider(percent) {
                percent = Math.max(2, Math.min(98, percent));
                clip.style.width = percent + '%';
                handle.style.left = percent + '%';
                if (oldLbl) {
                    oldLbl.style.opacity = percent < 16 ? '0' : '1';
                    oldLbl.style.transform = percent < 16 ? 'scale(0.85)' : 'scale(1)';
                }
                if (newLbl) {
                    newLbl.style.opacity = percent > 84 ? '0' : '1';
                    newLbl.style.transform = percent > 84 ? 'scale(0.85)' : 'scale(1)';
                }
            }
            setSlider(50);

            function getPercent(e) {
                var rect = wrapper.getBoundingClientRect();
                var clientX = e.touches ? e.touches[0].clientX : e.clientX;
                return ((clientX - rect.left) / rect.width) * 100;
            }
            wrapper.addEventListener('mousedown', function (e) { isDragging = true; setSlider(getPercent(e)); e.preventDefault(); });
            window.addEventListener('mousemove', function (e) { if (isDragging) setSlider(getPercent(e)); });
            window.addEventListener('mouseup', function () { isDragging = false; });
            wrapper.addEventListener('touchstart', function (e) { isDragging = true; setSlider(getPercent(e)); }, { passive: true });
            wrapper.addEventListener('touchmove', function (e) { if (isDragging) { setSlider(getPercent(e)); e.preventDefault(); } }, { passive: false });
            wrapper.addEventListener('touchend', function () { isDragging = false; });
        }

        try {
            var savedTheme = localStorage.getItem('tw_theme') || 'dark';
            document.documentElement.className = savedTheme;
            var tBtn = document.getElementById('themeBtn');
            if (tBtn) tBtn.innerHTML = '<i data-lucide="' + (savedTheme === 'dark' ? 'moon' : 'sun') + '"></i>';
            var savedLang = localStorage.getItem('tw_lang') || 'fr';
            window.setLang(savedLang);
        } catch (e) {
            window.setLang('fr');
        }
        refreshIcons();
    });
})();
(function initTechWebV8ElitePack() {
    var v8LangData = {
        fr: {
            widget_title: 'Performance & Impact Client',
            widget_status: 'Système Actif',
            metrics: [
                ['99/100', 'Score Google PageSpeed'],
                ['+180%', 'Conversion sur WhatsApp'],
                ['< 1.2s', 'Chargement sur Mobile'],
                ['100%', 'Architecture Sur-Mesure']
            ],
            widget_foot: 'Accompagnement local à Ouarzazate & partout au Maroc',
            marquee: [
                ['globe', 'Création de Sites Web Sur-Mesure'],
                ['Smartphone', 'Design 100% Mobile-First & Fluide'],
                ['trending-up', 'Référencement SEO Local Google #1'],
                ['shopping-bag', 'Boutiques E-Commerce Sans Commission'],
                ['pen-tool', 'Logos & Affiches Publicitaires'],
                ['shield-check', 'Sécurité SSL & Hébergement Ultra-Rapide']
            ]
        },
        ar: {
            widget_title: 'مؤشرات الأداء والنتائج',
            widget_status: 'نظام نشط',
            metrics: [
                ['99/100', 'سرعة Google PageSpeed'],
                ['+180%', 'نسبة التحويل عبر واتساب'],
                ['< 1.2s', 'سرعة التصفح على الهاتف'],
                ['100%', 'برمجة وتصميم حسب الطلب']
            ],
            widget_foot: 'مواكبة محلية في ورزازات وجميع مدن المغرب',
            marquee: [
                ['globe', 'إنشاء وتطوير مواقع إلكترونية احترافية'],
                ['smartphone', 'تصميم متجاوب 100% مع الهاتف'],
                ['trending-up', 'تصدر نتائج البحث في Google SEO'],
                ['shopping-bag', 'متاجر إلكترونية بدون عمولة'],
                ['pen-tool', 'تصميم الشعارات واللافتات الإشهارية'],
                ['shield-check', 'حماية SSL واستضافة فائقة السرعة']
            ]
        },
        en: {
            widget_title: 'Live Performance & KPI',
            widget_status: 'System Active',
            metrics: [
                ['99/100', 'Google PageSpeed Score'],
                ['+180%', 'WhatsApp Lead Conversion'],
                ['< 1.2s', 'Mobile Load Time'],
                ['100%', 'Custom Handcrafted Code']
            ],
            widget_foot: 'Local support in Ouarzazate & across Morocco',
            marquee: [
                ['globe', 'Custom Website Development'],
                ['smartphone', '100% Mobile-First Responsive UX'],
                ['trending-up', '#1 Local Google SEO Ranking'],
                ['shopping-bag', 'Commission-Free E-Commerce Stores'],
                ['pen-tool', 'Professional Logos & Ad Banners'],
                ['shield-check', 'SSL Security & Ultra-Fast Hosting']
            ]
        }
    };

    function setupHeroSplitAndMarquee() {
        var heroContent = document.querySelector('#hero .hero-content');
        var bentoPillars = document.querySelector('#hero .bento-pillars');
        if (heroContent && bentoPillars && !document.getElementById('heroTopSplit')) {
            var splitWrap = document.createElement('div');
            splitWrap.className = 'hero-top-split';
            splitWrap.id = 'heroTopSplit';

            var leftCol = document.createElement('div');
            leftCol.className = 'hero-left-col';

            while (heroContent.firstChild && heroContent.firstChild !== bentoPillars) {
                leftCol.appendChild(heroContent.firstChild);
            }

            var rightWidget = document.createElement('div');
            rightWidget.className = 'hero-live-widget';
            rightWidget.id = 'heroLiveWidget';

            splitWrap.appendChild(leftCol);
            splitWrap.appendChild(rightWidget);
            heroContent.insertBefore(splitWrap, bentoPillars);
        }

        var heroSec = document.getElementById('hero');
        if (heroSec && !document.getElementById('techMarqueeWrap')) {
            var mq = document.createElement('div');
            mq.className = 'tech-marquee-wrap';
            mq.id = 'techMarqueeWrap';
            mq.innerHTML = '<div class="tech-marquee-track" id="techMarqueeTrack"></div>';
            heroSec.parentNode.insertBefore(mq, heroSec.nextSibling);
        }
    }

    function renderV8Translations(lang) {
        var d = v8LangData[lang] || v8LangData.fr;
        var widget = document.getElementById('heroLiveWidget');
        if (widget) {
            var mHtml = '';
            for (var i = 0; i < d.metrics.length; i++) {
                mHtml +=
                    '<div class="hlw-metric">' +
                    '<div class="hlw-val">' + d.metrics[i][0] + '</div>' +
                    '<div class="hlw-lbl">' + d.metrics[i][1] + '</div>' +
                    '</div>';
            }
            widget.innerHTML =
                '<div class="hlw-header">' +
                '<span class="hlw-title"><i data-lucide="activity"></i> ' + d.widget_title + '</span>' +
                '<span class="hlw-status">' + d.widget_status + '</span>' +
                '</div>' +
                '<div class="hlw-grid">' + mHtml + '</div>' +
                '<div class="hlw-footer">' +
                '<i data-lucide="award"></i>' +
                '<span>' + d.widget_foot + '</span>' +
                '</div>';
        }

        var track = document.getElementById('techMarqueeTrack');
        if (track) {
            var itemsHtml = '';
            for (var loop = 0; loop < 2; loop++) {
                for (var j = 0; j < d.marquee.length; j++) {
                    itemsHtml +=
                        '<span class="tm-item">' +
                        '<i data-lucide="' + d.marquee[j][0].toLowerCase() + '"></i>' +
                        '<span>' + d.marquee[j][1] + '</span>' +
                        '</span>' +
                        '<span class="tm-dot"></span>';
                }
            }
            track.innerHTML = itemsHtml;
        }

        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    function initSpotlightHover() {
        if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
            document.addEventListener('mousemove', function (e) {
                var card = e.target.closest('.glass-card, .process-step');
                if (!card) return;
                var rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
                card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
            });
        }
    }

    window.addEventListener('DOMContentLoaded', function () {
        setupHeroSplitAndMarquee();
        initSpotlightHover();

        var currentLang = document.documentElement.getAttribute('lang') || 'fr';
        renderV8Translations(currentLang);

        var origSetLang = window.setLang;
        if (typeof origSetLang === 'function') {
            window.setLang = function (lang) {
                origSetLang(lang);
                renderV8Translations(lang);
            };
        }
    });
})();