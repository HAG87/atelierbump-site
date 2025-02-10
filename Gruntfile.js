module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['assets/js/vendor/**/*.js', 'assets/js/plugins/*.js', 'assets/js/_main.js'], // Source files
          dest: 'assets/js/main.js', // Destination file
        },
      },
      uglify: {
        options: {
          mangle: false,
          sourceMap: true, // Enable source map generation
        },
        dist: {
          src: ['assets/js/vendor/**/*.js', 'assets/js/plugins/*.js', 'assets/js/_main.js'], // Source file
          dest: 'assets/js/main.min.js' // Destination file
        },
      },
    });
  
    // Load the plugins that provide the "concat" and "uglify" tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
  
    // Separate tasks.
    grunt.registerTask('concatTask', ['concat']);
    grunt.registerTask('uglifyTask', ['uglify']);
  };