
var customStyleLink = "https://docs.google.com/forms/d/e/1FAIpQLSeaauh5eZwcYJzZA3eqBTGE0GpoYpmKGge6nTeaQMdnfXrnUg/viewform?usp=sf_link";
var toggleSpeed = 300;

function disableContainer(x) {
    $("#container").fadeTo(500,0,function() {
        $(this).css("display","none");
        $(x).css("display","block");
        $(x).fadeTo(0,0);
        $(x).fadeTo(500,1,function() {
          switch(x) {
            case "#plainportfolio":
              $("body").css("background","white");
              $("body").css("font-family","Arial");
              $("body").css("color","black");
              $("title").html("Plain Online Portfolio");
            break;
            case "#modernportfolio":
              $("title").html("Modern Online Portfolio");
              $("body").css("font-family","Dubai Light");
              $("body").css("background-image","url('images/3d-futuristic-illustration-with-flowing-cyber-dots.jpg')");
              $("body").css("background-position","center");
              $("body").css("background-attachment","fixed");
              $("body").css("background-size","cover");
            break;
            case "#classicportfolio":
              $("title").html("Classic Online Portfolio");
              $("body").css("background","rgb(228, 228, 228)");
              $("body").css("background-image","url('images/modern-business-building-with-glass-wall-from-empty-floor_1127-3091.jpg')");
              $("body").css("background-position","center");
              $("body").css("background-attachment","fixed");
              $("body").css("background-size","cover");
              $("body").css("font-family","Segoe UI");
            break;
          }
        });
    });
}

$("document").ready(() => {
  $("#container").css("display","block");
  alert("Referesh this webpage to choose another style");
  $("#plainstyle").click(function() {
    disableContainer("#plainportfolio");
  });
  $("#modernstyle").click(function() {
    disableContainer("#modernportfolio");
  });
  $("#classicstyle").click(function() {
    disableContainer("#classicportfolio");
  });
  $("#customstyle, .inquire-buttons").click(function() {
    window.location.href = customStyleLink;
  })

  $('.parent').click(function() {
    $(this).find('.child').toggle(toggleSpeed);
  });

  $("#c_mobilemenu").click(function() {
    $("#c_menu").css("left","0px");
  });
  $("#c_leftarrrow").click(function() {
    $("#c_menu").css("left","-1000px");
  });

  if ($(window).width() > 768) {
    $(".m_expand3").click(function() {
      $(this).css("grid-column", $(this).css("grid-column") == "span 3" ? "span 1" : "span 3");
    });


    $("#m_aboutme").click(function() {
      $("#m_skills, #m_education").toggle();
    });
    $("#m_skills").click(function() {
      $("#m_aboutme, #m_education").toggle();
    });
    $("#m_education").click(function() {
      $("#m_aboutme, #m_skills").toggle();
    });


    $("#m_service").click(function() {
      $("#m_achievements, #m_testimonials").toggle();
    });
    $("#m_achievements").click(function() {
      $("#m_service, #m_testimonials").toggle();
    });
    $("#m_testimonials").click(function() {
      $("#m_service, #m_achievements").toggle();
    });
  }
});