/* Üroloji — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta sık sorulan ve acil/poliklinikte sık karşılaşılan üroloji konuları; EAU kılavuzları (taş, erkek AÜSS, prostat,
   NMIBC, RCC, kadın AÜSS, cinsel-üreme sağlığı, travma, pediatrik üroloji) ve ilgili AUA kılavuzlarına dayanır.
   Kolay = taş, BPH, torsiyon, hematüri, inmemiş testis; Orta = prostat/mesane/böbrek kanseri, inkontinans, ED; Zor = VUR, priapizm, Fournier, üretra travması, erkek infertilitesi.
   Kapsam dışı: testis germ hücreli tümörü (onkoloji), AKI/KBH ve glomerüler hastalıklar (nefroloji), kadın üreme organları (kadın doğum). */
(function () {
const CW = "Campbell-Walsh-Wein Urology, 13. baskı (2025)";
const ST = "Smith and Tanagho's General Urology, 19. baskı (2020)";
const PED = ["EAU/ESPU Guidelines on Paediatric Urology. European Association of Urology 2025", "https://uroweb.org/guidelines/paediatric-urology/summary-of-changes/2025"];
const SRH = ["EAU Guidelines on Sexual and Reproductive Health. European Association of Urology 2025", "https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/introduction-2"];

UP.add({ id: "uroloji", subs: {
    tas: "Taş hastalığı ve prostat",
    onk: "Ürolojik onkoloji",
    acil: "Ürolojik aciller ve travma",
    ped: "Pediatrik üroloji",
    fonk: "İşeme, cinsel işlev ve infertilite"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "uro-urolitiyazis", tr: "Üriner sistem taş hastalığı ve renal kolik", en: "Urolithiasis and renal colic", cat: "tas", lvl: 1,
    src: { k: [CW, ST], m: [
      ["EAU Guidelines on Urolithiasis. European Association of Urology 2025", "https://uroweb.org/guidelines/urolithiasis"],
      ["Medical expulsive therapy in adults with ureteric colic: a multicentre, randomised, placebo-controlled trial (SUSPEND). Lancet 2015", "https://doi.org/10.1016/S0140-6736(15)60933-3"]] },
    c: [
      ["!Renal kolik: yan ağrısı kasığa yayılır, hasta yerinde duramaz", "renal kolik|böbrek koliği|kolik ağrı|yan ağrı|flank|kasığa yayıl|yerinde duram|kıvranır"],
      ["!Tanıda kontrastsız BT altın standart (USG gebede/çocukta ilk)", "kontrastsız|non kontrast|bt|bete|tomografi"],
      ["En sık taş tipi kalsiyum oksalat", "kalsiyum oksalat|kalsiyum taş|oksalat"],
      ["Analjezide ilk seçenek NSAİİ", "nsaii|nsai|nonsteroid|diklofenak|ibuprofen|steroid olmayan antiinflamatuvar"],
      ["Distal üreter taşında alfa bloker ile medikal atılım tedavisi", "medikal atılım|medikal ekspulsif|ekspulsif|alfa bloker|alfa blok|tamsulosin"],
      ["!Obstrüksiyon + enfeksiyon/ateş: acil dekompresyon (nefrostomi ya da JJ stent)", "nefrostomi|jj stent|double j|dabıl jey|üreteral stent|dekompresyon|drenaj"],
      ["Girişimsel tedavi: ESWL, üreteroskopi, PNL", "eswl|şok dalga|litotripsi|üreteroskop|urs|perkütan nefrolit|pnl|pcnl|rirs"],
      ["Korunma: bol sıvı, taş analizi, metabolik değerlendirme", "bol sıvı|sıvı alımı|su iç|taş analiz|metabolik değerlendir|metabolik inceleme"]
    ]},
  { id: "uro-bph", tr: "Benign prostat hiperplazisi", en: "Benign prostatic hyperplasia", cat: "tas", lvl: 1,
    src: { k: [CW, ST], m: [
      ["EAU Guidelines on Management of Non-neurogenic Male LUTS. European Association of Urology 2025", "https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts"],
      ["Management of Lower Urinary Tract Symptoms Attributed to Benign Prostatic Hyperplasia (BPH): AUA Guideline Amendment 2023. J Urol 2024", "https://doi.org/10.1097/JU.0000000000003698"]] },
    c: [
      ["!Transizyonel zondan gelişen benign büyüme; alt üriner sistem semptomları", "transizyonel|transisyonel|periüretral|alt üriner sistem semptom|aüss|luts|prostat büyü|benign prostat"],
      ["Obstrüktif ve irritatif yakınmalar (zayıf akım, noktüri, sıkışma)", "zayıf akım|akım zayıf|idrar akımı|kesik kesik|noktüri|gece idrar|sıkışma|sık idrar|ıkın|tam boşaltama"],
      ["Değerlendirme: IPSS, rektal tuşe, PSA, üroflovmetri, rezidü idrar", "ipss|semptom skor|rektal tuşe|parmakla rektal|psa|üroflov|uroflov|rezidü|işeme sonrası"],
      ["!Alfa-1 bloker (tamsulosin) hızlı semptom rahatlaması", "alfa bloker|alfa 1|alfa blok|tamsulosin|silodosin|alfuzosin|doksazosin"],
      ["!5-alfa redüktaz inhibitörü büyük prostatta hacmi küçültür; kombinasyon", "5 alfa|beş alfa|redüktaz|finasterid|dutasterid"],
      ["Cerrahi: TURP, lazer enükleasyon (HoLEP)", "turp|transüretral rezeksiyon|holep|enükleasyon|lazer|açık prostatektomi"],
      ["Komplikasyon: akut idrar retansiyonu, taş, enfeksiyon, hidronefroz", "akut idrar retans|idrar retans|glob|retansiyon|hidronefroz|mesane taş"]
    ]},
  { id: "uro-testis-torsiyonu", tr: "Testis torsiyonu", en: "Testicular torsion", cat: "acil", lvl: 1,
    src: { k: [CW, ST], m: [PED,
      ["High risk and low prevalence diseases: Testicular torsion. Am J Emerg Med 2023", "https://pubmed.ncbi.nlm.nih.gov/36738571/"]] },
    c: [
      ["!Ani başlayan şiddetli skrotal ağrı, sıklıkla adölesan; bulantı-kusma", "ani başla|aniden başla|şiddetli skrotal|skrotal ağrı|testis ağrı|akut skrotum|adölesan|ergen|bulantı"],
      ["Bell clapper deformitesi (intravajinal torsiyon)", "bell clapper|çan tokmağı|intravajinal|tunika vajinalis"],
      ["!Muayene: kremaster refleksi yok, testis yukarıda ve transvers", "kremaster|yukarıda|yüksek yerleş|transvers|yatay|prehn"],
      ["Ayırıcı tanı: epididimit, apendiks testis torsiyonu", "epididimit|epididim|apendiks testis|mavi nokta|blue dot"],
      ["!Klinik tanı: şüphede görüntüleme cerrahiyi geciktirmez; Doppler USG yardımcı", "geciktirme|beklemeden|klinik tanı|doppler|kan akımı|renkli doppler"],
      ["Zaman kritik: testis kurtarılma oranı saatle azalır", "saat içinde|ilk saat|altı saat|zamanla azal|zaman kritik|zamana bağlı|testis kaybı|orşiektomi"],
      ["!Acil skrotal eksplorasyon, detorsiyon ve iki taraflı orşiopeksi", "eksplorasyon|detorsiyon|orşiopeksi|orşidopeksi|fiksasyon|karşı taraf|iki taraflı|bilateral"]
    ]},
  { id: "uro-hematuri", tr: "Hematürinin değerlendirilmesi", en: "Evaluation of hematuria", cat: "onk", lvl: 1,
    src: { k: [CW, ST], m: [
      ["Updates to Microhematuria: AUA/SUFU Guideline (2025). J Urol 2025", "https://doi.org/10.1097/JU.0000000000004490"],
      ["European Association of Urology Guidelines on Non-muscle-invasive Bladder Cancer (TaT1 and Carcinoma In Situ): A Summary of the 2024 Guidelines Update. Eur Urol 2024", "https://doi.org/10.1016/j.eururo.2024.07.027"]] },
    c: [
      ["!Makroskopik (gros) ve mikroskopik hematüri ayrımı; mikroskopik hematüri idrar mikroskopisiyle doğrulanır", "makroskopik|gros hematüri|gözle görülen|mikroskopik|mikrohematüri|idrar mikroskopi|eritrosit|büyük büyütme"],
      ["Psödohematüri ve geçici nedenler (enfeksiyon, egzersiz, menstrüasyon) dışlanır", "psödohematüri|yalancı hematüri|idrar yolu enfeksiyonu|egzersiz|menstrü|adet kanama|pancar"],
      ["Glomerüler köken ipuçları: dismorfik eritrosit, eritrosit silendiri, proteinüri → nefroloji", "dismorfik|silendir|proteinüri|glomerüler|nefroloji"],
      ["!Ağrısız makroskopik hematüri mesane kanseri açısından araştırılmalı", "ağrısız makroskopik|ağrısız hematüri|ağrısız gros|aksi kanıtlanana|ürotelyal malign|ürotelial malign"],
      ["Risk faktörleri: ileri yaş, sigara, mesleki kimyasal maruziyet", "sigara içen|ileri yaş|mesleki|boya sanayi|anilin|aromatik amin|mesleki maruz|siklofosfamid"],
      ["!Üst sistem görüntüleme (BT ürografi) ve sistoskopi", "bt ürografi|bete ürografi|ürografi|ürogram|üst üriner sistem"],
      ["Risk sınıflamasına göre yaklaşım (AUA: düşük/orta/yüksek risk)", "risk sınıflama|orta ve yüksek risk|risk katman|tekrar idrar tahlili"]
    ]},
  { id: "uro-inmemis-testis", tr: "İnmemiş testis (kriptorşidizm)", en: "Undescended testis (cryptorchidism)", cat: "ped", lvl: 1,
    src: { k: [CW, ST], m: [PED,
      ["Evaluation and Treatment of Cryptorchidism: AUA Guideline. J Urol 2014", "https://doi.org/10.1016/j.juro.2014.05.005"]] },
    c: [
      ["!Testisin skrotuma inmemesi; prematürelerde daha sık", "skrotuma inme|skrotumda değil|skrotum boş|inmemiş|kriptorşi|kriptorşidizm|prematüre|preterm"],
      ["!Ele gelen ve gelmeyen testis ayrımı; retraktil testisten ayırt", "ele gelen|ele gelme|palpe edil|palpabl|nonpalpabl|retraktil|kayan testis|anorşi"],
      ["Sevk öncesi rutin USG/görüntüleme önerilmez", "görüntüleme önerilmez|görüntüleme gerekmez|usg gerekmez|ultrason gerekmez|rutin ultrason önerilmez|rutin görüntüleme önerilmez|ultrason rutin önerilmez|görüntüleme rutin önerilmez|ultrasonun yeri yok"],
      ["Ele gelmeyen testiste tanısal laparoskopi", "laparoskop|karın içi|intraabdominal|abdominal testis"],
      ["!Orşiopeksi 12 aydan önce, en geç 18 ayda", "12 aydan önce|on iki aydan önce|bir yaşından önce|en geç 18|en geç on sekiz|18 aydan önce|on sekiz aydan önce"],
      ["Uzun dönem riskler: infertilite ve testis kanseri; eşlik eden inguinal herni", "infertil|kısırlık|fertilite|testis kanser|testis tümör|malignite|herni|fıtık|processus vajinalis"],
      ["Bilateral ele gelmeyen testiste cinsel gelişim bozukluğu (DSD) araştırılır", "cinsel gelişim bozuk|dsd|interseks|konjenital adrenal|karyotip|hipospadias"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "uro-prostat-kanseri-tani", tr: "Prostat kanserinde tanı: PSA, mpMR, PI-RADS ve ISUP derecesi", en: "Prostate cancer diagnosis: PSA, mpMRI, PI-RADS, ISUP grade", cat: "onk", lvl: 2,
    src: { k: [CW, ST], m: [
      ["EAU-EANM-ESTRO-ESUR-ISUP-SIOG Guidelines on Prostate Cancer—2024 Update. Part I: Screening, Diagnosis, and Local Treatment with Curative Intent. Eur Urol 2024", "https://doi.org/10.1016/j.eururo.2024.03.027"],
      ["MRI-Targeted or Standard Biopsy for Prostate-Cancer Diagnosis (PRECISION). N Engl J Med 2018", "https://doi.org/10.1056/NEJMoa1801993"]] },
    c: [
      ["Çoğunlukla periferik zonda adenokarsinom; erken evrede asemptomatik", "periferik zon|adenokarsinom|asemptomatik|belirti vermez"],
      ["PSA prostata özgüdür ama kansere özgü değildir; rektal tuşe", "psa|prostat spesifik antijen|kansere özgü değil|kanser spesifik değil|rektal tuşe|parmakla rektal"],
      ["Risk temelli bireysel tarama, ortak karar verme", "risk temelli|risk uyarlamalı|bireysel tarama|ortak karar|bilgilendirilmiş"],
      ["!Biyopsiden önce multiparametrik MR", "multiparametrik|mpmr|mp mr|emar|prostat mr|biyopsiden önce mr|biyopsi öncesi mr"],
      ["!PI-RADS 1–5 skoru; MR şüpheli ise hedefe yönelik + sistematik biyopsi", "pirads|pi rads|pirad|hedefe yönelik|hedefli biyopsi|füzyon|sistematik biyopsi|transperineal"],
      ["!Gleason skoru → ISUP derece grubu 1–5", "gleason|isup|derece grubu|grade grup|grade group"],
      ["Risk grupları; düşük riskte aktif izlem", "aktif izlem|aktif gözlem|aktif sürveyans|düşük risk|risk grub"],
      ["Evreleme: yüksek riskte PSMA PET / kemik sintigrafisi", "psma|pet bt|pet bete|kemik sintigrafi|sintigrafi|evreleme"]
    ]},
  { id: "uro-mesane-kanseri-nmibc", tr: "Kasa invaze olmayan mesane kanseri (NMIBC)", en: "Non-muscle-invasive bladder cancer", cat: "onk", lvl: 2,
    src: { k: [CW, ST], m: [
      ["European Association of Urology Guidelines on Non-muscle-invasive Bladder Cancer (TaT1 and Carcinoma In Situ): A Summary of the 2024 Guidelines Update. Eur Urol 2024", "https://doi.org/10.1016/j.eururo.2024.07.027"],
      ["EAU Guidelines on Non-muscle-invasive Bladder Cancer. European Association of Urology 2025", "https://uroweb.org/guideline/non-muscle-invasive-bladder-cancer"]] },
    c: [
      ["!Ürotelyal karsinom; en önemli risk faktörü sigara", "ürotelyal|ürotelial|değişici epitel|transizyonel hücreli|sigara|tütün"],
      ["Ağrısız makroskopik hematüri ile başvuru", "ağrısız|hematüri|idrarda kan"],
      ["Ta, T1 ve karsinoma in situ (CIS); kas invazyonu yok", "ta t1|t1|karsinoma in situ|in situ|cis|kas invaz|kasa invaze|detrusor|muskularis"],
      ["!TUR-MT: tümörün tam rezeksiyonu, örnekte detrusor kası bulunmalı", "tur mt|turmt|turbt|transüretral rezeksiyon|tam rezeksiyon|detrusor kas|kas dokusu"],
      ["T1 ve eksik rezeksiyonda ikinci TUR (re-TUR)", "re tur|ikinci tur|tekrar rezeksiyon|yeniden rezeksiyon|ikinci rezeksiyon"],
      ["Düşük riskte ameliyat sonrası tek doz erken intravezikal kemoterapi", "tek doz|tek seferlik|erken instilasyon|intravezikal kemoterapi|mitomisin|gemsitabin"],
      ["!Orta-yüksek riskte intravezikal BCG, idame tedavisiyle", "bcg|bisiji|be ce ge|intravezikal bcg|idame|indüksiyon"],
      ["Yüksek nüks ve progresyon: sistoskopik izlem; BCG yanıtsızlıkta radikal sistektomi", "sistoskopik izlem|kontrol sistoskopi|nüks|rekürrens|progresyon|radikal sistektomi|sistektomi"]
    ]},
  { id: "uro-renal-hucreli-karsinom", tr: "Renal hücreli karsinom", en: "Renal cell carcinoma", cat: "onk", lvl: 2,
    src: { k: [CW, ST], m: [
      ["European Association of Urology Guidelines on Renal Cell Carcinoma: The 2025 Update. Eur Urol 2025", "https://doi.org/10.1016/j.eururo.2025.02.020"],
      ["Adjuvant Pembrolizumab after Nephrectomy in Renal-Cell Carcinoma (KEYNOTE-564). N Engl J Med 2021", "https://doi.org/10.1056/NEJMoa2106391"]] },
    c: [
      ["!En sık alt tip berrak hücreli; VHL geni ile ilişkili", "berrak hücre|şeffaf hücre|clear cell"],
      ["Çoğu görüntülemede rastlantısal; klasik triad (yan ağrısı, hematüri, kitle) nadir", "rastlantısal|tesadüfen|insidental"],
      ["Paraneoplastik bulgular: polisitemi, hiperkalsemi, Stauffer sendromu", "polisitemi|eritropoetin|stauffer"],
      ["Sol varikosel ve vena kava tümör trombüsü", "varikosel|vena kava|tümör trombüs|renal ven"],
      ["!Tanı ve evreleme: kontrastlı BT (toraks dahil)", "kontrastlı bt|kontrastlı bete|toraks bt|toraks bete|toraks da|akciğer metastaz"],
      ["!T1 tümörde parsiyel (nefron koruyucu) nefrektomi; büyük tümörde radikal nefrektomi", "parsiyel nefrektomi|nefron koruyucu|kısmi nefrektomi"],
      ["Küçük kitlede aktif izlem ya da ablasyon; yüksek nüks riskinde adjuvan pembrolizumab", "aktif izlem|kriyoablasyon|ablasyon|pembrolizumab|keynote"]
    ]},
  { id: "uro-uriner-inkontinans", tr: "Üriner inkontinans tipleri", en: "Urinary incontinence types", cat: "fonk", lvl: 2,
    src: { k: [CW, ST], m: [
      ["EAU Guidelines on Non-neurogenic Female LUTS. European Association of Urology 2025", "https://uroweb.org/guidelines/non-neurogenic-female-luts"],
      ["Updates to Surgical Treatment of Female Stress Urinary Incontinence (SUI): AUA/SUFU Guideline (2023). J Urol 2023", "https://doi.org/10.1097/JU.0000000000003435"]] },
    c: [
      ["!Stres inkontinans: öksürme, hapşırma, eforla kaçırma (üretral hipermobilite / sfinkter yetmezliği)", "stres inkontinans|öksür|hapşır|efor|ıkınma ile|hipermobil|sfinkter yetmez"],
      ["!Sıkışma (urge) inkontinans: aşırı aktif mesane, detrusor aşırı aktivitesi", "sıkışma|urge|aşırı aktif mesane|detrusor aşırı|overaktif|ani idrar"],
      ["Mikst inkontinans ve taşma inkontinansı (retansiyon, rezidü)", "mikst|karma|taşma|overflow|rezidü|retansiyon"],
      ["Değerlendirme: işeme günlüğü, tam idrar tahlili, rezidü idrar", "işeme günlü|mesane günlü|idrar günlü|tam idrar|idrar tahlil|rezidü"],
      ["İlk basamak: pelvik taban kas egzersizi, yaşam tarzı, mesane eğitimi", "pelvik taban|kegel|mesane eğitim|kilo ver|kafein|yaşam tarzı"],
      ["!Sıkışmada antimuskarinik ya da beta-3 agonist (mirabegron)", "antimuskarinik|antikolinerjik|oksibutinin|solifenasin|trospiyum|beta 3|mirabegron|vibegron|botulinum"],
      ["!Strese cerrahi: orta üretral askı (sling)", "orta üretral|midüretral|sling|askı|tvt|tot|kolposüspansiyon|burch"]
    ]},
  { id: "uro-erektil-disfonksiyon", tr: "Erektil disfonksiyon", en: "Erectile dysfunction", cat: "fonk", lvl: 2,
    src: { k: [CW, ST], m: [SRH,
      ["Erectile Dysfunction: AUA Guideline. J Urol 2018", "https://doi.org/10.1016/j.juro.2018.05.004"]] },
    c: [
      ["Tanım: tatmin edici cinsel ilişki için yeterli ereksiyonun sürekli sağlanamaması", "ereksiyon|sertleşme|tatmin edici|sürekli olarak|sürdürülemem"],
      ["!En sık vasküler (endotel disfonksiyonu); kardiyovasküler hastalığın habercisi", "vasküler neden|endotel disfonksiyon|penis damar|penil arter|habercisi|erken belirteç"],
      ["Değerlendirme: IIEF, glukoz/lipit, sabah total testosteronu", "iief|uluslararası erektil|sabah testosteron|sabah total testosteron"],
      ["Psikojenik ve organik ayrım; ilaç yan etkisi", "psikojenik|organik|sabah ereksiyon|gece ereksiyon|ilaç yan etki|antidepresan"],
      ["!İlk basamak: PDE5 inhibitörü (sildenafil, tadalafil) + yaşam tarzı", "pde5|pde 5|fosfodiesteraz|sildenafil|tadalafil|vardenafil|avanafil"],
      ["!PDE5 inhibitörü nitratla birlikte kontrendike (hipotansiyon)", "nitrat|nitrogliserin"],
      ["İkinci basamak: intrakavernöz alprostadil, vakum cihazı; son basamak penil protez", "intrakavernöz|alprostadil|prostaglandin|vakum|penil protez|protez"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "uro-vezikoureteral-reflu", tr: "Vezikoüreteral reflü", en: "Vesicoureteral reflux", cat: "ped", lvl: 3,
    src: { k: [CW, ST], m: [PED,
      ["Antimicrobial Prophylaxis for Children with Vesicoureteral Reflux (RIVUR). N Engl J Med 2014", "https://doi.org/10.1056/NEJMoa1401811"]] },
    c: [
      ["!İdrarın mesaneden üretere geri kaçışı; primer (üreterovezikal bileşke) ve sekonder (PUV, nörojen mesane)", "geri kaç|geriye kaç|reflü|üreterovezikal|vezikoüreteral|primer reflü|sekonder|posterior üretral valv|puv|nörojen mesane"],
      ["Febril idrar yolu enfeksiyonu / piyelonefritle tanınır", "febril|ateşli idrar yolu|piyelonefrit|idrar yolu enfeksiyon"],
      ["!Tanı: işeme sistoüretrografisi (VCUG)", "işeme sistoüretrogra|voiding|vcug|sistografi|miksiyon sistoüretrogra|mskug|ivsug"],
      ["Uluslararası sınıflama: derece I–V", "derece|grade|evre 1|beşinci derece|uluslararası reflü"],
      ["Böbrek skarı: DMSA sintigrafisi; reflü nefropatisi", "dmsa|sintigrafi|skar|nedbe|reflü nefropati|renal hasar"],
      ["!Sürekli antibiyotik profilaksisi (RIVUR: tekrarlayan İYE'yi azaltır)", "profilaksi|proflaksi|koruyucu antibiyotik|sürekli antibiyotik|rivur|trimetoprim"],
      ["Mesane-barsak disfonksiyonu tedavisi; kabızlık", "mesane barsak|mesane bağırsak|kabızlık|konstipasyon|işeme bozuk"],
      ["Cerrahi: endoskopik enjeksiyon ya da üreteral reimplantasyon", "endoskopik enjeksiyon|subüreterik|deflux|dekstranomer|reimplant|üreteroneosistostomi"]
    ]},
  { id: "uro-priapizm", tr: "Priapizm", en: "Priapism", cat: "acil", lvl: 3,
    src: { k: [CW, ST], m: [
      ["Acute Ischemic Priapism: An AUA/SMSNA Guideline. J Urol 2021", "https://doi.org/10.1097/JU.0000000000002236"],
      SRH] },
    c: [
      ["Cinsel uyarı olmadan dört saati aşan istemsiz ereksiyon", "dört saat|4 saat|cinsel uyarı olmadan|uyarı olmaksızın|istemsiz ereksiyon|uzamış ereksiyon"],
      ["!İskemik (düşük akımlı): ağrılı, rijit; acil", "iskemik priapizm|iskemik yani|düşük akım|low flow|venookluziv|ağrılı ve rijit"],
      ["Arteriyel (yüksek akımlı): ağrısız, genellikle perine travması sonrası", "arteriyel|yüksek akım|high flow|ağrısız|perine travma|arteriyokavernöz|fistül"],
      ["Tekrarlayan (stuttering) priapizm", "stuttering|tekrarlayan priapizm|kekeme"],
      ["!Kavernöz kan gazı (ve Doppler USG) ile ayrım", "kavernöz kan gaz|kan gazı|korpus kan|kavernöz kan"],
      ["Nedenler: orak hücre hastalığı, intrakavernöz enjeksiyon, ilaçlar", "orak hücre|sickle|intrakavernöz|alprostadil|papaverin|trazodon|antipsikotik"],
      ["!İskemikte aspirasyon/irrigasyon + intrakavernöz fenilefrin; yanıtsızlıkta şant", "aspirasyon|irrigasyon|fenilefrin|sempatomimetik|şant|shunt|tünel"],
      ["Gecikmede kavernöz fibroz ve kalıcı erektil disfonksiyon", "fibroz|kalıcı erektil|kalıcı ed|empotans|erektil disfonksiyon|protez"]
    ]},
  { id: "uro-fournier-gangreni", tr: "Fournier gangreni", en: "Fournier's gangrene", cat: "acil", lvl: 3,
    src: { k: [CW, ST], m: [
      ["Fournier's gangrene: a review of 1726 cases. Br J Surg 2000", "https://pubmed.ncbi.nlm.nih.gov/10848848/"],
      ["Practical Review of the Current Management of Fournier's Gangrene. Plast Reconstr Surg Glob Open 2022", "https://pubmed.ncbi.nlm.nih.gov/35295879/"]] },
    c: [
      ["!Perine, genital ve perianal bölgenin nekrotizan fasiiti", "perine|perineal|genital|skrotal|skrotum"],
      ["Polimikrobiyal (aerob + anaerob) enfeksiyon; anorektal, ürogenital ya da cilt kaynaklı", "anorektal|perianal apse|ürogenital odak|üretral darlık"],
      ["Risk faktörleri: diyabet, alkolizm, immünsüpresyon", "alkolizm|en önemli risk faktörü diyabet|diyabet en önemli"],
      ["Bulgular: ağrı muayeneyi aşar, krepitasyon, nekroz, sepsis", "krepitasyon|çıtırtı|siyah nekroz|orantısız"],
      ["!Acil, geniş cerrahi debridman; tekrarlayan debridmanlar", "debridman|debritman|debride|cerrahi eksizyon|nekrotik doku"],
      ["Geniş spektrumlu antibiyotik ve sıvı resüsitasyonu", "geniş spektrum|karbapenem|piperasilin|sıvı resüsit"],
      ["!Gerekirse saptırıcı kolostomi / suprapubik sistostomi; sonra rekonstrüksiyon", "kolostomi|sistostomi|suprapubik|rekonstrüksiyon|greft|flep|vakum yardımlı|vac"],
      ["Yüksek mortalite; Fournier gangreni şiddet indeksi (FGSI)", "fgsi|şiddet indeksi|severity index|yüksek mortalite|mortalitesi yüksek"]
    ]},
  { id: "uro-uretra-travmasi", tr: "Üretra travması ve üretra darlığı", en: "Urethral trauma and stricture", cat: "acil", lvl: 3,
    src: { k: [CW, ST], m: [
      ["EAU Guidelines on Urological Trauma. European Association of Urology 2025", "https://uroweb.org/guidelines/urological-trauma"],
      ["Updates to Urethral Stricture Disease: AUA Guideline Amendment (2023). J Urol 2023", "https://doi.org/10.1097/JU.0000000000003482"]] },
    c: [
      ["!Posterior (membranöz) üretra yaralanması pelvis kırığıyla", "posterior üretra|membranöz|prostatomembranöz"],
      ["Anterior (bulbar) yaralanma ata biner tarzı düşmeyle (straddle)", "anterior üretra|bulbar|ata biner|straddle|apış arası|perineye düş"],
      ["!Bulgular: meatusta kan, idrar yapamama, yüksek yerleşimli prostat, perine hematomu", "meatusta kan|meatus|dış ağız|idrar yapama|işeyeme|yüksek yerleşimli prostat|yukarıda prostat|kelebek"],
      ["!Tanı: retrograd üretrografi; körlemesine kateter takılmaz", "retrograd üretrogra|retrograt üretrogra|üretrografi|körlemesine|foley takılmaz|kateter takılmaz|sonda takılmaz"],
      ["Mesane drenajı: suprapubik sistostomi (ya da deneyimli elde endoskopik realignment)", "suprapubik sistostomi|realign|yeniden hizala"],
      ["Geç komplikasyon: üretra darlığı, inkontinans, erektil disfonksiyon", "darlık|striktür|inkontinans|erektil disfonksiyon|empotans"],
      ["Darlık tedavisi: dilatasyon/internal üretrotomi (kısa bulbar) ya da üretroplasti", "dilatasyon|internal üretrotomi|üretrotomi|optik üretrotomi|üretroplasti|anastomotik|bukkal"]
    ]},
  { id: "uro-erkek-infertilitesi", tr: "Erkek infertilitesi ve varikosel", en: "Male infertility and varicocele", cat: "fonk", lvl: 3,
    src: { k: [CW, ST], m: [SRH,
      ["Updates to Male Infertility: AUA/ASRM Guideline (2024). J Urol 2024", "https://doi.org/10.1097/JU.0000000000004180"]] },
    c: [
      ["İnfertilite: korunmasız düzenli ilişkiye rağmen bir yılda gebelik olmaması", "bir yıl|12 ay|on iki ay|korunmasız|gebelik olmama"],
      ["!Semen analizi (DSÖ referans değerleri) temel inceleme", "semen analiz|spermiyogram|spermiogram|meni analiz|dsö|dünya sağlık örgüt|who"],
      ["Azoospermi: obstrüktif ve non-obstrüktif ayrımı; FSH ve testis hacmi", "azoosperm|obstrüktif|non obstrüktif|nonobstrüktif|fsh|testis hacm|ejakülatuar kanal|vaz deferens yokluğu"],
      ["!Genetik inceleme: karyotip (Klinefelter), Y kromozomu mikrodelesyonu, CFTR", "karyotip|klinefelter|47 xxy|y kromozom|mikrodelesyon|azf|cftr|kistik fibroz"],
      ["Hormonal değerlendirme: FSH, LH, total testosteron", "lh|total testosteron|testosteron|hormonal|hipogonadizm|hipogonadotropik"],
      ["!Varikosel: pampiniform pleksus dilatasyonu, çoğu solda, Valsalva ile belirginleşir", "varikosel|pampiniform|solda|sol taraf|valsalva|solucan torbası|kurt torbası"],
      ["Varikosel onarımı: ele gelen varikosel + anormal semen parametrelerinde", "varikoselektomi|varikosel onarım|mikrocerrahi|subinguinal|embolizasyon|anormal semen"],
      ["Yardımcı üreme: ICSI; non-obstrüktif azoospermide mikro-TESE", "icsi|mikroenjeksiyon|tüp bebek|ivf|tese|mikro tese|sperm elde|testis sperm"]
    ]}
]
});
})();
