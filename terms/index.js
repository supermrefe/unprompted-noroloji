/*
  Unprompted Tıp — branş listesi ve konu kayıt biçimi
  ----------------------------------------------------
  Her branş ayrı dosyada: terms/<id>.js. Dosya UP.add({ id, subs, terms }) çağırır.
  Konu kaydı:
    { id, tr, en, cat, lvl, src, c }
    id   : tüm tıpta benzersiz, kalıcı (ilerleme bu anahtarla saklanır; değiştirme)
    tr   : Türkçe ad          en : İngilizce ad (kaynak aramaları için)
    cat  : branş içi alt başlık anahtarı (subs içinde tanımlı)
    lvl  : 1 Kolay · 2 Orta · 3 Zor
    src  : { k: [kitap1, kitap2], m: [[makale1, url], [makale2, url]] }
           Konuya özgü en önemli 2 kitap (ad + baskı + yıl) ve 2 makale/kılavuz (başlık + dergi/kurum + yıl, doğrulanmış bağlantı).
    c    : [ ["Kavram etiketi", "anahtar1|anahtar2|çok kelimeli anahtar"], ... ]
           Etiket "!" ile başlıyorsa temel kavramdır (puanda 2 kat ağırlık).
  Eşleştirme kuralları (scoring.js):
     - Türkçe karakterler ve büyük/küçük harf yok sayılır (ş=s, ı=i ...).
     - 3 harf ve altı anahtar: kelimenin tam kendisi olmalı (ms, bt, eeg).
     - 4 harf: kelime bu harflerle başlamalı (ivig, aura).
     - 5+ harf: kelimenin içinde geçmesi yeterli; 7+ harfte 1-2 harf hata tolere edilir.
     - Dikte bölünmeleri ("i v i g", "abc d 2") ardışık 2-4 sözcük birleştirilerek tanınır.
*/
window.LEVELS = {
  1: { name: "Kolay", min: 5 },
  2: { name: "Orta", min: 10 },
  3: { name: "Zor", min: 15 }
};

window.GROUPS = {
  temel: "Temel bilimler",
  dahili: "Dahili bilimler",
  cerrahi: "Cerrahi bilimler",
  kadin_cocuk: "Pediatri ve kadın doğum",
  acil: "Acil tıp"
};

// Sıra: ana ekrandaki ve haritadaki sıra. file: terms/<id>.js
window.BRANCHES = [
  { id: "anatomi", name: "Anatomi", group: "temel" },
  { id: "fizyoloji", name: "Fizyoloji", group: "temel" },
  { id: "biyokimya", name: "Biyokimya", group: "temel" },
  { id: "histoloji", name: "Histoloji ve embriyoloji", group: "temel" },
  { id: "mikrobiyoloji", name: "Mikrobiyoloji", group: "temel" },
  { id: "patoloji", name: "Patoloji", group: "temel" },
  { id: "farmakoloji", name: "Farmakoloji", group: "temel" },
  { id: "kardiyoloji", name: "Kardiyoloji", group: "dahili" },
  { id: "gogus", name: "Göğüs hastalıkları", group: "dahili" },
  { id: "gastroenteroloji", name: "Gastroenteroloji ve hepatoloji", group: "dahili" },
  { id: "nefroloji", name: "Nefroloji", group: "dahili" },
  { id: "endokrinoloji", name: "Endokrinoloji", group: "dahili" },
  { id: "hematoloji", name: "Hematoloji", group: "dahili" },
  { id: "onkoloji", name: "Onkoloji", group: "dahili" },
  { id: "romatoloji", name: "Romatoloji", group: "dahili" },
  { id: "enfeksiyon", name: "Enfeksiyon hastalıkları", group: "dahili" },
  { id: "noroloji", name: "Nöroloji", group: "dahili" },
  { id: "psikiyatri", name: "Psikiyatri", group: "dahili" },
  { id: "dermatoloji", name: "Dermatoloji", group: "dahili" },
  { id: "halk-sagligi", name: "Halk sağlığı", group: "dahili" },
  { id: "genel-cerrahi", name: "Genel cerrahi", group: "cerrahi" },
  { id: "ortopedi", name: "Ortopedi", group: "cerrahi" },
  { id: "uroloji", name: "Üroloji", group: "cerrahi" },
  { id: "beyin-cerrahisi", name: "Beyin cerrahisi", group: "cerrahi" },
  { id: "kbb", name: "Kulak burun boğaz", group: "cerrahi" },
  { id: "goz", name: "Göz hastalıkları", group: "cerrahi" },
  { id: "kvc", name: "Kalp ve damar cerrahisi", group: "cerrahi" },
  { id: "anesteziyoloji", name: "Anesteziyoloji", group: "cerrahi" },
  { id: "pediatri", name: "Pediatri", group: "kadin_cocuk" },
  { id: "kadin-dogum", name: "Kadın hastalıkları ve doğum", group: "kadin_cocuk" },
  { id: "acil", name: "Acil tıp", group: "acil" }
];

window.UP = {
  data: {},
  add(b) { this.data[b.id] = b; }
};
