export default {
  props: {
    event: {
      required: true,
      type: Object
    }
  },
  data: () => {
    return {
      isSelected: false
    }
  }
}

