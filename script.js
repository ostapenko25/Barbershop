
         // ВСПЛЫВАЮЩАЯ ФОРМА ВХОДА
        
        var link = document.querySelector(".login");
        var popup = document.querySelector(".modal-content");
        var close = popup.querySelector(".modal-content-close");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        var form = popup.querySelector("form");
        var overlay = document.querySelector(".modal-overlay");
        
        link.addEventListener("click", function(event) { // что мы делаем при нажатии на "Вход"
            event.preventDefault(); /* ВСЕГДА отменять действие по умолчанию */ popup.classList.add("modal-content-show"); // вызов окна формы 
            login.focus(); // курсор сразу появляется в поле
           overlay.classList.add("modal-overlay-show"); // вызов оверлея
            
        });      
                    
        close.addEventListener("click", function(event) { // что мы делаем при нажатии крестика внутри формы
            event.preventDefault();   popup.classList.remove("modal-content-show");  // прячем окно формы 
            
            overlay.classList.remove("modal-overlay-show"); // прячем оверлей
        });
        
       overlay.addEventListener("click", function(event) { // что мы делаем при нажатии на поле Оверлей вне формы
           event.preventDefault();   
           popup.classList.remove("modal-content-show");  // прячем окно формы 
           overlay.classList.remove("modal-overlay-show"); // прячем оверлей
        });
        
        form.addEventListener("submit", function() { // отправка формы
            event.preventDefault();    
            console.log("Отправляем форму");
            console.log(login.value); // вывод в консоли значения поля
            console.log(password.value);
            
            if (!login.value || !password.value) { // если логин и пароль не введен
            event.preventDefault();  
            console.log("Нужно ввести логин и пароль");        }
            else {
                localStorage.setItem("login", login.value); // а иначе сохранили логин
            }
        });
        
        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) // если нажата клавиша Esc (идентификатор 27)
                { 
                popup.classList.remove("modal-content-show");  // прячем окно формы   
            } 
        });     
           
    
           // ВСПЛЫВАЮЩАЯ КАРТА

        var map = document.querySelector(".js-open-map");
        var popup1 = document.querySelector(".google-map");
        

        map.addEventListener("click", function(event) { // что мы делаем при нажатии на "Вход"
            event.preventDefault(); /* ВСЕГДА отменять действие по умолчанию */ 
            popup1.classList.add("modal-content-show"); // вызов окна формы     
            overlay.classList.add("modal-overlay-show"); // вызов оверлея            
                });   


        overlay.addEventListener("click", function(event) { // что мы делаем при нажатии на поле Оверлей вне формы
            event.preventDefault();   
            popup1.classList.remove("modal-content-show");  // прячем окно формы 
            overlay.classList.remove("modal-overlay-show"); // прячем оверлей
                });

        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) // если нажата клавиша Esc (идентификатор 27)
            { popup1.classList.remove("modal-content-show");  // прячем окно формы  
              overlay.classList.remove("modal-overlay-show"); }// прячем оверлей
               });  

 // ВСПЛЫВАЮЩАЯ ФОРМА ОБРАТНОЙ СВЯЗИ
        
       
        var feedback = document.querySelector(".js-open-feedback");
        var popup2 = document.querySelector(".modal-content-feedback");
        var close2 = popup2.querySelector(".modal-content-close");

        feedback.addEventListener("click", function(event) { // что мы делаем при нажатии на "Вход"
            event.preventDefault(); /* ВСЕГДА отменять действие по умолчанию */ 
            popup2.classList.add("modal-content-show"); // вызов окна формы     
            overlay.classList.add("modal-overlay-show"); // вызов оверлея            
                });   


        overlay.addEventListener("click", function(event) { // что мы делаем при нажатии на поле Оверлей вне формы
            event.preventDefault();   
            popup2.classList.remove("modal-content-show");  // прячем окно формы 
            overlay.classList.remove("modal-overlay-show"); // прячем оверлей
                });

        close2.addEventListener("click", function(event) { // что мы делаем при нажатии крестика внутри формы
            event.preventDefault();   
            popup2.classList.remove("modal-content-show");  // прячем окно формы 
            
            overlay.classList.remove("modal-overlay-show"); // прячем оверлей
        });

        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) // если нажата клавиша Esc (идентификатор 27)
            { popup2.classList.remove("modal-content-show");  // прячем окно формы  
              overlay.classList.remove("modal-overlay-show"); }// прячем оверлей
               });   
