/* Örnek fixture biçimi (yüklenmez; branş fixture dosyaları tests/fixtures/<branş>.js).
   good : konuyu doğru anlatan, doğal konuşma dilinde 1,5 dakikalık metin (110–260 kelime). Dizi de olabilir.
   weak : konuyu yüzeysel geçen, temel kavramları atlayan metin (≥25 kelime), eşiğin altında kalmalı.
   dict : (isteğe bağlı) elle yazılmış dikte hatalı sürüm; otomatik dikte sürümü her zaman ayrıca test edilir. */
module.exports = {
  "iskemik-inme": {
    good: "İskemik inme, beyni besleyen bir damarın pıhtı ya da emboliyle tıkanması sonucu kan akımının kesilmesidir. Hasta tipik olarak aniden başlayan fokal nörolojik defisitle gelir: yüzde asimetri, kolda bacakta güçsüzlük, afazi gibi. Acilde ilk iş beyin tomografisiyle kanamayı dışlamaktır, çünkü tedavi buna göre değişir; MR difüzyon erken infarktı çok iyi gösterir. Uygun hastaya semptom başlangıcından itibaren 4,5 saat içinde intravenöz trombolitik yani alteplaz ya da tenekteplaz verilir. Büyük damar tıkanıklığı varsa mekanik trombektomi yapılır. Burada önemli kavram penumbra, yani henüz ölmemiş ama risk altındaki doku; zaman beyindir dememizin nedeni bu. Risk faktörleri hipertansiyon, atriyal fibrilasyon, diyabet, sigara ve hiperlipidemi. İkincil korunmada etiyolojiye göre aspirin ya da klopidogrel gibi antiagregan, atriyal fibrilasyonda antikoagülan ve yüksek doz statin kullanılır. Hastayı erken mobilize eder, yutmayı değerlendirir ve rehabilitasyona yönlendiririz.",
    weak: "İskemik inme beyinde damarın tıkanmasıdır. Hasta acile gelir, felç olur, konuşamaz. Hastaneye hemen gitmek gerekir, doktorlar müdahale eder ve sonra fizik tedavi yapılır. Önemli bir hastalıktır."
  }
};
