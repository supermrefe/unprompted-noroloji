/* Endokrinoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve serviste/acilde en çok karşılaşılan endokrin tablolar. Kolay = diyabet (tip 1, tip 2),
   hipo/hipertiroidi ve osteoporoz; Orta = acil metabolik durumlar (DKA/HHS, hipoglisemi), nodül, Cushing, adrenal yetmezlik, hiperparatiroidi;
   Zor = endokrin hipertansiyon (primer aldosteronizm, feokromositoma), hipofiz adenomları ve MEN. Güncel ADA 2026, ATA, Endocrine Society
   ve Pituitary Society belgelerine dayanır. Kapsam dışı: hiponatremi/SIADH (nefroloji), tiroid kanseri cerrahisi (genel cerrahi). */
(function () {
const WI = "Williams Textbook of Endocrinology, 15. baskı (2024)";
const HA = "Harrison's Principles of Internal Medicine, 22. baskı (2025)";
const ADA_DX = ["2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026. Diabetes Care 2026", "https://doi.org/10.2337/dc26-S002"];
const ADA_PH = ["9. Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes—2026. Diabetes Care 2026", "https://doi.org/10.2337/dc26-S009"];
const ADA_HG = ["6. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes—2026. Diabetes Care 2026", "https://doi.org/10.2337/dc26-S006"];
const DKA24 = ["Umpierrez GE ve ark. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report (ADA/EASD/JBDS/AACE/DTS). Diabetes Care 2024", "https://doi.org/10.2337/dci24-0032"];
const ATA_HIPER = ["2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 2016", "https://doi.org/10.1089/thy.2016.0229"];
const ATA_NOD = ["2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid 2016", "https://doi.org/10.1089/thy.2015.0020"];

UP.add({ id: "endokrinoloji", subs: {
    dm: "Diyabet ve glukoz metabolizması",
    tir: "Tiroid hastalıkları",
    adr: "Adrenal hastalıkları",
    hip: "Hipofiz hastalıkları",
    kem: "Kemik ve kalsiyum metabolizması",
    tum: "Kalıtsal endokrin tümör sendromları"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "end-tip2-diyabet", tr: "Tip 2 diabetes mellitus: tanı ve tedavi", en: "Type 2 diabetes mellitus: diagnosis and treatment", cat: "dm", lvl: 1,
    src: { k: [WI, HA], m: [ADA_DX, ADA_PH] },
    c: [
      ["!Patogenez: insülin direnci ve göreceli insülin eksikliği", "insülin direnc|insüline direnç|insulin resistance|göreceli insülin|rölatif insülin|beta hücre yetersiz|beta hücre disfonksiyon|insülin salgısı yetersiz"],
      ["!Tanı ölçütleri: HbA1c ≥%6,5, AKŞ ≥126, OGTT 2. saat ≥200, semptomla rastgele ≥200 mg/dL", "6,5|6 5|altı buçuk|altı virgül beş|126|yüz yirmi altı|açlık plazma glukoz|açlık kan şeker|ogtt|oral glukoz tolerans|75 gram"],
      ["Belirgin hiperglisemi yoksa tanı ikinci bir testle doğrulanır; prediyabet", "iki ayrı|ikinci bir test|ikinci test|tekrar ölç|tekrarlanarak|teyit|doğrulan|prediyabet|pre diyabet|bozulmuş açlık|bozulmuş glukoz tolerans"],
      ["Yaşam tarzı: tıbbi beslenme tedavisi, egzersiz, kilo verme; kilo yönetimi ayrı bir hedef", "yaşam tarzı|beslenme|diyet|egzersiz|fiziksel aktivite|kilo ver|kilo kayb|kilo yönetim|zayıfla"],
      ["!İlk basamakta çoğunlukla metformin", "metformin|biguanid"],
      ["!ASKVH, kalp yetersizliği ya da KBH varsa HbA1c'den bağımsız SGLT2 inhibitörü veya GLP-1 agonisti", "sglt2|sglt 2|gliflozin|empagliflozin|dapagliflozin|glp 1|glp1|glp bir|semaglutid|liraglutid|dulaglutid|tirzepatid|inkretin mimetik"],
      ["Bireyselleştirilmiş hedef: çoğu erişkinde HbA1c <%7", "yüzde 7|yüzde yedi|%7|7 nin altı|yedinin altı|7 altı|a1c hedef|hba1c hedef|hedef hba1c|hedef a1c"],
      ["Komplikasyon taraması: retinopati, nefropati (albümin/kreatinin), nöropati ve ayak muayenesi", "retinopati|göz dibi|fundus|nefropati|albüminüri|albümin kreatinin|mikroalbümin|nöropati|ayak muayene|monofilaman|diyabetik ayak"]
    ]},
  { id: "end-tip1-diyabet", tr: "Tip 1 diabetes mellitus", en: "Type 1 diabetes mellitus", cat: "dm", lvl: 1,
    src: { k: [WI, HA], m: [
      ["Holt RIG ve ark. The Management of Type 1 Diabetes in Adults. A Consensus Report by the ADA and EASD. Diabetes Care 2021", "https://doi.org/10.2337/dci21-0043"],
      ADA_DX] },
    c: [
      ["!Otoimmün beta hücre yıkımı → mutlak insülin eksikliği", "otoimmün|oto immün|beta hücre yıkım|beta hücrelerin yıkım|beta hücreleri yık|mutlak insülin|insülin eksikliği mutlak|tamamen insülin"],
      ["!Adacık otoantikorları (GAD65, IA-2, ZnT8, insülin) ve düşük C-peptid", "gad|gad65|anti gad|ia 2|ia2|znt8|znt 8|otoantikor|oto antikor|adacık antikor|c peptid|c peptit|cpeptid"],
      ["Başvuru: poliüri, polidipsi, kilo kaybı; sıklıkla DKA ile", "poliüri|polidipsi|çok su iç|çok idrar|kilo kayb|kilo kaybet|ketoasidoz|dka"],
      ["Evreleme: otoantikor pozitif presemptomatik evre 1–2, evre 3 tanı ölçütlerini karşılayan klinik (genellikle semptomatik) hiperglisemi; riskli akrabalarda tarama", "evre 1|evre 2|evre 3|evre bir|evre iki|evre üç|presemptomatik|pre semptomatik|teplizumab"],
      ["!Tedavi: bazal-bolus yoğun insülin ya da insülin pompası", "bazal bolus|bazal ve bolus|yoğun insülin|çoklu doz|insülin pompa|pompa|otomatik insülin|kapalı döngü|hibrit kapalı"],
      ["Sürekli glukoz izlemi (CGM) ve karbonhidrat sayımı", "sürekli glukoz|sürekli glikoz|cgm|sensör|karbonhidrat sayım|karbonhidrat say|zamanın aralıkta|time in range"],
      ["Eşlik eden otoimmün hastalık taraması: tiroid, çölyak", "çölyak|çölyak hastal|otoimmün tiroid|hashimoto|tiroid fonksiyon|tiroid hastal"],
      ["Erişkinde LADA ve tip 2 ile karışabilir; balayı dönemi", "lada|erişkinin latent|latent otoimmün|balayı|bal ayı|honeymoon"]
    ]},
  { id: "end-hipotiroidi", tr: "Hipotiroidi", en: "Hypothyroidism", cat: "tir", lvl: 1,
    src: { k: [WI, HA], m: [
      ["Jonklaas J ve ark. Guidelines for the Treatment of Hypothyroidism: Prepared by the American Thyroid Association Task Force on Thyroid Hormone Replacement. Thyroid 2014", "https://doi.org/10.1089/thy.2014.0028"],
      ["Chaker L, Bianco AC, Jonklaas J, Peeters RP. Hypothyroidism. Lancet 2017", "https://doi.org/10.1016/S0140-6736(17)30703-1"]] },
    c: [
      ["!İyot yeterli bölgelerde en sık neden Hashimoto (kronik otoimmün) tiroiditi", "hashimoto|kronik otoimmün tiroidit|otoimmün tiroidit|lenfositik tiroidit|anti tpo|antitpo|tpo antikor|tiroid peroksidaz"],
      ["Diğer nedenler: tiroidektomi, radyoaktif iyot, ilaçlar (amiodaron, lityum), santral hipotiroidi", "tiroidektomi|radyoaktif iyot|amiodaron|lityum|santral hipotiroid|sekonder hipotiroid|hipofiz yetmez|iyot eksik"],
      ["Bulgular: yorgunluk, soğuk intoleransı, kilo alma, kabızlık, kuru cilt, bradikardi", "soğuk intolerans|soğuğa tahammül|üşüme|üşü|kabızlık|kuru cilt|cilt kuruluğu|bradikardi|kilo alma|kilo alı|saç dökül|miksödem"],
      ["!Tanı: yüksek TSH, düşük serbest T4 (subklinikte sT4 normal)", "tsh yüksek|tsh si yüksek|yüksek tsh|tsh yükse|tsh nin yüksel|st4 düşük|serbest t4 düşük|düşük serbest t4|t4 düşük|düşük t4"],
      ["!Tedavi: levotiroksin (T4) monoterapisi", "levotiroksin|levo tiroksin|tiroksin|l tiroksin|ltiroksin|t4 replasman|t4 monoterapi"],
      ["Aç karnına alınır; yaşlı ve koroner hastada düşük dozla başlanır; doz TSH ile ayarlanır", "aç karn|kahvaltıdan önce|yaşlılarda düşük|yaşlıda düşük|koroner hasta|koroner arter|düşük dozla başla|düşük doz başla|düşük dozda başla|tsh ile ayar|tsh ye göre|tsh takip|tsh izle"],
      ["Miksödem koması: ağır, acil tablo", "miksödem koma|miksödem krizi|myxedema coma"]
    ]},
  { id: "end-hipertiroidi-graves", tr: "Hipertiroidi ve Graves hastalığı", en: "Hyperthyroidism and Graves disease", cat: "tir", lvl: 1,
    src: { k: [WI, HA], m: [ATA_HIPER,
      ["Kahaly GJ ve ark. 2018 European Thyroid Association Guideline for the Management of Graves' Hyperthyroidism. Eur Thyroid J 2018", "https://doi.org/10.1159/000490384"]] },
    c: [
      ["!En sık neden Graves: TSH reseptör uyarıcı antikorları (TRAb)", "graves|tsh reseptör|trab|tsi|tiroid uyarıcı antikor|tiroid stimülan|reseptör antikor"],
      ["Diğer nedenler: toksik multinodüler guatr, toksik adenom, tiroidit", "toksik multinodüler|multinodüler guatr|toksik adenom|toksik nodül|plummer|tiroidit|subakut tiroidit|sessiz tiroidit"],
      ["Bulgular: çarpıntı, taşikardi/AF, kilo kaybı, sıcak intoleransı, tremor; Graves'e özgü oftalmopati ve pretibial miksödem", "çarpıntı|taşikardi|atriyal fibrilasyon|sıcak intolerans|sıcağa tahammül|tremor|titreme|terleme|oftalmopati|orbitopati|ekzoftalmus|göz kapağı|pretibial"],
      ["!Tanı: baskılanmış TSH, yüksek serbest T4/T3; ayırıcı tanıda TRAb ve sintigrafi", "tsh baskıla|baskılanmış tsh|tsh düşük|düşük tsh|tsh si düşük|supresse|serbest t3|serbest t4|st4|st3|sintigrafi|radyoaktif iyot uptake|uptake"],
      ["Semptomatik tedavi: beta bloker", "beta bloker|propranolol|atenolol|metoprolol"],
      ["!Antitiroid ilaçta ilk seçenek metimazol", "metimazol|tiamazol|karbimazol"],
      ["Gebeliğin ilk trimesterinde ve tiroid fırtınasında propiltiyourasil", "propiltiyourasil|ptu|propil tiyourasil"],
      ["İlaç yan etkisi: agranülositoz (ateş/boğaz ağrısında lökosit), hepatotoksisite", "agranülositoz|nötropeni|lökosit|boğaz ağrı|hepatotoks|karaciğer hasar"],
      ["Kesin tedavi: radyoaktif iyot ya da total tiroidektomi; aktif orta-ağır ya da görmeyi tehdit eden oftalmopatide RAİ'den kaçınılır (hafif aktifte steroid profilaksisiyle)", "radyoaktif iyot|rai|radyoiyot|tiroidektomi|tiroidin cerrahi|cerrahi olarak|ameliyat"]
    ]},
  { id: "end-osteoporoz", tr: "Postmenopozal osteoporoz", en: "Postmenopausal osteoporosis", cat: "kem", lvl: 1,
    src: { k: [WI, HA], m: [
      ["Eastell R ve ark. Pharmacological Management of Osteoporosis in Postmenopausal Women: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2019", "https://www.endocrine.org/clinical-practice-guidelines/osteoporosis-in-postmenopausal-women"],
      ["Camacho PM ve ark. AACE/ACE Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis—2020 Update. Endocr Pract 2020", "https://pro.aace.com/clinical-guidance/2020-clinical-practice-guidelines-diagnosis-and-treatment-postmenopausal"]] },
    c: [
      ["!Tanı: DXA'da T skoru ≤ -2,5 ya da kalça/vertebra frajilite kırığı (KMY'den bağımsız); osteopenide diğer frajilite kırıkları da tanı koydurur", "eksi 2,5|eksi 2 5|eksi iki buçuk|frajilite kırığı|düşük enerjili kırık"],
      ["!Frajilite kırıkları: vertebra, kalça, el bileği", "frajilite|frajil|düşük enerjili|vertebra kırığ|omurga kırığ|kompresyon kırığ|kalça kırığ|el bileği|distal radius"],
      ["Kırık riski hesaplama: FRAX", "frax|on yıllık kırık|10 yıllık kırık|kırık riski hesap"],
      ["Sekonder nedenler: glukokortikoid, hipertiroidi, hiperparatiroidi, hipogonadizm", "glukokortikoid|kortikosteroid|steroid kullan|hiperparatiroid|hipertiroid|hipogonad|sekonder osteoporoz|ikincil osteoporoz|sekonder neden"],
      ["Kalsiyum, D vitamini, egzersiz ve düşme önleme", "kalsiyum|d vitamin|vitamin d|düşme|egzersiz|yük bindiren"],
      ["!İlk basamak bisfosfonat (alendronat, zoledronik asit); alternatif denosumab", "bisfosfonat|bifosfonat|alendronat|risedronat|zoledron|ibandronat|denosumab"],
      ["Çok yüksek riskte anabolik tedavi: teriparatid, romosozumab", "teriparatid|abaloparatid|romosozumab|anabolik"],
      ["Yan etki/izlem: çene osteonekrozu, atipik femur kırığı; denosumab kesilince ardışık tedavi; 3–5 yılda yeniden değerlendirme", "çene osteonekroz|çenede osteonekroz|osteonekroz|atipik femur|ilaç tatili|ardışık tedavi|geri tepme|rebound|üç beş yıl|3 5 yıl|3 ila 5"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "end-dka-hhs", tr: "Diyabetik ketoasidoz ve hiperglisemik hiperozmolar durum", en: "Diabetic ketoacidosis and hyperglycemic hyperosmolar state", cat: "dm", lvl: 2,
    src: { k: [WI, HA], m: [DKA24, ADA_HG] },
    c: [
      ["!DKA tanısı (2024 uzlaşı): glukoz ≥200 mg/dL ya da bilinen diyabet + keton (β-hidroksibütirat ≥3 mmol/L) + asidoz (pH <7,3 ve/veya bikarbonat <18)", "200 ün üzer|200 mg|iki yüz mg|iki yüzün üzer|beta hidroksi|betahidroksi|hidroksibütirat|hidroksi bütirat|7,3|7 3|yedi virgül üç|yedi nokta üç|bikarbonat 18|18 in altı|on sekizin altı"],
      ["!HHS: glukoz ≥600 mg/dL, efektif ozmolalite >300, belirgin ketoasidoz yok", "600|altı yüz|hiperozmolar|hiper ozmolar|ozmolalite|ozmolarite|300 ün üzer|üç yüz"],
      ["Tetikleyiciler: enfeksiyon, insülin atlama, yeni tanı; SGLT2 inhibitörüyle öglisemik DKA", "enfeksiyon|insülin atla|insülini kes|insülini bırak|yeni tanı|ilk bulgu|öglisemik|euglisemik|ögliseml|normoglisemik|sglt2|sglt 2|gliflozin"],
      ["!Tedavi ilk adım: izotonik kristaloid ile sıvı replasmanı", "izotonik|serum fizyolojik|salin|kristaloid|dengeli kristaloid|ringer|sıvı replasman|sıvı tedavi|sıvı ver|hidrasyon"],
      ["!IV insülin infüzyonu; potasyum düşükse insülin öncesi potasyum yerine konur", "insülin infüzyon|iv insülin|intravenöz insülin|damardan insülin|potasyum|hipokalemi"],
      ["Glukoz düşünce dekstrozlu sıvı eklenir, keton/asidoz düzelene kadar insülin sürer", "dekstroz|dekstrozlu|glukozlu sıvı|şekerli sıvı|asidoz düzel|keton düzel|keton temizlen|ketonemi düzel"],
      ["Çözülme sonrası subkutan insüline geçişte IV insülinle örtüşme", "subkutan|cilt altı|deri altı|örtüş|overlap|bazal insülin"],
      ["Komplikasyonlar: hipokalemi, hipoglisemi, serebral ödem (özellikle çocukta), hızlı ozmolalite düşüşü", "serebral ödem|beyin ödem|osmotik|ozmotik demiyelin|yavaş düşür|yavaşça düşür|hızlı düşürmekten kaçın|hızlı düşüşten kaçın|hipoglisemi"]
    ]},
  { id: "end-hipoglisemi", tr: "Diyabette hipoglisemi", en: "Hypoglycemia in diabetes", cat: "dm", lvl: 2,
    src: { k: [WI, HA], m: [ADA_HG,
      ["McCall AL ve ark. Management of Individuals With Diabetes at High Risk for Hypoglycemia: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2023", "https://doi.org/10.1210/clinem/dgac596"]] },
    c: [
      ["!Düzeyler (ADA): düzey 1 <70 mg/dL, düzey 2 <54 mg/dL, düzey 3 başkasının yardımını gerektiren ağır olay", "70|yetmiş|54|elli dört|düzey 1|düzey 2|düzey 3|seviye 1|seviye 2|seviye 3|düzey bir|düzey iki|düzey üç|seviye bir|seviye iki|seviye üç"],
      ["Adrenerjik (titreme, terleme, çarpıntı, açlık) ve nöroglikopenik (konfüzyon, nöbet, koma) bulgular", "adrenerjik|otonom bulgu|otonom belirti|nöroglikopeni|nöroglikopenik|konfüzyon|bilinç bulanık"],
      ["Nedenler: insülin ve sülfonilüre, öğün atlama, egzersiz, alkol, böbrek yetmezliği", "sülfonilüre|glikazid|gliklazid|glimepirid|gliburid|öğün atla|yemek atla|alkol|böbrek yetmez"],
      ["!Bilinci açık hastada 15–20 g hızlı glukoz, 15 dakika sonra yeniden ölçüm", "15 20 gram|15 ile 20 gram|on beş yirmi gram|15 gram|on beş gram|20 gram|hızlı emilen|basit şeker|glukoz tablet|şekerli içecek|meyve suyu|15 dakika|on beş dakika|15 15"],
      ["!Bilinç bozuksa glukagon (intranazal/IM) ya da IV dekstroz", "glukagon|intranazal|nazal glukagon|iv dekstroz|intravenöz dekstroz|damardan dekstroz|yüzde 10 dekstroz|yüzde 50 dekstroz|dekstroz"],
      ["Hipoglisemi farkındalığının kaybı (tekrarlayan ataklar, otonom yanıtın körelmesi)", "farkındalık|farkında olma|fark etme|hissetme|unawareness|uyarıcı belirtiler kaybol"],
      ["Önleme: CGM, insülin analogları, tedavi rejiminin gözden geçirilmesi", "cgm|sürekli glukoz|sensör|alarm|analog|tedaviyi gözden|rejimi gözden|hedefleri gevşet|hedef gevşet"]
    ]},
  { id: "end-tiroid-nodulu", tr: "Tiroid nodülüne yaklaşım", en: "Thyroid nodule evaluation", cat: "tir", lvl: 2,
    src: { k: [WI, HA], m: [ATA_NOD,
      ["Tessler FN ve ark. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol 2017", "https://doi.org/10.1016/j.jacr.2017.01.046"]] },
    c: [
      ["Sık ve çoğunlukla benign; amaç kanseri ayırt etmek", "çoğu benign|çoğunluğu benign|büyük kısmı benign|iyi huylu"],
      ["!İlk test TSH; TSH düşükse sintigrafi (sıcak nodül nadiren malign)", "ilk test tsh|ilk olarak tsh|önce tsh|tsh bakıl|tsh ölç|tsh düşükse sintigrafi|tsh düşük ise sintigrafi|sıcak nodül|hiperfonksiyone|otonom nodül"],
      ["!Ultrasonografi ile riskli özellikler: hipoekojenite, mikrokalsifikasyon, düzensiz kenar, uzunluğu genişliğinden fazla", "hipoekoj|mikrokalsifik|düzensiz kenar|düzensiz sınır|taller than wide|uzunluğu genişliğ|boyu eninden|ekstratiroidal"],
      ["Risk sınıflaması: ATA örüntüleri ya da ACR TI-RADS (TR1–TR5)", "ti rads|tirads|ti rad|tr5|tr 5|tr4|tr 4|tr3|tr 3|ata örüntü|ata risk|yüksek şüpheli"],
      ["!İİAB endikasyonu boyut ve ultrason riskine göre (ör. TI-RADS TR5'te ≥1 cm)", "ince iğne|iiab|iia b|aspirasyon biyopsi|bir santim|1 santim|1 cm|bir cm"],
      ["Sitoloji: Bethesda sistemi; belirsiz sitolojide tekrar İİAB ya da moleküler test", "bethesda|moleküler test|belirsiz sitoloji|önemi belirsiz"],
      ["Benign nodülde ultrasonla izlem; malign/şüphelide cerrahi", "ultrasonla izle|ultrasonla takip|ultrason takib|ultrason ile takip|periyodik ultrason|tiroidektomi|lobektomi|ameliyat"]
    ]},
  { id: "end-cushing-sendromu", tr: "Cushing sendromu", en: "Cushing syndrome", cat: "adr", lvl: 2,
    src: { k: [WI, HA], m: [
      ["Nieman LK ve ark. The Diagnosis of Cushing's Syndrome: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2008", "https://doi.org/10.1210/jc.2008-0125"],
      ["Fleseriu M ve ark. Consensus on diagnosis and management of Cushing's disease: a guideline update. Lancet Diabetes Endocrinol 2021", "https://doi.org/10.1016/S2213-8587(21)00235-7"]] },
    c: [
      ["!En sık neden iyatrojenik (eksojen glukokortikoid); önce ilaç öyküsü", "iyatrojenik|eksojen|dışarıdan steroid|dışarıdan glukokortikoid|dışarıdan kortizon|ilaç öykü|steroid kullanım öykü|steroid öykü"],
      ["Ayırt ettirici bulgular: geniş (>1 cm) mor stria, proksimal kas güçsüzlüğü, kolay morarma, fasiyal pletore (aydede yüzü, buffalo hörgücü, santral obezite sık ama ayırt ettirici değil)", "mor stria|geniş stria|kırmızı mor stria|proksimal kas|proksimal güçsüz|kolay morar|ekimoz|pletor"],
      ["!Tarama testleri: 24 saatlik idrar serbest kortizolü, gece geç tükürük kortizolü, 1 mg deksametazon supresyon testi", "idrar serbest kortizol|serbest kortizol|24 saatlik idrar|tükürük kortizol|gece yarısı tükürük|gece geç|1 mg deksametazon|bir mg deksametazon|1 miligram deksametazon|bir miligram deksametazon|düşük doz deksametazon|gece deksametazon"],
      ["!Hiperkortizolizm doğrulanınca ACTH ile ayrım: ACTH bağımlı ya da bağımsız", "acth bağımlı|acth bağımsız|acth ye bağımlı|acth ye bağımsız|acth düzey|acth ölç|acth bak|plazma acth|acth yüksek|acth baskılan"],
      ["ACTH bağımlı endojen nedenlerin çoğu hipofiz adenomu (Cushing hastalığı); ektopik ACTH ayırımı için hipofiz MR ve IPSS", "cushing hastalığı|hipofiz adenom|kortikotrop|ektopik acth|ektopik|petrozal|ipss|hipofiz mr|hipofiz emar|küçük hücreli"],
      ["ACTH bağımsız: çoğunlukla adrenal adenom/karsinom (nadiren bilateral adrenal hiperplazi) → adrenal görüntüleme", "adrenal adenom|adrenal karsinom|adrenal kitle|adrenal tümör|adrenal bt|adrenal bete|sürrenal"],
      ["!Tedavi: nedene yönelik cerrahi (transsfenoidal adenomektomi ya da adrenalektomi); olmazsa medikal tedavi", "transsfenoidal|trans sfenoidal|adenomektomi|adrenalektomi|ketokonazol|metirapon|osilodrostat|pasireotid|mifepriston"],
      ["Komplikasyonlar: hipertansiyon, diyabet, osteoporoz, enfeksiyon, tromboz", "osteoporoz|tromboemboli|tromboz|enfeksiyon yatkın|enfeksiyona yatkın|hiperglisemi|glukoz intolerans"]
    ]},
  { id: "end-adrenal-yetmezlik", tr: "Adrenal yetmezlik ve adrenal kriz", en: "Adrenal insufficiency and adrenal crisis", cat: "adr", lvl: 2,
    src: { k: [WI, HA], m: [
      ["Bornstein SR ve ark. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2016", "https://www.endocrine.org/clinical-practice-guidelines/primary-adrenal-insufficiency"],
      ["Beuschlein F ve ark. European Society of Endocrinology and Endocrine Society Joint Clinical Guideline: Diagnosis and therapy of glucocorticoid-induced adrenal insufficiency. Eur J Endocrinol 2024", "https://doi.org/10.1093/ejendo/lvae029"]] },
    c: [
      ["!Primer (Addison; çoğunlukla otoimmün, tüberküloz) ve sekonder/tersiyer (hipofiz, en sık eksojen steroidin kesilmesi) ayrımı", "addison|primer adrenal|otoimmün adrenalit|tüberküloz|sekonder adrenal|santral adrenal|tersiyer|hipofiz yetmez|steroidin kesil|steroidi kes|steroid kesil|glukokortikoid kesil|glukokortikoide bağlı|uzun süreli steroid"],
      ["Bulgular: halsizlik, kilo kaybı, hipotansiyon, bulantı; primerde hiperpigmentasyon ve tuz isteği", "hiperpigmentasyon|ciltte koyulaş|deride koyulaş|bronzlaş|tuz isteğ|tuz aşer|tuzlu yeme|hipotansiyon|ortostatik"],
      ["Laboratuvar: hiponatremi, primerde hiperkalemi (mineralokortikoid eksikliği), hipoglisemi", "hiponatremi|hiperkalemi|mineralokortikoid eksik|aldosteron eksik|hipoglisemi"],
      ["!Tanı: düşük sabah kortizolü ve ACTH uyarı testi (250 µg; doruk kortizol <18 µg/dL yetmezlik; eşik ölçüm yöntemine özgü, yeni assaylarda daha düşük); primerde ACTH yüksek", "acth uyarı|acth stimülasyon|kosintropin|synacthen|sinakten|250 mikrogram|250 µg|18 mikrogram|18 µg|500 nanomol|sabah kortizol|acth yüksek"],
      ["!İdame: hidrokortizon (bölünmüş dozda) + primerde fludrokortizon", "hidrokortizon|fludrokortizon|prednizolon|mineralokortikoid replasman"],
      ["!Adrenal kriz: sonuç beklenmeden 100 mg IV hidrokortizon ve serum fizyolojik", "adrenal kriz|addison kriz|100 mg|yüz mg|100 miligram|yüz miligram|serum fizyolojik|izotonik"],
      ["Hasta eğitimi: hastalık günü kuralları (stres dozu), acil enjeksiyon kiti, steroid kartı", "hastalık günü|stres doz|dozu artır|dozu iki|dozunu iki|acil kit|enjeksiyon kiti|steroid kart|uyarı kart|bileklik"]
    ]},
  { id: "end-primer-hiperparatiroidi", tr: "Primer hiperparatiroidi ve hiperkalsemi", en: "Primary hyperparathyroidism and hypercalcemia", cat: "kem", lvl: 2,
    src: { k: [WI, HA], m: [
      ["Bilezikian JP ve ark. Evaluation and Management of Primary Hyperparathyroidism: Summary Statement and Guidelines from the Fifth International Workshop. J Bone Miner Res 2022", "https://doi.org/10.1002/jbmr.4677"],
      ["Bilezikian JP, Bandeira L, Khan A, Cusano NE. Hyperparathyroidism. Lancet 2018", "https://doi.org/10.1016/S0140-6736(17)31430-7"]] },
    c: [
      ["!Ayaktan hastada hiperkalseminin en sık nedeni (hastanede yatanda malignite)", "ayaktan hastada hiperkalseminin en sık|ayaktan hastada en sık|ayaktan hastalarda en sık|hiperkalseminin en sık nedeni primer|hiperkalseminin en sık nedeni hiperparatiroidi|en sık nedeni primer hiperparatiroidi"],
      ["Neden: çoğunlukla tek paratiroid adenomu; daha az hiperplazi (MEN), nadiren karsinom", "paratiroid adenom|tek adenom|soliter adenom|tek bir adenom|hiperplazi|dört bez|paratiroid karsinom"],
      ["!Tanı: yüksek kalsiyumla birlikte yüksek ya da uygunsuz normal PTH", "uygunsuz normal|uygunsuz şekilde normal|baskılanmamış pth|pth yüksek|pth de yüksek|pth si yüksek|yüksek pth|parathormon yüksek|yüksek parathormon"],
      ["Ayırıcı tanı: ailesel hipokalsiürik hiperkalsemi (idrar kalsiyum/kreatinin klirens oranı)", "hipokalsiürik|ailesel hipokalsiürik|fhh|kalsiyum kreatinin klirens|idrar kalsiyum|24 saatlik idrar kalsiyum"],
      ["Bulgular: taş, kemik, karın ağrısı, psikiyatrik (stones, bones, groans, moans); çoğu asemptomatik", "böbrek taş|nefrolitiyaz|nefrokalsinoz|kemik ağrı|osteitis fibroza|osteoporoz|pankreatit|peptik ülser|kabızlık|depresyon|stones|asemptomatik"],
      ["!Kesin tedavi paratiroidektomi; asemptomatikte ölçütler (kalsiyum >ÜSN+1 mg/dL, osteoporoz/vertebra kırığı, eGFR <60, taş, yaş <50)", "paratiroidektomi|paratiroid cerrahi|adenomun çıkarıl|adenomu çıkar|minimal invaziv|cerrahi endikasyon|ameliyat endikasyon"],
      ["Lokalizasyon: sestamibi sintigrafisi, ultrason, 4D-BT (tanı için değil, cerrahi planlama için)", "sestamibi|mibi|4d bt|4 boyutlu|dört boyutlu|lokalizasyon|yerini belirle|yerini göster"],
      ["Cerrahi olamayanda sinakalset ve bisfosfonat; akut ağır hiperkalsemide sıvı + kalsitonin/zoledronat", "sinakalset|kalsimimetik|bisfosfonat|zoledron|kalsitonin|sıvı yükle|serum fizyolojik|hidrasyon"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "end-primer-aldosteronizm", tr: "Primer aldosteronizm", en: "Primary aldosteronism", cat: "adr", lvl: 3,
    src: { k: [WI, HA], m: [
      ["Adler GK ve ark. Primary Aldosteronism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2025", "https://doi.org/10.1210/clinem/dgaf284"],
      ["Funder JW ve ark. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2016", "https://doi.org/10.1210/jc.2015-4061"]] },
    c: [
      ["!Endokrin hipertansiyonun en sık nedeni; renin bağımsız otonom aldosteron üretimi", "sekonder hipertansiyon|ikincil hipertansiyon|endokrin hipertansiyon|otonom aldosteron|aldosteron fazla|aldosteron üretim|aldosteron salgı|conn"],
      ["Nedenler: aldosteron üreten adenom (Conn) ve bilateral adrenal hiperplazi", "aldosteron üreten adenom|aldosteronoma|conn adenom|adrenal adenom|tek taraflı adenom|bilateral adrenal hiperplazi|bilateral hiperplazi|iki taraflı hiperplazi|idiyopatik hiperaldosteron"],
      ["Hipokalemi klasik bulgu ama çoğu hastada potasyum normal; dirençli hipertansiyonda düşünülür", "normokalemi|normal potasyum|potasyum normal|hipokalemi olmayabilir|hipokalemi şart değil|hipokalemi beklemek|hipokalemiyi beklemek|hipokalemi her zaman olmaz|hipokalemi her zaman görülmez|dirençli hipertansiyon|rezistan hipertansiyon"],
      ["!Tarama: aldosteron/renin oranı (baskılanmış renin + uygunsuz yüksek aldosteron); ES 2025: tüm hipertansiflerde tarama önerisi", "aldosteron renin oran|aldosteron/renin|arr|renin baskıla|baskılanmış renin|renin düşük|düşük renin|plazma renin|tüm hipertansif|bütün hipertansif|tüm hipertansiyon"],
      ["Doğrulama (salin infüzyon, kaptopril, oral tuz yükleme); ES 2025'te yüksek olasılıkta atlanabilir", "salin infüzyon|serum fizyolojik infüzyon|kaptopril|tuz yükleme|oral tuz|fludrokortizon supresyon|doğrulama test|konfirmasyon"],
      ["!Lateralizasyon: adrenal BT ve cerrahi aday için adrenal ven örneklemesi", "adrenal ven|venöz örnekleme|ven örnekleme|avs|adrenal bt|adrenal bete|lateralizasyon|tek taraflı mı"],
      ["!Tedavi: tek taraflıda laparoskopik adrenalektomi; bilateralde mineralokortikoid reseptör antagonisti", "adrenalektomi|spironolakton|eplerenon|mineralokortikoid reseptör antagonist|mra"]
    ]},
  { id: "end-feokromositoma", tr: "Feokromositoma ve paraganglioma", en: "Pheochromocytoma and paraganglioma", cat: "adr", lvl: 3,
    src: { k: [WI, HA], m: [
      ["Lenders JWM ve ark. Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2014", "https://doi.org/10.1210/jc.2014-1498"],
      ["Neumann HPH, Young WF Jr, Eng C. Pheochromocytoma and Paraganglioma. N Engl J Med 2019", null]] },
    c: [
      ["!Adrenal medulla (feokromositoma) ya da ekstraadrenal paragangliyonlardan kaynaklanan katekolamin salgılayan tümör", "adrenal medulla|kromaffin|katekolamin|paragangliom|ekstraadrenal|ekstra adrenal"],
      ["!Klasik triad: baş ağrısı, terleme, çarpıntı; paroksismal ya da sürekli hipertansiyon", "baş ağrı terleme|baş ağrısı çarpıntı|triad|klasik üçlü|paroksismal|atak tarzı|ataklar halinde|nöbetler halinde|hipertansif kriz"],
      ["!İlk test: plazma serbest ya da idrar fraksiyone metanefrinleri", "metanefrin|normetanefrin|metoksitiramin|metoksi tiramin"],
      ["Biyokimyasal tanıdan sonra görüntüleme: BT/MR, gerekirse fonksiyonel görüntüleme (Ga-68 DOTATATE, MIBG)", "biyokimyasal tanıdan sonra|biyokimya doğrulan|dotatate|mibg|pet|fonksiyonel görüntüleme|sonra görüntüleme|ardından görüntüleme"],
      ["!Ameliyat öncesi önce alfa blokaj (fenoksibenzamin/doksazosin), sonra gerekirse beta bloker", "alfa bloka|alfa bloker|alfa reseptör bloke|fenoksibenzamin|doksazosin|prazosin|önce alfa"],
      ["Alfa blokaj olmadan beta bloker verilmez (karşılanmamış alfa uyarısı)", "tek başına beta|beta bloker tek başına|karşılanmamış alfa|alfa olmadan|beta bloker önce verilmez|önce beta verilmez|beta bloker verilmez|beta blokerle başlanmaz"],
      ["Kalıtsal sendromlar ve genetik test: MEN2 (RET), VHL, NF1, SDHx", "men2|men 2|men iki|ret|vhl|von hippel|nf1|nörofibromatoz|sdh|sdhb|genetik test|genetik danış"],
      ["Tedavi laparoskopik adrenalektomi; postop hipotansiyon ve hipoglisemi izlenir", "adrenalektomi|laparoskopik|postoperatif hipotansiyon|ameliyat sonrası hipotansiyon|postop hipoglisemi"]
    ]},
  { id: "end-prolaktinoma", tr: "Prolaktinoma ve hiperprolaktinemi", en: "Prolactinoma and hyperprolactinemia", cat: "hip", lvl: 3,
    src: { k: [WI, HA], m: [
      ["Petersenn S ve ark. Diagnosis and management of prolactin-secreting pituitary adenomas: a Pituitary Society international Consensus Statement. Nat Rev Endocrinol 2023", "https://doi.org/10.1038/s41574-023-00886-5"],
      ["Melmed S ve ark. Diagnosis and Treatment of Hyperprolactinemia: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2011", "https://doi.org/10.1210/jc.2010-1692"]] },
    c: [
      ["!En sık fonksiyonel (hormon salgılayan) hipofiz adenomu; mikro (<1 cm) ve makroadenom", "en sık fonksiyonel|en sık hormon salgılayan|en sık görülen fonksiyonel|en sık salgılayan|mikroadenom|mikroprolaktinom|makroadenom|makroprolaktinom"],
      ["Kadında amenore-galaktore, infertilite; erkekte libido kaybı, erektil disfonksiyon; hipogonadizm", "amenore|galaktore|süt gelme|meme başından süt|infertilite|libido|erektil|hipogonad|adet düzensiz"],
      ["Kitle etkisi: baş ağrısı, bitemporal hemianopsi", "bitemporal|hemianopsi|görme alanı|optik kiazma|kiazma|kitle etkisi"],
      ["!Ayırıcı tanı: gebelik, ilaçlar (antipsikotik, metoklopramid), primer hipotiroidi, böbrek yetmezliği; makroprolaktin", "gebelik dışla|gebeliği dışla|gebelik testi|antipsikotik|risperidon|haloperidol|metoklopramid|dopamin antagonist|makroprolaktin"],
      ["Dev makroadenomda kanca (hook) etkisi: seyreltilmiş örnekle ölçüm", "kanca etki|hook|seyrelt|dilüsyon"],
      ["!Tanı: tek serum prolaktin ölçümü + hipofiz MR", "prolaktin düzey|serum prolaktin|prolaktin ölç|prolaktin yüksek|prolaktin bak|hipofiz mr|hipofiz emar|sella mr|sella emar|hipofiz manyetik"],
      ["!Birinci basamak dopamin agonisti: kabergolin (bromokriptine üstün)", "kabergolin|cabergolin|dopamin agonist"],
      ["Cerrahi (transsfenoidal): ilaca direnç/intolerans ya da seçilmiş hastalar", "transsfenoidal|trans sfenoidal|ilaca direnç|dopamin agonistine direnç|ilaca dirençli|tolere edeme"]
    ]},
  { id: "end-men-sendromlari", tr: "Multipl endokrin neoplazi (MEN) sendromları", en: "Multiple endocrine neoplasia syndromes", cat: "tum", lvl: 3,
    src: { k: [WI, HA], m: [
      ["Thakker RV ve ark. Clinical Practice Guidelines for Multiple Endocrine Neoplasia Type 1 (MEN1). J Clin Endocrinol Metab 2012", "https://doi.org/10.1210/jc.2012-1230"],
      ["Wells SA Jr ve ark. Revised American Thyroid Association Guidelines for the Management of Medullary Thyroid Carcinoma. Thyroid 2015", "https://doi.org/10.1089/thy.2014.0335"]] },
    c: [
      ["Otozomal dominant kalıtım; aile taraması ve genetik danışmanlık", "otozomal dominant|aile taraması|aile bireyleri|birinci derece akraba|genetik danışma|genetik test"],
      ["!MEN1: menin geni (MEN1); paratiroid, pankreas/duodenum nöroendokrin tümörü, hipofiz (3P)", "menin|men1|men 1|men bir|üç p|3p|paratiroid pankreas hipofiz|pankreas nöroendokrin|gastrinoma|insülinoma"],
      ["MEN1'de en sık ve ilk bulgu primer hiperparatiroidi (çok bezli hiperplazi)", "çok bezli|dört bez|multiglandüler|paratiroid hiperplazi|ilk bulgusu primer hiperparatiroidi|ilk bulgusu hiperparatiroidi|en sık bulgusu primer hiperparatiroidi|en sık bulgusu hiperparatiroidi"],
      ["!MEN2: RET proto-onkogeni aktive edici mutasyon", "ret|ret proto|proto onkogen|ret mutasyon|ret gen"],
      ["!MEN2A: medüller tiroid kanseri, feokromositoma, primer hiperparatiroidi; MEN2B: MTK, feokromositoma, mukozal nöromlar, marfanoid habitus", "medüller tiroid|medüller karsinom|mtk|mtc|mukozal nörom|marfanoid|men2a|men 2a|men iki a|men2b|men 2b|men iki b"],
      ["MTK belirteci kalsitonin (ve CEA)", "kalsitonin|cea"],
      ["!RET taşıyıcısında riske göre profilaktik tiroidektomi; öncesinde feokromositoma dışlanır", "profilaktik tiroidektomi|profilaktik olarak tiroid|profilaktik total|koruyucu tiroidektomi|önce feokromositoma|feokromositomayı dışla|feokromositoma dışlan"]
    ]},
  { id: "end-akromegali", tr: "Akromegali", en: "Acromegaly", cat: "hip", lvl: 3,
    src: { k: [WI, HA], m: [
      ["Katznelson L ve ark. Acromegaly: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2014", "https://doi.org/10.1210/jc.2014-2700"],
      ["Giustina A ve ark. Consensus on criteria for acromegaly diagnosis and remission. Pituitary 2024", "https://doi.org/10.1007/s11102-023-01360-1"]] },
    c: [
      ["!Neden: büyüme hormonu salgılayan hipofiz adenomu (somatotrop); çocukta epifizler kapanmadan gigantizm", "büyüme hormonu salgıla|bh salgıla|gh salgıla|somatotrop|gigantizm|devlik"],
      ["Akral ve yüz değişiklikleri: el-ayak büyümesi, prognatizm, makroglossi, kaba yüz", "akral|el ayak büyü|ellerde büyüme|ayakkabı numara|yüzük|prognati|makroglossi|dil büyü|kaba yüz|kaba yüz hatları|alın çıkıntı|diş aralık"],
      ["Sistemik: hipertansiyon, kardiyomiyopati, diyabet, uyku apnesi, artropati, kolon polipleri", "kardiyomiyopati|uyku apne|artropati|kolon polip|kolonoskopi|karpal tünel"],
      ["!Tarama testi: yaş ve cinsiyete göre yüksek IGF-1; rastgele GH tanı koydurmaz", "igf 1|igf1|igf bir|insülin benzeri büyüme|somatomedin"],
      ["!Doğrulama: OGTT'de GH'nin baskılanmaması (<1 µg/L'ye inmemesi)", "ogtt|oral glukoz|glukoz yükle|baskılanma|baskılanmıyor|baskılanmaz|supresse olm|bir mikrogram|1 mikrogram|1 µg"],
      ["Görüntüleme: hipofiz MR; görme alanı muayenesi", "hipofiz mr|hipofiz emar|sella mr|sella emar|görme alanı|bitemporal"],
      ["!Tedavi: birinci basamak transsfenoidal cerrahi; sonra somatostatin analoğu (oktreotid, lanreotid), pegvisomant, radyoterapi", "transsfenoidal|trans sfenoidal|somatostatin analo|oktreotid|lanreotid|pasireotid|pegvisomant|kabergolin|radyoterapi|radyocerrahi"]
    ]}
]
});
})();
