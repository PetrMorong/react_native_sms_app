/**
 * Created by Petr on 28.1.2017.
 */
var gulp = require('gulp');

gulp.task('clear-cache', function () {
    // Clear react-packager cache
    var tempDir = os.tmpdir();

    var cacheFiles = fs.readdirSync(tempDir).filter(function (fileName) {
        return fileName.indexOf('react-packager-cache') === 0;
    });

    cacheFiles.forEach(function (cacheFile) {
        var cacheFilePath = path.join(tempDir, cacheFile);
        fs.unlinkSync(cacheFilePath);
        console.log('Deleted cache: ', cacheFilePath);
    });

    if (!cacheFiles.length) {
        console.log('No cache files found!');
    }
});