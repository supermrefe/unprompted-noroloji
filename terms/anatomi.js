/* Anatomi — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS temel bilimler anatomi sorularında en sık dönen yapı + klinik korelasyon konuları (pleksuslar ve periferik sinir
   yaralanmaları, inguinal bölge, koroner ve beyin arterleri, kranial sinirler, mediasten, portal sistem, larinks, kavernöz sinüs, spinal yollar).
   Kolay = her öğrencinin bilmesi gereken çekirdek yapılar; Orta = TUS ayrıntısı; Zor = ileri ayrıntı (sinüs içeriği, traktların çaprazlaşma düzeyi, perine, karpal).
   Yalnız yapı ve klinik korelasyon; hastalık tanı/tedavi yönetimi ilgili klinik branşlarındadır. */
(function () {
const GR = "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 43. baskı (2025)";
const MO = "Moore's Clinically Oriented Anatomy, 10. baskı (2026)";
const RUBIN = ["Rubin DI. Brachial and lumbosacral plexopathies: A review. Clin Neurophysiol Pract 2020", "https://doi.org/10.1016/j.cnp.2020.07.005"];
const SP = (t, u) => ["StatPearls: " + t + ". NCBI Bookshelf (güncel sürüm)", u];

UP.add({ id: "anatomi", subs: {
    ust: "Üst ekstremite",
    alt: "Alt ekstremite ve lumbosakral bölge",
    toraks: "Toraks ve kalp",
    karin: "Karın ve pelvis",
    bas: "Baş ve boyun",
    noro: "Nöroanatomi"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "ana-brakiyal-pleksus", tr: "Brakiyal pleksus ve üst ekstremite sinir yaralanmaları", en: "Brachial plexus and upper limb nerve injuries", cat: "ust", lvl: 1,
    src: { k: [GR, MO], m: [RUBIN, SP("Brachial Plexus Injuries", "https://www.ncbi.nlm.nih.gov/books/NBK482305/")] },
    c: [
      ["!C5–T1 ventral ramuslarından oluşur", "c5 t1|c5 ten t1|c beş|t bir|ventral ramus|ön dal|ön ramus"],
      ["!Kökler, trunkuslar, divizyonlar, kordlar, terminal dallar", "trunkus|truncus|divizyon|kord|fasikül|fasciculus|lateral kord|medial kord|posterior kord"],
      ["Beş terminal dal: muskulokutanöz, aksiller, radiyal, median, ulnar", "muskulokutan|musculocutan|aksiller sinir|aksiler sinir|axillary nerve|beş terminal|beş ana dal"],
      ["!Üst trunkus (C5–C6) yaralanması: Erb paralizisi, garson ucu", "erb|garson|waiter|bahşiş"],
      ["Alt trunkus (C8–T1) yaralanması: Klumpke, pençe el, Horner", "klumpke|pençe el|pence el|claw hand|horner"],
      ["Radiyal sinir hasarı: düşük el (humerus cisim kırığı)", "düşük el|el bileği düş|wrist drop|radial groove|spiral oluk|humerus cisim|humerus şaft"],
      ["Uzun torasik sinir hasarı: kanatlı skapula (serratus anterior)", "kanatlı skapula|kanat skapula|winged scapula|serratus anterior|uzun torasik|long thoracic"],
      ["Aksiller sinir: humerus cerrahi boyun kırığı, deltoid", "cerrahi boyun|deltoid|teres minör"]
    ]},
  { id: "ana-koroner-arterler", tr: "Koroner arterler", en: "Coronary arteries", cat: "toraks", lvl: 1,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Thorax, Heart Coronary Arteries", "https://pubmed.ncbi.nlm.nih.gov/30521211/"),
      ["Angelini P. Coronary artery anomalies: an entity in search of an identity. Circulation 2007", "https://doi.org/10.1161/CIRCULATIONAHA.106.618082"]] },
    c: [
      ["!Sağ ve sol koroner arter aort kökünden (aortik sinüslerden) çıkar", "aort kök|aortik sinüs|aort sinüs|valsalva|aort bulbus|aortun başlangıc|aort kapağının hemen üst|sol sinüsten|sağ sinüsten"],
      ["!Sol ana koroner: LAD ve sirkumfleks", "sol ana koroner|left main|lad|sol ön inen|anterior inen|interventriküler ön|sirkumfleks|circumflex"],
      ["LAD: ön duvar ve interventriküler septumun ön 2/3'ü", "septumun ön|ön üçte iki|ön duvar|anterior duvar|septal dal|diyagonal"],
      ["Sağ koroner: sağ ventrikül, SA ve AV düğüm (çoğu kişide)", "sinoatriyal|sa düğüm|sa nod|av düğüm|av nod|atriyoventriküler düğüm|sağ ventrikül"],
      ["!Dominansı PDA'yı veren arter belirler (çoğunlukla sağ)", "dominan|pda|posterior inen|arka inen|posterior interventriküler"],
      ["İnferior duvar çoğunlukla sağ koroner tarafından beslenir", "inferior duvar|alt duvar|inferior mi|diyafragmatik yüz|sağ koroner tarafından beslenir|inferior mi sağ koroner|inferior enfarkt sağ koroner"],
      ["Koroner akım ağırlıkla diyastolde olur", "diyastol"],
      ["Venöz dönüş: koroner sinüs ile sağ atriyuma", "koroner sinüs|coronary sinus|büyük kardiyak ven"]
    ]},
  { id: "ana-inguinal-kanal", tr: "İnguinal kanal ve femoral üçgen", en: "Inguinal canal and femoral triangle", cat: "karin", lvl: 1,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Abdomen and Pelvis: Inguinal Region (Inguinal Canal)", "https://www.ncbi.nlm.nih.gov/books/NBK470204/"),
      SP("Anatomy, Abdomen and Pelvis: Femoral Triangle", "https://www.ncbi.nlm.nih.gov/books/NBK541140/")] },
    c: [
      ["!Derin halka (transversalis fasya) ve yüzeyel halka (dış oblik aponevroz)", "derin halka|derin inguinal halka|internal halka|iç halka|deep ring|yüzeyel halka|yüzeysel halka|dış halka|superficial ring"],
      ["Duvarlar: taban inguinal ligaman, arka duvar transversalis fasya ve konjoint tendon", "konjoint|conjoint|transversalis fasya|fascia transversalis|arka duvar|ön duvar"],
      ["İçerik: erkekte spermatik kord, kadında ligamentum teres uteri; ilioinguinal sinir", "spermatik kord|funikulus|ligamentum teres|round ligament|yuvarlak ligaman|ilioinguinal"],
      ["İndirekt/direkt fıtık ayrımında nirengi: inferior epigastrik damarlar (Hesselbach üçgeni medialde)", "inferior epigastrik|alt epigastrik|hesselbach|hasselbach"],
      ["!Femoral üçgen sınırları: inguinal ligaman, sartorius, adduktor longus", "sartorius|adduktor longus|addüktor longus|addüktör longus|adductor longus"],
      ["!Femoral üçgen içeriği lateralden mediale: sinir, arter, ven, lenfatik (NAVEL)", "navel|lateralden mediale|sinir arter ven|femoral sinir arter|femoral arter femoral venin lateral"],
      ["Femoral kılıf ve femoral kanal (femoral fıtığın yolu, en medialde)", "femoral kılıf|femoral kanal|femoral halka|femoral fıtık|femoral herni"],
      ["Klinik: femoral arter/ven kateterizasyonu ve femoral sinir bloğu", "kateteriz|femoral ven kateter|femoral arter ponksiyon|femoral sinir blo|santral venöz"]
    ]},
  { id: "ana-kranial-sinirler", tr: "Kranial sinirler (genel bakış)", en: "Cranial nerves overview", cat: "noro", lvl: 1,
    src: { k: [GR, MO], m: [
      SP("Neuroanatomy, Cranial Nerve", "https://www.ncbi.nlm.nih.gov/books/NBK470353/"),
      ["Rhoton AL Jr. The anterior and middle cranial base. Neurosurgery 2002", "https://doi.org/10.1227/01.NEU.0000028087.76279.41"]] },
    c: [
      ["!On iki çift; I ve II dışındakiler beyin sapıyla ilişkili (XI'in spinal kökü üst servikal medulladan çıkar)", "on iki çift|12 çift|oniki çift|beyin sapıyla ilişkili|dışındakiler beyin sap"],
      ["Göz hareket sinirleri: III, IV (süperior oblik), VI (lateral rektus)", "okülomotor|okulomotor|troklear|trochlear|abdusens|abducens|süperior oblik|lateral rektus"],
      ["!Trigeminus üç dal (V1, V2, V3); V3 çiğneme kaslarını innerve eder", "trigeminal|trigeminus|oftalmik|maksiller|mandibüler|mandibular|çiğneme kas"],
      ["Fasiyal sinir: mimik kasları, tat (ön 2/3), lakrimal ve tükürük", "fasiyal|fasial|facial|mimik|korda timpani|chorda tympani|ön üçte iki"],
      ["!Parasempatik lif taşıyanlar: III, VII, IX, X", "parasempatik"],
      ["Vagus: en uzun kranial sinir, larinks ve viseral dallar", "vagus|vagal|en uzun kranial"],
      ["XI aksesuar: trapez ve SKM; XII hipoglossal: dil kasları", "aksesuar|accessory|trapez|sternokleidomastoid|skm|hipoglossal|hypoglossal|dil kasları"],
      ["Kafa tabanı delikleri (süperior orbital fissür, rotundum, ovale, juguler foramen)", "orbital fissür|rotundum|ovale|juguler foramen|jugular foramen|kribriform|stilomastoid"]
    ]},
  { id: "ana-rotator-manset", tr: "Rotator manşet", en: "Rotator cuff", cat: "ust", lvl: 1,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Rotator Cuff", "https://www.ncbi.nlm.nih.gov/books/NBK441844/"),
      SP("Anatomy, Shoulder and Upper Limb, Shoulder Muscles", "https://www.ncbi.nlm.nih.gov/books/NBK534836/")] },
    c: [
      ["!Dört kas: supraspinatus, infraspinatus, teres minör, subskapularis (SITS)", "sits|dört kas|supraspinatus|infraspinatus|subskapularis|subscapularis"],
      ["!Glenohumeral eklemi stabilize eder (humerus başını glenoide bastırır)", "humerus başını glenoid|glenoide bastır|glenoid boşluğa|dinamik stabiliz|stabilize eder"],
      ["Supraspinatus abdüksiyonu başlatır", "abdüksiyonu başlat|abduksiyonu başlat|ilk derece|ilk on beş derece|ilk 15 derece|başlangıç abdüksiyon|abdüksiyonun başlan"],
      ["Dış rotasyon: infraspinatus ve teres minör; iç rotasyon: subskapularis", "infraspinatus ve teres minör dış rotasyon|teres minör dış rotasyon|infraspinatus dış rotasyon|subskapularis iç rotasyon|subskapularis ise iç rotasyon"],
      ["İnnervasyon: suprascapular sinir (supra/infraspinatus), aksiller (teres minör), subskapular sinirler", "suprask|suprascapular|subskapular sinir|aksiller sinir|aksiler sinir"],
      ["Yapışma: büyük tüberkül (üç kas) ve küçük tüberkül (subskapularis)", "büyük tüberkül|tuberculum majus|greater tuberosity|küçük tüberkül|tuberculum minus|lesser tuberosity"],
      ["!En sık yırtılan/sıkışan: supraspinatus tendonu, subakromiyal alanda", "supraspinatus tendon|subakromiyal|subacromial|akromiyon|akromion|sıkışma|impingement"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "ana-willis-poligonu", tr: "Willis poligonu", en: "Circle of Willis", cat: "noro", lvl: 2,
    src: { k: [GR, MO], m: [
      SP("Neuroanatomy, Circle of Willis", "https://www.ncbi.nlm.nih.gov/books/NBK534861/"),
      ["Alpers BJ, Berry RG, Paddison RM. Anatomical studies of the circle of Willis in normal brain. Arch Neurol Psychiatry 1959", "https://doi.org/10.1001/archneurpsyc.1959.02340160007002"]] },
    c: [
      ["!Beyin tabanında anterior (karotis) ve posterior (vertebrobaziler) dolaşımı bağlayan halka", "karotis|karotid|vertebrobaziler|vertebrobazil|baziler|ön ve arka dolaşım|anterior ve posterior dolaşım"],
      ["!Bileşenler: ACA'lar, AComA, ICA'lar, PComA'lar, PCA'lar", "anterior serebral|ön serebral|aca|anterior komünikan|ön komünikan|acom|posterior komünikan|arka komünikan|pcom|posterior serebral|arka serebral"],
      ["Orta serebral arter halkanın parçası değildir", "halkanın parçası değil|halkanın parçası olmadığ|halkada yer almaz|poligonun parçası değil|halkaya katılmaz|halkaya dahil değil|poligona dahil değil|halkada yer almadığ"],
      ["İşlev: kollateral akım, tıkanmada yedek yol", "kollateral|yedek yol|alternatif yol|anastomoz"],
      ["Anatomik varyasyonlar sık (hipoplastik segmentler, fetal PCA)", "varyasyon|varyant|hipoplazi|hipoplastik|fetal pca|fetal tip|komplet değil|tam değil"],
      ["!Sakküler (berry) anevrizmalar en sık ön kısımda, AComA bileşkesinde", "anevrizma|berry|sakküler|çilek"],
      ["PComA anevrizması okülomotor sinire bası (pupil tutulumu)", "okülomotor|okulomotor|üçüncü kranial|pupil|midriyazis"]
    ]},
  { id: "ana-portosistemik-anastomoz", tr: "Portal ven ve portosistemik anastomozlar", en: "Portal vein and portosystemic anastomoses", cat: "karin", lvl: 2,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Abdomen and Pelvis, Portal Venous System (Hepatic Portal System)", "https://www.ncbi.nlm.nih.gov/books/NBK554589/"),
      ["A Comprehensive Review of Portosystemic Collaterals in Cirrhosis: Historical Aspects, Anatomy, and Classifications. Int J Hepatol 2016", "https://pmc.ncbi.nlm.nih.gov/articles/PMC5198179/"]] },
    c: [
      ["!Portal ven: süperior mezenterik ve splenik venin pankreas boynu arkasında birleşmesi", "süperior mezenterik ven|superior mezenterik ven|smv|splenik ven|dalak ven|pankreas boyn"],
      ["Karaciğer kan akımının çoğunu portal ven sağlar", "karaciğer kan akımının çoğu|kanın çoğu|büyük kısmı|dörtte üç|yüzde yetmiş beş"],
      ["!Portal hipertansiyonda portal ve sistemik venler arasındaki anastomozlar açılır", "portal hipertansiyon|portosistemik|portakaval|portokaval|kollateral"],
      ["!Özofagus alt ucu: sol gastrik ven ile azigos sistemi → özofagus varisleri", "sol gastrik|koroner ven|azigos|azygos|özofagus varis|ösofagus varis|özofageal varis"],
      ["Rektum: süperior rektal ile orta/inferior rektal venler → anorektal varis", "süperior rektal|üst rektal|orta rektal|inferior rektal|alt rektal|anorektal varis|rektal varis"],
      ["Göbek çevresi: paraumbilikal venler → kaput medusa", "paraumbilikal|kaput medusa|caput medusa|medusa başı"],
      ["Retroperitoneal (Retzius venleri) ve splenorenal yollar", "retzius|retroperitoneal|splenorenal|sol renal ven"]
    ]},
  { id: "ana-mediasten", tr: "Mediasten bölümleri ve içerikleri", en: "Mediastinum", cat: "toraks", lvl: 2,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Thorax, Mediastinum", "https://www.ncbi.nlm.nih.gov/books/NBK539819/"),
      SP("Anatomy, Thorax, Mediastinum Superior and Great Vessels", "https://www.ncbi.nlm.nih.gov/books/NBK519576/")] },
    c: [
      ["!İki plevral boşluk arasında; sternal açı–T4/T5 düzlemi üst ve alt mediasteni ayırır", "sternal açı|angulus sterni|louis açısı|t4 t5|t dört|torasik düzlem|üst ve alt mediasten|süperior ve inferior"],
      ["Alt mediasten: ön, orta, arka", "ön mediasten|anterior mediasten|orta mediasten|arka mediasten|posterior mediasten"],
      ["Üst mediasten: arkus aorta ve dalları, brakiyosefalik venler, trakea, timus", "arkus aorta|aort kavsi|brakiyosefalik|trakea|timus"],
      ["!Orta mediasten: kalp ve perikard, frenik sinirler", "perikard|frenik"],
      ["!Arka mediasten: özofagus, inen aorta, azigos, duktus torasikus, vagus", "duktus torasikus|ductus thoracicus|torasik kanal|inen aorta|desendan aorta|azigos|azygos|özofagus"],
      ["Ön mediasten kitleleri: timoma, teratom, lenfoma, tiroid (4T)", "timoma|teratom|lenfoma|4t|dört t"],
      ["Arka mediasten kitleleri: nörojenik tümörler", "nörojenik|norojenik|schwannom|nörofibrom|nöroblastom"]
    ]},
  { id: "ana-larinks", tr: "Larinks anatomisi ve innervasyonu", en: "Larynx anatomy and innervation", cat: "bas", lvl: 2,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Head and Neck: Larynx", "https://www.ncbi.nlm.nih.gov/books/NBK538202/"),
      SP("Anatomy, Head and Neck: Laryngeal Nerves", "https://www.ncbi.nlm.nih.gov/books/NBK557742/")] },
    c: [
      ["Kıkırdaklar: tiroid, krikoid (tam halka), epiglot, aritenoidler", "tiroid kıkırdak|krikoid|epiglot|aritenoid"],
      ["!Rekürren laringeal sinir: krikotiroid dışındaki tüm intrinsik kaslar", "rekürren|rekurren|recurrent|inferior laringeal|alt laringeal"],
      ["!Süperior laringeal sinir dış dalı: krikotiroid kas (sesin tizliği)", "krikotiroid|cricothyroid|dış dal|eksternal dal"],
      ["İç dal: vokal kordların üstünün duyusu; rekürren: altının duyusu", "iç dal|internal dal|internal branch|duyu|duysal|vokal kord üst|glottis üst"],
      ["!Sol rekürren arkus aortanın, sağ rekürren subklavyen arterin altından döner", "arkus aorta|aort kavsi|aortik ark|subklavyen|subklavian"],
      ["Tek abdüktör: posterior krikoaritenoid kas", "posterior krikoaritenoid|arka krikoaritenoid|tek abdüktör|tek abduktor"],
      ["Klinik: tiroidektomide rekürren hasarı → ses kısıklığı; bilateralde solunum yolu", "tiroidektomi|tiroid cerrahi|ses kısıklığı|disfoni|vokal kord felci|vokal kord paralizi"]
    ]},
  { id: "ana-lumbosakral-pleksus", tr: "Lumbosakral pleksus ve alt ekstremite sinirleri", en: "Lumbosacral plexus and lower limb nerves", cat: "alt", lvl: 2,
    src: { k: [GR, MO], m: [RUBIN, SP("Anatomy, Back, Lumbar Plexus", "https://www.ncbi.nlm.nih.gov/books/NBK545137/")] },
    c: [
      ["!Lomber pleksus L1–L4 (T12 katkısıyla), psoas kası içinde", "l1 l4|l1 den l4|l bir|lomber pleksus|lumbar pleksus|lumbar plexus|psoas"],
      ["!Femoral sinir: kuadriseps, diz ekstansiyonu, patella refleksi", "femoral sinir|kuadriseps|quadriceps|diz ekstansiyon|patella refleks"],
      ["Obturator sinir: uyluk addüktörleri", "obturator|obturatör|addüktör|adduktor"],
      ["!Siyatik sinir (L4–S3): tibial ve ortak peroneal dallar", "siyatik|sciatic|iskiyadik|tibial sinir|peroneal|fibular"],
      ["Ortak peroneal sinir fibula boynunda yaralanır: düşük ayak", "fibula boyn|düşük ayak|ayak düşük|foot drop|drop foot|steppage"],
      ["Süperior gluteal sinir hasarı: Trendelenburg bulgusu (gluteus medius)", "trendelenburg|gluteus medius|süperior gluteal"],
      ["Gluteal enjeksiyon üst dış kadrana (siyatiği korumak için)", "üst dış kadran|dış üst kadran|superolateral|üst lateral kadran"],
      ["Lateral femoral kutanöz sinir sıkışması: meraljia parestetika", "meralji|meralgia|lateral femoral kutan|lateral femoral cutaneous"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "ana-kavernoz-sinus", tr: "Kavernöz sinüs", en: "Cavernous sinus", cat: "bas", lvl: 3,
    src: { k: [GR, MO], m: [
      SP("Neuroanatomy, Cavernous Sinus", "https://www.ncbi.nlm.nih.gov/books/NBK459244/"),
      SP("Cavernous Sinus Syndromes", "https://www.ncbi.nlm.nih.gov/books/NBK532976/")] },
    c: [
      ["!Sella tursikanın iki yanında, sfenoid cisminin lateralindeki dural venöz sinüs", "sella|sfenoid|hipofiz|pituiter|dural venöz"],
      ["!Lateral duvarda III, IV, V1, V2 (yukarıdan aşağı)", "lateral duvar|yan duvar|duvarında"],
      ["!Sinüsün içinden internal karotis arter ve abdusens (VI) geçer", "internal karotis|iç karotis|karotis sifon|abdusens|abducens|altıncı kranial"],
      ["Venöz girdi: oftalmik venler, sfenoparyetal sinüs; çıkış petrozal sinüsler", "oftalmik ven|sfenoparyetal|petrozal|interkavernöz"],
      ["Yüzdeki tehlike üçgeni enfeksiyonu sinüs trombozuna yol açabilir (kapaksız venler)", "tehlike üçgen|tehlikeli üçgen|kapaksız|kapakçıksız|tromboz"],
      ["Karotiko-kavernöz fistül: pulsatil ekzoftalmi, kemozis", "karotiko kavernöz|karotikokavernöz|karotid kavernöz|fistül|pulsatil|kemozis"],
      ["Sinüs sendromunda ilk sıklıkla VI tutulur (sinüsün içinde serbest seyir)", "ilk tutulan|ilk etkilenen|en erken|lateral bakış"]
    ]},
  { id: "ana-spinal-traktlar", tr: "Medulla spinalis yolları", en: "Spinal cord tracts", cat: "noro", lvl: 3,
    src: { k: [GR, MO], m: [
      SP("Neuroanatomy, Spinal Cord", "https://www.ncbi.nlm.nih.gov/books/NBK559056/"),
      SP("Physiology, Spinal Cord", "https://www.ncbi.nlm.nih.gov/books/NBK544267/")] },
    c: [
      ["!Arka kordon (gracilis–cuneatus): pozisyon, vibrasyon, ince dokunma; medulla oblongatada çaprazlaşır", "arka kordon|dorsal kolon|dorsal column|arka kolon|gracilis|cuneatus|kuneatus|grasilis|medial lemniskus"],
      ["!Lateral spinotalamik yol: ağrı ve ısı; giriş düzeyine yakın ön beyaz komissürde çaprazlaşır", "spinotalamik|spinothalamic|ön beyaz komissür|anterior beyaz komissür|ağrı ve ısı|ağrı ısı"],
      ["!Lateral kortikospinal yol: istemli motor; piramidal dekussasyonda çaprazlaşır", "kortikospinal|corticospinal|piramidal|dekussasyon|decussation"],
      ["Spinoserebellar yollar: bilinçsiz propriosepsiyon, aynı taraf serebelluma", "spinoserebellar|spinocerebellar|bilinçsiz propriosepsiyon"],
      ["Duyu yolları üç nöronlu; talamusta VPL çekirdeğinde sinaps", "vpl|ventral posterolateral|üç nöron|üçüncü nöron|ikinci nöron"],
      ["Siringomiyeli: ön komissür tutulumu, pelerin tarzı ağrı-ısı kaybı", "siringomiyel|syringomyel|pelerin|şal tarzı|askı tarzı"],
      ["Anterior spinal arter sendromu: arka kordon korunur", "anterior spinal arter|ön spinal arter|arka kordon korunur|arka kolon korunur"],
      ["B12 eksikliği (subakut kombine dejenerasyon): arka ve lateral kordon", "subakut kombine|b12|kobalamin"]
    ]},
  { id: "ana-pelvik-taban", tr: "Pelvik taban ve perine", en: "Pelvic floor and perineum", cat: "karin", lvl: 3,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Abdomen and Pelvis: Pelvic Floor", "https://www.ncbi.nlm.nih.gov/books/NBK482200/"),
      SP("Anatomy, Abdomen and Pelvis, Perineal Body", "https://www.ncbi.nlm.nih.gov/books/NBK537345/")] },
    c: [
      ["!Pelvik diyafram: levator ani (puborektalis, pubokoksigeus, iliokoksigeus) ve koksigeus", "levator ani|pelvik diyafram|puborektal|pubokoksig|iliokoksig|koksigeus|coccygeus"],
      ["Puborektalis anorektal açıyı oluşturur (kontinans)", "anorektal açı|kontinans|puborektal askı"],
      ["!Perine: iskial tüberosite hattıyla ürogenital ve anal üçgene ayrılır", "ürogenital üçgen|urogenital üçgen|anal üçgen|iskial tüberosite|tuber ischiadicum"],
      ["Perineal cisim: kasların birleştiği merkez; doğumda yırtılabilir, epizyotomi", "perineal cisim|perineal body|centrum tendineum|epizyotomi"],
      ["!Pudendal sinir (S2–S4): Alcock kanalından geçer, perinenin ana siniri", "pudendal|alcock|pudendal kanal|s2 s4|s iki"],
      ["Derin perineal boşluk: eksternal üretral sfinkter, derin transvers perine kası", "derin perineal|eksternal üretral sfinkter|dış üretral sfinkter|derin transvers"],
      ["Yüzeyel perineal boşluk: bulbospongiosus, iskiokavernöz; Colles fasyası (idrar ekstravazasyonu)", "yüzeyel perineal|yüzeysel perineal|bulbospongios|iskiokavernöz|ischiocavernos|colles"],
      ["İskioanal fossa: apse yayılımı", "iskioanal|iskiorektal|ischioanal|ischiorectal"]
    ]},
  { id: "ana-el-karpal", tr: "Karpal kemikler, karpal tünel ve el", en: "Carpal bones, carpal tunnel and hand", cat: "ust", lvl: 3,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Shoulder and Upper Limb, Hand Carpal Bones", "https://www.ncbi.nlm.nih.gov/books/NBK535382/"),
      ["Carpal tunnel: Normal anatomy, anatomical variants and ultrasound technique. J Ultrasound 2012", "https://pubmed.ncbi.nlm.nih.gov/23396809/"]] },
    c: [
      ["!Sekiz karpal kemik, iki sıra (skafoid, lunat, triquetrum, pisiform / trapezium, trapezoid, kapitat, hamat)", "sekiz karpal|8 karpal|iki sıra|skafoid|scaphoid|lunat|trikuetrum|triquetrum|pisiform|trapezium|trapezoid|kapitat|capitate|hamat"],
      ["Skafoid: en sık kırılan; enfiye çukuru hassasiyeti; proksimal kutupta avasküler nekroz riski", "enfiye|anatomic snuff|snuffbox|avasküler nekroz|proksimal kutup"],
      ["Lunat: en sık çıkan karpal kemik", "lunat çık|lunat dislok|perilunat|lunat en sık çıkan"],
      ["!Karpal tünel: tavan fleksör retinakulum, içerik median sinir ve dokuz tendon", "karpal tünel|carpal tunnel|fleksör retinakulum|transvers karpal|dokuz tendon|9 tendon"],
      ["!Median sinir: tenar kaslar, lateral iki lumbrikal; palmar kutanöz dal tünel dışından", "median sinir|tenar|lumbrikal|palmar kutan|palmar cutaneous|maymun el|vaiz eli"],
      ["Guyon kanalı: ulnar sinir (pisiform–hamat kancası)", "guyon|ulnar kanal|hamat kanc|hamulus"],
      ["Ulnar sinir: hipotenar, interosseöz kaslar; Froment bulgusu", "hipotenar|interosse|froment|addüktor pollisis|adduktor pollisis"]
    ]},
  { id: "ana-abdominal-aorta", tr: "Abdominal aorta ve dalları", en: "Abdominal aorta and its branches", cat: "karin", lvl: 3,
    src: { k: [GR, MO], m: [
      SP("Anatomy, Abdomen and Pelvis: Abdominal Aorta", "https://www.ncbi.nlm.nih.gov/books/NBK525964/"),
      SP("Anatomy, Abdomen and Pelvis: Celiac Trunk", "https://www.ncbi.nlm.nih.gov/books/NBK459241/")] },
    c: [
      ["Diyaframın aortik hiatusundan (T12) girer, L4'te iliak arterlere ayrılır", "aortik hiatus|aort hiatus|t12|on ikinci torasik|l4|dördüncü lomber|iliak bifurkasyon|ana iliak"],
      ["!Üç tek ön visseral dal: çölyak trunkus, SMA, IMA", "çölyak|çolyak|celiac|süperior mezenterik arter|superior mezenterik arter|sma|inferior mezenterik|ima"],
      ["!Çölyak trunkus: sol gastrik, splenik, ortak hepatik (ön barsak)", "sol gastrik|splenik arter|dalak arter|ortak hepatik|common hepatic|ön barsak|foregut"],
      ["SMA orta barsak, IMA arka barsak; Riolan/Drummond anastomozları", "orta barsak|midgut|arka barsak|hindgut|riolan|drummond|marjinal arter"],
      ["Çift dallar: renal, gonadal, sürrenal, inferior frenik, lomber", "renal arter|gonadal|testiküler|ovaryen|sürrenal|adrenal|inferior frenik|lomber arter"],
      ["!SMA ile aorta arasında sol renal ven ve duodenumun 3. kısmı sıkışabilir", "nutcracker|fındıkkıran|sma sendrom|wilkie|duodenumun üçüncü|üçüncü kısmı|sol renal ven"],
      ["Median arkuat ligaman çölyak trunkusa bası yapabilir", "median arkuat|arkuat ligaman|dunbar"]
    ]}
]
});
})();
