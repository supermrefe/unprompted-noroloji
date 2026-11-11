/* Tıbbi onkoloji — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta en sık sorulan ve hekimin ilk karşılaştığı onkoloji başlıkları — ulusal kanser taramaları (KETEM),
   TNM, onkolojik aciller (febril nötropeni, tümör lizis, spinal kord basısı, VCS), sistemik tedavinin biyobelirteç mantığı
   (HER2/HR, RAS/MSI), immünoterapi yan etkileri, kalıtsal sendromlar, paraneoplastik sendromlar ve germ hücreli tümörler.
   Akciğer kanseri taraması göğüse, hematolojik maligniteler hematolojiye bırakıldı. Kılavuz: ESMO öncelikli, ASCO/IDSA, NICE, WHO. */
UP.add({ id: "onkoloji", subs: {
    tem: "Tarama, evreleme ve temel ilkeler",
    acl: "Onkolojik aciller ve destek tedavi",
    sis: "Tümöre özgü sistemik tedavi ve genetik"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "onk-kanser-taramalari", tr: "Türkiye'de ulusal kanser taramaları (meme, serviks, kolorektal)", en: "National cancer screening programmes (breast, cervical, colorectal)", cat: "tem", lvl: 1,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü. Aile hekimliği uygulamasında kanser taramaları (Ek-6). Sağlık Bakanlığı", "https://hsgm.saglik.gov.tr/depo/birimler/aile-hekimligi-uygulama-ve-gelistirme-db/Dokumanlar/Yonerge/EK6_KANSER.pdf"],
          ["Ulusal Kanser Kontrol Planı 2013–2018. T.C. Sağlık Bakanlığı 2014", "https://hsgm.saglik.gov.tr/depo/birimler/kanser-db/Dokumanlar/Raporlar/Ulusal_Kanser_Kontrol_Plani_2013_2018.pdf"]]
    },
    c: [
      ["!Tarama: belirtisiz kişide erken tanı; yalnız kanıtlı programlar (meme, serviks, kolorektal)", "belirtisiz|asemptomatik|yakınması olmayan|şikayeti olmayan|erken tanı|erken teşhis|nüfus tabanlı|toplum tabanlı|populasyon"],
      ["!Meme: 40–69 yaş kadında iki yılda bir mamografi", "mamografi|mamogra"],
      ["!Serviks: 30–65 yaş kadında beş yılda bir HPV-DNA testi (birincil test; sitoloji yardımcı)", "hpv dna|hpv testi|hpv-dna|hpv taraması|hpv ile tara|human papilloma"],
      ["!Kolorektal: 50–70 yaş kadın ve erkekte iki yılda bir gaitada gizli kan (FIT), on yılda bir kolonoskopi", "gaitada gizli kan|dışkıda gizli kan|gizli kan testi|ggk|fit testi|immünokimyasal|kolonoskopi"],
      ["Taramalar KETEM ve aile hekimliğinde ücretsiz; SMS ile davet", "ketem|kanser erken teşhis|aile hekim|ücretsiz|sms|kısa mesaj|davet"],
      ["Pozitif test tanı değildir; ileri inceleme (biyopsi, kolposkopi, kolonoskopi) gerekir", "kolposkopi|ileri tetkik|ileri inceleme|doğrulayıcı|tanı değil|tanı olmama|tanı koydurmaz"],
      ["Prostat (PSA) için ulusal toplum taraması yok", "psa ile toplum|psa taraması yok|psa ile tarama yapılmı|ulusal programda yok|programda yok|prostat için tarama yok|prostat taraması yok"]
    ]},
  { id: "onk-tnm-evreleme", tr: "TNM evreleme ilkeleri", en: "Principles of TNM staging", cat: "tem", lvl: 1,
    src: {
      k: ["AJCC Cancer Staging Manual, 8. baskı (2017)", "DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)"],
      m: [["Amin MB ve ark. The Eighth Edition AJCC Cancer Staging Manual: Continuing to build a bridge from a population-based to a more \"personalized\" approach to cancer staging. CA Cancer J Clin 2017", "https://pubmed.ncbi.nlm.nih.gov/28094848/"],
          ["9th edition UICC TNM Classification of Malignant Tumours now available. UICC 2025", "https://www.uicc.org/news-and-updates/25-7-announcements/9th-edition-uicc-tnm-classification-malignant-tumours-now-available"]]
    },
    c: [
      ["!T: primer tümörün boyutu ve çevreye yayılımı", "primer tümör|tümörün boyut|tümör boyut|büyüklüğ|derinliğ|invazyon derinli|lokal yayılım"],
      ["!N: bölgesel lenf nodu tutulumu", "lenf nod|lenf bez|lenf düğ|nodal|bölgesel lenf"],
      ["!M: uzak metastaz var/yok", "uzak metastaz|metastaz var|m1|m0|uzak organ"],
      ["Klinik (cTNM) ve patolojik (pTNM) evre; neoadjuvan sonrası ypTNM", "klinik evre|patolojik evre|ctnm|ptnm|yptnm|neoadjuvan|ameliyat sonrası evre|cerrahi materyal"],
      ["TNM kategorileri evre I–IV gruplarına toplanır; evre prognozu ve tedaviyi belirler", "evre 1|evre 4|evre i|evre iv|evre grup|dört evre|prognoz|sağkalım"],
      ["AJCC 8. baskı ile grade ve biyobelirteçler (ör. memede ER, PR, HER2) prognostik evreye girdi", "biyobelirte|biomarker|prognostik evre|östrojen reseptör|her2|grade|derece"],
      ["Güncel sistem: UICC 9. baskı (2025, 2026'dan itibaren kullanım)", "dokuzuncu baskı|9. baskı|9 baskı|uicc 9|uicc dokuz"]
    ]},
  { id: "onk-febril-notropeni", tr: "Febril nötropeni", en: "Febrile neutropenia", cat: "acl", lvl: 1,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Taplitz RA ve ark. Outpatient Management of Fever and Neutropenia in Adults Treated for Malignancy: ASCO and IDSA Clinical Practice Guideline Update. J Clin Oncol 2018", "https://pubmed.ncbi.nlm.nih.gov/29461916/"],
          ["Klastersky J ve ark. Management of febrile neutropaenia: ESMO Clinical Practice Guidelines. Ann Oncol 2016", "https://pubmed.ncbi.nlm.nih.gov/27664247/"]]
    },
    c: [
      ["!Tanım: kemoterapi sonrası ateş + mutlak nötrofil sayısı <500/mm³ (ya da düşmesi beklenen)", "mutlak nötrofil|nötrofil sayısı|nötrofil 500|500 ün altı|500'ün altı|anc|nötropeni"],
      ["!Onkolojik acil: kültürler alınıp ilk saat içinde ampirik geniş spektrumlu antibiyotik", "ilk saat|bir saat içinde|1 saat içinde|60 dakika|ampirik antibiyot|geniş spektrum|antibiyotik hemen"],
      ["Antipsödomonal beta-laktam (ör. piperasilin-tazobaktam, sefepim, karbapenem)", "antipsödomonal|psödomonas|pseudomonas|piperasilin|tazobaktam|sefepim|meropenem|karbapenem"],
      ["!MASCC skoru ile risk: düşük riskte (≥21) ayaktan oral tedavi seçilebilir", "mascc|düşük risk|yüksek risk|risk skor|ayaktan|oral antibiyot|amoksisilin klavulan|kinolon|siprofloksasin"],
      ["Kan kültürü (periferik ve kateterden), idrar, akciğer grafisi; odak araştır", "kan kültür|hemokültür|kateter|idrar kültür|odak araş|akciğer grafi"],
      ["Ateş dışında bulgular silik olabilir (nötrofil yok → inflamasyon az)", "silik|belirti az|inflamatuvar yanıt|bulgu vermey|maskele"],
      ["Persistan ateşte antifungal düşün; G-CSF ile profilaksi seçilmiş hastada", "antifungal|mantar|aspergill|kandid|g csf|g-csf|filgrastim|koloni uyarıcı"]
    ]},
  { id: "onk-tumor-lizis-sendromu", tr: "Tümör lizis sendromu", en: "Tumor lysis syndrome", cat: "acl", lvl: 1,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Howard SC, Jones DP, Pui CH. The Tumor Lysis Syndrome. N Engl J Med 2011", "https://doi.org/10.1056/NEJMra0904569"],
          ["Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol 2004", "https://pubmed.ncbi.nlm.nih.gov/15384972/"]]
    },
    c: [
      ["!Hızlı tümör hücre yıkımı ile hücre içeriğinin dolaşıma geçmesi; hızlı çoğalan, kemoterapiye duyarlı tümörler (Burkitt, akut lösemi)", "hücre yıkım|hücre parçalan|lizis|burkitt|akut lösemi|lenfoma|hızlı çoğalan|tümör yükü"],
      ["!Laboratuvar: hiperürisemi, hiperkalemi, hiperfosfatemi, hipokalsemi (Cairo-Bishop)", "hiperürisem|ürik asit|hiperkalem|potasyum|hiperfosfat|fosfor|fosfat|hipokalsem|cairo"],
      ["!Klinik: akut böbrek hasarı, aritmi, nöbet", "böbrek hasar|böbrek yetmez|kreatinin|aritmi|nöbet|konvülziyon|ani ölüm"],
      ["!Önleme: tedavi öncesi yoğun IV hidrasyon", "hidrasyon|sıvı yükle|bol sıvı|intravenöz sıvı|iv sıvı|idrar çıkış"],
      ["Allopürinol (ksantin oksidaz inhibitörü) ya da yüksek riskte rasburikaz", "allopürinol|allopurinol|ksantin oksidaz|rasburikaz|rasburicase|ürat oksidaz"],
      ["Rasburikaz G6PD eksikliğinde kontrendike (hemoliz, methemoglobinemi)", "g6pd|glukoz 6 fosfat|methemoglobin"],
      ["Hiperkalemi ve dirençli böbrek yetmezliğinde diyaliz; risk sınıflaması ve yakın elektrolit izlemi", "diyaliz|hemodiyaliz|elektrolit izle|risk sınıf|yakın izlem"]
    ]},
  { id: "onk-kanser-agrisi", tr: "Kanser ağrısı ve DSÖ analjezik merdiveni", en: "Cancer pain and the WHO analgesic ladder", cat: "acl", lvl: 1,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Fallon M ve ark. Management of cancer pain in adult patients: ESMO Clinical Practice Guidelines. Ann Oncol 2018", "https://doi.org/10.1093/annonc/mdy152"],
          ["WHO guidelines for the pharmacological and radiotherapeutic management of cancer pain in adults and adolescents. World Health Organization 2018", "https://www.ncbi.nlm.nih.gov/books/NBK537492/"]]
    },
    c: [
      ["!Basamaklı yaklaşım: hafif ağrıda opioid olmayan (parasetamol, NSAİİ), orta ağrıda zayıf opioid, şiddetli ağrıda güçlü opioid", "merdiven|basamak|parasetamol|nsaii|nsaid|steroid olmayan|zayıf opioid|tramadol|kodein"],
      ["!Şiddetli ağrıda güçlü opioid: oral morfin, oksikodon ya da hidromorfon birinci basamakta eşdeğer (morfin klasik referans)", "morfin|güçlü opioid|oksikodon|fentanil|hidromorfon"],
      ["!Saatli düzenli doz + atılım (breakthrough) ağrısı için kurtarma dozu", "düzenli doz|düzenli aralık|saatli|saat düzen|kırıcı ağrı için|ağrı olmadan önce|kurtarma doz|atılım ağrı|breakthrough|ek doz"],
      ["Mümkünse ağızdan; ağrı skalasıyla değerlendirme (VAS/NRS)", "ağızdan|oral yol|ağrı skala|vas|nrs|sayısal skala|görsel analog"],
      ["Opioid yan etkileri: kabızlık için profilaktik laksatif, bulantı, sedasyon", "kabızlık|konstipasyon|laksatif|bulantı|sedasyon|uyku hali"],
      ["Adjuvanlar: nöropatik ağrıda gabapentinoid/antidepresan; kemik metastazında radyoterapi, bisfosfonat", "adjuvan|nöropatik|gabapentin|pregabalin|duloksetin|amitriptilin|radyoterapi|bisfosfonat|zoledron|denosumab"],
      ["Opioid dönüşümü ve renal yetmezlikte dikkat; bağımlılık korkusu tedaviyi engellememeli", "rotasyon|dönüşüm|böbrek yetmez|bağımlılık|opiofobi"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "onk-spinal-kord-basisi", tr: "Metastatik spinal kord basısı", en: "Metastatic spinal cord compression", cat: "acl", lvl: 2,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Spinal metastases and metastatic spinal cord compression (NG234). NICE 2023", "https://www.nice.org.uk/guidance/ng234"],
          ["Patchell RA ve ark. Direct decompressive surgical resection in the treatment of spinal cord compression caused by metastatic cancer: a randomised trial. Lancet 2005", "https://pubmed.ncbi.nlm.nih.gov/16112300/"]]
    },
    c: [
      ["!Kanserli hastada yeni sırt ağrısı en erken bulgu; nörolojik defisit gelişmeden tanı", "yeni başlayan sırt ağrı|yeni sırt ağrı|yeni gelişen sırt ağrı|sırt ağrısı kırmızı bayrak|yeni başlayan bel ağrı|sırt ağrısı en erken|gece artan sırt|gece artan bel|nörolojik defisit gelişmeden|defisit gelişmeden"],
      ["Sık kaynak: meme, prostat, akciğer kanseri, miyelom; en sık torakal bölge", "torakal omurga|torakal bölge|torakal vertebra|omurga metastaz|vertebra metastaz|epidural"],
      ["Bulgular: alt ekstremite güçsüzlüğü, duyu seviyesi, idrar-gaita inkontinansı/retansiyonu", "bacaklarda güçsüz|bacak güçsüz|parapleji|paraparezi|duyu seviye|inkontinans|idrar retansiyon|sfinkter"],
      ["!Tanı: acil tüm omurga MR", "tüm omurga|tüm spinal|spinal mr|omurga mr|bütün omurga"],
      ["!Nörolojik bulgu varsa hemen deksametazon (NICE: 16 mg); yalnız ağrıda rutin önerilmez", "deksametazon|dexamethasone"],
      ["!Kesin tedavi: radyoterapi ya da cerrahi dekompresyon + radyoterapi (Patchell)", "dekompresyon|stabilizasyon|patchell|spinal radyoterapi|omurgaya radyoterapi|radyoterapi ya da cerrahi"],
      ["Prognozu belirleyen tanı anındaki yürüme durumu", "yürüme yeti|yürüyebil|ambulasyon|ambulatuvar|tedavi öncesi nörolojik"]
    ]},
  { id: "onk-vena-kava-superior-sendromu", tr: "Vena kava superior sendromu", en: "Superior vena cava syndrome", cat: "acl", lvl: 2,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Wilson LD, Detterbeck FC, Yahalom J. Superior vena cava syndrome with malignant causes. N Engl J Med 2007", "https://pubmed.ncbi.nlm.nih.gov/17476012/"],
          ["Yu JB, Wilson LD, Detterbeck FC. Superior vena cava syndrome—a proposed classification system and algorithm for management. J Thorac Oncol 2008", "https://pubmed.ncbi.nlm.nih.gov/18670297/"]]
    },
    c: [
      ["!VCS'nin dış bası, invazyon ya da trombozla tıkanması; en sık nedeni malignite", "vcs|svc|dış bası|tümör invazyon|kateter|tromboz|tıkanma"],
      ["!En sık akciğer kanseri (sayıca KHDAK; VKS eğilimi KHAK'ta yüksek), sonra lenfoma", "akciğer kanseri ve lenfoma|ardından lenfoma|sonra lenfoma|sonra non hodgkin|ardından non hodgkin|sonra nhl|mediasten kitle|mediastinal kitle|mediasten metastaz"],
      ["!Bulgular: yüzde ve boyunda ödem, pletore, göğüs duvarında venöz dolgunluk, dispne", "yüzde ödem|yüz ödem|yüzde şişlik|boyun ven|venöz dolgun|kollateral|pletor|kollarda şiş|dispne|nefes darlı"],
      ["Tanı: kontrastlı toraks BT", "kontrastlı toraks|kontrastlı bt|kontrastlı bete|kontrastlı tomografi"],
      ["!Doku tanısı tedaviden önce: ampirik steroid/radyoterapi lenfoma tanısını bozabilir", "histolojiyi boz|tanıyı boz|önce doku|biyopsiden önce steroid verilmez|önce tanı konmalı|ampirik steroid|steroid ya da radyoterapi"],
      ["Hayatı tehdit eden durum: stridor, larenks/beyin ödemi → acil endovasküler stent", "stridor|larenks ödem|beyin ödem|serebral ödem|stent|endovasküler"],
      ["Tümöre göre tedavi: kemoterapi (SCLC, lenfoma), radyoterapi; baş yukarı pozisyon", "baş yukarı|başı yüksel|altta yatan tümöre göre|tümöre göre tedavi"]
    ]},
  { id: "onk-meme-kanseri-sistemik", tr: "Meme kanserinde sistemik tedavi ilkeleri (HR, HER2)", en: "Systemic therapy principles in breast cancer (HR, HER2)", cat: "sis", lvl: 2,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Loibl S ve ark. Early breast cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2024", "https://doi.org/10.1016/j.annonc.2023.11.016"],
          ["Gennari A ve ark. ESMO Clinical Practice Guideline for the diagnosis, staging and treatment of patients with metastatic breast cancer. Ann Oncol 2021", "https://doi.org/10.1016/j.annonc.2021.09.019"]]
    },
    c: [
      ["!Moleküler alt tipler: hormon reseptörü pozitif (luminal), HER2 pozitif, üçlü negatif", "luminal|alt tip|üçlü negatif|triple negatif|her2 pozitif|her 2 pozitif|reseptör durum"],
      ["!HR pozitifte endokrin tedavi: premenopozda tamoksifen (yüksek riskte over supresyonu + tamoksifen/AI), postmenopozda aromataz inhibitörü", "endokrin tedavi|hormonal tedavi|hormon tedavi|tamoksifen|aromataz|letrozol|anastrozol|eksemestan"],
      ["!HER2 pozitifte anti-HER2 tedavi: trastuzumab (± pertuzumab) kemoterapiyle", "trastuzumab|pertuzumab|anti her2|anti-her2|herceptin|t dxd|trastuzumab deruks"],
      ["Trastuzumab kardiyotoksisitesi: tedavi boyunca EF (eko) izlemi", "kardiyotoks|ejeksiyon fraksiyon|ef izle|eko ile izle|ekokardiyo|kalp fonksiyon"],
      ["Neoadjuvan tedavi (HER2+, üçlü negatif): patolojik tam yanıt prognostik", "patolojik tam yanıt|pcr|tam yanıt|rezidü|rezidüel"],
      ["Üçlü negatifte kemoterapi (erken evrede pembrolizumab ile); BRCA mutasyonunda PARP inhibitörü", "pembrolizumab|immünoterapi|parp|olaparib|antrasiklin|taksan"],
      ["Metastatik HR+ hastada endokrin tedavi + CDK4/6 inhibitörü", "cdk4|cdk 4|palbosiklib|ribosiklib|abemasiklib|siklin"],
      ["Ki-67 ve grade ile risk; reseptör tayini immünohistokimya (HER2 2+ ise ISH)", "ki 67|ki67|immünohistokim|ihk|fish|ish|in situ hibrid"]
    ]},
  { id: "onk-tumor-belirtecleri", tr: "Tümör belirteçleri", en: "Tumor markers", cat: "tem", lvl: 2,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Sturgeon CM ve ark. National Academy of Clinical Biochemistry laboratory medicine practice guidelines for use of tumor markers in testicular, prostate, colorectal, breast, and ovarian cancers. Clin Chem 2008", "https://doi.org/10.1373/clinchem.2008.105601"],
          ["Gilligan TD ve ark. American Society of Clinical Oncology Clinical Practice Guideline on uses of serum tumor markers in adult males with germ cell tumors. J Clin Oncol 2010", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2900872/"]]
    },
    c: [
      ["!Belirteçler çoğunlukla tarama ya da tek başına tanı için değil; tedavi yanıtı ve nüks izlemi için", "tarama için değil|tarama amaçlı kullanıl|tanı koydurmaz|tek başına tanı|nüks izle|nüks takib|tedavi yanıtı|yanıtı izle|seri ölçüm"],
      ["!CEA: kolorektal kanser izlemi", "cea|karsinoembriyonik"],
      ["!AFP: hepatoselüler karsinom ve nonseminomatöz germ hücreli tümör", "afp|alfa feto|alfafeto|hepatoselüler|hsk"],
      ["hCG: koryokarsinom, germ hücreli tümör, gestasyonel trofoblastik hastalık", "hcg|beta hcg|koryokarsinom|trofoblast|mol hidatiform"],
      ["CA-125: over kanseri (izlem)", "ca 125|ca125|over kanser|yumurtalık"],
      ["CA 19-9: pankreas ve safra yolu kanseri", "ca 19|ca19|pankreas|safra yolu|kolanjio"],
      ["PSA: prostat kanseri izlemi", "psa|prostat spesifik"],
      ["Yanlış pozitiflik: benign durumlar (siroz, sigara, pankreatit, endometriozis) belirteci yükseltebilir", "yanlış pozitif|benign|iyi huylu|sigara|siroz|endometrioz|özgül değil|spesifik değil"]
    ]},
  { id: "onk-kemoterapi-toksisiteleri", tr: "Kemoterapi toksisiteleri", en: "Chemotherapy toxicities", cat: "acl", lvl: 2,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Hesketh PJ ve ark. Antiemetics: ASCO Guideline Update. J Clin Oncol 2020", "https://pubmed.ncbi.nlm.nih.gov/32658626/"],
          ["Herrstedt J ve ark. 2023 MASCC and ESMO guideline update for the prevention of chemotherapy- and radiotherapy-induced nausea and vomiting. ESMO Open 2024", "https://doi.org/10.1016/j.esmoop.2023.102195"]]
    },
    c: [
      ["!Ortak toksisiteler hızlı bölünen dokularda: kemik iliği baskılanması, mukozit, alopesi", "kemik iliği|miyelosupres|miyelosüpres|nötropeni|mukozit|alopesi|saç dökül"],
      ["!Antrasiklin (doksorubisin): kümülatif doza bağlı kardiyotoksisite", "antrasiklin|doksorubisin|adriamisin|kümülatif doz|kardiyomiyopati|kardiyotoks"],
      ["!Sisplatin: nefrotoksisite, ototoksisite, şiddetli bulantı", "sisplatin|cisplatin|nefrotoks|ototoks|işitme kayb"],
      ["Bleomisin: akciğer fibrozu; vinkristin: periferik nöropati", "bleomisin|pulmoner fibroz|akciğer fibroz|vinkristin|nöropati|taksan"],
      ["Siklofosfamid/ifosfamid: hemorajik sistit → mesna", "siklofosfamid|ifosfamid|hemorajik sistit|mesna|akrolein"],
      ["Metotreksat toksisitesi → lökovorin (folinik asit) kurtarma", "metotreksat|lökovorin|folinik asit|kalsiyum folinat"],
      ["!Bulantı-kusma profilaksisi: 5-HT3 antagonisti + NK1 antagonisti + deksametazon (± olanzapin)", "5 ht3|5ht3|ondansetron|granisetron|palonosetron|nk1|aprepitant|fosaprepitant|olanzapin|antiemetik"],
      ["5-FU/kapesitabin: el-ayak sendromu, ishal; DPD eksikliğinde ağır toksisite", "el ayak|palmar plantar|kapesitabin|5 fu|fluorourasil|florourasil|dpd"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "onk-immun-iliskili-yan-etkiler", tr: "İmmün kontrol noktası inhibitörlerinin immün ilişkili yan etkileri", en: "Immune-related adverse events of checkpoint inhibitors", cat: "acl", lvl: 3,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Haanen J ve ark. Management of toxicities from immunotherapy: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2022", "https://doi.org/10.1016/j.annonc.2022.10.001"],
          ["Schneider BJ ve ark. Management of Immune-Related Adverse Events in Patients Treated With Immune Checkpoint Inhibitor Therapy: ASCO Guideline Update. J Clin Oncol 2021", "https://pubmed.ncbi.nlm.nih.gov/34724392/"]]
    },
    c: [
      ["!Mekanizma: PD-1/PD-L1 ya da CTLA-4 blokajı ile T hücre aktivasyonu → otoimmün tipte inflamasyon, her organı tutabilir", "pd 1|pd1|pd-1|pd l1|pdl1|ctla|nivolumab|pembrolizumab|ipilimumab|atezolizumab|t hücre|otoimmün"],
      ["Sık tutulumlar: deri, kolit/ishal, hepatit, tiroidit, pnömonit", "kolit|ishal|hepatit|transaminaz|tiroidit|pnömonit|döküntü|kaşıntı|dermatit"],
      ["Endokrinopatiler (hipofizit, tiroidit, adrenal yetmezlik, tip 1 DM) kalıcı olabilir → hormon replasmanı", "hipofizit|hipotiroid|adrenal yetmez|tip 1 diyabet|hormon replas|levotiroksin|hidrokortizon"],
      ["!Derecelendirme (CTCAE grade 1–4) yönetimi belirler: grade 1'de genellikle devam, grade 2'de ara ver", "grade|derece|ctcae|derecelendir|evrelendir"],
      ["!Grade 3–4'te immünoterapi kesilir ve yüksek doz kortikosteroid başlanır; grade 4'te genelde kalıcı bırakılır", "yüksek doz steroid|yüksek doz kortikosteroid|metilprednizolon|immünoterapi kesil|immünoterapiyi kes|kalıcı olarak kes|kalıcı bırak|kalıcı kes"],
      ["Steroide dirençli kolitte infliksimab ya da vedolizumab", "infliksimab|infliximab|vedolizumab|steroide dirençli|steroid dirençli|tnf"],
      ["Nadir ama ölümcül: miyokardit (miyozit, myasteni ile birlikte olabilir)", "miyokardit|troponin|miyozit|myasteni|ölümcül"],
      ["Endokrinopati hormonla kontrol altındaysa immünoterapiye devam edilebilir", "hormonla kontrol|immünoterapiye devam|tedaviye devam|sürdürüle"]
    ]},
  { id: "onk-kolorektal-kras-msi", tr: "Kolorektal kanserde moleküler belirteçler (RAS, BRAF, MSI)", en: "Molecular markers in colorectal cancer (RAS, BRAF, MSI)", cat: "sis", lvl: 3,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Cervantes A ve ark. Metastatic colorectal cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2023", "https://doi.org/10.1016/j.annonc.2022.10.003"],
          ["Stjepanovic N ve ark. Hereditary gastrointestinal cancers: ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2019", "https://doi.org/10.1093/annonc/mdz233"]]
    },
    c: [
      ["!Metastatik hastada tanıda RAS (KRAS/NRAS), BRAF ve MMR/MSI testi", "kras|nras|ras mutasyon|ras test|braf|mmr|msi|mikrosatellit|mismatch"],
      ["!RAS yabanıl tipte anti-EGFR (setuksimab, panitumumab) — RAS mutantta etkisiz", "ras yabanıl|ras vahşi|wild type|yabanıl tip|mutant olmayan|anti egfr|anti-egfr|egfr antikor"],
      ["Anti-EGFR yararı sol kolon yerleşimli tümörde belirgin; sağ kolonda bevasizumab tercih", "sol kolon|sol taraf|sağ kolon|sağ taraf|primer yerleşim|bevasizumab|anti vegf"],
      ["!dMMR/MSI-H: ilk sırada immün kontrol noktası inhibitörü (pembrolizumab)", "msi h|msi-h|msi yüksek|mikrosatellit instabil|dmmr|immünoterapi|pembrolizumab|nivolumab|kontrol noktası"],
      ["BRAF V600E: kötü prognoz; ikinci sırada enkorafenib + setuksimab (BEACON), birinci sırada + mFOLFOX6 (BREAKWATER)", "v600|braf mutasyon|enkorafenib|encorafenib|kötü prognoz"],
      ["MSI/dMMR'de (MLH1 kaybında BRAF/MLH1 metilasyonu ile sporadik olgu dışlandıktan sonra) Lynch araştırılır", "lynch|kalıtsal|herediter|germline|germ hattı|genetik danış"],
      ["Kemoterapi omurgası: FOLFOX, FOLFIRI, kapesitabin", "folfox|folfiri|oksaliplatin|irinotekan|kapesitabin"],
      ["HER2 amplifikasyonu nadir hedef (RAS yabanıl hastada)", "her2 amplif|her 2 amplif|her2 hedef"]
    ]},
  { id: "onk-herediter-brca-lynch", tr: "Kalıtsal kanser sendromları: BRCA ve Lynch", en: "Hereditary cancer syndromes: BRCA and Lynch", cat: "sis", lvl: 3,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Sessa C ve ark. Risk reduction and screening of cancer in hereditary breast-ovarian cancer syndromes: ESMO Clinical Practice Guideline. Ann Oncol 2023", "https://pubmed.ncbi.nlm.nih.gov/36307055/"],
          ["Stjepanovic N ve ark. Hereditary gastrointestinal cancers: ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2019", "https://doi.org/10.1093/annonc/mdz233"]]
    },
    c: [
      ["!Otozomal dominant kalıtım; erken yaşta, çok sayıda ya da bilateral kanser, güçlü aile öyküsü şüphelendirir", "otozomal dominant|aile öykü|ailede|erken yaş|genç yaşta|bilateral|birinci derece"],
      ["!BRCA1/BRCA2: homolog rekombinasyon onarım geni; meme, over, prostat, pankreas kanseri riski", "brca|homolog rekombinasyon|dna onarım|meme over|herediter meme"],
      ["BRCA taşıyıcıda meme MR ile tarama; risk azaltıcı salpingo-ooferektomi önerilir, mastektomi seçenek olarak tartışılır", "meme mr|mr ile tara|manyetik rezonans|mastektomi|salpingo|ooferektomi|overlerin alın|profilaktik cerrahi|risk azaltıcı"],
      ["BRCA mutasyonlu tümörde PARP inhibitörü (sentetik letalite)", "parp|olaparib|niraparib|sentetik letal"],
      ["!Lynch sendromu: DNA uyumsuzluk onarım genleri (MLH1, MSH2, MSH6, PMS2, EPCAM)", "lynch|mlh1|msh2|msh6|pms2|epcam|uyumsuzluk onarım|mismatch|herediter nonpolipozis|hnpcc"],
      ["Lynch: kolorektal ve endometriyum kanseri başta; over, mide, üriner sistem", "endometri|rahim kanser|üriner|üreter|ince bağırsak"],
      ["Lynch tanısında tüm kolorektal/endometriyum tümörlerinde MMR-IHK ya da MSI ile evrensel tarama; Amsterdam/Bethesda tek başına yetersiz", "evrensel tara|universal|tüm kolorektal|tüm endometri|tüm tümörlerde|her kolorektal"],
      ["Lynch taşıyıcıda erken başlayan ve sık aralıklı kolonoskopi; genetik danışmanlık ve kaskad test", "kolonoskopi|genetik danış|kaskad|akrabalar|aile bireyleri"]
    ]},
  { id: "onk-paraneoplastik-sendromlar", tr: "Paraneoplastik sendromlar", en: "Paraneoplastic syndromes", cat: "tem", lvl: 3,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Abeloff's Clinical Oncology, 6. baskı (2020)"],
      m: [["Pelosof LC, Gerber DE. Paraneoplastic syndromes: an approach to diagnosis and treatment. Mayo Clin Proc 2010", "https://doi.org/10.4065/mcp.2010.0099"],
          ["Graus F ve ark. Updated Diagnostic Criteria for Paraneoplastic Neurologic Syndromes. Neurol Neuroimmunol Neuroinflamm 2021", "https://doi.org/10.1212/NXI.0000000000001014"]]
    },
    c: [
      ["!Tanım: tümör kitlesi ya da metastazla açıklanamayan, hormon/sitokin salgısı ya da çapraz immün yanıtla oluşan uzak etkiler; tümörden önce çıkabilir", "uzak etki|tümör kitlesi|metastazla açıklan|hormon salg|sitokin|çapraz reaksiyon|immün yanıt|tanıdan önce|kanserden önce"],
      ["!Küçük hücreli akciğer kanseri: SIADH (hiponatremi), ektopik ACTH (Cushing), Lambert-Eaton", "uygunsuz adh|siadh|hiponatrem|ektopik acth|cushing|lambert|küçük hücreli"],
      ["!Malignite hiperkalsemisi: PTHrP (skuamöz hücreli kanserler)", "pthrp|parathormon ilişkili|paratiroid hormon ilişkili|hiperkalsem|skuamöz|yassı hücreli"],
      ["Lambert-Eaton: presinaptik voltaj kapılı kalsiyum kanalı antikoru; tekrarlayan uyarıda artış", "voltaj kapılı|kalsiyum kanal|vgcc|presinaptik|artış gösteren|inkremental"],
      ["Nörolojik: anti-Hu (ensefalomiyelit, SCLC), anti-Yo (serebellar dejenerasyon; over/meme)", "anti hu|anti-hu|anti yo|anti-yo|serebellar dejeneras|ensefalit|onkonöral|antinöronal"],
      ["Dermatolojik: dermatomiyozit, akantozis nigrikans", "dermatomiyozit|akantozis|nigrikans|leser trelat"],
      ["Hematolojik: Trousseau (gezici tromboflebit), eritrositoz (RCC, HCC)", "trousseau|tromboflebit|hiperkoagül|eritrositoz|polistemi|eritropoetin"],
      ["Tedavi: altta yatan tümörün tedavisi; nörolojik sendromda immünoterapi (steroid, IVIG)", "tümörün tedavi|altta yatan tümör|tümör çıkarıl|ivig|plazmaferez|immünsüpres"]
    ]},
  { id: "onk-testis-germ-hucreli", tr: "Testis germ hücreli tümörleri", en: "Testicular germ cell tumors", cat: "sis", lvl: 3,
    src: {
      k: ["DeVita, Hellman, and Rosenberg's Cancer: Principles and Practice of Oncology, 12. baskı (2022)", "Campbell-Walsh-Wein Urology, 12. baskı (2020)"],
      m: [["Oldenburg J ve ark. Testicular seminoma and non-seminoma: ESMO-EURACAN Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2022", "https://pubmed.ncbi.nlm.nih.gov/35065204/"],
          ["Patrikidou A ve ark. European Association of Urology Guidelines on Testicular Cancer: 2023 Update. Eur Urol 2023", "https://pubmed.ncbi.nlm.nih.gov/37183161/"]]
    },
    c: [
      ["!Genç erkeklerin en sık solid tümörü; risk: inmemiş testis (kriptorşidizm), kişisel/aile öyküsü", "genç erkek|genç yetişkin|kriptorşid|inmemiş testis|testis inme|germ hücre"],
      ["Ağrısız testiküler kitle; skrotal USG ile değerlendirme", "ağrısız|testiste kitle|testis kitle|skrotal usg|skrotal ultra|ultrason|usg"],
      ["!Seminom ve nonseminom (embriyonal, yolk sak, koryokarsinom, teratom) ayrımı", "seminom|nonseminom|non seminom|embriyonal|yolk sak|yolk kesesi|endodermal sinüs|teratom|koryokarsinom"],
      ["!Belirteçler AFP, beta-hCG, LDH: orşiektomi öncesi ve sonrası; saf seminomda AFP yükselmez", "afp|alfa feto|hcg|ldh|laktat dehidrogenaz|seminomda afp|afp yükselmez|afp yüksekse"],
      ["!Tanı ve tedavi: inguinal radikal orşiektomi (skrotal biyopsi yapılmaz)", "inguinal|radikal orşiektomi|radikal orşiyektomi|skrotal biyopsi yapılmaz|skrotal yoldan biyopsi yapılmı|skrotal girişimden kaçın|skrotal girişim yapılmaz"],
      ["Evreleme: toraks-abdomen-pelvis BT; belirteç düzeyleri (S) evreye girer", "toraks abdomen|abdomen bt|retroperiton|bete|evreleme|s kategori"],
      ["Sisplatin bazlı kemoterapi (BEP) ile ileri evrede bile yüksek kür", "sisplatin|bep|bleomisin|etoposid|kür|yüksek kür|iyileşme oranı"],
      ["Evre I'de aktif izlem ya da adjuvan tedavi; fertilite için sperm dondurma", "aktif izlem|sürveyans|surveillance|sperm|fertilite|dondur|kriyoprezerv"]
    ]}
]
});
