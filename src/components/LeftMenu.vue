<template>
  <v-component>
    <v-list dense nav>
      <v-list-item>
        <v-btn icon @click.stop="closeMenu()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item
        v-for="item in menu"
        :key="item.name"
        link
        @click.stop="menuClick(item)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-component>
</template>

<script>
export default {
  name: "LeftMenu",
  data: () => ({
    menu: [
      {
        icon: "mdi-map-search",
        name: "Составить маршрут",
        action: "open",
        place: "http://bit.ly/yourtravelplanner"
      },
      {
        icon: "mdi-frequently-asked-questions",
        name: "faq",
        action: "scroll",
        place: "#faqBlockId"
      },
      {
        icon: "mdi-image-search",
        name: "Подробные условия",
        action: "scroll",
        place: "#conditionsBlockId"
      },
      {
        icon: "mdi-comment-text-multiple-outline",
        name: "Отзывы",
        action: "scroll",
        place: "#commentsBlockId"
      }
    ]
  }),
  methods: {
    openForm: function() {
      window.open("http://bit.ly/yourtravelplanner", "_blank");
    },
    closeMenu() {
      this.$emit("closed");
    },
    menuClick(item) {
      this.$emit("clickMenu", item);
    }
  }
};
</script>
