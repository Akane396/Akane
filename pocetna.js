const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const vrati = document.getElementById('vrati')

vrati.addEventListener('click' , () => {
	menu.classList.remove('open');
	menuIcon.classList.remove('open');
	overlay.classList.remove('open');
})

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('open');
	menu.classList.toggle('open');
	overlay.classList.toggle('open');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	menuIcon.classList.remove('open');
	overlay.classList.remove('open');
});

function toggleSearch() {
	const searchBox = document.getElementById("searchBox");
	if (searchBox.style.display === "none" || searchBox.style.display === "") {
		searchBox.style.display = "block";
		document.getElementById("searchInput").focus();
	} else {
		searchBox.style.display = "none";
	}
}

function search() {
	const value = document.getElementById("searchInput").value.toLowerCase();

	fetch("struktura.json")
		.then(res => res.json())
		.then(data => {
			const anime = data.find(a => a.naziv.toLowerCase() === value);

			if (anime) {
				// Preusmjeri na detaljnu stranicu
				window.location.href = `videi.html?id=${anime.id}`;
			} else {
				alert("Hanime nije pronađen.");
			}
		})
		.catch(error => console.error("Greška pri učitavanju JSON-a:", error));
}

const img = document.getElementById('slider-image');
  const title = document.getElementById('anime-title');
  const link = document.getElementById('anime-link');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  
  let animeList = [];
  let currentIndex = 0;
  let interval;
  
  function showAnime(index) {
  	const anime = animeList[index];
  	img.src = anime.kvadrat
  	title.textContent = anime.naziv;
  	link.href = `videi.html?id=${encodeURIComponent(anime.id)}`;
  }
  
  function startAutoSlide() {
  	interval = setInterval(() => {
  		currentIndex = (currentIndex + 1) % animeList.length;
  		showAnime(currentIndex);
  	}, 4000); // svakih 10 sekundi
  }
  
  function stopAutoSlide() {
  	clearInterval(interval);
  }
  
  fetch('struktura.json')
  	.then(res => res.json())
  	.then(data => {
  		animeList = data;
  		showAnime(currentIndex);
  		startAutoSlide();
  	});
  
  prev.addEventListener('click', () => {
  	stopAutoSlide();
  	currentIndex = (currentIndex - 1 + animeList.length) % animeList.length;
  	showAnime(currentIndex);
  	startAutoSlide();
  });
  
  next.addEventListener('click', () => {
  	stopAutoSlide();
  	currentIndex = (currentIndex + 1) % animeList.length;
  	showAnime(currentIndex);
  	startAutoSlide();
  });
  
