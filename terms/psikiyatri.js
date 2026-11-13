/* Psikiyatri — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta en sık sorulan DSM-5-TR tanı ölçütleri (depresyon, bipolar, şizofreni, anksiyete bozuklukları) ve klinikte hayat kurtaran
   psikiyatrik aciller/ilaç güvenliği (intihar riski, NMS-serotonin sendromu, lityum, alkol yoksunluğu). Kılavuzlar: APA, NICE, CANMAT, ASAM.
   Kolay = çekirdek tanılar; Orta = TUS ayrıntısı + konsültasyon psikiyatrisi; Zor = asistan düzeyi ilaç güvenliği, bağımlılık tedavisi, kişilik bozukluğu.
   Kapsam dışı: demans ve opioid zehirlenmesinin acil tedavisi (nöroloji / acil tıp). */
(function () {
const SY = "Kaplan & Sadock's Synopsis of Psychiatry, 12. baskı (2022)";
const CT = "Kaplan & Sadock's Comprehensive Textbook of Psychiatry, 11. baskı (2024)";
const DSM = "DSM-5-TR: Diagnostic and Statistical Manual of Mental Disorders, 5. baskı metin revizyonu (APA, 2022)";
const CANMAT_MDD = ["CANMAT 2023 Update on Clinical Guidelines for Management of Major Depressive Disorder in Adults. Can J Psychiatry 2024", "https://doi.org/10.1177/07067437241245384"];
const CANMAT_BP = ["CANMAT and ISBD 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord 2018", "https://doi.org/10.1111/bdi.12609"];
const NICE_ANX = ["Generalised anxiety disorder and panic disorder in adults: management (CG113). NICE 2011, güncelleme 2020", "https://www.nice.org.uk/guidance/cg113"];
const ANX_LANCET = ["Craske MG, Stein MB. Anxiety. Lancet 2016", "https://doi.org/10.1016/S0140-6736(16)30381-6"];
const NICE_BP = ["Bipolar disorder: assessment and management (CG185). NICE 2014", "https://www.nice.org.uk/guidance/cg185/chapter/1-Guidance"];

UP.add({ id: "psikiyatri", subs: {
    duygu: "Duygudurum bozuklukları",
    psikoz: "Psikotik bozukluklar",
    anks: "Anksiyete, OKB ve travma",
    madde: "Madde kullanım bozuklukları",
    kons: "Konsültasyon-liyezon ve acil psikiyatri",
    ilac: "Psikofarmakoloji güvenliği",
    diger: "Yeme ve kişilik bozuklukları"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "psi-major-depresyon", tr: "Majör depresif bozukluk", en: "Major depressive disorder", cat: "duygu", lvl: 1,
    src: { k: [DSM, SY], m: [CANMAT_MDD,
      ["Depression in adults: treatment and management (NG222). NICE 2022", "https://www.nice.org.uk/guidance/ng222"]] },
    c: [
      ["!Ana belirti: çökkün duygudurum ya da ilgi-zevk kaybı (anhedoni)", "çökkün|depresif duygudurum|anhedoni|ilgi kaybı|zevk alamama|zevk kaybı|ilgi ve zevk"],
      ["!DSM-5-TR: en az 2 hafta, 9 belirtiden en az 5'i", "iki hafta|2 hafta|beş belirti|5 belirti|dokuz belirti|9 belirti|beşi|en az beş"],
      ["Diğer belirtiler: uyku, iştah, enerji, suçluluk, konsantrasyon, psikomotor değişiklik", "uykusuzluk|uyku bozukluğu|iştah|enerji kaybı|yorgunluk|suçluluk|değersizlik|konsantrasyon|psikomotor"],
      ["İntihar düşüncesi mutlaka sorulur", "intihar düşünce|intiharı sor|intihar riski|ölüm düşünce|suisid"],
      ["Organik nedenler dışlanır: hipotiroidi, ilaç/madde, bipolar öyküsü", "hipotiroid|tiroid|organik neden|madde kullan|bipolar öykü|mani öykü|hipomani öykü"],
      ["!İlk basamak: psikoterapi (BDT) ve/veya SSRI gibi antidepresan", "ssri|seçici serotonin|sertralin|essitalopram|escitalopram|fluoksetin|antidepresan|bilişsel davranışçı|bdt|cbt|psikoterapi"],
      ["Remisyondan sonra idame tedavisi sürdürülür (nüks önleme)", "idame|nüks|relaps|remisyondan sonra|devam tedavisi|aylarca devam"],
      ["Ağır/psikotik depresyonda EKT", "ekt|elektrokonvülzif|elektrokonvulsif|psikotik depresyon|psikotik özellik"]
    ]},
  { id: "psi-bipolar", tr: "Bipolar bozukluk", en: "Bipolar disorder", cat: "duygu", lvl: 1,
    src: { k: [DSM, SY], m: [CANMAT_BP, NICE_BP] },
    c: [
      ["!Bipolar I: en az bir manik epizot (en az 1 hafta ya da hastaneye yatış)", "manik epizot|mani atağ|mani dönem|bir hafta|1 hafta|bipolar 1|bipolar bir|bipolar tip 1"],
      ["Bipolar II: hipomani + majör depresyon (en az 4 gün hipomani)", "hipomani|bipolar 2|bipolar iki|bipolar tip 2|dört gün|4 gün"],
      ["!Mani belirtileri: yükselmiş/irritabl duygudurum, uyku ihtiyacında azalma, fikir uçuşması, grandiyözite", "uyku ihtiyac|az uyu|fikir uçuşma|grandiyöz|büyüklük|basınçlı konuşma|konuşma baskı|irritabl|taşkın|riskli davran|dürtüsel harcama|para harca"],
      ["!Duygudurum düzenleyici: lityum (idamede altın standart), valproat", "lityum|valproat|valproik|duygudurum düzenley|duygudurum dengeley|mood stabil"],
      ["Akut manide atipik antipsikotik (ketiapin, aripiprazol, risperidon)", "antipsikotik|ketiapin|aripiprazol|risperidon|olanzapin|asenapin"],
      ["Tek başına antidepresan verilmez (maniye kayma riski)", "tek başına antidepresan verilmez|antidepresan tek başına verilmez|antidepresan monoterapisinden kaçın|antidepresan monoterapiden kaçın|maniye kay|manik kayma|mani tetikle"],
      ["Bipolar depresyonda ketiapin, lurasidon, lamotrijin", "lamotrijin|lurasidon|bipolar depresyonda ketiapin|bipolar depresyonda kuetiapin"]
    ]},
  { id: "psi-sizofreni", tr: "Şizofreni", en: "Schizophrenia", cat: "psikoz", lvl: 1,
    src: { k: [DSM, SY], m: [
      ["The American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia, 3rd ed. Am J Psychiatry 2020", "https://doi.org/10.1176/appi.ajp.2020.177901"],
      ["Psychosis and schizophrenia in adults: prevention and management (CG178). NICE 2014", null]] },
    c: [
      ["!Pozitif belirtiler: sanrı, halüsinasyon (çoğu işitsel), dezorganize konuşma/davranış", "sanrı|hezeyan|delüzyon|halüsinas|varsan|ses duy|işitsel|dezorganize|pozitif belirti"],
      ["!Negatif belirtiler: duygulanımda küntleşme, aleji, avolisyon, sosyal çekilme", "negatif belirti|küntleş|künt duygulanım|aleji|avolisyon|abuli|istek kaybı|sosyal çekilme|içe kapan"],
      ["DSM-5-TR: toplam en az 6 ay, aktif dönem en az 1 ay", "altı ay|6 ay|bir ay|1 ay|aktif dönem|aktif evre"],
      ["Ayırıcı tanı: madde, organik neden, duygudurum bozukluğu; şizofreniform (<6 ay)", "şizofreniform|şizoaffektif|madde kullan|organik neden|kısa psikotik"],
      ["!Tedavi: antipsikotik ilaç (tipik/atipik) + psikososyal destek", "antipsikotik|nöroleptik|haloperidol|risperidon|olanzapin|aripiprazol|ketiapin|paliperidon|dopamin blok|d2 reseptör"],
      ["Tedaviye dirençli şizofrenide klozapin (agranülositoz izlemi)", "klozapin|clozapin|agranülosit|nötrofil sayım|tedaviye dirençli|dirençli şizofren"],
      ["Antipsikotik yan etkileri: ekstrapiramidal belirti, metabolik sendrom, hiperprolaktinemi", "ekstrapiramidal|eps|akatizi|distoni|parkinsonizm|tardif disk|metabolik sendrom|kilo alım|prolaktin"],
      ["Uzun etkili enjeksiyon (depo) ve psikososyal girişimler (psikoeğitim, BDT)", "depo antipsikotik|depo enjeksiyon|uzun etkili enjekte|uzun etkili enjeksiyon|psikoeğitim|aile eğitim|rehabilitasyon|psikoz için bdt"]
    ]},
  { id: "psi-yaygin-anksiyete", tr: "Yaygın anksiyete bozukluğu", en: "Generalized anxiety disorder", cat: "anks", lvl: 1,
    src: { k: [DSM, SY], m: [NICE_ANX, ANX_LANCET] },
    c: [
      ["!Birçok konuda aşırı, kontrol edilemeyen kaygı (endişe)", "aşırı kaygı|aşırı endişe|aşırı ve kontrol|kontrol edilmesi güç|serbestçe dolaşan|kontrol edilemeyen|kontrol edemedi|her şey için endişe|birçok konu|pek çok konu|günlük olaylar"],
      ["!DSM-5-TR: en az 6 ay süre", "altı ay|6 ay"],
      ["Bedensel belirtiler: huzursuzluk, kas gerginliği, uyku bozukluğu, yorgunluk, irritabilite", "kas gerginli|huzursuzluk|gerginlik|uyku bozukluğu|kolay yorul|yorgunluk|irritabil|konsantrasyon güçlü"],
      ["Tıbbi nedenler dışlanır: hipertiroidi, kafein/madde", "hipertiroid|tiroid|kafein|organik neden"],
      ["!İlaç: SSRI/SNRI (sertralin, essitalopram, venlafaksin, duloksetin)", "ssri|snri|sertralin|essitalopram|escitalopram|venlafaksin|duloksetin|pregabalin"],
      ["Benzodiazepin yalnızca kriz döneminde kısa süreli (bağımlılık riski)", "kısa süreli benzodiazepin|benzodiazepin sadece kısa|benzodiazepinler kısa|kısa süreli kullan|bağımlılık riski|bağımlılık yapabil"],
      ["Basamaklı bakım: psikoeğitim, kendi kendine yardım, yüksek yoğunluklu tedavi", "basamaklı|kendi kendine yardım|düşük yoğunluk|yüksek yoğunluk"]
    ]},
  { id: "psi-panik-bozukluk", tr: "Panik bozukluk", en: "Panic disorder", cat: "anks", lvl: 1,
    src: { k: [DSM, SY], m: [NICE_ANX, ANX_LANCET] },
    c: [
      ["!Tekrarlayan, beklenmedik panik atakları (dakikalar içinde zirve)", "beklenmedik|panik atak|dakikalar içinde|aniden başla|ani başlayan"],
      ["Atakta çarpıntı, nefes darlığı, göğüs ağrısı, ölüm/kontrol kaybı korkusu", "çarpıntı|nefes darl|boğulma|göğüs ağrı|öleceğ|ölüm korku|kontrol kaybı|kontrolü kaybet|delireceğ|uyuşma|terleme"],
      ["!En az 1 ay yeni atak endişesi (beklenti anksiyetesi) ya da kaçınma", "beklenti anksiyete|yeni atak|atak olacak|atak gelecek|bir ay|1 ay|kaçınma davranış|kaçın"],
      ["Agorafobi eşlik edebilir", "agorafobi|kalabalık|kaçamayacağı|yardım alamayacağı"],
      ["Organik nedenler dışlanır: aritmi, hipertiroidi, feokromositoma, madde", "aritmi|ekg|elektrokardiyo|hipertiroid|feokromositoma|hipoglisemi|kafein|madde kullan"],
      ["!Tedavi: BDT (maruz bırakma, interoseptif) ya da SSRI", "bdt|bilişsel davranışçı|cbt|maruz bırak|maruziyet|interoseptif|ssri|sertralin|essitalopram|escitalopram|paroksetin"],
      ["NICE: panik bozuklukta benzodiazepin önerilmez (uzun dönem sonucu kötü)", "benzodiazepin önerilmez|benzodiazepin verilmez|benzodiazepin kullanılmaz|benzodiazepinden kaçın|benzodiazepin önermi|uzun dönem sonuç"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "psi-okb", tr: "Obsesif kompulsif bozukluk", en: "Obsessive-compulsive disorder", cat: "anks", lvl: 2,
    src: { k: [DSM, SY], m: [
      ["Obsessive-compulsive disorder and body dysmorphic disorder: treatment (CG31). NICE 2005", "https://www.nice.org.uk/guidance/cg31/chapter/Recommendations-for-research"],
      ["Stein DJ ve ark. Obsessive-compulsive disorder. Nat Rev Dis Primers 2019", "https://doi.org/10.1038/s41572-019-0102-3"]] },
    c: [
      ["!Obsesyon: istenmeyen, yineleyici, sıkıntı veren düşünce/dürtü/imge", "obsesyon|takıntı|istemsiz düşünce|istenmeyen düşünce|zorlayıcı düşünce|bulaşma|kirlenme|şüphe"],
      ["!Kompulsiyon: kaygıyı azaltmak için yapılan yineleyici davranış/zihinsel eylem", "kompulsiyon|zorlantı|el yıkama|kontrol etme|sayma|ritüel|tekrar tekrar"],
      ["Zaman alır (örneğin günde 1 saatten fazla) ya da belirgin sıkıntıya veya işlevsellikte bozulmaya yol açar", "bir saatten fazla|belirgin sıkıntı|1 saatten fazla|saatlerini alır|zaman alıcı|işlevsellik|işlevselliğini boz"],
      ["İçgörü belirteci (iyi / zayıf / içgörüsüz)", "içgörü|insight|ego distonik|egodistonik|saçma olduğunu bil"],
      ["!Tedavi: maruz bırakma ve tepki önleme (ERP) içeren BDT", "tepki önleme|yanıt önleme|maruz bırakma|maruziyet|erp|bdt|bilişsel davranışçı|cbt"],
      ["SSRI (çoğu zaman depresyondan yüksek doz, yanıt geç)", "ssri|fluoksetin|fluvoksamin|sertralin|paroksetin|essitalopram|yüksek doz|yanıt geç|geç yanıt"],
      ["Yanıtsızlıkta klomipramin ya da antipsikotik ekleme", "klomipramin|clomipramin|antipsikotik ekle|augmentasyon|güçlendirme"],
      ["Tik bozukluğu ve depresyon sık eşlik eder", "tik bozukluğu|tourette|depresyon eşlik|komorbid"]
    ]},
  { id: "psi-tssb", tr: "Travma sonrası stres bozukluğu", en: "Post-traumatic stress disorder", cat: "anks", lvl: 2,
    src: { k: [DSM, SY], m: [
      ["Post-traumatic stress disorder (NG116). NICE 2018", "https://www.nice.org.uk/guidance/ng116"],
      ["Bisson JI ve ark. Post-traumatic stress disorder. BMJ 2015", null]] },
    c: [
      ["!Ölüm tehdidi, ağır yaralanma ya da cinsel şiddete maruz kalma (travmatik olay)", "travmatik olay|travmaya maruz|ölüm tehdid|ağır yaralan|cinsel şiddet|tecavüz|savaş|deprem|kaza"],
      ["!Yeniden yaşantılama: flashback, kâbus, istemsiz anılar", "yeniden yaşa|flashback|flaşbek|geri dönüş|kâbus|kabus|istemsiz anı|zihne üşüş"],
      ["Kaçınma: travmayı hatırlatan yer, kişi, düşünceden", "kaçınma|kaçın|hatırlatan"],
      ["Bilişte ve duygudurumda olumsuz değişiklik; aşırı uyarılmışlık (irkilme, hipervijilans)", "olumsuz biliş|suçluluk|kopukluk|irkilme|hipervijilans|aşırı uyarıl|aşırı tetikte|uykusuzluk|öfke patlama"],
      ["!Süre: 1 aydan uzun; daha kısa ise akut stres bozukluğu", "bir aydan|1 aydan|bir ay|akut stres bozuklu"],
      ["!Tedavi: travma odaklı BDT ya da EMDR (ilk seçenek psikoterapi)", "travma odaklı|emdr|göz hareket|bdt|bilişsel davranışçı|cbt|uzamış maruz|bilişsel işleme"],
      ["İlaç: SSRI (sertralin, paroksetin) ya da venlafaksin; psikoterapinin yerini almaz", "ssri|sertralin|paroksetin|venlafaksin"],
      ["Olay sonrası rutin psikolojik 'debriefing' önerilmez", "debriefing|debrifing|tek oturum|psikolojik çözümleme"]
    ]},
  { id: "psi-deliryum", tr: "Deliryum", en: "Delirium", cat: "kons", lvl: 2,
    src: { k: [DSM, SY], m: [
      ["Delirium: prevention, diagnosis and management in hospital and long-term care (CG103). NICE 2010, güncelleme 2023", "https://www.nice.org.uk/guidance/cg103/chapter/1-Guidance"],
      ["Inouye SK, Westendorp RGJ, Saczynski JS. Delirium in elderly people. Lancet 2014", "https://doi.org/10.1016/S0140-6736(13)60688-1"]] },
    c: [
      ["!Akut başlangıç, gün içinde dalgalanan seyir", "akut başla|aniden başla|dalgalan|fluktuasyon|gün içinde değiş|gece kötüleş"],
      ["!Dikkat bozukluğu ve bilinç/farkındalık değişikliği", "dikkat bozuk|dikkatsiz|dikkati topla|dikkat eksik|bilinç bulanık|farkındalık|oryantasyon|yönelim"],
      ["Hiperaktif, hipoaktif (sık atlanan) ve karışık tipler", "hipoaktif|hiperaktif|karışık tip|mikst|ajitasyon|ajite"],
      ["Tarama: CAM (Confusion Assessment Method) ya da 4AT", "cam yöntem|cam ölçe|confusion assessment|4at|dört a t|tarama ölçe"],
      ["!Altta yatan nedeni bul ve tedavi et (enfeksiyon, ilaç, metabolik, hipoksi, idrar retansiyonu)", "altta yatan|enfeksiyon|idrar yolu|ilaç yan etki|antikolinerjik|elektrolit|hiponatremi|hipoksi|metabolik|retansiyon|konstipasyon|kabızlık"],
      ["Demanstan farkı: demans sinsi başlar, dikkat erken dönemde korunur; demans deliryum riskini artırır", "demans sinsi|demansta dikkat korun|demansta bilinç berrak|demans riski art|sinsi başla|yavaş ilerle"],
      ["Önce ilaç dışı yöntemler: oryantasyon, gözlük/işitme cihazı, uyku düzeni, mobilizasyon", "ilaç dışı|non farmakolojik|nonfarmakolojik|yeniden oryant|gözlük|işitme cihaz|uyku düzen|mobiliz|aile yanında|saat ve takvim"],
      ["Gerekirse kısa süreli düşük doz haloperidol; benzodiazepin (alkol yoksunluğu dışında) kötüleştirir", "düşük doz haloperidol|kısa süreli haloperidol|kısa süreli antipsikotik|düşük doz antipsikotik|benzodiazepin kötüleş|benzodiazepinden kaçın|benzodiazepin verilmez"]
    ]},
  { id: "psi-alkol-yoksunlugu", tr: "Alkol kullanım bozukluğu ve yoksunluk", en: "Alcohol use disorder and withdrawal", cat: "madde", lvl: 2,
    src: { k: [SY, CT], m: [
      ["The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management. J Addict Med 2020", "https://doi.org/10.1097/ADM.0000000000000668"],
      ["Alcohol-use disorders: diagnosis and management of physical complications (CG100). NICE 2010", "https://www.nice.org.uk/guidance/cg100/chapter/1-Guidance"]] },
    c: [
      ["!Yoksunluk belirtileri: tremor, terleme, taşikardi, anksiyete, bulantı, uykusuzluk", "titreme|terleme|taşikardi|bulantı|otonom hiperaktivite|yoksunluk belirti"],
      ["Ağır yoksunluk: nöbet ve deliryum tremens (görsel halüsinasyon, otonom instabilite)", "deliryum tremens|delirium tremens|alkol yoksunluk nöbet|yoksunluk nöbet|görsel halüsinas|otonom instabilite"],
      ["Şiddet ölçümü: CIWA-Ar", "ciwa|si va|ciwaar"],
      ["!Tedavi: benzodiazepin (klordiazepoksit, diazepam; karaciğer hastasında lorazepam)", "klordiazepoksit|diazepam|lorazepam|oksazepam|benzodiazepinlerdir|benzodiazepin ile tedavi|benzodiazepin ver"],
      ["!Tiamin (Wernicke ensefalopatisini önleme) ve sıvı-elektrolit", "tiamin|b1 vitamin|b 1 vitamin|wernicke önle|wernicke ensefalopatisini önle"],
      ["Wernicke: konfüzyon, ataksi, oftalmopleji", "oftalmopleji|ataksi|nistagmus|konfüzyon"],
      ["Relaps önleme: naltrekson, akamprosat, disülfiram + psikososyal destek", "naltrekson|akamprosat|disülfiram|disulfiram|relaps önle|nüks önle|motivasyonel görüşme|isimsiz alkolik"]
    ]},
  { id: "psi-yeme-bozukluklari", tr: "Yeme bozuklukları (anoreksiya ve bulimiya nervoza)", en: "Eating disorders (anorexia and bulimia nervosa)", cat: "diger", lvl: 2,
    src: { k: [DSM, SY], m: [
      ["Eating disorders: recognition and treatment (NG69). NICE 2017, güncelleme 2020", "https://www.nice.org.uk/guidance/ng69"],
      ["The American Psychiatric Association Practice Guideline for the Treatment of Patients With Eating Disorders, 4th ed. APA 2023", null]] },
    c: [
      ["!Anoreksiya: enerji alımını kısıtlama, belirgin düşük vücut ağırlığı", "anoreksi|kısıtla|düşük vücut ağırl|düşük kilo|zayıflık|beden kitle indeks|vki"],
      ["!Kilo almaktan yoğun korku ve beden algısı bozukluğu", "kilo almaktan kork|kilo alma korku|şişmanlama korku|beden algı|beden imaj|vücut algı"],
      ["DSM-5'te amenore artık tanı ölçütü değil", "amenore artık|amenore gerekmez|amenore şart değil|amenore ölçüt değil|amenore aranmaz|amenore tanı ölçütü değil|amenore artık tanı"],
      ["!Bulimiya: tıkınırcasına yeme + uygunsuz telafi davranışı (kusma, laksatif), kilo çoğunlukla normal", "bulimi|tıkınırcasına|tıkınma|telafi|kendini kusturma|kusma|laksatif|diüretik kötüye"],
      ["Bulgular: Russell işareti, parotis büyümesi, diş minesi erozyonu, hipokalemi", "russell|parotis|diş mine|hipokalemi|potasyum düşük|metabolik alkaloz"],
      ["Yeniden beslenme sendromu: hipofosfatemi (yavaş ve izlemli besleme)", "yeniden beslenme|refeeding|hipofosfatemi|fosfor düş|fosfat düş"],
      ["Tedavi: yeme bozukluğuna yönelik psikoterapi; ergenlerde aile temelli tedavi", "aile temelli|aile odaklı|maudsley|bdt|bilişsel davranışçı|cbt|psikoterapi"],
      ["Bulimiyada fluoksetin kullanılabilir; bupropion nöbet riski nedeniyle verilmez", "fluoksetin kullanıl|fluoksetin verilebil|fluoksetin etkili|fluoksetin onaylı|bupropion verilmez|bupropiondan kaçın|bupropion kontrendike"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "psi-intihar-riski", tr: "İntihar riskinin değerlendirilmesi", en: "Suicide risk assessment", cat: "kons", lvl: 3,
    src: { k: [SY, CT], m: [
      ["Turecki G, Brent DA. Suicide and suicidal behaviour. Lancet 2016", "https://doi.org/10.1016/S0140-6736(15)00234-2"],
      ["Self-harm: assessment, management and preventing recurrence (NG225). NICE 2022", null]] },
    c: [
      ["!İntihar düşüncesini doğrudan sormak riski artırmaz", "doğrudan sor|açıkça sor|direkt sor|sormak riski artırmaz|sormak artırmaz|fikir vermez|sormaktan çekinme|sorgulanmalı|intihar düşüncesi sorulmalı|intihar düşüncesini sor|sormak tetiklemez|aklına sokmaz|doğrudan sormak|açıkça sormak|doğrudan sorulmalı|açıkça sorulmalı"],
      ["!En güçlü risk etkeni: önceki intihar girişimi", "önceki girişim|önceki intihar|daha önce intihar|geçmiş girişim|girişim öykü|geçirilmiş girişim|önceden girişim|daha önceki girişim|eski girişim|geçmişteki intihar|geçmişteki girişim"],
      ["Diğer risk etkenleri: psikiyatrik bozukluk, madde, erkek cinsiyet, yaşlılık, yalnızlık, aile öyküsü, umutsuzluk", "depresyon|madde kullan|alkol|erkek cinsiyet|yaşlı|yalnız|bekar|aile öykü|umutsuz|kronik ağrı|işsiz"],
      ["Plan, niyet, hazırlık ve araca erişim sorgulanır", "intihar plan|planı var|plan yap|planı olup|planı sor|somut plan|niyet|yöntem|hazırlık|araca erişim|veda mektub"],
      ["Risk ölçekleri tek başına intiharı öngörmek için kullanılmaz (NICE)", "ölçek tek başına|ölçekler tek başına|ölçek kullanılmaz|skala tek başına|skalaları tek başına|tek başına karar verdirmez|öngörü değeri düşük|öngörü değeri sınırlı|risk sınıflaması kullanılmaz|klinik yargı esas|düşük risk paradoks"],
      ["!Güvenlik planı ve ölümcül araçların kısıtlanması", "güvenlik plan|araç kısıtla|araçları kısıtla|ilaçları kaldır|ilaçları uzaklaştır|silah|ateşli silah|araçlara erişimi kısıtla|erişimin kısıtlan|kriz plan|ölümcül araç|ortamı güvenli"],
      ["Yüksek riskte hastaneye yatış/gözetim; taburculuk sonrası erken izlem", "hastaneye yatır|yatırılarak|yakın gözetim|gözlem altında|taburcu|erken izlem|erken kontrol|yatarak tedavi|hastaneye yatış|yatış endikasyon|sürekli gözetim|psikiyatri servis"],
      ["İntihar riskini azaltan ilaçlar: lityum (duygudurum), klozapin (şizofreni)", "lityum|klozapin"]
    ]},
  { id: "psi-nms-serotonin", tr: "Nöroleptik malign sendrom ve serotonin sendromu", en: "Neuroleptic malignant syndrome vs serotonin syndrome", cat: "ilac", lvl: 3,
    src: { k: [SY, CT], m: [
      ["Strawn JR, Keck PE, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry 2007", "https://doi.org/10.1176/ajp.2007.164.6.870"],
      ["Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med 2005", "https://doi.org/10.1056/NEJMra041867"]] },
    c: [
      ["!NMS: dopamin antagonisti (antipsikotik) ile, günler içinde gelişir", "nöroleptik malign|nms|antipsikotik başla|antipsikotik doz|dopamin antagon|dopamin bloka|günler içinde"],
      ["!NMS bulguları: kurşun boru rijidite, hipertermi, bilinç değişikliği, otonom instabilite, yüksek CK", "kurşun boru|lead pipe|rijidite|hipertermi|yüksek ateş|ck yüksel|kreatin kinaz|cpk|miyoglobin|rabdomiyoliz"],
      ["!Serotonin sendromu: serotonerjik ilaç(lar) ile saatler içinde başlar", "serotonin sendrom|serotonerjik|ssri|maoi|mao inhibit|tramadol|linezolid|saatler içinde"],
      ["Serotonin sendromu bulguları: klonus, hiperrefleksi, midriyazis, ishal, ajitasyon", "klonus|hiperrefleksi|refleks artış|midriyazis|ishal|diyare|tremor"],
      ["Hunter kriterleri (klonus temelli tanı)", "hunter"],
      ["İkisinde de ilk adım: tetikleyici ilacı kes, destek tedavisi, soğutma", "ilacı kes|ilacı bırak|kesilir|destek tedavi|soğut|yoğun bakım"],
      ["NMS'de dantrolen/bromokriptin; serotonin sendromunda benzodiazepin ve siproheptadin", "dantrolen|bromokriptin|siproheptadin|cyproheptadin|benzodiazepin"]
    ]},
  { id: "psi-lityum", tr: "Lityum tedavisi: izlem ve toksisite", en: "Lithium monitoring and toxicity", cat: "ilac", lvl: 3,
    src: { k: [SY, CT], m: [NICE_BP,
      ["Gitlin M. Lithium side effects and toxicity: prevalence and management strategies. Int J Bipolar Disord 2016", "https://doi.org/10.1186/s40345-016-0068-y"]] },
    c: [
      ["!Dar terapötik aralık; kan düzeyi dozdan 12 saat sonra ölçülür", "dar terapötik|terapötik aralık|terapötik pencere|12 saat|on iki saat|serum lityum düzey|kan düzey"],
      ["NICE: idamede hedef düzey çoğunlukla 0,6–0,8 mmol/L", "0 6 ile 0 8|0 6 0 8|sıfır virgül altı ile sıfır virgül sekiz"],
      ["!Toksisite: kaba tremor, ataksi, dizartri, konfüzyon, kusma-ishal, nöbet", "kaba tremor|ataksi|dizartri|konfüzyon|bilinç bulanık|kusma|ishal|nöbet"],
      ["!Düzeyi artıranlar: dehidratasyon, NSAİİ, ACE inhibitörü/ARB, tiyazid", "dehidrat|sıvı kaybı|nsaii|nsaid|steroid olmayan|ace inhibit|arb ler|arb leri|anjiyotensin|tiyazid|tiazid|hiponatremi"],
      ["Ağır toksisitede hemodiyaliz", "hemodiyaliz|diyaliz"],
      ["Uzun dönem: hipotiroidi, nefrojenik diyabet insipidus, böbrek işlevinde azalma, hiperkalsemi/hiperparatiroidi", "hipotiroid|nefrojenik|diyabet insipidus|poliüri|polidipsi|egfr|kreatinin|böbrek işlev|hiperkalsemi|paratiroid|kalsiyum"],
      ["Başlamadan ve düzenli aralıklarla böbrek, tiroid, kalsiyum, kilo izlemi", "böbrek fonksiyon|tiroid fonksiyon|tsh|düzenli izlem|altı ayda|6 ayda|üç ayda|3 ayda"],
      ["Gebelikte Ebstein anomalisi riski (kardiyak teratojenite)", "ebstein|teratojen"]
    ]},
  { id: "psi-opioid-kullanim-bozuklugu", tr: "Opioid kullanım bozukluğunun tedavisi", en: "Opioid use disorder treatment", cat: "madde", lvl: 3,
    src: { k: [SY, CT], m: [
      ["Executive Summary of the Focused Update of the ASAM National Practice Guideline for the Treatment of Opioid Use Disorder. J Addict Med 2020", "https://doi.org/10.1097/ADM.0000000000000635"],
      ["The ASAM National Practice Guideline for the Treatment of Opioid Use Disorder: 2020 Focused Update. ASAM 2020", "https://www.asam.org/Quality-Science/quality/2020-national-practice-guideline"]] },
    c: [
      ["!Opioid yoksunluğu: midriyazis, esneme, lakrimasyon-rinore, piloereksiyon, ishal, kas ağrısı", "midriyazis|pupil geniş|esneme|lakrimasyon|gözyaşı|burun akın|rinore|piloereksiyon|tüyler diken|ishal|kas ağrı"],
      ["!Opioid agonist tedavisi (metadon, buprenorfin) mortaliteyi azaltır", "agonist tedavi|idame tedavi|substitüsyon|yerine koyma|metadon ya da buprenorfin|metadon veya buprenorfin|metadon idame|buprenorfin|mortaliteyi azalt|ölümü azalt"],
      ["Buprenorfin: kısmi agonist, tavan etkisi; erken verilirse presipite yoksunluk", "kısmi agonist|parsiyel agonist|tavan etki|presipite|presipitan|tetiklenmiş yoksunluk|nalokson ile kombin|suboxone"],
      ["Metadon: tam agonist, uzun yarı ömür; QT uzaması", "tam agonist|uzun yarı ömür|qt uzama|qt uza"],
      ["Naltrekson: antagonist, detoksifikasyon sonrası", "naltrekson|detoksifikasyon sonra"],
      ["Doz aşımına karşı eve nalokson kiti", "nalokson kit|eve nalokson|evde nalokson|nalokson reçete|doz aşımı"],
      ["Tedavi süresi önceden kısıtlanmaz; psikososyal destek eşlik eder, yalnızca detoks önerilmez", "süre sınırı yok|süre sınırı konmaz|süre sınırlanmaz|süresiz sürdürülebilir|uzun süreli idame|psikososyal destek|yalnızca detoks önerilmez|sadece detoks önerilmez|tek başına detoks önerilmez|detoks tek başına önerilmez|detoks tek başına yetersiz|sadece detoks yetersiz"]
    ]},
  { id: "psi-borderline", tr: "Sınırda (borderline) kişilik bozukluğu", en: "Borderline personality disorder", cat: "diger", lvl: 3,
    src: { k: [DSM, SY], m: [
      ["The American Psychiatric Association Practice Guideline for the Treatment of Patients With Borderline Personality Disorder. Am J Psychiatry 2024", "https://doi.org/10.1176/appi.ajp.24181010"],
      ["Gunderson JG ve ark. Borderline personality disorder. Nat Rev Dis Primers 2018", "https://doi.org/10.1038/nrdp.2018.29"]] },
    c: [
      ["!Kişilerarası ilişkilerde, benlik algısında ve duygulanımda süregen dengesizlik", "ilişkilerde dengesiz|dengesiz ilişki|yoğun ve dengesiz|benlik algı|kimlik bozuk|duygulanım dengesiz|duygusal dengesiz|affektif instabil"],
      ["Terk edilme korkusu, kronik boşluk hissi, yoğun öfke", "terk edil|boşluk hiss|içi boş|yoğun öfke|öfke kontrol"],
      ["!Dürtüsellik, yineleyen kendine zarar verme ve intihar davranışı", "dürtüsel|kendine zarar|kendini kes|self harm|intihar girişim|intihar davran"],
      ["İdealizasyon-değersizleştirme, bölme (splitting) savunması; stresle geçici paranoid düşünce/dissosiyasyon", "idealize|idealizasyon|değersizleştir|bölme|splitting|dissosiyasyon|paranoid"],
      ["DSM: B kümesi kişilik bozukluğu, erken erişkinlikte başlar", "b kümesi|küme b|erken erişkin|ergenlik"],
      ["!Tedavi: yapılandırılmış psikoterapi (diyalektik davranış terapisi, mentalizasyon temelli)", "diyalektik|dbt|linehan|mentalizasyon|mbt|şema terapi|aktarım odaklı|yapılandırılmış psikoterapi"],
      ["İlaç yalnızca yardımcı ve kısa süreli; çoklu ilaçtan kaçınılır (APA 2024)", "ilaç yardımcı|ilaçlar yardımcı|yardımcı olarak|kısa süreli ilaç|zaman sınırlı|polifarmasi|çoklu ilaç"]
    ]}
]
});
})();
