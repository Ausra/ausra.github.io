(function () {

	var Weather = function() {
		this.view = new app.View();
		this.model = new app.Model(this.view);
		this.controller = new app.Controller(this.model, this.view);
	} 

	var weather = new Weather();

	function setView() {
		weather.controller.setView(document.location.hash);
	}

	window.onload = function() {
		setView();
	}

}());