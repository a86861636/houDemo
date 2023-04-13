<template>
	<div id="dv-full-screen-container" :ref="ref">
	  <template v-if="ready">
		<slot></slot>
	  </template>
	</div>
  </template>
  
  <script>
  import autoResize from './autoResize.js'
  
  export default {
	name: 'DvFullScreenContainer',
	mixins: [autoResize],
	data() {
	  return {
		ref: 'full-screen-container',
		allWidth: 0,
		scale: 0,
		datavRoot: '',
		ready: false
	  }
	},
	methods: {
	  afterAutoResizeMixinInit() {
		const { initConfig, setAppScale } = this
  
		initConfig()
  
		setAppScale()
  
		this.ready = true
	  },
	  initConfig() {
		const { dom } = this
		const { width, height } = screen
  
		this.allWidth = width
  
		const navWidth = 250
		dom.style.left = `${navWidth}px`
		dom.style.width = `${document.body.clientWidth - navWidth}px`
		dom.style.height = `100%`
	  },
	  setAppScale() {
		// const { allWidth, dom } = this
  
		// const currentWidth = document.body.clientWidth
		this.initConfig()
		// dom.style.transform = `scale(${currentWidth / allWidth})`
	  },
	  onResize() {
		const { setAppScale } = this
  
		setAppScale()
	  }
	}
  }
  </script>