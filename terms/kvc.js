/* Kalp ve damar cerrahisi — Unprompted Tıp konu paketi.
   Seçim mantığı: TUS'ta sık sorulan ve acilde ekstremite/hayat kurtaran KVC konuları; ESC 2024 periferik arter ve aort hastalıkları, ESVS (AAA 2024,
   karotis 2023, venöz 2022, akut iskemi 2020), GVG 2019 KAKİ, ESC/EACTS 2025 kapak ve ESC 2024 KKS kılavuzlarına dayanır.
   Kolay = aort diseksiyonu, AAA, PAH, akut iskemi, varis; Orta = karotis, KABG/PKG, tamponad, KAKİ, Fallot; Zor = BAT, TOS, KPB, postop AF, MY cerrahisi.
   Kapsam dışı: akut mezenter iskemi (genel cerrahi), medikal PE/DVT ve aort darlığı (kardiyoloji). */
(function () {
const RU = "Rutherford's Vascular Surgery and Endovascular Therapy, 10. baskı (2022)";
const SS = "Sabiston and Spencer Surgery of the Chest, 10. baskı (2023)";
const KB = "Kirklin/Barratt-Boyes Cardiac Surgery, 4. baskı (2013)";
const PAAD = ["2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. Eur Heart J 2024", "https://doi.org/10.1093/eurheartj/ehae179"];
const AAA = ["European Society for Vascular Surgery (ESVS) 2024 Clinical Practice Guidelines on the Management of Abdominal Aorto-Iliac Artery Aneurysms. Eur J Vasc Endovasc Surg 2024", "https://doi.org/10.1016/j.ejvs.2023.11.002"];
const ALI = ["European Society for Vascular Surgery (ESVS) 2020 Clinical Practice Guidelines on the Management of Acute Limb Ischaemia. Eur J Vasc Endovasc Surg 2020", "https://doi.org/10.1016/j.ejvs.2019.09.006"];
const GVG = ["Global Vascular Guidelines on the Management of Chronic Limb-Threatening Ischemia. J Vasc Surg 2019", "https://doi.org/10.1016/j.jvs.2019.02.016"];
const KAR = ["European Society for Vascular Surgery (ESVS) 2023 Clinical Practice Guidelines on the Management of Atherosclerotic Carotid and Vertebral Artery Disease. Eur J Vasc Endovasc Surg 2023", "https://doi.org/10.1016/j.ejvs.2022.04.011"];
const VEN = ["European Society for Vascular Surgery (ESVS) 2022 Clinical Practice Guidelines on the Management of Chronic Venous Disease of the Lower Limbs. Eur J Vasc Endovasc Surg 2022", "https://doi.org/10.1016/j.ejvs.2021.12.024"];
const REV = ["2018 ESC/EACTS Guidelines on myocardial revascularization. Eur Heart J 2019", "https://doi.org/10.1093/eurheartj/ehy394"];
const CCS = ["2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J 2024", "https://doi.org/10.1093/eurheartj/ehae177"];
const VHD = ["2025 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J 2025", "https://doi.org/10.1093/eurheartj/ehaf194"];
const PER = ["2025 ESC Guidelines for the management of myocarditis and pericarditis. Eur Heart J 2025", "https://doi.org/10.1093/eurheartj/ehaf192"];
const ACHD = ["2020 ESC Guidelines for the management of adult congenital heart disease. Eur Heart J 2021", "https://doi.org/10.1093/eurheartj/ehaa554"];
const CPB = ["2019 EACTS/EACTA/EBCP guidelines on cardiopulmonary bypass in adult cardiac surgery. Br J Anaesth 2019", "https://doi.org/10.1016/j.bja.2019.09.012"];
const AF = ["2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J 2024", "https://doi.org/10.1093/eurheartj/ehae176"];

UP.add({ id: "kvc", subs: {
    aort: "Aort hastalıkları",
    arter: "Periferik arter ve karotis",
    ven: "Venöz hastalıklar",
    kalp: "Erişkin kalp cerrahisi",
    konj: "Konjenital kalp cerrahisi"
  },
terms: [
  /* ====================== KOLAY ====================== */
  { id: "kvc-aort-diseksiyonu", tr: "Akut aort diseksiyonu", en: "Acute aortic dissection", cat: "aort", lvl: 1,
    src: { k: [SS, RU], m: [PAAD,
      ["2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation 2022", null]] },
    c: [
      ["!İntima yırtığı ile media içinde yalancı lümen oluşması", "intima yırt|intimal yırt|yalancı lümen|sahte lümen|false lumen|gerçek lümen|flap|entry tear|giriş yırtığı"],
      ["Ani, yırtılır tarzda, sırta vuran göğüs ağrısı", "yırtılır|yırtılma tarzı|bıçak saplan|sırta vuran|sırta yayıl|interskapüler|kürek kemikleri arası|tearing"],
      ["Risk: hipertansiyon, Marfan/bağ dokusu hastalığı, biküspit aort kapak", "marfan|ehlers|loeys|bağ dokusu|biküspit|bikuspit|kistik medial|turner"],
      ["Kollar arası nabız/tansiyon farkı, aort yetersizliği, malperfüzyon", "nabız fark|tansiyon fark|kan basıncı fark|iki kol arası|kollar arası|aort yetersizli|malperfüzyon|nabız defisit|nabız kayb"],
      ["!Tanı: kontrastlı BT anjiyografi (instabil hastada TEE)", "bt anjiyo|bt anjio|bete anjiyo|tomografik anjiyo|ct anjiyo|kontrastlı bt|kontrastlı tomografi|bilgisayarlı tomografi anjiyo|transözofageal|tee"],
      ["!Stanford A (çıkan aort) acil cerrahi; Stanford B önce medikal", "tip a acil cerrahi|tip a acil ameliyat|tip a cerrahi|tip a da acil|tip a hemen ameliyat|çıkan aort tutulumunda acil|çıkan aortu tutan tip a|tip b de önce medikal|tip b önce medikal|tip b de medikal|tip b medikal|tip b ise medikal"],
      ["Komplike tip B'de TEVAR (endovasküler stent greft)", "tevar|torasik endovasküler|endovasküler stent|stent greft|komplike tip b|komplike b"],
      ["Medikal: beta bloker ile kalp hızı ve tansiyon kontrolü, ağrı kontrolü", "beta bloker|esmolol|labetalol|metoprolol|kalp hızını düşür|nabzı düşür|dp dt|impuls kontrol"]
    ]},
  { id: "kvc-abdominal-aort-anevrizmasi", tr: "Abdominal aort anevrizması", en: "Abdominal aortic aneurysm", cat: "aort", lvl: 1,
    src: { k: [RU, "Sabiston Textbook of Surgery, 21. baskı (2021)"], m: [AAA, PAAD] },
    c: [
      ["!Tanım: aortanın normal çapının belirgin genişlemesi, çoğu infrarenal", "infrarenal|renal arterlerin altı|böbrek arterlerinin altı|üç santim|3 cm|30 mm|çap genişle|kalıcı genişle|fokal genişle"],
      ["Risk: ileri yaş, erkek, sigara, aile öyküsü", "sigara|tütün|erkek cinsiyet|yaşlı erkek|aile öykü"],
      ["Çoğu asemptomatik; pulsatil kitle, tarama ile saptanır", "asemptomatik|belirti vermez|semptomsuz|pulsatil kitle|nabız atan kitle|tesadüf|insidental"],
      ["!Tarama ve izlem ultrasonla", "ultrason|ultrasonografi|usg|ultrasonla tara|tarama"],
      ["!Elektif onarım eşiği: erkekte 5,5 cm, kadında 5,0 cm ya da hızlı büyüme/semptom", "5,5|5.5|beş buçuk|55 mm|elli beş|kadında 5|kadınlarda 5|kadında beş|kadınlarda beş|kadında 50 mm|hızlı büyü|yılda 1 cm|yılda bir santim"],
      ["Onarım: EVAR ya da açık cerrahi (greft interpozisyonu)", "evar|endovasküler anevrizma|endovasküler onarım|açık cerrahi|açık onarım|greft|tüp greft"],
      ["Rüptür: ağrı + hipotansiyon + pulsatil kitle; permisif hipotansiyon ve acil onarım", "rüptür|yırtıl|patla|permisif hipotansiyon|izin verilen hipotansiyon|hipotansif direkt"],
      ["EVAR sonrası endoleak için ömür boyu görüntüleme izlemi", "endoleak|endo leak|endoliks|kaçak|ömür boyu|uzun dönem izlem"]
    ]},
  { id: "kvc-periferik-arter-hastaligi", tr: "Periferik arter hastalığı (alt ekstremite)", en: "Lower extremity peripheral arterial disease", cat: "arter", lvl: 1,
    src: { k: [RU, "Sabiston Textbook of Surgery, 21. baskı (2021)"], m: [PAAD, GVG] },
    c: [
      ["!Ateroskleroz; risk: sigara, diyabet", "ateroskleroz|aterosklerot|sigara|diyabet|diabet"],
      ["!Klodikasyo intermittan: yürümekle gelen, dinlenmekle geçen baldır ağrısı", "klodikasyo|kladikasyo|claudicatio|yürüyünce|yürümekle|yürüme mesafe|dinlenince geç|dinlenmekle geç"],
      ["!Ayak bileği-kol indeksi (ABI) ≤0,90 tanısal", "ayak bileği kol|ayak bileği brakiyal|abi değeri|abi ölç|abi indeks|ankle brachial|0,90|0.90|0,9 un altı|0,9 altı|0,9 ve altı|sıfır virgül doksan"],
      ["Fontaine/Rutherford evrelemesi", "fontaine|fonten|rutherford"],
      ["Yapılandırılmış (denetimli) egzersiz tedavisi", "denetimli egzersiz|denetimli yürüyüş|gözetimli yürüyüş|gözetimli egzersiz|yapılandırılmış egzersiz|egzersiz program|yürüme program|supervised"],
      ["Antitrombotik + statin + risk faktörü kontrolü; silostazol semptom için", "statin|aspirin|klopidogrel|rivaroksaban|silostazol|sigarayı bırak|sigara bırak"],
      ["Revaskülarizasyon (endovasküler ya da baypas) yaşam kalitesini bozan klodikasyo ya da KAKİ'de", "revaskülariz|anjiyoplasti|balon|stent|baypas|bypass|endarterektomi|femoropopliteal"]
    ]},
  { id: "kvc-akut-ekstremite-iskemisi", tr: "Akut ekstremite iskemisi", en: "Acute limb ischaemia", cat: "arter", lvl: 1,
    src: { k: [RU, "Sabiston Textbook of Surgery, 21. baskı (2021)"], m: [ALI, PAAD] },
    c: [
      ["!Ani perfüzyon kaybı: emboli (AF) ya da tromboz", "emboli|embolik|tromboz|in situ|atriyal fibrilasyon|ritim bozukluğu|af hastası"],
      ["!6P: ağrı, solukluk, nabızsızlık, parestezi, paralizi, soğukluk", "6p|altı p|pain|pallor|pulseless|parestez|paraliz|paralysis|poikilo|solukluk|nabızsızlık|nabız alınam|soğukluk|soğuk ekstremite"],
      ["!Rutherford sınıflaması: I canlı, IIa/IIb tehdit altında, III geri dönüşsüz", "rutherford|iia|iib|2a|2b|iki a|iki b|tehdit altında|geri dönüşsüz|irreversibl|canlı ekstremite"],
      ["Hemen heparin (antikoagülasyon) başlanması", "heparin|antikoagül|fraksiyone olmayan"],
      ["Embolektomi (Fogarty kateteri) ya da kateter yönlendirmeli tromboliz", "embolektomi|fogarty|trombektomi|tromboliz|trombolit|kateter yönlendirmeli"],
      ["Reperfüzyon sonrası kompartman sendromu → fasiyotomi", "kompartman|fasyotomi|fasiyotomi|reperfüzyon hasar"],
      ["Rutherford III'te amputasyon", "amputasyon|ampütasyon|primer amput"]
    ]},
  { id: "kvc-kronik-venoz-hastalik", tr: "Variköz venler ve kronik venöz hastalık", en: "Varicose veins and chronic venous disease", cat: "ven", lvl: 1,
    src: { k: [RU, "Sabiston Textbook of Surgery, 21. baskı (2021)"], m: [VEN,
      ["The 2020 update of the CEAP classification system and reporting standards. J Vasc Surg Venous Lymphat Disord 2020", null]] },
    c: [
      ["!Venöz kapak yetmezliği ve venöz reflü (büyük safen ven)", "kapak yetmez|kapakçık yetmez|valvüler yetmez|reflü|reflü|büyük safen|vena safena|safen ven|safenofemoral"],
      ["!CEAP sınıflaması (C0–C6)", "ceap|c0|c6|klinik etiyolojik anatomik"],
      ["Belirtiler: bacakta ağırlık, ödem, pigmentasyon, venöz ülser (medial malleol)", "ağırlık hissi|bacaklarda ağırlık|ödem|pigmentasyon|lipodermatoskleroz|venöz ülser|medial malleol|iç topuk"],
      ["!Tanı: dupleks ultrasonografi ile reflü", "dupleks|doppler|renkli doppler|venöz ultrason"],
      ["Kompresyon tedavisi (çorap/bandaj)", "kompresyon|varis çorabı|basınçlı çorap|elastik çorap|bandaj"],
      ["Endovenöz termal ablasyon (lazer/radyofrekans) ilk seçenek; skleroterapi, köpük", "endovenöz|termal ablasyon|lazer ablasyon|radyofrekans|evla|rfa|skleroterapi|köpük|siyanoakrilat|yapıştırıcı"],
      ["Açık cerrahi (yüksek ligasyon + stripping) artık ikinci planda", "stripping|striping|yüksek ligasyon|ligasyon|flebektomi|safenektomi"]
    ]},

  /* ====================== ORTA ====================== */
  { id: "kvc-karotis-darligi", tr: "Karotis arter darlığı", en: "Carotid artery stenosis", cat: "arter", lvl: 2,
    src: { k: [RU, "Sabiston Textbook of Surgery, 21. baskı (2021)"], m: [KAR, PAAD] },
    c: [
      ["!Semptomatik: aynı taraf TİA, inme ya da amarozis fugaks", "semptomlu|tia|geçici iskemik atak|amarozis|amaurosis|monoküler görme kayb|ipsilateral|aynı taraf"],
      ["!Tanı: dupleks ultrason; doğrulama BT/MR anjiyografi; NASCET ölçümü", "dupleks|doppler|nascet|nasket|bt anjiyo|mr anjiyo|emar anjiyo|bete anjiyo"],
      ["!Semptomatik %50–99 darlıkta karotis endarterektomi", "endarterektomi|endarterektom|cea|yüzde elli|%50|50 99|elli ile doksan dokuz"],
      ["Semptomlardan sonra 14 gün içinde (erken) girişim", "14 gün|on dört gün|iki hafta|ilk iki hafta|erken girişim|erken ameliyat"],
      ["Karotis stentleme (CAS) seçilmiş hastada alternatif", "stentle|karotis stent|cas|stent"],
      ["Asemptomatik darlıkta en iyi medikal tedavi; yüksek riskli seçilmiş hastada girişim", "asemptomatik|en iyi medikal|optimal medikal|best medical|antiplatelet|statin"],
      ["Komplikasyon: perioperatif inme, kranial sinir hasarı, hiperperfüzyon", "kranial sinir|hipoglossal|hiperperfüzyon|perioperatif inme"]
    ]},
  { id: "kvc-kabg-pki", tr: "Koroner arter baypas greftleme ve PKG seçimi", en: "CABG versus PCI", cat: "kalp", lvl: 2,
    src: { k: [SS, KB], m: [CCS, REV] },
    c: [
      ["!Kalp takımı (Heart Team) kararı", "kalp takım|kalp ekib|heart team|multidisipliner|kardiyolog ve cerrah"],
      ["!SYNTAX skoru ile anatomik karmaşıklık", "syntax|sintaks|anatomik karmaşık|anatomik kompleks"],
      ["!Sol ana (orta-yüksek SYNTAX) ya da çok damar hastalığı + diyabet/düşük EF'de KABG tercih", "yüksek syntax|syntax skoru yüksek|kabg tercih|baypas tercih|baypas cerrahisi tercih|cerrahi tercih|cerrahiyi öne çıkar|diyabette kabg|diyabette baypas|diyabette cerrahi|diyabetik hastada baypas|diyabetik hastada kabg|çok damar hastalığında kabg|çok damar hastalığında baypas|üç damar hastalığında baypas|üç damar hastalığında kabg"],
      ["Sol internal mammaryan arter → LAD (en iyi uzun dönem açıklık)", "internal mammar|lima|mammaria|internal torasik|lad|sol ön inen"],
      ["Diğer greftler: safen ven, radiyal arter", "safen ven|vena safena|radiyal arter|radial arter"],
      ["Pompalı (KPB) ya da pompasız (off-pump) teknik", "off pump|pompasız|çalışan kalp|kardiyopulmoner baypas|pompalı|kalp akciğer makine"],
      ["Basit (düşük SYNTAX) tek/iki damar hastalığında PKG", "pkg|pci|perkütan|stent|tek damar"]
    ]},
  { id: "kvc-kardiyak-tamponad", tr: "Kardiyak tamponad", en: "Cardiac tamponade", cat: "kalp", lvl: 2,
    src: { k: [SS, "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine, 13. baskı (2025)"], m: [PER,
      ["Acute cardiac tamponade. N Engl J Med 2003", null]] },
    c: [
      ["!Perikardiyal sıvının kalp dolumunu engellemesi (birikim hızı önemli)", "dolum|diyastolik dolum|doluşu|birikim hız|hızlı biriken|perikard basın|intraperikardiyal basın"],
      ["!Beck triadı: hipotansiyon, juguler venöz dolgunluk, derinden gelen kalp sesleri", "beck|bek triad|juguler|boyun ven|kalp sesleri derinden|kalp seslerinin azalma|boğuk kalp ses"],
      ["Pulsus paradoksus", "paradoks|pulsus"],
      ["!Ekokardiyografi: sağ atriyum/ventrikül diyastolik kollapsı", "ekokardiyo|eko|kollaps|diyastolik çökme|sağ ventrikül çök|sağ atriyum çök|vena kava plet"],
      ["EKG: düşük voltaj, elektriksel alternans", "elektriksel alternans|elektrikal alternans|alternans|düşük voltaj"],
      ["Tedavi: perikardiyosentez ya da cerrahi drenaj (pencere)", "perikardiyosentez|perikardiosentez|perikardiyal pencere|perikard pencere|subksifoid|cerrahi drenaj"],
      ["Kalp cerrahisi sonrası / travma / aort diseksiyonunda cerrahi (resternotomi)", "resternotomi|re sternotomi|kalp ameliyatı sonrası|postoperatif tamponad|travma|penetran|diseksiyon"]
    ]},
  { id: "kvc-kronik-ekstremiteyi-tehdit-eden-iskemi", tr: "Kronik ekstremiteyi tehdit eden iskemi (KAKİ/CLTI)", en: "Chronic limb-threatening ischemia", cat: "arter", lvl: 2,
    src: { k: [RU, "Sabiston Textbook of Surgery, 21. baskı (2021)"], m: [GVG, PAAD] },
    c: [
      ["!İstirahat ağrısı, iyileşmeyen yara ya da gangren (2 haftadan uzun)", "istirahat ağrı|dinlenme ağrı|gece ağrı|iyileşmeyen yara|iyileşmeyen ülser|gangren|doku kayb"],
      ["!WIfI sınıflaması (yara, iskemi, ayak enfeksiyonu)", "wifi|wıfı|vayfay|wound ischemia|yara iskemi enfeksiyon"],
      ["GLASS anatomik evreleme", "glass|global anatomik"],
      ["Perfüzyon ölçümü: ayak parmak basıncı, TcPO2 (diyabette ABI yanıltıcı)", "parmak basınc|toe pressure|tcpo2|transkütan|oksijen basınc|kalsifik|sıkıştırılamaz|kompresibl olmayan"],
      ["!Uzman merkezde acil revaskülarizasyon değerlendirmesi (endovasküler ya da baypas)", "revaskülariz|baypas|bypass|endovasküler|anjiyoplasti|distal baypas|otojen ven"],
      ["Yara bakımı, enfeksiyon kontrolü, multidisipliner ayak ekibi", "yara bakım|debridman|ayak ekibi|multidisipliner|enfeksiyon kontrol|antibiyot"],
      ["Revaskülarizasyon olanaksızsa majör amputasyon", "amputasyon|ampütasyon|diz altı|diz üstü|majör amput"]
    ]},
  { id: "kvc-fallot-tetralojisi", tr: "Fallot tetralojisi", en: "Tetralogy of Fallot", cat: "konj", lvl: 2,
    src: { k: [KB, SS], m: [
      ["Tetralogy of Fallot. Lancet 2009", "https://doi.org/10.1016/S0140-6736(09)60657-7"], ACHD] },
    c: [
      ["!Dört bileşen: VSD, pulmoner (sağ ventrikül çıkım) darlık, ata binen aort, sağ ventrikül hipertrofisi", "vsd|ventriküler septal|ventrikül septal|pulmoner darl|pulmoner stenoz|çıkım yolu darl|infundibul|ata binen|overriding|sağ ventrikül hipertrofi"],
      ["!En sık siyanotik konjenital kalp hastalığı", "siyanotik|siyanoz|morarma"],
      ["Hiperisiyanotik (tet) nöbetleri; çömelme pozisyonu", "tet nöbet|tet spell|hipersiyanotik|hiperisiyanotik|çömel|squat|diz göğüs"],
      ["Göğüs grafisi: çizme (bot) şeklinde kalp", "çizme|bot şekl|boot|coeur en sabot"],
      ["!Tam düzeltme: VSD kapatılması + sağ ventrikül çıkım yolu rekonstrüksiyonu (transanüler yama)", "tam düzeltme|total düzeltme|total onarım|tam onarım|transanüler|transanuler|yama|patch|çıkım yolu rekonstr|çıkım yolu genişlet"],
      ["Palyasyon: Blalock-Taussig şantı (sistemik–pulmoner)", "blalock|taussig|bt şant|sistemik pulmoner şant|modifiye blalock"],
      ["Geç dönem: pulmoner yetersizlik → pulmoner kapak replasmanı; aritmi/ani ölüm", "pulmoner yetersiz|pulmoner regürjitasyon|pulmoner kapak replas|pulmoner kapak değiş|ani ölüm|ventriküler taşikardi"]
    ]},

  /* ====================== ZOR ====================== */
  { id: "kvc-buyuk-arter-transpozisyonu", tr: "Büyük arterlerin transpozisyonu", en: "Transposition of the great arteries", cat: "konj", lvl: 3,
    src: { k: [KB, SS], m: [ACHD,
      ["2018 AHA/ACC Guideline for the Management of Adults With Congenital Heart Disease. Circulation 2019", null]] },
    c: [
      ["!Aort sağ ventrikülden, pulmoner arter sol ventrikülden çıkar: paralel dolaşım", "sağ ventrikülden çık|sol ventrikülden çık|paralel dolaşım|ventrikülo arteriyel uyumsuz|ventrikuloarteriyel uyumsuz|yer değiştir"],
      ["!Yenidoğanda belirgin siyanoz; yaşam karışım yerine (ASD/PDA/VSD) bağlı", "siyanoz|siyanotik|karışım|miks|asd|pda|duktus|foramen ovale"],
      ["Prostaglandin E1 ile duktusun açık tutulması", "prostaglandin|pge1|alprostadil|duktusu açık"],
      ["Balon atriyal septostomi (Rashkind)", "rashkind|raşkind|balon atriyal septostomi|septostomi"],
      ["Göğüs grafisi: ipe asılı yumurta görünümü", "ipe asılı yumurta|yumurta görünüm|egg on a string|yan yatmış yumurta"],
      ["!Arteriyel switch (Jatene) ameliyatı + koroner transferi", "arteriyel switch|arterial switch|arteriyal switch|jatene|switch ameliyat|koroner transfer|koroner reimplant"],
      ["Eski atriyal switch (Senning/Mustard): sistemik sağ ventrikül sorunu", "senning|mustard|atriyal switch|sistemik sağ ventrikül"]
    ]},
  { id: "kvc-torasik-outlet-sendromu", tr: "Torasik çıkış (outlet) sendromu", en: "Thoracic outlet syndrome", cat: "arter", lvl: 3,
    src: { k: [RU, SS], m: [
      ["Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome. J Vasc Surg 2016", "https://doi.org/10.1016/j.jvs.2016.04.039"], PAAD] },
    c: [
      ["!Üç tip: nörojenik (en sık), venöz, arteriyel", "nörojenik|nörojen|venöz tos|venöz tip|arteriyel tos|arteriyel tip|arteryel"],
      ["!Brakiyal pleksus / subklavyen damar basısı (skalen üçgen, kostoklavikular aralık)", "brakiyal pleksus|brakial pleksus|skalen|kostoklavikül|subklavyen|pektoralis minör"],
      ["Servikal kosta ve anatomik varyasyonlar", "servikal kosta|servikal kaburga|boyun kaburga|kostal anomali"],
      ["Venöz tip: efor trombozu (Paget–Schroetter)", "paget|schroetter|şroter|efor tromboz|effort tromboz|aksiller subklavyen tromboz|aksillo subklavyen"],
      ["Arteriyel tip: subklavyen anevrizma, distal emboli", "subklavyen anevriz|poststenotik|distal emboli|el iskemi|parmak iskemi"],
      ["Provokatif testler (Adson, Roos/EAST) ve skalen blok", "adson|roos|east test|elevated arm|kol kaldırma|skalen blok|skalen enjeksiyon"],
      ["!Tedavi: fizik tedavi; dirençli/vasküler tipte birinci kot rezeksiyonu ± skalenektomi", "birinci kot|birinci kaburga|1. kot|kot rezeksiyon|kaburga rezeksiyon|skalenektomi|dekompresyon|fizik tedavi|fizyoterapi"]
    ]},
  { id: "kvc-kardiyopulmoner-baypas", tr: "Kardiyopulmoner baypas: temel ilkeler", en: "Cardiopulmonary bypass basics", cat: "kalp", lvl: 3,
    src: { k: [KB, SS], m: [CPB,
      ["2024 EACTS/EACTAIC/EBCP Guidelines on cardiopulmonary bypass in adult cardiac surgery. Eur J Cardiothorac Surg 2025", null]] },
    c: [
      ["!Devre: venöz kanül → rezervuar → pompa → oksijenatör → arteriyel kanül (aort)", "venöz kanül|arteriyel kanül|aortik kanül|oksijenatör|oksijenatör|rezervuar|roller pompa|santrifüj pompa|devre"],
      ["!Sistemik heparinizasyon, ACT ile izlem; sonda protamin ile nötralizasyon", "heparin|act|aktive pıhtılaşma|activated clotting|protamin"],
      ["!Kardiyopleji ile diyastolik arrest ve aort klempi", "kardiyopleji|kardiyopleji|aort klemp|kros klemp|cross clamp|kardiyak arrest|diyastolik arrest|potasyum"],
      ["Hipotermi ile metabolik koruma", "hipotermi|soğutma|ısıtma"],
      ["Hemodilüsyon ve priming solüsyonu", "hemodilüsyon|hemodilusyon|priming|prime"],
      ["Sistemik inflamatuar yanıt, koagülopati, nörolojik/böbrek komplikasyon", "inflamatuar yanıt|sirs|sistemik inflamasyon|koagülopati|kanama|böbrek hasar|akut böbrek|inme|nörokognitif|postperfüzyon"],
      ["Pompadan ayrılma (weaning) ve gerekirse mekanik destek", "pompadan ayrıl|weaning|ayrılma|iabp|intraaortik balon|ecmo"]
    ]},
  { id: "kvc-postoperatif-af", tr: "Kalp cerrahisi sonrası atriyal fibrilasyon ve postperikardiyotomi sendromu", en: "Postoperative atrial fibrillation and postpericardiotomy syndrome", cat: "kalp", lvl: 3,
    src: { k: [SS, KB], m: [AF, PER] },
    c: [
      ["!Kalp cerrahisinden sonra en sık aritmi; ilk günlerde (genellikle 2–4. gün)", "en sık aritmi|en sık görülen aritmi|postoperatif af|poaf|ameliyat sonrası af|ikinci ile dördüncü|2 ile 4|ilk günler"],
      ["Tetikleyiciler: inflamasyon, sempatik aktivasyon, elektrolit bozukluğu, perikardit", "inflamasyon|sempatik|katekolamin|elektrolit|potasyum|magnezyum|hipokalemi|hipomagnezemi"],
      ["!Önleme: beta blokerin sürdürülmesi; amiodaron profilaksi; posterior perikardiyotomi", "beta bloker|amiodaron|profilaksi|posterior perikardiyotomi|önleme"],
      ["Tedavi: hız/ritim kontrolü, instabilde kardiyoversiyon", "hız kontrol|ritim kontrol|kardiyoversiyon|elektriksel kardiyoversiyon"],
      ["Uzun dönem inme riski: antikoagülasyon bireysel değerlendirilir", "antikoagül|doak|varfarin|inme riski|uzun dönem"],
      ["!Postperikardiyotomi sendromu: günler-haftalar sonra ateş, plevritik ağrı, perikard/plevra sıvısı", "postperikardiyotomi|post perikardiyotomi|perikardiyotomi sonrası|dressler|plevritik|perikardiyal efüzyon|plevral efüzyon"],
      ["Postperikardiyotomi tedavisi: aspirin/NSAİİ ve kolşisin", "kolşisin|kolsisin|colchicine|nsaii|nsai|ibuprofen|aspirin"]
    ]},
  { id: "kvc-mitral-yetersizligi-cerrahisi", tr: "Primer mitral yetersizliğinde cerrahi endikasyonlar", en: "Surgical indications in primary mitral regurgitation", cat: "kalp", lvl: 3,
    src: { k: [SS, KB], m: [VHD,
      ["Cardiac valve surgery: the \"French correction\". J Thorac Cardiovasc Surg 1983", null]] },
    c: [
      ["!Primer (dejeneratif, prolapsus/flail) ve sekonder (fonksiyonel) MY ayrımı", "dejeneratif|prolapsus|prolaps|flail|barlow|kordal rüptür|primer mitral|sekonder mitral|fonksiyonel mitral"],
      ["Carpentier fonksiyonel sınıflaması (yaprak hareketi tip I–III)", "carpentier|karpantiye|yaprak hareket|leaflet"],
      ["!Semptomatik ciddi primer MY'de cerrahi", "semptomatik ciddi|ciddi mitral yetersiz|şiddetli mitral|ciddi my|ciddi primer|semptomlu hasta"],
      ["Asemptomatikte LV disfonksiyonu (EF düşmesi, sol ventrikül genişlemesi), AF, pulmoner hipertansiyonda cerrahi", "sistol sonu|lvesd|end sistolik çap|yeni atriyal fibrilasyon|yeni af|sol ventrikül disfonksiyon"],
      ["!Onarım (repair) replasmana tercih edilir; ESC/EACTS 2025 düşük riskli asemptomatikte erken onarımı güçlendirdi", "replasman yerine onarım|kapak tamir|mitral tamir|replasman değil|mitral onarım|kapak onarım|mitral repair|valvüloplasti|anüloplasti|halka anüloplasti|yaprakçık onarım|erken onarım"],
      ["Ekokardiyografi (TEE) ile mekanizma ve onarılabilirlik", "transözofageal|tee|onarılabilir|onarım başarı|mekanizma"],
      ["Yüksek riskli hastada transkateter kenar-kenar onarım (TEER)", "teer|kenar kenar|edge to edge|mitraclip|mitra klip"]
    ]}
]
});
})();
