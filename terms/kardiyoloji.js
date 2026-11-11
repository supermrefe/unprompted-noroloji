/* Kardiyoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve acilde/serviste hayat kurtaran kardiyoloji konuları; güncel ESC kılavuzlarına (ACS 2023, KY 2021+2023,
   AF 2024, HT 2024, endokardit 2023, kapak 2025, perikardit 2025, KMP 2023, VA 2022, senkop 2018, PE 2019, dislipidemi 2019+2025) dayanır.
   Kolay = her hekimin bilmesi gereken çekirdek (STEMI, HT, AF, KY, dislipidemi); Orta = TUS ayrıntısı; Zor = kanalopatiler, HKMP, senkop, WPW.
   Kapsam dışı: inme (nöroloji), kardiyak arrest/ACLS (acil tıp), aort diseksiyonu/anevrizma ve cerrahi konular (KVC). */
(function () {
const BR = "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine, 13. baskı (2025)";
const HA = "Harrison's Principles of Internal Medicine, 22. baskı (2025)";
const ACS = ["2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023", "https://doi.org/10.1093/eurheartj/ehad191"];
const VA = ["2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J 2022", "https://doi.org/10.1093/eurheartj/ehac262"];

UP.add({ id: "kardiyoloji", subs: {
    kak: "Koroner arter hastalığı",
    ky: "Kalp yetersizliği ve kardiyomiyopatiler",
    rit: "Ritim ve ileti bozuklukları",
    kap: "Kapak, endokard ve perikard",
    risk: "Hipertansiyon ve lipitler",
    pul: "Pulmoner dolaşım ve senkop"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "kar-stemi", tr: "ST yükselmeli miyokard infarktüsü (STEMI)", en: "ST-elevation myocardial infarction", cat: "kak", lvl: 1,
    src: { k: [BR, HA], m: [ACS,
      ["Fourth universal definition of myocardial infarction (2018). Eur Heart J 2019", "https://doi.org/10.1093/eurheartj/ehy462"]] },
    c: [
      ["!Koroner arterin trombüsle tam tıkanması (plak rüptürü)", "koroner arter|tam tıkan|total oklüzyon|plak rüptür|plak yırtıl"],
      ["!EKG: ardışık iki derivasyonda ST yükselmesi", "st yüksel|st elevasyon|ste mi|stemi|ardışık iki|komşu iki|iki derivasyon"],
      ["Göğüs ağrısı: baskı tarzı, yayılımlı, terlemeyle", "baskı tarzı|sıkıştırıcı|sol kola|çeneye|terleme"],
      ["Troponin sonucu beklenmez; EKG ile STEMI tanısı konunca reperfüzyon geciktirilmez", "troponin bekle|troponin sonucu bekle|troponini bekle|sonucunu beklemeden|beklemeden reperfüzyon|geciktirmeden|geciktirilmez|geciktirmiyor"],
      ["!Primer PCI: 120 dakikada yapılamıyorsa fibrinolitik", "primer pci|primer perkütan|perkütan koroner|anjiyoplasti|anjioplasti|stent|120 dakika|yüz yirmi|iki saat"],
      ["Fibrinolitik (tenekteplaz) ve sonrasında anjiyografi", "fibrinoli|tenekteplaz|reteplaz|fibrin spesifik"],
      ["İkili antiplatelet: aspirin + P2Y12 (primer PCI'da tikagrelor/prasugrel, fibrinolizde klopidogrel)", "ikili antiplatelet|ikili antiagregan|p2y12|tikagrelor|prasugrel|klopidogrel|dapt"],
      ["Komplikasyonlar: aritmi, kardiyojenik şok, mekanik", "papiller kas|septal rüptür|serbest duvar|mekanik komplikasyon|ventrikül anevrizma"]
    ]},
  { id: "kar-hipertansiyon", tr: "Hipertansiyon", en: "Hypertension", cat: "risk", lvl: 1,
    src: { k: [BR, HA], m: [
      ["2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024", "https://doi.org/10.1093/eurheartj/ehae178"],
      ["2023 ESH Guidelines for the management of arterial hypertension. J Hypertens 2023", "https://doi.org/10.1097/HJH.0000000000003480"]] },
    c: [
      ["!Tanım: ofis kan basıncı ≥140/90 mmHg (ESC 2024)", "140|yüz kırk|140 90|doksan"],
      ["ESC 2024: 'yüksek kan basıncı' ara kategorisi (120–139/70–89)", "yüksek kan basıncı kategori|elevated|ara kategori|120 139|yüz yirmi ile yüz otuz dokuz|yükselmiş kan basıncı"],
      ["!Tanının ofis dışı ölçümle doğrulanması (ABPM / ev ölçümü)", "ambulatuvar|ambulatuar|abpm|holter|ev ölçüm|evde ölç|ofis dışı|beyaz önlük|maskeli"],
      ["Sebep çoğunlukla primer (esansiyel); sekonder nedenler araştırılır", "primer|esansiyel|sekonder|ikincil|hiperaldosteron|renal arter|feokromositoma|uyku apne"],
      ["Hedef organ hasarı: SVH, albüminüri, retinopati", "hedef organ|sol ventrikül hipertrofi|hipertrofi|albüminüri|mikroalbümin|retinopati|böbrek hasar"],
      ["Yaşam tarzı: tuz kısıtlaması, kilo verme, egzersiz", "tuz kısıt|tuzu azalt|sodyum|kilo ver|egzersiz|yaşam tarzı|alkol"],
      ["!İlk basamak: RAS blokeri + KKB ya da diüretik, tek tablette ikili", "tek tablet|tek hap|sabit doz|ikili kombinasyon|kombinasyon|ace inhibit|anjiyotensin|arb|ras bloke|kalsiyum kanal|amlodipin|diüretik|tiyazid"],
      ["Hedef sistolik 120–129 mmHg (tolere edilirse)", "120 129|yüz yirmi ile yüz yirmi dokuz|129|hedef sistolik|hedef kan basınc"]
    ]},
  { id: "kar-atriyal-fibrilasyon", tr: "Atriyal fibrilasyon", en: "Atrial fibrillation", cat: "rit", lvl: 1,
    src: { k: [BR, HA], m: [
      ["2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J 2024", "https://doi.org/10.1093/eurheartj/ehae176"],
      ["2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 2024", "https://doi.org/10.1161/CIR.0000000000001193"]] },
    c: [
      ["!EKG: düzensiz düzensiz ritim, P dalgası yok", "düzensiz düzensiz|tamamen düzensiz|p dalgası yok|p dalgası olmaz|p dalgaları kaybol|f dalga|fibrilasyon dalga|irregüler"],
      ["En sık sürekli aritmi; sınıflama (paroksismal, persistan, kalıcı)", "en sık sürekli|en sık görülen sürekli|sürekli aritmi|paroksismal|persistan|kalıcı|permanent"],
      ["!İnme riski: CHA2DS2-VA skoru", "cha2ds2|chads2 va|chads2va|chads vasc|chadsvasc|cha2|cha 2|çadsvask|çadsva|inme riski|emboli riski|tromboemboli"],
      ["!Antikoagülasyon: VKA yerine DOAK tercih", "doak|noak|yeni nesil oral|direkt oral antikoagül|direk oral antikoagül|apiksaban|rivaroksaban|edoksaban|dabigatran|varfarin yerine|vka yerine"],
      ["Hız kontrolü: beta bloker, diltiazem/verapamil, digoksin", "hız kontrol|beta bloker|metoprolol|bisoprolol|diltiazem|verapamil|digoksin"],
      ["Ritim kontrolü: kardiyoversiyon, antiaritmik, kateter ablasyon", "ritim kontrol|kardiyoversiyon|amiodaron|flekainid|ablasyon|pulmoner ven izolasyon"],
      ["AF-CARE: komorbidite ve risk faktörü yönetimi", "af care|afcare|komorbidite|risk faktör|obezite|uyku apne|alkol"]
    ]},
  { id: "kar-kalp-yetersizligi", tr: "Kalp yetersizliği", en: "Heart failure", cat: "ky", lvl: 1,
    src: { k: [BR, HA], m: [
      ["2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2021", "https://doi.org/10.1093/eurheartj/ehab368"],
      ["2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2023", "https://doi.org/10.1093/eurheartj/ehad195"]] },
    c: [
      ["!EF'ye göre sınıflama: azalmış (≤%40), hafif azalmış (41–49), korunmuş (≥%50)", "ejeksiyon fraksiyon|ef|düşük ef|korunmuş|azalmış|hafif azalmış|hfref|hfpef|hfmref"],
      ["Semptom ve bulgular: dispne, ortopne, PND, ödem, S3", "dispne|nefes darl|ortopne|paroksismal noktürnal|pnd|ödem|s3|juguler|boyun ven|raller|yorgunluk"],
      ["!Tanı: natriüretik peptid (BNP/NT-proBNP) ve ekokardiyografi", "natriüretik|bnp|probnp|pro bnp|ekokardiyo|eko|ekoda"],
      ["!HFrEF dört temel ilaç: ACEİ/ARNİ, beta bloker, MRA, SGLT2 inhibitörü", "dört temel|dört sütun|dört ilaç|arni|sakubitril|ace inhibit|beta bloker|mra|spironolakton|eplerenon|sglt2|sglt 2|dapagliflozin|empagliflozin|gliflozin"],
      ["Konjesyonda loop diüretik", "diüretik|furosemid|loop|kıvrım|konjesyon"],
      ["2023 güncellemesi: HFmrEF/HFpEF'de SGLT2 inhibitörü", "korunmuş ef de|korunmuşta da|hfpef te|hfpef de|tüm ef|ef ne olursa|2023 güncelle"],
      ["Cihaz: ICD ve CRT", "icd|defibrilatör|crt|resenkronizasyon"],
      ["NYHA fonksiyonel sınıflaması", "nyha|new york|fonksiyonel sınıf"]
    ]},
  { id: "kar-dislipidemi", tr: "Dislipidemi ve LDL hedefleri", en: "Dyslipidaemia", cat: "risk", lvl: 1,
    src: { k: [BR, HA], m: [
      ["2019 ESC/EAS Guidelines for the management of dyslipidaemias: lipid modification to reduce cardiovascular risk. Eur Heart J 2020", "https://doi.org/10.1093/eurheartj/ehz455"],
      ["2025 Focused Update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J 2025", "https://doi.org/10.1093/eurheartj/ehaf190"]] },
    c: [
      ["!Ana hedef LDL kolesterol", "ldl|düşük dansiteli|düşük yoğunluklu"],
      ["!Risk sınıflaması: SCORE2 / SCORE2-OP", "score2|score 2|skor 2|skor iki|score iki|risk sınıf|risk kategori|çok yüksek risk"],
      ["!Çok yüksek riskte LDL <55 mg/dL ve ≥%50 azalma", "55|elli beş|yüzde elli|50 azal|yarı yarıya"],
      ["İlk ilaç yüksek yoğunluklu statin", "statin|atorvastatin|rosuvastatin"],
      ["Hedefe ulaşılamazsa ezetimib, sonra PCSK9 inhibitörü", "ezetimib|pcsk9|pcsk 9|evolokumab|alirokumab|inklisiran"],
      ["Lp(a) her erişkinde en az bir kez ölçülmeli", "lipoprotein a|lp a|lpa|lipoprotein küçük a"],
      ["Statin yan etkisi: miyopati, CK, karaciğer enzimleri", "miyopati|miyalji|kas ağrı|rabdomiyoliz|ck yüksel|kreatin kinaz|karaciğer enzim|transaminaz"],
      ["Ailesel hiperkolesterolemi", "ailesel hiperkolesterolemi|familyal|ksantom"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "kar-nste-aks", tr: "ST yükselmesiz akut koroner sendrom (NSTE-AKS)", en: "Non-ST-elevation acute coronary syndrome", cat: "kak", lvl: 2,
    src: { k: [BR, HA], m: [ACS,
      ["2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 2025", "https://doi.org/10.1161/CIR.0000000000001309"]] },
    c: [
      ["!NSTEMI ve kararsız anjina ayrımı: troponin", "nstemi|non stemi|kararsız anjina|unstabil anjina|anstabil anjina"],
      ["!Yüksek duyarlıklı troponin ile 0/1 saat algoritması", "yüksek duyarlı|hs troponin|hassas troponin|0 1 saat|sıfır bir saat|sıfırıncı ve birinci|0 ve 1|0 saat|algoritma"],
      ["EKG: ST çökmesi, T negatifliği ya da normal", "st çökme|st depresyon|t negatif|t ters|t dalga inversiyon"],
      ["!Risk sınıflaması ve invaziv strateji zamanlaması", "grace|invaziv strateji|erken invaziv|24 saat|yirmi dört saat|acil anjiyo|hemen anjiyo|iki saat içinde|acil koroner anjiyo"],
      ["Çok yüksek risk: hemodinamik instabilite, süren ağrı, aritmi", "dirençli ağrı|süren ağrı|geçmeyen ağrı|geçmeyen göğüs ağrı|dirençli göğüs ağrı|kardiyojenik şok|malign aritmi"],
      ["Antitrombotik: aspirin, P2Y12, parenteral antikoagülan", "aspirin|p2y12|tikagrelor|prasugrel|klopidogrel|heparin|fondaparinuks|enoksaparin"],
      ["Tip 2 MI ve diğer troponin yüksekliği nedenlerinden ayrım", "tip 2|tip iki|arz talep|miyokard hasar|miyokardit"],
      ["Taburculukta statin ve sekonder korunma", "statin|sekonder korunma|ikincil korunma|kardiyak rehabilitasyon"]
    ]},
  { id: "kar-infektif-endokardit", tr: "İnfektif endokardit", en: "Infective endocarditis", cat: "kap", lvl: 2,
    src: { k: [BR, HA], m: [
      ["2023 ESC Guidelines for the management of endocarditis. Eur Heart J 2023", "https://doi.org/10.1093/eurheartj/ehad193"],
      ["The 2023 Duke-ISCVID Criteria for Infective Endocarditis: Updating the Modified Duke Criteria. Clin Infect Dis 2023", "https://doi.org/10.1093/cid/ciad271"]] },
    c: [
      ["!Tanı: Duke kriterleri (majör/minör)", "duke|majör kriter|minör kriter|majör ve minör"],
      ["!Kan kültürleri: antibiyotik öncesi birden çok set", "kan kültür|hemokültür|kültür seti|üç set|birden fazla set"],
      ["!Ekokardiyografi: vejetasyon, TEE", "vejetasyon|transözofageal|tee|ekokardiyo|eko|abse"],
      ["Etkenler: S. aureus, viridans streptokok, enterokok", "aureus|stafilokok|viridans|streptokok|enterokok|hacek"],
      ["Periferik bulgular: Osler, Janeway, Roth, splinter", "osler|janeway|roth|splinter|kıymık|peteşi"],
      ["Uzun süreli IV bakterisidal antibiyotik", "bakterisidal|intravenöz antibiyotik|iv antibiyotik|haftalarca|uzun süreli antibiyotik|vankomisin|ampisilin|gentamisin|seftriakson"],
      ["Cerrahi endikasyonları: kalp yetersizliği, kontrolsüz enfeksiyon, emboli", "cerrahi endikasyon|cerrahi gerek|erken cerrahi|ameliyat|kontrolsüz enfeksiyon|emboli riski|büyük vejetasyon"],
      ["Yüksek riskli hastada diş işlemi öncesi profilaksi", "profilaksi|diş işlem|dental|protez kapak|amoksisilin"]
    ]},
  { id: "kar-aort-darligi", tr: "Aort darlığı", en: "Aortic stenosis", cat: "kap", lvl: 2,
    src: { k: [BR, HA], m: [
      ["2025 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2025", "https://doi.org/10.1093/eurheartj/ehaf194"],
      ["2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation 2021", "https://doi.org/10.1161/CIR.0000000000000923"]] },
    c: [
      ["!Neden: yaşlıda dejeneratif kalsifik, gençte biküspit kapak", "kalsifik|kalsifikasyon|dejeneratif|biküspit|bikuspit|romatizmal"],
      ["!Klasik triad: anjina, senkop, dispne (kalp yetersizliği)", "anjina|senkop|bayılma|bayıl"],
      ["Muayene: karotise yayılan ejeksiyon üfürümü, pulsus parvus et tardus", "ejeksiyon üfürüm|sistolik ejeksiyon|sistolik üfürüm|karotis|karotise|parvus|tardus|kreşendo"],
      ["!Ciddi darlık: Vmax ≥4 m/s, ortalama gradiyent ≥40 mmHg, AVA <1 cm²", "4 metre|dört metre|4 m s|40 mmhg|kırk mmhg|kırk milimetre|1 santimetre|bir santimetre|1 cm kare|bir cm kare|1 santimetrekare|bir santimetrekare"],
      ["Tanıda ekokardiyografi (Doppler)", "ekokardiyo|doppler|eko"],
      ["Semptomatik ciddi darlıkta kapak replasmanı", "kapak replasman|kapak değişim|replasman|müdahale|girişim"],
      ["TAVI ya da cerrahi (SAVR): kalp takımı, ESC 2025'te yaş eşiği 70", "tavi|tavr|transkateter|savr|cerrahi kapak|kalp takımı|heart team|70 yaş|yetmiş"],
      ["Medikal tedavi darlığı geriletmez; HT tedavi edilir, vazodilatörler (özellikle nitrat) dikkatle, düşük dozla", "medikal tedavi|ilaç tedavisi|vazodilatör|nitrat"]
    ]},
  { id: "kar-akut-perikardit", tr: "Akut perikardit", en: "Acute pericarditis", cat: "kap", lvl: 2,
    src: { k: [BR, HA], m: [
      ["2025 ESC Guidelines for the management of myocarditis and pericarditis. Eur Heart J 2025", "https://doi.org/10.1093/eurheartj/ehaf192"],
      ["A randomized trial of colchicine for acute pericarditis (ICAP). N Engl J Med 2013", "https://doi.org/10.1056/NEJMoa1208536"]] },
    c: [
      ["!Plöritik göğüs ağrısı: öne eğilmekle azalır, yatınca artar", "öne eğil|oturunca|yatınca art|sırtüstü|plöritik|nefes alırken|derin nefes"],
      ["Perikardiyal frotman", "frotman|sürtünme sesi|friction"],
      ["!EKG: yaygın konkav ST yükselmesi ve PR çökmesi", "yaygın st|diffüz st|konkav|pr çökme|pr depresyon|eyer"],
      ["Perikardiyal efüzyon; tamponada dikkat", "efüzyon|sıvı|tamponad|beck|paradoks"],
      ["Neden: çoğunlukla viral/idiyopatik; tüberküloz, otoimmün", "viral|idiyopatik|idiopatik|tüberküloz|otoimmün|üremi|post mi|dressler"],
      ["!Tedavi: NSAİİ/aspirin + kolşisin", "kolşisin|kolsisin|colchicine|nsai|nonsteroid|ibuprofen|aspirin"],
      ["Kortikosteroid ikinci basamak; nüks", "kortikosteroid|steroid|nüks|rekürren|tekrarlay"],
      ["Dirençli nüks: anti-IL-1 (anakinra, rilonasept)", "anakinra|rilonasept|il 1|interlökin 1|interlökin bir"],
      ["CRP ile izlem, egzersiz kısıtlaması", "crp|c reaktif|egzersiz kısıt|spor yasa|efor kısıt"]
    ]},
  { id: "kar-pulmoner-emboli", tr: "Akut pulmoner emboli", en: "Acute pulmonary embolism", cat: "pul", lvl: 2,
    src: { k: [BR, HA], m: [
      ["2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J 2020", "https://doi.org/10.1093/eurheartj/ehz405"],
      ["Fibrinolysis for patients with intermediate-risk pulmonary embolism (PEITHO). N Engl J Med 2014", "https://doi.org/10.1056/NEJMoa1302097"]] },
    c: [
      ["!Klinik olasılık: Wells ya da Geneva skoru", "wells|geneva|cenevre|klinik olasılık|ön test"],
      ["!D-dimer: düşük-orta olasılıkta dışlama", "d dimer|ddimer|dimer"],
      ["!BT pulmoner anjiyografi", "bt anjiyo|bt pulmoner|bete anjiyo|tomografik anjiyo|ctpa|pulmoner anjiyo|toraks anjiyo"],
      ["Risk sınıflaması: sPESI, sağ ventrikül disfonksiyonu, troponin", "pesi|spesi|sağ ventrikül|sağ kalp|troponin|ara risk|orta risk|düşük risk"],
      ["Yüksek risk (hemodinamik instabilite): sistemik tromboliz", "yüksek risk|masif|hemodinamik|hipotansiyon|şok|trombolit|tromboliz|alteplaz"],
      ["Antikoagülasyon: DOAK tercih, en az 3 ay", "doak|noak|apiksaban|rivaroksaban|heparin|antikoagül|üç ay|3 ay"],
      ["Risk faktörleri: immobilizasyon, cerrahi, kanser, DVT", "immobil|ameliyat|cerrahi sonrası|kanser|malignite|derin ven|dvt|östrojen|oral kontrasep"]
    ]},
  { id: "kar-av-bloklar", tr: "AV bloklar ve bradiaritmiler", en: "Atrioventricular block and bradyarrhythmias", cat: "rit", lvl: 2,
    src: { k: [BR, HA], m: [
      ["2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. Eur Heart J 2021", "https://doi.org/10.1093/eurheartj/ehab364"],
      ["2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation 2019", "https://doi.org/10.1161/CIR.0000000000000628"]] },
    c: [
      ["Birinci derece: PR >200 ms, her P iletilir", "birinci derece|1 derece|pr uzun|200 milisaniye|iki yüz"],
      ["!Mobitz I (Wenckebach): PR giderek uzar, AV düğüm, genelde iyi huylu", "mobitz 1|mobitz i|mobitz bir|wenckebach|venkebah|giderek uza|progresif uza"],
      ["!Mobitz II: PR sabit, ani blok; infranodal, pace gerekir", "mobitz 2|mobitz ii|mobitz iki|sabit pr|pr sabit|infranodal|his purkinje|his altı"],
      ["!Üçüncü derece (tam) blok: AV dissosiyasyon, kaçış ritmi", "üçüncü derece|3 derece|tam blok|komplet|av dissosiyasyon|dissosiye|kaçış ritm"],
      ["Geri dönüşlü nedenler: ilaçlar, hiperkalemi, inferior MI", "geri dönüşlü|beta bloker|digoksin|hiperkalemi|inferior mi|inferior miyokard|lyme"],
      ["Akut tedavi: atropin, geçici pacing", "atropin|geçici pace|geçici pil|transkutan|izoproterenol"],
      ["Kalıcı kalp pili (yüksek dereceli bloklarda semptomdan bağımsız)", "kalıcı pil|kalp pili|kalıcı pace|pacemaker|peysmeyker"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "kar-hipertrofik-kardiyomiyopati", tr: "Hipertrofik kardiyomiyopati", en: "Hypertrophic cardiomyopathy", cat: "ky", lvl: 3,
    src: { k: [BR, HA], m: [
      ["2023 ESC Guidelines for the management of cardiomyopathies. Eur Heart J 2023", "https://doi.org/10.1093/eurheartj/ehad194"],
      ["2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy. Circulation 2024", "https://doi.org/10.1161/CIR.0000000000001250"]] },
    c: [
      ["!Sarkomer gen mutasyonu, otozomal dominant (MYH7, MYBPC3)", "sarkomer|myh7|mybpc3|miyozin|otozomal dominant|genetik"],
      ["!Açıklanamayan sol ventrikül duvar kalınlığı ≥15 mm", "15 mm|on beş|15 milimetre|duvar kalınlığı|septal hipertrofi|asimetrik"],
      ["!Sol ventrikül çıkış yolu obstrüksiyonu ve SAM", "çıkış yolu|lvot|obstrüksiyon|sam|sistolik öne hareket|mitral ön"],
      ["Üfürüm Valsalva ve ayağa kalkmayla artar, çömelmeyle azalır", "valsalva|ayağa kalk|çömel"],
      ["Genç sporcuda ani kardiyak ölüm; risk hesaplama ve ICD", "ani ölüm|ani kardiyak|sporcu|icd|defibrilatör|risk skoru|hcm risk"],
      ["Tedavi: beta bloker / verapamil; dehidratasyon ve vazodilatörden kaçın", "beta bloker|verapamil|diltiazem|dizopiramid|dehidratasyon|vazodilatör|nitrat"],
      ["Kardiyak miyozin inhibitörü (mavakamten)", "mavakamten|mavacamten|miyozin inhibit"],
      ["Septal miyektomi ya da alkol septal ablasyon", "miyektomi|alkol septal|septal ablasyon|septal redüksiyon"],
      ["Aile taraması (EKG, eko, genetik)", "aile tarama|birinci derece akraba|kaskad|akrabalar"]
    ]},
  { id: "kar-brugada", tr: "Brugada sendromu", en: "Brugada syndrome", cat: "rit", lvl: 3,
    src: { k: [BR, HA], m: [VA,
      ["J-Wave syndromes expert consensus conference report: Emerging concepts and gaps in knowledge. Heart Rhythm 2016", "https://doi.org/10.1016/j.hrthm.2016.05.024"]] },
    c: [
      ["!Sodyum kanalopatisi (SCN5A), çoğu genç erkek", "sodyum kanal|scn5a|kanalopati|genç erkek"],
      ["!Tip 1 EKG: sağ prekordiyal (V1–V2) koved ST yükselmesi", "koved|kubbe|coved|tip 1|tip bir|v1|v2|sağ prekordiyal|üst interkostal"],
      ["Sodyum kanal blokeri provokasyon testi (ajmalin, flekainid)", "ajmalin|flekainid|prokainamid|provokasyon|provoke|ilaçla ortaya"],
      ["Ateş ve bazı ilaçlar tetikler; ateş hızla düşürülmeli", "ateşle tetik|ateşli|febril|antipiretik|ateş düşür|ateş tetik"],
      ["!Ani ölüm / polimorf VT-VF, genelde uykuda ya da istirahatte", "ani ölüm|ani kardiyak|ventrikül fibrilasyon|polimorf|uykuda|geceleri|gece uyku"],
      ["Arrest sonrası ya da aritmik senkopta ICD", "icd|defibrilatör|aritmik senkop"],
      ["Kinidin ve kateter ablasyon seçenekleri", "kinidin|epikardiyal|ablasyon"],
      ["Tetikleyici ilaçlardan kaçınma ve aile taraması", "tetikleyici ilaç|brugadadrugs|aile tarama|akraba"]
    ]},
  { id: "kar-uzun-qt", tr: "Uzun QT sendromu", en: "Long QT syndrome", cat: "rit", lvl: 3,
    src: { k: [BR, HA], m: [VA,
      ["HRS/EHRA/APHRS expert consensus statement on the diagnosis and management of patients with inherited primary arrhythmia syndromes. Heart Rhythm 2013", "https://doi.org/10.1016/j.hrthm.2013.05.014"]] },
    c: [
      ["!Tanı: tekrarlanan EKG'de QTc ≥480 ms ya da risk skoru >3 (ESC 2022)", "480|dört yüz seksen|qtc|düzeltilmiş qt|schwartz|bazett"],
      ["!Torsades de pointes ve ani ölüm", "torsade|torsad|polimorf|ani ölüm|ani kardiyak"],
      ["!Genetik tipler: LQT1 (KCNQ1), LQT2 (KCNH2), LQT3 (SCN5A)", "lqt1|lqt 1|kcnq1|lqt2|lqt 2|kcnh2|herg|lqt3|lqt 3|scn5a"],
      ["Tetikleyiciler: LQT1 egzersiz/yüzme, LQT2 ani ses, LQT3 uyku", "yüzme|ani ses|alarm|çalar saat|sesle tetik|emosyonel stres|duygusal stres"],
      ["Beta bloker (nadolol, propranolol); LQT3'te meksiletin", "beta bloker|nadolol|propranolol|meksiletin"],
      ["QT uzatan ilaçlardan, hipokalemi/hipomagnezemiden kaçın", "qt uzatan|hipokalemi|hipomagnezemi|potasyum|makrolid|antipsikotik"],
      ["Romano-Ward (OD) ve Jervell-Lange-Nielsen (sağırlık, OR)", "romano|jervell|lange nielsen|sağırlık|işitme kaybı"],
      ["Yüksek riskte ICD ya da sol kardiyak sempatik denervasyon", "icd|defibrilatör|sempatik denervasyon|sol kardiyak sempatik"]
    ]},
  { id: "kar-senkop", tr: "Senkop", en: "Syncope", cat: "pul", lvl: 3,
    src: { k: [BR, HA], m: [
      ["2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J 2018", "https://doi.org/10.1093/eurheartj/ehy037"],
      ["2017 ACC/AHA/HRS Guideline for the Evaluation and Management of Patients With Syncope. Circulation 2017", "https://doi.org/10.1161/CIR.0000000000000499"]] },
    c: [
      ["!Tanım: serebral hipoperfüzyona bağlı geçici, kendiliğinden tam düzelen bilinç kaybı", "hipoperfüzyon|geçici bilinç kaybı|kendiliğinden|tam düzel|kısa süreli bilinç"],
      ["!Sınıflama: refleks (vazovagal), ortostatik, kardiyak", "refleks|vazovagal|vagal|ortostatik|kardiyak senkop|durumsal|karotis sinüs"],
      ["!İlk değerlendirme: öykü, muayene, ortostatik ölçüm, EKG", "öykü|anamnez|ortostatik ölçüm|yatarak ve ayakta|ayağa kalk|ekg|elektrokardiyo"],
      ["Yüksek risk bulguları: efor sırasında, yatarken, çarpıntı, yapısal kalp hastalığı, aile öyküsü", "efor sırasında|egzersiz sırasında|yatarken|çarpıntı|yapısal kalp|aile öykü|ani ölüm"],
      ["Tilt testi ve karotis sinüs masajı", "tilt|eğim masası|karotis sinüs masaj"],
      ["Uzun süreli ritim izlemi: Holter, implante loop kaydedici", "holter|loop kaydedici|loop recorder|implante|ritim izlem"],
      ["Ayırıcı tanı: epileptik nöbet, psikojenik", "epilep|nöbet|psikojenik|dil ısırma"],
      ["Refleks senkopta eğitim ve fiziksel karşı manevralar", "karşı manevra|bacak çaprazla|hasta eğitim|tetikleyicilerden|sıvı ve tuz|tuz alım"]
    ]},
  { id: "kar-wpw", tr: "Wolff-Parkinson-White sendromu", en: "Wolff-Parkinson-White syndrome", cat: "rit", lvl: 3,
    src: { k: [BR, HA], m: [
      ["2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J 2020", "https://doi.org/10.1093/eurheartj/ehz467"],
      ["2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. Circulation 2016", "https://doi.org/10.1161/CIR.0000000000000311"]] },
    c: [
      ["!Aksesuar yol (Kent demeti) ile ventrikül preeksitasyonu", "aksesuar|ek yol|kent|preeksitasyon|pre eksitasyon"],
      ["!EKG: kısa PR, delta dalgası, geniş QRS", "delta|kısa pr|pr kısa|geniş qrs"],
      ["AVRT: ortodromik (dar QRS) ve antidromik", "avrt|atriyoventriküler reentran|ortodromik|antidromik|reentri|reentran"],
      ["!Preeksite AF'de AV düğüm blokerleri kontrendike", "av düğüm bloke|av nodal bloke|adenozin|verapamil|digoksin"],
      ["Preeksite AF ani ölüme (VF) dönebilir", "ventrikül fibrilasyon|ani ölüm|ani kardiyak|vf"],
      ["Akut: instabilde kardiyoversiyon, stabilde prokainamid/ibutilid", "kardiyoversiyon|prokainamid|ibutilid|flekainid"],
      ["Kesin tedavi: kateter ablasyon", "ablasyon|radyofrekans"],
      ["Ebstein anomalisiyle ilişki", "ebstein"]
    ]}
]
});
})();
