(function() {
    var AppView = window.CLASSES.AppView = function(appModel) {
        this.appModel = appModel;
        this.createInterface();
        this.showData();
    }

    AppView.prototype.addToNode = function(node) {
        node.appendChild(this.mainNode);
    }

    AppView.prototype.showData = function(data) {
        this.resultsNode.innerHTML = '';
        var resultsData = this.appModel.getData();
        var that = this;
        resultsData.then(function(data) {
            console.log(data);
            var dataNode = document.createElement('p');
            dataNode.innerHTML = data.currently.summary;
            that.resultsNode.appendChild(dataNode);
        });
    }

    AppView.prototype.createInterface = function() {
        this.mainNode = document.createElement('div');
        this.mainNode.classList.add('main');

        this.resultsNode = document.createElement('div');
        this.resultsNode.classList.add('results');
        this.mainNode.appendChild(this.resultsNode);
    }
}());