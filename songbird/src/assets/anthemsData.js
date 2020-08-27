const birdsData = [
  [       
    {
      id: 1,
      name: 'Беларусь',
      species: 'Минск',
      description: 'Название государства происходит от словосочетания «Белая Русь», известного с середины XIII века и употреблявшегося по отношению к различным регионам Руси. До конца XV века большинство упоминаний о «Белой Руси» (Alba Russіa) происходит из Западной Европы и относится к территории Новгородской республики.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg/800px-Flag_of_Belarus_%281918%2C_1991%E2%80%931995%29.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248268694_e02ade.mp3'
    },
    {
      id: 2,
      name: 'Россия',
      species: 'Москва',
      description: 'Государство в Восточной Европе и Северной Азии. Территория России в её конституционных границах составляет 17 125 191 км²; население страны (в пределах её заявленной территории) составляет 146 748 590 чел. Занимает первое место в мире по территорииПерейти к разделу «#Географическое положение», шестое — по объёму ВВП по ППС и девятое — по численности населения',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616639_cdf7ce.mp3'
    },
    {
      id: 3,
      name: 'Казахстан',
      species: 'Нур-Султан',
      description: 'Государство в центре Евразии, бо́льшая часть которого относится к Азии, меньшая — к Европе. Площадь территории — 2 724 902 км². Население, по оценке государственного комитета по статистике на 1 апреля 2020 года, составляет 18 690 200 человек. Плотность населения является одной из самых низких: менее 6 человек на квадратный километр.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1920px-Flag_of_Kazakhstan.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248379222_61102f.mp3'
    },
    {
      id: 4,
      name: 'Украина',
      species: 'Киев',
      description: 'Государство в Восточной и, частично, Центральной Европе. Население, по итогам переписи 2001 года, составляло 48 240 902 постоянных жителя и 48 457 102 человека наличного населения, по оценкам государственной службы статистики Украины на 1 мая 2020 года — 41 636 584 постоянных жителя и 41 806 221 человек наличного населения',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png',
      audio: 'http://www.200stran.ru/media/country/1245512341_c7de7c.mp3'
    },
    {
      id: 5,
      name: 'Узбекистан',
      species: 'Ташкент',
      description: 'Государство, расположенное в центральной части Средней Азии. Узбекистан является нейтральным государством. Сопредельные государства: на востоке — Киргизия; на северо-востоке, севере и северо-западе — Казахстан; на юго-западе и юге — Туркмения; на юге — Афганистан и на юго-востоке — Таджикистан.',
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
      description: 'Государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО с момента их создания, является третьей по величине экономикой еврозоны. Граничит с Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км). ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248378772_8ea1f8.mp3'
    },
    {
      id: 4,
      name: 'Испания',
      species: 'Мадрид',
      description: 'Суверенное государство на юго-западе Европы и частично в Африке, член Европейского союза и НАТО. Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и Балеарские острова, имеет общую площадь 504 782 км² (вместе с небольшими суверенными территориями на африканском побережье.',
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
      description: 'Одно из крупнейших государств Европы, ядерная держава с 1952 года (признанная в соответствии с Договором о нераспространении ядерного оружия 1968 года), постоянный член Совета Безопасности ООН, бывшая метрополия Британской империи; британский монарх также является главой 15 иных независимых государств и главой Содружества.',
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
      description: 'Островное государство в Восточной Азии. Находится в Тихом океане к востоку от Японского моря, Китая, Северной и Южной Кореи, России. Занимает территорию от Охотского моря на севере до Восточно-Китайского моря и Тайваня на юге. Поэтическое название — Страна восходящего солнца',
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
      description: 'Островное государство в Юго-Восточной Азии. Население, по оценке на март 2020 года, составляет 100 981 437 человек (прирост — 2 % в год), включая 2134 филиппинских работников посольств и консульств за границей, плотность населения составляет 337 человек на 1 кв. км, территория — 299 764 км².',
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
      description: 'Государство в Северной Африке в западной части Средиземноморского бассейна, крупнейшее по территории африканское государство. Площадь составляет 2 381 740 км², что чуть больше, чем у Демократической Республики Конго (2-е место по площади на континенте).',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243714568_7b691a.mp3'
    },
    {
      id: 2,
      name: 'Египет',
      species: 'Каир',
      description: 'Государство, расположенное в Северной Африке и на Синайском полуострове Азии. На северо-востоке граничит с Израилем и частично признанным государством Палестиной, на юге — с Суданом, на западе — с Ливией. На севере территория страны омывается водами Средиземного, на востоке — Красного морей, при этом оба моря соединены посредством искусственно сооружённого Суэцкого канала. ',
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
      description: 'Страна, которая вступила в Африканский союз в 1963 году, но с 1984 по 2017 год не являлась его членом из-за притязаний на Западную Сахару. Входит в Лигу Арабских государств, Союз арабского Магриба, Франкофонию, Организацию исламского сотрудничества, группу Средиземноморского диалога, группу 77.',
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
      description: 'Государство в Восточной Африке, не имеющее выхода к морю (после отделения Эритреи 24 мая 1993 года). Население составляет более 100 миллионов человек, территория — 1 104 300 км², вторая (после Нигерии) по численности населения страна в Африке. Занимает 13-е место в мире по численности населения и 26-е по территории.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1920px-Flag_of_Ethiopia.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248636222_4df645.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'США',
      species: 'Вашингтон',
      description: 'Государство в Северной Америке. Площадь — 9,5 млн км² (4-е место в мире). Население — около 329 млн человек (2019, оценка; 3-е место в мире). США имеют федеративную форму устройства, административно делятся на 50 штатов и федеральный округ Колумбия; в их подчинении также находится ряд островных территорий (Пуэрто-Рико, Виргинские Острова, Гуам и другие).',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248619338_aae91b.mp3'
    },
    {
      id: 2,
      name: 'Канада',
      species: 'Оттава',
      description: 'Государство в Северной Америке, занимает второе место в мире по площади. Омывается Атлантическим, Тихим и Северным Ледовитым океанами, имея самую длинную береговую линию в мире. Граничит с США на юге и на северо-западе, также имеет морские границы с Данией (Гренландия) на северо-востоке и с Францией (Сен-Пьер и Микелон) на востоке.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png',
      audio: 'http://www.200stran.ru/media/country/1240517684_26162a.mp3'
    },
    {
      id: 3,
      name: 'Бразилия',
      species: 'Бразилиа',
      description: 'Суверенное государство в Южной Америке. Площадь — 8 515 767 км² (эквивалентна 47,3 % южноамериканской территории). Будучи пятой среди стран мира по площади и шестой по численности населения (с более чем 207 млн жителей), Бразилия является наибольшей страной Южной Америки, как по территории, так и по численности населения.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243948120_f9fda8.mp3'
    },
    {
      id: 4,
      name: 'Мексика',
      species: 'Мехико',
      description: 'Государство в Северной Америке, на севере граничит с Соединёнными Штатами Америки, на юго-востоке — с Белизом и Гватемалой, на западе омывается водами Калифорнийского залива и Тихого океана, на востоке — водами Атлантического океана, Мексиканского залива и Карибского моря.',
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
      description: 'Государство в Южной Америке, не имеющее выхода к морю. На юге и юго-западе граничит с Аргентиной, на северо-западе — с Боливией (она также без выхода к морю), на востоке и северо-востоке — с Бразилией. В переводе с языка гуарани «парагвай» означает «от великой реки» — подразумевается река Парана.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/1920px-Flag_of_Paraguay.svg.png',
      audio: 'http://www.200stran.ru/media/country/1248616309_9e3367.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Австралия',
      species: 'Канберра',
      description: 'Государство в Южном полушарии, занимающее одноимённый материк, остров Тасмания и несколько других островов Индийского и Тихого океанов[* 1]; является шестым государством по площади в мире.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1920px-Flag_of_Australia_%28converted%29.svg.png',
      audio: 'http://www.200stran.ru/media/country/1243712608_056e3b.mp3'
    },
    {
      id: 2,
      name: 'Новая Зеландия',
      species: 'Веллингтон',
      description: 'Государство в Полинезии. Население, по итогам официальной переписи 2013 года, составляет более 4 миллионов человек (по оценочным данным на начало 2017 года — более 4,8 миллионов человек), территория — 268 680 км², по обоим этим показателям является крупнейшей страной Океании.',
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