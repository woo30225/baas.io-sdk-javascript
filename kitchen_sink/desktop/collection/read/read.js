$(document).ready(function() {

	var myFirstApp = new baasio.Client({
		orgName: YOUR_BAAS_IO_ID,
		appName: YOUR_BAAS_APP_ID
    logging: false, //optional - turn on logging, off by default
    buildCurl: false //optional - turn on curl commands, off by default
  });
alert('')
	var options = {
		type: 'mycollection'
	};

	myFirstApp.createCollection(options, function(err, cars) {
		if(err) {
			//실패
		} else {
			//성공

			while(dogs.hasNextEntity() {
				dog = dogs.getNextEntity();
				alert(dog.get('name'));
			});
		}
	});
});