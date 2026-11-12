/* Göz hastalıkları — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta sık sorulan ve acilde görme kaybını önlemek için zamanında tanınması gereken göz konuları; AAO Preferred Practice
   Pattern'ları (glokom 2020, konjonktivit/keratit 2023, AMD 2025, retina damar tıkanıklıkları 2019), EGS 2025, AHA 2021 SRAT bildirimi ve AAP 2018 ROP taramasına dayanır.
   Kolay = kırmızı göz, akut açı kapanması, kimyasal yanık, katarakt, diyabetik retinopati; Orta = glokom, keratit, AMD, dekolman, damar tıkanıklıkları;
   Zor = üveit/Behçet, optik nörit (göz açısı), şaşılık-ambliyopi, ROP, retinoblastom. Kapsam dışı: MS (nöroloji), sistemik Behçet (romatoloji). */
(function () {
const KA = "Kanski's Clinical Ophthalmology: A Systematic Approach, 10. baskı (2024)";
const VA = "Vaughan & Asbury's General Ophthalmology, 19. baskı (2017)";
const POAG = ["Primary Open-Angle Glaucoma Preferred Practice Pattern (AAO). Ophthalmology 2021", "https://doi.org/10.1016/j.ophtha.2020.10.022"];
const PACD = ["Primary Angle-Closure Disease Preferred Practice Pattern (AAO). Ophthalmology 2021", "https://doi.org/10.1016/j.ophtha.2020.10.021"];
const EGS = ["European Glaucoma Society Terminology and Guidelines for Glaucoma, 6. baskı. Br J Ophthalmol 2025", "https://www.eugs.org/educational_materials/190"];
const KONJ = ["Conjunctivitis Preferred Practice Pattern (AAO). Ophthalmology 2024", "https://doi.org/10.1016/j.ophtha.2023.12.037"];
const BKER = ["Bacterial Keratitis Preferred Practice Pattern (AAO). Ophthalmology 2024", "https://doi.org/10.1016/j.ophtha.2023.12.035"];
const DR = ["Diabetic Retinopathy Preferred Practice Pattern (AAO). Ophthalmology 2025", "https://aao.org/preferred-practice-pattern/diabetic-retinopathy-ppp"];
const AMD = ["Age-Related Macular Degeneration Preferred Practice Pattern (AAO). Ophthalmology 2025", "https://doi.org/10.1016/j.ophtha.2024.12.018"];
const RAO = ["Retinal and Ophthalmic Artery Occlusions Preferred Practice Pattern (AAO). Ophthalmology 2020", "https://doi.org/10.1016/j.ophtha.2019.09.028"];
const RVO = ["Retinal Vein Occlusions Preferred Practice Pattern (AAO). Ophthalmology 2020", "https://doi.org/10.1016/j.ophtha.2019.09.029"];
const PVD = ["Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration Preferred Practice Pattern (AAO). Ophthalmology 2020", "https://doi.org/10.1016/j.ophtha.2019.09.027"];
const AMB = ["Amblyopia Preferred Practice Pattern (AAO). Ophthalmology 2023", "https://doi.org/10.1016/j.ophtha.2022.11.003"];

UP.add({ id: "goz", subs: {
    on: "Kırmızı göz, kornea ve ön segment",
    gl: "Glokom",
    ret: "Retina ve vitreus",
    nor: "Üveit ve nöro-oftalmoloji",
    ped: "Çocuk göz hastalıkları"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "goz-akut-aci-kapanma-glokomu", tr: "Akut açı kapanması krizi (akut açı kapanma glokomu)", en: "Acute angle-closure crisis", cat: "gl", lvl: 1,
    src: { k: [KA, VA], m: [PACD, EGS] },
    c: [
      ["!Ön kamara açısının iris tarafından aniden kapanması; göz içi basıncı çok yükselir", "açı kapan|açının kapan|açı kapat|angle closure|pupiller blok|iris kökü|göz içi basıncı çok|göz içi basıncı ani|basınç çok yüksel|göz tansiyonu çok"],
      ["Risk: hipermetropi, sığ ön kamara, ileri yaş, kadın; loş ışık/midriyatik tetikler", "hipermetrop|sığ ön kamara|ön kamara sığ|dar açı|loş ışık|karanlık ortam|midriyatik|pupilla genişlet|göz damlası ile büyüt|antikolinerjik"],
      ["!Klinik: ani ağrılı kırmızı göz, bulanık görme, ışık çevresinde haleler, bulantı-kusma, baş ağrısı", "hale|ışık çevresinde|ışıkların etrafında|gökkuşağı|bulantı|kusma|ani başlayan ağrı|şiddetli göz ağrısı"],
      ["Muayene: orta derecede dilate sabit pupilla, kornea ödemi, siliyer enjeksiyon, taş gibi sert göz", "orta dilate|yarı dilate|orta derecede dilate|semidilate|sabit pupil|ışığa yanıtsız|kornea ödem|korneal ödem|buğulu kornea|taş gibi|siliyer enjeksiyon|perilimbal"],
      ["!Acil basınç düşürme: topikal beta bloker, alfa agonist, pilokarpin; sistemik asetazolamid, gerekirse mannitol", "asetazolamid|diamox|karbonik anhidraz|mannitol|hiperozmotik|pilokarpin|timolol|beta bloker|brimonidin|alfa agonist|apraklonidin"],
      ["!Kesin tedavi: lazer periferik iridotomi; diğer göze profilaktik iridotomi", "iridotomi|iridektomi|yag lazer|nd yag|lazer delik|irise delik|diğer göze|karşı göze|öbür göze|profilaktik"],
      ["Gonyoskopiyle açının değerlendirilmesi; lens ekstraksiyonu seçenek", "gonyoskop|goniyoskop|gonioskop|lens ekstraksiyon|lensin alınma|berrak lens|katarakt cerrahisi|fakoemülsifikasyon"]
    ]},
  { id: "goz-kirmizi-goz-konjonktivit", tr: "Kırmızı göz ayırıcı tanısı ve konjonktivit", en: "Red eye and conjunctivitis", cat: "on", lvl: 1,
    src: { k: [KA, VA], m: [KONJ,
      ["Azari AA, Arabi A. Conjunctivitis: a systematic review. J Ophthalmic Vis Res 2020", null]] },
    c: [
      ["!Alarm bulguları: görme azalması, belirgin ağrı, fotofobi, siliyer enjeksiyon → keratit, üveit, akut glokomu dışla", "görme azal|görmede azal|fotofobi|ışığa hassas|ışıktan rahatsız|siliyer enjeksiyon|alarm bulgu|kırmızı bayrak|uyarıcı bulgu|keratit|üveit|akut glokom|açı kapan"],
      ["!Viral (adenovirüs): sulu akıntı, folikül, preaurikuler lenfadenopati, çok bulaşıcı", "adenovir|viral konjonktivit|sulu akıntı|folikül|preaurikül|kulak önü|preauriküler|bulaşıcı|epidemik keratokonjonktivit"],
      ["Bakteriyel: pürülan akıntı, sabah kirpiklerin yapışması; topikal antibiyotik", "pürülan|irinli|cerahat|kirpikler yapış|gözler yapış|yapışık|bakteriyel konjonktivit|topikal antibiyotik|antibiyotikli damla"],
      ["!Alerjik: kaşıntı ön planda, papiller reaksiyon, bilateral; antihistaminik/mast hücre stabilizatörü", "kaşıntı|kaşın|alerjik konjonktivit|papil|antihistamin|mast hücre|olopatadin|ketotifen|vernal|mevsimsel"],
      ["Hiperakut konjonktivit ve yenidoğanda gonokok/klamidya; sistemik tedavi", "gonokok|gonore|neisseria|klamidya|chlamydia|hiperakut|oftalmia neonatorum|yenidoğan konjonktivit"],
      ["Tanısı konmamış kırmızı gözde topikal steroid verilmez", "steroid verilmez|steroid vermeyiz|steroid kullanılmaz|steroidden kaçın|steroid verme|steroid olmamalı|kortizonlu damla verilmez|kortizonlu damla vermeyiz"],
      ["Subkonjonktival kanama ağrısız ve görmeyi etkilemeyen benign tablo", "subkonjonktival kanama|subkonjonktival hemoraji|göz akına kan|ağrısız kanama"]
    ]},
  { id: "goz-kimyasal-yanik", tr: "Kimyasal göz yanığı", en: "Chemical eye injury", cat: "on", lvl: 1,
    src: { k: [KA, VA], m: [
      ["Eslani M ve ark. The ocular surface chemical burns. J Ophthalmol 2014", "https://doi.org/10.1155/2014/196827"],
      ["Dua HS, King AJ, Joseph A. A new classification of ocular surface burns. Br J Ophthalmol 2001", null]] },
    c: [
      ["!Gerçek oftalmolojik acil: muayeneden önce hemen bol sıvıyla irrigasyon", "irrigasyon|irigasyon|bol su|bol sıvı|serum fizyolojik ile yıka|gözü yıka|gözün yıkan|yıkamaya başla|yıkama hemen|hemen yıka|ringer laktat|muayeneden önce"],
      ["!Alkali yanık asitten ağır: sabunlaşma ile derin dokulara ilerler", "alkali yanıklar asitten|alkali yanık asitten|alkali yanık daha ağır|alkali daha ağır|asitten daha ağır|asitten ağır|sabunlaş|saponifikasyon|derin dokulara ilerler"],
      ["Asit yanığında protein koagülasyonu bariyer oluşturur", "koagülasyon nekroz|protein koagül|proteinleri pıhtılaştır|proteinlerin pıhtılaş|koagülasyon bariyer|asit yüzeyel kalır|asit derine ilerlemez"],
      ["İrrigasyon pH nötrleşene kadar sürer; pH kâğıdıyla kontrol, forniksler temizlenir", "ph nötr|ph normal|ph kağıd|turnusol|nötral ph|ph ölç|forniks|kapak eversiyon|partikül"],
      ["Topikal anestezik ve kapak ekartörü irrigasyonu kolaylaştırır", "topikal anestez|anestezik damla|proparakain|tetrakain|ekartör|blefarostat|morgan lens"],
      ["!Şiddet: limbal iskemi ve kornea opasitesi (Roper-Hall, Dua sınıflaması)", "limbal iskemi|limbus iskemi|limbal tutulum|roper hall|roper|dua sınıf|kornea bulanık|kornea opasite|porselen|beyaz göz"],
      ["Tedavi: topikal steroid, askorbat/doksisiklin, sikloplejik; geç dönemde amniyon zarı, limbal kök hücre nakli", "askorbat|vitamin c|doksisiklin|sikloplejik|amniyon|amniotik|limbal kök hücre|kök hücre nakli|semblefaron|limbal yetmezlik"]
    ]},
  { id: "goz-katarakt", tr: "Katarakt", en: "Cataract", cat: "on", lvl: 1,
    src: { k: [KA, VA], m: [
      ["Miller KM ve ark. Cataract in the Adult Eye Preferred Practice Pattern (AAO). Ophthalmology 2022", "https://doi.org/10.1016/j.ophtha.2021.10.006"],
      ["Liu YC, Wilkins M, Kim T, Malyugin B, Mehta JS. Cataracts. Lancet 2017", null]] },
    c: [
      ["!Lensin opaklaşması; dünyada önlenebilir/geri döndürülebilir körlüğün önde gelen nedeni", "lensin opak|lens opasite|lens bulanık|lensin bulanık|mercek bulanık|merceğin bulanık|geri döndürülebilir körlü|önlenebilir körlü|tedavi edilebilir körlü"],
      ["Tipler: nükleer, kortikal, posterior subkapsüler", "nükleer|kortikal|subkapsüler|arka kapsül altı|posterior kapsül altı"],
      ["Risk: yaş, diyabet, sigara, UV, kortikosteroid, travma, üveit", "yaşlan|yaşa bağlı|senil|diyabet|sigara|ultraviyole|güneş ışığı|kortikosteroid|steroid kullan|travma"],
      ["Belirti: ağrısız ilerleyici bulanık görme, kamaşma, miyopik kayma", "ağrısız|yavaş ilerle|ilerleyici bulanık|kamaşma|parlama|glare|miyopik kayma|ikinci görme|yakını daha iyi"],
      ["Konjenital kataraktta lökokori; ambliyopi riskiyle erken cerrahi", "konjenital katarakt|doğumsal katarakt|lökokori|beyaz pupil|kırmızı refle kayb|kırmızı refle yok|kırmızı refle alınam|anormal kırmızı refle|ambliyopi"],
      ["!Tedavi cerrahi: fakoemülsifikasyon + göz içi lens; endikasyon günlük işlev kaybı", "fakoemülsifikasyon|fako|göz içi lens|göziçi lens|intraoküler lens|iol|yapay lens|katarakt ameliyat|katarakt cerrahi|günlük yaşam"],
      ["Komplikasyon: arka kapsül opasifikasyonu (Nd:YAG kapsülotomi), endoftalmi", "arka kapsül opasif|kapsül kesifle|ikincil katarakt|sekonder katarakt|kapsülotomi|nd yag|yag lazer|endoftalm"]
    ]},
  { id: "goz-diyabetik-retinopati", tr: "Diyabetik retinopati", en: "Diabetic retinopathy", cat: "ret", lvl: 1,
    src: { k: [KA, VA], m: [DR,
      ["American Diabetes Association. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes—2025. Diabetes Care 2025", null]] },
    c: [
      ["!Nonproliferatif: mikroanevrizma, intraretinal hemoraji, sert eksuda, venöz boncuklanma", "nonproliferatif|non proliferatif|npdr|mikroanevrizma|nokta leke|sert eksüda|sert eksuda|venöz boncuk|irma"],
      ["!Proliferatif: neovaskülarizasyon; vitreus hemorajisi ve traksiyonel dekolman", "proliferatif|traksiyonel|pdr"],
      ["!Diyabetik makula ödemi: santral görme kaybının en sık nedeni; OCT ile tanı", "diyabetik makula|diyabetik maküla|dmö|dme"],
      ["Tarama: tip 1'de tanıdan 5 yıl sonra, tip 2'de tanı anında; sonra yıllık", "tip 1|tip bir|beş yıl sonra|5 yıl sonra|tip 2|tip iki|tanı anında|tanı konduğu anda"],
      ["Gebelikte retinopati hızlanabilir; gebelik öncesi/erken gebelikte muayene", "gebelik|gebe|hamile"],
      ["Sistemik kontrol: glisemi, kan basıncı, lipitler; hızlı HbA1c düşüşünde erken kötüleşme olabilir", "glisemik kontrol|kan şekeri kontrol|hba1c|fenofibrat|erken kötüleşme|lipid kontrol|lipit kontrol|glisemi ve tansiyon|glisemi ve kan basıncı|hızlı glisemi düzel"],
      ["Tedavi: merkezi tutan makula ödeminde intravitreal anti-VEGF; PDR'de panretinal fotokoagülasyon veya anti-VEGF; vitrektomi", "merkezi tutan|merkezi tutulum|santrali tutan|center involving|proliferatif retinopatide|vitrektomi"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "goz-primer-acik-acili-glokom", tr: "Primer açık açılı glokom", en: "Primary open-angle glaucoma", cat: "gl", lvl: 2,
    src: { k: [KA, VA], m: [EGS, POAG] },
    c: [
      ["!Kronik ilerleyici optik nöropati: retina sinir lifi kaybı, optik disk çukurlaşması", "optik nöropati|çukurlaşma|cup disk|cup to disc|c d oranı|kaplama|ekskavasyon|sinir lifi|nöroretinal rim|disk çukur"],
      ["!Açık açı; göz içi basıncı en önemli değiştirilebilir risk (normal basınçlı glokom da olur)", "açık açı|göz içi basınc|göziçi basınc|göz tansiyon|gib|iop|değiştirilebilir risk|normal basınçlı|normotansif glokom|düşük basınçlı glokom"],
      ["Risk: ileri yaş, aile öyküsü, Afrika kökeni, miyopi, ince kornea", "aile öyküsü|ailede glokom|siyahi|afrika|ince kornea|santral kornea kalınlığı|pakimetri|miyop|ileri yaş"],
      ["Sinsi seyir: belirtisiz, periferden başlayan görme alanı kaybı (arkuat skotom, nazal basamak)", "sinsi|belirti vermez|semptomsuz|asemptomatik|sessiz|görme alanı|perimetri|arkuat|nazal basamak|tünel görme|bjerrum"],
      ["Tanı: tonometri, gonyoskopi, optik disk/OCT, görme alanı", "tonometri|goldmann|gonyoskop|goniyoskop|gonioskop|oct|optik koherens|fundus muayene|optik disk muayene"],
      ["!İlk basamak: prostaglandin analoğu damla ya da seçici lazer trabeküloplasti (SLT); hedef basınç", "prostaglandin|latanoprost|bimatoprost|travoprost|tafluprost|trabeküloplasti|slt|seçici lazer|hedef basınç|hedef göz içi"],
      ["Diğer damlalar ve cerrahi: beta bloker, karbonik anhidraz inhibitörü, alfa agonist; trabekülektomi, tüp", "timolol|beta bloker|dorzolamid|brinzolamid|karbonik anhidraz|brimonidin|alfa agonist|trabekülektomi|tüp şant|ahmed|migs|filtran cerrahi"]
    ]},
  { id: "goz-keratit", tr: "Keratit (bakteriyel, herpetik, akantamöba)", en: "Keratitis", cat: "on", lvl: 2,
    src: { k: [KA, VA], m: [BKER,
      ["White ML, Chodosh J. Herpes Simplex Virus Keratitis: A Treatment Guideline. AAO 2014", "https://aao.org/education/clinical-statement/herpes-simplex-virus-keratitis-treatment-guideline"]] },
    c: [
      ["!Kontakt lens en önemli risk; lensle uyuma, lensi suyla temizleme", "kontakt lens|lens kullan|lensle uyu|lensle yüzme|lensle havuz|lens solüsyon|musluk suyu"],
      ["!Bakteriyel keratit: kontakt lensle Pseudomonas; kazıntı-kültür, sık topikal antibiyotik (florokinolon ya da güçlendirilmiş)", "pseudomonas|psödomonas|kazıntı|kültür|korneal kazı|florokinolon|moksifloksasin|güçlendirilmiş|fortifiye|sefazolin|tobramisin|vankomisin"],
      ["!HSV epitelyal keratit: dendritik ülser (floresein); asiklovir/gansiklovir; epitelyal hastalıkta steroid kontrendike", "dendrit|herpes|hsv|herpetik|asiklovir|gansiklovir|valasiklovir|trifluridin|kornea duyusu|hipoestezi"],
      ["Herpetik stromal keratitte antiviral koruma altında topikal steroid", "stromal keratit|disiform|antiviral koruma|antiviral eşliğinde|antiviral ile birlikte|stromal"],
      ["Akantamöba: bulguyla orantısız şiddetli ağrı, halka infiltrat, perinöral infiltrat; PHMB/klorheksidin", "akantamöb|acanthamoeba|orantısız ağrı|ağrı bulgu ile orantısız|halka infiltrat|halka şekl|perinöral|radyal keratonöri|phmb|poliheksametilen|klorheksidin|biguanid|propamidin|konfokal"],
      ["Klinik: ağrı, fotofobi, kornea infiltratı/ülseri, hipopiyon", "kornea ülser|korneal ülser|infiltrat|hipopiyon|epitel defekt|floresein boya"],
      ["Mantar keratit: bitkisel travma; natamisin", "mantar|fungal|fusarium|natamisin|vorikonazol|bitkisel travma|ağaç dalı"]
    ]},
  { id: "goz-yasa-bagli-makula-dejenerasyonu", tr: "Yaşa bağlı makula dejenerasyonu", en: "Age-related macular degeneration", cat: "ret", lvl: 2,
    src: { k: [KA, VA], m: [AMD,
      ["CATT Research Group. Ranibizumab and bevacizumab for neovascular age-related macular degeneration. N Engl J Med 2011", "https://doi.org/10.1056/NEJMoa1102673"]] },
    c: [
      ["!Yaşlılarda santral görme kaybı; periferik görme korunur", "merkezi görme|okuma güçlüğü|okumakta|yüzleri tanı|periferik görme korun|santral skotom"],
      ["Risk: yaş, sigara, aile öyküsü/genetik (CFH)", "sigara|tütün|aile öyküsü|genetik|cfh|kompleman faktör h|arms2"],
      ["!Kuru (atrofik) tip: drusen, coğrafi atrofi; ara evrede AREDS2 vitamin desteği", "kuru tip|kuru form|atrofik|drusen|druzen|coğrafi atrofi|areds|lutein|zeaksantin|antioksidan"],
      ["!Yaş (neovasküler) tip: koroidal neovaskülarizasyon, sıvı-kanama; metamorfopsi ile ani bozulma", "yaş tip|yaş form|ıslak tip|ıslak form|neovasküler|koroid neovask|koroidal neovask|knv|cnv|metamorfopsi|çarpık görme|eğri görme"],
      ["Amsler ızgarası ile ev takibi; OCT ve floresein/OCT anjiyografi ile tanı", "amsler|ızgara|oct anjiyo|floresein anjiyo|ffa"],
      ["!Neovasküler tipte intravitreal anti-VEGF (ranibizumab, aflibersept, bevasizumab, faricimab) tekrarlayan enjeksiyonlarla", "anti vegf|antivegf|vegf|intravitreal|göz içine iğne|ranibizumab|aflibersept|bevasizumab|faricimab|brolusizumab"],
      ["Coğrafi atrofide kompleman inhibitörleri (pegcetacoplan, avacincaptad pegol)", "pegsetakoplan|pegcetacoplan|avasinkaptad|avacincaptad|kompleman inhibit"]
    ]},
  { id: "goz-retina-dekolmani", tr: "Retina dekolmanı", en: "Retinal detachment", cat: "ret", lvl: 2,
    src: { k: [KA, VA], m: [PVD,
      ["Steel D. Retinal detachment. BMJ Clin Evid 2014", null]] },
    c: [
      ["!Regmatojen tip en sık: retinal yırtıktan sıvı subretinal alana geçer; arka vitreus dekolmanı zemininde", "regmatojen|yırtık|retina deliğ|retinal delik|subretinal sıvı|arka vitreus dekol|vitreus dekolman|vitreus ayrıl|pvd"],
      ["Diğer tipler: traksiyonel (diyabet) ve eksudatif (seröz)", "traksiyonel|eksüdatif|eksudatif|seröz dekolman"],
      ["!Belirtiler: fotopsi (ışık çakması), yeni uçuşan cisimler, perde/gölge şeklinde görme alanı kaybı", "fotopsi|ışık çakma|şimşek|flaş|uçuşan|sinek uçuş|floater|perde|gölge|tül"],
      ["Risk: miyopi, katarakt cerrahisi sonrası, travma, lattis dejenerasyonu, diğer gözde dekolman", "miyop|katarakt cerrahisi sonrası|katarakt ameliyatı sonra|afak|psödofak|travma|lattis|lattice"],
      ["Tanı: dilate fundus muayenesi (indirekt oftalmoskopi); görülmüyorsa ultrason", "dilate fundus|indirekt oftalmoskop|fundus muayene|göz dibi muayene|ultrason|usg|b mod"],
      ["Dekolmansız yırtıkta lazer retinopeksi/kriyoterapi", "lazer retinopeksi|baraj lazer|lazer fotokoag|kriyo|dondurma"],
      ["!Cerrahi acil (özellikle makula yapışıkken): pnömatik retinopeksi, skleral çökertme, vitrektomi", "makula yapışık|makula on|makula henüz|maküla korun|skleral çökert|skleral bant|scleral buckle|pnömatik|gaz enjeksiyon|vitrektomi|silikon"]
    ]},
  { id: "goz-santral-retina-arter-tikanikligi", tr: "Santral retina arter tıkanıklığı", en: "Central retinal artery occlusion", cat: "ret", lvl: 2,
    src: { k: [KA, VA], m: [
      ["Mac Grory B ve ark. Management of Central Retinal Artery Occlusion: A Scientific Statement From the American Heart Association. Stroke 2021", "https://doi.org/10.1161/STR.0000000000000366"],
      RAO] },
    c: [
      ["!Ani, ağrısız, tek taraflı ve derin görme kaybı; göz inmesi (akut iskemik inme eşdeğeri)", "ani ağrısız|ağrısız ani|aniden ağrısız|göz inmesi|retina inmesi|oküler inme|inme eşdeğer|iskemik inme"],
      ["!Fundus: retina beyazlaşması (ödem), kiraz kırmızısı leke; RAPD", "kiraz kırmızı|kiraz kırmız|cherry red|retina beyaz|soluk retina|retinal ödem|retina ödem|rapd|afferent pupil|marcus gunn|vagon"],
      ["Neden: karotis/kardiyak emboli (Hollenhorst plağı), ateroskleroz", "emboli|karotis|karotid|hollenhorst|kolesterol embol|atrial fibril|ateroskleroz"],
      ["!Dev hücreli arteriti dışla: ESH/CRP, yaşlıda acil steroid", "dev hücreli|temporal arterit|giant cell|sedimantasyon|esh|crp|c reaktif|çene kladikasyo"],
      ["Acil inme merkezine sevk; inme ve kardiyovasküler değerlendirme (beyin MR, karotis Doppler, EKG/ekokardiyografi)", "inme merkez|inme ünite|nöroloji|difüzyon|beyin mr|emar|karotis doppler|karotid doppler|ekokardiyo|ritim holter|kardiyovasküler değerlendir"],
      ["Konservatif yöntemlerin (göz masajı, ön kamara parasentezi) yararı kanıtlanmamış; erken trombolitik araştırılıyor", "yararı kanıtlanma|kanıtlanmamış|etkinliği gösterilme|kanıt yok|faydası gösterilme|trombolit|tpa|alteplaz|tenekteplaz"]
    ]},
  { id: "goz-retinal-ven-tikanikligi", tr: "Retinal ven tıkanıklığı", en: "Retinal vein occlusion", cat: "ret", lvl: 2,
    src: { k: [KA, VA], m: [RVO,
      ["Schmidt-Erfurth U ve ark. Guidelines for the Management of Retinal Vein Occlusion by the European Society of Retina Specialists (EURETINA). Ophthalmologica 2019", null]] },
    c: [
      ["!Santral ve dal ven tıkanıklığı; arteriovenöz çaprazlaşmada", "santral ven|dal ven|dal retinal ven|brvo|crvo|arteriovenöz çapraz|av çapraz"],
      ["Risk: hipertansiyon, yaş, diyabet, hiperlipidemi, glokom; gençte trombofili", "hipertansiyon|hipertansif|glokom|hiperlipidemi|trombofili|hiperviskozite|diyabet"],
      ["!Fundus: CRVO'da dört kadranda alev şeklinde kanamalar, kıvrımlı venler, disk ödemi ('kan ve gök gürültüsü'); BRVO'da tıkalı venin sektöründe kanama", "sektörel kanama|alev şekl|mum alevi|yaygın kanama|dört kadran|kıvrımlı ven|tortüöz|dilate ven|gök gürültü|kan ve gök|domates"],
      ["İskemik/non-iskemik ayrımı; iskemik tipte neovaskülarizasyon ve neovasküler glokom riski", "iskemik|non iskemik|perfüzyon|neovasküler glokom|rubeozis|iris neovask|doksan gün glokom"],
      ["!Makula ödemine intravitreal anti-VEGF; deksametazon implantı alternatif", "anti vegf|antivegf|vegf|intravitreal|ranibizumab|aflibersept|bevasizumab|faricimab|deksametazon implant|ozurdex|makula ödem"],
      ["Neovaskülarizasyonda panretinal fotokoagülasyon", "panretinal|prp|fotokoagülasyon|lazer tedavi"],
      ["Sistemik risk faktörlerinin kontrolü (KB, lipit, şeker)", "risk faktörlerinin kontrol|risk faktörleri kontrol|risk faktörleri mutlaka kontrol|tansiyonun kontrol|kan basıncı kontrol|sistemik değerlendir|kardiyovasküler risk"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "goz-uveit-behcet", tr: "Üveit ve Behçet üveiti", en: "Uveitis and Behçet uveitis", cat: "nor", lvl: 3,
    src: { k: [KA, VA], m: [
      ["Hatemi G ve ark. 2018 update of the EULAR recommendations for the management of Behçet's syndrome. Ann Rheum Dis 2018", "https://doi.org/10.1136/annrheumdis-2018-213225"],
      ["Standardization of Uveitis Nomenclature (SUN) Working Group. Standardization of uveitis nomenclature for reporting clinical data. Am J Ophthalmol 2005", null]] },
    c: [
      ["!Anatomik sınıflama (SUN): ön, intermediyer, arka, panüveit", "ön üveit|anterior üveit|iridosiklit|intermediyer|pars planit|arka üveit|posterior üveit|panüveit|sun sınıf"],
      ["!Ön üveit bulguları: siliyer enjeksiyon, ön kamarada hücre ve flare, keratik presipitat, arka sineşi, miyozis", "siliyer enjeksiyon|perilimbal|hücre ve flare|flare|hücre reaksiyon|keratik presipitat|kp|sineşi|sinesi|miyozis|küçük pupil"],
      ["Ön üveitte HLA-B27 ve spondiloartrit ilişkisi", "hla b27|hla b 27|b27|ankilozan|spondilo|reaktif artrit"],
      ["Ön üveit tedavisi: topikal steroid + sikloplejik (sineşiyi önler); enfeksiyöz nedeni dışla", "topikal steroid|prednizolon asetat|steroid damla|sikloplejik|siklopentolat|atropin|homatropin|enfeksiyöz neden|enfeksiyonu dışla|toksoplazma|tüberküloz|sifiliz"],
      ["!Behçet üveiti: tekrarlayan, nongranülomatöz panüveit/retinal vaskülit; hareketli hipopiyon; körlük riski", "behçet|behcet|retinal vaskülit|retina vaskülit|hipopiyon|tıkayıcı vaskülit|oklüzif vaskülit|nongranülomatöz"],
      ["!Behçet arka segment tutulumu: azatiyoprin, siklosporin, interferon alfa veya anti-TNF (infliksimab/adalimumab); steroid tek başına verilmez", "azatiyoprin|siklosporin|interferon|anti tnf|antitnf|infliksimab|adalimumab|tnf alfa inhib"],
      ["Komplikasyon: katarakt, glokom, kistoid makula ödemi", "kistoid makula|kistoid maküla|kmö|cme|sekonder glokom|komplike katarakt|komplikasyon"]
    ]},
  { id: "goz-optik-nevrit", tr: "Optik nörit (oftalmolojik yaklaşım)", en: "Optic neuritis", cat: "nor", lvl: 3,
    src: { k: [KA, VA], m: [
      ["Petzold A ve ark. Diagnosis and classification of optic neuritis. Lancet Neurol 2022", "https://doi.org/10.1016/S1474-4422(22)00200-9"],
      ["Beck RW ve ark. A randomized, controlled trial of corticosteroids in the treatment of acute optic neuritis. N Engl J Med 1992", "https://doi.org/10.1056/NEJM199202273260901"]] },
    c: [
      ["!Genç kadında günler içinde tek taraflı görme kaybı ve göz hareketiyle ağrı", "göz hareketiyle ağrı|göz hareketi ile ağrı|göz hareketinde ağrı|hareketle ağrı|gözü oynatınca|genç kadın|tek taraflı görme kaybı"],
      ["!RAPD, renkli görme bozukluğu (kırmızı desatürasyonu), santral skotom", "rapd|afferent pupil|marcus gunn|renkli görme|renk görme|kırmızı desatür|kırmızıyı soluk|santral skotom|ishihara"],
      ["Fundus çoğunlukla normal (retrobulber); papillit olabilir", "retrobulber|retrobülber|fundus normal|göz dibi normal|papillit|disk ödemi"],
      ["!Orbita ve beyin MR (gadolinyumlu): MS lezyonları ve gelecekteki MS riski", "emar|mr|manyetik rezonans|gadolin|kontrastlı|multipl skleroz|ms riski|demiyelinizan|demiyelin"],
      ["Atipik formlar: AQP4-IgG (NMOSD), MOG antikoru; bilateral/ağır/iyileşmeyen", "aqp4|akuaporin|nöromiyelit|nmo|mog|atipik|bilateral|iyileşmeyen"],
      ["!ONTT: IV metilprednizolon iyileşmeyi hızlandırır ama son görmeyi değiştirmez; tek başına oral prednizon önerilmez", "metilprednizolon|pulse steroid|iv steroid|intravenöz steroid|damardan steroid|iyileşmeyi hızlandır|son görme|uzun dönem görme|optic neuritis treatment trial|ontt|oral prednizon tek başına|tek başına oral"],
      ["Doğal seyirde görme çoğunlukla haftalar içinde düzelir", "kendiliğinden düzel|spontan düzel|haftalar içinde düzel|iyi prognoz|görme düzel"]
    ]},
  { id: "goz-sasilik-ambliyopi", tr: "Şaşılık ve ambliyopi", en: "Strabismus and amblyopia", cat: "ped", lvl: 3,
    src: { k: [KA, VA], m: [AMB,
      ["Esotropia and Exotropia Preferred Practice Pattern (AAO). Ophthalmology 2023", "https://doi.org/10.1016/j.ophtha.2022.11.002"]] },
    c: [
      ["!Ambliyopi: görsel gelişim döneminde yetersiz uyarı nedeniyle yapısal neden olmadan görme azlığı", "ambliyopi|tembel göz|görsel gelişim|kritik dönem|kritik periyot|duyarlı dönem|nöral gelişim"],
      ["Nedenleri: şaşılık, anizometropi, görme yoksunluğu (konjenital katarakt, pitoz)", "anizometrop|refraksiyon farkı|deprivasyon|yoksunluk|pitoz|strabismik"],
      ["Şaşılık tipleri: ezotropya, ekzotropya; akomodatif ezotropya hipermetropide", "ezotropi|esotropi|içe kayma|ekzotropi|eksotropi|dışa kayma|akomodatif|hipermetrop|infantil ezotropi"],
      ["Muayene: Hirschberg (kornea ışık refleksi), örtme-açma testi, sikloplejik refraksiyon", "hirschberg|kornea ışık refle|kapama testi|örtme testi|örtme açma|cover test|sikloplejik refraksiyon"],
      ["!Tedavi: gözlükle refraksiyon düzeltme, sağlam gözün kapatılması veya atropin penalizasyonu; erken başlama", "gözlükle|gözlük ver|gözlük tak|gözlük reçete|refraksiyon kusurunun düzelt|refraksiyon kusuru düzelt|kapatma|kapama tedavi|bant|oklüzyon|patching|atropin|penalizasyon|erken yaşta|erken başla"],
      ["Şaşılık cerrahisi: ekstraoküler kas geriletme/rezeksiyon", "şaşılık cerrahi|şaşılık ameliyat|kas cerrahi|geriletme|rezeksiyon|botulinum"],
      ["!Yeni şaşılıkta retinoblastom gibi altta yatan nedeni dışla (dilate fundus)", "retinoblastom|altta yatan|organik neden|fundus muayene|göz dibi|dilate muayene|kranial sinir felci|altıncı sinir"]
    ]},
  { id: "goz-prematurite-retinopatisi", tr: "Prematüre retinopatisi (ROP)", en: "Retinopathy of prematurity", cat: "ped", lvl: 3,
    src: { k: [KA, VA], m: [
      ["Fierson WM ve ark. Screening Examination of Premature Infants for Retinopathy of Prematurity. Pediatrics 2018", "https://doi.org/10.1542/peds.2018-3061"],
      ["Chiang MF ve ark. International Classification of Retinopathy of Prematurity, Third Edition. Ophthalmology 2021", "https://doi.org/10.1016/j.ophtha.2021.05.031"]] },
    c: [
      ["!İmmatür retinada anormal vaskülarizasyon; risk düşük doğum ağırlığı, düşük gestasyon yaşı, oksijen", "immatür retina|olgunlaşmamış retina|anormal damarlan|vaskülarizasyon|düşük doğum ağırlığı|gestasyon|gebelik haftası|prematür|oksijen"],
      ["!Tarama (AAP 2018): doğum ağırlığı ≤1500 g veya gestasyon ≤30 hafta, ayrıca riskli bebekler", "1500|bin beş yüz|30 hafta|otuz hafta|risk grubundaki bebek"],
      ["Sınıflama (ICROP3): zon I–III, evre 1–5, artı (plus) hastalık, agresif ROP", "zon|zone|plus|artı hastalık|agresif rop|icrop|demarkasyon"],
      ["!Tedavi: lazer fotokoagülasyon veya intravitreal anti-VEGF", "lazer|fotokoagülasyon|anti vegf|antivegf|bevasizumab|ranibizumab|intravitreal"],
      ["Anti-VEGF sonrası geç nüks nedeniyle uzun izlem", "geç nüks|geç reaktivasyon|reaktivasyon|uzun izlem|uzun süre takip"],
      ["İleri evrelerde retina dekolmanı ve körlük; vitreoretinal cerrahi", "evre 4|evre 5|evre dört|evre beş|körlük"],
      ["Uzun dönem: miyopi, şaşılık, ambliyopi", "miyop|şaşılık|ambliyopi|strabismus"]
    ]},
  { id: "goz-retinoblastom", tr: "Retinoblastom", en: "Retinoblastoma", cat: "ped", lvl: 3,
    src: { k: [KA, VA], m: [
      ["Dimaras H ve ark. Retinoblastoma. Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.21"],
      ["Global Retinoblastoma Study Group. Global retinoblastoma presentation and analysis by national income level. JAMA Oncol 2020", null]] },
    c: [
      ["!Çocukluğun en sık primer göz içi malignitesi; RB1 tümör baskılayıcı gen, iki vuruş hipotezi (Knudson)", "rb1|rb geni|rb 1|tümör baskılayıcı|iki vuruş|knudson|çocukluk çağının en sık göz içi|en sık göz içi malign|en sık intraoküler"],
      ["Kalıtsal (germline) form: bilateral/multifokal, erken yaş; genetik danışma ve kardeş taraması", "germline|germ hattı|kalıtsal|herediter|bilateral|iki taraflı|multifokal|genetik danışma|kardeş taraması"],
      ["!En sık bulgu lökokori, ardından şaşılık", "lökokori|beyaz pupil|kedi gözü|kırmızı refle kayb|kırmızı refle yok|kırmızı refle alınam|anormal kırmızı refle|beyaz refle|şaşılık|strabismus"],
      ["Tanı: anestezi altında dilate muayene, USG ve MR (kalsifikasyon); biyopsi yapılmaz", "anestezi altında|ultrason|usg|kalsifik|emar|mr|biyopsi yapılmaz|biyopsi yapmıyoruz|biyopsiden kaçın|iğne aspirasyonu yapılmaz"],
      ["Germline taşıyıcıda radyasyondan kaçınma; ikincil tümör (osteosarkom) ve trilateral retinoblastom (pineal)", "osteosarkom|ikincil tümör|ikinci primer|sekonder malign|trilateral|pineal|radyasyondan kaçın"],
      ["!Tedavi: göz koruyucu kemoterapi (sistemik, intraarteriyel, intravitreal) + fokal tedavi; ileri olguda enükleasyon", "kemoterapi|intraarter|intra arter|intravitreal|fokal tedavi|kriyoterapi|termoterapi|lazer|enükleasyon|gözün çıkarıl"],
      ["Prognoz: erken tanıda sağkalım yüksek; düşük gelirli ülkelerde geç başvuru", "sağkalım|erken tanı|geç başvuru|düşük gelirli|ekstraoküler yayılım"]
    ]}
]
});
})();
