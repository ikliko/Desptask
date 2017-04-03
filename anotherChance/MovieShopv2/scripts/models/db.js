/**
 * Created by kliko on 29.04.15.
 */
var movieShop = movieShop || {};

movieShop._db = (function () {
    function Database () {
        this._db = {
            menu: {
                home: {
                    lang: {
                        bg: {
                            name: "Начало",
                            content: {
                                title: 'Видеотека "Сьомга"',
                                context: {
                                    text: 'Нашата Видеотека "Сьомга" е на пазара от 2015г. с постоянно доволни клиенти от нашите услуги и добро обслужване на добри цени. Всички предлагани филми са в Full HD качество. Предлагаме също доставка на филма до дома и вземане обратно филма в оговорен от вас час одобен и за двете страни. При нас ще намерите най-новите филми и ще можете да им се насладите със семейството и приятелите си.',
                                    listprice: [
                                        {text:'Цена на филм Без Абонамент 9 лева въщане до 48 часа'},
                                        {text:'Абонамент за 1 месец ( 15 филма ) 30 лева връщане до 48 часа'},
                                        {text:'Абонамент за 3 месеца ( 60 филма ) 80 лева връщане до 48 часа'},
                                        {text:'Абонамент за 6 месеца ( неограничен брой филми ) 150 лева въщане до 1 седмица'},
                                        {text:'Абонамент за 1 година ( неограничен брой филми ) 300 лева връщане до 2 седмици'}
                                    ]
                                }
                            },
                            link: '#!/bg'
                        },
                        en: {
                            name: "Home",
                            content: {
                                title: 'Video library "Salmon"',
                                context: {
                                    text: 'Our Video library "Salmon" is on market since 2015. With always satisfied customers from our service and good stuff with cheap prices. All movies offered are in full HD quality. We also supply films at home and get it back at making the movie back at an agreed time you convenient for both sides. At our library you can find newest movies and have pleasure with your family and friends.',
                                    listprice: [
                                        {text:'Price without subscribe 9lv. must return movie in 48 hours.'},
                                        {text:'One month subscribe (15 movies) 30lv. return movie in 48 hours.'},
                                        {text:'Three months subscribe (60 movies) 80lv. return in 48 hours'},
                                        {text:'Six months subscribe (unlimited movies) 150lv. return in 1 week'},
                                        {text:'One year subscribe (unlimited movies) 300lv. return in 2 weeks'}
                                    ]
                                }
                            },
                            link: '#!/en'
                        }
                    },
                    haveId: false
                },
                catalog: {
                    lang: {
                        bg: {
                            name: 'Каталог',
                            content: {
                                drama: {
                                    name: "Драма",
                                    link: '#!/Catalog/Drama/bg',
                                    movies: []
                                },
                                comedy: {
                                    name: 'Комедия',
                                    link: '#!/Catalog/Comedy/bg',
                                    movies: []
                                },
                                fantasy: {
                                    name: 'Фантастика и Приключения',
                                    link: '#!/Catalog/Fantasyadventure/bg',
                                    movies: []
                                },
                                horror: {
                                    name: 'Ужаси',
                                    link: '#!/Catalog/Horror/bg',
                                    movies: []
                                }
                            },
                            link: '#!/Catalog/bg'
                        },
                        en: {
                            name: "Catalog",
                            content: {
                                drama: {
                                    name: "Drama",
                                    link: '#!/Catalog/Drama/en',
                                    movies: []
                                },
                                comedy: {
                                    name: 'Comedy',
                                    link: '#!/Catalog/Comedy/en',
                                    movies: []
                                },
                                fantasy: {
                                    name: 'Fantasy and Adventure',
                                    link: '#!/Catalog/Fantasyadventure/en',
                                    movies: []
                                },
                                horror: {
                                    name: 'Horror',
                                    link: '#!/Catalog/Horror/en',
                                    movies: []
                                }
                            },
                            link: '#!/Catalog/en'
                        }
                    },
                    haveId: true,
                    id: 'catalog'
                },
                contacts: {
                    lang: {
                        bg: {
                            name: "Контакти",
                            content: {
                                name: "Име",
                                email: "Имейл",
                                subject: "Тема",
                                message: "Съобщение",
                                button: "Изпрати",
                                address: "Адрес: град София, жк.Люлин 7, улица 703"
                            },
                            link: '#!/Contacts/bg'
                        },
                        en: {
                            name:'Contacts',
                            content: {
                                name: "Name",
                                email: "Email",
                                subject: "Subject",
                                message: "Message",
                                button: "Send",
                                address: "Address: Sofia, Lulin 7, 703'th street"
                            },
                            link: '#!/Contacts/en'
                        }
                    },
                    haveId: false
                }
            }
        }
    }

    Database.prototype.getDatabase = function () {
        return this._db;
    };
    
    Database.prototype.addMovie = function (genre, movie) {
        switch(genre.toLowerCase()) {
            case 'drama':
                this._db.menu.catalog.lang.bg.content.drama.movies.push(movie.lang.bg);
                this._db.menu.catalog.lang.en.content.drama.movies.push(movie.lang.en);
                break;
            case 'comedy':
                this._db.menu.catalog.lang.bg.content.comedy.movies.push(movie.lang.bg);
                this._db.menu.catalog.lang.en.content.comedy.movies.push(movie.lang.en);
                break;
            case 'fantasy':
                this._db.menu.catalog.lang.bg.content.fantasy.movies.push(movie.lang.bg);
                this._db.menu.catalog.lang.en.content.fantasy.movies.push(movie.lang.en);
                break;
            case 'horror':
                this._db.menu.catalog.lang.bg.content.horror.movies.push(movie.lang.bg);
                this._db.menu.catalog.lang.en.content.horror.movies.push(movie.lang.en);
                break;
        }
    };

    return {
        load: function () {
            return new Database();
        }
    }
}());