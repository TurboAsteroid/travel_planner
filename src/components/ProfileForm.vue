<template>
  <v-card>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="(stage, n) in stages">
          <v-stepper-step :key="`${n}-step`" :complete="e1 > n" :step="n" />
          <v-divider v-if="n !== stages.length - 1" :key="n" />
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="(stage, n) of stages"
          :key="`${n}-content`"
          :step="n"
        >
          <StageForm
            :stage="stage"
            :first="n + 1 === 1"
            :last="n + 1 === stages.length"
            @close="closeDialog"
            @next="nextStep(n)"
            @prev="prevStep(n)"
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-card>
</template>

<script>
import StageForm from "./StageForm";
export default {
  name: "Profile",
  components: {
    StageForm
  },
  data() {
    return {
      e1: 0,
      stages: [
        {
          name: "Общая информация",
          description: "Для начала несколько стандартных вопросов",
          questions: [
            {
              question: "Пункт отправления",
              description:
                "Можно выбрать не только свой город, но и другие крупные города, откуда Вы готовы поехать.",
              required: 1,
              type: "TextField"
            },
            {
              question: "Направление",
              description:
                "Можно выбрать несколько стран, городов или достопримечательностей, которые хотелось бы посетить.",
              required: 1,
              type: "TextField"
            },
            {
              question: "Даты поездки",
              description:
                "Если известны точные даты, или сезон + примерная продолжительность поездки",
              required: 1,
              type: "TextField"
            },
            {
              question: "Количество путешественников",
              description: "Взрослые + дети",
              required: 1,
              type: "TextField"
            },
            {
              question: "Количество детей (если есть) и их возраст",
              description:
                "Это нужно для того, чтобы предусмотреть детские билеты на транспорт/в парки аттракционов/в музеи и т.д.",
              required: 0,
              type: "TextField"
            }
          ]
        },
        {
          name: "Способы передвижения",
          description: "",
          questions: [
            {
              question: "Как будем добираться до первой страны?",
              description: "",
              options: [
                "По воздуху: Самолёт",
                "По железной дороге: Поезд/электричка",
                "По воде: Паром/катер/яхта",
                "По дороге: Машина/мотоцикл/мопед",
                "По-интересному: Пешком/на велосипеде/автостопом",
                "Подешевле"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Как будем передвигаться во время путешествия?",
              description: "",
              options: [
                "По воздуху: Самолёт",
                "По железной дороге: Поезд/электричка",
                "По воде: Паром/катер/яхта",
                "По дороге: Машина/мотоцикл/мопед",
                "По-интересному: Пешком/на велосипеде/автостопом",
                "Подешевле"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            }
          ]
        },
        {
          name: "Проживание",
          description: "Где будем жить",
          questions: [
            {
              question: "Места для ночёвки",
              description: "",
              required: 1,
              type: "CheckboxField",
              options: [
                "Отели",
                "Автодом",
                "Хостелы",
                "Апартаменты",
                "Кемпинги",
                "Вилла",
                "Знакомые/друзья/родственники",
                "Каучсёрфинг",
                "Гестхаус",
                "Мотель",
                "Подешевле"
              ],
              addition: 1
            },
            {
              question: "Звёзды",
              description: "",
              options: [
                "*",
                "**",
                "***",
                "****",
                "*****",
                "Любой",
                "Главное - соотношение цена-качество"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Питание в отеле",
              description: "",
              options: [
                "Завтраки",
                "Завтрак-ужин (или обед)",
                "Завтрак-обед-ужин",
                "Всё включено",
                "Ультра всё включено",
                "Любое",
                "Option 7",
                "Главное - соотношение цена-качество"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Что ещё для Вас важно при выборе отеля?",
              description: "",
              required: 0,
              type: "TextField"
            }
          ]
        },
        {
          name: "Бюджет",
          description: "",
          questions: [
            {
              question: "Общий бюджет",
              description:
                "Будьте внимательны, это общая сумма на всех участников поездки на все дни пребывания!",
              options: [
                "$0-99",
                "$100-499",
                "$500-999",
                "$1000-1999",
                "$2000-2999",
                "$3000-3999",
                "$4000-4999",
                "$5000-∞"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Бюджет на еду",
              description:
                "Будьте внимательны, это сумма на одного участника поездки в день!\n",
              options: [
                "$0-15",
                "$16-30",
                "$31-80",
                "$81-120",
                "$121-200",
                "$200-∞"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            }
          ]
        },
        {
          name: "Предпочтения",
          description:
            "Самый интересный раздел! Выбирайте честно, что Вас интересует и что точно не интересует.",
          questions: [
            {
              question: "Сначала выберем то, чего хочется больше всего!",
              description: `Не обязательно выбирать что-то в каждой категории,выбирайте только самое-самое!В пунктах "другое"
              Вы всегда можете написать свои комментарии.
              PS Далее будет ещё один раздел с теми же категориями "можно было бы посмотреть, если будет время,
              поэтому потенциально интересные локации пока выбирать не нужно.`,
              type: "SimpleText"
            },
            {
              question: "В целом",
              description: "",
              options: [
                "Шоппинг",
                "Сувениры",
                "Интересные люди",
                "Архитектура",
                "Достопримечательности",
                "Красивые локации",
                "Знаковые места",
                "Неизвестные места",
                "Крутые локации для хороших фоточек в инстаграм",
                "Самые высокие обзорные площадки",
                "Стрит Арт",
                "Выставки",
                "Ярмарки",
                "Парки аттракционов",
                "Религиозные центры/Соборы/Церкви",
                "Тихие районы",
                "Клубы",
                "Кальянные",
                "Массаж и СПА",
                "Спорт и йога",
                "Спортивные события/Соревнования/Марафоны",
                "Концерты",
                "Гонки",
                "Казино"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Природа",
              description: "",
              options: [
                "Парки",
                "Море",
                "Горы",
                "Леса",
                "Реки и озёра (круизы)",
                "Национальные парки",
                "Заповедники",
                "Зоопарки",
                "Фермы",
                "Сафари",
                "Экспедиции и пешие маршруты"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Еда",
              description: "",
              options: [
                "Местная кухня",
                "Стрит фуд",
                "Дорогие рестораны",
                "Мишленовские рестораны",
                "Кофе",
                "Чай",
                "Люблю покушать, что посоветуете?"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Музеи",
              description: "",
              options: [
                "Современное искусство",
                "Живопись",
                "Скульптура",
                "Естествознание",
                "Краеведение",
                "Планетарий",
                "Наука",
                "Анатомия",
                "Уникальные музеи",
                "Народное творчество",
                "Исторические панорамы",
                "Детские музеи",
                "Все"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Театры",
              description: "",
              options: ["Балет", "Опера", "Мюзикл", "Бродвей", "Цирк", "Все"],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            }
          ]
        },
        {
          name: "Предпочтения",
          description:
            "Теперь выберем то, что можно было бы посетить, если будет по пути или при наличии свободного времени",
          questions: [
            {
              question: `Эти локации впоследствии будут выделены на карте другим цветом.
                      Вы всегда можете пропустить их, если не будет настроения или возможности.!`,
              description: `Напоминаем, что маршрут, который мы составляем не является обязательным.
              Вы можете следовать ему или менять его по своим личным предпочтениям и обстоятельствам!`,
              type: "SimpleText"
            },
            {
              question: "В целом",
              description: "",
              options: [
                "Шоппинг",
                "Сувениры",
                "Интересные люди",
                "Архитектура",
                "Достопримечательности",
                "Красивые локации",
                "Знаковые места",
                "Неизвестные места",
                "Крутые локации для хороших фоточек в инстаграм",
                "Самые высокие обзорные площадки",
                "Стрит Арт",
                "Выставки",
                "Ярмарки",
                "Парки аттракционов",
                "Религиозные центры/Соборы/Церкви",
                "Тихие районы",
                "Клубы",
                "Кальянные",
                "Массаж и СПА",
                "Спорт и йога",
                "Спортивные события/Соревнования/Марафоны",
                "Концерты",
                "Гонки",
                "Казино"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Природа",
              description: "",
              options: [
                "Парки",
                "Море",
                "Горы",
                "Леса",
                "Реки и озёра (круизы)",
                "Национальные парки",
                "Заповедники",
                "Зоопарки",
                "Фермы",
                "Сафари",
                "Экспедиции и пешие маршруты"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Еда",
              description: "",
              options: [
                "Местная кухня",
                "Стрит фуд",
                "Дорогие рестораны",
                "Мишленовские рестораны",
                "Кофе",
                "Чай",
                "Люблю покушать, что посоветуете?"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Музеи",
              description: "",
              options: [
                "Современное искусство",
                "Живопись",
                "Скульптура",
                "Естествознание",
                "Краеведение",
                "Планетарий",
                "Наука",
                "Анатомия",
                "Уникальные музеи",
                "Народное творчество",
                "Исторические панорамы",
                "Детские музеи",
                "Все"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            },
            {
              question: "Театры",
              description: "",
              options: ["Балет", "Опера", "Мюзикл", "Бродвей", "Цирк", "Все"],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            }
          ]
        },
        {
          name: "Контактные данные",
          description:
            "Мы уже почти всё про Вас знаем, пора бы и познакомиться лично!",
          questions: [
            {
              question: "Как Вас зовут? ",
              description: "достаточно Имени и Фамилии",
              required: 1,
              type: "TextField"
            },
            {
              question: "Ваш контактный телефон",
              description:
                "Обещаем не звонить по ночам и не навязывать всякий спам",
              required: 1,
              type: "TextField"
            },
            {
              question: "Ваша электронная почта",
              description: "",
              required: 1,
              type: "TextField"
            },
            {
              question: "Удобные способы связи",
              description: "",
              options: [
                "Звоните",
                "Пишите СМС",
                "Пишите в WhatsApp",
                "Пишите в Telegram",
                "Пишите на почту",
                "Не звоните и не пишите, я просто так тут всё заполнял"
              ],
              addition: 1,
              required: 1,
              type: "CheckboxField"
            }
          ]
        }
      ]
    };
  },
  methods: {
    closeDialog() {
      this.$store.commit("setDialog", [false, "dialogProfile"]);
      this.e1 = 1;
    },
    nextStep(n) {
      if (n >= this.stages.length - 1) {
        this.e1 = this.stages.length - 1;
      } else {
        this.e1 = n + 1;
      }
    },
    prevStep(n) {
      if (n <= 0) {
        this.e1 = 0;
      } else {
        this.e1 = n - 1;
      }
    }
  }
};
</script>
