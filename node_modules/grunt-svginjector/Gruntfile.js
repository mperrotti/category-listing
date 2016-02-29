module.exports = function(grunt) {
	grunt.loadTasks('tasks/');

	grunt.initConfig({
		svginjector: {
			example: {
				options: {
					container: 'icons-container'
				},
				files: {
					'example/dist/icons.js': 'example/src/icons.svg'
				}
			}
		}
	});
};