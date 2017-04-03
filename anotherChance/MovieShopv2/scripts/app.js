/**
 * Created by kliko on 26.04.15.
 */
var movieShop = movieShop || {};

(function () {
    movieShop.Database = movieShop._db.load();
    var gen = movieShop.generator.load();
    var controller = movieShop.controller.load();
    var menuController = controller._menuController;
    var catalogController = controller._catalogController;

    function addMenu(lang) {
        menuController.getMenuTabs(lang);
    }

    function changeLangUrl(url, lang) {
        $('#lang').empty();
        if(lang === 'bg') {
            $('#lang').append('<div class="current"><a href="' + url + 'bg">bg </a></div>');
            $('#lang').append('<div><a href="' + url + 'en">en</a></div>');
        } else if (lang === 'en') {
            $('#lang').append('<div><a href="' + url + 'bg">bg </a></div>');
            $('#lang').append('<div class="current"><a class="current" href="' + url + 'en">en</a></div>');
        }
    }

    movieShop.router = Sammy(function () {
        var selector = '#content';

        this.get('#!/bg', function () {
            $(selector).empty();
            menuController.getHomePage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/', 'bg');
        });

        this.get('#!/en', function () {
            $(selector).empty();
            menuController.getHomePage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/', 'en');
        });

        this.get('#!/Catalog/bg', function () {
            $(selector).empty();
            menuController.getCatalogPage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/Catalog/', 'bg');
        });

        this.get('#!/Catalog/en', function () {
            $(selector).empty();
            menuController.getCatalogPage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/Catalog/', 'en');
        });

        this.get('#!/Catalog/Drama/bg', function () {
            $(selector).empty();
            catalogController.getDramaPage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Drama/', 'bg');
        });

        this.get('#!/Catalog/Drama/en', function () {
            $(selector).empty();
            catalogController.getDramaPage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/Catalog/Drama/', 'en');
        });

        this.get('#!/Catalog/Drama/Fury/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'fury');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Drama/Fury/', 'bg');
        });

        this.get('#!/Catalog/Drama/Fury/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'fury');
            addMenu('en');
            changeLangUrl('#!/Catalog/Drama/Fury/', 'en');
        });

        this.get('#!/Catalog/Drama/Fifty-shades-of-gray/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'fiftyshadesofgray');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Drama/Fifty-shades-of-gray/', 'bg');
        });

        this.get('#!/Catalog/Drama/Fifty-shades-of-gray/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'fiftyshadesofgray');
            addMenu('en');
            changeLangUrl('#!/Catalog/Drama/Fifty-shades-of-gray/', 'en');
        });

        this.get('#!/Catalog/Drama/Ex-Machina/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'exmachina');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Drama/Ex-Machina/', 'bg');
        });

        this.get('#!/Catalog/Drama/Ex-Machina/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'exmachina');
            addMenu('en');
            changeLangUrl('#!/Catalog/Drama/Ex-Machina/', 'en');
        });

        this.get('#!/Catalog/Comedy/bg', function () {
            $(selector).empty();
            catalogController.getComedyPage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Comedy/', 'bg');
        });

        this.get('#!/Catalog/Comedy/en', function () {
            $(selector).empty();
            catalogController.getComedyPage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/Catalog/Comedy/', 'en');
        });

        this.get('#!/Catalog/Comedy/Home/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'home');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Comedy/Home/', 'bg');
        });

        this.get('#!/Catalog/Comedy/Home/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'home');
            addMenu('en');
            changeLangUrl('#!/Catalog/Comedy/Home/', 'en');
        });

        this.get('#!/Catalog/Comedy/Kingsman/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'kingsman');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Comedy/Kingsman/', 'bg');
        });

        this.get('#!/Catalog/Comedy/Kingsman/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'kingsman');
            addMenu('en');
            changeLangUrl('#!/Catalog/Comedy/Kingsman/', 'en');
        });

        this.get('#!/Catalog/Comedy/Get-Hard/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'gethard');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Comedy/Get-Hard/', 'bg');
        });

        this.get('#!/Catalog/Comedy/Get-Hard/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'gethard');
            addMenu('en');
            changeLangUrl('#!/Catalog/Comedy/Get-Hard/', 'en');
        });

        this.get('#!/Catalog/Fantasyadventure/bg', function () {
            $(selector).empty();
            catalogController.getFantasyAdventurePage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Fantasyadventure/', 'bg');
        });

        this.get('#!/Catalog/Fantasyadventure/en', function () {
            $(selector).empty();
            catalogController.getFantasyAdventurePage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/Catalog/Fantasyadventure/', 'en');
        });

        this.get('#!/Catalog/Fantasyadventure/The-Hunger-Games-Catching-Fire/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'hungergames');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Fantasyadventure/The-Hunger-Games-Catching-Fire/', 'bg');
        });

        this.get('#!/Catalog/Fantasyadventure/The-Hunger-Games-Catching-Fire/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'hungergames');
            addMenu('en');
            changeLangUrl('#!/Catalog/Fantasyadventure/The-Hunger-Games-Catching-Fire/', 'en');
        });

        this.get('#!/Catalog/Fantasyadventure/The-Avengers-Age-of-Ultron/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'avengers');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Fantasyadventure/The-Avengers-Age-of-Ultron/', 'bg');
        });

        this.get('#!/Catalog/Fantasyadventure/The-Avengers-Age-of-Ultron/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'avengers');
            addMenu('en');
            changeLangUrl('#!/Catalog/Fantasyadventure/The-Avengers-Age-of-Ultron/', 'en');
        });

        this.get('#!/Catalog/Fantasyadventure/The-Hobbit-The-Battle-of-the-Five-Armies/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'hobbit');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Fantasyadventure/The-Hobbit-The-Battle-of-the-Five-Armies/', 'bg');
        });

        this.get('#!/Catalog/Fantasyadventure/The-Hobbit-The-Battle-of-the-Five-Armies/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'hobbit');
            addMenu('en');
            changeLangUrl('#!/Catalog/Fantasyadventure/The-Hobbit-The-Battle-of-the-Five-Armies/', 'en');
        });

        this.get('#!/Catalog/Horror/bg', function () {
            $(selector).empty();
            catalogController.getHorrorPage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Horror/', 'bg');
        });

        this.get('#!/Catalog/Horror/Poltergeist/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'poltergeist');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Horror/Poltergeist/', 'bg');
        });

        this.get('#!/Catalog/Horror/As-Above-So-Below/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'asabove');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Horror/As-Above-So-Below/', 'bg');
        });

        this.get('#!/Catalog/Horror/Annabelle/bg', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'bg', 'annabelle');
            addMenu('bg');
            changeLangUrl('#!/Catalog/Horror/Annabelle/', 'bg');
        });

        this.get('#!/Catalog/Horror/en', function () {
            $(selector).empty();
            catalogController.getHorrorPage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/Catalog/Horror/', 'en');
        });

        this.get('#!/Catalog/Horror/Poltergeist/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'poltergeist');
            addMenu('en');
            changeLangUrl('#!/Catalog/Horror/Poltergeist/', 'en');
        });

        this.get('#!/Catalog/Horror/As-Above-So-Below/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'asabove');
            addMenu('en');
            changeLangUrl('#!/Catalog/Horror/As-Above-So-Below/', 'en');
        });

        this.get('#!/Catalog/Horror/Annabelle/en', function () {
            $(selector).empty();
            catalogController.getMoviePage(selector, 'en', 'annabelle');
            addMenu('en');
            changeLangUrl('#!/Catalog/Horror/Annabelle/', 'en');
        });

        this.get('#!/Contacts/bg', function () {
            $(selector).empty();
            menuController.getContactPage(selector, 'bg');
            addMenu('bg');
            changeLangUrl('#!/Contacts/', 'bg');
        });

        this.get('#!/Contacts/en', function () {
            $(selector).empty();
            menuController.getContactPage(selector, 'en');
            addMenu('en');
            changeLangUrl('#!/Contacts/', 'en');
        });
    });
    movieShop.router.run('#!/bg');
}());