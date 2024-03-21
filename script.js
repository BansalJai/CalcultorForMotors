document.addEventListener("DOMContentLoaded",function()
{

    document.getElementById("torquecalc").addEventListener("click",function()
    {
        let p = parseFloat(document.getElementById("power").value);
        let s = parseFloat(document.getElementById("speed").value);
        let torque = (9550*(p))/s;
        let div= document.createElement("div");
        div.id="hello";
        div.innerHTML=
        `
        <div style="display:flex; align-items:center;">
        <b id="textans" style="font-size: 20px;">${torque}</b>
        <span>Nm</span>
        </div>
        `;
        document.getElementById("ans").replaceChildren(div);
        document.getElementById("copy1").addEventListener("click", function() {
            try {
                // Attempt to copy the selected value to the clipboard using the Clipboard API
                navigator.clipboard.writeText(torque.toFixed(2));

            } catch (err) {
                // If an error occurs, fallback to informing the user to copy manually
                alert("Unable to copy value to clipboard. Please copy manually: " + torque.toFixed(2));
            }
        });
    })
    document.getElementById("acctorque").addEventListener("click",function()
    {
        let motor = parseFloat(document.getElementById("motor").value);
        let machine= parseFloat(document.getElementById("machine").value);
        let load= parseFloat(document.getElementById("load").value);
        let w1 = parseFloat(document.getElementById("omega1").value);
        let t1= parseFloat(document.getElementById("time1").value);
        let w2= parseFloat(document.getElementById("omega2").value);
        let t2= parseFloat(document.getElementById("time2").value);
        let acctorque = (motor+machine+load)*((w1-w2)/(t1-t2)) ;
        let div= document.createElement("div");
        div.id="hello";
        div.innerHTML=
        `
        <div style="display:flex; align-items:center;">
        <b id="textans" style="font-size: 20px;">${acctorque}</b>
        <span>Nm</span>
        </div>
        `;
        document.getElementById("ans").replaceChildren(div);
        document.getElementById("copy2").addEventListener("click", function() {
            try {
                // Attempt to copy the selected value to the clipboard using the Clipboard API
                navigator.clipboard.writeText(acctorque.toFixed(2));
                // alert("Value copied to clipboard: " + acctorque.toFixed(2));
            } catch (err) {
                // If an error occurs, fallback to informing the user to copy manually
                alert("Unable to copy value to clipboard. Please copy manually: " + acctorque.toFixed(2));
            }
        });
    })
    document.getElementById("converterRad").addEventListener("click",function()
    {
        let s = parseFloat(document.getElementById("rpmconverter").value);
        // let s = parseFloat(document.getElementById("speed").value);
        let converted = s*(0.10471975511965977461542144610932);
        let div= document.createElement("div");
        div.id="hello";
        div.innerHTML=
        `
        <div style="display:flex; align-items:center;">
        <b id="textans" style="font-size: 20px;">${converted}</b>
        <span>rad/s</span>
        </div>
        `;
        document.getElementById("ans").replaceChildren(div);
        document.getElementById("copy3").addEventListener("click", function() {
            try {
                // Attempt to copy the selected value to the clipboard using the Clipboard API
                navigator.clipboard.writeText(converted.toFixed(2));
                // alert("Value copied to clipboard: " + converted.toFixed(2));
            } catch (err) {
                // If an error occurs, fallback to informing the user to copy manually
                alert("Unable to copy value to clipboard. Please copy manually: " + converted.toFixed(2));
            }
        });
    })
    document.getElementById("converterMs").addEventListener("click",function()
    {
        let s = parseFloat(document.getElementById("rpmconverter2").value);
        let r = parseFloat(document.getElementById("radius").value);
        
        // let s = parseFloat(document.getElementById("speed").value);
        let converted = s*(0.10471975511965977461542144610932)*r;
        let div= document.createElement("div");
        div.id="hello";
        div.innerHTML=
        `
        <div style="display:flex; align-items:center;">
        <b id="textans" style="font-size: 20px;">${converted}</b>
        <span>m/s</span>
        </div>
        `;
        document.getElementById("ans").replaceChildren(div);
        document.getElementById("copy4").addEventListener("click", function() {
            try {
                // Attempt to copy the selected value to the clipboard using the Clipboard API
                navigator.clipboard.writeText(converted.toFixed(2));
                // alert("Value copied to clipboard: " + converted.toFixed(2));
            } catch (err) {
                // If an error occurs, fallback to informing the user to copy manually
                alert("Unable to copy value to clipboard. Please copy manually: " + converted.toFixed(2));
            }
        });



    })
    document.getElementById("clear1").addEventListener("click",function()
    {
        document.getElementById("power").value="";
        document.getElementById("speed").value="";
        document.getElementById("hello").textContent="";
    })
    document.getElementById("clear2").addEventListener("click",function()
    {

        document.getElementById("motor").value="";
        document.getElementById("machine").value="";
        document.getElementById("load").value="";
        document.getElementById("omega1").value="";
        document.getElementById("omega2").value="";
        document.getElementById("time1").value="";
        document.getElementById("time2").value="";
        document.getElementById("hello").textContent="";
    })
    document.getElementById("clear3").addEventListener("click",function()
    {

        document.getElementById("rpmconverter").value="";
        document.getElementById("hello").textContent="";
    })
    document.getElementById("clear4").addEventListener("click",function()
    {

        document.getElementById("rpmconverter2").value="";
        document.getElementById("radius").value="";
        document.getElementById("hello").textContent="";
    })
    document.getElementById("allclear").addEventListener("click",function()
    {
        document.getElementById("rpmconverter2").value="";
        document.getElementById("radius").value="";
        document.getElementById("rpmconverter").value="";
        document.getElementById("motor").value="";
        document.getElementById("machine").value="";
        document.getElementById("load").value="";
        document.getElementById("omega1").value="";
        document.getElementById("omega2").value="";
        document.getElementById("time1").value="";
        document.getElementById("time2").value="";
        document.getElementById("power").value="";
        document.getElementById("speed").value="";
        document.getElementById("hello").textContent="";
    })
    
    
    
})

// window.addEventListener('resize', function() {
//     if (window.innerWidth <= 500) {
//         var ansElements = document.querySelectorAll('.ans');
//         ansElements.forEach(function(ansElement) {
//             ansElement.style.height = '10%';
//             ansElement.style.width = '20%';

//             var helloChild = ansElement.querySelector('#hello');
//             if (helloChild) {
//                 helloChild.style.height = '100%';
//                 helloChild.style.width = '100%';
//             }
//         });
//     }
// });
