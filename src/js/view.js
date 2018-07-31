(function (window) {
    var View = function() {
        this.model = Model;
        this.createInterface();
        this.showData();
        this.iconArray = {            
            "snow": "wi-snow", 
            "clear-day": "wi-day-sunny",
            "clear-night": "wi-night-clear", 
            "rain": "wi-rain",
            "sleet": "wi-sleet",
            "wind": "wi-windy",
            "fog": "wi-fog",
            "cloudy": "wi-cloudy",
            "partly-cloudy-day": "wi-day-cloudy",
            "partly-cloudy-night": "wi-night-alt-cloudy"
        };
    }

    View.prototype.addToNode = function(node) {
        node.appendChild(this.mainNode);
    }

    View.prototype.showData = function(data) {
        this.resultsNode.innerHTML = '';
        var resultsData = this.model.getData();
        var that = this;
        resultsData.then(function(data) {

            var dataNode = document.createElement('p');
            dataNode.innerHTML = data.currently.summary;
            that.resultsNode.appendChild(dataNode);

            var iconNode = document.createElement('div');
            iconNode.classList.add('icon');
            iconNode.classList.add("wi", that.iconArray[data.currently.icon]);
            that.resultsNode.appendChild(iconNode);

            var temperatureNode = document.createElement('p');
            temperatureNode.classList.add('temperature');
            temperatureNode.innerHTML = data.currently.temperature;
            that.resultsNode.appendChild(temperatureNode);

        });
    }

    View.prototype.createInterface = function() {
        this.mainNode = document.createElement('div');
        this.mainNode.classList.add('main');

        this.resultsNode = document.createElement('div');
        this.resultsNode.classList.add('results');
        this.mainNode.appendChild(this.resultsNode);
    };

    window.app = window.app || {};
    console.log(window.app);
    window.app.View = View;

}(window));