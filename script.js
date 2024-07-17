// console.log("hello world ");

const Num = document.getElementById('Number');
const Len = document.getElementById('Lenght');
const tableNUmber = document.getElementById('tableNUmber');




// console.log(Num);
// console.log(Len);


function start(pera1) {
    console.log(pera1);

    if (!Num.value) {
        alert("Please Enter Number of Value !");
        return;
    } else if (!Len.value) {
        alert('Please Enter lenght of table !');
        return;
    } else {
        let defineValue = Num.value;
        tableNUmber.innerHTML = defineValue;

        let tableNumber = document.getElementById('tableNumber');
        let counter = document.getElementById('counter');
        let result = document.getElementById('result');
        let tableOfID = document.getElementById('tableOfID');
        tableOfID.className = "numberOfTable show"
        
        // let numb = document.createElement("span");
        // let cont = document.createElement("span");
        // let res = document.createElement("span");
        // let zarab = document.createElement("span");
        // let brabar = document.createElement("span");

 
        // numb.innerHTML = defineValue;
        // cont.innerHTML += i;
        // res.innerHTML = defineValue*Len.value;
        // zarab.innerHTML = "x";
        // brabar.innerHTML = "=";

        // tableLine.appendChild(numb);
        // tableLine.appendChild(zarab);
        // tableLine.appendChild(cont);
        // tableLine.appendChild(brabar);
        // tableLine.appendChild(res);
      
        const parent = document.getElementById("parent")
        const tableLine = document.getElementById('tableLine');
        
        for (i = 1; i <= Len.value; i++) {

            // console.log(defineValue+" x "+i+" = "+defineValue*i);
            // console.log(defineValue+" x "+i+" = "+defineValue*i);
           
            
            // var sabKeySab = tableNUmber +" x "+i+" = "+result+"<br />";
            // document.write(sabKeySab)
            // parent.appendChild(sabKeySab);
            
            
            // tableLine.appandChilde()
            // tableLine.appandChilde(result.innerHTML = defineValue*Len.value)
            // tableLine.appandChilde(result.innerHTML = counter.innerHTML = i)
            
            // parent.appendChild(tableLine);
            
            
            // h1.appendChild(tableNumber.innerHTML = defineValue);
            // h1.appendChild(result.innerHTML = defineValue*Len.value);
            
            // const chw = document.getElementById("child")



            var h1 = document.createElement("h1");
            h1.innerHTML =  defineValue+"  x  "+i+"  =  "+defineValue*i;
            parent.appendChild(h1);

          
        }

    }


}


