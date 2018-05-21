var message = [];

var chat = new Vue({
  el:'#chat',
  data: {
    message:[{
      text:'Blah Blah',
      time:"2:12:55 AM 21.5.18"
    },
    {
      text:'Blah Blah1',
      time:"2:13:55 AM 21.5.18"
    },{
      text:'Blah Blah2',
      time:"2:14:55 AM 21.5.18"
    },{
      text:'Blah Blah3',
      time:"2:15:55 AM 21.5.18"
    },]
  }

});

var user = [];

var users = new Vue({
  el:'#users',
  data: {
    user : [{
      name: 'Denis',
      ip:'localhost',
      lastConnectedTime:'2018:21:05 8:37 AM',
      lastMessage:'Hello World',
      avatar:'SomeLinkToImage'
    },
    {
      name: 'Denis1',
      ip:'localhost1',
      lastConnectedTime:'2018:21:05 8:37 AM',
      lastMessage:'Hello World1',
      avatar:'SomeLinkToImage1'
    },
    {
      name: 'Denis2',
      ip:'localhost2',
      lastConnectedTime:'2018:21:05 8:37 AM',
      lastMessage:'Hello World1',
      avatar:'SomeLinkToImage1'
    }]

  }

});

var inputMessage = new Vue({
  el:'#inputMessage',
  data: {
    title:'hello'
  }

});
