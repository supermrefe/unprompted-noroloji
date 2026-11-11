/* Halk sağlığı — Unprompted Tıp konu paketi
   Seçim mantığı: TUS halk sağlığı sorularının çekirdeği olan epidemiyoloji yöntemleri (sıklık ve ilişki ölçütleri,
   çalışma tipleri, tarama testi, yanlılık, RKÇ, kanıt düzeyleri) ile Türkiye'ye özgü uygulama konuları (aşı takvimi,
   bildirimi zorunlu hastalıklar, meslek hastalıkları, su klorlama) ve temel sağlık göstergeleri (anne-bebek ölümü,
   malnütrisyon). Silikoz gibi organ hastalıkları ilgili branşa bırakıldı. */
(function () {
var GOR = "Gordis Epidemiology (Celentano, Szklo, Farag), 7. baskı (2024)";
var ROT = "Modern Epidemiology (Lash, VanderWeele, Haneuse, Rothman), 4. baskı (2021)";
var OX = "Oxford Textbook of Global Public Health, 7. baskı (2021)";
UP.add({ id: "halk-sagligi", subs: {
    epi: "Epidemiyoloji yöntemleri",
    kor: "Koruyucu hekimlik ve bulaşıcı hastalık kontrolü",
    gos: "Sağlık göstergeleri, çevre ve iş sağlığı"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "hs-insidans-prevalans", tr: "İnsidans ve prevalans", en: "Incidence and prevalence", cat: "epi", lvl: 1,
    src: {
      k: [GOR, ROT],
      m: [["Noordzij M ve ark. Measures of disease frequency: prevalence and incidence. Nephron Clin Pract 2010", "https://doi.org/10.1159/000286345"],
          ["Grimes DA, Schulz KF. Cohort studies: marching towards outcomes. Lancet 2002", "https://pubmed.ncbi.nlm.nih.gov/11830217/"]]
    },
    c: [
      ["!İnsidans: belirli sürede ortaya çıkan yeni vakalar", "insidans|incidence|yeni vaka|yeni olgu|yeni ortaya çıkan|yeni tanı alan|yeni hastalanan"],
      ["!Prevalans: belirli anda var olan tüm (eski + yeni) vakalar", "prevalans|prevalence|yaygınlık|mevcut vaka|var olan vaka|var olan tüm|toplam vaka|eski ve yeni|eski yeni"],
      ["!Prevalans ≈ insidans × ortalama hastalık süresi", "insidans çarpı|çarpı süre|ortalama süre|hastalık süresi|hastalığın süresi|süresiyle çarp|i çarpı d"],
      ["Payda: risk altındaki nüfus", "risk altında|risk altındaki|duyarlı nüfus|duyarlı kişi|hastalığa yakalanabilecek"],
      ["Kümülatif insidans (risk) ve kişi-zaman ile insidans hızı", "kümülatif insidans|kişi zaman|kişi yıl|person time|insidans hızı|insidans yoğunluğu|incidence rate"],
      ["Nokta ve dönem prevalansı", "nokta prevalans|dönem prevalans|period prevalence|point prevalence|belirli bir anda|belirli bir dönem"],
      ["Ölümü azaltıp iyileştirmeyen tedavi prevalansı artırır", "prevalans artar|prevalansı artırır|prevalansı artar|prevalansı yükselt|yaşam süresi uza|ömrü uza|kür sağlamayan|iyileştirmeyen"],
      ["Kesitsel çalışmalar prevalans ölçer", "kesitsel|cross sectional|cross-sectional"]
    ]},
  { id: "hs-onleme-duzeyleri", tr: "Korunma (önleme) düzeyleri", en: "Levels of prevention", cat: "kor", lvl: 1,
    src: {
      k: [GOR, OX],
      m: [["Rose G. Sick individuals and sick populations. Int J Epidemiol 1985 (2001 yeniden basımı)", "https://pubmed.ncbi.nlm.nih.gov/11416056/"],
          ["Kisling LA, Das JM. Prevention Strategies. StatPearls (güncel)", "https://www.ncbi.nlm.nih.gov/books/NBK537222/"]]
    },
    c: [
      ["!Birincil korunma: hastalık oluşmadan (aşı, risk faktörü azaltma)", "birincil korun|primer korun|primer önle|birincil önle|birincil koruma|primer koruma|birincil düzey"],
      ["!İkincil korunma: erken tanı ve tarama", "ikincil korun|sekonder korun|ikincil önle|sekonder önle|ikincil koruma|sekonder koruma|ikincil düzey"],
      ["!Üçüncül korunma: komplikasyon ve sakatlığı azaltma, rehabilitasyon", "üçüncül|tersiyer|tertiary|rehabilit"],
      ["Primordiyal korunma: risk faktörünün ortaya çıkmasını önleme", "primordiyal|primordial|ilkel korun|ilkel önle"],
      ["Dördüncül korunma: aşırı tıbbileştirmeden koruma", "dördüncül|kuaterner|quaternary|aşırı tıbbi|gereksiz tetkik|gereksiz girişim|aşırı tedavi"],
      ["Birincil korunma örnekleri: aşılama, folik asit, iyotlu tuz", "aşılama|aşı ile|aşı yapıl|folik asit|iyotlu tuz|emniyet kemer|kask"],
      ["İkincil korunma örnekleri: mamografi, smear, topuk kanı", "mamografi|smear|pap test|kolonoskopi|topuk kanı|gaitada gizli"],
      ["Rose: toplum stratejisi ve yüksek risk stratejisi (önleme paradoksu)", "yüksek risk strateji|toplum strateji|populasyon strateji|population strategy|önleme paradoks|prevention paradox|rose"]
    ]},
  { id: "hs-tarama-testi", tr: "Tarama testinin performansı: duyarlılık, özgüllük, prediktif değerler", en: "Screening test performance: sensitivity, specificity, predictive values", cat: "epi", lvl: 1,
    src: {
      k: [GOR, OX],
      m: [["Altman DG, Bland JM. Diagnostic tests 1: Sensitivity and specificity. BMJ 1994", "https://pubmed.ncbi.nlm.nih.gov/8019315/"],
          ["Andermann A ve ark. Revisiting Wilson and Jungner in the genomic age: a review of screening criteria over the past 40 years. Bull World Health Organ 2008", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2647421"]]
    },
    c: [
      ["!Duyarlılık: hastaları doğru pozitif saptama oranı", "duyarlılık|sensitivite|sensitivity|gerçek pozitif|doğru pozitif"],
      ["!Özgüllük: sağlamları doğru negatif saptama oranı", "özgüllük|spesifite|specificity|gerçek negatif|doğru negatif"],
      ["!Pozitif ve negatif prediktif değer", "pozitif prediktif|negatif prediktif|prediktif değer|kestirim değer|ppd|npd|ppv|npv|pozitif kestirim|negatif kestirim|pozitif öngörü|negatif öngörü"],
      ["!Prediktif değerler prevalansa bağlıdır; prevalans düşükse PPD düşer", "prevalans düş|prevalansı düşük|prevalansa bağlı|prevalansla değiş|prevalansa göre|nadir hastalıkta pozitif|prevalans arttıkça"],
      ["Dörtlü tablo: yanlış pozitif ve yanlış negatif", "yanlış pozitif|yanlış negatif|false positive|false negative|dört gözlü|dörtlü tablo|iki çarpı iki"],
      ["Duyarlı test dışlamada, özgül test doğrulamada", "dışlama|ekarte|snout|spin|rule out|rule in|tanıyı doğrula|doğrulamada"],
      ["Eşik değiştirilince duyarlılık-özgüllük ters yönde değişir; ROC eğrisi", "roc|eşik değer|cut off|kesim noktası|ters yönde|eğri altında"],
      ["Wilson-Jungner tarama ölçütleri", "wilson|jungner|tarama ölçüt|tarama kriter|önemli bir sağlık sorun|latent dönem|belirtisiz dönem|asemptomatik dönem"]
    ]},
  { id: "hs-asi-takvimi", tr: "Türkiye çocukluk çağı aşı takvimi", en: "Turkish national childhood immunization schedule", cat: "kor", lvl: 1,
    src: {
      k: ["Plotkin's Vaccines, 8. baskı (2023)", OX],
      m: [["T.C. Sağlık Bakanlığı. Çocukluk Dönemi Aşı Takvimi (2020). Halk Sağlığı Genel Müdürlüğü", "https://hsgm.saglik.gov.tr/depo/birimler/asi-ile-onlenebilir-hastaliklar-db/dokumanlar/2020_Asi_Takvimi.pdf"],
          ["T.C. Sağlık Bakanlığı. Aşılama bilgilendirme broşürü. asi.saglik.gov.tr", "https://asi.saglik.gov.tr/depo/Yayinlar/Aslama_-_Brosur.pdf"]]
    },
    c: [
      ["!Hepatit B ilk dozu doğumda", "doğumda hepatit|hepatit b doğum|doğumda hep|doğar doğmaz|ilk doz doğumda|doğumda ilk doz|doğumda yapıl"],
      ["!BCG 2. ayın sonunda tek doz", "bcg|bese ge|be ce ge|verem aşı|tüberküloz aşı"],
      ["!Karma aşı 2, 4, 6. ay ve 18. ayda rapel (2025'ten beri altılı karma)", "altılı karma|6 lı karma|altı bileşenli|6 bileşenli|beşli karma|5 li karma|dabt|difteri|boğmaca|hib"],
      ["KKK 12. ay ve 48. ay", "kkk|kızamık|kabakulak|kızamıkçık|mmr"],
      ["Konjuge pnömokok aşısı (KPA)", "kpa|pnömokok|konjuge|zatürre aşı"],
      ["Suçiçeği 12. ay; hepatit A 18. ve 24. ay", "suçiçeğ|su çiçeğ|variselle|varicella|hepatit a ve suçiçeği"],
      ["Oral polio (OPA) 6. ve 18. ay", "opa|oral polio|ağızdan polio|çocuk felci"],
      ["48. ayda DaBT-İPA rapeli, 13 yaşta Td", "dabt ipa|dörtlü karma|td aşı|tetanoz difteri|erişkin tipi|13 yaş|on üç yaş|sekizinci sınıf"],
      ["Genişletilmiş Bağışıklama Programı: ücretsiz, aile hekimliği birimlerinde", "genişletilmiş bağışıklama|gbp|ücretsiz|aile hekim|sağlık bakanlığı"]
    ]},
  { id: "hs-su-klorlama", tr: "İçme suyunun klorlanması", en: "Drinking water chlorination", cat: "gos", lvl: 1,
    src: {
      k: [OX, "CURRENT Occupational & Environmental Medicine (LaDou, Harrison), 6. baskı (2021)"],
      m: [["WHO. Guidelines for drinking-water quality: fourth edition incorporating the first and second addenda. 2022", "https://www.who.int/publications/i/item/9789240045064"],
          ["WHO. Guidelines for drinking-water quality, 4th ed. Annex 5: Treatment methods and performance", "https://cdn.who.int/media/docs/default-source/wash-documents/water-safety-and-quality/dwq-guidelines-4/gdwq_4ed_with_third-addenda_ann-5-treatment-methods.pdf"]]
    },
    c: [
      ["!Amaç: dezenfeksiyon; su kaynaklı fekal-oral hastalıkları önlemek", "dezenfeksiyon|dezenfekte|kolera|tifo|fekal oral|su kaynaklı|su ile bulaşan|suyla bulaşan"],
      ["!Serbest (bakiye) klor ölçülerek izlenir", "bakiye klor|serbest klor|artık klor|rezidüel klor|residual chlorine|kalıntı klor|serbest bakiye"],
      ["En az 0,5 mg/L serbest klor, 30 dakika temas, pH 8'in altı (WHO)", "0,5|0.5|yarım miligram|sıfır virgül beş|30 dakika|otuz dakika|temas süre|ph 8|ph sekiz|ph değeri"],
      ["Organik madde ve bulanıklık klor ihtiyacını artırır; önce arıtma", "klor ihtiya|bulanık|turbidite|organik madde|filtrasyon|çöktürme|ön arıtma"],
      ["Şebekede kalan klor dağıtımda yeniden kirlenmeye karşı korur", "şebeke|dağıtım sistem|musluk|borularda|boru hatt|yeniden kirlen|kalıcı etki"],
      ["Dezenfeksiyon yan ürünleri (trihalometanlar)", "trihalometan|thm|yan ürün"],
      ["Fekal kirlenme göstergesi: E. coli / koliform", "koliform|e coli|escherichia|fekal kirlenme gösterge|indikatör bakteri"],
      ["Bireysel/acil durumda kaynatma ya da hipoklorit", "kaynat|klor tablet|hipoklorit|çamaşır suyu|kireç kaymağı"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "hs-calisma-tipleri", tr: "Epidemiyolojik çalışma tipleri", en: "Epidemiologic study designs", cat: "epi", lvl: 2,
    src: {
      k: [GOR, ROT],
      m: [["Grimes DA, Schulz KF. Cohort studies: marching towards outcomes. Lancet 2002", "https://pubmed.ncbi.nlm.nih.gov/11830217/"],
          ["Schulz KF, Grimes DA. Case-control studies: research in reverse. Lancet 2002", "https://doi.org/10.1016/S0140-6736(02)07605-5"]]
    },
    c: [
      ["!Kohort: maruziyetten sonuca doğru izlem; insidans ve göreceli risk", "kohort|cohort|maruz kalanlar ve kalmayanlar|maruz olan ve olmayan|maruziyetten sonuca|ileriye doğru izle"],
      ["!Vaka-kontrol: hastalardan geriye maruziyete; odds oranı", "vaka kontrol|olgu kontrol|case control|vakalar ve kontroller|hastalığı olan ve olmayan"],
      ["!Deneysel çalışma: araştırmacı müdahaleyi atar (RKÇ)", "deneysel|randomize|rastgele atan|klinik deney|müdahale çalışma|girişimsel"],
      ["Kesitsel: maruziyet ve hastalık aynı anda; prevalans", "kesitsel|cross sectional|aynı anda|aynı zamanda|tek zaman"],
      ["Ekolojik çalışma: grup düzeyinde veri; ekolojik yanılgı", "ekolojik|ecological|grup düzey|toplum düzeyinde veri"],
      ["Kohortun dezavantajı: uzun, pahalı, izlem kaybı", "izlem kaybı|izlemden kayıp|izlemden çık|loss to follow|pahalı|uzun süre|uzun zaman"],
      ["Vaka-kontrolde hatırlama yanlılığı", "hatırlama|recall|anımsama"],
      ["Nadir hastalıkta vaka-kontrol, nadir maruziyette kohort", "nadir hastalık|nadir görülen hastalık|nadir maruz|seyrek görülen|nadir olan hastalık"],
      ["Tanımlayıcı ve analitik (gözlemsel) çalışmalar", "tanımlayıcı|analitik|gözlemsel|observational|descriptive"]
    ]},
  { id: "hs-iliski-olcutleri", tr: "İlişki ölçütleri: göreceli risk, odds oranı, atfedilen risk", en: "Measures of association: relative risk, odds ratio, attributable risk", cat: "epi", lvl: 2,
    src: {
      k: [GOR, ROT],
      m: [["Szumilas M. Explaining odds ratios. J Can Acad Child Adolesc Psychiatry 2010", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2938757"],
          ["Cummings P. The relative merits of risk ratios and odds ratios. Arch Pediatr Adolesc Med 2009", "https://pubmed.ncbi.nlm.nih.gov/19414690/"]]
    },
    c: [
      ["!Göreceli risk: maruzlarda insidans / maruz olmayanlarda insidans", "göreceli risk|rölatif risk|relative risk|risk oranı|risk ratio|rr"],
      ["!Odds oranı: vaka-kontrol çalışmasının ölçütü", "odds|olasılık oranı|ihtimal oranı|odds ratio"],
      ["!Atfedilen risk: maruzlar ve maruz olmayanlar arasındaki insidans farkı", "atfedilen risk|atfedilebilir|attributable|risk farkı|insidans fark|yüklenebilir risk"],
      ["Değer 1 ise ilişki yok, >1 risk, <1 koruyucu", "bire eşit|1 e eşit|1 den büyük|birden büyük|birden küçük|1 den küçük|koruyucu faktör|koruyucu etki|ilişki yok"],
      ["Güven aralığı 1'i içeriyorsa anlamlı değil", "güven aralığı|confidence interval|1 i içer|biri içer|bir i içer|anlamlı değil|istatistiksel olarak anlam"],
      ["Hastalık nadirse odds oranı göreceli riske yaklaşır", "yaklaşık eşit|rr ye yakın|göreceli riske yakın|riske yaklaş|yakınsar|yaklaşır|nadir olduğunda|nadir hastalık"],
      ["Toplum atfedilen riski ve atfedilen risk yüzdesi", "toplum atfedilen|populasyon atfedilen|population attributable|atfedilen yüzde|atfedilen risk yüzde|etiyolojik fraksiyon"],
      ["Tedavi edilmesi gereken hasta sayısı (NNT) = 1 / mutlak risk azalması", "nnt|tedavi edilmesi gereken|number needed|mutlak risk azal|absolute risk|arr"],
      ["Dörtlü tablo ve çapraz çarpım (ad/bc)", "ad bc|a çarpı d|çapraz çarpım|dörtlü tablo|dört gözlü|iki çarpı iki"]
    ]},
  { id: "hs-bildirimi-zorunlu", tr: "Sürveyans ve bildirimi zorunlu hastalıklar (Türkiye)", en: "Surveillance and notifiable diseases in Türkiye", cat: "kor", lvl: 2,
    src: {
      k: [GOR, OX],
      m: [["Bulaşıcı Hastalıklar Sürveyans ve Kontrol Esasları Yönetmeliği. Resmî Gazete 2007 (26537)", "https://www.lexpera.com.tr/mevzuat/yonetmelikler/bulasici-hastaliklar-surveyans-ve-kontrol-esaslari-yonetmeligi"],
          ["T.C. Sağlık Bakanlığı. Bulaşıcı Hastalıkların İhbar ve Bildirim Sistemi Genelgesi 2015/18", "https://www.lexpera.com.tr/mevzuat/genelgeler/bulasici-hastaliklarin-ihbar-ve-bildirim-sistemi-genelgesi-2015-18"]]
    },
    c: [
      ["!Sürveyans: sürekli, sistematik veri toplama, analiz, yorum ve geri bildirim", "sürveyans|surveillance|sistematik veri|sürekli izlem|gözetim|geri bildirim"],
      ["!Türkiye'de bildirimi zorunlu hastalıklar A, B, C, D gruplarında", "a grubu|b grubu|c grubu|d grubu|dört grup|gruplara ayrıl|abcd grup"],
      ["!Standart vaka tanımı: şüpheli, olası, kesin vaka", "vaka tanım|olgu tanım|şüpheli vaka|olası vaka|kesin vaka|kesinleşmiş vaka"],
      ["Pasif ve aktif sürveyans", "pasif sürveyans|aktif sürveyans|aktif vaka arama|pasif bildirim|rutin bildirim"],
      ["Sentinel (gözcü) sürveyans", "sentinel|gözcü|nöbetçi"],
      ["D grubu: laboratuvardan etken bildirimi", "laboratuvar|laboratuar|etken bildirim|etken bazlı"],
      ["Hekimin yasal bildirim yükümlülüğü (Umumi Hıfzıssıhha Kanunu)", "hıfzıssıhha|1593|yasal yükümlü|yasal zorunlu|bildirmek zorunda|bildirim zorunlu"],
      ["Uluslararası Sağlık Tüzüğü (2005): uluslararası önemdeki olayların DSÖ'ye bildirimi", "uluslararası sağlık tüzüğü|ihr|international health regulations|dsö ye bildir|dünya sağlık örgütüne bildir|uluslararası önem"],
      ["Bildirim akışı: il/ilçe sağlık müdürlüğü, elektronik sistem", "il sağlık müdürlüğü|ilçe sağlık|toplum sağlığı merkezi|elektronik bildirim|halk sağlığı müdürlüğü"]
    ]},
  { id: "hs-salgin-inceleme", tr: "Salgın incelemesi", en: "Outbreak investigation", cat: "kor", lvl: 2,
    src: {
      k: [GOR, OX],
      m: [["Reingold AL. Outbreak investigations — a perspective. Emerg Infect Dis 1998", "https://doi.org/10.3201/eid0401.980104"],
          ["CDC. Principles of Epidemiology in Public Health Practice, 3rd ed. Lesson 6: Investigating an Outbreak", "https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson6/index.html"]]
    },
    c: [
      ["!Salgının varlığını doğrula: beklenenden fazla vaka", "beklenenden fazla|beklenen sayı|olağan düzey|salgının varlığ|salgın olup olmadığ|endemik düzey|beklenen düzey"],
      ["!Tanıyı doğrula (klinik ve laboratuvar)", "tanıyı doğrula|tanının doğrulan|tanı doğrulama|laboratuvar doğrulama|laboratuvarla doğrula"],
      ["!Çalışma vaka tanımı oluştur ve vakaları sistematik ara", "vaka tanım|olgu tanım|vaka bulma|vaka arama|olgu arama|ek vaka"],
      ["Tanımlayıcı epidemiyoloji: zaman, yer, kişi", "kişi yer zaman|zaman yer kişi|yer zaman kişi|zaman yer ve kişi|kişi yer ve zaman"],
      ["Epidemi eğrisi: ortak (nokta) kaynak ya da kişiden kişiye yayılım", "epidemi eğri|salgın eğri|epi eğri|nokta kaynak|ortak kaynak|kişiden kişiye|propagated"],
      ["Hipotez kur ve analitik çalışmayla test et (atak hızı, kohort, vaka-kontrol)", "hipotez|atak hızı|attack rate|retrospektif kohort|vaka kontrol"],
      ["Kontrol önlemlerini erken uygula", "kontrol önlem|önlemleri al|önlem alın|kaynağı kontrol|izolasyon|kaynağın ortadan"],
      ["Bulguları raporla ve paylaş", "rapor yaz|raporla|rapor hazırla|sonuçları paylaş|bulguları paylaş|iletişim"]
    ]},
  { id: "hs-meslek-hastaliklari", tr: "Meslek hastalıkları", en: "Occupational diseases", cat: "gos", lvl: 2,
    src: {
      k: ["CURRENT Occupational & Environmental Medicine (LaDou, Harrison), 6. baskı (2021)", OX],
      m: [["ILO. List of Occupational Diseases (revised 2010)", "https://webapps.ilo.org/wcmsp5/groups/public/@ed_protect/@protrav/@safework/documents/publication/wcms_125137.pdf"],
          ["T.C. Çalışma ve Sosyal Güvenlik Bakanlığı. Meslek hastalıkları bildirimi", "https://csgb.gov.tr/Media/mkqf0m5r/meslek-hastalıkları-bildirimi.pdf"]]
    },
    c: [
      ["!Tanım: işin niteliği ya da yürütüm koşulları nedeniyle oluşan hastalık (5510/md. 14)", "işin niteliğ|çalışma koşul|yürütüm koşul|mesleki maruz|iş nedeniyle|işle ilgili|5510"],
      ["!Tanının anahtarı: ayrıntılı meslek öyküsü", "meslek öykü|iş öykü|mesleki anamnez|mesleki öykü|çalışma öykü|ne iş yaptığ|mesleği sorul"],
      ["!Bildirim ve tanı: SGK, yetkili hastaneler", "sgk|sosyal güvenlik|yetkili hastane|meslek hastalıkları hastane|meslek hastalığı bildir|tazminat"],
      ["Gürültüye bağlı işitme kaybı (odyometride 4000 Hz çentiği)", "gürültü|odyometri|4000|dört bin hertz|akustik travma"],
      ["Kurşun zehirlenmesi", "kurşun|akü|plumbizm"],
      ["Asbest ve mezotelyoma", "asbest|mezotelyoma|beyaz toprak"],
      ["ILO meslek hastalıkları listesi (2010)", "ilo|uluslararası çalışma örgüt"],
      ["İşyeri hekimi, 6331 sayılı İSG Kanunu, işe giriş ve periyodik muayene", "işyeri hekim|iş sağlığı ve güvenliği|isg|6331|periyodik muayene|işe giriş muayene"],
      ["Korunma hiyerarşisi: kaynağı kaldır, ikame, mühendislik, en son kişisel koruyucu", "kişisel koruyucu|kkd|mühendislik önlem|ikame|kaynağında|havalandırma"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "hs-yanlilik-karistirici", tr: "Yanlılık (bias) ve karıştırıcı etken", en: "Bias and confounding", cat: "epi", lvl: 3,
    src: {
      k: [ROT, GOR],
      m: [["Delgado-Rodríguez M, Llorca J. Bias. J Epidemiol Community Health 2004", "https://doi.org/10.1136/jech.2003.008466"],
          ["Grimes DA, Schulz KF. Bias and causal associations in observational research. Lancet 2002", "https://doi.org/10.1016/S0140-6736(02)07451-2"]]
    },
    c: [
      ["!Seçim yanlılığı", "seçim yanlılığı|seçilim yanlılığı|selection bias|berkson|sağlıklı işçi|gönüllü yanlılığı"],
      ["!Bilgi (ölçüm) yanlılığı: hatırlama, gözlemci, yanlış sınıflama", "bilgi yanlılığı|ölçüm yanlılığı|information bias|yanlış sınıflama|misclassification|gözlemci yanlılığı|hatırlama yanlılığı|recall bias"],
      ["!Karıştırıcı: hem maruziyet hem sonuçla ilişkili, nedensel yolda olmayan etken", "karıştırıcı|confound|karıştırıcılık"],
      ["Karıştırıcının kontrolü: randomizasyon, kısıtlama, eşleştirme, tabakalama, çok değişkenli analiz", "eşleştirme|matching|kısıtlama|tabakalama|stratifik|çok değişkenli|multivariate|regresyon|randomizasyon"],
      ["Etki değiştirici (etkileşim) karıştırıcıdan farklıdır", "etki değiştir|effect modification|etkileşim|interaction"],
      ["Nedensel yol üzerindeki ara değişken karıştırıcı sayılmaz", "nedensel yol|ara değişken|aracı değişken|mediator|nedensel zincir"],
      ["Sistematik hata örneklem büyütülerek düzelmez (rastgele hatadan farkı)", "sistematik hata|rastgele hata|random error|örneklem büyü|örneklemi büyüt"],
      ["Körleme bilgi yanlılığını azaltır", "körleme|kör yöntem|blind|maskeleme"],
      ["Bradford Hill nedensellik ölçütleri", "bradford|hill ölçüt|nedensellik ölçüt|doz yanıt|zamansallık|temporal"]
    ]},
  { id: "hs-randomize-kontrollu", tr: "Randomize kontrollü çalışma", en: "Randomized controlled trial", cat: "epi", lvl: 3,
    src: {
      k: [GOR, ROT],
      m: [["Hopewell S ve ark. CONSORT 2025 statement: updated guideline for reporting randomised trials. BMJ 2025", "https://pubmed.ncbi.nlm.nih.gov/40228833/"],
          ["Schulz KF, Grimes DA. Allocation concealment in randomised trials: defending against deciphering. Lancet 2002", "https://doi.org/10.1016/S0140-6736(02)07750-4"]]
    },
    c: [
      ["!Randomizasyon bilinen ve bilinmeyen karıştırıcıları dengeler", "randomizasyon|randomize|rastgele atama|rastgele dağıt|rastgele ayır|random"],
      ["!Atamanın gizlenmesi seçim yanlılığını önler", "atama gizli|atamanın gizlen|allocation conceal|gizli atama|kapalı zarf|merkezi randomizasyon|gizlenmesi"],
      ["!Körleme (tek kör, çift kör, plasebo)", "körleme|çift kör|tek kör|double blind|plasebo|placebo"],
      ["!Tedavi amacına göre (ITT) analiz", "tedavi amaçlı|tedavi amacına göre|intention to treat|itt|randomize edildiği grup|atandığı grup"],
      ["Protokole uygun (per-protocol) analiz", "protokole uygun|per protocol|protokole uyan"],
      ["CONSORT bildirimi ve akış şeması", "consort|akış şema|flow diagram"],
      ["Etik: klinik denge (equipoise) ve bilgilendirilmiş onam", "equipoise|klinik denge|klinik belirsizlik|bilgilendirilmiş onam|aydınlatılmış onam|etik kurul"],
      ["Çalışmanın önceden kaydı", "önceden kay|clinicaltrials|registr|protokol kayd|kayıt sistem"],
      ["İzlem kaybı ve karşılaştırılabilirliğin bozulması", "izlem kaybı|izlemden kayıp|izlemden çık|loss to follow|çalışmadan ayrıl"]
    ]},
  { id: "hs-kanit-duzeyleri", tr: "Kanıta dayalı tıp ve kanıt düzeyleri", en: "Evidence-based medicine and levels of evidence", cat: "epi", lvl: 3,
    src: {
      k: ["Users' Guides to the Medical Literature (Guyatt ve ark.), 3. baskı (2015)", GOR],
      m: [["Guyatt GH ve ark. GRADE: an emerging consensus on rating quality of evidence and strength of recommendations. BMJ 2008", "https://pubmed.ncbi.nlm.nih.gov/18436948/"],
          ["OCEBM Levels of Evidence Working Group. The Oxford 2011 Levels of Evidence. Oxford CEBM", "https://www.cebm.ox.ac.uk/resources/levels-of-evidence/explanation-of-the-2011-ocebm-levels-of-evidence"]]
    },
    c: [
      ["!En üst: RKÇ'lerin sistematik derlemesi ve meta-analizi", "sistematik derleme|sistematik inceleme|sistematik review|meta analiz|metaanaliz|systematic review|cochrane"],
      ["!RKÇ gözlemsel çalışmalardan daha güçlü kanıt", "randomize kontrollü|rkç|rkc|randomize çalışma|rct|randomize klinik"],
      ["!GRADE: kanıt kalitesi ile öneri gücü ayrı derecelendirilir", "grade|öneri gücü|güçlü öneri|zayıf öneri|koşullu öneri|kanıt kalitesi|kanıtın kesinliği|certainty"],
      ["GRADE'de düşürenler: yanlılık riski, tutarsızlık, dolaylılık, kesinsizlik, yayın yanlılığı", "tutarsızlık|dolaylılık|indirectness|imprecision|kesinsizlik|yayın yanlılığı|publication bias|yanlılık riski|risk of bias"],
      ["Yükseltenler: büyük etki, doz-yanıt", "büyük etki|doz yanıt|dose response|düzeyini yüksel|kaliteyi yüksel|bir basamak yüksel"],
      ["Oxford CEBM düzeyleri soru tipine göre değişir", "oxford|cebm|soru tipine göre|soru türüne göre"],
      ["En alt: olgu serisi ve uzman görüşü", "uzman görüş|olgu serisi|vaka serisi|vaka sunumu|olgu sunumu|expert opinion"],
      ["KDT: en iyi kanıt + klinik deneyim + hasta değerleri (Sackett)", "hasta tercih|hasta değer|klinik deneyim|klinik uzmanlık|sackett"],
      ["Klinik soruyu PICO ile kur", "pico|hasta girişim karşılaştırma|yanıtlanabilir soru"]
    ]},
  { id: "hs-anne-bebek-olum", tr: "Anne ve bebek ölümü göstergeleri", en: "Maternal and infant mortality indicators", cat: "gos", lvl: 3,
    src: {
      k: [OX, GOR],
      m: [["WHO, UNICEF, UNFPA, World Bank Group, UNDESA. Trends in maternal mortality 2000 to 2023. WHO 2025", "https://www.who.int/publications/i/item/9789240108462"],
          ["UN IGME. Levels and trends in child mortality: Report 2024. UNICEF 2025", "https://data.unicef.org/resources/levels-and-trends-in-child-mortality-2024/"]]
    },
    c: [
      ["!Anne ölüm oranı: 100.000 canlı doğumda", "anne ölüm|maternal mortal|maternal ölüm|yüz bin canlı|100 bin canlı|100000 canlı|100.000 canlı"],
      ["!Gebelikte ya da gebeliğin bitiminden sonraki 42 gün içinde; kaza/rastlantısal nedenler hariç", "42 gün|kırk iki gün|kazara|rastlantı|tesadüfi|kaza ve rastlantı|kaza sonucu"],
      ["!Bebek ölüm hızı: 1 yaş altı ölümler / 1000 canlı doğum", "bebek ölüm|infant mortal|bir yaş altı|1 yaş altı|1 yaşından önce|bir yaşından önce|bin canlı doğum|1000 canlı"],
      ["Yenidoğan (neonatal) ölüm: ilk 28 gün", "yenidoğan ölüm|neonatal ölüm|neonatal mortal|28 gün|yirmi sekiz gün|ilk dört hafta"],
      ["Postneonatal dönem ölümleri çevresel etkenlere (enfeksiyon, beslenme) duyarlı", "postneonatal|post neonatal|neonatal sonrası|28 gün ile 1 yaş|28 gün ile bir yaş"],
      ["Perinatal ölüm: ölü doğum + erken neonatal ölüm", "perinatal|ölü doğum|stillbirth|erken neonatal|ilk hafta|ilk 7 gün|ilk yedi gün"],
      ["5 yaş altı ölüm hızı", "beş yaş altı|5 yaş altı|under five|under 5"],
      ["Toplumun gelişmişliğinin ve sağlık hizmetinin duyarlı göstergeleri", "gelişmişlik|kalkınmışlık|sosyoekonomik|duyarlı gösterge|en iyi gösterge|sağlık düzeyinin gösterge"],
      ["SKH hedefi: 2030'a kadar küresel anne ölüm oranı 70/100.000'in altı", "sürdürülebilir kalkınma|skh|sdg|2030|yetmişin altı|70 in altı"]
    ]},
  { id: "hs-malnutrisyon", tr: "Çocukluk çağı malnütrisyon göstergeleri", en: "Indicators of child malnutrition", cat: "gos", lvl: 3,
    src: {
      k: [OX, "Nelson Textbook of Pediatrics, 22. baskı (2024)"],
      m: [["WHO. Guideline on the prevention and management of wasting and nutritional oedema (acute malnutrition) in infants and children under 5 years. 2023", "https://www.who.int/news/item/20-11-2023-who-issues-new-guideline-to-tackle-acute-malnutrition-in-children-under-five"],
          ["WHO, UNICEF. WHO child growth standards and the identification of severe acute malnutrition in infants and children: joint statement. 2009", "https://fctc.who.int/resources/publications/i/item/9789241598163"]]
    },
    c: [
      ["!Bodurluk (stunting): yaşa göre boy düşük — kronik yetersiz beslenme", "bodurluk|bodur|stunting|yaşa göre boy|boy yaş|kronik malnütrisyon|kronik yetersiz beslen"],
      ["!Zayıflık (wasting): boya göre ağırlık düşük — akut yetersiz beslenme", "wasting|boya göre ağırlık|ağırlık boy|akut malnütrisyon|akut yetersiz beslen|vücut erimesi"],
      ["!Düşük kilo (underweight): yaşa göre ağırlık düşük", "yaşa göre ağırlık|ağırlık yaş|düşük kilo|underweight|düşük tartı"],
      ["DSÖ büyüme standartlarına göre z-skoru; -2 SD altı", "z skor|z skoru|standart sapma|sd|eksi iki|eksi 2|dsö büyüme|who büyüme|büyüme standart"],
      ["Ağır akut malnütrisyon: boya göre ağırlık -3 SD altı, MUAC <115 mm ya da beslenme ödemi", "115|yüz on beş|eksi üç|eksi 3|üç standart sapma"],
      ["Orta üst kol çevresi (MUAC)", "kol çevres|muac|üst kol|orta kol"],
      ["Beslenme ödemi (kwashiorkor) ve marasmus", "kwashiorkor|kuvaşiorkor|marasmus|marazm|beslenme ödem|ödemli"],
      ["Gizli açlık: mikrobesin eksiklikleri (demir, A vitamini, iyot)", "mikrobesin|mikro besin|demir eksikliğ|a vitamini|iyot|gizli açlık"],
      ["Malnütrisyonun çifte yükü: obezite ile birlikte", "çifte yük|double burden|obezite|fazla kilo|aşırı kilo"]
    ]}
]
});
})();
