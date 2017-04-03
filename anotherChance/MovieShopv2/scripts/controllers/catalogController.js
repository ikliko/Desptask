/**
 * Created by kliko on 26.04.15.
 */
var movieShop = movieShop || {};

movieShop._catalogController = (function () {
    function CatalogController () {
        this.data  = movieShop.Database._db.menu.catalog;
    }

    CatalogController.prototype.getDramaPage = function (selector, lang) {
        movieShop.view.rendDramaPage(selector, this.data, lang)
    };

    CatalogController.prototype.getComedyPage = function (selector, lang) {
        movieShop.view.rendComedyPage(selector, this.data, lang)
    };

    CatalogController.prototype.getFantasyAdventurePage = function (selector, lang) {
        movieShop.view.rendFantasyPage(selector, this.data, lang)
    };

    CatalogController.prototype.getHorrorPage = function (selector, lang) {
        movieShop.view.rendHorrorPage(selector, this.data, lang);
    };

    CatalogController.prototype.getMoviePage = function (selector, lang, movie) {
        switch (movie) {
            case 'fury':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.drama.movies[0], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.drama.movies[0], lang);
                }
                break;
            case 'fiftyshadesofgray':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.drama.movies[1], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.drama.movies[1], lang);
                }
                break;
            case 'exmachina':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.drama.movies[2], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.drama.movies[2], lang);
                }
                break;
            case 'home':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.comedy.movies[0], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.comedy.movies[0], lang);
                }
                break;
            case 'kingsman':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.comedy.movies[1], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.comedy.movies[1], lang);
                }
                break;
            case 'gethard':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.comedy.movies[2], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.comedy.movies[2], lang);
                }
                break;
            case 'hungergames':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.fantasy.movies[0], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.fantasy.movies[0], lang);
                }
                break;
            case 'avengers':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.fantasy.movies[1], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.fantasy.movies[1], lang);
                }
                break;
            case 'hobbit':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.fantasy.movies[2], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.fantasy.movies[2], lang);
                }
                break;
            case 'poltergeist':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.horror.movies[0], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.horror.movies[0], lang);
                }
                break;
            case 'asabove':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.horror.movies[1], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.horror.movies[1], lang);
                }
                break;
            case 'annabelle':
                if(lang === 'bg') {
                    movieShop.view.rendMovie(selector, this.data.lang.bg.content.horror.movies[2], lang);
                } else if (lang === 'en') {
                    movieShop.view.rendMovie(selector, this.data.lang.en.content.horror.movies[2], lang);
                }
                break;
        }
    };

    return {
        load: function () {
            return new CatalogController();
        }
    }
}());