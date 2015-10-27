#gulp-nosubfolders

## Information

<table>
<tr>
<td>Package</td><td>gulp-nosubfolders</td>
</tr>
<tr>
<td>Description</td>
<td>Remove all the subfolders structure from the files on the pipe so you can save all of them in one location</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Install
```
npm install gulp-nosubfolders
```

## Usage

By default gulp.dest keeps all the subfolder structure of the files coming through the pipe. So you can use this module to get a structure like this:

```
└── js
    ├── app.js
    ├── helper.js
    └── vendor
        ├── jquery.js
        └── bootstrap.js
```
and turn it into this:

```
├── app.js
├── helper.js
├── jquery.js
└── bootstrap.js
```

With this code:

```js
var nosubfolders = require('gulp-nosubfolders');

gulp.task('default', function() {
  return gulp
  				.src('./js/**')
  				.pipe(nosubfolders())
  				.pipe(gulp.dest('./my/dest/path'));
});
```