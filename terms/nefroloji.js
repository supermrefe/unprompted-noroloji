/* Nefroloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve serviste/acilde her hekimin karşılaştığı böbrek konuları; güncel KDIGO kılavuzlarına
   (AKI 2012, KBH 2024, glomerüler hastalıklar 2021, lupus nefriti 2024, diyabet-KBH 2022, IgAN 2025, ADPKD 2025) ve
   Avrupa hiponatremi kılavuzuna (2014) dayanır. Kolay = AKI/KBH/nefrotik-nefritik/hiperkalemi/diyaliz endikasyonu çekirdeği;
   Orta = elektrolit-asit baz ve sık glomerülopatiler; Zor = membranöz, FSGS, lupus nefriti, ADPKD, RTA. Hiperkalsemi endokrinolojiye bırakıldı. */
(function () {
const BR = "Brenner & Rector's The Kidney, 12. baskı (2026)";
const CCN = "Comprehensive Clinical Nephrology (Johnson, Floege, Tonelli), 7. baskı (2023)";
const HA = "Harrison's Principles of Internal Medicine, 22. baskı (2025)";
const AKI = ["KDIGO clinical practice guidelines for acute kidney injury (Khwaja A). Nephron Clin Pract 2012", "https://pubmed.ncbi.nlm.nih.gov/22890468/"];
const AKIPRIM = ["Kellum JA ve ark. Acute kidney injury. Nat Rev Dis Primers 2021", "https://doi.org/10.1038/s41572-021-00284-z"];
const CKD = ["KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int 2024", "https://doi.org/10.1016/j.kint.2023.10.018"];
const GN = ["KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021", "https://doi.org/10.1016/j.kint.2021.05.021"];
const KRAUT = ["Kraut JA, Madias NE. Metabolic acidosis: pathophysiology, diagnosis and management. Nat Rev Nephrol 2010", "https://doi.org/10.1038/nrneph.2010.33"];

UP.add({ id: "nefroloji", subs: {
    aki: "Akut böbrek hasarı ve böbrek replasman tedavisi",
    kbh: "Kronik böbrek hastalığı",
    glom: "Glomerüler hastalıklar",
    elek: "Sıvı-elektrolit ve asit-baz",
    kal: "Kistik ve tübüler hastalıklar"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "nef-akut-bobrek-hasari", tr: "Akut böbrek hasarı (KDIGO tanım ve evreleme)", en: "Acute kidney injury", cat: "aki", lvl: 1,
    src: { k: [BR, HA], m: [AKI, AKIPRIM] },
    c: [
      ["!KDIGO tanımı: 48 saatte kreatininde ≥0,3 mg/dL ya da 7 günde ≥1,5 kat artış ya da idrar <0,5 mL/kg/saat 6 saat", "0,3|sıfır virgül üç|48 saat|kırk sekiz saat|1,5 kat|bir buçuk kat|1,5 katına|bir buçuk katına|0,5 ml|sıfır virgül beş"],
      ["!Kreatinin ve idrar miktarına göre üç evre (KDIGO evre 1–3)", "evre 3|evre üç|üç evre|evre 1|evre bir|evreleme|evrele|üçüncü evre|üç kat"],
      ["!Prerenal, intrarenal (renal) ve postrenal nedenler", "prerenal|pre renal|postrenal|post renal|intrarenal|intrinsik|renal parankim"],
      ["İntrinsik nedenlerin başında akut tübüler nekroz (çamur kahvesi granüler silendirler)", "tübüler nekroz|atn|granüler silendir|çamur kahvesi|muddy brown|kahverengi silendir"],
      ["Prerenal ile ATN ayrımında idrar sodyumu / FENa", "fena|fe na|fraksiyonel sodyum|sodyum ekskresyon|idrar sodyum|idrarda sodyum"],
      ["Postrenal neden için ultrasonografi (hidronefroz)", "ultrason|usg|hidronefroz|obstrüksiyon|tıkanıklık|mesane sonda|üriner kateter"],
      ["Nefrotoksik ilaçları kes, volüm durumunu düzelt, ilaç dozlarını ayarla", "nefrotoksik|nsaid|nsaii|non steroid|aminoglikozid|doz ayarla|dozlarını ayarla|volüm durum|volümünü düzelt|sıvı durum"],
      ["Konservatif tedaviye dirençli komplikasyonlarda böbrek replasman tedavisi", "diyaliz|replasman|hemodiyaliz"]
    ]},
  { id: "nef-kronik-bobrek-hastaligi", tr: "Kronik böbrek hastalığı: tanım, evreleme ve yönetim (KDIGO 2024)", en: "Chronic kidney disease", cat: "kbh", lvl: 1,
    src: { k: [BR, CCN], m: [CKD,
      ["Kalantar-Zadeh K ve ark. Chronic kidney disease. Lancet 2021", "https://doi.org/10.1016/S0140-6736(21)00519-5"]] },
    c: [
      ["!Tanım: 3 aydan uzun süren böbrek yapı ya da işlev bozukluğu (eGFR <60 ya da albüminüri)", "3 ay|üç ay|üç aydan|3 aydan|90 gün|doksan gün"],
      ["!Neden-GFR-albüminüri (CGA) sınıflaması: G1–G5 ve A1–A3", "cga|g1|g2|g3a|g3b|g4|g5|a1|a2|a3|gfr kategori|albüminüri kategori|ısı harita|renkli tablo"],
      ["eGFR kreatinin (gerekirse sistatin C) ile hesaplanır", "sistatin|ckd epi|ckdepi|kreatinin bazlı|kreatinine dayalı"],
      ["Albüminüri: idrar albümin/kreatinin oranı", "albümin kreatinin|albümin/kreatinin|acr|uacr|albümin kreatinin oranı|spot idrar"],
      ["!Progresyonu yavaşlatma: RAS blokajı ve SGLT2 inhibitörü", "sglt2|sglt 2|gliflozin|dapagliflozin|empagliflozin|ace inhibit|arb|anjiyotensin reseptör|ras bloka|ras blokaj|renin anjiyotensin"],
      ["En sık nedenler: diyabet ve hipertansiyon", "diyabet ve hipertansiyon|hipertansiyon ve diyabet|diyabetik böbrek|diyabetik nefropati|hipertansif nefro"],
      ["Komplikasyonlar: anemi, mineral-kemik bozukluğu, metabolik asidoz, hiperkalemi", "anemi|eritropoe|hiperfosfatemi|fosfor|paratiroid|pth|mineral kemik|ckd mbd|renal osteodistrofi"],
      ["Risk denklemiyle (KFRE) nefroloji sevki ve böbrek replasman tedavisine hazırlık", "kfre|risk denklem|nefrolog|nefroloji sevk|transplant|böbrek nakli|replasman tedavisine hazır|fistül"]
    ]},
  { id: "nef-nefrotik-nefritik", tr: "Nefrotik ve nefritik sendrom ayrımı", en: "Nephrotic versus nephritic syndrome", cat: "glom", lvl: 1,
    src: { k: [BR, CCN], m: [
      ["Hull RP, Goldsmith DJA. Nephrotic syndrome in adults. BMJ 2008", "https://doi.org/10.1136/bmj.39576.709711.80"],
      ["Chadban SJ, Atkins RC. Glomerulonephritis. Lancet 2005", "https://doi.org/10.1016/S0140-6736(05)66583-X"]] },
    c: [
      ["!Nefrotik: günde >3,5 g proteinüri ve hipoalbüminemi", "3,5 gram|üç buçuk gram|3,5 g|ağır proteinüri|masif proteinüri|nefrotik düzey|hipoalbümin|albümin düşük|albüminin düşmesi"],
      ["Nefrotikte ödem ve hiperlipidemi, lipidüri", "hiperlipidemi|hiperkolesterol|lipidüri|yağ cisim|oval yağ|maltez|hiperlipidem"],
      ["!Nefritik: glomerüler hematüri (dismorfik eritrosit, eritrosit silendiri), hipertansiyon, oligüri", "eritrosit silendir|dismorfik|kola renkli|çay renkli|hematüri|oligüri|aktif sediment"],
      ["Nefrotik nedenler: minimal değişiklik, FSGS, membranöz, diyabet, amiloidoz", "minimal değişiklik|minimal lezyon|fsgs|fokal segmental|membranöz|amiloid"],
      ["!Nefritik nedenler: poststreptokokal GN, IgA nefropatisi, ANCA/anti-GBM (hızlı ilerleyen GN), lupus", "poststreptokok|post streptokok|streptokok sonrası|iga nefropati|anca|anti gbm|goodpasture|hızlı ilerleyen|rpgn|kresent|hilal"],
      ["Nefrotik komplikasyon: tromboz (renal ven), enfeksiyon", "renal ven|tromboz|tromboemboli|hiperkoagül|antitrombin"],
      ["Kompleman düzeyi ayırıcı tanıda yol gösterir", "kompleman|c3|hipokomplemanemi"],
      ["Erişkinde tanı için böbrek biyopsisi", "biyopsi"]
    ]},
  { id: "nef-hiperkalemi", tr: "Hiperkalemi ve acil tedavisi", en: "Hyperkalaemia", cat: "elek", lvl: 1,
    src: { k: [BR, HA], m: [
      ["Clase CM ve ark. Potassium homeostasis and management of dyskalemia in kidney diseases: conclusions from a KDIGO Controversies Conference. Kidney Int 2020", "https://doi.org/10.1016/j.kint.2019.09.018"],
      ["UK Kidney Association. Clinical Practice Guideline: Treatment of Acute Hyperkalaemia in Adults. UKKA 2023", "https://www.renal.org/sites/renal.org/files/FINAL%20VERSION%20-%20UKKA%20CLINICAL%20PRACTICE%20GUIDELINE%20-%20MANAGEMENT%20OF%20HYPERKALAEMIA%20IN%20ADULTS%20-%20191223.pdf"]] },
    c: [
      ["!EKG: sivri T, PR uzaması, P kaybı, QRS genişlemesi, sinüs dalgası", "sivri t|uzun sivri|çadır|tented|qrs genişle|geniş qrs|qrs in genişle|sinüs dalga|sinüzoidal|p dalgası kayb|p dalgası kaybol|p dalgasının kaybol|p dalgası düzleş|pr uza"],
      ["!IV kalsiyum glukonat: miyokard membranını stabilize eder, potasyumu düşürmez", "kalsiyum glukonat|kalsiyum klorür|membran stabil|membranı stabil|kalbi koru|miyokardı koru"],
      ["!İnsülin ve glukoz: potasyumu hücre içine kaydırır", "insülin|hücre içine|hücreye sok|intrasellüler"],
      ["Salbutamol yalnızca ek tedavi", "salbutamol|beta 2 agonist|beta agonist|nebül"],
      ["Potasyumu vücuttan uzaklaştırma: potasyum bağlayıcılar, diüretik, diyaliz", "zirkonyum|patiromer|potasyum bağlayıcı|bağlayıcı|kayeksalat|kalsiyum rezonyum|hemodiyaliz|diyaliz"],
      ["Nedenler: böbrek yetmezliği ve ilaçlar (ACEİ/ARB, MRA, potasyum tutucu, trimetoprim)", "spironolakton|potasyum tutucu|ace inhibit|arb|trimetoprim|mineralokortikoid|hipoaldosteron|böbrek yetmez"],
      ["Psödohiperkalemi (hemolizli örnek) dışlanır", "psödo|hemoliz|yalancı"],
      ["Ciddiyet: ≥6,5 mmol/L ya da EKG değişikliği acil (UKKA)", "6,5|altı buçuk|ciddi hiperkalemi|ağır hiperkalemi|şiddetli hiperkalemi"]
    ]},
  { id: "nef-diyaliz-endikasyonlari", tr: "Akut böbrek replasman tedavisi (diyaliz) endikasyonları", en: "Indications for acute kidney replacement therapy", cat: "aki", lvl: 1,
    src: { k: [BR, CCN], m: [AKI,
      ["STARRT-AKI Investigators. Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury. N Engl J Med 2020", "https://doi.org/10.1056/NEJMoa2000741"]] },
    c: [
      ["!Tedaviye dirençli hiperkalemi", "dirençli hiperkalemi|tedaviye dirençli hiperkalemi|yanıt vermeyen hiperkalemi|ciddi hiperkalemi|ağır hiperkalemi|hayatı tehdit eden hiperkalemi|dirençli potasyum yüksekliği"],
      ["!Tedaviye dirençli ağır metabolik asidoz", "dirençli asidoz|dirençli metabolik asidoz|ağır metabolik asidoz|ağır asidoz|ağır asidemi|yanıt vermeyen asidoz|yanıt vermeyen metabolik asidoz"],
      ["!Diüretiğe yanıtsız volüm yükü / akciğer ödemi", "akciğer ödemi|pulmoner ödem|volüm yükü|sıvı yükü|aşırı sıvı|overload"],
      ["Üremik komplikasyonlar: perikardit, ensefalopati, kanama", "perikardit|ensefalopati|üremik kanama|üremi"],
      ["Diyalizle uzaklaştırılabilen zehirlenmeler: lityum, metanol, etilen glikol, salisilat", "lityum|etilen glikol|salisilat|toksik alkol|intoksikasyon|diyalizle uzaklaştırıl"],
      ["AEIOU akronimi", "aeiou|a e i o u"],
      ["Mutlak endikasyon yoksa erken başlamanın yararı yok (STARRT-AKI)", "starrt|erken başlamanın yararı|erken başlamanın üstünlüğü|erken başlamanın faydası|hızlandırılmış|akiki"],
      ["Hemodinamik instabilitede sürekli böbrek replasman tedavisi (CRRT)", "sürekli renal|crrt|sürekli böbrek|sürekli venövenöz|cvvh|hemodinamik instab|hemodinamisi bozuk|aralıklı hemodiyaliz"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "nef-hiponatremi", tr: "Hiponatremi: tanısal yaklaşım ve tedavi", en: "Hyponatraemia", cat: "elek", lvl: 2,
    src: { k: [BR, HA], m: [
      ["Spasovski G ve ark. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol 2014", "https://doi.org/10.1530/EJE-13-1020"],
      ["Adrogué HJ, Tucker BM, Madias NE. Diagnosis and Management of Hyponatremia: A Review. JAMA 2022", "https://doi.org/10.1001/jama.2022.11176"]] },
    c: [
      ["!Serum sodyumu <135 mmol/L; önce serum osmolalitesiyle hipotonik olduğu doğrulanır", "135|yüz otuz beş|osmolalite|ozmolalite|osmolarite|ozmolarite|hipotonik|psödohiponatremi|hiperglisemi"],
      ["!Volüm durumuna göre hipovolemik, övolemik, hipervolemik", "hipovolemik|övolemik|euvolemik|övolemi|hipervolemik|volüm durum"],
      ["İdrar osmolalitesi ve idrar sodyumu ayırıcı tanıda", "idrar osmol|idrar ozmol|idrar sodyum|idrarda sodyum|idrar na"],
      ["SIADH: övolemik, idrar konsantre, idrar sodyumu yüksek", "siadh|uygunsuz adh|uygunsuz antidiüretik|uygunsuz vazopressin|uygunsuz antidiürez"],
      ["!Ağır semptomatik hastada %3 hipertonik salin bolus", "hipertonik|yüzde 3|yüzde üç|3 lük|üçlük"],
      ["!Aşırı hızlı düzeltme osmotik demiyelinizasyon yapar; ilk 24 saatte 10 mmol/L sınırı", "demiyelin|santral pontin|pontin miyelinoliz|10 mmol|on mmol|10 milimol|on milimol|aşırı hızlı düzelt|çok hızlı düzelt|hızlı düzeltmeden kaçın"],
      ["Semptomlar: bulantı, konfüzyon, nöbet, koma (beyin ödemi)", "konfüzyon|nöbet|koma|beyin ödemi|serebral ödem|bilinç bulanık"],
      ["Kronik/hafif olguda neden tedavisi, sıvı kısıtlaması, üre ya da vaptan", "sıvı kısıt|tolvaptan|vaptan|oral üre|üre tablet|üre kullan"]
    ]},
  { id: "nef-metabolik-asidoz", tr: "Metabolik asidoz ve anyon açığı", en: "Metabolic acidosis and the anion gap", cat: "elek", lvl: 2,
    src: { k: [BR, HA], m: [
      ["Berend K, de Vries APJ, Gans ROB. Physiological Approach to Assessment of Acid–Base Disturbances. N Engl J Med 2014", "https://doi.org/10.1056/NEJMra1003327"],
      KRAUT] },
    c: [
      ["!Anyon açığı = Na − (Cl + HCO3)", "anyon açığı|anyon gap|anion gap|anyon acig|sodyumdan klor|klor ve bikarbonat|klor artı bikarbonat"],
      ["!Artmış anyon açıklı asidoz: laktik asidoz, ketoasidoz, üremi, toksik alkoller, salisilat", "laktik|ketoasidoz|keto asidoz|mudpiles|goldmark|etilen glikol|salisilat|toksik alkol"],
      ["!Normal anyon açıklı (hiperkloremik) asidoz: diyare, renal tübüler asidoz, aşırı salin", "hiperkloremik|normal anyon|anyon açığı normal|diyare|ishal|tübüler asidoz"],
      ["Hipoalbüminemide anyon açığı albümine göre düzeltilir", "albümine göre|albümin düzelt|albüminle düzelt|düzeltilmiş anyon|hipoalbümin|albümin düşük"],
      ["Beklenen solunumsal kompanzasyon: Winter formülü", "winter|1,5 çarpı|bir buçuk çarpı|beklenen pco2|beklenen karbondioksit|kompanzasyon|kompanse"],
      ["Delta oranı (delta-delta) ile eşlik eden ikinci bozukluk", "delta"],
      ["Ozmolal açık toksik alkolü düşündürür", "ozmolal açık|osmolal açık|osmolar gap|ozmolar gap|osmolal gap|ozmolar açık|osmolar açık"],
      ["Normal anyon açıklıda idrar anyon açığı (renal ve renal dışı ayrımı)", "idrar anyon"],
      ["Tedavi altta yatan nedene; bikarbonat seçilmiş durumlarda", "altta yatan|nedene yönelik|sodyum bikarbonat|bikarbonat verilmesi|bikarbonat tedavi|alkali tedavi"]
    ]},
  { id: "nef-diyabetik-bobrek", tr: "Diyabetik böbrek hastalığı (KDIGO 2022)", en: "Diabetic kidney disease", cat: "kbh", lvl: 2,
    src: { k: [BR, CCN], m: [
      ["KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int 2022", "https://doi.org/10.1016/j.kint.2022.06.008"],
      ["Bakris GL ve ark. Effect of Finerenone on Chronic Kidney Disease Outcomes in Type 2 Diabetes (FIDELIO-DKD). N Engl J Med 2020", "https://doi.org/10.1056/NEJMoa2025845"]] },
    c: [
      ["!Tarama: yılda bir idrar albümin/kreatinin oranı ve eGFR", "albümin kreatinin|albümin/kreatinin|acr|uacr|mikroalbümin|yılda bir|yıllık tara"],
      ["Patoloji: GBM kalınlaşması, mezangial genişleme, Kimmelstiel-Wilson nodülleri", "kimmelstiel|nodüler glomeruloskleroz|mezangial genişle|mezanjiyal genişle|mezangiyal genişle|bazal membran kalınlaş|bazal membranın kalınlaş"],
      ["!Albüminüride maksimum tolere dozda ACEİ ya da ARB", "ace inhibit|arb|anjiyotensin|ras bloka|ras blokaj|renin anjiyotensin"],
      ["!Tip 2 diyabet ve KBH'de SGLT2 inhibitörü (eGFR ≥20)", "sglt2|sglt 2|gliflozin"],
      ["Rezidüel albüminüride steroid olmayan MRA: finerenon", "finerenon|steroid olmayan mineralokortikoid|nonsteroidal mineralokortikoid|steroidal olmayan"],
      ["Ek glisemik kontrol ve kardiyovasküler koruma için GLP-1 reseptör agonisti", "glp 1|glp1|semaglutid|liraglutid|dulaglutid"],
      ["Son dönem böbrek hastalığı ve diyalize girişin en sık nedeni", "diyalize girişin en sık|diyalizin en sık|en sık diyaliz|son dönem böbrek|kronik böbrek hastalığının en sık|kbh nin en sık|böbrek yetmezliğinin en sık"],
      ["Retinopati yoksa ya da tablo atipikse başka neden (biyopsi) düşünülür", "retinopatisi olmayan|retinopati yoksa|retinopati olmadan|retinopatinin olmaması|atipik|aktif sediment"],
      ["Seyir: önce albüminüri, ardından GFR kaybı", "önce albüminüri|albüminüriyle başlar|albüminüri ile başlar|sonra gfr|gfr kaybı|gfr azal|hiperfiltrasyon"]
    ]},
  { id: "nef-iga-nefropatisi", tr: "IgA nefropatisi (KDIGO 2025)", en: "IgA nephropathy", cat: "glom", lvl: 2,
    src: { k: [BR, CCN], m: [
      ["KDIGO 2025 Clinical Practice Guideline for the Management of Immunoglobulin A Nephropathy (IgAN) and Immunoglobulin A Vasculitis (IgAV). Kidney Int 2025", "https://doi.org/10.1016/j.kint.2025.04.004"],
      ["Stamellou E ve ark. IgA nephropathy. Nat Rev Dis Primers 2023", "https://doi.org/10.1038/s41572-023-00476-9"]] },
    c: [
      ["!Dünyada en sık primer glomerülonefrit", "en sık primer|en sık görülen primer|dünyada en sık|en yaygın primer|en sık glomerülonefrit|en sık görülen glomerülonefrit"],
      ["!Sinfarenjitik makroskopik hematüri: üst solunum yolu enfeksiyonuyla eş zamanlı", "sinfarenj|sinfaring|enfeksiyon eş zamanlı|enfeksiyon eşzamanlı|eş zamanlı hematüri|eşzamanlı hematüri|enfeksiyonla aynı anda|enfeksiyonla birlikte|enfeksiyon sırasında"],
      ["!Tanı biyopsiyle: mezangial IgA birikimi; Oxford MEST-C skoru", "mezangial iga|mezanjiyal iga|mezangiyal iga|iga birikim|iga depozit|oxford|mest"],
      ["Patogenez: galaktozdan yoksun IgA1 ve ona karşı otoantikorlar", "galaktoz|gd iga1|gdiga1|dört vuruş|four hit|otoantikor"],
      ["KDIGO 2025 hedefi: proteinüri <0,5 g/gün, ideali <0,3 g/gün", "0,5 gram|yarım gram|0,5 g|0,3 gram|0,3 g|sıfır virgül beş|sıfır virgül üç"],
      ["Destekleyici tedavi: maksimum RAS blokajı, SGLT2 inhibitörü, sparsentan; kan basıncı ve tuz kontrolü", "sparsentan|endotelin|sglt2|sglt 2|gliflozin|ace inhibit|arb|ras bloka|ras blokaj"],
      ["İlerleme riski sürüyorsa hedefe yönelik salınımlı budesonid ya da sistemik glukokortikoid", "budesonid|nefecon|glukokortikoid|kortikosteroid"],
      ["IgA vasküliti (Henoch-Schönlein purpurası) ile ilişkili spektrum", "henoch|schönlein|schonlein|iga vaskülit|purpura"]
    ]},
  { id: "nef-kontrast-aki", tr: "Kontrastla ilişkili akut böbrek hasarı", en: "Contrast-associated acute kidney injury", cat: "aki", lvl: 2,
    src: { k: [BR, CCN], m: [
      ["Davenport MS ve ark. Use of Intravenous Iodinated Contrast Media in Patients with Kidney Disease: Consensus Statements from the ACR and the NKF. Radiology 2020", "https://doi.org/10.1148/radiol.2019192094"],
      ["van der Molen AJ ve ark. Post-contrast acute kidney injury – Part 1: Definition, clinical features, incidence, role of contrast medium and risk factors (ESUR). Eur Radiol 2018", "https://doi.org/10.1007/s00330-017-5246-5"]] },
    c: [
      ["!Kontrast ilişkili ile kontrast kaynaklı AKI ayrımı; eski çalışmalarda risk abartılmış", "kontrast ilişkili|kontrastla ilişkili|kontrast kaynaklı|kontrasta bağlı|kontrast nedenli|kontrastın neden olduğu|abartıl|kontrol grubu"],
      ["!Ana risk faktörü belirgin düşük eGFR (ACR/NKF: <30) ve akut böbrek hasarı", "30 un altı|30 un altında|otuzun altı|otuzun altında|30 dan düşük|otuzdan düşük|30 altı|otuz altı"],
      ["!Profilaksi: kontrendikasyon yoksa IV izotonik sıvı (serum fizyolojik)", "izotonik|serum fizyolojik|normal salin|izotonik salin|hidrasyon|intravenöz sıvı|iv sıvı|damardan sıvı"],
      ["N-asetilsistein ve bikarbonatın üstünlüğü gösterilemedi (PRESERVE)", "preserve|asetilsisteinin yararı|asetilsistein önerilmez|asetilsistein yarar|nac önerilmez|nac yarar|bikarbonatın üstün|bikarbonatın yararı|bikarbonat üstün|yararı gösterilemedi|faydası gösterilemedi|üstünlüğü gösterilemedi"],
      ["Kreatinin artışı 2–3 günde zirve yapar, çoğunlukla 1–3 haftada döner (ESUR)", "2 3 gün|iki üç gün|2 3 günde|iki üç günde|1 3 hafta|bir üç hafta|bir ile üç hafta|1 ile 3 hafta"],
      ["Tek böbrek tek başına risk değil; kontrast nedeniyle diyaliz başlatılmaz ya da değiştirilmez", "tek böbrek|soliter böbrek|diyaliz başlatılmaz|diyaliz programı|diyaliz zamanlaması|diyalizi değiştir|diyalize başlanmaz"],
      ["Tanısal eşiğin altına doz düşürülmez; endike tetkik geciktirilmez", "tanısal eşik|tanısal doğruluk|esirge|geciktirilmemeli|geciktirmemek|vazgeçilmemeli|vazgeçmemek"],
      ["Onaylı dozda gadolinyum AKI ile ilişkili değil (ESUR)", "gadolinyum"]
    ]},
  { id: "nef-minimal-degisiklik", tr: "Minimal değişiklik hastalığı", en: "Minimal change disease", cat: "glom", lvl: 2,
    src: { k: [BR, CCN], m: [GN,
      ["Vivarelli M, Massella L, Ruggiero B, Emma F. Minimal Change Disease. Clin J Am Soc Nephrol 2017", "https://doi.org/10.2215/CJN.05000516"]] },
    c: [
      ["!Çocuklarda nefrotik sendromun en sık nedeni", "çocuklarda nefrotik|çocukluk çağında nefrotik|çocuklardaki nefrotik sendromun|çocuklarda en sık|çocukluk çağında en sık|çocukluk çağının en sık|çocukluk çağı nefrotik|çocuklardaki nefrotik"],
      ["!Işık mikroskobunda normal glomerül; elektron mikroskobunda yaygın ayak çıkıntısı silinmesi", "ışık mikroskob|ışık mikroskop|elektron mikroskob|elektron mikroskop|ayak çıkıntı|ayaksı çıkıntı|foot process"],
      ["!Glukokortikoide iyi yanıt (steroide duyarlı)", "steroide duyarlı|steroid duyarlı|steroide yanıt|steroide iyi yanıt|steroide hızlı yanıt|glukokortikoide yanıt|prednizon|prednizolon"],
      ["İmmünfloresanda belirgin birikim yok", "immünfloresan|immün floresan|birikim yok|depozit yok|immün kompleks yok"],
      ["Sık relaps / steroid bağımlılığında rituksimab, kalsinörin inhibitörü, siklofosfamid", "rituksimab|kalsinörin|takrolimus|siklosporin|siklofosfamid|sık relaps|steroid bağımlı|sık nüks"],
      ["Sekonder nedenler: NSAİİ, Hodgkin lenfoma", "hodgkin|nsaid|nsaii|non steroid|lenfoma"],
      ["Çocukta tipik tabloda biyopsisiz ampirik steroid; erişkinde biyopsi", "biyopsi yapmadan|biyopsisiz|ampirik|erişkinde biyopsi|erişkinlerde biyopsi|biyopsi yapılmadan"],
      ["Patogenezde podosit hasarı; anti-nefrin antikorları", "nefrin|podosit|podositopati"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "nef-membranoz-nefropati", tr: "Membranöz nefropati", en: "Membranous nephropathy", cat: "glom", lvl: 3,
    src: { k: [BR, CCN], m: [GN,
      ["Fervenza FC ve ark. Rituximab or Cyclosporine in the Treatment of Membranous Nephropathy (MENTOR). N Engl J Med 2019", "https://doi.org/10.1056/NEJMoa1814427"]] },
    c: [
      ["!Erişkinde primer nefrotik sendromun sık nedeni", "erişkinlerde primer nefrotik|erişkinde primer nefrotik|yetişkinlerde primer nefrotik|erişkinde en sık|erişkinlerde en sık|yetişkinlerde en sık|yetişkinde en sık|erişkin nefrotik|erişkinlerde nefrotik|erişkinde nefrotik"],
      ["!Primer formda anti-PLA2R antikoru (çoğunlukla), daha az THSD7A", "pla2r|pla 2r|pla2 r|fosfolipaz a2|fosfolipaz a 2|thsd7a|trombospondin"],
      ["!Patoloji: subepitelyal immün kompleks, GBM kalınlaşması, gümüş boyada 'spike'", "subepitel|spike|diken|bazal membran kalın|bazal membranın kalın|granüler igg"],
      ["Sekonder nedenler: malignite, hepatit B, lupus (sınıf V), ilaçlar", "malignite|kanser|hepatit b|lupus|sınıf 5|sınıf v|sınıf beş|penisilamin|altın tuz"],
      ["Tipik klinikte anti-PLA2R pozitifliği biyopsisiz tanı koydurabilir (KDIGO 2021)", "biyopsiye gerek|biyopsisiz|biyopsi yapmadan|biyopsi gerekmeyebilir|serolojik tanı|biyopsiye ihtiyaç"],
      ["Bir kısım hasta spontan remisyona girer; risk sınıflaması ve destekleyici tedavi (RAS blokajı)", "spontan remisyon|kendiliğinden remisyon|kendiliğinden düzel|risk sınıf|risk değerlendir|ras bloka|ace inhibit|arb"],
      ["!Yüksek riskte immünosüpresyon: rituksimab (MENTOR), siklofosfamid + glukokortikoid, kalsinörin inhibitörü", "rituksimab|mentor|ponticelli|siklofosfamid|kalsinörin|takrolimus|siklosporin"],
      ["Tromboz (renal ven trombozu) riski yüksek; seçilmiş hastada profilaktik antikoagülasyon", "renal ven|tromboz|antikoagül"]
    ]},
  { id: "nef-fsgs", tr: "Fokal segmental glomerüloskleroz (FSGS)", en: "Focal segmental glomerulosclerosis", cat: "glom", lvl: 3,
    src: { k: [BR, CCN], m: [GN,
      ["Rosenberg AZ, Kopp JB. Focal Segmental Glomerulosclerosis. Clin J Am Soc Nephrol 2017", "https://doi.org/10.2215/CJN.05960616"]] },
    c: [
      ["!Bir histolojik patern: primer, sekonder (adaptif, virüs, ilaç) ve genetik formlar", "primer fsgs|sekonder fsgs|genetik fsgs|adaptif|maladaptif|dolaşan faktör|dolaşımdaki faktör|genetik form|bir patern|histolojik patern|bir lezyon"],
      ["!Patoloji: glomerüllerin bir kısmında, glomerülün bir bölümünde skleroz; Columbia varyantları", "segmental skleroz|segmental sklerozis|columbia|kollaps|collapsing|tip lezyon|perihiler|fokal ve segmental|bazı glomerüllerin"],
      ["!Primer form: tam nefrotik sendrom ve yaygın ayak çıkıntısı silinmesi; sekonderde subnefrotik proteinüri", "yaygın silinme|diffüz silinme|yaygın ayak|subnefrotik|nefrotik olmayan|nefrotik düzeyin altında"],
      ["APOL1 risk alelleri ve HIV ilişkili kollabe tip", "apol1|apol 1|apolipoprotein l1|hiv"],
      ["Sekonder nedenler: obezite, nefron kaybı, reflü nefropatisi, eroin/ilaçlar", "obezite|nefron kaybı|nefron sayısı|reflü nefropati|eroin|anabolik"],
      ["Primer formda glukokortikoid; yanıtsızlıkta kalsinörin inhibitörü", "kalsinörin|takrolimus|siklosporin|yüksek doz glukokortikoid|yüksek doz steroid|yüksek doz kortikosteroid"],
      ["Sekonder ve genetik formda immünosüpresyon yerine destekleyici tedavi (RAS blokajı)", "immünosüpresyon yerine|immünsüpresyon yerine|immünosüpresyon verilmez|immünsüpresyon verilmez|immünosüpresyondan fayda|immünosüpresyondan yarar|destekleyici tedavi|ras bloka"],
      ["Steroid dirençli olguda genetik test (ör. NPHS2/podosin)", "nphs|podosin|genetik test|genetik inceleme"],
      ["Primer FSGS nakil sonrası greftte nüks edebilir", "nakil sonrası|transplant sonrası|transplantasyon sonrası|greftte|graftta|nakledilen böbrek"]
    ]},
  { id: "nef-lupus-nefriti", tr: "Lupus nefriti (KDIGO 2024)", en: "Lupus nephritis", cat: "glom", lvl: 3,
    src: { k: [BR, CCN], m: [
      ["KDIGO 2024 Clinical Practice Guideline for the Management of Lupus Nephritis. Kidney Int 2024", "https://doi.org/10.1016/j.kint.2023.09.002"],
      ["Anders HJ ve ark. Lupus nephritis. Nat Rev Dis Primers 2020", "https://doi.org/10.1038/s41572-019-0141-9"]] },
    c: [
      ["!ISN/RPS biyopsi sınıflaması; sınıf III ve IV proliferatif", "isn|rps|sınıf 3|sınıf 4|sınıf üç|sınıf dört|sınıf iii|sınıf iv|proliferatif|üçüncü ve dördüncü"],
      ["Tanı ve sınıflama için böbrek biyopsisi", "biyopsi"],
      ["!Tüm hastalarda hidroksiklorokin", "hidroksiklorokin|plaquenil|antimalaryal|antimalarial"],
      ["!Sınıf III/IV başlangıç: glukokortikoid + mikofenolat ya da düşük doz IV siklofosfamid", "mikofenolat|mmf|mpaa|mikofenolik|euro lupus|eurolupus|düşük doz siklofosfamid|siklofosfamid"],
      ["KDIGO 2024 yenilikleri: belimumab eklenmesi ya da MPAA + kalsinörin inhibitörü (voklosporin)", "belimumab|voklosporin|kalsinörin|takrolimus|üçlü tedavi"],
      ["Serolojik aktivite: anti-dsDNA yüksekliği, C3/C4 düşüklüğü", "dsdna|ds dna|anti ds|kompleman|c3|c4"],
      ["Sınıf V (membranöz) lupus nefriti", "sınıf 5|sınıf beş|sınıf v|membranöz"],
      ["Uzun süreli idame immünosüpresyonu", "idame|sürdürüm|sürdürme tedavi|uzun süreli immün|uzun süreli tedavi"],
      ["Mikofenolat teratojen: gebelik planlaması", "teratojen|gebelik|hamilelik|doğum kontrol|kontrasepsiyon"]
    ]},
  { id: "nef-adpkd", tr: "Otozomal dominant polikistik böbrek hastalığı (ADPKD)", en: "Autosomal dominant polycystic kidney disease", cat: "kal", lvl: 3,
    src: { k: [BR, CCN], m: [
      ["KDIGO 2025 Clinical Practice Guideline for the Evaluation, Management, and Treatment of ADPKD: executive summary. Kidney Int 2025", "https://pubmed.ncbi.nlm.nih.gov/39848746/"],
      ["Torres VE ve ark. Tolvaptan in Patients with Autosomal Dominant Polycystic Kidney Disease (TEMPO 3:4). N Engl J Med 2012", "https://doi.org/10.1056/NEJMoa1205511"]] },
    c: [
      ["!PKD1 (polisistin-1) ve PKD2 (polisistin-2) mutasyonları; otozomal dominant kalıtım", "pkd1|pkd 1|pkd2|pkd 2|polisistin 1|polisistin 2|polisistin bir|polisistin iki|otozomal dominant"],
      ["!Tanı: aile öyküsü varlığında yaşa göre kist sayısı ölçütleri (ultrasonografi/MR)", "kist sayısı|yaşa göre kist|yaşa göre belirlenmiş|yaşa özgü|pei|ravine"],
      ["Hızlı progresyon riski: Mayo görüntüleme sınıflaması, total böbrek hacmi", "mayo|böbrek hacmi|htkv|tkv|1c|1d|1e"],
      ["!Hızlı progresyonda tolvaptan (vazopressin V2 reseptör antagonisti)", "tolvaptan|v2 reseptör|v 2 reseptör|vazopressin reseptör|vazopressin antagonist"],
      ["Tolvaptan yan etkileri: akuarez (poliüri), hepatotoksisite", "akuarez|poliüri|hepatotoks|karaciğer enzim|karaciğer toksis|karaciğer hasar"],
      ["Böbrek dışı: karaciğer kistleri, intrakraniyal anevrizma, mitral kapak prolapsusu", "karaciğer kist|anevrizma|mitral"],
      ["Kan basıncı kontrolü (RAS blokajı), bol su ve tuz kısıtlaması", "bol su|su tüketim|su içme|su alım|sıvı alım|tuz kısıt|ras bloka|ace inhibit|arb"],
      ["Komplikasyonlar: hematüri, kist enfeksiyonu, nefrolitiyazis, yan ağrısı", "kist enfeksiyon|kist kanama|kist içi kanama|nefrolitiyaz|böbrek taşı|yan ağrı|hematüri"]
    ]},
  { id: "nef-renal-tubuler-asidoz", tr: "Renal tübüler asidoz", en: "Renal tubular acidosis", cat: "kal", lvl: 3,
    src: { k: [BR, CCN], m: [
      ["Palmer BF, Kelepouris E, Clegg DJ. Renal Tubular Acidosis and Management Strategies: A Narrative Review. Adv Ther 2021", "https://doi.org/10.1007/s12325-020-01587-5"],
      KRAUT] },
    c: [
      ["!Normal anyon açıklı (hiperkloremik) metabolik asidoz", "hiperkloremik|normal anyon|anyon açığı normal|anyon açığı normaldir"],
      ["!Tip 1 (distal): H+ atılamaz, idrar pH'sı uygunsuz yüksek, hipokalemi, nefrokalsinozis ve taş", "distal rta|distal renal|distal tübüler|tip 1 rta|tip bir rta|nefrokalsinoz|idrar ph|idrar phsı|5,5|beş buçuk"],
      ["!Tip 2 (proksimal): bikarbonat geri emilim kusuru, sıklıkla Fanconi sendromu", "proksimal rta|proksimal renal|proksimal tübül|tip 2 rta|tip iki rta|fanconi|fankoni|bikarbonat geri emilim|bikarbonatın geri emilim|bikarbonat kaybı"],
      ["!Tip 4: hipoaldosteronizm ya da aldosteron direnci, hiperkalemi", "tip 4 rta|tip dört rta|hipoaldosteron|aldosteron direnc|aldosteron eksik|aldosterona direnç"],
      ["İdrar anyon açığı distal RTA'da pozitif (amonyum atılımı azalmış)", "idrar anyon|amonyum"],
      ["Nedenler: Sjögren/otoimmün (distal), miyelom, ifosfamid, tenofovir (proksimal), diyabetik nefropati (tip 4)", "sjögren|sjogren|miyelom|ifosfamid|tenofovir|amfoterisin|asetazolamid|karbonik anhidraz"],
      ["Tedavi: alkali (sitrat/bikarbonat); tip 4'te hiperkalemi tedavisi, fludrokortizon", "sitrat|alkali|fludrokortizon|potasyum bağlay"]
    ]},
]
});
})();
