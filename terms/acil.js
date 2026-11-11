/* Acil tıp — Unprompted Tıp konu paketi
   Seçim mantığı: acil tıbbın kendine ait üç alanı — resüsitasyon (ERC 2025 / AHA 2025), travma (ATLS 11. baskı xABCDE)
   ve zehirlenmeler (Türkiye'de sık: CO/soba-şofben, organofosfat, mantar, akrep/yılan, metanol; UZEM 114).
   TUS'ta sık sorulan ve acil serviste ilk saatte hayat kurtaran algoritmalar seçildi; ACS, AF, inme, status epileptikus
   gibi kardiyoloji/nöroloji konuları bilerek alınmadı. ERC ile AHA farklıysa etikette ya da docs/klinik/acil.md'de belirtildi. */
UP.add({ id: "acil", subs: {
    res: "Resüsitasyon",
    trv: "Travma",
    zeh: "Zehirlenmeler"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "acil-temel-yasam-destegi", tr: "Erişkin temel yaşam desteği ve yüksek kaliteli KPR", en: "Adult basic life support and high-quality CPR", cat: "res", lvl: 1,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["European Resuscitation Council Guidelines 2025: Adult Basic Life Support. Resuscitation 2025", "https://doi.org/10.1016/j.resuscitation.2025.110771"],
          ["Part 7: Adult Basic Life Support: 2025 AHA Guidelines for CPR and ECC. Circulation 2025", "https://pubmed.ncbi.nlm.nih.gov/41122888/"]]
    },
    c: [
      ["!Yanıtsız, normal solumayan hasta = arrest; 112'yi ara", "yanıtsız|yanıt vermi|tepkisiz|bilinci kapalı|normal solu|solumuyor|nefes almıyor|agonal|gasping|112|yardım çağır|acil çağrı"],
      ["!Göğüs ortasına dakikada 100–120 bası", "100 120|dakikada 100|yüz yirmi|göğüs kompresyon|göğüs bası|göğse bası|kalp masaj|sternum"],
      ["!Bası derinliği 5–6 cm, tam geri gevşeme", "5 6 santim|5 ile 6|beş altı santim|6 santim|altı santim|derinlik|geri gevşe|geri dönüş|recoil|tam gevşe"],
      ["30:2 bası-solunum oranı", "30 2|30 a 2|otuza iki|30 bası|otuz bası|30 kompresyon|iki solunum|iki nefes"],
      ["!En erken defibrilasyon: OED", "oed|aed|otomatik eksternal|defibrilatör|defibrilasyon|şok ver"],
      ["Kesintileri en aza indir; 2 dakikada bir bası yapanı değiştir", "kesinti|ara verme|iki dakikada|2 dakikada|değiştir|yer değiş|yorul"],
      ["Hayatta kalma zinciri, görgü tanığı KPR ve dispeçer desteği", "hayatta kalma zincir|görgü tanığ|dispeçer|telefonla|halkın|toplum"]
    ]},
  { id: "acil-anafilaksi", tr: "Anafilaksi", en: "Anaphylaxis", cat: "res", lvl: 1,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["EAACI guidelines: Anaphylaxis (2021 update). Allergy 2022", "https://pubmed.ncbi.nlm.nih.gov/34343358/"],
          ["World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J 2020", "https://pubmed.ncbi.nlm.nih.gov/33204386/"]]
    },
    c: [
      ["!Ani başlayan, yaşamı tehdit eden sistemik aşırı duyarlılık reaksiyonu", "sistemik alerj|sistemik aşırı duyarlı|aşırı duyarlılık|hayatı tehdit|yaşamı tehdit|ige|mast hücre|histamin|alerjik reaksiyon"],
      ["Tetikleyiciler: besin, ilaç, arı-böcek sokması", "besin|fıstık|yiyecek|antibiyot|penisilin|arı|böcek sokma|kontrast|lateks"],
      ["!Deri-mukoza bulgusuna solunum ya da dolaşım tutulumunun eşlik etmesi", "ürtiker|kurdeşen|anjiyoödem|anjioödem|stridor|hırıltı|wheezing|bronkospazm|dudak şiş|dil şiş|tansiyon düş|hipotansiyon"],
      ["!İlk ve en önemli tedavi: IM adrenalin (erişkin 0,5 mg), uyluk ön-yan yüz", "adrenalin|epinefrin|intramüsküler|im|uyluk|vastus"],
      ["Yanıt yoksa 5 dakika sonra adrenalin tekrarı", "5 dakika sonra|beş dakika sonra|ikinci doz|tekrar doz|dozu tekrar"],
      ["Pozisyon (sırtüstü, bacaklar yukarı), oksijen, IV sıvı", "sırtüstü|sırt üstü|bacaklarını kaldır|bacakları kaldır|bacaklar yukarı|sıvı yükle|kristaloid"],
      ["Antihistaminik ve steroid ikinci planda; bifazik reaksiyon için gözlem, otoenjektör", "antihistamin|feniramin|steroid|metilprednizolon|hidrokortizon|bifazik|otoenjektör|oto enjektör|kalem"],
      ["Dirençli anafilakside IV adrenalin infüzyonu (uzman)", "dirençli anafilaksi|refrakter anafilaksi|adrenalin infüzyon|glukagon"]
    ]},
  { id: "acil-sok-tipleri", tr: "Şok tipleri ve ilk yaklaşım", en: "Types of shock", cat: "res", lvl: 1,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["Vincent JL, De Backer D. Circulatory shock. N Engl J Med 2013", "https://doi.org/10.1056/NEJMra1208943"],
          ["Consensus on circulatory shock and hemodynamic monitoring. Task force of the European Society of Intensive Care Medicine. Intensive Care Med 2014", "https://pmc.ncbi.nlm.nih.gov/articles/PMC4239778/"]]
    },
    c: [
      ["!Tanım: yetersiz doku perfüzyonu/oksijen kullanımı, laktat yüksekliği", "perfüzyon|oksijen sunum|oksijen kullan|laktat|hücresel|doku hipoks|dolaşım yetmez"],
      ["!Hipovolemik şok: kanama ya da sıvı kaybı", "hipovolem|sıvı kayb|hacim kayb|dolaşan hacim"],
      ["!Kardiyojenik şok: pompa yetersizliği", "kardiyojen|pompa yetmez|pompa yetersiz|kontraktil"],
      ["!Distribütif şok: sepsis, anafilaksi, nörojenik", "distribüt|dağılım şok|septik|sepsis|anafilak|nörojenik"],
      ["Obstrüktif şok: tamponad, tansiyon pnömotoraks, masif pulmoner emboli", "obstrüktif şok|tamponad|pnömotoraks|pulmoner emboli"],
      ["Klinik pencereler: bilinç, deri (soğuk, alacalı), idrar çıkışı", "bilinç bulanık|soğuk|kapiller dolum|alacalı|mottling|idrar çıkış|oligüri"],
      ["Ayırıcı tanıda yatak başı ultrason/eko", "eko|ekokardiyo|ultrason|usg|pocus|vena kava"],
      ["Tedavi: sıvı, vazopresör (noradrenalin), nedene yönelik", "noradrenalin|norepinefrin|vazopresör|inotrop|dobutamin|nedene yönelik|altta yatan"]
    ]},
  { id: "acil-atls-birincil-degerlendirme", tr: "Travmada birincil değerlendirme (ATLS xABCDE)", en: "ATLS primary survey (xABCDE)", cat: "trv", lvl: 1,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["ATLS 11: Advanced Trauma Life Support 11th Edition. American College of Surgeons 2025", "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"],
          ["The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023", "https://doi.org/10.1186/s13054-023-04327-7"]]
    },
    c: [
      ["!xABCDE: en hızlı öldüren sorundan başlayarak sırayla değerlendir", "xabcde|birincil değerlendir|birincil bakı|primer bakı|primary survey|öncelik sırası"],
      ["!x: hayatı tehdit eden dış kanamayı hemen durdur (bası, turnike)", "turnike|dış kanama|eksanguin|direkt bası|doğrudan bası|hemostatik|kanama kontrol"],
      ["A: servikal omurga korunarak hava yolu", "servikal|boyun koru|boyunluk|çene itme|jaw thrust"],
      ["B: solunum; tansiyon/açık pnömotoraks, yelken göğüs", "açık pnömotoraks|yelken göğüs|flail|göğsü aç|solunum değerlendir"],
      ["!C: dolaşım; kanama odağı, kan ürünleri", "kan ürün|transfüzyon|geniş damar|kanama odağ"],
      ["D: nörolojik durum (GKS, pupiller)", "glasgow|gks|gcs|nörolojik durum"],
      ["E: hastayı tamamen soy, hipotermiden koru", "soy|soyup|soyul|açığa|exposure|battaniye|log roll"],
      ["Ek incelemeler (FAST, grafi) ve ardından ikincil bakı", "fast|pelvis grafi|akciğer grafi|röntgen|ikincil bakı|ikincil değerlendir|sekonder|baştan ayağa"]
    ]},
  { id: "acil-tansiyon-pnomotoraks", tr: "Tansiyon pnömotoraks", en: "Tension pneumothorax", cat: "trv", lvl: 1,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["Laan DV et al. Chest wall thickness and decompression failure: a systematic review and meta-analysis comparing anatomic locations in needle thoracostomy. Injury 2016", "https://doi.org/10.1016/j.injury.2015.11.045"],
          ["European Resuscitation Council Guidelines 2025: Special Circumstances in Resuscitation. Resuscitation 2025", "https://doi.org/10.1016/j.resuscitation.2025.110753"]]
    },
    c: [
      ["!Tek yönlü kapak mekanizması: plevral basınç artar, mediasten itilir, venöz dönüş azalır", "kapak|valv|tek yön|mediasten|venöz dönüş|basınç art|plevral basınç"],
      ["!Tanı kliniktir; grafi beklenmez", "klinik tanı|klinik olarak|grafi bekle|röntgen bekle|görüntüleme bekle|grafiyi bekle|röntgeni bekle"],
      ["Bulgular: solunum sıkıntısı, hipotansiyon, solunum sesi kaybı, boyun ven dolgunluğu, trakea deviasyonu", "solunum ses|hipotansiyon|juguler|boyun ven|trakea|deviasyon|hipersonor|hiperrezonans"],
      ["!Acil iğne dekompresyonu: erişkinde 4.–5. interkostal aralık, ön/orta aksiller hat", "iğne|dekompres|torasentez|torakosentez|aksiller hat|interkostal|dördüncü|beşinci"],
      ["Klasik yer 2. interkostal aralık orta klavikula hattı; kalın göğüs duvarında başarısızlık fazla", "ikinci interkostal|ikinci aralık|midklavikül|orta klavikül|göğüs duvarı kalın|başarısız"],
      ["Parmak torakostomisi (özellikle pozitif basınçlı ventilasyonda)", "parmak|finger|pozitif basınç|mekanik ventil"],
      ["!Kesin tedavi: göğüs tüpü (tüp torakostomi)", "göğüs tüp|toraks tüp|tüp torakostomi|göğüs dren|toraks dren"],
      ["Travmatik arrestte bilateral dekompresyon düşünülür", "bilateral|iki taraflı|her iki|travmatik arrest|travmatik kardiyak arrest"]
    ]},
  { id: "acil-fast-efast", tr: "Travmada FAST ve eFAST", en: "FAST and eFAST in trauma", cat: "trv", lvl: 1,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Stengel D et al. Point-of-care ultrasonography for diagnosing thoracoabdominal injuries in patients with blunt trauma. Cochrane Database Syst Rev 2018", "https://cochranelibrary.com/cdsr/doi/10.1002/14651858.CD012669.pub2/information/en"],
          ["Kirkpatrick AW et al. Hand-held thoracic sonography for detecting post-traumatic pneumothoraces: the Extended Focused Assessment with Sonography for Trauma (EFAST). J Trauma 2004", "https://pubmed.ncbi.nlm.nih.gov/15345974/"]]
    },
    c: [
      ["!Yatak başı odaklı ultrasonla serbest sıvı (kan) arama", "ultrason|usg|ultrasonografi|sonografi|serbest sıvı|serbest mayi|yatak başı|pocus"],
      ["!Dört pencere: Morison, splenorenal, pelvis, subksifoid perikard", "morison|hepatorenal|splenorenal|perisplenik|pelvik pencere|suprapubik|douglas|subksifoid|subkostal"],
      ["!eFAST: akciğer kayması kaybıyla pnömotoraks, hemotoraks", "efast|kayma|sliding|akciğer nokta|lung point|barkod|hemotoraks"],
      ["İnstabil hasta + pozitif FAST: acil laparotomi", "laparotomi|ameliyathane|acil cerrahi|ameliyata"],
      ["Stabil hastada BT ile ileri görüntüleme", "bt|bete|tomografi"],
      ["Negatif FAST yaralanmayı dışlamaz; özgüllük yüksek, duyarlılık sınırlı; tekrarla", "dışlamaz|ekarte etmez|ekarte ettirmez|duyarlılığı|duyarlılık|özgüllü|tekrarla|seri"],
      ["Perikard tamponadını gösterir", "tamponad|perikardiyal sıvı|perikardiyal efüzyon|perikart"]
    ]},
  { id: "acil-parasetamol", tr: "Parasetamol zehirlenmesi", en: "Paracetamol (acetaminophen) poisoning", cat: "zeh", lvl: 1,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Dart RC et al. Management of acetaminophen poisoning in the US and Canada: a consensus statement. JAMA Netw Open 2023", "https://doi.org/10.1001/jamanetworkopen.2023.27739"],
          ["Chiew AL et al. Updated guidelines for the management of paracetamol poisoning in Australia and New Zealand. Med J Aust 2020", "https://www.mja.com.au/journal/2020/212/4/updated-guidelines-management-paracetamol-poisoning-australia-and-new-zealand"]]
    },
    c: [
      ["!Toksik metabolit NAPQI; glutatyon tükenince sentrilobüler karaciğer nekrozu", "napqi|glutatyon|glutation|toksik metabolit|sentrilobüler|hepatotoks|karaciğer nekroz"],
      ["İlk saatlerde belirti az; karaciğer enzimleri sonra yükselir", "sessiz|asemptomatik|belirti vermez|bulgu vermez|belirti az|enzimler sonra|enzimler geç|geç yüksel"],
      ["!Akut alımda 4. saat düzeyi Rumack-Matthew nomogramına işlenir", "rumack|matthew|nomogram|4 saat|dördüncü saat|dört saat"],
      ["Tedavi çizgisi 4. saatte 150 mg/L", "150|yüz elli"],
      ["!Antidot N-asetilsistein (NAC)", "asetilsistein|asetil sistein|nac|n asetil"],
      ["8 saati geçmişse ya da düzey 8 saat içinde gelmeyecekse NAC'yi beklemeden başla", "8 saat|sekiz saat|beklemeden|düzeyi bekleme|hemen başla"],
      ["Erken başvuruda aktif kömür", "aktif kömür|aktive kömür|aktif karbon|charcoal"],
      ["Ağır karaciğer yetmezliğinde nakil merkeziyle görüşme", "king|kings|nakil kriter|nakil ölçüt|fulminan"]
    ]},
  { id: "acil-karbonmonoksit", tr: "Karbonmonoksit zehirlenmesi", en: "Carbon monoxide poisoning", cat: "zeh", lvl: 1,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Clinical Policy: Critical Issues in the Evaluation and Management of Adult Patients Presenting to the Emergency Department With Acute Carbon Monoxide Poisoning. Ann Emerg Med 2025", "https://doi.org/10.1016/j.annemergmed.2024.12.005"],
          ["Rose JJ et al. Carbon monoxide poisoning: pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med 2017", "https://pmc.ncbi.nlm.nih.gov/articles/5363978/"]]
    },
    c: [
      ["!Kaynak: soba, şofben, kapalı ortamda yanma; kışın aile boyu zehirlenme", "soba|şofben|kombi|mangal|kapalı ortam|baca|kışın|kış ay|aile boyu|aynı evde"],
      ["!Hemoglobine yüksek afinite: karboksihemoglobin, doku hipoksisi", "karboksihemoglobin|cohb|afinite|bağlan|doku hipoks|sitokrom|oksijen taşı"],
      ["Belirtiler nonspesifik: baş ağrısı, bulantı, baş dönmesi, bilinç bozukluğu", "baş ağrı|bulantı|baş dönme|grip benzeri|nonspesifik|özgül olmayan"],
      ["!Pulse oksimetre yanıltıcı; COHb CO-oksimetrili kan gazıyla ölçülür", "pulse oksimetre|puls oksimetre|nabız oksimetre|yanıltıcı|kooksimetri|co oksimetri|kan gaz"],
      ["!Tedavi: %100 oksijen (rezervuarlı, geri solumasız maske)", "100 oksijen|yüzde 100|rezervuarlı|geri solumasız|geri soluma|normobarik|nonrebreather|yüksek akım"],
      ["Ağır olguda hiperbarik oksijen", "hiperbarik|hbo|basınç oda"],
      ["Gecikmiş nöropsikiyatrik sekel", "gecikmiş|nöropsikiyatrik|sekel|bellek|bilişsel|kognitif"],
      ["Yangında siyanür; miyokard hasarı için EKG/troponin", "siyanür|yangın|ekg|troponin|miyokard"]
    ]},
  { id: "acil-opioid", tr: "Opioid zehirlenmesi", en: "Opioid toxicity", cat: "zeh", lvl: 1,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Boyer EW. Management of opioid analgesic overdose. N Engl J Med 2012", "https://pubmed.ncbi.nlm.nih.gov/23034040/"],
          ["Part 10: Adult and Pediatric Special Circumstances of Resuscitation: 2025 AHA Guidelines for CPR and ECC. Circulation 2025", "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation"]]
    },
    c: [
      ["!Üçlü: miyozis, solunum depresyonu, bilinç azalması", "miyozis|myozis|toplu iğne|iğne ucu|pinpoint|solunum depres|bradipne|solunum sayısı"],
      ["!Öncelik ventilasyon: balon-valf-maske ile solunum desteği", "balon|ambu|maske|ventilasyon|solunum desteği|soluk ver"],
      ["!Antidot nalokson (IV, IM, intranazal)", "nalokson|naloxone|narcan|intranazal|burun"],
      ["Düşük dozla titrasyon; ani yoksunluk riski", "yoksunluk|withdrawal|titre|düşük doz|ajitasyon"],
      ["Nalokson etkisi birçok opioidden kısa: yeniden sedasyon, gözlem/infüzyon", "kısa etkili|etki süresi|yeniden sedasyon|yeniden uyku|tekrar uyku|gözlem|infüzyon|metadon|uzun etkili"],
      ["Arrestte KPR öncelikli; nalokson resüsitasyonu geciktirmemeli", "kpr|kardiyopulmoner|kalp masaj|göğüs bası|geciktirme"],
      ["Özel durumlar: fentanil, tramadol (nöbet), aspirasyon, akciğer ödemi", "fentanil|tramadol|eroin|morfin|kodein|aspirasyon|akciğer ödem"],
      ["Toplum temelli nalokson erişimi", "toplum|halkın|eğitimli|evde nalokson|kit|herkes"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "acil-iyd-ritimler", tr: "Şoklanabilir ve şoklanamayan ritimler (İleri yaşam desteği algoritması)", en: "Shockable vs non-shockable rhythms (ALS algorithm)", cat: "res", lvl: 2,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["European Resuscitation Council Guidelines 2025: Adult Advanced Life Support. Resuscitation 2025", "https://pubmed.ncbi.nlm.nih.gov/41117572/"],
          ["Part 9: Adult Advanced Life Support: 2025 AHA Guidelines for CPR and ECC. Circulation 2025", "https://professional.heart.org/en/guidelines-statements/part-9-adult-advanced-life-support-2025-american-heart-association-guidelinescir0000000000001376"]]
    },
    c: [
      ["!Şoklanabilir: VF ve nabızsız VT → hemen defibrilasyon", "ventrikül fibrilasyon|ventriküler fibrilasyon|vf|nabızsız vt|nabızsız ventrikül|şoklanabilir|şok uygulanabilir|defibrile edilebilir"],
      ["!Şoklanamayan: asistoli ve nabızsız elektriksel aktivite", "asistoli ve|nabızsız elektriksel|nea|pea|şoklanamayan|şok uygulanamayan|şok uygulanmayan"],
      ["Şoktan hemen sonra 2 dakika KPR, sonra ritim kontrolü", "iki dakika|2 dakika|ritim kontrol|ritim analiz|hemen bası|hemen kpr"],
      ["!Adrenalin 1 mg, 3–5 dakikada bir; şoklanamayanda hemen, VF'de 3. şoktan sonra", "adrenalin 1|1 mg|bir miligram|3 5 dakika|üç beş dakika"],
      ["Dirençli VF/nVT: 3. şoktan sonra amiodaron 300 mg (alternatif lidokain)", "amiodaron|amiodarone|lidokain|300 mg|üç yüz"],
      ["!Geri döndürülebilir nedenler: 4H–4T", "4h|dört h|4t|dört t|hipovolemi|hiperkalemi|tamponad|tromboz|toksin|geri döndürülebilir"],
      ["İleri hava yolu ve dalga formlu kapnografi", "kapnograf|etco2|end tidal|karbondioksit|entübasyon|supraglottik|ileri hava"]
    ]},
  { id: "acil-hemorajik-sok-masif-transfuzyon", tr: "Hemorajik şok ve masif transfüzyon", en: "Hemorrhagic shock and massive transfusion", cat: "trv", lvl: 2,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023", "https://doi.org/10.1186/s13054-023-04327-7"],
          ["Holcomb JB et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio and mortality in patients with severe trauma (PROPPR). JAMA 2015", "https://doi.org/10.1001/jama.2015.12"]]
    },
    c: [
      ["!Travma hastasında şokun en sık nedeni kanamadır", "hemorajik şok|hipovolemik şok|kanıyor kabul|şokun en sık neden|kanamaya bağlı şok"],
      ["ATLS kanama sınıfları (I–IV)", "dört sınıf|kanama sınıf|sınıf 1|class|dört evre"],
      ["!Kanama kontrolü öncelikli: turnike, pelvik bağlayıcı, hasar kontrol cerrahisi, anjiyoembolizasyon", "turnike|kanama kontrol|hasar kontrol|damage control|kaynağı durdur|cerrahi kontrol"],
      ["Permisif hipotansiyon; kristaloidi sınırla", "permisif|izin verilen|kontrollü hipotansiyon|kristaloid|sıvıyı sınırla|sıvı kısıtla"],
      ["!Masif transfüzyon protokolü: plazma-trombosit-eritrosit 1:1:1", "masif transfüzyon|mtp|1 1 1|bire bir|birebir|dengeli|taze donmuş|tdp|plazma|trombosit"],
      ["!Traneksamik asit ilk 3 saatte (CRASH-2)", "traneksamik|txa|transamin|crash|3 saat|üç saat"],
      ["Ölümcül üçlü: hipotermi, asidoz, koagülopati", "ölümcül üçlü|lethal triad|asidoz|dilüsyonel"],
      ["Kalsiyum ve viskoelastik testler (ROTEM/TEG), fibrinojen", "kalsiyum|rotem|teg|viskoelastik"],
      ["Yanıtı laktat ve baz açığıyla izle", "laktat|baz açığ|baz defisit"]
    ]},
  { id: "acil-servikal-omurga-goruntuleme", tr: "Servikal omurga görüntüleme kararı (NEXUS ve Kanada kuralı)", en: "Cervical spine imaging decision rules (NEXUS, Canadian C-spine rule)", cat: "trv", lvl: 2,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["Hoffman JR et al. Validity of a set of clinical criteria to rule out injury to the cervical spine in patients with blunt trauma (NEXUS). N Engl J Med 2000", "https://read.qxmd.com/read/10891516/validity-of-a-set-of-clinical-criteria-to-rule-out-injury-to-the-cervical-spine-in-patients-with-blunt-trauma-national-emergency-x-radiography-utilization-study-group"],
          ["Stiell IG et al. The Canadian C-spine rule versus the NEXUS low-risk criteria in patients with trauma. N Engl J Med 2003", "https://www.QxMD.com/PubMed/14695411"]]
    },
    c: [
      ["!NEXUS beş ölçüt: orta hat hassasiyeti, fokal defisit, bilinç bozukluğu, intoksikasyon, dikkat dağıtıcı yaralanma yoksa görüntüleme gerekmez", "nexus|orta hat|fokal nörolojik|fokal defisit|intoksik|sarhoş|alkollü|dikkat dağıtıcı|distraktif|distracting"],
      ["!Kanada servikal omurga kuralı: uyanık ve stabil hastada", "kanada|canadian|ccr|c spine rule"],
      ["!Yüksek risk: 65 yaş ve üstü, tehlikeli mekanizma, kol-bacakta parestezi", "65 yaş|altmış beş|tehlikeli mekanizma|parestezi|uyuşma|karıncalan|yüksekten düş|dalış|aksiyel yük|devril|fırla"],
      ["Düşük risk varsa aktif boyun rotasyonu (45°) denenir", "45 derece|kırk beş|rotasyon|boynunu çevir|başını çevir|düşük risk"],
      ["Duyarlılığı yüksek kurallar; gereksiz görüntüleme ve radyasyonu azaltır", "duyarlı|sensitivite|gereksiz|radyasyon|özgüllü"],
      ["Görüntüleme gerekirse servikal BT", "bt|bete|tomografi"],
      ["Nörolojik defisit/bağ hasarı şüphesinde MR", "mr|emar|manyetik|bağ hasar|ligament|omurilik|spinal kord"],
      ["Değerlendirme tamamlanana dek hareket kısıtlaması", "boyunluk|kolar|hareket kısıt|immobiliz|stabiliz"]
    ]},
  { id: "acil-yanik", tr: "Yanıkta ilk yaklaşım ve sıvı resüsitasyonu", en: "Burns: initial management and fluid resuscitation", cat: "trv", lvl: 2,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Cartotto R et al. American Burn Association clinical practice guidelines on burn shock resuscitation. J Burn Care Res 2024", "https://doi.org/10.1093/jbcr/irad125"],
          ["ISBI Practice Guidelines for Burn Care. Burns 2016", "https://pubmed.ncbi.nlm.nih.gov/27542292/"]]
    },
    c: [
      ["!Yanma sürecini durdur: akan serin su; hipotermiden koru", "akan su|serin su|soğuk su|musluk|soğut|yanma süreci|hipoterm"],
      ["!Hava yolu ve inhalasyon hasarı (kurum, ses kısıklığı), CO ve siyanür", "inhalasyon|duman|kurum|ses kısık|stridor|yüz yanığ|entübasyon|karbonmonoksit|siyanür"],
      ["!Yanık yüzdesi: dokuzlar kuralı, Lund-Browder, avuç içi yaklaşık %1", "dokuzlar|dokuz kural|lund|browder|avuç|yüzey alan|tvya|tbsa|yanık yüzde"],
      ["Derinlik: yüzeyel, kısmi kalınlık, tam kalınlık (yüzdeye yüzeyel yanık katılmaz)", "yüzeyel|kısmi kalınlık|tam kalınlık|birinci derece|ikinci derece|üçüncü derece|derinlik"],
      ["!Sıvı formülü: Parkland 4 mL/kg/%; ABA 2023 2 mL/kg/% ile başlamayı önerir; laktatlı Ringer", "parkland|4 ml|2 ml|kilogram başına|laktatlı ringer|ringer laktat|kristaloid"],
      ["Hedef: erişkinde idrar çıkışı 0,5 mL/kg/saat; aşırı sıvıdan kaçın", "idrar|0 5 ml|yarım ml|saatlik idrar|aşırı sıvı|fluid creep|aşırı resüsit"],
      ["Çevresel derin yanıkta eskarotomi", "eskarotomi|eskar|çevresel"],
      ["Yanık merkezine sevk ölçütleri", "yanık merkez|yanık ünite|sevk"]
    ]},
  { id: "acil-organofosfat", tr: "Organofosfat zehirlenmesi", en: "Organophosphate poisoning", cat: "zeh", lvl: 2,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2493390"],
          ["Zehirlenme Tanı ve Tedavi Rehberi (Birinci basamağa yönelik). T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü 2025", "https://hsgm.saglik.gov.tr/media/attachments/2025/07/03/zehirlenme-tani-ve-tedavi-rehberi.pdf"]]
    },
    c: [
      ["!Asetilkolinesteraz inhibisyonu → kolinerjik kriz", "asetilkolinesteraz|kolinesteraz|kolinerjik|asetilkolin birik"],
      ["Kaynak: tarım ilacı/insektisit (Türkiye'de kırsal, kasıtlı ya da kaza)", "tarım ilac|insektisit|pestisit|böcek ilac|zirai|tarla"],
      ["!Muskarinik bulgular: miyozis, bronkore, bradikardi, salivasyon, ishal (SLUDGE/DUMBELS)", "bronkore|salya|salivasyon|sludge|dumbels|lakrimasyon|idrar kaçır|aşırı sekresyon|bradikardi"],
      ["Nikotinik bulgular: fasikülasyon, kas güçsüzlüğü, solunum yetmezliği", "nikotinik|fasikül|kas güçsüz|solunum kas|solunum yetmez"],
      ["Tanı: plazma (bütiril) ve eritrosit kolinesteraz düzeyi", "plazma kolinesteraz|psödokolinesteraz|eritrosit|bütiril|butiril|kolinesteraz düzey"],
      ["!Atropin: akciğer sekresyonları kuruyana dek dozu artırarak (ikiye katlayarak) titre et", "atropin|ikiye katla|iki katı|akciğer temiz|sekresyon kuru|kuruyana"],
      ["Pralidoksim (oksim) tedavisi", "pralidoksim|oksim"],
      ["!Dekontaminasyon ve sağlık personelinin korunması", "dekontamin|elbise|yıka|eldiven|koruyucu ekipman|personel"],
      ["Ara sendrom ve gecikmiş nöropati", "ara sendrom|intermediate|gecikmiş nöropati|polinöropati"]
    ]},
  { id: "acil-trisiklik", tr: "Trisiklik antidepresan zehirlenmesi", en: "Tricyclic antidepressant poisoning", cat: "zeh", lvl: 2,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Lavonas EJ et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation 2023", "https://pubmed.ncbi.nlm.nih.gov/37721023/"],
          ["Kerr GW, McGuffie AC, Wilkie S. Tricyclic antidepressant overdose: a review. Emerg Med J 2001", "https://pubmed.ncbi.nlm.nih.gov/11435353/"]]
    },
    c: [
      ["!Hızlı sodyum kanalı blokajı → QRS genişlemesi", "sodyum kanal|qrs"],
      ["QRS 100 ms üzerinde nöbet/aritmi riski artar; aVR'de belirgin R", "100 ms|100 milisaniye|yüz milisaniye|avr|r dalga"],
      ["Antikolinerjik bulgular: midriyazis, taşikardi, kuru-sıcak deri, idrar retansiyonu, deliryum", "antikolinerjik|midriyaz|kuru deri|kızarık|retansiyon|deliryum"],
      ["Alfa blokajı ile hipotansiyon", "alfa|hipotansiyon"],
      ["!Sodyum bikarbonat bolus (1–2 mEq/kg), QRS daralana dek", "bikarbonat|nahco3|alkaliniz|alkalileş"],
      ["Nöbette benzodiazepin; fenitoin, fizostigmin ve flumazenilden kaçın", "benzodiazepin|diazepam|midazolam|lorazepam|fenitoin|fizostigmin|flumazenil"],
      ["!Ani kötüleşme olası: EKG ve sürekli monitör izlemi", "ekg|elektrokardiyo|monitör|kötüleş"],
      ["Hava yolu güvenliyse erken aktif kömür", "aktif kömür|aktive kömür|charcoal"],
      ["Dirençli olguda hipertonik salin, lipid emülsiyonu, ECMO", "hipertonik|lipid|ecmo|ekstrakorporeal"]
    ]},
  { id: "acil-metanol", tr: "Metanol zehirlenmesi", en: "Methanol poisoning", cat: "zeh", lvl: 2,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Roberts DM et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning: a systematic review and consensus statement (EXTRIP). Crit Care Med 2015", "https://doi.org/10.1097/CCM.0000000000000708"],
          ["Zehirlenme Tanı ve Tedavi Rehberi (Birinci basamağa yönelik). T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü 2025", "https://hsgm.saglik.gov.tr/media/attachments/2025/07/03/zehirlenme-tani-ve-tedavi-rehberi.pdf"]]
    },
    c: [
      ["!Kaynak: sahte/kaçak içki, kolonya; Türkiye'de toplu salgınlar", "sahte içki|kaçak içki|sahte alkol|kaçak alkol|kolonya|salgın|toplu"],
      ["!Toksisite formik asitten (alkol dehidrogenaz ile metabolizma)", "formik|format|formaldehit|alkol dehidrogenaz|adh"],
      ["Gecikmeli başlangıç: alımdan saatler sonra belirti", "gecikmeli|latent|saatler sonra|geç başla"],
      ["!Görme bozukluğu (kar fırtınası, körlük), optik nöropati", "görme|bulanık|kar fırtına|körlük|optik"],
      ["!Yüksek anyon açıklı metabolik asidoz ve ozmolar açık", "anyon açı|anyon gap|ozmolar|ozmolal|metabolik asidoz"],
      ["Antidot: fomepizol ya da etanol (ADH blokajı)", "fomepizol|etanol|etil alkol"],
      ["Hemodiyaliz: koma, nöbet, yeni görme kaybı, ağır asidoz (pH ≤7,15)", "hemodiyaliz|diyaliz|7 15|ekstrakorporeal"],
      ["Folik/folinik asit, bikarbonat", "folik|folinik|lökovorin|bikarbonat"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "acil-arrest-sonrasi-bakim", tr: "Kardiyak arrest sonrası bakım", en: "Post-cardiac arrest care", cat: "res", lvl: 3,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["European Resuscitation Council and European Society of Intensive Care Medicine guidelines 2025: post-resuscitation care. Resuscitation 2025", "https://pubmed.ncbi.nlm.nih.gov/41123621/"],
          ["European Resuscitation Council Guidelines 2025 Executive Summary. Resuscitation 2025", "https://pubmed.ncbi.nlm.nih.gov/41117573/"]]
    },
    c: [
      ["!Oksijen SpO2 %94–98 ve normokapni; hiperoksiden kaçın", "94 98|doksan dört|normokapni|hiperoksi|oksijen titr|paco2|normal karbondioksit"],
      ["!Hipotansiyondan kaçın: sistolik >100 ya da ortalama arter basıncı >60–65 mmHg", "sistolik 100|100 mmhg|ortalama arter|oab|map|vazopresör|noradrenalin|norepinefrin"],
      ["!Sıcaklık kontrolü: komadaki hastada ateşi önle (≤37,5 °C, en az 72 saat)", "37 5|otuz yedi buçuk|ateşi önle|ateş önle|ateşin önlen|sıcaklık kontrol|hedeflenmiş sıcaklık|ateşten kaçın"],
      ["ST yükselmesinde acil koroner anjiyografi", "koroner anjiyo|anjiyografi|anjiografi|perkütan|st yükselme|stemi"],
      ["Nöbetleri tedavi et (levetirasetam/valproat), profilaksi yok", "levetirasetam|valproat|nöbet|konvülziyon|eeg"],
      ["!Nöroprognoz: en erken 72 saatte, multimodal", "prognoz|yetmiş iki|ssep|somatosensoriyel|nöron spesifik|nse|pupil|multimodal|çok yönlü"],
      ["Taburculuk sonrası rehabilitasyon ve izlem", "rehabilit|taburcu|uzun dönem|yaşam kalite"]
    ]},
  { id: "acil-periarrest-aritmiler", tr: "Periarrest aritmiler: bradikardi ve taşikardi algoritmaları", en: "Peri-arrest arrhythmias: bradycardia and tachycardia algorithms", cat: "res", lvl: 3,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["European Resuscitation Council Guidelines 2025: Adult Advanced Life Support. Resuscitation 2025", "https://pubmed.ncbi.nlm.nih.gov/41117572/"],
          ["Part 9: Adult Advanced Life Support: 2025 AHA Guidelines for CPR and ECC. Circulation 2025", "https://professional.heart.org/en/guidelines-statements/part-9-adult-advanced-life-support-2025-american-heart-association-guidelinescir0000000000001376"]]
    },
    c: [
      ["!Önce olumsuz (instabilite) bulgular: şok, senkop, miyokard iskemisi, kalp yetersizliği", "stabil olup|stabil mi|instabilse|stabil olmayan|unstable|olumsuz bulgu|tehlike bulgu|senkop|bayılma|miyokard iskemi|kalp yetersiz|kalp yetmez"],
      ["!Bradikardide atropin (AHA 2025: 1 mg, en çok 3 mg); yanıtsızsa transkütan pace", "atropin|pace|pacing|transkutan|transkütan|pil"],
      ["Atropine dirençte adrenalin ya da dopamin infüzyonu", "dopamin|adrenalin infüzyon|epinefrin infüzyon|izoprenalin|izoproterenol"],
      ["Asistoli riski: Mobitz II, tam blok, ventriküler duraklama", "mobitz|tam blok|üçüncü derece|duraklama|asistoli risk"],
      ["!İnstabil taşikardide senkronize kardiyoversiyon (sedasyonla)", "senkronize|senkron"],
      ["Dar QRS düzenli: vagal manevra, adenozin", "vagal|valsalva|karotis masaj|adenozin|svt|supraventrikül"],
      ["Geniş QRS düzenli: VT kabul et, amiodaron", "geniş qrs|geniş kompleks|ventriküler taşikardi|ventrikül taşikardi"],
      ["Düzensiz dar QRS (AF): hız kontrolü", "hız kontrol|beta bloker|diltiazem|atriyal fibrilasyon"]
    ]},
  { id: "acil-hizli-ardisik-entubasyon", tr: "Hızlı ardışık entübasyon (RSI)", en: "Rapid sequence intubation", cat: "res", lvl: 3,
    src: {
      k: ["Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["Acquisto NM et al. Society of Critical Care Medicine clinical practice guidelines for rapid sequence intubation in the critically ill adult patient. Crit Care Med 2023", "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-rapid-sequence-intubation"],
          ["Higgs A et al. Guidelines for the management of tracheal intubation in critically ill adults (DAS/ICS/FICM/RCoA). Br J Anaesth 2018", "https://pubmed.ncbi.nlm.nih.gov/29406182/"]]
    },
    c: [
      ["!Preoksijenasyon ve apneik oksijenasyon", "preoksijen|pre oksijen|apneik|nazal kanül|yüksek akım|denitrojen"],
      ["!İndüksiyon ajanı (ketamin, etomidat) ile kas gevşeticinin ardışık hızlı verilmesi", "ketamin|etomidat|propofol|indüksiyon"],
      ["!Nöromüsküler bloker: süksinilkolin ya da rokuronyum", "süksinil|suksinil|süksametonyum|rokuronyum|roküronyum|paralit|kas gevşet|nöromüsküler bloke"],
      ["Süksinilkolinde hiperkalemi riski (yanık, kas hastalığı, hiperkalemi)", "hiperkalemi|potasyum|malign hipertermi|kas hastalığı|kontrendik"],
      ["Hazırlık: ekipman, kontrol listesi, pozisyon, plan B", "hazırlık|kontrol liste|checklist|pozisyon|koklama|sniff|ekipman|aspiratör|plan b"],
      ["Video laringoskop ve bujinin erken kullanımı", "video|laringoskop|buji|bougie"],
      ["!Tüp yerinin dalga formlu kapnografiyle doğrulanması", "kapnograf|etco2|end tidal|karbondioksit|dalga form"],
      ["Başarısız hava yolu: supraglottik araç, ön boyun yoluyla krikotirotomi", "supraglottik|laringeal maske|krikotiro|ön boyun|cerrahi hava|bisturi|neşter"],
      ["Entübasyon öncesi-sonrası hipotansiyon ve sedasyon/analjezi", "entübasyon sonrası|hipotansiyon|sedasyon|analjezi|vazopresör"]
    ]},
  { id: "acil-pelvis-kirigi", tr: "Pelvis kırığı ve pelvik kanama", en: "Pelvic fracture and pelvic hemorrhage", cat: "trv", lvl: 3,
    src: {
      k: ["ATLS Advanced Trauma Life Support Student Course Manual, 11. baskı (American College of Surgeons, 2025)", "Rosen's Emergency Medicine: Concepts and Clinical Practice, 10. baskı (2022)"],
      m: [["Coccolini F et al. Pelvic trauma: WSES classification and guidelines. World J Emerg Surg 2017", "https://doi.org/10.1186/s13017-017-0117-6"],
          ["The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023", "https://doi.org/10.1186/s13054-023-04327-7"]]
    },
    c: [
      ["!Yüksek enerjili travma; kanama çoğunlukla posterior venöz pleksustan, arteriyel de olabilir", "yüksek enerji|venöz pleksus|pleksus|presakral|retroperiton|arteriyel"],
      ["Young-Burgess: ön-arka kompresyon (açık kitap), lateral kompresyon, vertikal makaslama", "young|burgess|açık kitap|open book|ön arka kompres|anteroposterior|lateral kompres|vertikal|makaslama"],
      ["!Pelvik bağlayıcı büyük trokanterler hizasında", "bağlayıcı|binder|kuşak|kemer|çarşaf|trokanter"],
      ["Pelvis tekrar tekrar zorlanarak muayene edilmez", "tekrar tekrar|zorlan|sıkıştır|bir kez|stabilite test"],
      ["Üretra yaralanması: meatusta kan varsa sonda takılmaz", "üretra|meatus|sonda|foley|perine|skrotal|prostat"],
      ["!İnstabil hastada preperitoneal paketleme, anjiyoembolizasyon, eksternal fiksasyon", "preperitoneal|paketleme|packing|anjiyoemboli|embolizasyon|anjiyografi|eksternal fiks|fiksatör"],
      ["REBOA köprü tedavi olarak", "reboa|aort balon|aortik balon|endovasküler balon"],
      ["Karar hemodinamik ve mekanik stabiliteye göre (WSES)", "wses|hemodinami|mekanik stabil|mekanik instabil"]
    ]},
  { id: "acil-mantar", tr: "Mantar zehirlenmesi (Amanita phalloides)", en: "Mushroom poisoning (Amanita phalloides)", cat: "zeh", lvl: 3,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Tan JL et al. Amanitin intoxication: effects of therapies on clinical outcomes – a review of 40 years of reported cases. Clin Toxicol 2022", "https://informahealthcare.com/doi/full/10.1080/15563650.2022.2098139"],
          ["Amanita phalloides-associated liver failure: molecular mechanisms and management. Int J Mol Sci 2024", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11640968/"]]
    },
    c: [
      ["!Amanita phalloides: amatoksin, RNA polimeraz II inhibisyonu", "amanita|phalloides|falloides|amatoksin|amanitin|polimeraz"],
      ["!Belirtilerin geç başlaması (≥6 saat) ölümcül türü düşündürür", "6 saat|altı saat|geç başla|geç ortaya|gecikmeli|latent"],
      ["Erken başlayan (<6 saat) GİS belirtileri çoğu kez daha zararsız türler", "erken başla|erken ortaya|zararsız|iyi huylu|masum"],
      ["Seyir: GİS evresi, yalancı iyileşme, karaciğer-böbrek yetmezliği", "yalancı iyileşme|sahte iyileşme|düzelmiş gibi|böbrek yetmez"],
      ["!Tedavi: aktif kömür, sıvı, silibinin, NAC, penisilin G", "silibinin|silimarin|penisilin"],
      ["Akut karaciğer yetmezliğinde nakil merkezine sevk", "nakil|transplant"],
      ["Türkiye: yabani mantar toplayanlar (ör. Karadeniz); UZEM 114", "yabani|toplanan|topladığı|toplayan|karadeniz|köygöçüren"],
      ["İzlem: transaminaz, INR, kreatinin", "inr|protrombin|kreatinin|seri izle|seri takip"]
    ]},
  { id: "acil-akrep-yilan", tr: "Akrep sokması ve yılan ısırması", en: "Scorpion sting and snakebite envenomation", cat: "zeh", lvl: 3,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Guidelines for the management of snakebites, 2nd edition. WHO Regional Office for South-East Asia 2016", "https://www.who.int/publications/i/item/9789290225300"],
          ["Emek M et al. Descriptive epidemiological evaluation of snake bite and scorpion sting cases in Türkiye. Turk Hij Den Biyol Derg 2025", "https://avesis.akdeniz.edu.tr/yayin/b82512a6-f5d8-4079-b35f-48578c60e3ef/descriptive-epidemiological-evaluation-of-snake-bite-and-scorpion-sting-cases-in-turkiye-turkiyede-yilan-isirmasi-ve-akrep-sokma-vakalarinin-karsilastirmali-tanimlayici-epidemiyolojik-degerlendirilmesi"]]
    },
    c: [
      ["!Türkiye'de akrep: Androctonus crassicauda, Mesobuthus; Güneydoğu Anadolu'da sık", "androctonus|crassicauda|mesobuthus|leiurus|güneydoğu|şanlıurfa|diyarbakır|mardin"],
      ["Akrep: lokal ağrı; ağırda otonomik fırtına, miyokardit, akciğer ödemi (çocuklar riskli)", "otonom|katekolamin|miyokardit|akciğer ödem|pulmoner ödem"],
      ["!Sistemik bulguda antivenom (Türkiye'de at kaynaklı serum üretilir)", "antivenom|antiserum|anti serum|panzehir|akrep serum|yılan serum|at kaynaklı"],
      ["Yılan: çoğunlukla engerek; lokal ödem-nekroz ve hematotoksisite", "engerek|viper|vipera|hematotoks|nekroz|ekimoz"],
      ["!20 dakikalık tam kan pıhtılaşma testi ve koagülopati izlemi", "20 dakika|yirmi dakika|pıhtılaşma test|pıhtılaşma zaman|koagülopati|fibrinojen"],
      ["Yapılmayacaklar: sıkı turnike, kesme, emme, buz", "turnike|kesme|kesil|emme|emil|buz|dağla"],
      ["İlk yardım: uzvu hareketsiz bırak, yüzük-takıyı çıkar", "immobiliz|hareketsiz|atel|takı|yüzük"],
      ["Tetanoz profilaksisi ve antivenoma bağlı alerjik reaksiyon", "tetanoz|anafilak|serum hastalığı|alerjik reaksiyon"],
      ["Danışma: UZEM 114", "uzem|114|zehir danışma"]
    ]},
  { id: "acil-digoksin", tr: "Digoksin zehirlenmesi", en: "Digoxin toxicity", cat: "zeh", lvl: 3,
    src: {
      k: ["Goldfrank's Toxicologic Emergencies, 12. baskı (McGraw Hill)", "Tintinalli's Emergency Medicine: A Comprehensive Study Guide, 9. baskı (2019)"],
      m: [["Chan BS, Buckley NA. Digoxin-specific antibody fragments in the treatment of digoxin toxicity. Clin Toxicol 2014", "https://pubmed.ncbi.nlm.nih.gov/25089630/"],
          ["Lavonas EJ et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation 2023", "https://pubmed.ncbi.nlm.nih.gov/37721023/"]]
    },
    c: [
      ["!Na+/K+-ATPaz inhibisyonu", "atpaz|atp az|sodyum potasyum pompa|na k|pompa inhib"],
      ["Belirtiler: bulantı-kusma, sarı-yeşil görme (ksantopsi), konfüzyon", "bulantı|kusma|sarı|yeşil|ksantopsi|görme|konfüzyon"],
      ["!Aritmiler: bidireksiyonel VT, bloklu atriyal taşikardi, bradikardi/AV blok, sık VES", "bidireksiyonel|iki yönlü|bloklu atriyal|atriyal taşikardi|ventriküler ekstra|ves|av blok|bradikardi"],
      ["Akut zehirlenmede hiperkalemi kötü prognoz göstergesi", "hiperkalemi|potasyum yüksek|yüksek potasyum"],
      ["Kronik toksisite: böbrek yetmezliği, hipokalemi, hipomagnezemi, ilaç etkileşimleri, yaşlı hasta", "böbrek|kronik|hipokalemi|hipomagnez|amiodaron|verapamil|etkileşim|yaşlı"],
      ["!Antidot: digoksine özgü antikor parçaları (Fab)", "fab|antikor|digifab|digoksine özgü|digoksin spesifik"],
      ["Fab endikasyonları: yaşamı tehdit eden aritmi, hiperkalemi, hemodinamik instabilite", "endikasyon|yaşamı tehdit|hayatı tehdit|instabil"],
      ["Serum düzeyi dağılım fazı tamamlandıktan sonra yorumlanır", "serum düzey|dağılım|kan düzey"],
      ["Bradikardide atropin/pace; kardiyoversiyondan mümkünse kaçın", "atropin|pace|kardiyover"]
    ]}
]
});
