# Klinik inceleme listesi

Bir hekimin gözden geçireceği iş listesi. Her satır: konu, şüphe, kontrol edilecek kaynak. İçerik bu liste kapanmadan "hekim onaylı" sayılmaz.
Kaynak dosyalar: `docs/klinik/<branş>.md` (düzenleme oradan yapılır; bu dosya `node tools/klinik.js` ile üretilir).

**Açık inceleme maddesi: 80** (değişiklik kayıtları hariç)

<!-- kardiyoloji: 18 madde -->
## Kardiyoloji

| Konu id | Şüphe | Kontrol edilecek kaynak |
|---|---|---|
| (tüm konular) | Braunwald 13. baskı: Elsevier mağazası yayın tarihini 8 Aralık 2025 veriyor, bazı satıcılar telif yılını 2027 gösteriyor; "13. baskı (2025)" yazıldı. Harrison 22. baskının yayın yılı (2025) yayıncı sayfası + ikincil kaynaktan; baskının basılı çıkış tarihi ayrıca doğrulanmalı. Hurst's The Heart kullanılmadı (baskısı doğrulanmadı). | Elsevier ve McGraw Hill ürün sayfaları |
| (tüm konular) | Kılavuz önerilerinin çoğu (sınıf/kanıt düzeyi) ikincil özetlerden (ESC Essential Messages, ACC "Key Points", haber/özet sayfaları) doğrulandı; kılavuz tam metni tek tek açılmadı. | İlgili ESC kılavuzunun tam metni (doi bağlantıları terms dosyasında) |
| kar-stemi | Primer PCI 120 dk eşiği ve 12 saat içinde fibrinolitik doğrulandı. ST yükselmesi eşikleri (V2–V3'te yaş/cinsiyete göre mm değerleri) doğrulanamadığı için sayısal olarak yazılmadı; yalnız "ardışık iki derivasyon" kullanıldı. | 2023 ESC ACS kılavuzu, EKG tanı kriterleri bölümü; Fourth UDMI |
| kar-nste-aks | "Çok yüksek riskte acil (<2 saat), yüksek riskte 24 saat içinde invaziv strateji" zamanlaması ve hs-troponin 0/1 saat algoritması bellekten; arama sonuçlarında tam metinle doğrulanmadı. 2023 ESC'de 24 saat önerisinin sınıfı (IIa) kontrol edilmeli. ACC/AHA 2025 ile zamanlama ayrıntılarında fark olabilir; ESC esas alındı. | 2023 ESC ACS kılavuzu; 2025 ACC/AHA ACS kılavuzu |
| kar-hipertansiyon | ESC 2024 (≥140/90 tanı, 120–139/70–89 "yükselmiş KB", hedef sistolik 120–129, başlangıçta tek tablette ikili kombinasyon) doğrulandı. ESH 2023 hedefleri ve sınıflaması (evre 1–3 korunuyor, hedef ilk aşamada <140/90 sonra <130/80) ESC 2024'ten farklıdır; pakette ESC 2024 kullanıldı. Türkiye'de Türk Kardiyoloji Derneği/TÜHD uzlaşı metinleri ayrıca kontrol edilebilir. | ESC 2024 HT; ESH 2023; TKD/Türk Hipertansiyon ve Böbrek Hastalıkları Derneği |
| kar-atriyal-fibrilasyon | CHA2DS2-VA (cinsiyet çıkarıldı; ≥2 öneri, 1 düşünülmeli) ikincil kaynaklardan doğrulandı. ACC/AHA 2023 hâlâ CHA2DS2-VASc kullanıyor; pakette ESC 2024 esas alındı. "Mekanik kapak ve orta-ciddi mitral darlığında DOAK yok" bellekten. | ESC 2024 AF kılavuzu tam metni |
| kar-kalp-yetersizligi | EF sınırları (≤40, 41–49, ≥50) ve dört temel ilaç bellekten; ESC 2021 tam metninde kontrol edilmedi. CRT endikasyonu narratifte sayısız geçti. | ESC 2021 KY kılavuzu; 2023 odaklı güncelleme |
| kar-dislipidemi | Çok yüksek risk için LDL <55 mg/dL ve ≥%50 azalma 2019 kılavuzundan bellekten; 2025 güncellemesinin hedefleri değiştirmediği ikincil kaynakta yazıyor ama 55 mg/dL tam metinde kontrol edilmedi. Bempedoik asit önerisi 2025 güncellemesinde doğrulanamadı (yalnız anahtar sözcük olarak var, etiket/narratifte yok). | 2019 ESC/EAS ve 2025 Focused Update tam metni |
| kar-infektif-endokardit | "Birden fazla set kan kültürü" yazıldı; ESC 2023'teki tam set sayısı ve aralığı doğrulanmadı ("üç set" yalnız anahtar sözcük). Duke-ISCVID 2023 ile ESC 2023 modifiye Duke kriterleri arasında küçük farklar var. ESC 2023: ≥10 mm vejetasyonda 3–5 gün içinde acil cerrahi (ESC haber sayfası) — narratifte sayı kullanılmadı. Konu enfeksiyon hastalıkları branşıyla çakışabilir. | ESC 2023 endokardit kılavuzu; Duke-ISCVID 2023 |
| kar-aort-darligi | Ciddi AS ölçütleri (Vmax ≥4 m/s, ortalama gradiyent ≥40 mmHg, AVA <1 cm²) standart ders kitabı bilgisi, 2025 tam metninde kontrol edilmedi. TAVI yaş eşiğinin 75'ten 70'e inmesi ikincil kaynaklarla doğrulandı (ESC 2025); ACC/AHA 2020 farklı yaş sınırları kullanır. | 2025 ESC/EACTS kapak kılavuzu |
| kar-akut-perikardit | Tanı ölçütleri (4 ölçütten 2'si) 2015 ESC'den biliniyor; 2025 ESC'de aynen korunup korunmadığı doğrulanamadı, bu yüzden sayı yazılmadı. Kolşisin süresi ve doz yazılmadı. Anti-IL-1 önerisinin sınıfı kaynaklarda farklı ifade ediliyor. | 2025 ESC miyokardit-perikardit kılavuzu |
| kar-pulmoner-emboli | 2019 ESC hâlâ geçerli kılavuz olarak alındı; 2025–2026'da yeni ESC PE kılavuzu çıkıp çıkmadığı kontrol edilmeli. "En az 3 ay antikoagülasyon" bellekten. Konu göğüs hastalıkları branşıyla çakışabilir. | ESC kılavuz listesi; 2019 ESC PE kılavuzu |
| kar-av-bloklar | Mobitz II/ileri derece/tam blokta semptomdan bağımsız kalıcı pil (ESC 2021, sınıf I) bellekten; ACC/AHA 2018 ile ifade farkları olabilir. | 2021 ESC pacing kılavuzu |
| kar-hipertrofik-kardiyomiyopati | ≥15 mm (13–14 mm aile öyküsü/genetikle) ikincil kaynakla doğrulandı. LVOT obstrüksiyon eşiği (≥30, belirgin ≥50 mmHg) ikincil kaynaktan; pakette sayısız kullanıldı. Mavakamten'in ESC'de IIa olduğu ikincil kaynaktan; Türkiye'de ruhsat/erişim durumu bilinmiyor. "HCM Risk-SCD ile 5 yıllık risk" bellekten. | 2023 ESC KMP kılavuzu; 2024 AHA/ACC HCM |
| kar-brugada | Tip 1 paternde "≥2 mm" eşiği doğrulanamadığı için yazılmadı. Kinidin erişimi Türkiye'de sınırlı olabilir. İlaçla indüklenen tip 1 paternin tek başına tanı koydurmadığı (ESC 2022) narratifte ayrıntılandırılmadı. | 2022 ESC VA kılavuzu; J-wave konsensusu 2016 |
| kar-uzun-qt | QTc ≥480 ms / skor >3 ikincil kaynaktan (İspanyolca özet) doğrulandı. 2013 HRS/EHRA/APHRS DOI'si (10.1016/j.hrthm.2013.05.014) DrugBank/PubMed kaydında görüldü; HRS sayfası yönetici özeti için farklı DOI veriyor — kontrol edilmeli. | Heart Rhythm 2013;10:1932; 2022 ESC VA |
| kar-senkop | Sınıflama ve yüksek risk özellikleri ESC 2018 bellekten; karotis sinüs masajı yaş eşiği (>40) yazılmadı. | 2018 ESC senkop kılavuzu |
| kar-wpw | Preeksite AF'de stabil hastada prokainamid/ibutilid (ve flekainid/propafenon) önerisi ESC 2019'dan bellekten; Türkiye'de prokainamid ve ibutilid erişimi sınırlı olabilir. | 2019 ESC SVT kılavuzu |

<!-- noroloji: 35 madde -->
## Nöroloji

### İçerik değişiklikleri (bu gözden geçirmede yapılanlar)

Konu id'leri, `subs`, seviyeler ve konu sayısı (42) değişmedi. Tüm konulara 2 kitap + 2 makale (`src`) eklendi.

| Konu id | Değişiklik | Gerekçe / kaynak |
|---|---|---|
| iskemik-inme | Etiket: "IV trombolitik (alteplaz ya da tenekteplaz), ilk 4,5 saatte". Kaynak olarak 2019 AHA/ASA yerine 2026 AHA/ASA erken yönetim kılavuzu | 2026 kılavuzu (Stroke, Ocak 2026) 2018/2019 kılavuzunun yerini aldı; ESO 2023 tenekteplaz 0,25 mg/kg'ı alteplaza alternatif olarak öneriyor |
| migren | Akut tedavi etiketine gepant ve lasmiditan eklendi | AHS 2021 konsensus güncellemesi |
| epilepsi | Sınıflama etiketi "ILAE 2025: fokal, jeneralize, bilinmeyen" oldu | ILAE 2025 güncel nöbet sınıflaması (Beniczky, Epilepsia 2025): fokal, jeneralize, bilinmeyen, sınıflandırılamayan |
| alzheimer | Tanı etiketine amiloid/tau biyobelirteçleri (PET, BOS, plazma p-tau217) eklendi; tedavi etiketi "erken evrede anti-amiloid antikorlar (ARIA riski)" oldu | Alzheimer's Association 2024 revize kriterleri; CLARITY AD (lekanemab) |
| karpal-tunel | Steroid enjeksiyonu için "(kısa süreli yarar)" eklendi | AAOS 2024 CPG: enjeksiyonların uzun dönem yararı yok |
| esansiyel-tremor | "Aile öyküsü, otozomal dominant" → "Aile öyküsü sık; ailelerde otozomal dominant geçiş" | Sorumlu gen tanımlanmamış; her olgu otozomal dominant değil |
| lomber-radikulopati | "en sık L5–S1 disk hernisi" → "en sık L4–L5 / L5–S1 disk hernisi (L5, S1 kökü)" | En sık iki seviye birlikte; tek seviye vermek eksikti |
| multipl-skleroz | Temel kavram "McDonald 2024: yerde yayılım (optik sinir 5. bölge); zamanda yayılım artık her durumda gerekmez"; BOS kavramına kappa serbest hafif zincir, santral ven işareti, paramanyetik halka lezyonu eklendi | 2024 McDonald revizyonu (Montalban, Lancet Neurol 2025) |
| als | Tedavi etiketi "riluzol; SOD1 mutasyonunda tofersen; NIV, PEG, multidisipliner bakım" (edaravon etiketten çıkarıldı, anahtar olarak kaldı) | Edaravonun etkinliği tartışmalı (aşağıya bakınız) |
| kume-bas-agrisi | "oksipital blok" → "büyük oksipital sinir bloğu" | EAN 2023 küme baş ağrısı kılavuzu |
| guillain-barre / miller-fisher | Anahtarlar ayrıştırıldı (çapraz eşleşme); içerik değişmedi | — |
| tüm konular | Anahtar kelimeler konuya özgü hale getirildi (genel sözcükler "ani", "aspirin", "ekg", "statin", "bant", "en sık" vb. çıkarıldı); kardiyoloji ve acil tıp anlatımlarıyla çapraz eşleşme giderildi | Test: çapraz temiz 42/42 |

### Kontrol listesi (hekim gözden geçirmesi için)

| Konu id | Şüphe | Kontrol edilecek kaynak |
|---|---|---|
| (tümü) | Bradley and Daroff's 8. baskı: yayın tarihi 2021, telif/katalog yılı 2022; `src`'de 2022 yazıldı | Elsevier ürün sayfası (ISBN 9780323642613) |
| iskemik-inme | 2026 AHA/ASA kılavuzunun tenekteplaz önerisinin sınıfı ve trombektomi zaman penceresi ayrıntıları tam metinden doğrulanmadı; anlatımda sayı verilmedi ("pencere uzayabilir") | Prabhakaran ve ark., Stroke 2026, doi:10.1161/STR.0000000000000513 |
| iskemik-inme | Türkiye'de tenekteplazın inme endikasyonuyla ruhsat/geri ödeme durumu bilinmiyor | TİTCK, SGK SUT |
| tia | ABCD2 skorunun güncel kılavuzlardaki yeri (AHA 2021 risk sınıflamasında sınırlı değer); ikili antiplatelet süresi (21 gün) metinde sayı olarak verilmedi | Kleindorfer 2021 AHA/ASA; POINT/CHANCE |
| alzheimer | Lekanemab/donanemab Türkiye'de ruhsatlı değil (doğrulanmadı); donanemab yalnızca anahtar kelimede | TİTCK; EMA kararları |
| alzheimer | Plazma p-tau217'nin rutin klinik kullanımı ülkeye/laboratuvara göre değişir | Jack ve ark. 2024 |
| epilepsi | ILAE 2025 sınıflamasının Türkçe terminolojisi (ör. "bilinmeyen") Türk Epilepsi Derneği çevirisiyle karşılaştırılmadı | TND / ILAE Türkiye şubesi |
| bakteriyel-menenjit | WHO 2025 menenjit kılavuzu doğrulandı ama `src`'de ESCMID 2016 ve Lancet 2021 seçildi; deksametazonun antibiyotikle eş zamanlı/hemen önce verilmesi ESCMID'e göre yazıldı | WHO Guidelines on meningitis diagnosis, treatment and care (2025) |
| karpal-tunel | AAOS 2024 CPG'de CTS-6 klinik ölçeğinin elektrodiagnostik testin yerine kullanılabileceği belirtiliyor; anlatımda "sinir iletim çalışmasıyla doğrulanır" dendi (nöroloji pratiği). AAOS bağlantısı (aaos.org/cts2cpg) DOI değil, kurum sayfası | AAOS CPG 2024 |
| esansiyel-tremor | "En sık hareket bozukluğu" ifadesi yaygın ama kaynaklar arasında "en sık tremor bozukluğu" olarak da geçiyor | Bhatia 2018 MDS tremor konsensusu |
| glasgow-koma-skalasi | Anlatımda motor yanıt alt puanları (6–1) ayrıntılı verildi; kaynak Teasdale 1974/2014, ancak GCS-P (pupil) eklentisi işlenmedi | Teasdale 2014 Lancet Neurol |
| multipl-skleroz | 2024 McDonald ayrıntıları (hangi durumlarda zamanda yayılım gerekmez, 50 yaş üstü kuralları) tam metinden doğrulanmadı; etiket genel ifade edildi | Montalban ve ark., Lancet Neurol 2025;24:850–865 |
| miyastenia-gravis | Edrofonyum (Tensilon) testi birçok ülkede artık yok; yalnız anahtar kelime olarak tutuldu. Yeni ajanlar (rozanoliksizumab, zilukoplan, nipokalimab) Türkiye'de erişim durumu bilinmiyor | Narayanaswami 2021; TİTCK |
| status-epileptikus | Fokal bilinç bozukluklu status için t1=10 dk; etikette yalnız konvülzif (5/30 dk) eşik var | Trinka 2015 ILAE |
| subaraknoid-kanama | "İlk saatlerde BT duyarlılığı çok yüksek" (6 saat kuralı) sayı verilmeden yazıldı | AHA/ASA 2023 aSAH kılavuzu |
| brown-sequard | İkinci makale StatPearls (NCBI Bookshelf) — kılavuz değil, derleme | — |
| horner | Budge merkezi kaynaklarda C8–T1 ya da C8–T2 olarak geçiyor; etiket C8–T2 | Brazis 8. baskı |
| wernicke | Sechi & Serra 2007 makalesi için DOI bulunamadı; PubMed bağlantısı PMID (17434099) üzerinden yazıldı | PubMed 17434099 |
| huntington | — (kaynaklar doğrulandı) | — |
| nph | Evans indeksi > 0,3 eşiği Japon 2021 kılavuzu ve uluslararası kılavuzda var; DESH Japon kılavuzuna özgü | Nakajima 2021 |
| kume-bas-agrisi | EAN 2023 oksijen akımı (≥12 L/dk) ve steroid dozu metinde sayı olarak verilmedi | May ve ark., Eur J Neurol 2023 |
| als | Edaravon: EAN 2024 ALS kılavuzunun edaravon önerisi (ve EMA'nın ret kararı) tam metinden doğrulanmadı; etiketten çıkarıldı. Tofersen'in Türkiye'de erişimi bilinmiyor | Van Damme ve ark., Eur J Neurol 2024 |
| lewy-demans | İkinci makale (Jack 2024 Alzheimer kriterleri) DLB'ye özgü değil; prodromal DLB kriterleri (McKeith 2020) doğrulanamadığı için kullanılmadı | McKeith ve ark., Neurology 2020 (prodromal DLB) |
| cadasil | — | — |
| anti-nmda | Over teratomu oranı yaşa göre değişir; sayı verilmedi | Titulaer 2013 |
| lambert-eaton | EMG inkremanı için klasik eşik %100; bazı yazarlar %60 kullanıyor. Etiket %100 (klasik) | Titulaer 2011; Preston & Shapiro 4. baskı |
| cjd | CDC kriterleri sayfası güncel web sayfası (makale değil) | cdc.gov |
| wallenberg | İkinci makale (AHA 2021 ikincil korunma) konuya özgü değil; lateral medüller sendroma özgü ikinci güncel derleme doğrulanamadı | — |
| miller-fisher | Wakerley 2014 için DOI 10.1038/nrneurol.2014.138 görüldü, bağlantı PubMed sayfası olarak verildi | PubMed 25072194 |
| nmosd | Ravulizumab ve diğer biyolojiklerin Türkiye'de ruhsat/geri ödeme durumu bilinmiyor | TİTCK; NEMOS 2024 |
| subakut-kombine-dejenerasyon | — | — |
| ino | Keane 2005 (Arch Neurol 62:714–717) için bağlantı doğrulanamadı → null. Virgo & Plant 2017 bağlantısı dergi sayfası | PubMed; pn.bmj.com |
| dravet | ILAE 2022 neonatal/infantil epilepsi sendromları makalesi (Zuberi ve ark., Epilepsia 2022) bağlantısı doğrulanamadı → null | Epilepsia 2022;63:1349– (kontrol) |
| wilson | AASLD 2022 Practice Guidance (Hepatology 2023) ve EASL-ERN 2025 Wilson kılavuzu bağlantıları web aramasıyla doğrulanamadı (arama kotası doldu) → null; başlıklar da tam metinden kontrol edilmeli | AASLD ve EASL resmi sayfaları |
| wilson | 24 saatlik idrar bakırı eşiği (AASLD >40 µg vs klasik >100 µg) metinde sayı olarak verilmedi | AASLD 2022; EASL-ERN 2025 |

<!-- acil: 27 madde -->
## Acil tıp

Not: Bu oturumda WebFetch ağ kısıtı nedeniyle hiçbir sayfa açılamadı (resus.org.uk, mheducation.com, hsgm.saglik.gov.tr erişilemedi); doğrulamalar yalnız web arama sonuç özetleriyle yapıldı. Kılavuz tam metinleri tek tek okunmadı. Arama kotası dolduğu için aşağıdaki bazı maddeler ikinci kez kontrol edilemedi.

| Konu id | Şüphe | Kontrol edilecek kaynak |
|---|---|---|
| (tüm konular) | Tintinalli 9. baskı: perakende kayıtları Ekim/Kasım 2019 yayın tarihi veriyor (telif yılı 2020 olabilir); "9. baskı (2019)" yazıldı. 10. baskı aramalarda bulunamadı; çıkmışsa güncellenmeli. | McGraw Hill ürün sayfası |
| (zehirlenme konuları) | Goldfrank's Toxicologic Emergencies 12. baskının varlığı McGraw Hill sayfasında doğrulandı, ancak yayın yılı bulunamadı; yıl yazılmadı. | McGraw Hill ürün sayfası / WorldCat |
| (travma konuları) | ATLS 11. baskı (Ağustos 2025, xABCDE) ACS sayfalarından doğrulandı; kitap içeriği (iğne dekompresyon yeri, yanık sıvı formülü, kanama sınıfları) 11. baskı metniyle karşılaştırılamadı. ACS "ATLS 11" web sayfası makale yerine kullanıldı. | ATLS 11 Student Course Manual |
| (resüsitasyon konuları) | ERC 2025 ile AHA 2025 ana noktalarda uyumlu kabul edildi; ERC 2025 ALS için RCUK "2021'den büyük değişiklik yok" diyor. Dozlar (adrenalin 1 mg, amiodaron 300 mg) ERC 2025 algoritma metninde görülmedi, yalnız zamanlama görüldü; dozlar AHA/Red Cross 2025 kartlarından ve klasik bilgiden. | ERC 2025 ALS (doi 10.1016/j.resuscitation.2025.110769) tam metni |
| acil-temel-yasam-destegi | ERC 2025 BLS bağlantısı arama sonucunda görülen DOI'den kuruldu (doi.org). 100–120/dk ve 5–6 cm doğrulandı; "2 dakikada bir değişim" ve dispeçer destekli KPR ayrıntısı 2025 metninde ayrıca kontrol edilmedi. | ERC 2025 BLS, AHA 2025 Part 7 |
| acil-iyd-ritimler | Amiodaron ikinci dozu (150 mg, 5. şoktan sonra) doğrulanamadığı için yazılmadı. Lidokain alternatifi ILCOR'dan. | ERC 2025 ALS algoritması |
| acil-periarrest-aritmiler | Atropin: AHA 2025 1 mg (en çok 3 mg) doğrulandı ve kullanıldı; ERC'nin 500 µg dozu 2025 metninde doğrulanamadı (ERC ile AHA burada farklı olabilir). Adenozin ve kardiyoversiyon enerji dozları doğrulanamadığı için yazılmadı. Konu kardiyolojinin ritim konularıyla (AV blok, WPW, AF) kısmen örtüşüyor; burada yalnız acil algoritma ele alındı. | ERC 2025 ALS (peri-arrest bölümü), AHA 2025 Part 9 |
| acil-arrest-sonrasi-bakim | SpO2 %94–98, sistolik >100 / OAB >60–65, ≤37,5 °C en az 72 saat, levetirasetam/valproat arama özetlerinden doğrulandı. ST yükselmesinde acil koroner anjiyografi önerisi 2025 metninde görülmedi (2021'den biliniyor). Nöroprognozun "en erken 72. saat" zamanlaması ikincil derlemeden. | ERC-ESICM 2025 post-resuscitation care tam metni |
| acil-anafilaksi | Erişkin IM adrenalin 0,5 mg, uyluk ön-yan yüz ve 5 dakika sonra tekrar RCUK 2021 kılavuzundan doğrulandı; kaynak listesindeki EAACI 2021 metninde aynı ifade görülmedi. Bifazik reaksiyon gözlem süresi yazılmadı. | EAACI 2021 tam metni, RCUK 2021 |
| acil-sok-tipleri | İlk vazopresör olarak noradrenalin ifadesi kaynak listesindeki makalelerde ayrıca doğrulanmadı (Vincent 2013 ve sepsis kılavuzlarında yer alır). | Vincent & De Backer NEJM 2013 |
| acil-hizli-ardisik-entubasyon | SCCM 2023 önerilerinin içeriği (ajan seçimi, roküronyum vs süksinilkolin, pozisyon) görülmedi; anlatım genel ders kitabı bilgisi. SCCM bağlantısı kurum sayfası (DOI 10.1097/CCM.0000000000006000 ikincil kaynakta görüldü). Süksinilkolin kontrendikasyonları klasik bilgi. | SCCM 2023 RSI kılavuzu tam metni |
| acil-atls-birincil-degerlendirme | ATLS 11'de "x" basamağının ayrıntıları (turnike önerisinin yeri) yalnız ikincil özetlerde görüldü. | ATLS 11 manual |
| acil-tansiyon-pnomotoraks | İğne dekompresyon yeri: ATLS 10 için kaynaklar "4./5. aralık, orta aksiller hattın hemen önü" ile "ön aksiller hat" arasında farklı; ATLS 11 ifadesi doğrulanmadı. Etikette "ön/orta aksiller hat" yazıldı. ERC 2025 Special Circumstances'ın travmatik arrest önerileri (bilateral dekompresyon) metinde görülmedi. | ATLS 11; ERC 2025 Special Circumstances (doi 10.1016/j.resuscitation.2025.110753) |
| acil-fast-efast | Cochrane 2018 bağlantısı Cochrane Library sayfası; duyarlılık 0,74 / özgüllük 0,96 doğrulandı ama etikete sayı yazılmadı. | Cochrane CD012669 |
| acil-hemorajik-sok-masif-transfuzyon | ATLS kanama sınıflarının yüzde eşikleri doğrulanamadığı için yazılmadı. TXA "ilk 3 saat" CRASH-2 keşifsel analizinden (Lancet 2011) ve Avrupa kılavuzundan; Avrupa kılavuzunun TXA metni görülmedi. ATLS 11'in "tek 20 mL/kg kristaloid" önerisi yalnız podcast özetinde görüldüğü için kullanılmadı. | Rossaint 2023 tam metni; ATLS 11 |
| acil-servikal-omurga-goruntuleme | NEXUS ve Stiell 2003 için PubMed sayfası değil QxMD kaydı bağlantısı kullanıldı (PMID 10891516 ve 14695411). Tehlikeli mekanizma eşikleri (yükseklik, hız) kaynaklar arasında farklı olduğu için sayısal yazılmadı. | NEJM 2000;343:94-9; NEJM 2003;349:2510-8 |
| acil-pelvis-kirigi | WSES 2017 önerilerinin içeriği (binder, preperitoneal paketleme, REBOA endikasyonları) yalnız anahtar sözcük/başlık düzeyinde görüldü. Binder'in trokanter hizası ikincil derlemelerden. Young-Burgess ayrıntısı doğrulanmadı (klasik bilgi). | WSES 2017 tam metni |
| acil-yanik | Parkland 4 mL/kg/% ve "yarısı ilk 8 saatte" kurumsal protokollerden; ABA 2023 kılavuzunun 2 mL/kg/% ile başlama önerisi ve 0,5 mL/kg/saat idrar hedefi (AAFP özeti) doğrulandı. ATLS'nin güncel formülü doğrulanmadı. Soğutma süresi doğrulanamadığı için yazılmadı. Avuç içi ≈ %1 klasik bilgi. | ABA 2023 (doi 10.1093/jbcr/irad125); ATLS 11 |
| acil-parasetamol | 4. saatte 150 mg/L tedavi çizgisi ikincil kaynaklardan (NSW, Hollanda derlemesi) doğrulandı; İngiltere'nin 2012'den beri 100 mg/L tek çizgi kullandığı bilgisi doğrulanamadı, yazılmadı. NAC dozlama şeması (21 saatlik / iki torba) etikete yazılmadı. "8 saat" kuralı NSW rehberinden. Dart 2023'ün yeni nomogram çizgisi ayrıntısı görülmedi. | Dart 2023 JAMA Netw Open; Chiew 2020 MJA |
| acil-karbonmonoksit | Türkiye'de soba/şofben/kış yoğunluğu tek merkezli Türk çalışmalarından. Hiperbarik oksijen endikasyonları (bilinç kaybı, gebelik vb.) kılavuzda net değil; ACEP 2025 politikası yalnız özetten görüldü, başlığı yaklaşık yazıldı. COHb yarı ömür sayıları kaynaklar arasında farklı olduğu için yazılmadı. | ACEP 2025 (doi 10.1016/j.annemergmed.2024.12.005) |
| acil-opioid | Nalokson başlangıç dozları ve gözlem süresi doğrulanamadığı için yazılmadı. AHA 2025 Part 10 bağlantısı cpr.heart.org özet sayfası; Circulation DOI'si görülmedi. | Boyer 2012 (PMC3739053); AHA 2025 Part 10 |
| acil-organofosfat | Atropin hedefleri (akciğer temiz, kalp hızı/kan basıncı, kuru aksilla) doğrulandı; "dozu ikiye katlayarak" şeması yalnız ikincil kaynakta görüldü, kesin şema (başlangıç dozu, aralık) yazılmadı. HSGM 2025 Zehirlenme Tanı ve Tedavi Rehberi'nin içeriği açılamadı (ağ kısıtı); organofosfat bölümünün varlığı doğrulanmadı. Pralidoksim etkinliği tartışmalı. | HSGM rehberi PDF; Eddleston 2008 |
| acil-trisiklik | QRS >100 ms doğrulandı; aVR R dalga eşikleri (≥3 mm, R/S >0,7) sayısal yazılmadı. Bikarbonat 1–2 mEq/kg yalnız BC Emergency Care sayfasından. Fenitoinden kaçınma ikincil özetten. | Lavonas 2023 AHA; Goldfrank |
| acil-metanol | EXTRIP hemodiyaliz ölçütleri (pH ≤7,15 dahil) doğrulandı. HSGM rehberinde metanol bölümü olup olmadığı doğrulanmadı. Türkiye'de fomepizol erişimi ve kolonya kaynaklı zehirlenme bilgisi doğrulanmadı. Türkiye salgın verileri haber kaynaklı. | HSGM rehberi; EXTRIP 2015 |
| acil-mantar | Latent dönem 6–24 saat doğrulandı. Silibinin, NAC, penisilin G kanıtı olgu serilerine dayanır; Türkiye'de silibinin bulunabilirliği doğrulanmadı. "Köygöçüren" Türkçe adı ve Karadeniz'de sıklığı (Rize/Samsun çalışmaları) kontrol edilmeli. IJMS 2024 derlemesinin yazarları görülmedi. | Tan 2022 Clin Toxicol; Türk acil tıp serileri |
| acil-akrep-yilan | WHO kılavuzu Güneydoğu Asya içindir; Türkiye türleri (engerekler) için genellenebilirlik sınırlı. İlk yardımda yapılmayacaklar listesi ve 20WBCT yorumu WHO metninde doğrulanmadı (ikincil kaynaklar). Türkiye'de yılan antivenomunun üretim/temin durumu ve akrep serumunun Mesobuthus'a etkinliği tartışmalı. | WHO SEARO 2016; UZEM; Emek 2025 |
| acil-digoksin | Fab endikasyonlarındaki potasyum eşiği (>5–6 mmol/L) kaynaklar arasında farklı, sayısal yazılmadı. Dağılım sonrası düzey ölçüm zamanı (saat) yazılmadı. Hiperkalemide kalsiyum verilmesi tartışması anlatılmadı. | Chan & Buckley 2014; Goldfrank |
