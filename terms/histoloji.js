/* Histoloji ve embriyoloji — Unprompted Tıp konu paketi
   Seçim mantığı: TUS temel bilimlerde histoloji-embriyolojinin en sık sorulan yapı ve gelişim konuları seçildi:
   temel dokular (epitel, bağ, kas, kemik, sinir), organ histolojisi (lenfoid organlar, deri) ve klinik malformasyonlarla
   doğrudan ilişkili gelişim basamakları (gastrulasyon, nöral tüp, farengeal arklar, kalp, bağırsak, böbrek, plasenta, gametogenez).
   Hastalık yönetimi alınmadı; yalnız yapı, köken ve gelişim hatasının mekanizması işlendi. */
UP.add({ id: "histoloji", subs: {
    doku: "Temel dokular",
    organ: "Organ histolojisi",
    emb: "Embriyoloji"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "his-epitel-hucre-baglantilari", tr: "Epitel dokusu ve hücre bağlantıları", en: "Epithelial tissue and cell junctions", cat: "doku", lvl: 1,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Garcia MA, Nelson WJ, Chavez N. Cell-Cell Junctions Organize Structural and Signaling Networks. Cold Spring Harb Perspect Biol 2018", "https://pubmed.ncbi.nlm.nih.gov/28600395/"],
          ["Zihni C et al. Tight junctions: from simple barriers to multifunctional molecular gates. Nat Rev Mol Cell Biol 2016", "https://doi.org/10.1038/nrm.2016.80"]]
    },
    c: [
      ["!Sınıflama: katman sayısı (tek katlı/çok katlı) ve yüzey hücresinin şekli (yassı, kübik, prizmatik)", "tek katlı|çok katlı|yassı epitel|kübik|prizmatik|silindirik|skuamöz|squamous|kolumnar|columnar|yalancı çok katlı|psödostratifiye|değişici epitel|ürotel|transizyonel"],
      ["Epitel avaskülerdir, bazal membran üzerinde oturur ve beslenmesini alttaki bağ dokusundan alır", "avaskül|damarsız|damar içermez|bazal membran|bazal lamina|basal lamina"],
      ["!Sıkı bağlantı (zonula occludens): klaudin ve okludin ile parasellüler geçişi kapatır", "sıkı bağlantı|zonula okludens|zonula occludens|tight junction|klaudin|claudin|okludin|occludin|parasellüler"],
      ["!Yapışma bağlantısı (zonula adherens) ve dezmozom: kaderinler; dezmozom ara filamanlara (keratin) bağlanır", "zonula adherens|adherens|yapışma bağlantı|dezmozom|desmozom|desmosom|kaderin|cadherin|dezmoglein|desmoglein|keratin filaman|ara filaman"],
      ["Hemidezmozom: hücreyi bazal membrana integrinlerle bağlar", "hemidezmozom|hemidesmozom|hemidesmosom|integrin"],
      ["Oluklu bağlantı (gap junction): konneksonlarla hücreler arası iyon ve küçük molekül geçişi", "oluklu bağlantı|gap junction|neksus|nexus|konnekson|connexon|konneksin|connexin"],
      ["Apikal özelleşmeler: mikrovillus (aktin), silya (9+2 mikrotübül), stereosilya", "mikrovillus|mikrovilli|fırçamsı kenar|silya|kirpik|9 artı 2|dokuz artı iki|aksonem|stereosil"],
      ["Klinik bağlantı: pemfigusta dezmoglein, büllöz pemfigoidde hemidezmozom proteinlerine otoantikor", "pemfigus|pemfigoid|büllöz"]
    ]},
  { id: "his-bag-dokusu-kollajen", tr: "Bağ dokusu ve kollajen tipleri", en: "Connective tissue and collagen types", cat: "doku", lvl: 1,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Ricard-Blum S. The collagen family. Cold Spring Harb Perspect Biol 2011", "https://pubmed.ncbi.nlm.nih.gov/21421911/"],
          ["Shoulders MD, Raines RT. Collagen structure and stability. Annu Rev Biochem 2009", "https://doi.org/10.1146/annurev.biochem.77.032207.120833"]]
    },
    c: [
      ["!Bileşenler: hücreler (fibroblast) ve hücre dışı matriks (lifler + temel madde)", "fibroblast|hücre dışı matriks|hücreler arası matriks|ekstrasellüler matriks|extracellular matrix|temel madde|ground substance|proteoglikan|glikozaminoglikan|hiyalüronik"],
      ["!Kollajen yapısı: üçlü sarmal, glisin-X-Y tekrarı, prolin ve lizin hidroksilasyonu (C vitamini)", "üçlü sarmal|üçlü heliks|triple helix|tripl heliks|glisin|hidroksiprolin|hidroksilizin|hidroksilasyon|c vitamini|askorbik|skorbüt"],
      ["!Tip I: kemik, tendon, deri, dentin (en bol); Tip II: hiyalin ve elastik kıkırdak, vitreus", "tip 1|tip bir|tip i kollajen|tip 2|tip iki|tip ii kollajen"],
      ["Tip III: retiküler lif (lenfoid organ, karaciğer, damar); Tip IV: bazal lamina (ağ yapısı)", "retiküler lif|retikülin|tip iii retiküler|tip 3 retiküler|bazal lamina|bazal membran|tip 4|tip dört|tip iv"],
      ["Elastik lif: elastin + fibrillin mikrofibrilleri (Marfan sendromunda fibrillin-1)", "elastin|fibrillin|marfan"],
      ["Gevşek ve sıkı (düzenli/düzensiz) bağ dokusu; tendon sıkı düzenli bağ dokusudur", "gevşek bağ|sıkı bağ|düzenli bağ|düzensiz bağ|sıkı düzenli|areolar"],
      ["Bağ dokusu hücreleri: mast hücresi, makrofaj, plazma hücresi, adiposit", "mast hücre|makrofaj|plazma hücre|adiposit|yağ hücre"],
      ["Kollajen sentez bozuklukları: osteogenezis imperfekta (tip I), Ehlers-Danlos, Alport (tip IV)", "osteogenezis|osteogenesis|ehlers|danlos|alport"]
    ]},
  { id: "his-kas-dokusu", tr: "Kas dokusu histolojisi", en: "Muscle tissue histology", cat: "doku", lvl: 1,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Henderson CA et al. Overview of the Muscle Cytoskeleton. Compr Physiol 2017", "https://doi.org/10.1002/cphy.c160033"],
          ["Squire JM. Muscle contraction: Sliding filament history, sarcomere dynamics and the two Huxleys. Glob Cardiol Sci Pract 2016", "https://pmc.ncbi.nlm.nih.gov/articles/PMC5642817/"]]
    },
    c: [
      ["!Üç tip: iskelet (çizgili, istemli), kalp (çizgili, istemsiz), düz kas (çizgisiz, istemsiz)", "iskelet kas|kalp kas|kardiyak kas|düz kas|çizgili|çizgisiz|istemli|istemsiz"],
      ["!Sarkomer: iki Z çizgisi arası; A bandı (miyozin) sabit, I bandı ve H zonu kasılmada kısalır", "sarkomer|z çizgi|z diski|z disk|a bandı|a bant|i bandı|i bant|h zonu|h bandı|m çizgi"],
      ["Kayan filaman: aktin ince, miyozin kalın filaman; troponin-tropomiyozin kalsiyumla düzenler", "kayan filaman|sliding filament|aktin|miyozin|troponin|tropomiyozin|titin|nebulin"],
      ["İskelet kası: çok çekirdekli, çekirdekler periferde; T tübül + iki terminal sisterna = triad", "çok çekirdekli|çekirdekleri periferde|periferik çekirdek|triad|triyad|t tübül|terminal sistern|sarkoplazmik retikulum"],
      ["!Kalp kası: tek-iki merkezi çekirdek, dallanma, interkale disk (dezmozom + oluklu bağlantı); diad", "interkale disk|interkalar disk|ara disk|intercalated|dallanan|dallanma|merkezi çekirdek|ortada çekirdek|diad|diyad"],
      ["Düz kas: iğ şekilli, tek merkezi çekirdek, yoğun cisimler; kalmodulin-miyozin hafif zincir kinaz", "iğ şekil|iğsi|yoğun cisim|dense bod|kalmodulin|hafif zincir kinaz|mlck"],
      ["Rejenerasyon: iskelet kasında satellit hücreler; kalp kasında rejenerasyon çok sınırlı, skar oluşur", "satellit|uydu hücre|rejenera|yenilen"]
    ]},
  { id: "his-gastrulasyon-germ-yapraklari", tr: "Gastrulasyon ve germ yaprakları", en: "Gastrulation and germ layers", cat: "emb", lvl: 1,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["Ghimire S, Mantziou V, Moris N, Martinez Arias A. Human gastrulation: The embryo and its models. Dev Biol 2021", "https://pubmed.ncbi.nlm.nih.gov/33484705/"],
          ["Tam PP, Behringer RR. Mouse gastrulation: the formation of a mammalian body plan. Mech Dev 1997", null]]
    },
    c: [
      ["!Gastrulasyon 3. haftada: iki tabakalı diskten üç germ yapraklı embriyo oluşur", "gastrula|iki tabakalı|bilaminar|üç tabaka|üç germ|trilaminar|üç yapraklı"],
      ["!Primitif çizgi ve primitif düğüm (Hensen); epiblast hücreleri buradan içeri göç eder (invajinasyon)", "primitif çizgi|primitive streak|ilkel çizgi|primitif düğüm|hensen|primitif çukur|invajina|epiblast"],
      ["!Üç yaprak: ektoderm, mezoderm, endoderm; hepsi epiblasttan köken alır", "ektoderm|mezoderm|endoderm|ectoderm|mesoderm"],
      ["Notokord: nöral plağı indükler, erişkinde nukleus pulpozus olarak kalır", "notokord|notochord|nükleus pulpozus|nukleus pulpozus|nucleus pulposus"],
      ["Ektoderm türevleri: epidermis, sinir sistemi, nöral krista; endoderm: GİS ve solunum epiteli", "sindirim kanalı epitel|gis epitel|bağırsak epitel|solunum yolu epitel|ektoderm türev|endoderm türev|nöral krest|gastrointestinal epitel|gastrointestinal ve solunum"],
      ["Mezoderm bölümleri: paraksiyal (somit), ara (ürogenital), lateral plak (vücut duvarı, kalp)", "paraksiyal|somit|ara mezoderm|intermediate mezoderm|lateral plak|lateral mezoderm|splanknik|somatik mezoderm"],
      ["Sağ-sol asimetri primitif düğümde belirlenir; kaudal artık kalırsa sakrokoksigeal teratom", "sağ sol|sol sağ|asimetri|lateralite|situs|sakrokoksigeal|teratom|kaudal disgenez|sirenomeli"]
    ]},
  { id: "his-plasenta-fetal-zarlar", tr: "Plasenta ve fetal zarlar", en: "Placenta and fetal membranes", cat: "emb", lvl: 1,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["Turco MY, Moffett A. Development of the human placenta. Development 2019", "https://doi.org/10.1242/dev.163428"],
          ["Burton GJ, Fowden AL. The placenta: a multifaceted, transient organ. Philos Trans R Soc Lond B Biol Sci 2015", "https://pubmed.ncbi.nlm.nih.gov/25602070/"]]
    },
    c: [
      ["!Fetal kısım koryon frondozum, maternal kısım desidua bazalis", "koryon frondozum|chorion frondosum|frondozum|desidua bazalis|decidua basalis|desidua"],
      ["!Trofoblast: sitotrofoblast (iç, hücresel) ve sinsityotrofoblast (dış, çok çekirdekli, hCG salgılar)", "trofoblast|sitotrofoblast|sinsityotrofoblast|sinsityo|syncytio|hcg|koryonik gonadotropin"],
      ["Villus gelişimi: primer, sekonder (mezoderm), tersiyer (fetal damar) villuslar", "primer villus|sekonder villus|tersiyer villus|koryon villus|villus|villöz"],
      ["Plasenta bariyeri: hemokoryal tip; anne ve fetüs kanı karışmaz", "hemokoryal|hemokorial|kanı karışmaz|kanları karışmaz|karışmaz"],
      ["Fetal zarlar: amniyon, koryon, vitellüs kesesi, allantois; amniyon sıvısı", "amniyon|amnion|koryon|vitellüs|yolk|yumurta sarısı|allantois|amniyotik sıvı|amniyon sıvı"],
      ["Göbek kordonu: iki umbilikal arter, bir umbilikal ven, Wharton jölesi", "göbek kordon|umbilikal kordon|umbilikal arter|umbilikal ven|wharton"],
      ["Plasentanın endokrin işlevi: hCG, insan plasental laktojen, progesteron, östrojen", "plasental laktojen|hpl|progesteron|östrojen|östriol"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "his-kemik-ossifikasyon", tr: "Kemik histolojisi ve kemikleşme", en: "Bone histology and ossification", cat: "doku", lvl: 2,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Long F, Ornitz DM. Development of the endochondral skeleton. Cold Spring Harb Perspect Biol 2013", "https://doi.org/10.1101/cshperspect.a008334"],
          ["Bonewald LF. The amazing osteocyte. J Bone Miner Res 2011", "https://doi.org/10.1002/jbmr.320"]]
    },
    c: [
      ["!Kemik hücreleri: osteoblast (yapar), osteosit (lakünada, kanaliküllerle bağlı), osteoklast (yıkar, çok çekirdekli, monosit-makrofaj kökenli)", "osteoblast|osteosit|osteoklast|lakün|kanalikül|howship"],
      ["Osteoklast: fırçamsı kenar, RANKL-RANK ile uyarılır, osteoprotegerin baskılar", "rankl|rank ligand|osteoprotegerin|opg|fırçamsı kenar|ruffled border|asit fosfataz|katepsin"],
      ["Matriks: osteoid (tip I kollajen) ve hidroksiapatit kristalleri", "osteoid|hidroksiapatit|hidroksi apatit|kalsiyum fosfat|mineraliz"],
      ["!Kompakt kemik: osteon (Havers sistemi), Havers ve Volkmann kanalları; süngerimsi kemik: trabeküller", "osteon|havers|volkmann|kompakt kemik|kortikal kemik|süngerimsi|spongioz|trabekül|lamel"],
      ["!İntramembranöz kemikleşme: mezenkimden doğrudan (yassı kafa kemikleri, klavikula gövdesi)", "intramembranöz|intramembranoz|zar içi|mezenkimden doğrudan|doğrudan mezenkim|yassı kemik|kafatası kemik|kalvaryum|klavikula"],
      ["!Endokondral kemikleşme: hiyalin kıkırdak modeli üzerinden (uzun kemikler); primer ve sekonder kemikleşme merkezi", "endokondral|kıkırdak model|kıkırdak taslak|primer kemikleşme|sekonder kemikleşme|primer ossifikasyon|sekonder ossifikasyon|kemikleşme merkez"],
      ["Epifiz plağı bölgeleri: dinlenme, proliferasyon, hipertrofi, kalsifikasyon, kemikleşme; akondroplazide FGFR3", "epifiz plağ|büyüme plağ|epifiz kıkırdağ|proliferasyon bölge|hipertrofi|hipertrofik|akondroplazi|fgfr3"],
      ["Kıkırdak: avasküler; hiyalin (tip II), elastik (elastik lif), fibröz kıkırdak (tip I, intervertebral disk)", "hiyalin|elastik kıkırdak|fibröz kıkırdak|fibrokıkırdak|kondrosit|perikondriyum|perikondrium|izojen"]
    ]},
  { id: "his-sinir-dokusu-glia", tr: "Sinir dokusu ve glia hücreleri", en: "Nervous tissue and glial cells", cat: "doku", lvl: 2,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Allen NJ, Lyons DA. Glia as architects of central nervous system formation and function. Science 2018", "https://pubmed.ncbi.nlm.nih.gov/30309945/"],
          ["Simons M, Nave KA. Oligodendrocytes: Myelination and Axonal Support. Cold Spring Harb Perspect Biol 2016", "https://pubmed.ncbi.nlm.nih.gov/26101081/"]]
    },
    c: [
      ["!Nöron: hücre gövdesi (Nissl cisimcikleri = granüllü ER), dendrit, akson; aksonda Nissl yok", "nöron|nissl|perikaryon|dendrit|akson tepeciği|akson|soma"],
      ["Nöron tipleri: multipolar, bipolar (retina, koku), psödounipolar (arka kök gangliyonu)", "multipolar|bipolar|psödounipolar|pseudounipolar|yalancı tek kutuplu|arka kök gangliyon|dorsal kök gangliyon"],
      ["!Merkezi sinir sistemi miyelini oligodendrosit (çok aksona), periferik miyelin Schwann hücresi (tek aksona)", "oligodendrosit|oligodendrocyte|schwann|miyelin|myelin|ranvier"],
      ["!Astrosit: kan-beyin bariyerine katkı (ayaksılar), GFAP, skar (gliozis)", "astrosit|astrocyte|gfap|glial fibriler|kan beyin bariyer|ayaksı|gliozis|glial skar"],
      ["Mikroglia: mezoderm (vitellüs kesesi makrofajı) kökenli, MSS'nin fagositi", "vitellüs kesesi makrofaj|yolk kesesi makrofaj|mss fagosit|mss'nin fagosit|beynin makrofaj|mikroglia fagosit"],
      ["Ependim hücreleri ventrikülleri döşer; koroid pleksusta BOS üretimi", "ependim|koroid pleksus|choroid|bos üret|beyin omurilik sıvısı"],
      ["Köken: MSS nöron ve makroglia nöroektodermden; Schwann hücresi ve periferik gangliyonlar nöral kristadan", "nöroektoderm|nöral tüpten|nöral krista|neural crest"],
      ["Periferik sinir kılıfları: endonöryum, perinöryum, epinöryum; PSS'de akson rejenerasyonu mümkün", "endonör|perinör|epinör|wallerian|valleriyan|rejenerasyon"]
    ]},
  { id: "his-noral-tup-gelisimi", tr: "Nöral tüp gelişimi ve defektleri", en: "Neural tube development and defects", cat: "emb", lvl: 2,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["Nikolopoulou E, Galea GL, Rolo A, Greene ND, Copp AJ. Neural tube closure: cellular, molecular and biomechanical mechanisms. Development 2017", "https://pubmed.ncbi.nlm.nih.gov/28196803/"],
          ["Copp AJ et al. Spina bifida. Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.7"]]
    },
    c: [
      ["!Nörülasyon: notokord indüksiyonuyla nöral plak, nöral oluk ve nöral kıvrımlar; kıvrımlar birleşerek nöral tüp", "nörülasyon|nörulasyon|neurulation|nöral plak|nöral oluk|nöral kıvrım|nöral katlantı|nöral tüp|neural tube"],
      ["!Kapanma 4. haftada; kranial (rostral) ve kaudal nöropor en son kapanır", "nöropor|neuropore|dördüncü hafta|4. hafta|4 hafta"],
      ["Nöral krista: kıvrımların kenarından ayrılır; melanosit, duyu ve otonom gangliyonlar, adrenal medulla, yüz mezenkimi", "nöral krista|neural crest|melanosit|adrenal medulla|gangliyon"],
      ["Nöral tüp bölümleri: prozensefalon, mezensefalon, rombensefalon (üç primer vezikül)", "prozensefalon|prosensefalon|mezensefalon|rombensefalon|primer vezikül|beyin vezikül"],
      ["!Kranial nöropor kapanmazsa anensefali; kaudal nöropor kapanmazsa spina bifida (miyelomeningosel)", "anensefali|anencephal|spina bifida|miyelomeningosel|meningosel|myelomeningocele|rakişizis|kraniorakişizis"],
      ["Tarama: maternal serum ve amniyon sıvısında AFP artışı, ultrasonografi", "afp|alfa fetoprotein|alfa feto protein|asetilkolinesteraz"],
      ["Önleme: gebelik öncesi başlanan folik asit; valproat gibi ilaçlar riski artırır", "folik asit|folat|folate|valproat|valproik"]
    ]},
  { id: "his-farengeal-arklar", tr: "Farengeal (brankiyal) arklar, cepler ve türevleri", en: "Pharyngeal arches and pouches", cat: "emb", lvl: 2,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["Graham A, Richardson J. Developmental and evolutionary origins of the pharyngeal apparatus. EvoDevo 2012", "https://pubmed.ncbi.nlm.nih.gov/23020903/"],
          ["Frisdal A, Trainor PA. Development and evolution of the pharyngeal apparatus. Wiley Interdiscip Rev Dev Biol 2014", "https://doi.org/10.1002/wdev.147"]]
    },
    c: [
      ["!Yapı: ark (mezoderm + nöral krista), cep (endoderm, içte), yarık (ektoderm, dışta)", "farengeal ark|faringeal ark|brankiyal ark|branşiyal ark|pharyngeal arch|farengeal cep|faringeal cep|farengeal yarık|faringeal yarık|endoderm kaplı|ektoderm kaplı|endodermle döşeli|ektodermle döşeli"],
      ["!1. ark: trigeminal sinir (V3); Meckel kıkırdağı, malleus, inkus, çiğneme kasları", "birinci ark|1. ark|meckel|malleus|inkus|incus|çiğneme kas|mandibuler sinir|trigeminal"],
      ["2. ark: fasiyal sinir; Reichert kıkırdağı, stapes, stiloid, mimik kasları", "ikinci ark|2. ark|reichert|stapes|stiloid|mimik kas|fasiyal sinir|fasial sinir|facial"],
      ["3. ark: glossofaringeal sinir, stilofaringeus; 4. ve 6. ark: vagus dalları, larinks kıkırdak ve kasları", "üçüncü ark|3. ark|glossofaren|glossofarin|stilofaren|stilofarin|vagus|rekürren|larinks|laringeal"],
      ["!Cepler: 1. orta kulak ve östaki, 2. palatin tonsil, 3. alt paratiroid + timus, 4. üst paratiroid + ultimobrankiyal cisim (C hücreleri)", "orta kulak|östaki|ostaki|palatin tonsil|timus|paratiroid|ultimobrankiyal|ultimobranşiyal|parafoliküler|c hücre"],
      ["1. yarık dış kulak yolunu yapar; diğer yarıklar kapanır, kalırsa brankiyal kist/fistül", "dış kulak yolu|brankiyal kist|branşiyal kist|brankiyal fistül|lateral boyun kist"],
      ["DiGeorge (22q11 delesyonu): 3. ve 4. cep gelişim bozukluğu; timus ve paratiroid yokluğu, hipokalsemi", "digeorge|di george|22q11|hipokalsemi|timik aplazi"]
    ]},
  { id: "his-gametogenez", tr: "Gametogenez: spermatogenez ve oogenez", en: "Gametogenesis", cat: "emb", lvl: 2,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)"],
      m: [["Griswold MD. Spermatogenesis: The Commitment to Meiosis. Physiol Rev 2016", "https://pubmed.ncbi.nlm.nih.gov/26537427/"],
          ["Grive KJ, Freiman RN. The developmental origins of the mammalian ovarian reserve. Development 2015", "https://pubmed.ncbi.nlm.nih.gov/26243868/"]]
    },
    c: [
      ["!Primordiyal germ hücreleri vitellüs kesesi duvarından göç ederek gonada yerleşir", "primordiyal germ|primordial germ|ilkel germ|vitellüs|yolk|göç eder"],
      ["!Mayoz: diploidden haploide; krossing-over ile genetik çeşitlilik, ayrılmama (nondisjunction) ile anöploidi", "mayoz|mayoz bölün|meiosis|haploid|krossing|crossing over|ayrılmama|nondisjunction|anöploidi"],
      ["!Oogenez: primer oosit doğumdan önce oluşur ve puberteye kadar mayoz I profazında bekler; sekonder oosit metafaz II'de, fertilizasyonla tamamlar", "primer oosit|sekonder oosit|mayoz i profaz|mayoz 1 profaz|profaz i|profaz 1|birinci mayoz profaz|diploten|metafaz 2|metafaz iki|metafaz ii"],
      ["Oogenezde her bölünmede kutup cisimciği; bir oogoniden tek ovum", "kutup cisim|polar cisim|polar body|tek ovum|tek yumurta|tek gamet"],
      ["Spermatogenez puberteden itibaren sürekli: spermatogonyum → primer → sekonder spermatosit → spermatid", "spermatogon|spermatosit|spermatid|seminifer"],
      ["Spermiyogenez: akrozom, kuyruk oluşumu, sitoplazma atılır; Sertoli hücreleri destekler, kan-testis bariyeri", "spermiyogenez|spermiogenez|akrozom|sertoli|kan testis"],
      ["İleri anne yaşı oositte ayrılmama ve trizomi riskini artırır", "anne yaşı|maternal yaş|ileri yaş|trizomi|down sendrom"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "his-kalp-gelisimi", tr: "Kalp gelişimi ve septasyon", en: "Heart development and septation", cat: "emb", lvl: 3,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["Buijtendijk MFJ, Barnett P, van den Hoff MJB. Development of the human heart. Am J Med Genet C Semin Med Genet 2020", "https://pubmed.ncbi.nlm.nih.gov/32048790/"],
          ["Moorman A et al. Development of the heart: (1) formation of the cardiac chambers and arterial trunks. Heart 2003", "https://pubmed.ncbi.nlm.nih.gov/12807866/"]]
    },
    c: [
      ["!Kalp splanknik mezodermden (kardiyojenik alan) gelişir; primitif kalp tüpü sağa kıvrılır (kardiyak looping)", "kardiyojenik|kalp alan|splanknik mezoderm|kalp tüp|kardiyak tüp|looping|kıvrılma|kıvrılır"],
      ["Tüp bölümleri: sinüs venozus, primitif atriyum, primitif ventrikül, bulbus kordis, trunkus arteriozus", "sinüs venozus|sinus venosus|primitif atriyum|primitif ventrikül|bulbus kordis|bulbus cordis|trunkus arteriyozus|trunkus arteriozus|truncus"],
      ["!Atriyal septasyon: septum primum, ostium secundum, septum secundum; foramen ovale sağdan sola akımı sağlar", "septum primum|septum sekundum|septum secundum|ostium sekundum|ostium secundum|ostium primum|foramen ovale|foramen ovale"],
      ["Endokardiyal yastıklar AV kanalı böler; defektinde AV septal defekt (Down sendromu)", "av kanal|atriyoventriküler kanal|av septal|atriyoventriküler septal"],
      ["!Trunkus-konus septasyonu: spiral aortikopulmoner septum, nöral krista hücreleri; bozuklukta trunkus arteriozus, büyük arter transpozisyonu, Fallot", "aortikopulmoner|aortopulmoner|spiral septum|konotrunkal|transpozisyon|fallot|persistan trunkus"],
      ["Ventriküler septum: kas kısmı ve membranöz kısım; en sık VSD membranöz bölümde", "interventriküler|ventriküler septum|membranöz|vsd|ventriküler septal"],
      ["Fetal dolaşım şantları: foramen ovale, duktus arteriozus, duktus venozus", "duktus venozus|ductus venosus|venöz kanal"]
    ]},
  { id: "his-bagirsak-rotasyonu", tr: "Orta bağırsak gelişimi ve rotasyonu", en: "Midgut development and rotation", cat: "emb", lvl: 3,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["Soffers JHM et al. The growth pattern of the human intestine and its mesentery. BMC Dev Biol 2015", "https://pubmed.ncbi.nlm.nih.gov/26297675/"],
          ["Martin V, Shaw-Smith C. Review of genetic factors in intestinal malrotation. Pediatr Surg Int 2010", "https://pubmed.ncbi.nlm.nih.gov/20549505/"]]
    },
    c: [
      ["!İlkel bağırsak bölümleri ve damarları: ön bağırsak (çölyak), orta bağırsak (süperior mezenterik), arka bağırsak (inferior mezenterik)", "ön bağırsak|orta bağırsak|arka bağırsak|foregut|midgut|hindgut|çölyak|süperior mezenterik|inferior mezenterik"],
      ["!Fizyolojik umbilikal herniasyon: hızlı uzayan orta bağırsak göbek kordonuna fıtıklaşır ve sonra karına döner", "fizyolojik herni|fizyolojik fıtık|umbilikal herni|göbek kordonuna|karına geri|karın boşluğuna geri"],
      ["!Rotasyon: süperior mezenterik arter ekseni etrafında, önden bakıldığında saat yönünün tersine toplam 270 derece", "270|iki yüz yetmiş|saat yönünün tersi|saat yönü tersi|counterclockwise"],
      ["Çekum en son iner; sağ alt kadrana yerleşir, ardından mezenter fiksasyonu", "çekum|sekum|sağ alt kadran|fiksasyon"],
      ["Malrotasyon: Ladd bantları ve volvulus riski (yenidoğanda safralı kusma)", "malrotasyon|malrotation|ladd|volvulus|safralı kus"],
      ["Karına dönüş olmazsa omfalosel (periton kaplı); gastroşizis ise kesesiz, göbeğin yanından", "omfalosel|omphalocele|gastroşizis|gastroschisis"],
      ["Vitellüs (omfalomezenterik) kanalı artığı: Meckel divertikülü", "meckel|vitellin kanal|vitellüs kanal|omfalomezenterik|vitello"]
    ]},
  { id: "his-bobrek-gelisimi", tr: "Böbrek gelişimi: pronefroz, mezonefroz, metanefroz", en: "Kidney development", cat: "emb", lvl: 3,
    src: {
      k: ["Langman's Medical Embryology, 15. baskı (2023)", "The Developing Human: Clinically Oriented Embryology (Moore, Persaud, Torchia), 12. baskı (2024)"],
      m: [["McMahon AP. Development of the Mammalian Kidney. Curr Top Dev Biol 2016", "https://pubmed.ncbi.nlm.nih.gov/26969971/"],
          ["Costantini F, Kopan R. Patterning a complex organ: branching morphogenesis and nephron segmentation in kidney development. Dev Cell 2010", "https://pubmed.ncbi.nlm.nih.gov/20493806/"]]
    },
    c: [
      ["!Ara (intermediate) mezodermden üç ardışık sistem: pronefroz (işlevsiz, kaybolur), mezonefroz (geçici), metanefroz (kalıcı böbrek)", "pronefroz|pronephros|mezonefroz|mesonephros|metanefroz|metanephros|ara mezoderm|intermediate mezoderm"],
      ["!Üreter tomurcuğu (mezonefrik kanaldan): üreter, pelvis, kaliksler, toplayıcı kanallar", "üreter tomurcu|ureteric bud|üreterik tomurcuk|toplayıcı kanal|kaliks"],
      ["!Metanefrik blastem: nefron (glomerül kapsülü, proksimal tübül, Henle, distal tübül)", "metanefrik blastem|metanefrik mezenkim|metanephric mesenchyme|blastem|nefron"],
      ["Karşılıklı indüksiyon: GDNF-RET sinyali; üreter tomurcuğunun dallanması", "gdnf|ret reseptör|ret sinyal|gdnf-ret|c-ret|karşılıklı indüksiyon|dallanma|branching"],
      ["Böbreğin yükselmesi (pelvisten lomber bölgeye); at nalı böbrek inferior mezenterik artere takılır", "at nalı|horseshoe|yükselme|yükselir|ektopik böbrek|pelvik böbrek"],
      ["Agenezi ve Potter sekansı: oligohidramniyoz, pulmoner hipoplazi", "agenez|potter|oligohidramniy|pulmoner hipoplazi"],
      ["Mezonefrik kanal erkekte genital kanallara (epididim, duktus deferens) dönüşür", "epididim|duktus deferens|vas deferens|seminal vezikül"]
    ]},
  { id: "his-lenfoid-organlar", tr: "Lenfoid organların histolojisi", en: "Histology of lymphoid organs", cat: "organ", lvl: 3,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Mebius RE, Kraal G. Structure and function of the spleen. Nat Rev Immunol 2005", "https://doi.org/10.1038/nri1669"],
          ["Gordon J, Manley NR. Mechanisms of thymus organogenesis and morphogenesis. Development 2011", "https://doi.org/10.1242/dev.059998"]]
    },
    c: [
      ["!Primer lenfoid organlar (kemik iliği, timus) ve sekonder lenfoid organlar (lenf düğümü, dalak, MALT)", "primer lenfoid|birincil lenfoid|sekonder lenfoid|ikincil lenfoid|malt|mukoza ilişkili"],
      ["!Timus: korteks ve medulla, Hassall cisimcikleri (medullada), epitel retiküler hücreler; lenf folikülü ve afferent lenf damarı yoktur", "timus|thymus|hassall|epitel retiküler|retiküler epitel|kan timus"],
      ["Timusta T hücre pozitif (kortekste) ve negatif seleksiyon (medullada, AIRE)", "pozitif seleksiyon|negatif seleksiyon|pozitif seçilim|negatif seçilim|aire|timosit"],
      ["!Lenf düğümü: korteks (B hücre follikülleri, germinal merkez), parakorteks (T hücre, HEV), medulla (kordonlar, sinüsler)", "lenf düğüm|lenf nodu|lenf bezi|parakorteks|parakortikal|germinal merkez|germinal centre|folikül|hev|yüksek endotel|medüller kordon|subkapsüler sinüs"],
      ["Dalak: beyaz pulpa (PALS = T hücre, folikül = B hücre) ve kırmızı pulpa (Billroth kordonları, sinüzoidler)", "beyaz pulpa|kırmızı pulpa|pals|periarteriyolar|billroth|splenik kordon|sinüzoid|marjinal zon|dalak"],
      ["Dalak: yaşlı eritrosit yıkımı ve kapsüllü bakterilere karşı savunma (marjinal zon)", "yaşlı eritrosit|eritrosit yıkım|kapsüllü bakteri|kapsüllü"],
      ["Tonsiller ve Peyer plakları: kapsülsüz ya da kısmi kapsüllü MALT; M hücreleri", "tonsil|peyer|m hücre|kripta"]
    ]},
  { id: "his-deri-histolojisi", tr: "Deri histolojisi", en: "Skin histology", cat: "organ", lvl: 3,
    src: {
      k: ["Ross Histology: A Text and Atlas (Pawlina), 9. baskı (2023)", "Junqueira's Basic Histology: Text and Atlas, 17. baskı (2024)"],
      m: [["Fuchs E. Scratching the surface of skin development. Nature 2007", "https://pubmed.ncbi.nlm.nih.gov/17314969/"],
          ["Losquadro WD. Anatomy of the Skin and the Pathogenesis of Nonmelanoma Skin Cancer. Facial Plast Surg Clin North Am 2017", "https://doi.org/10.1016/j.fsc.2017.03.001"]]
    },
    c: [
      ["!Epidermis keratinize çok katlı yassı epitel; tabakalar: bazal, spinozum, granülozum, lusidum (kalın deride), korneum", "stratum bazale|stratum basale|bazal tabaka|spinozum|spinosum|dikenli tabaka|granülozum|granulosum|lusidum|lucidum|korneum|corneum|boynuzsu"],
      ["!Epidermis hücreleri: keratinosit, melanosit (nöral krista), Langerhans (antijen sunan, Birbeck granülü), Merkel (dokunma)", "keratinosit|melanosit|langerhans|birbeck|merkel"],
      ["Granüler tabakada keratohiyalin ve lameller granüller (su geçirmez bariyer)", "keratohiyalin|keratohyalin|lamellar granül|lameller granül|odland|bariyer"],
      ["Dermis: papiller (gevşek) ve retiküler (sıkı düzensiz) tabaka; Meissner ve Paccini cisimcikleri", "dermis|papiller|retiküler tabaka|retiküler dermis|meissner|paccini|pacini|ruffini"],
      ["!Deri ekleri: kıl folikülü, yağ bezi (holokrin), ekrin ve apokrin ter bezleri", "kıl folikül|saç folikül|yağ bez|sebase|holokrin|ekrin|apokrin|ter bez"],
      ["Köken: epidermis yüzey ektodermden, dermis mezodermden, melanosit nöral kristadan", "yüzey ektoderm|ektoderm|mezoderm|nöral krista"],
      ["Melanin melanozomlarla keratinositlere aktarılır; ırk farkı melanosit sayısından değil melanozom aktivitesinden", "melanozom aktivite|melanozom dağılım|melanozom büyüklü|melanozomların aktivite|melanozomların dağılım|sayısından değil|sayısı değil"]
    ]}
]
});
