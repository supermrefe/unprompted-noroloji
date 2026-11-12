/* Pediatri — Unprompted Tıp konu paketi.
   Seçim mantığı: yalnız çocukluk/yenidoğan dönemine özgü, TUS'ta sık sorulan ve klinikte hayati olan hastalıklar; güncel AAP (hiperbilirübinemi 2022,
   febril bebek 2021, bronşiyolit 2014), AHA 2017 Kawasaki, ESPGHAN 2014, ERC/AHA-AAP 2025 yenidoğan, Avrupa RDS 2022, Türkiye tarama/D vitamini programları.
   Kolay = poliklinik/acil çekirdeği; Orta = TUS ayrıntısı (Kawasaki, invajinasyon, pilor, IgAV, nefrotik); Zor = yenidoğan yoğun bakım ve tarama.
   Kapsam dışı: GKD ve Perthes (ortopedi), ROP (göz), VUR/inmemiş testis (üroloji), aşı takvimi (halk sağlığı). */
(function () {
const NE = "Nelson Textbook of Pediatrics, 22. baskı (2024)";
const RU = "Rudolph's Pediatrics, 23. baskı (2018)";
const AV = "Avery's Diseases of the Newborn, 11. baskı (2023)";
const IPNA = ["IPNA clinical practice recommendations for the diagnosis and management of children with steroid-sensitive nephrotic syndrome. Pediatr Nephrol 2023", "https://doi.org/10.1007/s00467-022-05739-3"];

UP.add({ id: "pediatri", subs: {
    yd: "Yenidoğan",
    enf: "Enfeksiyon ve solunum",
    gi: "Gastroenteroloji ve cerrahi aciller",
    nefro: "Nefroloji ve vaskülit",
    nor: "Nöroloji",
    met: "Metabolizma, endokrin ve beslenme"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "ped-yenidogan-sariligi", tr: "Yenidoğan sarılığı (hiperbilirübinemi)", en: "Neonatal hyperbilirubinemia", cat: "yd", lvl: 1,
    src: { k: [NE, AV], m: [
      ["Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics 2022", "https://doi.org/10.1542/peds.2022-058859"],
      ["Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation (PubMed kaydı). Pediatrics 2022", "https://pubmed.ncbi.nlm.nih.gov/35927462/"]] },
    c: [
      ["!Fizyolojik ve patolojik sarılık ayrımı (ilk 24 saatte sarılık patolojiktir)", "fizyolojik sarılık|fizyolojik|patolojik sarılık|patolojik|ilk 24 saat|ilk yirmi dört saat|ilk gün"],
      ["İndirekt (konjuge olmayan) ve direkt (konjuge) bilirübin ayrımı", "indirekt|direkt bilirübin|konjuge|unkonjuge|konjuge olmayan"],
      ["Nedenler: hemoliz (ABO/Rh uyuşmazlığı, G6PD), anne sütü", "hemoliz|abo uyuşmaz|rh uyuşmaz|g6pd|kan uyuşmaz|anne sütü sarılı|emzirmeye bağlı"],
      ["!Total serum/transkütan bilirübin ölçümü ve saate özgü eğri", "transkütan|total serum bilirübin|serum bilirübin|bilirübin düzey|saate göre|saate özgü|nomogram|eğri"],
      ["AAP 2022: eşikler gestasyon haftası ve nörotoksisite risk faktörlerine göre", "gestasyon hafta|gebelik hafta|risk faktör|nörotoksisite|aap 2022|2022 kılavuz"],
      ["!Fototerapi; çok yüksek düzeyde kan değişimi", "fototerapi|ışık tedavi|mavi ışık|kan değişim|exchange|eksçeyç"],
      ["Komplikasyon: akut bilirübin ensefalopatisi ve kernikterus", "kernikterus|bilirübin ensefalopati|ensefalopati"],
      ["Uzamış sarılıkta direkt hiperbilirübinemi: biliyer atrezi düşün", "biliyer atrezi|safra yolu atrez|uzamış sarılık|açık renkli dışkı|akolik"]
    ]},
  { id: "ped-febril-konvulsiyon", tr: "Febril konvülsiyon", en: "Febrile seizure", cat: "nor", lvl: 1,
    src: { k: [NE, RU], m: [
      ["Febrile Seizures: Guideline for the Neurodiagnostic Evaluation of the Child With a Simple Febrile Seizure. Pediatrics 2011", "https://doi.org/10.1542/peds.2010-3318"],
      ["Febrile Seizures: Clinical Practice Guideline for the Long-term Management of the Child With Simple Febrile Seizures. Pediatrics 2008", "https://doi.org/10.1542/peds.2008-0939"]] },
    c: [
      ["!Tanım: 6–60 ay arası, ateşle birlikte, SSS enfeksiyonu olmadan nöbet", "6 ile 60 ay|altı ay ile beş yaş|6 ay ile 5 yaş|altı ile altmış ay|6-60 ay|merkezi sinir sistemi enfeksiyonu olmadan|santral sinir sistemi enfeksiyonu yok"],
      ["!Basit ve komplike ayrımı (uzun süre, fokal, 24 saatte tekrar)", "basit febril|komplike|kompleks febril|fokal|jeneralize|24 saat içinde tekrar|yirmi dört saat içinde tekrar|on beş dakika|15 dakika"],
      ["Menenjit şüphesinde lomber ponksiyon", "lomber ponksiyon|lp yap|menenjit|beyin omurilik sıvı|bos inceleme"],
      ["Basit febril nöbette rutin EEG, görüntüleme ve kan tetkiki gerekmez", "eeg gerekmez|eeg gerekmiyor|rutin eeg gerekmez|rutin eeg önerilmez|rutin eeg istenmez|eeg istemiyoruz|görüntüleme gerekmez|görüntüleme gerekmiyor|rutin tetkik gerekmez|rutin tetkik önerilmez|tetkik gerekmez|tetkik gerekmiyor"],
      ["Uzamış nöbette benzodiazepin (rektal diazepam / bukkal midazolam)", "benzodiazepin|diazepam|midazolam"],
      ["Sürekli ya da aralıklı antiepileptik profilaksi önerilmez; antipiretik tekrarı önlemez", "profilaksi önerilmez|profilaksi önerilmiyor|antiepileptik önerilmez|antiepileptik önerilmiyor|profilaktik antiepileptik verilmez|tekrarı önlemez|tekrarı önlemiyor|nöbeti önlemez|nöbeti önlemiyor"],
      ["Tekrarlama riski var, epilepsi riski hafif artmış; aileye bilgi", "tekrar riski|tekrarlama riski|nüks riski|epilepsi riski|aileyi bilgilendir|aileye bilgi|aileyi rahatlat"]
    ]},
  { id: "ped-akut-gastroenterit", tr: "Akut gastroenterit ve dehidratasyon", en: "Acute gastroenteritis and dehydration in children", cat: "gi", lvl: 1,
    src: { k: [NE, RU], m: [
      ["ESPGHAN/ESPID Evidence-Based Guidelines for the Management of Acute Gastroenteritis in Children in Europe: Update 2014. J Pediatr Gastroenterol Nutr 2014", "https://doi.org/10.1097/MPG.0000000000000375"],
      ["Reduced osmolarity oral rehydration solution for treating dehydration caused by acute diarrhoea in children (Hahn, Kim, Garner). Cochrane Database Syst Rev 2002", "https://doi.org/10.1002/14651858.CD002847"]] },
    c: [
      ["Etken: en sık viral (rotavirüs, norovirüs)", "rotavirüs|rotavirus|norovirüs|norovirus|viral etken|virüs"],
      ["!Dehidratasyon derecesinin klinik değerlendirilmesi", "dehidratasyon derece|hafif orta ağır|hafif dehidrat|orta dehidrat|ağır dehidrat|kilo kaybı|ağız kuruluğu|gözler çökük|çökük göz|kapiller dolum|deri turgor|cilt turgor|göz yaşı"],
      ["!Oral rehidratasyon solüsyonu (hipoozmolar ORS) birinci basamak", "oral rehidrat|ors|hipoozmolar|hipoosmolar|düşük ozmolar|ağızdan sıvı|oral sıvı"],
      ["Oral alınamazsa nazogastrik ya da IV sıvı", "nazogastrik|iv sıvı|intravenöz sıvı|intravenöz tedavi|izotonik|damar yolu|damardan sıvı|serum takıl"],
      ["Erken normal beslenme ve emzirmeye devam", "beslenmeye devam|emzirmeye devam|erken beslen|normal beslen|anne sütüne devam|beslenmeye erken|emzirme kesilmez|emzirmeyi kesmiyoruz|diyet kısıtlanmaz|kısıtlayıcı diyet önerilmez|kısıtlayıcı diyet uygulanmaz"],
      ["Rutin antibiyotik ve loperamid önerilmez", "loperamid önerilmez|loperamid verilmez|loperamid kullanılmaz|antibiyotik gerekmez|antibiyotik önerilmez|rutin antibiyotik verilmez|rutin antibiyotik önerilmez|antibiyotik rutin değil|antibiyotik rutin verilmez|antidiyareik ilaç önerilmez|antidiyareik önerilmez|antibiyotik vermiyoruz|antibiyotik verilmez"],
      ["Yardımcı: ondansetron (kusmada), seçilmiş probiyotikler, rasekadotril", "ondansetron|probiyotik|rasekadotril|racecadotril"],
      ["Önlem: rotavirüs aşısı, el hijyeni", "rotavirüs aşı|rotavirus aşı|el hijyen|el yıka"]
    ]},
  { id: "ped-bronsiyolit", tr: "Akut bronşiyolit", en: "Acute bronchiolitis", cat: "enf", lvl: 1,
    src: { k: [NE, RU], m: [
      ["Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics 2014", "https://doi.org/10.1542/peds.2014-2742"],
      ["Bronchiolitis in children: diagnosis and management (NG9). NICE 2015, güncelleme 2021", "https://www.nice.org.uk/guidance/ng9"]] },
    c: [
      ["!İki yaş altı, en sık RSV ile alt solunum yolu enfeksiyonu", "rsv|respiratuvar sinsityal|respiratuar sinsisyal|sinsityal virüs|iki yaş altı|2 yaş altı|süt çocuğu"],
      ["Klinik: nezle sonrası öksürük, takipne, wheezing, raller, beslenme güçlüğü", "nezle|burun akıntı|takipne|hırıltı|wheezing|vizing|raller|krepitan|beslenme güçlüğü|emmede zorluk"],
      ["!Tanı klinik; rutin akciğer grafisi ve laboratuvar gerekmez", "tanı klinik|klinik tanı|klinik olarak tanı|rutin grafi gerekmez|rutin grafi çekilmez|rutin akciğer grafisi gerekmez|rutin akciğer grafisi çekilmez|grafi gerekmez|grafi çekmiyoruz|rutin laboratuvar gerekmez|laboratuvar gerekmez"],
      ["!Tedavi destekleyici: oksijen, sıvı/beslenme desteği, burun aspirasyonu", "destek tedavi|destekleyici|oksijen|nazal aspirasyon|burun aspirasyon|sıvı desteği|hidrasyon|nazogastrik"],
      ["Bronkodilatör, adrenalin ve sistemik steroid rutin önerilmez", "bronkodilatör önerilmez|bronkodilatör önerilmiyor|bronkodilatör kullanılmaz|bronkodilatör vermiyoruz|bronkodilatör rutin önerilmez|bronkodilatör rutin kullanılmaz|rutin bronkodilatör verilmez|kortikosteroid ve antibiyotik rutin önerilmez|steroid önerilmez|steroid önerilmiyor|steroid kullanılmaz|steroid vermiyoruz|salbutamol önerilmez|salbutamol önerilmiyor"],
      ["Ağır hastalık riski: prematüre, küçük bebek, konjenital kalp/kronik akciğer hastalığı", "prematür|konjenital kalp|kronik akciğer|bronkopulmoner displazi|apne"],
      ["Korunma: nirsevimab (ilk RSV mevsimindeki bebekler, yüksek riskte ikinci mevsim); palivizumab; gebelikte maternal RSV aşısı", "palivizumab|nirsevimab|monoklonal antikor|maternal rsv aşı|gebelikte rsv aşı"]
    ]},
  { id: "ped-krup", tr: "Krup (laringotrakeobronşit)", en: "Croup (laryngotracheobronchitis)", cat: "enf", lvl: 1,
    src: { k: [NE, RU], m: [
      ["Glucocorticoids for croup in children. Cochrane Database Syst Rev 2018", "https://doi.org/10.1002/14651858.CD001955.pub4"],
      ["Croup in children. CMAJ 2013", null]] },
    c: [
      ["!Etken çoğunlukla parainfluenza virüsü; küçük çocuk", "parainfluenza|para influenza"],
      ["!Klinik: havlar tarzda öksürük, ses kısıklığı, inspiratuvar stridor", "havlar|köpek havlaması|havlama|ses kısık|stridor|inspiratuvar"],
      ["Subglottik daralma: grafide 'kule/çan kulesi' bulgusu (rutin gerekmez)", "subglottik|steeple|kule|çan kulesi|kalem ucu"],
      ["Şiddet değerlendirmesi (Westley skoru)", "westley|krup skoru"],
      ["!Tüm şiddetlerde tek doz deksametazon (kortikosteroid)", "deksametazon|dexametazon|budesonid|tek doz steroid|tek doz kortikosteroid"],
      ["Orta-ağır krupta nebülize adrenalin (epinefrin)", "nebülize adrenalin|nebülize epinefrin|adrenalin nebül|inhale adrenalin"],
      ["Ayırıcı tanı: epiglottit, bakteriyel trakeit, yabancı cisim", "epiglottit|bakteriyel trakeit|yabancı cisim"]
    ]},
  { id: "ped-rasitizm", tr: "D vitamini eksikliği raşitizmi", en: "Nutritional (vitamin D deficiency) rickets", cat: "met", lvl: 1,
    src: { k: [NE, RU], m: [
      ["Global Consensus Recommendations on Prevention and Management of Nutritional Rickets. J Clin Endocrinol Metab 2016", "https://doi.org/10.1210/jc.2015-2175"],
      ["D Vitamini Uygulama Rehberi. T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü", null]] },
    c: [
      ["!Büyüme plağında mineralizasyon bozukluğu (D vitamini ve/veya kalsiyum eksikliği)", "mineralizasyon|büyüme plağı|epifiz|osteomalazi|kalsiyum eksik"],
      ["Risk: güneş ışığı azlığı, kapalı giyinme, D vitamini almayan yalnız anne sütüyle beslenen bebek", "güneş ışığı|güneşlen|güneş görme|kapalı giyin|koyu ten|yalnız anne sütü|sadece anne sütü"],
      ["!Klinik: raşitik rozary, el bileği genişlemesi, O bacak, fontanel kapanmasında gecikme, kraniotabes", "rozary|tespih|el bileği|bilekte genişle|o bacak|bacaklarda eğril|genu varum|kraniotabes|fontanel|harrison"],
      ["Laboratuvar: ALP yüksek, 25(OH)D düşük, PTH yüksek", "alkalen fosfataz|alp yüksek|alp artmış|25 hidroksi|25 oh|kalsidiol|pth|parathormon"],
      ["Grafi: el bileğinde metafizde fırçamsı/çanaklaşma", "çanaklaş|fırça|kupalaş|cupping|fraying|metafiz"],
      ["Tedavi: D vitamini (kolekalsiferol) + kalsiyum", "kolekalsiferol|d vitamini tedavi|d vitamini ver|yüksek doz d|stoss|kalsiyum desteği|kalsiyum ver"],
      ["!Türkiye: ilk yılda günlük 400 IU ücretsiz D vitamini profilaksisi (2005'ten beri)", "400 ünite|dört yüz ünite|400 iu|profilaksi|bebeğe d vitamini|d vitamini destek|ücretsiz d vitamini|proflaksi"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "ped-febril-bebek", tr: "Ateşli genç süt çocuğu (8–60 gün)", en: "Febrile infant 8–60 days", cat: "enf", lvl: 2,
    src: { k: [NE, RU], m: [
      ["Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old. Pediatrics 2021", "https://doi.org/10.1542/peds.2021-052228"],
      ["Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old (PubMed kaydı). Pediatrics 2021", "https://pubmed.ncbi.nlm.nih.gov/34281996/"]] },
    c: [
      ["!Ciddi bakteriyel enfeksiyon riski: idrar yolu enfeksiyonu, bakteriyemi, menenjit", "ciddi bakteriyel|invaziv bakteriyel|bakteriyemi"],
      ["AAP 2021: iyi görünümlü, term, 8–60 günlük, ateş ≥38,0 °C", "8 ile 60|sekiz ile altmış|8-60|60 gün|altmış gün|38 derece|otuz sekiz|iyi görünümlü|iyi görünen"],
      ["!Yaş gruplarına göre algoritma (8–21, 22–28, 29–60 gün)", "21 gün|yirmi bir gün|22 ile 28|yirmi iki ile yirmi sekiz|29 ile 60|yirmi dokuz|yaş grup|üç grup"],
      ["İdrar tetkiki ve kültürü (kateter)", "idrar tahlil|idrar analiz|idrar kültür|tam idrar|kateter|piyüri"],
      ["!İnflamatuvar belirteçler: prokalsitonin, CRP, mutlak nötrofil", "prokalsitonin|mutlak nötrofil|inflamatuvar belirteç|enflamatuvar belirteç"],
      ["Kan kültürü ve gerektiğinde lomber ponksiyon (BOS)", "kan kültür"],
      ["8–21 gün: hepsine LP, parenteral antibiyotik ve yatış", "21 günlük|yirmi bir günlük|8 ile 21|sekiz ile yirmi bir|hepsine lomber|hepsine lp|parenteral antibiyotik"]
    ]},
  { id: "ped-kawasaki", tr: "Kawasaki hastalığı", en: "Kawasaki disease", cat: "nefro", lvl: 2,
    src: { k: [NE, RU], m: [
      ["Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals From the American Heart Association. Circulation 2017", "https://doi.org/10.1161/CIR.0000000000000484"],
      ["Top Things to Know: Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease. American Heart Association 2017", null]] },
    c: [
      ["!Küçük çocukta orta boy damar vasküliti; gelişmiş ülkelerde edinsel kalp hastalığının önde gelen nedeni", "orta boy damar|orta çaplı damar|vaskülit|edinsel kalp|beş yaş altı|5 yaş altı"],
      ["!Ateş en az 5 gün + 5 klinik ölçütten en az 4'ü", "beş gün|5 gün|dört ölçüt|4 ölçüt|beş kriterden dört|5 kriterden 4|dört kriter|4 kriter"],
      ["Bulgular: eksüdasız bilateral konjonktivit, dudak/ağız değişiklikleri (çilek dil), döküntü, el-ayak değişiklikleri, servikal lenfadenopati", "konjonktivit|çilek dil|çatlak dudak|kırmızı dudak|döküntü|ekzantem|el ve ayak|ellerde ödem|soyulma|deskuamasyon|servikal lenf|boyunda lenf"],
      ["İnkomplet Kawasaki: CRP/ESH ve ek laboratuvarla değerlendirme", "inkomplet|atipik kawasaki|tam olmayan|eksik kawasaki|sedimantasyon|crp"],
      ["!Ekokardiyografi: koroner arter anevrizması (z-skoru)", "ekokardiyografi|eko ile|ekoda|eko yap|koroner arter anevrizm|koroner anevrizm|z skor|z-skor"],
      ["!IVIG (tek doz) ile tedavi, ideali 10 gün içinde", "ivig|intravenöz immünoglobulin|iv immünoglobulin|immünoglobulin|immunglobulin|ı v ı g"],
      ["Aspirin; dirençli olguda ikinci IVIG/kortikosteroid/infliksimab", "aspirin|asetilsalisilik|ivig direnc|dirençli|ikinci doz|infliksimab|kortikosteroid"]
    ]},
  { id: "ped-invajinasyon", tr: "İnvajinasyon (intussusepsiyon)", en: "Intussusception", cat: "gi", lvl: 2,
    src: { k: [NE, RU], m: [
      ["Current diagnosis and image-guided reduction for intussusception in children. Clin Exp Pediatr 2023", "https://doi.org/10.3345/cep.2021.01816"],
      ["Current diagnosis and image-guided reduction for intussusception in children (PubMed kaydı). Clin Exp Pediatr 2023", "https://www.pubmed.gov/35798026/"]] },
    c: [
      ["!Barsak segmentinin distaldekinin içine girmesi; en sık ileokolik, süt çocuğu", "ileokolik|ileoçekal|teleskop|içine gir|iç içe gir|süt çocuğu|bebeklik"],
      ["!Klinik: aralıklı kolik karın ağrısı, kusma, çilek jölesi dışkı, sosis kitle", "kolik|aralıklı ağrı|ağlama nöbet|bacaklarını karnına|çilek jöle|kuş üzümü|frenk üzümü|kanlı mukuslu|sosis|kitle|letarji"],
      ["Patolojik öncü nokta: büyük çocukta Meckel, polip, lenfoma; küçükte Peyer plağı hipertrofisi", "öncü nokta|lead point|meckel|polip|lenfoma|peyer|lenfoid hiperplazi"],
      ["!Tanıda ultrasonografi (hedef / donut bulgusu)", "ultrason|usg|ultrasonografi|hedef bulgu|target|donut|halka"],
      ["!Tedavi: görüntüleme eşliğinde hava ya da hidrostatik lavman redüksiyonu", "hava lavman|pnömatik|hidrostatik|lavman|enema|redüksiyon|redükte"],
      ["Peritonit, perforasyon, şokta lavman kontrendike: cerrahi", "perforasyon|peritonit|şok|cerrahi|laparotomi|laparoskop"],
      ["Redüksiyon sonrası nüks olabilir", "nüks|tekrar|rekürrens"]
    ]},
  { id: "ped-pilor-stenozu", tr: "İnfantil hipertrofik pilor stenozu", en: "Infantile hypertrophic pyloric stenosis", cat: "gi", lvl: 2,
    src: { k: [NE, RU], m: [
      ["Brief Overview and Updates on Infantile Hypertrophic Pyloric Stenosis: Focus on Perioperative Management. Pediatr Ann 2021", "https://doi.org/10.3928/19382359-20210215-01"],
      ["Minimally invasive treatment of infantile hypertrophic pyloric stenosis (İtalyan kılavuzu). Pediatr Med Chir 2020", null]] },
    c: [
      ["!Ortaya çıkış birkaç haftalık bebekte; erkek ve ilk çocukta sık", "haftalık|ilk ay|birinci ay|erkek|ilk çocuk|ilk bebek"],
      ["!Safrasız fışkırır tarzda kusma, kusma sonrası aç bebek", "fışkırır|projektil|safrasız|safra içermeyen|aç bebek|tekrar emmek|kusma sonrası aç"],
      ["Fizik muayene: zeytin şeklinde kitle, görünür peristaltik dalga", "zeytin|olive|peristaltik dalga|peristaltizm"],
      ["!Hipokloremik hipokalemik metabolik alkaloz", "hipokloremi|hipokalemi|metabolik alkaloz|alkaloz"],
      ["Tanı: ultrasonografide pilor kas kalınlığı ve kanal uzunluğu artışı", "ultrason|usg|ultrasonografi|kas kalınlığı|pilor kalın|kanal uzunluğu"],
      ["Önce sıvı-elektrolit düzeltilir; cerrahi acil değil", "sıvı elektrolit|elektrolit düzelt|resüsitasyon|önce düzelt|acil değil"],
      ["Tedavi: pilormiyotomi (Ramstedt, açık ya da laparoskopik)", "pilormiyotomi|piloromiyotomi|ramstedt|laparoskopik"],
      ["Risk: erken dönemde makrolid (eritromisin) kullanımı", "eritromisin|makrolid|azitromisin"]
    ]},
  { id: "ped-iga-vaskuliti", tr: "IgA vasküliti (Henoch–Schönlein purpurası)", en: "IgA vasculitis (Henoch–Schönlein purpura)", cat: "nefro", lvl: 2,
    src: { k: [NE, RU], m: [
      ["European consensus-based recommendations for diagnosis and treatment of immunoglobulin A vasculitis—the SHARE initiative. Rheumatology 2019", "https://doi.org/10.1093/rheumatology/kez041"],
      ["EULAR/PRINTO/PRES criteria for Henoch-Schönlein purpura, childhood polyarteritis nodosa, childhood Wegener granulomatosis and childhood Takayasu arteritis: Ankara 2008. Part II. Ann Rheum Dis 2010", "https://doi.org/10.1136/ard.2009.116657"]] },
    c: [
      ["!Çocukluğun en sık vasküliti; IgA birikimli küçük damar vasküliti", "en sık vaskülit|çocukluğun en sık|çocukluk çağının en sık|küçük damar vaskülit"],
      ["!Zorunlu ölçüt: alt ekstremite ağırlıklı palpabl purpura (trombositopeni yok)", "palpabl purpura|palpe edilebilen purpura|alt ekstremite|bacaklarda purpura|kalçada|trombosit normal|trombositopeni yok|trombosit sayısı normal"],
      ["Artrit/artralji", "artrit|artralji|eklem ağrı|eklem şiş"],
      ["Karın ağrısı; komplikasyon olarak invajinasyon, GİS kanaması", "invajinasyon|gis kanama|gastrointestinal kanama|melena"],
      ["!Böbrek tutulumu: hematüri/proteinüri, uzun dönem idrar ve tansiyon izlemi", "hsp nefrit|iga vaskülit nefrit|idrar takip|idrar izle|tansiyon takip|kan basıncı takip|aylarca idrar"],
      ["Sıklıkla üst solunum yolu enfeksiyonu sonrası", "üst solunum yolu enfeksiyonundan sonra|üst solunum yolu enfeksiyonu sonrası|enfeksiyonundan sonra başla"],
      ["Tedavi çoğunlukla destekleyici; ağır karın/böbrek tutulumunda kortikosteroid ve nefroloji", "destekleyici|analjezi|nsaid|parasetamol"]
    ]},
  { id: "ped-nefrotik-sendrom", tr: "Çocukluk çağı nefrotik sendromu", en: "Idiopathic nephrotic syndrome in children", cat: "nefro", lvl: 2,
    src: { k: [NE, RU], m: [IPNA,
      ["KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases. Kidney Int 2021", "https://doi.org/10.1016/j.kint.2021.05.021"]] },
    c: [
      ["!Tetrad: ağır proteinüri, hipoalbüminemi, ödem, hiperlipidemi", "proteinüri|hipoalbümin|albümin düşük|ödem|hiperlipidemi|kolesterol yüksek"],
      ["!Çocukta en sık neden minimal değişiklik hastalığı", "çocuklarda en sık|çocukta en sık|okul öncesi|steroide duyarlı|steroid duyarlı"],
      ["Klinik: göz kapağında başlayan ödem, asit", "göz kapağı|göz çevresi|periorbital|asit|skrotal ödem|jeneralize ödem"],
      ["!Tedavi: oral kortikosteroid (prednizolon); steroid yanıtı prognozu belirler", "oral prednizolon|prednizolon başla|ipna|steroide yanıt|steroid yanıtı"],
      ["Tipik olguda biyopsi gerekmez; steroid direnci veya atipik özellikte biyopsi", "biyopsi gerekmez|biyopsi yapmıyoruz|biyopsi yapılmaz|biyopsi endikas|tipik olgularda biyopsi"],
      ["Relaps sık; sık relapsta steroid koruyucu ilaç (levamizol, MMF, kalsinörin inhibitörü, rituksimab)", "levamizol|sık relaps|steroide bağımlı|steroid bağımlı|steroid koruyucu"],
      ["Komplikasyon: enfeksiyon (peritonit), tromboz", "spontan bakteriyel peritonit|pnömokok"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "ped-yenidogan-resusitasyonu", tr: "Yenidoğan resüsitasyonu", en: "Newborn resuscitation", cat: "yd", lvl: 3,
    src: { k: [AV, NE], m: [
      ["European Resuscitation Council Guidelines 2025: Newborn Resuscitation and Support of Transition of Infants at Birth. Resuscitation 2025", "https://doi.org/10.1016/j.resuscitation.2025.110766"],
      ["Part 5: Neonatal Resuscitation: 2025 American Heart Association and American Academy of Pediatrics Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation 2025", "https://doi.org/10.1161/CIR.0000000000001367"]] },
    c: [
      ["Doğum öncesi hazırlık, ekip ve ekipman kontrolü", "hazırlık|ekip|ekipman|brifing|malzeme kontrol"],
      ["Göbek kordonunun geç klemplenmesi (resüsitasyon gerekmeyende en az 60 sn)", "geç klemp|gecikmiş klemp|kordon klemp|altmış saniye|60 saniye|göbek kordon"],
      ["Isı kaybını önleme (hedef 36,5–37,5 °C); prematürede plastik sargı", "ısı kaybı|ısıtma|sıcak tut|kurula|plastik|36,5|otuz altı buçuk|hipotermi"],
      ["!İlk değerlendirme: solunum/tonus ve kalp hızı", "kalp hızı|nabız|solunum ve tonus|tonus|ağlıyor mu|solunum çaba"],
      ["!Etkin ventilasyon en önemli adım: hava yolunu aç, şişirme solukları, maske ile PPV", "ventilasyon|pozitif basınç|ppv|maske balon|şişirme solu|hava yolunu aç|maske ile"],
      ["Term bebekte oda havası (%21) ile başla; preterm daha yüksek; pulse oksimetre", "oda havası|yüzde yirmi bir|%21|pulse oksimetre|puls oksimetre|satürasyon"],
      ["!Etkin ventilasyona rağmen kalp hızı çok düşükse göğüs kompresyonu 3:1", "göğüs kompresyon|kalp masajı|3:1|üçe bir|üç kompresyon"],
      ["Adrenalin (tercihen umbilikal ven yolu)", "adrenalin|epinefrin|umbilikal ven|umbilikal kateter"]
    ]},
  { id: "ped-rds", tr: "Yenidoğanın respiratuvar distres sendromu", en: "Neonatal respiratory distress syndrome", cat: "yd", lvl: 3,
    src: { k: [AV, NE], m: [
      ["European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2022 Update. Neonatology 2023", "https://doi.org/10.1159/000528914"],
      ["European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2022 Update (PMC tam metin). Neonatology 2023", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10064400/"]] },
    c: [
      ["!Prematürede sürfaktan eksikliği → alveol kollapsı (hiyalen membran hastalığı)", "sürfaktan eksik|surfaktan eksik|hiyalen membran|alveol kollaps|atelektazi|prematür"],
      ["Risk: prematürite, maternal diyabet, erkek, sezaryen", "maternal diyabet|annede diyabet|diyabetik anne|erkek|sezaryen"],
      ["Klinik: doğumdan hemen sonra takipne, inleme, çekilmeler, siyanoz", "inleme|grunting|çekilme|retraksiyon|burun kanadı|takipne|siyanoz"],
      ["Grafi: buzlu cam görünümü ve hava bronkogramı", "buzlu cam|retikülogranüler|hava bronkogram"],
      ["!Önleme: doğum öncesi anneye kortikosteroid (betametazon)", "antenatal|doğum öncesi|anneye steroid|anneye kortikosteroid|betametazon|deksametazon"],
      ["!Doğumdan itibaren noninvaziv destek (CPAP)", "cpap|noninvaziv|non invaziv|sürekli pozitif"],
      ["!Gerekirse erken sürfaktan, tercihen LISA ile", "sürfaktan ver|surfaktan ver|sürfaktan uygula|lisa|minimal invaziv|insure|endotrakeal sürfaktan|sürfaktan tedavi"],
      ["Kafein; komplikasyonlar: BPD, pnömotoraks", "kafein|bronkopulmoner displazi|bpd|pnömotoraks"]
    ]},
  { id: "ped-nek", tr: "Nekrotizan enterokolit", en: "Necrotizing enterocolitis", cat: "yd", lvl: 3,
    src: { k: [AV, NE], m: [
      ["Necrotizing enterocolitis. N Engl J Med 2011", "https://doi.org/10.1056/NEJMra1005408"],
      ["Necrotizing enterocolitis (PubMed kaydı). N Engl J Med 2011", "https://pubmed.ncbi.nlm.nih.gov/21247316/"]] },
    c: [
      ["!Prematürenin en sık edinsel acil gastrointestinal hastalığı; barsak inflamasyonu ve nekrozu", "prematür|preterm|en sık edinsel|edinsel acil"],
      ["Risk: prematürite, mama ile beslenme, disbiyozis; anne sütü koruyucu", "mama ile|formula|anne sütü koruyucu|anne sütü riski azalt|disbiyoz|mikrobiyota"],
      ["!Klinik: karın distansiyonu, beslenme intoleransı, safralı kusma, kanlı dışkı", "beslenme intolerans|mide rezidü|kanlı dışkı"],
      ["!Direkt grafi: pnömatozis intestinalis, portal ven gazı, serbest hava", "pnömatozis|pnömotozis|intramural gaz|portal ven gaz|portal gaz|serbest hava|pnömoperiton"],
      ["Bell evrelemesi", "bell evrel|bell sınıflama|modifiye bell|bell"],
      ["!Tedavi: beslenmeyi kes, mide dekompresyonu, geniş spektrumlu IV antibiyotik", "oral kesil|beslenme kesil|beslenmeyi kes|ağızdan kes|orogastrik|beslenme kesilir|oral alım kesil|nazogastrik dekompres|mide dekompres|geniş spektrumlu antibiyotik"],
      ["Perforasyonda cerrahi (laparotomi/periton drenajı); geç dönem striktür, kısa barsak", "periton dren|kısa barsak|kısa bağırsak|barsak striktür"]
    ]},
  { id: "ped-fenilketonuri", tr: "Fenilketonüri ve yenidoğan taraması", en: "Phenylketonuria and newborn screening", cat: "met", lvl: 3,
    src: { k: [NE, RU], m: [
      ["The complete European guidelines on phenylketonuria: diagnosis and treatment. Orphanet J Rare Dis 2017", "https://doi.org/10.1186/s13023-017-0685-2"],
      ["Neonatal Tarama Programı halk eğitimi dokümanı. T.C. Sağlık Bakanlığı HSGM", "https://hsgm.saglik.gov.tr/depo/birimler/cocuk-ergen-sagligi-db/Dokumanlar/Egitim_Dokumanlari/Halk/NTP_Halk_Egitimi.pdf"]] },
    c: [
      ["!Fenilalanin hidroksilaz eksikliği, otozomal resesif", "fenilalanin hidroksilaz|pah eksik|pah gen|otozomal resesif|resesif"],
      ["Fenilalanin birikir, tirozin eksilir", "fenilalanin birik|fenilalanin yüksel|kanda fenilalanin|tirozin"],
      ["Tedavi edilmezse: ağır zihinsel yetersizlik, nöbet, küf kokusu, açık renk deri/saç, egzama", "zihinsel yetersiz|zihinsel gerilik olur|mental retard|entelektüel|küf koku|fare koku|açık renk|sarışın|egzama|nöbet"],
      ["Kofaktör (BH4) metabolizma bozukluğu ayırıcı tanıda", "bh4|tetrahidrobiopterin|biopterin|kofaktör"],
      ["!Türkiye Neonatal Tarama Programı: topuk kanı ile tarama (FKU, KH, biyotinidaz, KF, KAH, SMA)", "topuk kanı|yenidoğan tarama|neonatal tarama|tarama program|guthrie|biyotinidaz|biotinidaz"],
      ["!Tedavi: ömür boyu fenilalanini kısıtlı diyet + fenilalaninsiz amino asit karışımı", "fenilalanin kısıt|fenilalaninden fakir|fenilalaninsiz|özel diyet|protein kısıtlı diyet|amino asit karışım|fenilalaninsiz mama|ömür boyu diyet|ömür boyu kısıtlı"],
      ["Sapropterin (BH4 yanıtlı hastalarda), pegvaliaz (erişkin)", "sapropterin|pegvaliaz|kuvan"],
      ["Maternal FKU: gebelik öncesi sıkı kontrol (mikrosefali, kalp defekti riski)", "maternal fku|maternal fenilketon|gebelik öncesi|gebelikte|mikrosefali"]
    ]},
  { id: "ped-konjenital-hipotiroidi", tr: "Konjenital hipotiroidi ve taraması", en: "Congenital hypothyroidism screening and management", cat: "met", lvl: 3,
    src: { k: [NE, RU], m: [
      ["Congenital Hypothyroidism: A 2020–2021 Consensus Guidelines Update—An ENDO-European Reference Network Initiative. Thyroid 2021", "https://doi.org/10.1089/thy.2020.0333"],
      ["Congenital Hypothyroidism: Screening and Management. Pediatrics 2023", "https://doi.org/10.1542/peds.2022-060420"]] },
    c: [
      ["!Önlenebilir zihinsel yetersizliğin en sık nedenlerinden; en sık neden tiroid disgenezisi", "önlenebilir|disgenez|agenez|ektopik tiroid|dishormonogenez"],
      ["!Yenidoğan taramasında topuk kanında TSH (Türkiye'de 2006'dan beri programda)", "topuk kanı|yenidoğan tarama|neonatal tarama|tarama program|topukta tsh"],
      ["Doğumda çoğu belirtisiz; sonra uzamış sarılık, büyük fontanel, makroglossi, umbilikal herni, kabızlık, hipotoni", "doğumda belirtisiz|doğumda asemptomatik|uzamış sarılık|fontanel|makroglossi|büyük dil|umbilikal herni|göbek fıtığı"],
      ["!Tanı venöz serum TSH ve serbest T4 ile doğrulanır", "venöz serum|venöz tsh|serum tsh ve serbest t4|tanıyı doğrula|doğrularız|doğrulanır"],
      ["!Tedavi: hemen levotiroksin (ilk haftalarda başla, yüksek başlangıç dozu)", "hemen levotiroksin|levotiroksin başla|hemen başla|gecikmeden|geciktirme|iki hafta içinde|yüksek başlangıç"],
      ["Tablet ezilip verilir; soya, demir, kalsiyumla aynı anda verilmez", "ezil|soya|demir|kalsiyum"],
      ["Sık TSH/sT4 izlemi; geçici olgular için ileride yeniden değerlendirme", "geçici hipotiroidi|geçici olabilecek|yakın izlem|tsh ile izlem|üç yaş|3 yaş|yeniden değerlendir"]
    ]}
]
});
})();
