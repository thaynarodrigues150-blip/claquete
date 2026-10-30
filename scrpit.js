// ======================================
// CATÁLOGO DE FILMES
// ======================================

const movies = [

    {
        id: 1,
        title: "O Iluminado",
        genre: "Terror",
        year: 1980,
        director: "Stanley Kubrick",
        poster: "https://image.tmdb.org/t/p/w500/xazWoLealQwEgqZ89MLZklLZD3k.jpg",
        description: "Uma família se muda para um hotel isolado durante o inverno. Aos poucos, forças misteriosas começam a afetar a mente do pai."
    },

    {
        id: 2,
        title: "Corra!",
        genre: "Terror",
        year: 2017,
        director: "Jordan Peele",
        poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        description: "Chris visita a família de sua namorada e percebe que existe algo muito estranho por trás daquela recepção aparentemente amigável."
    },

    {
        id: 3,
        title: "Hereditário",
        genre: "Terror",
        year: 2018,
        director: "Ari Aster",
        poster: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg",
        description: "Depois de uma perda na família, acontecimentos assustadores revelam segredos sombrios que atravessam gerações."
    },

    {
        id: 4,
        title: "Invocação do Mal",
        genre: "Terror",
        year: 2013,
        director: "James Wan",
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6js3ikA0fEp.jpg",
        description: "Dois investigadores paranormais ajudam uma família que está sendo aterrorizada por uma presença misteriosa."
    },

    {
        id: 5,
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        director: "James Cameron",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "Jack e Rose vivem uma história de amor inesquecível durante a viagem do Titanic."
    },

    {
        id: 6,
        title: "La La Land",
        genre: "Romance",
        year: 2016,
        director: "Damien Chazelle",
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Sf8.jpg",
        description: "Uma atriz e um músico tentam realizar seus sonhos em Los Angeles enquanto descobrem o amor."
    },

    {
        id: 7,
        title: "Orgulho e Preconceito",
        genre: "Romance",
        year: 2005,
        director: "Joe Wright",
        poster: "https://image.tmdb.org/t/p/w500/sGjI7w1Tf8z6xVMVhfUMq2c2p2.jpg",
        description: "Elizabeth Bennet e o Sr. Darcy precisam superar seus julgamentos para descobrir o que realmente sentem."
    },

    {
        id: 8,
        title: "Como Eu Era Antes de Você",
        genre: "Romance",
        year: 2016,
        director: "Thea Sharrock",
        poster: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
        description: "Uma jovem começa a trabalhar como cuidadora de um homem e transforma a vida dos dois."
    },

    {
        id: 9,
        title: "Mad Max: Estrada da Fúria",
        genre: "Ação",
        year: 2015,
        director: "George Miller",
        poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        description: "Em um deserto pós-apocalíptico, Max se une à Furiosa em uma fuga cheia de ação."
    },

    {
        id: 10,
        title: "John Wick",
        genre: "Ação",
        year: 2014,
        director: "Chad Stahelski",
        poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6Oo3Zogw.jpg",
        description: "Um antigo assassino de aluguel volta ao mundo do crime depois que sua vida tranquila é destruída."
    },

    {
        id: 11,
        title: "Pantera Negra",
        genre: "Ação",
        year: 2018,
        director: "Ryan Coogler",
        poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description: "T'Challa retorna a Wakanda para assumir seu lugar como rei e proteger seu povo."
    },

    {
        id: 12,
        title: "Top Gun: Maverick",
        genre: "Ação",
        year: 2022,
        director: "Joseph Kosinski",
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        description: "Maverick retorna para treinar uma nova geração de pilotos em uma missão de alto risco."
    },

    {
        id: 13,
        title: "Garota Exemplar",
        genre: "Suspense",
        year: 2014,
        director: "David Fincher",
        poster: "https://image.tmdb.org/t/p/w500/lv5xShBIDPe7m4ufdlV0IAc7Avk.jpg",
        description: "Quando sua esposa desaparece, Nick se torna o principal suspeito de um mistério cheio de reviravoltas."
    },

    {
        id: 14,
        title: "Seven: Os Sete Crimes Capitais",
        genre: "Suspense",
        year: 1995,
        director: "David Fincher",
        poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        description: "Dois detetives investigam uma sequência de crimes relacionados aos sete pecados capitais."
    },

    {
        id: 15,
        title: "Ilha do Medo",
        genre: "Suspense",
        year: 2010,
        director: "Martin Scorsese",
        poster: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUiq7.jpg",
        description: "Um agente federal investiga o desaparecimento de uma paciente em um hospital psiquiátrico isolado."
    },

    {
        id: 16,
        title: "Um Lugar Silencioso",
        genre: "Suspense",
        year: 2018,
        director: "John Krasinski",
        poster: "https://image.tmdb.org/t/p/w500/nAU74GmpWn5G9wTPi9K6z9H7e0j.jpg",
        description: "Uma família precisa viver em silêncio absoluto para escapar de criaturas que caçam pelo som."
    }

];


// ======================================
// ELEMENTOS DO SITE
// ======================================

const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("movieModal");


// ======================================
// DADOS E SALVAMENTO
// ======================================

function loadSet(key) {

    try {
        return new Set(JSON.parse(localStorage.getItem(key)) || []);
    } catch {
        return new Set();
    }

}

function saveSet(key, set) {
    localStorage.setItem(key, JSON.stringify([...set]));
}

function loadRatings() {

    try {
        return JSON.parse(localStorage.getItem("claqueteRatings")) || {};
    } catch {
        return {};
    }

}

function saveRatings() {
    localStorage.setItem("claqueteRatings", JSON.stringify(ratings));
}

let watched = loadSet("claqueteWatched");
let wishes = loadSet("claqueteWishes");
let ratings = loadRatings();

let activeFilter = "Todos";
let currentView = "catalogo";
let currentMovie = null;


// ======================================
// TEXTOS DA TELA PRINCIPAL
// ======================================

const heroCopy = {

    Terror: [
        "SKIN TERROR",
        "Apague as luzes.",
        "Anote cada susto, dê nota para cada pesadelo."
    ],

    Romance: [
        "SKIN ROMANCE",
        "A história é sua.",
        "Encontre filmes para aquecer o coração."
    ],

    Ação: [
        "SKIN AÇÃO",
        "Aumente o volume.",
        "Adrenalina, coragem e cenas inesquecíveis."
    ],

    Suspense: [
        "SKIN SUSPENSE",
        "Nada é o que parece.",
        "Prepare-se para desconfiar de cada detalhe."
    ]

};


// ======================================
// ATUALIZAR CONTADORES
// ======================================

function updateStats() {

    document.getElementById("watchedCount").textContent =
        watched.size;

    document.getElementById("wishCount").textContent =
        wishes.size;

    const values = Object.values(ratings);

    document.getElementById("averageRating").textContent =
        values.length
            ? (
                values.reduce((a, b) => a + b, 0) / values.length
            ).toFixed(1)
            : "—";

}


// ======================================
// MOSTRAR FILMES
// ======================================

function renderMovies() {

    const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");

    let list = movies.filter(movie => {

        const matchesFilter =
            activeFilter === "Todos" ||
            movie.genre === activeFilter;

        const matchesSearch =
            `${movie.title} ${movie.director} ${movie.genre}`
                .toLocaleLowerCase("pt-BR")
                .includes(term);

        const matchesView =
            currentView === "assistidos"
                ? watched.has(movie.id)
                : currentView === "desejos"
                    ? wishes.has(movie.id)
                    : true;

        return matchesFilter && matchesSearch && matchesView;

    });

    grid.innerHTML = "";

    list.forEach(movie => {

        const card = document.createElement("article");

        card.className = "movie-card";

        card.innerHTML = `

            <div class="poster-wrap">

                <img
                    src="${movie.poster}"
                    alt="Pôster de ${movie.title}"
                    loading="lazy"
                >

                <span class="poster-tag">${movie.genre}</span>

                <span class="poster-year">${movie.year}</span>

                <h3>${movie.title}</h3>

                <span class="movie-director">
                    ${movie.director}
                </span>

                <div class="card-icons">

                    <button
                        class="mini-action ${wishes.has(movie.id) ? "on" : ""}"
                        data-fav="${movie.id}"
                        aria-label="Favoritar">
                        ${wishes.has(movie.id) ? "♥" : "♡"}
                    </button>

                    <button
                        class="mini-action ${watched.has(movie.id) ? "on" : ""}"
                        data-watched="${movie.id}"
                        aria-label="Marcar como assistido">
                        ✓
                    </button>

                </div>

            </div>

        `;

        card.addEventListener("click", () => {
            openMovie(movie.id);
        });

        card.querySelector("[data-fav]").addEventListener("click", event => {

            event.stopPropagation();
            toggleWish(movie.id);

        });

        card.querySelector("[data-watched]").addEventListener("click", event => {

            event.stopPropagation();
            toggleWatched(movie.id);

        });

        card.querySelector("img").addEventListener("error", event => {

            event.target.style.display = "none";

        });

        grid.appendChild(card);

    });

    document.getElementById("emptyState").hidden = list.length !== 0;

    const titles = {
        catalogo: "Explorar filmes",
        assistidos: "Filmes assistidos",
        desejos: "Lista de desejos"
    };

    document.getElementById("catalogTitle").textContent =
        titles[currentView] || "Explorar filmes";

    updateStats();

}


// ======================================
// FILMES FAVORITOS
// ======================================

function toggleWish(id) {

    if (wishes.has(id)) {
        wishes.delete(id);
    } else {
        wishes.add(id);
    }

    saveSet("claqueteWishes", wishes);

    renderMovies();

    if (currentMovie && currentMovie.id === id) {
        updateModalButtons();
    }

}


// ======================================
// FILMES ASSISTIDOS
// ======================================

function toggleWatched(id) {

    if (watched.has(id)) {
        watched.delete(id);
    } else {
        watched.add(id);
    }

    saveSet("claqueteWatched", watched);

    renderMovies();

    if (currentMovie && currentMovie.id === id) {
        updateModalButtons();
    }

}


// ======================================
// ABRIR DETALHES DO FILME
// ======================================

function openMovie(id) {

    currentMovie = movies.find(movie => movie.id === id);

    if (!currentMovie) return;

    document.getElementById("modalPoster").src =
        currentMovie.poster;

    document.getElementById("modalPoster").alt =
        "Pôster de " + currentMovie.title;

    document.getElementById("modalGenre").textContent =
        currentMovie.genre;

    document.getElementById("modalTitle").textContent =
        currentMovie.title;

    document.getElementById("modalMeta").textContent =
        currentMovie.year + " • " + currentMovie.director;

    document.getElementById("modalDescription").textContent =
        currentMovie.description;

    document.getElementById("ratingSelect").value =
        ratings[id] || "";

    updateModalButtons();

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

}


// ======================================
// ATUALIZAR BOTÕES DO DETALHE
// ======================================

function updateModalButtons() {

    if (!currentMovie) return;

    document.getElementById("watchedButton").textContent =
        watched.has(currentMovie.id)
            ? "✓ Já assistido"
            : "Marcar como assistido";

    document.getElementById("favoriteButton").textContent =
        wishes.has(currentMovie.id)
            ? "♥ Remover dos desejos"
            : "♡ Adicionar aos desejos";

}


// ======================================
// FECHAR DETALHES
// ======================================

function closeModal() {

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

}

document.querySelectorAll("[data-close-modal]").forEach(element => {
    element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


// ======================================
// BOTÃO ASSISTIDO DENTRO DOS DETALHES
// ======================================

document.getElementById("watchedButton").addEventListener("click", () => {

    if (currentMovie) {
        toggleWatched(currentMovie.id);
    }

});


// ======================================
// BOTÃO DESEJOS DENTRO DOS DETALHES
// ======================================

document.getElementById("favoriteButton").addEventListener("click", () => {

    if (currentMovie) {
        toggleWish(currentMovie.id);
    }

});


// ======================================
// AVALIAR FILMES
// ======================================

document.getElementById("ratingSelect").addEventListener("change", event => {

    if (!currentMovie) return;

    if (event.target.value) {

        ratings[currentMovie.id] = Number(event.target.value);

    } else {

        delete ratings[currentMovie.id];

    }

    saveRatings();
    updateStats();

});


// ======================================
// FILTRAR GÊNEROS
// ======================================

function setFilter(filter) {

    currentView = "catalogo";
    activeFilter = filter;

    document.querySelectorAll("[data-filter]").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );

        if (button.classList.contains("genre-button")) {
            button.classList.toggle(
                "selected",
                button.dataset.filter === filter
            );
        }

    });

    renderMovies();

}


// BOTÕES DE GÊNERO

document.querySelectorAll("[data-filter]").forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        setFilter(filter);

        if (button.classList.contains("genre-button")) {

            const copy = heroCopy[filter];

            document.getElementById("heroEyebrow").textContent = copy[0];
            document.getElementById("heroTitle").textContent = copy[1];
            document.getElementById("heroSubtitle").textContent = copy[2];

            document.getElementById("catalogo").scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ======================================
// MENU SUPERIOR
// ======================================

document.querySelectorAll("[data-nav]").forEach(button => {

    button.addEventListener("click", () => {

        const destination = button.dataset.nav;

        // SEÇÃO DE PERSONAGENS

        if (destination === "personagens") {

            document.getElementById("personagens").scrollIntoView({
                behavior: "smooth"
            });

            return;

        }

        // FILMES, ASSISTIDOS E DESEJOS

        currentView = destination;
        activeFilter = "Todos";
        searchInput.value = "";

        document.querySelectorAll("[data-filter]").forEach(item => {

            item.classList.toggle(
                "active",
                item.dataset.filter === "Todos"
            );

            if (item.classList.contains("genre-button")) {
                item.classList.toggle(
                    "selected",
                    item.dataset.filter === "Terror"
                );
            }

        });

        renderMovies();

        document.getElementById("catalogo").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ======================================
// BOTÃO LOGO
// ======================================

document.getElementById("brand").addEventListener("click", event => {

    event.preventDefault();

    currentView = "catalogo";
    activeFilter = "Todos";
    searchInput.value = "";

    renderMovies();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================
// PESQUISAR FILMES
// ======================================

searchInput.addEventListener("input", renderMovies);


// ======================================
// TROCAR CORES DO SITE
// ======================================

const themeDots = document.querySelectorAll(".theme-dot");

function applyTheme(theme) {

    document.body.classList.remove(
        "theme-vermelho",
        "theme-dourado",
        "theme-azul"
    );

    if (theme !== "noite") {
        document.body.classList.add("theme-" + theme);
    }

    themeDots.forEach(dot => {

        dot.classList.toggle(
            "active",
            dot.dataset.theme === theme
        );

    });

    localStorage.setItem("claqueteTheme", theme);

}

themeDots.forEach(dot => {

    dot.addEventListener("click", () => {

        applyTheme(dot.dataset.theme);

    });

});


// ======================================
// INICIAR SITE
// ======================================

const savedTheme = localStorage.getItem("claqueteTheme") || "noite";

applyTheme(savedTheme);

renderMovies();