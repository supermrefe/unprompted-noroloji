/* Gastroenteroloji ve hepatoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve serviste/acilde sık karşılaşılan GİS ve karaciğer hastalıkları; güncel kılavuzlara dayanır
   (ACG GERD 2022, Maastricht VI 2022 + ACG H. pylori 2024, ESGE 2021 + ACG 2021 kanama, ACG pankreatit 2024, ECCO/ACG KİBH, ACG çölyak 2023,
   Roma IV, EASL HBV 2025, EASL HCV 2020, EASL-EASD-EASO MASLD 2024, Baveno VII, EASL HE 2022, EASL OİH 2025, EASL hemokromatoz 2022, PBC, PSK, ALF).
   Kolay = her hekimin bilmesi gereken çekirdek; Orta = KİBH, çölyak, HCV, MASLD, asit/SBP; Zor = portal hipertansiyon, HE, otoimmün/kolestatik, ALF.
   Kapsam dışı: Wilson hastalığı (nöroloji), GİS kanserleri ve cerrahi akut karın (genel cerrahi/onkoloji). */
(function () {
const SF = "Sleisenger and Fordtran's Gastrointestinal and Liver Disease, 12. baskı (2025)";
const HA = "Harrison's Principles of Internal Medicine, 22. baskı (2025)";
const SH = "Sherlock's Diseases of the Liver and Biliary System, 13. baskı (2018)";
const YA = "Yamada's Textbook of Gastroenterology, 7. baskı (2022)";
const EASL_DEK = ["EASL Clinical Practice Guidelines for the management of patients with decompensated cirrhosis. J Hepatol 2018", "https://doi.org/10.1016/j.jhep.2018.03.024"];
const BAVENO = ["Baveno VII – Renewing consensus in portal hypertension. J Hepatol 2022", "https://doi.org/10.1016/j.jhep.2021.12.022"];

UP.add({ id: "gastroenteroloji", subs: {
    ust: "Özofagus, mide ve üst GİS",
    bag: "Bağırsak hastalıkları",
    pan: "Pankreas",
    hep: "Viral ve metabolik karaciğer hastalıkları",
    oto: "Otoimmün, kolestatik ve genetik karaciğer hastalıkları",
    sir: "Siroz komplikasyonları ve karaciğer yetmezliği"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "gas-gerd", tr: "Gastroözofageal reflü hastalığı", en: "Gastroesophageal reflux disease", cat: "ust", lvl: 1,
    src: { k: [SF, HA], m: [
      ["ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol 2022", "https://doi.org/10.14309/ajg.0000000000001538"],
      ["Updates to the modern diagnosis of GERD: Lyon consensus 2.0. Gut 2024", "https://doi.org/10.1136/gutjnl-2023-330616"]] },
    c: [
      ["!Tipik belirtiler: göğüste yanma (pirozis) ve regürjitasyon", "pirozis|mide yanması|göğüste yanma|göğüs kemiğinin arkasında yanma|retrosternal yanma|regürjitasyon|ağza acı su|ağza ekşi su|ağzına acı su|ekşi su|heartburn"],
      ["!Alarm bulgusu yoksa ampirik PPI denemesi", "ampirik|empirik|ppi dene|ppi denemesi|deneme amaçlı ppi|deneme amaçlı proton|deneme tedavisi"],
      ["!Alarm bulgularında ve PPI yanıtsızlığında endoskopi", "alarm bulgu|alarm belirti|alarm semptom|alarm işaret"],
      ["Endoskopi: Los Angeles sınıflaması (ACG 2022: LA C–D özofajit kesin tanı koydurur)", "los angeles|la sınıf|la c|la d|eroziv özofajit"],
      ["PPI kesilerek pH monitörizasyonu (Lyon 2.0: asit maruziyet süresi)", "ph monitör|ph ölç|ph metre|phmetri|empedans|asit maruziyet|lyon"],
      ["Komplikasyonlar: Barrett özofagusu, peptik darlık, adenokarsinom", "barrett|peptik darlık|striktür|adenokarsinom"],
      ["Yaşam tarzı: kilo verme, yatak başını yükseltme, geç yemekten kaçınma", "kilo ver|yatak başı|başucunu yükselt|yatağın başını|yatmadan önce|geç saatte yemek|gece geç"],
      ["Seçilmiş olguda antireflü cerrahi (fundoplikasyon)", "fundoplikasyon|nissen|antireflü"]
    ]},
  { id: "gas-peptik-ulser-hp", tr: "Peptik ülser ve Helicobacter pylori", en: "Peptic ulcer disease and Helicobacter pylori", cat: "ust", lvl: 1,
    src: { k: [SF, HA], m: [
      ["Management of Helicobacter pylori infection: the Maastricht VI/Florence consensus report. Gut 2022", "https://doi.org/10.1136/gutjnl-2022-327745"],
      ["ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol 2024", "https://doi.org/10.14309/ajg.0000000000002968"]] },
    c: [
      ["!İki ana neden: H. pylori ve NSAİİ/aspirin", "pylori|pilori|nsaid|nsai|nonsteroid|steroid olmayan antiinflamatuvar|aspirin"],
      ["!Non-invaziv tanı: üre nefes testi ya da dışkıda antijen", "üre nefes|nefes testi|dışkıda antijen|gaitada antijen|dışkı antijen|gaita antijen|üreaz"],
      ["Testten önce PPI'ın kesilmesi (yalancı negatiflik)", "iki hafta önce|2 hafta önce|ppi kes|ppi ı kes|ppiyı kes|ppi yi kes|yalancı negatif|yanlış negatif"],
      ["!İlk seçenek: 14 günlük bizmutlu dörtlü tedavi", "bizmut|bismut|dörtlü tedavi|dörtlü rejim|quadruple"],
      ["Klaritromisin direnci: duyarlılık bilinmeden klaritromisinli üçlü tedavi önerilmez", "klaritromisin direnc|klaritromisine direnç|direnç oranı|antibiyotik direnc|duyarlılık test|antibiyogram"],
      ["Tedavi sonrası eradikasyonun doğrulanması", "eradikasyon kontrol|eradikasyonu kontrol|eradikasyonu doğrula|eradikasyonun doğrulan|kontrol test|tedaviden sonra test|başarısını kontrol"],
      ["Komplikasyonlar: kanama, perforasyon, çıkış obstrüksiyonu", "perforasyon|delinme|obstrüksiyon|çıkış darlığı|pilor darlığı"],
      ["Mide kanseri ve MALT lenfoma ile ilişki", "malt|mide kanser|gastrik kanser|atrofik gastrit|intestinal metaplazi"]
    ]},
  { id: "gas-ust-gis-kanama", tr: "Varis dışı üst gastrointestinal kanama", en: "Nonvariceal upper gastrointestinal bleeding", cat: "ust", lvl: 1,
    src: { k: [SF, HA], m: [
      ["Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): ESGE Guideline – Update 2021. Endoscopy 2021", "https://doi.org/10.1055/a-1369-5274"],
      ["ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol 2021", "https://doi.org/10.14309/ajg.0000000000001245"]] },
    c: [
      ["!İlk iş hemodinamik resüsitasyon", "resüsitasyon|damar yolu|geniş damar|sıvı replas|hemodinamiyi stabil|hemodinamik stabil|kristalloid"],
      ["!Glasgow-Blatchford skoru: 0–1 ise ayaktan izlenebilir", "blatchford|gbs|ayaktan izlen|ayaktan takip|yatırılmadan|yatırmadan"],
      ["Kısıtlayıcı eritrosit transfüzyonu (ACG: Hb 7 g/dL eşiği)", "kısıtlayıcı|restriktif|hemoglobin 7|hemoglobin yedi|yedinin altı|7 nin altı|yedi gram"],
      ["!24 saat içinde endoskopi ve endoskopik hemostaz", "24 saat içinde endoskopi|yirmi dört saat içinde endoskopi|endoskopik hemostaz|klip|termal|epinefrin enjeksiyon|adrenalin enjeksiyon"],
      ["Forrest sınıflaması: yeniden kanama riski", "forrest|görünür damar|fışkır|yapışık pıhtı|visible vessel"],
      ["Hemostaz sonrası yüksek doz PPI", "yüksek doz ppi|yüksek doz proton|ppi infüzyon|infüzyon|intravenöz ppi|damardan ppi|pantoprazol|esomeprazol"],
      ["Endoskopi öncesi IV eritromisin", "eritromisin"],
      ["Başarısızlıkta tekrar endoskopi, anjiyografik embolizasyon, cerrahi", "embolizasyon|tekrar endoskopi|ikinci endoskopi"],
      ["Ülser kanamasında H. pylori araştırılması", "pylori|pilori"]
    ]},
  { id: "gas-akut-pankreatit", tr: "Akut pankreatit", en: "Acute pancreatitis", cat: "pan", lvl: 1,
    src: { k: [SF, HA], m: [
      ["Classification of acute pancreatitis—2012: revision of the Atlanta classification and definitions by international consensus. Gut 2013", "https://doi.org/10.1136/gutjnl-2012-302779"],
      ["American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol 2024", "https://doi.org/10.14309/ajg.0000000000002645"]] },
    c: [
      ["!Tanı: 3 ölçütten 2'si (tipik ağrı, lipaz/amilaz ≥3 kat, görüntüleme)", "üç kat|3 kat|üçten ikisi|3 ten 2|ölçütten ikisi|kriterden ikisi|iki kriter|iki ölçüt|ikisinin olması|ikisi gerek"],
      ["!En sık nedenler: safra taşı ve alkol; hipertrigliseridemi", "safra taşı|biliyer|kolelitiyazis|alkol|trigliserid"],
      ["Revize Atlanta: hafif, orta ağır, ağır (48 saatten uzun organ yetmezliği)", "atlanta|48 saat|kırk sekiz saat|organ yetmezliği|kalıcı organ|orta ağır|persistan organ"],
      ["!Erken sıvı: laktatlı Ringer, orta düzeyde agresif", "ringer|laktatlı|sıvı resüsitasyon|hidrasyon|agresif sıvı|orta düzeyde"],
      ["Erken oral beslenme (hafif olguda 24–48 saat içinde)", "erken oral|ağızdan beslen|oral beslen|erken besle|enteral|nazogastrik|nazojejunal"],
      ["Profilaktik antibiyotik yok; antibiyotik yalnız enfekte nekrozda", "antibiyotik verilmez|antibiyotik vermeyiz|antibiyotik vermiyoruz|antibiyotik önerilmez|antibiyotik kullanmıyoruz|antibiyotik kullanılmaz|antibiyotik gerekmez|enfekte nekroz|infekte nekroz"],
      ["Kolanjitte ERCP; biliyer pankreatitte aynı yatışta kolesistektomi", "kolanjit|ercp|erkp|kolesistektomi"],
      ["BT ilk günlerde rutin değil; tanı belirsizse ya da kötüleşmede", "rutin bt|rutin tomografi|bt rutin|tomografi rutin|rutin bete|bete rutin|kontrastlı bt|kontrastlı tomografi|kontrastlı bete|ilk günlerde tomografi"]
    ]},
  { id: "gas-hepatit-b", tr: "Kronik hepatit B", en: "Chronic hepatitis B", cat: "hep", lvl: 1,
    src: { k: [SH, HA], m: [
      ["EASL Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol 2025", "https://doi.org/10.1016/j.jhep.2025.03.018"],
      ["Guidelines for the prevention, diagnosis, care and treatment for people with chronic hepatitis B infection. WHO 2024", "https://www.who.int/publications/i/item/9789240090903"]] },
    c: [
      ["!Serolojik belirteçler: HBsAg, anti-HBs, anti-HBc, HBeAg", "hbsag|hbs ag|hbs antijen|yüzey antijen|anti hbs|antihbs|anti hbc|antihbc|hbeag|hbe ag|core antikor"],
      ["!Tedavi kararı: HBV DNA, ALT ve fibroz birlikte değerlendirilir", "hbv dna|viral yük|virüs yükü|alt yüksek|alt düzey|elastografi|fibroscan"],
      ["!İlk seçenek: tenofovir ya da entekavir (uzun süreli)", "tenofovir|entekavir|entecavir|nükleoz"],
      ["İdeal hedef: HBsAg kaybı (fonksiyonel kür)", "fonksiyonel kür|fonksiyonel iyileş|hbsag kaybı|hbsag negatifleş|hbsag in kaybı|yüzey antijeninin kaybı|functional cure"],
      ["Hepatosellüler karsinom taraması (ultrasonografi)", "hepatosellüler|hepatoselüler|hcc|karaciğer kanser|ultrason"],
      ["HBsAg pozitiflerde hepatit D (delta) testi", "delta|hepatit d|hdv|anti hdv"],
      ["İmmünsüpresyon/kemoterapide reaktivasyon profilaksisi", "reaktivasyon|rituksimab|kemoterapi|immünsüpres|immünosüpres"],
      ["Korunma: aşı; doğumda yenidoğana aşı + HBIG", "aşı|aşıla|aşısı|immünglobulin|hbig|anneden bebeğe|vertikal|perinatal"]
    ]},
  { id: "gas-irritabl-bagirsak", tr: "İrritabl bağırsak sendromu", en: "Irritable bowel syndrome", cat: "bag", lvl: 1,
    src: { k: [SF, YA], m: [
      ["Bowel Disorders (Rome IV). Gastroenterology 2016", "https://doi.org/10.1053/j.gastro.2016.02.031"],
      ["ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol 2021", "https://doi.org/10.14309/ajg.0000000000001036"]] },
    c: [
      ["!Roma IV: son 3 ayda ortalama haftada en az 1 gün karın ağrısı", "roma 4|roma iv|roma dört|rome iv|rome 4|roma kriter|roma ölçüt|haftada en az bir|haftada bir|haftada 1|son 3 ay|son üç ay"],
      ["!Ağrı dışkılamayla ilişkili; dışkı sıklığı ya da şeklinde değişiklik", "dışkılamayla|dışkılama ile|defekasyon|dışkı sıklığ|dışkılama sıklığ|dışkı şekl|dışkının şekl|dışkı kıvam|dışkının kıvam"],
      ["Alt tipler (kabızlık/ishal baskın, karışık) ve Bristol dışkı skalası", "bristol|kabızlık baskın|ishal baskın|karışık tip|alt tip|ibs c|ibs d"],
      ["!Alarm bulgusu yoksa pozitif tanı (dışlama tanısı değil)", "alarm|pozitif tanı|dışlama tanısı değil|dışlama tanısı olarak değil"],
      ["İshal baskında çölyak serolojisi ve fekal kalprotektin", "çölyak|kalprotektin|calprotectin"],
      ["Diyet: düşük FODMAP, çözünür lif (psyllium)", "fodmap|fotmap|psyllium|çözünür lif|lifli"],
      ["İlaçlar: trisiklik antidepresan (nöromodülatör), linaklotid, rifaksimin (antispazmodik tartışmalı)", "trisiklik|amitriptilin|nöromodülatör|linaklotid|rifaksimin|lubiproston"],
      ["Beyin–bağırsak etkileşimi; bağırsağa yönelik psikoterapi", "beyin bağırsak|bağırsak beyin|psikoterapi|bilişsel davranış|hipnoterapi|viseral hiper|visseral hiper"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "gas-ulseratif-kolit", tr: "Ülseratif kolit", en: "Ulcerative colitis", cat: "bag", lvl: 2,
    src: { k: [SF, HA], m: [
      ["ECCO Guidelines on Therapeutics in Ulcerative Colitis: Medical Treatment. J Crohns Colitis 2022", "https://doi.org/10.1093/ecco-jcc/jjab178"],
      ["ACG Clinical Guideline Update: Ulcerative Colitis in Adults. Am J Gastroenterol 2025", "https://doi.org/10.14309/ajg.0000000000003616"]] },
    c: [
      ["!Rektumdan başlayıp kesintisiz yayılan, mukozayla sınırlı inflamasyon", "rektumdan başla|rektumu tutar|rektum her zaman|kesintisiz|devamlı tutulum|sürekli tutulum|mukozayla sınırlı|mukoza ile sınırlı|yalnız mukoza|sadece mukoza|yüzeyel"],
      ["!Klinik: kanlı ishal, tenezm, aciliyet", "kanlı ishal|kanlı mukuslu|tenezm|aciliyet|sıkışma hissi|urgency"],
      ["Yaygınlık: proktit, sol kolon, yaygın kolit (Montreal); Mayo skoru", "proktit|sol kolon|pankolit|yaygın kolit|montreal|mayo"],
      ["!Hafif-orta: oral + rektal 5-ASA (mesalazin)", "5 asa|beş asa|5asa|mesalazin|mesalamin|aminosalisilat"],
      ["Orta-ağır: steroid, ardından biyolojik ya da JAK inhibitörü", "anti tnf|antitnf|infliksimab|adalimumab|vedolizumab|ustekinumab|tofasitinib|upadasitinib|jak inhib|biyolojik"],
      ["Akut ağır kolit: IV steroid, yanıtsızlıkta infliksimab/siklosporin ya da kolektomi", "truelove|akut ağır|ağır kolit|siklosporin|kolektomi|toksik megakolon"],
      ["PSK ilişkisi ve kolorektal kanser için kolonoskopik izlem", "sklerozan|kolorektal kanser|kolon kanser|displazi|sürveyans|kolonoskopik izlem|kolonoskopi ile izle"],
      ["Sigara içmeyenlerde/bırakanlarda daha sık", "sigara koruyucu|sigaranın koruyucu|sigara içmeyen|sigarayı bırakan|eski sigara|bırakanlarda"],
      ["Kalprotektinle izlem; hedef endoskopik/mukozal iyileşme", "kalprotektin|mukozal iyileşme|treat to target|hedefe yönelik|endoskopik remisyon|endoskopik iyileşme"]
    ]},
  { id: "gas-crohn", tr: "Crohn hastalığı", en: "Crohn disease", cat: "bag", lvl: 2,
    src: { k: [SF, HA], m: [
      ["ECCO Guidelines on Therapeutics in Crohn's Disease: Medical Treatment. J Crohns Colitis 2024", "https://doi.org/10.1093/ecco-jcc/jjae091"],
      ["ACG Clinical Guideline: Management of Crohn's Disease in Adults. Am J Gastroenterol 2025", "https://doi.org/10.14309/ajg.0000000000003465"]] },
    c: [
      ["!Ağızdan anüse tüm GİS; en sık terminal ileum", "ağızdan anüse|ağızdan anüs|terminal ileum|ileokolik|ileoçekal|ileum"],
      ["!Transmural inflamasyon, atlamalı lezyonlar, kaldırım taşı görünümü", "transmural|tüm duvar|atlamalı|skip|kaldırım taşı|segmenter|sağlam alan"],
      ["Kazeifiye olmayan granülom", "granülom"],
      ["!Komplikasyon: fistül, apse, darlık; perianal hastalık", "fistül|apse|darlık|striktür|perianal|stenoz"],
      ["Sigara riski artırır ve seyri kötüleştirir", "sigara kötüleş|sigara seyri|sigara riski|sigara içenlerde daha|sigarayı mutlaka bırak|sigara içilmemeli|sigara hastalığı kötüleş"],
      ["Hafif ileoçekal hastalıkta budesonid; mesalazin Crohn'da önerilmez", "budesonid|mesalazin önerilmez|mesalazinin yeri yok|5 asa önerilmez|5 asanın yeri yok|mesalazin etkisiz|mesalazin etkili değil"],
      ["!Orta-ağır hastalıkta erken biyolojik tedavi (anti-TNF ± tiyopürin, ustekinumab, vedolizumab, risankizumab, JAK)", "anti tnf|antitnf|infliksimab|adalimumab|ustekinumab|vedolizumab|risankizumab|upadasitinib|biyolojik|azatiyopr|tiyopürin"],
      ["Malabsorpsiyon: B12 eksikliği, safra asidi kaybı, oksalat taşı", "b12|b on iki|safra asidi|oksalat|malabsorbsiyon|malabsorpsiyon"],
      ["Cerrahi iyileştirici değil; bağırsak koruyucu yaklaşım", "rezeksiyon|striktüroplasti|bağırsak koruyucu|kısa bağırsak"]
    ]},
  { id: "gas-colyak", tr: "Çölyak hastalığı", en: "Celiac disease", cat: "bag", lvl: 2,
    src: { k: [SF, YA], m: [
      ["American College of Gastroenterology Guidelines Update: Diagnosis and Management of Celiac Disease. Am J Gastroenterol 2023", "https://doi.org/10.14309/ajg.0000000000002075"],
      ["European Society for the Study of Coeliac Disease (ESsCD) guideline for coeliac disease and other gluten-related disorders. United European Gastroenterol J 2019", "https://doi.org/10.1177/2050640619844125"]] },
    c: [
      ["!Glütenle (buğday, arpa, çavdar) tetiklenen immün aracılı enteropati", "buğday|arpa|çavdar|gliadin|prolamin"],
      ["HLA-DQ2/DQ8: negatifse çölyak çok olası değil", "dq2|dq8|dq 2|dq 8|dq iki|dq sekiz|hla"],
      ["!İlk test: doku transglutaminaz IgA + total IgA (glütenli diyetteyken)", "transglutaminaz|ttg|tt g|endomisyum|total iga|toplam iga|iga eksikliği|iga düzeyi"],
      ["!Doğrulama: duodenum biyopsisi (villus atrofisi, Marsh)", "villus atrofi|villöz atrofi|vilus atrofi|marsh|duodenum biyopsi|duodenal biyopsi|kript hiperplazi|intraepitelyal lenfosit"],
      ["Bulgular: ishal, kilo kaybı, demir eksikliği anemisi, osteoporoz", "demir eksikliğ|osteoporoz|osteopeni|steatore|büyüme geriliğ|boy kısalığ"],
      ["Deri bulgusu: dermatitis herpetiformis", "dermatitis herpetiformis|herpetiform|dühring|duhring"],
      ["!Tedavi: ömür boyu katı glütensiz diyet", "glütensiz|glutensiz|glüten içermeyen|gluten free|glütenden arındırılmış"],
      ["Yanıtsızlıkta önce diyet uyumu; refrakter çölyak ve lenfoma (EATL)", "refrakter çölyak|lenfoma|eatl|diyet uyum|gizli glüten"]
    ]},
  { id: "gas-hepatit-c", tr: "Hepatit C", en: "Hepatitis C", cat: "hep", lvl: 2,
    src: { k: [SH, HA], m: [
      ["EASL recommendations on treatment of hepatitis C: Final update of the series. J Hepatol 2020", "https://doi.org/10.1016/j.jhep.2020.08.018"],
      ["Hepatitis C Guidance 2023 Update: AASLD-IDSA Recommendations for Testing, Managing, and Treating Hepatitis C Virus Infection. Clin Infect Dis 2023", "https://doi.org/10.1093/cid/ciad319"]] },
    c: [
      ["!Tanı: anti-HCV; pozitifse HCV RNA ile aktif enfeksiyon", "anti hcv|antihcv|hcv rna|refleks"],
      ["Bulaş: kan yoluyla (damar içi madde kullanımı, güvensiz tıbbi işlem)", "damar içi madde|iv madde|enjektör|ortak iğne|kan yoluyla|kanla bulaş|madde kullan|diyaliz"],
      ["Çoğu olguda kronikleşir, sinsi seyreder", "kronikleş|sinsi|sessiz seyr|sessizce|asemptomatik"],
      ["!Pangenotipik DAA: sofosbuvir/velpatasvir ya da glekaprevir/pibrentasvir", "sofosbuvir|velpatasvir|glekaprevir|pibrentasvir|pangenotip|direkt etkili|doğrudan etkili|daa"],
      ["!Kür: tedavi sonrası 12. haftada saptanamayan HCV RNA (SVR12)", "svr|kalıcı viral|kalıcı virolojik|sürekli viral|12. hafta|on ikinci hafta"],
      ["DAA öncesi HBV (reaktivasyon) ve ilaç etkileşimi kontrolü", "reaktivasyon|ilaç etkileşim|hbsag|hbs ag"],
      ["Sirozda SVR sonrası da HCC taraması sürer", "hcc|hepatosellüler|hepatoselüler|ultrason"],
      ["Koruyucu aşı yok; yeniden enfeksiyon olabilir", "aşısı yok|aşı yok|aşı bulunmuyor|aşısı bulunmuyor|yeniden enfekte|reenfeksiyon|tekrar enfekte"]
    ]},
  { id: "gas-masld", tr: "Metabolik disfonksiyonla ilişkili steatotik karaciğer hastalığı (MASLD)", en: "Metabolic dysfunction-associated steatotic liver disease", cat: "hep", lvl: 2,
    src: { k: [SH, SF], m: [
      ["EASL–EASD–EASO Clinical Practice Guidelines on the management of metabolic dysfunction-associated steatotic liver disease (MASLD). J Hepatol 2024", "https://doi.org/10.1016/j.jhep.2024.04.031"],
      ["A multisociety Delphi consensus statement on new fatty liver disease nomenclature. J Hepatol 2023", "https://doi.org/10.1016/j.jhep.2023.06.003"]] },
    c: [
      ["!Tanım: steatoz + en az bir kardiyometabolik risk faktörü", "kardiyometabolik|metabolik risk faktör|metabolik disfonksiyon"],
      ["Yeni adlandırma: NAFLD yerine MASLD, MASH; MetALD", "masld|mash|metald|nafld|nash|steatotik|yeni isim|yeni adlandır"],
      ["Risk grubunda arama: tip 2 diyabet, obezite", "tip 2 diyabet|tip iki diyabet|diyabetli|obezite|obez"],
      ["!Basamaklı fibroz değerlendirmesi: FIB-4, ardından elastografi", "fib 4|fib4|fib dört|elastografi|fibroscan|sertlik ölç|transient"],
      ["Prognozu fibroz belirler; en sık ölüm nedeni kardiyovasküler", "kardiyovasküler|kalp damar|fibroz evre|fibrozun derece"],
      ["!Yaşam tarzı: kilo verme, Akdeniz diyeti, egzersiz, alkolden kaçınma", "kilo ver|kilo kaybı|akdeniz|egzersiz|fiziksel aktivite"],
      ["İlaç: anlamlı fibrozlu MASH'te resmetirom; diyabet/obezitede GLP-1 agonisti", "resmetirom|glp 1|glp1|semaglutid|tirzepatid|inkretin|pioglitazon"],
      ["Obezitede bariyatrik (metabolik) cerrahi", "bariyatrik|metabolik cerrahi|obezite cerrahi"]
    ]},
  { id: "gas-asit-sbp", tr: "Sirozda asit ve spontan bakteriyel peritonit", en: "Ascites and spontaneous bacterial peritonitis in cirrhosis", cat: "sir", lvl: 2,
    src: { k: [SH, SF], m: [EASL_DEK,
      ["Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome: 2021 Practice Guidance by the AASLD. Hepatology 2021", "https://doi.org/10.1002/hep.31884"]] },
    c: [
      ["!Tanısal parasentez; SAAG ≥1,1 g/dL portal hipertansiyonu gösterir", "parasentez|saag|serum asit albümin|albümin gradiyent|1,1|bir virgül bir"],
      ["!SBP tanısı: asit sıvısında nötrofil >250/mm³", "250|iki yüz elli|nötrofil sayı|pmn|polimorf"],
      ["Sodyum kısıtlaması ve diüretik (spironolakton ± furosemid)", "spironolakton|aldakton|furosemid|tuz kısıt|sodyum kısıt|diüretik"],
      ["Büyük hacimli parasentezde albümin (≥5 L'de litre başına 8 g)", "litre başına|büyük hacim|5 litre|beş litre"],
      ["!SBP tedavisi: 3. kuşak sefalosporin + albümin (1. gün 1,5 g/kg, 3. gün 1 g/kg)", "sefotaksim|seftriakson|üçüncü kuşak|3 kuşak|1,5 gram|bir buçuk gram"],
      ["SBP sonrası sekonder profilaksi (norfloksasin/siprofloksasin)", "norfloksasin|siprofloksasin|kinolon|sekonder profilaksi|ikincil profilaksi"],
      ["Hepatorenal sendrom: terlipressin + albümin", "hepatorenal|hrs|terlipressin"],
      ["Dirençli asit: tekrarlayan parasentez, TIPS, nakil değerlendirmesi", "dirençli asit|refrakter asit|diüretiğe dirençli|diüretiğe yanıtsız"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "gas-varis-kanamasi", tr: "Portal hipertansiyon ve varis kanaması (Baveno VII)", en: "Portal hypertension and variceal bleeding", cat: "sir", lvl: 3,
    src: { k: [SH, SF], m: [BAVENO,
      ["AASLD Practice Guidance on risk stratification and management of portal hypertension and varices in cirrhosis. Hepatology 2024", "https://doi.org/10.1097/HEP.0000000000000647"]] },
    c: [
      ["!Klinik olarak anlamlı portal hipertansiyon: HVPG ≥10 mmHg; non-invaziv olarak elastografi + trombosit", "anlamlı portal hipertansiyon|klinik olarak anlamlı|cSPH|hvpg|hepatik venöz basınç|10 mmhg|on milimetre|elastografi|trombosit"],
      ["!Kompanse sirozda CSPH varsa dekompansasyonu önlemek için NSBB (tercihen karvedilol)", "karvedilol|propranolol|nonselektif beta|non selektif beta|nsbb|beta bloker"],
      ["!Akut kanamada hemen vazoaktif ilaç (terlipressin, somatostatin, oktreotid)", "terlipressin|somatostatin|oktreotid|vazoaktif"],
      ["Akut kanamada antibiyotik profilaksisi (seftriakson)", "seftriakson|antibiyotik profilaks|profilaktik antibiyotik"],
      ["12 saat içinde endoskopi, band ligasyonu", "12 saat|on iki saat|band ligasyon|bant ligasyon|ligasyon"],
      ["Kısıtlayıcı transfüzyon (fazla volüm portal basıncı artırır)", "kısıtlayıcı|restriktif|aşırı transfüzyon|aşırı sıvı|portal basıncı artır"],
      ["Yüksek riskli hastada 72 saat içinde preemptif TIPS", "preemptif|pre emptif|erken tips|72 saat|yetmiş iki saat"],
      ["Sekonder profilaksi: NSBB + band ligasyonu; gastrik variste siyanoakrilat", "sekonder profilaksi|ikincil profilaksi|siyanoakrilat|gastrik varis|fundal varis"]
    ]},
  { id: "gas-hepatik-ensefalopati", tr: "Hepatik ensefalopati", en: "Hepatic encephalopathy", cat: "sir", lvl: 3,
    src: { k: [SH, SF], m: [
      ["EASL Clinical Practice Guidelines on the management of hepatic encephalopathy. J Hepatol 2022", "https://doi.org/10.1016/j.jhep.2022.06.001"],
      ["Hepatic encephalopathy in chronic liver disease: 2014 Practice Guideline by AASLD and EASL. Hepatology 2014", "https://pubmed.ncbi.nlm.nih.gov/25015420/"]] },
    c: [
      ["!Sirozda/portosistemik şantta nöropsikiyatrik sendrom; amonyak merkezde", "amonyak|nöropsikiyatrik|portosistemik"],
      ["West Haven evreleri; minimal/örtük HE", "west haven|minimal hepatik|minimal ensefalopati|minimal ya da örtük|örtük|covert|gizli ensefalopati"],
      ["Asteriksis (flapping tremor)", "asteriks|flapping|çırpma"],
      ["!Tetikleyiciyi bul ve düzelt: enfeksiyon, kanama, kabızlık, elektrolit/diüretik, sedatif", "tetikleyici|tetikleyen|presipite|presipitan|kabızlık|benzodiazepin|sedatif|hipokalemi|dehidratasyon"],
      ["!İlk seçenek laktüloz (günde 2–3 yumuşak dışkı)", "laktüloz|laktuloz|laktitol"],
      ["Tekrarı önlemede laktüloza rifaksimin eklenir", "rifaksimin"],
      ["Protein kısıtlaması yapılmaz", "protein kısıtlanmaz|protein kısıtlaması yapılmaz|proteini kısıtlamıyoruz|protein kısıtlamıyoruz|protein kısıtlamayız|protein kısıtlaması önerilmez|protein kısıtlaması yok|yeterli protein"],
      ["Ayırıcı tanı: hipoglisemi, Wernicke, yapısal lezyon; normal amonyak tanıyı sorgulatır", "ayırıcı tanı|hipoglisemi|wernicke|normal amonyak|amonyak normal"],
      ["Evre 3–4'te yoğun bakım (aspirasyon riski)", "yoğun bakım|aspirasyon|hava yolu"]
    ]},
  { id: "gas-otoimmun-hepatit", tr: "Otoimmün hepatit", en: "Autoimmune hepatitis", cat: "oto", lvl: 3,
    src: { k: [SH, SF], m: [
      ["EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol 2025", "https://doi.org/10.1016/j.jhep.2025.03.017"],
      ["Diagnosis and Management of Autoimmune Hepatitis in Adults and Children: 2019 Practice Guidance and Guidelines From the AASLD. Hepatology 2020", "https://doi.org/10.1002/hep.31065"]] },
    c: [
      ["!Sıklıkla kadın; hipergamaglobulinemi (IgG yüksekliği)", "igg|ig g|hipergamaglobulin|gamaglobulin"],
      ["!Otoantikorlar: ANA, düz kas antikoru, anti-LKM1, anti-SLA", "antinükleer|anti nükleer|düz kas|asma|lkm|anti sla|otoantikor"],
      ["!Histoloji: interface hepatit, plazma hücreleri; biyopsi gerekli", "interface|ara yüz|arayüz|plazma hücre|rozet|emperipolez"],
      ["Basitleştirilmiş skor; viral, ilaç, alkol, Wilson dışlanır", "basitleştirilmiş|iaihg|skorlama sistemi|dışlanmalı|dışlamak gerek|dışlanması gerek"],
      ["!Tedavi: kortikosteroid (prednizolon/budesonid) + azatiyoprin", "prednizolon|prednizon|budesonid|kortikosteroid|azatiyopr"],
      ["EASL 2025: mikofenolat mofetil birinci basamak alternatif", "mikofenolat|mmf|mofetil"],
      ["Hedef tam biyokimyasal yanıt (ALT ve IgG normal); uzun süreli idame, kesilince nüks", "tam biyokimyasal|biyokimyasal yanıt|normalleş|idame|nüks|relaps"],
      ["Akut/fulminan başlangıç; PBC/PSK ile örtüşme", "örtüşme|overlap|akut başlang|fulminan|akut hepatit gibi"]
    ]},
  { id: "gas-hemokromatoz", tr: "Herediter hemokromatoz", en: "Hereditary hemochromatosis", cat: "oto", lvl: 3,
    src: { k: [SH, HA], m: [
      ["EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol 2022", "https://doi.org/10.1016/j.jhep.2022.03.033"],
      ["ACG Clinical Guideline: Hereditary Hemochromatosis. Am J Gastroenterol 2019", "https://doi.org/10.14309/ajg.0000000000000315"]] },
    c: [
      ["!HFE geni p.C282Y homozigotluğu; otozomal resesif", "hfe|c282y|c 282|homozig|otozomal resesif|resesif"],
      ["!Transferrin satürasyonu ve ferritin yüksekliği", "transferrin satür|transferin satür|satürasyon|ferritin|tsat"],
      ["Organ tutulumu: siroz/HCC, diyabet, kardiyomiyopati, hipogonadizm, artropati, deride bronzlaşma", "bronz|kardiyomiyopati|hipogonad|artropati|eklem|pigmentasyon|diyabet"],
      ["Karaciğer demirini MR ile ölçme", "manyetik rezonans|mr|emar|karaciğer demir|demir yükü|demir konsantrasyon"],
      ["!Tedavi: flebotomi; ferritin hedefi (indüksiyonda <50, idamede <100 µg/L)", "flebotomi|venesek|kan alma|kan alınması|kan aldır"],
      ["Flebotomi yapılamazsa demir şelatörü", "şelasyon|şelatör|deferoksamin|deferasiroks|deferipron"],
      ["Birinci derece akrabalarda tarama", "birinci derece|kardeş|aile tarama|ailesinde tarama|akraba"],
      ["Demir/C vitamini takviyesi ve çiğ deniz ürünlerinden (Vibrio) kaçınma", "c vitamini|vitamin c|vibrio|çiğ deniz|demir takviye|demir içeren"]
    ]},
  { id: "gas-pbc", tr: "Primer biliyer kolanjit (PBC)", en: "Primary biliary cholangitis", cat: "oto", lvl: 3,
    src: { k: [SH, SF], m: [
      ["EASL Clinical Practice Guidelines: The diagnosis and management of patients with primary biliary cholangitis. J Hepatol 2017", "https://doi.org/10.1016/j.jhep.2017.03.022"],
      ["Efficacy and Safety of Elafibranor in Primary Biliary Cholangitis (ELATIVE). N Engl J Med 2024", "https://doi.org/10.1056/NEJMoa2306185"]] },
    c: [
      ["!Orta yaş kadında küçük intrahepatik safra kanallarının otoimmün hasarı", "küçük safra kanal|intrahepatik safra|safra kanalcık|küçük çaplı safra|küçük intrahepatik"],
      ["!Tanı: ALP yüksekliği + antimitokondriyal antikor (AMA)", "antimitokondri|anti mitokondri|mitokondriyal|m2"],
      ["Belirtiler: yorgunluk, kaşıntı; Sjögren eşlik edebilir", "kaşıntı|prurit|yorgunluk|halsizlik|sjögren|sicca"],
      ["!Birinci basamak: ömür boyu ursodeoksikolik asit (UDCA)", "udca|ursodeoksikol|ursodiol|urso"],
      ["UDCA yanıtı değerlendirilir (ALP, bilirubin; yanıt ölçütleri)", "yanıt değerlendir|yanıtı değerlendir|yanıtını değerlendir|biyokimyasal yanıt|paris|globe|uk pbc|yetersiz yanıt"],
      ["İkinci basamak: PPAR agonistleri (elafibranor, seladelpar), fibratlar", "elafibranor|seladelpar|fibrat|bezafibrat|fenofibrat|ppar"],
      ["Osteoporoz ve yağda eriyen vitamin eksikliği takibi", "osteoporoz|kemik mineral|yağda eriyen|dexa"],
      ["İleri hastalıkta karaciğer nakli", "karaciğer nakl|transplant|nakil"]
    ]},
  { id: "gas-psk", tr: "Primer sklerozan kolanjit (PSK)", en: "Primary sclerosing cholangitis", cat: "oto", lvl: 3,
    src: { k: [SH, SF], m: [
      ["EASL Clinical Practice Guidelines on sclerosing cholangitis. J Hepatol 2022", "https://doi.org/10.1016/j.jhep.2022.05.011"],
      ["AASLD practice guidance on primary sclerosing cholangitis and cholangiocarcinoma. Hepatology 2023", "https://doi.org/10.1002/hep.32771"]] },
    c: [
      ["!İntra ve ekstrahepatik safra yollarında inflamasyon, fibroz ve multifokal darlıklar", "ekstrahepatik|büyük safra|safra yollarında darlık|multifokal darlık|darlık ve genişleme|darlıklar ve genişlemeler"],
      ["!Ülseratif kolitle güçlü ilişki; çoğunlukla genç erkek", "ülseratif|inflamatuvar bağırsak|iltihabi bağırsak"],
      ["!Tanı: MRKP'de boncuk dizisi görünümü", "mrcp|mrkp|boncuk|tespih|beaded|manyetik rezonans kolanjiyo"],
      ["AMA negatif; p-ANCA görülebilir; IgG4 ilişkili kolanjit dışlanmalı", "panca|p anca|anca|igg4|igg 4|ig g4"],
      ["Etkinliği kanıtlanmış ilaç tedavisi yok", "kanıtlanmış ilaç tedavisi yok|kanıtlanmış tedavi yok|etkili ilaç yok|etkinliği kanıtlanmış|yararı kanıtlanmamış|kanıtlanmamış"],
      ["!Kolanjiyokarsinom ve kolorektal kanser riski; kolonoskopik izlem, safra kesesi polibi", "kolanjiyokarsinom|kolanjiokarsinom|safra yolu kanser|kolorektal kanser|kolonoskopi|safra kesesi polip"],
      ["Dominant darlıkta ERCP ve fırça sitolojisi; bakteriyel kolanjit", "dominant|fırça sitoloji|brushing|ercp|erkp|bakteriyel kolanjit|akut kolanjit"],
      ["Tek kesin tedavi karaciğer nakli", "karaciğer nakl|nakil|transplant"]
    ]},
  { id: "gas-akut-karaciger-yetmezligi", tr: "Akut karaciğer yetmezliği", en: "Acute liver failure", cat: "sir", lvl: 3,
    src: { k: [SH, HA], m: [
      ["EASL Clinical Practical Guidelines on the management of acute (fulminant) liver failure. J Hepatol 2017", "https://doi.org/10.1016/j.jhep.2016.12.003"],
      ["ACG Clinical Guideline: Acute Liver Failure. Am J Gastroenterol 2023", "https://doi.org/10.14309/ajg.0000000000002340"]] },
    c: [
      ["!Tanım: önceden karaciğer hastalığı olmayan kişide koagülopati (INR ≥1,5) + ensefalopati", "inr|koagülopati|pıhtılaşma bozukluğu|karaciğer hastalığı olmayan|karaciğer hastalığı bulunmayan"],
      ["Zamanlama: hiperakut, akut, subakut (sarılıktan ensefalopatiye süre)", "hiperakut|subakut|sarılıktan ensefalopati|sarılık ile ensefalopati|sarılıktan sonra ensefalopati"],
      ["!Etiyoloji: parasetamol, viral (HAV, HEV, HBV), ilaç, otoimmün, Wilson, Budd-Chiari, gebelik", "parasetamol|asetaminofen|hepatit a|hepatit e|ilaca bağlı|ilaç hasar|wilson|budd|hellp"],
      ["!N-asetilsistein (parasetamol ve parasetamol dışı nedenlerde)", "asetilsistein|nac|n asetil"],
      ["Erken nakil merkezine sevk; King's College ölçütleri", "king|nakil merkez|transplant merkez|sevk"],
      ["Serebral ödem/kafa içi basınç artışı; yüksek amonyak", "serebral ödem|beyin ödem|kafa içi basınç|intrakraniyal|amonyak"],
      ["Kanama yoksa koagülopati rutin olarak düzeltilmez", "rutin düzelt|rutin olarak düzelt|koagülopati düzeltilmez|plazmayla düzeltilmez|plazma ile düzeltilmez|plazma verilmez|plazma vermiyoruz|rutin plazma|rutin olarak plazma"],
      ["Hipoglisemi, enfeksiyon, böbrek yetmezliği takibi; yoğun bakım", "hipoglisemi|yoğun bakım|renal replasman|crrt|hemodiyafiltrasyon"]
    ]}
]
});
})();
