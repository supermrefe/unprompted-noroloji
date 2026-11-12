/* Mikrobiyoloji ve immünoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS temel bilimler sınavında mikrobiyoloji/immünolojinin en çok soru getiren mekanizma ve tanı konuları
   (HBV serolojisi, Gram boyama ve hücre duvarı, toksinler, tanımlama testleri, hipersensitivite, kompleman, MHC, immün yetmezlik, direnç genetiği).
   Kolay = çekirdek laboratuvar/immünoloji bilgisi; Orta = TUS ayrıntısı; Zor = moleküler mekanizma ve ileri ayrıntı.
   Kapsam dışı: enfeksiyon hastalıklarının klinik yönetimi (enfeksiyon paketi: HIV tanı/ART, ESBL/MRSA klinik yaklaşımı, sepsis vb.). */
(function () {
const MU = "Murray's Medical Microbiology, 10. baskı (2025)";
const JA = "Jawetz, Melnick & Adelberg's Medical Microbiology, 29. baskı (2025)";
const AB = "Abbas Cellular and Molecular Immunology, 11. baskı (2025)";

UP.add({ id: "mikrobiyoloji", subs: {
    bak: "Bakteriyoloji",
    vir: "Viroloji",
    mant: "Mikoloji ve parazitoloji",
    imm: "İmmünoloji",
    gen: "Genel mikrobiyoloji"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "mik-hbv-seroloji", tr: "Hepatit B serolojisinin yorumu", en: "Hepatitis B serology interpretation", cat: "vir", lvl: 1,
    src: { k: [MU, JA], m: [
      ["EASL Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol 2025", "https://doi.org/10.1016/j.jhep.2025.03.018"],
      ["Terrault NA et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology 2018", "https://doi.org/10.1002/hep.29800"]] },
    c: [
      ["!HBsAg pozitifliği: süren enfeksiyon (akut ya da kronik)", "hbsag|hbs ag|hbs antijen|yüzey antijen"],
      ["!Anti-HBs: koruyucu bağışıklık (aşı ya da iyileşme)", "anti hbs|antihbs|yüzey antikor|hbs antikor"],
      ["!Anti-HBc IgM: akut enfeksiyon ve pencere dönemi", "hbc igm|core igm|kor igm|pencere dönem"],
      ["Total anti-HBc: virüsle geçirilmiş temas; aşıyla oluşmaz", "total anti hbc|total hbc|anti hbc total|aşıyla oluşmaz|aşı ile oluşmaz|aşıda oluşmaz|aşıda negatif"],
      ["Yalnız anti-HBs pozitifliği aşılı kişiyi gösterir", "yalnız anti hbs|sadece anti hbs|aşılı kişi|aşıyla bağışık|aşı yanıtı"],
      ["HBeAg'den anti-HBe'ye serokonversiyon replikasyonun azaldığını gösterir", "anti hbe|antihbe|hbe antikor|serokonversiyon"],
      ["Örnek tablolar: geçirilmiş-iyileşmiş enfeksiyon, izole anti-HBc", "iyileşmiş enfeksiyon|geçirilmiş ve iyileş|geçirip iyileş|izole anti hbc|tek başına anti hbc|yalnız anti hbc"]
    ]},
  { id: "mik-hucre-duvari-gram", tr: "Bakteri hücre duvarı ve Gram boyama", en: "Bacterial cell wall and Gram staining", cat: "bak", lvl: 1,
    src: { k: [MU, JA], m: [
      ["Silhavy TJ, Kahne D, Walker S. The bacterial cell envelope. Cold Spring Harb Perspect Biol 2010", "https://doi.org/10.1101/cshperspect.a000414"],
      ["Vollmer W, Blanot D, de Pedro MA. Peptidoglycan structure and architecture. FEMS Microbiol Rev 2008", "https://doi.org/10.1111/j.1574-6976.2007.00094.x"]] },
    c: [
      ["!Gram pozitif: kalın peptidoglikan ve teikoik asit", "kalın peptidoglikan|kalın bir peptidoglikan|teikoik|lipoteikoik"],
      ["!Gram negatif: ince peptidoglikan, dış membran ve LPS", "dış membran|dış zar|outer membrane|lipopolisakkarit|lps|ince peptidoglikan|periplazm"],
      ["!Boyama basamakları: kristal viyole, lugol, alkol-aseton, safranin", "kristal viyole|gentiyan|gentian|lugol|dekoloriz|alkol aseton|aseton alkol|safranin|fuksin"],
      ["Peptidoglikan: NAG–NAM zinciri, peptit çapraz bağları (PBP/transpeptidaz)", "asetilglukozamin|asetilmuramik|muramik|transpeptidaz|penisilin bağlayan|pbp|çapraz bağ"],
      ["Mikobakteriler: mikolik asit, aside dirençli boyama", "mikolik|aside dirençli|aside rezistan|ziehl|ehrlich"],
      ["Hücre duvarı olmayan Mycoplasma Gram ile boyanmaz", "mikoplazma|mycoplasma|hücre duvarı yok|hücre duvarı olmayan|duvarsız"],
      ["Duvar, beta-laktam ve vankomisinin hedefi; lizozim yıkar", "beta laktam|betalaktam|vankomisin|lizozim"]
    ]},
  { id: "mik-immunglobulin-yapisi", tr: "İmmünglobulinlerin yapısı ve sınıfları", en: "Immunoglobulin structure and classes", cat: "imm", lvl: 1,
    src: { k: [AB, MU], m: [
      ["Schroeder HW Jr, Cavacini L. Structure and function of immunoglobulins. J Allergy Clin Immunol 2010", null],
      ["Tonegawa S. Somatic generation of antibody diversity. Nature 1983", null]] },
    c: [
      ["!Temel yapı: iki ağır, iki hafif (kappa/lambda) zincir, disülfit bağları", "ağır zincir|hafif zincir|disülfit|kappa|lambda"],
      ["!Fab antijeni bağlar, Fc efektör işlevi (kompleman, Fc reseptörü) görür", "fab|fc reseptör|fc bölge|fc kısm|fc ucu|antijen bağlayan bölge"],
      ["!Sınıflar: IgG plasentayı geçer, IgM pentamer, salgısal IgA dimer", "pentamer|iga dimer|dimer iga|salgısal iga|sekretuvar|sekretuar|j zincir|igg plasentayı geç|igg plasentadan geç"],
      ["Değişken bölgede hipervariabl bölgeler (CDR) antijen özgüllüğünü belirler", "hipervariab|cdr|komplementarite|değişken bölge|variabl bölge|idiotip"],
      ["Çeşitlilik: V(D)J rekombinasyonu (RAG enzimleri)", "vdj|v d j|rag enzim|rag 1|rag1|gen rekombinasyon|somatik rekombinasyon"],
      ["Sınıf değişimi ve afinite olgunlaşması (AID, CD40L, germinal merkez)", "sınıf değiş|izotip değiş|class switch|aktivasyonla indüklenen|somatik hipermutasyon|afinite olgunlaş|germinal merkez"],
      ["Papain Fab ve Fc'ye, pepsin F(ab')2'ye böler", "papain|pepsin|fab 2|f ab 2"],
      ["Monoklonal antikorlar (hibridoma, -mab)", "monoklonal|hibridoma"]
    ]},
  { id: "mik-sterilizasyon", tr: "Sterilizasyon ve dezenfeksiyon", en: "Sterilization and disinfection", cat: "gen", lvl: 1,
    src: { k: [MU, JA], m: [
      ["Rutala WA, Weber DJ, HICPAC. Guideline for Disinfection and Sterilization in Healthcare Facilities, 2008 (2019 güncellemesi). CDC", "https://www.cdc.gov/infectioncontrol/guidelines/disinfection/"],
      ["Rutala WA, Weber DJ. Disinfection and sterilization in health care facilities: an overview and current issues. Infect Dis Clin North Am 2016", null]] },
    c: [
      ["!Sterilizasyon sporlar dahil tüm mikroorganizmaları yok eder; dezenfeksiyon sporları garanti etmez", "spor dahil|sporlar dahil|sporları da|tüm mikroorganizma|bütün mikroorganizma|dezenfeksiyon sporları garanti etmez|sporları her zaman ortadan kaldırmaz|sporları her zaman öldürmez"],
      ["!Otoklav: basınçlı doymuş buhar (121 °C)", "otoklav|basınçlı buhar|doymuş buhar|buharla steril|121"],
      ["Kuru ısı (Pastör fırını) cam ve metal için", "kuru ısı|pastör fırın|kuru hava|sıcak hava"],
      ["Isıya duyarlı aletlerde etilen oksit ve hidrojen peroksit plazma", "etilen oksit|hidrojen peroksit plazma|gaz plazma|plazma steril|ısıya duyarlı"],
      ["!Spaulding sınıflaması: kritik, yarı kritik, kritik olmayan", "spaulding|yarı kritik|kritik olmayan|kritik alet"],
      ["Yüksek düzey dezenfektanlar: glutaraldehit, ortoftalaldehit, perasetik asit", "glutaraldehit|glutaraldehid|ortoftalaldehit|perasetik"],
      ["Kontrol: biyolojik indikatör (Geobacillus stearothermophilus sporları)", "geobacillus|stearothermophilus|biyolojik indikatör"],
      ["Prionlar standart yöntemlere en dirençli ajanlar", "prion|priyon|creutzfeldt"]
    ]},
  { id: "mik-stafilokok-streptokok", tr: "Stafilokok ve streptokokların laboratuvar ayrımı", en: "Laboratory identification of staphylococci and streptococci", cat: "bak", lvl: 1,
    src: { k: [MU, JA], m: [
      ["Tong SYC et al. Staphylococcus aureus infections: epidemiology, pathophysiology, clinical manifestations, and management. Clin Microbiol Rev 2015", "https://doi.org/10.1128/CMR.00134-14"],
      ["Walker MJ et al. Disease manifestations and pathogenic mechanisms of group A Streptococcus. Clin Microbiol Rev 2014", "https://doi.org/10.1128/CMR.00101-13"]] },
    c: [
      ["!Katalaz: stafilokok pozitif, streptokok negatif", "katalaz|catalase"],
      ["!Koagülaz: S. aureus pozitif, diğer stafilokoklar negatif", "koagülaz|koagulaz|coagulase"],
      ["Novobiyosin: S. saprophyticus dirençli, S. epidermidis duyarlı", "novobiyosin|novobiosin|saprophyticus|saprofitikus"],
      ["!Kanlı agarda hemoliz: alfa, beta, gama", "alfa hemoliz|beta hemoliz|gama hemoliz|hemoliz"],
      ["Beta hemolitikler: basitrasin (grup A), CAMP/hippurat (grup B)", "basitrasin|bacitracin|camp test|hippurat|agalactiae|grup b strep"],
      ["Alfa hemolitikler: optokin ve safrada erime pnömokok lehine", "optokin|safrada erime|safrada eri|safra çözün"],
      ["Lancefield gruplandırması (hücre duvarı karbonhidratı)", "lancefield|karbonhidrat antijen|c karbonhidrat"],
      ["Enterokok: safra-eskülin ve tuza dayanıklılık", "eskülin|eskulin|enterokok|enterococcus|tuzlu ortam|nacl"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "mik-bakteri-toksinleri", tr: "Bakteri toksinleri: ekzotoksin ve endotoksin", en: "Bacterial toxins: exotoxins and endotoxin", cat: "bak", lvl: 2,
    src: { k: [MU, JA], m: [
      ["Ramachandran G. Gram-positive and gram-negative bacterial toxins in sepsis: a brief review. Virulence 2014", null],
      ["Havers FP et al. Use of Tetanus Toxoid, Reduced Diphtheria Toxoid, and Acellular Pertussis Vaccines: Updated Recommendations of ACIP — United States, 2019. MMWR 2020", "https://doi.org/10.15585/mmwr.mm6903a5"]] },
    c: [
      ["!Ekzotoksin: salgılanan protein, toksoid yapılabilir", "ekzotoksin|eksotoksin|exotoxin|toksoid"],
      ["!Endotoksin: Gram negatif dış membranın LPS'si (lipit A), ısıya dayanıklı", "endotoksin|lipit a|lipid a|lipopolisakkarit|lps"],
      ["!A-B yapısı: B bağlanır, A enzimatik etki", "a b toksin|ab toksin|b alt birim|b alt ünite|a alt birim|a alt ünite|bağlanma birim|aktif birim"],
      ["ADP-ribozilasyon: difteri (EF-2), kolera (Gs, cAMP), boğmaca (Gi)", "adp ribozil|ef 2|ef2|uzama faktör|kamp|camp|adenilat siklaz|gs protein|gi protein"],
      ["Nörotoksinler: tetanoz inhibitör nöronları, botulinum asetilkolin salınımını engeller", "tetanospazmin|glisin|gaba|botulinum|botulin|asetilkolin salın|snare"],
      ["Süperantijenler (TSST-1): MHC II ile TCR'yi bağlayıp poliklonal T aktivasyonu", "süperantijen|superantijen|superantigen|tsst|poliklonal"],
      ["Endotoksin TLR4 üzerinden sitokin fırtınası, şok ve DİK", "tlr4|tlr 4|toll benzeri|toll like|sitokin|tnf|yaygın damar içi|dissemine intravask"],
      ["Membran hasarlayan toksinler: streptolizin O, alfa toksin, lesitinaz", "por oluştur|streptolizin|alfa toksin|lesitinaz|pnömolizin"]
    ]},
  { id: "mik-mikobakteriler", tr: "Mikobakterilerin mikrobiyolojisi", en: "Microbiology of mycobacteria", cat: "bak", lvl: 2,
    src: { k: [MU, JA], m: [
      ["Pai M et al. Tuberculosis. Nat Rev Dis Primers 2016", null],
      ["WHO consolidated guidelines on tuberculosis. Module 3: diagnosis — rapid diagnostics for tuberculosis detection. World Health Organization 2024", null]] },
    c: [
      ["!Mikolik asitten zengin duvar: aside dirençli boyama (EZN, auramin)", "mikolik|aside dirençli|aside rezistan|ziehl|ehrlich|kinyoun|auramin"],
      ["!Yavaş üreme: Löwenstein-Jensen ve sıvı kültür (MGIT)", "löwenstein|lowenstein|levenştayn|mgit|sıvı kültür|yavaş ürer|yavaş üre|kültür haftalar"],
      ["!Moleküler tanı: Xpert MTB/RIF, rpoB ile rifampisin direnci", "xpert|genexpert|mtb rif|rpob|nükleik asit amplifikasyon|moleküler test"],
      ["Zorunlu aerob, makrofaj içinde yaşar; granülom ve kazeifikasyon", "zorunlu aerob|hücre içi|intrasellüler|makrofaj|granülom|kazeifi|kazeöz"],
      ["Bağışıklık yanıtının testi: tüberkülin deri testi ve IGRA", "ppd|tüberkülin|igra|interferon gama salınım|quantiferon"],
      ["Tüberküloz dışı mikobakteriler (Runyon sınıflaması)", "tüberküloz dışı|atipik mikobakteri|ntm|runyon|avium|kansasii|marinum|abscessus"],
      ["M. leprae yapay besiyerinde üretilemez", "leprae|lepra|cüzzam|armadillo"],
      ["Virülans: kord faktörü (trehaloz dimikolat)", "kord faktör|cord factor|trehaloz"]
    ]},
  { id: "mik-herpesvirusler", tr: "Herpesvirüsler", en: "Herpesviruses", cat: "vir", lvl: 2,
    src: { k: [MU, JA], m: [
      ["Cohen JI. Herpesvirus latency. J Clin Invest 2020", null],
      ["Gershon AA et al. Varicella zoster virus infection. Nat Rev Dis Primers 2015", null]] },
    c: [
      ["!Zarflı, çift zincirli DNA virüsü; çekirdekte çoğalır", "çift zincirli dna|ds dna|dsdna|zarflı dna|çift sarmallı|çekirdekte çoğal|çekirdekte replike|nükleusta"],
      ["!Ömür boyu latens ve reaktivasyon", "latent|latens|reaktivasyon|reaktive"],
      ["!Latens yerleri: HSV/VZV duyu gangliyonları, EBV B hücresi", "gangliyon|ganglion|trigeminal|dorsal kök|b lenfosit|b hücre"],
      ["Alt aileler: alfa (HSV, VZV), beta (CMV, HHV-6/7), gama (EBV, HHV-8)", "alfa herpes|beta herpes|gama herpes|alphaherpes|betaherpes|gammaherpes|alfa grubu|beta grubu|gama grubu"],
      ["EBV: enfeksiyöz mononükleoz, heterofil antikor, atipik lenfosit", "mononükleoz|heterofil|monospot|paul bunnell|atipik lenfosit|downey"],
      ["CMV: baykuş gözü inklüzyonu, konjenital enfeksiyon", "baykuş göz|sitomegal|cmv|konjenital"],
      ["HHV-8: Kaposi sarkomu; HHV-6: roseola", "kaposi|hhv 8|hhv8|roseola|altıncı hastalık|ekzantem subitum"],
      ["Tzanck yaymasında çok çekirdekli dev hücre", "tzanck|çok çekirdekli dev|multinükleer dev"],
      ["Viral timidin kinaz asiklovirin aktivasyonunu sağlar", "timidin kinaz|asiklovir|gansiklovir|ul97"]
    ]},
  { id: "mik-mantarlar", tr: "Fırsatçı mantarlar: Candida, Aspergillus, Cryptococcus", en: "Opportunistic fungi: Candida, Aspergillus, Cryptococcus", cat: "mant", lvl: 2,
    src: { k: [MU, JA], m: [
      ["WHO fungal priority pathogens list to guide research, development and public health action. World Health Organization 2022", null],
      ["Brown GD et al. Hidden killers: human fungal infections. Sci Transl Med 2012", null]] },
    c: [
      ["!Candida: maya, psödohifa, germ tüp; normal florada", "candida|kandida|germ tüp|psödohif|pseudohif|maya"],
      ["!Aspergillus: dar açıyla dallanan septalı hif, anjiyoinvazyon, galaktomannan", "aspergil|septalı hif|septal hif|dar açı|akut açı|galaktomannan|anjioinvaz|anjiyoinvaz"],
      ["!Cryptococcus: polisakkarit kapsül, çini mürekkebi, kapsül antijeni; menenjit", "kriptokok|cryptococ|çini mürekkeb|hint mürekkeb|india ink|kapsül antijen|kapsüler antijen"],
      ["Mukormikoz: geniş, az septalı, dik açılı dallanan hifler", "mukor|mucor|rhizopus|septasız|aseptat|dik açı"],
      ["Mantar hücresi: zarında ergosterol, duvarında beta-glukan ve kitin", "ergosterol|beta glukan|betaglukan|kitin|ekinokandin"],
      ["Kültür: Sabouraud dekstroz agar", "sabouraud|saboro"],
      ["Candida auris: çoklu dirençli, hastane salgınları", "auris"],
      ["Dimorfik mantarlar: dokuda maya (Coccidioides'te sferül), ortamda küf", "dimorfik|histoplazma|histoplasma|koksidiyo|blastomi"]
    ]},
  { id: "mik-kompleman", tr: "Kompleman sistemi", en: "Complement system", cat: "imm", lvl: 2,
    src: { k: [AB, MU], m: [
      ["Ricklin D, Hajishengallis G, Yang K, Lambris JD. Complement: a key system for immune surveillance and homeostasis. Nat Immunol 2010", null],
      ["Merle NS et al. Complement system part I – molecular mechanisms of activation and regulation. Front Immunol 2015", null]] },
    c: [
      ["!Üç aktivasyon yolu: klasik (C1q-antikor), lektin (MBL), alternatif", "klasik yol|lektin yol|alternatif yol|c1q|mbl|mannoz bağlayan|mannan"],
      ["!C3 konvertaz ve C3b ile opsonizasyon", "c3 konvertaz|c3b|opsoniz"],
      ["!Membran atak kompleksi (C5b-9) ile lizis", "c5b|membran atak|mac kompleks|c9"],
      ["Anafilatoksinler C3a, C5a; C5a kemotaksi", "anafilatoksin|c5a|c3a|kemotaks"],
      ["Düzenleyiciler: C1 inhibitörü (herediter anjiyoödem), CD55/CD59 (PNH), faktör H", "c1 inhibit|c1 esteraz|anjiyoödem|anjioödem|daf|cd55|cd59|paroksismal noktürnal|faktör h"],
      ["Geç kompleman (C5–C9) eksikliğinde tekrarlayan Neisseria enfeksiyonu", "neisseria|meningokok|nesserya|geç kompleman|c5 c9|c5-c9"],
      ["Erken klasik yol (C1q, C2, C4) eksikliği lupus benzeri hastalık", "c2 eksik|c4 eksik|c1q eksik|lupus benzeri|immün kompleks temizl"],
      ["Tarama: CH50 (klasik), AH50 (alternatif)", "ch50|ch 50|ah50|ah 50"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "mik-asi-immunolojisi", tr: "Aşıların immünolojisi", en: "Immunology of vaccines", cat: "imm", lvl: 3,
    src: { k: [AB, MU], m: [
      ["Pollard AJ, Bijker EM. A guide to vaccinology: from basic principles to new developments. Nat Rev Immunol 2021", null],
      ["T.C. Sağlık Bakanlığı. Çocukluk Dönemi Aşı Takvimi (2020). Halk Sağlığı Genel Müdürlüğü", "https://hsgm.saglik.gov.tr/depo/birimler/asi-ile-onlenebilir-hastaliklar-db/dokumanlar/2020_Asi_Takvimi.pdf"]] },
    c: [
      ["!Canlı attenüe ve inaktive/alt birim aşılar", "canlı attenüe|canlı aşı|zayıflatıl|inaktive|ölü aşı|subünite|alt birim"],
      ["!Canlı aşılar ağır immünsüpresyon ve gebelikte kontrendike", "immünsüpres|immunsupres|bağışıklığı baskılan|gebelikte yapılmaz|gebelikte kontrendike|immün yetmezlikte kontrendike|immün yetmezlikte yapılmaz|gebelere yapılmaz"],
      ["!Konjuge aşı: polisakkarit proteine bağlanınca T hücre bağımlı yanıt", "konjuge|konjugat|taşıyıcı protein|t hücre bağımlı|t hücreye bağımlı|t hücre yardımı devreye gir|t hücre yardımı sağla"],
      ["!Bellek hücreleri: ikincil yanıt daha hızlı, güçlü ve IgG ağırlıklı; rapel doz", "bellek|hafıza hücre|memory|ikincil yanıt|sekonder yanıt|rapel|booster"],
      ["Toksoid aşılar: tetanoz, difteri", "toksoid"],
      ["Adjuvan (alüminyum tuzları) doğal bağışıklığı uyarır", "adjuvan|alüminyum|alum"],
      ["Yeni platformlar: mRNA ve viral vektör aşıları", "mrna|viral vektör|vektör aşı"],
      ["Pasif bağışıklık: hazır immünglobulin, anneden plasentayla IgG", "pasif bağışık|pasif immün|hazır antikor|plasenta|transplasent|immünglobulin uygula"],
      ["Sürü (toplum) bağışıklığı", "sürü bağışık|toplum bağışık|herd"]
    ]},
  { id: "mik-hiv-virolojisi", tr: "HIV virolojisi ve replikasyon döngüsü", en: "HIV virology and replication cycle", cat: "vir", lvl: 3,
    src: { k: [MU, JA], m: [
      ["Engelman A, Cherepanov P. The structural biology of HIV-1: mechanistic and therapeutic insights. Nat Rev Microbiol 2012", null],
      ["Deeks SG et al. HIV infection. Nat Rev Dis Primers 2015", null]] },
    c: [
      ["!Retrovirüs (lentivirüs): iki kopya tek zincirli pozitif polariteli RNA", "retrovir|lentivir|tek zincirli rna|iki kopya|diploit|pozitif polar"],
      ["!Ters transkriptaz ile DNA, integraz ile konak genomuna giren provirüs", "ters transkript|revers transkript|reverse transkript|integraz|provirüs|provirus"],
      ["!Giriş: gp120 CD4'e ve CCR5/CXCR4 koreseptörüne bağlanır, gp41 füzyonu sağlar", "gp120|gp 120|ccr5|cxcr4|koreseptör|gp41|gp 41"],
      ["Yapısal genler: gag (p24 kapsit), pol, env", "gag|pol gen|env gen|p24|p 24"],
      ["Proteaz ile olgunlaşma, tomurcuklanarak çıkış", "proteaz|olgunlaş|tomurcuklan"],
      ["Ters transkriptazın prova okuması yok: yüksek mutasyon hızı ve kuasispesies", "prova okuma|proofreading|mutasyon hız|hata oran|hata yapmaya|kuasispesies|quasispecies"],
      ["Latent rezervuar: dinlenme halindeki bellek CD4 T hücreleri", "rezervuar|dinlenme halindeki|istirahat halindeki"],
      ["CCR5 delta32 homozigotlarında R5 virüslere direnç", "delta 32|delta32|δ32"],
      ["HIV-1 ve HIV-2 ayrımı", "hiv 2|hiv-2|hiv iki"]
    ]},
  { id: "mik-mhc-antijen-sunumu", tr: "MHC ve antijen sunumu", en: "MHC and antigen presentation", cat: "imm", lvl: 3,
    src: { k: [AB, MU], m: [
      ["Neefjes J, Jongsma MLM, Paul P, Bakke O. Towards a systems understanding of MHC class I and MHC class II antigen presentation. Nat Rev Immunol 2011", null],
      ["Blum JS, Wearsch PA, Cresswell P. Pathways of antigen processing. Annu Rev Immunol 2013", null]] },
    c: [
      ["!MHC sınıf I: çekirdekli tüm hücreler, sitozolik peptit (proteazom, TAP), CD8'e sunum", "mhc sınıf 1|mhc 1|mhc bir|sınıf 1|sınıf bir|proteazom|tap protein|tap taşıyıcı|cd8"],
      ["!MHC sınıf II: antijen sunan hücreler, endozomal ekzojen peptit, CD4'e sunum", "mhc sınıf 2|mhc 2|mhc iki|sınıf 2|sınıf iki|endozom|lizozom|antijen sunan"],
      ["İnvaryant zincir, CLIP ve HLA-DM", "invaryant|invariant|clip|hla dm|hladm"],
      ["Dendritik hücrede çapraz sunum (ekzojen antijen MHC I ile)", "çapraz sunum|cross presentation|çapraz sun"],
      ["HLA genleri 6. kromozomda, kodominant ve çok polimorfik", "kromozom 6|altıncı kromozom|6. kromozom|kodominant|polimorf|haplotip"],
      ["T hücre aktivasyonu: MHC kısıtlaması ve B7–CD28 ikinci sinyali", "mhc kısıtla|mhc restriksiyon|b7|cd28|kostimül|ko stimül|ikinci sinyal"],
      ["HLA–hastalık ilişkileri: B27, DR3/DR4, DQ2/DQ8", "b27|dq2|dq8|dr3|dr4"],
      ["NK hücreleri MHC I kaybını tanır (kayıp benlik)", "nk hücre|doğal öldürücü|kayıp benlik|missing self"]
    ]},
  { id: "mik-primer-immun-yetmezlik", tr: "Primer immün yetmezlikler (doğuştan bağışıklık hataları)", en: "Primary immunodeficiencies (inborn errors of immunity)", cat: "imm", lvl: 3,
    src: { k: [AB, MU], m: [
      ["Tangye SG et al. Human inborn errors of immunity: 2022 update on the classification from the International Union of Immunological Societies Expert Committee. J Clin Immunol 2022", null],
      ["Bonilla FA et al. Practice parameter for the diagnosis and management of primary immunodeficiency. J Allergy Clin Immunol 2015", null]] },
    c: [
      ["!IUIS sınıflaması: doğuştan bağışıklık hataları", "iuis|doğuştan bağışıklık hata|inborn error"],
      ["!Antikor eksiklikleri: Bruton (BTK), CVID, selektif IgA eksikliği", "bruton|btk|agamaglobulin|cvid|yaygın değişken|selektif iga|iga eksik"],
      ["!Ağır kombine immün yetmezlik (SCID): IL2RG, ADA eksikliği", "scid|ağır kombine|il2rg|ortak gama|adenozin deaminaz|ada eksik"],
      ["DiGeorge (22q11.2 delesyonu): timus hipoplazisi (nadiren aplazi)", "digeorge|22q11|timus aplazi|timus hipoplazi"],
      ["Fagosit bozuklukları: KGH (NADPH oksidaz, DHR testi), LAD", "kronik granülomatöz|nadph|dihidrorodamin|dhr|nitroblu|lökosit adezyon"],
      ["Sendromik: Wiskott-Aldrich, hiper-IgM (CD40L), hiper-IgE (STAT3)", "wiskott|wasp|hiper igm|cd40|hiper ige|job sendrom|stat3"],
      ["Enfeksiyon paterni: kapsüllü bakteri → antikor; fırsatçı → T hücre; katalaz pozitif → fagosit", "kapsüllü bakteri|fırsatçı|katalaz pozitif"],
      ["Tanı: immünglobulin düzeyleri, akım sitometri, yenidoğanda TREC taraması", "trec|akım sitometri|flow sitometri|immünglobulin düzey"],
      ["Ağır T hücre yetmezliğinde canlı aşı yapılmaz", "canlı aşı yapılmaz|canlı aşılar yapılmaz|canlı aşılardan kaçın|bcg yapılmaz|bcg aşısı yapılmaz"]
    ]},
  { id: "mik-direnc-genetigi", tr: "Antibiyotik direncinin genetik ve biyokimyasal mekanizmaları", en: "Genetic and biochemical mechanisms of antibiotic resistance", cat: "bak", lvl: 3,
    src: { k: [MU, JA], m: [
      ["Munita JM, Arias CA. Mechanisms of antibiotic resistance. Microbiol Spectr 2016", null],
      ["Partridge SR, Kwong SM, Firth N, Jensen SO. Mobile genetic elements associated with antimicrobial resistance. Clin Microbiol Rev 2018", null]] },
    c: [
      ["!Mobil genetik elemanlar: plazmit, transpozon, integron", "plazmit|plasmid|transpozon|integron|gen kaset|mobil genetik"],
      ["!Yatay gen aktarımı: konjugasyon, transdüksiyon, transformasyon", "konjugasyon|transdüksiyon|transformasyon|yatay gen|bakteriyofaj|faj aracılı"],
      ["Kromozomal mutasyon: gyrA (kinolon), rpoB (rifampisin)", "kromozomal mutasyon|nokta mutasyon|gyra|giraz|rpob|topoizomeraz"],
      ["!Biyokimyasal mekanizmalar: enzimle yıkım, hedef değişikliği, efluks, porin kaybı", "beta laktamaz|betalaktamaz|hedef değiş|efluks|eflüks|pompa|porin"],
      ["Hedef değişikliği örnekleri: mecA/PBP2a, vanA (D-Ala-D-Lac)", "meca|pbp2a|pbp 2a|vana|d ala d lak|d ala d lac"],
      ["Modifiye edici enzimler ve ribozom metilazları (erm)", "modifiye eden enzim|modifiye edici|asetiltransferaz|metilaz|erm gen"],
      ["R plazmitleri ile çoklu direnç aktarımı", "r plazmit|r faktör|çoklu direnç|çoğul direnç"],
      ["Doğal (intrinsik) ve kazanılmış direnç ayrımı", "intrinsik|doğal direnç|kazanılmış direnç"],
      ["Biyofilm ve persister hücreler: fenotipik tolerans", "biyofilm|persister|tolerans"]
    ]},
  { id: "mik-enterobacterales", tr: "Enterobacterales", en: "Enterobacterales", cat: "bak", lvl: 3,
    src: { k: [MU, JA], m: [
      ["Adeolu M, Alnajar S, Naushad S, Gupta RS. Genome-based phylogeny and taxonomy of the 'Enterobacteriales': proposal for Enterobacterales ord. nov. Int J Syst Evol Microbiol 2016", null],
      ["Kaper JB, Nataro JP, Mobley HL. Pathogenic Escherichia coli. Nat Rev Microbiol 2004", null]] },
    c: [
      ["!Gram negatif çomak; oksidaz negatif, glukozu fermente eder, fakültatif anaerob", "oksidaz negatif|glukoz fermente|glukozu fermente|fakültatif anaerob|nitrat"],
      ["!Laktoz fermentasyonu (MacConkey/EMB): E. coli, Klebsiella pozitif; Salmonella, Shigella negatif", "laktoz|mac conkey|makonki|macconkey|emb agar"],
      ["!Antijenik yapı: O (LPS), H (flagella), K (kapsül)", "o antijen|h antijen|k antijen|somatik antijen|flagellar|vi antijen"],
      ["E. coli patotipleri: ETEC, EPEC, EHEC (Shiga toksini, O157:H7), EIEC, EAEC, UPEC", "etec|ehec|epec|eiec|eaec|upec|o157|shiga|şiga|sorbitol"],
      ["Klebsiella: kalın kapsül, mukoid koloni", "klebsiella|mukoid|string test|hipervirülan"],
      ["Proteus: üreaz ve yayılarak üreme (swarming)", "proteus|üreaz|swarming|yayılarak"],
      ["Salmonella H2S üretir; Shigella hareketsiz", "h2s|hidrojen sülfür|hareketsiz|tsi|kligler"],
      ["Taksonomi: 2016'da Enterobacterales takımı (Enterobacteriaceae ailesi ayrıldı)", "enterobacterales|enterobacteriaceae|enterobakteriyase"]
    ]},
  { id: "mik-protozoonlar", tr: "Giardia, Entamoeba ve Toxoplasma", en: "Giardia, Entamoeba and Toxoplasma", cat: "mant", lvl: 3,
    src: { k: [MU, JA], m: [
      ["Montoya JG, Liesenfeld O. Toxoplasmosis. Lancet 2004", null],
      ["Shirley DT et al. A review of the global burden, new diagnostics, and current therapeutics for amebiasis. Open Forum Infect Dis 2018", null]] },
    c: [
      ["!Giardia: armut biçimli trofozoit, ventral disk; ince bağırsakta malabsorpsiyon", "giardia|giardiya|armut|ventral disk|emici disk|malabsorpsiyon|steatore|yağlı ishal"],
      ["!E. histolytica: eritrosit fagosite eden trofozoit, şişe biçimli ülser, karaciğer apsesi", "histolytica|histolitika|eritrosit fagosit|eritrofagosit|şişe|karaciğer apse"],
      ["!Toxoplasma: kedi kesin konak, takizoit ve bradizoit (doku kisti)", "toxoplasma|toksoplazma|gondii|kedi|takizoit|bradizoit|doku kist"],
      ["Bulaş: kistle fekal-oral (su), ookist ya da çiğ et", "fekal oral|ookist|çiğ et|az pişmiş|kontamine su|klora dirençli|klora dayanıklı"],
      ["E. histolytica kisti dört çekirdekli; E. dispar'dan ayırım antijen/PCR ile", "dört çekirdek|4 çekirdek|kromatoid|dispar"],
      ["Konjenital toksoplazmoz: koryoretinit, hidrosefali, kalsifikasyon; tanıda IgG avidite", "koryoretinit|hidrosefali|kalsifikasyon|avidite"],
      ["İmmünsüpresede Toxoplasma ensefaliti (reaktivasyon)", "ensefalit|beyin apse|halkasal|reaktivasyon"],
      ["Tedavide nitroimidazoller (Giardia, amip)", "metronidazol|nitroimidazol|tinidazol|paromomisin"]
    ]}
]
});
})();
