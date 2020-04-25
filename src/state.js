export let state = {
  films: [
    {
      id: 1,
      img:
        "https://psv4.userapi.com/c856436/u99821886/docs/d1/a2ba43eed678/Cat.png?extra=b11ekr0ya79pGq3zsqirSJrK73KWKtfiaXsxIcspvu47g7xnyhpukUE6eQ480h5wD7BgzSMXus9bXEkrW72qeC7YbIw1TG4ES4JW21pZVsc12VEpO02ZjESa_pyrVa1ZBNBEkHfKe2zmVXLKXzOvBg",
      title: "Мульт в кино. Выпуск №103. Некогда грустить!",
      about:
        "В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки. Также зрители увидят новые серии мультфильмов «Четверо в кубе», «Лео и Тиг» и совершенно новый мультсериал «Снежная королева: Хранители чудес». «МУЛЬТ в кино. ",
    },
    {
      id: 2,
      img:
        "https://psv4.userapi.com/c856232/u99821886/docs/d6/09c74adbbab8/batMan.png?extra=XSPuwSsz3Uk7c_PHYJH3AgenlemvZmwXsEp_amWe0tZeCbmDG_w0CebfjYs4ro6chxZz3RPwNWc7W5CRuwPw83d_-wXAzb4ZzlhEgkAsIyotkmtDh_82E_5D-ODW1SIOOFOhRIAlqI44P75j8wiNNQ",
      title: "Новый Бэтмен",
      about:
        "Перезапуск франшизы о Тёмном рыцаре, над которым трудится режиссёр и сценарист Мэтт Ривз, не просто представит целую плеяду классических злодеев из комиксов и нового Бэтмена в исполнении Роберта Паттинсона, но также проложит путь для множества других фильмов и спин-оффов.",
    },
    {
      id: 3,
      img:
        "https://psv4.userapi.com/c856232/u99821886/docs/d17/7eb3ca59bc65/Holy.png?extra=Z8yL2GyJGrgtRGOp9Z5wnkpVSRd7WxBfNf6FL0jkAazjFqh3G5E1ysDtYgUI5ZzkZmHk-mdfnR9z_cgtFwve8kAcdvhSboyhn4zvpF0qJkXwegWfeIbmvI8z4g65WuMpb5encfUiNew_AO-Nyn6mhg",
      title: "Однажды... в Голливуде",
      about:
        "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
    },
    {
      id: 4,
      img:
        "https://psv4.userapi.com/c856320/u99821886/docs/d2/b876fdbc65fc/Girl.png?extra=6P6rNPK7HlSRSYSCWHtN0pQdMcqkfahD1YgB21GNxDRTiDp4YMZpO9RECtr06PDTSHfaP904zzF2lYBgUsbiD_gVEIlm5DN55D1mYahm1-SOVqsoTfGC3AgLx0FmuzJQcWyrtJvacGZKmlqgLSulKg",
      title: "Стриптизёрши",
      about:
        "Танцовщицы элитного стриптиз-клуба, клиенты которого — известные финансисты с Уолл-Стрит — привыкли к большим заработкам и роскошной жизни.",
    },
  ],
  genres: [
    { id: 1, title: "Комедии", smile: "😁", class: "comedy" },
    { id: 2, title: "Драмы", smile: "😭", class: "dram" },
    { id: 3, title: "Фантастика", smile: "👽", class: "fantasy" },
    { id: 4, title: "Ужасы", smile: "👻", class: "horror" },
  ],
  channels: [
    {
      id: 1,
      title: "Первый канал",
      img:
        "https://psv4.userapi.com/c856224/u99821886/docs/d18/7086295d934f/logo-1.png?extra=EMTsdAC8mq1Hs_Gtj1SJjcbeet5bheb6ydwdagc3QhVyRGEfElmDICJD7TC4qIqkhg5kYOx-HvH4oAjB92f6B7Buy2ggdOcl7cb8gWwEK77Jfmyb3SRZbBJwRGUw9oIr-9dmD-OCCjaucWUzrabFQA",
      first: "Новости (с субтитрами)",
      second: "Давай поженимся",
      third: "Другие новости",
    },
    {
      id: 2,
      title: "2x2",
      img:
        "https://psv4.userapi.com/c856536/u99821886/docs/d12/e1b685f5377b/logo-2.png?extra=PcYrABtqySkNYVuRRnodqU-lXEHmecX6lEi9LSwiZxoRwx7tjq07WeXQBT6PcCl0XJUVEIXcChg9r2dzXVGahx1K45H813i8pjcuOiUqQB3H_mqxu91NKrt1zvMR_XZ5I7SkStfVlv-7nTjr6VSlhg",
      first: "МУЛЬТ ТВ. Сезон 4, 7 серия",
      second: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
      third: "БУРДАШЕВ. Сезон 1, 20 серия",
    },
    {
      id: 3,
      title: "РБК",
      img:
        "https://psv4.userapi.com/c856228/u99821886/docs/d12/bce7bbfca410/logo-3.png?extra=8Ez61vme2tckoVIItKmaKBcxfBlX5KZ1h63actKqmgx1-Etv0ueNJ6ThXa-wJhXkyKRjXhl04qVa_aknsjtH4Rx3Qo8sHWFOvTjK6cTkEbNsTgkNGWjz1piIPCmz0UGJpOse9YSnW5syo9Z4S_joyg",
      first: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
      second: "ДЕНЬ. Главные темы",
      third: "Главные новости",
    },
    {
      id: 4,
      title: "AMEDIA PREMIUM",
      img:
        "https://psv4.userapi.com/c856232/u99821886/docs/d5/7b23d8d9f5c0/logo-4.png?extra=UlVVBhxmniDgPgJgr1ek3uTsFtQgtoqTu4lHy4DVrGUIbmTnJNbq_aNCGnvB8O1Gtz4340kxQh961hsDiMYrqQ4WbPJB0RhjC2G1-8lwW43-qQfJXWWHoMPa4LWvSSndCEyWKMVw6gAYUy_vHVhmgQ",
      first: "Клиент всегда мёртв",
      second: "Голодные игры: Сойка-пересмешница. Часть I",
      third: "Секс в большом городе",
    },
  ],
};
