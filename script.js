const randomButton = document.getElementById('randomButton');
const photoContainer = document.getElementById('photoContainer');
const quoteContainer = document.getElementById('quoteContainer');
// const starsContainer = document.querySelector('.stars');

// function createStars() {
//     const numStars = 200; // Number of stars
//     for (let i = 0; i < numStars; i++) {
//         const star = document.createElement('div');
//         star.className = 'star';
//         star.style.top = `${Math.random() * 100}vh`;
//         star.style.left = `${Math.random() * 100}vw`;
//         star.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`; // Random duration between 0.5s and 2s
//         starsContainer.appendChild(star);
//     }
// }

// createStars();

const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"]; // Add your photo URLs here
const quotes = ["Mükemmel bir dinleyicisin.",
"Sonsuz bir sevgi ve şefkat kaynağısın.",
"Hayat dolu ve pozitif bir enerjin var.",
"Beni olduğum gibi kabul ediyor ve destekliyorsun.",
"Birlikte geçirdiğimiz her an değerli ve unutulmaz.",
"Bana her zaman güven duyuyorsun ve güçlendiriyorsun.",
"Mükemmel espri anlayışına sahipsin.",
"Her zaman yanımda olduğunu hissettiriyorsun.",
"Benim için her zaman zaman ayırıyorsun.",
"Onunla geçirdiğim her an, hayatımı daha anlamlı kılıyorsun.", "Senin gülüşün hayatımı aydınlatıyor.",
"Seninle her zaman yeni şeyler keşfetmek heyecan verici.",
"Senin pozitif enerjin etrafındakileri olumlu şekilde etkiliyor.",
"Seninle geçirdiğim her an, dünyanın en güzel anı haline geliyor.",
"Senin hayallerin ve hedeflerin bana ilham veriyor.",
"Senin içtenlikle beni dinlemen, kendimi değerli hissettiriyor.",
"Senin sevgin ve şefkatin beni sakinleştiriyor.",
"Senin neşen ve coşkunluğun her zaman etkileyici.",
"Senin beni desteklemen, en büyük gücüm oluyor.",
"Senin güzelliğin sadece dış değil, içten geliyor.",
"Senin mizah anlayışın, en zor anlarda bile bana gülme gücü veriyor.",
"Seninle olmak, hayatın gerçek anlamını keşfetmek gibidir.",
"Senin cesaretin ve kararlılığın, beni motive ediyor.",
"Senin sevgin, dünyayı daha iyi bir yer haline getiriyor.",
"Senin neşen, gri günlerimi aydınlatıyor.",
"Senin sabrın ve anlayışın, ilişkimizi daha güçlü kılıyor.",
"Senin içten gülümsemen, her şeyi daha olumlu yapar.",
"Senin sevecenliğin, etrafındakilere de ilham veriyor.",
"Senin düşünceli davranışların, her zaman kalbimi kazanır.",
"Senin hayattaki tutkun, bana enerji katıyor.", "Senin beni anlamaya olan sabrın beni etkiliyor.",
"Seninle geçirdiğimiz her gün, yeni bir maceraya dönüşüyor.",
"Senin neşen ve enerjin, etrafındakilere de bulaşıyor.",
"Seninle her an, bir hazine gibi değerli.",
"Senin içindeki güzellik, dışındakinden çok daha derin.",
"Senin benim hayatıma getirdiğin denge, beni rahatlatıyor.",
"Senin güçlülüğün ve azmin, her zorluğun üstesinden gelebileceğime inandırıyor.",
"Senin düşünceli jestlerin, her zaman günümü aydınlatıyor.",
"Senin benimle olduğun an, dünya dertlerimden uzaklaşıyor.",
"Senin bana verdiğin destek, hayallerimin peşinden gitmemi sağlıyor.",
"Senin benimle güldüğün an, en gri günlerim bile renkleniyor.",
"Senin sevgin, içimi ısıtan bir ateş gibi.",
"Senin varlığın, yaşamımı daha anlamlı kılıyor.",
"Senin başarılarının ardındaki emek, beni motive ediyor.",
"Senin bana duyduğun güven, en değerli hazinelerimden biri.",
"Seninle geçirdiğimiz sessiz anlar, bin kelimeden daha fazlasını anlatıyor.",
"Seninle geleceği düşünmek, hayalin ötesinde bir mutluluk.",
"Senin sevgisi, kalbimin en derin köşelerine dokunuyor.",
"Senin nezaketin, etrafındaki insanlara karşı olan büyük saygını gösteriyor.",
"Seninle birlikte büyümek, hayatın gerçek anlamı.", "Senin bakışların, dünyanın güzelliklerini daha derinden görmeme neden oluyor.",
"Senin içten gülümsemen, en kötü günlerimi bile aydınlatıyor.",
"Senin dokunuşun, içsel huzurumu sağlıyor.",
"Senin cesaretin, beni kendi korkularımla yüzleşmeye teşvik ediyor.",
"Senin sevgin, kalbimde sonsuz bir sıcaklık bırakıyor.",
"Seninla geçirdiğim her an, hayatın değerini daha iyi anlamama neden oluyor.",
"Senin sabrın, benim en büyük öğretmenim.",
"Seninle konuşmak, düşüncelerimi ve duygularımı ifade etmemi sağlıyor.",
"Senin nezaketin, dünyayı daha iyi bir yer haline getirmeme ilham veriyor.",
"Senin bilgeliğin, benim daha iyi bir insan olmamı sağlıyor.",
"Senin bana kattığın değer, beni daha özel hissettiriyor.",
"Senin zarafetin, her şeyi daha güzel hale getiriyor.",
"Senin sevgin, hayatta bir amaç bulmama yardımcı oluyor.",
"Seninle her an, bir maceraya dönüşüyor.",
"Senin sevgisi, tıpkı bir rehber gibi beni doğru yola yönlendiriyor.",
"Senin dürüstlüğün, ilişkimizi daha güçlü kılıyor.",
"Senin şevkatin, benim de daha büyük hayallere sahip olmama neden oluyor.",
"Seninle her şey daha renkli ve anlamlı hale geliyor.",
"Senin sevgin, dünyanın en değerli hazinesi.", "Seninle geçirdiğim her an, bir masal gibi.",
"Senin sevgin, dünyanın en güzel şarkısı.",
"Seninle hayat, hiçbir zaman sıkıcı değil.",
"Senin gülerken gözlerinin parlaması, kalbimi hızla çarpıyor.",
"Senin sesin, en sevdiğim melodi.",
"Seninle geçirdiğim her gün, bir hazine gibi değerli.",
"Senin gülüşün, etrafındaki her şeyi aydınlatıyor.",
"Seninle birlikteyken zaman duruyor.",
"Senin gücün, benim en büyük ilham kaynağım.",
"Senin sevgin, en karanlık günlerimi aydınlatıyor.",
"Seninle her şey daha kolay, daha anlamlı.",
"Senin neşen, etrafındaki herkesi mutlu ediyor.",
"Seninle her sezon, bahar gibi taze ve yeni.",
"Seninle olan her an, bir ömre bedel.",
"Senin sevgin, dünyanın en güçlü kuvveti.",
"Seninle geçirdiğimiz her an, bir şiir gibi.",
"Seninle geleceği düşlemek, en güzel hayalim.",
"Seninle her zorluk, birlikte üstesinden gelmek için bir fırsat.",
"Senin varlığın, hayatımı renklendiriyor.",
"Seninle, her gün yeni bir macera.","Seninle her an, yeni bir başlangıç.",
"Senin varlığın, dünyama anlam katıyor.",
"Senin güvenilirliğin, sığındığım liman.",
"Senin sevgin, hayatımdaki en değerli hazine.",
"Senin güzellik, içten geliyor ve büyülüyor.",
"Senin cesaretin, hayallerimi daha büyük düşünmeme neden oluyor.",
"Seninle geçirdiğimiz her gün, bir masalın parçası gibi.",
"Senin sevecenliğin, dünyamı daha güzel bir yer haline getiriyor.",
"Senin anlayışın, benim en derin duygularıma dokunuyor.",
"Seninle her gün, yeni bir sebep keşfediyorum seni sevmek için.",
"Senin neşen, çevrendeki herkesi mutlu ediyor.",
"Seninle birlikte olmak, en sevdiğim hikayenin parçası gibi.",
"Senin içten gülüşün, en kötü günümü bile aydınlatıyor.",
"Senin şefkatli dokunuşun, yaralarımı iyileştiriyor.",
"Senin sevgisi, kalbimdeki tüm boşlukları dolduruyor.",
"Seninle her paylaşılan an, bir armağan gibi.",
"Senin varlığın, hayatıma dokunduğun her yerde hissediliyor.",
"Seninle geçirdiğimiz her dakika, sonsuz bir aşk şarkısı gibi.",
"Seninle geçirdiğimiz her an, en değerli anımdır.",
"Seninle olmak, yaşamımın en büyük zenginliğidir."]; // Add your quotes here

randomButton.addEventListener('click', () => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    //alert(quotes.length)

    photoContainer.innerHTML = `<img src="${randomPhoto}" alt="Random Photo" width="300" height="200">`;
    quoteContainer.textContent = randomQuote;
});
