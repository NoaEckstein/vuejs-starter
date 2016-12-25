export default {
  data: () => {
    return {
      filter: { name: '' }
    }
  },
  methods: {
    emitFilter() {
      this.$emit('filterChanged', this.filter);
    }
  }
}