const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			base: '/vuetify_portfolio',  // এখানে 'repository-name' আপনার GitHub রিপোজিটরির নাম হবে
      build: {
        outDir: 'dist',  // ভিউ প্রোজেক্টের বিল্ড ফোল্ডার
      },
		}
  }
})
