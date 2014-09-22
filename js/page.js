(function($, ko, global){
    var Page = global.Page = function(){
        var KBD_ENTER = 13;
        var self = this;
        self.active = ko.observable({name: '', action: ''});
        self.menu = ko.observableArray();
        self.textInput = ko.observable();
        self.getMenu = function(){
            self.menu([
                {
                    name: 'Dashboard',
                    action: 'dashboard'
                },
                {
                    name: 'Servers',
                    action: 'servers'
                },
                {
                    name: 'Users',
                    action: 'users'
                }
            ]);
        };
        self.dataDictionary = {
            dashboard: ko.observableArray([
                {name: 'Alon'},
                {name: 'Moshi'},
                {name: 'Tomer'},
                {name: 'Arie'}
            ]),
            servers: ko.observableArray([
                {name: 'Server 1'},
                {name: 'Server 2'},
                {name: 'Server 3'}
            ]),
            users: ko.observableArray([
                {name: 'Alon'},
                {name: 'Moshi'}
            ])
        };

        self.data = ko.observable();


        self.title = ko.observable();


        self.selectData = function(){
            self.data(self.dataDictionary[self.active().action]);
        };

        self.setActive = function(){

            self.active(this);
            self.title(this.name);
            self.selectData();
        };

        self.addItemToData = function(){
            self.data().push({ name: self.textInput() });
            self.textInput('');
        }

        self.title = ko.observable();
        self.data = ko.observableArray();

        self.getMenu();
        self.setActive.apply(self.menu()[0]);

    }
})(jQuery, ko, window);