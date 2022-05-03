// var _app = {

//     //Init function
//     init: function(){
//         _app.showImages();
//     },

//     //show image
//     showImages : function(){
//         console.log("show");
//         const element  = document.getElementById("show-images"); 
//         element.innerText = "Trần Xuân Phi";
//         return element;
//     },
// };
// _app.init();
var app = {
    init: function () {
      app.renderUsers();
    },
     getUser: function getUsers() {
    //   let url = "users.json";
    let url = "";
      try {
        let list =  fetch('', {method: 'POST', body: { name: 'User 1'} }).then(res => {
            console.log(res);
            return  res.json();
        })
        .then(data=> console.log(data))
        .catch(error => console.log('ERROR'));
       // console.log(list);
        
      } catch (error) {
        console.log(error);
      }
        // try {
        //     fetch('')
        //     .then(res => res.json())
        //     .then(data => console.log(data));
        // } catch (error) {
            
        // }
    },
  
    renderUsers: function renderUsers() {
     //let users =  app.getUser(); 
      const users = [
        {
          username: "john",
          firstName: "John",
          lastName: "Doe",
          gender: "Male",
          profileURL: "img/327.jpg",
          email: "john.doe@example.com",
        },
        {
            username: "jane",
            firstName: "Jane",
            lastName: "Doe",
            gender: "Female",
            profileURL: "img/37864.jpg",
            email: "jane.doe@example.com",
          },
        {
          username: "jane",
          firstName: "Jane",
          lastName: "Doe",
          gender: "Female",
          profileURL: "img/72069.jpg",
          email: "jane.doe@example.com",
        },
        {
            username: "john",
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            profileURL: "img/43477.jpg",
            email: "john.doe@example.com",
          },
      ];
  
      let html = "";
  
      users.map((user) => {
        let htmlSegment = `<div class="user">
                               <img src="${user.profileURL}" >
                               <h2>${user.firstName} ${user.lastName}</h2>
                               <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                             </div>`;
        html += htmlSegment;
      });
  
      let container = document.querySelector(".container");
      container.innerHTML = html;
    },
  };
  app.init();
  