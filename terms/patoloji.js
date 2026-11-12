/* Patoloji (genel patoloji) — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS temel bilimler patoloji sorularının ağırlığı genel patolojidedir (hücre hasarı, inflamasyon, onarım, hemodinami, neoplazi).
   Kolay = hücre adaptasyonu, nekroz, apoptoz, akut inflamasyon, yara iyileşmesi; Orta = granülom, tromboz, emboli/infarkt, ödem, ateroskleroz;
   Zor = kanserin ayırt edici özellikleri, onkogen/tümör baskılayıcı, karsinogenez, amiloidoz, trinükleotid tekrar hastalıkları.
   Aşırı duyarlılık reaksiyonları mikrobiyoloji/immünoloji paketinde (mik-hipersensitivite) olduğu için alınmadı.
   Yalnız mekanizma ve morfoloji; hastalık yönetimi ilgili klinik branşlarındadır (şok: acil tıp). Kaynak kitaplar: Robbins 11. baskı, Rubin 8. baskı. */
(function () {
const RB = "Robbins, Cotran & Kumar Pathologic Basis of Disease, 11. baskı (2025)";
const RU = "Rubin's Pathology: Mechanisms of Human Disease, 8. baskı (2020)";
const NCCD = ["Galluzzi L, et al. Molecular mechanisms of cell death: recommendations of the Nomenclature Committee on Cell Death 2018. Cell Death Differ 2018", "https://pubmed.ncbi.nlm.nih.gov/29362479/"];
const MEDZ = ["Medzhitov R. Origin and physiological roles of inflammation. Nature 2008", "https://doi.org/10.1038/nature07201"];
const WOLB = ["Wolberg AS, et al. Venous thrombosis. Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.6"];
const HAN11 = ["Hanahan D, Weinberg RA. Hallmarks of cancer: the next generation. Cell 2011", "https://doi.org/10.1016/j.cell.2011.02.013"];

UP.add({ id: "patoloji", subs: {
    hucre: "Hücre hasarı, adaptasyon ve ölüm",
    inf: "İnflamasyon ve onarım",
    hem: "Hemodinami",
    neo: "Neoplazi",
    gen: "Genetik ve sistemik birikim hastalıkları"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "pat-hucre-adaptasyonlari", tr: "Hücresel adaptasyonlar (hipertrofi, hiperplazi, atrofi, metaplazi)", en: "Cellular adaptations", cat: "hucre", lvl: 1,
    src: { k: [RB, RU], m: [
      ["Giroux V, Rustgi AK. Metaplasia: tissue injury adaptation and a precursor to the dysplasia–cancer sequence. Nat Rev Cancer 2017", "https://doi.org/10.1038/nrc.2017.68"],
      ["Nakamura M, Sadoshima J. Mechanisms of physiological and pathological cardiac hypertrophy. Nat Rev Cardiol 2018", null]] },
    c: [
      ["!Hipertrofi: hücre boyutunun artması (ör. kalp kası, gebelikte uterus)", "hipertrofi|hypertroph|hücre boyut|hücrelerin boyut|hücre hacmi"],
      ["!Hiperplazi: hücre sayısının artması (ör. endometriyal hiperplazi, BPH)", "hiperplazi|hyperplas|hücre sayısı|hücre sayısının"],
      ["Atrofi: hücre boyutunun küçülmesi (ubikitin-proteazom, otofaji)", "atrofi|atroph|ubikitin|ubiquitin|proteazom|otofaji|autophag"],
      ["!Metaplazi: bir erişkin hücre tipinin yerini başka bir tipe bırakması", "metaplazi|metaplas"],
      ["Barrett özofagusu: skuamözden kolumnar (intestinal) metaplazi", "barrett|kolumnar|columnar|intestinal metaplazi"],
      ["Sigara içicide bronşta skuamöz metaplazi", "skuamöz metaplazi|squamous metaplas|yassı epitel metaplazi|yassı epitele dönüş|bronş epiteli"],
      ["Adaptasyon geri dönüşümlü; metaplazi displazi ve kansere zemin olabilir", "genellikle geri dönüşümlü|geri dönüşümlüdür|geri dönebilir|uyaran kalkınca geri|uyaran kalk|uyaran ortadan kalk|displaziye zemin|kansere zemin"]
    ]},
  { id: "pat-hucre-hasari-nekroz", tr: "Hücre hasarı ve nekroz tipleri", en: "Cell injury and patterns of necrosis", cat: "hucre", lvl: 1,
    src: { k: [RB, RU], m: [NCCD,
      ["Tang D, et al. The molecular machinery of regulated cell death. Cell Res 2019", null]] },
    c: [
      ["!Geri dönüşümlü hasar: hücresel şişme (hidropik) ve yağlı değişiklik", "hücresel şişme|hücre şişme|hidropik|hydropic|yağlı değişiklik|yağlanma|steatoz|fatty change"],
      ["Mekanizma: ATP azalması, Na-K pompası bozulması, kalsiyum girişi, serbest radikaller", "atp|sodyum potasyum|na k pompa|kalsiyum giriş|kalsiyum akış|serbest radikal|oksijen radikal|reaktif oksijen"],
      ["Geri dönüşümsüzlük: mitokondri ve hücre/lizozom zarı hasarı", "mitokondri|zar hasar|membran hasar|lizozom|geri dönüşümsüz|irreversib"],
      ["!Koagülasyon nekrozu: doku iskeleti korunur; beyin dışı infarktlar", "koagülasyon nekroz|koagulasyon nekroz|koagülatif|coagulative"],
      ["!Likefaksiyon nekrozu: beyin infarktı ve apse", "likefaksiyon|likefaktif|liquefactive|sıvılaşma nekroz"],
      ["Kazeöz nekroz (tüberküloz) ve yağ nekrozu (pankreatit, sabunlaşma)", "kazeöz|kazeifiye|caseous|peynirimsi|yağ nekroz|fat necros|sabunlaş|saponif"],
      ["Fibrinoid nekroz (vaskülit, immün kompleks) ve gangren", "fibrinoid|gangren|gangrene"],
      ["Çekirdek değişiklikleri: piknoz, karyoreksis, karyoliz", "piknoz|pyknos|karyoreks|karyorrhex|karyoliz|karyolys"]
    ]},
  { id: "pat-apoptoz", tr: "Apoptoz", en: "Apoptosis", cat: "hucre", lvl: 1,
    src: { k: [RB, RU], m: [
      ["Elmore S. Apoptosis: a review of programmed cell death. Toxicol Pathol 2007", "https://doi.org/10.1080/01926230701320337"], NCCD] },
    c: [
      ["!Programlı hücre ölümü; inflamasyon oluşturmaz", "programlı hücre ölüm|programlanmış hücre ölüm|programmed cell death|inflamasyon oluşturmaz|inflamasyon yapmaz|inflamasyona yol açmaz|inflamatuvar yanıt oluşmaz"],
      ["Morfoloji: hücre büzüşmesi, kromatin yoğunlaşması, apoptotik cisimcikler", "büzüş|küçülür|kromatin yoğun|kromatin kondens|apoptotik cisim|apoptotik beden|apoptotic bod"],
      ["!İntrinsik (mitokondriyal) yol: BCL-2 ailesi, BAX/BAK, sitokrom c, kaspaz-9", "intrinsik|intrinsic|mitokondriyal yol|bcl 2|bcl2|bax|bax bak|sitokrom c|cytochrome c|apaf|kaspaz 9|kaspaz dokuz"],
      ["!Ekstrinsik (ölüm reseptörü) yol: Fas/FasL, TNF reseptörü, kaspaz-8", "ekstrinsik|extrinsic|ölüm reseptör|death receptor|fas ligand|fasl|kaspaz 8|kaspaz sekiz"],
      ["Yürütücü kaspazlar (kaspaz-3)", "yürütücü kaspaz|efektör kaspaz|executioner|kaspaz 3|kaspaz üç"],
      ["Fosfatidilserin dışa döner, makrofajlarca fagosite edilir", "fosfatidilserin|phosphatidylserine|fagosit|phagocyt"],
      ["DNA hasarında p53 aracılı apoptoz", "p53|tp53|dna hasar"]
    ]},
  { id: "pat-akut-inflamasyon", tr: "Akut inflamasyon ve medyatörleri", en: "Acute inflammation and mediators", cat: "inf", lvl: 1,
    src: { k: [RB, RU], m: [MEDZ,
      ["Serhan CN. Pro-resolving lipid mediators are leads for resolution physiology. Nature 2014", "https://pubmed.ncbi.nlm.nih.gov/24899309/"]] },
    c: [
      ["!Damarsal değişiklikler: vazodilatasyon ve artmış damar geçirgenliği (eksüda)", "vazodilat|vasodilat|geçirgenli|permeabil|eksüda|exudat"],
      ["!Lökosit göçü: marjinasyon, yuvarlanma (selektin), yapışma (integrin), transmigrasyon", "marjinasyon|margination|yuvarlan|rolling|selektin|selectin|integrin|icam|transmigrasyon|diapedez|diapedes|pecam"],
      ["Kemotaksi (C5a, LTB4, IL-8) ve fagositoz", "kemotaksi|chemotax|c5a|ltb4|lökotrien b4|il 8|interlökin 8|kemokin"],
      ["İlk hücre: nötrofil; öldürme: NADPH oksidaz, oksidatif patlama, MPO", "nötrofil|neutrophil|nadph oksidaz|oksidatif patlama|oxidative burst|respiratuvar patlama|miyeloperoksidaz|myeloperoxidase"],
      ["!Medyatörler: histamin, prostaglandin, lökotrienler, bradikinin, kompleman, TNF/IL-1", "histamin|prostaglandin|lökotrien|leukotrien|bradikinin|kompleman|complement|tnf|il 1|interlökin 1"],
      ["Kardinal bulgular: kızarıklık, ısı artışı, şişlik, ağrı, işlev kaybı", "rubor|kalor|dolor|functio|kızarıklık|şişlik"],
      ["Sonuç: rezolüsyon (lipoksin, resolvin), apse ya da kronikleşme", "rezolüsyon|resolution|lipoksin|lipoxin|resolvin|apse|abse|kronikleş"]
    ]},
  { id: "pat-yara-iyilesmesi", tr: "Doku onarımı ve yara iyileşmesi", en: "Tissue repair and wound healing", cat: "inf", lvl: 1,
    src: { k: [RB, RU], m: [
      ["Gurtner GC, et al. Wound repair and regeneration. Nature 2008", "https://pubmed.ncbi.nlm.nih.gov/18480812/"],
      ["Eming SA, Martin P, Tomic-Canic M. Wound repair and regeneration: mechanisms, signaling, and translation. Sci Transl Med 2014", "https://doi.org/10.1126/scitranslmed.3009337"]] },
    c: [
      ["!Rejenerasyon ile skar (fibrozis) ile onarım ayrımı", "rejenerasyon|regenerat|skar|nedbe|fibroz|scar"],
      ["!Granülasyon dokusu: fibroblast, yeni damarlar (anjiyogenez, VEGF)", "granülasyon|granulation|fibroblast|anjiyogenez|anjiogenez|angiogen|vegf"],
      ["Evreler: inflamasyon, proliferasyon, yeniden şekillenme (remodeling)", "proliferasyon|proliferat|yeniden şekillen|remodel|evreleri|fazları"],
      ["Tip III kollajenin yerini tip I kollajen alır; MMP'ler", "tip 3 kollajen|tip üç kollajen|tip iii|tip 1 kollajen|tip bir kollajen|metalloproteinaz|mmp"],
      ["Primer (birincil) ve sekonder (ikincil) iyileşme; miyofibroblast kontraksiyonu", "primer iyileş|birincil iyileş|sekonder iyileş|ikincil iyileş|primary intention|secondary intention|miyofibroblast|myofibroblast|yara kontraksiyon"],
      ["TGF-β: fibrozisin ana sitokini", "tgf|transforme edici büyüme|transforming growth"],
      ["Bozan etkenler: enfeksiyon, diyabet, glukokortikoid, C vitamini ve beslenme eksikliği", "glukokortikoid|kortikosteroid|steroid|c vitamin|askorbik|diyabet|diabet|malnütrisyon|beslenme"],
      ["Aşırı onarım: hipertrofik skar ve keloid", "keloid|hipertrofik skar|hipertrofik nedbe"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "pat-kronik-inflamasyon-granulom", tr: "Kronik inflamasyon ve granülomatöz inflamasyon", en: "Chronic and granulomatous inflammation", cat: "inf", lvl: 2,
    src: { k: [RB, RU], m: [
      ["Pagán AJ, Ramakrishnan L. The formation and function of granulomas. Annu Rev Immunol 2018", "https://pubmed.ncbi.nlm.nih.gov/29400999/"], MEDZ] },
    c: [
      ["!Mononükleer hücreler: makrofaj, lenfosit, plazma hücresi", "mononükleer|mononuclear|plazma hücre|makrofajlar lenfosit|makrofaj lenfosit"],
      ["Doku yıkımı ile onarım/fibrozis eş zamanlı", "eş zamanlı|aynı anda|doku yıkım|fibroz"],
      ["Makrofaj aktivasyonu: klasik (M1) ve alternatif (M2)", "m1|m2|klasik aktiv|alternatif aktiv|classical activ"],
      ["!Granülom: epiteloid makrofaj kümesi, çevresinde lenfositler", "granülom|granulom|epiteloid|epitheloid"],
      ["Langhans ve yabancı cisim tipi çok çekirdekli dev hücreler", "langhans|dev hücre|giant cell|çok çekirdekli"],
      ["!Kazeifiye (tüberküloz) ve kazeifiye olmayan (sarkoidoz) granülom", "tüberkülozda kazeifiye granülom|tüberkülozda kazeöz|tüberkülozda ortası kazeöz|sarkoidozda kazeifiye olmayan|sarkoidozda ise kazeifiye olmayan|sarkoidozda nekrozsuz|sarkoidozda non"],
      ["Th1 yanıtı: IL-12, IFN-γ; TNF granülomun sürmesi için gerekli", "il 12|interlökin 12|ifn|interferon gama|interferon gamma|anti tnf"],
      ["Yabancı cisim granülomu (sütür, talk)", "yabancı cisim|foreign body|sütür|talk"]
    ]},
  { id: "pat-tromboz", tr: "Tromboz (Virchow triadı)", en: "Thrombosis", cat: "hem", lvl: 2,
    src: { k: [RB, RU], m: [WOLB,
      ["Mackman N. Triggers, targets and treatments for thrombosis. Nature 2008", null]] },
    c: [
      ["!Virchow triadı: endotel hasarı, akım bozukluğu, hiperkoagülabilite", "virchow|endotel hasar|endotel zedelen|endothelial injury|staz|stasis|türbülan|hiperkoagül|hypercoagul"],
      ["!Kalıtsal trombofili: faktör V Leiden, protrombin gen mutasyonu", "faktör 5 leiden|faktör v leiden|factor v leiden|leiden|protrombin gen|prothrombin g20210|20210"],
      ["Edinsel: antifosfolipid sendromu, HIT, kanser, gebelik, immobilizasyon", "antifosfolipid|antiphospholipid|heparin ilişkili trombositopeni|heparine bağlı trombositopeni|hit|malignite|kanser|gebelik|immobil|hareketsiz"],
      ["Zahn çizgileri: antemortem trombüs (postmortem pıhtıda yok)", "zahn|antemortem|postmortem|ölüm sonrası pıhtı"],
      ["Arteriyel (beyaz, trombosit zengin) ve venöz (kırmızı) trombüs; en sık derin bacak venleri", "arteriyel trombüs|arter trombüs|venöz trombüs|ven trombüs|derin ven|beyaz trombüs|kırmızı trombüs|flebotromboz"],
      ["!Trombüsün akıbeti: büyüme, embolizasyon, erime, organizasyon ve rekanalizasyon", "embolize|embolizasyon|organizasyon|organize|rekanaliz|recanaliz|erime|çözün|propagas"]
    ]},
  { id: "pat-emboli-infarkt", tr: "Emboli ve infarkt", en: "Embolism and infarction", cat: "hem", lvl: 2,
    src: { k: [RB, RU], m: [WOLB,
      ["Thygesen K, et al. Fourth universal definition of myocardial infarction (2018). Eur Heart J 2019", "https://doi.org/10.1093/eurheartj/ehy462"]] },
    c: [
      ["!Embolilerin çoğu tromboembolidir; pulmoner emboli çoğunlukla bacak derin venlerinden", "tromboemboli|thromboembol|derin ven|pulmoner emboli|akciğer emboli"],
      ["Sistemik (arteriyel) emboli çoğunlukla kalp içi duvar trombüsünden; paradoks emboli (PFO)", "mural trombüs|duvar trombüs|kalp içi trombüs|sol atriyum|paradoks|foramen ovale|pfo"],
      ["Yağ embolisi (uzun kemik kırığı), hava/gaz embolisi (vurgun), amniyon sıvısı embolisi", "yağ emboli|fat embol|hava emboli|gaz emboli|vurgun|dekompresyon|kesson|amniyon|amniotic"],
      ["!Beyaz (anemik) infarkt: uç arterli solid organlar (kalp, böbrek, dalak)", "beyaz infarkt|anemik infarkt|soluk infarkt|white infarct|uç arter|end arter"],
      ["!Kırmızı (hemorajik) infarkt: venöz tıkanma, gevşek doku, çift dolaşım (akciğer, ince bağırsak)", "kırmızı infarkt|hemorajik infarkt|red infarct|çift dolaşım|ikili dolaşım|dual|venöz tıkan|ven tıkan"],
      ["Kama şekilli; beyin dışı koagülasyon, beyinde likefaksiyon nekrozu", "kama|wedge|koagülasyon nekroz|koagülatif|likefaksiyon"],
      ["Septik infarkt (enfekte emboli, ör. endokardit)", "septik|enfekte emboli|endokardit|vejetasyon"]
    ]},
  { id: "pat-odem-konjesyon", tr: "Ödem, hiperemi ve konjesyon", en: "Edema, hyperemia and congestion", cat: "hem", lvl: 2,
    src: { k: [RB, RU], m: [
      ["Levick JR, Michel CC. Microvascular fluid exchange and the revised Starling principle. Cardiovasc Res 2010", "https://doi.org/10.1093/cvr/cvq062"],
      ["Woodcock TE, Woodcock TM. Revised Starling equation and the glycocalyx model of transvascular fluid exchange. Br J Anaesth 2012", null]] },
    c: [
      ["!Starling kuvvetleri: hidrostatik basınç ve onkotik (kolloid ozmotik) basınç dengesi", "starling|hidrostatik|hydrostatic|onkotik|oncotic|kolloid ozmotik"],
      ["!Hidrostatik basınç artışı: kalp yetersizliği, derin ven trombozu", "derin ven|venöz basınç|ven basınc|venöz dönüş"],
      ["!Onkotik basınç düşüklüğü: hipoalbüminemi (nefrotik sendrom, siroz, malnütrisyon)", "hipoalbümin|kwashiorkor|malnütrisyon|albümin kayb|albümin düş|albümin yapıl"],
      ["Lenfatik tıkanma (lenfödem: cerrahi, radyasyon, filaryazis) ve sodyum retansiyonu", "lenfatik|lenfödem|lymphedema|filarya|sodyum tutul|sodyum retans|tuz tutul"],
      ["Transüda (protein fakir) ve eksüda (protein zengin, inflamatuvar) ayrımı", "transüda|transuda|transudat|eksüda|exudat"],
      ["Hiperemi aktif (arteriyel), konjesyon pasif (venöz)", "aktif hiperemi|hiperemi aktif|pasif konjesyon|konjesyon pasif|hiperemi arteriyollerin genişle|hiperemi arteriyol dilat|konjesyon ise venöz dönüş|konjesyon venöz dönüş"],
      ["Kronik pasif konjesyon: muskat karaciğer; akciğerde kalp yetmezliği hücreleri (hemosiderin)", "muskat|nutmeg|hemosiderin|kalp yetmezliği hücre|heart failure cell|siderofaj"]
    ]},
  { id: "pat-ateroskleroz-patogenez", tr: "Aterosklerozun patogenezi", en: "Pathogenesis of atherosclerosis", cat: "hem", lvl: 2,
    src: { k: [RB, RU], m: [
      ["Libby P. The changing landscape of atherosclerosis. Nature 2021", "https://pubmed.ncbi.nlm.nih.gov/33883728/"],
      ["Libby P, et al. Atherosclerosis. Nat Rev Dis Primers 2019", null]] },
    c: [
      ["!Kronik endotel hasarına yanıt ve inflamasyon hipotezi", "hasara yanıt|response to injury|endotel disfonksiyon|endotel hasar|endotel işlev|inflamatuvar"],
      ["!LDL'nin intimada birikmesi ve oksidasyonu", "ldl|lipoprotein|okside|oksidasyon|oxidized"],
      ["!Monositlerin yapışıp makrofaja dönmesi; köpük hücreleri ve yağlı çizgi", "monosit|köpük hücre|foam cell|köpüksü|yağlı çizgi|fatty streak"],
      ["Düz kas hücrelerinin medyadan intimaya göçü ve çoğalması", "düz kas|smooth muscle|medyadan|intimaya"],
      ["Fibröz başlık ve nekrotik (lipit) çekirdek; kolesterol kristalleri", "fibröz başlık|fibrous cap|fibröz kapak|nekrotik çekirdek|lipit çekirdek|lipid çekirdek|kolesterol kristal"],
      ["Komplikasyon: ince başlıklı (vulnerabl) plağın rüptürü ve tromboz", "rüptür|yırtıl|vulnerabl|kırılgan plak|ince başlık|ince kapak"],
      ["Risk etkenleri: hiperlipidemi, hipertansiyon, sigara, diyabet", "hiperlipidemi|hiperkolesterol|hipertansiyon|sigara|diyabet|diabet"],
      ["En sık tutulum: abdominal aorta, koroner, popliteal ve karotis arterleri", "popliteal|karotis|karotid|abdominal aorta tutul|en sık tutul"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "pat-kanser-ozellikleri", tr: "Kanserin ayırt edici özellikleri (hallmarks)", en: "Hallmarks of cancer", cat: "neo", lvl: 3,
    src: { k: [RB, RU], m: [HAN11,
      ["Hanahan D. Hallmarks of cancer: new dimensions. Cancer Discov 2022", "https://pubmed.ncbi.nlm.nih.gov/35022204/"]] },
    c: [
      ["!Büyüme sinyallerinde kendine yeterlilik (sürekli proliferatif sinyal)", "kendine yeterli|kendi büyüme|proliferatif sinyal|büyüme sinyal|büyüme faktör"],
      ["!Büyüme baskılayıcılara duyarsızlık ve apoptozdan kaçış", "baskılayıcı|duyarsız|apoptozdan kaç|apoptoza direnç|hücre ölümüne direnç|ölümden kaç"],
      ["!Sınırsız replikasyon (telomeraz)", "sınırsız|ölümsüz|immortal|telomer"],
      ["Sürekli anjiyogenez", "anjiyogenez|anjiogenez|angiogen|damar oluş"],
      ["İnvazyon ve metastaz", "invazyon|invasion|metastaz|metastas"],
      ["Metabolik yeniden programlama: Warburg etkisi (aerobik glikoliz)", "warburg|aerobik glikoliz|aerobic glycolysis|metabolik yeniden|metabolizmanın yeniden"],
      ["İmmün yanıttan kaçış", "immün kaçış|bağışıklıktan kaç|immün sistemden kaç|immune evasion|immün yanıttan kaç|bağışıklık yanıtından kaç"],
      ["Kolaylaştırıcılar: genomik instabilite ve tümörü destekleyen inflamasyon", "genomik instabilite|genomik dengesiz|genom instabil|genomic instab|tümörü destekleyen inflamasyon|tümör destekleyici inflamasyon"]
    ]},
  { id: "pat-onkogen-tumor-baskilayici", tr: "Onkogenler ve tümör baskılayıcı genler", en: "Oncogenes and tumor suppressor genes", cat: "neo", lvl: 3,
    src: { k: [RB, RU], m: [
      ["Knudson AG. Mutation and cancer: statistical study of retinoblastoma. Proc Natl Acad Sci USA 1971", "https://doi.org/10.1073/pnas.68.4.820"], HAN11] },
    c: [
      ["!Proto-onkogenin işlev kazanımı; tek allel yeterli (dominant)", "proto onkogen|protoonkogen|işlev kazan|fonksiyon kazan|gain of function|tek allel|dominant"],
      ["RAS nokta mutasyonu; MYC amplifikasyonu/translokasyonu (Burkitt t(8;14))", "ras|kras|nokta mutasyon|myc|burkitt|8 14"],
      ["HER2 (ERBB2) amplifikasyonu; BCR-ABL t(9;22)", "her2|erbb2|bcr abl|filadelfiya|philadelphia|9 22"],
      ["!Knudson iki vuruş hipotezi: her iki allelin kaybı gerekir", "knudson|iki vuruş|two hit|ikinci vuruş|iki alle|her iki alle"],
      ["RB: G1/S kontrol noktası; kalıtsal ve sporadik retinoblastom", "retinoblastom|rb gen|g1 s|g1den s"],
      ["!TP53 genomun bekçisi; Li-Fraumeni sendromu", "p53|tp53|genomun bekçi|guardian|li fraumeni"],
      ["Heterozigotluk kaybı; APC, BRCA1/2 (DNA onarımı)", "heterozigotluk kaybı|heterozigosite kaybı|loss of heterozygosity|loh"]
    ]},
  { id: "pat-amiloidoz", tr: "Amiloidoz", en: "Amyloidosis", cat: "gen", lvl: 3,
    src: { k: [RB, RU], m: [
      ["Merlini G, Bellotti V. Molecular mechanisms of amyloidosis. N Engl J Med 2003", null],
      ["Buxbaum JN, et al. Amyloid nomenclature 2022: update, novel proteins, and recommendations by the International Society of Amyloidosis (ISA) Nomenclature Committee. Amyloid 2022", null]] },
    c: [
      ["!Yanlış katlanmış proteinlerin beta kırmalı tabaka fibrilleri olarak hücre dışında birikmesi", "yanlış katlan|misfold|beta kırmalı|beta tabaka|beta pleated|hücre dışı birik|ekstraselüler birik"],
      ["!Kongo kırmızısı; polarize ışıkta elma yeşili çift kırılma", "kongo|congo|elma yeşil|apple green|çift kırılma|birefring|polarize"],
      ["!AL amiloidoz: immünoglobulin hafif zinciri (plazma hücre diskrazisi, miyelom)", "al amiloid|hafif zincir|light chain|plazma hücre|miyelom|myelom|diskrazi"],
      ["!AA amiloidoz: serum amiloid A; kronik inflamasyon (RA, FMF, tüberküloz)", "aa amiloid|serum amiloid a|saa|ailevi akdeniz|familial mediterranean|fmf|romatoid|kronik inflamasyon|kronik enfeksiyon"],
      ["ATTR: transtiretin (kalıtsal ve yaşa bağlı vahşi tip, kalp)", "transtiretin|transthyretin|attr|vahşi tip|wild type|yaşlı kalp|senil"],
      ["Diyalizle ilişkili β2-mikroglobulin amiloidozu", "beta 2 mikroglobulin|β2 mikroglobulin|b2 mikroglobulin|beta2 mikroglobulin|diyaliz"],
      ["Tutulum: böbrek (nefrotik sendrom), kalp (restriktif KMP), makroglossi", "nefrotik|böbrek tutul|restriktif|restrictive|makroglossi|macroglossia"],
      ["Tanı: karın yağ dokusu aspirasyonu ya da rektal/doku biyopsisi", "yağ aspira|yağ dokusu aspira|abdominal yağ|fat pad|rektal biyopsi|rektum biyopsi"]
    ]},
  { id: "pat-trinukleotid-tekrar", tr: "Trinükleotid tekrar genişlemesi hastalıkları", en: "Trinucleotide repeat expansion disorders", cat: "gen", lvl: 3,
    src: { k: [RB, RU], m: [
      ["Bates GP, et al. Huntington disease. Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.5"],
      ["Orr HT, Zoghbi HY. Trinucleotide repeat disorders. Annu Rev Neurosci 2007", null]] },
    c: [
      ["!Kararsız tekrar dizisi kuşaktan kuşağa uzar; antisipasyon (daha erken, daha ağır)", "kararsız|unstable|antisipasyon|anticipation|daha erken yaş|daha ağır|kuşaktan kuşağa"],
      ["!Frajil X: FMR1 genindeki CGG tekrarı; metilasyonla susturma; premutasyon annede genişler", "frajil x|fragile x|frajil|fmr1|cgg|metilasyon|methylat|premutasyon"],
      ["!Huntington: HTT genindeki CAG tekrarı (poliglutamin), toksik işlev kazanımı", "huntington|htt|huntingtin|cag|poliglutamin|polyglutamine"],
      ["Huntington'da antisipasyon özellikle babadan geçişte", "baba|paternal|spermatogenez"],
      ["Miyotonik distrofi: DMPK genindeki CTG tekrarı", "miyotonik|myotonic|dmpk|ctg"],
      ["Friedreich ataksisi: frataksin genindeki GAA tekrarı, otozomal resesif", "friedreich|frataksin|frataxin|gaa"],
      ["Kodlayan bölge (poliglutamin) ile kodlamayan bölge tekrarları ayrımı", "kodlayan bölge|kodlamayan|coding|non coding|intron|translasyona uğramayan|utr"]
    ]},
  { id: "pat-karsinogenez", tr: "Karsinogenez: kimyasal, radyasyon ve mikrobiyal ajanlar", en: "Carcinogenic agents", cat: "neo", lvl: 3,
    src: { k: [RB, RU], m: [
      ["de Martel C, et al. Global burden of cancer attributable to infections in 2018: a worldwide incidence analysis. Lancet Glob Health 2020", null],
      ["IARC Monographs on the Identification of Carcinogenic Hazards to Humans: Preamble. IARC 2019", null]] },
    c: [
      ["!Çok basamaklı süreç: başlatma (initiation) ve promosyon", "çok basamak|çok aşama|multistep|başlatıcı|başlatma|inisiyasyon|initiat|promotör|promosyon|promoter|promotion"],
      ["!Kimyasal karsinojenler: doğrudan etkili ya da sitokrom P450 ile aktivasyon gerektiren (prokarsinojen)", "doğrudan etkili|direkt etkili|dolaylı etkili|sitokrom p450|p450|prokarsinojen|metabolik aktiv"],
      ["Örnekler: aflatoksin B1 (karaciğer, p53), benzo[a]piren (sigara), vinil klorür (karaciğer anjiyosarkomu), aromatik aminler (mesane), asbest (mezotelyoma)", "aflatoksin|aflatoxin|benzopiren|benzo a piren|benzpiren|vinil klorür|vinyl chlorid|aromatik amin|anilin|asbest|mezotelyoma|mesothelioma"],
      ["Radyasyon: UV pirimidin (timin) dimerleri, kseroderma pigmentozum; iyonlaştırıcı radyasyon", "ultraviyole|pirimidin dimer|timin dimer|kseroderma|xeroderma|iyonlaştırıcı|iyonize|ionizing"],
      ["!HPV: E6 p53'ü, E7 RB'yi inaktive eder (serviks kanseri)", "hpv|human papilloma|papillomavir|e6|e7|serviks|serviks kanser"],
      ["EBV (Burkitt, nazofarenks karsinomu), HBV/HCV (hepatosellüler karsinom), HTLV-1", "ebv|epstein barr|burkitt|nazofarenks|hepatit b|hepatit c|hbv|hcv|hepatosellüler|htlv"],
      ["Helicobacter pylori: mide adenokarsinomu ve MALT lenfoma", "helikobakter|helicobacter|pylori|malt lenfoma|maltoma"]
    ]}
]
});
})();
