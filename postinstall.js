var fs = require('fs');

var source = '.editorconfig';
var target = '../../../.editorconfig';

if (!fs.existsSync(target)) {
	return fs.createReadStream(source).pipe(fs.createWriteStream(target));
}
