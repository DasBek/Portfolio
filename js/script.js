document.addEventListener('DOMContentLoaded', function () {
   const tabs = document.querySelectorAll('.tab');
   const contents = document.querySelectorAll('.tab-content');

   tabs.forEach(tab => {
       tab.addEventListener('click', function (event) {
           event.preventDefault();
           const target = this.getAttribute('data-tab');

           tabs.forEach(t => t.classList.remove('active'));
           this.classList.add('active');

           contents.forEach(content => {
               if (content.id === target) {
                   content.classList.add('active');
               } else {
                   content.classList.remove('active');
               }
           });
       });
   });
});
