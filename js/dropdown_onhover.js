/* **** DROPDOWN MENU **** */
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

//ICT COURSE
let ict_course = $('#featured-training-courses > div > div > div:nth-child(1)');
$(ict_course).mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('activeClass');
});
$(ict_course).mouseleave(function(e) {
    e.preventDefault();
    $(this).removeClass('activeClass')
});

/* **** FEATURED COURSES SECTION **** */

//DATABASE COURSE
let dbmgt_course = $('#featured-training-courses > div > div > div:nth-child(2)');
$(dbmgt_course).mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('activeClass');
});
$(dbmgt_course).mouseleave(function(e) {
    e.preventDefault();
    $(this).removeClass('activeClass')
});

// HARDWARE COURSE
let hardware_course = $('#featured-training-courses > div > div > div:nth-child(3)');
$(hardware_course).mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('activeClass');
});
$(hardware_course).mouseleave(function(e) {
    e.preventDefault();
    $(this).removeClass('activeClass')
});


//WEB DEV COURSE
let web_dev_course = $('#featured-training-courses > div > div > div:nth-child(4)');
$(web_dev_course).mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('activeClass');
});
$(web_dev_course).mouseleave(function(e) {
    e.preventDefault();
    $(this).removeClass('activeClass')
});

//COMPUTER NETWORKING
let com_net_course = $('#featured-training-courses > div > div > div:nth-child(5)');
$(com_net_course).mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('activeClass');
});
$(com_net_course).mouseleave(function(e) {
    e.preventDefault();
    $(this).removeClass('activeClass')
});

//GRAPHICS & DESIGN COURSE
let graphics_course = $('#featured-training-courses > div > div > div:nth-child(6)');
$(graphics_course).mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('activeClass');
});
$(graphics_course).mouseleave(function(e) {
    e.preventDefault();
    $(this).removeClass('activeClass')
});