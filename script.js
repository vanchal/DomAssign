const txt1 = document.getElementById('item');
        const btn1 = document.getElementById('button');
        const out1 = document.getElementById('ullist');
        var id = 0;

        function additem(){
            var x = document.createElement("LI");
            x.setAttribute("id",String(id));
            id++;
            x.setAttribute("class","listitems");
            x.innerHTML = txt1.value;
            out1.appendChild(x);
        }

        function delitem(e){
            if(e.target.classList.contains('listitems')){
                var y = e.target.getAttribute("id");
                const ele = document.getElementById(y);
                ele.parentNode.removeChild(ele);
              
            }
        }

        btn1.addEventListener('click',additem);
        out1.addEventListener('click',delitem);