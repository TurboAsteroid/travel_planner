<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      menu: [
        {
          icon: "mdi-map-search",
          name: "Составить маршрут",
          action: "open",
          place: this.formUrl
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
    }
  },
  computed: {
    formUrl () {
      return this.$store.state.global.formUrl
    }
  },
  methods: {
    openForm: function() {
      window.open(this.formUrl, "_blank");
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
