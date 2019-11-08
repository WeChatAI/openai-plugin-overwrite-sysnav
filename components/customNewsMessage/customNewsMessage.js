
Component({
  properties: {
    msg: Object
  },
  data: {
    answer: ''
  },

  lifetimes: {
    ready: function() {
      this.setData({
        answer: this.properties.msg.answer
      })
    }
  },
  methods: {
    
  }
});
