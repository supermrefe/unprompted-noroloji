/* Ortopedi ve travmatoloji — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta her yıl sorulan ve acilde/poliklinikte kaçırılınca kalıcı sakatlık bırakan konular:
   erişkin travması (kalça, distal radius, skafoid, ayak bileği, açık kırık, kompartman, yağ embolisi),
   spor yaralanmaları (ÖÇB/menisküs, omuz çıkığı), pediatrik ortopedi (GKD, Kocher, Perthes, FBKE, Ponseti, skolyoz)
   ve kemik tümörleri. Karpal tünel (nöroloji), pelvis kırığı (acil), osteoporoz (endokrin) bilerek alınmadı. */
UP.add({ id: "ortopedi", subs: {
    trv: "Erişkin travma ve kırıklar",
    spor: "Spor yaralanmaları ve çıkıklar",
    ped: "Pediatrik ortopedi",
    tum: "Kemik tümörleri"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "ort-yasli-kalca-kirigi", tr: "Yaşlıda kalça kırığı", en: "Hip fracture in older adults", cat: "trv", lvl: 1,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["AAOS Clinical Practice Guideline: Management of Hip Fractures in Older Adults. American Academy of Orthopaedic Surgeons 2021", "https://www.aaos.org/hipfracturesintheelderly/"],
          ["HIP ATTACK Investigators. Accelerated surgery versus standard care in hip fracture (HIP ATTACK): an international, randomised, controlled trial. Lancet 2020", "https://doi.org/10.1016/S0140-6736(20)30058-1"]]
    },
    c: [
      ["!Düşük enerjili düşme; bacak kısa ve dış rotasyonda", "basit düşme|düşük enerji|ayakta düş|kendi boyunda|dış rotasyon|eksternal rotasyon|kısalmış|bacak kısa|kısalık"],
      ["!Tip ayrımı: intrakapsüler (femur boynu) ve ekstrakapsüler (intertrokanterik)", "intrakapsüler|ekstrakapsüler|femur boyn|kollum femor|intertrokanter|trokanter|subtrokanter|garden"],
      ["!İlk 24–48 saatte cerrahi (AAOS 2021)", "24 48|24 ile 48|yirmi dört|48 saat|kırk sekiz|ilk iki gün|erken cerrahi|erken ameliyat|geciktirmeden"],
      ["Deplase boyun kırığında artroplasti (hemi/total)", "artroplasti|hemiartroplasti|parsiyel protez|total kalça|protez"],
      ["İntertrokanterik kırıkta kayan kalça vidası ya da intramedüller çivi", "kayan kalça vida|dinamik kalça vida|dhs|intramedüller|proksimal femur çivi|proksimal femoral çivi|pfn|sefalomedüller"],
      ["Bölgesel sinir bloğu ile ağrı kontrolü, deliryumu önleme", "sinir blo|femoral blo|fascia iliaka|fasya iliaka|rejyonel"],
      ["Tromboprofilaksi, erken mobilizasyon, ortogeriatri ekibi", "tromboprofilaksi|dvt profilaksi|heparin|erken mobiliz|ortogeriatri|geriatri|multidisipliner|disiplinlerarası"],
      ["Mortalite yüksek; osteoporoz tedavisi ve düşme önleme", "mortalite|ölüm oranı|osteoporoz|kemik yoğunluğu|bifosfonat|düşmeyi önle|düşme önle|düşme riski"]
    ]},
  { id: "ort-acik-kirik-gustilo", tr: "Açık kırık: Gustilo-Anderson sınıflaması ve antibiyotik", en: "Open fractures: Gustilo-Anderson classification", cat: "trv", lvl: 1,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Gustilo RB, Anderson JT. Prevention of infection in the treatment of one thousand and twenty-five open fractures of long bones. J Bone Joint Surg Am 1976", "https://pubmed.ncbi.nlm.nih.gov/773941/"],
          ["Hoff WS et al. East Practice Management Guidelines Work Group: update to practice management guidelines for prophylactic antibiotic use in open fractures. J Trauma 2011", "https://www.east.org/mobile/practice-management-guideline/trauma/117"]]
    },
    c: [
      ["!Kırık hattı deri yarasıyla dış ortama açılır; enfeksiyon riski", "açık kırık|dış ortam|dışarıyla|deri bütünlüğü|kemik dışarı|yara ile ilişki|kontamin"],
      ["!Gustilo-Anderson sınıflaması: tip I, II, III", "gustilo|anderson|tip 1|tip bir|tip i |tip 2|tip iki|tip 3|tip üç"],
      ["Tip I küçük-temiz yara, tip II orta, tip III geniş yumuşak doku hasarı / yüksek enerji", "1 santim|bir santim|10 santim|on santim|geniş yumuşak doku|yüksek enerji|ağır kontamin"],
      ["Tip IIIA/B/C: IIIB flep gereksinimi, IIIC tamir gerektiren arter yaralanması", "3a|3b|3c|üç a|üç b|üç c|iiib|iiic|flep|arter yaralan|damar yaralan|damar tamir"],
      ["!Mümkün olan en erken IV antibiyotik: gram pozitif kapsam (sefazolin)", "sefazolin|sefalosporin|birinci kuşak|gram pozitif|antibiyotik profilak|erken antibiyotik|antibiyotiği hemen|hemen antibiyotik"],
      ["Tip III'te gram negatif ekleme (aminoglikozit)", "gram negatif|aminoglikozit|gentamisin"],
      ["Tetanoz profilaksisi", "tetanoz"],
      ["Acil debridman, yıkama ve stabilizasyon (eksternal fiksatör)", "debridman|debride|irrigasyon|yara yıka|bol serum|eksternal fiksatör|harici fiksatör|stabiliz"]
    ]},
  { id: "ort-kompartman-sendromu", tr: "Akut kompartman sendromu", en: "Acute compartment syndrome", cat: "trv", lvl: 1,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["BOAST: Diagnosis and Management of Compartment Syndrome of the Limbs. British Orthopaedic Association / BAPRAS 2025 revizyonu", "https://www.boa.ac.uk/resource/boast-10-pdf.html"],
          ["McQueen MM, Court-Brown CM. Compartment monitoring in tibial fractures. The pressure threshold for decompression. J Bone Joint Surg Br 1996", "https://doi.org/10.1302/0301-620X.78B1.0780099"]]
    },
    c: [
      ["!Kapalı fasya bölmesinde basınç artışı → doku iskemisi", "kompartman|bölme içi basınç|fasya|fasyal|kas bölme|doku iskemi|kapalı bölme"],
      ["Risk: tibia kırığı, ezilme, sıkı alçı/bandaj, reperfüzyon", "tibia|ezilme|crush|sıkı alçı|sıkı bandaj|reperfüzyon"],
      ["!En erken bulgu: orantısız ağrı ve pasif germeyle artan ağrı", "orantısız|orantısız ağrı|beklenenden fazla|pasif germe|pasif ger|pasif ekstansiyon|pasif fleksiyon|analjeziğe yanıtsız"],
      ["Nabız genelde korunur; nabız kaybı ve paralizi geç bulgu", "nabız korun|nabız alın|nabız var|nabız kaybı geç|geç bulgu|paralizi|5p|beş p|6p|altı p"],
      ["Kompartman basıncı ölçümü: diyastolik-kompartman farkı <30 mmHg", "basınç ölç|delta p|diyastolik fark|diyastolik basınç|30 mm|otuz mili"],
      ["İlk adım: alçı ve sargıları deriye kadar açmak", "alçıyı aç|alçıyı çıkar|sargıyı aç|bandajı aç|bandajlar açıl|alçı ve bandaj|alçı ve sargı|bivalv|deriye kadar"],
      ["!Kesin tedavi: acil fasyotomi", "fasyotomi|fasiyotomi|fasciotomi|dekompresyon"],
      ["Gecikmede kas nekrozu, rabdomiyoliz, Volkmann kontraktürü", "nekroz|rabdomiyoliz|miyoglobin|volkmann|kontraktür|böbrek yetmez"]
    ]},
  { id: "ort-distal-radius-kirigi", tr: "Distal radius kırığı", en: "Distal radius fracture", cat: "trv", lvl: 1,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["AAOS/ASSH Clinical Practice Guideline: Management of Distal Radius Fractures. American Academy of Orthopaedic Surgeons 2020", "https://www.aaos.org/quality/quality-programs/distal-radius-fractures"],
          ["Kamal RN, Shapiro LM. American Academy of Orthopaedic Surgeons/American Society for Surgery of the Hand Clinical Practice Guideline Summary: Management of Distal Radius Fractures. J Am Acad Orthop Surg 2022", "https://doi.org/10.5435/JAAOS-D-21-00719"]]
    },
    c: [
      ["!Mekanizma: el üstüne düşme (FOOSH); yaşlıda osteoporotik", "el üstüne düş|elin üstüne|açık elin|uzanmış el|foosh|elini koyarak|osteopor"],
      ["!Colles: distal parça dorsale yer değiştirir (çatal sırtı)", "colles|dorsal angul|dorsale|çatal sırt|çatal görün|yemek çatal"],
      ["Smith (volar yer değiştirme) ve Barton (eklem içi kenar) kırığı", "smith|barton|volar yer|volare|ters colles"],
      ["Grafide radial boy, eğim, volar tilt ve eklem basamağı", "radial boy|radyal boy|radial eğim|radyal inklinasyon|volar tilt|volar eğim|eklem içi|basamak|kısalma"],
      ["!Kapalı redüksiyon ve alçı ya da volar kilitli plak", "kapalı redüksiyon|redükte|redüksiyon|alçı|atel|volar plak|kilitli plak|plak vida|kirschner|k teli"],
      ["Yaşlıda konservatif tedavi daha sık kabul edilebilir (AAOS 2020)", "65 yaş|altmış beş|yaşlı hasta|düşük talep|fonksiyonel talep|konservatif"],
      ["Komplikasyonlar: median sinir/akut karpal tünel, EPL rüptürü, kompleks bölgesel ağrı sendromu", "median sinir|karpal tünel|epl|ekstansör pollisis|kompleks bölgesel|sudeck|refleks sempatik|malunion|kaynama bozuk"]
    ]},
  { id: "ort-ayak-bilegi-kirigi", tr: "Ayak bileği kırığı: Ottawa kuralları ve Weber sınıflaması", en: "Ankle fracture: Ottawa rules and Weber classification", cat: "trv", lvl: 1,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Stiell IG et al. Decision rules for the use of radiography in acute ankle injuries. Refinement and prospective validation. JAMA 1993", "https://pubmed.ncbi.nlm.nih.gov/8433468/"],
          ["Bachmann LM et al. Accuracy of Ottawa ankle rules to exclude fractures of the ankle and mid-foot: systematic review. BMJ 2003", "https://pubmed.ncbi.nlm.nih.gov/12595378/"]]
    },
    c: [
      ["!Ottawa ayak bileği kuralları: hangi hastaya grafi çekilecek", "ottawa"],
      ["Malleollerin arka kenarı/ucunda hassasiyet", "malleol|arka kenar|arka kenarında|uç kısmında|ucunda hassas"],
      ["Hemen ve acilde dört adım yük verememe", "dört adım|4 adım|yük verem|basamıyor|basamama|yürüyemiyor|ağırlık veremi"],
      ["Orta ayak: 5. metatars tabanı ve naviküler hassasiyeti", "5 metatars|beşinci metatars|metatars taban|naviküler|navikula"],
      ["Duyarlılık çok yüksek, gereksiz grafiyi azaltır", "duyarlılık|sensitivite|gereksiz grafi|gereksiz röntgen|grafi sayısı"],
      ["!Weber sınıflaması: sindesmoza göre fibula kırık seviyesi (A altında, B hizasında, C üstünde)", "weber|danis|sindesmoz|syndesmo|tibiofibular"],
      ["Stabil kırıkta bot/alçı, unstabil (bi-/trimalleoler, Weber C) kırıkta açık redüksiyon internal fiksasyon", "talar kayma|medial açıklık|açık redüksiyon|internal fiksasyon|orif|plak"],
      ["Maisonneuve: proksimal fibula kırığı + sindesmoz yaralanması", "maisonneuve|proksimal fibula"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "ort-gkd", tr: "Gelişimsel kalça displazisi (Ortolani/Barlow)", en: "Developmental dysplasia of the hip", cat: "ped", lvl: 2,
    src: {
      k: ["Lovell and Winter's Pediatric Orthopaedics, 8. baskı (2020)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["AAOS Clinical Practice Guideline: Detection and Nonoperative Management of Pediatric Developmental Dysplasia of the Hip in Infants up to Six Months of Age. American Academy of Orthopaedic Surgeons 2022", "https://aaos.org/quality/quality-programs/pediatric-developmental-dysplasia-of-the-hip"],
          ["Shaw BA, Segal LS; AAP Section on Orthopaedics. Evaluation and Referral for Developmental Dysplasia of the Hip in Infants. Pediatrics 2016", "https://pubmed.ncbi.nlm.nih.gov/27940740/"]]
    },
    c: [
      ["!Risk faktörleri: makat geliş, kız, aile öyküsü, ilk gebelik, sıkı kundak", "makat|kız bebek|kız cinsiyet|aile öykü|ailede|ilk gebelik|ilk doğum|oligohidramniyo|kundak"],
      ["!Barlow: kalçayı çıkarma (provokasyon) testi", "barlow"],
      ["!Ortolani: çıkık kalçayı yerine oturtma testi, 'klunk'", "ortolani|klunk|clunk|yerine otur"],
      ["Büyük bebekte abdüksiyon kısıtlılığı, Galeazzi, cilt kıvrımı asimetrisi", "abdüksiyon kısıt|abdüksiyonda kısıt|galeazzi|cilt kıvrım|pli asimetri|kıvrım asimetri|bacak boyu fark"],
      ["Görüntüleme: küçük bebekte ultrason (Graf), 4. aydan sonra grafi", "ultrason|usg|ultrasonografi|graf|pelvis grafi|röntgen|asetabular indeks"],
      ["AAOS 2022: evrensel USG taraması önerilmez, risk faktörü varsa görüntüle; Türkiye'de Sağlık Bakanlığı programıyla tüm bebeklere kalça USG taraması", "evrensel tarama önerilmez|rutin ultrason önerilmez|risk faktörü varsa|seçici tarama|sağlık bakanlığı|ulusal tarama|tarama programı"],
      ["!6 ayın altında Pavlik bandajı", "pavlik"],
      ["Başarısızlık/geç tanıda kapalı-açık redüksiyon ve pelvipedal alçı; komplikasyon femur başı AVN", "kapalı redüksiyon|açık redüksiyon|pelvipedal|spika|osteotomi|avasküler|avn|femur başı nekroz"]
    ]},
  { id: "ort-skafoid-kirigi", tr: "Skafoid kırığı", en: "Scaphoid fracture", cat: "trv", lvl: 2,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Green's Operative Hand Surgery, 8. baskı (2022)"],
      m: [["Dias JJ et al. Surgery versus cast immobilisation for adults with a bicortical fracture of the scaphoid waist (SWIFFT): a pragmatic, multicentre, open-label, randomised superiority trial. Lancet 2020", "https://doi.org/10.1016/S0140-6736(20)30931-4"],
          ["The management of suspected scaphoid fractures in the UK: a national cross-sectional study. Bone Joint Open 2021", "https://doaj.org/article/70e8dc808fbe44b68fda4bf0ac13e883"]]
    },
    c: [
      ["!En sık kırılan karpal kemik; genç erkekte el üstüne düşme", "en sık kırılan karpal|en sık karpal|karpal kemik|el bileği kemik|el üstüne düş|açık elin|uzanmış el|foosh"],
      ["!Enfiye çukuru (anatomik snuffbox) hassasiyeti", "enfiye|snuffbox|snuff box|anatomik çukur"],
      ["Tüberkül hassasiyeti ve başparmak aksiyel kompresyonunda ağrı", "tüberkül|başparmak kompres|aksiyel kompres|başparmağa bas|baş parmağı it"],
      ["İlk grafi normal olabilir: skafoid grafileri, şüphede MR (gizli kırık)", "skafoid grafi|skafoid serisi|normal grafi|grafi normal|gizli kırık|okült|emar|mr |manyetik|bt |bete|tomografi"],
      ["!Kanlanma distalden retrograd: proksimal kutup avasküler nekroz riski", "retrograd|distalden|proksimal kutup|proksimal uç|avasküler|avn|nekroz|radial arter"],
      ["Kaynamama (nonunion) ve SNAC artrozu", "kaynama|nonunion|psödoartroz|snac|artroz"],
      ["Deplase olmayan bel kırığında başparmak dahil alçı; deplase/proksimal kutupta vida (SWIFFT)", "başparmak dahil|başparmağı içine|thumb spica|skafoid alçı|herbert|kanüllü vida|vida ile|perkütan vida|swifft|cerrahi tespit"]
    ]},
  { id: "ort-ock-menisku", tr: "Ön çapraz bağ ve menisküs yaralanmaları", en: "ACL and meniscus injuries", cat: "spor", lvl: 2,
    src: {
      k: ["Campbell's Operative Orthopaedics, 15. baskı (2026)", "DeLee, Drez & Miller's Orthopaedic Sports Medicine, 5. baskı (2020)"],
      m: [["Brophy RH, Lowry KJ. American Academy of Orthopaedic Surgeons Clinical Practice Guideline Summary: Management of Anterior Cruciate Ligament Injuries. J Am Acad Orthop Surg 2023", "https://pubmed.ncbi.nlm.nih.gov/36727995/"],
          ["Kopf S et al. Management of traumatic meniscus tears: the 2019 ESSKA meniscus consensus. Knee Surg Sports Traumatol Arthrosc 2020", "https://pubmed.ncbi.nlm.nih.gov/32052121/"]]
    },
    c: [
      ["!ÖÇB: temassız pivot/dönme hareketi, 'pop' sesi, hızlı şişlik (hemartroz)", "temassız|pivot|dönme hareket|ani dön|pop ses|patlama ses|hemartroz|eklem içi kan|hızlı şiş"],
      ["!Lachman testi (en duyarlı), ön çekmece, pivot shift", "lachman|ön çekmece|anterior drawer|pivot shift|pivot şift"],
      ["Tanıda MR", "emar|mr |manyetik rezonans|mrg"],
      ["O'Donoghue mutsuz üçlüsü: ÖÇB + MKB + menisküs", "donoghue|mutsuz üçlü|unhappy triad|medial kollateral|mkb"],
      ["Aktif gençte rekonstrüksiyon, otogreft tercih (AAOS 2022)", "rekonstrüksiyon|otogreft|otolog greft|patellar tendon|hamstring|kemik tendon kemik|semitendinozus"],
      ["!Menisküs: eklem aralığı hassasiyeti, kilitlenme; McMurray / Thessaly", "eklem aralığı|eklem çizgisi|kilitlen|takılma|mcmurray|thessaly|apley"],
      ["Menisküsü koru: kanlanan dış bölgede (kırmızı bölge) onarım", "menisküs onar|menisküsü onar|menisküs dikiş|menisküsü koru|menisküs koru|kırmızı bölge|kırmızı kırmızı|kanlanan"],
      ["Dejeneratif yırtıkta önce konservatif; menisektomi sonrası artroz riski", "önce konservatif|konservatif tedavi|fizik tedavi|egzersiz|menisektomi sonrası|menisektomiden sonra|osteoartrit|artroz|kireçlen"]
    ]},
  { id: "ort-omuz-cikigi", tr: "Omuz çıkığı (glenohumeral dislokasyon)", en: "Shoulder dislocation", cat: "spor", lvl: 2,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Hasebroock AW et al. Management of primary anterior shoulder dislocations: a narrative review. Sports Med Open 2019", "https://pmc.ncbi.nlm.nih.gov/articles/PMC6624218/"],
          ["Robinson CM et al. Functional outcome and risk of recurrent instability after primary traumatic anterior shoulder dislocation in young patients. J Bone Joint Surg Am 2006", null]]
    },
    c: [
      ["!En sık ön (anterior) çıkık: abdüksiyon + dış rotasyon", "ön çıkık|anterior çıkık|anterior dislok|öne çık|abdüksiyon ve dış|dış rotasyon"],
      ["Muayene: omuz konturu kaybı (apolet belirtisi), kol hafif abdüksiyonda", "apolet|epolet|kontur kaybı|kontur|yuvarlaklık|köşeli|akromion belirgin"],
      ["!Aksiller sinir muayenesi: deltoid üstü duyu (redüksiyondan önce ve sonra)", "aksiller sinir|aksiler sinir|deltoid|asker arma|regimental|nörovasküler"],
      ["Redüksiyon öncesi ve sonrası grafi", "redüksiyon öncesi|redüksiyondan önce|redüksiyon sonrası|redüksiyondan sonra|kontrol grafi|iki yönlü grafi|aksiyel grafi|grafi çek"],
      ["!Kapalı redüksiyon yöntemleri: dış rotasyon, FARES, Stimson, Kocher, Hipokrat", "kapalı redüksiyon|fares|stimson|hipokrat|kocher yöntem|kocher manevra|dış rotasyon yöntem|traksiyon|redükte"],
      ["Bankart (ön-alt labrum) ve Hill-Sachs (humerus başı çentiği) lezyonları", "bankart|hill sachs|hillsachs|labrum"],
      ["Arka çıkık: epileptik nöbet, elektrik çarpması; ampul belirtisi", "arka çıkık|posterior çıkık|posterior dislok|epilep|nöbet|elektrik çarp|ampul|lightbulb"],
      ["Gençte nüks yüksek; tekrarlayan instabilitede cerrahi stabilizasyon", "nüks|rekürren|tekrar çık|tekrarlayan çık|instabilite|stabilizasyon|latarjet|bankart onar"]
    ]},
  { id: "ort-cocuk-septik-artrit", tr: "Çocukta septik artrit ve akut osteomiyelit (Kocher kriterleri)", en: "Pediatric septic arthritis and osteomyelitis", cat: "ped", lvl: 2,
    src: {
      k: ["Lovell and Winter's Pediatric Orthopaedics, 8. baskı (2020)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Kocher MS, Zurakowski D, Kasser JR. Differentiating between septic arthritis and transient synovitis of the hip in children: an evidence-based clinical prediction algorithm. J Bone Joint Surg Am 1999", "https://pubmed.ncbi.nlm.nih.gov/10608376/"],
          ["Woods CR et al. Clinical Practice Guideline by the PIDS and IDSA: 2021 Guideline on Diagnosis and Management of Acute Hematogenous Osteomyelitis in Pediatrics. J Pediatric Infect Dis Soc 2021", "https://pubmed.ncbi.nlm.nih.gov/34350458/"]]
    },
    c: [
      ["!Ayırıcı tanı: geçici (toksik) sinovit", "geçici sinovit|toksik sinovit|transient|geçici sinovyal"],
      ["!Kocher kriterleri: ateş >38,5, yük verememe, ESH ≥40, lökosit >12.000", "kocher|38 5|otuz sekiz buçuk|yük verem|basamıyor|basamama|sedimantasyon|esh|lökosit"],
      ["Ek olarak CRP yüksekliği", "crp|c reaktif"],
      ["Kalçada efüzyon için ultrason, tanı için eklem aspirasyonu", "kalça ultrason|eklem efüzyon|eklem aspirasyon|kalçada efüzyon|kalça efüzyon|kalçada sıvı|kalça aspirasyon|kalçanın aspirasyon|kalça ponksiyon"],
      ["!Septik kalça cerrahi acil: drenaj/artrotomi; gecikmede femur başı hasarı", "artrotomi|septik kalça|kalça drenaj|ortopedik acil|femur başı|büyüme plağı"],
      ["Etken: S. aureus; küçük çocukta Kingella kingae", "kingella|kingae"],
      ["Akut hematojen osteomiyelit: metafiz, MR en iyi görüntüleme, kan kültürü", "osteomiyelit|metafiz|hematojen"],
      ["Ampirik antistafilokokal tedavi; düzelince erken oral geçiş (PIDS/IDSA 2021)", "antistafilokok|oral geçiş|oral tedaviye geç|ağızdan geç|orale geç"]
    ]},
  { id: "ort-adolesan-idiyopatik-skolyoz", tr: "Adölesan idiyopatik skolyoz", en: "Adolescent idiopathic scoliosis", cat: "ped", lvl: 2,
    src: {
      k: ["Lovell and Winter's Pediatric Orthopaedics, 8. baskı (2020)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Weinstein SL, Dolan LA, Wright JG, Dobbs MB. Effects of bracing in adolescents with idiopathic scoliosis (BrAIST). N Engl J Med 2013", "https://pubmed.ncbi.nlm.nih.gov/24047455/"],
          ["Negrini S et al. 2016 SOSORT guidelines: orthopaedic and rehabilitation treatment of idiopathic scoliosis during growth. Scoliosis Spinal Disord 2018", "https://pubmed.ncbi.nlm.nih.gov/29435499/"]]
    },
    c: [
      ["!Üç boyutlu deformite: lateral eğrilik + vertebra rotasyonu; Cobb açısı >10°", "üç boyut|rotasyon|rotasyonu|cobb|10 derece|on derece|yana eğrilik|lateral eğri"],
      ["Tarama: Adams öne eğilme testi, kaburga kamburu, skolyometre", "adams|öne eğil|kaburga kambur|rib hump|skolyometre|omuz asimetri|bel üçgen"],
      ["Kızlarda ilerleme daha sık; büyüme atağında progresyon", "kız|büyüme atağ|büyüme dönem|progresyon|ilerleme riski|ilerler"],
      ["İskelet olgunluğu: Risser işareti", "risser|iskelet olgun|kemik yaşı"],
      ["!Küçük eğri izlem, büyümesi süren orta eğride korse (BrAIST)", "korse|brace|ortez|braist|izlem|takip|gözlem"],
      ["!Büyük eğride posterior spinal füzyon", "füzyon|spinal füzyon|posterior enstrüman|cerrahi düzelt|vida rod|ameliyat"],
      ["Kırmızı bayrak: ağrı, nörolojik bulgu, sol torakal eğri → MR", "sol torakal|ağrılı skolyoz|nörolojik bulgu|kırmızı bayrak|siringomiyeli|emar|manyetik rezonans"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "ort-perthes", tr: "Legg-Calvé-Perthes hastalığı", en: "Legg-Calvé-Perthes disease", cat: "ped", lvl: 3,
    src: {
      k: ["Lovell and Winter's Pediatric Orthopaedics, 8. baskı (2020)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Herring JA, Kim HT, Browne R. Legg-Calve-Perthes disease. Part I: Classification of radiographs with use of the modified lateral pillar and Stulberg classifications. J Bone Joint Surg Am 2004", "https://pesquisa.bvsalud.org/bvsdip/resource/pt/mdl-15466719"],
          ["Herring JA, Kim HT, Browne R. Legg-Calve-Perthes disease. Part II: Prospective multicenter study of the effect of treatment on outcome. J Bone Joint Surg Am 2004", "https://pubmed.ncbi.nlm.nih.gov/15466720/"]]
    },
    c: [
      ["!Çocukta femur başının idiyopatik avasküler nekrozu", "avasküler|avn|osteonekroz|nekroz|kanlanma bozul|idiyopatik"],
      ["Tipik hasta: erkek çocuk, kemik yaşı gecikmiş", "erkek çocuk|erkeklerde|kemik yaşı|gecikmiş kemik"],
      ["Ağrısız/hafif ağrılı topallama, dize yansıyan ağrı", "topallama|topall|aksama|dize yansı|diz ağrı"],
      ["Abdüksiyon ve iç rotasyon kısıtlılığı", "abdüksiyon|iç rotasyon|kısıtlı"],
      ["Evreler: başlangıç, fragmantasyon, reossifikasyon, iyileşme", "fragmantasyon|fragmentasyon|reossifik|evre|waldenström|subkondral"],
      ["!Herring lateral pilar sınıflaması (A, B, B/C, C)", "herring|lateral pilar|lateral pillar|pilar"],
      ["!Kötü prognoz: ileri başlangıç yaşı, lateral pilar C", "8 yaş|sekiz yaş|ileri yaş|büyük çocuk|başlangıç yaşı|kötü prognoz|pilar c"],
      ["Tedavi amacı femur başını asetabulumda tutmak (containment); seçilmiş olguda osteotomi", "containment|kapsama|asetabulum içinde|asetabulumda tut|osteotomi|femoral osteotomi|pelvik osteotomi"]
    ]},
  { id: "ort-fbke", tr: "Femur başı epifiz kayması (FBKE / SCFE)", en: "Slipped capital femoral epiphysis", cat: "ped", lvl: 3,
    src: {
      k: ["Lovell and Winter's Pediatric Orthopaedics, 8. baskı (2020)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Loder RT et al. Acute slipped capital femoral epiphysis: the importance of physeal stability. J Bone Joint Surg Am 1993", "https://pubmed.ncbi.nlm.nih.gov/8354671/"],
          ["Naseem H et al. Treatment of stable slipped capital femoral epiphysis: systematic review and exploratory patient level analysis. J Orthop Traumatol 2017", "https://doi.org/10.1007/s10195-017-0469-4"]]
    },
    c: [
      ["!Adölesan, obez erkek; fizisten epifizin arka-alta kayması", "adölesan|ergen|obez|kilolu|fizis|büyüme plağı|epifiz kay|epifizin kay|scfe|fbke"],
      ["Endokrin nedenler: hipotiroidi, büyüme hormonu; atipik yaşta düşün", "hipotiroid|endokrin|büyüme hormon|böbrek yetmez|atipik yaş"],
      ["Diz ağrısıyla gelebilir; topallama", "diz ağrı|dize yansı|uyluk ağrı|topall"],
      ["Drehmann bulgusu: fleksiyonda zorunlu dış rotasyon", "drehmann|zorunlu dış rotasyon|fleksiyonda dış rotasyon"],
      ["Grafi: AP ve kurbağa bacağı yan; Klein çizgisi", "kurbağa|frog|klein|ön arka grafi|lateral grafi"],
      ["!Loder: stabil (yük verebilir) – unstabil (yük veremez); unstabilde AVN riski yüksek", "loder|stabil|unstabil|instabil|yük verebil|yük verem|avasküler|avn|nekroz"],
      ["!Tedavi: yerinde (in situ) tek vida ile tespit; zorlu redüksiyon yapılmaz", "in situ|yerinde tespit|yerinde sabit|tek vida|kanüllü vida|vida ile tespit|pinning"],
      ["Karşı kalça riski; kondroliz, femoroasetabular sıkışma", "karşı kalça|karşı taraf|kontralateral|bilateral|profilaktik|kondroliz|sıkışma|impingement"]
    ]},
  { id: "ort-pes-ekinovarus-ponseti", tr: "Doğuştan pes ekinovarus ve Ponseti yöntemi", en: "Clubfoot and the Ponseti method", cat: "ped", lvl: 3,
    src: {
      k: ["Lovell and Winter's Pediatric Orthopaedics, 8. baskı (2020)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Radler C. The Ponseti method for the treatment of congenital club foot: review of the current literature and treatment recommendations. Int Orthop 2013", "https://pmc.ncbi.nlm.nih.gov/articles/PMC3764299/"],
          ["Gray K et al. Interventions for congenital talipes equinovarus (clubfoot). Cochrane Database Syst Rev 2014", "https://doi.org/10.1002/14651858.CD008602.pub3"]]
    },
    c: [
      ["!Deformite bileşenleri: kavus, addüktus, varus, ekin (CAVE)", "cave|kavus|addüktus|addukt|varus|ekin|equinus"],
      ["Erkekte daha sık, sıklıkla iki taraflı; sendromik nedenleri dışla", "erkek|iki taraf|bilateral|sendrom|artrogripozis|spina bifida|nöromüsküler"],
      ["!Ponseti: haftalık manipülasyon ve uzun bacak alçı", "ponseti|seri alçı|haftalık alçı|her hafta|manipülasyon|uzun bacak alçı"],
      ["Önce kavus düzeltilir; talus başına karşı basınçla abdüksiyon", "önce kavus|kavus önce|birinci metatars|talus baş|abdüksiyon"],
      ["!Kalan ekin için perkütan Aşil tenotomisi", "aşil|achilles|tenotomi"],
      ["!Ayak abdüksiyon ortezi: 3 ay tam gün, sonra gece 4–5 yaşına kadar", "abdüksiyon ortez|ayak abdüksiyon|bot ve bar|denis browne|ortez|gece ve öğle|uyku saat|4 5 yaş|dört beş yaş"],
      ["Nüksün başlıca nedeni ortez uyumsuzluğu; nükste tibialis anterior transferi", "uyumsuzluk|ortezi bırak|ortez takma|uyum|nüks|relaps|tibialis anterior"]
    ]},
  { id: "ort-kemik-tumorleri", tr: "Primer kemik tümörleri: osteosarkom, Ewing, dev hücreli tümör", en: "Primary bone tumors", cat: "tum", lvl: 3,
    src: {
      k: ["Campbell's Operative Orthopaedics, 15. baskı (2026)", "Robbins & Cotran Pathologic Basis of Disease, 10. baskı (2020)"],
      m: [["Strauss SJ et al. Bone sarcomas: ESMO-EURACAN-GENTURIS-ERN PaedCan Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2021", "https://doi.org/10.1016/j.annonc.2021.08.1995"],
          ["Grünewald TGP et al. Ewing sarcoma. Nat Rev Dis Primers 2018", "https://doi.org/10.1038/s41572-018-0003-x"]]
    },
    c: [
      ["!Osteosarkom: adölesan, diz çevresi metafiz (distal femur, proksimal tibia)", "osteosarkom|osteojenik sarkom|distal femur|proksimal tibia|diz çevres|metafiz"],
      ["Osteosarkom grafisi: Codman üçgeni, güneş ışını periost reaksiyonu; akciğer metastazı", "codman|güneş ışın|sunburst|periost reaksiyon|akciğer metastaz|akciğere metastaz"],
      ["!Osteosarkom tedavisi: neoadjuvan kemoterapi + ekstremite koruyucu cerrahi", "neoadjuvan|preoperatif kemoterapi|ameliyat öncesi kemoterapi|map|ekstremite koruyucu|uzuv koruyucu|metotreksat|doksorubisin|sisplatin|geniş rezeksiyon"],
      ["!Ewing sarkomu: diafiz, soğan zarı periost reaksiyonu, ateş ile enfeksiyonu taklit", "ewing|diafiz|soğan zarı|soğan kabuğu|onion|osteomiyeliti taklit|enfeksiyonu taklit"],
      ["Ewing: t(11;22) EWSR1-FLI1, küçük yuvarlak mavi hücre, CD99; kemoterapi + cerrahi/radyoterapi", "11 22|on bir yirmi iki|ewsr1|fli1|translokasyon|yuvarlak mavi|cd99|radyoterapi"],
      ["Dev hücreli tümör: iskelet olgunluğu sonrası, epifizde eksantrik litik lezyon; RANKL, denosumab", "dev hücreli|epifiz|eksantrik|sabun köpüğü|rankl|denosumab|küretaj"],
      ["Biyopsi sarkom merkezinde, planlanan rezeksiyon hattından; evreleme toraks BT", "biyopsi|sarkom merkez|deneyimli merkez|referans merkez|toraks bt|toraks bete|göğüs tomografi|evreleme"]
    ]},
  { id: "ort-yag-embolisi", tr: "Yağ embolisi sendromu", en: "Fat embolism syndrome", cat: "trv", lvl: 3,
    src: {
      k: ["Rockwood and Green's Fractures in Adults, 10. baskı (2024)", "Campbell's Operative Orthopaedics, 15. baskı (2026)"],
      m: [["Gurd AR, Wilson RI. The fat embolism syndrome. J Bone Joint Surg Br 1974", "https://doi.org/10.1302/0301-620X.56B3.405"],
          ["Rothberg DL, Makarewich CA. Fat Embolism and Fat Embolism Syndrome. StatPearls (NCBI Bookshelf)", "https://www.ncbi.nlm.nih.gov/books/NBK499885/"]]
    },
    c: [
      ["!Uzun kemik (özellikle femur) ve pelvis kırığı sonrası, genç travma hastası", "uzun kemik|femur kırı|femur cisim|femur şaft|tibia kırı|pelvis kırı|intramedüller"],
      ["Travmadan sonra saatler-günler süren latent dönem", "latent|sessiz dönem|birkaç saat|birkaç gün|bir iki gün|günler sonra|saatler sonra"],
      ["!Klasik triad: hipoksemi, nörolojik bozulma, peteşi", "triad|üçlü|hipoksem|hipoksi|bilinç bulanık|konfüzyon|nörolojik bozul|peteşi"],
      ["Peteşiler aksilla, konjonktiva, gövde üst kısmında", "aksilla|koltuk alt|konjonktiva|göz kapağı"],
      ["!Gurd kriterleri: majör ve minör bulgular; tanı kliniktir", "gurd|majör|minör|schonfeld|klinik tanı|tanı klinik"],
      ["Mekanik (yağ damlacıkları) ve biyokimyasal (serbest yağ asitleri) kuram; ARDS", "yağ damlac|yağ globül|serbest yağ asit|mekanik teori|biyokimyasal|ards|pulmoner ödem"],
      ["!Tedavi destekleyici: oksijen, gerekirse mekanik ventilasyon; korunma için erken kırık tespiti", "destekleyici|destek tedavi|oksijen|mekanik ventilasyon|entübasyon|erken tespit|erken stabiliz|erken fiksasyon"]
    ]}
]
});
