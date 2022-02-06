const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/appuploadimage', {
	useNewUrlParser: true
})
	.then(db => console.log('DB is connected'))
	.catch(err=> console.err(err));