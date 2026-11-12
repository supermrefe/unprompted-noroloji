/* Kadın hastalıkları ve doğum — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta en sık sorulan ve doğumhanede/acil jinekolojide hayat kurtaran konular (ektopik gebelik,
   preeklampsi-HELLP, doğum sonu kanama, plasenta previa/dekolman), Türkiye'de tarama programı olanlar (GDM 75 g OGTT,
   serviks HPV taraması) ve poliklinikte günlük karşılaşılan jinekolojik endokrinoloji (PKOS, AUB, endometriozis, menopoz).
   Kılavuz farkı olan yerlerde etikette ya da docs/klinik/kadin-dogum.md'de hangi kılavuzun kullanıldığı belirtildi. */
UP.add({ id: "kadin-dogum", subs: {
    obs: "Obstetri",
    jin: "Jinekoloji",
    end: "Jinekolojik endokrinoloji"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "kd-ektopik-gebelik", tr: "Ektopik gebelik", en: "Ectopic pregnancy", cat: "obs", lvl: 1,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Berek & Novak's Gynecology, 17. baskı (2025)"],
      m: [["ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstet Gynecol 2018", "https://doi.org/10.1097/AOG.0000000000002560"],
          ["Ectopic pregnancy and miscarriage: diagnosis and initial management (NICE NG126). NICE 2019, güncelleme 2023", "https://www.nice.org.uk/guidance/ng126"]]
    },
    c: [
      ["!Gebeliğin uterus kavitesi dışında, en sık tüpte (ampulla) yerleşmesi", "tüpte|tubal|tuba|fallop|ampulla|kavite dışı|dış gebelik|ektopik"],
      ["Risk etkenleri: geçirilmiş ektopik, PID/klamidya, tüp cerrahisi, yardımcı üreme, RİA", "pelvik inflamatuvar|pid|klamidya|tüp cerrahi|tüp ligasyon|tüpleri bağlat|geçirilmiş ektopik|önceki ektopik|tüp bebek|ivf|yardımcı üreme|rahim içi araç|sigara"],
      ["!Klasik triad: adet gecikmesi, pelvik ağrı, vajinal kanama", "adet gecik|adet rötar|son adet|lekelenme"],
      ["!Tanı: serum beta-hCG ile transvajinal ultrason; uterusta gebelik kesesi görülmemesi", "beta hcg|beta-hcg|betahcg|hcg|kese görül|gebelik kesesi|kese yok"],
      ["Yeri bilinmeyen gebelikte 48 saat arayla seri beta-hCG", "48 saat|kırk sekiz saat|seri beta|seri hcg|tekrar beta|yeri bilinmeyen|pregnancy of unknown"],
      ["!Rüptür: hemoperitoneum, hemodinamik instabilite → acil cerrahi", "rüptür|yırtıl|hemoperiton|batın içi kanama|karın içi kanama|şok|hipotansi|instabil|douglas|omuz ağrı"],
      ["Stabil, uygun hastada tıbbi tedavi: metotreksat", "metotreksat|methotrexate|mtx"],
      ["Cerrahi: laparoskopik salpingostomi ya da salpenjektomi", "salpingostomi|salpenjektomi|salpingektomi|tüp alın|tüpün alın"],
      ["Rh negatifse anti-D", "anti d|anti-d|rh negatif|rhogam"]
    ]},
  { id: "kd-preeklampsi", tr: "Preeklampsi ve eklampsi", en: "Preeclampsia and eclampsia", cat: "obs", lvl: 1,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Creasy & Resnik's Maternal-Fetal Medicine: Principles and Practice, 9. baskı (2023)"],
      m: [["Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin No. 222. Obstet Gynecol 2020", "https://pubmed.ncbi.nlm.nih.gov/32443079/"],
          ["The 2021 ISSHP classification, diagnosis & management recommendations for international practice. Pregnancy Hypertens 2022", "https://doi.org/10.1016/j.preghy.2021.09.008"]]
    },
    c: [
      ["!20. gebelik haftasından sonra yeni başlayan hipertansiyon (≥140/90)", "140 90|140 a 90|yüz kırka doksan|20. haftadan sonra|20 haftadan sonra|20. hafta sonrası|yirminci haftadan sonra|20. gebelik haftasından sonra|yeni başlayan hipertans|gebelikte hipertans|tansiyon yüksel"],
      ["!Proteinüri ya da uç organ tutulumu (böbrek, karaciğer, trombosit, nörolojik, akciğer ödemi)", "proteinüri|idrarda protein|protein kreatinin|uç organ|organ tutulum|trombositopeni|transaminaz|kreatinin yüksel|akciğer ödem|baş ağrı|görme bozuk|skotom|epigastr"],
      ["Ağır özellik: ≥160/110 kan basıncı", "160 110|160 a 110|yüz altmış|ağır özellik|ağır preeklampsi|şiddetli"],
      ["Patogenez: anormal plasentasyon, spiral arter yeniden şekillenmesinin bozulması, anjiyojenik dengesizlik", "plasentasyon|spiral arter|trofoblast|endotel|sflt|plgf|anjiyojenik|antianjiyojenik"],
      ["!Eklampsi profilaksisi ve tedavisi: magnezyum sülfat", "magnezyum|mgso4|mg so4|sülfat"],
      ["Akut ağır hipertansiyonda labetalol, hidralazin ya da oral nifedipin", "labetalol|hidralazin|nifedipin"],
      ["!Kesin tedavi doğum; ağır özelliği olmayan preeklampside 37. haftada, ağır özellikli preeklampside ≥34. haftada doğum", "kesin tedavi doğum|tek kesin tedavi|doğurtmak|doğurt|doğumun gerçekleş|37. haftada doğum|37 haftada doğum|34. haftada doğum|34 haftada doğum"],
      ["Yüksek riskte düşük doz aspirin ile korunma", "aspirin|asetilsalisilik"],
      ["Magnezyum toksisitesi izlemi: derin tendon refleksi, solunum; antidot kalsiyum glukonat", "patella refleks|derin tendon|tendon refleks|kalsiyum glukonat|solunum sayı|idrar çıkış"]
    ]},
  { id: "kd-postpartum-kanama", tr: "Doğum sonu kanama", en: "Postpartum hemorrhage", cat: "obs", lvl: 1,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8. baskı (2021)"],
      m: [["FIGO recommendations on the management of postpartum hemorrhage 2022. Int J Gynaecol Obstet 2022", "https://doi.org/10.1002/ijgo.14116"],
          ["WHO recommendations on the assessment of postpartum blood loss and use of a treatment bundle for postpartum haemorrhage. WHO 2023", "https://www.who.int/publications/i/item/9789240085398"]]
    },
    c: [
      ["!Tanım: doğum sonrası ≥500 mL kan kaybı ya da hemodinamik bozulma", "500 mililitre|500 ml|beş yüz|500 cc|1000 mililitre|bin mililitre|kan kayb"],
      ["!Nedenler: 4T — tonus, travma, doku, trombin; en sık uterus atonisi", "4t|dört t|tonus|ton|atoni|travma|doku|trombin|pıhtılaşma|koagülopati"],
      ["!Korunma: üçüncü evrenin aktif yönetimi, profilaktik oksitosin", "aktif yönetim|üçüncü evre|3. evre|oksitosin|oxytocin|karbetosin|kontrollü kord"],
      ["Kan kaybının objektif ölçümü (kalibre toplama torbası)", "objektif ölç|ölçerek|toplama torba|kalibre|drape|tartarak|kan kaybını ölç"],
      ["Uterus masajı ve ek uterotonikler (ergometrin, misoprostol)", "masaj|uterotonik|ergometrin|metilergonovin|misoprostol|karboprost"],
      ["!Traneksamik asit: doğumdan sonraki ilk 3 saatte", "traneksamik|txa|tranexamic|3 saat|üç saat"],
      ["Dirençli kanamada balon tamponad, embolizasyon, kompresyon dikişi, histerektomi", "balon|bakri|tamponad|emboliz|b lynch|kompresyon dikiş|uterin arter|histerektomi"],
      ["Masif transfüzyon ve E-MOTIVE paketi", "transfüzyon|eritrosit|taze donmuş|e-motive|emotive|paket|bundle"]
    ]},
  { id: "kd-gestasyonel-diyabet", tr: "Gestasyonel diabetes mellitus", en: "Gestational diabetes mellitus", cat: "obs", lvl: 1,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8. baskı (2021)"],
      m: [["IADPSG recommendations on the diagnosis and classification of hyperglycemia in pregnancy. Diabetes Care 2010", "https://pubmed.ncbi.nlm.nih.gov/20190296/"],
          ["15. Management of Diabetes in Pregnancy: Standards of Care in Diabetes—2026. Diabetes Care 2026", "https://doi.org/10.2337/dc26-S015"]]
    },
    c: [
      ["!Gebelikte ilk kez saptanan, aşikâr diyabet olmayan hiperglisemi", "gebelikte ilk kez|gebelikte ortaya|gebelik diyabet|gestasyonel|gdm|gebelik şeker"],
      ["Mekanizma: plasental hormonlarla artan insülin direnci", "plasental laktojen|hpl|plasental hormon|plasentadan salgıla"],
      ["!Tarama: 24–28. haftada 75 g OGTT (tek basamak, IADPSG)", "24 28|24 ile 28|yirmi dört ile|24. ile 28|tek basamak|tek aşama|iadpsg"],
      ["IADPSG eşikleri: açlık 92, 1. saat 180, 2. saat 153 mg/dL; tek değer yeter", "92|153|doksan iki|yüz elli üç|tek değer|tek bir değer"],
      ["İki basamaklı alternatif: 50 g yükleme sonrası 100 g OGTT (Carpenter-Coustan)", "50 gram|50 g|elli gram|100 gram|100 g|yüz gram|iki basamak|iki aşama|carpenter"],
      ["!Tedavi: tıbbi beslenme, egzersiz; hedefe ulaşılamazsa ilk tercih insülin", "tıbbi beslenme|beslenme tedavi|diyet|egzersiz"],
      ["Fetal riskler: makrozomi, omuz distosisi, neonatal hipoglisemi", "makrozomi|iri bebek|omuz distosi|neonatal hipoglisemi|yenidoğan hipoglisemi|bebekte hipoglisemi|polihidramniyo"],
      ["Doğum sonu 4–12. haftada 75 g OGTT ile tip 2 diyabet taraması", "4 12 hafta|4 ile 12|dört ile on iki|ileride tip 2|yeniden tara|postpartum tara|doğumdan sonra tara"]
    ]},
  { id: "kd-plasenta-previa-dekolman", tr: "Plasenta previa ve dekolman plasenta", en: "Placenta previa and placental abruption", cat: "obs", lvl: 1,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8. baskı (2021)"],
      m: [["Placenta Praevia and Placenta Accreta: Diagnosis and Management. RCOG Green-top Guideline No. 27a. BJOG 2019", "https://doi.org/10.1111/1471-0528.15306"],
          ["Oyelese Y, Ananth CV. Placental abruption. Obstet Gynecol 2006", null]]
    },
    c: [
      ["!Previa: plasentanın internal os'u örtmesi; ağrısız, parlak kırmızı kanama", "internal os|iç ağzı|serviks ağzını ört|alt segment|ağrısız kanama|ağrısız vajinal|parlak kırmızı|açık kırmızı"],
      ["!Previada vajinal muayene yapılmaz; tanı transvajinal ultrasonla", "vajinal muayene yapılmaz|vajinal muayene yapma|parmakla muayene yapılmaz|tuşe yapılmaz|tuşe yapma|transvajinal|ultrason|usg"],
      ["Previa risk etkenleri: geçirilmiş sezaryen, çoğul gebelik, ileri yaş, sigara; akreta riski", "geçirilmiş sezaryen|önceki sezaryen|sezaryen skar|akreta|accreta|plasenta yapışma"],
      ["Previada doğum sezaryen ile, transfüzyon olanağı olan merkezde", "sezaryenle doğ|sezaryen ile doğ|doğum sezaryen|elektif sezaryen|planlı sezaryen|kan bankası|transfüzyon"],
      ["!Dekolman: plasentanın doğumdan önce erken ayrılması; ağrılı kanama, sert-hassas uterus", "erken ayrıl|ayrılma|dekolman|abrupsiyon|abruptio|ağrılı kanama|tahta gibi|sert uterus|hassas uterus|hipertonus|tetanik"],
      ["Dekolman risk etkenleri: hipertansiyon/preeklampsi, travma, kokain, sigara", "hipertans|preeklamps|travma|kaza|kokain|sigara"],
      ["Dekolman komplikasyonları: DİK, fetal distres, Couvelaire uterus", "dissemine|intravasküler|koagülopati|fibrinojen|fetal distres|kalp hızı|couvelaire"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "kd-preterm-eylem", tr: "Erken doğum eylemi: antenatal steroid ve tokoliz", en: "Preterm labor: antenatal corticosteroids and tocolysis", cat: "obs", lvl: 2,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Creasy & Resnik's Maternal-Fetal Medicine: Principles and Practice, 9. baskı (2023)"],
      m: [["ACOG Committee Opinion No. 713: Antenatal Corticosteroid Therapy for Fetal Maturation. Obstet Gynecol 2017", "https://doi.org/10.1097/AOG.0000000000002237"],
          ["ACOG Practice Bulletin No. 171: Management of Preterm Labor. Obstet Gynecol 2016", "https://doi.org/10.1097/AOG.0000000000001711"]]
    },
    c: [
      ["!37. gebelik haftasından önce düzenli kasılma ile servikal değişiklik", "37 hafta|37. hafta|otuz yedi|37 haftadan önce|düzenli kasılma|servikal değişik|serviks açıl|serviks silin|erken doğum eylem|preterm eylem"],
      ["Değerlendirme: transvajinal servikal uzunluk, fetal fibronektin", "servikal uzunluk|serviks uzunluğ|serviks boyu|fibronektin"],
      ["!Antenatal kortikosteroid (betametazon/deksametazon) 24–34. haftada", "betametazon|deksametazon|kortikosteroid|antenatal steroid|akciğer olgunlaş|surfaktan"],
      ["Steroidlerle RDS, intraventriküler kanama, NEK ve ölüm azalır", "respiratuvar distres|rds|intraventriküler|ivk|nekrotizan|nek|neonatal ölüm|yenidoğan ölüm"],
      ["!Tokoliz kısa süreli: steroid etkisi ve transfer için yaklaşık 48 saat (nifedipin, atosiban, indometazin)", "tokoli|tokolit|nifedipin|atosiban|indometazin|48 saat|kırk sekiz saat"],
      ["Fetal nöroproteksiyon için magnezyum sülfat (erken haftalarda)", "magnezyum|nöroprotek|serebral palsi"],
      ["GBS durumu bilinmiyorsa intrapartum antibiyotik profilaksisi", "gbs|grup b strep|streptokok|intrapartum antibiyot|penisilin"],
      ["Korunma: kısa serviksde vajinal progesteron, uygun olguda serklaj", "progesteron|serklaj|cerclage"]
    ]},
  { id: "kd-pkos", tr: "Polikistik over sendromu", en: "Polycystic ovary syndrome", cat: "end", lvl: 2,
    src: {
      k: ["Speroff's Clinical Gynecologic Endocrinology and Infertility, 9. baskı (2019)", "Berek & Novak's Gynecology, 17. baskı (2025)"],
      m: [["Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. Hum Reprod 2023", "https://doi.org/10.1093/humrep/dead156"],
          ["Revised 2003 consensus on diagnostic criteria and long-term health risks related to polycystic ovary syndrome (Rotterdam). Fertil Steril 2004", "https://pubmed.ncbi.nlm.nih.gov/14711538/"]]
    },
    c: [
      ["!Rotterdam ölçütleri: 3 bulgudan 2'si (oligo/anovülasyon, hiperandrojenizm, polikistik over morfolojisi)", "rotterdam|üçten iki|3 te 2|3'ten 2|üç bulgudan iki|üç kriterden iki|ikisi yeterli|ikisinin bulunması"],
      ["Oligo-anovülasyon: düzensiz, seyrek adet", "oligomenore|anovülasyon|oligo|seyrek adet|düzensiz adet|adet düzensiz|yumurtlama"],
      ["Hiperandrojenizm: hirsutizm, akne, yüksek serbest testosteron", "hiperandrojen|androjen|hirsutizm|kıllanma|akne|testosteron"],
      ["2023 kılavuzu: erişkinde ultrason yerine AMH kullanılabilir; ergende ultrason/AMH önerilmez", "amh|anti müller|anti-müller|antimüller|ergen|adölesan"],
      ["!Dışlanacaklar: tiroid, prolaktin, KAH (17-OH progesteron)", "tiroid|tsh|prolaktin|konjenital adrenal|17 oh|17-oh|17 hidroksi|cushing|dışla"],
      ["!Metabolik riskler: insülin direnci, tip 2 diyabet, dislipidemi; OGTT ile tarama", "insülin direnc|tip 2 diyabet|metabolik|dislipidemi|ogtt|glukoz tolerans|obezite"],
      ["Tedavi: yaşam tarzı değişikliği; kombine oral kontraseptif; metformin", "yaşam tarzı|kilo ver|oral kontraseptif|kok|doğum kontrol hap|metformin"],
      ["Ovülasyon indüksiyonunda ilk tercih letrozol", "letrozol"],
      ["Uzun süre anovülasyon: endometrial hiperplazi/kanser riski", "endometri hiperplazi|endometrial hiperplazi|endometriyum kanser|endometrial kanser|karşılanmamış östrojen"]
    ]},
  { id: "kd-endometriozis", tr: "Endometriozis", en: "Endometriosis", cat: "jin", lvl: 2,
    src: {
      k: ["Berek & Novak's Gynecology, 17. baskı (2025)", "Speroff's Clinical Gynecologic Endocrinology and Infertility, 9. baskı (2019)"],
      m: [["ESHRE guideline: endometriosis. Hum Reprod Open 2022", "https://doi.org/10.1093/hropen/hoac009"],
          ["Zondervan KT, Becker CM, Missmer SA. Endometriosis. N Engl J Med 2020", null]]
    },
    c: [
      ["!Endometrium benzeri dokunun uterus dışında bulunması; östrojene bağımlı kronik inflamatuvar hastalık", "uterus dışı|rahim dışında|endometrium benzeri|endometriyal doku|östrojen bağım|östrojene bağım|kronik inflamatuvar"],
      ["Yerleşim: over (endometrioma, çikolata kisti), Douglas, uterosakral bağ, derin infiltratif", "endometrioma|çikolata kist|douglas|uterosakral|derin infiltratif|derin endometriozis|over"],
      ["!Belirtiler: dismenore, disparoni, kronik pelvik ağrı, dişezi/dizüri", "dismenore|ağrılı adet|disparoni|ilişkide ağrı|cinsel ilişki|kronik pelvik ağrı|dişezi|dizüri|ağrılı dışkı"],
      ["İnfertilite ile ilişki", "infertil|kısırlık|gebe kalama|gebelik elde"],
      ["!ESHRE 2022: tanı için laparoskopi zorunlu değil; muayene ve görüntüleme (TVUSG/MR) ile klinik tanı", "laparoskopi zorunlu değil|laparoskopi şart değil|altın standart değil|klinik tanı konup|klinik tanı konur|klinik tanı konabilir|görüntülemeyle tanı konur|görüntülemeyle tanı konabilir|görüntüleme ile tanı konur|görüntüleme ile tanı konabilir|laparoskopisiz tanı|cerrahisiz tanı"],
      ["Tedavi: NSAİİ, hormonal tedavi (progestin—dienogest, kombine OK, GnRH analoğu)", "nsaii|nonsteroid|progestin|dienogest|oral kontraseptif|gnrh|levonorgestrel"],
      ["Cerrahi: laparoskopik eksizyon/kistektomi; over rezervi (AMH) korunmalı", "eksizyon|kistektomi|cerrahi|over rezerv|amh"]
    ]},
  { id: "kd-serviks-tarama", tr: "Serviks kanseri taraması ve HPV", en: "Cervical cancer screening and HPV", cat: "jin", lvl: 2,
    src: {
      k: ["Berek & Novak's Gynecology, 17. baskı (2025)", "Williams Gynecology, 4. baskı (2020)"],
      m: [["WHO guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention, 2nd ed. WHO 2021", "https://www.who.int/news/item/06-07-2021-new-recommendations-for-screening-and-treatment-to-prevent-cervical-cancer"],
          ["Ulusal Serviks Kanseri Tarama Programı Standartları. T.C. Sağlık Bakanlığı (KETEM)", "https://platform.who.int/docs/default-source/mca-documents/policy-documents/guideline/TUR-RH-47-02-GUIDELINE-2013-tur-National-Standards-Cervical-Cancer-Screening-Program.pdf"]]
    },
    c: [
      ["!Neden: yüksek riskli HPV (özellikle 16 ve 18) persistan enfeksiyonu", "16 ve 18|16 18|on altı ve on sekiz|persistan|kalıcı enfeksiyon|onkojenik|yüksek riskli hpv"],
      ["Transformasyon zonu; CIN/SIL öncü lezyonları", "transformasyon|skuamokolumnar|cin|sil|intraepitelyal|displazi|öncü lezyon|prekanser"],
      ["!Türkiye: 30–65 yaş kadınlara 5 yılda bir HPV-DNA testi (KETEM, aile hekimliği)", "30 65|30 ile 65|otuz altmış beş|5 yılda bir|beş yılda bir|ketem|aile sağlığı merkez|aile hekim"],
      ["!WHO 2021: birincil tarama HPV-DNA, 30 yaşından itibaren 5–10 yılda bir; HIV pozitifte 25 yaş, 3–5 yılda bir", "5 ile 10|5 10 yıl|beş on yıl|30 yaşından|otuz yaşından|hiv|25 yaş|yirmi beş yaş"],
      ["HPV 16/18 pozitifte doğrudan kolposkopi; diğer yüksek riskli tiplerde sitoloji (Pap smear) ile triyaj", "doğrudan kolposkopi|direkt kolposkopi|16/18 pozitif|16 ve 18 pozitif|diğer yüksek riskli tiplerde"],
      ["Tedavi: ablasyon (termal/kriyo) ya da LEEP/konizasyon", "termal ablasyon|kriyo|leep|lletz|koniza"],
      ["Birincil korunma: HPV aşısı (ergenlik öncesi)", "aşı|vaksin|gardasil"]
    ]},
  { id: "kd-anormal-uterin-kanama", tr: "Anormal uterin kanama (PALM-COEIN)", en: "Abnormal uterine bleeding (PALM-COEIN)", cat: "jin", lvl: 2,
    src: {
      k: ["Berek & Novak's Gynecology, 17. baskı (2025)", "Speroff's Clinical Gynecologic Endocrinology and Infertility, 9. baskı (2019)"],
      m: [["Munro MG et al. The two FIGO systems for normal and abnormal uterine bleeding symptoms and classification of causes of AUB in the reproductive years: 2018 revisions. Int J Gynaecol Obstet 2018", "https://pubmed.ncbi.nlm.nih.gov/30198563/"],
          ["ACOG Committee Opinion No. 557: Management of acute abnormal uterine bleeding in nonpregnant reproductive-aged women. Obstet Gynecol 2013", null]]
    },
    c: [
      ["!Önce gebelik dışlanır (beta-hCG)", "gebelik dışla|gebeliği dışla|gebelik test|beta hcg|hcg|gebelik olmadığ"],
      ["!PALM yapısal nedenler: polip, adenomiyozis, leiomiyom, malignite/hiperplazi", "palm|polip|adenomiyoz|leiomiyom|miyom|malignite"],
      ["!COEIN yapısal olmayan: koagülopati, ovülatuvar, endometriyal, iyatrojenik, sınıflanmamış", "coein|koagülopati|ovülatuvar disf|ovulatuar disf|iyatrojen|sınıflandırılmam|not yet classified"],
      ["Ağır adet kanamasında von Willebrand hastalığı akla gelmeli", "von willebrand|vwh|kanama bozuk|pıhtılaşma bozuk"],
      ["Değerlendirme: hemogram, TSH, transvajinal ultrason; risk varsa endometriyal biyopsi", "hemogram|tam kan|ferritin|endometriyal biyopsi|endometrium biyopsi|pipelle"],
      ["Akut ağır kanamada yüksek doz östrojen/progestin, traneksamik asit", "yüksek doz östrojen|konjuge östrojen|traneksamik|progestin"],
      ["Uzun dönem: LNG-RİA, KOK, cerrahi (histeroskopi, ablasyon, histerektomi)", "levonorgestrel|lng|mirena|hormonlu spiral|histeroskop|endometriyal ablasyon|histerektomi"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "kd-hellp", tr: "HELLP sendromu", en: "HELLP syndrome", cat: "obs", lvl: 3,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Creasy & Resnik's Maternal-Fetal Medicine: Principles and Practice, 9. baskı (2023)"],
      m: [["Haram K, Svendsen E, Abildgaard U. The HELLP syndrome: clinical issues and management. A review. BMC Pregnancy Childbirth 2009", "https://pubmed.ncbi.nlm.nih.gov/19245695/"],
          ["Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin No. 222. Obstet Gynecol 2020", "https://pubmed.ncbi.nlm.nih.gov/32443079/"]]
    },
    c: [
      ["!Hemoliz, karaciğer enzimlerinde yükselme, düşük trombosit", "hemoliz|karaciğer enzim|transaminaz|ast|düşük trombosit|trombositopeni|trombosit düş"],
      ["Ağır preeklampsinin bir formu; hipertansiyon ve proteinüri olmayabilir", "preeklampsi|hipertansiyon olmayabilir|proteinüri olmayabilir|tansiyon normal"],
      ["!Belirti: sağ üst kadran/epigastrik ağrı, bulantı-kusma, halsizlik", "sağ üst kadran|epigastr|bulantı|kusma|halsiz"],
      ["Laboratuvar (Tennessee): LDH ≥600, AST ≥70, trombosit ≤100.000; periferik yaymada şistosit", "ldh|laktat dehidrogenaz|ldh 600 ve üzeri|ldh ≥600|tennessee|mississippi|şistosit|haptoglobin|yayma|bilirubin"],
      ["Komplikasyonlar: DİK, dekolman, akut böbrek hasarı, subkapsüler karaciğer hematomu/rüptürü", "dissemine|intravasküler|dekolman|böbrek hasar|böbrek yetmez|subkapsüler|hematom|karaciğer rüptür"],
      ["!Yönetim: anneyi stabilize et, magnezyum sülfat, antihipertansif; doğum", "magnezyum|antihipertansif|labetalol|doğurt|doğumun gerçekleş|doğum yaptır|stabiliz"],
      ["34. haftadan önce durum izin veriyorsa antenatal steroid", "34 hafta|34. hafta|otuz dört|antenatal steroid|kortikosteroid|betametazon"],
      ["Doğum sonrası en az 48 saat yakın izlem; postpartum başlayabilir", "48 saat|kırk sekiz|postpartum|doğum sonra|lohusa"],
      ["Ayırıcı tanı: gebeliğin akut yağlı karaciğeri, TTP/HÜS", "akut yağlı karaciğer|yağlı karaciğer|ttp|hüs|hemolitik üremik|trombotik trombositopenik"]
    ]},
  { id: "kd-rh-alloimmunizasyon", tr: "Rh (D) alloimmünizasyonu ve anti-D profilaksisi", en: "Rh D alloimmunization", cat: "obs", lvl: 3,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Creasy & Resnik's Maternal-Fetal Medicine: Principles and Practice, 9. baskı (2023)"],
      m: [["ACOG Practice Bulletin No. 181: Prevention of Rh D Alloimmunization. Obstet Gynecol 2017", null],
          ["Qureshi H et al. BCSH guideline for the use of anti-D immunoglobulin for the prevention of haemolytic disease of the fetus and newborn. Transfus Med 2014", "https://doi.org/10.1111/tme.12091"]]
    },
    c: [
      ["!Rh negatif anneye Rh pozitif fetal eritrosit geçişi → anti-D (IgG) oluşumu", "rh negatif|rh pozitif|fetomaternal|fetal eritrosit|anti d|anti-d|duyarlan|sensitiz|alloimmün|izoimmün"],
      ["IgG plasentadan geçer; sonraki gebelikte fetal hemoliz", "igg|plasentadan geç|sonraki gebelik|ikinci gebelik|hemoliz"],
      ["!Fetüs ve yenidoğanın hemolitik hastalığı: anemi, hidrops fetalis", "hemolitik hastalık|eritroblastoz|hidrops|fetal anemi|sarılık|kernikterus"],
      ["İndirekt Coombs ile antikor taraması", "indirekt coombs|coombs|antikor tarama|antikor titre|titre"],
      ["!Profilaksi: 28. haftada rutin anti-D; doğumdan sonra bebek Rh pozitifse 72 saat içinde", "28 hafta|28. hafta|yirmi sekiz|72 saat|yetmiş iki|rhogam|immünglobulin|immunoglobulin"],
      ["Duyarlandırıcı olaylar: düşük, ektopik, amniyosentez, travma, dış versiyon", "düşük|abortus|ektopik|amniyosentez|koryon villus|travma|dış versiyon"],
      ["Kleihauer-Betke ile fetomaternal kanama miktarı ve doz", "kleihauer|betke|akım sitometri|flow sitometri"],
      ["Duyarlanmış gebede MCA Doppler (pik sistolik hız) ve intrauterin transfüzyon", "orta serebral|mca|pik sistolik|intrauterin transfüzyon|kordosentez"]
    ]},
  { id: "kd-menopoz-hrt", tr: "Menopoz ve hormon tedavisi", en: "Menopause and hormone therapy", cat: "end", lvl: 3,
    src: {
      k: ["Speroff's Clinical Gynecologic Endocrinology and Infertility, 9. baskı (2019)", "Berek & Novak's Gynecology, 17. baskı (2025)"],
      m: [["The 2022 hormone therapy position statement of The North American Menopause Society. Menopause 2022", "https://pubmed.ncbi.nlm.nih.gov/35797481/"],
          ["Menopause: identification and management (NICE NG23). NICE 2015, güncelleme 2024", null]]
    },
    c: [
      ["!Tanım: 12 ay amenore; ortalama 50'li yaşlar, yükselen FSH", "12 ay|on iki ay|bir yıl adet|adet görmeme|amenore|fsh"],
      ["!Vazomotor belirtiler (sıcak basması) ve genitoüriner sendrom", "sıcak basma|ateş basma|vazomotor|gece terleme|vajinal kuruluk|genitoüriner|atrofi"],
      ["Uzun dönem: osteoporoz ve kardiyovasküler risk artışı", "osteoporoz|kemik kayb|kırık|kardiyovasküler"],
      ["!HT yararı en fazla: 60 yaş altı ya da menopozdan sonraki 10 yıl içinde başlayanlar", "60 yaş|altmış yaş|10 yıl|on yıl|timing"],
      ["Uterusu olana östrojene progestojen eklenir (endometrial koruma)", "progestojen|progestin|progesteron|uterusu olan|rahmi olan|endometri koru|endometrium koru"],
      ["Transdermal yol VTE ve inme riskini azaltabilir", "transdermal|bant|jel|flaster"],
      ["Kontrendikasyonlar: meme kanseri, VTE, aktif karaciğer hastalığı, açıklanamayan vajinal kanama", "meme kanser|tromboemboli|vte|derin ven|karaciğer hastal|açıklanamayan kanama|nedeni bilinmeyen kanama"],
      ["Genitoüriner sendromda düşük doz vajinal östrojen", "vajinal östrojen|lokal östrojen|vajinal krem|vajinal ovül"],
      ["Hormon dışı seçenekler: SSRI/SNRI, gabapentin, fezolinetant", "ssri|snri|paroksetin|venlafaksin|gabapentin|fezolinetant"]
    ]},
  { id: "kd-over-torsiyonu", tr: "Over (adneks) torsiyonu", en: "Ovarian (adnexal) torsion", cat: "jin", lvl: 3,
    src: {
      k: ["Berek & Novak's Gynecology, 17. baskı (2025)", "Williams Gynecology, 4. baskı (2020)"],
      m: [["Adnexal Torsion in Adolescents: ACOG Committee Opinion No. 783. Obstet Gynecol 2019", "https://pubmed.ncbi.nlm.nih.gov/31348225/"],
          ["Huang C, Hong MK, Ding DC. A review of ovary torsion. Tzu Chi Med J 2017", null]]
    },
    c: [
      ["!Overin/tüpün pedikülü etrafında dönmesi: venöz-arteriyel dolaşım bozulması, iskemi", "pedikül|kendi ekseni|over dön|overin dön|adneks torsiyon|adneksiyel torsiyon|ovaryan torsiyon|over torsiyon"],
      ["Risk: over kisti/kitlesi (özellikle dermoid); ergenlerde normal overde de olabilir", "over kist|kisti|dermoid|teratom|normal over|normal görünümlü over|hiperstimülasyon"],
      ["!Klinik: ani başlayan tek taraflı şiddetli pelvik ağrı, bulantı-kusma", "pelvik ağrı|tek taraflı kasık|alt karın ağrı|adneksiyel ağrı"],
      ["Doppler USG: büyümüş ödemli over, girdap (whirlpool) işareti; normal akım torsiyonu dışlamaz", "whirlpool|girdap|ödemli over|büyümüş over|ödemli ve büyük|akımın normal|akımı normal|akım normal"],
      ["Ayırıcı tanı: ektopik gebelik (beta-hCG), apandisit, kist rüptürü", "ektopik|beta hcg|hcg|kist rüptür"],
      ["!Tanı cerrahi: şüphede gecikmeden laparoskopi", "cerrahi tanı|cerrahi bir tanı|laparoskopi"],
      ["!Görünüm koyu-siyah olsa bile detorsiyon ve over koruma; ooforektomi istisna", "over koru|over korun|overi koru|detorsiyon|overi kurtar"]
    ]},
  { id: "kd-hiperemezis", tr: "Hiperemezis gravidarum", en: "Hyperemesis gravidarum", cat: "obs", lvl: 3,
    src: {
      k: ["Williams Obstetrics, 26. baskı (2022)", "Gabbe's Obstetrics: Normal and Problem Pregnancies, 8. baskı (2021)"],
      m: [["The Management of Nausea and Vomiting in Pregnancy and Hyperemesis Gravidarum (RCOG Green-top Guideline No. 69). BJOG 2024", "https://doi.org/10.1111/1471-0528.17739"],
          ["ACOG Practice Bulletin No. 189: Nausea and Vomiting of Pregnancy. Obstet Gynecol 2018", "https://pubmed.ncbi.nlm.nih.gov/29266076/"]]
    },
    c: [
      ["!Gebeliğin ağır, inatçı bulantı-kusması: dehidratasyon, kilo kaybı, elektrolit bozukluğu", "inatçı kusma|şiddetli kusma|ağır kusma|dehidrat|kilo kayb|elektrolit|hipokalemi"],
      ["Şiddet değerlendirmesi: PUQE skoru; ketonüri şiddet göstergesi değil", "puqe|ketonüri şiddet göstergesi değil|ketonüri gösterge değil|keton gösterge değil"],
      ["Ayırıcı tanı: mol gebelik, çoğul gebelik, tiroid, idrar yolu enfeksiyonu (USG ve laboratuvar)", "mol gebe|molar|hidatiform|çoğul gebelik|ikiz|tiroid|hipertiroidi|idrar yolu|ultrason|usg"],
      ["!Sıvı-elektrolit replasmanı; potasyum", "sıvı replas|serum fizyolojik|izotonik|intravenöz sıvı|damar yolu|potasyum"],
      ["!Antiemetik basamak: antihistaminik (doksilamin-piridoksin), fenotiyazin; ikinci basamak ondansetron, metoklopramid", "antiemetik|doksilamin|piridoksin|antihistamin|prometazin|fenotiyazin|ondansetron|metoklopramid"],
      ["Wernicke ensefalopatisinden korunmak için tiamin (B1); glukozdan önce", "tiamin|b1 vitamin|wernicke"],
      ["Dirençli olguda kortikosteroid; VTE profilaksisi düşünülür", "kortikosteroid|steroid|metilprednizolon|tromboprofilaksi|vte profilaks|düşük molekül"]
    ]}
]
});
