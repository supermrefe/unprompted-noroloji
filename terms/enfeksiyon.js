/* Enfeksiyon hastalıkları — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta sık sorulan ve Türkiye'de klinik önemi yüksek enfeksiyonlar — sepsis (SSC 2021, Sepsis-3), zoonozlar
   (bruselloz, KKKA, kuduz, tularemi, kist hidatik), sık hastane/toplum enfeksiyonları (İYE, C. difficile, HAP/VAP, selülit-NYDE),
   HIV ve antimikrobiyal direnç. Menenjit (nöroloji), endokardit (kardiyoloji), hepatitler (gastroenteroloji), TB ve TKP (göğüs)
   bilerek alınmadı. Kılavuz farkları ve doğrulanamayan ayrıntılar docs/klinik/enfeksiyon.md'de. */
UP.add({ id: "enfeksiyon", subs: {
    sep: "Sepsis ve hastane enfeksiyonları",
    zoo: "Zoonozlar ve paraziter hastalıklar",
    top: "Toplum kaynaklı enfeksiyonlar",
    dir: "Antimikrobiyal direnç ve özel durumlar"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "enf-sepsis", tr: "Sepsis ve septik şok", en: "Sepsis and septic shock", cat: "sep", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med 2021", "https://doi.org/10.1097/CCM.0000000000005337"],
          ["The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA 2016", "https://pubmed.ncbi.nlm.nih.gov/26903338/"]]
    },
    c: [
      ["!Sepsis-3: enfeksiyona düzensiz konak yanıtının yol açtığı yaşamı tehdit eden organ disfonksiyonu", "organ disfonksiyon|organ yetmezli|organ hasar|düzensiz konak|disregüle|konak yanıt|sofa"],
      ["Organ disfonksiyonu SOFA skorunda 2 puan ve üzeri artış; qSOFA tek başına tarama aracı olarak önerilmez", "sofa skor|sofa puan|iki puan|2 puan|qsofa tek başına|qsofa önerilm"],
      ["!Septik şok: sıvıya karşın OAB ≥65 için vazopressör gereksinimi ve laktat >2 mmol/L", "septik şok|vazopressör|vazopresör|laktat|65 mm|ortalama arter|oab"],
      ["!Antibiyotik: septik şokta ya da sepsis olasılığı yüksekse ilk 1 saat içinde; şoksuz olası sepsiste hızlı değerlendirme, kuşku sürerse 3 saat içinde; öncesinde kan kültürü", "ilk saat|bir saat içinde|1 saat içinde|ilk bir saat|hemen antibiyot|kan kültür|geniş spektrum|ampirik antibiyot"],
      ["Hipoperfüzyonda ilk 3 saatte 30 mL/kg kristaloid (zayıf öneri); dengeli kristaloid tercih", "30 ml|otuz mililitre|30 mililitre|kristaloid|dengeli sıvı|ringer laktat|sıvı resüsitasyon"],
      ["Birinci seçenek vazopressör norepinefrin; yetersizse vazopressin eklenir", "norepinefrin|noradrenalin|norepinefrine|vazopressin"],
      ["Kaynak kontrolü: apse drenajı, enfekte kateterin çıkarılması", "kaynak kontrol|drenaj|apse boşalt|kateteri çıkar|kateterin çıkarıl|debridman"],
      ["Refrakter şokta IV hidrokortizon", "hidrokortizon|kortikosteroid|steroid"]
    ]},
  { id: "enf-bruselloz", tr: "Bruselloz", en: "Brucellosis", cat: "zoo", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Pappas G et al. Brucellosis. N Engl J Med 2005", "https://doi.org/10.1056/NEJMra050570"],
          ["Bosilkovski M, Keramat F, Arapović J. The current therapeutical strategies in human brucellosis. Infection 2021", "https://doi.org/10.1007/s15010-021-01586-w"]]
    },
    c: [
      ["!Etken Brucella (gram negatif hücre içi kokobasil); çiğ süt, taze peynir ve hayvan teması ile bulaşır", "brucella|bruçella|bruselloz|malta humma|çiğ süt|pastörize edilmemiş|taze peynir|köy peynir|hayvancılık|koyun|keçi|sığır"],
      ["Dalgalı ateş, gece terlemesi, eklem ağrısı, hepatosplenomegali", "dalgalı ateş|undulan|gece terle|terleme|eklem ağrı|artralji|hepatosplenomegali|splenomegali|halsizlik"],
      ["En sık komplikasyon osteoartiküler: sakroileit ve spondilit", "sakroileit|spondilit|spondilodiskit|osteoartiküler|omurga tutul|bel ağrı"],
      ["!Tanı: Rose Bengal tarama, standart tüp aglütinasyonu (Wright), Coombs'lu aglütinasyon; kan kültürü", "rose bengal|roz bengal|wright|tüp aglütinasyon|aglütinasyon|coombs|kumbs|seroloji|kan kültür"],
      ["Kan kültürü uzun inkübasyon ister; laboratuvar personeli için bulaş riski", "uzun inkübasyon|inkübasyon süre|laboratuvar bulaş|laboratuvar personel|laboratuvar çalışan|laboratuvara haber|yavaş üre|otomatize kültür|bactec"],
      ["!Tedavi kombine ve uzun: doksisiklin 6 hafta + rifampisin 6 hafta ya da doksisiklin 6 hafta + streptomisin 2-3 hafta veya gentamisin 7-14 gün", "doksisiklin|rifampisin|rifampin|streptomisin|gentamisin|aminoglikozit|altı hafta|6 hafta|kombine"],
      ["Nüks sık; önlem: pastörizasyon ve hayvan aşılaması", "nüks|relaps|pastörizasyon|pastörize|kaynat|hayvan aşı"]
    ]},
  { id: "enf-kkka", tr: "Kırım-Kongo kanamalı ateşi", en: "Crimean-Congo hemorrhagic fever", cat: "zoo", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Ergönül Ö. Crimean-Congo haemorrhagic fever. Lancet Infect Dis 2006", "https://doi.org/10.1016/S1473-3099(06)70435-2"],
          ["T.C. Sağlık Bakanlığı HSGM. Kırım Kongo Kanamalı Ateşi hastalık bilgisi ve vaka yönetimi", null]]
    },
    c: [
      ["!Etken Nairovirüs grubundan KKKA virüsü; Hyalomma kenesi ile bulaşır", "nairovir|orthonairo|ortonairo|hyalomma|hiyalomma|kene ısır|kene tutun|keneyle"],
      ["Bulaş: kene, hayvan kanı ve dokusu, hasta kanı-vücut sıvısı (sağlık çalışanı riski)", "kesim|hayvan kan|kurban|vücut sıvı|sağlık çalışan|iğne batma|nozokomiyal"],
      ["Türkiye'de ilkbahar-yaz, İç ve Kuzey Anadolu'da endemik", "ilkbahar|yaz ayları|tokat|sivas|çorum|yozgat|endemik|kelkit"],
      ["!Ani ateş, miyalji; kanama bulguları (peteşi, ekimoz, mukozal kanama)", "kanama|peteşi|ekimoz|hemoraj|burun kanama|epistaksis|dişeti kanama|melena|hematemez"],
      ["!Laboratuvar: trombositopeni, lökopeni, AST/ALT, CK ve LDH yüksekliği", "trombositopeni|trombosit düş|lökopeni|lökosit düş|transaminaz|ast alt|kreatin kinaz|ldh|laktat dehidrogenaz"],
      ["Tanı: kanda RT-PCR ve IgM", "pcr|pi si ar|rt pcr|igm|polimeraz zincir|referans laboratuvar"],
      ["Tedavi destekleyici (kan ürünü, sıvı); ribavirinin yararı tartışmalı", "destek tedavi|destekleyici|trombosit süspansiyon|taze donmuş plazma|kan ürün|ribavirin tartışmalı|ribavirinin yararı tartışmalı|ribavirinin yararı kanıtlanmamış"],
      ["Kene, ezilmeden uygun şekilde çıkarılmalı; temas ve kan-vücut sıvısı önlemleri", "ezmeden|ezilmeden|kene çıkar|keneyi çıkar|pens|temas izolasyon|temas önlem|eldiven|izolasyon"]
    ]},
  { id: "enf-kuduz-profilaksi", tr: "Kuduz riskli temas ve profilaksi", en: "Rabies post-exposure prophylaxis", cat: "zoo", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["T.C. Sağlık Bakanlığı HSGM. Kuduz Profilaksi Rehberi. Ankara 2019", "https://hsgm.saglik.gov.tr/depo/Yayinlarimiz/Rehberler/Kuduz_Profilaksi_Rehberi.pdf"],
          ["Rabies vaccines: WHO position paper – April 2018. Wkly Epidemiol Rec 2018", "https://www.who.int/publications/i/item/WHO-WER9316"]]
    },
    c: [
      ["!Kuduz (Lyssavirus) belirti başlayınca neredeyse her zaman ölümcül; temas sonrası profilaksi hayat kurtarır", "lyssa|lisavir|ölümcül|ölüm oranı|mortal|yüzde yüz|ensefalit|hidrofobi"],
      ["!İlk adım yara bakımı: yarayı bol sabunlu suyla uzun süre yıkamak", "sabunlu su|sabun ve su|su ve sabun|yarayı yıka|yaranın yıkan|yara bakım|yara temizl"],
      ["Temas kategorisi: sıyrıksız yalama kategori 1, çıplak deride hafif sıyrık kategori 2, derin ısırık-mukoza teması kategori 3", "kategori|derin ısırık|transdermal|mukoza|sıyrık|yalama|tırmal"],
      ["!Kategori 2'de aşı, kategori 3'te aşı + kuduz immünglobulini", "immünglobulin|immunglobulin|immün globulin|aşı ile birlikte|aşıya ek"],
      ["Aşı şeması (Sağlık Bakanlığı): Essen 0-3-7-14-28 (5 doz) ya da 2-1-1 (0, 7, 21. gün); WHO/ACIP immünkompetanlarda 0-3-7-14 (4 doz) kabul eder", "28. gün|yirmi sekizinci gün|5 doz|beş doz|essen|2 1 1|iki bir bir|zagreb|4 doz|dört doz"],
      ["İmmünglobulin olabildiğince yara içine ve çevresine infiltre edilir (insan kaynaklı 20 IU/kg)", "yara içine|yara çevresine|yaraya infiltr|infiltr|20 iu|yirmi ünite|kilo başına 20"],
      ["Sağlıklı, aşılı kedi-köpek 10 gün gözlem; yabani hayvan (tilki, kurt, yarasa) yüksek risk", "10 gün|on gün|gözlem|tilki|kurt|yarasa|yabani|sahipsiz"],
      ["Isırıkta tetanoz profilaksisi de değerlendirilir", "tetanoz"]
    ]},
  { id: "enf-idrar-yolu-enfeksiyonu", tr: "İdrar yolu enfeksiyonu (sistit ve piyelonefrit)", en: "Urinary tract infection", cat: "top", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Gupta K et al. International clinical practice guidelines for the treatment of acute uncomplicated cystitis and pyelonephritis in women: 2010 update by IDSA and ESCMID. Clin Infect Dis 2011", "https://doi.org/10.1093/cid/ciq257"],
          ["Trautner BW et al. 2025 Clinical Practice Guideline by IDSA: Management and Treatment of Complicated Urinary Tract Infections. Clin Infect Dis 2025", null]]
    },
    c: [
      ["!En sık etken Escherichia coli (üropatojenik)", "coli|e koli|eşerişya|escherichia|üropatojen"],
      ["Sistit: dizüri, sık idrara çıkma, sıkışma hissi, suprapubik ağrı", "dizüri|yanma|sık idrar|pollaküri|sıkışma|urgency|suprapubik|kasık ağrı"],
      ["!Piyelonefrit: ateş, yan ağrısı, kostovertebral açı hassasiyeti; idrar kültürü alınır", "piyelonefrit|pyelonefrit|yan ağrı|böğür ağrı|kostovertebral|kva|idrar kültür"],
      ["Tanı: idrar tetkikinde piyüri, nitrit, lökosit esteraz", "piyüri|nitrit|lökosit esteraz|tam idrar|idrar tahlil|stix|idrar strip"],
      ["!Komplikasyonsuz sistitte nitrofurantoin, fosfomisin tek doz ya da TMP-SMX (direnç düşükse)", "nitrofurantoin|fosfomisin|fosfomycin|trimetoprim|tmp smx|kotrimoksazol|sulfametoksazol"],
      ["Asemptomatik bakteriüri tedavi edilmez; gebelik (ve mukozal kanamalı ürolojik girişim) istisna", "asemptomatik bakteriüri|belirtisiz bakteriüri|gebelerde tara|gebelikte tara|gebelikte tedavi|gebede tedavi"],
      ["Mesane dışına taşan (ateş, sepsis, kateter) enfeksiyon komplike İYE'dir (IDSA 2025)", "komplike idrar yolu|komplike iye|mesanenin ötesi|mesane dışına taşan|ürosepsis|kalıcı sonda|kalıcı kateter"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "enf-tetanoz-profilaksi", tr: "Tetanoz ve yara sonrası tetanoz profilaksisi", en: "Tetanus and wound prophylaxis", cat: "top", lvl: 2,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Havers FP et al. Use of Tetanus Toxoid, Reduced Diphtheria Toxoid, and Acellular Pertussis Vaccines: Updated Recommendations of ACIP — United States, 2019. MMWR 2020", "https://doi.org/10.15585/mmwr.mm6903a5"],
          ["Yen LM, Thwaites CL. Tetanus. Lancet 2019;393:1657-68", "https://doi.org/10.1016/S0140-6736(18)33131-3"]]
    },
    c: [
      ["!Clostridium tetani sporları yaraya girer; tetanospazmin inhibitör (GABA, glisin) salınımını engeller", "clostridium tetani|klostridyum|tetani|tetanospazmin|tetanospasmin|gaba|glisin|inhibitör nöron|spor"],
      ["Bulgular: trizmus, risus sardonikus, opistotonus, ağrılı spazmlar; bilinç açık", "trizmus|çene kilit|ağız açama|risus|sardonik|opistotonus|spazm|kasılma"],
      ["!Tetanoza yatkın yara: kirli, toprakla bulaşık, delici, ezilmiş, yanık, nekrotik doku", "kirli yara|toprak|delici|ezilme|ezik|yanık|nekrotik|paslı|batma|tetanoza yatkın|riskli yara"],
      ["!Aşı öyküsü bilinmiyor ya da 3 dozdan az ise: tetanoz aşısı (Td/Tdap); kirli yarada ek olarak TIG", "üç dozdan az|3 dozdan az|bilinmiyor|aşı öykü|aşı geçmiş|tetanoz immünglobulin|tetanoz immunglobulin|tig|hiperimmün"],
      ["Tam aşılıda: temiz küçük yarada son doz 10 yıldan, kirli yarada 5 yıldan eskiyse rapel", "10 yıl|on yıl|5 yıl|beş yıl|rapel|hatırlatma doz|booster|pekiştir"],
      ["Tedavi: yara debridmanı, TIG, metronidazol, spazm için benzodiazepin/magnezyum, yoğun bakım", "debridman|metronidazol|diazepam|benzodiazepin|magnezyum|yoğun bakım|sessiz oda|otonom"],
      ["Geçirilmiş tetanoz bağışıklık bırakmaz; iyileşen hastaya da aşı tamamlanır", "bağışıklık bırakmaz|bağışıklık kazandırmaz|kalıcı bağışıklık bırakmaz|aşılama tamamla|aşı serisi"]
    ]},
  { id: "enf-c-difficile", tr: "Clostridioides difficile enfeksiyonu", en: "Clostridioides difficile infection", cat: "sep", lvl: 2,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Johnson S et al. Clinical Practice Guideline by IDSA and SHEA: 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis 2021", "https://doi.org/10.1093/cid/ciab549"],
          ["McDonald LC et al. Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update by IDSA and SHEA. Clin Infect Dis 2018", "https://pubmed.ncbi.nlm.nih.gov/29562266/"]]
    },
    c: [
      ["!Antibiyotik kullanımı (klindamisin, sefalosporin, kinolon) sonrası, hastanede spor ile bulaşan toksin aracılı ishal", "antibiyotik ilişkili|antibiyotik sonrası|antibiyotik kullanımından sonra|klindamisin|toksin a|toksin b|sporlarla|spor ile|spor oluştur"],
      ["Tanı: 24 saatte 3 ve üzeri şekilsiz dışkıda çok basamaklı test (GDH/NAAT + toksin)", "24 saatte|üç ve üzeri|3 ve üzeri|gdh|glutamat dehidrogenaz|naat|pcr|toksin test|toksin bak|toksin pozitif"],
      ["Psödomembranöz kolit; ağır olguda lökositoz ve kreatinin yüksekliği, fulminan olguda ileus-toksik megakolon", "psödomembran|pseudomembran|toksik megakolon|megakolon|ileus|lökositoz"],
      ["!İlk atakta fidaksomisin tercih; alternatif oral vankomisin", "fidaksomisin|fidaxomicin|oral vankomisin|ağızdan vankomisin"],
      ["Metronidazol artık ilk seçenek değil; fulminan olguda oral vankomisin + IV metronidazol", "metronidazol artık|metronidazol ilk seçenek değil|metronidazol önerilmiyor|metronidazol önerilmez|vankomisine intravenöz metronidazol|vankomisin ile intravenöz metronidazol|vankomisine iv metronidazol|vankomisin artı iv metronidazol|vankomisine damardan metronidazol"],
      ["Tekrarlayan olguda fidaksomisin (uzatılmış/pulse) ya da vankomisin azaltarak-pulse; çoklu nüksten sonra fekal mikrobiyota nakli ya da mikrobiyom bazlı ürünler (bezlotoksumab 2025'te piyasadan çekildi)", "pulse|azaltarak|tapering|mikrobiyom bazlı|fekal mikrobiyota|fekal transplant|dışkı nakli|fmt|mikrobiyota nakli"],
      ["!Korunma: temas izolasyonu, sabun-su ile el yıkama (alkol sporu öldürmez), gereksiz antibiyotikten kaçınma", "sabun|alkol sporu öldürmez|sporları öldürmez|sporları öldürmediği|alkol etkisiz|el yıkama|sporosidal|çamaşır suyu|hipoklorit"]
    ]},
  { id: "enf-hiv-tani-art", tr: "HIV enfeksiyonu: tanı ve antiretroviral tedavinin temelleri", en: "HIV infection: diagnosis and antiretroviral therapy basics", cat: "dir", lvl: 2,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Gandhi RT et al. Antiretroviral Drugs for Treatment and Prevention of HIV in Adults: 2024 Recommendations of the International Antiviral Society–USA Panel. JAMA 2025", "https://doi.org/10.1001/jama.2024.24543"],
          ["T.C. Sağlık Bakanlığı HSGM. HIV/AIDS Tanı Tedavi Rehberi 2019", null]]
    },
    c: [
      ["!Tarama: 4. kuşak antijen/antikor (p24 + anti-HIV) testi; reaktifse doğrulama ve HIV RNA", "dördüncü kuşak|4. kuşak|4 kuşak|kombine test|p24|antijen antikor|doğrulama|ayırt edici|hiv 1/2 ayırt|diferansiyel|hiv rna|viral yük|nükleik asit"],
      ["Akut retroviral sendrom: mononükleoz benzeri ateş, döküntü, lenfadenopati; pencere dönemi", "akut retroviral|akut hiv|mononükleoz benzer|pencere dönem|serokonversiyon"],
      ["!CD4 sayısından bağımsız olarak tüm HIV pozitiflere ART, mümkünse hızlı başlangıç", "cd4 sayısından bağımsız|cd4 ne olursa|herkese|tüm hastalara|hızlı başla|aynı gün|bütün hivli"],
      ["!Başlangıç rejimi: integraz inhibitörü (biktegravir, dolutegravir) + NRTI omurgası", "integraz|biktegravir|bictegravir|dolutegravir|nrti|nükleozid|tenofovir|emtrisitabin|lamivudin"],
      ["Hedef baskılanmış viral yük: saptanamayan = bulaştırmayan (U=U)", "saptanamayan|baskılan|bulaştırmaz|bulaştırmayan|u eşittir u"],
      ["CD4 <200'de Pneumocystis profilaksisi (TMP-SMX); fırsatçı enfeksiyonlar", "pneumocystis profilaksi|pnömosistis profilaksi|pcp profilaksi|cd4 200|200 altı|200'ün altı|kotrimoksazol|tmp smx"],
      ["Abakavir öncesi HLA-B*5701; ilaç etkileşimleri (rifampisin, ritonavir/kobisistat)", "hla b|abakavir|abacavir|ilaç etkileş|kobisistat|ritonavir"],
      ["Korunma: PrEP ve maruziyet sonrası profilaksi (PEP)", "prep|pre ekspozisyon|temas öncesi|pep|temas sonrası profilaksi|maruziyet sonrası"]
    ]},
  { id: "enf-selulit-nyde", tr: "Selülit ve nekrotizan yumuşak doku enfeksiyonu", en: "Cellulitis and necrotizing soft tissue infection", cat: "top", lvl: 2,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Stevens DL et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by IDSA. Clin Infect Dis 2014", "https://doi.org/10.1093/cid/ciu296"],
          ["Stevens DL, Bryant AE. Necrotizing Soft-Tissue Infections. N Engl J Med 2017", "https://doi.org/10.1056/NEJMra1600673"]]
    },
    c: [
      ["!Pürülan olmayan selülit: çoğunlukla beta-hemolitik streptokok; beta-laktam (sefazolin, sefaleksin)", "pürülan olmayan|nonpürülan|beta hemolitik|sefaleksin|penisilin|beta laktam"],
      ["Pürülan enfeksiyon/apse: S. aureus; insizyon-drenaj, gerekirse MRSA'ya etkili ajan", "pürülan enfeksiyon|pürülan selülit|insizyon|apse drenaj"],
      ["Erizipel: keskin sınırlı, kabarık, parlak kırmızı yüzeyel selülit", "erizipel|keskin sınır|net sınır|kabarık"],
      ["!NYDE ipuçları: bulguyla orantısız şiddetli ağrı, hızlı yayılma, bül, krepitasyon, sistemik toksisite", "orantısız|şiddetli ağrı|hızlı yayıl|bül|krepitasyon|cilt altı gaz|nekroz|deri rengi|morarma|toksik görün"],
      ["Tip 1 polimikrobiyal (diyabet, Fournier), tip 2 A grubu streptokok; gazlı gangren klostridyal", "tip 1|tip 2|a grubu streptokok|grup a|gazlı gangren|klostrid|vibrio"],
      ["!Acil cerrahi eksplorasyon ve geniş debridman; görüntüleme cerrahiyi geciktirmemeli", "cerrahi eksplorasyon|debridman|eksplorasyon|fasyotomi|amputasyon"],
      ["Ampirik tedavi: vankomisin + piperasilin-tazobaktam; streptokokal NYDE'de toksin baskısı için klindamisin", "vankomisin ile piperasilin|vankomisin piperasilin|vankomisin artı piperasilin|toksin baskı|toksin üretim"]
    ]},
  { id: "enf-sitma", tr: "Sıtma", en: "Malaria", cat: "zoo", lvl: 2,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["WHO guidelines for malaria. World Health Organization 2025", null],
          ["Ashley EA, Phyo AP, Woodrow CJ. Malaria. Lancet 2018", "https://doi.org/10.1016/S0140-6736(18)30324-6"]]
    },
    c: [
      ["!Plasmodium türleri dişi Anopheles sivrisineği ile bulaşır; en ağır P. falciparum", "plasmodium|plazmodyum|falciparum|falsiparum|vivax|vivaks|ovale|malariae|knowlesi|anofel|anopheles|sivrisinek"],
      ["Endemik bölge seyahat öyküsü olan her ateşli hastada sıtma düşünülür (Türkiye'de olgular çoğunlukla yurt dışı kaynaklı)", "seyahat|yurt dışı|afrika|endemik bölge|import|dönüş|gezi"],
      ["Periyodik ateş, titreme; anemi, trombositopeni, splenomegali", "titreme|nöbet|paroksism|periyodik ateş|üçüncü gün|anemi|trombositopeni|splenomegali"],
      ["!Tanı: kalın ve ince yayma (Giemsa), hızlı antijen testi", "kalın yayma|ince yayma|kalın damla|periferik yayma|giemsa|hızlı tanı test|hızlı antijen|rdt"],
      ["Ağır sıtma: serebral sıtma, ağır anemi, böbrek yetmezliği, asidoz, hipoglisemi, yüksek parazitemi", "serebral sıtma|ağır sıtma|komplike sıtma|hipoglisemi|parazitemi|asidoz|koma"],
      ["!Komplike olmayan falciparumda artemisinin bazlı kombinasyon (ACT); ağır sıtmada IV artesunat", "artemisinin|artesunat|artesunate|arteméter|artemeter|lumefantrin|act"],
      ["P. vivax/ovale hipnozoitleri için primakin (önce G6PD düzeyi)", "hipnozoit|primakin|primaquine|tafenokin|g6pd|nüks"],
      ["Seyahat öncesi kemoprofilaksi ve sivrisinek koruması", "kemoprofilaksi|profilaksi|atovakuon|meflokin|doksisiklin|cibinlik|sinek kovucu|repellan"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "enf-antimikrobiyal-direnc", tr: "Antimikrobiyal direnç: ESBL, karbapenemaz, MRSA, VRE", en: "Antimicrobial resistance: ESBL, carbapenemases, MRSA, VRE", cat: "dir", lvl: 3,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Tamma PD et al. Infectious Diseases Society of America 2024 Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections. Clin Infect Dis 2024", "https://doi.org/10.1093/cid/ciae403"],
          ["Liu C et al. Clinical practice guidelines by IDSA for the treatment of methicillin-resistant Staphylococcus aureus infections in adults and children. Clin Infect Dis 2011", "https://doi.org/10.1093/cid/ciq146"]]
    },
    c: [
      ["!ESBL: E. coli ve Klebsiella'da 3. kuşak sefalosporin direnci; ciddi enfeksiyonda karbapenem (meropenem)", "esbl|genişlemiş spektrumlu|geniş spektrumlu beta|üçüncü kuşak sefalosporin|3. kuşak|meropenem|karbapenem|ertapenem"],
      ["ESBL'li sistitte nitrofurantoin/fosfomisin gibi oral seçenekler kullanılabilir", "nitrofurantoin|fosfomisin|sistitte"],
      ["!Karbapenemazlar: KPC, OXA-48 (Türkiye'de sık), metallo-beta-laktamaz (NDM)", "karbapenemaz|kpc|oxa 48|oksa 48|oxa48|ndm|metallo|mbl|cre|karbapeneme dirençli"],
      ["KPC ve OXA-48'de seftazidim-avibaktam; MBL'de seftazidim-avibaktam + aztreonam ya da sefiderokol", "seftazidim avibaktam|avibaktam ile aztreonam|avibaktam aztreonam|avibaktam artı aztreonam|sefiderokol|cefiderocol"],
      ["!MRSA: mecA geni ve PBP2a; tedavide vankomisin, linezolid, daptomisin (pnömonide daptomisin kullanılmaz)", "meca|meka|pbp2a|pbp 2a|penisilin bağlayan|vankomisin|linezolid|daptomisin"],
      ["VRE (çoğunlukla E. faecium, vanA): linezolid ya da daptomisin", "vre|vankomisine dirençli enterokok|enterokok|faecium|fesyum|vana|van a"],
      ["Kontrol: temas izolasyonu, el hijyeni, aktif sürveyans ve antimikrobiyal yönetim programı", "temas izolasyon|el hijyen|sürveyans|rektal sürüntü|antimikrobiyal yönetim|stewardship|akılcı antibiyotik|akılcı ilaç"]
    ]},
  { id: "enf-nedeni-bilinmeyen-ates", tr: "Nedeni bilinmeyen ateş", en: "Fever of unknown origin", cat: "dir", lvl: 3,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Haidar G, Singh N. Fever of Unknown Origin. N Engl J Med 2022", "https://doi.org/10.1056/NEJMra2111003"],
          ["Petersdorf RG, Beeson PB. Fever of unexplained origin: report on 100 cases. Medicine (Baltimore) 1961", null]]
    },
    c: [
      ["!Tanım: birkaç kez 38,3 °C üzeri ateş, 3 haftadan uzun; Petersdorf (1961): 1 haftalık hastane incelemesine karşın tanı yok; güncel değiştirilmiş tanım: uygun ilk incelemelere (ayaktan 3 vizit ya da 3 gün yatış) karşın tanı yok", "38,3|38 3|otuz sekiz virgül üç|üç hafta|3 hafta|üç haftadan|3 haftadan|petersdorf"],
      ["Gruplar: klasik, nozokomiyal, nötropenik, HIV ilişkili", "klasik nba|klasik tip|nozokomiyal|nötropenik|hiv ilişkili|immünsüpres"],
      ["!Nedenler: enfeksiyon (TB, apse, endokardit, bruselloz), malignite (lenfoma), enfeksiyon dışı inflamatuvar hastalık", "tüberküloz|apse|endokardit|bruselloz|lenfoma|malignite|enfeksiyon dışı inflamatuvar|vaskülit|erişkin still|dev hücreli arterit|temporal arterit"],
      ["İlaç ateşi ve yapay (factitious) ateş unutulmamalı", "ilaç ateş|ilaca bağlı ateş|ilaç kaynaklı ateş|yapay ateş|factitious|munchausen|sahte ateş"],
      ["Ayrıntılı öykü: seyahat, hayvan teması, ilaçlar; olası tanı ipuçlarına (PDC) yönelik inceleme", "tanı ipucu|tanı ipuç|ipuçlarına yönelik|olası tanı ipuc|pdc"],
      ["!Görüntüleme: FDG-PET/BT tanısal verimi yüksek; gerekirse doku biyopsisi (temporal arter, lenf nodu, kemik iliği)", "pet|fdg|pozitron|biyopsi|kemik iliği|lenf nodu biyopsi|temporal arter biyopsi"],
      ["Stabil hastada ampirik antibiyotik ve steroidden kaçınılır (tanıyı maskeler)", "ampirik antibiyotik vermey|ampirik tedaviden kaçın|körlemesine|maskele|steroid vermey"]
    ]},
  { id: "enf-hastane-kaynakli-pnomoni", tr: "Hastane kaynaklı ve ventilatör ilişkili pnömoni", en: "Hospital-acquired and ventilator-associated pneumonia", cat: "sep", lvl: 3,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Kalil AC et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by IDSA and ATS. Clin Infect Dis 2016", "https://doi.org/10.1093/cid/ciw353"],
          ["Torres A et al. International ERS/ESICM/ESCMID/ALAT guidelines for the management of hospital-acquired pneumonia and ventilator-associated pneumonia. Eur Respir J 2017", "https://doi.org/10.1183/13993003.00582-2017"]]
    },
    c: [
      ["!HAP yatıştan ≥48 saat sonra, VAP entübasyondan ≥48 saat sonra gelişen pnömoni", "48 saat|kırk sekiz saat|yatıştan sonra|entübasyondan sonra|ventilatör ilişkili|ventilatörle ilişkili|vap|hap"],
      ["Etkenler: S. aureus (MRSA), Pseudomonas aeruginosa, Klebsiella, Acinetobacter", "pseudomonas|psödomonas|acinetobacter|asinetobakter|klebsiella|klebsiyella|aureus|mrsa"],
      ["Tanı: yeni infiltrat + ateş, pürülan sekresyon, oksijenasyon bozulması; IDSA/ATS VAP'ta noninvaziv semikantitatif endotrakeal aspirat önerir", "infiltrat|endotrakeal aspirat|trakeal aspirat|semikantitatif|bal|bronkoalveoler|pürülan sekresyon|balgam kültür"],
      ["!Ampirik tedavi yerel antibiyograma göre; Pseudomonas'a etkili beta-laktam, risk varsa MRSA kapsamı (vankomisin/linezolid)", "antibiyogram|yerel direnç|yerel veri|antipsödomonal|piperasilin|sefepim|seftazidim|meropenem|vankomisin|linezolid"],
      ["Çoklu ilaç direnci riski (VAP): son 90 günde IV antibiyotik, septik şok, ARDS, ≥5 gün yatış, VAP öncesi akut renal replasman tedavisi; HAP'ta son 90 günde IV antibiyotik", "90 gün|doksan gün|son üç ay|ilaç direnci risk|dirençli etken risk|ards|septik şok"],
      ["!Kültüre göre daraltma (de-eskalasyon) ve 7 günlük tedavi", "de eskalasyon|deeskalasyon|daralt|7 gün|yedi gün|bir hafta"],
      ["Prokalsitonin klinik ölçütlerle birlikte tedaviyi kesme kararına yardımcı; HCAP kavramı kaldırıldı", "prokalsitonin|hcap|sağlık bakımı ilişkili"]
    ]},
  { id: "enf-tularemi", tr: "Tularemi", en: "Tularemia", cat: "zoo", lvl: 3,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Maurin M, Gyuranecz M. Tularaemia: clinical aspects in Europe. Lancet Infect Dis 2016", "https://doi.org/10.1016/S1473-3099(15)00355-2"],
          ["WHO Guidelines on tularaemia. World Health Organization 2007", null]]
    },
    c: [
      ["!Etken Francisella tularensis (gram negatif kokobasil); Türkiye'de tip B (holarctica)", "francisella|fransisella|tularensis|holarctica|holarktika|tavşan ateş"],
      ["Bulaş: kemirgen ile kirlenmiş su ve yiyecek, kene-sinek, hayvan teması, aerosol", "kemirgen|fare|tavşan|kaynak suyu|pınar|çeşme|kuyu suyu|kirlenmiş su|kontamine su|kene|aerosol"],
      ["!Türkiye'de en sık klinik form orofaringeal: farenjit + boyunda süpüre olabilen lenfadenopati", "orofaringeal|farenjit|tonsillit|boyun lenf|servikal lenf|lenfadenopati|süpürasyon|süpüre|fistül"],
      ["Diğer formlar: ülseroglandüler, glandüler, okuloglandüler, pnömonik, tifoidal", "ülseroglandüler|glandüler|okuloglandüler|pnömonik|tifoidal"],
      ["Beta-laktam tedaviye yanıtsız tonsillofarenjit + lenfadenopatide düşünülmeli", "beta laktama yanıt|beta laktamlar etkisiz|beta laktam etkisiz|penisiline yanıt|antibiyotiğe yanıt|amoksisiline yanıt|yanıt vermeyen tonsil|yanıt vermeyen farenjit"],
      ["!Tanı: mikroaglütinasyon testi (seroloji), PCR; kültür biyogüvenlik riski taşır", "mikroaglütinasyon|aglütinasyon|seroloji|pcr|biyogüvenlik|laboratuvar enfeksiyon"],
      ["!Tedavi: aminoglikozit (streptomisin, gentamisin); alternatif siprofloksasin ya da doksisiklin", "streptomisin|gentamisin|aminoglikozit|siprofloksasin|kinolon|doksisiklin"],
      ["Korunma: içme suyunun klorlanması, kemirgen kontrolü", "klorla|klor|dezenfeksiyon|su kaynakları|kemirgen kontrol"]
    ]},
  { id: "enf-kist-hidatik", tr: "Kistik ekinokokkoz (kist hidatik)", en: "Cystic echinococcosis (hydatid disease)", cat: "zoo", lvl: 3,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Brunetti E, Kern P, Vuitton DA; WHO-IWGE. Expert consensus for the diagnosis and treatment of cystic and alveolar echinococcosis in humans. Acta Trop 2010", "https://doi.org/10.1016/j.actatropica.2009.11.001"],
          ["Wen H et al. Echinococcosis: Advances in the 21st Century. Clin Microbiol Rev 2019", "https://doi.org/10.1128/cmr.00075-18"]]
    },
    c: [
      ["!Etken Echinococcus granulosus; kesin konak köpek, ara konak koyun, insan rastlantısal ara konak", "granulosus|ekinokok|echinococcus|köpek|koyun|ara konak|kesin konak|rastlantısal"],
      ["Bulaş: köpek dışkısıyla kirlenmiş yumurta (fekal-oral); Türkiye'de endemik", "yumurta|fekal oral|köpek dışkı|yıkanmamış sebze|endemik"],
      ["En sık karaciğer, ikinci sıklıkta akciğer tutulur", "karaciğerde|karaciğer kist|akciğerde kist|akciğer kist|hepatik kist|pulmoner kist"],
      ["!Tanı: ultrasonografi ile WHO-IWGE evrelemesi (CE1–CE5), seroloji destekler", "ce1|ce5|ce 1|ce 5|evreleme|evrelen|iwge|gharbi|kist evre|kist sınıflama|who sınıflama|dsö sınıflama|ekinokok seroloji|hidatik seroloji"],
      ["Kist rüptüründe anafilaksi ve sekonder yayılım riski", "kist rüptür|rüptürü|kistin yırtıl|kist patla|anafilaksi|anafilaktik|sekonder yayılım"],
      ["!Evreye göre tedavi: albendazol, PAIR (perkütan), cerrahi ya da izle-bekle (inaktif CE4-CE5)", "albendazol|pair|perkütan|ponksiyon|aspirasyon|cerrahi|izle bekle|bekle gör|izleme|inaktif"],
      ["Girişim öncesi ve sonrası albendazol; skoleksidal ajan kullanımı", "skoleks|skolisidal|skoleksidal|hipertonik|girişim öncesi"],
      ["Alveoler ekinokokkoz (E. multilocularis) ayrı, tümör benzeri seyirli hastalıktır", "multilocularis|multilokularis|alveoler"]
    ]},
]
});
