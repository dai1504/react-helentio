

document.addEventListener("DOMContentLoaded", function () {
    // Đợi jQuery sẵn sàng
    function waitForJQuery(callback) {
      if (typeof window.$ !== "undefined") {
        callback();
      } else {
        setTimeout(() => waitForJQuery(callback), 50);
      }
    }
  
    waitForJQuery(() => {
      console.log("jQuery is ready!");
      $(document).ready(function() {
		
        console.log('a')
    
        var heightHeight = $('.site-header').height();
    
        $('.no-banner').css('margin-top', heightHeight)
        // var header = $('.site-header').height()
        $(".space-top").css("padding-top", $(".site-header").height());
        
        if ($(window).width() < 992) {
            // var header = $('.site-header').height()
        // console.log(header)
            $(".product-content").stick_in_parent({
                offset_top: heightHeight
            });
            $(".box-title").stick_in_parent({
                offset_top: heightHeight,
                parent: $(".detail-product-container")
                // bottoming: false
            });
        } else {
            $(".product-content").stick_in_parent({
                offset_top: heightHeight,
                // inner_scrolling: false
            });
            $(".box-title").stick_in_parent({
                offset_top: heightHeight,
                parent: $(".detail-product-container"),
                // bottoming: false
                // inner_scrolling: false
               
                
            });
        }
    
        // 
    })
    });
  });
  