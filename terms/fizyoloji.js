/* Fizyoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS temel bilimler fizyoloji sorularının en sık geldiği mekanizma konuları (membran ve aksiyon potansiyeli, kalp, dolaşım,
   böbrek, solunum, asit-baz, kas, endokrin ve sindirim fizyolojisi). Hastalık yönetimi ilgili klinik branşlara bırakıldı; burada yalnız normal mekanizma anlatılır.
   Kolay = her öğrencinin bilmesi gereken çekirdek; Orta = TUS'ta sık, hesap/ayrıntı isteyen; Zor = hücresel/moleküler ayrıntı ve hormonal düzenleme. */
(function () {
const GH = "Guyton and Hall Textbook of Medical Physiology, 15. baskı (2025)";
const GA = "Ganong's Review of Medical Physiology, 27. baskı (2025)";

UP.add({ id: "fizyoloji", subs: {
    hucre: "Hücre, sinir ve kas",
    kalp: "Kalp ve dolaşım",
    bobrek: "Böbrek, sıvı ve asit-baz",
    solunum: "Solunum",
    endokrin: "Endokrin, üreme ve sindirim"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "fiz-aksiyon-potansiyeli", tr: "İstirahat membran potansiyeli ve aksiyon potansiyeli", en: "Resting membrane potential and action potential", cat: "hucre", lvl: 1,
    src: { k: [GH, GA], m: [
      ["Hodgkin AL, Huxley AF. A quantitative description of membrane current and its application to conduction and excitation in nerve. J Physiol 1952", "https://doi.org/10.1113/jphysiol.1952.sp004764"],
      ["Bean BP. The action potential in mammalian central neurons. Nat Rev Neurosci 2007", "https://doi.org/10.1038/nrn2148"]] },
    c: [
      ["!İstirahat potansiyelini esas belirleyen potasyum kaçışı (K+ sızıntı kanalları)", "potasyum kaçış|potasyum sızıntı|potasyumun dışarı|potasyum geçirgen|k sızıntı|leak kanal|potasyum denge potansiyel"],
      ["Na+/K+-ATPaz: 3 Na+ dışarı, 2 K+ içeri (elektrojenik)", "sodyum potasyum pompa|sodyum potasyum atpaz|na k atpaz|nak atpaz|üç sodyum|elektrojenik"],
      ["Nernst / Goldman denklemi ile denge potansiyeli", "nernst|goldman|denge potansiyel"],
      ["!Depolarizasyon: voltaj kapılı Na+ kanallarının açılıp hızlı Na+ girişi", "voltaj kapılı sodyum|sodyum kanalları açıl|sodyum girişi|sodyum içeri|hızlı sodyum|depolarizasyon"],
      ["Eşik potansiyeli ve hep ya hiç kuralı", "eşik potansiyel|eşik değer|eşiğe ulaş|hep ya hiç|ya hep ya hiç|all or none"],
      ["!Repolarizasyon: Na+ kanallarının inaktivasyonu ve K+ çıkışı", "repolarizasyon|inaktivasyon kapı|inaktive olur|potasyum çıkış|potasyum dışarı çık|potasyum kanalları açıl"],
      ["Refrakter dönem (mutlak ve göreceli)", "refrakter|mutlak refrakter|rölatif refrakter|göreceli refrakter"],
      ["Miyelinli lifte saltatoryal iletim (Ranvier düğümleri)", "saltator|ranvier|miyelin"]
    ]},
  { id: "fiz-kalp-dongusu-frank-starling", tr: "Kalp döngüsü ve Frank-Starling mekanizması", en: "Cardiac cycle and the Frank-Starling mechanism", cat: "kalp", lvl: 1,
    src: { k: [GH, GA], m: [
      ["Patterson SW, Starling EH. On the mechanical factors which determine the output of the ventricles. J Physiol 1914", "https://doi.org/10.1113/jphysiol.1914.sp001669"],
      ["Sequeira V, van der Velden J. Historical perspective on heart function: the Frank-Starling Law. Biophys Rev 2015", "https://doi.org/10.1007/s12551-015-0184-4"]] },
    c: [
      ["!İzovolümetrik kasılma ve izovolümetrik gevşeme evreleri", "izovolümetrik|izovolumetrik|izometrik kasılma|izometrik gevşeme|tüm kapaklar kapalı|bütün kapaklar kapalı"],
      ["Ejeksiyon ve dolum evreleri (hızlı dolum, atriyal kasılma)", "ejeksiyon evre|ejeksiyon faz|atılım evre|hızlı dolum|yavaş dolum|diastaz|atriyal kasılma|atriyum kasılma"],
      ["Kalp sesleri: S1 AV kapakların, S2 semilunar kapakların kapanması", "birinci kalp ses|ikinci kalp ses|birinci ses|ikinci ses|s1|s2|semilunar kapaklar kapan|semilunar kapakların kapan|av kapakların kapan|av kapaklar kapan|atriyoventriküler kapakların kapan"],
      ["!Frank-Starling: diyastol sonu hacim (önyük) arttıkça atım hacmi artar", "frank starling|starling yasa|starling kanun|önyük|preload|diyastol sonu hacim|end diyastolik hacim|gerilme arttıkça"],
      ["Sarkomer boyu ve aktin-miyozin örtüşmesi / kalsiyum duyarlılığı", "sarkomer|aktin miyozin|örtüşme|kalsiyum duyarlılı"],
      ["!Kalp debisi = atım hacmi × kalp hızı; ard yük ve kontraktilite", "kalp debisi|kardiyak output|kardiyak debi|kontraktilite|ard yük|art yük|afterload"],
      ["Basınç-hacim halkası", "basınç hacim|basınç volüm|pv loop"]
    ]},
  { id: "fiz-kan-basinci-regulasyonu", tr: "Kan basıncının düzenlenmesi: baroreseptör refleksi ve RAAS", en: "Regulation of arterial blood pressure: baroreflex and RAAS", cat: "kalp", lvl: 1,
    src: { k: [GH, GA], m: [
      ["Lohmeier TE, Iliescu R. The baroreflex as a long-term controller of arterial pressure. Physiology 2015", "https://doi.org/10.1152/physiol.00035.2014"],
      ["Fountain JH, Lappin SL. Physiology, Renin Angiotensin System. StatPearls (NCBI Bookshelf)", "https://www.ncbi.nlm.nih.gov/books/NBK470410/"]] },
    c: [
      ["!Baroreseptörler: karotis sinüs ve aort kemeri", "baroreseptör|baro reseptör|karotis sinüs|karotid sinüs|aort kemer|arkus aorta"],
      ["Afferent yol: glossofaringeal ve vagus sinirleri, nükleus traktus solitarius", "glossofaring|vagus|traktus solitar|solitar çekirdek|nts"],
      ["!Basınç artınca sempatik azalır, parasempatik artar (hızlı, kısa dönem kontrol)", "sempatik aktivite azal|sempatik azal|sempatik baskıla|parasempatik art|sempatik tonus azal|vagal tonus art|saniyeler içinde|hızlı düzenle"],
      ["!Renin: jukstaglomerüler hücrelerden, renal perfüzyon düşünce", "renin|jukstaglomerüler|juxtaglomerüler|makula densa"],
      ["Anjiyotensinojen → anjiyotensin I → (ACE, akciğer) anjiyotensin II", "anjiyotensinojen|anjiotensinojen|anjiyotensin bir|anjiyotensin 1|ace|anjiyotensin dönüştürücü|akciğer endotel"],
      ["Anjiyotensin II: vazokonstriksiyon, aldosteron, ADH, susama (AT1)", "vazokonstrik|aldosteron|susama|at1|anjiyotensin iki|anjiyotensin 2"],
      ["Uzun dönem kontrol: böbrek basınç-natriürez mekanizması", "basınç natriürez|basınç diürez|basınca bağlı natriürez|pressure natriuresis"]
    ]},
  { id: "fiz-oksijen-hemoglobin-egrisi", tr: "Oksijen-hemoglobin dissosiyasyon eğrisi", en: "Oxygen-haemoglobin dissociation curve", cat: "solunum", lvl: 1,
    src: { k: [GH, GA], m: [
      ["Collins JA, Rudenski A, Gibson J, Howard L, O'Driscoll R. Relating oxygen partial pressure, saturation and content: the haemoglobin-oxygen dissociation curve. Breathe 2015", "https://doi.org/10.1183/20734735.001415"],
      ["Hsia CC. Respiratory function of hemoglobin. N Engl J Med 1998", "https://doi.org/10.1056/NEJM199801223380407"]] },
    c: [
      ["!Sigmoid şekil: kooperatif bağlanma", "sigmoid|s şekl|kooperatif|pozitif kooperatif"],
      ["P50: hemoglobinin yarı doyduğu PO2 (afiniteyi gösterir)", "p50|p elli|yüzde elli doy|yarı doy|afinite"],
      ["!Sağa kayma: CO2, H+ (asidoz), ısı, 2,3-BPG artışı → O2 dokuya kolay verilir", "sağa kay|sağa doğru kay|2 3 bpg|2 3 dpg|bifosfogliserat|difosfogliserat|iki üç bpg|iki üç dpg|sıcaklık art|ısı art"],
      ["!Bohr etkisi", "bohr"],
      ["Sola kayma: fetal hemoglobin, CO, hipotermi, alkaloz", "sola kay|sola doğru kay|fetal hemoglobin|hbf|karbonmonoksit|karbon monoksit|hipotermi"],
      ["Plato bölümü yüksek PO2'de doygunluğu korur; dik bölüm dokuda boşaltım", "plato|düz kısım|düz kısmı|dik kısım|dik kısmı|dik bölüm"],
      ["Oksijen içeriği çoğunlukla hemoglobine bağlı, az kısmı çözünmüş", "oksijen içeriği|çözünmüş oksijen|hemoglobine bağlı|1 34|bir otuz dört"]
    ]},
  { id: "fiz-vucut-sivi-kompartmanlari", tr: "Vücut sıvı kompartmanları", en: "Body fluid compartments", cat: "bobrek", lvl: 1,
    src: { k: [GH, GA], m: [
      ["Bhave G, Neilson EG. Body fluid dynamics: back to the future. J Am Soc Nephrol 2011", "https://doi.org/10.1681/ASN.2011080865"],
      ["Physiology, Body Fluids. StatPearls (NCBI Bookshelf)", "https://ncbi.nlm.nih.gov/books/NBK541059/"]] },
    c: [
      ["!Total vücut suyu vücut ağırlığının yaklaşık %60'ı", "total vücut suyu|toplam vücut suyu|vücut suyu|yüzde altmış"],
      ["!Hücre içi sıvı 2/3, hücre dışı sıvı 1/3", "hücre içi|intraselüler|hücre dışı|ekstraselüler|üçte iki|üçte bir"],
      ["Hücre dışı sıvı: interstisyel sıvı ve plazma", "interstisyel|interstisiyel|plazma hacm|plazma volüm"],
      ["İyon dağılımı: dışarıda Na+ ve Cl-, içeride K+, fosfat, protein", "dışarıda sodyum|hücre dışında sodyum|içeride potasyum|hücre içinde potasyum|hücre içi potasyum|ekstraselüler sodyum|intraselüler potasyum"],
      ["!Su osmotik gradiyente göre kompartmanlar arasında yer değiştirir", "osmotik|ozmotik|osmolarite|ozmolarite|osmolalite"],
      ["Ölçüm: indikatör dilüsyon yöntemi (ağır su, inülin, Evans mavisi)", "indikatör dilüsyon|dilüsyon yöntem|seyreltme|ağır su|döteryum|inülin|evans mavi|radyoaktif albümin"],
      ["Kapiller düzeyde Starling kuvvetleri (hidrostatik ve onkotik basınç)", "starling kuvvet|hidrostatik|onkotik|kolloid osmotik"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "fiz-gfr-klerens", tr: "Renal klerens ve glomerüler filtrasyon hızı", en: "Renal clearance and glomerular filtration rate", cat: "bobrek", lvl: 2,
    src: { k: [GH, GA], m: [
      ["Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther 2017", "https://pubmed.ncbi.nlm.nih.gov/28474735/"],
      ["KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int 2024", "https://doi.org/10.1016/j.kint.2023.10.018"]] },
    c: [
      ["!Klerens formülü: idrar konsantrasyonu × idrar akımı / plazma konsantrasyonu", "klerens|clearance|idrar akım|ux v|u çarpı v"],
      ["!İnülin: serbestçe filtre edilir, emilmez, salgılanmaz → GFR'nin altın standardı", "inülin|inulin|altın standart"],
      ["Kreatinin klerensi GFR'yi bir miktar fazla tahmin eder (tübüler sekresyon)", "kreatinin|tübüler sekresyon|tübülden salgılan|tübüler salgı|fazla tahmin|olduğundan yüksek"],
      ["PAH klerensi = efektif renal plazma akımı", "pah|para amino|paraaminohippür|renal plazma akım"],
      ["Filtrasyon fraksiyonu = GFR / renal plazma akımı", "filtrasyon fraksiyon|filtrasyon oran"],
      ["!GFR belirleyicileri: glomerüler hidrostatik basınç, Bowman ve onkotik basınç (Starling)", "glomerüler hidrostatik|glomerül kapiller basınç|bowman|onkotik|net filtrasyon basınç"],
      ["Afferent/efferent arteriyol tonusu ile GFR değişimi", "afferent|efferent"],
      ["Otoregülasyon: miyojenik yanıt ve tübuloglomerüler geri bildirim", "otoregülasyon|miyojenik|tübuloglomerüler|tubuloglomerüler|makula densa"]
    ]},
  { id: "fiz-ters-akim-adh", tr: "Zıt akım (countercurrent) mekanizması ve ADH", en: "Countercurrent mechanism and antidiuretic hormone", cat: "bobrek", lvl: 2,
    src: { k: [GH, GA], m: [
      ["Sands JM, Layton HE. The physiology of urinary concentration: an update. Semin Nephrol 2009", "https://doi.org/10.1016/j.semnephrol.2009.03.008"],
      ["Knepper MA, Kwon TH, Nielsen S. Molecular physiology of water balance. N Engl J Med 2015", "https://doi.org/10.1056/NEJMra1404726"]] },
    c: [
      ["!Zıt akım çoğaltıcısı: Henle kulpu medullada hiperosmolar gradiyent oluşturur", "zıt akım|ters akım|karşı akım|countercurrent|kaunter|çoğaltıcı|multiplier|hiperosmolar|medüller gradiyent|medulla gradiyent"],
      ["!Kalın çıkan kol: NKCC2 ile NaCl geri emilimi, suya geçirgen değil", "kalın çıkan|nkcc2|nkcc|sodyum potasyum iki klor|suya geçirgen değil|suya geçirimsiz"],
      ["İnen ince kol suya geçirgen", "inen kol|inen ince|inen bacak"],
      ["Vasa rekta: zıt akım değiştiricisi, gradiyenti korur", "vasa rekta|vaza rekta|değiştirici|exchanger"],
      ["Üre geri dönüşümü iç medulla osmolaritesine katkı", "üre geri dönüş|üre döngü|üre taşıyıc|üre"],
      ["!ADH: plazma osmolalitesi artınca arka hipofizden salınır", "adh|antidiüretik|vazopresin|arka hipofiz|nörohipofiz|osmoreseptör"],
      ["V2 reseptörü → cAMP → akuaporin-2 toplayıcı kanal apikal zarına", "v2|akuaporin|aquaporin|aqp2|toplayıcı kanal|toplayıcı tübül"]
    ]},
  { id: "fiz-ventilasyon-perfuzyon", tr: "Ventilasyon-perfüzyon ilişkisi", en: "Ventilation-perfusion relationships", cat: "solunum", lvl: 2,
    src: { k: [GH, GA], m: [
      ["Petersson J, Glenny RW. Gas exchange and ventilation-perfusion relationships in the lung. Eur Respir J 2014", "https://doi.org/10.1183/09031936.00037014"],
      ["Sarkar M, Niranjan N, Banyal PK. Mechanisms of hypoxemia. Lung India 2017", "https://doi.org/10.4103/0970-2113.197116"]] },
    c: [
      ["!V/Q oranı: alveoler ventilasyon / kapiller perfüzyon", "ventilasyon perfüzyon|v q|vq|ventilasyon perfüzyon oran"],
      ["!Akciğer apeksinde V/Q yüksek, bazalde düşük (yerçekimi)", "apekste yüksek|apeks yüksek|apikalde yüksek|tepede yüksek|bazalde düşük|tabanda düşük|bazalde v q düşük|apekste v q yüksek"],
      ["Ventilasyon ve perfüzyon ikisi de bazalde fazla; perfüzyon daha çok artar", "perfüzyon daha|kan akımı daha fazla|perfüzyon bazalde|ikisi de bazal"],
      ["!Şant (V/Q sıfır): oksijene yanıt vermeyen hipoksemi", "şant|sant|oksijene yanıt verme|oksijen vermekle düzelmez|oksijenle düzelmez"],
      ["Ölü boşluk (V/Q sonsuz)", "ölü boşluk|ölü alan|dead space|sonsuz"],
      ["Hipoksik pulmoner vazokonstriksiyon", "hipoksik pulmoner vazokonstrik|hipoksik vazokonstrik"],
      ["Hipokseminin en sık mekanizması V/Q uyumsuzluğu; A-a gradiyenti", "uyumsuzluk|uyumsuz|mismatch|a a gradiyent|alveoler arteriyel"]
    ]},
  { id: "fiz-asit-baz", tr: "Asit-baz fizyolojisi", en: "Acid-base physiology", cat: "bobrek", lvl: 2,
    src: { k: [GH, GA], m: [
      ["Hamm LL, Nakhoul N, Hering-Smith KS. Acid-base homeostasis. Clin J Am Soc Nephrol 2015", "https://doi.org/10.2215/CJN.07400715"],
      ["Berend K, de Vries APJ, Gans ROB. Physiological approach to assessment of acid-base disturbances. N Engl J Med 2014", "https://doi.org/10.1056/NEJMra1003327"]] },
    c: [
      ["!Bikarbonat-karbonik asit tamponu ve Henderson-Hasselbalch denklemi", "henderson|hasselbalch|bikarbonat tampon|karbonik asit|tampon sistem"],
      ["Karbonik anhidraz: CO2 + H2O ⇌ H2CO3", "karbonik anhidraz"],
      ["Diğer tamponlar: hemoglobin, fosfat, proteinler", "hemoglobin tampon|fosfat tampon|protein tampon|hücre içi tampon"],
      ["!Akciğer CO2'yi (dakikalar), böbrek bikarbonatı (günler) düzenler", "solunumsal kompanzasyon|solunum kompanzasyon|akciğer co2|co2 atılım|hiperventilasyon|hipoventilasyon|renal kompanzasyon|böbrek kompanzasyon|ventilasyonla dakikalar|akciğer dakikalar|akciğerler dakikalar"],
      ["!Böbrek: filtre bikarbonatın geri emilimi ve yeni bikarbonat üretimi", "bikarbonat geri emil|bikarbonatı geri emer|yeni bikarbonat"],
      ["Asit atılımı: titre edilebilir asit ve amonyum", "titre edilebilir|titrasyon asit|amonyum|amonyak"],
      ["Anyon açığı: Na - (Cl + HCO3)", "anyon açığ|anyon gap|anion gap"]
    ]},
  { id: "fiz-noromuskuler-kavsak-kasilma", tr: "Nöromüsküler kavşak ve iskelet kası kasılması", en: "Neuromuscular junction and skeletal muscle contraction", cat: "hucre", lvl: 2,
    src: { k: [GH, GA], m: [
      ["Rodríguez Cruz PM, Cossins J, Beeson D, Vincent A. The neuromuscular junction in health and disease: molecular mechanisms governing synaptic formation and homeostasis. Front Mol Neurosci 2020", "https://doi.org/10.3389/fnmol.2020.610964"],
      ["Kuo IY, Ehrlich BE. Signaling in muscle contraction. Cold Spring Harb Perspect Biol 2015", "https://doi.org/10.1101/cshperspect.a006023"]] },
    c: [
      ["!Asetilkolin salınımı: sinir ucuna Ca2+ girişi ile vezikül füzyonu", "asetilkolin|kalsiyum giriş|vezikül|veziküller"],
      ["Nikotinik reseptör → son plak potansiyeli", "nikotinik|son plak|end plate|motor son plak"],
      ["Asetilkolinesteraz yıkımı", "asetilkolinesteraz|kolinesteraz"],
      ["!Eksitasyon-kontraksiyon eşleşmesi: T tübülü, DHP reseptörü, rianodin reseptörü", "eksitasyon kontraksiyon|uyarılma kasılma|t tübül|dihidropiridin|dhp|rianodin|ryanodin|ryr"],
      ["Sarkoplazmik retikulumdan Ca2+ salınımı", "sarkoplazmik retikulum|sarkoplazmik"],
      ["!Ca2+ troponin C'ye bağlanır, tropomiyozin kayar, çapraz köprü oluşur", "troponin|tropomiyozin|çapraz köprü|cross bridge"],
      ["Kayan filamentler; ATP gevşeme için gerekli (SERCA)", "kayan filament|sliding|serca|gevşeme için atp|atp gerek"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "fiz-pacemaker-elektrofizyoloji", tr: "Kalbin elektrofizyolojisi ve pacemaker hücreleri", en: "Cardiac electrophysiology and pacemaker activity", cat: "kalp", lvl: 3,
    src: { k: [GH, GA], m: [
      ["DiFrancesco D. The role of the funny current in pacemaker activity. Circ Res 2010", "https://doi.org/10.1161/CIRCRESAHA.109.208041"],
      ["Lakatta EG, Maltsev VA, Vinogradova TM. A coupled SYSTEM of intracellular Ca2+ clocks and surface membrane voltage clocks controls the timekeeping mechanism of the heart's pacemaker. Circ Res 2010", "https://doi.org/10.1161/CIRCRESAHA.109.206078"]] },
    c: [
      ["!Sinoatriyal düğüm: spontan diyastolik depolarizasyon (faz 4)", "sinoatriyal|sinüs düğüm|sa düğüm|spontan diyastolik|diyastolik depolarizasyon|faz 4|faz dört|prepotansiyel"],
      ["!Funny akım (If, HCN kanalları)", "funny|hcn|i f akım|if akım|komik akım"],
      ["Pacemaker hücresinde depolarizasyon L tipi Ca2+ kanalıyla", "l tipi kalsiyum|l tip kalsiyum|kalsiyum girişi ile depolar"],
      ["Ventrikül miyositi: faz 0 hızlı Na+, faz 2 plato (Ca2+ girişi)", "faz 0|faz sıfır|plato|faz 2|faz iki"],
      ["Kalsiyum saati: sarkoplazmik retikulum Ca2+ salınımı ve Na+/Ca2+ değiştirici", "kalsiyum saat|calcium clock|sodyum kalsiyum değiştir|ncx"],
      ["!Otonom etki: sempatik (β1, cAMP) hızlandırır, vagus (ACh, K+ kanalı) yavaşlatır", "beta 1|beta bir|β1|camp|siklik amp|vagal|vagus|asetilkolin|parasempatik"],
      ["AV düğümde ileti gecikmesi; His-Purkinje hızlı ileti", "ileti gecikme|av gecikme|düğümde gecik|iletiyi gecikt|purkinje hızlı|purkinje sisteminde ise ileti"]
    ]},
  { id: "fiz-sinaptik-iletim", tr: "Sinaptik iletim", en: "Synaptic transmission", cat: "hucre", lvl: 3,
    src: { k: [GH, GA], m: [
      ["Südhof TC. Neurotransmitter release: the last millisecond in the life of a synaptic vesicle. Neuron 2013", "https://doi.org/10.1016/j.neuron.2013.10.022"],
      ["Südhof TC, Rothman JE. Membrane fusion: grappling with SNARE and SM proteins. Science 2009", "https://doi.org/10.1126/science.1161748"]] },
    c: [
      ["!Presinaptik voltaj kapılı Ca2+ kanalları açılır, Ca2+ girer", "presinaptik|voltaj kapılı kalsiyum|kalsiyum kanal|kalsiyum gir"],
      ["!SNARE kompleksi ve sinaptotagmin (Ca2+ algılayıcı) ile vezikül füzyonu", "snare|sinaptotagmin|synaptotagmin|sinaptobrevin|sintaksin|snap 25|ekzositoz"],
      ["Kuantal salınım", "kuantal|kuantum|quantal"],
      ["İyonotropik ve metabotropik (G proteinine bağlı) reseptörler", "iyonotropik|metabotropik|g protein"],
      ["!EPSP (eksitatör) ve IPSP (inhibitör) postsinaptik potansiyeller", "epsp|ipsp|eksitatör postsinaptik|inhibitör postsinaptik"],
      ["Mekânsal ve zamansal sumasyon; aksonun başlangıç segmenti", "sumasyon|mekansal|zamansal|başlangıç segment|akson tepe"],
      ["Başlıca nörotransmitterler: glutamat (uyarıcı), GABA ve glisin (inhibitör)", "glutamat|uyarıcı nörotransmit|inhibitör nörotransmit|gaba inhibitör|glisin inhibitör"],
      ["Sinaptik plastisite: uzun süreli güçlenme (LTP)", "plastisite|uzun süreli güçlen|uzun dönem potansiyalizasyon|ltp|long term potentiation"]
    ]},
  { id: "fiz-gi-hormonlar", tr: "Gastrointestinal hormonlar", en: "Gastrointestinal hormones", cat: "endokrin", lvl: 3,
    src: { k: [GH, GA], m: [
      ["Psichas A, Reimann F, Gribble FM. Gut chemosensing mechanisms. J Clin Invest 2015", "https://doi.org/10.1172/JCI76309"],
      ["Rehfeld JF. Cholecystokinin and the hormone concept. Endocr Connect 2021", "https://doi.org/10.1530/EC-21-0025"]] },
    c: [
      ["!Gastrin: antrum G hücreleri; mide asidi salgısı ve mukoza büyümesi", "gastrin|g hücre|antrum"],
      ["!Sekretin: duodenum S hücreleri, asit uyarır; pankreastan bikarbonat", "sekretin|secretin|s hücre"],
      ["!Kolesistokinin: I hücreleri, yağ ve protein uyarır; safra kesesi kasılması, pankreas enzimi", "kolesistokinin|cck|i hücre|safra kesesi kasıl|oddi"],
      ["GIP ve GLP-1: inkretin etki (glukoza bağımlı insülin salgısı)", "gip|glp 1|glp1|inkretin|incretin"],
      ["Somatostatin: D hücreleri, genel inhibitör", "somatostatin|d hücre"],
      ["Motilin: açlıkta göç eden motor kompleks", "motilin|göç eden motor|migrating motor|mmc"],
      ["Grelin: midede, iştah artırır", "grelin|ghrelin"],
      ["Enteroendokrin hücreler lümen içeriğini algılar", "kemosens|lümen içeri|içeriğini algıla|besin algıla|nutrient sens"]
    ]},
  { id: "fiz-tiroid-hormon-fizyolojisi", tr: "Tiroid hormonu fizyolojisi", en: "Thyroid hormone physiology", cat: "endokrin", lvl: 3,
    src: { k: [GH, GA], m: [
      ["Mullur R, Liu YY, Brent GA. Thyroid hormone regulation of metabolism. Physiol Rev 2014", "https://doi.org/10.1152/physrev.00030.2013"],
      ["Bianco AC, Dumitrescu A, Gereben B, et al. Paradigms of dynamic control of thyroid hormone signaling. Endocr Rev 2019", "https://doi.org/10.1210/er.2018-00275"]] },
    c: [
      ["!Sentez: NIS ile iyot alımı, tiroid peroksidaz ile organifikasyon ve eşleşme", "sodyum iyot|nis|iyot pompa|iyot taşıyıcı|tiroid peroksidaz|peroksidaz|tpo|organifikasyon|organifiye"],
      ["Tiroglobulin üzerinde MIT/DIT, kolloidde depolanma", "tiroglobulin|mit|dit|monoiyodotirozin|diiyodotirozin|kolloid"],
      ["!Dejodinazlar: T4 periferde aktif T3'e çevrilir; rT3 inaktif", "dejodinaz|deiyodinaz|deiodinaz|t4 ten t3|t4 t3 e|t3 e dönüş|t3 e çevril|reverse t3|rt3|ters t3"],
      ["!HPT ekseni: TRH → TSH → T3/T4, negatif geri bildirim", "trh|tsh|negatif geri bildirim|negatif feedback|hipotalamus hipofiz tiroid"],
      ["Taşınma: çoğu TBG'ye bağlı, serbest kısım aktif", "tbg|tiroksin bağlayan|serbest t4|serbest hormon|bağlı olarak taşın"],
      ["Nükleer tiroid hormon reseptörü (TR) gen transkripsiyonu", "nükleer reseptör|tiroid hormon reseptör|gen transkripsiyon|gen ifade"],
      ["Etkiler: bazal metabolizma, ısı üretimi, Na/K-ATPaz, beta adrenerjik duyarlılık, gelişim", "bazal metabolizma|termogenez|ısı üretim|beta adrenerjik|beta reseptör|santral sinir sistemi gelişim|beyin gelişim"]
    ]},
  { id: "fiz-glukoz-homeostazi", tr: "Glukoz homeostazı: insülin ve glukagon", en: "Glucose homeostasis: insulin and glucagon", cat: "endokrin", lvl: 3,
    src: { k: [GH, GA], m: [
      ["Röder PV, Wu B, Liu Y, Han W. Pancreatic regulation of glucose homeostasis. Exp Mol Med 2016", "https://doi.org/10.1038/emm.2016.6"],
      ["Müller TD, Finan B, Bloom SR, et al. Glucagon-like peptide 1 (GLP-1). Mol Metab 2019", "https://doi.org/10.1016/j.molmet.2019.09.010"]] },
    c: [
      ["!Beta hücresinde insülin salgısı: GLUT2, glukokinaz, ATP artışı, K-ATP kanalı kapanır, Ca2+ girer", "glut2|glut 2|glukokinaz|katp|k atp|atp duyarlı potasyum|atpye duyarlı|potasyum kanalı kapan"],
      ["İki fazlı insülin salgısı", "iki fazlı|bifazik|birinci faz|ilk faz"],
      ["!İnsülin: GLUT4 translokasyonu (kas, yağ), glikojen sentezi, lipogenez", "glut4|glut 4|glikojen sentez|lipogenez|anabolik"],
      ["İnsülin reseptörü tirozin kinaz, IRS-PI3K-Akt yolu", "irs|pi3k|akt|insülin reseptör substrat|fosfatidilinozitol"],
      ["!Glukagon: alfa hücreleri; glikojenoliz ve glukoneogenez (karaciğer)", "glukagon|alfa hücre|glikojenoliz|glukoneogenez|glikoneogenez"],
      ["Kontrregülatuvar hormonlar: adrenalin, kortizol, büyüme hormonu", "kontrregülat|karşı düzenleyici|adrenalin|epinefrin|kortizol|büyüme hormon"],
      ["İnkretin etkisi: oral glukoz IV'ten fazla insülin salgılatır (GLP-1, GIP)", "inkretin|incretin|glp 1|glp1|gip"]
    ]},
  { id: "fiz-menstruel-siklus", tr: "Menstrüel siklus fizyolojisi", en: "Physiology of the menstrual cycle", cat: "endokrin", lvl: 3,
    src: { k: [GH, GA], m: [
      ["Reed BG, Carr BR. The Normal Menstrual Cycle and the Control of Ovulation. Endotext (NCBI Bookshelf)", "https://ncbi.nlm.nih.gov/books/NBK279054/"],
      ["Mihm M, Gangooly S, Muttukrishna S. The normal menstrual cycle in women. Anim Reprod Sci 2011", "https://doi.org/10.1016/j.anireprosci.2010.08.030"]] },
    c: [
      ["!GnRH pulsatil salgısı → FSH ve LH", "gnrh|pulsatil|gonadotropin salgı"],
      ["!Foliküler faz: FSH ile folikül gelişimi, dominant folikülden östradiol", "foliküler faz|folikül faz|dominant folikül"],
      ["İki hücre iki gonadotropin: teka (LH, androjen) – granüloza (FSH, aromataz)", "teka|granüloza|aromataz|iki hücre"],
      ["!Östrojenin pozitif geri bildirimi ile LH pik → ovülasyon", "lh pik|lh piki|lh surge|lh dalga|pozitif geri bildirim|pozitif feedback"],
      ["Luteal faz: korpus luteum progesteron salgılar", "luteal|korpus luteum|corpus luteum|sarı cisim"],
      ["Endometrium: proliferatif ve sekretuvar faz; progesteron düşünce menstrüasyon", "proliferatif|sekretuvar|sekretuar"],
      ["İnhibin B / inhibin A ve FSH'nin baskılanması", "inhibin"]
    ]}
]});
})();
