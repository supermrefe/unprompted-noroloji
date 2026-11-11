/* Dermatoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve pratisyen hekimin her gün karşılaştığı deri hastalıkları (psoriazis, atopik dermatit, akne,
   ürtiker, uyuz) Kolay; deri kanserleri ve Türkiye'de önemli enfeksiyonlar (dermatofitoz, şark çıbanı) ile rosasea Orta; hayatı tehdit eden
   ya da ileri ayrıntı isteyen büllöz hastalıklar, ağır ilaç reaksiyonları (SJS/TEN, DRESS), hidradenitis ve kutanöz lupus Zor.
   Kılavuzlar: EuroGuiDerm/EADV, EADO, AAD, EAACI 2022, BAD; sistemik lupus, Behçet ve psoriatik artrit romatolojiye bırakıldı. */
(function () {
const BO = "Bolognia Dermatology, 5. baskı (2024)";
const RO = "Rook's Textbook of Dermatology, 10. baskı (2024)";

UP.add({ id: "dermatoloji", subs: {
    inf: "İnflamatuvar dermatozlar",
    tum: "Deri tümörleri",
    enf: "Enfeksiyon ve infestasyonlar",
    bul: "Büllöz hastalıklar ve ağır ilaç reaksiyonları",
    yuz: "Adneks ve yüz hastalıkları",
    otoi: "Otoimmün deri hastalıkları"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "der-psoriazis", tr: "Psoriazis (sedef hastalığı)", en: "Psoriasis vulgaris", cat: "inf", lvl: 1,
    src: { k: [BO, RO], m: [
      ["EuroGuiDerm Guideline on the systemic treatment of Psoriasis vulgaris – Part 1: treatment and monitoring recommendations. J Eur Acad Dermatol Venereol 2020", "https://doi.org/10.1111/jdv.16915"],
      ["Griffiths CEM, Armstrong AW, Gudjonsson JE, Barker JNWN. Psoriasis. Lancet 2021", "https://doi.org/10.1016/S0140-6736(20)32549-6"]] },
    c: [
      ["!Ekstansör yüzlerde gümüşi skuamlı, keskin sınırlı eritemli plaklar", "gümüşi|gümüş renkli|sedefi|beyaz skuam|kalın skuam|keskin sınırlı|eritemli plak|eritematöz plak|ekstansör|dirsek|diz|saçlı deri"],
      ["Auspitz ve Koebner fenomeni", "auspitz|koebner|köbner|izomorfik|kanama noktacık|kan noktacık"],
      ["!Patogenez: IL-23/Th17 ekseni, keratinosit hiperproliferasyonu", "il 23|il23|interlökin 23|il 17|il17|interlökin 17|th17|th 17|hiperproliferas|hızlı çoğal|parakeratoz|munro"],
      ["Tırnak tutulumu ve psoriatik artrit", "tırnak|pitting|yağ damlası|onikoliz|psoriatik artrit|eklem tutulum|daktilit"],
      ["Komorbidite: metabolik sendrom, kardiyovasküler risk", "metabolik sendrom|kardiyovasküler|obezite|diyabet|depresyon|komorbid"],
      ["Şiddet: PASI, vücut yüzey alanı, DLQI", "pasi|vücut yüzey|yüzey alan|dlqi|yaşam kalitesi|şiddet skor"],
      ["!Hafifte topikal: kortikosteroid + D vitamini analoğu", "kalsipotriol|kalsipotriyol|d vitamini analo|vitamin d analo|topikal kortiko|topikal steroid|kortikosteroidli krem"],
      ["!Orta-ağırda fototerapi, metotreksat/siklosporin/asitretin ve biyolojikler (TNF, IL-17, IL-23)", "fototerapi|dar bant|nb uvb|puva|metotreksat|siklosporin|asitretin|biyolojik|anti tnf|tnf alfa|adalimumab|sekukinumab|iksekizumab|ustekinumab|guselkumab|risankizumab|apremilast"],
      ["Klinik tipler: guttat (streptokok sonrası), püstüler, eritrodermik", "guttat|damla şeklinde|damlacık|damla psoriazis|streptokok|püstüler psoriazis|püstüler tip|jeneralize püstüler|eritroderm|inversa|invers"]
    ]},
  { id: "der-atopik-dermatit", tr: "Atopik dermatit (atopik egzama)", en: "Atopic dermatitis", cat: "inf", lvl: 1,
    src: { k: [BO, RO], m: [
      ["European guideline (EuroGuiDerm) on atopic eczema: part I – systemic therapy. J Eur Acad Dermatol Venereol 2022", "https://doi.org/10.1111/jdv.18345"],
      ["Langan SM, Irvine AD, Weidinger S. Atopic dermatitis. Lancet 2020", "https://doi.org/10.1016/S0140-6736(20)31286-1"]] },
    c: [
      ["!Kaşıntılı, kronik-tekrarlayan egzama; çoğu çocuklukta başlar", "kaşıntılı egzama|şiddetli kaşıntı|prurit|kronik tekrarlay|alevlen|bebeklik|süt çocuğu|çocukluk"],
      ["!Bariyer bozukluğu (filagrin) ve tip 2 (Th2) inflamasyon", "filagrin|filaggrin|bariyer|th2|th 2|tip 2|il 4|il4|il 13|il13|ige yüksek"],
      ["Yaşa göre dağılım: bebekte yüz/ekstansör, büyüklerde fleksural, likenifikasyon", "fleksural|fleksör|antekübital|popliteal|diz arka|dirsek iç|yanak|likenifik"],
      ["Atopik yürüyüş: astım, alerjik rinit, besin alerjisi", "atopik yürüyüş|atopik marş|alerjik marş|astım|alerjik rinit|besin alerji|gıda alerji"],
      ["Tanı klinik: Hanifin-Rajka ölçütleri", "hanifin|rajka|klinik tanı|tanı kliniktir|tanı klinik|ölçüt"],
      ["!Temel bakım nemlendirici; alevlenmede topikal kortikosteroid ve kalsinörin inhibitörü", "nemlendirici|emolyen|emollient|topikal kortiko|topikal steroid|kalsinörin|takrolimus|pimekrolimus"],
      ["Orta-ağırda sistemik: dupilumab, JAK inhibitörü, siklosporin", "dupilumab|tralokinumab|lebrikizumab|jak inhibit|upadasitinib|abrositinib|barisitinib|siklosporin|fototerapi"],
      ["Komplikasyon: S. aureus kolonizasyonu, egzama herpetikum", "staf|aureus|egzama herpetikum|ekzema herpetikum|herpetikum|kaposi variselliform|impetiginiz"]
    ]},
  { id: "der-akne-vulgaris", tr: "Akne vulgaris", en: "Acne vulgaris", cat: "yuz", lvl: 1,
    src: { k: [BO, RO], m: [
      ["Reynolds RV, et al. Guidelines of care for the management of acne vulgaris. J Am Acad Dermatol 2024", "https://doi.org/10.1016/j.jaad.2023.12.017"],
      ["Nast A, et al. European evidence-based (S3) guideline for the treatment of acne – update 2016 – short version. J Eur Acad Dermatol Venereol 2016", "https://doi.org/10.1111/jdv.13776"]] },
    c: [
      ["!Pilosebase ünite hastalığı: sebum artışı, hiperkeratinizasyon, C. acnes, inflamasyon", "pilosebase|kıl yağ bez|sebum|yağ bezi|hiperkeratiniz|keratinizasyon|cutibacterium|propionibacterium|c acnes|akne bakteri"],
      ["!Lezyonlar: komedon (açık/kapalı), papül, püstül, nodül, skar", "açık komedon|kapalı komedon|siyah nokta|beyaz nokta|nodülokistik|kistik akne|komedonlar"],
      ["Androjen etkisi; ergenlik", "androjen|ergenlik|puberte|adolesan|hormonal"],
      ["!Topikal retinoid ve benzoil peroksit temel tedavi", "retinoid|adapalen|tretinoin|benzoil"],
      ["Antibiyotik tek başına değil, benzoil peroksitle (direnç)", "tek başına antibiyotik|antibiyotik tek başına|monoterapi|direnç gelişme|antibiyotik direnc|benzoil peroksitle birlikte|benzoil peroksit ile birlikte"],
      ["Orta-ağırda oral doksisiklin; kadında KOK/spironolakton", "doksisiklin|tetrasiklin|minosiklin|sarasiklin|oral kontraseptif|doğum kontrol hap|kok|spironolakton"],
      ["!Ağır nodülokistik/skarlaşan aknede oral izotretinoin", "izotretinoin|isotretinoin|roakutan|roaccutane"],
      ["İzotretinoin teratojen: gebelik önleme programı", "teratojen|gebelik önle|gebelik test|gebe kalmama|kontrasepsiyon|doğum kusur"]
    ]},
  { id: "der-urtiker", tr: "Ürtiker", en: "Urticaria", cat: "inf", lvl: 1,
    src: { k: [BO, RO], m: [
      ["Zuberbier T, et al. The international EAACI/GA²LEN/EuroGuiDerm/APAAACI guideline for the definition, classification, diagnosis, and management of urticaria. Allergy 2022", "https://doi.org/10.1111/all.15090"],
      ["Kolkhir P, et al. Urticaria. Nat Rev Dis Primers 2022", "https://doi.org/10.1038/s41572-022-00389-z"]] },
    c: [
      ["!Mast hücresi aracılı; 24 saatten kısa süren, iz bırakmayan kabarıklık (ürtika) ve/veya anjiyoödem", "mast hücre|histamin|kabarıklık|ürtika|wheal|24 saatten kısa|yirmi dört saatten kısa|24 saat içinde|yirmi dört saat içinde|iz bırakmadan|iz bırakmaz|anjiyoödem|anjioödem"],
      ["!Akut (<6 hafta) / kronik (≥6 hafta) ayrımı", "altı hafta|6 hafta|akut ürtiker|kronik ürtiker"],
      ["Kronik spontan ve kronik indüklenebilir (fiziksel) ürtiker", "spontan|indüklenebilir|indüklen|fiziksel ürtiker|dermografizm|kolinerjik|soğuk ürtiker|basınç ürtiker"],
      ["Kronik spontan ürtikerde sınırlı tetkik: hemogram, CRP/sedim, total IgE, anti-TPO", "hemogram|tam kan|crp|sedim|total ige|anti tpo|tiroid otoantikor|tiroid peroksidaz|sınırlı tetkik"],
      ["!Birinci basamak: ikinci kuşak H1 antihistaminik; yanıtsızlıkta doz dört katına", "ikinci kuşak|ikinci jenerasyon|yeni kuşak|sedatif olmayan|h1|antihistaminik|antihistamin|setirizin|levosetirizin|desloratadin|feksofenadin|bilastin|dört kat"],
      ["Sonraki basamak omalizumab, ardından siklosporin", "omalizumab|anti ige|siklosporin"],
      ["Lezyon >24 saat, purpura/iz bırakıyorsa ürtikeryal vaskülit düşün", "vaskülit|ürtikeryal vask|purpura"]
    ]},
  { id: "der-skabiyez", tr: "Skabiyez (uyuz)", en: "Scabies", cat: "enf", lvl: 1,
    src: { k: [BO, RO], m: [
      ["Engelman D, et al. The 2020 International Alliance for the Control of Scabies Consensus Criteria for the Diagnosis of Scabies. Br J Dermatol 2020", "https://doi.org/10.1111/bjd.18943"],
      ["Salavastru CM, et al. European guideline for the management of scabies. J Eur Acad Dermatol Venereol 2017", "https://doi.org/10.1111/jdv.14351"]] },
    c: [
      ["!Etken Sarcoptes scabiei akarı; yakın temasla bulaş", "sarcoptes|sarkoptes|scabiei|skabiei|akar|uyuz böceği|deri teması|yakın temas"],
      ["!Gece artan kaşıntı, ailede/aynı evde kaşıntı", "gece artan|geceleri artan|gece kaşıntı|geceleri kaşıntı|gece kötüleş|aile bireyleri|ailede|aynı evde|ev halkı|birlikte yaşayan"],
      ["Tünel (yuva) lezyonları; parmak araları, el bilekleri, genital bölge", "tünel|yuva|parmak ara|el bilek|genital|meme başı|aksiller|koltuk alt|göbek"],
      ["Tanı: akar/yumurtanın gösterilmesi (dermoskopi, kazıma), IACS ölçütleri", "dermoskop|kazıma|kazıntı|mikroskop|yumurta|deltaplan|delta kanat|jet|iacs"],
      ["!Tedavi: permetrin %5 krem boyundan aşağı, bir hafta sonra tekrar; oral ivermektin", "permetrin|ivermektin|benzil benzoat|kükürt|sülfür"],
      ["!Tüm temaslılar aynı anda tedavi; çamaşırlar sıcak yıkama", "temaslı|aynı anda|eş zamanlı|eşzamanlı|aynı gün|çamaşır|nevresim|sıcak su|sıcak yıka|poşet"],
      ["Kabuklu (Norveç) uyuz: bağışıklığı baskılanmışta, çok bulaşıcı", "norveç|kabuklu|krustoz|crusted|immünsüpres|bağışıklığı bask"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "der-melanom", tr: "Malign melanom", en: "Cutaneous melanoma", cat: "tum", lvl: 2,
    src: { k: [BO, RO], m: [
      ["Gershenwald JE, et al. Melanoma staging: evidence-based changes in the American Joint Committee on Cancer eighth edition cancer staging manual. CA Cancer J Clin 2017", "https://doi.org/10.3322/caac.21409"],
      ["Garbe C, et al. European consensus-based interdisciplinary guideline for melanoma. Part 1: Diagnostics – Update 2024. Eur J Cancer 2025", "https://doi.org/10.1016/j.ejca.2024.115152"]] },
    c: [
      ["!ABCDE: asimetri, düzensiz sınır, renk çeşitliliği, çap >6 mm, değişim", "abcde|asimetri|sınır düzensiz|düzensiz sınır|renk çeşitli|renk farklı|çok renkli|altı milimetre|6 mm|evrim|zaman içinde değiş|boyut değiş|renk değiş|lezyonun değiş"],
      ["Çirkin ördek yavrusu bulgusu", "çirkin ördek|ugly duckling|benlerinden farklı|diğer benlerden farklı"],
      ["Risk: UV (aralıklı yoğun güneş, yanık), çok sayıda/atipik nevüs, aile öyküsü", "güneş yanığı|ultraviyole|uv|atipik nevüs|displastik nevüs|çok sayıda nevüs|aile öykü|açık ten|solaryum"],
      ["Alt tipler: yüzeyel yayılan (en sık), nodüler, lentigo maligna, akral lentiginöz", "yüzeyel yayılan|yüzeysel yayılan|nodüler melanom|lentigo maligna|akral|lentiginöz"],
      ["!Tanı: tam eksizyonel biyopsi; Breslow kalınlığı en önemli prognostik faktör", "eksizyonel|eksizyon biyopsi|breslow|tümör kalınlığı"],
      ["!AJCC 8: T1a <0,8 mm ve ülsersiz; mitoz T ölçütü değil, ülserasyon önemli", "ajcc|0 8|sıfır virgül sekiz|ülserasyon|ülsere|mitoz kullanılmıyor|mitoz artık|mitoz t ölçütü değil|mitoz t kategorisinde kullanılmıyor"],
      ["Sentinel lenf nodu biyopsisi ve geniş cerrahi sınır", "sentinel|bekçi|geniş eksizyon|cerrahi sınır|güvenlik sınır"],
      ["İleri evre: BRAF V600 mutasyonu; anti-PD-1 immünoterapi, BRAF/MEK inhibitörü", "braf|v600|mek inhibit|anti pd 1|pd 1|pd1|nivolumab|pembrolizumab|ipilimumab|immünoterapi|kontrol noktası"]
    ]},
  { id: "der-keratinosit-kanserleri", tr: "Bazal hücreli ve skuamöz hücreli karsinom", en: "Basal cell and cutaneous squamous cell carcinoma", cat: "tum", lvl: 2,
    src: { k: [BO, RO], m: [
      ["Peris K, et al. European consensus-based interdisciplinary guideline for diagnosis and treatment of basal cell carcinoma – update 2023. Eur J Cancer 2023", "https://doi.org/10.1016/j.ejca.2023.113254"],
      ["Stratigos AJ, et al. European consensus-based interdisciplinary guideline for invasive cutaneous squamous cell carcinoma. Part 1: Diagnostics and prevention – Update 2023. Eur J Cancer 2023", "https://doi.org/10.1016/j.ejca.2023.113251"]] },
    c: [
      ["!BHK en sık deri kanseri; inci gibi parlak papül, telenjiektazi, yuvarlak kenar", "en sık deri kanser|en sık görülen deri|en yaygın deri|inci|parlak papül|telenjiektazi|telanjiektazi|yuvarlak kenar|kabarık kenar|rodent"],
      ["!BHK lokal invaziv, metastaz çok nadir", "lokal invaziv|lokal yıkıcı|metastaz nadir|nadiren metastaz|metastaz çok nadir|nadir metastaz"],
      ["BHK: Hedgehog yolağı (PTCH1), Gorlin sendromu", "hedgehog|ptch|gorlin|bazal hücreli nevüs sendrom"],
      ["!SHK öncülleri: aktinik keratoz, Bowen hastalığı; kronik UV", "aktinik keratoz|solar keratoz|bowen|in situ|kümülatif|kronik güneş|kronik uv"],
      ["SHK'de metastaz riski daha yüksek; dudak, kulak, organ nakli/immünsüpresyon", "dudak|kulak|organ nakli|transplant|immünsüpres|bağışıklığı bask|perinöral|lenf nodu metastaz"],
      ["Tedavi: cerrahi eksizyon, yüksek riskte Mohs cerrahisi", "cerrahi eksizyon|eksizyon|mohs|mikrografik"],
      ["İleri evre: Hedgehog inhibitörü (BHK), anti-PD-1 sesiplimab (SHK)", "vismodegib|sonidegib|hedgehog inhibit|sesiplimab|cemiplimab|anti pd 1|pd 1|pd1"],
      ["Korunma: güneşten korunma, düzenli deri muayenesi", "güneş koruyucu|güneşten korun|güneş kremi|deri muayene|cilt muayene"]
    ]},
  { id: "der-dermatofitoz", tr: "Dermatofitozlar (tinea)", en: "Dermatophytosis (tinea)", cat: "enf", lvl: 2,
    src: { k: [BO, RO], m: [
      ["Fuller LC, et al. British Association of Dermatologists' guidelines for the management of tinea capitis 2014. Br J Dermatol 2014", "https://doi.org/10.1111/bjd.13196"],
      ["Terbinafine Resistance in Trichophyton rubrum and Trichophyton indotineae: A Literature Review. Antibiotics (Basel) 2025", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12108360/"]] },
    c: [
      ["!Etkenler: Trichophyton, Microsporum, Epidermophyton; keratin dokuyu tutar", "trichophyton|trikofiton|microsporum|mikrosporum|epidermophyton|epidermofiton|keratin|dermatofit"],
      ["Yerleşime göre: kapitis, korporis, kruris, pedis, unguium (onikomikoz)", "kapitis|korporis|kruris|pedis|unguium|onikomikoz|atlet ayağı|kasık mantar|saçlı deri mantar"],
      ["Klinik: kenarı aktif, ortası açılan halka şeklinde plak", "halka|anüler|kenarı aktif|aktif kenar|ortası açıl|merkezi iyileş|merkezde iyileş"],
      ["!Tanı: KOH ile direkt mikroskopi ve kültür; Wood lambası", "koh|potasyum hidroksit|direkt mikroskop|nativ|kültür|wood"],
      ["Tinea inkognito: steroidle maskelenme", "inkognito|incognito|steroidli krem|steroid kullan|kortikosteroidli krem|maskelen"],
      ["!Sınırlı deri tutulumunda topikal azol/terbinafin", "topikal antifungal|topikal azol|klotrimazol|mikonazol|ketokonazol|terbinafin krem|topikal terbinafin|siklopiroks"],
      ["!Tinea kapitis ve tırnakta sistemik tedavi (terbinafin, griseofulvin, itrakonazol); kerion", "sistemik|oral terbinafin|oral antifungal|griseofulvin|itrakonazol|kerion"],
      ["Terbinafine dirençli T. indotineae yayılıyor", "indotineae|terbinafine dirençli|terbinafin direnc|skualen epoksidaz"]
    ]},
  { id: "der-kutanoz-leishmaniasis", tr: "Kutanöz leishmaniasis (şark çıbanı)", en: "Cutaneous leishmaniasis", cat: "enf", lvl: 2,
    src: { k: [BO, RO], m: [
      ["Burza S, Croft SL, Boelaert M. Leishmaniasis. Lancet 2018", "https://doi.org/10.1016/S0140-6736(18)31204-2"],
      ["World Health Organization. Leishmaniasis – fact sheet", "https://www.who.int/news-room/fact-sheets/detail/leishmaniasis"]] },
    c: [
      ["!Etken Leishmania (Türkiye'de çoğunlukla L. tropica, ayrıca L. major); vektör dişi tatarcık (Phlebotomus)", "leishmania|leişmanya|leyşmanya|tropica|tropika|tatarcık|phlebotomus|flebotomus|kum sinek|sand fly"],
      ["Türkiye'de endemik: Güneydoğu ve Akdeniz (Şanlıurfa, Adana, Hatay); göçle artış", "şanlıurfa|urfa|adana|hatay|osmaniye|güneydoğu anadolu|suriyeli göç|göçle birlikte"],
      ["!Açık bölgede ağrısız papül → nodül → kabuklu ülser, aylar içinde skarla iyileşir", "volkan|kabuklu ülser|kabuklu bir ülser|ortası kabuklu|ağrısız papül|ağrısız nodül|ağrısız ülser|ağrısız bir papül|ısırık yer|kendiliğinden iyileş"],
      ["!Tanı: lezyon kenarından yayma (Giemsa) ile amastigot; kültür (NNN), PCR", "yayma|giemsa|amastigot|leishman cisim|nnn"],
      ["Tedavi: lezyon içi pentavalan antimon ± kriyoterapi", "lezyon içi|intralezyon|pentavalan|antimon|glukantim|meglumin|kriyoterapi|kriyo|sıvı azot"],
      ["Çok sayıda/büyük ya da riskli yerleşimde sistemik antimon", "sistemik antimon|kas içi antimon|intramüsküler antimon|sistemik yani kas içi|amfoterisin"],
      ["Bildirimi zorunlu; korunma: tatarcıktan korunma, cibinlik", "bildirim|ihbar|cibinlik|sineklik|kovucu|ilaçlama"]
    ]},
  { id: "der-rosasea", tr: "Rosasea", en: "Rosacea", cat: "yuz", lvl: 2,
    src: { k: [BO, RO], m: [
      ["Schaller M, et al. Recommendations for rosacea diagnosis, classification and management: update from the global ROSacea COnsensus 2019 panel. Br J Dermatol 2020", "https://doi.org/10.1111/bjd.18420"],
      ["van Zuuren EJ. Rosacea. N Engl J Med 2017", "https://doi.org/10.1056/NEJMcp1506630"]] },
    c: [
      ["!Santrofasiyal kalıcı eritem, flushing (kızarma atakları), telenjiektazi", "santrofasiyal|yüzün orta|yanak ve burun|kalıcı eritem|kalıcı kızarıklık|flushing|kızarma atak|telenjiektazi|telanjiektazi"],
      ["!Papül ve püstüller var, komedon yok (akneden farkı)", "komedon yok|komedon olmaz|komedon görülmez|komedonun olmaması|komedonsuz"],
      ["Fenotip yaklaşımı (ROSCO)", "fenotip|rosco"],
      ["Fimatöz değişiklik, rinofima", "fima|rinofima|burun kalınlaş"],
      ["Oküler rosasea: blefarit, konjonktivit", "oküler|göz tutulum|blefarit|konjonktivit|göz kuruluğ"],
      ["Tetikleyiciler: güneş, sıcak, alkol, baharat; Demodex", "tetikle|güneş|sıcak içecek|alkol|baharat|acı yiyecek|demodeks|demodex"],
      ["!Topikal: ivermektin, metronidazol, azelaik asit; eritemde brimonidin/oksimetazolin", "ivermektin|metronidazol|azelaik|brimonidin|oksimetazolin"],
      ["Sistemik: doksisiklin; dirençli olguda düşük doz izotretinoin; telenjiektazide lazer/IPL", "doksisiklin|tetrasiklin|minosiklin|izotretinoin|lazer|ipl|yoğun atımlı"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "der-pemfigus-pemfigoid", tr: "Pemfigus vulgaris ve büllöz pemfigoid", en: "Pemphigus vulgaris and bullous pemphigoid", cat: "bul", lvl: 3,
    src: { k: [BO, RO], m: [
      ["Joly P, et al. Updated S2K guidelines on the management of pemphigus vulgaris and foliaceus initiated by the European Academy of Dermatology and Venereology (EADV). J Eur Acad Dermatol Venereol 2020", "https://doi.org/10.1111/jdv.16752"],
      ["Borradori L, et al. Updated S2K guidelines for the management of bullous pemphigoid initiated by the European Academy of Dermatology and Venereology (EADV). J Eur Acad Dermatol Venereol 2022", "https://doi.org/10.1111/jdv.18220"]] },
    c: [
      ["!Pemfigus: desmoglein 3 (±1) otoantikoru, suprabazal akantoliz (intraepidermal)", "desmoglein|dsg3|dsg 3|akantoliz|suprabazal|intraepidermal|epidermis içi"],
      ["Pemfigus: gevşek bül, kolay erozyon, Nikolsky pozitif, ağız mukozası tutulumu sık", "gevşek|flask|kolay patla|erozyon|nikolsky|nikolski|ağız mukoza|oral mukoza|ağız içi|mukoza tutulum"],
      ["!Büllöz pemfigoid: yaşlıda, BP180/BP230 (hemidezmozom), subepidermal, gergin bül, kaşıntı", "bp180|bp 180|bp230|bp 230|hemidezmozom|subepidermal|gergin"],
      ["!DIF: pemfiguste hücreler arası ağ benzeri IgG; pemfigoidde bazal membranda lineer IgG/C3", "direkt immünflöresan|direkt immünofloresan|direkt immün|dif|ağ benzeri|bal peteği|hücreler arası|interselüler|lineer|bazal membran|c3"],
      ["Tzanck yaymasında akantolitik hücre; serolojide ELISA", "tzanck|akantolitik hücre|elisa|indirekt immün|serolojik"],
      ["Pemfigus tedavisi: sistemik kortikosteroid + birinci basamak rituksimab", "rituksimab|rituximab|anti cd20|cd20"],
      ["Pemfigoid tedavisi: güçlü topikal kortikosteroid (klobetazol) birinci seçenek", "klobetazol|güçlü topikal|potent topikal|süper potent|çok güçlü topikal|yüksek potent"],
      ["Pemfigoid ilişkisi: DPP-4 inhibitörleri (gliptinler), nörolojik hastalıklar", "dpp 4|dpp4|gliptin|vildagliptin|sitagliptin|nörolojik hastal|demans|parkinson|inme"]
    ]},
  { id: "der-sjs-ten", tr: "Stevens-Johnson sendromu / toksik epidermal nekroliz", en: "Stevens-Johnson syndrome / toxic epidermal necrolysis", cat: "bul", lvl: 3,
    src: { k: [BO, RO], m: [
      ["Creamer D, et al. UK guidelines for the management of Stevens-Johnson syndrome/toxic epidermal necrolysis in adults 2016. Br J Dermatol 2016", "https://doi.org/10.1111/bjd.14530"],
      ["Bastuji-Garin S, et al. SCORTEN: a severity-of-illness score for toxic epidermal necrolysis. J Invest Dermatol 2000", "https://doi.org/10.1046/j.1523-1747.2000.00061.x"]] },
    c: [
      ["!İlaca bağlı, epidermisin tam kat nekrozu ve ayrılması; ağır mukoza tutulumu", "tam kat|epidermal nekroz|keratinosit nekroz|keratinosit ölüm|epidermis ayrıl|epidermal ayrıl|soyul|mukoza|mukozal|ağız|konjonktiv|genital"],
      ["!Etkilenen yüzey: SJS <%10, örtüşme %10–30, TEN >%30", "yüzde on|10 un altında|on dan az|yüzde otuz|30 un üzerinde|otuzun üzer|örtüşme|overlap|vücut yüzey|yüzey alan"],
      ["Sık ilaçlar: allopürinol, karbamazepin, lamotrijin, fenitoin, sülfonamid, nevirapin", "allopürinol|allopurinol|karbamazepin|lamotrijin|fenitoin|fenobarbital|sülfonamid|kotrimoksazol|nevirapin|oksikam"],
      ["HLA ilişkisi: HLA-B*15:02 (karbamazepin), HLA-B*58:01 (allopürinol)", "hla|15 02|1502|58 01|5801"],
      ["Atipik hedef lezyon/purpurik makül, Nikolsky pozitif, prodromda ateş", "hedef lezyon|atipik hedef|purpurik|nikolsky|nikolski|prodrom"],
      ["!Şüpheli ilaç hemen kesilir; yanık/yoğun bakım ünitesinde destek tedavisi", "hemen kes|ilacı kes|ilacın kesil|ilaç kesil|şüpheli ilaç|yanık ünite|yanık merkez|yoğun bakım|destek tedavi|sıvı elektrolit"],
      ["!Prognoz: SCORTEN", "scorten|skorten"],
      ["Göz muayenesi (oftalmoloji) ve uzun dönem sekel", "oftalmolo|göz hekim|göz muayene|göz konsült|sekel|sinekilikleri|simblefaron"]
    ]},
  { id: "der-dress", tr: "DRESS (eozinofili ve sistemik semptomlu ilaç reaksiyonu)", en: "Drug reaction with eosinophilia and systemic symptoms", cat: "bul", lvl: 3,
    src: { k: [BO, RO], m: [
      ["Kardaun SH, et al. Drug reaction with eosinophilia and systemic symptoms (DRESS): an original multisystem adverse drug reaction. Results from the prospective RegiSCAR study. Br J Dermatol 2013", "https://doi.org/10.1111/bjd.12501"],
      ["Shiohara T, Mizukawa Y. Drug-induced hypersensitivity syndrome (DiHS)/drug reaction with eosinophilia and systemic symptoms (DRESS): An update in 2019. Allergol Int 2019", "https://doi.org/10.1016/j.alit.2019.03.006"]] },
    c: [
      ["!Uzun latent dönem: ilaç başlandıktan haftalar sonra (genellikle 2–8 hafta)", "haftalar sonra|hafta sonra|latent|latans|gecikmiş|geç başlang|iki ile sekiz|2 8 hafta|üç hafta"],
      ["!Ateş, yaygın makülopapüler döküntü, yüz ödemi, lenfadenopati", "makülopapüler|morbiliform|yaygın döküntü|yüz ödem|yüzde ödem|yüzde şişlik|lenfadenopati|lenf bezi büyü"],
      ["!Eozinofili, atipik lenfosit ve iç organ tutulumu (en sık karaciğer)", "eozinofili|atipik lenfosit|karaciğer|hepatit|transaminaz|böbrek|nefrit|pnömonit|miyokardit|organ tutulum"],
      ["Sık ilaçlar: aromatik antiepileptikler, allopürinol, sülfonamid/dapson, minosiklin, vankomisin", "antiepileptik|karbamazepin|fenitoin|fenobarbital|lamotrijin|allopürinol|allopurinol|sülfonamid|sulfasalazin|dapson|minosiklin|vankomisin"],
      ["Tanı ve skorlama: RegiSCAR ölçütleri", "regiscar|regi scar|regiskar|skorlama"],
      ["HHV-6 başta olmak üzere herpesvirüs reaktivasyonu", "hhv 6|hhv6|herpes virüs 6|herpesvirüs|insan herpes|reaktivasyon|cmv|sitomegalovirüs"],
      ["!Şüpheli ilaç kesilir; organ tutulumunda sistemik kortikosteroid, yavaş azaltma", "ilacı kes|ilaç kesil|hemen kes|şüpheli ilaç|sistemik kortiko|sistemik steroid|prednizolon|metilprednizolon|yavaş azalt|yavaşça azalt"],
      ["Geç sekel: otoimmün tiroidit, tip 1 diyabet", "tiroidit|otoimmün|tip 1 diyabet|geç sekel|uzun dönem"]
    ]},
  { id: "der-hidradenitis-suppurativa", tr: "Hidradenitis suppurativa", en: "Hidradenitis suppurativa (acne inversa)", cat: "yuz", lvl: 3,
    src: { k: [BO, RO], m: [
      ["Zouboulis CC, et al. European S1 guideline for the treatment of hidradenitis suppurativa/acne inversa. J Eur Acad Dermatol Venereol 2015", "https://doi.org/10.1111/jdv.12966"],
      ["Alikhan A, et al. North American clinical management guidelines for hidradenitis suppurativa. Part II: Topical, intralesional, and systemic medical management. J Am Acad Dermatol 2019", "https://doi.org/10.1016/j.jaad.2019.02.068"]] },
    c: [
      ["!Kıl folikülü tıkanmasıyla başlayan kronik inflamatuvar hastalık (akne inversa)", "folikül tıkan|folikülün tıkan|foliküler oklüzyon|akne inversa"],
      ["!İntertrijinöz bölgeler: koltuk altı, kasık, meme altı, perianal", "koltuk alt|aksilla|kasık|inguinal|meme alt|submammar|intertrijin"],
      ["Tekrarlayan ağrılı nodül, apse, sinüs traktı, skar; çift başlı komedon", "sinüs trakt|tünel|çift başlı|köprü skar|köprü şekl"],
      ["!Evreleme: Hurley I–III", "hurley"],
      ["Risk: sigara, obezite; sıklıkla yanlışlıkla 'tekrarlayan apse' diye izlenir", "obezite|tanı gecikme|geç tanı|yanlış tanı|tekrarlayan apse"],
      ["Tedavi: topikal klindamisin, tetrasiklin, klindamisin + rifampisin", "klindamisin|rifampisin|tetrasiklin|doksisiklin"],
      ["Orta-ağırda biyolojik: adalimumab, sekukinumab, bimekizumab", "adalimumab|sekukinumab|bimekizumab"],
      ["Cerrahi: deroofing, geniş eksizyon; yalnız drenaj yetersiz", "deroofing|çatısının açıl|çatı açma|tavan açma|geniş eksizyon"]
    ]},
  { id: "der-kutanoz-lupus", tr: "Kutanöz lupus eritematozus", en: "Cutaneous lupus erythematosus", cat: "otoi", lvl: 3,
    src: { k: [BO, RO], m: [
      ["Kuhn A, et al. S2k guideline for treatment of cutaneous lupus erythematosus – guided by the European Dermatology Forum (EDF) in cooperation with the European Academy of Dermatology and Venereology (EADV). J Eur Acad Dermatol Venereol 2017", "https://doi.org/10.1111/jdv.14053"],
      ["Fanouriakis A, et al. EULAR recommendations for the management of systemic lupus erythematosus: 2023 update. Ann Rheum Dis 2024", "https://doi.org/10.1136/ard-2023-224762"]] },
    c: [
      ["!Akut kutanöz lupus: nazolabiyal oluğu koruyan kelebek (malar) döküntü, SLE ile güçlü ilişki", "kelebek|malar|nazolabiyal|akut kutanöz"],
      ["!Subakut kutanöz lupus: anüler/papüloskuamöz, ışığa duyarlı, anti-Ro (SSA); ilaçla tetiklenebilir", "subakut|anüler|papüloskuamöz|psoriaziform|anti ro|ssa|ss a|hidroklorotiyazid|tiyazid|proton pompa|terbinafin"],
      ["!Kronik (diskoid) lupus: skar bırakan plak, foliküler tıkaç, skatrisyel alopesi, pigment değişikliği", "diskoid|kronik kutanöz|skatrisyel|skarlı alopesi|kalıcı saç kayb|foliküler tıkaç|folikül tıkaç|skar bırak|hipopigment|hiperpigment|depigment"],
      ["Fotosensitivite; güneşten korunma ve sigarayı bırakma", "fotosensitiv|ışığa duyarl|güneşe duyarl|güneşten korun|güneş koruyucu|sigara"],
      ["Tanı: biyopsi (interfaz dermatit), direkt immünfloresanda lupus bandı; SLE açısından tarama", "interfaz|biyopsi|lupus bandı|lupus band|antinükleer|ana pozitif|ana ve anti|anti dsdna"],
      ["Lokal: topikal kortikosteroid, kalsinörin inhibitörü", "topikal kortiko|topikal steroid|kalsinörin|takrolimus|pimekrolimus|lezyon içi"],
      ["!Sistemik birinci seçenek hidroksiklorokin (antimalaryal); retina izlemi", "hidroksiklorokin|plaquenil|antimalaryal|klorokin|retina"],
      ["Dirençli olguda metotreksat, retinoid, dapson, mikofenolat", "metotreksat|asitretin|retinoid|dapson|mikofenolat|talidomid|anifrolumab"]
    ]}
]
});
})();
