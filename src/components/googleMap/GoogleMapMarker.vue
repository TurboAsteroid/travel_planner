<script>
export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },

  mounted() {
    const { Marker, InfoWindow } = this.google.maps;
    let marker = new Marker({
      position: this.marker.position,
      marker: this.marker,
      title: this.marker.title,
      map: this.map,
      animation: this.google.maps.Animation.DROP
    });

    let contentString = `<div class="card"><div class="font-weight-bold subtitle-2">${this.marker.title}</div><div>${this.marker.description}</div></div>`;

    let infowindow = new InfoWindow();
    this.google.maps.event.addListener(marker, "click", function() {
      infowindow.setContent(contentString);
      infowindow.open(this.map, marker);
    });
  },
  render() {
    return "";
  }
};
</script>
