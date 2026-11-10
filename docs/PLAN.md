# Unprompted Tıp — plan

Unprompted Nöroloji'deki yöntem (rastgele konu → kaynaktan araştır → notsuz 1,5 dakika anlat → kavram bazlı geri bildirim → 1-3-7-14-30 gün tekrar) tıbbın tamamına taşınıyor. Hedef kitle: Türkiye'de tıp öğrencisi, TUS'a hazırlanan ve asistan hekim.

## 1. Mimari

| Parça | Dosya | Not |
|---|---|---|
| Puanlama çekirdeği | `scoring.js` | `app.js`'teki `tokenize`/`evaluate`/eşleştirme kodu değiştirilmeden ayrı modüle alındı. Tarayıcı (`window.UPScore`) ve Node testleri aynı kodu çalıştırır. |
| Branş listesi | `terms/index.js` | Seviyeler, gruplar, 31 branşın sırası, `UP.add` kayıt biçimi. |
| Konu paketleri | `terms/<branş>.js` | Her branş ayrı dosya. Açılışta paralel yüklenir; eksik ya da bozuk dosya atlanır, uygulama yine açılır. |
| Uygulama | `app.js`, `index.html`, `styles.css` | Branş seçimi, filtreler, kaynak paneli. |
| PWA | `sw.js`, `manifest.webmanifest` | Önbellek `upn-v1` → `upt-v2`; etkinleşince eski önbellek silinir. Önce ağ, olmazsa önbellek. `tools/sync-sw.js` branş dosya listesini eşitler. |

**Yükleme:** İlk teslimde ~500 konu, sıkıştırılmış hâlde birkaç yüz KB'tır; tüm branşlar paralel yüklenir (tek seferde, sonra önbellekten). Havuz ~1500 konuyu geçerse yalnız seçili branşları önce yükleyip kalanı arka planda getiren tembel yükleme eklenecek; dosya yapısı buna hazır.

**Depolama:** `upn:` öneki ve tüm anahtarlar (`prog`, `hist`, `xp`, `streak`, `daily`, `session`, `settings`, `notes:<id>`) aynen kaldı. Yeni anahtar yalnızca `upn:branches` (seçili branşlar; boş = tüm tıp). Nöroloji konu `id`'leri değişmedi. Depo adı ve canlı URL değişmedi.

## 2. Uygulama değişiklikleri

- Ana ekranda **çalışma alanı** kartı: tek branş, birkaç branş ya da tüm tıp karışık. Seçim kalıcı.
- Branş penceresinde her branşın ilerlemesi (geçilen/toplam, yüzde); grup adına basınca o grup seçilir.
- Günün 3'lüsü, serbest zar, tekrar kuyruğu, harita, geçmiş ve başlıktaki "biten konu" sayacı seçime göre. Günün seti henüz başlanmadıysa seçim değişince yenilenir; başlanmışsa korunur.
- Harita branş bazında açılır-kapanır bloklar; her blokta alt başlıklar.
- Araştırma ekranı: Türkçe ad, İngilizce ad (kaynak aramaları için), konunun **2 kitabı ve 2 makalesi/kılavuzu**. Makalede doğrulanmış bağlantı yoksa PubMed'de başlıkla arama.
- Ad "Unprompted Tıp".

## 3. İçerik

### Kaynak kuralı
Her konunun `src` alanı: o konu için **en önemli 2 ders kitabı** (ad + baskı + yıl) ve **en önemli 2 makale** (tercihen güncel uluslararası kılavuz; Türkiye'ye özgü konularda Sağlık Bakanlığı / Türk derneği rehberi). Kitap baskıları, makale başlıkları/yılları ve bağlantılar web aramasıyla doğrulanır; doğrulanamayan bağlantı `null` bırakılır ve hekim inceleme listesine yazılır. Ayrıntı: `docs/ICERIK-REHBERI.md`.

### Konu seçim mantığı
1. **TUS ağırlığı:** TUS'ta yıllardır düzenli sorulan konular önce (ör. biyokimyada depo hastalıkları, mikrobiyolojide hepatit B serolojisi, romatolojide Behçet ve FMF).
2. **Klinik önem:** Acil ve sık görülen, yanlış yönetildiğinde hayatı tehdit eden durumlar (akut koroner sendrom, sepsis, DKA, ektopik gebelik, zehirlenmeler).
3. **Türkiye'ye özgü yük:** Bruselloz, KKKA, talasemi, FMF, Behçet, karbonmonoksit ve organofosfat zehirlenmesi, ulusal tarama ve aşı programları.
4. **Güncel kılavuz değişikliği:** Son yıllarda kılavuzu değişen konular (ERC/AHA 2025 resüsitasyon, ESC 2023–2024 kılavuzları, GOLD, GINA, KDIGO 2024, ADA Standards).
5. **Seviye:** Kolay = her öğrencinin bilmesi gereken çekirdek; Orta = TUS'ta sık, ayrıntı isteyen; Zor = ileri ayrıntı, nadir ama sık sorulan ya da asistan düzeyi.
6. **Çakışma yok:** Bir konu tek branşa ait (akut MI kardiyolojide; acil tıp yalnız resüsitasyon, travma, zehirlenme; pediatri ve kadın doğum kendi alanlarına özgü hastalıklar; temel bilimler mekanizma ve yapı). Çapraz eşleşme testi çakışmayı yakalar.

Her branş dosyasının başında o branşa özgü seçim gerekçesi yazılıdır.

### Kapsam (ilk teslim: branş başına en az 5 Kolay + 5 Orta + 5 Zor)
- **Temel bilimler:** anatomi, fizyoloji, biyokimya, histoloji-embriyoloji, mikrobiyoloji, patoloji, farmakoloji
- **Dahili:** kardiyoloji, göğüs, gastroenteroloji-hepatoloji, nefroloji, endokrinoloji, hematoloji, onkoloji, romatoloji, enfeksiyon, nöroloji (mevcut 42 konu korunur, kaynak eklenir), psikiyatri, dermatoloji, halk sağlığı
- **Cerrahi:** genel cerrahi, ortopedi, üroloji, beyin cerrahisi, KBB, göz, kalp-damar cerrahisi, anesteziyoloji
- **Pediatri**, **kadın hastalıkları-doğum**
- **Acil tıp:** resüsitasyon, travma, zehirlenmeler (en az 21 konu)

### Sonraki turlar
Branş başına 30, sonra 45 konuya büyütme; önce hekim incelemesinden (`docs/KLINIK-INCELEME.md`) geçen branşlar. Her turda aynı testler.

## 4. Doğruluk güvencesi

- Uydurma bilgi yok; her sayı, doz, eşik ve zaman penceresi kaynakta açıkça yazıyorsa ve web aramasıyla doğrulandıysa kullanılır. Doğrulanamayan sayı yazılmaz.
- Emin olunmayan her madde `docs/KLINIK-INCELEME.md`'ye (branş dosyaları `docs/klinik/` altında) yazılır: konu, şüphe, kontrol edilecek kaynak. Bu liste bir hekimin gözden geçireceği iş listesidir; içerik hekim incelemesinden geçmiş sayılmaz.

## 5. Testler (bağımlılıksız Node + yüklü Playwright)

| Test | Ne kanıtlar |
|---|---|
| `node tests/run.js` | Her konu için kayıt doğrulama (2 kitap + 2 makale, 5–9 kavram, 2–4 temel kavram, seviye başına ≥5 konu); **iyi anlatım** ≥%60 ve 110–260 kelime; **zayıf anlatım** <%60; **dikte hatalı sürüm** (ş/ı/ğ kaybı, "EKG"→"ek g", BT→"bete", MR→"emar") iyi anlatımla aynı kavramları yakalar; **çapraz kontrol**: başka hiçbir konunun iyi anlatımı bu konuda %60'ı geçmez; **≤3 harfli anahtar taraması**: yaygın Türkçe sözcükle çakışma hata, başka konuların anlatımında sık geçme uyarı. |
| `node tests/persist.js` | İlk sürüm (42b5d9d) tarayıcıda açılıp bir konu geçilir ve not yazılır; aynı adreste yeni sürüm açılır. Skor, seri, XP, tekrar takvimi, geçmiş ve notlar aynen okunur, localStorage değişmez. |
| `node tests/ui.js` | 390×844 Android Chrome görünümünde sayfa hatasız açılır, tüm branşlar yüklenir, branş seçimi kalıcıdır ve havuzu/haritayı/günlük seti filtreler, araştırma ekranında İngilizce ad + 4 kaynak görünür, yatay kaydırma yoktur. Ekran görüntüleri `tests/screens/`. |

Testler geçmeden `main`'e gönderilmez.

## 6. Teslim

Her branş paketi ayrı commit; her commit'ten sonra push. Tüm testler geçince `main`'e birleştirme ve canlı adreste kontrol.
