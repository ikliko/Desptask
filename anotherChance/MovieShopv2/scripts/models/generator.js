/**
 * Created by kliko on 29.04.15.
 */
var movieShop = movieShop || {};

movieShop.generator = (function () {
    function generateMovies () {
        var fury = {
            lang: {
                bg: {
                    title: 'Ярост',
                    director: 'Дейвид Айър',
                    actors: 'Брад Пит, Шиа ЛаБюф, Логан Лърман',
                    country: 'USA',
                    year: 2014,
                    review: 'Април 1945 г. Докато съюзниците се готвят за последния натиск по нацистка Германия, американският армейски командир Уордади (Брад Пит) и петчленният екипаж на танка „Fury” се отправят на смъртоносна мисия в тила на врага. Малобройни, недобре въоръжени, и с новобранец във взвода, Уордади и хората му са изправени пред непреодолима съпротива в героичните си опити да ударят в сърцето на нацистка Германия.',
                    trailer: 'https://www.youtube.com/embed/-OGvZoIrXpg',
                    image: 'img/movies/fury.jpg',
                    link: '#!/Catalog/Drama/Fury/bg'
                },
                en: {
                    title: 'Fury',
                    director: 'David Ayer',
                    actors: 'Brad Pitt, Shia LaBeouf, Logan Lerman',
                    country: 'USA',
                    year: 2014,
                    review: 'April 1945 While the Allies were preparing for the final push in Nazi Germany , the US Army commander Uordadi ( Brad Pitt ) and the five-member crew of the tank "Fury" embark on a deadly mission behind enemy lines . Few in number , poorly armed and with rookie in the squad , Uordadi and his people are facing insurmountable resistance in heroic attempts to strike at the heart of Nazi Germany.',
                    trailer: 'https://www.youtube.com/embed/-OGvZoIrXpg',
                    image: 'img/movies/fury.jpg',
                    link: '#!/Catalog/Drama/Fury/en'
                }
            }
        };

        var fiftyShadesOfGray = {
            lang: {
                bg: {
                    title: 'Петдесет нюанса сиво',
                    director: 'Сам Тейлър-Джонсън',
                    actors: 'Дакота Джонсън, Джейми Дорнан, Аарън Тейлър-Джонсън',
                    country: 'САЩ',
                    year: 2015,
                    review: 'Петдесет нюанса сиво е очакваната с огромно нетърпение филмова адаптация на бестселъра, превърнал се в глобален феномен. От публикуването на трилогията „Петдесет нюанса“ е преведена на 51 езика и са продадени повече от 100 милиона екземпляра в електронен и хартиен вариант, което я прави най-печелившата и бързо продаваща се поредица за всички времена.',
                    trailer: 'https://www.youtube.com/embed/SfZWFDs0LxA',
                    image: 'img/movies/fifty-shades-of-grey.jpg',
                    link: '#!/Catalog/Drama/Fifty-shades-of-gray/bg'
                },
                en: {
                    title: 'Fifty shades of gray',
                    director: 'Sam Taylor-Johnson',
                    actors: 'Dakota Johnson, Jamie Dornan, Aaron Taylor-Johnson',
                    country: 'USA',
                    year: 2015,
                    review: 'Fifty Shades of Grey is hardly wait for the film adaptation of the bestselling novel turned into a global phenomenon. Since the publication of the trilogy " Fifty shades " has been translated into 51 languages ​​and have sold more than 100 million copies in paper and electronic version , making it the most profitable and fast -selling series of all time.',
                    trailer: 'https://www.youtube.com/embed/SfZWFDs0LxA',
                    image: 'img/movies/fifty-shades-of-grey.jpg',
                    link: '#!/Catalog/Drama/Fifty-shades-of-gray/en'
                }
            }
        };

        var exMachina = {
            lang: {
                bg: {
                    title: 'Бог от машината',
                    director: 'Алекс Гарленд',
                    actors: 'Алисия Викандер, Домнал Глесън, Оскар Айзък',
                    country: 'САЩ',
                    year: 2015,
                    review: 'EX MACHINA: БОГ ОТ МАШИНАТА е напрегнат психологически трилър, в който Калеб (Домнал Глийсън), 24-годишен програмист в най-голямата интернет компания в света, печели конкурс, за да прекара седмица в отдалечена база, собственост на усамотения изпълнителен директор Нейтан (Оскар Айзък). При пристигането си Калеб разбира, че ще участва в увлекателен експеримент с реален изкуствен интелект в света, поместен в тялото на красива жена робот – Ейва (Алисия Викандер). Задачата му е да проведе теста на Тюринг – Ейва ще го премине, ако успее да накара Калеб да повярва, че тя е човек. Със задълбочаването на отношенията между Калеб, Ейва и Нейтан истини, емоции и мотиви започват да се размиват.',
                    trailer: 'https://www.youtube.com/embed/EoQuVnKhxaM',
                    image: 'img/movies/ex-machina.jpg',
                    link: '#!/Catalog/Drama/Ex-Machina/bg'
                },
                en: {
                    title: 'ex Machina',
                    director: 'Alex Garland',
                    actors: 'Alicia Vikander, Domhnall Gleeson, Oscar Isaac',
                    country: 'USA',
                    year: 2015,
                    review: 'EX MACHINA: GOD OF MACHINE tense psychological thriller that Caleb (Domna Gleeson), 24-year-old programmer\'s largest Internet company in the world, won a competition to spend the week in remote database owned secluded CEO Nathan ( Oscar Isaac). Upon arrival Caleb realizes that will participate in an enthralling experiment with real artificial intelligence in the world, housed in the body of a beautiful woman robot - Eyva (Alicia Vikander). Its task is to hold the Turing test - Eyva will pass it if they can get Caleb to believe that it is human. With the deepening of relations between Caleb, Nathan and Eyva truths, emotions and motives begin to blur.',
                    trailer: 'https://www.youtube.com/embed/EoQuVnKhxaM',
                    image: 'img/movies/ex-machina.jpg',
                    link: '#!/Catalog/Drama/Ex-Machina/en'
                }
            }
        };

        var home = {
            lang: {
                bg: {
                    title: 'У дома',
                    director: 'Тим Джонсън',
                    actors: 'Джим Парсонс, Риана, Дженифър Лопез',
                    country: 'САЩ',
                    year: 2015,
                    review: 'Анимационният филм „У дома“ (Home) представя историята за завладяването на земята от Буув, извънземна раса, която търси ново място във Вселената, където да живеят. Те се заемат с реорганизиране живота на планетата, като хората ще бъдат незабавно преместени. Едно момиче успява да избегне залавянето и съвсем случайно се сблъсква с представител на извънземните, който също е преследван от своите, след като без да иска е издал новото местонахождение на собствената си раса пред техните врагове. Двамата разбират, че са изложени на риск и предприемат пътуването на живота си.',
                    trailer: 'https://www.youtube.com/embed/MyqZf8LiWvM',
                    image: 'img/movies/home.jpg',
                    link: '#!/Catalog/Comedy/Home/bg'
                },
                en: {
                    title: 'Home',
                    director: 'Tim Johnson',
                    actors: 'Jim Parsons, Rihanna, Jennifer Lopez',
                    country: 'USA',
                    year: 2015,
                    review: 'Animated movie "Home" (Home) presents the history of the conquest of land by Buuv, an alien race that seeks a new place in the universe where they live. They tackle reorganize life on the planet, people will be moved immediately. One girl managed to escape capture and accidentally collides with a representative of the aliens who is also haunted by its after inadvertently issued new location of their own race in front of their enemies. They understand that they are at risk and take the trip of a lifetime.',
                    trailer: 'https://www.youtube.com/embed/MyqZf8LiWvM',
                    image: 'img/movies/home.jpg',
                    link: '#!/Catalog/Comedy/Home/en'
                }
            }
        };

        var kingsman = {
            lang: {
                bg: {
                    title: 'Кингсмън: Тайните служби',
                    director: 'Матю Ваугън',
                    actors: 'Марк Хамил, Самюъл Л. Джаксън, Колин Фърт',
                    country: 'САЩ',
                    year: 2014,
                    review: 'Създаден по популряния комикс, филмът разказва историята на Kingsman – тайна шпионска организация, която вербува обещаващ, но проблемен младеж, който трябва да премине през изключително тежката им програма, точно когато глобална заплаха е надвиснала над света.',
                    trailer: 'https://www.youtube.com/embed/kl8F-8tR8to',
                    image: 'img/movies/kingsman.jpg',
                    link: '#!/Catalog/Comedy/Kingsman/bg'
                },
                en: {
                    title: 'Kingsman: The Secret Service',
                    director: 'Matthew Vaughn',
                    actors: 'Mark Hamill, Samuel L. Jackson, Colin Firth',
                    country: 'USA',
                    year: 2014,
                    review: 'Created by populryaniya comic , the film tells the story of Kingsman - secret spy organization recruit promising, but troubled young man who has to go through an extremely difficult program them , just when a global threat hangs over the world.',
                    trailer: 'https://www.youtube.com/embed/kl8F-8tR8to',
                    image: 'img/movies/kingsman.jpg',
                    link: '#!/Catalog/Comedy/Kingsman/en'
                }
            }
        };

        var getHard = {
            lang: {
                bg: {
                    title: 'Пандиз експерт',
                    director: 'Итън Коен',
                    actors: 'Уил Ферел, Кевин Харт, Алисън Брий',
                    country: 'САЩ',
                    year: 2015,
                    review: 'Когато милионерът Джеймс Кинг (Уил Феръл) е обвинен в измама и осъден на 10 години затвор в Сан Куентин, съдията му дава 30 дни за да се подготви. Отчаян, той наема Дарнел Луиз (Кевин Харт), който да го обучи за затворническия живот. И въпреки предразсъдъците и погрешните впечатления на Джеймс, Дарнел е съвестен бизнесмен, който никога не е бил глобяван, а камо ли да е бил в затвора. Заедно двамата правят всичко възможно за да превърнат Джеймс в „пандиз-експерт“ и в процеса разбират колко за грешали за безброй неща, включително и в мнението си един за друг.',
                    trailer: 'https://www.youtube.com/embed/lEqrpuU9fYI',
                    image: 'img/movies/get-hard.jpg',
                    link: '#!/Catalog/Comedy/Get-Hard/bg'
                },
                en: {
                    title: 'Get hard',
                    director: 'Etan Cohen',
                    actors: 'Will Ferrell, Kevin Hart, Alison Brie',
                    country: 'USA',
                    year: 2015,
                    review: 'When millionaire James King (Will Ferrell) is accused of fraud and sentenced to 10 years in prison in San Quentin, the judge gave him 30 days to prepare. In desperation, he hires Louise Darnell (Kevin Hart) to train him to prison life. Yet prejudices and misperceptions James Darnell is conscientious businessman who had never been fined, let alone been in prison. Together they are doing everything possible to become James\' pokey expert "and in the process understand how bad for countless things, including their views of each other.',
                    trailer: 'https://www.youtube.com/embed/lEqrpuU9fYI',
                    image: 'img/movies/get-hard.jpg',
                    link: '#!/Catalog/Comedy/Get-Hard/en'
                }
            }
        };

        var hunger = {
            lang: {
                bg: {
                    title: 'Игрите на глада: Възпламеняване',
                    director: 'Франсис Лоурънс',
                    actors: 'Дженифър Лаурънс, Джош Хътчърсон, Лиам Хемсуърт',
                    country: 'САЩ',
                    year: 2013,
                    review: 'В "Игрите на глада:Възпламеняване" Катнис Евърдийн и Пийта Меларк се завръщат у дома след като побеждават в 74-те Игри на глада. Победата означава да напуснат семействата и най-близките си приятели, за да поемат на „Турнето на победителя” през всички окръзи в Панем.',
                    trailer: 'https://www.youtube.com/embed/EAzGXqJSDJ8',
                    image: 'img/movies/hunger-games.jpg',
                    link: '#!/Catalog/Fantasyadventure/The-Hunger-Games-Catching-Fire/bg'
                },
                en: {
                    title: 'The hunger games: Catching fire',
                    director: 'Francis Lawrence',
                    actors: 'Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth',
                    country: 'USA',
                    year: 2013,
                    review: 'In " The Hunger Games: Catching Fire " Katnis Evardiyn and Pete Melark returning home after beating 74 - Games of the famine. The victory means to leave their families and most - close friends to take a " tour winner " in all counties in Panemus .',
                    trailer: 'https://www.youtube.com/embed/EAzGXqJSDJ8',
                    image: 'img/movies/hunger-games.jpg',
                    link: '#!/Catalog/Fantasyadventure/The-Hunger-Games-Catching-Fire/en'
                }
            }
        };

        var avenger = {
            lang: {
                bg: {
                    title: 'ОТМЪСТИТЕЛИТЕ: ЕРАТА НА УЛТРОН',
                    director: 'Джош Уедън',
                    actors: 'Робърт Доуний Джр., Крис Еванс, Марк Руфало',
                    country: 'САЩ',
                    year: 2015,
                    review:'Марвел представя ОТМЪСТИТЕЛИТЕ: ЕРАТА НА УЛТРОН, епично продължение на най-мащабния филм за супергерои на всички времена. Когато Тони Старк се опитва да стартира пасивна мироопазваща програма, настава бъркотия и най-могъщите супергерои на Земята, включващи Железния човек, Капитан Америка, Тор, Хълк, Черната вдовица и Ястребово око са поставени на върховно изпитание, тъй като съдбата на планетата виси на косъм. Когато се появява злодеят Ултрон, от Отмъстителите зависи да го спрат, за да не осъществи ужасния си план. Скоро неохотни съюзи и неочакван екшън подготвят пътя за епично и уникално глобално приключение.',
                    trailer: 'https://www.youtube.com/embed/tmeOjFno6Do',
                    image: 'img/movies/avengers.jpg',
                    link: '#!/Catalog/Fantasyadventure/The-Avengers-Age-of-Ultron/bg'
                },
                en: {
                    title: 'Avengers: Age of Ultron',
                    director: 'Joss Whedon',
                    actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
                    country: 'USA',
                    year: 2015,
                    review: 'Marvel Avengers presents: ERA ULTRON, epic for the biggest superhero movie of all time. When Tony Stark is trying to start a passive peacekeeping program in, it\'s a mess and most powerful superheroes on Earth, including Iron Man, Captain America, Thor, Hulk, Black Widow and Hawkeye are put to the ultimate test as the fate of the planet hangs hair. When appears the villain Ultron from Avengers to stop him depends to no place terrible plan. Rather reluctant alliances and unexpected action pave the way for an epic and unique global adventure.',
                    trailer: 'https://www.youtube.com/embed/tmeOjFno6Do',
                    image: 'img/movies/avengers.jpg',
                    link: '#!/Catalog/Fantasyadventure/The-Avengers-Age-of-Ultron/en'
                }
            }
        };

        var hobbit = {
            lang: {
                bg: {
                    title: 'Хобитът: Битката на петте армии',
                    director: 'Питър Джаксън',
                    actors: 'Иън Маккелън , Мартин Фрийман , Ричард Армитидж , Evangeline Lilly , Лий Пейс , Luke Evans , Бенедикт Къмбърбач , Кен Стот , Джеймс Несбит , с Кейт Бланшет , Иън Холм , Кристофър Лий , Хюго Уийвинг , и Орландо Блум',
                    country: 'САЩ',
                    year: 2014,
                    review: '„Хобит: Битката на петте армии“ довежда до епичен завършек неочакваното пътешествие, на което се отправя Билбо Бегинс, заедно с Торин Дъбощит и Дружината на джуджетата. След като отвоюва родната си земя от дракона Смог, Дружината неволно е отприщила смъртоносна сила. Разгневен, Смог изсипва бушуващата си ярост над беззащитните мъже, жени и деца от Езерния град.Обсебен преди всичко от мисълта за съкровището, скрито в недрата на Самотната планина, Торин жертва приятелство и чест, за да си го върне, докато Билбо Бегинс прави неистови опити да го вразуми. Това тласка хобита към отчаяно и рисковано решение. Но напред предстоят още по-големи опасности. Незабелязан от никого, освен от вълшебника Гандалф, могъщият враг Саурон е пратил легиони от орки в изненадваща атака срещу Самотната планина.Когато мрак пада над ескалиращия конфликт, расите на Джуджетата, Елфите и Хората трябва да решат – да се обединят или да бъдат унищожени. Билбо се оказва принуден да се бори за живота си и за този на своите приятели в епичната Битка на петте армии, а бъдещето на Средната земя виси на косъм.',
                    trailer: 'https://www.youtube.com/embed/ZSzeFFsKEt4',
                    image: 'img/movies/hobbit.jpg',
                    link: '#!/Catalog/Fantasyadventure/The-Hobbit-The-Battle-of-the-Five-Armies/bg'
                },
                en: {
                    title: 'The Hobbit: The Battle of the Five Armies',
                    director: 'Peter Jackson',
                    actors: 'Ian McKellen,Martin Freeman, Richard Armitage,Evangeline Lilly, Lee Pace, Luke Evans, Benedict Cumberbatch, Ken Stott, James Nesbitt, with Cate Blanchett, Ian Holm, Christopher Lee, Hugo Weaving, and Orlando Bloom',
                    country: 'USA',
                    year: 2014,
                    review: '"The Hobbit: The Battle of the Five Armies" led to the unexpected conclusion epic journey, which heads Bilbo Baggins, along with Thorin Oakenshield and company of dwarves. Once taken back their homeland from the dragon Smaug, a company unwittingly unleashed deadly force. Exasperated, Smog poured raging fury over defenseless men, women and children from Lake grad.Obseben primarily by the thought of the treasure hidden in the bowels of the Lonely Mountain, Torin sacrifice friendship and honor to get it back until Bilbo Baggins made frantic attempts to reason with him. This pushes hobbies to desperate and risky decision. But up ahead even greater dangers. Unnoticed by anyone except by the wizard Gandalf the mighty enemy Sauron sent legions of orcs in a surprise attack on Lonely planina.Kogato darkness falls over the escalating conflict races of dwarves, elves, and people have to decide - to join or be destroyed. Bilbo had no choice but to fight for his life and that of his friends in an epic battle of the five armies, and the future of Middle-earth hangs in the balance.',
                    trailer: 'https://www.youtube.com/embed/ZSzeFFsKEt4',
                    image: 'img/movies/hobbit.jpg',
                    link: '#!/Catalog/Fantasyadventure/The-Hobbit-The-Battle-of-the-Five-Armies/en'
                }
            }
        };

        var poltergeist = {
            lang: {
                bg: {
                    title: 'Полтъргайст',
                    director: 'Джил Кенан',
                    actors: 'Сам Рокуел , Розмари Деуит , Джаред Харис',
                    country: 'САЩ',
                    year: 2015,
                    review: 'Историята на филма следва семейство, което се нанася в новата си къща в тихо предградие. Животът им обаче внезапно е обезпокоен, когато разбират, че не са сами в новия си дом. Свръхестествени сили също живеят в къщата и скоро най-малкият член - малката Мадисън, става тяхна жертва. За да спасят отвлеченото, малко момиче, преди то да е изчезнало завинаги, семейството трябва да обедини сили и да се пребори с неканените гости. Това е класическата и позната на всички история за семейство, което е тормозено от духове и изправено пред най-големия си кошмар. Новият филм на 3D обаче ще накара зрителите в киносалоните да се впуснат в приключение и да изпитат чувството, че са на увеселителен парк. Филмът обещава на кинолюбителите страхотни ефекти, запомнящи се моменти и нова модерна развръзка на историята.',
                    trailer: 'https://www.youtube.com/embed/pyuZQtUrVm4',
                    image: 'img/movies/poltergeist.jpg',
                    link: '#!/Catalog/Horror/Poltergeist/bg'
                },
                en: {
                    title: 'Poltergeist',
                    director: 'Gil Kenan',
                    actors: 'Sam Rockwell, Rosemarie DeWitt, Jared Harris',
                    country: 'USA',
                    year: 2015,
                    review: 'The story of the film follows a family who moves into his new house in a quiet suburb. Yet their lives is suddenly disturbed when they find out they are not alone in their new home. Supernatural forces also live in the house and soon the youngest member - little Madison becomes their victim. In order to save the kidnapped little girl before it is gone forever, the family must join forces to fight the intruders. This is the classic and known to all history for a family that was persecuted by spirits and faces his biggest nightmare. The new 3D film, however, will cause viewers to theaters to embark on an adventure and experience the feeling of being on an amusement park. The film promises movie fans cool effects, memorable moments and new modern denouement of the story.',
                    trailer: 'https://www.youtube.com/embed/pyuZQtUrVm4',
                    image: 'img/movies/poltergeist.jpg',
                    link: '#!/Catalog/Horror/Poltergeist/en'
                }
            }
        };

        var asAbove = {
            lang: {
                bg: {
                    title: 'Както горе, така и долу',
                    director: 'Джон Ерик Доудъл',
                    actors: 'Бен Фелдман, Едуин Ходж, Пердита Седмици',
                    country: 'САЩ',
                    year: 2014,
                    review: 'Многото километри завъртяни катакомби, скрити под улиците на Париж, са се превърнали във вечен дом на безброй души. Когато група изследователи се осмеляват да разучат подземния лабиринт от кости, те разкриват тайната на това какво всъщност е трябвало да има в този град на мъртвите. Едно приключение в света на лудостта и ужаса, „Както горе, така и долу“ се промъква дълбоко в човешката психика, за да разкрие най-личните и дълбокопазени демони, които преследват всеки от нас. По сценарий на Джон Ерик Доудъл и Дрю Доудъл и режисиран от Джон Ерик Доудъл, психо трилърът е продуциран от Томас Тул, Джон Яшни, Дрю Доудъл и Патрик Айело. Алекс Хедлунд е изпълнителен продуцент.',
                    trailer: 'https://www.youtube.com/embed/83PpryYHHeY',
                    image: 'img/movies/as-above.jpg',
                    link: '#!/Catalog/Horror/As-Above-So-Below/bg'
                },
                en: {
                    title: 'As Above, So Below',
                    director: 'John Erick Dowdle',
                    actors: 'Ben Feldman, Edwin Hodge, Perdita Weeks',
                    country: 'USA',
                    year: 2014,
                    review: 'Many kilometers cycled catacombs hidden beneath the streets of Paris, have become eternal home of countless people. When a group of researchers dare to explore the underground maze of bones, they reveal the secret of what is supposed to have in this city of the dead. An adventure into the world of madness and horror, "As above, so below" creeps deeper into the human psyche to reveal the most personal and dalbokopazeni demons that pursue each of us. Screenplay by John Erick and Drew Doudal Doudal and directed by John Erick Doudal psycho thriller was produced by Thomas Tull, Jon Yashni Drew Doudal and Patrick Aiello. Alex Hedlund is Executive Producer.',
                    trailer: 'https://www.youtube.com/embed/83PpryYHHeY',
                    image: 'img/movies/as-above.jpg',
                    link: '#!/Catalog/Horror/As-Above-So-Below/en'
                }
            }
        };

        var annabelle = {
            lang: {
                bg: {
                    title: 'Анабел',
                    director: 'Гари Даубърман',
                    actors: 'Анабеле Валис, Алфре Воодард, Виц Ладин',
                    country: 'САЩ',
                    year: 2014,
                    review: 'Джон е намерил перфектния подарък за бременната си съпруга Мия - красива, колекционерска кукла в чисто бяла сватбена рокля. Но радостта на Мия от подаръка не трае дълго. През една ужасяваща нощ , домът на семейството е нападнат от членове на сатанински култ. Но пролятата кръв и ужасът не е единственото, което носят със себе си. Окултистите призовават зло същество, което се вселява в куклата Анабел.',
                    trailer: 'https://www.youtube.com/embed/paFgQNPGlsg',
                    image: 'img/movies/annabelle.jpg',
                    link: '#!/Catalog/Horror/Annabelle/bg'
                },
                en: {
                    title: 'Annabelle',
                    director: 'Gary Dauberman',
                    actors: 'Annabelle Wallis, Alfre Woodard, Eric Ladin',
                    country: 'USA',
                    year: 2014,
                    review:'John has found the perfect gift for his pregnant wife Mia - beautiful doll collectibles in pure white wedding dress. But the joy of the gift of Mia does not last long. In a horrific night, the family\'s home was attacked by members of a satanic cult. But bloodshed and terror is not the only thing carry. Occultists call evil creature that dwells in the doll Annabelle.',
                    trailer: 'https://www.youtube.com/embed/paFgQNPGlsg',
                    image: 'img/movies/annabelle.jpg',
                    link: '#!/Catalog/Horror/Annabelle/en'
                }
            }
        };

        movieShop.Database.addMovie('drama', fury);
        movieShop.Database.addMovie('drama', fiftyShadesOfGray);
        movieShop.Database.addMovie('drama', exMachina);

        movieShop.Database.addMovie('comedy', home);
        movieShop.Database.addMovie('comedy', kingsman);
        movieShop.Database.addMovie('comedy', getHard);

        movieShop.Database.addMovie('fantasy', hunger);
        movieShop.Database.addMovie('fantasy', avenger);
        movieShop.Database.addMovie('fantasy', hobbit);

        movieShop.Database.addMovie('horror', poltergeist);
        movieShop.Database.addMovie('horror', asAbove);
        movieShop.Database.addMovie('horror', annabelle);
    }

    return {
        load: function () {
            return generateMovies();
        }
    }
}());