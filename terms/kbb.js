/* Kulak burun boğaz — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta en sık sorulan KBB başlıkları (otitler, sinüzit, epistaksis, tonsil/peritonsiller apse)
   ile kaçırılırsa kalıcı hasar ya da ölüme yol açan durumlar (ani işitme kaybı, derin boyun enfeksiyonu, yabancı cisim,
   baş-boyun kanserleri). AAO-HNS, EPOS 2020, Bárány Derneği ve ASCO kılavuzları esas alındı.
   BPPV ve Bell paralizisi nörolojide olduğu için alınmadı. */
UP.add({ id: "kbb", subs: {
    kulak: "Otoloji ve nörotoloji",
    burun: "Rinoloji",
    bogaz: "Farinks, larinks ve baş-boyun"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "kbb-akut-otitis-media", tr: "Akut otitis media", en: "Acute otitis media", cat: "kulak", lvl: 1,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Lieberthal AS ve ark. The diagnosis and management of acute otitis media. Pediatrics 2013 (AAP kılavuzu)", "https://pubmed.ncbi.nlm.nih.gov/23439909/"],
          ["Schilder AGM ve ark. Otitis media. Nat Rev Dis Primers 2016", "https://pubmed.ncbi.nlm.nih.gov/27604644/"]]
    },
    c: [
      ["!Orta kulağın akut enfeksiyonu; sıklıkla üst solunum yolu enfeksiyonu sonrası, östaki disfonksiyonu", "orta kulak|östaki|ostaki|eustachian"],
      ["Etken: pnömokok, Haemophilus influenzae, Moraxella", "pnömokok|pneumoniae|haemophilus|hemofilus|moraxella|moraksella"],
      ["!Tanı: zar bombeliği (orta-ağır) ya da yeni başlayan otore", "bombe|bulging|kabarık|dışa doğru|otore|kulak akıntı|akıntı"],
      ["Bulgular: kulak ağrısı (otalji), ateş, huzursuzluk, kulak çekiştirme", "otalji|kulak ağrı|kulağını çek|kulak çek|huzursuz"],
      ["!Seçilmiş çocukta antibiyotiksiz izlem (bekle-gör) seçeneği", "bekle gör|bekle ve gör|watchful|antibiyotiksiz|antibiyotik vermeden|antibiyotik başlamadan|izle bekle|izle ve bekle"],
      ["!İlk seçenek yüksek doz amoksisilin; dirençte amoksisilin-klavulanat", "amoksisilin|amoxicillin|amoksiklav|klavulan"],
      ["Ağrı kontrolü: parasetamol/ibuprofen", "parasetamol|asetaminofen|ibuprofen|analjezi|ağrı kesici"],
      ["Komplikasyon: mastoidit, fasiyal paralizi, intrakraniyal yayılım", "mastoidit|fasiyal|yüz felci|kulak arkası|beyin apse"]
    ]},
  { id: "kbb-seroz-otitis-media", tr: "Efüzyonlu (seröz) otitis media", en: "Otitis media with effusion", cat: "kulak", lvl: 1,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Rosenfeld RM ve ark. Clinical Practice Guideline: Otitis Media with Effusion (Update). Otolaryngol Head Neck Surg 2016", "https://pubmed.ncbi.nlm.nih.gov/26832942/"],
          ["Schilder AGM ve ark. Otitis media. Nat Rev Dis Primers 2016", "https://pubmed.ncbi.nlm.nih.gov/27604644/"]]
    },
    c: [
      ["!Akut enfeksiyon bulgusu olmadan orta kulakta sıvı", "efüzyon|effusion|orta kulakta sıvı|seröz|sıvı birik|akut enfeksiyon bulgusu olmadan"],
      ["!Çocukta iletim tipi işitme kaybı, konuşma-dil gecikmesi, okul başarısı", "iletim tipi|iletimsel|konuşma gecik|dil gelişim|okul başarı|televizyonun sesini|duymuyor|az duy"],
      ["Tanı: pnömatik otoskopi ve timpanometri (tip B)", "pnömatik|timpanometri|timpanogram|tip b|düz eğri"],
      ["Risk: adenoid hipertrofisi, damak yarığı, Down sendromu, kreş", "adenoid|geniz eti|damak yarığı|yarık damak|down sendrom|kreş"],
      ["!Çoğu kendiliğinden düzelir: izlem (yaklaşık 3 ay)", "kendiliğinden düzel|kendiliğinden geç|spontan|üç ay|3 ay|izlem|bekle gör"],
      ["İlaç (steroid, antihistaminik, dekonjestan, antibiyotik) önerilmez", "steroid önerilmez|antihistaminik önerilmez|ilaç önerilmez|ilaç tedavisi önerilmez|ilaçların yararı yok|ilaç etkisiz|ilaçlar etkisiz|ilaç rutin önerilmez|ilaçlar rutin önerilmez|faydası gösterilmemiş|yararı gösterilmemiş"],
      ["!Kalıcı efüzyon (≥3 ay) + işitme kaybında ventilasyon tüpü; ≥4 yaşta adenoidektomi (tek başına ya da tüple) seçenek", "efüzyon kalıcıysa|kalıcı efüzyon|üç aydan uzun|3 aydan uzun|dört yaş ve üzeri|4 yaş ve üzeri"]
    ]},
  { id: "kbb-akut-rinosinuzit", tr: "Akut rinosinüzit", en: "Acute rhinosinusitis", cat: "burun", lvl: 1,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Fokkens WJ ve ark. European Position Paper on Rhinosinusitis and Nasal Polyps 2020. Rhinology 2020", "https://pubmed.ncbi.nlm.nih.gov/32077450/"],
          ["Rosenfeld RM ve ark. Clinical practice guideline (update): adult sinusitis. Otolaryngol Head Neck Surg 2015", "https://pubmed.ncbi.nlm.nih.gov/25832968/"]]
    },
    c: [
      ["!Burun tıkanıklığı/akıntısı + yüz ağrısı-basıncı ya da koku azalması, 12 haftadan kısa", "burun tıkan|burun akıntı|yüz ağrı|yüzde basınç|yüz basınc|koku kayb|koku azal|12 hafta"],
      ["!Çoğu viral (soğuk algınlığı); 10 günden kısa sürer", "çoğunluğu viral|çoğu viral|çoğunlukla viral|soğuk algınlığı|nezle|10 günden kısa|on günden kısa|10 günden az|on günden az"],
      ["!Bakteriyel düşündüren: 10 günü aşan, ikinci kötüleşme (double sickening), ağır tablo", "10 günü aş|10 günden uzun|on günden uzun|on günü geç|10 günü geç|ikinci kötüleş|double sickening|çift kötüleş|tekrar kötüleş|yeniden kötüleş"],
      ["Rutin görüntüleme gerekmez; tanı kliniktir", "görüntüleme gerekmez|görüntüleme gerekmiyor|görüntüleme istemiyoruz|grafi gerekmez|tomografi gerekmez|klinik tanı|tanı klinik"],
      ["Semptomatik: serum fizyolojik yıkama, intranazal steroid, analjezik", "serum fizyolojik|tuzlu su|salin|nazal yıkama|burun yıkama|intranazal steroid|nazal steroid|burun spreyi"],
      ["Antibiyotik gerektiğinde amoksisilin ± klavulanat", "amoksisilin|amoxicillin|klavulan|amoksiklav"],
      ["!Komplikasyon alarmı: periorbital ödem, görme bozukluğu, şiddetli baş ağrısı → BT/MR", "periorbital|orbital|göz kapağı şiş|görme|diplopi|çift gör|kavernöz|menenjit|komplikasyon"]
    ]},
  { id: "kbb-epistaksis", tr: "Epistaksis (burun kanaması)", en: "Epistaxis", cat: "burun", lvl: 1,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Tunkel DE ve ark. Clinical Practice Guideline: Nosebleed (Epistaxis). Otolaryngol Head Neck Surg 2020", "https://pubmed.ncbi.nlm.nih.gov/31910111/"],
          ["Womack JP ve ark. Epistaxis: Outpatient Management. Am Fam Physician 2018", "https://pubmed.ncbi.nlm.nih.gov/30215971/"]]
    },
    c: [
      ["!Çoğu anterior: Kiesselbach pleksusu (Little alanı)", "kiesselbach|kisselbah|little alan|anterior kanama|anterior epistaksis|ön septum|septumun ön|burnun ön"],
      ["Posterior kanama: sfenopalatin arter, yaşlı/hipertansif, daha ağır", "posterior kanama|posterior epistaksis|arka kanama|burnun arka|sfenopalatin|sphenopalatine"],
      ["!İlk yaklaşım: öne eğilip burnun alt yumuşak kısmına en az 5 dakika sürekli bası", "öne eğil|burna bası|burnu sıkıştır|burun kanat|burnun yumuşak|burnu parmak|burnun alt"],
      ["Topikal vazokonstriktör (oksimetazolin), kanayan noktaya koter (gümüş nitrat)", "vazokonstrikt|oksimetazolin|koter|gümüş nitrat|silver nitrate|kotere"],
      ["!Durmazsa nazal tampon; posteriorda balon/posterior tampon", "nazal tampon|burun tampon|merocel|packing|anterior tampon|posterior tampon|tamponla"],
      ["Dirençli kanamada endoskopik sfenopalatin arter ligasyonu ya da embolizasyon", "ligasyon|bağlan|embolizasyon|girişimsel radyoloji"],
      ["Değerlendir: antikoagülan/antiagregan, hipertansiyon, HHT, tekrarlayan tek taraflı kanamada tümör", "antikoagülan|varfarin|antiagregan|aspirin|herediter hemorajik|telenjiektazi|osler|hht|tümör"]
    ]},
  { id: "kbb-tonsillit-peritonsiller-apse", tr: "Peritonsiller apse ve tonsillektomi endikasyonları", en: "Peritonsillar abscess and tonsillectomy indications", cat: "bogaz", lvl: 1,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Mitchell RB ve ark. Clinical Practice Guideline: Tonsillectomy in Children (Update). Otolaryngol Head Neck Surg 2019", "https://doi.org/10.1177/0194599818801757"],
          ["Powell J, Wilson JA. An evidence-based review of peritonsillar abscess. Clin Otolaryngol 2012", "https://pubmed.ncbi.nlm.nih.gov/22321140/"]]
    },
    c: [
      ["!Peritonsiller apse: tonsil kapsülü ile farinks konstriktör kası arasında pü", "peritonsiller|peri tonsiller|kapsül|konstriktör|quinsy|kuinsi"],
      ["!Bulgular: trismus, sıcak patates sesi, uvulanın karşı tarafa itilmesi, tek taraflı yumuşak damak bombeliği", "trismus|ağız açama|ağzını açam|sıcak patates|patates ses|uvula|küçük dil|yumuşak damak|tek taraflı şiş"],
      ["Tedavi: iğne aspirasyonu ya da insizyon-drenaj + antibiyotik", "aspirasyon|iğneyle|insizyon|drenaj|boşalt"],
      ["Antibiyotik: penisilin ± metronidazol ya da amoksisilin-klavulanat; anaerop örtüsü", "penisilin|metronidazol|klavulan|amoksiklav|klindamisin|anaerop"],
      ["Komplikasyon: parafaringeal yayılım, mediastinit, Lemierre", "parafaringeal|mediastin|lemierre|juguler|boyun yayılım"],
      ["!Tekrarlayan boğaz enfeksiyonunda tonsillektomi: Paradise kriterleri (yılda 7, 2 yıl 5, 3 yıl 3)", "paradise|yılda 7|yılda yedi|7 atak|yedi atak|tekrarlayan tonsillit|tekrarlayan boğaz"],
      ["!Uykuda solunum bozukluğu/OSA ile tonsil hipertrofisi diğer ana endikasyon", "uyku apne|uykuda solunum|osa|horlama|polisomnografi|tonsil hipertrofi|büyük tonsil"],
      ["Tonsillektomi sonrası: tek doz deksametazon, ibuprofen/parasetamol; 12 yaş altı kodein yok", "deksametazon|ibuprofen|parasetamol|kodein|ameliyat sonrası kanama|postoperatif kanama"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "kbb-kronik-otitis-kolesteatom", tr: "Kronik otitis media ve kolesteatom", en: "Chronic otitis media and cholesteatoma", cat: "kulak", lvl: 2,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Yung M ve ark. EAONO/JOS Joint Consensus Statements on the Definitions, Classification and Staging of Middle Ear Cholesteatoma. J Int Adv Otol 2017", "https://pubmed.ncbi.nlm.nih.gov/28059056/"],
          ["Bhutta MF, Leach AJ, Brennan-Jones CG. Chronic suppurative otitis media. Lancet 2024", "https://doi.org/10.1016/S0140-6736(24)00259-9"]]
    },
    c: [
      ["!Kronik süpüratif otitis media: kalıcı zar perforasyonu ve tekrarlayan akıntı", "perforasyon|zar delin|delik|kronik akıntı|tekrarlayan akıntı|süpüratif|otore"],
      ["!Kolesteatom: orta kulakta keratinize yassı epitel birikimi, kemik erozyonu", "kolesteatom|cholesteatoma|keratin|yassı epitel|skuamöz epitel|kemik erozyon|kemiği eri|kemik yık|kemikçik erozyon"],
      ["Edinsel kolesteatomun en sık başlangıcı pars flaksida retraksiyon cebi (attik)", "pars flaksida|flaccida|retraksiyon cebi|retraksiyon|attik|epitimpan"],
      ["Bulgular: kokulu ağrısız akıntı, iletim tipi işitme kaybı", "kötü kokulu|kokulu|pis kokulu|iletim tipi|iletimsel"],
      ["Görüntüleme: temporal kemik BT; nüks şüphesinde difüzyon MR", "temporal kemik|temporal bt|tomografi|bete|non epi|difüzyon"],
      ["!Kolesteatom tedavisi cerrahi: mastoidektomi (kanal duvarı açık/kapalı) ± timpanoplasti", "mastoidektomi|kanal duvar|canal wall|radikal|timpanoplasti|cerrahi"],
      ["Akıntılı KSOM: kulak temizliği + topikal kinolon damla", "kinolon|siprofloksasin|ofloksasin|topikal antibiyotik|kulak damla|kulak temizli|aural toilet|aspirasyon"],
      ["Komplikasyon: fasiyal paralizi, labirent fistülü, menenjit, beyin apsesi, lateral sinüs trombozu", "fasiyal|labirent fistül|fistül|menenjit|beyin apse|sinüs tromboz|sigmoid"]
    ]},
  { id: "kbb-ani-sensorinoral-isitme-kaybi", tr: "Ani sensörinöral işitme kaybı", en: "Sudden sensorineural hearing loss", cat: "kulak", lvl: 2,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Chandrasekhar SS ve ark. Clinical Practice Guideline: Sudden Hearing Loss (Update). Otolaryngol Head Neck Surg 2019", "https://pubmed.ncbi.nlm.nih.gov/31369359/"],
          ["Plontke SK ve ark. Intratympanic corticosteroids for sudden sensorineural hearing loss. Cochrane Database Syst Rev 2022", "https://doi.org/10.1002/14651858.CD008080.pub2"]]
    },
    c: [
      ["!Acil durum: hızlı başlayan tek taraflı işitme kaybı", "ani işitme|aniden duyma|ani başlayan işitme|acil durum|aciliyet|tek kulak"],
      ["!Önce sensörinöral ile iletim tipini ayır: diyapazon (Weber, Rinne), odyometri", "weber|rinne|diyapazon|odyometri|odyogram|sensörinöral|sensorinoral|iletim tipinden ayır"],
      ["Tanım: ardışık 3 frekansta en az 30 dB kayıp", "30 db|otuz desibel|30 desibel|üç ardışık|3 ardışık|ardışık üç"],
      ["Çoğu idiyopatik; viral, vasküler, otoimmün nedenler öne sürülür", "idiyopatik|idiopatik|nedeni bilinmi|viral|vasküler|otoimmün"],
      ["!Retrokoklear patoloji (vestibüler schwannom) için MR", "retrokoklear|schwannom|akustik nörinom|vestibüler schwann|serebellopontin|emar|mr"],
      ["Rutin BT ve rutin laboratuvar istenmez", "rutin bt|rutin tomografi|rutin laboratuvar|rutin tahlil"],
      ["!Kortikosteroid (ilk 2 hafta içinde, sistemik ya da intratimpanik)", "kortikosteroid|steroid|prednizolon|metilprednizolon|intratimpanik|kulak zarı içine"],
      ["Hiperbarik oksijen steroide ek seçenek; kurtarma tedavisi intratimpanik steroid; izlem odyometrisi", "hiperbarik|kurtarma|salvage|kontrol odyometri|izlem odyometri"]
    ]},
  { id: "kbb-kronik-rinosinuzit", tr: "Kronik rinosinüzit ve nazal polip", en: "Chronic rhinosinusitis with/without nasal polyps", cat: "burun", lvl: 2,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Fokkens WJ ve ark. European Position Paper on Rhinosinusitis and Nasal Polyps 2020. Rhinology 2020", "https://pubmed.ncbi.nlm.nih.gov/32077450/"],
          ["Orlandi RR ve ark. International consensus statement on allergy and rhinology: rhinosinusitis 2021. Int Forum Allergy Rhinol 2021", "https://doi.org/10.1002/alr.22741"]]
    },
    c: [
      ["!12 hafta ve üzeri, en az 2 semptom; biri burun tıkanıklığı ya da akıntı (EPOS 2020)", "12 hafta|on iki hafta|üç aydan uzun|3 aydan uzun"],
      ["Diğer semptomlar: yüz ağrısı-basıncı, koku kaybı", "koku kayb|koku azal|anozmi|hiposmi|yüz ağrı|yüzde basınç"],
      ["!Birinci basamakta semptomla tanı; uzman düzeyinde nazal endoskopi ya da sinüs BT ile objektif kanıt", "endoskop|sinüs bt|sinüs tomograf|paranazal bt|bete|tomografi"],
      ["Nazal polipli/polipsiz; tip 2 (eozinofilik) inflamasyon", "polip|polyp|tip 2|eozinofil|type 2"],
      ["Aspirin ile alevlenen solunum yolu hastalığı (Samter triadı): polip + astım + NSAİİ intoleransı", "samter|aerd|aspirin|nsaii|astım"],
      ["!Temel tedavi: intranazal steroid + serum fizyolojik yıkama", "intranazal steroid|nazal steroid|burun spreyi|serum fizyolojik|salin|yıkama"],
      ["Yanıtsızlıkta fonksiyonel endoskopik sinüs cerrahisi", "endoskopik sinüs|fess|sinüs cerrahi"],
      ["Ağır tip 2 polipte biyolojik ajan (dupilumab, omalizumab, mepolizumab); kısa süreli oral steroid", "biyolojik|dupilumab|omalizumab|mepolizumab|oral steroid"]
    ]},
  { id: "kbb-meniere", tr: "Meniere hastalığı", en: "Ménière's disease", cat: "kulak", lvl: 2,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Basura GJ ve ark. Clinical Practice Guideline: Ménière's Disease. Otolaryngol Head Neck Surg 2020", "https://doi.org/10.1177/0194599820909438"],
          ["Lopez-Escamez JA ve ark. Diagnostic criteria for Menière's disease. J Vestib Res 2015", "https://pubmed.ncbi.nlm.nih.gov/25882471/"]]
    },
    c: [
      ["!Patoloji: endolenfatik hidrops", "hidrops|endolenf|endolymph"],
      ["!Atak: 20 dakika–12 saat süren spontan vertigo", "20 dakika|yirmi dakika|12 saat|on iki saat|vertigo atak|baş dönmesi atak|atak halinde|dakikalar ile saatler|dakikalarca|saatler süren"],
      ["!Aynı kulakta dalgalanan işitme, tinnitus, dolgunluk hissi", "tinnitus|çınlama|dolgunluk|kulakta basınç|dalgalan|fluktu"],
      ["Odyogramda düşük-orta frekans sensörinöral kayıp", "düşük frekans|alçak frekans|düşük orta frekans|odyogram|odyometri"],
      ["Ayırıcı tanı: vestibüler migren; MR ile retrokoklear neden", "vestibüler migren|migren|retrokoklear|schwannom|emar"],
      ["Yaşam tarzı: tuz kısıtlaması, kafein/alkol azaltma", "tuz kısıt|tuzsuz|az tuz|düşük tuz|kafein|tuz azalt"],
      ["İdame: diüretik ve/veya betahistin; atakta kısa süreli vestibüler supresan", "diüretik|tiyazid|betahistin|betaserc|vestibüler supresan|dimenhidrinat|meklizin"],
      ["Dirençli olguda intratimpanik steroid ya da gentamisin, endolenfatik kese cerrahisi", "intratimpanik|gentamisin|kese cerrahi|labirentektomi|nörektomi"]
    ]},
  { id: "kbb-vestibuler-norit", tr: "Vestibüler nörit (akut tek taraflı vestibülopati)", en: "Vestibular neuritis", cat: "kulak", lvl: 2,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Strupp M ve ark. Acute unilateral vestibulopathy/vestibular neuritis: Diagnostic criteria. J Vestib Res 2022", "https://doi.org/10.3233/VES-220201"],
          ["Strupp M ve ark. Methylprednisolone, valacyclovir, or the combination for vestibular neuritis. N Engl J Med 2004", "https://pubmed.ncbi.nlm.nih.gov/15269315/"]]
    },
    c: [
      ["!Akut başlayan, en az bir gün süren sürekli orta-şiddetli vertigo, bulantı-kusma, dengesizlik", "sürekli vertigo|sürekli baş dön|sürekli ve şiddetli vertigo|şiddetli vertigo|günlerce süren|akut vestibüler"],
      ["!İşitme etkilenmez (labirentitten farkı)", "işitme etkilenmez|işitme kaybı yok|işitme kaybı olmaz|işitme normal|işitmesi normal|labirentit"],
      ["Spontan horizontal-torsiyonel nistagmus, sağlam tarafa vurur", "nistagmus|sağlam tarafa|horizontal torsiyonel|yatay"],
      ["!Baş impuls testi patolojik (düzeltici sakkad)", "baş impuls|head impulse|düzeltici sakkad|sakkad|vor"],
      ["!Santral nedeni (inme) dışla: HINTS; skew deviasyonu, yöne değişen nistagmus santrali düşündürür", "hints|skew|inme|serebellar|santral|beyin sap|posterior dolaşım"],
      ["Erken kısa süreli kortikosteroid düşünülebilir (uzun dönem yararı tartışmalı); vestibüler supresan yalnız ilk günler", "kortikosteroid|metilprednizolon|steroid|supresan"],
      ["Erken mobilizasyon ve vestibüler rehabilitasyon (santral kompanzasyon)", "rehabilit|egzersiz|kompanzasyon|mobiliz"]
    ]},
  { id: "kbb-yabanci-cisim-aspirasyonu", tr: "Hava yolu yabancı cisim aspirasyonu", en: "Airway foreign body aspiration", cat: "bogaz", lvl: 2,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Diagnostic value of various investigations in children with suspected foreign body aspiration: review. Eur Ann Otorhinolaryngol Head Neck Dis 2011", "https://pubmed.ncbi.nlm.nih.gov/22018977/"],
          ["Foreign body removal. Curr Opin Pulm Med 2026", "https://pubmed.ncbi.nlm.nih.gov/41076577/"]]
    },
    c: [
      ["!En sık küçük çocuklar; kuruyemiş (fındık, fıstık, çekirdek)", "küçük çocuk|üç yaş altı|3 yaş altı|kuruyemiş|fındık|fıstık|çekirdek|leblebi"],
      ["!Öykü: ani boğulma-öksürük atağı (penetrasyon sendromu); tanıklı öykü en değerli", "boğulma|öksürük atağı|penetrasyon|ani öksürük|tanıklı|choking"],
      ["Bulgular: tek taraflı solunum sesi azalması, wheezing; normal muayene dışlamaz", "tek taraflı solunum|solunum sesi azal|solunum seslerinde azal|wheezing|hışıltı"],
      ["Sıklıkla sağ ana bronş", "sağ ana bronş|sağ bronş|sağ akciğer"],
      ["Grafi: çoğu radyolüsen; ekspiryum grafisinde hava hapsi, obstrüktif amfizem, atelektazi", "radyolüsen|ekspiryum|hava hapsi|air trapping|amfizem|atelektazi|dekübit"],
      ["!Kesin tanı ve tedavi: rijit bronkoskopi (genel anestezi)", "rijit bronkoskopi|rigid|bronkoskopi"],
      ["Tam tıkanmada: 1 yaş altında sırta vuruş + göğüs basısı, büyüklerde Heimlich", "heimlich|abdominal bası|karın bası|sırta vur|sırt vuru|göğüs bası"],
      ["Geç tanı: tekrarlayan pnömoni, bronşektazi", "tekrarlayan pnömon|bronşektazi|geç tanı|gecik"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "kbb-larinks-kanseri", tr: "Larinks kanseri", en: "Laryngeal cancer", cat: "bogaz", lvl: 3,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Forastiere AA ve ark. Use of Larynx-Preservation Strategies in the Treatment of Laryngeal Cancer: ASCO Clinical Practice Guideline Update. J Clin Oncol 2018", "https://doi.org/10.1200/JCO.2017.75.7385"],
          ["Steuer CE ve ark. An update on larynx cancer. CA Cancer J Clin 2017", "https://doi.org/10.3322/caac.21386"]]
    },
    c: [
      ["!Neredeyse tamamı skuamöz hücreli karsinom; en önemli risk sigara ve alkol", "skuamöz|yassı hücreli|squamous|sigara|tütün|alkol"],
      ["!Glottik tümörde erken ses kısıklığı; uzayan ses kısıklığında laringoskopi", "ses kısık|disfoni|laringoskop|larengoskop"],
      ["Bölgeler: supraglottik, glottik (en sık), subglottik; glottiste lenfatik az, boyun metastazı geç", "supraglottik|glottik|subglottik|lenfatik az|lenf drenajı az|lenfatikten fakir|geç boyun metastaz|boyun metastazı geç"],
      ["Supraglottik/ileri: disfaji, odinofaji, yansıyan kulak ağrısı, stridor, boyunda kitle", "disfaji|odinofaji|yansıyan kulak|refere otalji|stridor|boyunda kitle"],
      ["Tanı: biyopsi (direkt laringoskopi), kontrastlı BT/MR, PET-BT ile evreleme", "biyopsi|direkt laringoskopi|evreleme|pet|kontrastlı"],
      ["!Erken evre (T1–T2): larinksi koruyan radyoterapi ya da endoskopik (transoral lazer) cerrahi", "radyoterapi|ışın|transoral|lazer|endoskopik rezeksiyon|kordektomi"],
      ["!İleri evre: larinks koruma için eşzamanlı kemoradyoterapi; seçilmiş T4'te total larenjektomi", "kemoradyoterapi|kemoradyo|sisplatin|larenjektomi|larinks koruma|organ koruma"],
      ["Larenjektomi sonrası ses rehabilitasyonu: trakeoözofageal protez, kalıcı trakeostoma", "trakeoözofageal|ses protez|stoma|trakeostoma|özofageal ses"]
    ]},
  { id: "kbb-nazofarenks-kanseri", tr: "Nazofarenks kanseri", en: "Nasopharyngeal carcinoma", cat: "bogaz", lvl: 3,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Chen YP ve ark. Nasopharyngeal carcinoma. Lancet 2019", "https://doi.org/10.1016/S0140-6736(19)30956-0"],
          ["Chen YP ve ark. Chemotherapy in combination with radiotherapy for definitive-intent treatment of stage II–IVA nasopharyngeal carcinoma: CSCO and ASCO guideline. J Clin Oncol 2021", "https://pubmed.ncbi.nlm.nih.gov/33405943/"]]
    },
    c: [
      ["!Epstein-Barr virüsü ile ilişkili; Güneydoğu Asya'da endemik, tuzlanmış balık", "epstein|ebv|ebstein|güneydoğu asya|çin|tuzlu balık|tuzlanmış"],
      ["En sık köken Rosenmüller fossası", "rosenmüller|rosenmuller|faringeal resesus"],
      ["!Erişkinde tek taraflı seröz otitis media → nazofarenks muayenesi", "tek taraflı seröz|tek taraflı efüzyon|tek taraflı orta kulak|erişkinde seröz|erişkinde efüzyon"],
      ["İlk bulgu çoğu kez boyunda ağrısız lenfadenopati; burun tıkanıklığı, kanlı akıntı", "boyunda kitle|lenfadenopati|lenf nod|burun tıkan|kanlı akıntı|kanlı burun"],
      ["Kafa tabanı/kraniyal sinir tutulumu (özellikle abdusens, trigeminal)", "kafa taban|kraniyal sinir|abdusens|altıncı sinir|trigeminal|diplopi"],
      ["Tanı: endoskopik biyopsi; MR ile evreleme; plazma EBV DNA", "endoskop|biyopsi|emar|mr|ebv dna|plazma ebv"],
      ["!Tedavi radyoterapi (IMRT) temelli; cerrahi ilk seçenek değil", "radyoterapi|imrt|ışın|cerrahi ilk seçenek değil|ameliyat ilk seçenek değil"],
      ["!Lokal ileri evrede eşzamanlı sisplatin + indüksiyon kemoterapisi (gemsitabin-sisplatin)", "sisplatin|indüksiyon|gemsitabin|kemoradyoterapi|eşzamanlı kemo"]
    ]},
  { id: "kbb-hpv-orofarenks-kanseri", tr: "Baş-boyun skuamöz hücreli kanserleri ve HPV ilişkili orofarenks kanseri", en: "Head and neck SCC and HPV-associated oropharyngeal cancer", cat: "bogaz", lvl: 3,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Johnson DE ve ark. Head and neck squamous cell carcinoma. Nat Rev Dis Primers 2020", "https://pubmed.ncbi.nlm.nih.gov/33243986/"],
          ["Lechner M ve ark. HPV-associated oropharyngeal cancer: epidemiology, molecular biology and clinical management. Nat Rev Clin Oncol 2022", "https://pubmed.ncbi.nlm.nih.gov/35105976/"]]
    },
    c: [
      ["!Klasik risk: sigara ve alkol (HPV negatif); HPV pozitifte genç, sigara içmeyen hasta", "sigara|tütün|alkol|içmeyen|genç hasta|daha genç"],
      ["!HPV 16; viral E6/E7 onkoproteinleri p53 ve Rb'yi inaktive eder", "hpv 16|hpv16|e6|e7|p53|retinoblastom|rb"],
      ["Yerleşim: tonsil ve dil kökü (orofarenks)", "tonsil|dil kök|orofarenks|orofaringeal"],
      ["Sık başvuru: boyunda kistik lenf nodu metastazı, primer küçük", "kistik|boyunda kitle|lenf nod|metastaz"],
      ["!Tanı: p16 immünohistokimya (HPV vekil belirteci)", "p16|immünohistokim|immunohistokim|vekil"],
      ["!HPV pozitifin prognozu daha iyi; AJCC 8'de ayrı evreleme", "prognozu daha iyi|prognozu iyi|daha iyi prognoz|sağkalım|ayrı evrele|ajcc"],
      ["Tedavi: cerrahi (transoral robotik) ya da kemoradyoterapi; nüks/metastatikte immünoterapi (pembrolizumab)", "transoral|robotik|kemoradyo|sisplatin|pembrolizumab|nivolumab|immünoterapi|setuksimab"],
      ["Korunma: HPV aşısı", "hpv aşı|aşı|aşısı|aşıla"]
    ]},
  { id: "kbb-derin-boyun-enfeksiyonu", tr: "Derin boyun enfeksiyonları", en: "Deep neck space infections", cat: "bogaz", lvl: 3,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Management of Deep Neck Infection Associated with Descending Necrotizing Mediastinitis: A Scoping Review. Medicina 2025", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11857515/"],
          ["Klug TE, Greve T, Hentze M. Complications of peritonsillar abscess. Ann Clin Microbiol Antimicrob 2020", "https://doi.org/10.1186/s12941-020-00375-x"]]
    },
    c: [
      ["!Kaynak: erişkinde en sık diş (odontojenik), çocukta üst solunum yolu/tonsil", "diş enfeksiyon|diş apse|dişten|diş kaynak|diş çürü|odontojen|dental|tonsil|üst solunum"],
      ["Ludwig anjini: submandibuler/sublingual bilateral selülit, ağız tabanı şişliği, dilin yukarı itilmesi", "ludwig|submandibul|sublingual|ağız taban|dil yukarı"],
      ["Retrofaringeal apse (küçük çocuk) ve parafaringeal apse", "retrofaringeal|parafaringeal|retro faringeal|para faringeal"],
      ["Bulgular: boyun şişliği, trismus, disfaji, salya, boyun hareket kısıtlılığı, tortikolis", "trismus|disfaji|yutma güçlü|salya|tortikolis|boyun hareket|boyun şiş"],
      ["!Önce hava yolu güvenliği (gerekirse uyanık fiberoptik entübasyon/trakeotomi)", "hava yolu|havayolu|entübasyon|trakeotomi|trakeostomi|fiberoptik"],
      ["!Tanı: kontrastlı boyun BT", "kontrastlı|boyun bt|boyun tomograf|bete"],
      ["!IV geniş spektrum antibiyotik (anaerop dahil) + apsenin cerrahi drenajı", "intravenöz|iv antibiyotik|ampisilin sulbaktam|klindamisin|metronidazol|anaerop|drenaj"],
      ["Komplikasyon: inen nekrotizan mediastinit, Lemierre (juguler ven trombozu), karotis erozyonu", "mediastinit|lemierre|juguler|karotis|sepsis"]
    ]},
  { id: "kbb-boyun-kitlesi-tiroglossal-kist", tr: "Erişkinde boyun kitlesi ve tiroglossal kanal kisti", en: "Neck mass in adults and thyroglossal duct cyst", cat: "bogaz", lvl: 3,
    src: {
      k: ["Cummings Otolaryngology: Head and Neck Surgery, 8. baskı (2025)", "Scott-Brown's Otorhinolaryngology and Head and Neck Surgery, 8. baskı (2018)"],
      m: [["Pynnonen MA ve ark. Clinical Practice Guideline: Evaluation of the Neck Mass in Adults. Otolaryngol Head Neck Surg 2017", "https://pubmed.ncbi.nlm.nih.gov/28891406/"],
          ["Thyroglossal duct cysts: anatomy, embryology and treatment. Surg Radiol Anat 2013", "https://pubmed.ncbi.nlm.nih.gov/23689821/"]]
    },
    c: [
      ["!Erişkinde kalıcı boyun kitlesi aksi kanıtlanana dek malign (metastatik SHK) kabul edilir", "aksi kanıtlanana|malign kabul|malignite|kanser kabul|metastatik|metastaz"],
      ["Malignite riski: sabit, sert, büyüyen, ülsere; sigara-alkol öyküsü; ses kısıklığı, disfaji", "sabit|sert|fikse|büyüyen|ülsere|sigara ve alkol öykü|ses kısık"],
      ["Rutin antibiyotik verilmez (bakteriyel enfeksiyon bulgusu yoksa)", "rutin antibiyotik verilmez|rutin antibiyotik önerilmez|antibiyotik verilmez|antibiyotik vermiyoruz|ampirik antibiyotik verilmez|ampirik antibiyotik önerilmez"],
      ["!Tanı: kontrastlı BT/MR ve ince iğne aspirasyonu; açık biyopsi ilk tercih değil", "ince iğne|iia|aspirasyon biyopsi|kontrastlı|açık biyopsi ilk tercih değil|açık biyopsi yerine"],
      ["Primer aranır: üst aerodijestif sistem muayenesi, endoskopi", "aerodijestif|endoskop|laringoskop|primer odak|primer tümör"],
      ["!Tiroglossal kist: orta hatta, dil çıkarılınca/yutkunmakla yukarı hareket eden kitle; en sık konjenital boyun kitlesi", "tiroglossal|orta hat|dil çıkar|dilini çıkar|yutkun|yukarı hareket"],
      ["!Tedavi Sistrunk ameliyatı: kist + hiyoid gövdenin orta kısmı + traktus", "sistrunk|hiyoid|hyoid"],
      ["Ektopik tiroid dışlanmalı (USG); nadiren kistte papiller karsinom; lateral kitlede brankiyal kist", "ektopik tiroid|ultrason|usg|papiller|brankiyal|branşiyal"]
    ]}
]
});
