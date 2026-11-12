/* Romatoloji — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta en sık sorulan inflamatuvar artritler (RA, spondiloartritler), bağ dokusu hastalıkları (SLE, SSc, Sjögren, APS),
   vaskülitler ve Türkiye'de sık görülen otoinflamatuvar hastalıklar (Behçet, FMF) ile acilde kaçırılmaması gereken septik artrit seçildi.
   Güncel EULAR/ACR sınıflama ölçütleri ve tedavi önerileri esas alındı; lupus nefriti nefroloji paketinde olduğu için alınmadı.
   Kılavuzlar arasındaki farklar ve doğrulanamayan ayrıntılar docs/klinik/romatoloji.md'de. */
UP.add({ id: "romatoloji", subs: {
    ina: "İnflamatuvar artritler",
    bdh: "Bağ dokusu hastalıkları",
    vas: "Vaskülitler ve otoinflamatuvar hastalıklar",
    dej: "Kristal, dejeneratif ve enfeksiyöz artritler"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "rom-romatoid-artrit", tr: "Romatoid artrit: tanı ve tedavi", en: "Rheumatoid arthritis", cat: "ina", lvl: 1,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2010 Rheumatoid arthritis classification criteria: an American College of Rheumatology/European League Against Rheumatism collaborative initiative. Ann Rheum Dis 2010", "https://doi.org/10.1136/ard.2010.138461"],
          ["EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological DMARDs: 2022 update. Ann Rheum Dis 2023", "https://pubmed.ncbi.nlm.nih.gov/36357155/"]]
    },
    c: [
      ["!Simetrik, küçük eklem (MKF, PİF, el bileği) poliartriti; DİF korunur", "küçük eklem|metakarpofalang|mkf|mcp|proksimal interfalang|pif|el bileği ve parmak"],
      ["Uzun süren sabah tutukluğu, sinovit", "sabah tutukluğ|sabah sertliğ|sinovit|sinovyal inflamasyon|pannus"],
      ["!Seroloji: RF ve anti-CCP (ACPA)", "romatoid faktör|rf pozitif|anti ccp|anticcp|anti-ccp|acpa|sitrülin"],
      ["ACR/EULAR 2010 sınıflama: eklem, seroloji, akut faz, süre; 10 üzerinden ≥6 puan", "2010 kriter|2010 ölçüt|2010 acr|2010 sınıflama|altı puan|6 puan|on üzerinden|10 üzerinden"],
      ["Eklem dışı: romatoid nodül, interstisyel akciğer hastalığı, kardiyovasküler risk", "nodül|interstisyel akciğer|akciğer tutulum|eklem dışı|ekstraartiküler|kardiyovasküler risk"],
      ["Radyoloji: periartiküler osteopeni, eklem aralığı daralması, erozyon", "erozyon|eroziv|periartiküler osteopeni|jukstaartiküler"],
      ["!İlk tercih metotreksat (+ kısa süreli glukokortikoid köprü)", "metotreksat|methotrexate|mtx"],
      ["!Hedefe yönelik tedavi (treat-to-target): remisyon ya da düşük aktivite", "hedefe yönelik|treat to target|hedef remisyon|remisyon ya da düşük|remisyon veya düşük|düşük hastalık aktivite|das28|cdai"],
      ["Yanıt yoksa ve kötü prognoz varsa biyolojik (TNF inhibitörü vb.) ya da JAK inhibitörü", "biyolojik|tnf inhibit|anti tnf|antitnf|adalimumab|etanersept|infliksimab|tosilizumab|abatasept|rituksimab|jak inhibit|tofasitinib|baricitinib"]
    ]},
  { id: "rom-sle", tr: "Sistemik lupus eritematozus", en: "Systemic lupus erythematosus", cat: "bdh", lvl: 1,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2019 European League Against Rheumatism/American College of Rheumatology classification criteria for systemic lupus erythematosus. Ann Rheum Dis 2019", "https://doi.org/10.1136/annrheumdis-2018-214819"],
          ["EULAR recommendations for the management of systemic lupus erythematosus: 2023 update. Ann Rheum Dis 2024", "https://doi.org/10.1136/ard-2023-224762"]]
    },
    c: [
      ["!Doğurganlık çağındaki kadında çok sistemli otoimmün hastalık", "doğurganlık çağ|doğurganlık yaş|genç kadın|çok sistem|multisistem|birçok organ|çok organ"],
      ["Bulgular: malar döküntü, fotosensitivite, oral ülser, artrit, serozit, sitopeni", "malar|kelebek|fotosensitiv|güneş hassas|oral ülser|ağız yara|serozit|plörit|perikardit|sitopeni|lökopeni|trombositopeni|hemolitik"],
      ["!ANA giriş ölçütü; EULAR/ACR 2019'da ≥10 puan", "ana pozitif|ana pozitifliği|ana negatif|antinükleer antikor|ana testi|ana giriş|giriş kriter|giriş ölçüt|10 puan|on puan"],
      ["!Özgül antikorlar: anti-dsDNA, anti-Sm; düşük C3/C4", "dsdna|ds dna|çift sarmal|anti sm|anti smith|smith|kompleman|c3|c4|anti ds dna|hipokomplementemi|kompleman düşük|kompleman düzey"],
      ["Böbrek, nöropsikiyatrik tutulum ağır seyrin göstergesi", "nöropsikiyatr|nöbet|psikoz|böbrek tutulum|santral sinir sistemi tutulum"],
      ["!Tüm hastalara hidroksiklorokin (retina taraması ile)", "hidroksiklorokin|plaquenil|antimalarya|antimalaryal|retina|göz muayene|göz kontrol|göz dibi"],
      ["Glukokortikoid en düşük dozda, mümkünse kesilir; steroid koruyucu ilaçlar", "en düşük doz|steroid koruyucu|steroid tasarruf|mümkünse kes"],
      ["Dirençli/ağır hastalıkta belimumab, anifrolumab, rituksimab", "belimumab|anifrolumab|rituksimab|biyolojik"]
    ]},
  { id: "rom-gut", tr: "Gut", en: "Gout", cat: "dej", lvl: 1,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res 2020", "https://doi.org/10.1002/acr.24180"],
          ["2015 Gout classification criteria: an American College of Rheumatology/European League Against Rheumatism collaborative initiative. Ann Rheum Dis 2015", "https://doi.org/10.1136/annrheumdis-2015-208237"]]
    },
    c: [
      ["!Monosodyum ürat kristal birikimi; hiperürisemi zemininde", "ürat|ürik asit|hiperürisem|monosodyum"],
      ["Akut atak: en sık birinci MTF eklem (podagra), ani kızarık şiş eklem", "podagra|ayak başparmak|başparmak|birinci metatarsofalang|metatarsofalang|mtf"],
      ["!Tanı: sinovyal sıvıda negatif çift kırılımlı iğne kristal (polarize mikroskop)", "polarize|negatif çift kırılım|çift kırılım|iğne şekil|iğne biçim|kristal görül|eklem sıvısı|artrosentez|ponksiyon"],
      ["Tofüs ve kronik tofüslü artrit", "tofüs|tofus|tofü"],
      ["Atak tedavisi: kolşisin, NSAİİ ya da glukokortikoid", "kolşisin|colchicine|nsai|nonsteroid|steroid olmayan|naproksen|indometazin|glukokortikoid|kortikosteroid|prednizolon"],
      ["!Ürat düşürücü tedavi: ilk tercih allopürinol, düşük dozla başla, titre et", "allopürinol|allopurinol|ürat düşürücü|febuksostat|ksantin oksidaz"],
      ["Hedef serum ürik asit <6 mg/dL (treat-to-target)", "6 mg|altının altı|6 nın altı|altı miligram|hedef ürik|hedefe yönelik|treat to target"],
      ["Başlarken en az 3–6 ay antiinflamatuvar profilaksi; atakta ürat düşürücü kesilmez", "profilaksi|üç altı ay|3 6 ay|3-6 ay|kesilmez|kesmiyoruz|devam edil"],
      ["Tetikleyiciler: alkol, purin, fruktoz, diüretik; HLA-B*58:01 riski", "alkol|purin|kırmızı et|fruktoz|diüretik|tiyazid|hla b 58|hla b58|5801|58 01"]
    ]},
  { id: "rom-osteoartrit", tr: "Osteoartrit", en: "Osteoarthritis", cat: "dej", lvl: 1,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2019 American College of Rheumatology/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Rheumatol 2020", "https://doi.org/10.1002/art.41142"],
          ["OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis. Osteoarthritis Cartilage 2019", "https://doi.org/10.1016/j.joca.2019.06.011"]]
    },
    c: [
      ["!Eklem kıkırdağı kaybı ile giden dejeneratif, en sık eklem hastalığı; diz, kalça, el", "kıkırdak|kartilaj|dejeneratif|kireçlenme|gonartroz|koksartroz|aşınma"],
      ["Risk: yaş, obezite, kadın, travma, eklem dizilim bozukluğu", "obezite|kilolu|yaşlanma|ileri yaş|travma|menisküs|dizilim"],
      ["Mekanik ağrı (hareketle artar, dinlenmeyle azalır), kısa sabah tutukluğu, krepitasyon", "hareketle art|mekanik ağrı|kullanmakla art|dinlenmeyle|istirahatle azal|krepitasyon|kısa süreli sabah|kısa sabah"],
      ["El: Heberden (DİF) ve Bouchard (PİF) nodülleri", "heberden|bouchard|distal interfalang"],
      ["!Grafi: eklem aralığı daralması, osteofit, subkondral skleroz ve kist", "osteofit|eklem aralığı daral|eklem mesafe|subkondral|kellgren"],
      ["!Temel tedavi: eğitim, egzersiz, kilo verme", "egzersiz|kilo ver|zayıfla|fizyoterap|tai chi|kas güçlendir|hasta eğitim|öz yönetim"],
      ["İlaç: topikal NSAİİ (diz, el), oral NSAİİ, eklem içi steroid", "topikal|jel|krem|nsai|nonsteroid|eklem içi|intraartiküler|duloksetin"],
      ["Son evrede total eklem protezi", "protez|artroplasti|eklem replasman|cerrahi"]
    ]},
  { id: "rom-septik-artrit", tr: "Septik artrit yaklaşımı", en: "Septic arthritis", cat: "dej", lvl: 1,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["Mathews CJ, Weston VC, Jones A, Field M, Coakley G. Bacterial septic arthritis in adults. Lancet 2010", "https://pubmed.ncbi.nlm.nih.gov/20206778/"],
          ["Couderc M, et al. 2020 French recommendations on the management of septic arthritis in an adult native joint. Joint Bone Spine 2020", "https://doi.org/10.1016/j.jbspin.2020.07.012"]]
    },
    c: [
      ["!Akut, sıcak, şiş, ağrılı tek eklem (en sık diz) = septik artrit dışlanana dek acil", "monoartrit|tek eklem|sıcak şiş|akut monoartik|romatolojik acil"],
      ["!En sık etken Staphylococcus aureus; genç cinsel aktifte gonokok", "cinsel aktif|gonokok|gonore|neisseria"],
      ["Risk: ileri yaş, RA, diyabet, protez eklem, IV ilaç kullanımı, immünsüpresyon", "protez eklem|eklem protez|damar içi madde|iv ilaç|romatoid artrit gibi|altta yatan eklem"],
      ["!Antibiyotikten önce eklem aspirasyonu: hücre sayımı, Gram boyama, kültür, kristal", "artrosentez|eklem ponksiyon|sinovyal sıvı|hücre sayı"],
      ["Sinovyal sıvıda yüksek lökosit, nötrofil hakimiyeti; kristal görülmesi enfeksiyonu dışlamaz", "pürülan|kristal görülmesi|enfeksiyonu dışlamaz|gut ile birlikte"],
      ["Kan kültürü, CRP/sedimantasyon", "kan kültür|gram boya"],
      ["!Ampirik IV antibiyotik ve eklem drenajı (iğne, artroskopi ya da açık)", "eklem drenaj|drenajı|lavaj|artroskop|debridman|tekrarlayan iğne aspirasyon"],
      ["Gecikirse kıkırdak yıkımı, kalıcı hasar ve sepsis", "kıkırdak yıkım|kıkırdak hasar|kalıcı eklem hasar"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "rom-aksiyel-spondiloartrit", tr: "Aksiyel spondiloartrit (ankilozan spondilit)", en: "Axial spondyloarthritis", cat: "ina", lvl: 2,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["ASAS-EULAR recommendations for the management of axial spondyloarthritis: 2022 update. Ann Rheum Dis 2023", "https://doi.org/10.1136/ard-2022-223296"],
          ["The development of Assessment of SpondyloArthritis international Society classification criteria for axial spondyloarthritis (part II): validation and final selection. Ann Rheum Dis 2009", "https://pubmed.ncbi.nlm.nih.gov/19297344/"]]
    },
    c: [
      ["!İnflamatuvar bel ağrısı: genç yaşta sinsi başlar, istirahatle artar, hareketle azalır, gece/sabaha karşı", "inflamatuvar bel|iltihabi bel|enflamatuvar bel|hareketle azal|istirahatle art|dinlenince art|gece ağrı|sabaha karşı|sinsi başla|gece uyand"],
      ["!HLA-B27 ve sakroiliit (MR'de kemik iliği ödemi ya da grafide)", "hla b27|hla b 27|b27|sakroiliit|sakroiliak|kemik iliği ödem"],
      ["ASAS sınıflaması: görüntüleme kolu ve klinik (HLA-B27) kolu", "asas|görüntüleme kolu|klinik kol|radyografik olmayan|non radyografik"],
      ["Eklem dışı/SpA bulguları: ön üveit, entezit, daktilit, psoriazis, inflamatuvar barsak hastalığı", "üveit|entezit|aşil|daktilit|sosis parmak|inflamatuvar barsak|crohn|ülseratif kolit"],
      ["Hareket kısıtlılığı, Schober testi; ileri evrede sindesmofit, bambu omurga", "schober|bambu|sindesmofit|ankiloz|kifoz"],
      ["!İlk basamak NSAİİ + egzersiz/fizyoterapi", "nsai|nonsteroid|steroid olmayan|egzersiz|fizyoterap|fizik tedavi"],
      ["NSAİİ'ye yanıtsızlıkta TNF ya da IL-17 inhibitörü, JAK inhibitörü", "tnf inhibit|anti tnf|antitnf|adalimumab|etanersept|infliksimab|sekukinumab|iksekizumab|il 17|interlökin 17|jak inhibit|upadasitinib|tofasitinib"],
      ["Aksiyel tutulumda konvansiyonel DMARD (sülfasalazin, MTX) etkisiz; sülfasalazin periferik artritte", "periferik artritte|aksiyelde etkisiz|aksiyel tutulumda etkisiz|aksiyel tutulumda etkili değil|omurgada etkisiz"]
    ]},
  { id: "rom-psoriatik-artrit", tr: "Psoriatik artrit", en: "Psoriatic arthritis", cat: "ina", lvl: 2,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["EULAR recommendations for the management of psoriatic arthritis with pharmacological therapies: 2023 update. Ann Rheum Dis 2024", "https://pubmed.ncbi.nlm.nih.gov/38499325/"],
          ["Taylor W, et al. Classification criteria for psoriatic arthritis: development of new criteria from a large international study (CASPAR). Arthritis Rheum 2006", "https://pubmed.ncbi.nlm.nih.gov/16871531/"]]
    },
    c: [
      ["!Psoriazis (cilt/ailede) ile birlikte seronegatif inflamatuvar artrit", "psoriazis|sedef|psöriazis|psoriasis|seronegatif"],
      ["Tutulum biçimleri: DİF tutulumu, oligoartrit, simetrik poliartrit, aksiyel, artritis mutilans", "distal interfalang|dif tutulum|oligoartrit|asimetrik|mutilans"],
      ["!Daktilit (sosis parmak), entezit ve tırnak değişiklikleri", "sosis parmak|onikoliz|tırnakta çukurlaş|tırnak çukurlaş|tırnak değişik|tırnak tutulum"],
      ["CASPAR sınıflaması; RF negatif", "caspar|rf negatif|romatoid faktör negatif"],
      ["Grafi: kalem-hokka görünümü, yeni kemik oluşumu", "kalem hokka|pencil in cup|kalem kap|yeni kemik oluş|periostit"],
      ["Hafif hastalıkta kısa süre NSAİİ ve lokal steroid enjeksiyonu", "lokal enjeksiyon|lokal steroid|eklem içi"],
      ["!Periferik artritte ilk csDMARD metotreksat", "metotreksat|methotrexate|mtx|leflunomid|sülfasalazin"],
      ["!Hedefe ulaşılamazsa biyolojik: TNF, IL-17, IL-23 inhibitörü (belirgin deri tutulumunda IL-17/IL-23); sonra JAK inhibitörü", "biyolojik|tnf inhibit|anti tnf|adalimumab|il 17|il17|sekukinumab|iksekizumab|il 23|guselkumab|risankizumab|ustekinumab|jak inhibit"]
    ]},
  { id: "rom-behcet", tr: "Behçet hastalığı", en: "Behçet's disease", cat: "vas", lvl: 2,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2018 update of the EULAR recommendations for the management of Behçet's syndrome. Ann Rheum Dis 2018", "https://doi.org/10.1136/annrheumdis-2018-213225"],
          ["The International Criteria for Behçet's Disease (ICBD): a collaborative study of 27 countries. J Eur Acad Dermatol Venereol 2014", "https://doi.org/10.1111/jdv.12107"]]
    },
    c: [
      ["!Değişken damar vasküliti; İpek Yolu ülkeleri, en sık Türkiye; HLA-B51", "ipek yolu|türkiye|hla b51|hla b 51|b51|değişken damar|variable vessel"],
      ["!Tekrarlayan oral aft ve genital ülser", "oral aft|ağızda aft|aft|genital ülser|genital yara|skrotal"],
      ["Deri: eritema nodozum, papülopüstüler lezyon; paterji testi", "eritema nodozum|papülopüstül|akne benzeri|psödofolikülit|paterji"],
      ["!Göz: posterior üveit/panüveit, hipopiyon; körlük riski", "üveit|panüveit|hipopiyon|retinal vaskülit|körlük"],
      ["Damar: venöz tromboz, pulmoner arter anevrizması; nöro-Behçet", "derin ven|venöz tromboz|tromboflebit|pulmoner arter anevrizma|anevrizma|nöro behçet|nörobehçet|parankimal"],
      ["Genç erkekte daha ağır seyir", "genç erkek|erkeklerde ağır|erkek cinsiyet"],
      ["ICBD 2014 puanlaması (oküler, oral, genital 2 puan)", "icbd|uluslararası kriter|uluslararası ölçüt|iki puan|2 puan|4 puan|dört puan"],
      ["Mukokutanöz: kolşisin (EN, genital ülser), oral ülserde apremilast", "kolşisin|apremilast"],
      ["Göz/major organ: azatiyoprin, siklosporin, interferon-alfa, monoklonal anti-TNF", "azatiyoprin|siklosporin|interferon|anti tnf|infliksimab|adalimumab|siklofosfamid"]
    ]},
  { id: "rom-fmf", tr: "Ailevi Akdeniz ateşi (FMF)", en: "Familial Mediterranean fever", cat: "vas", lvl: 2,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["EULAR recommendations for the management of familial Mediterranean fever. Ann Rheum Dis 2016", "https://pubmed.ncbi.nlm.nih.gov/26802180/"],
          ["EULAR/PReS endorsed recommendations for the management of familial Mediterranean fever (FMF): 2024 update. Ann Rheum Dis 2025", "https://doi.org/10.1016/j.ard.2025.01.028"]]
    },
    c: [
      ["!Otozomal resesif otoinflamatuvar hastalık: MEFV geni, pirin; M694V", "mefv|pirin|pyrin|m694v|otozomal resesif|otoinflamatuvar|inflamazom"],
      ["Türkiye, Ermeni, Yahudi, Arap toplumlarında sık", "türkiye|ermeni|yahudi|arap|akdeniz toplum"],
      ["!Kendini sınırlayan ateş + serozit atakları (peritonit, plörit), artrit, erizipel benzeri eritem", "peritonit|karın ağrı|erizipel|ateş atak|kendini sınırlayan atak|kendini sınırlayan atak"],
      ["Klinik tanı (Tel-Hashomer, Livneh, Türk pediatrik ölçütleri); genetik destekler", "tel hashomer|livneh|yalçınkaya|türk pediatrik|klinik tanı|genetik test|mutasyon"],
      ["!En önemli komplikasyon AA amiloidoz (nefrotik sendrom, böbrek yetmezliği)", "amiloid|aa amiloid|nefrotik|proteinüri|böbrek yetmezliğ"],
      ["!Tedavi: tanı konunca ömür boyu kolşisin; atakları ve amiloidozu önler", "kolşisin|colchicine|ömür boyu|yaşam boyu"],
      ["Kolşisine dirençte IL-1 inhibitörü (anakinra, kanakinumab)", "il 1|interlökin 1|anakinra|kanakinumab|canakinumab|kolşisin direnç|kolşisine dirençli|kolşisine yanıtsız"],
      ["Gebelikte kolşisin sürdürülür; ataklar arası CRP/SAA izlemi", "gebelikte|hamilelik|emzirme|ataklar arasında crp|ataklar arası crp|subklinik inflamasyon|atak arası izlem"]
    ]},
  { id: "rom-dev-hucreli-arterit", tr: "Dev hücreli arterit ve polimiyalji romatika", en: "Giant cell arteritis and polymyalgia rheumatica", cat: "vas", lvl: 2,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2018 Update of the EULAR recommendations for the management of large vessel vasculitis. Ann Rheum Dis 2020", "https://doi.org/10.1136/annrheumdis-2019-215672"],
          ["2022 American College of Rheumatology/EULAR classification criteria for giant cell arteritis. Ann Rheum Dis 2022", "https://doi.org/10.1136/ard-2022-223480"]]
    },
    c: [
      ["!50 yaş üstünde büyük damar vasküliti; yeni başlayan baş ağrısı, temporal arter hassasiyeti", "50 yaş|elli yaş|yaşlı|temporal arter|şakak|yeni başlayan baş ağrı|saçlı deri hassas"],
      ["Çene kladikasyosu, sistemik bulgular; akut faz (sedimantasyon/CRP) yüksek", "çene kladikasyo|çiğnerken|çene ağrı|sedimantasyon|crp|akut faz"],
      ["!Görme kaybı riski (AİON): acil, tanı beklenmeden tedavi", "aion|iskemik optik nöropati|körlük|beklemeden|tanı beklen|biyopsi beklen|hemen başla|geciktirmeden"],
      ["!Tanı görüntüleme (temporal arter ultrasonu: halo) ya da temporal arter biyopsisi ile doğrulanır", "halo|arter ultrason|arter usg|arter biyops|biyopsi|pet"],
      ["Yüksek doz glukokortikoid (40–60 mg/gün prednizon eşdeğeri)", "yüksek doz|40 60|kırk altmış|40 ile 60|prednizon|prednizolon|glukokortikoid|kortikosteroid|pulse"],
      ["Steroid koruyucu: tosilizumab, alternatif metotreksat", "tosilizumab|tocilizumab|il 6|metotreksat"],
      ["Polimiyalji romatika: iki taraflı omuz-kalça kuşağı ağrısı ve tutukluğu, düşük doz steroide hızlı yanıt", "polimiyalji|omuz kuşağ|kalça kuşağ|pmr|düşük doz steroid|düşük doz prednizolon"],
      ["Geç dönemde aort anevrizması izlemi", "aort anevrizma|aortit|aort tutulum"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "rom-anca-vaskulit", tr: "ANCA ilişkili vaskülitler", en: "ANCA-associated vasculitis", cat: "vas", lvl: 3,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["EULAR recommendations for the management of ANCA-associated vasculitis: 2022 update. Ann Rheum Dis 2024", "https://doi.org/10.1136/ard-2022-223764"],
          ["2022 American College of Rheumatology/European Alliance of Associations for Rheumatology classification criteria for granulomatosis with polyangiitis. Ann Rheum Dis 2022", "https://doi.org/10.1136/annrheumdis-2021-221795"]]
    },
    c: [
      ["!Küçük damar nekrotizan, pauci-immün vaskülit: GPA, MPA, EGPA", "küçük damar|nekrotizan|pauci|pausi|granülomatöz polianjiit|granulomatosis with|wegener|mikroskopik polianjiit|eozinofilik granülomatöz|churg"],
      ["!GPA: PR3/c-ANCA; üst solunum yolu (sinüzit, burun), akciğer nodül/kavite, glomerülonefrit", "pr3|c anca|canca|proteinaz 3|sinüzit|burun|semer burun|kavite|nodül"],
      ["MPA: MPO/p-ANCA; pulmoner-renal sendrom, alveoler hemoraji", "mpo|p anca|panca|miyeloperoksidaz|alveoler hemoraji|pulmoner renal|hemoptizi"],
      ["EGPA: astım, eozinofili", "astım|eozinofili"],
      ["Hızlı ilerleyen glomerülonefrit; tanıda doku biyopsisi", "hızlı ilerleyen|rpgn|kresentik|glomerülonefrit|biyopsi"],
      ["!Organı tehdit eden hastalıkta indüksiyon: glukokortikoid + rituksimab ya da siklofosfamid", "rituksimab|rituximab|siklofosfamid|indüksiyon"],
      ["Avakopan ile steroid azaltma; seçilmiş hastada plazmaferez", "avakopan|avacopan|c5a|plazmaferez|plazma değişim"],
      ["İdamede rituksimab (ya da azatiyoprin/MTX)", "idame|remisyon idame|azatiyoprin"],
      ["EGPA'da mepolizumab", "mepolizumab|anti il 5|il 5"]
    ]},
  { id: "rom-sistemik-skleroz", tr: "Sistemik skleroz", en: "Systemic sclerosis", cat: "bdh", lvl: 3,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["EULAR recommendations for the treatment of systemic sclerosis: 2023 update. Ann Rheum Dis 2025", "https://doi.org/10.1136/ard-2024-226430"],
          ["2013 classification criteria for systemic sclerosis: an American College of Rheumatology/European League Against Rheumatism collaborative initiative. Ann Rheum Dis 2013", "https://pubmed.ncbi.nlm.nih.gov/24092682/"]]
    },
    c: [
      ["!Vaskülopati + fibrozis + otoimmünite; deri kalınlaşması, Raynaud fenomeni", "raynaud|deri kalınlaş|cilt kalınlaş|sertleş|fibroz|skleroderma|vaskülopati"],
      ["!Sınırlı kutanöz (CREST, antisentromer, PAH) ve diffüz kutanöz (anti-Scl-70, İAH) tipler", "sınırlı kutanöz|limited|crest|antisentromer|anti sentromer|sentromer|diffüz|scl 70|scl70|topoizomeraz"],
      ["Tırnak yatağı kapillaroskopisi, parmak ucu ülserleri, sklerodaktili", "kapillaroskop|parmak ucu|dijital ülser|sklerodaktili|telenjiektazi|kalsinozis"],
      ["Organ taraması: İAH (SFT, DLCO, YRBT), PAH (eko), özofagus dismotilitesi", "interstisyel akciğer|akciğer fibroz|dlco|difüzyon|solunum fonksiyon|pulmoner arter hipertansiyon|pulmoner hipertansiyon|eko|özofag|reflü"],
      ["!Skleroderma renal krizi: anti-RNA polimeraz III; ACE inhibitörü; yüksek doz steroid riski", "renal kriz|böbrek kriz|rna polimeraz|ace inhibit|kaptopril"],
      ["Raynaud/dijital ülser: dihidropiridin KKB, PDE-5 inhibitörü, iloprost, bosentan", "nifedipin|kalsiyum kanal|dihidropiridin|pde 5|pde5|sildenafil|iloprost|bosentan"],
      ["İAH: mikofenolat, siklofosfamid, rituksimab, tosilizumab, nintedanib", "mikofenolat|siklofosfamid|rituksimab|tosilizumab|nintedanib"],
      ["PAH'ta başlangıçta kombinasyon (ERA + PDE-5 inhibitörü)", "kombinasyon|endotelin reseptör|ambrisentan|macitentan"]
    ]},
  { id: "rom-sjogren", tr: "Sjögren hastalığı", en: "Sjögren's disease", cat: "bdh", lvl: 3,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2016 American College of Rheumatology/European League Against Rheumatism classification criteria for primary Sjögren's syndrome. Ann Rheum Dis 2017", "https://doi.org/10.1136/annrheumdis-2016-210571"],
          ["EULAR recommendations for the management of Sjögren's syndrome with topical and systemic therapies. Ann Rheum Dis 2020", "https://doi.org/10.1136/annrheumdis-2019-216114"]]
    },
    c: [
      ["!Ekzokrin bez lenfositik infiltrasyonu: göz ve ağız kuruluğu (sikka)", "kuruluk|kuru göz|ağız kuru|sikka|sicca|kserostomi|keratokonjonktivit|ekzokrin"],
      ["!Anti-Ro/SSA (sınıflamada yalnız anti-SSA puanlanır; anti-La tek başına puan almaz)", "anti ro|ssa|ss a"],
      ["Minör tükürük bezi (dudak) biyopsisi: fokal lenfositik sialadenit, fokus skoru ≥1", "dudak biyopsi|minör tükürük|tükürük bezi biyopsi|fokus skor|fokal lenfositik|sialadenit"],
      ["Schirmer testi, oküler boyanma, uyarılmamış tükürük akımı; ACR/EULAR 2016 ≥4 puan", "schirmer|oküler boyan|boyanma skor|tükürük akım|dört puan|4 puan"],
      ["Sistemik tutulum (ESSDAI): artrit, purpura, interstisyel akciğer, tübülointerstisyel nefrit, nöropati", "essdai|sistemik tutulum|purpura|kriyoglobulin|tübülointerstisyel|nöropati|parotis"],
      ["!B hücreli (MALT) lenfoma riski artmış", "lenfoma|malt|b hücreli"],
      ["Anti-Ro'lu annenin bebeğinde neonatal lupus/konjenital kalp bloğu", "konjenital kalp blo|neonatal lupus|kalp bloğu"],
      ["Tedavi: yapay gözyaşı, tükürük uyarıcı (pilokarpin); ağır sistemik hastalıkta glukokortikoid, immünsüpresif, rituksimab", "yapay gözyaşı|suni gözyaşı|pilokarpin|sevimelin|rituksimab|immünsüpresif"]
    ]},
  { id: "rom-antifosfolipid-sendromu", tr: "Antifosfolipid sendromu", en: "Antiphospholipid syndrome", cat: "bdh", lvl: 3,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2023 ACR/EULAR antiphospholipid syndrome classification criteria. Ann Rheum Dis 2023", "https://doi.org/10.1136/ard-2023-224609"],
          ["EULAR recommendations for the management of antiphospholipid syndrome in adults. Ann Rheum Dis 2019", "https://doi.org/10.1136/annrheumdis-2019-215213"]]
    },
    c: [
      ["!Antifosfolipid antikorlarla ilişkili tromboz (venöz, arteriyel, mikrovasküler) ve gebelik morbiditesi", "tromboz|venöz|derin ven|inme|arteriyel|gebelik kayb|düşük|abortus|preeklamps|fetal ölüm|gebelik morbidite"],
      ["!Laboratuvar: lupus antikoagülanı, antikardiyolipin, anti-β2 glikoprotein I; en az 12 hafta arayla kalıcı pozitiflik", "lupus antikoagülan|antikardiyolipin|kardiyolipin|beta 2 glikoprotein|beta2 glikoprotein|b2 gp|12 hafta|on iki hafta"],
      ["2023 ACR/EULAR: klinik ve laboratuvar alanlarından ayrı ayrı ≥3 puan", "2023 kriter|2023 ölçüt|2023 sınıflama|üç puan|3 puan|klinik alan|laboratuvar alan"],
      ["Üçlü pozitiflik en yüksek risk; SLE ile birlikte olabilir", "üçlü pozitiflik en yüksek|triple|lupus ile birlikte|sle|sekonder"],
      ["!Trombozlu APS'de uzun süreli varfarin (VKA), hedef INR 2–3", "varfarin|warfarin|vitamin k antagonist|vka|inr"],
      ["Üçlü pozitif hastada DOAK (rivaroksaban) önerilmez", "yeni oral antikoagülanlar önerilmez|yeni oral antikoagülan önerilmez|noak önerilmez|doak önerilmez|doak kullanılmaz|rivaroksaban önerilmez|rivaroksaban kullanılmaz|doaklardan kaçın|doak verilmez|rivaroksaban verilmez|doak tercih edilmez"],
      ["Obstetrik APS: gebelikte düşük doz aspirin + heparin (DMAH)", "düşük doz aspirin|aspirin|asetilsalisilik|heparin|dmah|enoksaparin"],
      ["Katastrofik APS: antikoagülan + glukokortikoid + plazmaferez/IVIG", "katastrofik|caps|plazmaferez|ivig"]
    ]},
  { id: "rom-takayasu", tr: "Takayasu arteriti", en: "Takayasu arteritis", cat: "vas", lvl: 3,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["2022 American College of Rheumatology/EULAR classification criteria for Takayasu arteritis. Arthritis Rheumatol 2022", "https://doi.org/10.1002/art.42324"],
          ["2018 Update of the EULAR recommendations for the management of large vessel vasculitis. Ann Rheum Dis 2020", "https://doi.org/10.1136/annrheumdis-2019-215672"]]
    },
    c: [
      ["!Genç kadınlarda aort ve ana dallarının granülomatöz büyük damar vasküliti", "genç kadın|aort ve dal|aortun dal|ana dalları|takayasu"],
      ["!Nabızsızlık hastalığı: zayıf/alınamayan nabız, kollar arası tansiyon farkı, üfürüm", "nabızsız|nabız alınama|nabız zayıf|tansiyon fark|kan basıncı fark|kollar arası|üfürüm|bruit"],
      ["Kol/bacak kladikasyosu, renovasküler hipertansiyon, karotidini", "kladikasyo|renovasküler|renal arter|hipertansiyon|karotidini"],
      ["Erken dönem sistemik inflamatuvar faz (ateş, kilo kaybı), sonra stenoz/oklüzyon", "sistemik faz|nabızsız öncesi|prepulseless|kilo kayb|stenoz|darlık|oklüzyon|tıkanık"],
      ["!Tanı: BT/MR anjiyografi, PET; akut faz göstergeleri aktiviteyi tam yansıtmayabilir", "anjiyograf|bt anjiyo|mr anjiyo|duvar kalınlaş"],
      ["Yüksek doz glukokortikoid + steroid koruyucu (MTX, azatiyoprin, mikofenolat)", "azatiyoprin|mikofenolat|steroid koruyucu"],
      ["Dirençte TNF inhibitörü ya da tosilizumab", "tnf inhibit|anti tnf|infliksimab|biyolojik|relaps eden"],
      ["Revaskülarizasyon mümkünse inaktif dönemde", "revaskülarizasyon|bypass|anjiyoplasti|stent|inaktif dönem|remisyonda"]
    ]},
  { id: "rom-igg4-iliskili-hastalik", tr: "IgG4 ilişkili hastalık", en: "IgG4-related disease", cat: "bdh", lvl: 3,
    src: {
      k: ["Firestein & Kelley's Textbook of Rheumatology, 12. baskı (2025)", "Hochberg Rheumatology, 8. baskı (2022)"],
      m: [["The 2019 American College of Rheumatology/European League Against Rheumatism classification criteria for IgG4-related disease. Ann Rheum Dis 2020", "https://doi.org/10.1136/annrheumdis-2019-216561"],
          ["Kamisawa T, Zen Y, Pillai S, Stone JH. IgG4-related disease. Lancet 2015", "https://doi.org/10.1016/S0140-6736(14)60720-0"]]
    },
    c: [
      ["!Çok organı tutan, kitle oluşturan fibroinflamatuvar hastalık; malignitiyi taklit eder", "fibroinflamatuvar|kitle|tümör benzeri|psödotümör|malignite taklit|kanseri taklit|maligniteyi taklit|çok organ"],
      ["Tutulum: tip 1 otoimmün pankreatit, sklerozan kolanjit, tükürük/gözyaşı bezi (Mikulicz), retroperitoneal fibroz, aortit", "otoimmün pankreatit|pankreatit|sklerozan kolanjit|mikulicz|sialadenit|dakriyoadenit|gözyaşı bezi|retroperitoneal fibroz|orbita"],
      ["Serum IgG4 yüksekliği destekler ama tek başına tanı koydurmaz", "serum igg4|igg4 yüksek|igg4 düzey|tek başına|özgül değil"],
      ["!Histopatoloji: yoğun lenfoplazmasitik infiltrasyon, storiform fibroz, obliteratif flebit, IgG4+ plazma hücreleri", "lenfoplazmasitik|storiform|obliteratif flebit|plazma hücre|biyopsi|histopatoloj"],
      ["ACR/EULAR 2019: giriş, dışlama ve ağırlıklı ölçütler; ≥20 puan", "2019 kriter|2019 ölçüt|2019 sınıflama|dışlama ölçüt|dışlama kriter|20 puan|yirmi puan|giriş ölçüt|giriş kriter"],
      ["!İlk tedavi glukokortikoid; yanıt hızlıdır", "glukokortikoid|kortikosteroid|prednizolon|prednizon|steroid"],
      ["Relapsta/steroid koruyucu olarak rituksimab", "rituksimab|rituximab|cd20|b hücre"],
      ["Organ hasarı fibrozise ilerlemeden erken tedavi", "geri dönüşümsüz|kalıcı organ hasar|erken tedavi|fibrozise ilerle"]
    ]}
]
});
