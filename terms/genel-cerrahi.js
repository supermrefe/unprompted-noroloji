/* Genel cerrahi — Unprompted Tıp konu paketi
   Seçim mantığı: TUS'ta en sık sorulan akut karın tabloları (apandisit, kolesistit/kolanjit, ileus, perforasyon, divertikülit,
   mezenter iskemi), elektif genel cerrahinin çekirdeği (fıtık, anorektal hastalık, meme kitlesi, tiroid cerrahisi, bariatrik cerrahi)
   ve perioperatif bakımın kanıta dayalı ilkeleri (cerrahi alan enfeksiyonu, ERAS, anastomoz kaçağı). Tıbbi pankreatit gastroenterolojinin,
   travma acil tıbbın paketindedir; burada yalnız pankreatit komplikasyonlarının girişimsel yönetimi var. Kaynak: WSES, Tokyo 2018, HerniaSurge, ASCRS, WHO/CDC. */
UP.add({ id: "genel-cerrahi", subs: {
    akut: "Akut karın ve acil cerrahi",
    elektif: "Elektif genel cerrahi",
    periop: "Perioperatif bakım ve komplikasyonlar"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "gc-akut-apandisit", tr: "Akut apandisit", en: "Acute appendicitis", cat: "akut", lvl: 1,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Di Saverio S et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg 2020", "https://doi.org/10.1186/s13017-020-00306-3"],
          ["CODA Collaborative. A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis. N Engl J Med 2020", "https://pubmed.ncbi.nlm.nih.gov/33017106/"]]
    },
    c: [
      ["!Lümen obstrüksiyonu (fekalit/apendikolit, lenfoid hiperplazi)", "obstrüksiyon|tıkan|fekalit|apendikolit|appendikolit|lenfoid hiperplazi|lümen"],
      ["!Göbek çevresinden sağ alt kadrana göç eden ağrı, McBurney hassasiyeti", "göç eden|göç ed|kayan ağrı|migrasyon|sağ alt kadran|sağ iliak|mcburney|mc burney|periumbilikal|göbek çevres"],
      ["İştahsızlık, bulantı-kusma, rebound ve Rovsing gibi peritoneal bulgular", "iştahsız|anoreksi|rebound|rovsing|psoas|obturator|defans|geri çekme"],
      ["!Alvarado skoru (10 puan) ile risk sınıflama", "alvarado|mantrels|air skor|appendicitis inflammatory response"],
      ["Görüntüleme: önce ultrason, gerekirse BT; çocuk ve gebede ultrason/MR", "ultrason|usg|bilgisayarlı tomografi|tomografi|bete|emar|manyetik rezonans"],
      ["!Standart tedavi laparoskopik apendektomi", "apendektomi|appendektomi|laparoskopik|laparoskopi"],
      ["Komplike olmayan olguda seçilmiş hastaya antibiyotikle ameliyatsız tedavi; apendikolit varsa başarısızlık riski yüksek", "ameliyatsız|operasyonsuz|nonoperatif|non operatif|konservatif|antibiyotikle tedavi|antibiyotik tedavisi|coda"],
      ["Komplikasyon: perforasyon, apse, plastron", "perforasyon|perfore|apse|plastron|flegmon"]
    ]},
  { id: "gc-akut-kolesistit", tr: "Akut kolesistit (Tokyo 2018)", en: "Acute cholecystitis (TG18)", cat: "akut", lvl: 1,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Yokoe M et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018", "https://pubmed.ncbi.nlm.nih.gov/29032636/"],
          ["Okamoto K et al. Tokyo Guidelines 2018: flowchart for the management of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018", "https://doi.org/10.1002/jhbp.516"]]
    },
    c: [
      ["!Çoğunlukla taşın sistik kanalı tıkaması (kalkülöz kolesistit)", "sistik kanal|duktus sistikus|kalkülöz|safra taşı|kolelitiyazis|taş tıka"],
      ["!Yerel bulgu: sağ üst kadran ağrısı ve Murphy bulgusu", "murphy|kese hassas|safra kesesi hassas|inspiryumda dur|nefes alırken dur"],
      ["Sistemik inflamasyon: ateş, lökositoz, CRP yüksekliği", "ateş ve lökositoz|ateş lökositoz|lökositoz ve crp|sistemik inflamasyon"],
      ["!Tanıda ultrason: duvar kalınlaşması, perikolesistik sıvı, sonografik Murphy", "duvar kalınlaş|perikolesistik|sonografik murphy|kese duvar"],
      ["Tokyo 2018 ağırlık derecesi: hafif, orta, ağır (organ yetmezliği)", "tokyo ağırlık|tokyo sınıf|tokyo 2018|tg18|derece 3|grade 3|evre 3"],
      ["!Erken laparoskopik kolesistektomi; yüksek riskte perkütan kolesistostomi", "kolesistektomi|kolesistostomi|safra kesesi drenaj|perkütan drenaj"],
      ["Antibiyotik ve destek tedavisi", "oral alımı kes|ağızdan alımı kes|sıvı replas|sıvı desteği|sıvı analjezi|analjezi ve antibiyotik|antibiyotik tedavisi"],
      ["Komplikasyon: gangren, ampiyem, perforasyon; akalkülöz kolesistit yoğun bakım hastasında", "gangren|ampiyem|amfizematöz|akalkülöz"]
    ]},
  { id: "gc-inguinal-herni", tr: "Kasık (inguinal) fıtığı", en: "Inguinal hernia (HerniaSurge)", cat: "elektif", lvl: 1,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["HerniaSurge Group. International guidelines for groin hernia management. Hernia 2018", "https://pubmed.ncbi.nlm.nih.gov/29330835/"],
          ["Stabilini C et al. Update of the international HerniaSurge guidelines for groin hernia management. BJS Open 2023", "https://doi.org/10.1093/bjsopen/zrad080"]]
    },
    c: [
      ["!İndirekt (lateral, derin halkadan) ve direkt (Hesselbach üçgeni) fıtık ayrımı", "indirekt|direkt|hesselbach|derin halka|iç halka|inferior epigastrik|epigastrik damar"],
      ["Erkeklerde çok daha sık; kadında femoral fıtık atlanmamalı", "erkek|femoral"],
      ["!Tanı fizik muayeneyle; şüphede ultrason", "fizik muayene|muayeneyle|ıkınma|valsalva|öksür|parmakla|ultrason"],
      ["!Komplikasyon: inkarserasyon ve strangülasyon acil cerrahi gerektirir", "inkarser|boğulma|strangül|redükte edilemeyen|geri itilemeyen"],
      ["Tamir yöntemi: meşle tamir; açıkta Lichtenstein", "lichtenstein|meş|mesh|yama|greft"],
      ["Laparoendoskopik onarım (TEP/TAPP); kadında önerilir", "tep|tapp|laparoskop|endoskop|totally extraperitoneal|transabdominal preperitoneal"],
      ["Az semptomlu erkekte izlem (bekle-gör) seçeneği", "bekle gör|izlem|watchful|takip edileb|izlenebil|dikkatli bekle"],
      ["Uzun dönem sorun: kronik ağrı ve nüks", "kronik ağrı|kronik kasık ağr|nüks|rekürrens"]
    ]},
  { id: "gc-cerrahi-alan-enfeksiyonu", tr: "Cerrahi alan enfeksiyonunun önlenmesi", en: "Surgical site infection prevention (WHO 2016 / CDC 2017)", cat: "periop", lvl: 1,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Allegranzi B et al. New WHO recommendations on preoperative measures for surgical site infection prevention. Lancet Infect Dis 2016", "https://doi.org/10.1016/S1473-3099(16)30398-X"],
          ["Berríos-Torres SI et al. Centers for Disease Control and Prevention Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surg 2017", "https://doi.org/10.1001/jamasurg.2017.0904"]]
    },
    c: [
      ["!Yara sınıflaması: temiz, temiz-kontamine, kontamine, kirli", "temiz kontamine|kontamine|kirli yara|yara sınıf|temiz yara"],
      ["Yüzeyel insizyonel, derin insizyonel, organ-boşluk enfeksiyonu", "yüzeyel|derin insizyon|organ boşluk|organ/boşluk|insizyonel"],
      ["!Profilaktik antibiyotik insizyondan önce zamanında verilir (çoğu ajanda son 60 dk, vankomisin/florokinolon 120 dk; WHO: 120 dk içinde); ameliyat sonrası uzatılmaz", "profilak|insizyondan önce|kesiden önce|cilt kesisinden önce|uzatılmama|uzatmıyor|uzatılmaz|tek doz"],
      ["Kıl gerekiyorsa jiletle değil makineyle alınır", "tıraş|jilet|kıl alma|kıl temiz|klipper|makine"],
      ["!Cilt antisepsisi: alkol bazlı klorheksidin", "klorheksidin|alkol bazlı|antisepsi|antiseptik"],
      ["Normotermi ve glisemi kontrolü", "normoterm|hipotermi|vücut ısı|glisemi|kan şekeri|glukoz"],
      ["Ameliyat öncesi duş/banyo, sigaranın bırakılması", "duş|banyo|sigarayı bırak|sigaranın bırakıl|sigara bırak"],
      ["Risk faktörleri: diyabet, obezite, uzun ameliyat süresi", "diyabet|obezite|ameliyat süresi|uzun ameliyat|immünsüpres"]
    ]},
  { id: "gc-anorektal-hastaliklar", tr: "Hemoroid, anal fissür ve anal fistül", en: "Hemorrhoids, anal fissure and fistula-in-ano", cat: "elektif", lvl: 1,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Davis BR et al. The ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum 2018", "https://pubmed.ncbi.nlm.nih.gov/29420423/"],
          ["Gaertner WB et al. The ASCRS Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula. Dis Colon Rectum 2022", "https://doi.org/10.1097/DCR.0000000000002473"]]
    },
    c: [
      ["!İç hemoroid dentat çizgi üstünde, ağrısız parlak kırmızı kanama; prolapsusa göre derecelendirilir", "iç hemoroid|dentat|pektinat|ağrısız kanama|parlak kırmızı|taze kan|prolapsus|prolabe|derece"],
      ["Dış hemoroid trombozu ani ağrılı şişlik", "dış hemoroid|tromboze|trombozlu|eksternal hemoroid"],
      ["Hemoroid tedavisi: lif-sıvı, bant ligasyonu, ileri derecede hemoroidektomi", "lif|posa|band ligasyon|bant ligasyon|lastik bant|hemoroidektomi"],
      ["Rektal kanamada endike olduğunda (yaş, alarm bulgusu, aile öyküsü, tarama durumu) kolonun kolonoskopiyle değerlendirilmesi", "kolonoskop|kolon değerlendir|kolonun incelen"],
      ["!Anal fissür: dışkılamada keskin ağrı, çoğunlukla arka orta hatta", "fissür|yırtık|arka orta hat|posterior orta|dışkılama sırasında|defekasyonda keskin|cam kesiği"],
      ["Fissür tedavisi: topikal nitrat/kalsiyum kanal blokeri, botulinum, lateral internal sfinkterotomi", "nitrogliserin|nitrat|diltiazem|kalsiyum kanal|botulinum|botoks|sfinkterotomi"],
      ["!Anal fistül genellikle anorektal apseden gelişir; Parks sınıflaması", "fistül|anorektal apse|perianal apse|kript|parks|transsfinkterik|intersfinkterik"],
      ["Fistül tedavisi: basit fistülde fistülotomi, kompleks fistülde seton/sfinkter koruyucu yöntem", "fistülotomi|seton|lift|flep|sfinkter koru|inkontinans"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "gc-ince-barsak-obstruksiyonu", tr: "Adezyona bağlı ince barsak tıkanıklığı", en: "Adhesive small bowel obstruction", cat: "akut", lvl: 2,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Ten Broek RPG et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update. World J Emerg Surg 2018", "https://pubmed.ncbi.nlm.nih.gov/29946347/"],
          ["Ceresoli M et al. Water-soluble contrast agent in adhesive small bowel obstruction: a systematic review and meta-analysis. Am J Surg 2016", "https://pubmed.ncbi.nlm.nih.gov/26329902/"]]
    },
    c: [
      ["!En sık neden geçirilmiş ameliyata bağlı yapışıklıklar (adezyon/brid)", "adezyon|yapışıklık|brid|bant|geçirilmiş ameliyat|önceki ameliyat"],
      ["Kolik ağrı, kusma, distansiyon, gaz-gaita çıkaramama", "kolik|kusma|distansiyon|şişkinlik|gaz gaita|gaz ve gaita|gaz çıkaram|gaita çıkaram|obstipasyon"],
      ["Direkt grafide hava-sıvı seviyeleri", "hava sıvı|seviye|direkt grafi|ayakta direkt"],
      ["!Tanıda tercih BT: geçiş noktası, strangülasyon bulguları", "bilgisayarlı tomografi|tomografi|bete|geçiş noktası|transition"],
      ["!Strangülasyon/iskemi ya da peritonit yoksa ameliyatsız tedavi: ağızdan alım kesilir, nazogastrik dekompresyon, sıvı-elektrolit", "nazogastrik|ng tüp|dekompres|ağızdan alım|oral alım|sıvı elektrolit|elektrolit replas|konservatif|ameliyatsız|nonoperatif"],
      ["Suda çözünen kontrast (Gastrografin) tanısal ve tedavi edici", "gastrografin|suda çözünen|kontrast madde|kolona geç"],
      ["!Strangülasyon, peritonit, iskemi ya da başarısız konservatif tedavide cerrahi", "strangül|iskemi|peritonit|adeziyoliz|adezyolizis|laparotomi|cerrahi gerek|ameliyat gerek"],
      ["Diğer nedenler: fıtık (inkarsere herni), tümör, invajinasyon, ince barsak volvulusu, Crohn darlığı, safra taşı ileusu", "fıtık|herni|tümör|invajinasyon|intussusepsiyon|ince barsak volvulus|ince bağırsak volvulus|crohn|safra taşı ileus"]
    ]},
  { id: "gc-peptik-ulser-perforasyonu", tr: "Peptik ülser perforasyonu", en: "Perforated peptic ulcer", cat: "akut", lvl: 2,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Tarasconi A et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg 2020", "https://pubmed.ncbi.nlm.nih.gov/31921329/"],
          ["Søreide K et al. Perforated peptic ulcer. Lancet 2015", "https://doi.org/10.1016/S0140-6736(15)00276-7"]]
    },
    c: [
      ["!Ani başlayan şiddetli epigastrik ağrı, tahta karın", "ani başlayan|bıçak saplanır|tahta karın|tahta gibi|defans|epigastrik"],
      ["Risk: NSAİİ, Helicobacter pylori, sigara, steroid", "nsaid|nsai|nonsteroid|steroid olmayan|helikobakter|helicobacter|pylori|sigara"],
      ["!Serbest hava: ayakta akciğer grafisinde diyafram altı, gerekirse BT", "serbest hava|diyafram altı|pnömoperiton|subdiyafragm"],
      ["Tanıda BT duyarlıdır", "bilgisayarlı tomografi|tomografi|bete"],
      ["Sepsis/peritonit yönetimi: sıvı, geniş spektrumlu antibiyotik, nazogastrik", "sepsis|peritonit|geniş spektrum|nazogastrik|resüsit"],
      ["!Cerrahi onarım: omentum yamasıyla primer kapama (Graham), laparoskopik ya da açık", "omentum|omental|graham|primer kapama|primer onarım|yama"],
      ["Ameliyat sonrası PPI ve H. pylori eradikasyonu", "eradikasyon|ameliyat sonrası ppi|ameliyattan sonra ppi|uzun süreli ppi"],
      ["Mortaliteyi artıran: ileri yaş, gecikmiş başvuru, şok, eşlik eden hastalık; Boey skoru", "boey|ileri yaş|gecikme|geç başvur|şok"]
    ]},
  { id: "gc-akut-divertikulit", tr: "Akut kolon divertiküliti", en: "Acute colonic diverticulitis", cat: "akut", lvl: 2,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Sartelli M et al. 2020 update of the WSES guidelines for the management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg 2020", "https://doi.org/10.1186/s13017-020-00313-4"],
          ["Hall J et al. The ASCRS Clinical Practice Guidelines for the Treatment of Left-Sided Colonic Diverticulitis. Dis Colon Rectum 2020", "https://doi.org/10.1097/DCR.0000000000001679"]]
    },
    c: [
      ["!Batıda en sık sigmoid kolon; sol alt kadran ağrısı, ateş", "sigmoid|sol alt kadran|sol iliak|sol alt karın"],
      ["!Tanıda kontrastlı BT", "bilgisayarlı tomografi|tomografi|bete|kontrastlı"],
      ["!Komplike ve komplike olmayan ayrımı; Hinchey (ve WSES BT) sınıflaması", "hinchey|komplike ve komplike|komplike ve komplikasyonsuz|komplike divertikülit|wses sınıf"],
      ["Komplike olmayan hastada seçilmiş olguda antibiyotiksiz izlem", "antibiyotiksiz|antibiyotik vermeden|antibiyotik olmadan|antibiyotik gerekmeyeb"],
      ["Büyük apsede perkütan drenaj", "perkütan|drenaj|apse"],
      ["!Pürülan/fekal peritonitte acil cerrahi: Hartmann ya da primer anastomoz (± saptırıcı stoma)", "hartmann|primer anastomoz|stoma|kolostomi|ileostomi|rezeksiyon|fekal peritonit|pürülan"],
      ["Atak sonrası kolonoskopiyle kanserin dışlanması (özellikle komplike olguda)", "kolonoskop|kanser dışla|malignite dışla"],
      ["Elektif sigmoidektomi kararı bireysel; atak sayısı tek başına ölçüt değil", "elektif|sigmoidektomi|bireysel|atak sayısı"]
    ]},
  { id: "gc-akut-kolanjit", tr: "Akut kolanjit (Tokyo 2018)", en: "Acute cholangitis (TG18)", cat: "akut", lvl: 2,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Kiriyama S et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci 2018", "https://pubmed.ncbi.nlm.nih.gov/29032610/"],
          ["Gomi H et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci 2018", "https://pubmed.ncbi.nlm.nih.gov/29090866/"]]
    },
    c: [
      ["!Safra yolu tıkanıklığı (en sık koledok taşı) zemininde enfeksiyon", "koledok|koledokolitiyazis|safra yolu tıkan|biliyer obstrüksiyon|safra yolu obstrüksiyon|darlık|striktür|stent"],
      ["!Charcot triadı: ateş, sarılık, sağ üst kadran ağrısı; Reynolds pentadı: + konfüzyon, hipotansiyon", "charcot|reynolds|sarılık|ikter|konfüzyon|mental durum"],
      ["Tokyo 2018 tanı: sistemik inflamasyon + kolestaz + görüntülemede safra yolu dilatasyonu", "kolestaz|bilirubin|alp|ggt|dilatasyon|genişle|tokyo"],
      ["Ağırlık: hafif, orta, ağır (organ yetmezliği)", "derece 1|derece 2|derece 3|grade|organ yetmez|organ disfonksiyon|hafif orta ağır"],
      ["!Ağırlığa göre zamanlanan biliyer drenaj; tercih ERCP", "ercp|endoskopik retrograd|biliyer drenaj|safra drenaj|sfinkterotomi|ptk|perkütan transhepatik"],
      ["Antibiyotik ve sıvı resüsitasyonu; kan kültürü", "antibiyot|kan kültür|safra kültür|sıvı resüsit"],
      ["Görüntüleme: ultrason, MRKP, EUS", "ultrason|mrkp|mrcp|manyetik rezonans kolanjiyo|mr kolanjiyo|eus|endoskopik ultrason"],
      ["Taş kaynaklıysa sonrasında kolesistektomi", "kolesistektomi"]
    ]},
  { id: "gc-meme-kitlesi", tr: "Memede kitlenin değerlendirilmesi", en: "Evaluation of a breast mass", cat: "elektif", lvl: 2,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["ACR Appropriateness Criteria Palpable Breast Masses: 2022 Update. J Am Coll Radiol 2023", "https://doi.org/10.1016/j.jacr.2023.02.013"],
          ["Loibl S et al. Early breast cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2024", "https://doi.org/10.1016/j.annonc.2023.11.016"]]
    },
    c: [
      ["!Üçlü değerlendirme: klinik muayene + görüntüleme + doku tanısı", "üçlü değerlendir|üçlü test|triple|üçlü yaklaşım"],
      ["Malignite düşündüren: sert, düzensiz, fikse kitle; cilt çekintisi, portakal kabuğu, spontan tek taraflı tek kanaldan kanlı/seröz meme başı akıntısı", "sert|düzensiz|fikse|çekinti|portakal kabuğu|peau|kanlı akıntı|kanlı meme başı|tek kanal|aksiller lenf|koltuk altı"],
      ["!Genç kadında (30 yaş altı) ilk görüntüleme ultrason", "ultrason|usg|ultrasonografi"],
      ["!40 yaş ve üstünde tanısal mamografi/tomosentez (+ ultrason)", "mamografi|tomosentez|mamogram"],
      ["BI-RADS sınıflaması; BI-RADS 4–5'te biyopsi", "birads|bi rads|bırads"],
      ["Doku tanısı: görüntüleme eşliğinde kalın iğne (tru-cut) biyopsi", "kalın iğne|core|tru cut|trucut"],
      ["Benign nedenler: fibroadenom, kist, fibrokistik değişiklik", "fibroadenom|kist|fibrokistik"],
      ["Malignite tanısında hormon reseptörü ve HER2 durumu", "hormon reseptör|östrojen reseptör|her2|her 2|ki67"]
    ]},
  { id: "gc-eras", tr: "Ameliyat sonrası hızlandırılmış iyileşme (ERAS)", en: "Enhanced recovery after surgery (ERAS)", cat: "periop", lvl: 2,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Gustafsson UO et al. Guidelines for Perioperative Care in Elective Colorectal Surgery: ERAS Society Recommendations 2018. World J Surg 2019", "https://doi.org/10.1007/s00268-018-4844-y"],
          ["Ljungqvist O, Scott M, Fearon KC. Enhanced Recovery After Surgery: A Review. JAMA Surg 2017", "https://pubmed.ncbi.nlm.nih.gov/28097305/"]]
    },
    c: [
      ["!Çok disiplinli, kanıta dayalı perioperatif bakım paketi; stres yanıtını azaltır", "çok disiplin|multidisiplin|multimodal|bakım paketi|stres yanıt|eras|hızlandırılmış iyileş"],
      ["Ameliyat öncesi hasta eğitimi, prehabilitasyon, sigara-alkol bırakma", "eğitim|bilgilendir|prehabilit|danışman"],
      ["!Uzun açlık yok: berrak sıvı ameliyata kadar kısa süre öncesine dek, karbonhidrat yüklemesi", "karbonhidrat yükle|karbonhidratlı içecek|berrak sıvı|aç bırakılmaz|uzun süre aç bırakılmaz|uzun açlık yok|açlık süresi kısa"],
      ["Rutin mekanik barsak hazırlığı, nazogastrik tüp ve dren yok", "barsak hazırlığı yapılmaz|bağırsak hazırlığı yapılmaz|barsak hazırlığı yok|bağırsak hazırlığı yok|barsak hazırlığı önerilmez|bağırsak hazırlığı önerilmez|rutin barsak hazırlığı yapılmaz|nazogastrik konmaz|nazogastrik tüp konmaz|nazogastrik kullanılmaz|dren kullanılmaz|dren konmaz|tüp konmaz"],
      ["Minimal invaziv cerrahi, dengeli sıvı, normotermi", "minimal invaziv|laparoskop|dengeli sıvı|hedefe yönelik sıvı|öv olemi|övolemi|normoterm"],
      ["!Opioid azaltan multimodal analjezi; bulantı-kusma profilaksisi", "opioid azalt|opioid tasarruf|opioidsiz|opioid koruyucu|opioid kullanımını azalt|multimodal analjez|parasetamol|epidural|bulantı kusma profilak|antiemetik"],
      ["!Erken oral beslenme ve erken mobilizasyon", "erken beslen|erken oral|erken mobiliz|erken ayağa|aynı gün ayağa"],
      ["Sonuç: daha kısa hastanede kalış ve daha az komplikasyon; uyumun denetlenmesi", "yatış süresi|hastanede kalış|kalış süresi|uyum|denetim|audit"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "gc-akut-mezenter-iskemi", tr: "Akut mezenter iskemi", en: "Acute mesenteric ischaemia", cat: "akut", lvl: 3,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Bala M et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World J Emerg Surg 2022", "https://doi.org/10.1186/s13017-022-00443-x"],
          ["ESVS 2025 Clinical Practice Guidelines on the Management of Diseases of the Mesenteric and Renal Arteries and Veins. Eur J Vasc Endovasc Surg 2025", "https://doi.org/10.1016/j.ejvs.2025.06.010"]]
    },
    c: [
      ["!Etiyoloji: SMA embolisi (en sık), arteriyel tromboz, venöz tromboz, non-oklüzif (NOMI)", "emboli|tromboz|venöz|non oklüzif|nonoklüzif|nomi|süperior mezenterik|sma"],
      ["!Muayene bulgusuyla orantısız şiddetli karın ağrısı", "orantısız|bulgularla uyumsuz|muayeneyle uyumsuz|şiddetli karın ağrı"],
      ["Risk: atriyal fibrilasyon, ateroskleroz, düşük debi/vazopresör, hiperkoagülabilite", "atriyal fibrilasyon|ateroskleroz|vazopresör|düşük debi|hiperkoagül"],
      ["Laktat ve D-dimer tanıyı koydurmaz; normal laktat dışlamaz", "tanı koydurmaz|laktat dışlamaz|laktat iskemiyi dışlamaz|laktat normal olsa|laktat özgül değil|laktat spesifik değil|laktat nonspesifik"],
      ["!Tanıda ilk tercih BT anjiyografi, gecikmeden", "bt anjiyo|anjiyografi|anjiyo|bete anjiyo|tomografik anjiyo"],
      ["Heparinle antikoagülasyon ve resüsitasyon hemen", "heparin|antikoagül"],
      ["!Revaskülarizasyon (endovasküler ya da açık embolektomi) + nekrotik barsak rezeksiyonu", "revaskülarizasyon|embolektomi|endovasküler|stent|trombektomi|rezeksiyon|nekroz|nekrotik"],
      ["Second-look (ikinci bakış) laparotomi, hasar kontrol", "second look|ikinci bakış|hasar kontrol|damage control"]
    ]},
  { id: "gc-pankreatit-nekroz-cerrahisi", tr: "Nekrotizan pankreatitte girişimsel yaklaşım", en: "Interventional management of necrotising pancreatitis (step-up)", cat: "akut", lvl: 3,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Leppäniemi A et al. 2019 WSES guidelines for the management of severe acute pancreatitis. World J Emerg Surg 2019", "https://doi.org/10.1186/s13017-019-0247-0"],
          ["van Santvoort HC et al. A step-up approach or open necrosectomy for necrotizing pancreatitis (PANTER). N Engl J Med 2010", "https://pubmed.ncbi.nlm.nih.gov/20410514/"]]
    },
    c: [
      ["!Akut nekrotik koleksiyon ve duvarlanmış nekroz (walled-off) ayrımı; revize Atlanta", "nekrotik koleksiyon|duvarlanmış|walled off|walled|won|atlanta"],
      ["!Steril nekrozda girişim gerekmez; enfekte nekroz girişim nedenidir", "steril nekroz|enfekte nekroz|infekte nekroz|enfeksiyon şüphe|gaz kabarc"],
      ["Enfeksiyon ipuçları: klinik kötüleşme, BT'de nekrozda gaz", "klinik kötüleş|bt de gaz|nekroz içinde gaz|gaz görül|koleksiyon içinde gaz|kötüleşen organ yetmez|yeniden ateşlen"],
      ["!Mümkünse girişim geciktirilir, nekrozun duvarlanması beklenir", "geciktir|ertelen|duvarlanma|beklen"],
      ["!Step-up yaklaşım: önce perkütan ya da endoskopik drenaj, gerekirse minimal invaziv nekrozektomi", "step up|basamak|kademeli|perkütan drenaj|endoskopik drenaj|transgastrik|minimal invaziv nekrozektomi|endoskopik nekrozektomi"],
      ["PANTER: step-up, açık nekrozektomiye göre daha az majör komplikasyon/ölüm", "panter|açık nekrozektomi|majör komplikasyon"],
      ["Diğer cerrahi sorunlar: abdominal kompartman sendromu, kanama/psödoanevrizma", "kompartman|intraabdominal basınç|karın içi basınç|psödoanevrizma|psodoanevrizma"],
      ["Biliyer pankreatitte aynı yatışta kolesistektomi (hafif atakta)", "kolesistektomi|aynı yatış|biliyer pankreatit"]
    ]},
  { id: "gc-tiroid-cerrahisi-komplikasyonlari", tr: "Tiroid cerrahisi komplikasyonları", en: "Complications of thyroid surgery", cat: "elektif", lvl: 3,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Patel KN et al. The American Association of Endocrine Surgeons Guidelines for the Definitive Surgical Management of Thyroid Disease in Adults. Ann Surg 2020", "https://pubmed.ncbi.nlm.nih.gov/32079830/"],
          ["Orloff LA et al. American Thyroid Association Statement on Postoperative Hypoparathyroidism: Diagnosis, Prevention, and Management in Adults. Thyroid 2018", "https://doi.org/10.1089/thy.2017.0309"]]
    },
    c: [
      ["!Hipoparatiroidi/hipokalsemi: total tiroidektomi sonrası en sık komplikasyon", "hipoparatiro|hipokalsem|paratiroid|kalsiyum düş"],
      ["Hipokalsemi bulguları: perioral uyuşma, Chvostek, Trousseau, tetani", "chvostek|trousseau|tetani|perioral|parestezi|uyuşma"],
      ["Ameliyat sonrası PTH ölçümüyle risk belirleme; kalsiyum ± kalsitriol", "pth|parathormon|kalsitriol|kalsiyum replas|kalsiyum ver|d vitamini"],
      ["!Rekürren laringeal sinir hasarı: tek taraflı ses kısıklığı, çift taraflı hava yolu tıkanıklığı", "rekürren|rln|ses kısık|disfoni|vokal kord|ses teli|bilateral kord"],
      ["Sinirin görülerek korunması, intraoperatif sinir monitörizasyonu", "monitör|nöromonitör|sinir izlem|siniri görerek|siniri bularak|diseke"],
      ["Süperior laringeal sinir dış dalı: yüksek perdeli ses kaybı; üst pol damarları kapsüle yakın bağlanır", "süperior laringeal|eksternal dal|dış dal|yüksek perde|ses yorgun|üst pol"],
      ["!Boyun hematomu: hava yolu tehdidi, acilen yara açılıp boşaltılır", "hematom|kanama|yarayı aç|dikişleri aç|boşaltıl|dekompres"],
      ["Tiroid fırtınası (hazırlıksız hipertiroidide) nadir ama ölümcül", "tiroid fırtına|tirotoksik kriz|storm"]
    ]},
  { id: "gc-anastomoz-kacagi", tr: "Kolorektal anastomoz kaçağı", en: "Colorectal anastomotic leak", cat: "periop", lvl: 3,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Rahbari NN et al. Definition and grading of anastomotic leakage following anterior resection of the rectum: a proposal by the International Study Group of Rectal Cancer. Surgery 2010", "https://pubmed.ncbi.nlm.nih.gov/20004450/"],
          ["Kingham TP, Pachter HL. Colonic anastomotic leak: risk factors, diagnosis, and treatment. J Am Coll Surg 2009", "https://doi.org/10.1016/j.jamcollsurg.2008.10.015"]]
    },
    c: [
      ["!Tanım: anastomoz hattında duvar defekti, lümen içi-dışı iletişim", "duvar defekt|iletişim|anastomoz hattı|anastomoz kaçağı|kaçak|sızıntı|leak"],
      ["!Risk: düşük (alçak) rektal anastomoz, erkek cinsiyet, obezite, sigara, malnütrisyon, steroid, radyoterapi", "alçak anastomoz|düşük rektal|alçak rektal|aşağı yerleşim|erkek|obez|sigara|malnütrisyon|albümin|steroid|radyoterapi"],
      ["Teknik: iyi kanlanma ve gerginliksiz anastomoz", "kanlanma|perfüzyon|gerginlik|gerilim|tension"],
      ["!Klinik: ateş, taşikardi, karın ağrısı, ileus, drenden fekal gelme; CRP yüksekliği", "taşikardi|fekal|ileus|crp|c reaktif|drenden"],
      ["Tanıda kontrastlı BT (rektal kontrast)", "bilgisayarlı tomografi|tomografi|bete|rektal kontrast|kontrastlı"],
      ["!ISREC derecelendirmesi: A (tedavi değişmez), B (girişim, relaparotomisiz), C (relaparotomi)", "derece a|derece b|derece c|grade a|grade b|grade c|isrec"],
      ["Tedavi: antibiyotik, perkütan drenaj, endoskopik vakum; yaygın peritonitte saptırıcı stoma/Hartmann", "perkütan drenaj|vakum|endosponge|saptırıcı|koruyucu stoma|ileostomi|hartmann|stoma"]
    ]},
  { id: "gc-bariatrik-cerrahi", tr: "Bariatrik (metabolik) cerrahi endikasyonları", en: "Indications for metabolic and bariatric surgery", cat: "elektif", lvl: 3,
    src: {
      k: ["Sabiston Textbook of Surgery, 22. baskı (2025)", "Schwartz's Principles of Surgery, 11. baskı (2019)"],
      m: [["Eisenberg D et al. 2022 ASMBS and IFSO: Indications for Metabolic and Bariatric Surgery. Surg Obes Relat Dis 2022", "https://doi.org/10.1016/j.soard.2022.08.013"],
          ["Arterburn DE et al. Benefits and Risks of Bariatric Surgery in Adults: A Review. JAMA 2020", "https://doi.org/10.1001/jama.2020.12567"]]
    },
    c: [
      ["!ASMBS/IFSO 2022: BKİ 35 ve üstünde, eşlik eden hastalıktan bağımsız önerilir", "hastalıktan bağımsız|komorbiditeden bağımsız|komorbidite olsun olmasın|hastalık olsun olmasın|komorbidite aranmaksızın|komorbidite şartı olmadan|hastalık şartı olmadan|hastalık şartı aranmaz|komorbidite şart değil"],
      ["!BKİ 30–34,9 ve metabolik hastalıkta (tip 2 diyabet) düşünülmeli", "30 ile 34|30 34|otuz ile otuz dört|30 ila 34|30 ve 35 arası|30 35 arası"],
      ["Asyalılarda daha düşük eşikler; 1991 NIH ölçütlerinin yerini aldı", "asya kökenli hastalarda eşik|asyalılarda eşik|asyalılarda daha düşük|asya kökenli hastalarda daha düşük|nih ölçütlerinin yerini|1991 ölçütlerinin yerini|1991 ölçütleri güncellen|nih ölçütleri güncellen"],
      ["Başlıca ameliyatlar: sleeve gastrektomi ve Roux-en-Y gastrik bypass", "sleeve|tüp mide|roux|gastrik bypass|bypass|one anastomosis|mini bypass"],
      ["!Sonuç: kalıcı kilo kaybı, diyabet remisyonu, mortalitede azalma", "kilo kayb|remisyon|mortalite|ölüm oran|sağkalım"],
      ["Çok disiplinli değerlendirme (psikiyatri, diyetisyen, endokrin)", "çok disiplin|multidisiplin|psikiyatri|psikolog|diyetisyen"],
      ["Komplikasyon: kaçak, marjinal ülser, iç fıtık, dumping, vitamin-mineral eksikliği; ömür boyu takviye", "kaçak|marjinal ülser|iç fıtık|dumping|b12|demir eksik|vitamin eksik|takviye|reflü"]
    ]}
]
});
