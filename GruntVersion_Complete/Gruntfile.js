module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {

      options: {
        processors: [
          require('postcss-will-change')(),
          require('autoprefixer')(),
          require('postcss-color-rgba-fallback')(),
          require('postcss-opacity')(),
          require('postcss-pseudoelements')(),
          require('postcss-vmin')(),
          require('pixrem')()
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }

    }
 
  });

  grunt.loadNpmTasks('grunt-postcss');

};