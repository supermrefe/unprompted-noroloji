# Unprompted Nöroloji

Rastgele bir nöroloji konusu gelir. Yapay zekâ kullanmadan makalelerden araştırırsın (Kolay 5 dk, Orta 10 dk, Zor 15 dk), sonra notlara bakmadan 1,5 dakikada sesli anlatırsın. Uygulama anlatımını yazıya döker. Hangi kavramları yakaladığını ve neyi atladığını gösterir, konuşma hızını ve dolgu kelimelerini ölçer. Geçtiğin konu 1, 3, 7, 14 ve 30 gün sonra tekrar kuyruğuna düşer.

## Çalıştırma

```bash
python -m http.server 5178 --directory C:/unprompted-noroloji
```

Sonra Chrome ya da Edge'de `http://localhost:5178` adresini aç. Mikrofon ve konuşma tanıma yalnızca `localhost` ya da `https` adresinde çalışır. Dosyayı çift tıklayıp açınca çalışmaz.

## Telefonda kullanmak

Canlı adres: **https://supermrefe.github.io/unprompted-noroloji/**

Telefonda Chrome'dan açıp "Ana ekrana ekle" dersen uygulama gibi kurulur (PWA). Site GitHub Pages'te, bu depodaki `main` dalından yayınlanıyor. Derleme adımı yok, dosyaları değiştirip push etmen yeterli.

## Dosyalar

- `terms.js`: 42 konu, kavramlar ve eşleşen anahtar kelimeler. Yeni konu eklemek için buraya bir kayıt ekle.
- `app.js`: akış, zamanlayıcılar, kayıt, konuşma tanıma, puanlama, tekrar takvimi.
- `styles.css`, `index.html`: arayüz.
- `sw.js`, `manifest.webmanifest`, `icons/`: PWA (çevrimdışı açılış, ana ekrana ekleme).

## Puanlama nasıl çalışır

Her konuda 6–8 kavram var. "Temel" işaretli kavramlar iki kat sayılır. Anlatımında kavramın anahtar kelimelerinden biri geçerse kavram yakalanmış sayılır. Türkçe ekler, büyük-küçük harf ve ş/ı/ğ gibi karakter farkları yok sayılır, uzun terimlerde 1–2 harflik tanıma hatası tolere edilir. Dikte bir kısaltmayı ya da uzun terimi bölerse ("ABCD2" → "abc'deki 2", "IVIG" → "IV IG") parçalar birleştirilerek tanınır. Varsayılan geçme eşiği %60, ayarlardan değiştirilebilir.

İlerleme (skorlar, seri, XP, notlar) yalnızca o tarayıcıda saklanır.
