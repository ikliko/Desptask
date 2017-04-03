/**
 * Created by kliko on 29.04.15.
 */
var movieShop = movieShop || {};

movieShop.view = (function () {
    function addMenuTabs(selector, data, lang) {
        var json = {
            tabs: []
        };

        data.forEach(function (tab) {
            json.tabs.push(addMenuTab(tab, lang));
        });

        json.tabs.forEach(function (tab) {
            if(tab.haveId) {
                $(selector).append('<li><a href="' + tab.link + '">' + tab.name + '</a><ul id="' + tab.id + '"></ul></li>');
            } else {
                $(selector).append('<li><a href="' + tab.link + '">' + tab.name + '</a></li>');
            }
        });
    }

    function addDropDown(selector, data, lang) {
        var dropdownJSON = {};
        if(lang === 'bg') {
            dropdownJSON = {
                categories: [
                    {
                        link: data.lang.bg.content.drama.link,
                        name: data.lang.bg.content.drama.name
                    },
                    {
                        link: data.lang.bg.content.comedy.link,
                        name: data.lang.bg.content.comedy.name
                    },
                    {
                        link: data.lang.bg.content.fantasy.link,
                        name: data.lang.bg.content.fantasy.name
                    },
                    {
                        link: data.lang.bg.content.horror.link,
                        name: data.lang.bg.content.horror.name
                    }
                ]
            }
        } else if(lang === 'en') {
            dropdownJSON = {
                categories: [
                    {
                        link: data.lang.en.content.drama.link,
                        name: data.lang.en.content.drama.name
                    },
                    {
                        link: data.lang.en.content.comedy.link,
                        name: data.lang.en.content.comedy.name
                    },
                    {
                        link: data.lang.en.content.fantasy.link,
                        name: data.lang.en.content.fantasy.name
                    },
                    {
                        link: data.lang.en.content.horror.link,
                        name: data.lang.en.content.horror.name
                    }
                ]
            }
        }
        dropdownJSON.categories.forEach(function (category) {
            $(selector).append('<li><a href="' + category.link + '">' + category.name +'</a></li>')
        });
    }

    function addMenuTab(tab, lang) {
        var json;
        switch(lang) {
            case 'bg':
                json = {
                    link: tab.lang.bg.link,
                    name: tab.lang.bg.name,
                    haveId: tab.haveId,
                    id: tab.id
                };
                break;
            case 'en':
                json = {
                    link: tab.lang.en.link,
                    name: tab.lang.en.name,
                    haveId: tab.haveId,
                    id: tab.id
                };
                break;
        }
        return json;
    }

    function render (selector, data, lang, page) {
        $(selector).empty();
        switch(page) {
            case 'home':
                var homeJson = {};
                if(lang === 'bg') {
                    homeJson = {
                        title: data.lang.bg.content.title,
                        text: data.lang.bg.content.context.text,
                        listprice: data.lang.bg.content.context.listprice
                    }
                } else if(lang === 'en') {
                    homeJson = {
                        title: data.lang.en.content.title,
                        text: data.lang.en.content.context.text,
                        listprice: data.lang.en.content.context.listprice
                    }
                }
                $(selector).append('<h1>' + homeJson.title + '</h1>');
                $(selector).append('<div id="text">' + homeJson.text + '</div>');
                var listPriceUl = $('<ul id="listPrice"></ul>');
                homeJson.listprice.forEach(function (price) {
                    listPriceUl.append('<li>' + price.text + '</li>');
                });
                $(selector).append(listPriceUl);
                break;
            case 'catalog':
                break;
            case 'drama':
                var dramaJSON;
                if(lang === 'bg') {
                    dramaJSON = {
                        movies: data.lang.bg.content.drama.movies
                    }
                } else if(lang === 'en') {
                    dramaJSON = {
                        movies: data.lang.en.content.drama.movies
                    }
                }
                rendGenrePage(selector, dramaJSON);
                break;
            case 'comedy':
                var comedyJSON;
                if(lang === 'bg') {
                    comedyJSON = {
                        movies: data.lang.bg.content.comedy.movies
                    }
                } else if(lang === 'en') {
                    comedyJSON = {
                        movies: data.lang.en.content.comedy.movies
                    }
                }
                rendGenrePage(selector, comedyJSON);
                break;
            case 'fantasy':
                var fantasyJSON;
                if(lang === 'bg') {
                    fantasyJSON = {
                        movies: data.lang.bg.content.fantasy.movies
                    }
                } else if(lang === 'en') {
                    fantasyJSON = {
                        movies: data.lang.en.content.fantasy.movies
                    }
                }
                rendGenrePage(selector, fantasyJSON);
                break;
            case 'horror':
                var horrorJSON;
                if(lang === 'bg') {
                    horrorJSON = {
                        movies: data.lang.bg.content.horror.movies
                    }
                } else if(lang === 'en') {
                    horrorJSON = {
                        movies: data.lang.en.content.horror.movies
                    }
                }
                rendGenrePage(selector, horrorJSON);
                break;
            case 'contact':
                var contactJSON = {};
                if(lang === 'bg') {
                    contactJSON = {
                        name: data.lang.bg.content.name,
                        email: data.lang.bg.content.email,
                        subject: data.lang.bg.content.subject,
                        message: data.lang.bg.content.message,
                        button: data.lang.bg.content.button,
                        address: data.lang.bg.content.address
                    }
                } else if (lang === 'en') {
                    contactJSON = {
                        name: data.lang.en.content.name,
                        email: data.lang.en.content.email,
                        subject: data.lang.en.content.subject,
                        message: data.lang.en.content.message,
                        button: data.lang.en.content.button,
                        address: data.lang.en.content.address
                    }
                }
                $(selector).append('<div class="clear">&nbsp;</div>');
                var contactPage = $('<ul id="contactPage"></ul>');
                var leftLi = $('<li></li>');
                var rightLi = $('<li></li>');
                var form = $('<form action="post"></form>');
                form.append('<label for="name">' + contactJSON.name + '</label>');
                form.append('<input type="text" name="name" id="name" placeholder="' + contactJSON.name + '.."/>');
                form.append('<label for="email">' + contactJSON.email + '</label>');
                form.append('<input type="email" name="name" id="email" placeholder="' + contactJSON.email + '.."/>');
                form.append('<label for="subject">' + contactJSON.subject + '</label>');
                form.append('<input type="text" name="subject" id="subject" placeholder="' + contactJSON.subject + '.."/>');
                form.append('<label for="message">' + contactJSON.message + '</label>');
                form.append('<textarea name="message" id="message" placeholder="' + contactJSON.message + '.."/>');
                form.append('<button>' + contactJSON.button + '</button>')
                leftLi.append(form);
                rightLi.append('<p>' + contactJSON.address + '</p>');
                rightLi.append('<img src="img/map.png" alt="google maps location"/>');
                contactPage.append(leftLi);
                contactPage.append(rightLi);
                $(selector).append(contactPage);
                break;
        }
    }

    function rendGenrePage(selector, genreJSON) {
        $(selector).append('<div class="clear">&nbsp;</div>');
        var movieContainer = $('<div id="movieContainer"></div>');
        genreJSON.movies.forEach(function (movie) {
            movieContainer.append('<div id="movieImg"><a href="' + movie.link + '"><img src="' + movie.image + '" alt="' + movie.title + '"/></a></div>');
        });
        $(selector).append(movieContainer);
    }

    function movieRender(selector, data, lang) {
        var movieText,
            moviePageWrapper;
        if(lang === 'bg') {
            movieText = $('<div id="movieText"></div>');
            movieText.append('<p>Режисьор: ' + data.director + '</p>');
            movieText.append('<p>Актьори: ' + data.actors + '</p>');
            movieText.append('<p>Държава / Година: ' + data.country + ' ' + data.year +'</p>');
        } else if(lang === 'en') {
            movieText = $('<div id="movieText"></div>');
            movieText.append('<p>Director: ' + data.director + '</p>');
            movieText.append('<p>Actors: ' + data.actors + '</p>');
            movieText.append('<p>Country / Year: ' + data.country + ' ' + data.year +'</p>');
        }
        movieText.append('<p>' + data.review + '</p>');
        moviePageWrapper = $('<div id="moviepagewrapper"></div>');
        moviePageWrapper.append('<h1>' + data.title + '</h1>');
        moviePageWrapper.append('<div class="clear">&nbsp;</div>');
        moviePageWrapper.append('<div id="movieImg" class="absolute"><img src="' + data.image + '" alt="' + data.title + '"/></div>');
        moviePageWrapper.append(movieText);
        moviePageWrapper.append('<div class="clear">&nbsp;</div>');
        moviePageWrapper.append('<div id="trailer"><iframe width="799" height="437" src="' + data.trailer + '" frameborder="0" allowfullscreen></iframe></div>');
        moviePageWrapper.append('<div class="clear">&nbsp;</div>');
        $(selector).append(moviePageWrapper);
    }

    return {
        rendMenuTabs: function (selector, name, lang) {
            return addMenuTabs(selector, name, lang);
        },
        rendDropDown: function (selector, name, lang) {
            return addDropDown(selector, name, lang);
        },
        rendHomePage: function (selector, data, lang) {
            return render(selector, data, lang, 'home');
        },
        rendCatalogPage: function (selector, data, lang) {
            return render(selector, data, lang, 'catalog');
        },
        rendDramaPage: function (selector, data, lang) {
            return render(selector, data, lang, 'drama')
        },
        rendComedyPage: function (selector, data, lang) {
            return render(selector, data, lang, 'comedy')
        },
        rendFantasyPage: function (selector, data, lang) {
            return render(selector, data, lang, 'fantasy')
        },
        rendHorrorPage: function (selector, data, lang) {
            return render(selector, data, lang, 'horror')
        },
        rendContactPage: function (selector, data, lang) {
            return render(selector, data, lang, 'contact');
        },
        rendMovie: function (selector, data, lang) {
            return movieRender(selector, data, lang);
        }
    };
}());