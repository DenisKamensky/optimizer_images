var gulp = require('gulp');
var tinypng = require('gulp-tinypng');
var clean = require('gulp-clean');

/* Ключи tinypng

6LVSvt7vfvKmT9voyQqudINN1L7G9enX
jXv22VipyKBejHnn0dhIJ3lLUygPuelH
8zfFSFpJEnP1kFPO4aNtAB4Qdz7U9YDp
DKT00-5ZA27kYxyJ8lcKFUlTkSzcvHNd
bKvXfL5NHQWFtqUi-IAtzyKZ72lSh3wX
M6-_7liukLUdhpkLVa-Q4aSnsJoPTjNH
WpdVJelJN2Ao9PuoJvXbKtsGsgluY1m6
3HW_We9x6SBaXxM0UkOFQp0YehEGvyD4
5HUZ-ziUD-pMaIWJMru0sFchzeWSM4az
PPdduRlujJzouSMyX1oDHJ2ZKa-YnJgu
S2PyyeaTwxpNo9k5w7jrKMx6mzFNhKme
uAUvQlXSlK1vU6ATl_QlsMIL8aSGL5lR
JGDdvLMLvZibl24WQrVlsGOemZl8dkVh
c9_apU91Us7w8ZrZyKICQvbxWBgeC148
Ez4ZxGTDmVOyMFitrwO0RlRQO9VpV8fr
hH80JP7_ywscCuBEg_rO6zz3BdytmBq8
OFLhht-pWkduRsl7EnsQm59I6K26YTqX
mRpnUpBs04n7EaSPzxdcIjHwt9s8ReD4
1TgU4k7zwxUhpHswAU4ZyoAh--c5CjJU
RTsiWDRU2jZsovnEwTEfA5vwoRFRm1Ch
y1HWG6eusFi4SXWsvu0b2dlMsravG15U
pjz9giw7iu9ChYAG57njtWkB2ue02Lte

*/

gulp.task('tinypng', function () {
    gulp.src('src/**/*.*')
        .pipe(tinypng('y1HWG6eusFi4SXWsvu0b2dlMsravG15U'))
        .pipe(gulp.dest('compressed_images/'));
});
gulp.task('clean', function () {
    return gulp.src('src/*', {read: false})
        .pipe(clean());
});
gulp.task('default',function(){
	gulp.watch('src/**',['tinypng']);
});