module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
				files: 'src/**/*.scss',
				tasks: ['sass','cssmin']
			}
        },
		sass: {
			dist: {
				options: {
					sourcemap: false
				},
				files: {
					'dist/lightsaber.css' : 'src/lightsaber.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'dist/',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/',
					ext: '.min.css'
				}]
			}
		}
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass','cssmin']);

};