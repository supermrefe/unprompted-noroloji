/* Farmakoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS temel bilimler farmakoloji sorularının en sık geldiği mekanizma konuları (farmakokinetik, CYP450, reseptör kuramı,
   otonom ilaçlar, kardiyovasküler/böbrek ilaçları, antimikrobiyal etki mekanizmaları, antiepileptik ve antidiyabetik mekanizmalar, gebelik, ilaç düzeyi izlemi).
   Hastalık yönetimi ve zehirlenme tedavisi klinik branşlara (acil, kardiyoloji, nöroloji, endokrin) bırakıldı; burada ilacın nasıl etki ettiği anlatılır.
   Kolay = çekirdek mekanizmalar; Orta = TUS'ta sık, ayrıntı/etkileşim isteyen; Zor = sınıflamalar, dar terapötik aralık, özel gruplar. */
(function () {
const GG = "Goodman & Gilman's The Pharmacological Basis of Therapeutics, 14. baskı (2023)";
const KZ = "Katzung's Basic & Clinical Pharmacology, 16. baskı (2024)";

UP.add({ id: "farmakoloji", subs: {
    pk: "Farmakokinetik ve ilaç etkileşimleri",
    pd: "Farmakodinami ve otonom farmakoloji",
    kv: "Kardiyovasküler, böbrek ve kan ilaçları",
    kemo: "Antimikrobiyal ve antiinflamatuvar ilaçlar",
    ozel: "Nöro-endokrin ilaçlar ve özel durumlar"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "far-emilim-dagilim", tr: "İlaçların emilimi, biyoyararlanımı ve dağılımı", en: "Drug absorption, bioavailability and distribution", cat: "pk", lvl: 1,
    src: { k: [GG, KZ], m: [
      ["Benet LZ, Hoener BA. Changes in plasma protein binding have little clinical relevance. Clin Pharmacol Ther 2002", null],
      ["Smith DA, Beaumont K, Maurer TS, Di L. Volume of distribution in drug design. J Med Chem 2015", null]] },
    c: [
      ["!Emilim çoğunlukla iyonize olmayan (lipofilik) formun pasif difüzyonuyla", "pasif difüzyon|iyonize olmayan|noniyonize|non iyonize|iyonlaşmamış|lipofilik|lipid çözünür|yağda çözünür"],
      ["pH ve pKa ilişkisi (Henderson-Hasselbalch); iyon tuzağı", "henderson|pka|iyon tuzağ|iyon hapsi|ion trapping|zayıf asit|zayıf baz"],
      ["!Biyoyararlanım: sistemik dolaşıma değişmeden ulaşan oran (IV'de tam)", "biyoyararlanım|biyoyararlılık|bioavailability|biyoyararlan"],
      ["İlk geçiş (first-pass) etkisi: karaciğer ve barsak duvarı metabolizması", "ilk geçiş|first pass|firstpass|presistemik"],
      ["!Dağılım hacmi (Vd): plazma konsantrasyonuna göre ilacın vücuttaki görünür hacmi", "dağılım hacmi|dağılım hacim|volume of distribution|görünür hacim|vd"],
      ["Plazma proteinlerine bağlanma: yalnız serbest ilaç etkili (asidik ilaçlar albümine)", "proteine bağlan|protein bağlan|albümine bağlan|serbest ilaç|serbest fraksiyon|bağlanmamış|alfa 1 asit glikoprotein"],
      ["Kan-beyin bariyeri ve P-glikoprotein dağılımı sınırlar", "kan beyin bariyer|p glikoprotein|pglikoprotein|p gp|efflüks"]
    ]},
  { id: "far-kolinerjik-ilaclar", tr: "Kolinerjik ve antikolinerjik ilaçlar", en: "Cholinergic and anticholinergic drugs", cat: "pd", lvl: 1,
    src: { k: [GG, KZ], m: [
      ["Gilhus NE. Myasthenia gravis. N Engl J Med 2016", "https://doi.org/10.1056/NEJMra1602678"],
      ["Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet 2008", "https://pmc.ncbi.nlm.nih.gov/articles/PMC2493390"]] },
    c: [
      ["!Asetilkolin reseptörleri: muskarinik (G proteinine bağlı) ve nikotinik (iyon kanalı)", "muskarinik reseptör|g proteinine bağlı muskarinik|nikotinik reseptörler|iyon kanalı olan nikotinik|m2 reseptör|m3 reseptör"],
      ["Doğrudan etkili muskarinik agonistler: betanekol, pilokarpin", "betanekol|pilokarpin|karbakol|metakolin|doğrudan etkili"],
      ["!Asetilkolinesteraz inhibitörleri: neostigmin, piridostigmin, fizostigmin (MSS'ye geçer)", "asetilkolinesteraz inhibit|kolinesteraz inhibit|antikolinesteraz|neostigmin|piridostigmin|fizostigmin|edrofonyum|donepezil|rivastigmin"],
      ["Organofosfatlar enzimi geri dönüşümsüz fosforiller; yaşlanma (aging), pralidoksim", "fosforil|yaşlanma|aging"],
      ["!Muskarinik antagonist: atropin (taşikardi, midriyazis, kuruluk, idrar retansiyonu)", "muskarinik antagonist|antimuskarinik|ipratropyum|tiotropyum|oksibutinin|skopolamin"],
      ["Antikolinerjik bulgular: kuru ağız, sıcak-kuru cilt, midriyazis, deliryum", "kuru ağız|ağız kuruluğu|sıcak ve kuru|sıcak kuru|kuru cilt"],
      ["Kolinerjik bulgular: salivasyon, bronkore, bradikardi, miyozis (SLUDGE)", "sludge|salivasyon|tükürük artış|lakrimasyon"]
    ]},
  { id: "far-nsaid-cox", tr: "NSAİİ ve siklooksijenaz (COX) farmakolojisi", en: "NSAIDs and cyclooxygenase pharmacology", cat: "kemo", lvl: 1,
    src: { k: [GG, KZ], m: [
      ["Vane JR. Inhibition of prostaglandin synthesis as a mechanism of action for aspirin-like drugs. Nat New Biol 1971", null],
      ["FitzGerald GA, Patrono C. The coxibs, selective inhibitors of cyclooxygenase-2. N Engl J Med 2001", null]] },
    c: [
      ["!Siklooksijenaz inhibisyonu ile prostaglandin ve tromboksan sentezinin azalması", "siklooksijenaz|cox|prostaglandin sentez|prostaglandin yapımı|prostaglandinleri azalt|araşidonik"],
      ["COX-1 yapısal (mide koruma, trombosit), COX-2 indüklenebilir (inflamasyon)", "cox 1|cox1|cox bir|yapısal|konstitütif|cox 2|cox2|cox iki|indüklenebilir|indüklen"],
      ["!Aspirin COX'u geri dönüşümsüz asetiller; trombosit ömrü boyunca tromboksan A2 azalır", "asetill|geri dönüşümsüz|irreversibl|tromboksan|txa2|trombosit ömrü|antiagregan"],
      ["Gastrointestinal yan etki: ülser, kanama (mukoza koruyucu PG azalır)", "peptik ülser|mide ülser|ülser|gastrointestinal kanama|mide kanama|mukoza koru|gastrit"],
      ["Böbrek: afferent arteriyol dilatasyonu azalır; akut böbrek hasarı, sodyum tutulumu", "afferent|böbrek kan akım|akut böbrek hasar|böbrek yetmez|nefrotoks|sodyum tutul|sıvı tutul"],
      ["!Seçici COX-2 inhibitörleri (koksibler): GİS daha az, kardiyovasküler tromboz riski", "koksib|celecoxib|selekoksib|etorikoksib|rofekoksib|seçici cox|kardiyovasküler risk|tromboz riski|miyokard infarktüs"],
      ["Aspirin: çocukta Reye sendromu, astım (AERD)", "reye|aspirin astım|aerd|aspirine duyarlı|samter"]
    ]},
  { id: "far-antibiyotik-mekanizma", tr: "Antibiyotiklerin etki mekanizmaları", en: "Mechanisms of action of antibiotics", cat: "kemo", lvl: 1,
    src: { k: [GG, KZ], m: [
      ["Kohanski MA, Dwyer DJ, Collins JJ. How antibiotics kill bacteria: from targets to networks. Nat Rev Microbiol 2010", null],
      ["Tamma PD et al. Infectious Diseases Society of America 2024 Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections. Clin Infect Dis 2024", "https://doi.org/10.1093/cid/ciae403"]] },
    c: [
      ["!Hücre duvarı sentezi: beta-laktamlar PBP'ye (transpeptidaz) bağlanır; vankomisin D-Ala-D-Ala'ya", "penisilin bağlayan|pbp|transpeptidaz|peptidoglikan|d ala|hücre duvarı sentez"],
      ["!Protein sentezi: 30S (aminoglikozid, tetrasiklin) ve 50S (makrolid, klindamisin, linezolid, kloramfenikol)", "30s|30 s|otuz s|50s|50 s|elli s|ribozom|alt birim"],
      ["!Nükleik asit: kinolonlar DNA giraz/topoizomeraz IV, rifampisin RNA polimeraz", "dna giraz|giraz|topoizomeraz|rna polimeraz"],
      ["Folat sentezi: sülfonamid (dihidropteroat sentaz) + trimetoprim (dihidrofolat redüktaz)", "dihidropteroat|dihidrofolat|folat sentez|folik asit sentez|folat yol"],
      ["Membran: polimiksin/kolistin, daptomisin", "polimiksin|kolistin|daptomisin|hücre zarı|membran bütünlüğ"],
      ["Bakterisidal ve bakteriyostatik ayrımı", "bakteriyostatik|bakteriostatik"],
      ["Konsantrasyon bağımlı (aminoglikozid, kinolon) ve zaman bağımlı (beta-laktam) öldürme", "konsantrasyon bağımlı|konsantrasyona bağımlı|zaman bağımlı|zamana bağımlı|postantibiyotik|post antibiyotik|mic üzeri"]
    ]},
  { id: "far-diuretikler", tr: "Diüretiklerin etki yerleri ve mekanizmaları", en: "Diuretics: sites and mechanisms of action", cat: "kv", lvl: 1,
    src: { k: [GG, KZ], m: [
      ["2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2021", "https://doi.org/10.1093/eurheartj/ehab368"],
      ["Clase CM ve ark. Potassium homeostasis and management of dyskalemia in kidney diseases: conclusions from a KDIGO Controversies Conference. Kidney Int 2020", "https://doi.org/10.1016/j.kint.2019.09.018"]] },
    c: [
      ["!Kıvrım diüretikleri: Henle kulpu kalın çıkan kolda Na-K-2Cl kotransportör inhibisyonu (furosemid)", "kıvrım diüret|loop diüret|henle|kalın çıkan|nkcc2|na k 2cl|na k2cl|sodyum potasyum iki klor|furosemid|bumetanid|torasemid"],
      ["!Tiyazidler: distal tübülde Na-Cl kotransportör inhibisyonu", "tiyazid|hidroklorotiyazid|klortalidon|indapamid|distal tübül|distal kıvrıml|ncc|sodyum klor kotransport"],
      ["!Potasyum tutucular: aldosteron antagonisti (spironolakton) ve ENaC blokeri (amilorid)", "potasyum tutucu|amilorid|triamteren|enac|epitelyal sodyum kanal"],
      ["Karbonik anhidraz inhibitörü (asetazolamid): proksimal tübül, metabolik asidoz", "karbonik anhidraz|asetazolamid|proksimal tübül|bikarbonat kayb"],
      ["Osmotik diüretik: mannitol", "mannitol|osmotik diüret"],
      ["Kıvrım ve tiyazid: hipokalemi, metabolik alkaloz; kıvrım kalsiyumu atar, tiyazid tutar", "metabolik alkaloz|kalsiyumu tutar|kalsiyum atılımını azalt|kalsiyum atılımını artır|kalsiyumu atar"],
      ["Potasyum tutucularda hiperkalemi; spironolaktonla jinekomasti", "jinekomasti|antiandrojen"],
      ["Ototoksisite (kıvrım), hiperürisemi ve hiperglisemi (tiyazid)", "ototoks|işitme kaybı riski|hiperürisemi|ürik asit|gut|hiperglisemi"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "far-yarilanma-klerens", tr: "Klerens, yarılanma ömrü ve kararlı durum", en: "Clearance, half-life and steady state", cat: "pk", lvl: 2,
    src: { k: [GG, KZ], m: [
      ["Levey AS, Inker LA. Assessment of glomerular filtration rate in health and disease: a state of the art review. Clin Pharmacol Ther 2017", "https://pubmed.ncbi.nlm.nih.gov/28474735/"],
      ["Benet LZ, Zia-Amirhosseini P. Basic principles of pharmacokinetics. Toxicol Pathol 1995", null]] },
    c: [
      ["!Klerens: birim zamanda ilaçtan arındırılan plazma hacmi; idame dozunu belirler", "klerens|clearance|arındırılan plazma|idame doz"],
      ["!Yarılanma ömrü = 0,693 × Vd / klerens", "yarılanma ömr|yarı ömür|yarılanma süre|half life|0 693|0,693|0 69|sıfır virgül altı yüz doksan üç|sıfır virgül altı dokuz|ln 2|t yarı"],
      ["!Kararlı duruma yaklaşık 4–5 yarılanma ömründe ulaşılır", "kararlı durum|kararlı düzey|steady state|dört beş yarı|4 5 yarı|dört ile beş|4 ile 5|plato"],
      ["Yükleme dozu dağılım hacmine göre (Vd × hedef konsantrasyon)", "yükleme doz|loading doz|yükleme dozu"],
      ["Birinci derece kinetik (sabit oran) ve sıfırıncı derece (sabit miktar: etanol, fenitoin, yüksek doz aspirin)", "birinci derece|birinci dereceden|first order|sıfırıncı derece|sıfır derece|zero order|doyurulabilir|satüre|etanol|fenitoin"],
      ["Böbrek yetmezliğinde böbrekle atılan ilaçlarda doz ayarı (GFR/kreatinin klerensi)", "böbrek yetmez|gfr|glomerüler filtrasyon|kreatinin klerens|cockcroft|doz ayar"],
      ["Faz I (oksidasyon, CYP) ve faz II (konjugasyon) metabolizma", "faz 1|faz bir|faz i |faz 2|faz iki|konjugasyon|glukuronid|glukuronidasyon|asetilasyon"]
    ]},
  { id: "far-cyp450-etkilesim", tr: "Sitokrom P450 ve ilaç etkileşimleri", en: "Cytochrome P450 and drug interactions", cat: "pk", lvl: 2,
    src: { k: [GG, KZ], m: [
      ["Zanger UM, Schwab M. Cytochrome P450 enzymes in drug metabolism: regulation of gene expression, enzyme activities, and impact of genetic variation. Pharmacol Ther 2013", null],
      ["Drug Development and Drug Interactions: Table of Substrates, Inhibitors and Inducers. U.S. FDA", null]] },
    c: [
      ["!CYP3A4 ilaçların en büyük kısmını metabolize eder", "cyp3a4|cyp 3a4|3a4|üç a dört|sitokrom p450|sitokrom p 450|cyp450|cyp 450"],
      ["!İndükleyiciler (rifampisin, karbamazepin, fenitoin, St John's wort) substrat düzeyini düşürür", "indükleyici|indüktör|indüksiyon|indükler|rifampisin|karbamazepin|fenitoin|fenobarbital|sarı kantaron|st john"],
      ["!İnhibitörler (klaritromisin, azol antifungaller, ritonavir, greyfurt suyu) substrat düzeyini artırır", "inhibitör|inhibe eder|klaritromisin|eritromisin|ketokonazol|itrakonazol|flukonazol|ritonavir|greyfurt|amiodaron|simetidin"],
      ["İnhibisyon hızlı, indüksiyon gecikmeli başlar (enzim sentezi gerekir)", "gecikmeli başlar|indüksiyon gecikmeli|indüksiyon yavaş|günler içinde|enzim sentez|yeni enzim|inhibisyon hızlı|inhibisyon hemen|etkileri hızlı başlar"],
      ["Klinik örnekler: varfarin, statin miyopatisi, oral kontraseptif başarısızlığı", "inr bozul|inr değiş|inr yüksel|miyopati|rabdomiyoliz|oral kontraseptif|doğum kontrol"],
      ["Farmakogenetik: CYP2D6 (kodein → morfin), CYP2C19 (klopidogrel aktivasyonu), CYP2C9", "cyp2d6|2d6|kodein|cyp2c19|2c19|klopidogrel|cyp2c9|2c9|farmakogenet|yavaş metabolizör|ultra hızlı"],
      ["P-glikoprotein aracılı etkileşimler (digoksin, DOAK)", "p glikoprotein|pglikoprotein|p gp|digoksin|dabigatran"]
    ]},
  { id: "far-reseptor-farmakodinami", tr: "Reseptör farmakodinamisi: agonist, antagonist, doz-yanıt", en: "Receptor pharmacodynamics: agonists, antagonists, dose-response", cat: "pd", lvl: 2,
    src: { k: [GG, KZ], m: [
      ["Neubig RR et al. International Union of Pharmacology Committee on Receptor Nomenclature and Drug Classification. XXXVIII. Update on terms and symbols in quantitative pharmacology. Pharmacol Rev 2003", null],
      ["Rang HP. The receptor concept: pharmacology's big idea. Br J Pharmacol 2006", null]] },
    c: [
      ["!Afinite (bağlanma) ve intrinsik aktivite/etkinlik (efficacy)", "afinite|afinitesi|intrinsik aktivite|intrensek|efikasi|efficacy|etkinlik"],
      ["Potens: EC50 (yarı maksimal yanıt konsantrasyonu; dozda ED50); Emax = maksimum etki", "potens|ec50|ec 50|ed50|emax|e max|yarı maksimal|yarı maksimum"],
      ["!Tam agonist, kısmi agonist (tavan etkisi), ters agonist", "tam agonist|kısmi agonist|parsiyel agonist|ters agonist|invers agonist|tavan etki"],
      ["!Kompetitif antagonist eğriyi sağa kaydırır, Emax değişmez; nonkompetitif Emax'ı düşürür", "kompetitif|yarışmalı|sağa kay|nonkompetitif|yarışmasız|non kompetitif|geri dönüşümsüz antagon|maksimum etkiyi düşür|emax düş"],
      ["Reseptör tipleri: iyon kanalı, G proteinine bağlı, enzim bağlantılı (tirozin kinaz), nükleer", "iyon kanalı|g protein|tirozin kinaz|nükleer reseptör|intraselüler reseptör|ikinci haberci|camp|siklik amp"],
      ["Terapötik indeks: TD50/ED50", "terapötik indeks|terapotik indeks|td50|ld50|güvenlik aralığ"],
      ["Desensitizasyon/taşifilaksi, yedek reseptör", "desensitiz|taşifilaksi|tolerans|yedek reseptör|spare receptor|down regülasyon|aşağı regülasyon"]
    ]},
  { id: "far-adrenerjik-ilaclar", tr: "Adrenerjik agonist ve antagonistler", en: "Adrenergic agonists and antagonists", cat: "pd", lvl: 2,
    src: { k: [GG, KZ], m: [
      ["Lenders JWM ve ark. Pheochromocytoma and Paraganglioma: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab 2014", "https://doi.org/10.1210/jc.2014-1498"],
      ["EAACI guidelines: Anaphylaxis (2021 update). Allergy 2022", "https://pubmed.ncbi.nlm.nih.gov/34343358/"]] },
    c: [
      ["!Reseptörler: alfa-1 (Gq, vazokonstriksiyon), alfa-2 (Gi, presinaptik), beta-1 (kalp), beta-2 (bronş, damar gevşemesi)", "alfa 1|alfa1|alfa bir|alfa 2|alfa2|alfa iki|beta 1|beta1|beta bir|beta 2|beta2|beta iki|gq|gs|gi"],
      ["Adrenalin (anafilakside ilk ilaç), noradrenalin (alfa ağırlıklı vazopresör), dopamin, dobutamin", "adrenalin|epinefrin|noradrenalin|norepinefrin|dopamin|dobutamin|izoproterenol|fenilefrin"],
      ["Beta-2 agonistler: salbutamol, formoterol (bronkodilatasyon), tremor/hipokalemi", "salbutamol|albuterol|formoterol|salmeterol|terbutalin|bronkodilat"],
      ["Alfa-2 agonist: klonidin, metildopa, deksmedetomidin (santral sempatik çıkış azalır)", "klonidin|metildopa|deksmedetomidin|santral sempatik|sempatik çıkış"],
      ["!Beta blokerler: kardiyoselektif (metoprolol, bisoprolol) ve nonselektif (propranolol); intrinsik sempatomimetik aktivite", "beta bloker|kardiyoselektif|metoprolol|bisoprolol|atenolol|propranolol|nonselektif|karvedilol|labetalol|intrinsik sempatomimetik|pindolol"],
      ["Alfa blokerler: prazosin/doksazosin (postural hipotansiyon), fenoksibenzamin", "alfa bloker|prazosin|doksazosin|terazosin|tamsulosin|fenoksibenzamin|fentolamin|postural hipotansiyon|ortostatik"],
      ["!Feokromositomada önce alfa, sonra beta blokaj (karşılanmamış alfa etkisinden kaçınmak için)", "önce alfa|alfa blokajdan sonra|alfadan sonra beta|karşılanmamış alfa|beta bloker tek başına verilmez|tek başına beta bloker verilmez|alfa blokajı tamamlan|alfa blokajla başla"],
      ["Dolaylı sempatomimetikler: amfetamin, efedrin, kokain (geri alım inhibisyonu)", "amfetamin|efedrin|dolaylı sempatomimetik|dolaylı etkili|geri alım|tiramin"]
    ]},
  { id: "far-antikoagulan-antidot", tr: "Antikoagülanların mekanizması ve etkisinin geri döndürülmesi", en: "Anticoagulant mechanisms and reversal", cat: "kv", lvl: 2,
    src: { k: [GG, KZ], m: [
      ["Tomaselli GF et al. 2020 ACC Expert Consensus Decision Pathway on Management of Bleeding in Patients on Oral Anticoagulants. J Am Coll Cardiol 2020", null],
      ["Wolberg AS, et al. Venous thrombosis. Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.6"]] },
    c: [
      ["!Heparin antitrombin III'ü aktive eder (trombin ve faktör Xa); izlem aPTT; antidot protamin", "antitrombin|at iii|at 3|aptt|apte|protamin|fraksiyone olmayan heparin|standart heparin"],
      ["DMAH ağırlıklı faktör Xa; böbrekle atılır, anti-Xa ile izlenir; protamin kısmi etkili", "dmah|düşük molekül ağırlıklı|enoksaparin|anti xa|antixa|kısmen|kısmi nötralize"],
      ["Heparinle indüklenen trombositopeni (HIT): antikor aracılı, trombozla", "heparinle indüklenen|hit|pf4|trombosit faktör 4|trombositopeni"],
      ["!Varfarin vitamin K epoksit redüktazı (VKORC1) inhibe eder: faktör II, VII, IX, X ile protein C ve S azalır; izlem INR", "vkorc1|epoksit redüktaz|vitamin k antagonist|vitamin k bağımlı|2 7 9 10|iki yedi dokuz on|protein c|inr"],
      ["!Varfarin geri dönüşü: IV vitamin K + protrombin kompleks konsantresi (PCC)", "vitamin k|k vitamini|protrombin kompleks|pcc|dört faktörlü"],
      ["DOAK: dabigatran direkt trombin inhibitörü; rivaroksaban, apiksaban, edoksaban faktör Xa inhibitörü", "dabigatran|direkt trombin|rivaroksaban|apiksaban|edoksaban|faktör xa inhibit|doak|noak"],
      ["DOAK antidotları: idarusizumab (dabigatran), andeksanet alfa (apiksaban/rivaroksaban; erişilemezse 4F-PCC)", "idarusizumab|idarucizumab|praxbind|andeksanet|andexanet"],
      ["Varfarin başlangıcında protein C erken düşer: geçici hiperkoagülabilite, cilt nekrozu", "cilt nekroz|deri nekroz|hiperkoagül|köprüleme|köprü tedavi|heparinle birlikte başla"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "far-antiaritmik-siniflama", tr: "Antiaritmik ilaçlar: Vaughan Williams sınıflaması", en: "Antiarrhythmic drugs: Vaughan Williams classification", cat: "kv", lvl: 3,
    src: { k: [GG, KZ], m: [
      ["Lei M, Wu L, Terrar DA, Huang CL. Modernized classification of cardiac antiarrhythmic drugs. Circulation 2018", null],
      ["2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J 2022", "https://doi.org/10.1093/eurheartj/ehac262"]] },
    c: [
      ["!Sınıf I: sodyum kanal blokerleri (IA kinidin/prokainamid, IB lidokain/meksiletin, IC flekainid/propafenon)", "sınıf 1|sınıf bir|sınıf ia|sınıf ib|sınıf ic|1a|1b|1c|bir a|bir b|bir c|sodyum kanal bloke|sodyum kanalını bloke|kinidin|prokainamid|dizopiramid|meksiletin"],
      ["IC: yapısal kalp hastalığında proaritmi (CAST); IB: iskemik dokuda etkili", "cast|yapısal kalp hastalığı|proaritm|iskemik doku|post mi|infarktüs sonrası"],
      ["!Sınıf II: beta blokerler (faz 4 eğimi azalır, AV düğüm iletimi yavaşlar)", "sınıf 2|sınıf iki|sınıf ii|faz 4|faz dört"],
      ["!Sınıf III: potasyum kanal blokerleri (amiodaron, sotalol, dofetilid); aksiyon potansiyeli ve QT uzar", "sınıf 3|sınıf üç|sınıf iii|potasyum kanal bloke|potasyum kanalını bloke|dofetilid|ibutilid|qt uza|repolarizasyonu uzat"],
      ["Amiodaron toksisitesi: tiroid, akciğer fibrozu, karaciğer, kornea birikimi", "tiroid|hipotiroidi|hipertiroidi|akciğer fibroz|pulmoner fibroz|kornea|hepatotoks|mavi gri"],
      ["!Sınıf IV: kalsiyum kanal blokerleri (verapamil, diltiazem) AV düğümde", "sınıf 4|sınıf dört|sınıf iv|nondihidropiridin"],
      ["Sınıf dışı: adenozin, digoksin, magnezyum", "sınıflama dışı|adenozin|magnezyum"],
      ["Torsades de pointes riski (IA ve III)", "torsade|torsad|tdp"]
    ]},
  { id: "far-antiepileptik-mekanizma", tr: "Antiepileptik (antinöbet) ilaçların etki mekanizmaları", en: "Mechanisms of action of antiseizure drugs", cat: "ozel", lvl: 3,
    src: { k: [GG, KZ], m: [
      ["Sills GJ, Rogawski MA. Mechanisms of action of currently used antiseizure drugs. Neuropharmacology 2020", null],
      ["Fisher RS ve ark. ILAE official report: A practical clinical definition of epilepsy. Epilepsia 2014", "https://doi.org/10.1111/epi.12550"]] },
    c: [
      ["!Voltaj kapılı sodyum kanal blokajı: fenitoin, karbamazepin, okskarbazepin, lamotrijin, lakozamid", "sodyum kanal|sodyum kanalı|fenitoin|karbamazepin|okskarbazepin|lamotrijin|lakozamid|yavaş inaktivasyon"],
      ["!GABA-A artırıcılar: benzodiazepinler (açılma sıklığı), barbitüratlar (açılma süresi)", "gaba a|gabaa|gaba reseptör|benzodiazepin|diazepam|lorazepam|midazolam|barbitürat|fenobarbital|açılma sıklığ|açılma süres|klorür kanal"],
      ["GABA yıkımı/geri alımı: vigabatrin (GABA transaminaz), tiagabin (GAT-1)", "vigabatrin|gaba transaminaz|tiagabin|gat 1|gat1|geri alım"],
      ["!T tipi kalsiyum kanalı: etosüksimid (absans)", "t tipi|ttipi|etosüksimid|etosuksimid|talamus|absans"],
      ["Sinaptik vezikül proteini SV2A: levetirasetam, brivarasetam", "sv2a|sv 2a|sinaptik vezikül|levetirasetam|brivarasetam"],
      ["Alfa-2-delta alt birimi: gabapentin, pregabalin", "alfa 2 delta|alfa2 delta|alfa iki delta|gabapentin|pregabalin"],
      ["Çok mekanizmalı: valproat, topiramat; AMPA antagonisti perampanel", "valproat|valproik|topiramat|zonisamid|perampanel|ampa|çoklu mekanizma|birden fazla mekanizma"],
      ["Karbamazepin/fenitoin enzim indükleyici; valproat inhibitör; teratojenite (valproat)", "enzim indükle|indükleyici|enzim inhibit|teratojen|nöral tüp"]
    ]},
  { id: "far-gebelik-teratojen", tr: "Gebelikte ilaç kullanımı ve teratojen ilaçlar", en: "Drugs in pregnancy and teratogens", cat: "ozel", lvl: 3,
    src: { k: [GG, KZ], m: [
      ["Content and Format of Labeling for Human Prescription Drug and Biological Products; Requirements for Pregnancy and Lactation Labeling (PLLR). U.S. FDA Final Rule 2014", null],
      ["15. Management of Diabetes in Pregnancy: Standards of Care in Diabetes—2026. Diabetes Care 2026", "https://doi.org/10.2337/dc26-S015"]] },
    c: [
      ["!Organogenez döneminde (embriyonik dönem) teratojenite riski en yüksek; erken dönemde ya hep ya hiç", "organogenez|embriyonik dönem|ya hep ya hiç|hep ya hiç|all or none"],
      ["FDA A-B-C-D-X harf kategorileri kaldırıldı; anlatı biçiminde etiketleme (PLLR)", "harf kategori|abcdx|a b c d x|pllr|kategori x|anlatı|narratif|kaldırıldı"],
      ["!Valproat (nöral tüp defekti), karbamazepin, fenitoin (fetal hidantoin)", "valproat|valproik|nöral tüp|spina bifida|fetal hidantoin|fenitoin|karbamazepin"],
      ["!İzotretinoin ve vitamin A türevleri; talidomid (fokomeli)", "izotretinoin|retinoid|vitamin a|talidomid|fokomeli"],
      ["Varfarin embriyopatisi (nazal hipoplazi, epifiz noktalanması); gebelikte heparin/DMAH", "varfarin embriyopati|nazal hipoplazi|kondrodisplazi|epifiz|heparin|dmah|enoksaparin"],
      ["ACE inhibitörü/ARB: fetal böbrek hasarı, oligohidramniyos", "ace inhibit|arb|anjiyotensin|fetal böbrek|oligohidramniyos|renal disgenez"],
      ["Diğerleri: metotreksat, tetrasiklin (diş/kemik), aminoglikozid (ototoksisite), lityum (Ebstein)", "metotreksat|tetrasiklin|diş renk|aminoglikozid|ototoks|lityum|ebstein|misoprostol|dietilstilbestrol"],
      ["Gebelikte güvenli sayılanlar: insülin, metildopa/labetalol/nifedipin, folik asit", "insülin|metildopa|labetalol|nifedipin|folik asit"]
    ]},
  { id: "far-terapotik-ilac-izlemi", tr: "Terapötik ilaç düzeyi izlemi (dar terapötik aralıklı ilaçlar)", en: "Therapeutic drug monitoring", cat: "pk", lvl: 3,
    src: { k: [GG, KZ], m: [
      ["Gitlin M. Lithium side effects and toxicity: prevalence and management strategies. Int J Bipolar Disord 2016", "https://doi.org/10.1186/s40345-016-0068-y"],
      ["Chan BS, Buckley NA. Digoxin-specific antibody fragments in the treatment of digoxin toxicity. Clin Toxicol 2014", "https://pubmed.ncbi.nlm.nih.gov/25089630/"]] },
    c: [
      ["!Dar terapötik aralık: etkili ve toksik düzey birbirine yakın", "dar terapötik|dar terapotik|terapötik aralık|terapotik aralık|terapötik pencere|toksik düzey|toksik doz"],
      ["!Örnekler: digoksin, lityum, fenitoin, aminoglikozid, vankomisin, teofilin, siklosporin/takrolimus", "digoksin|lityum|fenitoin|gentamisin|amikasin|aminoglikozid|vankomisin|teofilin|siklosporin|takrolimus|valproat|karbamazepin"],
      ["!Örnekleme zamanı: kararlı durumda, dozdan önce çukur (trough) düzey (digoksinde dozdan ≥6 saat, lityumda yaklaşık 12 saat sonra)", "çukur düzey|dip düzey|trough|doz öncesi|dozdan önce|dozdan hemen önce"],
      ["Lityum böbrekle atılır; tiyazid, ACEİ, NSAİİ ve dehidratasyon düzeyi artırır", "tiyazid|nsaii|nsaid|ace inhibit|dehidratasyon|sodyum kısıtlama|böbrekle atıl"],
      ["Digoksin toksisitesini hipokalemi artırır; antidot digoksin-spesifik Fab", "hipokalemi|digoksin spesifik|fab|digifab|antikor fragman"],
      ["Fenitoin: sıfırıncı derece kinetik ve albümine bağlanma (hipoalbüminemide serbest düzey)", "hipoalbümin|serbest fenitoin|serbest düzey|albümine yoğun"],
      ["Aminoglikozid/vankomisin: nefrotoksisite ve ototoksisite; AUC'ye göre doz", "nefrotoks|ototoks|auc|eğri altı alan"]
    ]},
  { id: "far-antidiyabetik-mekanizma", tr: "Antidiyabetik ilaçların etki mekanizmaları", en: "Mechanisms of antidiabetic drugs", cat: "ozel", lvl: 3,
    src: { k: [GG, KZ], m: [
      ["9. Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes—2026. Diabetes Care 2026", "https://doi.org/10.2337/dc26-S009"],
      ["KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int 2022", "https://doi.org/10.1016/j.kint.2022.06.008"]] },
    c: [
      ["!Metformin: hepatik glukoneogenezi azaltır (AMPK); hipoglisemi yapmaz, laktik asidoz riski", "metformin|glukoneogenez|glikoneogenez|ampk|laktik asidoz|biguanid"],
      ["!Sülfonilüreler: beta hücresinde ATP duyarlı K kanalını kapatır, insülin salgılatır; hipoglisemi", "sülfonilüre|glibenklamid|gliklazid|glimepirid|atp duyarlı|katp|k atp|potasyum kanalını kapat|insülin salgıla|sekretegog"],
      ["!SGLT2 inhibitörleri: proksimal tübülde glukoz geri emilimini engeller (glukozüri)", "glukozüri|glikozüri|glukoz geri emilim|glukozun geri emilim|gliflozinler"],
      ["SGLT2 yan etkileri: genital mantar enfeksiyonu, öglisemik ketoasidoz", "genital enfeksiyon|genital mantar|mikotik|öglisemik|euglisemik|ketoasidoz"],
      ["İnkretin: GLP-1 agonistleri ve DPP-4 inhibitörleri glukoza bağımlı insülin salgısı, glukagon baskılanması", "dpp 4|dpp4|gliptin|sitagliptin|inkretin|glukoza bağımlı|glukagonu baskıla"],
      ["Tiazolidindionlar (pioglitazon): PPAR-gamma, insülin duyarlılığı; ödem, kalp yetersizliği", "tiazolidindion|glitazon|pioglitazon|ppar|insülin duyarlıl|sıvı tutulum|ödem"],
      ["Alfa-glukozidaz inhibitörü (akarboz): karbonhidrat emilimini geciktirir", "akarboz|alfa glukozidaz|alfa glikozidaz|miglitol"],
      ["Kardiyorenal koruma: SGLT2i ve GLP-1 RA KVH/KBH'de glukozdan bağımsız", "kardiyorenal|kardiyovasküler fayda|böbrek koru|glukozdan bağımsız|hba1c den bağımsız|kardiyovasküler koru"]
    ]}
]
});
})();
