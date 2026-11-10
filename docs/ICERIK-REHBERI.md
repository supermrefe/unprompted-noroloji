# İçerik rehberi — Unprompted Tıp konu paketleri

Bu rehber, `terms/<branş>.js` konu paketlerini ve `tests/fixtures/<branş>.js` test anlatımlarını yazanlar içindir.

## Uygulama ne yapıyor

Öğrenciye rastgele bir konu gelir. Konuyu kaynaklardan araştırır (Kolay 5 dk, Orta 10 dk, Zor 15 dk), sonra notlara bakmadan 1,5 dakika sesli anlatır. Konuşma tanıma anlatımı yazıya döker. Uygulama her kavramın anahtar kelimelerinden biri metinde geçiyor mu diye bakar ve puan verir (temel kavram 2 kat ağırlıklı). Geçme eşiği %60. Hedef kitle: Türkiye'de tıp öğrencisi, TUS'a hazırlanan ve asistan hekim.

## Dosya biçimi

`terms/<branş>.js`:

```js
/* Kardiyoloji — Unprompted Tıp konu paketi */
UP.add({ id: "kardiyoloji", subs: { kak: "Koroner arter hastalığı", ritim: "Ritim bozuklukları" },
terms: [
  { id: "kar-akut-koroner-sendrom", tr: "Akut koroner sendrom", en: "Acute coronary syndrome", cat: "kak", lvl: 1,
    src: {
      k: ["Braunwald's Heart Disease, 12. baskı (2022)", "Harrison's Principles of Internal Medicine, 21. baskı (2022)"],
      m: [["2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023", "https://doi.org/10.1093/eurheartj/ehad191"],
          ["Başlık. Dergi Yıl", "https://pubmed.ncbi.nlm.nih.gov/..."]]
    },
    c: [
      ["!Kavram etiketi (temel)", "anahtar1|anahtar2|çok kelimeli anahtar"],
      ["Kavram etiketi", "anahtar|..."]
    ]},
]
});
```

- `id`: branş öneki + tire + konu (`kar-`, `gog-` ...). Yalnız küçük harf, rakam, tire. Tüm tıpta benzersiz ve kalıcı.
- `lvl`: 1 Kolay, 2 Orta, 3 Zor. **Her seviyede en az 5 konu** (ilk teslim: 5+5+5).
- `cat`: `subs` içinde tanımlı alt başlık anahtarı.
- `c`: 5–9 kavram, bunların 2–4'ü temel (`!`). Etiket Türkçe, kısa, öğrenciye "neyi atladın" diye gösterilecek cümle.

## Kaynak kuralı (`src`) — her konuda tam 2 kitap + 2 makale

- `k`: o konu için **en önemli iki ders kitabı**, ad + baskı + yıl (ör. "Robbins & Cotran Pathologic Basis of Disease, 10. baskı (2020)"). Baskı ve yılı web aramasıyla doğrula.
- `m`: o konu için **en önemli iki makale**: tercihen güncel uluslararası kılavuz (ESC, AHA/ACC, ERC 2025, GOLD, GINA, KDIGO, ADA, IDSA, NCCN, ACOG, AAP, EAN, EULAR/ACR, WHO…), Türkiye'ye özgü konularda Sağlık Bakanlığı ya da ilgili Türk derneği rehberi; yoksa önemli bir derleme/ana çalışma. Biçim: `["Başlık. Dergi/kurum Yıl", "https://..."]`.
- Bağlantı (DOI, PubMed ya da kurumun resmi sayfası) **yalnızca web aramasıyla gördüysen** yazılır. Doğrulayamadıysan `null` yaz ve konuyu `docs/klinik/<branş>.md` listesine ekle.
- Kılavuzlar arasında fark varsa (ör. ESC ile AHA eşikleri) hangisini seçtiğini kavram etiketinde ya da `docs/klinik/<branş>.md`'de belirt.

## İçerik doğruluğu — pazarlık yok

- **Uydurma bilgi yok.** Her kavram gerçek ve güncel bir kaynağa dayanır.
- Doz, eşik, zaman penceresi, yüzde gibi **sayısal** kavramları yalnızca kaynakta açıkça yazıyorsa kullan; web aramasıyla doğrula. Doğrulayamadığın sayıyı yazma: kavramı sayısız ifade et ("erken dönemde trombolitik") ya da çıkar.
- Emin olmadığın her konuyu `docs/klinik/<branş>.md` dosyasına yaz: `| konu id | şüphe | kontrol edilecek kaynak |` tablosu. Bu bir hekimin gözden geçireceği iş listesidir; dürüst ol.
- Kavram etiketleri Türkçe, terminoloji Türkiye'de kullanıldığı gibi (TUS dili).

## Konu seçimi

- TUS'ta sık sorulan ve klinikte gerçekten önemli konular. Kolay = çekirdek, her öğrencinin bilmesi gereken; Orta = TUS'ta sık, ayrıntı isteyen; Zor = ileri ayrıntı, nadir ama sık sorulan ya da asistan düzeyi.
- Başka branşın açıkça sahiplendiği konuyu alma (ör. akut MI kardiyolojinin; acil tıp yalnızca resüsitasyon, travma, zehirlenme). Pediatri ve kadın doğum yalnızca kendi alanına özgü hastalıkları alır. Temel bilimler mekanizma/yapı konularını alır, hastalık yönetimini değil.
- Branş dosyasının başındaki yorumda seçim mantığını 2–4 satırla yaz.

## Anahtar kelimeler

Eşleştirme (`scoring.js`): Türkçe karakter ve büyük/küçük harf yok sayılır; ≤3 harfli anahtar sözcüğün tamamı olmalı; 4 harfli anahtar sözcük başı olmalı; 5+ harfli anahtar sözcüğün içinde geçebilir; 7+ harfte 1–2 harf hatası tolere edilir; dikte bölünmeleri birleştirilir.

- Her kavrama hem Türkçe hem yaygın İngilizce/Latince karşılıklar ve dikte tanımanın yazabileceği biçimleri ekle: "bete" = BT, "emar" = MR, "ekg|elektrokardiyo", "hba1c|hemoglobin a1c|glikozile".
- Eklerden bağımsız olsun diye kök yaz: "trombolit" (trombolitik, trombolize), "pnömoni" değil "pnömon" (pnömonide).
- **Kısa anahtarlar (≤3 harf) tehlikeli**: gündelik sözcükle çakışmasın ("ak", "on", "kan", "su" tek başına yasak ya da uyarı). Kısaltmaları (bt, mr, ekg) kullan ama başka konuların anlatımında da geçiyorsa kavramı ayırt edici yapmaz.
- Kavramlar **konuya özgü** olsun. "Ateş", "ağrı", "tedavi" gibi her konuda geçen genel sözcükleri tek başına anahtar yapma; çapraz eşleşme testi başka konuların anlatımının bu konuda %60'ı geçmesini hata sayar.
- Çok genel 5+ harf kökleri (ör. "tedavi", "hasta", "klinik") alt dize olarak her yerde eşleşir; kullanma.

## Test anlatımları (`tests/fixtures/<branş>.js`)

```js
module.exports = {
  "kar-akut-koroner-sendrom": {
    good: "…", // konuyu doğru anlatan, doğal Türkçe konuşma dili, 110–260 kelime (1,5 dakika)
    weak: "…"  // konuyu yüzeysel geçen, temel kavramları atlayan, ≥25 kelime; %60'ın altında kalmalı
  }
};
```

- **İyi anlatım**: bir öğrencinin 1,5 dakikada gerçekten söyleyeceği gibi. Kavram etiketlerini kelimesi kelimesine okuma; doğal cümleler kur. Tıbben doğru olmalı (aynı doğruluk kuralları).
- **Zayıf anlatım**: konuyu tanıyan ama yüzeysel geçen biri. Uydurma/yanlış bilgi içermesin, sadece eksik olsun.
- Dikte hatalı sürüm otomatik üretilir (`tests/dictation.js`: ş/ı/ğ/ç/ö/ü kaybı, büyük harf kısaltmaların bölünmesi "EKG"→"ek g", BT→"bete", MR→"emar"). İyi anlatımla **aynı kavramları** yakalamalı. Kısaltmayı anlatımda büyük harfle yazarsan bölünmüş hali de eşleşmeli (birleştirme kuralı bunu çoğunlukla çözer; çözmüyorsa anahtar ekle).

## Test

```bash
node tests/run.js <branş>       # tüm uyarılarla
node tests/run.js <branş> -q    # yalnız hatalar
```

Testler `HATA: 0` vermeden paket teslim edilmez. Anahtar ayarlarken **iyi anlatımı anahtara uydurmak yerine anahtarları gerçek konuşma diline uydur**: başka bir öğrencinin aynı şeyi farklı kelimelerle söyleyeceğini düşün ve eş anlamlıları ekle.
