/* Konuşma tanımanın tipik hatalarını taklit eder:
   - Türkçe karakter kaybı (ş→s, ı→i, ğ→g, ç→c, ö→o, ü→u, İ→I)
   - büyük harf kısaltmaların bölünmesi ("EKG" → "ek g", "ABCD2" → "abc d2", "HbA1c" → "hba 1c")
   - BT/MR gibi kısaltmaların okunuşla yazılması ("bete", "emar")
   - noktalama kaybı, küçük harf */
'use strict';
const SPOKEN = { BT: 'bete', MR: 'emar', MRG: 'emarge' };
const strip = s => s.replace(/[şŞ]/g, 's').replace(/ı/g, 'i').replace(/İ/g, 'I').replace(/[ğĞ]/g, 'g').replace(/[çÇ]/g, 'c').replace(/[öÖ]/g, 'o').replace(/[üÜ]/g, 'u');
function splitAcr(w) {
  // en az iki büyük harf içeren, harf+rakam kısaltmalar
  if (SPOKEN[w]) return SPOKEN[w];
  const caps = (w.match(/[A-ZÇĞİÖŞÜ]/g) || []).length;
  if (caps < 2 || w.length < 2 || w.length > 8) return w;
  if (w.length === 2) return w[0] + ' ' + w[1];
  const m = w.match(/^(.*?[A-Za-zÇĞİÖŞÜçğıöşü])(\d.*)$/);
  if (m && m[1].length >= 2) return m[1] + ' ' + m[2];
  const cut = Math.ceil(w.length / 2);
  return w.slice(0, cut) + ' ' + w.slice(cut);
}
function dictate(text) {
  const split = text.replace(/[A-Za-zÇĞİÖŞÜçğıöşü0-9]+/g, w => splitAcr(w));
  return strip(split).replace(/[.,;:!?()"“”'’\-–—/]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}
module.exports = { dictate };
if (require.main === module) console.log(dictate(process.argv.slice(2).join(' ')));
