let popup = document.getElementById("popup");

        function openPopup(){
            popup.classList.add("open-popup");
            document.getElementById('form').reset();

        }
        function closePopup(){
            
            popup.classList.remove("open-popup");
        }
        
        // function clearInputField() {
        //     document.getElementById('form').reset();
        // }