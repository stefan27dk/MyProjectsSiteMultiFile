




// <!-- <script>
// async function fetchHtmlAsText() {
//     const response = await fetch('https://docs.google.com/document/d/1_tU_aLF1L0zpAJGmN5r2srb0tZT331HG2aNlyFeAUu4/edit?usp=sharing');
//     await response.text();
//     alert(response.text());
// } 
// </script> -->



// ============= ::Time--Counter:: =========================================================================================================
 
    var sec = 0;
    function pad(val) { return val > 9 ? val : "0" + val; } // Shows 0 before the number from 0 to 9 (00:00:01, 00:00:02, 00:00:03 ...)
    setInterval(function () {
        document.getElementById("visitTime_seconds").innerHTML = pad(++sec % 60); // Sec - max 60
        document.getElementById("visitTime_minutes").innerHTML = pad(parseInt((sec / 60) % 60)); // Min - max 60
        document.getElementById("visitTime_hours").innerHTML = pad(parseInt(((sec / 60) / 60 % 60) % 24)); // Hour - max 24
    }, 1000); // 1000 = 1 sec
 







// ============= ::Change Title:: =========================================================================================================
    function update_Window_Title(new_title) {
        document.getElementById('Window_Title').innerText = new_title;
    }
 



 












// ============= ::LOAD Projects:: =========================================================================================================
    function load_Projects()
    {
       let cv = document.getElementById('my_cv');
       let elements = document.getElementById('projects_holder');
       elements.style.zIndex='100';
       elements.opacity = '1';
       document.getElementById('content_Elements_Holder').style.overflowY='auto';

        if(cv != null)
        {
            cv.style.zIndex="-1";
            cv.style.opacity = '0';
        }
    }




 




// ============= ::LOAD CV:: =========================================================================================================
    function load_CV() {

        let cv = document.getElementById('my_cv');
        let elements = document.getElementById('projects_holder');
        elements.style.zIndex = '-1';
        elements.opacity = '0';
        document.getElementById('content_Elements_Holder').style.overflowY='hidden';


        if(cv == null)
        {
            document.getElementById('content').innerHTML += `<h2 id="loading" class="cv_loading">Loading...</h2> `;
            document.getElementById('content_Elements_Holder').innerHTML += `<iframe id="my_cv" onload="remove_Loading_info()"  class="cv_iframe" src="https://docs.google.com/document/d/1_tU_aLF1L0zpAJGmN5r2srb0tZT331HG2aNlyFeAUu4/edit?usp=sharing"></iframe>`;
        }
        else
        {
            cv.style.zIndex="100";
            cv.style.opacity = '1';
        }
    }






// ============= ::Remove Loading:: =========================================================================================================
function remove_Loading_info() {
    document.getElementById('loading').remove();
}





// ============= ::Show --- IMG Overlay Window:: =========================================================================================================
    function ViewImage(imgName) {
        document.getElementById("overlayWindow").style.display = 'block'; // Show overlayWindow
        document.getElementById('overlayImg').src = window[imgName]; // Static img Tag
    }




 

 