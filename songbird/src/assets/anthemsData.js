const birdsData = [
  [       
    {
      id: 1,
      name: 'Беларусь',
      species: 'Минск',
      description: 'Государство в Восточной Европе. Население на 1 января 2019 года составляет 9 475 174 человека, территория — 207 595 км². Занимает 93-е место по количеству населения и 84-е по территории в мире.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/800px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248268694_e02ade.mp3'
    },
    {
      id: 2,
      name: 'Россия',
      species: 'Москва',
      description: 'Государство в Восточной Европе и Северной Азии. Территория России в её конституционных границах составляет 17 125 191 км²; население страны составляет 146 748 590 чел. Занимает первое место в мире по территории и девятое — по численности населения.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616639_cdf7ce.mp3'
    },
    {
      id: 3,
      name: 'Казахстан',
      species: 'Нур-Султан',
      description: 'Государство в центре Евразии. Площадь территории — 2 724 902 км². Население, по оценке государственного комитета по статистике на 1 апреля 2020 года, составляет 18 690 200 человек. Плотность населения является одной из самых низких: менее 6 человек на км².',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1920px-Flag_of_Kazakhstan.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248379222_61102f.mp3'
    },
    {
      id: 4,
      name: 'Украина',
      species: 'Киев',
      description: 'Украина – это большая страна в Восточной Европе, известная православными церквями, черноморскими курортами и лесистыми горами. В Киеве, столице страны, расположен Софийский собор, украшенный золотыми куполами, мозаикой XI века и фресками',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png',
      audio: 'http://www.200stran.ru/media/country/1245512341_c7de7c.mp3'
    },
    {
      id: 5,
      name: 'Узбекистан',
      species: 'Ташкент',
      description: 'Узбекистан – страна в Центральной Азии, которая некогда входила в состав СССР. Она славится своими мечетями, мавзолеями и сооружениями, возведенными на Великом шелковом пути – древней торговой дороге между Китаем и Средиземноморьем',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1920px-Flag_of_Uzbekistan.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248622840_086d56.mp3'
    },
    {
      id: 6,
      name: 'Кыргызстан',
      species: 'Бишкек',
      description: 'Государство в Центральной Азии, расположенное в западной и центральной части горной системы Тянь-Шань и на Памиро-Алае. На севере граничит с Казахстаном, на западе — с Узбекистаном, на юго-западе — с Таджикистаном, на востоке и юго-востоке — с Китаем.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1920px-Flag_of_Kyrgyzstan.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248463092_04c3b7.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Германия',
      species: 'Берлин',
      description: 'Государство в Центральной Европе. Площадь территории — 357 408,74 км². Численность населения на 31 декабря 2018 года — 83 019 200 жителей. Занимает 18-е место в мире по численности населения (2-е в Европе) и 62-е в мире по территории (8-е в Европе).',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png',
      audio: 'http://www.200stran.ru/media/country/1240924866_107f0d.mp3'
    },
    {
      id: 2,
      name: 'Франция',
      species: 'Париж',
      description: 'Трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, равенство, братство», её принцип — правление народа, народом и для народа.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248635575_7adc6e.mp3'
    },
    {
      id: 3,
      name: 'Италия',
      species: 'Рим',
      description: 'Государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны. Граничит с Францией на северо-западе, Швейцарией и Австрией — на севере, Словенией — на северо-востоке. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248378772_8ea1f8.mp3'
    },
    {
      id: 4,
      name: 'Испания',
      species: 'Мадрид',
      description: 'Суверенное государство на юго-западе Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км².',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248378733_cb9a86.mp3'
    },
    {
      id: 5,
      name: 'Польша',
      species: 'Варшава',
      description: 'Государство в Центральной Европе. Население по итогам 2015 года составляет 38 623 221 человек, территория — 312 679 км². Занимает 37-е место в мире по численности населения и 69-е по территории.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1920px-Flag_of_Poland.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616450_381b0a.mp3'
    },
    {
      id: 6,
      name: 'Великобритания',
      species: 'Лондон',
      description: 'Одно из крупнейших государств Европы, ядерная держава с 1952 года (признанная в соответствии с Договором о нераспространении ядерного оружия 1968 года), постоянный член Совета Безопасности ООН, бывшая метрополия Британской империи.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243455151_19ec9b.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Китай',
      species: 'Пекин',
      description: 'Государство в Восточной Азии. Занимает третье место в мире по территории (9 598 962 км2), уступая России и Канаде, а по численности населения — свыше 1,395 млрд жителей — первое. Большинство населения — этнические китайцы, самоназвание — хань. ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      audio: 'http://www.200stran.ru/media/country/1248379769_ebc25c.mp3'
    },
    {
      id: 2,
      name: 'Япония',
      species: 'Токио',
      description: 'Япония – островное государство в Тихом океане, которое славится своими густонаселенными городами, императорскими дворцами, национальными парками, храмами и святилищами.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248636434_b62444.mp3'
    },
    {
      id: 3,
      name: 'Южная Корея',
      species: 'Сеул',
      description: 'Государство в Восточной Азии. Площадь страны составляет 100 210 км², население, по оценке 2017 года — более 51 миллиона человек. Занимает сто седьмое место в мире по территории и двадцать седьмое по населению. Столица и крупнейший город — Сеул',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248636552_a6af2a.mp3'
    },
    {
      id: 4,
      name: 'Северная Корея',
      species: 'Пхеньян',
      description: 'Расположено в северной части Корейского полуострова. Имеет сухопутную границу с Республикой Корея на юге, Китайской Народной Республикой на севере, Российской Федерацией на северо-востоке. С запада страна омывается Жёлтым морем, с востока — Японским морем.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1920px-Flag_of_North_Korea.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248636954_9f3cc3.mp3'
    },
    {
      id: 5,
      name: 'Филиппины',
      species: 'Манила',
      description: 'Островное государство в Юго-Восточной Азии. Население составляет 100 981 437 человек (прирост — 2 % в год), включая 2134 филиппинских работников посольств и консульств за границей, плотность населения составляет 337 человек на 1 кв. км, территория — 299 764 км².',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1920px-Flag_of_the_Philippines.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248635471_8ce545.mp3'
    },
    {
      id: 6,
      name: 'Таиланд',
      species: 'Бангкок',
      description: 'Государство в Юго-Восточной Азии, расположенное в юго-западной части полуострова Индокитай и в северной части полуострова Малакка.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/160px-Flag_of_Thailand.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248619511_cac8bf.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Алжир',
      species: 'Алжир',
      description: 'Государство в Северной Африке в западной части Средиземноморского бассейна, крупнейшее по территории африканское государство. Площадь составляет 2 381 740 км², что чуть больше, чем у Демократической Республики Конго.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243714568_7b691a.mp3'
    },
    {
      id: 2,
      name: 'Египет',
      species: 'Каир',
      description: 'Египет – страна в Северо-Восточной Африке и на Ближнем Востоке. О ее богатой истории, насчитывающей более пяти тысяч лет, напоминают археологические памятники в плодородной долине реки Нил, среди которых пирамиды Гизы, Большой сфинкс, а также Карнакский храм',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1280px-Flag_of_Egypt.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248378231_87560c.mp3'
    },
    {
      id: 3,
      name: 'Кения',
      species: 'Найроби',
      description: 'Государство в Восточной Африке. Является бывшей колонией Великобритании, получила независимость 12 декабря 1963 года. Входит в Содружество наций. На сегодняшний день страна является одной из наиболее динамично развивающихся среди стран Восточной Африки.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1280px-Flag_of_Kenya.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248379434_e05280.mp3'
    },
    {
      id: 4,
      name: 'Марокко',
      species: 'Рабат',
      description: 'Марокко – страна в Северной Африке, омываемая водами Атлантического океана и Средиземного моря. Ее культура несет на себе отпечаток берберских, арабских и европейских традиций.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1280px-Flag_of_Morocco.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248463892_804840.mp3'
    },
    {
      id: 5,
      name: 'Тунис',
      species: 'Тунис',
      description: 'Государство на крайнем севере Африки. Население, по итогам переписи июля 2017 года, составляет 11 403 800 человек, территория — 163 610 км². Занимает 82 место в мире по численности населения и девяносто первое по территории.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1280px-Flag_of_Tunisia.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248622675_e7bc30.mp3'
    },
    {
      id: 6,
      name: 'Эфиопия',
      species: 'Аддис-Абеба',
      description: 'Эфиопия – не имеющая выхода к морю гористая страна в районе Африканского Рога, которую делит пополам Великая рифтовая долина. На территории страны были найдены археологические артефакты, возраст которых превышает три миллиона лет.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1920px-Flag_of_Ethiopia.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248636222_4df645.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'США',
      species: 'Вашингтон',
      description: 'Государство, состоящее из 50 штатов, занимает значительную часть Северной Америки. Штат Аляска расположен на северо-западе континента, а Гавайи – в Тихом океане. К крупным городам атлантического побережья относятся Нью-Йорк и столица Вашингтон.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248619338_aae91b.mp3'
    },
    {
      id: 2,
      name: 'Канада',
      species: 'Оттава',
      description: 'Североамериканская страна, простирающаяся от границы с США на юге до полярного круга на севере. Крупнейшие города – многолюдный Торонто, расположенный на западном побережье центр киноиндустрии Ванкувер, франкоязычные Монреаль и Квебек и столица страны Оттава.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png',
      audio: 'http://www.200stran.ru/media/country/1240517684_26162a.mp3'
    },
    {
      id: 3,
      name: 'Бразилия',
      species: 'Бразилиа',
      description: 'Страна в Южной Америке, которая простирается от бассейна реки Амазонка на севере до виноградников и огромных водопадов Игуасу на юге. Город Рио-де-Жанейро, символом которого является статуя Христа Искупителя высотой 38 метров на вершине горы Корковаду.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243948120_f9fda8.mp3'
    },
    {
      id: 4,
      name: 'Мексика',
      species: 'Мехико',
      description: 'Государство в Северной Америке, на севере граничит с США, на юго-востоке — с Белизом и Гватемалой, на западе омывается водами Калифорнийского залива и Тихого океана, на востоке — водами Атлантического океана, Мексиканского залива и Карибского моря.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248464106_758252.mp3'
    },
    {
      id: 5,
      name: 'Аргентина',
      species: 'Буэнос-Айрес',
      description: 'Второе (после Бразилии) по территории и третье (после Бразилии и Колумбии) по населению государство Южной Америки, состоящее из 24 административных единиц — 23 провинций и федерального столичного округа Буэнос-Айрес.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248277752_72ca9e.mp3'
    },
    {
      id: 6,
      name: 'Парагвай',
      species: 'Асунсьон',
      description: 'Парагвай – государство, не имеющее выхода к морю, расположенное между Аргентиной, Бразилией и Боливией. Большие территории заняты болотами, субтропическими лесами и чако – полупустынной местностью, где сочетаются саванна и кустарниковая степь.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616309_9e3367.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Австралия',
      species: 'Канберра',
      description: 'Государство в Южном полушарии, занимающее одноимённый материк, остров Тасмания и несколько других островов Индийского и Тихого океанов; является шестым государством по площади в мире.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1920px-Flag_of_Australia_%28converted%29.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243712608_056e3b.mp3'
    },
    {
      id: 2,
      name: 'Новая Зеландия',
      species: 'Веллингтон',
      description: 'Новая Зеландия – государство в юго-западной части Тихого океана, расположенное на разделенных проливом Кука двух крупных островах с вулканами и ледниками. Столица страны, Веллингтон, находится на Северном острове.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248465698_c1cf16.mp3'
    },    
    {
      id: 3,
      name: 'Палау',
      species: 'Нгерулмуд',
      description: 'Островное государство, ассоциированное с США, в Филиппинском море Тихого океана, расположенное в 800 км к востоку от Филиппин и к северу от Индонезии. Очень оригинальный флаг. Видимо весь креатив ушел на название столицы.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/1920px-Flag_of_Palau.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616115_509a87.mp3'
    },
    {
      id: 4,
      name: 'Фиджи',
      species: 'Сува',
      description: 'Независимое государство в Океании на востоке Меланезии. Расположена на архипелаге Фиджи в юго-западной части Тихого океана, к северу от Новой Зеландии, к востоку от Вануату, к югу от Тувалу и к западу от Тонга.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/1920px-Flag_of_Fiji.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248635418_a623ea.mp3'
    },
    {
      id: 5,
      name: 'Папуа-Новая Гвинея',
      species: 'Порт-Морсби',
      description: 'Государство в Океании, в юго-западной части Тихого океана, занимает восточную часть острова Новая Гвинея, архипелаг Бисмарка, северную часть Соломоновых островов (о-ва Бугенвиль, Бука), о-ва Д’Антркасто и др. Площадь — 462 840 км².',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/1280px-Flag_of_Papua_New_Guinea.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616237_9f4d6f.mp3'
    },
    {
      id: 6,
      name: 'Вануату',
      species: 'Порт-Вила',
      description: 'Тихоокеанское государство в Меланезии. Граничит на севере с водами Соломоновых Островов, на западе — с экономической зоной Австралии, на юго-западе — с территориальными водами Новой Каледонии, на востоке — с территориальными водами Фиджи.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/1920px-Flag_of_Vanuatu.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248376987_d7aac8.mp3'
    }
  ]
];

export default birdsData;