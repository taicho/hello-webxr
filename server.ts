var superstatic = require('superstatic')
var connect = require('connect');

var app = connect()
	.use(superstatic(/* options */));

app.listen(process.env.PORT || 8080, function() {
    console.log('server running');
});