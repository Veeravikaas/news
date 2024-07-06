let breakingImg = document.querySelector('#breakingImg');
let breakingNews_title = document.querySelector('#breakingNews .title');
let breakingNews_desc = document.querySelector('#breakingNews .description');
let topNews = document.querySelector('.topNews');
let sportsNews = document.querySelector('#sportsNews .newsBox');
let businessNews = document.querySelector('#businessNews .newsBox');
let techNews = document.querySelector('#techNews .newsBox');

let header = document.querySelector('.header');
let toggleMenu = document.querySelector('.bar');
let menu = document.querySelector('nav ul');

const toggle = (e) => {
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('activeMenu');
};

toggleMenu.addEventListener('click', toggle);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Fetching news data from a website providing API

const apiKey = "29f8e42efe874ee2be23f0d1edb6844b";

// Define a function to fetch US news
const fetchUSNews = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(url);
    const response = await data.json();
    return response.articles;
};

// Define a function to fetch Indian news
const fetchIndianNews = async (category, pageSize) => {
    const indianUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
    const data = await fetch(indianUrl);
    const response = await data.json();
    return response.articles;
};

// Function to handle highlighting
const highlightContent = (element) => {
    element.classList.toggle('highlighted'); // Toggle the 'highlighted' class
};

// Example usage for adding US breaking news
const add_breakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`;
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    breakingNews_desc.innerHTML = `${data[0].description}`;
    
    // Example: Add highlighting functionality to breaking news
    breakingNews_title.addEventListener('click', () => {
        highlightContent(breakingNews_title.closest('.news') || breakingNews_title.closest('.newsCard'));
    });
};
fetchUSNews('general', 5).then(add_breakingNews);

// Example usage for adding US news to other sections like top news, sports, business, tech
const add_topNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="news">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add US top news to the DOM
    topNews.innerHTML = html;

    // Example: Add highlighting functionality to US top news
    topNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.news'));
        });
    });
};
fetchUSNews('general', 20).then(add_topNews);

// Example usage for adding US sports news
const add_sportsNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add US sports news to the DOM
    sportsNews.innerHTML = html;

    // Example: Add highlighting functionality to US sports news
    sportsNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.newsCard'));
        });
    });
};
fetchUSNews('sports', 5).then(add_sportsNews);

// Example usage for adding US business news
const add_businessNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add US business news to the DOM
    businessNews.innerHTML = html;

    // Example: Add highlighting functionality to US business news
    businessNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.newsCard'));
        });
    });
};
fetchUSNews('business', 5).then(add_businessNews);

// Example usage for adding US tech news
const add_techNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add US tech news to the DOM
    techNews.innerHTML = html;

    // Example: Add highlighting functionality to US tech news
    techNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.newsCard'));
        });
    });
};
fetchUSNews('technology', 5).then(add_techNews);

// Example usage for adding Indian news to breaking news section
const add_indianBreakingNews = (data) => {
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`;
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`;
    breakingNews_desc.innerHTML = `${data[0].description}`;
    
    // Example: Add highlighting functionality to Indian breaking news
    breakingNews_title.addEventListener('click', () => {
        highlightContent(breakingNews_title.closest('.news') || breakingNews_title.closest('.newsCard'));
    });
};
fetchIndianNews('general', 5).then(add_indianBreakingNews);

// Example usage for adding Indian news to other sections like top news, sports, business, tech
const add_indianTopNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="news">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add Indian top news to the DOM
    topNews.innerHTML = html;

    // Example: Add highlighting functionality to Indian top news
    topNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.news'));
        });
    });
};
fetchIndianNews('general', 20).then(add_indianTopNews);

// Example usage for adding Indian sports news
const add_indianSportsNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add Indian sports news to the DOM
    sportsNews.innerHTML = html;

    // Example: Add highlighting functionality to Indian sports news
    sportsNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.newsCard'));
        });
    });
};
fetchIndianNews('sports', 5).then(add_indianSportsNews);

// Example usage for adding Indian business news
const add_indianBusinessNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add Indian business news to the DOM
    businessNews.innerHTML = html;

    // Example: Add highlighting functionality to Indian business news
    businessNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.newsCard'));
        });
    });
};
fetchIndianNews('business', 5).then(add_indianBusinessNews);

// Example usage for adding Indian tech news
const add_indianTechNews = (data) => {
    let html = '';
    data.forEach((element) => {
        let title = element.title.length < 100 ? element.title : `${element.title.slice(0, 100)}...`;

        html += `<div class="newsCard">
                    <div class="img">
                        <img src=${element.urlToImage} alt="image">
                    </div>
                    <div class="text">
                        <div class="title">
                            <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                </div>`;
    });

    // Add Indian tech news to the DOM
    techNews.innerHTML = html;

    // Example: Add highlighting functionality to Indian tech news
    techNews.querySelectorAll('.title a').forEach((link) => {
        link.addEventListener('click', (event) => {
            highlightContent(event.target.closest('.newsCard'));
        });
    });
};
fetchIndianNews('technology', 5).then(add_indianTechNews);
