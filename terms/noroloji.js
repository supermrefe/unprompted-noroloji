/* Nöroloji — Unprompted Tıp konu paketi. Konu id'leri ilk sürümden (Unprompted Nöroloji) beri aynı; değiştirme. */
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
    ["!Damar tıkanmasıyla kan akımının kesilmesi", "tıkan|oklüzyon|kan akım|kan akış|kanlanma|pıhtı|trombüs|trombus|tromboz|emboli"],
    ["!Ani başlangıçlı fokal nörolojik defisit", "ani|aniden|fokal|hemipleji|hemiparezi|yüz asimetri|afazi|konuşma bozuk|güçsüzlük"],
    ["!Önce BT ile kanamanın dışlanması, MR difüzyon", "tomografi|bt|bete|difüzyon|mr|emar|manyetik rezonans|kanamayı dışla|kanama dışla"],
    ["!IV trombolitik (alteplaz ya da tenekteplaz), ilk 4,5 saatte", "tpa|t pa|alteplaz|tenekteplaz|trombolit|4 5|dört buçuk|pıhtı eritici"],
    ["Büyük damar tıkanıklığında mekanik trombektomi", "trombektomi|endovasküler|büyük damar"],
    ["Penumbra ve 'zaman beyindir'", "penumbra|zaman beyindir|time is brain|kurtarılabilir"],
    ["Risk faktörleri: HT, AF, diyabet, sigara", "hipertansiyon|tansiyon|atriyal fibrilasyon|fibrilasyon|diyabet|sigara|ateroskleroz|kolesterol"],
    ["İkincil korunma: antiagregan/antikoagülan, statin", "aspirin|klopidogrel|antiagregan|antiplatelet|antikoagülan|statin|ikincil korunma|sekonder"]
  ]},
  { id: "tia", tr: "Geçici iskemik atak (TİA)", en: "Transient ischemic attack", cat: "vas", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack (AHA/ASA). Stroke 2021", "https://doi.org/10.1161/STR.0000000000000375"],
          ["Definition and evaluation of transient ischemic attack (AHA/ASA scientific statement). Stroke 2009", "https://doi.org/10.1161/STROKEAHA.108.192218"]]
    },
    c: [
    ["!Geçici fokal defisit, kalıcı infarkt yok", "geçici|24 saat|yirmi dört saat|bir saat|kalıcı hasar|infarkt|enfarkt|difüzyon negatif|iz bırakmadan|düzel"],
    ["!İnme habercisi: erken inme riski yüksek", "haberci|uyarı|inme riski|erken inme|yüksek risk|ilk 48|48 saat|iki gün|önümüzdeki günler|sonraki günler|ilk günler|ilk hafta|yakın dönemde|atak geçirme|inme geçirme|inme olasılı|inme gelişme"],
    ["ABCD2 risk skoru", "abcd|risk skor|risk skal"],
    ["Etiyoloji: karotis görüntüleme, ritim izlemi", "karotis|doppler|holter|ekg|elektrokardiyo|ekokardiyo|ritim"],
    ["!Antiplatelet tedavi (gerekirse ikili)", "aspirin|klopidogrel|antiagregan|antiplatelet|ikili|tikagrelor"],
    ["Risk faktörü kontrolü: statin, kan basıncı", "statin|hipertansiyon|tansiyon|risk faktör|kan basıncı"]
  ]},
  { id: "migren", tr: "Migren", en: "Migraine", cat: "agr", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia 2018", "https://doi.org/10.1177/0333102417738202"],
          ["The American Headache Society Consensus Statement: Update on integrating new migraine treatments into clinical practice. Headache 2021", "https://doi.org/10.1111/head.14153"]]
    },
    c: [
    ["!Tekrarlayan ataklarla seyreden primer baş ağrısı", "primer|tekrarlayan|atak"],
    ["!Tek taraflı, zonklayıcı, 4–72 saat", "tek taraflı|tek tarafl|unilateral|zonkla|pulsatil|72 saat|yetmiş iki"],
    ["!Bulantı-kusma, fotofobi, fonofobi", "bulantı|kusma|fotofobi|fonofobi|ışığa|sese|ışık hassas|ses hassas"],
    ["Aura (görsel, skintilan skotom)", "aura|skotom|zigzag|görsel|parlak ışık"],
    ["Trigeminovasküler sistem, CGRP, yayılan kortikal depresyon", "trigeminovasküler|trigemin|cgrp|kalsitonin|yayılan depresyon|kortikal yayılan|spreading"],
    ["Akut tedavi: triptan, NSAİİ; gepant, lasmiditan", "triptan|sumatriptan|nsai|nonsteroid|ibuprofen|naproksen|parasetamol|analjezik|ubrojepant|rimejepant|lasmiditan"],
    ["Profilaksi: beta bloker, topiramat, amitriptilin, anti-CGRP", "profilaks|koruyucu|propranolol|topiramat|amitriptilin|flunarizin|erenumab|monoklonal|beta bloker|gepant"]
  ]},
  { id: "gerilim-bas-agrisi", tr: "Gerilim tipi baş ağrısı", en: "Tension-type headache", cat: "agr", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia 2018", "https://doi.org/10.1177/0333102417738202"],
          ["EFNS guideline on the treatment of tension-type headache. Eur J Neurol 2010", "https://doi.org/10.1111/j.1468-1331.2010.03070.x"]]
    },
    c: [
    ["!En sık primer baş ağrısı", "en sık|en yaygın|primer"],
    ["!İki taraflı, bant gibi saran, baskı tarzı", "iki taraflı|bilateral|bant|mengene|baskı|sıkış|saran"],
    ["!Hafif-orta şiddet, fiziksel aktiviteyle artmaz", "hafif|orta şiddet|aktiviteyle artmaz|fiziksel aktivite|günlük aktivite"],
    ["Bulantı yok; fotofobi ya da fonofobiden en fazla biri", "bulantı yok|bulantı olmaz|kusma yok|fotofobi|fonofobi"],
    ["Perikraniyal kas hassasiyeti, stres", "perikran|kas hassas|stres|gerginlik|boyun|omuz"],
    ["Tedavi: basit analjezik; kronikte amitriptilin", "analjezik|parasetamol|ibuprofen|amitriptilin|ağrı kesici"],
    ["İlaç aşırı kullanımı baş ağrısı uyarısı", "aşırı kullanım|ilaç kullanım|medication overuse|kötüye kullanım"]
  ]},
  { id: "epilepsi", tr: "Epilepsi", en: "Epilepsy", cat: "epi", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["ILAE official report: A practical clinical definition of epilepsy. Epilepsia 2014", "https://doi.org/10.1111/epi.12550"],
          ["Updated classification of epileptic seizures: Position paper of the ILAE. Epilepsia 2025", "https://doi.org/10.1111/epi.18338"]]
    },
    c: [
    ["!Provoke olmayan en az iki nöbet (ya da yüksek tekrar riski)", "provoke olmayan|provoke edilmemiş|iki nöbet|2 nöbet|tekrarlayan nöbet|en az iki|nedensiz nöbet"],
    ["!Nöbet: aşırı ve senkron nöronal deşarj", "senkron|deşarj|aşırı nöronal|anormal elektrik|elektriksel"],
    ["Sınıflama (ILAE 2025): fokal, jeneralize, bilinmeyen", "fokal|jenerali|yaygın başla|parsiyel|bilinmeyen"],
    ["Tanı: EEG ve MR", "eeg|elektroensefalo|mr|emar|manyetik"],
    ["!Antinöbet ilaçlar", "antiepilepti|antinöbet|valproat|levetirasetam|karbamazepin|lamotrijin|fenitoin|okskarbazepin"],
    ["İlaca dirençli epilepsi: cerrahi, ketojenik diyet, VNS", "dirençli|refrakter|cerrahi|ketojenik|vagal|vns|vagus"],
    ["Tetikleyiciler: uykusuzluk, alkol, ilaç bırakma", "uykusuzluk|uyku|alkol|ilaç bırak|ilaç uyum|fotik"]
  ]},
  { id: "bell-paralizisi", tr: "Bell paralizisi", en: "Bell palsy", cat: "nmh", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Clinical practice guideline: Bell's palsy (AAO-HNSF). Otolaryngol Head Neck Surg 2013", "https://doi.org/10.1177/0194599813505967"],
          ["Early treatment with prednisolone or acyclovir in Bell's palsy. N Engl J Med 2007", "https://doi.org/10.1056/NEJMoa072006"]]
    },
    c: [
    ["!İdiyopatik akut periferik fasiyal sinir felci", "fasiyal|fasial|yüz siniri|yedinci|7 kranial|idiyopatik|periferik"],
    ["!Alın dahil yüzün yarısı tutulur (santral felçte alın korunur)", "alın|kaş kaldır|santral|üst motor nöron|alnı"],
    ["Göz kapatamama, Bell fenomeni", "göz kapat|bell fenomen|lagoftalmi|kapanmıyor|kapatamıyor"],
    ["Tat kaybı, hiperakuzi, kulak arkası ağrı", "tat|hiperakuzi|kulak arkası|stapedius|ses hassas"],
    ["Herpes simpleks / viral reaktivasyon", "herpes|viral|virüs|hsv"],
    ["!İlk 72 saatte kortikosteroid", "kortikosteroid|steroid|prednizo|72 saat|üç gün"],
    ["Göz koruması, iyi prognoz", "göz koru|suni gözyaşı|göz damla|bant|prognoz|kendiliğinden|iyileş"]
  ]},
  { id: "parkinson", tr: "Parkinson hastalığı", en: "Parkinson disease", cat: "har", lvl: 1,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["MDS clinical diagnostic criteria for Parkinson's disease. Mov Disord 2015", "https://doi.org/10.1002/mds.26424"],
          ["Parkinson's disease (Seminar). Lancet 2021", "https://doi.org/10.1016/S0140-6736(21)00218-X"]]
    },
    c: [
    ["!Substantia nigra dopaminerjik nöron kaybı", "substantia nigra|nigra|dopamin|dopaminerjik"],
    ["!İstirahat tremoru, rijidite, bradikinezi", "istirahat|tremor|titreme|rijidite|katılık|bradikinezi|hareket yavaş|dişli çark"],
    ["Asimetrik başlangıç, postüral instabilite", "asimetrik|tek taraf|postüral|denge"],
    ["Lewy cisimcikleri, alfa-sinüklein", "lewy|sinüklein|synuclein"],
    ["!Levodopa, dopamin agonistleri, MAO-B inhibitörleri", "levodopa|karbidopa|benserazid|dopamin agonist|pramipeksol|ropinirol|mao|rasajilin|selejilin"],
    ["Motor dışı bulgular: anosmi, REM uyku davranış bozukluğu, kabızlık", "anosmi|koku|rem|kabız|depresyon|non motor|motor dışı|otonom"],
    ["İleri evre: dalgalanmalar, derin beyin stimülasyonu", "derin beyin|dbs|stimülasyon|dalgalan|diskinezi|on off"]
  ]},
  { id: "alzheimer", tr: "Alzheimer hastalığı", en: "Alzheimer disease", cat: "bil", lvl: 1,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Revised criteria for diagnosis and staging of Alzheimer's disease: Alzheimer's Association Workgroup. Alzheimers Dement 2024", "https://doi.org/10.1002/alz.13859"],
          ["Lecanemab in early Alzheimer's disease (CLARITY AD). N Engl J Med 2023", "https://doi.org/10.1056/NEJMoa2212948"]]
    },
    c: [
    ["!En sık demans nedeni, nörodejeneratif", "en sık|en yaygın|demans|nörodejenerati"],
    ["!Erken epizodik bellek kaybı, hipokampus", "bellek|hafıza|unutkan|epizodik|hipokamp"],
    ["!Amiloid-beta plakları ve tau yumakları", "amiloid|plak|tau|nörofibriler|yumak"],
    ["Risk: yaş, APOE ε4", "apoe|apolipoprotein|yaş|ileri yaş"],
    ["Tanı: bilişsel test, MR atrofisi, amiloid/tau biyobelirteçleri (PET, BOS, plazma p-tau217)", "mmse|moca|mini mental|atrofi|biyobelirteç|biyomarker|pet|bos|p tau|ptau|plazma"],
    ["Tedavi: kolinesteraz inhibitörü, memantin; erken evrede anti-amiloid antikorlar (ARIA riski)", "kolinesteraz|donepezil|rivastigmin|galantamin|memantin|lekanemab|lecanemab|donanemab|anti amiloid|aria"]
  ]},
  { id: "glasgow-koma-skalasi", tr: "Glasgow Koma Skalası", en: "Glasgow Coma Scale", cat: "lok", lvl: 1,
    src: {
      k: ["Plum and Posner's Diagnosis and Treatment of Stupor and Coma, 5. baskı (2019)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Assessment of coma and impaired consciousness. A practical scale. Lancet 1974", "https://doi.org/10.1016/S0140-6736(74)91639-0"],
          ["The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol 2014", "https://doi.org/10.1016/S1474-4422(14)70120-6"]]
    },
    c: [
    ["!Bilinç düzeyini puanlayan ölçek", "bilinç|koma|uyanıklık"],
    ["!Göz açma (4), sözel yanıt (5), motor yanıt (6)", "göz açma|sözel|verbal|motor yanıt|motor"],
    ["!Puan aralığı 3–15", "3 ile 15|üç ile on beş|3 15|on beş|15 puan|en düşük 3"],
    ["8 ve altı: ağır, hava yolu koruması/entübasyon", "sekiz|8|entübasyon|entübe|hava yolu"],
    ["Hafif 13–15, orta 9–12", "13|9 ile 12|hafif|orta"],
    ["Kafa travmasında ve seri izlemde kullanım", "travma|kafa travma|izlem|takip|seri"]
  ]},
  { id: "bakteriyel-menenjit", tr: "Bakteriyel menenjit", en: "Bacterial meningitis", cat: "imm", lvl: 1,
    src: {
      k: ["Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 10. baskı (2025)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect 2016", "https://doi.org/10.1016/j.cmi.2016.01.007"],
          ["Community-acquired bacterial meningitis (Seminar). Lancet 2021", "https://doi.org/10.1016/S0140-6736(21)00883-7"]]
    },
    c: [
    ["!Meninkslerin enfeksiyonu", "menenks|meninks|meninj|beyin zarı|zarların|zar iltihab"],
    ["!Ateş, ense sertliği, bilinç değişikliği, baş ağrısı", "ateş|ense sert|bilinç|baş ağrı|konfüzyon"],
    ["Kernig ve Brudzinski bulguları", "kernig|brudzinski"],
    ["Etkenler: pnömokok, meningokok, Listeria", "pnömokok|pneumoniae|meningokok|meningitidis|neisseria|listeria|streptokok"],
    ["Lomber ponksiyon: nötrofilik pleositoz, düşük glukoz, yüksek protein", "lomber ponksiyon|ponksiyon|beyin omurilik|bos|glukoz|şeker düşük|pleositoz|nötrofil"],
    ["!Gecikmeden ampirik antibiyotik + deksametazon", "antibiyotik|seftriakson|vankomisin|ampisilin|deksametazon|ampirik"],
    ["Peteşiyal döküntü, temaslılara profilaksi", "peteşi|döküntü|profilaksi|rifampisin|siprofloksasin|temaslı"]
  ]},
  { id: "karpal-tunel", tr: "Karpal tünel sendromu", en: "Carpal tunnel syndrome", cat: "nmh", lvl: 1,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Carpal tunnel syndrome: clinical features, diagnosis, and management. Lancet Neurol 2016", "https://doi.org/10.1016/S1474-4422(16)30231-9"],
          ["Management of Carpal Tunnel Syndrome Evidence-Based Clinical Practice Guideline (AAOS). 2024", "https://aaos.org/cts2cpg"]]
    },
    c: [
    ["!Median sinirin el bileğinde sıkışması", "median|medyan|el bileği|bilek|sıkış|tuzak|entrapman|bası"],
    ["!İlk üç parmakta uyuşma-karıncalanma, gece artar", "uyuşma|karıncalan|parestezi|gece|başparmak|işaret|orta parmak|ilk üç"],
    ["Tenar atrofi, abduktor pollicis brevis zayıflığı", "tenar|abduktor|atrofi|güçsüz|kavrama"],
    ["Tinel ve Phalen testleri", "tinel|phalen|falen"],
    ["!Tanı: sinir iletim çalışması / EMG", "emg|elektromiyo|sinir ileti|iletim|ultrason"],
    ["Risk: gebelik, hipotiroidi, diyabet, tekrarlayıcı el kullanımı", "gebelik|hamile|hipotiroid|diyabet|tekrarlayıcı|tekrarlayan|romatoid|akromegali"],
    ["Tedavi: gece ateli, steroid enjeksiyonu (kısa süreli yarar), cerrahi gevşetme", "atel|splint|enjeksiyon|cerrahi|dekompresyon|serbestleş|transvers karpal"]
  ]},
  { id: "esansiyel-tremor", tr: "Esansiyel tremor", en: "Essential tremor", cat: "har", lvl: 1,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Consensus statement on the classification of tremors, from the task force on tremor of the International Parkinson and Movement Disorder Society. Mov Disord 2018", "https://doi.org/10.1002/mds.27121"],
          ["Evidence-based guideline update: Treatment of essential tremor (AAN). Neurology 2011", "https://doi.org/10.1212/WNL.0b013e318236f0fd"]]
    },
    c: [
    ["!Postüral ve kinetik (aksiyon) tremor", "postüral|kinetik|aksiyon|hareketle|hareket sırasında|bardak|yazı"],
    ["!En sık hareket bozukluğu, iki taraflı eller", "en sık|en yaygın|iki taraf|bilateral|eller"],
    ["Baş ve ses tremoru", "baş titre|kafa|ses titre|vokal|başta"],
    ["Alkolle geçici düzelme", "alkol"],
    ["Aile öyküsü sık; ailelerde otozomal dominant geçiş", "aile|ailesel|kalıtsal|genetik|otozomal|dominant"],
    ["!Parkinson tremorundan ayrımı", "istirahat|parkinson|bradikinezi|ayırıcı|ayırt"],
    ["Tedavi: propranolol, primidon; dirençte DBS/odaklı ultrason", "propranolol|primidon|beta bloker|topiramat|derin beyin|talamus|vim|odaklanmış ultrason|odaklı ultrason"]
  ]},
  { id: "bppv", tr: "Benign paroksismal pozisyonel vertigo", en: "Benign paroxysmal positional vertigo", cat: "lok", lvl: 1,
    src: {
      k: ["Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (Update) (AAO-HNSF). Otolaryngol Head Neck Surg 2017", "https://doi.org/10.1177/0194599816689667"],
          ["Benign paroxysmal positional vertigo: Diagnostic criteria (Bárány Society). J Vestib Res 2015", "https://doi.org/10.3233/VES-150553"]]
    },
    c: [
    ["!Baş pozisyonuyla tetiklenen saniyeler süren vertigo", "pozisyon|baş hareket|yatarken|dönerken|saniye|kısa süreli|vertigo|baş dönme"],
    ["!Otokonyaların kanala düşmesi, en sık posterior kanal", "otokon|otolit|kristal|kanalit|posterior|yarım daire|semisirküler"],
    ["!Tanı: Dix-Hallpike, torsiyonel nistagmus", "dix|hallpike|nistagmus|torsiyonel"],
    ["Tedavi: Epley repozisyon manevrası", "epley|repozisyon|manevra"],
    ["En sık periferik vertigo, işitme kaybı yok", "periferik|en sık|işitme"],
    ["Santral nedenlerden ayrım (HINTS, nörolojik bulgu)", "santral|hints|serebellar|nörolojik bulgu|inme"]
  ]},
  { id: "lomber-radikulopati", tr: "Lomber radikülopati", en: "Lumbar radiculopathy", cat: "nmh", lvl: 1,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["An evidence-based clinical guideline for the diagnosis and treatment of lumbar disc herniation with radiculopathy (NASS). Spine J 2014", "https://doi.org/10.1016/j.spinee.2013.08.003"],
          ["Sciatica. N Engl J Med 2015", "https://doi.org/10.1056/NEJMra1410151"]]
    },
    c: [
    ["!Sinir kökü basısı, en sık L4–L5 / L5–S1 disk hernisi (L5, S1 kökü)", "sinir kök|kök bası|disk|herni|fıtık|l5|s1|l4"],
    ["!Dermatomal, bacağa yayılan ağrı (siyatalji)", "bacağa yayılan|siyatik|siyatalji|dermatom|yayılan ağrı"],
    ["Düz bacak kaldırma (Lasègue) testi", "lasegue|laseg|laseque|düz bacak"],
    ["Kök bulguları: S1 Aşil refleksi, L4 patella, L5 başparmak dorsifleksiyonu", "aşil refleks|aşil tendon|patella|refleks|dorsifleksiyon|başparmak|ayak bileği"],
    ["!Kırmızı bayrak: kauda ekina (idrar retansiyonu, eyer anestezisi)", "kauda|cauda|eyer|idrar|inkontinans|sfinkter|retansiyon|acil"],
    ["Çoğu konservatif tedaviyle düzelir; gerekirse MR ve cerrahi", "konservatif|fizik tedavi|analjezik|mr|emar|manyetik|cerrahi|egzersiz"]
  ]},

  /* ====================== ORTA ====================== */
  { id: "multipl-skleroz", tr: "Multipl skleroz", en: "Multiple sclerosis", cat: "imm", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Diagnosis of multiple sclerosis: 2024 revisions of the McDonald criteria. Lancet Neurol 2025", "https://doi.org/10.1016/S1474-4422(25)00270-4"],
          ["Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria. Lancet Neurol 2018", "https://doi.org/10.1016/S1474-4422(17)30470-2"]]
    },
    c: [
    ["!Santral sinir sisteminin kronik immün aracılı demiyelinizan hastalığı", "demiyeliniz|demyelin|miyelin|otoimmün|immün|santral sinir"],
    ["Genç erişkin, kadınlarda daha sık", "genç|kadın|20|40"],
    ["!McDonald 2024: yerde yayılım (optik sinir 5. bölge); zamanda yayılım artık her durumda gerekmez", "zamanda|yerde|yayılım|dissemin|mcdonald|mc donald"],
    ["Klinik: optik nörit, INO, Lhermitte, Uhthoff", "optik nörit|internükleer|ino|lhermitte|uhthoff|uyuşma|görme kaybı|duyusal"],
    ["!MR: periventriküler, jukstakortikal, infratentoriyal, spinal lezyonlar", "periventrikül|jukstakortik|kortikal|infratentor|spinal|dawson|plak|lezyon"],
    ["BOS'ta oligoklonal bant ya da kappa serbest hafif zincir; MR'da santral ven işareti", "oligoklonal|igg indeks|kappa|hafif zincir|santral ven|merkezi ven|paramanyetik"],
    ["Atak: yüksek doz metilprednizolon; hastalık modifiye edici tedaviler", "metilprednizolon|pulse|steroid|interferon|glatiramer|okrelizumab|natalizumab|fingolimod|hastalık modifiye|dmt|ofatumumab"],
    ["Formlar: ataklarla seyreden, sekonder/primer progresif", "relapsing|atak remisyon|ataklarla|sekonder progresif|primer progresif|progresif"]
  ]},
  { id: "guillain-barre", tr: "Guillain-Barré sendromu", en: "Guillain-Barre syndrome", cat: "nmh", lvl: 2,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["European Academy of Neurology/Peripheral Nerve Society Guideline on diagnosis and treatment of Guillain-Barré syndrome. Eur J Neurol 2023", "https://doi.org/10.1111/ene.16073"],
          ["Diagnosis and management of Guillain-Barré syndrome in ten steps. Nat Rev Neurol 2019", "https://doi.org/10.1038/s41582-019-0250-9"]]
    },
    c: [
    ["!Akut inflamatuvar demiyelinizan poliradikülonöropati", "demiyeliniz|demyelin|poliradikül|polinöropati|aidp|inflamatuvar"],
    ["!Asendan simetrik güçsüzlük", "asendan|yükselen|bacaklardan başla|aşağıdan yukarı|simetrik|güçsüzlük"],
    ["!Arefleksi", "arefleksi|refleks kayb|reflekslerin kayb|hiporefleksi|refleks"],
    ["Öncül enfeksiyon (Campylobacter jejuni)", "kampilobakter|campylobacter|enfeksiyon sonrası|ishal|üst solunum|gastroenterit"],
    ["BOS'ta albüminositolojik disosiasyon", "albüminositolojik|albumino|disosiasyon|dissosiasyon|protein yüksek"],
    ["Solunum yetmezliği ve otonomik instabilite riski", "solunum|vital kapasite|entübasyon|mekanik ventilasyon|otonom|aritmi"],
    ["Tedavi: IVIG veya plazmaferez", "ivig|immünglobulin|immunoglobulin|plazmaferez|plazma değişim"],
    ["Varyantlar: AMAN, Miller Fisher", "aman|aksonal|miller fisher|varyant"]
  ]},
  { id: "miyastenia-gravis", tr: "Miyastenia gravis", en: "Myasthenia gravis", cat: "nmh", lvl: 2,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 2021", "https://doi.org/10.1212/WNL.0000000000011124"],
          ["Myasthenia gravis. N Engl J Med 2016", "https://doi.org/10.1056/NEJMra1602678"]]
    },
    c: [
    ["!Postsinaptik asetilkolin reseptörüne karşı otoantikor", "asetilkolin|reseptör|nöromüsküler kavşak|kavşak|otoantikor|antikor|musk|postsinaptik"],
    ["!Yorulabilen, gün içinde artan güçsüzlük", "yorul|fluktu|gün sonunda|akşam|egzersizle art|tekrarla|dalgalan"],
    ["!Oküler bulgular: pitoz, diplopi", "pitoz|göz kapağı|diplopi|çift görme"],
    ["Bulber tutulum ve miyastenik kriz", "disfaji|yutma|dizartri|bulber|kriz|solunum"],
    ["Timoma / timus hiperplazisi", "timus|timoma|timektomi"],
    ["Tanı: antikor, tekrarlayıcı sinir uyarımı (dekreman), tek lif EMG, buz testi", "dekreman|tekrarlayıcı sinir|repetitif|tek lif|buz testi|edrofonyum|tensilon"],
    ["Tedavi: piridostigmin, immünsüpresyon, IVIG/plazmaferez, timektomi", "piridostigmin|mestinon|kolinesteraz|immünsüpres|azatioprin|ivig|plazmaferez|ekulizumab|eculizumab|efgartigimod"]
  ]},
  { id: "status-epileptikus", tr: "Status epileptikus", en: "Status epilepticus", cat: "epi", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["A definition and classification of status epilepticus — Report of the ILAE Task Force. Epilepsia 2015", "https://doi.org/10.1111/epi.13121"],
          ["Evidence-based guideline: Treatment of convulsive status epilepticus in children and adults (AES). Epilepsy Curr 2016", "https://doi.org/10.5698/1535-7597-16.1.48"]]
    },
    c: [
    ["!5 dakikayı aşan nöbet ya da arada bilinç düzelmeden tekrarlayan nöbetler", "5 dakika|beş dakika|bilinç düzelmeden|arasında bilinç|tekrarlayan nöbet|sürekli nöbet"],
    ["!Nörolojik acil: süre uzadıkça kalıcı hasar ve mortalite", "acil|30 dakika|otuz dakika|kalıcı hasar|nöron hasar|mortalite|ölüm"],
    ["İlk adımlar: hava yolu, glukoz, tiamin", "hava yolu|abc|glukoz|şeker|tiamin|oksijen"],
    ["!Birinci basamak: benzodiazepin", "benzodiazepin|lorazepam|midazolam|diazepam"],
    ["İkinci basamak: levetirasetam, valproat, fosfenitoin", "levetirasetam|valproat|fenitoin|fosfenitoin|ikinci basamak|lakozamid"],
    ["Refrakter: anestezik infüzyon, sürekli EEG, yoğun bakım", "refrakter|propofol|tiyopental|ketamin|anestezi|entübasyon|yoğun bakım|eeg"],
    ["Nonkonvülzif status", "nonkonvülzif|konvülzif olmayan|non konvülzif"]
  ]},
  { id: "subaraknoid-kanama", tr: "Subaraknoid kanama", en: "Subarachnoid hemorrhage", cat: "vas", lvl: 2,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage (AHA/ASA). Stroke 2023", "https://doi.org/10.1161/STR.0000000000000436"],
          ["Spontaneous subarachnoid haemorrhage (Seminar). Lancet 2022", "https://doi.org/10.1016/S0140-6736(22)00938-2"]]
    },
    c: [
    ["!En sık nontravmatik neden: anevrizma rüptürü", "anevrizma|rüptür|willis|yırtıl|patla"],
    ["!Hayatının en şiddetli, ani baş ağrısı", "hayatının en|en şiddetli|gök gürültüsü|thunderclap|ani başlayan|şimşek|ani baş"],
    ["Ense sertliği, kusma, bilinç kaybı", "ense sert|kusma|bilinç|meningeal"],
    ["!Tanı: BT; negatifse LP'de ksantokromi", "tomografi|bt|bete|ksantokrom|lomber ponksiyon|ponksiyon"],
    ["BT anjiyografi / DSA", "anjiyo|anjio|dsa"],
    ["Anevrizmanın klip ya da koil ile kapatılması", "klip|koil|coil|endovasküler|güvenceye"],
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
    ["!Omuriliğin yarım kesisi (hemiseksiyon)", "hemiseksiyon|yarım kesi|yarısı|yarı kesi|lateral yarı|hemikord"],
    ["!Aynı tarafta motor güçsüzlük (kortikospinal yol)", "aynı taraf|ipsilateral|kortikospinal|motor|piramidal"],
    ["!Aynı tarafta derin duyu ve vibrasyon kaybı (dorsal kolon)", "derin duyu|vibrasyon|titreşim|pozisyon|propriosep|dorsal kolon|arka kordon|posterior kolon"],
    ["!Karşı tarafta ağrı ve ısı duyusu kaybı (spinotalamik)", "karşı taraf|kontralateral|ağrı|ısı|sıcak|spinotalamik"],
    ["Spinotalamik lifler 1–2 segment içinde çaprazlaşır", "çaprazla|segment|dekusasyon|çapraz"],
    ["Nedenler: penetran travma, tümör, disk, MS", "bıçak|travma|penetran|tümör|ateşli silah|disk"],
    ["Prognoz omurilik sendromları içinde görece iyi", "prognoz"]
  ]},
  { id: "horner", tr: "Horner sendromu", en: "Horner syndrome", cat: "lok", lvl: 2,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Horner syndrome: clinical perspectives. Eye Brain 2015", "https://doi.org/10.2147/EB.S63633"],
          ["Adult Horner's syndrome: a combined clinical, pharmacological, and imaging algorithm. Eye 2013", "https://doi.org/10.1038/eye.2012.281"]]
    },
    c: [
    ["!Okülosempatik yolun kesintisi", "sempatik|okülosempatik"],
    ["!Pitoz, miyozis, anhidroz", "pitoz|miyozis|myozis|anhidroz|terleme|küçük pupil|göz bebeği"],
    ["!Üç nöronlu yol: hipotalamus → C8–T2 → süperior servikal ganglion", "hipotalamus|siliospinal|budge|servikal ganglion|üç nöron|birinci nöron|ikinci nöron|üçüncü nöron|preganglion|postganglion"],
    ["Nedenler: Pancoast tümörü, karotis diseksiyonu, Wallenberg", "pancoast|apeks|akciğer|karotis|diseksiyon|wallenberg|lateral medüller"],
    ["Karanlıkta artan anizokori, dilatasyon gecikmesi", "anizokori|karanlık|dilatasyon gecikme|gecikme"],
    ["Farmakolojik test: apraklonidin / kokain damla", "apraklonidin|kokain|hidroksiamfetamin|damla"]
  ]},
  { id: "wernicke", tr: "Wernicke ensefalopatisi", en: "Wernicke encephalopathy", cat: "bil", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol 2010", "https://doi.org/10.1111/j.1468-1331.2010.03153.x"],
          ["Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol 2007", "https://pubmed.ncbi.nlm.nih.gov/17434099/"]]
    },
    c: [
    ["!Tiamin (B1) eksikliği", "tiamin|b1|b 1"],
    ["!Konfüzyon, oftalmopleji/nistagmus, ataksi", "konfüzyon|bilinç bulanık|oftalmopleji|nistagmus|göz hareket|ataksi"],
    ["Risk: alkol, malnütrisyon, hiperemezis, bariatrik cerrahi", "alkol|malnütris|beslenme|hiperemez|kusma|bariatrik"],
    ["!Glukozdan önce tiamin verilmeli", "glukozdan önce|şekerden önce|glukoz vermeden|önce tiamin|glukozdan once"],
    ["MR: mamiller cisimler, medial talamus, periakuaduktal", "mamiller|medial talamus|periakuadukt"],
    ["Korsakoff sendromuna ilerleme: amnezi, konfabulasyon", "korsakoff|konfabul|amnezi|bellek"],
    ["Tedavi: yüksek doz IV tiamin", "intravenöz|iv|yüksek doz|parenteral|damar yolu"]
  ]},
  { id: "huntington", tr: "Huntington hastalığı", en: "Huntington disease", cat: "har", lvl: 2,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Huntington disease (Primer). Nat Rev Dis Primers 2015", "https://doi.org/10.1038/nrdp.2015.5"],
          ["Huntington's disease: a clinical review. Eur J Neurol 2018", "https://doi.org/10.1111/ene.13413"]]
    },
    c: [
    ["!Otozomal dominant, HTT geninde CAG tekrar genişlemesi", "otozomal dominant|dominant|cag|trinükleotid|tekrar|huntingtin|kromozom|htt"],
    ["Antisipasyon (özellikle babadan geçişte)", "antisipasyon|babadan|baba|erken başla"],
    ["!Kore", "kore|istemsiz hareket|dans"],
    ["!Psikiyatrik ve bilişsel bozulma", "psikiyatri|depresyon|demans|bilişsel|davranış|intihar|irritabil"],
    ["Kaudat nükleus atrofisi", "kaudat|striatum|bazal gangli|atrofi"],
    ["Semptomatik tedavi: tetrabenazin, antipsikotik; genetik danışmanlık", "tetrabenazin|deutetrabenazin|vmat|antipsikotik|genetik danışma|semptomatik"]
  ]},
  { id: "nph", tr: "Normal basınçlı hidrosefali", en: "Normal pressure hydrocephalus", cat: "bil", lvl: 2,
    src: {
      k: ["Greenberg's Handbook of Neurosurgery, 10. baskı (2023)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Guidelines for management of idiopathic normal pressure hydrocephalus (third edition). Neurol Med Chir (Tokyo) 2021", "https://doi.org/10.2176/nmc.st.2020-0292"],
          ["Diagnosing idiopathic normal-pressure hydrocephalus (International iNPH Guidelines). Neurosurgery 2005", "https://doi.org/10.1227/01.NEU.0000168185.29659.C5"]]
    },
    c: [
    ["!Triad: yürüme bozukluğu, idrar inkontinansı, demans", "yürüme|manyetik yürüyüş|yapışık|inkontinans|idrar|demans|bilişsel"],
    ["!Ventrikül genişlemesi, normal açılış basıncı", "ventrikül|genişle|dilatasyon|açılış basıncı|normal basınç"],
    ["Görüntüleme: Evans indeksi > 0,3, DESH", "evans|0 3|desh|kallozal"],
    ["Tap testi / lomber drenajla düzelme", "tap test|boşaltma|lomber ponksiyon|lomber drenaj|hacimli"],
    ["!Tedavi: ventrikülo-peritoneal şant", "şant|ventrikülo|peritoneal|vp"],
    ["Geri döndürülebilir demans nedeni", "geri dönüş|geri döndürül|tedavi edilebilir|reversibl"]
  ]},
  { id: "kume-bas-agrisi", tr: "Küme baş ağrısı", en: "Cluster headache", cat: "agr", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["European Academy of Neurology guidelines on the treatment of cluster headache. Eur J Neurol 2023", "https://doi.org/10.1111/ene.15956"],
          ["The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia 2018", "https://doi.org/10.1177/0333102417738202"]]
    },
    c: [
    ["!Trigeminal otonomik sefalji", "trigeminal otonomik|otonomik sefalji|tak"],
    ["!Tek taraflı orbital/temporal çok şiddetli ağrı, 15–180 dk", "orbital|göz çevresi|göz arkası|şiddetli|15|180|tek taraf"],
    ["!Aynı tarafta otonomik bulgular: gözyaşı, burun akıntısı, kızarıklık", "lakrimasyon|gözyaşı|burun akıntısı|rinore|kızarıklık|konjonktiva|pitoz|miyozis|horner"],
    ["Huzursuzluk, ajitasyon (migrenden farkı)", "huzursuz|ajitasyon|yerinde duramaz|volta"],
    ["Sirkadiyen düzen, küme dönemleri, genç erkek", "sirkadiyen|aynı saat|gece|dönem|küme|erkek|sigara"],
    ["Akut: %100 oksijen, SC sumatriptan", "oksijen|sumatriptan|triptan"],
    ["Profilaksi: verapamil; geçiş tedavisi steroid, büyük oksipital sinir bloğu", "verapamil|lityum|steroid|oksipital|galkanezumab"]
  ]},
  { id: "als", tr: "Amiyotrofik lateral skleroz", en: "Amyotrophic lateral sclerosis", cat: "nmh", lvl: 2,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["European Academy of Neurology (EAN) guideline on the management of amyotrophic lateral sclerosis. Eur J Neurol 2024", "https://doi.org/10.1111/ene.16264"],
          ["Amyotrophic lateral sclerosis (Seminar). Lancet 2022", "https://doi.org/10.1016/S0140-6736(22)01272-7"]]
    },
    c: [
    ["!Üst ve alt motor nöron dejenerasyonu", "üst motor|alt motor|motor nöron|dejenerasyon"],
    ["!Spastisite, hiperrefleksi, Babinski + atrofi, fasikülasyon", "spastisite|hiperrefleksi|babinski|atrofi|fasikülasyon|seğirme"],
    ["!Duyu, göz hareketleri ve sfinkterler korunur", "duyu korun|duyu kaybı yok|göz hareket|sfinkter|korunur"],
    ["Bulber tutulum, solunum yetmezliği", "bulber|yutma|disfaji|dizartri|solunum|ventilasyon"],
    ["Genetik: SOD1, C9orf72; FTD ile ilişki", "sod1|c9orf|c9orf72|frontotemporal|tdp"],
    ["Tanı: EMG'de yaygın denervasyon", "emg|denervasyon|el escorial|gold coast|elektromiyo"],
    ["Tedavi: riluzol; SOD1 mutasyonunda tofersen; NIV, PEG, multidisipliner bakım", "riluzol|edaravon|tofersen|niv|noninvaziv|peg|gastrostomi|multidisipliner"]
  ]},
  { id: "lewy-demans", tr: "Lewy cisimcikli demans", en: "Dementia with Lewy bodies", cat: "bil", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Diagnosis and management of dementia with Lewy bodies: Fourth consensus report of the DLB Consortium. Neurology 2017", "https://doi.org/10.1212/WNL.0000000000004058"],
          ["Revised criteria for diagnosis and staging of Alzheimer's disease (ayırıcı tanı için). Alzheimers Dement 2024", "https://doi.org/10.1002/alz.13859"]]
    },
    c: [
    ["!Alfa-sinüklein, kortikal Lewy cisimcikleri", "sinüklein|lewy"],
    ["!Dalgalanan bilişsel durum ve dikkat", "dalgalan|fluktu|dikkat"],
    ["!Tekrarlayan ayrıntılı görsel halüsinasyonlar", "görsel halüsin|halüsinasyon"],
    ["Parkinsonizm", "parkinsonizm|parkinson|rijidite|bradikinezi"],
    ["REM uyku davranış bozukluğu", "rem|uyku davranış|rüya"],
    ["Nöroleptik duyarlılığı", "nöroleptik|antipsikotik|haloperidol|duyarlılık"],
    ["Bir yıl kuralı (Parkinson demansından ayrım)", "bir yıl|1 yıl|parkinson demans"],
    ["DaTscan; tedavide kolinesteraz inhibitörü", "datscan|dat|dopamin taşıyıcı|rivastigmin|donepezil|kolinesteraz"]
  ]},
  { id: "trigeminal-nevralji", tr: "Trigeminal nevralji", en: "Trigeminal neuralgia", cat: "agr", lvl: 2,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["European Academy of Neurology guideline on trigeminal neuralgia. Eur J Neurol 2019", "https://doi.org/10.1111/ene.13950"],
          ["Trigeminal neuralgia: New classification and diagnostic grading for practice and research. Neurology 2016", "https://doi.org/10.1212/WNL.0000000000002840"]]
    },
    c: [
    ["!Trigeminal dağılımda saniyeler süren elektrik çarpması gibi ağrı", "trigemin|elektrik çarp|bıçak|saniye|paroksism|v2|v3|yüz ağrı"],
    ["!Tetikleyiciler: çiğneme, konuşma, diş fırçalama, dokunma", "tetik|çiğne|diş fırçala|konuşma|yüz yıka|rüzgar|dokun"],
    ["Neden: nörovasküler kompresyon (süperior serebellar arter)", "nörovasküler|kompresyon|bası|süperior serebellar|damar bası"],
    ["Genç veya iki taraflı olguda MS düşün", "multipl skleroz|ms|genç|bilateral|iki taraflı|demiyeliniz"],
    ["!İlk seçenek: karbamazepin (okskarbazepin)", "karbamazepin|okskarbazepin"],
    ["Dirençte: mikrovasküler dekompresyon, radyocerrahi, perkütan girişim", "mikrovasküler dekompresyon|dekompresyon|gamma|radyocerrahi|perkütan|jannetta|janetta"]
  ]},

  /* ====================== ZOR ====================== */
  { id: "cadasil", tr: "CADASIL", en: "CADASIL", cat: "vas", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Monogenic cerebral small-vessel diseases: diagnosis and therapy. Consensus recommendations of the European Academy of Neurology. Eur J Neurol 2020", "https://doi.org/10.1111/ene.14183"],
          ["CADASIL. Lancet Neurol 2009", "https://doi.org/10.1016/S1474-4422(09)70127-9"]]
    },
    c: [
    ["!NOTCH3 mutasyonu, otozomal dominant", "notch|otozomal dominant|dominant|19"],
    ["!Küçük damar arteriyopatisi: subkortikal infarktlar, lökoensefalopati", "küçük damar|arteriyopati|subkortikal|lakün|lökoensefalopati|beyaz cevher"],
    ["Auralı migren (sık ilk bulgu)", "auralı migren|migren|aura"],
    ["Bilişsel bozulma, psikiyatrik bulgular", "demans|bilişsel|psikiyatri|depresyon|apati"],
    ["!MR: anterior temporal kutup ve eksternal kapsül tutulumu", "temporal kutup|temporal pol|eksternal kapsül|dış kapsül"],
    ["Deri biyopsisi: granüler osmiyofilik materyal (GOM)", "granüler osmiyofilik|gom|deri biyopsi|biyopsi|elektron mikroskop"],
    ["Spesifik tedavi yok; vasküler risk kontrolü", "spesifik tedavi|tedavi yok|risk faktör|sigara|destek"]
  ]},
  { id: "anti-nmda", tr: "Anti-NMDA reseptör ensefaliti", en: "Anti-NMDA receptor encephalitis", cat: "imm", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["A clinical approach to diagnosis of autoimmune encephalitis. Lancet Neurol 2016", "https://doi.org/10.1016/S1474-4422(15)00401-9"],
          ["Treatment and prognostic factors for long-term outcome in patients with anti-NMDA receptor encephalitis: an observational cohort study. Lancet Neurol 2013", "https://doi.org/10.1016/S1474-4422(12)70310-1"]]
    },
    c: [
    ["!NMDA reseptörü GluN1 alt birimine karşı antikor", "nmda|glun1|nr1|otoantikor|antikor|otoimmün"],
    ["Genç kadın, over teratomu", "genç kadın|kadın|over|yumurtalık|teratom"],
    ["!Psikiyatrik başlangıç → nöbet, oro-fasiyal diskinezi, otonomik instabilite, hipoventilasyon", "psikiyatri|psikoz|halüsin|davranış|nöbet|diskinezi|orofasiyal|oro fasiyal|otonom|hipoventilasyon|katatoni|mutizm"],
    ["!BOS'ta antikor (serumdan duyarlı), lenfositik pleositoz", "beyin omurilik|bos|lenfositik|pleositoz"],
    ["EEG: extreme delta brush", "delta brush|ekstrem delta|delta"],
    ["Tedavi: steroid + IVIG/plazmaferez, tümör çıkarımı; ikinci basamak rituksimab", "steroid|metilprednizolon|ivig|plazmaferez|rituksimab|siklofosfamid|tümör rezeksiyon|teratom çıkar|immünoterapi"]
  ]},
  { id: "psp", tr: "Progresif supranükleer palsi", en: "Progressive supranuclear palsy", cat: "har", lvl: 3,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Clinical diagnosis of progressive supranuclear palsy: The Movement Disorder Society criteria. Mov Disord 2017", "https://doi.org/10.1002/mds.26987"],
          ["Advances in progressive supranuclear palsy: new diagnostic criteria, biomarkers, and therapeutic approaches. Lancet Neurol 2017", "https://doi.org/10.1016/S1474-4422(17)30157-6"]]
    },
    c: [
    ["!4-tekrarlı (4R) tauopati", "tau|tauopati|4r|dört tekrar"],
    ["!Vertikal supranükleer bakış paralizisi (özellikle aşağı bakış)", "vertikal|dikey|aşağı bakış|bakış paralizi|supranükleer|sakkad"],
    ["!Erken postüral instabilite, geriye düşmeler", "düşme|geriye|postüral instabil|denge"],
    ["Aksiyel rijidite, levodopaya zayıf yanıt", "aksiyel|boyun|simetrik|levodopa"],
    ["Psödobulber bulgular, frontal disfonksiyon, şaşkın yüz ifadesi", "psödobulber|frontal|apati|disfaji|dizartri|şaşkın|procerus|alın kırış"],
    ["MR: kolibri/penguen bulgusu (mezensefalon atrofisi)", "kolibri|hummingbird|penguen|mezensefalon|orta beyin|mickey"],
    ["Fenotipler: Richardson sendromu ve diğerleri", "richardson|alt tip|fenotip"]
  ]},
  { id: "msa", tr: "Multisistem atrofi", en: "Multiple system atrophy", cat: "har", lvl: 3,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["The Movement Disorder Society Criteria for the Diagnosis of Multiple System Atrophy. Mov Disord 2022", "https://doi.org/10.1002/mds.29005"],
          ["Multiple system atrophy (Primer). Nat Rev Dis Primers 2022", "https://doi.org/10.1038/s41572-022-00382-6"]]
    },
    c: [
    ["!Alfa-sinüklein, oligodendroglial sitoplazmik inklüzyonlar", "sinüklein|oligodendro|glial sitoplazmik|papp|lantos|inklüzyon"],
    ["!Erken ve belirgin otonomik yetmezlik", "otonom|ortostatik|hipotansiyon|idrar|erektil|ürogenital"],
    ["!MSA-P (parkinsonizm) ve MSA-C (serebellar ataksi)", "msa p|msa c|parkinsonizm|serebellar|ataksi"],
    ["Levodopaya zayıf yanıt", "levodopa|zayıf yanıt|yanıt vermez|yanıtsız"],
    ["MR: haç (hot cross bun) bulgusu, putaminal kenar", "çapraz|hot cross|haç|putamen|putaminal|pons"],
    ["Stridor, uyku apnesi, REM uyku davranış bozukluğu", "stridor|apne|rem|uyku"],
    ["Hızlı ilerleme, kötü prognoz", "prognoz|hızlı ilerle|yaşam süresi"]
  ]},
  { id: "lambert-eaton", tr: "Lambert-Eaton miyastenik sendromu", en: "Lambert-Eaton myasthenic syndrome", cat: "nmh", lvl: 3,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol 2011", "https://doi.org/10.1016/S1474-4422(11)70245-9"],
          ["Lambert-Eaton myasthenic syndrome (LEMS): a rare autoimmune presynaptic disorder often associated with cancer. J Neurol 2017", "https://doi.org/10.1007/s00415-017-8541-9"]]
    },
    c: [
    ["!Presinaptik P/Q tipi voltaj kapılı kalsiyum kanalı antikoru", "presinaptik|kalsiyum kanal|voltaj kapılı|vgcc|p q"],
    ["!Küçük hücreli akciğer kanseriyle paraneoplastik ilişki", "küçük hücreli|akciğer|paraneoplastik|kanser|sclc"],
    ["!Proksimal bacak güçsüzlüğü, hiporefleksi", "proksimal|kalça|uyluk|hiporefleksi|arefleksi|refleks"],
    ["Kısa egzersizle geçici güç ve refleks artışı (fasilitasyon)", "düzel|egzersiz sonrası|fasilitasyon|kolaylaş|artış"],
    ["Otonomik: ağız kuruluğu, erektil disfonksiyon", "ağız kuru|otonom|erektil|kabız"],
    ["EMG: düşük CMAP, yüksek frekansta %100'ü aşan artış", "inkreman|cmap|yüksek frekans|yüzde 100|100|50 hz"],
    ["Tedavi: amifampridin (3,4-diaminopiridin), tümör tedavisi, immünoterapi", "diaminopiridin|amifampridin|tümör tedavi|ivig|immünsüpres"]
  ]},
  { id: "cjd", tr: "Creutzfeldt-Jakob hastalığı", en: "Creutzfeldt-Jakob disease", cat: "bil", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Biomarkers and diagnostic guidelines for sporadic Creutzfeldt-Jakob disease. Lancet Neurol 2021", "https://doi.org/10.1016/S1474-4422(20)30477-4"],
          ["CJD Diagnostic Criteria. CDC (güncel sayfa)", "https://www.cdc.gov/creutzfeldt-jakob/hcp/clinical-overview/diagnosis.html"]]
    },
    c: [
    ["!Prion hastalığı (yanlış katlanmış prion proteini)", "prion|priyon|yanlış katlan|prp"],
    ["!Hızlı ilerleyen demans", "hızlı ilerleyen|hızla ilerleyen|demans|hızlı"],
    ["Miyoklonus, ataksi, görsel bulgular, akinetik mutizm", "miyoklonus|irkilme|ataksi|akinetik|mutizm|görsel"],
    ["Formlar: sporadik, genetik, iatrojenik, varyant", "sporadik|familyal|genetik|iatrojenik|varyant|deli dana|bse|sığır|kornea|dura"],
    ["EEG: periyodik keskin dalga kompleksleri", "periyodik keskin|keskin dalga|eeg|periyodik"],
    ["!MR difüzyon: kortikal kurdele, bazal ganglion; varyantta pulvinar", "kurdele|ribbon|difüzyon|bazal gangli|pulvinar|kaudat|putamen"],
    ["BOS: RT-QuIC, 14-3-3, total tau", "quic|rt quic|14 3 3|tau"],
    ["Tedavi yok, ölümcül seyir", "tedavi yok|ölümcül|fatal|bir yıl|1 yıl|ölüm"]
  ]},
  { id: "wallenberg", tr: "Lateral medüller (Wallenberg) sendrom", en: "Lateral medullary syndrome", cat: "vas", lvl: 3,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Pure lateral medullary infarction: clinical-radiological correlation of 130 acute, consecutive patients. Brain 2003", "https://doi.org/10.1093/brain/awg169"],
          ["2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack (AHA/ASA). Stroke 2021", "https://doi.org/10.1161/STR.0000000000000375"]]
    },
    c: [
    ["!Vertebral arter veya PICA tıkanması", "vertebral|pica|posterior inferior serebellar"],
    ["!Çapraz duyu kaybı: yüzde aynı, gövdede karşı tarafta ağrı-ısı", "çapraz|yüzde aynı|karşı taraf|kontralateral|ağrı|ısı|trigeminal|spinotalamik"],
    ["Aynı tarafta Horner", "horner|pitoz|miyozis"],
    ["!Disfaji, ses kısıklığı, hıçkırık (nükleus ambiguus)", "disfaji|yutma|ses kısık|disfoni|hıçkırık|ambiguus"],
    ["Aynı tarafta ataksi, vertigo, nistagmus", "ataksi|vertigo|nistagmus|baş dönme|vestibüler"],
    ["Belirgin motor güçsüzlük yok", "güçsüzlük yok|motor korun|piramidal"],
    ["Gençte vertebral diseksiyon; MR difüzyonla tanı", "diseksiyon|difüzyon|mr|emar"]
  ]},
  { id: "miller-fisher", tr: "Miller Fisher sendromu", en: "Miller Fisher syndrome", cat: "nmh", lvl: 3,
    src: {
      k: ["Preston & Shapiro, Electromyography and Neuromuscular Disorders, 4. baskı (2020)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Guillain-Barré and Miller Fisher syndromes — new diagnostic classification. Nat Rev Neurol 2014", "https://pubmed.ncbi.nlm.nih.gov/25072194/"],
          ["Clinical features and prognosis of Miller Fisher syndrome. Neurology 2001", "https://doi.org/10.1212/WNL.56.8.1104"]]
    },
    c: [
    ["!Guillain-Barré varyantı", "guillain|gbs|varyant|gibe"],
    ["!Oftalmopleji, ataksi, arefleksi", "oftalmopleji|göz hareket|ataksi|arefleksi|refleks"],
    ["!Anti-GQ1b antikoru", "gq1b|gq 1b|gangliozid"],
    ["Öncül enfeksiyon (Campylobacter)", "enfeksiyon|kampilobakter|campylobacter|ishal"],
    ["Bickerstaff beyin sapı ensefaliti ile aynı spektrum", "bickerstaff|bilinç|spektrum|beyin sapı"],
    ["BOS'ta albüminositolojik disosiasyon", "albüminositolojik|albumino|disosiasyon|dissosiasyon|protein"],
    ["İyi prognoz; gerekirse IVIG/plazmaferez", "prognoz|ivig|plazmaferez|kendiliğinden|iyileş"]
  ]},
  { id: "nmosd", tr: "Nöromiyelitis optika spektrum bozukluğu", en: "Neuromyelitis optica spectrum disorder", cat: "imm", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["International consensus diagnostic criteria for neuromyelitis optica spectrum disorders. Neurology 2015", "https://doi.org/10.1212/WNL.0000000000001729"],
          ["Update on the diagnosis and treatment of NMOSD — revised recommendations of NEMOS. Part II: attack therapy and long-term management. J Neurol 2024", "https://doi.org/10.1007/s00415-023-11910-z"]]
    },
    c: [
    ["!Akuaporin-4 (AQP4) IgG, astrositopati", "akuaporin|aquaporin|aqp4|aqp 4|astrosit"],
    ["!Ağır optik nörit ve uzun segment transvers miyelit (≥3 vertebra)", "optik nörit|miyelit|uzun segment|longitudinal|üç vertebra|3 vertebra|transvers"],
    ["Area postrema sendromu: inatçı hıçkırık, bulantı-kusma", "area postrema|hıçkırık|kusma|bulantı"],
    ["!MS'den ayrım: bazı MS ilaçları kötüleştirir", "multipl skleroz|ms|kötüleştir|interferon|fingolimod|natalizumab|ayırıcı"],
    ["MOG antikoru hastalığı ayrı bir antite", "mog"],
    ["Atak: yüksek doz steroid, plazmaferez", "steroid|metilprednizolon|plazmaferez|plazma değişim"],
    ["Önleme: ekulizumab, inebilizumab, satralizumab, rituksimab", "ekulizumab|eculizumab|inebilizumab|satralizumab|rituksimab|azatioprin|mikofenolat|ravulizumab"]
  ]},
  { id: "pres", tr: "Posterior reversibl ensefalopati sendromu", en: "Posterior reversible encephalopathy syndrome", cat: "vas", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Bradley and Daroff's Neurology in Clinical Practice, 8. baskı (2022)"],
      m: [["Posterior reversible encephalopathy syndrome: clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol 2015", "https://doi.org/10.1016/S1474-4422(15)00111-8"],
          ["Posterior reversible encephalopathy syndrome. J Neurol 2017", "https://doi.org/10.1007/s00415-016-8377-8"]]
    },
    c: [
    ["!Vazojenik ödem: otoregülasyon bozukluğu ve endotel disfonksiyonu", "vazojenik|ödem|otoregülasyon|endotel"],
    ["!Tetikleyiciler: ani hipertansiyon, eklampsi, takrolimus/siklosporin, kemoterapi, böbrek yetmezliği", "hipertansi|tansiyon|eklampsi|preeklampsi|takrolimus|siklosporin|kemoterapi|böbrek"],
    ["Klinik: baş ağrısı, nöbet, görme bozukluğu, ensefalopati", "baş ağrı|nöbet|görme|kortikal körlük|ensefalopati|konfüzyon"],
    ["!MR: bilateral parieto-oksipital T2/FLAIR hiperintensite", "parieto|oksipital|posterior|flair|t2|hiperintens|beyaz cevher"],
    ["Tedavi: kan basıncını kontrollü düşürme, tetikleyiciyi kesme", "kan basıncı|tetikleyici|kesil|antihipertansif|magnezyum"],
    ["Çoğunlukla geri döner; kanama/infarkt olabilir", "geri dön|reversibl|düzel|kanama|infarkt"]
  ]},
  { id: "subakut-kombine-dejenerasyon", tr: "Subakut kombine dejenerasyon", en: "Subacute combined degeneration", cat: "lok", lvl: 3,
    src: {
      k: ["Adams and Victor's Principles of Neurology, 12. baskı (2023)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["Clinical practice. Vitamin B12 deficiency. N Engl J Med 2013", "https://doi.org/10.1056/NEJMcp1113996"],
          ["Guidelines for the diagnosis and treatment of cobalamin and folate disorders (BCSH). Br J Haematol 2014", "https://doi.org/10.1111/bjh.12959"]]
    },
    c: [
    ["!B12 (kobalamin) eksikliği", "b12|b 12|kobalamin|siyanokobalamin"],
    ["!Dorsal kolon ve lateral kortikospinal yol dejenerasyonu", "dorsal kolon|arka kordon|posterior kolon|lateral kortikospinal|kortikospinal|lateral kolon"],
    ["Vibrasyon ve pozisyon duyusu kaybı, duyusal ataksi, Romberg", "vibrasyon|titreşim|derin duyu|pozisyon|romberg|duyusal ataksi"],
    ["Spastisite ve Babinski; eşlik eden nöropatiyle Aşil refleksi kaybı", "spastisite|babinski|nöropati|aşil refleks|aşil tendon|refleks"],
    ["Nedenler: pernisiyöz anemi, metformin, PPI, vegan diyet, nitröz oksit", "pernisiyöz|intrinsik faktör|metformin|proton pompa|ppi|vegan|nitröz|azot protoksit|gülme gazı|gastrektomi"],
    ["Laboratuvar: makrositoz, yüksek metilmalonik asit ve homosistein", "makrositik|megaloblastik|metilmalonik|homosistein"],
    ["MR: dorsal kolonda ters V (tavşan kulağı) T2 sinyali", "ters v|tavşan kulağı|t2|hiperintens"],
    ["!Tedavi: parenteral B12, erken başlama", "replasman|intramüsküler|parenteral|enjeksiyon|erken tedavi|yerine koy"]
  ]},
  { id: "ino", tr: "İnternükleer oftalmopleji", en: "Internuclear ophthalmoplegia", cat: "lok", lvl: 3,
    src: {
      k: ["Brazis, Masdeu, Biller — Localization in Clinical Neurology, 8. baskı (2021)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["Internuclear ophthalmoplegia. Pract Neurol 2017", "https://pn.bmj.com/content/17/2/149.long"],
          ["Internuclear ophthalmoplegia: unusual causes in 114 of 410 patients. Arch Neurol 2005", null]]
    },
    c: [
    ["!Medial longitudinal fasikulus (MLF) lezyonu", "medial longitudinal|mlf|fasikül"],
    ["!Lezyon tarafındaki gözde addüksiyon kusuru", "addüksiyon|içe bakama|içe hareket|lezyon tarafı|aynı taraf"],
    ["!Karşı gözde abdüksiyon nistagmusu", "abdüksiyon|nistagmus|karşı göz|dışa"],
    ["Konverjans korunur", "konverjans|yakına bakış|korunur"],
    ["Genç/bilateral → MS; yaşlı → iskemi", "multipl skleroz|ms|bilateral|iskemi|inme|genç|yaşlı"],
    ["Bir buçuk sendromu (PPRF/abdusens + MLF)", "bir buçuk|one and a half|pprf|paramedian pontin|abdusens"],
    ["WEBINO", "webino|ekzotropya"]
  ]},
  { id: "dravet", tr: "Dravet sendromu", en: "Dravet syndrome", cat: "epi", lvl: 3,
    src: {
      k: ["Swaiman's Pediatric Neurology, 7. baskı (2025)", "Adams and Victor's Principles of Neurology, 12. baskı (2023)"],
      m: [["International consensus on diagnosis and management of Dravet syndrome. Epilepsia 2022", "https://doi.org/10.1111/epi.17274"],
          ["ILAE classification and definition of epilepsy syndromes with onset in neonates and infants. Epilepsia 2022", null]]
    },
    c: [
    ["!SCN1A mutasyonu (Nav1.1 sodyum kanalı, çoğu de novo)", "scn1a|scn 1a|sodyum kanal|nav1|de novo"],
    ["!İlk yaşta ateşle tetiklenen uzun hemiklonik/jeneralize nöbetler", "ilk yaş|bebek|ateş|febril|uzamış|uzun süren|hemiklonik|status"],
    ["Sonra miyoklonik, atipik absans ve fokal nöbetler; gelişimsel gerileme", "miyoklonik|absans|gelişim|gerileme|zihinsel|entelektüel"],
    ["!Sodyum kanal blokerlerinden kaçınılmalı", "kaçın|karbamazepin|lamotrijin|fenitoin|sodyum kanal bloke|kötüleştir"],
    ["Tedavi: valproat, klobazam, stiripentol, fenfluramin, kannabidiol", "valproat|klobazam|stiripentol|fenfluramin|kannabidiol|cannabidiol|cbd|ketojenik"],
    ["SUDEP riski", "sudep|beklenmedik ölüm|ani ölüm"]
  ]},
  { id: "wilson", tr: "Wilson hastalığı", en: "Wilson disease", cat: "har", lvl: 3,
    src: {
      k: ["Jankovic, Hallett, Okun, Comella, Fahn — Principles and Practice of Movement Disorders, 3. baskı (2021)", "Harrison's Principles of Internal Medicine, 22. baskı (2025)"],
      m: [["A multidisciplinary approach to the diagnosis and management of Wilson disease: 2022 Practice Guidance on Wilson disease from the AASLD. Hepatology 2023", null],
          ["EASL-ERN Clinical Practice Guidelines on Wilson's disease. J Hepatol 2025", null]]
    },
    c: [
    ["!ATP7B mutasyonu, otozomal resesif bakır birikimi", "atp7b|atp 7b|otozomal resesif|resesif|bakır"],
    ["!Karaciğer ve bazal ganglion tutulumu, genç hasta", "karaciğer|hepatik|siroz|bazal gangli|genç"],
    ["Kanat çırpan tremor, distoni, dizartri, parkinsonizm; psikiyatrik bulgular", "kanat çırpan|tremor|distoni|dizartri|parkinsonizm|psikiyatri|davranış"],
    ["!Kayser-Fleischer halkası", "kayser|fleischer|kornea|halka"],
    ["Lab: düşük seruloplazmin, yüksek 24 saatlik idrar bakırı", "seruloplazmin|idrar bakır|24 saat"],
    ["MR: dev panda yüzü", "panda|t2"],
    ["Tedavi: şelatörler (penisilamin, trientin), çinko; gerekirse nakil", "penisilamin|trientin|çinko|şelat|nakil|transplant"]
  ]}
]
});
