/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const DOA_DATA = [
  {j:"Sebelum Makan",a:"بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",l:"Bismillaahir rahmaanir rahiim",t:"Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang"},
  {j:"Sesudah Makan",a:"اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِيْنَ",l:"Alhamdulillaahil ladzii ath'amanaa wa saqaanaa wa ja'alanaa minal muslimiin",t:"Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk golongan orang-orang Islam"},
  {j:"Sebelum Tidur",a:"بِاسْمِكَ اللّٰهُمَّ أَحْيَا وَأَمُوتُ",l:"Bismikallahumma ahyaa wa amuut",t:"Dengan nama-Mu ya Allah, aku hidup dan aku mati"},
  {j:"Bangun Tidur",a:"اَلْحَمْدُ لِلّٰهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ",l:"Alhamdulillahil ladzii ahyaanaa ba'da maa amaatanaa wa ilaihin nusyuur",t:"Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya lah kami dikembalikan"},
  {j:"Keluar Rumah",a:"بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ",l:"Bismillaahi tawakkaltu 'alallahi wa laa hawla wa laa quwwata illaa billaah",t:"Dengan nama Allah, aku bertawakkal kepada Allah, tiada daya dan kekuatan kecuali dengan pertolongan Allah"},
  {j:"Masuk Rumah",a:"اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ",l:"Allaahumma innii as-aluka khoiral maulaji wa khoiral makhraji",t:"Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikan tempat masuk dan kebaikan tempat keluar"},
  {j:"Masuk Kamar Mandi",a:"اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",l:"Allaahumma innii a'uudzubika minal khubutsi wal khabaaits",t:"Ya Allah, sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan"},
  {j:"Keluar Kamar Mandi",a:"غُفْرَانَكَ",l:"Ghufroonak",t:"Aku memohon ampunan-Mu ya Allah"},
  {j:"Sebelum Belajar",a:"رَبِّ زِدْنِيْ عِلْمًا وَارْزُقْنِيْ فَهْمًا",l:"Rabbi zidnii 'ilmaa warzuqnii fahmaa",t:"Ya Tuhanku, tambahkanlah ilmuku dan berikanlah aku pemahaman"},
  {j:"Sesudah Belajar",a:"اَللّٰهُمَّ إِنِّيْ أَسْتَوْدِعُكَ مَا عَلَّمْتَنِيْ",l:"Allaahumma innii astaudi'uka maa 'allamtanii",t:"Ya Allah, aku titipkan kepada-Mu apa yang telah Engkau ajarkan kepadaku"},
  {j:"Bercermin",a:"اَللّٰهُمَّ حَسَّنْتَ خَلْقِيْ فَحَسِّنْ خُلُقِيْ",l:"Allaahumma hassanta khalqii fa hassin khuluqii",t:"Ya Allah, Engkau telah memperindah kejadianku, maka perindahlah pula akhlakku"},
  {j:"Naik Kendaraan",a:"سُبْحَانَ الَّذِيْ سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِيْنَ",l:"Subhaanal ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahuu muqriniin",t:"Maha Suci Allah yang telah menundukkan semua ini bagi kami, padahal kami sebelumnya tidak mampu menguasainya"},
  {j:"Sesudah Wudhu",a:"أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ",l:"Asyhadu allaa ilaaha illallaahu wahdahuu laa syariika lahu wa asyhadu anna muhammadan 'abduhu wa rasuuluh",t:"Aku bersaksi bahwa tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya"},
  {j:"Sebelum Wudhu",a:"بِسْمِ اللّٰهِ",l:"Bismillah",t:"Dengan nama Allah"},
  {j:"Membaca Al-Qur'an",a:"أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",l:"A'uudzubillaahi minasy syaithaanir rajiim",t:"Aku berlindung kepada Allah dari setan yang terkutuk"},
  {j:"Mohon Ampun (Istighfar)",a:"أَسْتَغْفِرُ اللّٰهَ الْعَظِيْمَ الَّذِيْ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ",l:"Astaghfirullaahal 'azhiimal ladzii laa ilaaha illaa huwal hayyul qayyuumu wa atuubu ilaih",t:"Aku memohon ampunan Allah Yang Maha Agung, yang tiada Tuhan selain Dia, Yang Maha Hidup lagi Maha Berdiri, dan aku bertaubat kepada-Nya"},
  {j:"Doa Qunut",a:"اَللّٰهُمَّ اهْدِنِيْ فِيْمَنْ هَدَيْتَ وَعَافِنِيْ فِيْمَنْ عَافَيْتَ",l:"Allaahummahdinii fiiman hadayt, wa 'aafinii fiiman 'aafayt",t:"Ya Allah, tunjukilah aku sebagaimana orang-orang yang telah Engkau beri petunjuk, dan sehatkanlah aku sebagaimana orang-orang yang telah Engkau sehatkan"},
  {j:"Setelah Shalat (Tasbih)",a:"سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ سُبْحَانَ اللّٰهِ الْعَظِيْمِ",l:"Subhanallaahi wa bihamdih, subhanallaahil 'azhiim",t:"Maha Suci Allah dan dengan segala puji-Nya, Maha Suci Allah Yang Maha Agung"},
  {j:"Zikir Pagi",a:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ",l:"Ashbahnaa wa ashbahal mulku lillaah wal hamdu lillaah",t:"Kami memasuki waktu pagi dan kerajaan hanya milik Allah, dan segala puji hanyalah bagi Allah"},
  {j:"Zikir Petang",a:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ",l:"Amsaynaa wa amsal mulku lillaah wal hamdu lillaah",t:"Kami memasuki waktu sore dan kerajaan hanya milik Allah, dan segala puji hanyalah bagi Allah"},
  {j:"Mohon Kebaikan Dunia-Akhirat",a:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",l:"Rabbanaaa aatinaa fid-dunya hasanah wa fil aakhirati hasanah wa qinaa 'adzaabannar",t:"Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan jagalah kami dari siksa api neraka"},
  {j:"Memohon Kesabaran",a:"رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",l:"Rabbanaa afrigh 'alainaa shabraw wa tsabbit aqdaamanaa wanshurnaa 'alal qawmil kaafiriin",t:"Ya Tuhan kami, curahkanlah kesabaran atas kami, kokohkanlah pendirian kami, dan tolonglah kami menghadapi orang-orang kafir"},
  {j:"Memohon Perlindungan",a:"اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",l:"Allaahumma innii a'uudzubika minal hammi wal hazan",t:"Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan kesedihan"},
  {j:"Doa Orang Tua",a:"رَبِّ اغْفِرْ لِيْ وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا",l:"Rabbighfir lii wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa",t:"Ya Tuhanku, ampunilah aku dan kedua orang tuaku, dan sayangilah keduanya sebagaimana mereka menyayangiku sewaktu kecil"},
  {j:"Memohon Rezeki",a:"اَللّٰهُمَّ اكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",l:"Allaahumak-finii bihalaalika 'an haraamika wa aghninii bifadlika 'amman siwaak",t:"Ya Allah, cukupilah aku dengan yang halal dari-Mu sehingga tidak butuh yang haram, dan kayakanlah aku dengan karunia-Mu sehingga tidak butuh kepada selain-Mu"},
];

const KUIS_DATA = {
  quran:[
    {q:"Nun mati bertemu huruf 'ba' termasuk hukum bacaan...?",o:["Izhar Halqi","Iqlab","Idgham Bighunnah","Ikhfa Haqiqi"],j:1},
    {q:"Mad Thobi'i memiliki panjang bacaan...?",o:["1 harakat","2 harakat","3 harakat","5 harakat"],j:1},
    {q:"Idgham Bilaghunnah terjadi ketika nun mati bertemu huruf...?",o:["ي dan و","ل dan ر","ب saja","م dan ن"],j:1},
    {q:"Makharijul huruf artinya...?",o:["Sifat-sifat huruf","Nama-nama huruf","Tempat keluarnya huruf","Panjang pendek huruf"],j:2},
    {q:"Surat Al-Qur'an yang paling pendek (hanya 3 ayat) adalah...?",o:["Al-Ikhlas","Al-Fatihah","Al-Kautsar","An-Nas"],j:2},
    {q:"Al-Qur'an pertama kali diturunkan di...?",o:["Gua Tsur","Gua Hira","Masjidil Aqsa","Jabal Uhud"],j:1},
    {q:"Wahyu pertama yang diturunkan adalah...?",o:["QS. Al-Fatihah 1-7","QS. Al-Baqarah 1-5","QS. Al-'Alaq 1-5","QS. Al-Mudatstsir 1-5"],j:2},
    {q:"Al-Qur'an terdiri atas berapa juz?",o:["25 juz","28 juz","30 juz","114 juz"],j:2},
    {q:"Jumlah surat dalam Al-Qur'an adalah...?",o:["99 surat","100 surat","112 surat","114 surat"],j:3},
    {q:"Hukum mempelajari tajwid adalah...?",o:["Sunnah Muakkad","Fardhu 'Ain","Fardhu Kifayah","Mubah"],j:2},
    {q:"Surat terpanjang dalam Al-Qur'an adalah...?",o:["Ali Imran","An-Nisa","Al-Baqarah","Al-Maidah"],j:2},
    {q:"Ikhfa Haqiqi artinya...?",o:["Membaca jelas","Dilebur dengan dengung","Membaca samar-samar","Diganti bunyi mim"],j:2},
  ],
  aqidah:[
    {q:"Berapa jumlah Rukun Iman dalam Islam?",o:["4","5","6","7"],j:2},
    {q:"Malaikat yang bertugas mencabut nyawa adalah...?",o:["Jibril AS","Mikail AS","Izrail AS","Israfil AS"],j:2},
    {q:"Kitab Zabur diturunkan kepada Nabi...?",o:["Musa AS","Dawud AS","Isa AS","Ibrahim AS"],j:1},
    {q:"Iman kepada Qada dan Qadar adalah rukun iman ke...?",o:["4","5","6","7"],j:2},
    {q:"Tauhid yang berkaitan dengan keesaan Allah dalam ibadah disebut...?",o:["Tauhid Rububiyyah","Tauhid Uluhiyyah","Tauhid Asma' wa Shifat","Tauhid Ubudiyyah"],j:1},
    {q:"Malaikat yang bertugas meniup sangkakala di hari kiamat adalah...?",o:["Jibril AS","Mikail AS","Izrail AS","Israfil AS"],j:3},
    {q:"Syirik yang paling berat dan tidak diampuni disebut...?",o:["Syirik Kecil","Syirik Ashghar","Syirik Akbar","Syirik Khafi"],j:2},
    {q:"Berapa jumlah malaikat yang wajib diketahui?",o:["7","10","25","99"],j:1},
    {q:"Kitab suci yang diturunkan kepada Nabi Isa AS adalah...?",o:["Taurat","Zabur","Injil","Al-Qur'an"],j:2},
    {q:"Nabi dan Rasul yang wajib diketahui berjumlah...?",o:["10","20","25","30"],j:2},
    {q:"Percaya kepada Qada dan Qadar Allah termasuk rukun iman ke...?",o:["3","4","5","6"],j:3},
    {q:"Asmaul Husna artinya...?",o:["Nama-nama Allah yang banyak","Nama-nama Allah yang baik/indah","Sifat-sifat Allah","Kekuasaan Allah"],j:1},
  ],
  fiqih:[
    {q:"Berapa rakaat shalat Maghrib?",o:["2 rakaat","3 rakaat","4 rakaat","5 rakaat"],j:1},
    {q:"Salah satu syarat wajib zakat mal adalah...?",o:["Muslim dan akil baligh","Harta mencapai nishab dan haul","Memiliki pekerjaan tetap","Sehat jasmani dan rohani"],j:1},
    {q:"Wudhu batal karena hal berikut, KECUALI...?",o:["Buang air kecil","Menyentuh mushaf Al-Qur'an","Tidur nyenyak","Kentut"],j:1},
    {q:"Shalat Dhuha paling sedikit dikerjakan...?",o:["1 rakaat","2 rakaat","4 rakaat","8 rakaat"],j:1},
    {q:"Nishab zakat emas adalah...?",o:["50 gram","75 gram","85 gram","100 gram"],j:2},
    {q:"Jumlah rakaat shalat Isya adalah...?",o:["2 rakaat","3 rakaat","4 rakaat","5 rakaat"],j:2},
    {q:"Urutan wudhu yang benar dimulai dari...?",o:["Membasuh kaki","Membasuh muka","Niat","Berkumur"],j:2},
    {q:"Kadar zakat mal (harta) adalah...?",o:["1%","2,5%","5%","10%"],j:1},
    {q:"Shalat sunnah paling utama setelah shalat fardhu adalah...?",o:["Shalat Dhuha","Shalat Tahajud","Shalat Rawatib","Shalat Tarawih"],j:1},
    {q:"Yang termasuk hal yang membatalkan puasa adalah...?",o:["Berenang","Menelan ludah sendiri","Muntah tidak sengaja","Makan sengaja di siang hari"],j:3},
    {q:"Shalat Subuh dikerjakan berapa rakaat?",o:["1 rakaat","2 rakaat","3 rakaat","4 rakaat"],j:1},
    {q:"Zakat fitrah boleh dikeluarkan paling lambat...?",o:["Sebelum berbuka puasa hari terakhir Ramadhan","Sebelum shalat Idul Fitri","Setelah shalat Idul Fitri","Tanggal 15 Syawal"],j:1},
  ],
  akhlak:[
    {q:"Sifat yang paling utama diteladani dari Nabi Muhammad ﷺ adalah...?",o:["Kekayaan dan kekuasaan","Akhlak mulia","Kepintaran berdebat","Ketampanan fisik"],j:1},
    {q:"Berbakti kepada orang tua disebut...?",o:["Ukhuwah Islamiyah","Birrul walidain","Tawadhu","Amanah"],j:1},
    {q:"Amal yang dilakukan semata-mata karena Allah disebut...?",o:["Ikhlas","Riya","Takabur","Hasad"],j:0},
    {q:"Lawan dari sifat tawadhu adalah...?",o:["Sabar","Syukur","Takabur/Sombong","Pemaaf"],j:2},
    {q:"Hadist 'Innamal a'maalu binniyyaat' diriwayatkan oleh...?",o:["Abu Hurairah","Umar bin Khattab","Ali bin Abi Thalib","Ibnu Abbas"],j:1},
    {q:"Beramal agar dilihat orang lain disebut...?",o:["Ikhlas","Tawadhu","Riya","Amanah"],j:2},
    {q:"Sabar dalam meninggalkan maksiat disebut...?",o:["Sabar dalam ketaatan","Sabar dari maksiat","Sabar atas musibah","Sabar dalam dakwah"],j:1},
    {q:"Sifat 'Shiddiq' pada diri Nabi artinya...?",o:["Dapat dipercaya","Selalu jujur","Menyampaikan wahyu","Cerdas"],j:1},
    {q:"Meminta tolong dan berdoa hanya kepada Allah termasuk...?",o:["Akhlak kepada sesama","Akhlak kepada alam","Akhlak kepada Allah","Akhlak kepada diri sendiri"],j:2},
    {q:"Sifat amanah berarti...?",o:["Rendah hati","Dapat dipercaya","Selalu jujur","Pemaaf"],j:1},
    {q:"Hadist tentang memuliakan tamu adalah...?",o:["Man kaana yu'minu billahi...","Innamal a'maalu binniyyaat","Thalabul 'ilmi fariidhatun","Almuslimu man salima..."],j:0},
    {q:"Perintah berbakti kepada orang tua disebutkan dalam Al-Qur'an bersama perintah...?",o:["Berpuasa","Beribadah hanya kepada Allah","Membayar zakat","Menunaikan haji"],j:1},
  ],
  ski:[
    {q:"Nabi Muhammad ﷺ lahir pada tahun...?",o:["570 M","610 M","622 M","632 M"],j:0},
    {q:"Khalifah pertama setelah wafatnya Nabi Muhammad ﷺ adalah...?",o:["Umar bin Khattab","Ali bin Abi Thalib","Abu Bakar Ash-Shiddiq","Utsman bin Affan"],j:2},
    {q:"Peristiwa Isra' Mi'raj menghasilkan perintah...?",o:["Puasa Ramadhan","Membayar zakat","Shalat 5 waktu","Ibadah haji"],j:2},
    {q:"Fathu Makkah (Pembebasan Kota Makkah) terjadi pada tahun...?",o:["622 M","625 M","628 M","630 M"],j:3},
    {q:"Wali Songo yang terkenal menggunakan media wayang dalam dakwahnya adalah...?",o:["Sunan Giri","Sunan Ampel","Sunan Kalijaga","Sunan Kudus"],j:2},
    {q:"Perang pertama dalam sejarah Islam adalah...?",o:["Perang Uhud","Perang Badar","Perang Khandaq","Perang Tabuk"],j:1},
    {q:"Khulafaur Rasyidin yang terkenal menstandardisasi mushaf Al-Qur'an adalah...?",o:["Abu Bakar","Umar bin Khattab","Utsman bin Affan","Ali bin Abi Thalib"],j:2},
    {q:"Hijrah Nabi ke Madinah terjadi pada tahun...?",o:["610 M","614 M","619 M","622 M"],j:3},
    {q:"Nabi Muhammad ﷺ wafat pada usia...?",o:["55 tahun","60 tahun","63 tahun","65 tahun"],j:2},
    {q:"Islam masuk ke Nusantara (Indonesia) diperkirakan pada abad...?",o:["5-6 M","7-13 M","14-15 M","16-17 M"],j:1},
    {q:"Umar bin Khattab dijuluki...?",o:["Ash-Shiddiq","Al-Faruq","Dzun Nuraini","Babus 'Ilm"],j:1},
    {q:"Masjid pertama yang dibangun Nabi di Madinah adalah...?",o:["Masjid Nabawi","Masjid Quba","Masjidil Haram","Masjid Al-Aqsa"],j:1},
  ],
};

const PAGE_TITLES = {
  'home':'Beranda',
  'quran-pengertian':'Pengertian Al-Qur\'an','quran-tajwid':'Ilmu Tajwid',
  'quran-juz30':'Hafalan Juz 30','quran-kuis':'Kuis Al-Qur\'an',
  'aqidah-rukun':'Rukun Iman','aqidah-tauhid':'Ilmu Tauhid',
  'aqidah-asmaul':'Asmaul Husna','aqidah-kuis':'Kuis Aqidah',
  'fiqih-thaharah':'Thaharah','fiqih-shalat':'Shalat',
  'fiqih-zakat':'Zakat & Puasa','fiqih-kuis':'Kuis Fiqih',
  'akhlak-pengertian':'Akhlak Mulia','akhlak-hadist':'Hadist Pilihan',
  'akhlak-kuis':'Kuis Akhlak',
  'ski-nabi':'Sejarah Nabi ﷺ','ski-sahabat':'Khulafaur Rasyidin',
  'ski-nusantara':'Islam di Nusantara','ski-kuis':'Kuis SKI',
  'doa':'Do\'a Harian','developer':'Tentang Developer',
};

const KUIS_MAP = {
  'quran-kuis':'quran','aqidah-kuis':'aqidah',
  'fiqih-kuis':'fiqih','akhlak-kuis':'akhlak','ski-kuis':'ski',
};

/* ═══════════════════════════════════════════════
   RENDER DOA
═══════════════════════════════════════════════ */
function renderDoa() {
  const g = document.getElementById('doaGrid');
  if (!g || g.dataset.built) return;
  g.dataset.built = '1';
  DOA_DATA.forEach(d => {
    const el = document.createElement('div');
    el.className = 'doa-card';
    el.innerHTML = `
      <div class="doa-head">🤲 Do'a ${d.j}</div>
      <div class="doa-arab">${d.a}</div>
      <div class="doa-latin">${d.l}</div>
      <div class="doa-arti">${d.t}</div>`;
    g.appendChild(el);
  });
}

/* ═══════════════════════════════════════════════
   RENDER KUIS
═══════════════════════════════════════════════ */
const quizState = {};

function renderKuis(id, data) {
  const c = document.getElementById('kpc-' + id);
  if (!c || c.dataset.built) return;
  c.dataset.built = '1';

  // Load saved state
  const saved = loadKuisState(id);
  quizState[id] = saved || {};

  let h = `<div class="kuis-header">
    <h3>🧪 Kuis — ${id.charAt(0).toUpperCase()+id.slice(1)}</h3>
    <div class="kuis-score-box" id="kscore-${id}">${getScoreText(id,data)}</div>
  </div>
  <div class="kuis-progress" id="kprog-${id}">${buildProgress(id,data)}</div>
  <div class="kuis-wrap">`;

  data.forEach((q, qi) => {
    h += `<div class="kq" id="kq-${id}-${qi}">
      <p class="kq-p">${qi+1}. ${q.q}</p>
      <div class="kq-opts">`;
    q.o.forEach((o, oi) => {
      h += `<button class="kq-opt" id="kopt-${id}-${qi}-${oi}"
        onclick="jawab('${id}',${qi},${oi},this)">${String.fromCharCode(65+oi)}. ${o}</button>`;
    });
    h += `</div></div>`;
  });
  h += `</div><br><button class="kuis-reset" onclick="resetKuis('${id}')">🔄 Ulangi Kuis</button>`;
  c.innerHTML = h;

  // Restore saved answers
  if (saved) {
    Object.keys(saved).forEach(qi => {
      restoreJawab(id, parseInt(qi), saved[qi], data[qi].j);
    });
  }
}

function getScoreText(id, data) {
  const s = quizState[id] || {};
  const answered = Object.keys(s).length;
  const correct = Object.keys(s).filter(qi => s[qi] === data[qi].j).length;
  if (answered === 0) return `0 / ${data.length}`;
  return `${correct} Benar / ${answered} Dijawab`;
}

function buildProgress(id, data) {
  const s = quizState[id] || {};
  return data.map((q, qi) => {
    let cls = '';
    if (s[qi] !== undefined) cls = s[qi] === q.j ? 'benar' : 'salah';
    return `<div class="kp-dot ${cls}" title="Soal ${qi+1}"></div>`;
  }).join('');
}

function jawab(id, qi, oi, btn) {
  if (quizState[id] === undefined) quizState[id] = {};
  if (quizState[id][qi] !== undefined) return; // already answered
  quizState[id][qi] = oi;

  const data = KUIS_DATA[id];
  const benar = data[qi].j;
  document.getElementById(`kopt-${id}-${qi}-${oi}`).classList.add(oi === benar ? 'benar' : 'salah');
  if (oi !== benar) document.getElementById(`kopt-${id}-${qi}-${benar}`).classList.add('benar');

  // disable all opts for this question
  data[qi].o.forEach((_, i) => {
    const b = document.getElementById(`kopt-${id}-${qi}-${i}`);
    if (b) b.disabled = true;
  });

  // update score & progress
  const scoreEl = document.getElementById('kscore-' + id);
  if (scoreEl) scoreEl.textContent = getScoreText(id, data);
  const progEl = document.getElementById('kprog-' + id);
  if (progEl) progEl.innerHTML = buildProgress(id, data);

  // Save state
  saveKuisState(id);
}

function restoreJawab(id, qi, oi, benar) {
  const optEl = document.getElementById(`kopt-${id}-${qi}-${oi}`);
  if (optEl) optEl.classList.add(oi === benar ? 'benar' : 'salah');
  if (oi !== benar) {
    const corEl = document.getElementById(`kopt-${id}-${qi}-${benar}`);
    if (corEl) corEl.classList.add('benar');
  }
  const data = KUIS_DATA[id];
  data[qi].o.forEach((_, i) => {
    const b = document.getElementById(`kopt-${id}-${qi}-${i}`);
    if (b) b.disabled = true;
  });
}

function resetKuis(id) {
  quizState[id] = {};
  saveKuisState(id);
  const c = document.getElementById('kpc-' + id);
  if (c) { delete c.dataset.built; c.innerHTML = ''; }
  renderKuis(id, KUIS_DATA[id]);
}

function saveKuisState(id) {
  try { localStorage.setItem('pai_kuis_' + id, JSON.stringify(quizState[id] || {})); } catch(e){}
}
function loadKuisState(id) {
  try {
    const d = localStorage.getItem('pai_kuis_' + id);
    return d ? JSON.parse(d) : null;
  } catch(e){ return null; }
}

/* ═══════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════ */
function nav(btn) {
  if (!btn) return;
  const pg = btn.dataset.pg;
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  const target = document.getElementById('pg-' + pg);
  if (target) target.classList.add('on');

  document.querySelectorAll('.mi').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');

  const t = PAGE_TITLES[pg] || '';
  document.getElementById('tbsep').style.display = (t && pg !== 'home') ? 'inline' : 'none';
  document.getElementById('tbcur').textContent = pg === 'home' ? '' : t;

  if (KUIS_MAP[pg]) renderKuis(KUIS_MAP[pg], KUIS_DATA[KUIS_MAP[pg]]);
  if (pg === 'doa') renderDoa();

  document.getElementById('main').scrollTo(0, 0);
  sbClose();
}

/* ═══════════════════════════════════════════════
   SIDEBAR MOBILE
═══════════════════════════════════════════════ */
function sbToggle() {
  document.getElementById('sb').classList.toggle('open');
  document.getElementById('sbo').classList.toggle('open');
}
function sbClose() {
  document.getElementById('sb').classList.remove('open');
  document.getElementById('sbo').classList.remove('open');
}

/* ═══════════════════════════════════════════════
   LOGIN / AUTH
   Menyimpan akun di localStorage
═══════════════════════════════════════════════ */
function getUsers() {
  try { return JSON.parse(localStorage.getItem('pai_users') || '{}'); } catch(e){ return {}; }
}
function saveUsers(u) {
  try { localStorage.setItem('pai_users', JSON.stringify(u)); } catch(e){}
}
function getSession() {
  try { return JSON.parse(localStorage.getItem('pai_session') || 'null'); } catch(e){ return null; }
}
function saveSession(s) {
  try { localStorage.setItem('pai_session', JSON.stringify(s)); } catch(e){}
}

function openLoginModal() {
  const session = getSession();
  const modal = document.getElementById('loginModal');
  modal.classList.add('open');
  if (session) {
    showUserInfo(session);
  } else {
    switchModalTab('login');
  }
}
function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('open');
  clearModalMsg();
}
document.addEventListener('click', e => {
  if (e.target === document.getElementById('loginModal')) closeLoginModal();
});

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.modal-form').forEach(f => f.classList.remove('on'));
  document.getElementById('mtab-' + tab).classList.add('on');
  document.getElementById('mform-' + tab).classList.add('on');
  clearModalMsg();
}

function showUserInfo(session) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.modal-form').forEach(f => f.classList.remove('on'));
  document.getElementById('mform-user').classList.add('on');
  const initial = session.name.charAt(0).toUpperCase();
  document.getElementById('mform-user').innerHTML = `
    <div class="user-info-box">
      <div class="user-avatar-big">${initial}</div>
      <div class="user-name-big">${session.name}</div>
      <div class="user-email-big">${session.email}</div>
      <div class="user-since">🕐 Login sejak: ${session.loginTime}</div>
    </div>
    <button class="logout-btn" onclick="doLogout()">🚪 Keluar / Logout</button>`;
  updateTopbarBtn(session);
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  const pass2 = document.getElementById('reg-pass2').value;
  if (!name || !email || !pass) return showMsg('register','err','Semua field wajib diisi!');
  if (pass !== pass2) return showMsg('register','err','Konfirmasi password tidak cocok!');
  if (pass.length < 6) return showMsg('register','err','Password minimal 6 karakter!');
  const users = getUsers();
  if (users[email]) return showMsg('register','err','Email sudah terdaftar!');
  users[email] = { name, email, pass, createdAt: new Date().toLocaleString('id-ID') };
  saveUsers(users);
  showMsg('register','ok','✅ Akun berhasil dibuat! Silakan login.');
  setTimeout(() => switchModalTab('login'), 1500);
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) return showMsg('login','err','Email dan password wajib diisi!');
  const users = getUsers();
  if (!users[email]) return showMsg('login','err','Akun tidak ditemukan!');
  if (users[email].pass !== pass) return showMsg('login','err','Password salah!');
  const session = { name: users[email].name, email, loginTime: new Date().toLocaleString('id-ID') };
  saveSession(session);
  showMsg('login','ok',`✅ Selamat datang, ${session.name}!`);
  setTimeout(() => { showUserInfo(session); clearLoginForm(); }, 1200);
}

function doLogout() {
  saveSession(null);
  closeLoginModal();
  updateTopbarBtn(null);
}

function updateTopbarBtn(session) {
  const btn = document.getElementById('topbarLoginBtn');
  if (!btn) return;
  if (session) {
    const initial = session.name.charAt(0).toUpperCase();
    btn.innerHTML = `<div class="avatar">${initial}</div>${session.name.split(' ')[0]}`;
  } else {
    btn.innerHTML = `<div class="avatar">👤</div>Login`;
  }
}

function showMsg(form, type, text) {
  const el = document.getElementById('mmsg-' + form);
  if (!el) return;
  el.className = 'modal-msg ' + type;
  el.textContent = text;
  el.style.display = 'block';
}
function clearModalMsg() {
  document.querySelectorAll('.modal-msg').forEach(el => { el.style.display='none'; el.textContent=''; });
}
function clearLoginForm() {
  ['login-email','login-pass'].forEach(id => { const el = document.getElementById(id); if(el) el.value=''; });
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // restore login session button
  const session = getSession();
  if (session) updateTopbarBtn(session);

  // Enter key on login form
  ['login-email','login-pass'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
  });
  ['reg-name','reg-email','reg-pass','reg-pass2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') doRegister(); });
  });
});