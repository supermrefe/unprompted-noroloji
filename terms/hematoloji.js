/* Hematoloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan ve serviste/acilde sık karşılaşılan hematoloji konuları; anemiler (Türkiye için beta-talasemi taşıyıcılığı ve
   evlilik öncesi tarama), trombosit/hemostaz bozuklukları (ASH 2019 ITP, ISTH DIC/TTP, ASH 2018 HIT, WFH 2020, ASH/ISTH/NHF/WFH 2021 VWH),
   transfüzyon güvenliği ve hematolojik maligniteler (ELN 2022 AML, ELN 2020 KML, iwCLL 2018, IMWG, WHO 2022/ICC MPN).
   Kolay = her hekimin bilmesi gereken çekirdek; Orta = TUS ayrıntısı; Zor = acil tanı gerektiren tromboz-trombositopeni sendromları ve maligniteler. */
(function () {
const WH = "Williams Hematology, 10. baskı (2021)";
const HO = "Hoffman Hematology: Basic Principles and Practice, 8. baskı (2023)";

UP.add({ id: "hematoloji", subs: {
    anemi: "Anemiler ve hemoglobinopatiler",
    hemostaz: "Trombosit ve hemostaz bozuklukları",
    transf: "Transfüzyon tıbbı",
    malign: "Hematolojik maligniteler"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "hem-demir-eksikligi-anemisi", tr: "Demir eksikliği anemisi", en: "Iron deficiency anaemia", cat: "anemi", lvl: 1,
    src: { k: [WH, HO], m: [
      ["British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults. Gut 2021", "https://doi.org/10.1136/gutjnl-2021-325210"],
      ["Pasricha SR, et al. Iron deficiency. Lancet 2021", "https://doi.org/10.1016/S0140-6736(20)32594-0"]] },
    c: [
      ["!Mikrositer hipokrom anemi (düşük MCV, yüksek RDW)", "mikrosit|hipokrom|düşük mcv|mcv düşük|mcv si düşük|ortalama eritrosit hacmi|rdw|kalem hücre"],
      ["!Tanıda en değerli tek test: düşük serum ferritini", "ferritin düşük|düşük ferritin|ferritini düşük|ferritinin düşük|ferritin düzeyi düşük|düşük serum ferritin|ilk düşen ferritin|ferritin ilk düş|ferritin en duyarlı|ferritinin düşmesi"],
      ["Düşük serum demiri ve transferrin satürasyonu, yüksek demir bağlama kapasitesi", "transferrin satürasyon|transferrin doygunluğu|tdbk|demir bağlama kapasitesi|tibc|serum demiri düş|serum demiri de düş"],
      ["Nedenler: kronik kan kaybı (menstrüasyon, GİS), emilim bozukluğu, gebelik", "menstrü|adet kanama|menoraji|gastrointestinal kan|gis kanama|gizli kan|emilim bozuk|malabsorpsiyon|gebelikte demir ihtiyac"],
      ["!Erkek ve postmenopozal kadında GİS kaynağı araştırılır: üst-alt endoskopi, çölyak serolojisi", "endoskopi|kolonoskopi|gastroskopi|kolon kanser|gis malignite|çölyak seroloji|doku transglutaminaz|ttg"],
      ["!Oral demir: günde bir kez 50–100 mg elementer demir (BSG 2021)", "oral demir|ağızdan demir|demir sülfat|ferröz|elementer demir|gün aşırı"],
      ["Yanıt ilk 4 haftada Hb ile değerlendirilir; Hb normale döndükten sonra yaklaşık 3 ay sürdürülür", "dört hafta|4 hafta|retikülosit|üç ay daha|3 ay daha|depoları doldur|depolar dol|depoların dol"],
      ["IV demir: oral intolerans/yanıtsızlık, malabsorpsiyon ya da hızlı yanıt gerekiyorsa", "intravenöz demir|iv demir|damar yoluyla demir|damardan demir|ferrik karboksimaltoz|demir sukroz|parenteral demir|ferrik derisomaltoz"],
      ["Karakteristik (özgül olmayan) bulgular: pika/pagofaji, koilonişi, glossit, angüler keilit", "pika|pagofaji|buz yeme|koiloniş|kaşık tırnak|angüler|angular|keilit|glossit|plummer"]
    ]},
  { id: "hem-b12-folat-eksikligi", tr: "B12 vitamini ve folat eksikliği (megaloblastik anemi)", en: "Vitamin B12 and folate deficiency", cat: "anemi", lvl: 1,
    src: { k: [WH, HO], m: [
      ["Devalia V, et al. Guidelines for the diagnosis and treatment of cobalamin and folate disorders (BSH). Br J Haematol 2014", "https://doi.org/10.1111/bjh.12959"],
      ["Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med 2013", "https://doi.org/10.1056/NEJMcp1113996"]] },
    c: [
      ["!Makrositer megaloblastik anemi, hipersegmente nötrofil", "makrosit|megaloblast|yüksek mcv|mcv yüksek|mcv si yüksek|hipersegment|oval makrosit"],
      ["Ağır olguda pansitopeni ve hafif sarılık", "pansitopeni|lökopeni ve trombositopeni|limon sarı|hafif sarılık|hafif ikter"],
      ["İnefektif eritropoez: LDH ve indirekt bilirubin yüksek", "ldh|laktat dehidrogenaz|indirekt bilirubin|inefektif eritropoez|intramedüller hemoliz"],
      ["B12 nedenleri: pernisiyöz anemi (intrinsik faktör/parietal hücre antikoru), gastrektomi, metformin/PPI, vegan beslenme", "pernisiyöz|intrinsik faktör|parietal hücre|pariyetal hücre|atrofik gastrit|gastrektomi|metformin|proton pompa|vegan|terminal ileum"],
      ["!Folat eksikliği: yetersiz alım, alkolizm, gebelik, metotreksat; gebelikte nöral tüp defekti", "folat eksikliği|folat eksikliğinde|folat eksikliğine|folik asit eksik|alkolizm|metotreksat|nöral tüp|spina bifida|yeşil yapraklı"],
      ["!Ayrım: metilmalonik asit B12 eksikliğinde artar, folat eksikliğinde normal; homosistein ikisinde de artar", "metilmalonik|mma|homosistein|holotranskobalamin"],
      ["B12 eksikliğinde nörolojik tutulum (subakut kombine dejenerasyon), anemi olmadan da", "subakut kombine|arka kordon|dorsal kolon|nöropati|parestezi|vibrasyon|demans"],
      ["!B12 eksikliği dışlanmadan tek başına folat verilmez (nörolojik hasar ilerleyebilir)", "önce b12|b12 yi önce|b12 den önce|tek başına folat|folat tek başına|folik asidi tek başına|folik asit tek başına|nörolojik tabloyu kötüleş|nörolojik hasarı ağırlaş|nörolojik hasar ilerle"],
      ["Tedavi: kas içi B12 (hidroksokobalamin/siyanokobalamin), yüksek doz oral seçenek; folatta oral folik asit", "kas içi|intramüsküler|hidroksokobalamin|siyanokobalamin|b12 enjeksiyon|b12 iğne|yüksek doz oral|oral folik asit|parenteral b12|b12 parenteral|b12 vitamini parenteral|kas içine"]
    ]},
  { id: "hem-beta-talasemi", tr: "Beta-talasemi (taşıyıcılık ve talasemi major)", en: "Beta-thalassaemia", cat: "anemi", lvl: 1,
    src: { k: [WH, HO], m: [
      ["TIF Guidelines for the management of transfusion dependent thalassaemia (TDT), 4. baskı. Thalassaemia International Federation 2021", "https://thalassaemia.org.cy/publications/tif-publications/guidelines-for-the-management-of-transfusion-dependent-thalassaemia-4th-edition-2021-v2/"],
      ["Evlilik Öncesi Hemoglobinopati Tarama Programı Saha Rehberi. T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü", "https://hsgm.saglik.gov.tr/depo/birimler/cocuk-ergen-sagligi-db/Programlar/EVLILIK_ONCESI_HEMOGLOBINOPATI_TARAMA_PROGRAMI_SAHA_REHBERI.pdf"]] },
    c: [
      ["!Beta-globin zincir sentezinde azalma ya da yokluk; otozomal resesif kalıtım", "beta globin|beta zincir|globin zincir|otozomal resesif|resesif kalıt"],
      ["!Taşıyıcılık (minör): hafif mikrositoz, HbA2 artışı; demir eksikliğinden ayrılmalı", "hba2|hemoglobin a2|a2 yüksek|a2 artışı|a2 artar|mentzer|hemoglobin elektroforez|hplc"],
      ["Talasemi major: ilk yıllarda ağır anemi, hepatosplenomegali, kemik deformiteleri", "hepatosplenomegali|splenomegali|saç fırçası|sincap|maksiller|kemik deformite|ekstramedüller"],
      ["!Transfüzyona bağımlı talasemide düzenli eritrosit transfüzyonu", "düzenli transfüzyon|düzenli eritrosit|düzenli kan|transfüzyona bağımlı|transfüzyon bağımlı|ömür boyu transfüzyon|transfüzyon programı"],
      ["!Demir yükü ve şelasyon (desferoksamin, deferasiroks, deferipron); kardiyak T2* MR", "şelasyon|şelatör|şelat|desferal|desferoksamin|deferoksamin|deferasiroks|deferipron|demir yükü|demir birikim|t2 yıldız|kardiyak t2|kardiyak mr"],
      ["Küratif: allojenik kök hücre nakli; yeni seçenekler luspatersept ve gen tedavisi", "kök hücre nakli|kemik iliği nakli|allojenik|luspatersept|luspatercept|gen tedavi"],
      ["Türkiye: taşıyıcılık yaklaşık %2,1; evlilik öncesi hemoglobinopati taraması", "evlilik öncesi|evlenmeden önce|evlilik taraması|premarital|yüzde 2 1|yüzde iki virgül bir"],
      ["Komplikasyonlar: kardiyak (en önemli ölüm nedeni), endokrinopatiler", "kalp yetersiz|kalp yetmezliğ|kalpte demir|kardiyak demir|kalbe demir|aritmi|kardiyak komplikasyon|endokrinopati|hipogonad|diyabet|osteoporoz"]
    ]},
  { id: "hem-itp", tr: "İmmün trombositopeni (ITP)", en: "Immune thrombocytopenia", cat: "hemostaz", lvl: 1,
    src: { k: [WH, HO], m: [
      ["American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv 2019", "https://doi.org/10.1182/bloodadvances.2019000966"],
      ["Updated international consensus report on the investigation and management of primary immune thrombocytopenia. Blood Adv 2019", "https://doi.org/10.1182/bloodadvances.2019000812"]] },
    c: [
      ["!Trombosit otoantikorlarıyla izole trombositopeni; dışlama tanısı", "trombosit otoantikor|trombositlere karşı|antitrombosit|izole trombositopeni|dışlama tanı"],
      ["Periferik yayma: psödotrombositopeni ve diğer nedenlerin dışlanması", "periferik yayma|psödotrombositopeni|edta|kümeleş|psödo trombositopeni"],
      ["Sekonder nedenler: HIV, HCV, H. pylori, SLE, ilaçlar", "hiv|hcv|hepatit c|pylori|sekonder itp|ikincil itp"],
      ["Çocukta viral enfeksiyon sonrası akut ve çoğu kendiliğinden düzelir; erişkinde kronikleşme eğilimi", "viral enfeksiyon sonrası|enfeksiyondan sonra|kendiliğinden düzel|kendi kendine düzel|spontan düzel|kronikleş|kronik seyir"],
      ["Çocukta hafif kanamada ve erişkinde trombosit ≥30 bin ise gözlem (ASH 2019)", "gözlem öner|gözlemle izle|gözlemle takip|sadece gözlem|yalnızca gözlem|gözlem yapılır|30 bin|30 000|otuz bin|kanama yoksa izlem|kanama yoksa izlen|kanama yoksa gözlem"],
      ["!Birinci basamak: kısa süreli kortikosteroid (prednizon ≤6 hafta ya da deksametazon)", "kortikosteroid|prednizon|prednizolon|deksametazon|steroid"],
      ["Hızlı yükseltme gerektiğinde IVIG (ya da anti-D)", "ivig|immünglobulin|immünoglobulin|anti d"],
      ["!İkinci basamak: TPO reseptör agonisti, rituksimab, splenektomi", "tpo|trombopoetin|eltrombopag|romiplostim|avatrombopag|rituksimab|splenektomi|fostamatinib"],
      ["Kanama: peteşi, purpura, mukozal kanama", "peteşi|purpura|ekimoz|mukozal kanama|burun kanama|diş eti kanama"]
    ]},
  { id: "hem-transfuzyon-reaksiyonlari", tr: "Transfüzyon reaksiyonları", en: "Transfusion reactions", cat: "transf", lvl: 1,
    src: { k: [WH, HO], m: [
      ["Delaney M, et al. Transfusion reactions: prevention, diagnosis, and treatment. Lancet 2016", "https://doi.org/10.1016/S0140-6736(15)01313-6"],
      ["Wiersum-Osselton JC, et al. Revised international surveillance case definition of transfusion-associated circulatory overload. Lancet Haematol 2019", "https://doi.org/10.1016/S2352-3026(19)30080-8"]] },
    c: [
      ["!İlk adım: transfüzyonu durdur, damar yolunu serum fizyolojikle açık tut", "transfüzyonu durdur|transfüzyonu kes|transfüzyon durdurul|transfüzyon kesil|damar yolu açık|damar yolunu açık|serum fizyolojik|izotonik"],
      ["!Hasta kimliği ve torba etiketinin yeniden kontrolü; torba kan bankasına gönderilir", "kimliği kontrol|kimlik kontrol|kimliğin kontrol|kimliği yeniden|kimlik doğrula|kimliğini doğrula|etiketi kontrol|etiket kontrol|etiketin kontrol|etiketini kontrol|yatak başı kontrol|torba kan bankasına|torbayı kan bankasına|torba kan bankasına gönder|kan bankasına gönder|kan bankasına iade|kan bankasına bildir"],
      ["!Akut hemolitik reaksiyon: ABO uyumsuzluğu (çoğunlukla kimlik hatası), DAT, hemoglobinüri", "abo uyumsuz|abo uygunsuz|akut hemolitik|hemoglobinüri|direkt antiglobulin|direkt coombs|dat|yanlış kan|yanlış hasta"],
      ["Febril non-hemolitik reaksiyon: en sık; lökosit azaltma ile önlenir", "febril non|febril nonhemolitik|non hemolitik|nonhemolitik|lökosit azalt|lökositten arındır|lökodeplese|lökosit filtre"],
      ["Alerjik reaksiyon ve anafilaksi (IgA eksikliği)", "ürtiker|alerjik reaksiyon|anafilak|iga eksik"],
      ["TRALI: akut nonkardiyojenik akciğer ödemi", "trali|transfüzyonla ilişkili akut akciğer|nonkardiyojenik|non kardiyojenik|anti hla|lökosit antikor"],
      ["TACO: dolaşım yüklenmesine bağlı hidrostatik akciğer ödemi; diüretik", "taco|dolaşım yüklen|volüm yüklen|sıvı yüklen|hidrostatik|diüretik|furosemid"],
      ["Gecikmiş hemolitik reaksiyon ve transfüzyonla ilişkili GVHH (ışınlanmış ürün)", "gecikmiş hemolitik|gecikmiş reaksiyon|graft versus|gvhd|gvhh|ışınlanmış|ışınlama|irradiye|alloimmünizasyon"],
      ["Bakteriyel kontaminasyon ve sepsis (özellikle trombosit süspansiyonu)", "bakteriyel kontaminasyon|kontamine|sepsis|kan kültür"]
    ]},
  { id: "hem-hodgkin-lenfoma", tr: "Hodgkin lenfoma", en: "Hodgkin lymphoma", cat: "malign", lvl: 1,
    src: { k: [WH, HO], m: [
      ["Eichenauer DA, et al. Hodgkin lymphoma: ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2018", "https://doi.org/10.1093/annonc/mdy080"],
      ["Ansell SM. Hodgkin lymphoma: 2025 update on diagnosis, risk-stratification, and management. Am J Hematol 2024", "https://doi.org/10.1002/ajh.27470"]] },
    c: [
      ["!Reed-Sternberg hücresi (CD15 ve CD30 pozitif)", "reed|sternberg|cd30|cd15|hodgkin hücre|baykuş göz"],
      ["Klasik HL alt tipleri (en sık nodüler sklerozan) ve nodüler lenfosit predominant tip", "nodüler skleroz|mikst sellüler|miks sellüler|lenfositten zengin|lenfosit deplesyon|lenfositten fakir|lenfosit predominant"],
      ["Ağrısız lenfadenopati, sıklıkla servikal/mediastinal; komşu lenf bölgelerine yayılım", "ağrısız|servikal|mediastin|boyunda|bitişik lenf|komşu lenf|komşu bölge"],
      ["B semptomları (ateş, gece terlemesi, kilo kaybı); kaşıntı, alkolle ağrı", "b semptom|gece terleme|kilo kayb|kaşıntı|pruritus|alkolle ağrı|alkol alınca|alkol sonrası ağrı"],
      ["!Evreleme: PET-BT ile Ann Arbor/Lugano", "ann arbor|lugano|pet|pozitron"],
      ["!Tedavi: erken evrede kısa kemoterapi + radyoterapi; ileri evrede ABVD, BV-AVD ya da nivolumab-AVD / eskale BEACOPP ya da BrECADD", "abvd|beacopp|brecadd|nivolumab avd|n avd|avd|brentuksimab|doksorubisin|bleomisin|kemoradyoterapi|kemoterapi ve radyoterapi"],
      ["Nüks/refrakter: yüksek doz kemoterapi + otolog kök hücre nakli; anti-PD-1 (nivolumab, pembrolizumab)", "otolog|nivolumab|pembrolizumab|pd 1|pd1|checkpoint|immün kontrol"],
      ["Geç etkiler: ikincil kanserler (meme), kardiyotoksisite, bleomisin akciğer toksisitesi", "ikincil kanser|ikincil malign|sekonder malign|meme kanser|geç etki|geç yan etki|kardiyotoksis|akciğer toksis|pulmoner toksis|infertilite"],
      ["EBV ilişkisi; iki tepeli yaş dağılımı", "ebv|epstein|iki tepe|bimodal"]
    ]},
  /* ====================== ORTA ====================== */
  { id: "hem-otoimmun-hemolitik-anemi", tr: "Otoimmün hemolitik anemi (sıcak ve soğuk tip)", en: "Autoimmune haemolytic anaemia", cat: "anemi", lvl: 2,
    src: { k: [WH, HO], m: [
      ["Jäger U, et al. Diagnosis and treatment of autoimmune hemolytic anemia in adults: Recommendations from the First International Consensus Meeting. Blood Rev 2020", "https://doi.org/10.1016/j.blre.2019.100648"],
      ["Brodsky RA. Warm autoimmune hemolytic anemia. N Engl J Med 2019", null]] },
    c: [
      ["!Hemoliz bulguları: LDH ve indirekt bilirubin yüksek, haptoglobin düşük, retikülositoz", "haptoglobin|retikülositoz|retikülosit artışı|retikülosit yüksek|retikülositler art|indirekt bilirubin"],
      ["!Tanının anahtarı: direkt antiglobulin (Coombs) testi, monospesifik (anti-IgG, anti-C3d)", "direkt antiglobulin|direkt coombs|direk coombs|direkt kumbs|dat|anti igg|anti c3|c3d|monospesifik"],
      ["Sıcak tip: IgG, dalakta ekstravasküler yıkım, sferositler", "sıcak tip|sıcak antikor|sıcak otoimmün|igg tipi|igg antikor|ekstravasküler|sferosit"],
      ["Soğuk aglütinin hastalığı: IgM ve kompleman, soğukta akrosiyanoz, aglütinasyon", "soğuk aglütinin|soğuk tip|soğuk antikor|igm|akrosiyanoz|aglütinasyon|kompleman aracılı"],
      ["Sekonder nedenler: KLL ve lenfoproliferatif hastalıklar, SLE, enfeksiyonlar (Mycoplasma, EBV), ilaçlar", "lenfoproliferatif|kll|kronik lenfositik|lupus|sle|mikoplazma|mycoplasma|ebv|ilaca bağlı hemoliz|ilaç ilişkili"],
      ["!Sıcak tipte ilk basamak kortikosteroid; ağır ya da yanıtsızda erken rituksimab", "sıcak tipte kortikosteroid|sıcak tipte steroid|sıcak tipte ilk basamak|ilk basamak kortikosteroid|ilk basamak steroid|ilk basamakta steroid|ilk basamakta kortikosteroid|prednizon|prednizolon|metilprednizolon|erken rituksimab"],
      ["Soğuk tipte soğuktan korunma; steroid etkisiz, rituksimab ± bendamustin, sutimlimab", "soğuktan koru|soğuktan kaçın|sıcak tut|ısıtılmış|bendamustin|sutimlimab|steroide yanıt vermez|steroid etkisiz|steroidler etkisiz"],
      ["Ağır anemide transfüzyon geciktirilmez; folik asit desteği, tromboz profilaksisi", "transfüzyon geciktiril|transfüzyondan kaçınılmaz|transfüzyonu geciktirme|transfüzyon yapılabilir|folik asit|tromboz profilaksi|tromboprofilaksi"]
    ]},
  { id: "hem-orak-hucre-hastaligi", tr: "Orak hücreli anemi", en: "Sickle cell disease", cat: "anemi", lvl: 2,
    src: { k: [WH, HO], m: [
      ["Yawn BP, et al. Management of sickle cell disease: summary of the 2014 evidence-based report by expert panel members. JAMA 2014", null],
      ["Kato GJ, et al. Sickle cell disease. Nat Rev Dis Primers 2018", null]] },
    c: [
      ["!Beta globinde glutamik asit yerine valin: HbS; deoksijenasyonda polimerizasyon", "hbs|hemoglobin s|valin|glutamik asit|glutamat|polimeriz|orak şekl"],
      ["!Vazooklüzif ağrılı kriz: hidrasyon ve hızlı analjezi (opioid)", "vazooklüz|vaso oklüz|ağrılı kriz|ağrı kriz|opioid|morfin|hidrasyon"],
      ["Akut göğüs sendromu: yeni infiltrat + göğüs ağrısı/ateş/hipoksi", "akut göğüs sendrom|göğüs sendromu|yeni infiltrat"],
      ["Otosplenektomi ve kapsüllü bakteri enfeksiyonu: penisilin profilaksisi ve aşılama", "otosplenektomi|fonksiyonel aspleni|aspleni|kapsüllü|pnömokok|penisilin profilaksi"],
      ["Diğer krizler: dalak sekestrasyonu, aplastik kriz (parvovirüs B19), priapizm, inme (çocukta transkraniyal Doppler taraması)", "sekestrasyon|aplastik kriz|parvovirüs|parvo|priapizm|transkraniyal doppler|transkranial doppler|tkd"],
      ["!Hastalığı değiştiren tedavi: hidroksiüre (HbF'yi artırır)", "hidroksiüre|hidroksi üre|hidroksikarbamid|hbf|fetal hemoglobin"],
      ["Transfüzyon/kan değişimi; küratif kök hücre nakli ve gen tedavisi", "kan değişimi|eritrositaferez|exchange|değişim transfüzyon|kök hücre nakli|gen tedavi|krispr|crispr"],
      ["Tanı: hemoglobin elektroforezi/HPLC, yaymada orak hücreler; Türkiye'de Çukurova-Hatay bölgesinde sık", "elektroforez|hplc|orak hücreler|orak şekilli hücre|çukurova|hatay|adana|mersin"]
    ]},
  { id: "hem-hemofili", tr: "Hemofili A ve B", en: "Haemophilia A and B", cat: "hemostaz", lvl: 2,
    src: { k: [WH, HO], m: [
      ["Srivastava A, et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia 2020", null],
      ["Berntorp E, et al. Haemophilia. Nat Rev Dis Primers 2021", null]] },
    c: [
      ["!X'e bağlı resesif kalıtım; hemofili A faktör VIII, B faktör IX eksikliği", "x e bağlı|x kromozom|x linked|xe bağlı|hemofili a|hemofili b|faktör 8 eksik|faktör viii eksik|faktör sekiz eksik|faktör 9 eksik|faktör ix eksik|faktör dokuz eksik"],
      ["!aPTT uzun; PT ve trombosit sayısı normal; karıştırma testi düzelir (inhibitörde düzelmez)", "aptt uza|aptt uzun|apttsi uza|aptt si uza|parsiyel tromboplastin zamanı uza|karıştırma test|karışım test|karıştırma çalışma|mixing"],
      ["Şiddet faktör düzeyine göre (hafif-orta-ağır); tanı faktör aktivitesi ölçümüyle", "faktör düzey|faktör aktivite|ağır hemofili|hafif hemofili|orta hemofili"],
      ["Klinik: hemartroz, kas içi kanama; hemofilik artropati", "hemartroz|eklem içi kanama|eklem içine kanama|ekleme kanama|hemofilik artropati|kas içi kanama|iliopsoas|kas kanama"],
      ["!Ağır hemofilide profilaksi (WFH 2020): faktör konsantresi ya da emisizumab", "düzenli profilaksi|profilaktik faktör|profilaksiyi|emisizumab|emicizumab|faktör konsantre|faktör replas|rekombinant faktör"],
      ["İnhibitör gelişimi: bypass ajanlar (rFVIIa, aPCC), immün tolerans indüksiyonu", "inhibitör geliş|inhibitörlü|inhibitör varlı|bypass|baypas|rekombinant faktör 7|faktör viia|apcc|immün tolerans"],
      ["Hafif hemofili A'da desmopressin; kas içi enjeksiyon ve NSAİİ/aspirinden kaçınma", "desmopressin|ddavp|kas içi enjeksiyon yapılmaz|kas içi enjeksiyondan kaçın|aspirinden kaçın|nsaid den kaçın|aspirin verilmez|aspirin kullanılmaz"],
      ["Gen tedavisi ve yeni ajanlar", "gen tedavi|fitusiran|konsizumab|marstasimab|rebalans"]
    ]},
  { id: "hem-dik", tr: "Dissemine intravasküler koagülasyon (DİK)", en: "Disseminated intravascular coagulation", cat: "hemostaz", lvl: 2,
    src: { k: [WH, HO], m: [
      ["Wada H, et al. Guidance for diagnosis and treatment of DIC from harmonization of the recommendations from three guidelines (ISTH SSC). J Thromb Haemost 2013", null],
      ["Levi M, Scully M. How I treat disseminated intravascular coagulation. Blood 2018", null]] },
    c: [
      ["!Altta yatan hastalığa bağlı sistemik koagülasyon aktivasyonu: tüketim, mikrotromboz ve kanama", "sistemik koagülasyon aktivasyon|pıhtılaşmanın sistemik|tüketim koagülopati|tüketim|mikrotromb|mikrovasküler tromb"],
      ["!Nedenler: sepsis, travma, obstetrik (dekolman, amniyon embolisi), malignite (APL, adenokarsinom)", "sepsis|travma|dekolman|plasenta ayrıl|amniyon|amniyotik|akut promiyelositik|apl|adenokarsinom|müsinöz"],
      ["Laboratuvar: trombositopeni, PT uzaması, fibrinojen düşüklüğü, D-dimer/FDP artışı, şistositler", "fibrinojen|d dimer|ddimer|fdp|fibrin yıkım|şistosit|protrombin zaman|pt uzun|pt uza|inr"],
      ["!ISTH aşikar DİK skoru (trombosit, D-dimer, PT, fibrinojen); seri ölçüm", "isth|aşikar dik|aşikar dic|overt dic|overt dik|dik skor|dic skor|seri ölçüm|tekrarlayan ölçüm|seri takip"],
      ["!Tedavinin temeli altta yatan nedenin düzeltilmesi", "altta yatan neden|altta yatan hastalığ|nedeni tedavi|nedenin tedavi|nedenin düzelt|tetikleyen nedeni"],
      ["Kanayan ya da girişim yapılacak hastada trombosit, TDP, kriyopresipitat/fibrinojen replasmanı", "taze donmuş plazma|tdp|plazma replas|kriyopresipitat|kriyo|fibrinojen konsantre|trombosit süspansiyon|trombosit transfüzyon"],
      ["Tromboz baskın DİK'te ve kanamayan hastada profilaktik heparin", "profilaktik heparin|heparin profilaksi|proflaktik heparin|düşük molekül ağırlıklı heparin|dmah|tromboz baskın|tromboz ağır bas|heparin düşünülebilir|heparin düşünülür|heparin verilebilir|heparin kullanılabilir"],
      ["Purpura fulminans, akrosiyanoz ve organ yetmezliği", "purpura fulminans|akral nekroz|organ yetmezliğ|çoklu organ|organ iskemi|organ hasar|böbrek yetmezliğ|ards"]
    ]},
  { id: "hem-multipl-miyelom", tr: "Multipl miyelom", en: "Multiple myeloma", cat: "malign", lvl: 2,
    src: { k: [WH, HO], m: [
      ["Rajkumar SV, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol 2014", null],
      ["Dimopoulos MA, et al. Multiple myeloma: EHA-ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2021", null]] },
    c: [
      ["!Kemik iliğinde klonal plazma hücresi çoğalması, monoklonal (M) protein", "plazma hücre|plazmosit|monoklonal|m protein|m komponent|m pik|m spike|paraprotein"],
      ["!Son organ hasarı CRAB: hiperkalsemi, böbrek yetmezliği, anemi, litik kemik lezyonları", "crab|hiperkalsemi|litik|osteolitik|zımba deliği|kemik lezyon|patolojik kırık"],
      ["IMWG 2014: SLiM biyobelirteçleri de tedavi gerektiren miyelom tanımlar", "slim|biyobelirteç|imwg|hafif zincir oranı 100|serbest hafif zincir oranı|yüzde 60 klonal|60 klonal"],
      ["Tanı: serum protein elektroforezi, immünfiksasyon, serbest hafif zincir, kemik iliği; Bence Jones", "elektroforez|immünfiksasyon|immünofiksasyon|serbest hafif zincir|hafif zincir|bence jones|kemik iliği biyopsi|kemik iliği aspirasyon"],
      ["Görüntüleme: tüm vücut düşük doz BT, PET-BT ya da MR", "düşük doz bt|düşük doz bilgisayarlı|düşük doz tüm vücut|tüm vücut|whole body|pet bt|pet ct|pet bete"],
      ["MGUS ve içten içe (smoldering) miyelomdan ayırım", "mgus|önemi belirsiz|smoldering|içten içe|sessiz miyelom|asemptomatik miyelom"],
      ["Böbrek: hafif zincir silendir (cast) nefropatisi; hidrasyon, nefrotoksiklerden kaçınma", "cast nefropati|silendir nefropati|miyelom böbre|hafif zincir nefropati|nefrotoksik"],
      ["!Tedavi: proteazom inhibitörü + immünomodülatör + anti-CD38 (daratumumab) ± deksametazon; uygun hastada otolog KHN ve lenalidomid idame", "bortezomib|karfilzomib|proteazom|lenalidomid|pomalidomid|talidomid|daratumumab|anti cd38|otolog|idame"],
      ["Destek: bisfosfonat/denosumab; ISS/R-ISS evreleme (beta-2 mikroglobulin, albümin)", "bisfosfonat|zoledronik|denosumab|iss|beta 2 mikroglobulin|beta2 mikroglobulin|b2 mikroglobulin"]
    ]},
  /* ====================== ZOR ====================== */
  { id: "hem-ttp-hus", tr: "Trombotik trombositopenik purpura ve hemolitik üremik sendrom", en: "Thrombotic thrombocytopenic purpura and haemolytic uraemic syndrome", cat: "hemostaz", lvl: 3,
    src: { k: [WH, HO], m: [
      ["Zheng XL, et al. ISTH guideline for the diagnosis of thrombotic thrombocytopenic purpura. J Thromb Haemost 2020", null],
      ["Zheng XL, et al. ISTH guideline for the treatment of thrombotic thrombocytopenic purpura. J Thromb Haemost 2020", null]] },
    c: [
      ["!Trombotik mikroanjiyopati: mikroanjiyopatik hemolitik anemi (şistosit) + trombositopeni", "trombotik mikroanjiyopati|tma|mikroanjiyopatik|şistosit|parçalanmış eritrosit|fragmante"],
      ["!TTP: ağır ADAMTS13 eksikliği (çoğunlukla edinsel otoantikor); dev VWF multimerleri", "adamts13|adamts 13|adam ts13|dev multimer|büyük multimer|ultra büyük"],
      ["Klinik: nörolojik bulgular, böbrek tutulumu, ateş; klasik beşli çoğu hastada tam değildir", "nörolojik bulgu|konfüzyon|nöbet|beşli tam değil|beşli nadiren tam|tam beşli nadir|beşli eksik|beşlinin tamamı nadir|tam pentad nadir|pentad nadiren tam"],
      ["Ön test olasılığı: PLASMIC skoru; ADAMTS13 sonucu beklenmeden tedavi", "plasmic|sonucu beklenmeden|sonucunu beklemeden|beklemeden tedavi|beklemeden plazma"],
      ["!Tedavi: acil terapötik plazma değişimi + kortikosteroid; kaplasizumab ve rituksimab (ISTH 2020)", "plazma değişim|plazmaferez|plazma exchange|terapötik plazma|kaplasizumab|caplacizumab"],
      ["Trombosit transfüzyonundan hayatı tehdit eden kanama yoksa kaçınılır", "trombosit transfüzyonundan kaçın|trombosit transfüzyonu yapılmaz|trombosit transfüzyonu verilmez|trombosit vermekten kaçın|trombosit süspansiyonundan kaçın"],
      ["Konjenital TTP (Upshaw-Schulman): rekombinant ADAMTS13 ya da plazma", "upshaw|schulman|konjenital ttp|kalıtsal ttp|rekombinant adamts"],
      ["STEC-HUS: çocukta Shiga toksinli E. coli, kanlı ishal sonrası akut böbrek hasarı; destek tedavisi", "shiga|stec|o157|enterohemorajik|kanlı ishal"],
      ["Atipik HUS: alternatif kompleman yolu bozukluğu; ekulizumab/ravulizumab", "atipik hus|kompleman|ekulizumab|eculizumab|ravulizumab"]
    ]},
  { id: "hem-hit", tr: "Heparinle indüklenen trombositopeni (HIT)", en: "Heparin-induced thrombocytopenia", cat: "hemostaz", lvl: 3,
    src: { k: [WH, HO], m: [
      ["Cuker A, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv 2018", null],
      ["Arepally GM. Heparin-induced thrombocytopenia. Blood 2017", null]] },
    c: [
      ["!İmmün mekanizma: PF4-heparin kompleksine karşı IgG antikorları, trombosit aktivasyonu", "pf4|pf 4|trombosit faktör 4|trombosit faktörü 4|platelet faktör|trombosit aktivasyon"],
      ["!Paradoks: trombositopeniye rağmen venöz ve arteriyel tromboz", "paradoks|tromboza eğilim|tromboz riski artar|tromboz gelişir|trombozla seyreder|venöz ve arteriyel"],
      ["Tipik zamanlama: heparin başladıktan birkaç gün sonra; yakın maruziyette hızlı başlangıç; fraksiyone olmayan heparinde daha sık", "birkaç gün sonra|günler sonra|hızlı başlangıç|yakın zamanda heparin|fraksiyone olmayan|standart heparin|unfraksiyone"],
      ["!4T skoru ile ön test olasılığı; düşük olasılıkta HIT dışlanır", "4t|dört t|4 t|ön test olasılı|pretest"],
      ["Tanı: anti-PF4/heparin immünoassay (ELISA) ve fonksiyonel test (serotonin salınım)", "elisa|immünoassay|immün test|serotonin salınım|fonksiyonel test|heparin ile indüklenen trombosit aktivasyon"],
      ["!Şüphede tüm heparinler (yıkama dahil) kesilir, heparin dışı antikoagülan başlanır (argatroban, bivalirudin, fondaparinuks, DOAK)", "argatroban|bivalirudin|fondaparinuks|heparin dışı|non heparin|heparini kes|heparin kesil|tüm heparin"],
      ["Trombositler düzelmeden varfarin başlanmaz (venöz gangren riski); trombosit transfüzyonundan kaçınılır", "varfarin başlanmaz|varfarine geçilmez|varfarine hemen başlanmaz|varfarinle başlanmaz|venöz gangren|ekstremite gangren|trombosit transfüzyonundan kaçın|trombosit transfüzyonu yapılmaz"]
    ]},
  { id: "hem-von-willebrand", tr: "Von Willebrand hastalığı", en: "Von Willebrand disease", cat: "hemostaz", lvl: 3,
    src: { k: [WH, HO], m: [
      ["James PD, et al. ASH ISTH NHF WFH 2021 guidelines on the diagnosis of von Willebrand disease. Blood Adv 2021", null],
      ["Connell NT, et al. ASH ISTH NHF WFH 2021 guidelines on the management of von Willebrand disease. Blood Adv 2021", null]] },
    c: [
      ["!En sık kalıtsal kanama bozukluğu; çoğunlukla otozomal dominant", "en sık kalıtsal kanama|en sık görülen kalıtsal kanama|en sık herediter kanama|otozomal dominant"],
      ["VWF işlevi: trombositin subendotele (GPIb) yapışması ve faktör VIII'in taşınması", "gpib|gp1b|glikoprotein ib|glikoprotein 1b|subendotel|trombosit adezyon|faktör 8 i taşı|faktör viii i taşı|faktör sekizi taşı|faktör 8 in taşı|faktör sekizi stabilize"],
      ["!Mukokutanöz kanama: burun kanaması, ağır menstrüel kanama, diş çekimi sonrası kanama", "mukokutan|burun kanama|epistaksis|menoraji|ağır menstrüel|adet kanaması|diş çekimi"],
      ["!Tanı: VWF antijeni, VWF trombosit bağlama aktivitesi, faktör VIII; tipler 1, 2 (2A, 2B, 2M, 2N), 3", "vwf antijen|vwf ag|ristosetin|vwf aktivite|trombosit bağlama|multimer|tip 2b|tip 2a|tip 2m|tip 2n|tip 3"],
      ["Kan grubu O'da VWF düzeyleri fizyolojik olarak düşüktür", "kan grubu o|o kan grub|0 kan grub|0 grubu|o grubu|sıfır kan grub"],
      ["!Tedavi: desmopressin (tip 1; test dozu ile yanıt), VWF içeren konsantreler; 2B'de desmopressine dikkat", "desmopressin|ddavp|vwf konsantre|vwf içeren|faktör konsantre|rekombinant vwf|vonikog"],
      ["Traneksamik asit ve ağır menstrüel kanamada hormonal tedavi; ağır olguda profilaksi", "traneksamik|hormonal tedavi|oral kontrasepti|levonorgestrel|uzun süreli profilaksi"],
      ["Edinsel von Willebrand sendromu (aort darlığı – Heyde, MGUS)", "edinsel von willebrand|edinsel vwh|aort darlığ|heyde"]
    ]},
  { id: "hem-akut-miyeloid-losemi", tr: "Akut miyeloid lösemi (ELN 2022)", en: "Acute myeloid leukaemia", cat: "malign", lvl: 3,
    src: { k: [WH, HO], m: [
      ["Döhner H, et al. Diagnosis and management of AML in adults: 2022 recommendations from an international expert panel on behalf of the ELN. Blood 2022", null],
      ["Khoury JD, et al. The 5th edition of the World Health Organization Classification of Haematolymphoid Tumours: Myeloid and Histiocytic/Dendritic Neoplasms. Leukemia 2022", null]] },
    c: [
      ["!Kemik iliği yetmezliği bulguları: anemi, enfeksiyon, kanama; lökositoz ya da pansitopeni", "kemik iliği yetmezliğ|ilik yetmezliğ|pansitopeni|lökostaz|hiperlökositoz|dişeti hipertrofi|diş eti hipertrofi|gingival"],
      ["Tanı: kemik iliğinde miyeloid blast artışı, Auer cisimleri, MPO; akım sitometri", "blast|auer|miyeloperoksidaz|mpo|akım sitometri|flow sitometri|immünfenotip"],
      ["!WHO 2022/ICC: tanımlayıcı genetik anomalilere göre sınıflama (NPM1, CEBPA, CBF lösemiler)", "npm1|npm 1|cebpa|core binding|cbf|8 21|inv 16|runx1|genetik anomali|sitogenetik"],
      ["!ELN 2022 genetik risk sınıflaması: olumlu, orta, olumsuz (TP53, kompleks karyotip)", "eln|olumlu risk|olumsuz risk|orta risk|risk grub|tp53|kompleks karyotip"],
      ["!APL: PML::RARA, DİK ile acil; şüphede hemen ATRA, arsenik trioksit ile", "promiyelositik|apl|pml|rara|15 17|atra|tretinoin|arsenik"],
      ["Yoğun indüksiyon: sitarabin + antrasiklin; hedefe yönelik ekler (midostaurin ya da FLT3-ITD'de quizartinib, gemtuzumab/CD33)", "sitarabin|antrasiklin|daunorubisin|idarubisin|indüksiyon|midostaurin|quizartinib|kizartinib|gemtuzumab"],
      ["Yoğun tedaviye uygun olmayanda venetoklaks + azasitidin", "venetoklaks|venetoclax|azasitidin|hipometile|desitabin|uygun olmayan|unfit"],
      ["Konsolidasyon; orta-olumsuz riskte ilk remisyonda allojenik kök hücre nakli; ölçülebilir kalıntı hastalık (MRD)", "allojenik|kök hücre nakli|mrd|ölçülebilir kalıntı|minimal kalıntı|konsolidasyon"],
      ["Tümör lizis sendromu önlemi", "tümör lizis|tümör liz|allopurinol|rasburikaz"]
    ]},
  { id: "hem-kronik-miyeloid-losemi", tr: "Kronik miyeloid lösemi (ELN 2020)", en: "Chronic myeloid leukaemia", cat: "malign", lvl: 3,
    src: { k: [WH, HO], m: [
      ["Hochhaus A, et al. European LeukemiaNet 2020 recommendations for treating chronic myeloid leukemia. Leukemia 2020", null],
      ["Khoury JD, et al. The 5th edition of the World Health Organization Classification of Haematolymphoid Tumours: Myeloid and Histiocytic/Dendritic Neoplasms. Leukemia 2022", null]] },
    c: [
      ["!Philadelphia kromozomu t(9;22), BCR::ABL1 füzyonu (tirozin kinaz)", "philadelphia|filadelfiya|bcr|abl|9 22|füzyon gen"],
      ["Klinik-laboratuvar: lökositoz ve sola kayma, bazofili, splenomegali", "sola kayma|bazofil|splenomegali|dalak büyü|miyelosit|lökositoz"],
      ["Fazlar: kronik faz ve blastik faz (WHO 2022 akselere fazı kaldırdı; ICC sürdürüyor)", "kronik faz|blastik faz|blast kriz|akselere|hızlanmış faz"],
      ["!Tedavi: tirozin kinaz inhibitörü – imatinib; ikinci kuşak dasatinib, nilotinib, bosutinib", "tirozin kinaz|tki|imatinib|dasatinib|nilotinib|bosutinib"],
      ["T315I mutasyonunda ponatinib ya da asiminib", "t315i|ponatinib|asiminib|asciminib"],
      ["!İzlem: kantitatif PCR ile BCR::ABL1 (uluslararası ölçek); majör moleküler yanıt, ELN kilometre taşları", "kantitatif pcr|qpcr|uluslararası ölçek|moleküler yanıt|majör moleküler|mmr|kilometre taşı|hedef zaman"],
      ["Derin ve kalıcı moleküler yanıtta tedavisiz remisyon (TKİ kesme) denenebilir", "tedavisiz remisyon|tedavi kesme|tki kes|ilacı kes|tfr|treatment free"],
      ["Direnç/progresyonda mutasyon analizi ve allojenik kök hücre nakli", "mutasyon analiz|kinaz domain|tki direnc|tki direnç|allojenik|kök hücre nakli"]
    ]}
]
});
})();
