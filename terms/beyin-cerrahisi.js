/* Beyin cerrahisi — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta sık sorulan ve beyin cerrahının acilde/serviste ilk karar verdiği tablolar — kafa travması
   (BTF 4. baskı), kitle etkili hematomlar, KİBAS/herniasyon, omurga acilleri (kauda ekuina, omurilik yaralanması, AO Spine),
   WHO CNS5 (2021) tümörleri ve vasküler cerrahi (anevrizma tedavisi/vazospazm, AVM). Nöroloji paketindeki SAK kliniği,
   NPH, lomber radikülopati ve GKS bilerek alınmadı; anevrizma konusu yalnız tedavi ve vazospazma odaklanır. */
UP.add({ id: "beyin-cerrahisi", subs: {
    trv: "Nörotravma",
    oms: "Omurga ve omurilik",
    onk: "Beyin tümörleri ve hipofiz",
    vas: "Nörovasküler cerrahi",
    gel: "Hidrosefali, enfeksiyon ve gelişimsel"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "bc-epidural-subdural-hematom", tr: "Epidural ve akut subdural hematom", en: "Epidural vs acute subdural hematoma", cat: "trv", lvl: 1,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Bullock MR ve ark. Surgical management of acute epidural hematomas. Neurosurgery 2006", "https://pubmed.ncbi.nlm.nih.gov/16710967/"],
          ["Bullock MR ve ark. Surgical management of acute subdural hematomas. Neurosurgery 2006", "https://pubmed.ncbi.nlm.nih.gov/16710968/"]]
    },
    c: [
      ["!Epidural: çoğunlukla orta meningeal arter yırtılması, temporal kırıkla", "orta meningeal|middle meningeal|meningea media|arteriyel kanama|arter yırtıl|temporal kırık|temporal kemik kırı"],
      ["!Epidural BT'de bikonveks (lens şeklinde), sütürü geçmez", "bikonveks|lens şekl|lentiform|mercek|sütürü geçmez|sütürleri geçmez|sütür hattını geçmez"],
      ["Epidural: lüsid (berrak) aralık", "lüsid|lucid|berrak aralık|berrak dönem|ayılıp tekrar|uyanık dönem"],
      ["!Akut subdural: köprü venleri, BT'de hilal şekli, sütürü geçer", "köprü ven|bridging|hilal|kresent|crescent|orak şekl|sütürü geçer|sütürleri geçer"],
      ["Subdural: yaşlı, antikoagülan, alkolik; altta beyin hasarı, prognoz kötü", "antikoagül|alkolik|beyin atrofi|atrofi|parankim hasar|prognozu daha kötü|prognoz kötü|mortalitesi yüksek|mortalite daha yüksek"],
      ["Epidural >30 cm³ ise GKS'den bağımsız boşaltılır", "30 santimetreküp|30 cm|otuz santimetre|30 mililitre|30 ml|30 santim küp"],
      ["Subdural >10 mm kalınlık ya da >5 mm orta hat kayması → cerrahi", "10 milimetreden kalın|10 mm den kalın|on milimetreden kalın|kalınlığı 10|kayması 5|kayması beş|kayma 5 mm|5 milimetreyi geç|5 mm yi geç|beş milimetreyi geç"],
      ["Acil kraniyotomi ve hematom boşaltımı; anizokoride gecikmeden", "kraniyotomi|kraniotomi|boşalt|evakü|tahliye|dekompres"]
    ]},
  { id: "bc-kafa-ici-basinc-herniasyon", tr: "Kafa içi basınç artışı ve herniasyon sendromları", en: "Raised intracranial pressure and herniation syndromes", cat: "trv", lvl: 1,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Hawryluk GWJ ve ark. A management algorithm for patients with intracranial pressure monitoring: SIBICC. Intensive Care Med 2019", "https://doi.org/10.1007/s00134-019-05805-9"],
          ["Cerebral Edema and Elevated Intracranial Pressure. Continuum (Minneap Minn) 2018", "https://pubmed.ncbi.nlm.nih.gov/30516597/"]]
    },
    c: [
      ["!Monro-Kellie: kafatası kapalı kutu; beyin, kan, BOS dengesi", "monro|kellie|kapalı kutu|kapalı bir kutu|sabit hacim|kafa içi hacim"],
      ["!Klinik: baş ağrısı, kusma, papil ödemi, bilinç bozulması", "papil ödem|papilödem|papilla ödem|fışkırır tarzda|projektil|sabah baş ağrı|sabahları baş ağrı"],
      ["Cushing triadı: hipertansiyon, bradikardi, düzensiz solunum", "cushing|bradikardi|düzensiz solunum|solunum düzensiz"],
      ["Serebral perfüzyon basıncı = OAB − KİB", "perfüzyon basın|serebral perfüzyon|cpp|ortalama arter basınc|ortalama arteriyel|ortalama kan basınc"],
      ["!Unkal herniasyon: aynı tarafta midriyatik pupil (3. sinir), karşı hemiparezi", "unkal|unkus|okülomotor|3. kranial|üçüncü kranial|üçüncü sinir|3. sinir|midriya|pupil dilat|pupilla genişle|anizokori"],
      ["Diğer tipler: subfalksin, santral, tonsiller (foramen magnum)", "subfalks|falks altı|singulat|tonsiller|tonsil|foramen magnum|santral herniasyon|transtentoryal"],
      ["Tedavi: baş 30°, osmoterapi (mannitol / hipertonik salin), kısa süreli hiperventilasyon, cerrahi", "mannitol|hipertonik|başı 30|baş 30|başı otuz|başı yükselt|hiperventilasyon|osmoterapi|osmotik"],
      ["Dekompresif kraniyektomi ve BOS drenajı (EVD) dirençli olguda", "kraniyektomi|kraniektomi|evd|ventrikülostomi|eksternal ventriküler|ventriküler dren|bos drenaj"]
    ]},
  { id: "bc-agir-kafa-travmasi", tr: "Ağır travmatik beyin hasarının yönetimi (BTF 4. baskı)", en: "Management of severe traumatic brain injury", cat: "trv", lvl: 1,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Carney N ve ark. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery 2017", "https://pubmed.ncbi.nlm.nih.gov/27654000/"],
          ["Hutchinson PJ ve ark. Trial of decompressive craniectomy for traumatic intracranial hypertension (RESCUEicp). N Engl J Med 2016", "https://pubmed.ncbi.nlm.nih.gov/27602507/"]]
    },
    c: [
      ["!Ağır kafa travması: GKS 8 ve altı; havayolu güvenliği (entübasyon)", "gks 8|glasgow 8|sekiz ve altı|8 ve altı|8 veya altı"],
      ["!İkincil hasarı önle: hipotansiyon ve hipoksiden kaçın", "ikincil hasar|sekonder hasar|ikincil beyin hasar|sekonder beyin|hipotansiyon|hipoksi"],
      ["Acil BT; kitle lezyonu varsa cerrahi", "bilgisayarlı tomog|tomografi|bete|beyin bt|kranial bt|bt çek"],
      ["!KİB monitörizasyonu; 22 mmHg üzeri tedavi edilir (BTF 4)", "kib monitör|basınç monitör|icp monitör|kafa içi basınç monitör|22 mm|yirmi iki"],
      ["Serebral perfüzyon basıncı hedefi 60–70 mmHg", "60 70|altmış yetmiş|60 ile 70|perfüzyon basın|cpp"],
      ["Steroid verilmez; profilaktik hipotermi ve uzun süreli profilaktik hiperventilasyon önerilmez", "steroid verilmez|steroid önerilmez|steroid kullanılmaz|kortikosteroid önerilmez|steroid yeri yok|hipotermi önerilmez|hipotermi yapılmaz|hipotermi uygulanmaz|steroid mortaliteyi artır"],
      ["Erken posttravmatik nöbet profilaksisi (ilk 7 gün)", "nöbet profilaks|antiepileptik|levetirasetam|fenitoin|ilk 7 gün|ilk yedi gün|erken nöbet"],
      ["Dirençli KİB'de dekompresif kraniyektomi: mortaliteyi azaltır, sakat sağkalımı artırabilir", "kraniyektomi|kraniektomi|rescue|decra"]
    ]},
  { id: "bc-kauda-ekuina", tr: "Kauda ekuina sendromu", en: "Cauda equina syndrome", cat: "oms", lvl: 1,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Youmans and Winn Neurological Surgery, 8. baskı (2022)"],
      m: [["Metcalfe D ve ark. Diagnosis of cauda equina syndrome in the emergency department. Emerg Med J 2023", "https://pubmed.ncbi.nlm.nih.gov/37669831/"],
          ["GIRFT. National Suspected Cauda Equina Syndrome Pathway. NHS England 2023", "https://spinal.co.uk/wp-content/uploads/2023/08/National-Suspected-Cauda-Equina-Pathway-February-2023-FINAL-V1-1.pdf"]]
    },
    c: [
      ["!En sık neden: büyük santral lomber disk hernisi", "santral disk|büyük disk|masif disk|santral lomber disk|büyük bir santral|büyük santral|büyük bir lomber disk"],
      ["!Eyer (semer) anestezisi: perine ve iç uylukta his kaybı", "eyer|semer|saddle|perine|perianal|iç uyluk"],
      ["!Mesane-barsak disfonksiyonu: idrar retansiyonu, inkontinans", "retansiyon|idrar yapama|idrarını yapama|inkontinans|idrar kaçır|mesane|sfinkter|rezidü"],
      ["Bilateral siyatalji, bacaklarda güçsüzlük, cinsel işlev bozukluğu", "bilateral siyat|iki taraflı siyat|iki bacağ|bilateral bacak|her iki bacak|cinsel işlev|ereksiyon|seksüel"],
      ["Rektal tuşede anal tonus azalması", "rektal tuşe|anal tonus|sfinkter tonus|anal sfinkter|parmakla muayene"],
      ["Acil MR", "acil mr|acil lomber mr|beklemeden mr|acil emar|acil manyetik|acil görüntüle|sabaha bırakıl"],
      ["!Acil cerrahi dekompresyon (diskektomi/laminektomi)", "acil cerrahi dekompres|acil dekompres|acil ameliyat|acil cerrahi|acilen ameliyat"],
      ["Retansiyonlu dönem (CES-R) prognozu kötü; tamamlanmamış (CES-I) dönemde yakala", "ces r|ces i|tamamlanmamış|inkomplet|erken yakala"]
    ]},
  { id: "bc-hidrosefali-sant", tr: "Hidrosefali ve şant tedavisi", en: "Hydrocephalus and CSF shunting", cat: "gel", lvl: 1,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Kahle KT, Kulkarni AV, Limbrick DD, Warf BC. Hydrocephalus in children. Lancet 2016", "https://doi.org/10.1016/S0140-6736(15)60694-8"],
          ["Limbrick DD ve ark. Pediatric hydrocephalus guidelines, Part 4: Cerebrospinal fluid shunt or endoscopic third ventriculostomy. J Neurosurg Pediatr 2014", "https://www.cns.org/guidelines/pediatric-hydrocephalus/4-cerebrospinal-fluid-shunt-endoscopic-third-ventr"]]
    },
    c: [
      ["!Tanım: BOS birikimi ve ventrikül genişlemesi", "beyin omurilik sıvı|bos|serebrospinal|ventrikül geniş|ventrikülomegali|ventriküller geniş"],
      ["!Obstrüktif (iletişimsiz) ve iletişimli hidrosefali", "obstrüktif|tıkayıcı|iletişimsiz|nonkomünik|komünikan|iletişimli|emilim bozuk|araknoid granül|araknoid villus"],
      ["En sık doğumsal neden: akuaduktus stenozu", "akuadukt|aquaduct|aquaeduct|sylvius"],
      ["Bebekte baş çevresi artışı, gergin fontanel, batan güneş; büyük çocukta KİBAS", "baş çevresi|makrosefali|fontanel|batan güneş|sunset|kafa büyü"],
      ["!Ventriküloperitoneal şant", "ventriküloperiton|vp şant|şant|shunt"],
      ["Endoskopik üçüncü ventrikülostomi (obstrüktif tipte seçenek)", "endoskopik|üçüncü ventrikülostomi|ventrikülostomi|etv"],
      ["Şant komplikasyonları: tıkanma (disfonksiyon) ve enfeksiyon", "şant disfonksiyon|şant tıkan|tıkanma|şant enfeksiyon|revizyon|aşırı drenaj"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "bc-glioblastom", tr: "Glioblastom (IDH-yabanıl tip)", en: "Glioblastoma, IDH-wildtype", cat: "onk", lvl: 2,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Louis DN ve ark. The 2021 WHO Classification of Tumors of the Central Nervous System: a summary. Neuro Oncol 2021", "https://pubmed.ncbi.nlm.nih.gov/34185076/"],
          ["Stupp R ve ark. Radiotherapy plus concomitant and adjuvant temozolomide for glioblastoma. N Engl J Med 2005", "https://doi.org/10.1056/NEJMoa043330"]]
    },
    c: [
      ["!Erişkinde en sık ve en malign primer glial tümör", "en malign|en agresif|en kötü huylu|en sık malign|en sık görülen ve en malign"],
      ["!WHO CNS5: glioblastom tanımı IDH-yabanıl tip, derece 4; IDH-mutant olanlar astrositom", "idh|izositrat|yabanıl|wild type|vahşi tip|derece 4|grade 4|cns5|cns 5|2021 sınıflama|astrositom"],
      ["Histoloji yoksa da moleküler kriterle tanı: TERT, EGFR, +7/−10", "tert|egfr|kromozom 7|yedi kazanç|10 kayb|on kayb|moleküler kriter"],
      ["MR'de halkasal kontrast tutan, ortası nekrotik kitle; kelebek glioma", "halkasal|halka şekl|ring|nekroz|nekrotik|kelebek|korpus kallozum|kontrast tut"],
      ["!Maksimal güvenli rezeksiyon", "maksimal|güvenli rezeksiyon|olabildiğince fazla tümör"],
      ["!Stupp protokolü: radyoterapi + eş zamanlı ve adjuvan temozolomid", "stupp|temozolomid|temozolamid|radyoterapi|60 gray|60 gy"],
      ["MGMT promotor metilasyonu: temozolomide yanıtı ve iyi prognoz", "mgmt|metilasyon|metile"],
      ["Prognoz kötü: medyan sağkalım yaklaşık 15 ay", "15 ay|on beş ay|14 ay"]
    ]},
  { id: "bc-meningiom", tr: "Meningiom", en: "Meningioma", cat: "onk", lvl: 2,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Goldbrunner R ve ark. EANO guideline on the diagnosis and management of meningiomas. Neuro Oncol 2021", "https://doi.org/10.1093/neuonc/noab150"],
          ["Louis DN ve ark. The 2021 WHO Classification of Tumors of the Central Nervous System: a summary. Neuro Oncol 2021", "https://pubmed.ncbi.nlm.nih.gov/34185076/"]]
    },
    c: [
      ["!Erişkinde en sık primer intrakraniyal tümör; kadınlarda sık", "en sık primer intrakran|en sık intrakran|en sık görülen primer intrakran|en sık beyin tümör"],
      ["!Araknoid kep hücrelerinden köken, ekstraaksiyel, duraya yapışık", "araknoid|kep hücre|cap hücre|ekstraaksiyel|ekstra aksiyel|duraya|dural"],
      ["Risk: iyonize radyasyon, NF2", "radyasyon|nf2|nörofibromatozis tip 2|nörofibromatoz"],
      ["Görüntüleme: homojen kontrast tutan, dural kuyruk; kalsifikasyon", "dural kuyruk|dural tail|kuyruk işaret|homojen|kalsifik|hiperosto"],
      ["Patoloji: psammom cisimcikleri, girdap (whorl) yapısı", "psammom|whorl|girdap|soğan zarı"],
      ["!WHO derece 1–3 (CNS5); çoğu derece 1, benign", "derece 1|grade 1|derece bir|benign|iyi huylu"],
      ["!Küçük asemptomatik: izlem; semptomatik/büyüyen: cerrahi (Simpson derecesi)", "izlem|bekle gör|izlenebilir|simpson|total rezeksiyon|cerrahi rezeksiyon"],
      ["Radyoterapi/stereotaktik radyocerrahi (rezidü, yüksek derece)", "radyocerrahi|gamma knife|gama knife|stereotaktik|radyoterapi"]
    ]},
  { id: "bc-spinal-kord-yaralanmasi", tr: "Akut travmatik omurilik yaralanması (AO Spine 2024)", en: "Acute traumatic spinal cord injury", cat: "oms", lvl: 2,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Fehlings MG ve ark. A Clinical Practice Guideline for the Management of Patients With Acute Spinal Cord Injury: Recommendations on the Type and Timing of Decompressive Surgery. Global Spine J 2024;14(3 Suppl):174S-186S", "https://doi.org/10.1177/21925682231181883"],
          ["Fehlings MG, Moghaddamjou A ve ark. The 2023 AO Spine-Praxis Clinical Practice Guidelines for the Management of Patients With Acute Spinal Cord Injury: An Overview. Global Spine J 2024", "https://pubmed.ncbi.nlm.nih.gov/38526926/"]]
    },
    c: [
      ["!Olay yerinde omurga immobilizasyonu ve ABC", "immobiliz|boyunluk|servikal yaka|sert yaka|spinal tahta|sedye|abc|havayolu"],
      ["!ASIA (AIS) bozukluk skalası A–E; tam ve tam olmayan yaralanma, sakral koruma", "asia|ais|bozukluk skala|tam yaralanma|komplet|inkomplet|tam olmayan|sakral koru"],
      ["Nörojenik şok: hipotansiyon + bradikardi (sempatik kayıp)", "nörojenik şok|sempatik|bradikardi"],
      ["Spinal şok: geçici refleks kaybı, bulbokavernöz refleks", "spinal şok|bulbokavernöz|refleks kayb|arefleksi"],
      ["Hipotansiyondan kaçın; ortalama arter basıncı desteği", "hipotansiyon|ortalama arter|map|vazopresör|kan basıncını yüksek"],
      ["Görüntüleme: BT, omurilik için MR", "bilgisayarlı tomog|tomografi|bete|manyetik rezonans|emar|mr"],
      ["!Erken cerrahi dekompresyon: ilk 24 saatte (AO Spine 2024)", "24 saat|yirmi dört saat"],
      ["Yüksek doz metilprednizolon tartışmalı, rutin değil", "metilprednizolon|steroid tartış|steroid rutin|yüksek doz steroid|nascis"]
    ]},
  { id: "bc-servikal-miyelopati", tr: "Dejeneratif servikal miyelopati", en: "Degenerative cervical myelopathy", cat: "oms", lvl: 2,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Fehlings MG ve ark. A Clinical Practice Guideline for the Management of Patients With Degenerative Cervical Myelopathy. Global Spine J 2017", "https://pubmed.ncbi.nlm.nih.gov/29164035/"],
          ["Fehlings MG ve ark. A Clinical Practice Guideline for the Management of Degenerative Cervical Myelopathy: Introduction, Rationale, and Scope. Global Spine J 2017", "https://pubmed.ncbi.nlm.nih.gov/29164027/"]]
    },
    c: [
      ["!Erişkinde en sık omurilik disfonksiyonu nedeni; spondiloz, disk, OPLL, ligamentum flavum", "spondiloz|osteofit|opll|posterior longitudinal|ligamentum flavum|dejeneratif|kireçlen"],
      ["!El beceriksizliği, düğme iliklemede zorluk, yürüme bozukluğu", "beceriksiz|ince motor|düğme|el becer|yürüme bozuk|denge bozuk|ataksik yürü"],
      ["!Üst motor nöron bulguları: Hoffmann, hiperrefleksi, Babinski, klonus", "hoffmann|hofman|hiperrefleksi|babinski|klonus|üst motor nöron|spastisite"],
      ["Lhermitte belirtisi; boyun ağrısı", "lhermitte|elektrik çarpma|boyun ağrı"],
      ["MR: omurilik basısı, T2 hiperintensite", "manyetik rezonans|emar|mr|t2|hiperintens|sinyal artış"],
      ["Şiddet: mJOA skoru (hafif–orta–ağır)", "mjoa|joa|japon ortopedi|hafif orta ağır"],
      ["!Orta-ağır miyelopatide cerrahi dekompresyon önerilir; hafifte cerrahi ya da denetimli rehabilitasyon", "dekompres|cerrahi öner|ameliyat öner|denetimli|rehabilitasyon"],
      ["Cerrahi yollar: anterior (ACDF/korpektomi) ya da posterior (laminoplasti/laminektomi-füzyon)", "acdf|anterior servikal|korpektomi|laminoplasti|laminektomi|füzyon|posterior yaklaşım|anterior yaklaşım"]
    ]},
  { id: "bc-lomber-spinal-stenoz", tr: "Lomber spinal stenoz", en: "Lumbar spinal stenosis", cat: "oms", lvl: 2,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Katz JN, Zimmerman ZE, Mass H, Makhni MC. Diagnosis and Management of Lumbar Spinal Stenosis: A Review. JAMA 2022", "https://doi.org/10.1001/jama.2022.5921"],
          ["Kreiner DS ve ark. An evidence-based clinical guideline for the diagnosis and treatment of degenerative lumbar spinal stenosis (update). Spine J 2013", "https://pubmed.ncbi.nlm.nih.gov/23830297/"]]
    },
    c: [
      ["!Dejeneratif daralma: faset hipertrofisi, ligamentum flavum kalınlaşması, disk; ileri yaş", "faset|ligamentum flavum|dejeneratif|spondiloz|daralma"],
      ["!Nörojenik kladikasyon: yürümekle bacak ağrısı-uyuşma", "nörojenik kladikasyon|nörojen kladikasyon|psödokladikasyon|yürüyünce|yürümekle"],
      ["!Öne eğilince/oturunca rahatlar (alışveriş arabası işareti)", "öne eğil|fleksiyon|oturunca|otururken|alışveriş arabası|market arabası|shopping"],
      ["Ayırıcı tanı: vasküler kladikasyon (nabızlar, ayakta durunca geçme)", "vasküler kladikasyon|periferik arter|nabız|ayakta durunca"],
      ["MR ile doğrulanır", "manyetik rezonans|emar|mr|görüntüle"],
      ["Konservatif: egzersiz/fizik tedavi, analjezi", "egzersiz|fizik tedavi|fizyoterapi|analjez|nsaii"],
      ["Konservatif başarısızlıkta dekompresif laminektomi; spondilolistezde füzyon tartışmalı", "laminektomi|dekompres|füzyon|spondilolistez|laminotomi"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "bc-hipofiz-apopleksisi", tr: "Hipofiz apopleksisi", en: "Pituitary apoplexy", cat: "onk", lvl: 3,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Youmans and Winn Neurological Surgery, 8. baskı (2022)"],
      m: [["Rajasekaran S ve ark. UK guidelines for the management of pituitary apoplexy. Clin Endocrinol 2011", "https://doi.org/10.1111/j.1365-2265.2010.03913.x"],
          ["Briet C ve ark. Pituitary Apoplexy. Endocr Rev 2015", "https://pubmed.ncbi.nlm.nih.gov/26414232/"]]
    },
    c: [
      ["!Hipofiz adenomuna ani kanama ya da enfarkt; çoğu nonfonksiyone, sıklıkla bilinmeyen adenom", "adenomun içine|adenom içine|adenoma kanama|ani kanama|hemoraj|enfarkt"],
      ["!Ani şiddetli baş ağrısı (SAK'ı taklit eder)", "ani başlayan|ani şiddetli|gök gürültüsü|thunderclap|hayatının en şiddetli|subaraknoid"],
      ["!Görme kaybı/bitemporal alan defekti ve oftalmopleji (kavernöz sinüs: 3, 4, 6. sinirler)", "görme kayb|görme alan|bitemporal|hemianopsi|kiazma|oftalmopleji|göz kası felç|diplopi|çift görme|kavernöz"],
      ["Tetikleyiciler: antikoagülan, dopamin agonisti, cerrahi, hipertansiyon", "antikoagül|dopamin agonist|bromokriptin|kabergolin|tetikley"],
      ["!Akut sekonder adrenal yetmezlik: hemen IV hidrokortizon", "hidrokortizon|adrenal yetmez|kortizol|acth|glukokortikoid|steroid"],
      ["Tanı: acil MR (hipofiz protokolü), hormon panelı", "manyetik rezonans|emar|hipofiz mr|acil mr|sella|hormon panel|elektrolit|hiponatrem"],
      ["Ağır görme kaybı/bilinç bozukluğunda transsfenoidal dekompresyon; seçilmiş hastada konservatif", "transsfenoid|trans sfenoid|endoskopik endonazal|dekompres|konservatif|cerrahi"],
      ["Uzun dönem hipopituitarizm; Sheehan sendromundan ayır", "hipopituitar|hormon replas|sheehan|postpartum"]
    ]},
  { id: "bc-anevrizma-tedavisi-vazospazm", tr: "Rüptüre intrakraniyal anevrizmanın tedavisi ve vazospazm", en: "Treatment of ruptured intracranial aneurysm and vasospasm", cat: "vas", lvl: 3,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Hoh BL ve ark. 2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage. Stroke 2023", "https://pubmed.ncbi.nlm.nih.gov/37212182/"],
          ["Molyneux A ve ark. International Subarachnoid Aneurysm Trial (ISAT) of neurosurgical clipping versus endovascular coiling in 2143 patients with ruptured intracranial aneurysms. Lancet 2002", "https://pubmed.ncbi.nlm.nih.gov/12414200/"]]
    },
    c: [
      ["!Yeniden kanamayı önlemek için anevrizma olabildiğince erken güvenceye alınır", "yeniden kanama|tekrar kanama|rebleed|re kanama|erken güvence|erken tedavi|olabildiğince erken|en erken"],
      ["!ISAT: her iki yönteme uygun hastada koil, klipe göre daha az ölüm/bağımlılık", "ikisine de uygun|koil daha az|koille daha az|her iki yönteme|bağımlılık daha az|koil daha iyi|koille daha iyi|koilde geç"],
      ["Akut hidrosefalide eksternal ventriküler drenaj", "evd|eksternal ventrikül|ventriküler dren|ventrikülostomi"],
      ["!Gecikmiş serebral iskemi/vazospazm: kanamadan günler sonra yeni nörolojik defisit", "vazospazm|vasospazm|gecikmiş serebral iskemi|gecikmiş iskemi|dci|yeni nörolojik defisit"],
      ["Oral nimodipin tüm hastalara", "nimodipin|nimotop"],
      ["Övolemi hedeflenir; profilaktik hipervolemi/triple-H önerilmez", "övolem|euvolem|normovolem|triple h|üçlü h|hipervolemi önerilmez"],
      ["İzlem: transkraniyal Doppler, nörolojik muayene", "transkranial doppler|transkraniyal doppler|tcd|doppler"],
      ["Semptomatik vazospazmda indüklenmiş hipertansiyon, intraarteriyel vazodilatör/anjiyoplasti", "indüklenmiş hipertansiyon|indüklenen hipertansiyon|kan basıncı yükselt|anjiyoplasti|anjioplasti|balon|intraarteriyel|intra arteriyel|verapamil|milrinon"]
    ]},
  { id: "bc-avm", tr: "Beyin arteriyovenöz malformasyonu", en: "Brain arteriovenous malformation", cat: "vas", lvl: 3,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Derdeyn CP ve ark. Management of Brain Arteriovenous Malformations: A Scientific Statement for Healthcare Professionals From the AHA/ASA. Stroke 2017", "https://pubmed.ncbi.nlm.nih.gov/28642352/"],
          ["Mohr JP ve ark. Medical management with or without interventional therapy for unruptured brain arteriovenous malformations (ARUBA). Lancet 2014", null]]
    },
    c: [
      ["!Arterlerin kapiller yatak olmadan doğrudan venlere açıldığı nidus", "kapiller yatak|kapiller olmadan|kapillersiz|nidus|doğrudan ven|arterden vene|şant"],
      ["!En sık başvuru: intraserebral kanama; sonra nöbet, baş ağrısı", "intraserebral|beyin içi kanama|hemoraj|parankimal kanama"],
      ["Genç erişkinde kanamanın önemli nedeni", "genç erişkin|genç hasta|gençlerde|genç yaşta"],
      ["Tanıda altın standart: dijital subtraksiyon anjiyografi", "dsa|dijital subtraksiyon|serebral anjiyo|kateter anjiyo|konvansiyonel anjiyo"],
      ["!Spetzler-Martin: boyut, elokan bölge, derin venöz drenaj", "spetzler|elokan|eloquent|derin venöz"],
      ["Tedavi: mikrocerrahi rezeksiyon, stereotaktik radyocerrahi, embolizasyon", "mikrocerrahi|rezeksiyon|radyocerrahi|gamma knife|gama knife|stereotaktik|embolizasyon|onyx"],
      ["Rüptüre olmamış AVM'de ARUBA: girişim tıbbi tedaviden üstün değil", "aruba|girişim üstün değil|tıbbi tedaviden üstün değil"]
    ]},
  { id: "bc-beyin-apsesi", tr: "Beyin apsesi", en: "Brain abscess", cat: "gel", lvl: 3,
    src: {
      k: ["Youmans and Winn Neurological Surgery, 8. baskı (2022)", "Greenberg's Handbook of Neurosurgery, 10. baskı (2023)"],
      m: [["Bodilsen J ve ark. ESCMID guidelines on diagnosis and treatment of brain abscess in children and adults. Clin Microbiol Infect 2024", "https://doi.org/10.1016/j.cmi.2023.08.016"],
          ["Brouwer MC, Tunkel AR, McKhann GM, van de Beek D. Brain abscess. N Engl J Med 2014", "https://pubmed.ncbi.nlm.nih.gov/25075836/"]]
    },
    c: [
      ["!Kaynak: komşuluk (otit, sinüzit, diş), hematojen, travma/cerrahi sonrası", "otit|mastoid|sinüzit|diş enfeksiyon|diş apse|dental|hematojen|komşuluk|bitişik|endokardit|travma sonrası|cerrahi sonrası"],
      ["Risk: siyanotik doğumsal kalp hastalığı, bağışıklık baskılanması", "siyanotik|doğumsal kalp|konjenital kalp|immünsüpres|bağışıklığı baskılan|hiv|transplant"],
      ["Etkenler: streptokok (viridans/milleri), anaeroblar, stafilokok", "streptok|milleri|viridans|anaerob|stafilok"],
      ["!Klinik: baş ağrısı en sık; ateş ve fokal defisit üçlüsü çoğu hastada tam değil", "baş ağrısı|fokal defisit|fokal nörolojik|üçlü|triad"],
      ["!MR'de halkasal kontrast tutan lezyon, difüzyon kısıtlaması (tümörden ayırır)", "halkasal|halka şekl|ring|difüzyon|dwi|kısıtlan"],
      ["Kitle etkisinde lomber ponksiyon yapılmaz", "lomber ponksiyon yapılmaz|lp yapılmaz|lomber ponksiyon kontrendike|ponksiyon yapılmamalı|lp kontrendike"],
      ["!Aspirasyon/eksizyon ile drenaj ve kültür", "aspirasyon|aspire|stereotaktik|drenaj|eksizyon|kültür"],
      ["Ampirik: 3. kuşak sefalosporin + metronidazol; uzun süreli antibiyotik", "seftriakson|sefotaksim|sefalosporin|metronidazol|uzun süreli antibiyot|haftalarca"]
    ]},
  { id: "bc-chiari", tr: "Chiari malformasyonu ve siringomiyeli", en: "Chiari malformation and syringomyelia", cat: "gel", lvl: 3,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Youmans and Winn Neurological Surgery, 8. baskı (2022)"],
      m: [["Ciaramitaro P ve ark. Diagnosis and treatment of Chiari malformation and syringomyelia in adults: international consensus document. Neurol Sci 2022", "https://pubmed.ncbi.nlm.nih.gov/34129128/"],
          ["Diagnosis and treatment of Chiari malformation type 1 in children: the International Consensus Document. Neurol Sci 2021", null]]
    },
    c: [
      ["!Tip 1: serebellar tonsillerin foramen magnumdan aşağı inmesi", "tonsil|foramen magnum|serebellar ektopi|tonsiller ektopi|tonsiller herni"],
      ["!Öksürük/ıkınmayla artan oksipital baş ağrısı", "öksürük|ıkınma|ıkınırken|valsalva|oksipital|ense ağrı"],
      ["!Siringomiyeli: pelerin tarzı ağrı-ısı duyu kaybı (dokunma korunur)", "siring|syrinx|sirinks|pelerin|şal tarzı|dissosiye duyu|ağrı ve ısı duyu"],
      ["Alt kranial sinir/beyin sapı bulguları, skolyoz", "disfaji|yutma|nistagmus|beyin sapı|alt kranial|skolyoz"],
      ["Tip 2 (Arnold-Chiari): miyelomeningosel ve hidrosefaliyle birlikte", "chiari tip 2|chiari 2|chiari tip iki|arnold|miyelomeningosel|meningomiyelosel|spina bifida"],
      ["Tanı: kraniyoservikal MR", "manyetik rezonans|emar|mr|kraniyoservikal|kranioservikal"],
      ["Asemptomatik tesadüfi olguda izlem; semptomatikte posterior fossa dekompresyonu ± duraplasti", "posterior fossa|arka çukur|suboksipital|duraplasti|foramen magnum dekompres"]
    ]}
]
});
