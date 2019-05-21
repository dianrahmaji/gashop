<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      class="orange lighten-1 white--text text-xs-center"
    >
      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text> -->

      <v-card-text class="white--text pt-0">
        GASHOP business concept is to offer fashion and quality at the best price. GASHOP has since it was founded in 2019. The content of this site is copyright-protected and is the property of Gabriella & Atikah. GASHOP is committed to accessibility. If you are using a screen reader, magnifier, or other assistive technologies and are experiencing difficulties using this website, please call our support line (+62-8123456789) for assistance.
      </v-card-text>

      <!-- <v-card-action> -->
        <v-btn
          small
          flat
        >
          <v-icon left dark>fab fa-instagram</v-icon>
          <span>Instagram</span>
        </v-btn>
        <v-btn
          small
          flat
        >
          <v-icon left dark>fab fa-facebook</v-icon>
          <span>Facebook</span>
        </v-btn>
        <v-btn
          small
          flat
        >
          <v-icon left dark>far fa-envelope</v-icon>
          <span>Email</span>
        </v-btn>
      <!-- </v-card-action> -->

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>GASHOP</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
