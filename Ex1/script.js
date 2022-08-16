
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
// });
//--------------------------------------------
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
// });
//----------------------------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
// });
//----------------------------------------------

// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     })
// })

//-------------------------------------------
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });

//--------------------element select--------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//     });
// });

//------------------ID method------------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#test").hide();
//     });
// });

//-------------------class method------------------------------------

// $(document).ready(function(){
// $("button").click(function(){
// $(".test").hide();
// });
// });

//-----------------------Doble click method---------------------------

// $(document).ready(function(){
//     $("p").dblclick(function(){
//         $(this).hide();
//     });
// });

//------------Mouseenter------------------

// $(document).ready(function(){
//     $("#p2").mouseenter(function(){
//         alert("you enter para 2");
//     });
// });

//---------------Mouseleave---------------

// $(document).ready(function(){
//     $("#p2").mouseleave(function(){
//         alert("see the alert mesg after mouse leave the content");
//     });
// });
//-------------------hover-----------------------
// $(document).ready(function(){
//     $("#p2").hover(function(){
//         alert("hover my para");
//     },
//     function(){
// alert("bye");
//     });
// });
//----------------focus & blur--------

// $(document).ready(function(){
//     $("input").focus(function(){
//         $(this).css("background-color","green");
//     });
//     $("input").blur(function(){
//         $(this).css("background-color","yellow");
//     });
// });

//------------------on method------------------

// $(document).ready(function(){
//     $("p").on("click",function(){
//         $(this).hide();
//     });
// });

//------------------multipe events--------------------------

// $(document).ready(function(){
//     $("p").on({
//         mouseenter:function(){
//             $(this).css("background-color","yellow");
//         },
//         mouseleave:function(){
//             $(this).css("background-color","green");
//         },
//         click:function(){
//             $(this).css("background-color","blue");
//         }
//     });
// });

//-----------------------------------------------------

// $(document).ready(function(){
//     $("p").on({
//         mouseenter:function(){
//             $(this).css("background-color","red");
//         },
//         mouseleave:function(){
//             $(this).css("background-color","pink");
//         },
//         click:function(){
//             $(this).css("background-color","blue");
//         }
//     });
// });

//------------------------hide and show------------------------------

// $(document).ready(function(){
//         $("#hide").click(function(){
//         $("p").hide();
//     });
//         $("#show").click(function(){
//         $("p").show();
//     });
// });

//----------------hide and showing slow movement------------------------

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide(1000);
//     });
//     $("#show").click(function(){
//         $("p").show(1000);
//     });
// });

//--------------------toggle------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle();
//     });
// });

//---------------------fadein()----------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeIn();
//         $("#div2").fadeIn("slow");
//         $("#div3").fadeIn("3000");
//     });
// });

//-----------------fadeOut------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeOut();
//         $("#div2").fadeOut("slow");
//         $("#div3").fadeOut("3000");
//     });
// });

//--------------Fade- toggle---------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeToggle();
//         $("#div2").fadeToggle("slow");
//         $("#div3").fadeToggle("3000");
//     });
// });

//------------fadeTo-----------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeTo("slow",0.15);
//         $("#div2").fadeTo("slow",0.7);
//         $("#div3").fadeTo("3000",0.4);
//     });
// });

//----------------slideDown----------------------

// $(document).ready(function(){
//     $("#flip").click(function(){
//         $("#panel").slideDown("slow");
//     });
// });

//-------------slideUp-------------

// $(document).ready(function(){
//     $("#flip").click(function(){
//         $("#panel").slideUp("slow");
//     });
// });

//------------slideToggle----------

// $(document).ready(function(){
//     $("#flip").click(function(){
//         $("#panel").slideToggle("slow");
//     });
// });

//-------Animation----------------
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({left:"500px"});
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({left:"500px"});
//     });
// });

//----------multiple animation----

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({left:"400px",opacity:"0.5",width:"150px",height:"150px"})
//     });
// });

//-----------one more------
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({left:"250px",width:"+=150px",height:"+=150px"});
//     });
// });

//----------animate-toggle--------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({
//             height:"toggle"
//         });
//     });
// });

//----------mutiple animated function-----

// $(document).ready(function(){
//     $("button").click(function(){

//         let div = $("div");
//        div.animate({height:"300px",opacity:"0.4"},"slow");
//        div.animate({width:"300px",opacity:"0.8"},"slow");
//        div.animate({height:"100px",opacity:"0.4"},"slow");
//        div.animate({width:"100px",opacity:"0.8"},"slow")
//     });
// });

//------------animate with font size------

// $(document).ready(function(){
//     $("button").click(function(){
//         let div = $("div");
//         div.animate({height:"250px",width:"250px",left:"200px"},"slow");
//         div.animate({fontSize:"40px"},"slow");
//     });
// });

//------------Animation stop method-------

// $(document).ready(function(){
//     $("#flip").click(function(){
//         $("#panel").slideDown(5000);
//     })
//     $("#stop").click(function(){
//         $("#panel").stop();
//     });
// });

//------------callback function------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").hide("slow",function(){
//             alert("this para hidden");
//         });
//     });
// });

//----chining function------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").css({color:"red"}).slideUp(2000).slideDown(2000);
//     });
// });

//---------get function-------

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         alert("text: "+$("#test").text());
//     })
//     $("#btn2").click(function(){
//         alert("html: "+$("#test").html());
//     });
// });

//-----------href attribute------

// $(document).ready(function(){
//     $("button").click(function(){
//         alert("value: "+$("#w3s").attr("href"));
//     });
// });

//---------set value------

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("#test1").text("first text para");
//     });
//     $("#btn2").click(function(){
//         $("#test2").html("this is html set");
//     });
//     $("#btn3").click(function(){
//         $("#input").val("Aravindhan");
//     });
// });

//--------set value : 2----

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("#test1").text(function(i,origText){
//             return "Old text: "+origText+ " new text: hello world(index: '+i+')";
//         });
//     });
//     $("#btn2").click(function(){
//         $("#test2").html(function(i,origText){
//             return "Old html: "+origText+" new html: <b>hello world</b>(index: '+i+')";
//         });
//     });
// });

//---------append---------

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("p").append(" <b>This is added</b>");
//     });
//     $("#btn2").click(function(){
//         $("ol").append("<li>Akaran</li>");
//     });
// });

//------prepand-----

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("p").prepend("<b>This is added</b> ");
//     });
//     $("#btn2").click(function(){
//         $("ol").prepend("<li>Akaran</li>");
//     });
// });

//------------after and before--------

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("img").before("hello");
//     });
//     $("#btn2").click(function(){
//         $("img").after("world");
//     });
// });

//-----------remove------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").remove();
//     })
// })
//---------clear-----

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").empty();
//     })
// })

//-----------Ajax-----JQUERY----

// $(document).ready(function(){
// $("button").click(function(){
// $("#div1").load("demo.txt");
// });
// });

//--------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").load("demo.txt",function(responseTxt,statusTxt,xhr){
// if(statusTxt=="success")
//     alert("the new page loaded successfully");
// if(statusTxt=="error")
// alert("Error: "+ xhr.status+":"+xhr.statusTxt);
//         });
//     });
// });
//------------------------------------

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").load("demo.txt",function(responseTxt,statusTxt,xhr){
//             if(statusTxt=="success")
//             alert("page loaded successfully");
//             if(statusTxt=="error")
//             alert("Error: "+xhr.status+":"+xhr.statusTxt);
//         });
//     });
// });

//----------get method in jquery----

// $(document).ready(function(){
//     $("button").click(function(){
//         $get("demo.txt",function(data,status){
// alert("Data: "+ data + "\nStatus: "+status);
//         });
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//       $.get("demo_txt", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//       });
//     });
//    });

//----------post method in jquery------

// $(button).ready(function(){
//     $("button").click(function(){
//         $post("test.txt",
//         {
//             name:"Aravindhan",
//             city:"thanjai"
//         },function(data,status){
//             alert("Data: "+data+"/nStatus: "+status);

//         });
//     });
// });

//----------------Ex2-----------

// $(button).ready(function(){
//     $("button").click(function(){
//         $("post",{
//             name:aravindhan,
//             city:Thanjavur
//         },function(data,status){
// alert("Data: "+data+"/nStatus: "+status);
//         });
//     });
// });