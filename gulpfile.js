var gulp = require('gulp');
const babel = require('gulp-babel');

//watch не следит за созданием файлов
gulp.task('watch', function() {
	gulp.watch('app.js', gulp.series('1babel'));
});


 
gulp.task('1babel', () =>
	gulp.src('app.js')
		.pipe(babel({
			presets: ['@babel/env','@babel/preset-react']
		}))
		.pipe(gulp.dest('../react/js'))
);