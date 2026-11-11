/* Nöroloji — Unprompted Tıp konu paketi. Konu id'leri ilk sürümden (Unprompted Nöroloji) beri aynı; değiştirme.
   Seçim: TUS'ta en sık sorulan ve acilde/klinikte hayati olan tablolar (inme, epilepsi, menenjit, baş ağrıları) Kolay;
   TUS'ta ayrıntı istenen nöroimmün, nöromüsküler ve lokalizasyon konuları Orta; nadir ama sık sorulan sendromlar Zor.
   Kaynaklar: Adams & Victor 12. baskı, Bradley & Daroff 8. baskı + güncel kılavuzlar (AHA/ASA 2026, ESO 2023, McDonald 2024, ILAE 2025, ICHD-3, EAN). */
UP.add({ id: "noroloji", subs: {
    vas: "Vasküler",
    epi: "Epilepsi",
    har: "Hareket bozuklukları",
    nmh: "Nöromüsküler ve periferik",
    imm: "Nöroimmün ve enfeksiyon",
    bil: "Bilişsel ve demans",
    agr: "Baş ve yüz ağrısı",
    lok: "Lokalizasyon ve muayene"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "iskemik-inme", tr: "İskemik inme", en: "Ischemic stroke", cat: "vas", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke (AHA/ASA). Stroke 2026", "https://doi.org/10.1161/STR.0000000000000513"],
          ["European Stroke Organisation (ESO) expedited recommendation on tenecteplase for acute ischaemic stroke. Eur Stroke J 2023", "https://doi.org/10.1177/23969873221150022"]]
    },
    c: [
    ["!Damar tıkanmasıyla kan akımının kesilmesi", "beyni besleyen|beyin damar|serebral arter|orta serebral|beyin kanlanma|beyne giden kan|beyin dokusunun kanlan|kanlanmasının kesil"],
    ["!Ani başlangıçlı fokal nörolojik defisit", "fokal nörolojik|fokal defisit|hemipleji|hemiparezi|yüz asimetri|yüzde asimetri|afazi|konuşma bozuk|yüzü kay"],
    ["!Önce BT ile kanamanın dışlanması, MR difüzyon", "kanamayı dışla|kanama dışla|kanamayı ekarte|beyin tomografi|kontrastsız bt|kontrastsız tomografi|mr difüzyon|difüzyon ağırlıklı|difüzyon mr|bt çek|bete"],
    ["!IV trombolitik (alteplaz ya da tenekteplaz), ilk 4,5 saatte", "alteplaz|tenekteplaz|tpa|t pa|4 5 saat|dört buçuk saat|4 5 saatte|dört buçuk"],
    ["Büyük damar tıkanıklığında mekanik trombektomi", "trombektomi|endovasküler tedavi|büyük damar tıkan|büyük damar oklüzyon"],
    ["Penumbra ve 'zaman beyindir'", "penumbra|zaman beyindir|time is brain|kurtarılabilir doku"],
    ["Risk faktörleri: HT, AF, diyabet, sigara", "atriyal fibrilasyon|hipertansiyon|diyabet|sigara|hiperlipidemi|karotis darlığı"],
    ["İkincil korunma: antiagregan/antikoagülan, statin", "ikincil korunma|sekonder korunma|sekonder koruma|ikincil koruma|klopidogrel|antiagregan"]
  ]},
  { id: "tia", tr: "Geçici iskemik atak (TİA)", en: "Transient ischemic attack", cat: "vas", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack (AHA/ASA). Stroke 2021", "https://doi.org/10.1161/STR.0000000000000375"],
          ["Definition and evaluation of transient ischemic attack (AHA/ASA scientific statement). Stroke 2009", "https://doi.org/10.1161/STROKEAHA.108.192218"]]
    },
    c: [
    ["!Geçici fokal defisit, kalıcı infarkt yok", "difüzyon|akut infarkt yok|infarkt olmadan|infarkt olmaz|kalıcı hasar bırakmadan|iz bırakmadan|geçici nörolojik|geçici fokal"],
    ["!İnme habercisi: erken inme riski yüksek", "inme habercisi|inmenin habercisi|haberci|inme riski|inme geçirme|inme olasılı|inme gelişme|erken inme|uyarı inme"],
    ["ABCD2 risk skoru", "abcd"],
    ["Etiyoloji: karotis görüntüleme, ritim izlemi", "karotis doppler|karotis görüntüle|karotis darlı|holter|ritim izlem|ekokardiyo|bt anjiyo|bete anjiyo"],
    ["!Antiplatelet tedavi (gerekirse ikili)", "ikili antiplatelet|klopidogrel|ikili antiagregan|antiplatelet|antiagregan|tikagrelor"],
    ["Risk faktörü kontrolü: statin, kan basıncı", "statin|kan basıncı kontrol|risk faktörü kontrol|risk faktörlerini kontrol|sigarayı bırak|sigaranın bırak"]
  ]},
  { id: "migren", tr: "Migren", en: "Migraine", cat: "agr", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia 2018", "https://doi.org/10.1177/0333102417738202"],
          ["The American Headache Society Consensus Statement: Update on integrating new migraine treatments into clinical practice. Headache 2021", "https://doi.org/10.1111/head.14153"]]
    },
    c: [
    ["!Tekrarlayan ataklarla seyreden primer baş ağrısı", "migren|primer baş ağrı"],
    ["!Tek taraflı, zonklayıcı, 4–72 saat", "zonkla|pulsatil|72 saat|yetmiş iki saat|dört ile yetmiş|4 ile 72"],
    ["!Bulantı-kusma, fotofobi, fonofobi", "fotofobi|fonofobi|ışığa hassas|sese hassas|ışıktan rahatsız|sesten rahatsız"],
    ["Aura (görsel, skintilan skotom)", "aura|skotom|zigzag|skintilan"],
    ["Trigeminovasküler sistem, CGRP, yayılan kortikal depresyon", "trigeminovasküler|cgrp|kalsitonin gen|kortikal yayılan|yayılan kortikal|yayılan depresyon|spreading"],
    ["Akut tedavi: triptan, NSAİİ; gepant, lasmiditan", "triptan|gepant|lasmiditan|ubrojepant|rimejepant"],
    ["Profilaksi: beta bloker, topiramat, amitriptilin, anti-CGRP", "propranolol|topiramat|flunarizin|erenumab|anti cgrp|antı cgrp|galkanezumab|fremanezumab|monoklonal antikor"]
  ]},
  { id: "gerilim-bas-agrisi", tr: "Gerilim tipi baş ağrısı", en: "Tension-type headache", cat: "agr", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia 2018", "https://doi.org/10.1177/0333102417738202"],
          ["EFNS guideline on the treatment of tension-type headache. Eur J Neurol 2010", "https://doi.org/10.1111/j.1468-1331.2010.03070.x"]]
    },
    c: [
    ["!En sık primer baş ağrısı", "gerilim tipi|gerilim baş|tansiyon tipi|en sık görülen primer|en sık primer|en yaygın primer"],
    ["!İki taraflı, bant gibi saran, baskı tarzı", "bant gibi|mengene|baskı tarzı|sıkıştırıcı|sıkıştırır gibi|başını saran|şapka gibi"],
    ["!Hafif-orta şiddet, fiziksel aktiviteyle artmaz", "aktiviteyle artmaz|aktivite ile artmaz|aktiviteyle artmayan|fiziksel aktiviteyle artmaz|rutin fiziksel aktivite"],
    ["Bulantı yok; fotofobi ya da fonofobiden en fazla biri", "bulantı olmaz|bulantı yok|bulantı ya da kusma olmaz|bulantı veya kusma olmaz|en fazla biri"],
    ["Perikraniyal kas hassasiyeti, stres", "perikraniyal|perikranial|kas hassasiyet|boyun kaslar"],
    ["Tedavi: basit analjezik; kronikte amitriptilin", "amitriptilin"],
    ["İlaç aşırı kullanımı baş ağrısı uyarısı", "aşırı kullanım|medication overuse|ilaç aşırı"]
  ]},
  { id: "epilepsi", tr: "Epilepsi", en: "Epilepsy", cat: "epi", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["ILAE official report: A practical clinical definition of epilepsy. Epilepsia 2014", "https://doi.org/10.1111/epi.12550"],
          ["Updated classification of epileptic seizures: Position paper of the ILAE. Epilepsia 2025", "https://doi.org/10.1111/epi.18338"]]
    },
    c: [
    ["!Provoke olmayan en az iki nöbet (ya da yüksek tekrar riski)", "provoke olmayan|provoke edilmemiş|nedensiz nöbet|en az iki nöbet|iki provoke|tekrar riski"],
    ["!Nöbet: aşırı ve senkron nöronal deşarj", "senkron|nöronal deşarj|aşırı deşarj|anormal elektrik|elektriksel deşarj"],
    ["Sınıflama (ILAE 2025): fokal, jeneralize, bilinmeyen", "sınıflandırılamayan|fokal nöbet|jeneralize nöbet|fokal jeneralize|bilinmeyen başlangıç|bilinmeyen"],
    ["Tanı: EEG ve MR", "eeg|elektroensefalo"],
    ["!Antinöbet ilaçlar", "antinöbet|antiepilepti|lamotrijin|karbamazepin|okskarbazepin|levetirasetam"],
    ["İlaca dirençli epilepsi: cerrahi, ketojenik diyet, VNS", "ilaca dirençli|epilepsi cerrahi|ketojenik|vagus sinir|vagal sinir|vns"],
    ["Tetikleyiciler: uykusuzluk, alkol, ilaç bırakma", "uykusuzluk|ilacı bırak|ilacı aniden|ilaç uyumsuz|fotik uyar"]
  ]},
  { id: "bell-paralizisi", tr: "Bell paralizisi", en: "Bell palsy", cat: "nmh", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Clinical practice guideline: Bell's palsy (AAO-HNSF). Otolaryngol Head Neck Surg 2013", "https://doi.org/10.1177/0194599813505967"],
          ["Early treatment with prednisolone or acyclovir in Bell's palsy. N Engl J Med 2007", "https://doi.org/10.1056/NEJMoa072006"]]
    },
    c: [
    ["!İdiyopatik akut periferik fasiyal sinir felci", "fasiyal sinir|fasial sinir|yüz siniri|yedinci kraniyal|yedinci kranial|7 kranial|periferik fasiyal"],
    ["!Alın dahil yüzün yarısı tutulur (santral felçte alın korunur)", "alın dahil|alın korunur|alnı koru|kaşını kaldır|kaş kaldır|alın tutul"],
    ["Göz kapatamama, Bell fenomeni", "bell fenomen|göz kapat|gözünü kapat|lagoftalmi"],
    ["Tat kaybı, hiperakuzi, kulak arkası ağrı", "tat kayb|hiperakuzi|stapedius|kulak arkası"],
    ["Herpes simpleks / viral reaktivasyon", "herpes|hsv|viral reaktivasyon"],
    ["!İlk 72 saatte kortikosteroid", "72 saat|yetmiş iki saat|prednizolon|prednizon"],
    ["Göz koruması, iyi prognoz", "suni gözyaşı|göz bandı|kornea koru|göz koru"]
  ]},
  { id: "parkinson", tr: "Parkinson hastalığı", en: "Parkinson disease", cat: "har", lvl: 1,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["MDS clinical diagnostic criteria for Parkinson's disease. Mov Disord 2015", "https://doi.org/10.1002/mds.26424"],
          ["Parkinson's disease (Seminar). Lancet 2021", "https://doi.org/10.1016/S0140-6736(21)00218-X"]]
    },
    c: [
    ["!Substantia nigra dopaminerjik nöron kaybı", "substantia nigra|nigra|dopaminerjik nöron"],
    ["!İstirahat tremoru, rijidite, bradikinezi", "bradikinezi|istirahat tremoru|istirahatte titreme|dinlenirken titreme|rijidite|dişli çark|para sayar"],
    ["Asimetrik başlangıç, postüral instabilite", "asimetrik başla|başlangıç asimetrik|başlangıç tipik olarak asimetrik|tek taraflı başla|postüral instabilite"],
    ["Lewy cisimcikleri, alfa-sinüklein", "lewy|sinüklein|synuclein"],
    ["!Levodopa, dopamin agonistleri, MAO-B inhibitörleri", "karbidopa|benserazid|pramipeksol|ropinirol|rasajilin|selejilin|mao b"],
    ["Motor dışı bulgular: anosmi, REM uyku davranış bozukluğu, kabızlık", "anosmi|koku kayb|kabızlık|rem uyku"],
    ["İleri evre: dalgalanmalar, derin beyin stimülasyonu", "derin beyin stimülasyon|dbs|on off|motor dalgalan|diskinezi"]
  ]},
  { id: "alzheimer", tr: "Alzheimer hastalığı", en: "Alzheimer disease", cat: "bil", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Revised criteria for diagnosis and staging of Alzheimer's disease: Alzheimer's Association Workgroup. Alzheimers Dement 2024", "https://doi.org/10.1002/alz.13859"],
          ["Lecanemab in early Alzheimer's disease (CLARITY AD). N Engl J Med 2023", "https://doi.org/10.1056/NEJMoa2212948"]]
    },
    c: [
    ["!En sık demans nedeni, nörodejeneratif", "en sık demans|demansın en sık|en yaygın demans|alzheimer"],
    ["!Erken epizodik bellek kaybı, hipokampus", "epizodik bellek|hipokamp|yakın bellek|yakın zamanda olanları|bellek kaybı|unutkanlık"],
    ["!Amiloid-beta plakları ve tau yumakları", "amiloid beta|amiloid plak|nörofibriler|yumak"],
    ["Risk: yaş, APOE ε4", "apoe|apolipoprotein"],
    ["Tanı: bilişsel test, MR atrofisi, amiloid/tau biyobelirteçleri (PET, BOS, plazma p-tau217)", "mmse|moca|mini mental|p tau|ptau|amiloid pet|biyobelirteç|biyomarker"],
    ["Tedavi: kolinesteraz inhibitörü, memantin; erken evrede anti-amiloid antikorlar (ARIA riski)", "donepezil|galantamin|memantin|lekanemab|lecanemab|donanemab|anti amiloid|aria"]
  ]},
  { id: "glasgow-koma-skalasi", tr: "Glasgow Koma Skalası", en: "Glasgow Coma Scale", cat: "lok", lvl: 1,
    src: {
      k: ["Plum and Posner's Diagnosis and Treatment of Stupor and Coma, 5. baskı (2019)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Assessment of coma and impaired consciousness. A practical scale. Lancet 1974", "https://doi.org/10.1016/S0140-6736(74)91639-0"],
          ["The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol 2014", "https://doi.org/10.1016/S1474-4422(14)70120-6"]]
    },
    c: [
    ["!Bilinç düzeyini puanlayan ölçek", "glasgow|bilinç düzey"],
    ["!Göz açma (4), sözel yanıt (5), motor yanıt (6)", "göz açma|sözel yanıt|verbal yanıt|motor yanıt"],
    ["!Puan aralığı 3–15", "3 ile 15|üç ile on beş|3 15|on beş|en düşük üç|en düşük 3"],
    ["8 ve altı: ağır, hava yolu koruması/entübasyon", "sekiz ve altı|8 ve altı|sekizin altı|sekiz ve altında|8 ve altında|sekiz ve altındaki|entübasyon düşün|entübe edilir"],
    ["Hafif 13–15, orta 9–12", "on üç ile on beş|13 ile 15|dokuz ile on iki|9 ile 12"],
    ["Kafa travmasında ve seri izlemde kullanım", "seri izlem|kafa travma|travmada|seri takip"]
  ]},
  { id: "bakteriyel-menenjit", tr: "Bakteriyel menenjit", en: "Bacterial meningitis", cat: "imm", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect 2016", "https://doi.org/10.1016/j.cmi.2016.01.007"],
          ["Community-acquired bacterial meningitis (Seminar). Lancet 2021", "https://doi.org/10.1016/S0140-6736(21)00883-7"]]
    },
    c: [
    ["!Meninkslerin enfeksiyonu", "menenks|meninks|meninj|beyin zarı|beyin zarlar|zarların"],
    ["!Ateş, ense sertliği, bilinç değişikliği, baş ağrısı", "ense sert|ense sertliği"],
    ["Kernig ve Brudzinski bulguları", "kernig|brudzinski"],
    ["Etkenler: pnömokok, meningokok, Listeria", "pnömokok|pneumoniae|meningokok|meningitidis|neisseria|listeria"],
    ["Lomber ponksiyon: nötrofilik pleositoz, düşük glukoz, yüksek protein", "lomber ponksiyon|beyin omurilik sıvı|pleositoz|bos|düşük glukoz"],
    ["!Gecikmeden ampirik antibiyotik + deksametazon", "deksametazon|seftriakson|vankomisin|ampirik antibiyotik"],
    ["Peteşiyal döküntü, temaslılara profilaksi", "peteşi|purpur|rifampisin|kemoprofilaksi|temaslı"]
  ]},
  { id: "karpal-tunel", tr: "Karpal tünel sendromu", en: "Carpal tunnel syndrome", cat: "nmh", lvl: 1,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Carpal tunnel syndrome: clinical features, diagnosis, and management. Lancet Neurol 2016", "https://doi.org/10.1016/S1474-4422(16)30231-9"],
          ["Management of Carpal Tunnel Syndrome Evidence-Based Clinical Practice Guideline (AAOS). 2024", "https://aaos.org/cts2cpg"]]
    },
    c: [
    ["!Median sinirin el bileğinde sıkışması", "median sinir|medyan sinir|el bileğinde sıkış|el bileği|karpal"],
    ["!İlk üç parmakta uyuşma-karıncalanma, gece artar", "ilk üç|başparmak işaret|işaret parmağı|orta parmak|üç buçuk parmak|gece artar|geceleri art|elini salla"],
    ["Tenar atrofi, abduktor pollicis brevis zayıflığı", "tenar|abduktor pollicis"],
    ["Tinel ve Phalen testleri", "tinel|phalen|falen"],
    ["!Tanı: sinir iletim çalışması / EMG", "sinir iletim|emg|elektromiyo"],
    ["Risk: gebelik, hipotiroidi, diyabet, tekrarlayıcı el kullanımı", "gebelik|hipotiroid|akromegali|romatoid artrit"],
    ["Tedavi: gece ateli, steroid enjeksiyonu (kısa süreli yarar), cerrahi gevşetme", "gece ateli|atel|splint|transvers karpal|cerrahi gevşet|karpal tünel gevşet"]
  ]},
  { id: "esansiyel-tremor", tr: "Esansiyel tremor", en: "Essential tremor", cat: "har", lvl: 1,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Consensus statement on the classification of tremors, from the task force on tremor of the International Parkinson and Movement Disorder Society. Mov Disord 2018", "https://doi.org/10.1002/mds.27121"],
          ["Evidence-based guideline update: Treatment of essential tremor (AAN). Neurology 2011", "https://doi.org/10.1212/WNL.0b013e318236f0fd"]]
    },
    c: [
    ["!Postüral ve kinetik (aksiyon) tremor", "postüral|kinetik|aksiyon tremor|kollar öne|bardak|yazı yaz"],
    ["!En sık hareket bozukluğu, iki taraflı eller", "en sık hareket bozuk|en sık tremor|en yaygın hareket bozuk|ellerde başla|iki taraflı ve el"],
    ["Baş ve ses tremoru", "baş titre|ses titre|vokal tremor|başta titre"],
    ["Alkolle geçici düzelme", "alkol"],
    ["Aile öyküsü sık; ailelerde otozomal dominant geçiş", "aile öykü|ailesel|otozomal dominant"],
    ["!Parkinson tremorundan ayrımı", "parkinson tremor|parkinsondan ayır|istirahat tremor|parkinson'da istirahat"],
    ["Tedavi: propranolol, primidon; dirençte DBS/odaklı ultrason", "propranolol|primidon|vim|odaklanmış ultrason|odaklı ultrason"]
  ]},
  { id: "bppv", tr: "Benign paroksismal pozisyonel vertigo", en: "Benign paroxysmal positional vertigo", cat: "lok", lvl: 1,
    src: {
      k: ["Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update) (AAO-HNSF). Otolaryngol Head Neck Surg 2017", "https://doi.org/10.1177/0194599816689667"],
          ["Benign paroxysmal positional vertigo: Diagnostic criteria (Bárány Society). J Vestib Res 2015", "https://doi.org/10.3233/VES-150553"]]
    },
    c: [
    ["!Baş pozisyonuyla tetiklenen saniyeler süren vertigo", "pozisyonel|baş pozisyon|yatağa yatar|yatakta dön|saniyeler süren|saniye süren"],
    ["!Otokonyaların kanala düşmesi, en sık posterior kanal", "otokon|otolit|kristal|kanalit|posterior kanal|semisirküler|yarım daire"],
    ["!Tanı: Dix-Hallpike, torsiyonel nistagmus", "dix|hallpike|torsiyonel"],
    ["Tedavi: Epley repozisyon manevrası", "epley|repozisyon"],
    ["En sık periferik vertigo, işitme kaybı yok", "periferik vertigo|işitme kaybı"],
    ["Santral nedenlerden ayrım (HINTS, nörolojik bulgu)", "hints|santral neden|serebellar inme|santral vertigo"]
  ]},
  { id: "lomber-radikulopati", tr: "Lomber radikülopati", en: "Lumbar radiculopathy", cat: "nmh", lvl: 1,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["An evidence-based clinical guideline for the diagnosis and treatment of lumbar disc herniation with radiculopathy (NASS). Spine J 2014", "https://doi.org/10.1016/j.spinee.2013.08.003"],
          ["Sciatica. N Engl J Med 2015", "https://doi.org/10.1056/NEJMra1410151"]]
    },
    c: [
    ["!Sinir kökü basısı, en sık L4–L5 / L5–S1 disk hernisi (L5, S1 kökü)", "disk herni|disk fıtığı|bel fıtığı|l5 s1|l4 l5|kök bası|kökünün bası"],
    ["!Dermatomal, bacağa yayılan ağrı (siyatalji)", "siyatik|siyatalji|bacağa yayılan|dermatom"],
    ["Düz bacak kaldırma (Lasègue) testi", "lasegue|laseg|laseque|düz bacak"],
    ["Kök bulguları: S1 Aşil refleksi, L4 patella, L5 başparmak dorsifleksiyonu", "aşil refleks|patella refleks|başparmağının dorsifleksiyon|başparmak dorsifleksiyon|plantar fleksiyon"],
    ["!Kırmızı bayrak: kauda ekina (idrar retansiyonu, eyer anestezisi)", "kauda|cauda|eyer anestez|eyer tarzı|sfinkter"],
    ["Çoğu konservatif tedaviyle düzelir; gerekirse MR ve cerrahi", "konservatif|aktif kalma|cerrahi dekompresyon"]
  ]},

  /* ====================== ORTA ====================== */
  { id: "multipl-skleroz", tr: "Multipl skleroz", en: "Multiple sclerosis", cat: "imm", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Diagnosis of multiple sclerosis: 2024 revisions of the McDonald criteria. Lancet Neurol 2025", "https://doi.org/10.1016/S1474-4422(25)00270-4"],
          ["Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria. Lancet Neurol 2018", "https://doi.org/10.1016/S1474-4422(17)30470-2"]]
    },
    c: [
    ["!Santral sinir sisteminin kronik immün aracılı demiyelinizan hastalığı", "demiyeliniz|demyelin|miyelin"],
    ["Genç erişkin, kadınlarda daha sık", "genç erişkin|kadınlarda daha sık|genç kadın"],
    ["!McDonald 2024: yerde yayılım (optik sinir 5. bölge); zamanda yayılım artık her durumda gerekmez", "mcdonald|mc donald|yerde yayılım|zamanda yayılım"],
    ["Klinik: optik nörit, INO, Lhermitte, Uhthoff", "optik nörit|internükleer|lhermitte|uhthoff"],
    ["!MR: periventriküler, jukstakortikal, infratentoriyal, spinal lezyonlar", "periventrikül|jukstakortik|infratentor|dawson"],
    ["BOS'ta oligoklonal bant ya da kappa serbest hafif zincir; MR'da santral ven işareti", "oligoklonal|kappa serbest|hafif zincir|santral ven|merkezi ven|paramanyetik"],
    ["Atak: yüksek doz metilprednizolon; hastalık modifiye edici tedaviler", "metilprednizolon|interferon|glatiramer|okrelizumab|natalizumab|fingolimod|ofatumumab|hastalık modifiye"],
    ["Formlar: ataklarla seyreden, sekonder/primer progresif", "relapsing|atak remisyon|sekonder progresif|primer progresif"]
  ]},
  { id: "guillain-barre", tr: "Guillain-Barré sendromu", en: "Guillain-Barre syndrome", cat: "nmh", lvl: 2,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["European Academy of Neurology/Peripheral Nerve Society Guideline on diagnosis and treatment of Guillain-Barré syndrome. Eur J Neurol 2023", "https://doi.org/10.1111/ene.16073"],
          ["Diagnosis and management of Guillain-Barré syndrome in ten steps. Nat Rev Neurol 2019", "https://doi.org/10.1038/s41582-019-0250-9"]]
    },
    c: [
    ["!Akut inflamatuvar demiyelinizan poliradikülonöropati", "poliradikülo|poliradikül|aidp|demiyelinizan polinöropati"],
    ["!Asendan simetrik güçsüzlük", "asendan|yükselen güçsüz|bacaklardan başla|aşağıdan yukarı|yukarı doğru çıkan"],
    ["!Arefleksi", "arefleksi|reflekslerin kayb|refleks kayb|hiporefleksi"],
    ["Öncül enfeksiyon (Campylobacter jejuni)", "kampilobakter|campylobacter"],
    ["BOS'ta albüminositolojik disosiasyon", "albüminositolojik|albumino|disosiasyon|dissosiasyon"],
    ["Solunum yetmezliği ve otonomik instabilite riski", "vital kapasite|otonomik instabilite|solunum yetmezli|mekanik ventilasyon"],
    ["Tedavi: IVIG veya plazmaferez", "ivig|immünglobulin|immunoglobulin|plazmaferez|plazma değişim"],
    ["Varyantlar: AMAN, Miller Fisher", "aman|aksonal varyant|miller fisher"]
  ]},
  { id: "miyastenia-gravis", tr: "Miyastenia gravis", en: "Myasthenia gravis", cat: "nmh", lvl: 2,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 2021", "https://doi.org/10.1212/WNL.0000000000011124"],
          ["Myasthenia gravis. N Engl J Med 2016", "https://doi.org/10.1056/NEJMra1602678"]]
    },
    c: [
    ["!Postsinaptik asetilkolin reseptörüne karşı otoantikor", "asetilkolin reseptör|achr|musk|postsinaptik"],
    ["!Yorulabilen, gün içinde artan güçsüzlük", "yorulabilen|yorulabilir|gün sonunda|akşam art|dinlenince düzel|egzersizle art|fluktu"],
    ["!Oküler bulgular: pitoz, diplopi", "pitoz|göz kapağı düş|diplopi|çift görme"],
    ["Bulber tutulum ve miyastenik kriz", "miyastenik kriz|bulber"],
    ["Timoma / timus hiperplazisi", "timus|timoma|timektomi"],
    ["Tanı: antikor, tekrarlayıcı sinir uyarımı (dekreman), tek lif EMG, buz testi", "dekreman|tekrarlayıcı sinir|repetitif|tek lif|buz testi|edrofonyum|tensilon"],
    ["Tedavi: piridostigmin, immünsüpresyon, IVIG/plazmaferez, timektomi", "piridostigmin|mestinon|azatioprin|ekulizumab|eculizumab|efgartigimod|rozanoliksizumab|zilukoplan"]
  ]},
  { id: "status-epileptikus", tr: "Status epileptikus", en: "Status epilepticus", cat: "epi", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["A definition and classification of status epilepticus — Report of the ILAE Task Force. Epilepsia 2015", "https://doi.org/10.1111/epi.13121"],
          ["Evidence-based guideline: Treatment of convulsive status epilepticus in children and adults (AES). Epilepsy Curr 2016", "https://doi.org/10.5698/1535-7597-16.1.48"]]
    },
    c: [
    ["!5 dakikayı aşan nöbet ya da arada bilinç düzelmeden tekrarlayan nöbetler", "5 dakika|beş dakika|bilinç düzelmeden|bilinç açılmadan|arasında bilinç"],
    ["!Nörolojik acil: süre uzadıkça kalıcı hasar ve mortalite", "30 dakika|otuz dakika|kalıcı nöron hasar|nöron hasarı"],
    ["İlk adımlar: hava yolu, glukoz, tiamin", "kan şekeri|glukoz|tiamin|hava yolu"],
    ["!Birinci basamak: benzodiazepin", "benzodiazepin|lorazepam|midazolam|diazepam"],
    ["İkinci basamak: levetirasetam, valproat, fosfenitoin", "fosfenitoin|ikinci basamak|lakozamid"],
    ["Refrakter: anestezik infüzyon, sürekli EEG, yoğun bakım", "refrakter|propofol|tiyopental|ketamin|anestezik infüzyon|sürekli eeg"],
    ["Nonkonvülzif status", "nonkonvülzif|konvülzif olmayan|non konvülzif"]
  ]},
  { id: "subaraknoid-kanama", tr: "Subaraknoid kanama", en: "Subarachnoid hemorrhage", cat: "vas", lvl: 2,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage (AHA/ASA). Stroke 2023", "https://doi.org/10.1161/STR.0000000000000436"],
          ["Spontaneous subarachnoid haemorrhage (Seminar). Lancet 2022", "https://doi.org/10.1016/S0140-6736(22)00938-2"]]
    },
    c: [
    ["!En sık nontravmatik neden: anevrizma rüptürü", "anevrizma|willis"],
    ["!Hayatının en şiddetli, ani baş ağrısı", "hayatının en|en şiddetli baş|gök gürültü|thunderclap|şimşek"],
    ["Ense sertliği, kusma, bilinç kaybı", "ense sert|meningeal"],
    ["!Tanı: BT; negatifse LP'de ksantokromi", "ksantokrom"],
    ["BT anjiyografi / DSA", "bt anjiyo|bete anjiyo|dsa|dijital subtraksiyon|anjiyografi"],
    ["Anevrizmanın klip ya da koil ile kapatılması", "koil|coil|klip"],
    ["Komplikasyonlar: vazospazm (nimodipin), hidrosefali, yeniden kanama, hiponatremi", "vazospazm|nimodipin|hidrosefali|yeniden kanama|tekrar kanama|hiponatremi"],
    ["Derecelendirme: Hunt-Hess, WFNS, Fisher", "hunt|hess|fisher|wfns"]
  ]},
  { id: "brown-sequard", tr: "Brown-Séquard sendromu", en: "Brown-Sequard syndrome", cat: "lok", lvl: 2,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Incidence and outcomes of spinal cord injury clinical syndromes. J Spinal Cord Med 2007", "https://doi.org/10.1080/10790268.2007.11753929"],
          ["Brown-Séquard Syndrome. StatPearls (NCBI Bookshelf)", "https://www.ncbi.nlm.nih.gov/books/NBK538135/"]]
    },
    c: [
    ["!Omuriliğin yarım kesisi (hemiseksiyon)", "hemiseksiyon|yarım kesi|yarı kesi|hemikord"],
    ["!Aynı tarafta motor güçsüzlük (kortikospinal yol)", "aynı tarafta motor|aynı tarafta güçsüz|ipsilateral güçsüz|ipsilateral motor|kortikospinal"],
    ["!Aynı tarafta derin duyu ve vibrasyon kaybı (dorsal kolon)", "dorsal kolon|arka kordon|posterior kolon|vibrasyon|pozisyon duyu"],
    ["!Karşı tarafta ağrı ve ısı duyusu kaybı (spinotalamik)", "karşı tarafta ağrı|kontralateral ağrı|ağrı ve ısı|ağrı ısı|spinotalamik"],
    ["Spinotalamik lifler 1–2 segment içinde çaprazlaşır", "çaprazla|segment içinde|karşı tarafa geç|dekusasyon"],
    ["Nedenler: penetran travma, tümör, disk, MS", "bıçak|penetran|ateşli silah"],
    ["Prognoz omurilik sendromları içinde görece iyi", "prognoz"]
  ]},
  { id: "horner", tr: "Horner sendromu", en: "Horner syndrome", cat: "lok", lvl: 2,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Horner syndrome: clinical perspectives. Eye Brain 2015", "https://doi.org/10.2147/EB.S63633"],
          ["Adult Horner's syndrome: a combined clinical, pharmacological, and imaging algorithm. Eye 2013", "https://doi.org/10.1038/eye.2012.281"]]
    },
    c: [
    ["!Okülosempatik yolun kesintisi", "okülosempatik|sempatik yol|sempatik lif"],
    ["!Pitoz, miyozis, anhidroz", "miyozis|myozis|anhidroz|terleme kayb"],
    ["!Üç nöronlu yol: hipotalamus → C8–T2 → süperior servikal ganglion", "hipotalamus|siliospinal|budge|servikal ganglion|üç nöron|preganglion|postganglion"],
    ["Nedenler: Pancoast tümörü, karotis diseksiyonu, Wallenberg", "pancoast|karotis diseksiyon|wallenberg|lateral medüller"],
    ["Karanlıkta artan anizokori, dilatasyon gecikmesi", "anizokori|dilatasyon gecikme"],
    ["Farmakolojik test: apraklonidin / kokain damla", "apraklonidin|kokain|hidroksiamfetamin"]
  ]},
  { id: "wernicke", tr: "Wernicke ensefalopatisi", en: "Wernicke encephalopathy", cat: "bil", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol 2010", "https://doi.org/10.1111/j.1468-1331.2010.03153.x"],
          ["Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol 2007", "https://pubmed.ncbi.nlm.nih.gov/17434099/"]]
    },
    c: [
    ["!Tiamin (B1) eksikliği", "tiamin|b1 vitamin|b 1 vitamin"],
    ["!Konfüzyon, oftalmopleji/nistagmus, ataksi", "oftalmopleji|konfüzyon|ataksi"],
    ["Risk: alkol, malnütrisyon, hiperemezis, bariatrik cerrahi", "alkol|malnütris|hiperemez|bariatrik"],
    ["!Glukozdan önce tiamin verilmeli", "glukozdan önce|şekerden önce|glukoz vermeden|önce tiamin|karbonhidrattan önce|glukozdan once"],
    ["MR: mamiller cisimler, medial talamus, periakuaduktal", "mamiller|medial talamus|periakuadukt"],
    ["Korsakoff sendromuna ilerleme: amnezi, konfabulasyon", "korsakoff|konfabul"],
    ["Tedavi: yüksek doz IV tiamin", "intravenöz tiamin|iv tiamin|parenteral tiamin|yüksek doz tiamin|yüksek doz intravenöz|parenteral tedavi"]
  ]},
  { id: "huntington", tr: "Huntington hastalığı", en: "Huntington disease", cat: "har", lvl: 2,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Huntington disease (Primer). Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.5"],
          ["Huntington's disease: a clinical review. Eur J Neurol 2018", "https://doi.org/10.1111/ene.13413"]]
    },
    c: [
    ["!Otozomal dominant, HTT geninde CAG tekrar genişlemesi", "cag|trinükleotid|huntingtin|htt"],
    ["Antisipasyon (özellikle babadan geçişte)", "antisipasyon|babadan geç"],
    ["!Kore", "kore|dans eder"],
    ["!Psikiyatrik ve bilişsel bozulma", "psikiyatrik ve bilişsel|irritabil|intihar|davranış değişik"],
    ["Kaudat nükleus atrofisi", "kaudat"],
    ["Semptomatik tedavi: tetrabenazin, antipsikotik; genetik danışmanlık", "tetrabenazin|deutetrabenazin|vmat|genetik danışma"]
  ]},
  { id: "nph", tr: "Normal basınçlı hidrosefali", en: "Normal pressure hydrocephalus", cat: "bil", lvl: 2,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Guidelines for management of idiopathic normal pressure hydrocephalus (third edition). Neurol Med Chir (Tokyo) 2021", "https://doi.org/10.2176/nmc.st.2020-0292"],
          ["Diagnosing idiopathic normal-pressure hydrocephalus (International iNPH Guidelines). Neurosurgery 2005", "https://doi.org/10.1227/01.NEU.0000168185.29659.C5"]]
    },
    c: [
    ["!Triad: yürüme bozukluğu, idrar inkontinansı, demans", "triad|üçlü|manyetik yürüyüş|yapışık"],
    ["!Ventrikül genişlemesi, normal açılış basıncı", "açılış basıncı|ventrikül genişle|ventriküllerde orantısız|ventriküler genişle"],
    ["Görüntüleme: Evans indeksi > 0,3, DESH", "evans|desh|0 3"],
    ["Tap testi / lomber drenajla düzelme", "tap test|lomber drenaj|hacimli bos|bos boşaltım"],
    ["!Tedavi: ventrikülo-peritoneal şant", "şant|ventrikülo|peritoneal"],
    ["Geri döndürülebilir demans nedeni", "geri döndürül|tedavi edilebilir demans|reversibl|geri dönüşlü"]
  ]},
  { id: "kume-bas-agrisi", tr: "Küme baş ağrısı", en: "Cluster headache", cat: "agr", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["European Academy of Neurology guidelines on the treatment of cluster headache. Eur J Neurol 2023", "https://doi.org/10.1111/ene.15956"],
          ["The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia 2018", "https://doi.org/10.1177/0333102417738202"]]
    },
    c: [
    ["!Trigeminal otonomik sefalji", "trigeminal otonomik|otonomik sefalji"],
    ["!Tek taraflı orbital/temporal çok şiddetli ağrı, 15–180 dk", "göz çevresi|göz arkası|orbital|yüz seksen|180 dakika"],
    ["!Aynı tarafta otonomik bulgular: gözyaşı, burun akıntısı, kızarıklık", "lakrimasyon|gözyaşı|burun akıntı|rinore|konjonktival"],
    ["Huzursuzluk, ajitasyon (migrenden farkı)", "huzursuz|ajitasyon|yerinde duramaz|volta"],
    ["Sirkadiyen düzen, küme dönemleri, genç erkek", "sirkadiyen|aynı saatte|küme dönem"],
    ["Akut: %100 oksijen, SC sumatriptan", "yüzde yüz oksijen|%100 oksijen|yüksek akımlı oksijen|oksijen"],
    ["Profilaksi: verapamil; geçiş tedavisi steroid, büyük oksipital sinir bloğu", "verapamil|lityum|oksipital sinir|galkanezumab"]
  ]},
  { id: "als", tr: "Amiyotrofik lateral skleroz", en: "Amyotrophic lateral sclerosis", cat: "nmh", lvl: 2,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["European Academy of Neurology (EAN) guideline on the management of amyotrophic lateral sclerosis. Eur J Neurol 2024", "https://doi.org/10.1111/ene.16264"],
          ["Amyotrophic lateral sclerosis (Seminar). Lancet 2022", "https://doi.org/10.1016/S0140-6736(22)01272-7"]]
    },
    c: [
    ["!Üst ve alt motor nöron dejenerasyonu", "üst motor nöron|alt motor nöron|üst ve alt motor|motor nöron"],
    ["!Spastisite, hiperrefleksi, Babinski + atrofi, fasikülasyon", "fasikülasyon|spastisite|babinski|hiperrefleksi"],
    ["!Duyu, göz hareketleri ve sfinkterler korunur", "duyu korun|göz hareketleri ve sfinkter|sfinkter fonksiyon|duyu kaybı olmaz|duyu etkilenmez"],
    ["Bulber tutulum, solunum yetmezliği", "bulber|yutma güçlü|dizartri|solunum kasları"],
    ["Genetik: SOD1, C9orf72; FTD ile ilişki", "sod1|c9orf|c9orf72|frontotemporal|tdp"],
    ["Tanı: EMG'de yaygın denervasyon", "denervasyon|el escorial|gold coast"],
    ["Tedavi: riluzol; SOD1 mutasyonunda tofersen; NIV, PEG, multidisipliner bakım", "riluzol|tofersen|edaravon|peg|gastrostomi|noninvaziv ventilasyon|niv"]
  ]},
  { id: "lewy-demans", tr: "Lewy cisimcikli demans", en: "Dementia with Lewy bodies", cat: "bil", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Diagnosis and management of dementia with Lewy bodies: Fourth consensus report of the DLB Consortium. Neurology 2017", "https://doi.org/10.1212/WNL.0000000000004058"],
          ["Revised criteria for diagnosis and staging of Alzheimer's disease (ayırıcı tanı için). Alzheimers Dement 2024", "https://doi.org/10.1002/alz.13859"]]
    },
    c: [
    ["!Alfa-sinüklein, kortikal Lewy cisimcikleri", "lewy|sinüklein"],
    ["!Dalgalanan bilişsel durum ve dikkat", "dalgalanma|dalgalanan|fluktu"],
    ["!Tekrarlayan ayrıntılı görsel halüsinasyonlar", "görsel halüsin|halüsinasyon"],
    ["Parkinsonizm", "parkinsonizm"],
    ["REM uyku davranış bozukluğu", "rem uyku|rüyasını canlandır|uyku davranış"],
    ["Nöroleptik duyarlılığı", "nöroleptik duyarlı|nöroleptik|haloperidol"],
    ["Bir yıl kuralı (Parkinson demansından ayrım)", "bir yıl kural|1 yıl kural|parkinson hastalığı demans|ilk bir yıl"],
    ["DaTscan; tedavide kolinesteraz inhibitörü", "datscan|dopamin taşıyıcı|mibg"]
  ]},
  { id: "trigeminal-nevralji", tr: "Trigeminal nevralji", en: "Trigeminal neuralgia", cat: "agr", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["European Academy of Neurology guideline on trigeminal neuralgia. Eur J Neurol 2019", "https://doi.org/10.1111/ene.13950"],
          ["Trigeminal neuralgia: New classification and diagnostic grading for practice and research. Neurology 2016", "https://doi.org/10.1212/WNL.0000000000002840"]]
    },
    c: [
    ["!Trigeminal dağılımda saniyeler süren elektrik çarpması gibi ağrı", "elektrik çarp|bıçak saplan|saniyeler süren|paroksismal yüz|v2|v3"],
    ["!Tetikleyiciler: çiğneme, konuşma, diş fırçalama, dokunma", "çiğneme|diş fırçala|yüz yıka|rüzgar|tetikleyici uyaran"],
    ["Neden: nörovasküler kompresyon (süperior serebellar arter)", "nörovasküler kompresyon|süperior serebellar|damar bası"],
    ["Genç veya iki taraflı olguda MS düşün", "multipl skleroz|sekonder neden"],
    ["!İlk seçenek: karbamazepin (okskarbazepin)", "karbamazepin|okskarbazepin"],
    ["Dirençte: mikrovasküler dekompresyon, radyocerrahi, perkütan girişim", "mikrovasküler dekompresyon|jannetta|janetta|gamma knife|radyocerrahi|perkütan"]
  ]},

  /* ====================== ZOR ====================== */
  { id: "cadasil", tr: "CADASIL", en: "CADASIL", cat: "vas", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Monogenic cerebral small-vessel diseases: diagnosis and therapy. Consensus recommendations of the European Academy of Neurology. Eur J Neurol 2020", "https://doi.org/10.1111/ene.14183"],
          ["CADASIL. Lancet Neurol 2009", "https://doi.org/10.1016/S1474-4422(09)70127-9"]]
    },
    c: [
    ["!NOTCH3 mutasyonu, otozomal dominant", "notch"],
    ["!Küçük damar arteriyopatisi: subkortikal infarktlar, lökoensefalopati", "küçük damar|arteriyopati|lökoensefalopati|lakün"],
    ["Auralı migren (sık ilk bulgu)", "auralı migren"],
    ["Bilişsel bozulma, psikiyatrik bulgular", "apati|subkortikal bilişsel"],
    ["!MR: anterior temporal kutup ve eksternal kapsül tutulumu", "temporal kutup|temporal pol|eksternal kapsül|dış kapsül"],
    ["Deri biyopsisi: granüler osmiyofilik materyal (GOM)", "osmiyofilik|gom|deri biyopsi"],
    ["Spesifik tedavi yok; vasküler risk kontrolü", "spesifik bir tedavi|spesifik tedavi|vasküler risk"]
  ]},
  { id: "anti-nmda", tr: "Anti-NMDA reseptör ensefaliti", en: "Anti-NMDA receptor encephalitis", cat: "imm", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurol 2016", "https://doi.org/10.1016/S1474-4422(15)00401-9"],
          ["Treatment and prognostic factors for long-term outcome in patients with anti-NMDA receptor encephalitis: an observational cohort study. Lancet Neurol 2013", "https://doi.org/10.1016/S1474-4422(12)70310-1"]]
    },
    c: [
    ["!NMDA reseptörü GluN1 alt birimine karşı antikor", "nmda|glun1|nr1"],
    ["Genç kadın, over teratomu", "teratom|over teratom|yumurtalık"],
    ["!Psikiyatrik başlangıç → nöbet, oro-fasiyal diskinezi, otonomik instabilite, hipoventilasyon", "psikoz|orofasiyal|oro fasiyal|katatoni|hipoventilasyon|mutizm"],
    ["!BOS'ta antikor (serumdan duyarlı), lenfositik pleositoz", "bos testi|bos ta antikor|lenfositik pleositoz|serumdan daha duyarlı"],
    ["EEG: extreme delta brush", "delta brush|ekstrem delta"],
    ["Tedavi: steroid + IVIG/plazmaferez, tümör çıkarımı; ikinci basamak rituksimab", "rituksimab|siklofosfamid|tümör rezeksiyon|immünoterapi"]
  ]},
  { id: "psp", tr: "Progresif supranükleer palsi", en: "Progressive supranuclear palsy", cat: "har", lvl: 3,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Clinical diagnosis of progressive supranuclear palsy: The Movement Disorder Society criteria. Mov Disord 2017", "https://doi.org/10.1002/mds.26987"],
          ["Advances in progressive supranuclear palsy: new diagnostic criteria, biomarkers, and therapeutic approaches. Lancet Neurol 2017", "https://doi.org/10.1016/S1474-4422(17)30157-6"]]
    },
    c: [
    ["!4-tekrarlı (4R) tauopati", "tauopati|4r|dört tekrar"],
    ["!Vertikal supranükleer bakış paralizisi (özellikle aşağı bakış)", "vertikal|dikey bakış|aşağı bakış|bakış paralizi|supranükleer"],
    ["!Erken postüral instabilite, geriye düşmeler", "geriye düş|geriye doğru|sık sık düş|erken düşme"],
    ["Aksiyel rijidite, levodopaya zayıf yanıt", "aksiyel|levodopaya yanıt zayıf|levodopaya zayıf yanıt"],
    ["Psödobulber bulgular, frontal disfonksiyon, şaşkın yüz ifadesi", "psödobulber|şaşkın|procerus|frontal yürütücü"],
    ["MR: kolibri/penguen bulgusu (mezensefalon atrofisi)", "kolibri|hummingbird|penguen|mezensefalon atrofi|orta beyin atrofi|mickey"],
    ["Fenotipler: Richardson sendromu ve diğerleri", "richardson|fenotip"]
  ]},
  { id: "msa", tr: "Multisistem atrofi", en: "Multiple system atrophy", cat: "har", lvl: 3,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["The Movement Disorder Society Criteria for the Diagnosis of Multiple System Atrophy. Mov Disord 2022", "https://doi.org/10.1002/mds.29005"],
          ["Multiple system atrophy (Primer). Nat Rev Dis Primers 2022", "https://doi.org/10.1038/s41572-022-00382-6"]]
    },
    c: [
    ["!Alfa-sinüklein, oligodendroglial sitoplazmik inklüzyonlar", "oligodendro|glial sitoplazmik|papp|lantos"],
    ["!Erken ve belirgin otonomik yetmezlik", "ortostatik hipotansiyon|otonomik yetmezlik|erektil|idrar inkontinans"],
    ["!MSA-P (parkinsonizm) ve MSA-C (serebellar ataksi)", "msa p|msa c|serebellar ataksi"],
    ["Levodopaya zayıf yanıt", "levodopaya zayıf|levodopa yanıtı zayıf|kısa süreli yanıt"],
    ["MR: haç (hot cross bun) bulgusu, putaminal kenar", "hot cross|haç|putaminal"],
    ["Stridor, uyku apnesi, REM uyku davranış bozukluğu", "stridor|uyku apne"],
    ["Hızlı ilerleme, kötü prognoz", "hızlı ilerle|kötü prognoz|prognozu kötü"]
  ]},
  { id: "lambert-eaton", tr: "Lambert-Eaton miyastenik sendromu", en: "Lambert-Eaton myasthenic syndrome", cat: "nmh", lvl: 3,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol 2011", "https://doi.org/10.1016/S1474-4422(11)70245-9"],
          ["Lambert-Eaton myasthenic syndrome (LEMS): a rare autoimmune presynaptic disorder often associated with cancer. J Neurol 2017", "https://doi.org/10.1007/s00415-017-8541-9"]]
    },
    c: [
    ["!Presinaptik P/Q tipi voltaj kapılı kalsiyum kanalı antikoru", "presinaptik|kalsiyum kanal|voltaj kapılı|vgcc|p q tipi"],
    ["!Küçük hücreli akciğer kanseriyle paraneoplastik ilişki", "küçük hücreli|paraneoplastik|sclc"],
    ["!Proksimal bacak güçsüzlüğü, hiporefleksi", "proksimal bacak|proksimal güçsüz|kalça ve uyluk|hiporefleksi"],
    ["Kısa egzersizle geçici güç ve refleks artışı (fasilitasyon)", "fasilitasyon|egzersizden sonra güç|egzersiz sonrası güç|geçici olarak artar"],
    ["Otonomik: ağız kuruluğu, erektil disfonksiyon", "ağız kuru"],
    ["EMG: düşük CMAP, yüksek frekansta %100'ü aşan artış", "inkreman|cmap|yüksek frekans"],
    ["Tedavi: amifampridin (3,4-diaminopiridin), tümör tedavisi, immünoterapi", "diaminopiridin|amifampridin"]
  ]},
  { id: "cjd", tr: "Creutzfeldt-Jakob hastalığı", en: "Creutzfeldt-Jakob disease", cat: "bil", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Biomarkers and diagnostic guidelines for sporadic Creutzfeldt-Jakob disease. Lancet Neurol 2021", "https://doi.org/10.1016/S1474-4422(20)30477-4"],
          ["CJD Diagnostic Criteria. CDC (güncel sayfa)", "https://www.cdc.gov/creutzfeldt-jakob/hcp/clinical-overview/diagnosis.html"]]
    },
    c: [
    ["!Prion hastalığı (yanlış katlanmış prion proteini)", "prion|priyon|yanlış katlan"],
    ["!Hızlı ilerleyen demans", "hızlı ilerleyen demans|hızla ilerleyen demans|hızlı ilerleyen bilişsel"],
    ["Miyoklonus, ataksi, görsel bulgular, akinetik mutizm", "miyoklonus|akinetik mutizm"],
    ["Formlar: sporadik, genetik, iatrojenik, varyant", "sporadik|iatrojenik|varyant cjd|deli dana|süngerimsi"],
    ["EEG: periyodik keskin dalga kompleksleri", "periyodik keskin|keskin dalga kompleks"],
    ["!MR difüzyon: kortikal kurdele, bazal ganglion; varyantta pulvinar", "kurdele|ribbon|pulvinar"],
    ["BOS: RT-QuIC, 14-3-3, total tau", "quic|14 3 3"],
    ["Tedavi yok, ölümcül seyir", "ölümcül|fatal|bir yıl içinde"]
  ]},
  { id: "wallenberg", tr: "Lateral medüller (Wallenberg) sendrom", en: "Lateral medullary syndrome", cat: "vas", lvl: 3,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Pure lateral medullary infarction: clinical-radiological correlation of 130 acute, consecutive patients. Brain 2003", "https://doi.org/10.1093/brain/awg169"],
          ["2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack (AHA/ASA). Stroke 2021", "https://doi.org/10.1161/STR.0000000000000375"]]
    },
    c: [
    ["!Vertebral arter veya PICA tıkanması", "vertebral arter|pica|posterior inferior serebellar"],
    ["!Çapraz duyu kaybı: yüzde aynı, gövdede karşı tarafta ağrı-ısı", "çapraz duyu|yüzde aynı tarafta|gövdede karşı|trigeminal spinal"],
    ["Aynı tarafta Horner", "horner"],
    ["!Disfaji, ses kısıklığı, hıçkırık (nükleus ambiguus)", "ambiguus|hıçkırık|ses kısık|disfoni"],
    ["Aynı tarafta ataksi, vertigo, nistagmus", "vertigo|nistagmus|vestibüler"],
    ["Belirgin motor güçsüzlük yok", "motor güçsüzlük beklenmez|güçsüzlük yok|güçsüzlük olmaz|motor güçsüzlük olmaz"],
    ["Gençte vertebral diseksiyon; MR difüzyonla tanı", "diseksiyon|difüzyon"]
  ]},
  { id: "miller-fisher", tr: "Miller Fisher sendromu", en: "Miller Fisher syndrome", cat: "nmh", lvl: 3,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Guillain-Barré and Miller Fisher syndromes — new diagnostic classification. Nat Rev Neurol 2014", "https://pubmed.ncbi.nlm.nih.gov/25072194/"],
          ["Clinical features and prognosis of Miller Fisher syndrome. Neurology 2001", "https://doi.org/10.1212/WNL.56.8.1104"]]
    },
    c: [
    ["!Guillain-Barré varyantı", "guillain|varyant"],
    ["!Oftalmopleji, ataksi, arefleksi", "oftalmopleji"],
    ["!Anti-GQ1b antikoru", "gq1b|gq 1b|gangliozid"],
    ["Öncül enfeksiyon (Campylobacter)", "campylobacter|kampilobakter"],
    ["Bickerstaff beyin sapı ensefaliti ile aynı spektrum", "bickerstaff"],
    ["BOS'ta albüminositolojik disosiasyon", "albüminositolojik|albumino|disosiasyon|dissosiasyon"],
    ["İyi prognoz; gerekirse IVIG/plazmaferez", "kendiliğinden iyileş|prognoz genellikle iyi|iyi prognoz|prognozu iyi"]
  ]},
  { id: "nmosd", tr: "Nöromiyelitis optika spektrum bozukluğu", en: "Neuromyelitis optica spectrum disorder", cat: "imm", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["International consensus diagnostic criteria for neuromyelitis optica spectrum disorders. Neurology 2015", "https://doi.org/10.1212/WNL.0000000000001729"],
          ["Update on the diagnosis and treatment of NMOSD — revised recommendations of NEMOS. Part II: attack therapy and long-term management. J Neurol 2024", "https://doi.org/10.1007/s00415-023-11910-z"]]
    },
    c: [
    ["!Akuaporin-4 (AQP4) IgG, astrositopati", "akuaporin|aquaporin|aqp4|aqp 4|astrositopati"],
    ["!Ağır optik nörit ve uzun segment transvers miyelit (≥3 vertebra)", "uzun segment|longitudinal|üç vertebra|3 vertebra|üç ya da daha fazla vertebra"],
    ["Area postrema sendromu: inatçı hıçkırık, bulantı-kusma", "area postrema|hıçkırık"],
    ["!MS'den ayrım: bazı MS ilaçları kötüleştirir", "ms ilaç|ms ilaçları|kötüleştir|ms ten ayır|msten ayır|ms ten farklı"],
    ["MOG antikoru hastalığı ayrı bir antite", "mog"],
    ["Atak: yüksek doz steroid, plazmaferez", "plazmaferez|plazma değişim"],
    ["Önleme: ekulizumab, inebilizumab, satralizumab, rituksimab", "ekulizumab|eculizumab|inebilizumab|satralizumab|ravulizumab|rituksimab"]
  ]},
  { id: "pres", tr: "Posterior reversibl ensefalopati sendromu", en: "Posterior reversible encephalopathy syndrome", cat: "vas", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Posterior reversible encephalopathy syndrome: clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol 2015", "https://doi.org/10.1016/S1474-4422(15)00111-8"],
          ["Posterior reversible encephalopathy syndrome. J Neurol 2017", "https://doi.org/10.1007/s00415-016-8377-8"]]
    },
    c: [
    ["!Vazojenik ödem: otoregülasyon bozukluğu ve endotel disfonksiyonu", "vazojenik|otoregülasyon|endotel"],
    ["!Tetikleyiciler: ani hipertansiyon, eklampsi, takrolimus/siklosporin, kemoterapi, böbrek yetmezliği", "eklampsi|takrolimus|siklosporin|kalsinörin"],
    ["Klinik: baş ağrısı, nöbet, görme bozukluğu, ensefalopati", "kortikal körlük|görme bozuk|ensefalopati"],
    ["!MR: bilateral parieto-oksipital T2/FLAIR hiperintensite", "parieto oksipital|parietooksipital|parieto|flair"],
    ["Tedavi: kan basıncını kontrollü düşürme, tetikleyiciyi kesme", "kontrollü olarak düşür|kontrollü düşür|tetikleyici ilaç|tetikleyiciyi kes|magnezyum"],
    ["Çoğunlukla geri döner; kanama/infarkt olabilir", "geri döner|geri dön|reversibl"]
  ]},
  { id: "subakut-kombine-dejenerasyon", tr: "Subakut kombine dejenerasyon", en: "Subacute combined degeneration", cat: "lok", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Clinical practice. Vitamin B12 deficiency. N Engl J Med 2013", "https://doi.org/10.1056/NEJMcp1113996"],
          ["Guidelines for the diagnosis and treatment of cobalamin and folate disorders (BCSH). Br J Haematol 2014", "https://doi.org/10.1111/bjh.12959"]]
    },
    c: [
    ["!B12 (kobalamin) eksikliği", "b12|b 12|kobalamin"],
    ["!Dorsal kolon ve lateral kortikospinal yol dejenerasyonu", "dorsal kolon|arka kordon|lateral kortikospinal"],
    ["Vibrasyon ve pozisyon duyusu kaybı, duyusal ataksi, Romberg", "romberg|duyusal ataksi|vibrasyon"],
    ["Spastisite ve Babinski; eşlik eden nöropatiyle Aşil refleksi kaybı", "babinski pozitif ama|aşil refleksi kaybol|refleks yok|babinski"],
    ["Nedenler: pernisiyöz anemi, metformin, PPI, vegan diyet, nitröz oksit", "pernisiyöz|intrinsik faktör|metformin|nitröz|gülme gazı|vegan"],
    ["Laboratuvar: makrositoz, yüksek metilmalonik asit ve homosistein", "metilmalonik|homosistein|makrositik|megaloblastik"],
    ["MR: dorsal kolonda ters V (tavşan kulağı) T2 sinyali", "ters v|tavşan kulağı"],
    ["!Tedavi: parenteral B12, erken başlama", "parenteral|kas içi|intramüsküler"]
  ]},
  { id: "ino", tr: "İnternükleer oftalmopleji", en: "Internuclear ophthalmoplegia", cat: "lok", lvl: 3,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Internuclear ophthalmoplegia. Pract Neurol 2017", "https://pn.bmj.com/content/17/2/149.long"],
          ["Internuclear ophthalmoplegia: unusual causes in 114 of 410 patients. Arch Neurol 2005", null]]
    },
    c: [
    ["!Medial longitudinal fasikulus (MLF) lezyonu", "medial longitudinal|mlf|fasikulus|fasikül"],
    ["!Lezyon tarafındaki gözde addüksiyon kusuru", "addüksiyon"],
    ["!Karşı gözde abdüksiyon nistagmusu", "abdüksiyon nistagmus|karşı gözde|karşı göz"],
    ["Konverjans korunur", "konverjans"],
    ["Genç/bilateral → MS; yaşlı → iskemi", "bilateral ino|multipl skleroz|beyin sapı iskemi"],
    ["Bir buçuk sendromu (PPRF/abdusens + MLF)", "bir buçuk|one and a half|pprf|paramedian pontin"],
    ["WEBINO", "webino|ekzotropya"]
  ]},
  { id: "dravet", tr: "Dravet sendromu", en: "Dravet syndrome", cat: "epi", lvl: 3,
    src: {
      k: ["Swaiman's Pediatric Neurology, 7. baskı (2025)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["International consensus on diagnosis and management of Dravet syndrome. Epilepsia 2022", "https://doi.org/10.1111/epi.17274"],
          ["ILAE classification and definition of epilepsy syndromes with onset in neonates and infants. Epilepsia 2022", null]]
    },
    c: [
    ["!SCN1A mutasyonu (Nav1.1 sodyum kanalı, çoğu de novo)", "scn1a|scn 1a|nav1|de novo"],
    ["!İlk yaşta ateşle tetiklenen uzun hemiklonik/jeneralize nöbetler", "ilk yaşta|hemiklonik|aşı sonrası|sıcak banyo"],
    ["Sonra miyoklonik, atipik absans ve fokal nöbetler; gelişimsel gerileme", "miyoklonik|atipik absans|gelişimsel gerileme"],
    ["!Sodyum kanal blokerlerinden kaçınılmalı", "sodyum kanal bloker|kaçın"],
    ["Tedavi: valproat, klobazam, stiripentol, fenfluramin, kannabidiol", "stiripentol|fenfluramin|kannabidiol|cannabidiol|klobazam"],
    ["SUDEP riski", "sudep|beklenmedik ani ölüm|beklenmedik ölüm"]
  ]},
  { id: "wilson", tr: "Wilson hastalığı", en: "Wilson disease", cat: "har", lvl: 3,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["A multidisciplinary approach to the diagnosis and management of Wilson disease: 2022 Practice Guidance on Wilson disease from the AASLD. Hepatology 2023", null],
          ["EASL-ERN Clinical Practice Guidelines on Wilson's disease. J Hepatol 2025", null]]
    },
    c: [
    ["!ATP7B mutasyonu, otozomal resesif bakır birikimi", "atp7b|atp 7b|bakır"],
    ["!Karaciğer ve bazal ganglion tutulumu, genç hasta", "karaciğer|hepatik|siroz"],
    ["Kanat çırpan tremor, distoni, dizartri, parkinsonizm; psikiyatrik bulgular", "kanat çırpan|distoni|dizartri"],
    ["!Kayser-Fleischer halkası", "kayser|fleischer|descemet"],
    ["Lab: düşük seruloplazmin, yüksek 24 saatlik idrar bakırı", "seruloplazmin|idrar bakır"],
    ["MR: dev panda yüzü", "panda"],
    ["Tedavi: şelatörler (penisilamin, trientin), çinko; gerekirse nakil", "penisilamin|trientin|çinko|şelat"]
  ]}
]
});
