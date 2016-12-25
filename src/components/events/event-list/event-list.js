import EventPreview from '../event-preview'
export default {
  props: {
    events: {
      required: true,
      type: Array
    }
  },
  data: () => {
    return {
    }
  },
  components: {
    'event-preview': EventPreview
  }
}