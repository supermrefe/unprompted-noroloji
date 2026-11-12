/* Anesteziyoloji ve reanimasyon — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta sık sorulan farmakoloji (indüksiyon ajanları, MAK, nöromüsküler blokerler, opioidler) ile
   her hekimin bilmesi gereken perioperatif güvenlik konuları (ASA sınıfı, açlık, monitorizasyon, sedasyon) ve
   asistan düzeyinde hayat kurtaran krizler (zor havayolu, malign hipertermi, LAST, nöroaksiyel blok-antikoagülan).
   Hızlı ardışık entübasyon acil paketinde olduğu için alınmadı. */
UP.add({ id: "anesteziyoloji", subs: {
    pre: "Preoperatif değerlendirme ve güvenlik",
    far: "Anestezi farmakolojisi",
    rej: "Rejyonel anestezi ve ağrı",
    kri: "Perioperatif krizler"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "anes-asa-fiziksel-durum", tr: "ASA fiziksel durum sınıflaması", en: "ASA physical status classification", cat: "pre", lvl: 1,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["ASA Physical Status Classification System (son güncelleme 2020). American Society of Anesthesiologists", null],
          ["Mayhew D, Mendonca V, Murthy BVS. A review of ASA physical status – historical perspectives and modern developments. Anaesthesia 2019", null]]
    },
    c: [
      ["!Ameliyat öncesi hastanın genel sağlık durumunu sınıflayan sistem", "fiziksel durum|physical status|asa sınıf|asa skor|asa skal|asa 1|asa bir"],
      ["!ASA I sağlıklı, ASA II hafif, ASA III ağır sistemik hastalık", "sağlıklı hasta|hafif sistemik|ağır sistemik|kontrollü hipertansiyon|kontrolsüz|morbid obez"],
      ["ASA IV: sürekli yaşamı tehdit eden ağır sistemik hastalık", "sürekli yaşamı tehdit|sürekli hayatı tehdit|asa 4|asa dört|asa iv"],
      ["ASA V: ameliyatsız yaşaması beklenmeyen moribund hasta", "moribund|ameliyatsız yaşa|ameliyat olmadan yaşa|asa 5|asa beş"],
      ["ASA VI: organ bağışı için beyin ölümü gerçekleşmiş hasta", "beyin ölümü|organ bağış|organ donör|asa 6|asa altı"],
      ["Acil ameliyatta sınıfa E harfi eklenir", "e harfi|e eki|harfi e|e ekle|emergency|acil girişim|acil ameliyat|acil cerrahi"],
      ["Öznel bir ölçüttür; cerrahi riski tek başına göstermez", "öznel|subjektif|gözlemciler arası|cerrahinin riski|ameliyatın riski|cerrahi işlemin riski|tek başına risk"]
    ]},
  { id: "anes-preoperatif-aclik", tr: "Preoperatif açlık kuralları", en: "Preoperative fasting guidelines", cat: "pre", lvl: 1,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Joshi GP ve ark. 2023 American Society of Anesthesiologists Practice Guidelines for Preoperative Fasting: Carbohydrate-containing Clear Liquids with or without Protein, Chewing Gum, and Pediatric Fasting Duration. Anesthesiology 2023", null],
          ["Practice Guidelines for Preoperative Fasting and the Use of Pharmacologic Agents to Reduce the Risk of Pulmonary Aspiration. Anesthesiology 2017", null]]
    },
    c: [
      ["!Amaç: pulmoner aspirasyon riskini azaltmak", "aspirasyon|mendelson|mide içeriği|akciğere kaç|aspire"],
      ["!Berrak sıvılar 2 saat öncesine kadar serbest (ASA, erişkin; çocukta Avrupa kılavuzları 1 saat önerir)", "berrak sıvı|şeffaf sıvı|clear liquid|2 saat|iki saat|posasız meyve suyu|sade çay"],
      ["Anne sütü 4 saat", "anne süt|emzir|4 saat|dört saat"],
      ["Mama/inek sütü ve hafif öğün 6 saat", "mama|formül süt|hafif öğün|hafif yemek|kahvaltı|6 saat|altı saat"],
      ["Yağlı/kızartma ya da etli yemek 8 saat veya daha uzun", "yağlı|kızartma|etli|8 saat|sekiz saat"],
      ["Karbonhidratlı berrak içecekler ameliyattan 2 saat öncesine kadar içilebilir (ASA 2023)", "karbonhidrat|karbonhidratlı içecek|şekerli berrak|karbonhidrat yükle"],
      ["Gereksiz uzun açlıktan kaçın: susuzluk, hipoglisemi, dehidratasyon", "uzun açlık|gereksiz açlık|uzamış açlık|dehidrat|susuzluk|hipoglisemi|konfor"],
      ["Gecikmiş mide boşalması (diyabet, GLP-1 agonisti, obezite, gebelik) olanlarda dikkat", "mide boşalma|gastroparez|glp|semaglutid|tok mide|dolu mide|gastrik ultrason|mide ultrason"]
    ]},
  { id: "anes-iv-induksiyon-ajanlari", tr: "İntravenöz indüksiyon ajanları (propofol, ketamin, etomidat)", en: "Intravenous induction agents", cat: "far", lvl: 1,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Khan KS, Hayes I, Buggy DJ. Pharmacology of anaesthetic agents I: intravenous anaesthetic agents. Contin Educ Anaesth Crit Care Pain 2014", null],
          ["Sahinovic MM, Struys MMRF, Absalom AR. Clinical Pharmacokinetics and Pharmacodynamics of Propofol. Clin Pharmacokinet 2018", null]]
    },
    c: [
      ["!Propofol: GABA-A, hızlı uyanma, antiemetik; hipotansiyon ve enjeksiyon ağrısı", "propofol"],
      ["Propofol infüzyon sendromu: uzun süre yüksek doz infüzyonda asidoz, rabdomiyoliz", "infüzyon sendrom|pris|rabdomiyoliz|metabolik asidoz"],
      ["!Ketamin: NMDA antagonisti, disosiyatif anestezi, analjezik; kan basıncını korur", "ketamin|nmda|disosiyatif|dissosiyatif"],
      ["Ketamin bronkodilatördür, havayolu reflekslerini görece korur; halüsinasyon/kötü rüya yapabilir", "bronkodilat|astım|halüsinasyon|kabus|kötü rüya|hava yolu refleks|havayolu refleks|sekresyon"],
      ["!Etomidat: hemodinamik stabilite; adrenal baskılama (11-beta hidroksilaz)", "etomidat|adrenal|11 beta|on bir beta|kortizol|hidroksilaz"],
      ["Etomidatta miyoklonus ve bulantı-kusma", "miyoklonus|myoklonus|miyoklon"],
      ["Tiyopental (barbitürat) ve midazolam (benzodiazepin) diğer seçenekler", "tiyopental|thiopental|pentotal|barbitür|midazolam|benzodiazepin"]
    ]},
  { id: "anes-monitorizasyon-kapnografi", tr: "Standart anestezi monitorizasyonu ve kapnografi", en: "Standard monitoring and capnography", cat: "pre", lvl: 1,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["ASA Standards for Basic Anesthetic Monitoring. American Society of Anesthesiologists", null],
          ["Klein AA ve ark. Recommendations for standards of monitoring during anaesthesia and recovery 2021 (AAGBI). Anaesthesia 2021", null]]
    },
    c: [
      ["!Anestezi süresince anestezistin sürekli başında bulunması", "sürekli başında|sürekli başta|başta bulun|sürekli bulun|anestezist bulun|anestezi uzmanı sürekli|başından ayrıl|odada bulun"],
      ["!Oksijenasyon: pulse oksimetri, inspire oksijen ölçümü", "pulse oksimetr|puls oksimetr|pulsoksimetr|satürasyon|spo2|inspire oksijen"],
      ["!Ventilasyon: kapnografi ile ekspirasyon sonu karbondioksit", "kapnograf|kapnometr|end tidal|endtidal|etco2|ekspirasyon sonu|soluk sonu"],
      ["Kapnografi entübasyon tüpünün trakeada olduğunu doğrular", "trakeada|özofagus entübasyon|özofageal entübasyon|tüp yeri|tüpün yer|tüp doğru"],
      ["Dolaşım: sürekli EKG, aralıklı kan basıncı ölçümü", "ekg|elektrokardiyo|kan basınc|tansiyon|non invaziv|noninvaziv|arter kateter"],
      ["Vücut ısısı izlemi", "vücut ısı|ısı izle|sıcaklık|termometr|hipoterm"],
      ["Gerektiğinde nöromüsküler (TOF) ve derinlik (BIS) monitorizasyonu", "tof|dörtlü uyarı|train of four|bis|bispektral|anestezi derinliğ|nöromüsküler monitör"]
    ]},
  { id: "anes-sedasyon-duzeyleri", tr: "Sedasyon düzeyleri ve prosedürel sedasyon", en: "Continuum of depth of sedation", cat: "pre", lvl: 1,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Practice Guidelines for Moderate Procedural Sedation and Analgesia 2018. Anesthesiology 2018", null],
          ["ASA Continuum of Depth of Sedation: Definition of General Anesthesia and Levels of Sedation/Analgesia. American Society of Anesthesiologists", null]]
    },
    c: [
      ["!Sedasyon bir süreklilik: minimal, orta, derin sedasyon ve genel anestezi", "süreklilik|kontinuum|continuum|minimal sedasyon|anksiyoliz|orta sedasyon|orta düzey sedasyon|bilinçli sedasyon|derin sedasyon"],
      ["!Orta sedasyonda sözel uyarana amaçlı yanıt; havayolu ve solunum yeterli", "sözel uyaran|sözlü uyaran|seslenince|amaçlı yanıt|amaçlı cevap|anlamlı yanıt"],
      ["Derin sedasyonda ancak tekrarlayan/ağrılı uyarana yanıt; solunum yetersiz olabilir", "ağrılı uyaran|tekrarlayan uyaran|tekrarlı uyaran|kolay uyandırılama"],
      ["Genel anestezide ağrılı uyarana bile yanıt yok, havayolu desteği sıklıkla gerekir", "ağrılıya bile|ağrılı uyarana bile|ağrıya bile|hiçbir uyarana|sıklıkla havayolu desteğ|sıklıkla hava yolu desteğ|genellikle havayolu desteğ"],
      ["!Hedeflenenden derine kayan hastayı kurtarabilme (rescue) yeteneği", "kurtar|rescue|bir üst düzey|bir derin|derine kay|derinleş"],
      ["İzlem: pulse oksimetri, kapnografi, kan basıncı; ayrı bir izleyen kişi", "kapnograf|pulse oksimetr|puls oksimetr|izleyen kişi|ayrı bir kişi"],
      ["Sık ajanlar: midazolam, propofol, opioid; antidotlar flumazenil ve nalokson", "midazolam|flumazenil|nalokson|naloxon|propofol|deksmedetomidin"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "anes-inhalasyon-anestezikleri", tr: "İnhalasyon anestezikleri ve MAK", en: "Inhalational anesthetics and MAC", cat: "far", lvl: 2,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Eger EI 2nd, Saidman LJ, Brandstater B. Minimum alveolar anesthetic concentration: a standard of anesthetic potency. Anesthesiology 1965", null],
          ["Miller AL, Theodore D, Widrich J. Inhalational Anesthetic. StatPearls", null]]
    },
    c: [
      ["!MAK: cerrahi kesiye hastaların %50'sinin hareket yanıtı vermediği alveoler konsantrasyon", "minimum alveoler|minimal alveoler|mak değer|mac değer|yüzde 50|%50|yarısında hareket|hastaların yarısı"],
      ["!MAK düştükçe potens artar", "mak düşük|düşük mak|mak değeri düşük|ne kadar düşükse|ters orantı|mak azaldıkça|mak düştükçe"],
      ["MAK'ı azaltanlar: ileri yaş, gebelik, hipotermi, opioid/sedatifler; artıranlar: hipertermi, kronik alkol", "ileri yaş|yaşlılarda|gebelik|hipoterm|hipertermi|kronik alkol|alkoliz|kızıl saç"],
      ["!Kan/gaz partisyon katsayısı düşük olan ajanda indüksiyon ve uyanma hızlı", "kan gaz|partisyon|çözünürlük|çözünür|indüksiyon hızı|hızlı uyan|uyanma hızı"],
      ["Sevofluran: hava yolunu irrite etmez, inhalasyon indüksiyonu (çocuk)", "sevofluran|sevoflurane|maske ile indüksiyon|maskeyle indüksiyon|inhalasyon indüksiyon"],
      ["Desfluran: hızlı uyanma ama havayolu irritasyonu; izofluran", "desfluran|desflurane|izofluran|isofluran|izoflurane"],
      ["Azot protoksit: kapalı gaz boşluklarını genişletir, ikinci gaz etkisi", "azot protoksit|nitröz|nitrous|kapalı boşluk|pnömotoraks|ikinci gaz|difüzyon hipoks"],
      ["Volatil ajanlar ve süksinilkolin malign hipertermiyi tetikleyebilir", "malign hipertermiyi tetik|malign hipertermi tetik|malign hipertermi tetikleyici|tetikleyici ajan"]
    ]},
  { id: "anes-noromuskuler-blokerler", tr: "Nöromüsküler blokerler ve geri çevrilmesi (sugammadeks)", en: "Neuromuscular blockers and reversal", cat: "far", lvl: 2,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Thilen SR ve ark. 2023 American Society of Anesthesiologists Practice Guidelines for Monitoring and Antagonism of Neuromuscular Blockade. Anesthesiology 2023", null],
          ["Fuchs-Buder T ve ark. Peri-operative management of neuromuscular blockade: a guideline from the European Society of Anaesthesiology and Intensive Care. Eur J Anaesthesiol 2023", null]]
    },
    c: [
      ["!Depolarizan: süksinilkolin — fasikülasyon, hızlı başlangıç, kısa etki", "süksinil|suksinil|suxamethon|süksametonyum|fasikülasyon"],
      ["!Süksinilkolinin yan etkileri: hiperkalemi, malign hipertermi, bradikardi; psödokolinesteraz eksikliğinde uzamış blok", "hiperkalemi|potasyum yüksel|psödokolinesteraz|plazma kolinesteraz|bütirilkolinesteraz|uzamış apne|uzamış blok"],
      ["Nondepolarizan aminosteroidler (rokuronyum, veküronyum) ve benzilizokinolinler (atrakuryum, sisatrakuryum)", "nondepolarizan|non depolarizan|rokuronyum|roküronyum|rocuronium|veküronyum|vekuronyum|atrakuryum|sisatrakuryum|cisatracurium"],
      ["Sisatrakuryum Hofmann eliminasyonu: böbrek-karaciğerden bağımsız", "hofmann|organdan bağımsız|böbrekten bağımsız|karaciğerden bağımsız"],
      ["!Sugammadeks rokuronyum/veküronyumu kapsülleyerek bağlar", "sugammadeks|sugamadeks|sugammadex|kapsül|enkapsül|siklodekstrin"],
      ["Neostigmin asetilkolinesterazı inhibe eder; antikolinerjikle (glikopirolat/atropin) verilir", "neostigmin|asetilkolinesteraz|kolinesteraz inhib|glikopirolat|glikoprolat|atropin"],
      ["!Kantitatif nöromüsküler izlem; TOF oranı 0,9'a ulaşmadan ekstübe etme (rezidüel blok)", "tof oranı 0,9|tof oranının 0,9|0,9 un üzer|0,9 a ulaş|0,9 un altında ekstübe|sıfır virgül dokuz|yüzde doksan|kantitatif"]
    ]},
  { id: "anes-noroaksiyel-anestezi", tr: "Spinal-epidural anestezi ve postdural ponksiyon baş ağrısı", en: "Neuraxial anesthesia and post-dural puncture headache", cat: "rej", lvl: 2,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Uppal V ve ark. Consensus Practice Guidelines on Postdural Puncture Headache From a Multisociety, International Working Group. JAMA Netw Open 2023", null],
          ["Bauer ME ve ark. Neuraxial Procedures in Obstetric Patients With Thrombocytopenia (SOAP). Anesth Analg 2021", null]]
    },
    c: [
      ["!Spinal: subaraknoid boşluğa, BOS gelince düşük doz lokal anestezik; hızlı ve yoğun blok", "spinal anestezi|subaraknoid|intratekal|bos gel|beyin omurilik sıvı|beyin omurilik sıvısı|serebrospinal"],
      ["!Epidural: epidural boşluğa kateter, direnç kaybı tekniği; segmental ve titre edilebilir", "epidural|direnç kaybı|loss of resistance|kateter|segmenter|segmental|titre"],
      ["İğne omuriliğin sonlandığı düzeyin altında (bel aralığı) girilir", "konus|conus|l3 l4|l4 l5|l üç|l dört|bel aralığ|lomber aralık|omuriliğin bitt|omuriliğin sonlan"],
      ["!Sempatik blok ile hipotansiyon ve bradikardi; yüksek/total spinal", "sempatik blok|sempatik bloğ|spinal hipotansiyon|hipotansiyon ve bradikardi|total spinal|yüksek spinal|yüksek blok"],
      ["!PDPH: ayağa kalkınca artan, yatınca azalan baş ağrısı (BOS kaçağı)", "postdural|post dural|ponksiyon sonrası baş|postüral|pozisyonel baş|ayağa kalkınca|oturunca art|yatınca geç|yatınca azal|bos kaçağı"],
      ["Risk azaltma: ince, kalem uçlu (atravmatik) iğne", "kalem uçlu|kalem ucu|pencil point|atravmatik|whitacre|sprotte|ince iğne|ince uçlu"],
      ["Tedavi: analjezik, istenirse kafein (hidrasyonun yararı gösterilmemiş); dirençli/şiddetli olguda epidural kan yaması", "kan yama|blood patch|kafein|epidural yama"],
      ["Ciddi komplikasyonlar: epidural hematom ve apse", "epidural hematom|spinal hematom|epidural apse|nörolojik defisit|kauda"]
    ]},
  { id: "anes-postoperatif-bulanti-kusma", tr: "Postoperatif bulantı-kusma (PONV)", en: "Postoperative nausea and vomiting", cat: "far", lvl: 2,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Gan TJ ve ark. Fourth Consensus Guidelines for the Management of Postoperative Nausea and Vomiting. Anesth Analg 2020", null],
          ["Apfel CC ve ark. A simplified risk score for predicting postoperative nausea and vomiting. Anesthesiology 1999", null]]
    },
    c: [
      ["!Apfel risk skoru: kadın cinsiyet, sigara içmeme, PONV/taşıt tutması öyküsü, postoperatif opioid", "apfel|kadın cinsiyet|kadın olmak|sigara içmeme|sigara içmeyen|sigara kullanmayan|non smoker|taşıt tutma|hareket hastalığ|araç tutma"],
      ["Anestezik risk: volatil ajanlar, azot protoksit, postoperatif opioid; laparoskopi gibi cerrahi tip", "volatil|inhalasyon ajan|azot protoksit|laparoskop|cerrahi tip"],
      ["!Temel riski azalt: TİVA (propofol), bölgesel anestezi, opioid koruyucu analjezi", "tiva|total intravenöz|propofol|bölgesel anestezi|rejyonel|opioid koruyucu|opioid tasarruf|opioid azalt|opioidsiz"],
      ["!Risk faktörü sayısına göre multimodal profilaksi (iki ya da daha fazla antiemetik)", "multimodal profilaks|antiemetik profilaks|kombine antiemetik|iki antiemetik|ikili antiemetik|birden fazla antiemetik|iki ya da daha fazla antiemetik"],
      ["Antiemetikler: 5-HT3 antagonisti (ondansetron), deksametazon, droperidol, NK-1 antagonisti (aprepitant), skopolamin", "ondansetron|setron|5 ht3|serotonin antagon|deksametazon|droperidol|aprepitant|nk1|nk 1|skopolamin|haloperidol"],
      ["Kurtarma tedavisinde profilakside kullanılmayan farklı sınıftan ilaç", "farklı sınıf|başka sınıf|farklı grup|kurtarma|rescue"],
      ["Sonuçları: hasta memnuniyetsizliği, taburculuk gecikmesi, aspirasyon, dikiş açılması", "memnuniyet|taburculuk gecik|derlenme ünitesinde kalış|yara açıl|dikiş açıl"]
    ]},
  { id: "anes-opioid-farmakolojisi-pca", tr: "Opioid farmakolojisi ve hasta kontrollü analjezi (PCA)", en: "Opioid pharmacology and patient-controlled analgesia", cat: "rej", lvl: 2,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Chou R ve ark. Management of Postoperative Pain: A Clinical Practice Guideline From the American Pain Society, ASRA and ASA. J Pain 2016", null],
          ["Grass JA. Patient-controlled analgesia. Anesth Analg 2005", null]]
    },
    c: [
      ["!Etki mu (μ) opioid reseptörü üzerinden", "mu reseptör|mü reseptör|mu opioid|mü opioid|opioid reseptör"],
      ["Ajanlar: morfin, fentanil, remifentanil (plazma esterazları, ultra kısa), meperidin", "morfin|fentanil|fentanyl|remifentanil|sufentanil|alfentanil|meperidin|petidin|tramadol"],
      ["!Yan etkiler: solunum depresyonu, sedasyon, bulantı, kabızlık, kaşıntı, miyozis", "solunum depres|solunum baskıla|hipoventil|kabızlık|konstipasyon|kaşıntı|prurit|miyozis|myozis|toplu iğne başı"],
      ["Opioid zehirlenmesi/solunum depresyonunda nalokson", "nalokson|naloxon"],
      ["Morfin metaboliti (M6G) böbrek yetmezliğinde birikir; meperidinin normeperidini nöbet yapar", "m6g|morfin 6|morfin metabolit|metaboliti birik|normeperidin"],
      ["!PCA: hasta bolus dozunu kendisi verir; kilitlenme süresi ve doz sınırı ile güvenlik", "pca|hasta kontrollü|kilitlenme|lockout|kilit süre|bolus doz|düğme|kendi kendine doz"],
      ["PCA'da rutin bazal infüzyon önerilmez (opioid-naif erişkinde solunum depresyonu riski)", "rutin bazal|bazal infüzyon önerilmez|bazal infüzyon verilmez|bazal infüzyon kullanılmaz|bazal infüzyondan kaçın|bazal infüzyon rutin|rutin önerilmez"],
      ["Sedasyon ve solunum sayısının düzenli izlemi", "sedasyon skor|sedasyon düzey|solunum sayı|solunum hız"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "anes-zor-havayolu", tr: "Zor havayolu yönetimi (ASA 2022, DAS)", en: "Difficult airway management", cat: "kri", lvl: 3,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Apfelbaum JL ve ark. 2022 American Society of Anesthesiologists Practice Guidelines for Management of the Difficult Airway. Anesthesiology 2022", null],
          ["Frerk C ve ark. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. Br J Anaesth 2015", null]]
    },
    c: [
      ["!Preoperatif havayolu değerlendirmesi: Mallampati, ağız açıklığı, tiromental mesafe, boyun hareketi, öykü", "mallampati|ağız açıklığ|tiromental|boyun hareket|boyun ekstansiyon|lemon|önceki zor entübasyon|zor entübasyon öykü"],
      ["Zor maske ventilasyonu öngördürücüleri: sakal, obezite, dişsizlik, horlama/OSA, ileri yaş", "sakal|dişsiz|horlama|uyku apne|osa|maske ventilasyon"],
      ["!Beklenen zor havayolunda uyanık entübasyon (fiberoptik/videolaringoskop) seçeneği", "uyanık entübasyon|uyanık fiberoptik|awake|fiberoptik|bronkoskop|spontan solunum koru"],
      ["Videolaringoskop kullanımı, deneme sayısını sınırla", "videolaringoskop|video laringoskop|glidescope|mcgrath|deneme sayısı|girişim sayısını sınırla|üç deneme|denemeyi sınırla"],
      ["!Entübasyon başarısızsa oksijenasyona öncelik: supraglottik havayolu (LMA) ile kurtarma", "supraglottik|lma|laringeal maske|i gel|oksijenasyon öncelik|önce oksijen"],
      ["!Entübe edilemiyor-oksijenize edilemiyor (CICO): acil önden boyun erişimi (skalpel krikotiroidotomi)", "cico|cvci|entübe edilemiyor|oksijenize edilemiyor|krikotiroid|skalpel|önden boyun|front of neck|cerrahi havayolu"],
      ["Preoksijenasyon ve apneik oksijenasyon (yüksek akım nazal)", "preoksijen|apneik oksijen|yüksek akım|nazal kanül|hfno"],
      ["Ekstübasyon planı ve hastaya zor havayolu bilgisinin bildirilmesi", "ekstübasyon plan|ekstübasyon strateji|zor havayolu kartı|uyarı kartı|bilgilendir|kayda geç"]
    ]},
  { id: "anes-malign-hipertermi", tr: "Malign hipertermi", en: "Malignant hyperthermia", cat: "kri", lvl: 3,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Rosenberg H ve ark. Malignant hyperthermia: a review. Orphanet J Rare Dis 2015", null],
          ["Glahn KPE ve ark. Recognizing and managing a malignant hyperthermia crisis: guidelines from the European Malignant Hyperthermia Group. Br J Anaesth 2020", null]]
    },
    c: [
      ["!Farmakogenetik iskelet kası hastalığı: RYR1 (ryanodin reseptörü) mutasyonu, otozomal dominant", "ryr1|ryanodin|riyanodin|cacna1s|otozomal dominant|farmakogenetik|genetik yatkın"],
      ["!Tetikleyiciler: volatil anestezikler ve süksinilkolin", "volatil|sevofluran|desfluran|izofluran|halotan|inhalasyon ajan|süksinil|suksinil"],
      ["Mekanizma: sarkoplazmik retikulumdan kontrolsüz kalsiyum salınımı, hipermetabolizma", "sarkoplazmik|kalsiyum salın|hücre içi kalsiyum|hipermetabol"],
      ["!En erken bulgu: açıklanamayan end-tidal CO2 artışı ve taşikardi; masseter rijiditesi, kas rijiditesi", "end tidal|etco2|karbondioksit art|co2 art|hiperkapni|masseter|kas rijid|rijidite|taşikardi"],
      ["Geç bulgular: ateş, rabdomiyoliz, hiperkalemi, miyoglobinüri, asidoz", "rabdomiyoliz|hiperkalemi|miyoglobin|myoglobin|ck yüksel|kreatin kinaz|asidoz|vücut ısısı art|ısı yüksel"],
      ["!Tedavi: tetikleyiciyi kes, yardım çağır, %100 oksijenle hiperventilasyon, dantrolen (2,5 mg/kg)", "dantrolen|dantrolene|2 5 mg|iki buçuk miligram|ryanodex"],
      ["Destek: aktif soğutma, hiperkalemi ve aritmi tedavisi, idrar çıkışı izlemi; yoğun bakım", "soğut|hiperkalemi tedavi|insülin glukoz|idrar çıkış"],
      ["Tanı: kafein-halotan kontraktür testi (kas biyopsisi) ve genetik test; ailenin taranması", "kontraktür test|kafein halotan|ivct|kas biyopsi|genetik test|aile tara|akrabalar"]
    ]},
  { id: "anes-lokal-anestezik-toksisitesi", tr: "Lokal anestezik sistemik toksisitesi (LAST)", en: "Local anesthetic systemic toxicity", cat: "kri", lvl: 3,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Neal JM ve ark. The Third American Society of Regional Anesthesia and Pain Medicine Practice Advisory on Local Anesthetic Systemic Toxicity: Executive Summary 2017. Reg Anesth Pain Med 2018", null],
          ["Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine Local Anesthetic Systemic Toxicity checklist: 2020 version. Reg Anesth Pain Med 2021", null]]
    },
    c: [
      ["!Neden: lokal anesteziğin damar içine kaçması ya da aşırı doz; bupivakain en kardiyotoksik", "lokal anestezik damar|damar içine kaç|damar içine ver|intravasküler enjeksiyon|lokal anestezik doz|bupivakain|bupivacaine|kardiyotoksik"],
      ["!Erken SSS bulguları: perioral uyuşma, metalik tat, kulak çınlaması, ajitasyon; nöbet", "perioral|ağız çevresi|metalik tat|metal tadı|kulak çınla|tinnitus"],
      ["Kardiyovasküler: aritmi, iletim bloğu, hipotansiyon, arrest", "iletim bloğ|kardiyotoks|kardiyovasküler bulgu|kardiyak bulgu"],
      ["Önleme: en düşük etkili doz, aspirasyon, artan dozlarla enjeksiyon, ultrason rehberliği", "en düşük etkili|aspire ederek|aspirasyon|artan doz|bölerek|fraksiyone|ultrason|usg|test doz"],
      ["!Tedavi ASRA kontrol listesiyle; nöbet için benzodiazepin", "nöbetlerde benzodiazepin|nöbet benzodiazepinle|benzodiazepinle kontrol|nöbette benzodiazepin|nöbet için benzodiazepin|asra kontrol|kontrol liste|checklist"],
      ["!%20 lipid emülsiyonu: erken başla", "lipid emülsiyon|lipit emülsiyon|intralipid|yağ emülsiyon|lipid tedavi|lipid ver|lipid infüzyon"],
      ["Arrestte KPR; adrenalini düşük dozda kullan, vazopresin/kalsiyum kanal/beta bloker/lokal anestezik verme", "düşük doz adrenalin|adrenalini düşük|küçük doz adrenalin|vazopresin verme|lidokain verme|uzamış kpr|ecmo|kardiyopulmoner bypass"]
    ]},
  { id: "anes-noroaksiyel-antikoagulasyon", tr: "Antikoagülan kullanan hastada nöroaksiyel blok (ASRA, ESAIC/ESRA)", en: "Neuraxial anesthesia in anticoagulated patients", cat: "rej", lvl: 3,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Horlocker TT ve ark. Regional Anesthesia in the Patient Receiving Antithrombotic or Thrombolytic Therapy: ASRA Evidence-Based Guidelines (Fourth Edition). Reg Anesth Pain Med 2018", null],
          ["Kietaibl S ve ark. Regional anaesthesia in patients on antithrombotic drugs: Joint ESAIC/ESRA guidelines. Eur J Anaesthesiol 2022", null]]
    },
    c: [
      ["!Asıl risk: spinal-epidural hematom ve kalıcı nörolojik hasar", "spinal hematom|epidural hematom|nöroaksiyel hematom|parapleji|kalıcı nörolojik|omurilik bası"],
      ["!DMAH profilaktik dozdan sonra 12 saat, tedavi dozundan sonra 24 saat beklenir", "tedavi dozunda 24|tedavi dozundaysa 24|tedavi dozundan sonra 24|tedavi dozunda yirmi dört|tedavi dozundaysa yirmi dört|terapötik dozda 24|terapötik dozdan sonra 24"],
      ["Kateter çekme zamanı da antikoagülan dozlamasına göre planlanır", "kateter çek|kateteri çek|kateter çekilme|kateterin çıkarıl|kateter çıkar|kateterin çekil|kateter çıkarıl"],
      ["Varfarinde INR normalleşmeli", "varfarin|warfarin|kumadin|coumadin|inr"],
      ["P2Y12 inhibitörleri (klopidogrel, prasugrel, tikagrelor) blok öncesi ilaca özgü süre kesilir; aspirin/NSAİİ tek başına engel değil", "ilaca özgü|gün önce kesil|gün kesil|kesilmeli|kesilmesi gerek|aspirin tek başına|nsaii tek başına|nsaii ler tek başına"],
      ["DOAK'larda (rivaroksaban, apiksaban, dabigatran) bekleme süresi ilaca ve böbrek fonksiyonuna göre", "doak|yoak|rivaroksaban|apiksaban|dabigatran|edoksaban|kreatinin klirens|böbrek fonksiyon"],
      ["Blok sonrası nörolojik izlem; şüphede acil MR ve cerrahi dekompresyon", "nörolojik izlem|nörolojik muayene|motor blok|emar|mr|manyetik rezonans|dekompres|laminektomi"]
    ]},
  { id: "anes-multimodal-postoperatif-analjezi", tr: "Multimodal postoperatif analjezi", en: "Multimodal postoperative analgesia", cat: "rej", lvl: 3,
    src: {
      k: ["Miller's Anesthesia, 10. baskı (2024)", "Morgan & Mikhail's Clinical Anesthesiology, 7. baskı (2022)"],
      m: [["Chou R ve ark. Management of Postoperative Pain: A Clinical Practice Guideline From the American Pain Society, ASRA and ASA. J Pain 2016", null],
          ["Joshi GP ve ark. PROSPECT (procedure-specific postoperative pain management) methodology and recommendations. Anaesthesia 2019", null]]
    },
    c: [
      ["!Farklı mekanizmalı analjeziklerin birlikte kullanımı; opioid ihtiyacını ve yan etkilerini azaltır", "multimodal|farklı mekanizma|sinerj|opioid koruyucu|opioid tasarruf|opioid ihtiyac|opioid tüketim|opioid gereksinim"],
      ["!Temel: kontrendikasyon yoksa düzenli parasetamol ve NSAİİ/COX-2 inhibitörü", "parasetamol|asetaminofen|nsaii|nonsteroid|ibuprofen|diklofenak|ketorolak|cox 2|koks 2|selekoksib"],
      ["!Bölgesel teknikler: periferik sinir blokları, fasya düzlem blokları, yara infiltrasyonu, epidural", "sinir blo|periferik blok|fasya düzlem|tap blok|erektör spina|infiltrasyon|epidural analjezi|rejyonel teknik|bölgesel teknik"],
      ["Yardımcı ajanlar: deksametazon, ketamin, IV lidokain, gabapentinoidler (rutin değil)", "deksametazon|ketamin|lidokain infüzyon|iv lidokain|deksmedetomidin|magnezyum|gabapentinoid rutin değil|gabapentinoidlerin rutin"],
      ["Opioid kurtarma amaçlı, mümkün olan en kısa süre ve düşük dozda", "kurtarma|kurtarıcı|rescue|en kısa süre|düşük doz opioid|gerektiğinde opioid"],
      ["İşleme özgü analjezi önerileri (PROSPECT)", "prospect|işleme özgü|prosedüre özgü|cerrahiye özgü|ameliyata özgü"],
      ["Düzenli ağrı değerlendirmesi (sayısal skala) ve kronik postoperatif ağrının önlenmesi", "ağrı skala|ağrı skor|sayısal derecelendirme|vas|vizüel analog|kronik ağrı|kronikleş|kalıcı ağrı"]
    ]}
]
});
