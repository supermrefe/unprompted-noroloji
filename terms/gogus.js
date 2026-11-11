/* Göğüs hastalıkları — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve klinikte her gün karşılaşılan göğüs konuları; güncel GOLD 2026, GINA 2025, ATS/IDSA 2019 (+ATS 2025 güncellemesi),
   ERS/ATS 2022 SFT yorumu, BTS 2023 plevra, ATS/ERS/JRS/ALAT 2022 İPF, 2024 global ARDS tanımı, WHO ve Sağlık Bakanlığı tüberküloz rehberlerine dayanır.
   Kolay = çekirdek (KOAH, astım, pnömoni, SFT, plevral sıvı); Orta = TUS ayrıntısı (TB, sarkoidoz, OUA, pnömotoraks, akciğer kanseri tanı/tarama);
   Zor = asistan düzeyi (İPF, ARDS, bronşektazi, alfa-1 antitripsin, silikoz). Kapsam dışı: pulmoner emboli (kardiyoloji), tansiyon pnömotoraks (acil), kanser sistemik tedavisi (onkoloji). */
(function () {
const MN = "Murray & Nadel's Textbook of Respiratory Medicine, 7. baskı (2022)";
const FI = "Fishman's Pulmonary Diseases and Disorders, 6. baskı (2023)";
const HA = "Harrison's Principles of Internal Medicine, 22. baskı (2025)";
const BTS = ["British Thoracic Society Guideline for pleural disease. Thorax 2023", "https://doi.org/10.1136/thorax-2022-219784"];

UP.add({ id: "gogus", subs: {
    obs: "Obstrüktif hava yolu hastalıkları",
    enf: "Solunum yolu enfeksiyonları",
    fiz: "Solunum fizyolojisi ve uyku",
    plv: "Plevra hastalıkları",
    iah: "İnterstisyel ve mesleki akciğer hastalıkları",
    onk: "Akciğer kanseri tanı ve tarama",
    ybk: "Solunum yetmezliği"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "gog-koah", tr: "Kronik obstrüktif akciğer hastalığı (KOAH)", en: "Chronic obstructive pulmonary disease", cat: "obs", lvl: 1,
    src: { k: [MN, HA], m: [
      ["Global Strategy for the Diagnosis, Management, and Prevention of COPD: 2026 Report. Global Initiative for Chronic Obstructive Lung Disease (GOLD) 2025", "https://goldcopd.org/2026-gold-report-and-pocket-guide/"],
      ["Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J 2023", "https://doi.org/10.1183/13993003.00239-2023"]] },
    c: [
      ["!Tanı: bronkodilatör sonrası FEV1/FVC < 0,70 (spirometri şart)", "bronkodilatör sonrası|post bronkodilatör|0 70|sıfır virgül yetmiş|yüzde yetmişin altı|yetmişin altında|fev1 fvc oranı|fev1 bölü fvc"],
      ["!Risk faktörü: sigara (paket-yıl), biyomas ve mesleki maruziyet", "sigara|tütün|paket yıl|biyomas|biomass|tezek|odun soba|mesleki maruz"],
      ["Kısıtlanma derecesi: GOLD 1–4 (FEV1 % beklenen)", "gold 1|gold 2|gold 3|gold 4|gold bir|gold iki|gold üç|gold dört|gold evre|gold derece|yüzde seksen|yüzde 80"],
      ["!ABE değerlendirmesi: semptom (mMRC/CAT) ve alevlenme öyküsü", "abe|a b e|mmrc|m mrc|cat skor|cat test|cat puan|grup e|e grubu|b grubu|a grubu"],
      ["!Başlangıç: uzun etkili bronkodilatör; B ve E'de LABA+LAMA", "laba|lama|uzun etkili bronkodilatör|uzun etkili beta|uzun etkili antimuskarinik|tiotropium|indakaterol|glikopironyum|umeklidinyum|ikili bronkodilatör"],
      ["Kan eozinofili ≥300'de İKS eklenmesi (üçlü tedavi)", "eozinofil|eosinofil|üçlü tedavi|inhaler steroid|inhale kortikosteroid|iks|ics"],
      ["Sigarayı bıraktırma, aşılar, pulmoner rehabilitasyon", "sigarayı bırak|sigara bırak|bıraktır|rehabilit|aşıla|grip aşı|influenza aşı|pnömokok aşı|rsv aşı"],
      ["Uzun süreli oksijen: PaO2 ≤55 mmHg ya da SaO2 ≤%88", "uzun süreli oksijen|uzun dönem oksijen|ev tipi oksijen|evde oksijen|oksijen konsantratör|ltot|55|elli beş|88|seksen sekiz"],
      ["Alevlenme: kısa etkili bronkodilatör, kısa süreli sistemik steroid, gerekirse antibiyotik", "alevlenmede|alevlenme tedavi|sistemik steroid|oral steroid|prednizolon|prednizon|pürülan balgam|balgam pürülan"]
    ]},
  { id: "gog-astim", tr: "Astım", en: "Asthma", cat: "obs", lvl: 1,
    src: { k: [MN, HA], m: [
      ["Global Strategy for Asthma Management and Prevention, 2025 update (Kasım 2025 düzeltmesi). Global Initiative for Asthma (GINA) 2025", "https://ginasthma.org/wp-content/uploads/2025/11/GINA-2025-Update-25_11_08-WMS.pdf"],
      ["Reddel HK ve ark. Global Initiative for Asthma Strategy 2021: Executive Summary and Rationale for Key Changes. Am J Respir Crit Care Med 2022", "https://doi.org/10.1164/rccm.202109-2205PP"]] },
    c: [
      ["!Değişken solunum semptomları: hışıltı, nefes darlığı, göğüste sıkışma, öksürük", "hışıltı|wheez|vizing|göğüste sıkış|göğüs sıkış|gece öksür|gece uyan|tetikleyici|alerjen|semptomlar değişken|değişken semptom"],
      ["!Değişken ekspiratuvar hava akımı kısıtlanması: bronkodilatör yanıtı, PEF değişkenliği", "bronkodilatör yanıt|bronkodilatöre yanıt|reversib|geri dönüşlü|pef|zirve akım|peak flow|tepe akım|metakolin|bronş provokasyon|hava akımı değişken"],
      ["Tip 2 inflamasyon belirteçleri: FeNO, kan eozinofili", "feno|fe no|nitrik oksit|tip 2|eozinofil|eosinofil|atopi"],
      ["!Yalnız SABA önerilmez; her hastaya İKS içeren tedavi", "saba önerilmez|tek başına saba önerilmez|yalnız saba önerilmez|sadece saba önerilmez|saba tek başına önerilmez|saba tek başına kullanılmaz|tek başına saba kullanılmaz|sadece saba vermiyoruz|yalnız saba vermiyoruz|sadece salbutamol vermiyoruz|iks içeren|inhaler steroid içeren|steroid içeren"],
      ["!Tercih edilen yol: gerektiğinde düşük doz İKS-formoterol; basamak 3–5'te MART", "formoterol|mart|idame ve rahatlatıcı|idame ve semptom giderici|birinci yol|yol 1|track 1"],
      ["Basamaklı tedavi: kontrol düzeyine göre basamak artırma/azaltma", "basamak|step|kontrol düzey|astım kontrol|kontrol altında"],
      ["Ağır astımda fenotipe göre biyolojik ajan", "biyolojik|omalizumab|mepolizumab|benralizumab|dupilumab|tezepelumab|anti ige|anti il5|anti il 5"],
      ["İnhaler tekniği, uyum ve yazılı eylem planı", "inhaler tekni|inhaler kullanım|uyum|eylem planı|aksiyon planı|öz yönetim"],
      ["Alevlenmede: kısa etkili bronkodilatör, oksijen, sistemik kortikosteroid", "astım atağ|astım alevlenme|alevlenmede|sistemik steroid|sistemik kortikosteroid|oral steroid|prednizolon|magnezyum sülfat|ipratropium"]
    ]},
  { id: "gog-toplum-kokenli-pnomoni", tr: "Toplum kökenli pnömoni", en: "Community-acquired pneumonia", cat: "enf", lvl: 1,
    src: { k: [MN, HA], m: [
      ["Metlay JP ve ark. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. An Official Clinical Practice Guideline of the ATS and IDSA. Am J Respir Crit Care Med 2019", "https://doi.org/10.1164/rccm.201908-1581ST"],
      ["Martin-Loeches I ve ark. ERS/ESICM/ESCMID/ALAT guidelines for the management of severe community-acquired pneumonia. Intensive Care Med 2023", "https://doi.org/10.1007/s00134-023-07033-8"]] },
    c: [
      ["!Tanı: klinik bulgular + akciğer grafisinde yeni infiltrat", "infiltrat|konsolidasyon|akciğer grafi|pa akciğer|grafide|grafisinde|radyografi|röntgen|hava bronkogram"],
      ["En sık etken Streptococcus pneumoniae; atipikler ve virüsler", "pnömokok|streptococcus pneumoniae|streptokok pnömoni|mikoplazma|mycoplasma|lejyonella|legionella|klamid|chlamyd|atipik"],
      ["!Ağırlık skoru: PSI ya da CURB-65 (yatış kararı)", "curb|curb 65|kurb|krup 65|crb 65|psi|pnömoni ağırlık indeks|pneumonia severity|port skor"],
      ["Ağır TKP: majör/minör kriterler, yoğun bakım", "majör kriter|minör kriter|yoğun bakım|vazopressör|mekanik ventilasyon|ağır pnömoni|ağır toplum"],
      ["!Ayaktan, komorbiditesiz: amoksisilin ya da doksisiklin (makrolid yalnız direnç düşükse)", "amoksisilin|amoxicillin|doksisiklin|doxycycline"],
      ["!Yatan hasta: beta-laktam + makrolid ya da solunum florokinolonu", "beta laktam|betalaktam|seftriakson|sefotaksim|ampisilin sulbaktam|makrolid|azitromisin|klaritromisin|levofloksasin|moksifloksasin|florokinolon|kinolon"],
      ["Ağır/yatan hastada kan ve balgam kültürü, idrar antijenleri", "kan kültür|balgam kültür|idrar antijen|üriner antijen|idrarda antijen|gram boya"],
      ["Kortikosteroid yalnız ağır TKP'de (influenza dışı); ağır olmayanda önerilmez", "ağır pnömonide steroid|ağır pnömonide kortikosteroid|ağır pnömonide hidrokortizon|ağır olgularda steroid|ağır olgularda kortikosteroid|şokta hidrokortizon|hidrokortizon|rutin steroid önerilmez|rutin kortikosteroid önerilmez|rutin olarak steroid vermiyoruz|influenzada steroid"],
      ["En az 5 gün, klinik stabiliteye göre; rutin kontrol grafisi gerekmez", "en az 5 gün|en az beş gün|klinik stabil|kontrol grafisi|rutin kontrol grafi|oral tedaviye geç|ağızdan tedaviye geç"]
    ]},
  { id: "gog-solunum-fonksiyon-testleri", tr: "Solunum fonksiyon testlerinin yorumu", en: "Interpretation of pulmonary function tests", cat: "fiz", lvl: 1,
    src: { k: [MN, FI], m: [
      ["Stanojevic S ve ark. ERS/ATS technical standard on interpretive strategies for routine lung function tests. Eur Respir J 2022", "https://doi.org/10.1183/13993003.01499-2021"],
      ["Graham BL ve ark. Standardization of Spirometry 2019 Update. An Official ATS and ERS Technical Statement. Am J Respir Crit Care Med 2019", "https://doi.org/10.1164/rccm.201908-1590ST"]] },
    c: [
      ["!Obstrüksiyon: FEV1/FVC oranının alt normal sınırın (LLN) altında olması", "lln|alt normal sınır|normalin alt sınır|beşinci persantil|5 persantil|oran düşük|oranı düşük|oranın düşük|oranı azal|0 70|sıfır virgül yetmiş"],
      ["!Restriksiyon tanısı TLC azalmasıyla konur (spirometri yalnız şüphelendirir)", "restrikt|tlc|total akciğer kapasite|toplam akciğer kapasite|akciğer hacim|pletismograf"],
      ["Z-skoru ve GLI referans denklemleri; ağırlık z-skoruyla derecelenir", "z skor|zskor|z değer|gli|global lung|referans denklem|beklenenin yüzde|yüzde beklenen"],
      ["!Bronkodilatör yanıtı: FEV1 ya da FVC'de beklenen değerin %10'undan fazla artış (2022)", "bronkodilatör yanıt|bronkodilatöre yanıt|reversibilite|geri dönüşüm|salbutamol sonrası|bronkodilatör sonrası|beklenen değerin yüzde on|beklenenin yüzde on|yüzde onundan|yüzde ondan fazla|yüzde on"],
      ["DLCO: difüzyon kapasitesi (amfizem, interstisyel hastalık, pulmoner vasküler hastalıkta düşer)", "dlco|dlc o|difüzyon|tlco|transfer faktör"],
      ["Akım-volüm eğrisinin şekli (obstrüksiyonda içbükey, üst hava yolu darlığında düzleşme)", "akım volüm|akım hacim|flow volume|içbükey|konkav|üst hava yolu"],
      ["Teknik kalite: kabul edilebilir ve tekrarlanabilir en az üç manevra", "kabul edilebilir|tekrarlanabilir|manevra|kalite kriter|teknik kalite"],
      ["Mikst bozukluk: hem oran hem TLC düşük", "mikst|karma bozukluk|kombine bozukluk|karışık tip"]
    ]},
  { id: "gog-plevral-efuzyon", tr: "Plevral efüzyon ve Light kriterleri", en: "Pleural effusion and Light's criteria", cat: "plv", lvl: 1,
    src: { k: [MN, FI], m: [BTS,
      ["Light RW ve ark. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med 1972", "https://doi.org/10.7326/0003-4819-77-4-507"]] },
    c: [
      ["!Light kriterleri: protein oranı >0,5, LDH oranı >0,6 ya da sıvı LDH > serum üst sınırın 2/3'ü", "light|0 5|0 6|sıfır virgül beş|sıfır virgül altı|üçte iki|ldh oran|protein oran"],
      ["!Transüda (KKY, siroz, nefrotik) ile eksüda (pnömoni, malignite, TB) ayrımı", "transüda|transuda|eksüda|eksuda|exudate|transudate"],
      ["Tanısal torasentez ve sıvı analizi", "torasentez|plevral sıvı analiz|plevral ponksiyon|sitoloji|sıvı analiz"],
      ["Görüntüleme ve girişim ultrason eşliğinde", "ultrason|usg|ultrasonografi"],
      ["Diüretik alan KKY hastasında yanlış eksüda: albümin gradiyenti / NT-proBNP", "albümin gradiyent|albümin gradyan|albümin farkı|diüretik alan|diüretik kullanan|diüretik tedavisi alan|nt probnp|pro bnp|psödoeksüda|yalancı eksüda"],
      ["!Plevral enfeksiyon: pH ≤7,2, pürülan sıvı ya da Gram/kültür pozitifliğinde göğüs tüpü", "ph 7 2|7 2|yedi virgül iki|ampiyem|empiyem|pürülan|göğüs tüpü|tüp torakostomi|komplike parapnömonik|komplike parapnömonik"],
      ["Malign efüzyon: sitoloji; yineleyen sıvıda plörodez ya da tünelli plevral kateter", "malign|plörodez|plorodez|talk|tünelli|kalıcı plevral kateter|indwelling"],
      ["Tanısız eksüdada torakoskopi/plevral biyopsi; TB plörezide lenfosit ve ADA", "torakoskopi|plevral biyopsi|adenozin deaminaz|ada düzey|ada yüksek|ada değer|lenfositten zengin|lenfosit ağırlıklı|lenfositik"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "gog-tuberkuloz", tr: "Akciğer tüberkülozu: tanı ve tedavi", en: "Pulmonary tuberculosis: diagnosis and treatment", cat: "enf", lvl: 2,
    src: { k: [MN, HA], m: [
      ["WHO consolidated guidelines on tuberculosis. Module 4: treatment — drug-susceptible tuberculosis treatment. World Health Organization 2022", "https://www.who.int/publications/i/item/9789240048126"],
      ["Tüberküloz Tanı ve Tedavi Rehberi, 2. baskı. T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü 2019", null]] },
    c: [
      ["!Etken Mycobacterium tuberculosis; damlacık çekirdekleriyle hava yoluyla bulaş", "mycobacterium tuberculosis|tüberküloz basil|tüberküloz bakteri|koch basil|damlacık|hava yoluyla|aerosol"],
      ["Belirtiler: iki-üç haftadan uzun öksürük, ateş, gece terlemesi, kilo kaybı, hemoptizi", "gece terle|kilo kayb|zayıfla|hemoptizi|kan tükür|iki haftadan uzun|üç haftadan uzun|uzun süren öksürük"],
      ["Grafide üst lob apikal-posterior infiltrat ve kavite", "kavite|kaviter|üst lob|apikal|apeks|miliyer|ghon|gon odağı"],
      ["!Tanı: balgam yayması (ARB), kültür ve hızlı moleküler test (Xpert MTB/RIF)", "arb|aside dirençli|asido rezistan|ehrlich ziehl|ziehl neelsen|erlich|balgam yayma|mikobakteri kültür|löwenstein|xpert|gen expert|genexpert|moleküler test|pcr|rifampisin direnc|rifampisin direnç"],
      ["!Standart tedavi: 2 ay HRZE + 4 ay HR (toplam 6 ay)", "hrze|izoniazid|rifampisin|pirazinamid|etambutol|altı ay|6 ay|dörtlü|dört ilaç|başlangıç evre|idame evre|devam evre"],
      ["Doğrudan gözetimli tedavi (DGT) ve temaslı taraması; bildirim zorunlu", "doğrudan gözetim|dgt|dot|gözetimli tedavi|temaslı|temas tarama|bildirim|verem savaş|dispanser"],
      ["İlaç yan etkileri: hepatotoksisite, izoniazidde nöropati (piridoksin), etambutolde optik nörit", "hepatotoks|karaciğer enzim|piridoksin|b6 vitamin|nöropati|optik nörit|renk görme|turuncu"],
      ["Latent enfeksiyon: TDT ya da IGRA ile tanı, aktif hastalık dışlanınca koruyucu tedavi", "latent|tüberkülin|tdt|ppd|igra|interferon gama|quantiferon|kuantiferon|koruyucu tedavi|profilaksi"],
      ["İlaca dirençli TB (RR/MDR): kısa tüm oral rejimler (BPaLM)", "mdr|çok ilaca dirençli|rifampisine dirençli|rr tb|bpalm|bedakilin|pretomanid|linezolid"]
    ]},
  { id: "gog-sarkoidoz", tr: "Sarkoidoz", en: "Sarcoidosis", cat: "iah", lvl: 2,
    src: { k: [MN, FI], m: [
      ["Crouser ED ve ark. Diagnosis and Detection of Sarcoidosis. An Official American Thoracic Society Clinical Practice Guideline. Am J Respir Crit Care Med 2020", "https://doi.org/10.1164/rccm.202002-0251ST"],
      ["Baughman RP ve ark. ERS clinical practice guidelines on treatment of sarcoidosis. Eur Respir J 2021", "https://doi.org/10.1183/13993003.04079-2020"]] },
    c: [
      ["!Nekrotizan olmayan (kazeifiye olmayan) granülom; çok sistemli, nedeni bilinmiyor", "nekrotizan olmayan|nekroz olmayan|kazeifiye olmayan|kazeöz olmayan|kazeifikasyon olmayan|kazeifikasyonsuz|non kazeifiye|nonkazeifiye"],
      ["!Bilateral hiler lenfadenopati; Scadding evreleri", "bilateral hiler|iki taraflı hiler|hiler lenfadenopati|hiler lap|hiler lenf|scadding|skading"],
      ["Löfgren sendromu: eritema nodozum + bilateral hiler LAP + ayak bileği artriti, iyi prognoz", "löfgren|lofgren|eritema nodozum|erythema nodosum|ayak bileği"],
      ["!Tanı: uyumlu klinik-radyoloji + biyopside granülom + diğer nedenlerin dışlanması (EBUS)", "ebus|endobronşiyal ultrason|transbronşiyal|biyopside granülom|doku biyopsi|lenf nodu biyopsi|diğer nedenler dışla|diğer nedenlerin dışlan|tüberküloz ve mantar|tüberkülozu dışla|lenfomayı dışla"],
      ["Hiperkalsemi (granülomda 1-alfa hidroksilaz); başlangıçta serum kalsiyumu", "hiperkalsemi|kalsiyum|1 alfa hidroksilaz|bir alfa hidroksilaz|kalsitriol|hiperkalsiüri"],
      ["ACE düzeyi tek başına tanı koydurmaz", "ace tek başına|ace tanı koydurmaz|ace düzeyi tanı koydurmaz|ace tanısal değil|ace güvenilir değil|ace özgül değil|ace özgüllüğü|ace ile tanı konmaz|ace ile tanı konamaz|ace tanıda yeterli değil"],
      ["Akciğer dışı tutulum taraması: göz (üveit), kalp (EKG), deri", "üveit|göz muayene|kardiyak sarkoid|kalp tutulum|ekg|lupus pernio|cilt tutulum|deri tutulum|nörosarkoid"],
      ["!Tedavi: semptomatik/organ tehdidi varsa; ilk seçenek glukokortikoid, sonra metotreksat, anti-TNF", "kortikosteroid|glukokortikoid|prednizolon|prednizon|metotreksat|infliksimab|anti tnf"]
    ]},
  { id: "gog-obstruktif-uyku-apnesi", tr: "Obstrüktif uyku apne sendromu", en: "Obstructive sleep apnea", cat: "fiz", lvl: 2,
    src: { k: [MN, FI], m: [
      ["Kapur VK ve ark. Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea: An AASM Clinical Practice Guideline. J Clin Sleep Med 2017", "https://doi.org/10.5664/jcsm.6506"],
      ["Patil SP ve ark. Treatment of Adult Obstructive Sleep Apnea with Positive Airway Pressure: An AASM Clinical Practice Guideline. J Clin Sleep Med 2019", "https://doi.org/10.5664/jcsm.7640"]] },
    c: [
      ["!Uykuda tekrarlayan üst hava yolu kollapsı: apne ve hipopne", "üst hava yolu kolla|hava yolu kapan|farenks kolla|faringeal kolla|apne ve hipopne|hipopne"],
      ["Belirtiler: horlama, tanıklı apne, gündüz aşırı uykululuk, sabah baş ağrısı", "horlama|horla|tanıklı apne|eşi fark|gündüz uykulu|gündüz aşırı uyku|uyuklama|sabah baş ağrı|noktüri"],
      ["Risk: obezite, boyun çevresi, erkek cinsiyet, kraniyofasiyal yapı", "obezite|kilolu|beden kitle|boyun çevre|kalın boyun|retrognati|tonsil|bademcik"],
      ["Tarama ölçekleri: STOP-Bang, Epworth (tek başına tanı koydurmaz)", "stop bang|stopbang|epworth"],
      ["!Tanı: polisomnografi ya da ev tipi uyku apne testi", "polisomnografi|psg|uyku testi|uyku laboratuvar|ev tipi|evde uyku|hsat|poligrafi"],
      ["!AHİ ile ağırlık: 5–14 hafif, 15–29 orta, ≥30 ağır", "ahi|ahı|apne hipopne indeks|apne hipopne indek|saatte 5|saatte beş|saatte 15|saatte on beş|saatte 30|saatte otuz"],
      ["!Tedavi: CPAP (pozitif hava yolu basıncı) ilk seçenek; kilo verme, oral apareyler", "cpap|c pap|apap|pozitif hava yolu basınc|pozitif havayolu|pap tedavi|ağız içi aparey|oral aparey|mandibular|kilo ver|hipoglossal|tirzepatid"],
      ["Sonuçlar: hipertansiyon, AF, trafik kazası, kardiyovasküler risk", "hipertansiyon|tansiyon yüksel|atriyal fibrilasyon|trafik kaza|araba kullan|direksiyon|kardiyovasküler"]
    ]},
  { id: "gog-spontan-pnomotoraks", tr: "Spontan pnömotoraks", en: "Spontaneous pneumothorax", cat: "plv", lvl: 2,
    src: { k: [MN, FI], m: [BTS,
      ["Walker S ve ark. Joint ERS/EACTS/ESTS clinical practice guidelines on adults with spontaneous pneumothorax. Eur Respir J 2024", "https://doi.org/10.1183/13993003.00797-2023"]] },
    c: [
      ["!Primer (altta akciğer hastalığı yok; genç, uzun boylu, zayıf, sigara içen erkek; apikal bül/bleb) ve sekonder (KOAH vb.) ayrımı", "primer spontan|sekonder spontan|primer pnömotoraks|sekonder pnömotoraks|bleb|bül|uzun boylu|altta yatan akciğer hastalığı|altta akciğer hastalığı"],
      ["Ani başlayan plöretik göğüs ağrısı ve nefes darlığı; solunum sesleri azalmış", "ani başlayan|aniden başlayan|batıcı göğüs ağrı|plöretik|solunum sesi azal|solunum sesleri azal|hipertimpan|hiperrezonan"],
      ["Tanı: PA akciğer grafisinde plevral çizgi; ultrason, gerekirse BT", "plevral çizgi|visseral plevra çizgi|pa akciğer grafi|akciğer grafi|grafide|kayma bulgusu|akciğer kayma|lung point|lung sliding|bete|bt|tomografi"],
      ["!Az semptomlu, stabil primer pnömotoraksta konservatif izlem (boyutundan bağımsız)", "konservatif|sadece izlem|yalnızca izlem|yalnız izlem|izlemle yetin|gözlemle yetin|girişim yapmadan|girişimsiz|boyutundan bağımsız"],
      ["!Girişim gerekiyorsa iğne aspirasyonu (göğüs tüpüne tercih) ya da ayaktan cihaz", "iğne aspirasyon|iğneyle aspir|iğne ile aspir|basit aspirasyon|ayaktan|ambulatuvar|ambulatuar|heimlich|valf"],
      ["Sekonder pnömotoraksta genellikle göğüs tüpü ve yatış", "göğüs tüpü|tüp torakostomi|interkostal dren|toraks dren|drenaj"],
      ["!Nüks önleme: VATS ile bül rezeksiyonu + plörodez (nüks, persistan hava kaçağı, bilateral, riskli meslek)", "vats|video yardımlı|torakoskopi|bülektomi|bül rezeksiyon|plörodez|plorodez|plörektomi|plevral abrazyon|persistan hava kaçağı|uzamış hava kaçağı|hava kaçağı"],
      ["Sigarayı bırakma; uçuş/dalış kısıtlaması", "sigarayı bırak|sigara bırak|uçak|uçuş|dalış|dalgıç|pilot"]
    ]},
  { id: "gog-akciger-kanseri-tani-tarama", tr: "Akciğer kanseri: tanı ve tarama", en: "Lung cancer: diagnosis and screening", cat: "onk", lvl: 2,
    src: { k: [MN, HA], m: [
      ["US Preventive Services Task Force. Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement. JAMA 2021", "https://doi.org/10.1001/jama.2021.1117"],
      ["de Koning HJ ve ark. Reduced Lung-Cancer Mortality with Volume CT Screening in a Randomized Trial (NELSON). N Engl J Med 2020", "https://doi.org/10.1056/NEJMoa1911793"]] },
    c: [
      ["!Tarama: yüksek riskli bireyde yıllık düşük doz BT (USPSTF: 50–80 yaş, ≥20 paket-yıl, son 15 yılda içmiş)", "düşük doz|düşük dozlu|ldct|low dose|50 80|elli ile seksen|20 paket|yirmi paket"],
      ["Taramanın kanıtı: NLST ve NELSON'da akciğer kanseri mortalitesinde azalma", "nlst|nelson|mortalite azal|ölüm azal|ölümleri azal|mortaliteyi azal|mortalitesini azal"],
      ["Risk faktörleri: sigara, radon, asbest", "sigara|radon|asbest|paket yıl"],
      ["!Histoloji: küçük hücreli dışı (adenokarsinom en sık, skuamöz) ve küçük hücreli", "küçük hücreli dışı|küçük hücreli olmayan|kh dak|khdak|nsclc|küçük hücreli|adenokarsinom|skuamöz|yassı hücreli"],
      ["Paraneoplastik: KHAK'ta SIADH, Lambert-Eaton; skuamözde PTHrP ile hiperkalsemi", "paraneoplast|siadh|uygunsuz adh|hiponatremi|lambert|hiperkalsemi|pthrp|parathormon ilişkili|cushing|ektopik acth"],
      ["Lokal bulgular: Pancoast-Horner, vena kava süperior sendromu", "pancoast|horner|vena kava süperior|vena kava superior|vks|süperior vena kava"],
      ["!Tanı ve evreleme: kontrastlı BT, PET-BT, doku tanısı (bronkoskopi, EBUS-TBNA, transtorasik biyopsi), TNM", "pet bt|pet ct|pet|ebus|endobronşiyal ultrason|bronkoskopi|transtorasik|doku tanı|biyopsi|tnm|evreleme"],
      ["İleri adenokarsinomda moleküler test (EGFR, ALK, ROS1) ve PD-L1", "egfr|alk|ros1|ros 1|pd l1|pdl1|moleküler|mutasyon|biyobelirteç"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "gog-idiyopatik-pulmoner-fibrozis", tr: "İdiyopatik pulmoner fibrozis", en: "Idiopathic pulmonary fibrosis", cat: "iah", lvl: 3,
    src: { k: [MN, FI], m: [
      ["Raghu G ve ark. Idiopathic Pulmonary Fibrosis (an Update) and Progressive Pulmonary Fibrosis in Adults: An Official ATS/ERS/JRS/ALAT Clinical Practice Guideline. Am J Respir Crit Care Med 2022", "https://doi.org/10.1164/rccm.202202-0399ST"],
      ["Raghu G ve ark. Diagnosis of Idiopathic Pulmonary Fibrosis. An Official ATS/ERS/JRS/ALAT Clinical Practice Guideline. Am J Respir Crit Care Med 2018", "https://doi.org/10.1164/rccm.201807-1255ST"]] },
    c: [
      ["İleri yaş, erkek, sigara öyküsü; nedeni bilinmeyen kronik progresif fibrozan interstisyel pnömoni", "idiyopatik|nedeni bilinmeyen|ileri yaş|altmış yaş|60 yaş|yaşlı erkek|fibrozan|interstisyel pnömoni"],
      ["Efor dispnesi, kuru öksürük, bazal velcro raller, çomak parmak", "velcro|velkro|cırt cırt|bazal ral|ince ral|raller|çomak parmak|clubbing|kuru öksürük"],
      ["!YRBT'de UIP paterni: subplevral-bazal retikülasyon, bal peteği, traksiyon bronşektazisi", "uip|olağan interstisyel|usual interstitial|bal peteği|bal peteğ|honeycomb|traksiyon bronşektazi|subplevral|retiküler|retikülasyon"],
      ["!Diğer nedenlerin dışlanması (hipersensitivite pnömonisi, bağ dokusu hastalığı, ilaç, maruziyet) ve multidisipliner tartışma", "hipersensitivite pnömoni|bağ dokusu hastalığ|kollajen doku|multidisipliner|multi disipliner|ortak konsey|maruziyet öykü|ilaç öykü"],
      ["HRCT tanı koydurmuyorsa biyopsi (cerrahi ya da kriyobiyopsi)", "cerrahi biyopsi|cerrahi akciğer biyopsi|kriyobiyopsi|kriyo biyopsi|vats biyopsi|transbronşiyal kriyo"],
      ["!Antifibrotik: pirfenidon ya da nintedanib (FVC kaybını yavaşlatır)", "antifibrotik|anti fibrotik|pirfenidon|nintedanib|nerandomilast|fvc kayb|fvc düşüş"],
      ["Kortikosteroid-azatioprin-NAC kombinasyonu zararlı; immünsüpresif önerilmez", "steroid önerilmez|kortikosteroid önerilmez|steroid verilmez|steroid vermiyoruz|immünsüpresif önerilmez|immünsüpresyon önerilmez|panther|üçlü kombinasyon zararlı|azatioprin zararlı|steroid zararlı"],
      ["Akut alevlenme kötü prognoz; oksijen, rehabilitasyon, akciğer nakli", "akut alevlenme|akciğer nakl|akciğer transplant|transplantasyon|nakil"],
      ["Progresif pulmoner fibrozis (PPF): İPF dışı fibrozan İAH'de bir yılda progresyon", "progresif pulmoner fibroz|ppf|progresif fibroz|ilerleyici fibroz|ipf dışı"]
    ]},
  { id: "gog-ards", tr: "Akut solunum sıkıntısı sendromu (ARDS)", en: "Acute respiratory distress syndrome", cat: "ybk", lvl: 3,
    src: { k: [MN, HA], m: [
      ["Matthay MA ve ark. A New Global Definition of Acute Respiratory Distress Syndrome. Am J Respir Crit Care Med 2024", "https://doi.org/10.1164/rccm.202303-0558WS"],
      ["Grasselli G ve ark. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med 2023", "https://doi.org/10.1007/s00134-023-07050-7"]] },
    c: [
      ["!Tanım: bir hafta içinde, bilateral opasite, kalp yetersizliği/sıvı yüküyle açıklanamayan hipoksemik solunum yetmezliği", "bir hafta|1 hafta|7 gün|yedi gün|bilateral opasite|bilateral infiltrat|iki taraflı infiltrat|iki taraflı opasite|kardiyojenik olmayan|kalp yetersizliğiyle açıklanamayan|kalple açıklanamayan|sıvı yüküyle açıklanamayan"],
      ["!Berlin: PEEP ≥5 ile PaO2/FiO2 ≤300; hafif 200–300, orta 100–200, ağır ≤100", "berlin|pao2 fio2|p f oran|pf oran|po2 fio2|300 ve altı|300 ün altı|200 ile 300|100 ile 200|100 ve altı|üç yüz ve altı|iki yüz ile üç yüz|yüz ile iki yüz"],
      ["2024 global tanım: yüksek akımlı nazal oksijen ≥30 L/dk, SpO2/FiO2 ≤315, ultrason kabul", "global tanım|yeni tanım|yüksek akım|high flow|hfno|nazal yüksek akım|spo2 fio2|315|üç yüz on beş|s f oran|sf oran"],
      ["Nedenler: pnömoni, sepsis, aspirasyon, pankreatit, travma, transfüzyon", "sepsis|aspirasyon|pankreatit|transfüzyon|travma|pnömoni"],
      ["Patoloji: diffüz alveoler hasar, hiyalen membran, kapiller-alveoler geçirgenlik artışı", "diffüz alveoler hasar|hiyalen membran|hyalin membran|geçirgenlik|permeabilite|kapiller kaçak|alveoler kapiller"],
      ["!Akciğer koruyucu ventilasyon: düşük tidal volüm (4–8 mL/kg ideal kilo), plato basıncı <30 cmH2O", "düşük tidal|tidal volüm|akciğer koruyucu|koruyucu ventilasyon|6 ml|altı ml|ideal vücut ağırlığı|ideal kilo|plato basınc|plato|30 cm"],
      ["!Orta-ağır ARDS'de uzun süreli prone (yüzüstü) pozisyon", "prone|pron|yüzüstü|yüz üstü|yüzükoyun"],
      ["PEEP titrasyonu, konservatif sıvı, dirençli hipoksemide VV-ECMO", "peep|pozitif ekspirasyon sonu|konservatif sıvı|sıvı kısıtla|negatif sıvı denge|ecmo|ekmo|ekstrakorporeal"]
    ]},
  { id: "gog-bronsektazi", tr: "Kistik fibrozis dışı bronşektazi", en: "Non-cystic fibrosis bronchiectasis", cat: "obs", lvl: 3,
    src: { k: [MN, FI], m: [
      ["Chalmers JD ve ark. European Respiratory Society clinical practice guideline for the management of adult bronchiectasis. Eur Respir J 2025", "https://doi.org/10.1183/13993003.01126-2025"],
      ["Polverino E ve ark. European Respiratory Society guidelines for the management of adult bronchiectasis. Eur Respir J 2017", "https://doi.org/10.1183/13993003.00629-2017"]] },
    c: [
      ["!Bronşların kalıcı dilatasyonu; kronik balgamlı öksürük ve tekrarlayan solunum yolu enfeksiyonları", "kalıcı dilatasyon|kalıcı genişle|bronşların genişle|bronş genişle|bronş dilatasyon|bol balgam|günlük balgam|kronik balgam|pürülan balgam|tekrarlayan enfeksiyon|tekrarlayan solunum yolu"],
      ["!Tanı: YRBT — bronş çapı > eşlik eden arter (taşlı yüzük), periferde incelme kaybı", "yrbt|yüksek rezolüsyon|hrct|taşlı yüzük|yüzük taşı|signet ring|bronkoarteriyel|bronş arter oran|incelme kayb|incelmemesi|plevraya kadar"],
      ["Kısır döngü: enfeksiyon, inflamasyon, mukosiliyer klirens bozukluğu ve yapısal hasar", "kısır döngü|vicious|vortex|mukosiliyer|siliyer klirens|nötrofilik inflamasyon"],
      ["Etiyoloji: enfeksiyon sonrası, ABPA, immün yetmezlik, primer siliyer diskinezi, KF, NTM", "enfeksiyon sonrası|postenfeksiyöz|boğmaca|kızamık|abpa|aspergilloz|immün yetmezlik|immunoglobulin|immünoglobulin|siliyer diskinezi|kartagener|kistik fibroz|ntm|tüberküloz dışı mikobakteri"],
      ["!Hava yolu temizleme teknikleri ve pulmoner rehabilitasyon", "hava yolu temizle|havayolu temizle|airway clearance|postural drenaj|göğüs fizyoterapi|solunum fizyoterapi|osilasyon|pep cihaz|rehabilit"],
      ["Kronik Pseudomonas: ilk izolasyonda eradikasyon, kronik enfeksiyonda inhaler antibiyotik", "pseudomonas|psödomonas|eradikasyon|inhaler antibiyotik|inhale antibiyotik|kolistin|tobramisin"],
      ["!Sık alevlenmede uzun süreli makrolid (azitromisin)", "uzun süreli makrolid|uzun dönem makrolid|makrolid idame|azitromisin|eritromisin"],
      ["Alevlenmede balgam kültürüne göre antibiyotik", "balgam kültür|kültüre göre antibiyotik|kültür sonucuna göre|alevlenmede antibiyotik|alevlenmelerde antibiyotik|alevlenmede kültür"]
    ]},
  { id: "gog-alfa1-antitripsin-eksikligi", tr: "Alfa-1 antitripsin eksikliği", en: "Alpha-1 antitrypsin deficiency", cat: "obs", lvl: 3,
    src: { k: [MN, HA], m: [
      ["Miravitlles M ve ark. European Respiratory Society statement: diagnosis and treatment of pulmonary disease in α1-antitrypsin deficiency. Eur Respir J 2017", "https://doi.org/10.1183/13993003.00610-2017"],
      ["Strnad P, McElvaney NG, Lomas DA. Alpha1-Antitrypsin Deficiency. N Engl J Med 2020", "https://doi.org/10.1056/NEJMra1910234"]] },
    c: [
      ["!SERPINA1 geni, kodominant kalıtım; en ağır PiZZ (Z alleli)", "serpina1|serpin a1|serpina 1|kodominant|pi zz|pizz|zz genotip|z allel|zz homozigot|homozigot z"],
      ["Mekanizma: nötrofil elastazın inhibe edilememesi, proteaz-antiproteaz dengesizliği", "nötrofil elastaz|elastaz|proteaz antiproteaz|proteaz anti proteaz|antiproteaz"],
      ["!Erken yaşta, alt lob ağırlıklı panasiner (panlobüler) amfizem; sigara hızlandırır", "panasiner|panlobüler|pan asiner|pan lobüler|alt lob|bazal amfizem|alt zon|genç yaşta amfizem|erken yaşta amfizem|genç yaşta koah|erken yaşta koah"],
      ["Karaciğer: hepatositte Z protein polimeri birikimi; yenidoğan kolestazı, siroz, HCC (PAS pozitif diastaz dirençli globüller)", "karaciğer hastalığ|karaciğer tutulum|hepatosit|siroz|kolestaz|yenidoğan sarılık|hepatoselüler|polimer|pas pozitif|diastaz"],
      ["!Tanı: serum AAT düzeyi + fenotip/genotip; her KOAH hastasına bir kez test", "serum düzey|serum alfa 1|aat düzey|alfa 1 düzey|düzeyini ölç|fenotip|genotip|izoelektrik|her koah|tüm koah|tüm koahlı|her koahlı|koah tanılı herkes"],
      ["Diğer: nekrotizan pannikülit, granülomatöz polianjiit ile ilişki", "pannikülit|panikülit|polianjiit|anca"],
      ["!Tedavi: sigarayı bıraktırma; ağır eksiklik + amfizemde IV augmentasyon (AAT replasmanı)", "augmentasyon|ogmentasyon|replasman|yerine koyma|intravenöz alfa 1|iv alfa 1|alfa 1 proteinaz|sigarayı bırak|sigara bırak"],
      ["Aile taraması; ileri hastalıkta akciğer/karaciğer nakli", "aile tarama|kardeşlerin tara|kardeş tarama|aile bireyleri|birinci derece|nakil|transplant"]
    ]},
  { id: "gog-silikoz", tr: "Silikoz", en: "Silicosis", cat: "iah", lvl: 3,
    src: { k: [MN, FI], m: [
      ["Leung CC, Yu ITS, Chen W. Silicosis. Lancet 2012", "https://doi.org/10.1016/S0140-6736(12)60235-9"],
      ["Hoy RF, Chambers DC. Silica-related diseases in the modern world. Allergy 2020", "https://doi.org/10.1111/all.14202"]] },
    c: [
      ["!Solunabilir kristalin silika (kuvars) inhalasyonu ile oluşan fibrotik pnömokonyoz", "kristalin silika|kristal silika|silika|silis|kuvars|silisyum dioksit|pnömokonyoz"],
      ["Riskli işler: madencilik, taş ocağı, kumlama, döküm, yapay taş (mutfak tezgâhı)", "madenci|maden|taş ocağ|kumlama|döküm|dökümhane|yapay taş|kuvars tezgah|mutfak tezgah|seramik|cam sanayi|taş kesme"],
      ["Türkiye'de kot kumlama salgını (2009'da yasaklandı)", "kot kumlama|denim|kot taşlama|kot"],
      ["Mekanizma: makrofajda lizozom hasarı, NALP3 inflamazom, fibrozis", "makrofaj|lizozom|nalp3|nlrp3|inflamazom"],
      ["!Radyoloji: üst zonda küçük nodüller, yumurta kabuğu kalsifikasyonu, progresif masif fibrozis; ILO sınıflaması", "üst zon|üst lob|küçük nodül|nodüller|yumurta kabuğ|yumurtakabuğ|eggshell|progresif masif fibroz|masif fibroz|konglomer|ilo"],
      ["Klinik formlar: kronik, hızlanmış, akut (silikoproteinoz)", "kronik silikoz|hızlanmış|akselere|akut silikoz|silikoproteinoz|alveoler proteinoz"],
      ["!Tüberküloz riski artar; ayrıca akciğer kanseri ve otoimmün hastalık", "tüberküloz riski|tüberküloz sıklığı|tüberküloz gelişme|tüberküloz açısından|silikotüberküloz|akciğer kanseri|skleroderma|otoimmün"],
      ["!Küratif tedavi yok: maruziyetin kesilmesi, toz kontrolü/korunma, nakil; meslek hastalığı bildirimi", "küratif tedavi yok|tedavisi yok|maruziyet kesil|maruziyetin kesil|maruziyeti kes|maruziyetten uzaklaş|toz kontrol|ıslak yöntem|uygun maske|koruyucu maske|solunum koruyucu|meslek hastalığı|nakil|transplant"]
    ]},
]
});
})();
