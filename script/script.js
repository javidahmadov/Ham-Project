let tabs = document.querySelectorAll('[data-tab-target]');
let tabsContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabsContents.forEach(tabContent => {
             tabContent.classList.remove
            ('active')
        })
        tabs.forEach(tab => {
             tab.classList.remove
            ('active')
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
})

function clckTab(evt, tabId) {
    let tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("work-imgs");
    
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      
    }
    
    tablinks = document.getElementsByClassName("w-tabs-title");
    for ( i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "flex";
    evt.currentTarget.className += " active";
    
  }
  document.getElementById("defaultOpen").click();
  
  $(document).ready(function(){
    $(".all-imgs").slice(0, 8).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".all-imgs:hidden").slice(0, 12).slideDown();
      
           $("#loadMore").style.display("none")

    });
    
  })
 
