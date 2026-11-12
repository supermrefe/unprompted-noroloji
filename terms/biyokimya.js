/* Biyokimya — Unprompted Tıp konu paketi
   Seçim mantığı: TUS temel bilimler biyokimyasında en sık soru gelen metabolik yollar (glikoliz, TCA, ETZ, glukoneogenez,
   pentoz fosfat, yağ asidi oksidasyonu, kolesterol, üre döngüsü, hem, pürin), enzim kinetiği ve DNA onarımı ile bu yolların
   klasik kalıtsal enzim eksiklikleri (glikojen depo, lizozomal depo, aminoasit, porfiri, Lesch-Nyhan). Konular mekanizma
   odaklıdır; yönetim ayrıntısı ilgili klinik branşa (pediatri PKU taraması, hematoloji B12 anemisi, romatoloji gut) bırakıldı. */
UP.add({ id: "biyokimya", subs: {
    krb: "Karbonhidrat ve enerji metabolizması",
    lip: "Lipit metabolizması",
    azt: "Azot, aminoasit, hem ve nükleotit metabolizması",
    enz: "Enzimler, vitaminler ve moleküler biyoloji",
    kal: "Kalıtsal metabolik hastalıklar"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "biy-glikoliz", tr: "Glikoliz ve düzenlenmesi", en: "Glycolysis and its regulation", cat: "krb", lvl: 1,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Tanner LB, et al. Four key steps control glycolytic flux in mammalian cells. Cell Syst 2018", "https://pubmed.ncbi.nlm.nih.gov/29960885/"],
          ["Vander Heiden MG, Cantley LC, Thompson CB. Understanding the Warburg effect: the metabolic requirements of cell proliferation. Science 2009", "https://pubmed.ncbi.nlm.nih.gov/19460998/"]]
    },
    c: [
      ["!Sitozolde glukozun iki pirüvata yıkılması", "iki pirüvat|2 pirüvat|iki piruvat|glukozun pirüvata|glukozu pirüvata|glukoz yıkı|glukozun yıkı|glukozun parçalan"],
      ["!Net kazanç: 2 ATP ve 2 NADH", "net 2 atp|net iki atp|net kazanç iki atp|net kazanç 2 atp|net olarak iki atp|net olarak 2 atp"],
      ["!Geri dönüşsüz basamaklar: heksokinaz/glukokinaz, PFK-1, pirüvat kinaz", "heksokinaz|hekzokinaz|glukokinaz|pirüvat kinaz|piruvat kinaz"],
      ["!Hız kısıtlayıcı enzim PFK-1; fruktoz-2,6-bisfosfat ve AMP uyarır, ATP ve sitrat baskılar", "fosfofruktokinaz|pfk"],
      ["Anaerobik koşulda laktat dehidrogenaz ile NAD+ yenilenir", "laktat dehidrogenaz|ldh|anaerob|laktata"],
      ["Mitokondrisi olmayan eritrosit enerjisini yalnız glikolizden alır; 2,3-BPG yolu", "eritrosit|alyuvar|mitokondrisi yok|mitokondri yok|2 3 bpg|bifosfogliserat|bisfosfogliserat"],
      ["Pirüvat kinaz eksikliği hemolitik anemi yapar", "pirüvat kinaz eksik|piruvat kinaz eksik|hemolitik anemi"],
      ["Kanser hücrelerinde aerobik glikoliz (Warburg etkisi)", "warburg|aerobik glikoliz|kanser hücre|tümör hücre"]
    ]},
  { id: "biy-tca-dongusu", tr: "Sitrik asit (Krebs, TCA) döngüsü", en: "Citric acid (TCA) cycle", cat: "krb", lvl: 1,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Martínez-Reyes I, Chandel NS. Mitochondrial TCA cycle metabolites control physiology and disease. Nat Commun 2020", "https://pubmed.ncbi.nlm.nih.gov/31900386/"],
          ["Nolfi-Donegan D, Braganza A, Shiva S. Mitochondrial electron transport chain: oxidative phosphorylation, oxidant production, and methods of measurement. Redox Biol 2020", "https://pubmed.ncbi.nlm.nih.gov/32811789/"]]
    },
    c: [
      ["!Mitokondri matriksinde asetil-KoA ile oksaloasetatın sitrata dönüşmesi (sitrat sentaz)", "matriks|asetil koa|asetil ko a|asetil coa|oksaloasetat|sitrat sentaz"],
      ["!Bir asetil-KoA başına 3 NADH, 1 FADH2, 1 GTP ve 2 CO2", "3 nadh|üç nadh|fadh|gtp|iki karbondioksit|2 karbondioksit|iki co2|2 co2"],
      ["!Hız kısıtlayıcı enzim izositrat dehidrogenaz", "izositrat|isositrat"],
      ["Alfa-ketoglutarat dehidrogenaz: B1, B2, B3, B5 ve lipoik asit gerektirir (PDH ile aynı kofaktörler)", "ketoglutarat|lipoik|lipoat|tiamin|b1 vitamin"],
      ["Pirüvat dehidrogenaz kompleksi glikolizi döngüye bağlar", "pirüvat dehidrogenaz|piruvat dehidrogenaz|pdh"],
      ["Süksinat dehidrogenaz aynı zamanda ETZ'nin kompleks II'sidir", "süksinat dehidrogenaz|suksinat dehidrogenaz|kompleks 2|kompleks iki|kompleks ii"],
      ["Amfibolik yol; ara ürünler sentezde kullanılır, anaplerotik tepkimelerle (pirüvat karboksilaz) yerine konur", "amfibolik|anaplerot|pirüvat karboksilaz|piruvat karboksilaz|süksinil koa|suksinil koa|ara ürün"]
    ]},
  { id: "biy-elektron-transport-zinciri", tr: "Elektron transport zinciri ve oksidatif fosforilasyon", en: "Electron transport chain and oxidative phosphorylation", cat: "krb", lvl: 1,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Nolfi-Donegan D, Braganza A, Shiva S. Mitochondrial electron transport chain: oxidative phosphorylation, oxidant production, and methods of measurement. Redox Biol 2020", "https://pubmed.ncbi.nlm.nih.gov/32811789/"],
          ["Martínez-Reyes I, Chandel NS. Mitochondrial TCA cycle metabolites control physiology and disease. Nat Commun 2020", "https://pubmed.ncbi.nlm.nih.gov/31900386/"]]
    },
    c: [
      ["!İç mitokondri zarında kompleks I–IV; son elektron alıcısı oksijen, su oluşur", "iç zar|iç mitokondri|kompleks 1|kompleks bir|nadh dehidrogenaz|koenzim q|ubikinon|sitokrom c|son elektron alıcı|suya indirgen"],
      ["!Proton gradyanı ATP sentazı (kompleks V) çalıştırır: kemiozmotik hipotez", "proton gradyan|proton pompa|kemiozmot|mitchell|atp sentaz|kompleks 5|kompleks beş|kompleks v"],
      ["!İnhibitörler: rotenon (I), antimisin A (III), siyanür, CO, azid (IV), oligomisin (ATP sentaz)", "rotenon|antimisin|siyanür|karbonmonoksit|karbon monoksit|azid|oligomisin"],
      ["!Ayırıcılar (2,4-dinitrofenol, termogenin/UCP1) ATP yapmadan ısı üretir", "ayırıcı|uncoupl|dinitrofenol|dnp|termogenin|ucp|kahverengi yağ"],
      ["NADH ve FADH2 elektronları zincire taşır; FADH2 daha az ATP verir", "fadh|nadh"],
      ["Sitokrom c oksidaz (kompleks IV) oksijeni suya indirger", "sitokrom c oksidaz|sitokrom oksidaz|kompleks 4|kompleks dört|kompleks iv"],
      ["Elektron kaçağı ile reaktif oksijen türleri oluşur", "reaktif oksijen|serbest radikal|süperoksit|oksidatif stres|ros"]
    ]},
  { id: "biy-glukoneogenez", tr: "Glukoneogenez", en: "Gluconeogenesis", cat: "krb", lvl: 1,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Petersen MC, Vatner DF, Shulman GI. Regulation of hepatic glucose metabolism in health and disease. Nat Rev Endocrinol 2017", "https://pubmed.ncbi.nlm.nih.gov/28731034/"],
          ["Kishnani PS, et al. Diagnosis and management of glycogen storage disease type I: a practice guideline of the ACMG. Genet Med 2014", "https://pubmed.ncbi.nlm.nih.gov/25356975/"]]
    },
    c: [
      ["!Karbonhidrat olmayan öncüllerden glukoz yapımı; başlıca karaciğer, ayrıca böbrek", "karbonhidrat olmayan|yeni glukoz|glukoz yapımı|glukoz yapıl|glukoz sentez|glukoz üret"],
      ["!Öncüller: laktat (Cori döngüsü), alanin, gliserol, propiyonat", "laktat|cori|alanin|gliserol|propiyonat|propionat|aminoasit"],
      ["!Glikolizin geri dönüşsüz basamaklarını aşan enzimler: pirüvat karboksilaz, PEPCK, fruktoz-1,6-bisfosfataz, glukoz-6-fosfataz", "pirüvat karboksilaz|piruvat karboksilaz|pepck|fosfoenolpirüvat karboksikinaz|fosfoenolpiruvat|bisfosfataz|bifosfataz|glukoz 6 fosfataz|glukoz altı fosfataz"],
      ["Pirüvat karboksilaz mitokondride, biotin bağımlı; asetil-KoA ile uyarılır", "biotin|biyotin|mitokondri|asetil koa ile uyar|asetil koa uyar"],
      ["Çift karbonlu yağ asitleri (asetil-KoA) net glukoz veremez", "net glukoz veremez|net glukoz sağlayamaz|net glukoz yapılamaz|net glukoz vermez|yağ asitlerinden glukoz yapılamaz|yağ asitleri glukoza dönüşemez|asetil koa glukoza dönüşemez|asetil koa glukoza çevrilemez"],
      ["Kas glukoz-6-fosfataz içermez, kana glukoz veremez", "kasta glukoz 6 fosfataz yok|kasta glukoz 6 fosfataz bulunmaz|kas dokusunda bu enzim olmadığı|kas glukoz veremez|kas kana glukoz veremez|kas kana glukoz vermez"],
      ["Glukagon ve kortizol uyarır, insülin baskılar", "glukagon|kortizol|insülin|insulin"],
      ["Alkol NADH artışıyla glukoneogenezi baskılar, hipoglisemi yapar", "alkol nadh|alkolik|alkolde hipoglisem|etanol"]
    ]},
  { id: "biy-enzim-kinetigi", tr: "Enzim kinetiği ve inhibisyon tipleri", en: "Enzyme kinetics and inhibition", cat: "enz", lvl: 1,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Johnson KA, Goody RS. The original Michaelis constant: translation of the 1913 Michaelis-Menten paper. Biochemistry 2011", "https://pubmed.ncbi.nlm.nih.gov/21888353/"],
          ["Srinivasan B. A guide to the Michaelis-Menten equation: steady state and beyond. FEBS J 2022", "https://doi.org/10.1111/febs.16124"]]
    },
    c: [
      ["!Km: Vmax'ın yarısına ulaşılan substrat konsantrasyonu; afiniteyle ters orantılı", "km|michaelis|yarı maksimum|vmax ın yarısı|yarısına ulaş|afinite"],
      ["!Vmax: enzim doyduğunda maksimum hız, enzim miktarıyla orantılı", "vmax|maksimum hız|v max|doygun"],
      ["!Yarışmalı inhibisyon: Km artar, Vmax değişmez; fazla substratla aşılır", "yarışmalı|kompetitif|competitive"],
      ["!Yarışmasız inhibisyon: Vmax azalır, Km değişmez", "yarışmasız|nonkompetitif|non kompetitif|noncompetitive"],
      ["Lineweaver-Burk (çift ters) grafiği", "lineweaver|çift ters|çift resiprokal|double reciprocal"],
      ["Akompetitif (unkompetitif) inhibisyonda Km ve Vmax birlikte azalır", "akompetitif|unkompetitif|uncompetitive|ikisi de azal|ikisi birden azal"],
      ["Allosterik enzimler sigmoid eğri verir, Michaelis-Menten'e uymaz", "allosterik|sigmoid|kooperatif"],
      ["Geri dönüşsüz inhibisyon: aspirin (COX), organofosfatlar", "geri dönüşsüz|irreversibl|aspirin|organofosfat|kovalent"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "biy-glikojen-depo-hastaliklari", tr: "Glikojen depo hastalıkları", en: "Glycogen storage diseases", cat: "kal", lvl: 2,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Kishnani PS, et al. Diagnosis and management of glycogen storage disease type I: a practice guideline of the ACMG. Genet Med 2014", "https://pubmed.ncbi.nlm.nih.gov/25356975/"],
          ["Kanungo S, Wells K, Tribett T, El-Gharbawy A. Glycogen metabolism and glycogen storage disorders. Ann Transl Med 2018", "https://pubmed.ncbi.nlm.nih.gov/30740405/"]]
    },
    c: [
      ["!Tip I (von Gierke): glukoz-6-fosfataz eksikliği", "von gierke|gierke|tip 1|tip bir|glukoz 6 fosfataz|glukoz altı fosfataz"],
      ["!Tip I bulguları: açlık hipoglisemisi, laktik asidoz, hiperürisemi, hiperlipidemi, hepatomegali", "laktik asidoz|laktat|hiperürisemi|ürik asit|hiperlipidemi|trigliserit|hepatomegali|karaciğer büyü"],
      ["!Tip II (Pompe): lizozomal asit alfa-glukozidaz eksikliği, kardiyomegali", "pompe|asit maltaz|alfa glukozidaz|kardiyomegali|kalp büyü|kardiyomiyopati"],
      ["!Tip V (McArdle): kas glikojen fosforilaz eksikliği; egzersizle kramp, miyoglobinüri", "mcardle|mc ardle|makardl|kas fosforilaz|miyofosforilaz|miyoglobinüri|kramp|ikinci rüzgar|second wind"],
      ["Tip III (Cori): dallanma kırıcı (debranching) enzim eksikliği", "tip 3|tip üç|cori|debranch|dal kırıcı|dallanma kırıcı|dal açıcı"],
      ["Tip Ib: glukoz-6-fosfat translokaz; nötropeni", "tip 1b|translokaz|nötropeni|notropeni"],
      ["Tip I tedavisi: sık beslenme, çiğ mısır nişastası; fruktoz/galaktoz kısıtlaması", "mısır nişasta|nişasta|sık beslen|sık aralıkla|gece beslen|fruktoz|galaktoz"]
    ]},
  { id: "biy-ure-dongusu", tr: "Üre döngüsü ve bozuklukları", en: "Urea cycle and its disorders", cat: "azt", lvl: 2,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Häberle J, et al. Suggested guidelines for the diagnosis and management of urea cycle disorders: first revision. J Inherit Metab Dis 2019", "https://pubmed.ncbi.nlm.nih.gov/30982989/"],
          ["Häberle J, et al. Suggested guidelines for the diagnosis and management of urea cycle disorders. Orphanet J Rare Dis 2012", "https://pubmed.ncbi.nlm.nih.gov/22642880/"]]
    },
    c: [
      ["!Karaciğerde amonyağın üreye çevrilmesi; ilk iki basamak mitokondride, kalanı sitozolde", "amonyak|amonyum|amonyağın üreye|üreye çevr|üreye dönüş"],
      ["!Hız kısıtlayıcı enzim karbamoil fosfat sentetaz I; N-asetilglutamat ile aktive olur", "karbamoil fosfat sentetaz|karbamil fosfat sentetaz|cps|asetilglutamat|asetil glutamat|nags"],
      ["!En sık bozukluk OTC eksikliği (X'e bağlı); orotik asit artar", "ornitin transkarbamilaz|ornitin transkarbamoilaz|otc|orotik|x e bağlı|x'e bağlı"],
      ["!Hiperamonyemi: kusma, letarji, ensefalopati, solunumsal alkaloz", "hiperamonyemi|letarji|ensefalopati|bilinç|koma|solunumsal alkaloz|respiratuvar alkaloz"],
      ["Döngü ara ürünleri: sitrülin, argininosüksinat, arjinin, ornitin; fumarat TCA'ya bağlar", "sitrülin|sitrulin|argininosüksinat|arjininosüksinat|arjinin|ornitin|fumarat"],
      ["CPS I eksikliğinde orotik asit artmaz (OTC'den ayrım)", "orotik asit artmaz|orotik asit normal|orotik asidüri yok|orotik yok"],
      ["Tedavi: protein kesilir, yüksek kalori, azot temizleyici (sodyum benzoat, fenilbütirat), arjinin, gerekirse hemodiyaliz", "benzoat|fenilbütirat|fenil bütirat|fenilasetat|azot temizley|hemodiyaliz|diyaliz|karglumik"]
    ]},
  { id: "biy-pentoz-fosfat-g6pd", tr: "Pentoz fosfat yolu ve G6PD eksikliği", en: "Pentose phosphate pathway and G6PD deficiency", cat: "krb", lvl: 2,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Stincone A, et al. The return of metabolism: biochemistry and physiology of the pentose phosphate pathway. Biol Rev Camb Philos Soc 2015", "https://doi.org/10.1111/brv.12140"],
          ["Luzzatto L, Ally M, Notaro R. Glucose-6-phosphate dehydrogenase deficiency. Blood 2020", "https://pubmed.ncbi.nlm.nih.gov/32702756/"]]
    },
    c: [
      ["!Oksidatif evre: hız kısıtlayıcı G6PD, NADPH üretir", "g6pd|glukoz 6 fosfat dehidrogenaz|glukoz altı fosfat dehidrogenaz|nadph|oksidatif evre|oksidatif faz"],
      ["!Oksidatif olmayan evre: transketolaz (tiamin) ile riboz-5-fosfat, nükleotit sentezi", "transketolaz|transaldolaz|riboz|nükleotit sentez|nukleotid sentez|oksidatif olmayan"],
      ["!NADPH glutatyonu indirgenmiş tutar; eritrositi oksidatif hasardan korur", "glutatyon|glutation|indirgenmiş|oksidatif hasar|oksidatif stres"],
      ["!G6PD eksikliği X'e bağlı; oksidan tetikleyiciyle akut hemoliz", "x e bağlı|x'e bağlı|x kromozom|hemoliz|hemolitik"],
      ["Tetikleyiciler: bakla (favizm), primakin, dapson, sülfonamid, rasburikaz, enfeksiyon", "bakla|favizm|primakin|dapson|sülfonamid|sulfonamid|rasburikaz"],
      ["Periferik yaymada Heinz cisimcikleri ve ısırık hücreleri", "heinz|ısırık hücre|bite cell|isirik"],
      ["NADPH yağ asidi/steroid sentezi ve nötrofil solunum patlamasında kullanılır", "yağ asidi sentez|steroid sentez|solunum patlama|respiratuvar patlama|nadph oksidaz|kronik granülomatöz"],
      ["Akut hemolizde enzim düzeyi yalancı normal çıkabilir; sıtmaya karşı görece koruma", "yalancı normal|yanlış normal|retikülosit|sıtma|malarya"]
    ]},
  { id: "biy-yag-asidi-oksidasyonu", tr: "Yağ asidi beta-oksidasyonu ve bozuklukları", en: "Fatty acid beta-oxidation and its disorders", cat: "lip", lvl: 2,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Merritt JL 2nd, Norris M, Kanungo S. Fatty acid oxidation disorders. Ann Transl Med 2018", "https://doi.org/10.21037/atm.2018.10.57"],
          ["Goetzman ES. Advances in the understanding and treatment of mitochondrial fatty acid oxidation disorders. Curr Genet Med Rep 2017", "https://pmc.ncbi.nlm.nih.gov/articles/PMC5699504/"]]
    },
    c: [
      ["!Uzun zincirli yağ asitleri mitokondriye karnitin mekiğiyle girer (CPT-I)", "karnitin|cpt|mekik|açil karnitin|asil karnitin"],
      ["!CPT-I malonil-KoA ile baskılanır (sentez ile yıkım aynı anda olmaz)", "malonil"],
      ["!Her döngüde iki karbonlu asetil-KoA, NADH ve FADH2 çıkar", "asetil koa|asetil coa|iki karbon|2 karbon|fadh|nadh"],
      ["Karaciğerde asetil-KoA'dan keton cisimleri yapılır", "keton|ketojenez|asetoasetat|hidroksibütirat|beta hidroksi"],
      ["!MCAD eksikliği: açlıkta hipoketotik hipoglisemi", "mcad|orta zincir|hipoketotik|keton yapılamaz|keton olmadan"],
      ["Tanı: açilkarnitin profili; tedavi: açlıktan kaçınma", "açilkarnitin|asilkarnitin|açil karnitin profil|açlıktan kaçın|aç bırakılmama|uzun açlık"],
      ["Tek sayıda karbonlu yağ asitleri propiyonil-KoA → metilmalonil-KoA (B12) → süksinil-KoA", "tek sayıda karbon|tek sayılı|propiyonil|propionil|metilmalonil"],
      ["Çok uzun zincirli yağ asitleri peroksizomda yıkılır (Zellweger, adrenolökodistrofi)", "peroksizom|zellweger|adrenolökodistrofi|adrenolokodistrofi|çok uzun zincir"]
    ]},
  { id: "biy-kolesterol-lipoproteinler", tr: "Kolesterol sentezi ve lipoprotein metabolizması", en: "Cholesterol synthesis and lipoproteins", cat: "lip", lvl: 2,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Goldstein JL, Brown MS. A century of cholesterol and coronaries: from plaques to genes to statins. Cell 2015", "https://pubmed.ncbi.nlm.nih.gov/25815993/"],
          ["Feingold KR. Introduction to lipids and lipoproteins. Endotext (NCBI Bookshelf)", "https://www.ncbi.nlm.nih.gov/books/NBK305896/"]]
    },
    c: [
      ["!Hız kısıtlayıcı enzim HMG-KoA redüktaz (asetil-KoA → mevalonat)", "hmg koa|hmg co a|hmg coa|mevalonat|redüktaz"],
      ["!Statinler HMG-KoA redüktazı yarışmalı inhibe eder, LDL reseptörü artar", "statin"],
      ["Hücre içi kolesterol SREBP ile sentezi ve LDL reseptörünü düzenler", "srebp|sterol düzenley|sterol regulatory|geri bildirim|feedback"],
      ["!Şilomikron (apo B-48) diyet trigliseridini, VLDL (apo B-100) karaciğer trigliseridini taşır", "şilomikron|silomikron|vldl|b 48|b48|b 100|b100"],
      ["!LDL kolesterolü dokulara taşır, LDL reseptörüyle alınır; HDL (apo A-I, LCAT) ters kolesterol taşınması", "ldl reseptör|hdl|ters kolesterol|ters taşın|lcat|apo a"],
      ["Lipoprotein lipaz apo C-II ile aktive olur; apo E kalıntı alımı", "lipoprotein lipaz|apo c|c 2|c2|apo e|kalıntı|remnant"],
      ["Ailesel hiperkolesterolemi: LDL reseptör geni kusuru", "ailesel hiperkolesterolemi|familyal hiperkolesterolemi|ldl reseptör gen|ldl reseptör eksik"],
      ["Kolesterolden safra asitleri, steroid hormonlar ve D vitamini", "safra asit|steroid hormon|d vitamini|vitamin d"]
    ]},
  { id: "biy-dna-replikasyon-onarim", tr: "DNA replikasyonu ve onarım mekanizmaları", en: "DNA replication and repair", cat: "enz", lvl: 2,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Jackson SP, Bartek J. The DNA-damage response in human biology and disease. Nature 2009", "https://pubmed.ncbi.nlm.nih.gov/19847258/"],
          ["Chatterjee N, Walker GC. Mechanisms of DNA damage, repair, and mutagenesis. Environ Mol Mutagen 2017", "https://pubmed.ncbi.nlm.nih.gov/28485537/"]]
    },
    c: [
      ["!Yarı korunumlu replikasyon; DNA polimeraz yalnız 5'→3' yönde sentezler, öncü ve geri kalan zincir (Okazaki)", "yarı korunumlu|semikonservatif|semi konservatif|5 3|beş üç|okazaki|öncü zincir|geri kalan zincir|lagging|leading"],
      ["!Replikasyon enzimleri: helikaz, topoizomeraz, primaz (RNA primer), ligaz", "helikaz|topoizomeraz|primaz|primer|ligaz|giraz"],
      ["Telomeraz kromozom uçlarını korur", "telomer"],
      ["!Mismatch onarım kusuru: Lynch sendromu (HNPCC)", "mismatch|yanlış eşleşme|uyumsuz baz|lynch|hnpcc|mikrosatellit"],
      ["!Nükleotit eksizyon onarımı: UV ile oluşan timin dimerleri; kusuru kseroderma pigmentozum", "nükleotit eksizyon|nukleotid eksizyon|timin dimer|pirimidin dimer|kseroderma|xeroderma|ultraviyole|uv"],
      ["Baz eksizyon onarımı: DNA glikozilaz, deaminasyon/oksidatif hasar", "baz eksizyon|glikozilaz|deaminasyon"],
      ["Çift zincir kırığı: homolog rekombinasyon (BRCA1/2) ve homolog olmayan uç birleştirme (NHEJ)", "çift zincir kırı|homolog rekombinasyon|brca|uç birleştirme|nhej"],
      ["Topoizomeraz ilaç hedefi: kinolonlar (bakteri giraz), etoposid, irinotekan", "kinolon|florokinolon|siprofloksasin|etoposid|irinotekan|topotekan"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "biy-lizozomal-depo-hastaliklari", tr: "Lizozomal depo hastalıkları (sfingolipidozlar)", en: "Lysosomal storage diseases (sphingolipidoses)", cat: "kal", lvl: 3,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Platt FM, d'Azzo A, Davidson BL, Neufeld EF, Tifft CJ. Lysosomal storage diseases. Nat Rev Dis Primers 2018", "https://pubmed.ncbi.nlm.nih.gov/30275469/"],
          ["Stirnemann J, et al. A review of Gaucher disease pathophysiology, clinical presentation and treatments. Int J Mol Sci 2017", "https://pubmed.ncbi.nlm.nih.gov/28218669/"]]
    },
    c: [
      ["!Gaucher: glukoserebrozidaz eksikliği; hepatosplenomegali, kemik tutulumu, buruşuk kağıt görünümlü Gaucher hücresi", "gaucher|gosé|goşe|glukoserebrozid|glukoserebrosid|beta glukozidaz|buruşuk kağıt|buruşturulmuş kağıt"],
      ["!Tay-Sachs: heksozaminidaz A eksikliği, GM2 birikimi, kiraz kırmızısı leke, organomegali yok", "tay sachs|tay saks|taysaks|heksozaminidaz|hekzozaminidaz|gm2|gm 2"],
      ["!Niemann-Pick: sfingomiyelinaz eksikliği; kiraz kırmızısı leke ile hepatosplenomegali, köpük hücreleri", "niemann|nieman|sfingomiyelinaz|sfingomiyelin|köpük hücre|kopuk hucre"],
      ["!Fabry: alfa-galaktozidaz A eksikliği, X'e bağlı; anjiyokeratom, akroparestezi, böbrek ve kalp tutulumu", "fabry|fabri|galaktozidaz|anjiyokeratom|anjiokeratom|akroparestezi|globotriaozil|seramid triheksozit"],
      ["Çoğu otozomal resesif; Fabry ve Hunter X'e bağlı", "otozomal resesif|otozomal çekinik|x e bağlı|x'e bağlı|hunter"],
      ["Kiraz kırmızısı leke: Tay-Sachs ve Niemann-Pick", "kiraz kırmızı|kiraz kirmizi|cherry red"],
      ["Tedavi: enzim replasman (imigluseraz, agalsidaz) ve substrat azaltma (eliglustat, miglustat)", "enzim replasman|enzim yerine koy|imigluseraz|agalsidaz|substrat azalt|substrat redüksiyon|eliglustat|miglustat"],
      ["Diğer: Krabbe (galaktoserebrozidaz), metakromatik lökodistrofi (arilsülfataz A)", "krabbe|metakromatik|arilsülfataz|arilsulfataz|galaktoserebrozidaz"]
    ]},
  { id: "biy-aminoasit-metabolizma-bozukluklari", tr: "Aminoasit metabolizması bozuklukları (MSUD, alkaptonüri, homosistinüri, PKU)", en: "Disorders of amino acid metabolism", cat: "azt", lvl: 3,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Morris AA, et al. Guidelines for the diagnosis and management of cystathionine beta-synthase deficiency. J Inherit Metab Dis 2017", "https://pubmed.ncbi.nlm.nih.gov/27778219/"],
          ["van Wegberg AMJ, et al. The complete European guidelines on phenylketonuria: diagnosis and treatment. Orphanet J Rare Dis 2017", "https://pubmed.ncbi.nlm.nih.gov/29025426/"]]
    },
    c: [
      ["!Akçaağaç şurubu idrar hastalığı (MSUD): dallı zincirli alfa-keto asit dehidrogenaz; lösin, izolösin, valin", "akçaağaç|akcaagac|msud|maple|dallı zincir|dalli zincir|lösin|losin|izolösin|valin"],
      ["!Alkaptonüri: homogentizat oksidaz eksikliği; bekleyince kararan idrar, okronoz, artrit", "alkaptonüri|alkaptonuri|homogentizi|homojentizi|okronoz|kararan idrar|idrar karar|siyah idrar"],
      ["!Homosistinüri: sistatiyonin beta-sentaz eksikliği; lens dislokasyonu, marfanoid görünüm, tromboz", "homosistinüri|homosistinuri|sistatiyonin|sistationin|lens dislok|lens çık|ektopia lentis|marfanoid"],
      ["Homosistinüri tedavisi: piridoksin (B6), betain, metiyoninden kısıtlı diyet", "piridoksin|b6|betain|metiyonin|metionin"],
      ["!PKU: fenilalanin hidroksilaz ya da kofaktör BH4 eksikliği; tirozin esansiyel olur", "fenilalanin hidroksilaz|fenil alanin hidroksilaz|tetrahidrobiyopterin|tetrahidrobiopterin|bh4|tirozin esansiyel|tirozin dışarıdan"],
      ["MSUD'da tiamin kofaktördür; akut ensefalopati", "tiamin|ensefalopati|b1"],
      ["Tirozin yolu bozuklukları: albinizm (tirozinaz), tirozinemi", "albinizm|tirozinaz|tirozinemi"]
    ]},
  { id: "biy-hem-sentezi-porfiriler", tr: "Hem sentezi ve porfiriler", en: "Heme synthesis and porphyrias", cat: "azt", lvl: 3,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Wang B, Bonkovsky HL, Lim JK, Balwani M. AGA clinical practice update on diagnosis and management of acute hepatic porphyrias: expert review. Gastroenterology 2023", "https://pubmed.ncbi.nlm.nih.gov/36642627/"],
          ["Puy H, Gouya L, Deybach JC. Porphyrias. Lancet 2010", "https://pubmed.ncbi.nlm.nih.gov/20226990/"]]
    },
    c: [
      ["!Süksinil-KoA + glisin; hız kısıtlayıcı ALA sentaz (B6 bağımlı); ilk ve son basamaklar mitokondride", "süksinil|suksinil|glisin|ala sentaz|alas|aminolevulinik|aminolevulinat"],
      ["!Kurşun ALA dehidrataz ve ferroşelatazı inhibe eder", "kurşun|kursun|ferroşelataz|ferroselataz|ala dehidrataz"],
      ["!Akut intermitan porfiri: porfobilinojen deaminaz eksikliği; karın ağrısı, nöropati, psikiyatrik bulgu, ışığa duyarlılık yok", "akut intermitan|akut aralıklı|porfobilinojen deaminaz|hidroksimetilbilan|hmbs"],
      ["!Atağı tetikleyenler: ilaçlar (barbitürat), alkol, açlık, hormonlar; tedavi IV hemin ve glukoz", "barbitür|açlık|alkol|hemin|hem arjinat|glukoz yükle|karbonhidrat yükle|givosiran"],
      ["Atakta idrarda porfobilinojen artar; idrar bekleyince koyulaşır", "porfobilinojen|pbg|idrar koyu|kırmızı idrar|bordo idrar|koyulaş"],
      ["Porfiria kutanea tarda: üroporfirinojen dekarboksilaz; güneşe açık deride bül, hepatit C, alkol, demir", "kutanea tarda|pct|üroporfirinojen dekarboksilaz|uroporfirinojen|bül|ışığa duyarl|fotosensitiv|hepatit c"],
      ["Kurşun zehirlenmesinde bazofilik noktalanma ve sideroblastik anemi", "bazofilik noktalan|sideroblast"]
    ]},
  { id: "biy-purin-metabolizmasi-lesch-nyhan", tr: "Pürin metabolizması ve Lesch-Nyhan sendromu", en: "Purine metabolism and Lesch-Nyhan syndrome", cat: "azt", lvl: 3,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Torres RJ, Puig JG. Hypoxanthine-guanine phosophoribosyltransferase (HPRT) deficiency: Lesch-Nyhan syndrome. Orphanet J Rare Dis 2007", "https://pubmed.ncbi.nlm.nih.gov/18067674/"],
          ["Dalbeth N, Gosling AL, Gaffo A, Abhishek A. Gout. Lancet 2021", "https://pubmed.ncbi.nlm.nih.gov/33798500/"]]
    },
    c: [
      ["!De novo sentez PRPP'den başlar, hız kısıtlayıcı PRPP amidotransferaz; ilk pürin IMP", "prpp|amidotransferaz|de novo|imp|inozin monofosfat|inozinik"],
      ["!Kurtarma yolu: HGPRT hipoksantin ve guanini nükleotide geri çevirir", "kurtarma|salvage|hgprt|hprt|hipoksantin guanin|fosforiboziltransferaz"],
      ["!Lesch-Nyhan: X'e bağlı HGPRT eksikliği; hiperürisemi, kendine zarar verme, distoni, zihinsel gerilik", "lesch|leş nayhan|leşnihan|kendine zarar|kendini ısır|parmak ısır|dudak ısır|distoni|koreoatetoz"],
      ["Pürin yıkımı: ksantin oksidaz ile ürik asit; allopürinol/febuksostat inhibe eder", "ksantin oksidaz|allopürinol|allopurinol|febuksostat|ürik asit|urik asit"],
      ["Allopürinol ürik asidi düşürür ama nörolojik bulguları düzeltmez", "nörolojik bulgu|nörolojik tablo|nörolojiyi düzeltmez|düzeltmez"],
      ["Bezde turuncu kum görünümlü ürat kristalleri, ürat taşı", "turuncu|ürat kristal|ürat taşı|turuncu kum"],
      ["Adenozin deaminaz eksikliği: ağır kombine immün yetmezlik (SCID)", "adenozin deaminaz|ada eksik|scid|kombine immün"],
      ["Mikofenolat IMP dehidrogenazı, azatiyoprin/6-MP pürin sentezini hedefler", "mikofenolat|imp dehidrogenaz|azatiyoprin|merkaptopürin|merkaptopurin"]
    ]},
  { id: "biy-vitamin-koenzimleri", tr: "Vitamin koenzimleri: tiamin, B12, folat, niasin", en: "Vitamin coenzymes: thiamine, B12, folate, niacin", cat: "enz", lvl: 3,
    src: {
      k: ["Lippincott Illustrated Reviews: Biochemistry, 8. baskı (2021)", "Harper's Illustrated Biochemistry, 32. baskı (2023)"],
      m: [["Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med 2013", "https://pubmed.ncbi.nlm.nih.gov/23301732/"],
          ["Green R, et al. Vitamin B12 deficiency. Nat Rev Dis Primers 2017", "https://pubmed.ncbi.nlm.nih.gov/28660890/"]]
    },
    c: [
      ["!Tiamin pirofosfat: pirüvat dehidrogenaz, alfa-ketoglutarat dehidrogenaz, dallı zincirli keto asit dehidrogenaz ve transketolaz kofaktörü", "tiamin pirofosfat|tiamin|tpp|transketolaz|ketoglutarat dehidrogenaz"],
      ["Tiamin eksikliği: beriberi, Wernicke-Korsakoff; glukozdan önce tiamin verilir", "beriberi|beri beri|wernicke|korsakoff|glukozdan önce"],
      ["!B12 iki enzimin kofaktörü: metilmalonil-KoA mutaz ve metiyonin sentaz", "metilmalonil koa mutaz|mutaz|metiyonin sentaz|metionin sentaz"],
      ["!B12 eksikliğinde metilmalonik asit ve homosistein, folat eksikliğinde yalnız homosistein artar", "b12 eksikliğinde metilmalonik asit artar|b12 eksikliğinde metilmalonik asit yüksel|b12 eksikliğinde hem metilmalonik|folat eksikliğinde metilmalonik asit normal|folat eksikliğinde ise yalnız homosistein|folat eksikliğinde yalnız homosistein|folat eksikliğinde sadece homosistein"],
      ["Folat (tetrahidrofolat) tek karbon taşır; timidilat sentezi için gerekli, metotreksat DHFR'yi inhibe eder", "tetrahidrofolat|thf|tek karbon|timidilat|metotreksat|dihidrofolat redüktaz|dhfr"],
      ["Metil-folat tuzağı: B12 yokluğunda folat metil formda kalır", "folat tuzağı|metil folat|metil tuzağı|metiltetrahidrofolat"],
      ["!Niasin NAD/NADP'ye katılır, triptofandan yapılabilir; eksikliği pellagra (dermatit, ishal, demans)", "niasin|nikotinik|nad|pellagra|triptofan"],
      ["Niasin eksikliği nedenleri: Hartnup hastalığı, karsinoid sendrom, izoniazid", "hartnup|karsinoid|izoniazid"]
    ]}
]
});
