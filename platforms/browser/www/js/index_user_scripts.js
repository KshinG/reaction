(function() {
    "use strict";
    /*
      hook up event handlers 
    */
    function register_event_handlers() {



        $(document).on("click", ".uib_w_6", function(evt) { // Home/Restart in Footer
            try{navigator.camera.cleanup(onSuccess, onFail);}catch(err){}
            var that = document.getElementById("largeImage");
            $(that).attr("src", "");
            that.style.webkitTransform = "";
            that.style.minWidth = "320px";
            $(that).addClass("maxW");
            $(that).addClass("vertical-col.center");
            $("#navbar").hide();
            //hammertime.off("");
            //hammertime = "";
            $(".uib_w_5").addClass("yellow").removeClass("disabled");
            activate_subpage("#mainsub");
            sizeIt();
             $(".uib_w_6").html('<div class="smaller">Restart/Delete</div>');
            $(".mt4").fadeIn();
        });
        
        $(document).on("click", ".uib_w_8", function(evt) { // Skip Scenario
            $("#scenarios span").fadeOut(200);
            setTimeout(function(){
                lastscenario = scenario;
                scenario = scenarios[randomInt(0, scenarios.length)];
                $("#scenarios span").text(scenario);
                $("#scenarios span").textfill(30);
                $("#scenarios span").fadeIn(200);
                $("#scenarios span").css("-webkit-animation", "glow .5s 2 alternate");
                setTimeout(function() {
                    $("#scenarios span").css("-webkit-animation", "");
                }, 400);
            }, 400);
        });
        
        
        $(document).on("click", "#uploadphotospid", function(evt) { // Upload Pic button
            //alert(JSON.stringify(evt.currentTarget.dataset));
            //console.log(evt);
            if(!localStorage.uploadphotosPurchased || localStorage.uploadphotosPurchased == 0){
            var popup = $.ui.popup({
                onShow: function(){
                    /*$("#uploadPopup").animate({ opacity: 1 }, {
                                    step: function(now,fx) {
                                        $(this).css('top',((window.innerHeight / 2.2) - ($("#uploadPopup").css("height").replace("px","") / 2))*fx.pos + "px");
                                    },
                                    duration: 1
                                },'linear');
                                */
                    $("#uploadPopup").css("visibility", "visible");
                    popup.positionPopup(1);
                    $(".afPopup").css("webkitTransition", "all .2s ease-in-out");
                },
                id: "uploadPopup",
                title: "Upload Reactions",
                message: '<div class="wcenter"><div id="pdescription" class="bold height50 padb">Would you like to be able to Upload Reactions from your photos in addition to Reacting in real time?<div><br>Purchase now for just '+evt.currentTarget.dataset.price+'.</div></div></div>',
                cancelText: "Close",
                cancelCallback: function() {/*if($("#action").text() == "Purchase"){localStorage.uploadphotosPurchased = 0; setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, 
                message:"<br>Upload Refunded!"});}, 500);}*/},
                doneText: "Purchase",
                doneCallback: function(){if($("#action").text() == "Purchase"){ try{store.order(evt.currentTarget.dataset.pid); /*console.log("trying"); console.log(store);*/}catch(err){unableToPurchase(); /*localStorage.uploadphotosPurchased = 1; setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, message:"<br>Upload Photos Purchased!"});}, 500);*/}}},
                cancelOnly: false
            });
                $("#uploadPopup").css({top: 1200, opacity: 0}); 
                    $("#action").addClass("yellow");
                    $("#uploadPopup header").addClass("yellow");
                    $(".afPopup").css("webkitTransition", "none");
                    
                
            }else{
            navigator.camera.getPicture(onPhotoURISuccess, onFail, {
                quality: 80, // allowEdit: true,
                destinationType: destinationType.FILE_URI,
                correctOrientation: true,
                saveToPhotoAlbum: false,
                targetWidth: 487,
                targetHeight: 487,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                popoverOptions: new CameraPopoverOptions(352, 800, 60, 60, Camera.PopoverArrowDirection.ARROW_DOWN)
            });
            }
        });
        // Reposition the popover if the orientation changes.
         window.onorientationchange = function() {
             var cameraPopoverOptions = new CameraPopoverOptions(352, 544, 60, 60, Camera.PopoverArrowDirection.ARROW_ANY);
             cameraPopoverHandle.setPosition(cameraPopoverOptions);
         };

        $(document).on("click", ".uib_w_4", function(evt) { // Share button
            logIt(scenario);
            var pic = $("#largeImage").attr("src");

            window.plugins.socialsharing.share(
                null, //scenario,
                null, //'reactionthegame'+Date.now()+'.jpg',
                pic,
                null
            );
        });

        $("#reactList").on("click", "li", function(evt) {
            scenario = evt.currentTarget.innerText;
            $("#scenarios").text(scenario);
            $("#scenarios").textfill(30);
            $("#scenarios").css("-webkit-animation", "glow .5s 2 alternate");
            setTimeout(function() {
                $("#scenarios").css("-webkit-animation", "");
            }, 600);
            setTimeout(function() {
                capturePhoto();
            }, 1000);
        });

        $(document).on("click", ".uib_w_5", function(evt) { // Post save to dreactionthegame.com
            if (!$(this).hasClass("disabled")) {
                postIt(scenario);
                $(".uib_w_5").addClass("disabled").removeClass("yellow");
            }
        });

        $(document).on("click", ".uib_w_18", function(evt) { // switch to ReactionTheGame_page
            $("#afui .header").css("margin-bottom", "26px");
            clearInterval(lazyscroll);
            lazyscroll = "";
            $.ui.loadContent(memesloaded,false,false,"flip");
            if(memesloaded === "reactionthegame_pagesub"){

            }else if(memesloaded === "reactionbest_pagesub"){$("#"+memesloaded+" .afScrollPanel").css("-webkit-transform", bestp); //lazyscroll = setInterval(function(){scrollLi("memeUlbest");}, 1500);
                                                            }else{$("#"+memesloaded+" .afScrollPanel").css("-webkit-transform", worstp);} //lazyscroll = setInterval(function(){scrollLi("memeUlworst");}, 1500);
            if (localStorage.scroly && localStorage.scroly == 1) {}else{
                
                setTimeout(function(){
                    var tops = $(".tops");
                var temp_value = tops.css("width");
            temp_value = temp_value.replace("px","");
            var temp_valueH = tops.css("height");
            temp_valueH = temp_valueH.replace("px","");
                tops.css("top", ((window.innerHeight / 2.0)) - (temp_valueH / 1.5) + "px");
                tops.css("left", (window.innerWidth / 2) - (temp_value / 2) + "px");
                    tops.show();}, 1000);
            }                                                            
            localStorage.scroly = 1;
        });
        
        $(document).on("click", ".tops", function(evt) {
            $(".tops").hide();
        });
        
        $(document).on("click", ".uib_w_401", function(evt) { // switch to ReactionBest_page
            //activate_subpage("#reactionbest_pagesub");
            $.ui.loadContent("reactionbest_pagesub",false,true,"slide");
            clearInterval(lazyscroll);
            lazyscroll = "";
            //lazyscroll = setInterval(function(){scrollLi("memeUlbest");}, 1500);
            setTimeout(function() {
                memeGet("best");
            }, 1);
        });
        
        $(document).on("click", ".uib_w_403", function(evt) { // switch to ReactionWorst_page
            //activate_subpage("#reactionworst_pagesub");
            $.ui.loadContent("reactionworst_pagesub",false,false,"slide");
            clearInterval(lazyscroll);
            lazyscroll = "";
            //lazyscroll = setInterval(function(){scrollLi("memeUlworst");}, 1500);
            setTimeout(function() {
                memeGet("worst");
            }, 1);
        });
        
        $(document).on("click", ".uib_w_69", function(evt) { // switch to ReactionTheGameMine_page
            //$("#afui .header").css("margin-bottom", "0px");
            try{
            latestp = $("#reactionthegame_pagesub .afScrollPanel").css("-webkit-transform");
            worstp = $("#reactiontworst_pagesub .afScrollPanel").css("-webkit-transform");
            bestp = $("#reactionbest_pagesub .afScrollPanel").css("-webkit-transform");}catch(err){}
            $.ui.loadContent("my_page",false,false,"flip");
            //console.log(latestp);
            clearInterval(lazyscroll);
            lazyscroll = "";
            //lazyscroll = setInterval(function(){scrollLi("memeUlmine");}, 1500);
            setTimeout(function(){sizeIt();}, 500);
        });
        
        $(document).on("click", ".uib_w_20", function(evt) { // switch to Settings
            
        });

        $(document).on("click", ".uib_w_19", function(evt) { //Home from REACTIONS
            //$("#afui .header").css("margin-bottom", "26px");
            if ($("#largeImage").attr("src") === "") {
                $("#navbar").hide();
            }
            if (lazyscroll) {
                clearInterval(lazyscroll);
                lazyscroll = "";
            }
        });
        $(document).on("click", ".uib_w_9", function(evt) { //Close Settings
            $.ui.loadContent("mainpage",false,false,"flip");
            if ($("#largeImage").attr("src") === "") {
                $("#navbar").hide();
            }
            if (lazyscroll) {
                clearInterval(lazyscroll);
                lazyscroll = "";
            }
        });

        $(document).on("click", ".uib_w_7", function(evt) {
            //hammerIt(document.getElementById("largeImage"));
            capturePhoto();
            //$("#mainsub").hide();
        });
        
         $(document).on("change", ".cswitch", function(evt) { // yes/no category switch
            //console.log(evt.target.dataset.index);
            if ($("#"+evt.target.id)[0].checked === true) {
                localStorage["flipswitch"+evt.target.dataset.index] = "1";
            } else {
                localStorage["flipswitch"+evt.target.dataset.index] = "0";
            }
            combineScenarios();
             //console.log(localStorage["flipswitch"+evt.target.dataset.index]);
        });
                    
        $(document).on("click", ".categorybadge", function(evt) { //console.log(evt);
            if($(evt.currentTarget).parent()[0].className === "wcenter"){
            //setTimeout(function(){
                //$("#categoryPopup").css3Animate({ top: ((window.innerHeight / 2.2)) - ($("#categoryPopup").css("height").replace("px","") / 2) + "px", time: "300ms", opacity: 1 });
                //$("#categoryPopup").animate({top: (window.innerHeight / 2.2) - ($("#categoryPopup").css("height").replace("px","") / 2) + "px", opacity: 1}, 1300, function(){console.log("done");});
            //}, 100);
            var popup = $.ui.popup({
                onShow: function(){
                    //$("#categoryPop").attr("data-transition", "up");
                   
                    //if(!pscroll){pscroll = 
                    $("#categoryPop").scroller({
                         verticalScroll:true,
                         horizontalScroll:false,
                         autoEnable:true});
                    //console.log($("#categoryPopup").css("height").replace("px",""));
                    //$("#categoryPopup").css3Animate({ top: ((window.innerHeight / 2.2)) - ($("#categoryPopup").css("height").replace("px","") / 2) + "px", time: "300ms", opacity: 1 });
                    //$("#categoryPopup").stop().animate({top: (window.innerHeight / 2.2) - ($("#categoryPopup").css("height").replace("px","") / 2) + "px", opacity: 1}, {queue:false, duration:0, easing: 'swing'}, function(){});
                   $(".afPopup").css("webkitTransition", "none");
                    $("#categoryPopup").css("visibility", "visible");
                    /*$("#categoryPopup").animate({ opacity: 1 }, {
                                    step: function(now,fx) {
                                        $(this).css('top',((window.innerHeight / 2.2) - ($("#categoryPopup").css("height").replace("px","") / 2))*fx.pos + "px");
                                        //console.log(fx.pos);
                                    },
                                    duration: 1
                                },'linear');
                    */
                    popup.positionPopup(1);
                    $(".afPopup").css("webkitTransition", "all .2s ease-in-out");
                },
                id: "categoryPopup",
                title: this.innerText,
                message: '<div class="wcenter"><div id="pdescription" class="bold height46 padb">Enjoy!</div><div id="categoryPop" js-scrolling="true" class="scrollme"><ul class="list inset"><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li><li>a</li>></ul></div></div>',
                cancelText: "Close",
                cancelCallback: function() {/*try{store.order(evt.currentTarget.dataset.pid);}catch(err){if($("#action").text() == "Purchase"){localStorage[allScenarios.categories[evt.currentTarget.dataset.index].shortname+"Purchased"] = 0; runCategories(); setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, message:"<br>"+allScenarios.categories[evt.currentTarget.dataset.index].category + " Refunded!"});}, 500);}}*/},
                doneText: "Purchase",
                doneCallback: function(){if($("#action").text() == "Purchase"){ try{store.order(evt.currentTarget.dataset.pid);}catch(err){unableToPurchase(); /* localStorage[allScenarios.categories[evt.currentTarget.dataset.index].shortname+"Purchased"] = 1; runCategories(); setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, message:"<br>"+allScenarios.categories[evt.currentTarget.dataset.index].category + " Purchased!"});}, 500);*/}}},
                cancelOnly: false
            });
             $("#categoryPopup").css({top: 1200, opacity: 0}); 
                    $("#categoryPop ul").html("");
                    $.each(allScenarios.categories[evt.currentTarget.dataset.index].scenarios, function(){
                        $("#categoryPop ul").append("<li>"+this+"</li>");
                    });
                    $("#categoryPopup header").html($(evt.currentTarget).clone());
                    $("#categoryPop").height($("#categoryPopup").height()-210+"px");
                    $("#action").addClass(evt.currentTarget.classList[2]+" cback");
                    if(evt.currentTarget.dataset.index <= 1){$("#pdescription").html("All of these are included.<br>Enjoy!"); $("#action").text("Included");}else{$("#pdescription").text("The first 15 are included. You can activate the rest for just "+evt.currentTarget.dataset.price+". Enjoy!");}
                    if(evt.currentTarget.dataset.owned == 1){$("#action").text("Owned");}
        }});

        
        $(document).on("click", ".uib_w_100", function(evt) { // vote up
            var vid,
                voted,
                vota,
                voty;
            if (!$(this).hasClass("disabled")) {
                if ($(this).closest("li").length >= 1){vid = $(this).closest("li")[0].id;}else{vid = $(this).parent().attr("data-mid");}
                vote("up", vid);
                voted = localStorage.votes;
                if(voted){
                    vota = JSON.parse(voted);
                    vota.push(vid);
                    voty = JSON.stringify(vota);
                    localStorage.votes = voty;
                }else{
                    voted = [vid]; localStorage.votes = JSON.stringify(voted);
                }
                $(this).addClass("disabled");
            }
        });
        
        $(document).on("click", ".uib_w_101", function(evt) { // vote down
            var vid,
                voted,
                vota,
                voty;
            if (!$(this).hasClass("disabled")) {
                if ($(this).closest("li").length >= 1){vid = $(this).closest("li")[0].id;}else{vid = $(this).parent().attr("data-mid");}
                vote("down", vid);
                voted = localStorage.votes;
                if(voted){
                    vota = JSON.parse(voted);
                    vota.push(vid);
                    voty = JSON.stringify(vota);
                localStorage.votes = voty;
                }else{
                    voted = [vid]; localStorage.votes = JSON.stringify(voted);
                }
                $(this).addClass("disabled");
            }
        });
        
        $(document).on("click", ".uib_w_102", function(evt) { // share other's memes
            var vid,
                pic;
            if ($(this).closest("li").length >= 1){vid = $(this).closest("li")[0].id;
                                                   if(vid.indexOf("my") >= 0){vid = vid.substr(2);}
                                                   if(vid.indexOf("best") >= 0){vid = vid.substr(4);}
                                                   if(vid.indexOf("worst") >= 0){vid = vid.substr(5);}
                                                  pic = $(this).closest("li").find("img").attr("src");
                                                  }else{
                                                  vid = $(this).parent().attr("data-mid");
                                                  pic = $("#zoomPic").attr("src");
                                                  }
            rid = vid;
            //console.log(pic);
            window.plugins.socialsharing.share(
                null, //scenario,
                null, //'reactionthegame'+Date.now()+'.jpg',
                pic,
                null,
                shareSuccess
            );
        });
        
        $(document).on("click", ".uib_w_103", function(evt) {
            var mid;
            if ($(this).parents("li").length >= 1){mid = $(this).parents("li")[0].id;
                                                  }else{
                                                   mid = $(this).parent().attr("data-mid");
                                                  }
            if(mid.indexOf("worst") >=0){mid = mid.substr(5);}else
            if(mid.indexOf("best") >=0){mid = mid.substr(4);}else
            if(mid.indexOf("my") >=0){mid = mid.substr(2);}
            var reportIt = function(data) {
                report(mid, $("#why option:selected").text(), $("#comments").val());
            };
            af(document.body).popup({
                id: "reportPopup",
                title: "Report Reaction",
                message: '<div id="reportMeme"><select id="why"><option>Nudity</option><option>Mean</option><option>Other</option></select><input type="text" id="comments" placeholder="additional comments"></div>',
                cancelText: "Cancel",
                cancelCallback: function() {},
                doneText: "Report",
                doneCallback: reportIt,
                cancelOnly: false
            });
        });

        $(document).on("click", ".uib_w_203", function(evt) { // delete
            var mid;
            //console.log($(this).parents("li"));
            if ($(this).parents("li").length >= 1){mid = $(this).parents("li")[0].id;
                                                   if (mid.indexOf("my") >= 0){mid = mid.substr(2);}
                                                  }else{
                                                  mid = $(this).parent().attr("data-mid");
                                                  }
            var deleteIt = function(data) {
                report(mid, "delete", "delete");
            };
            af(document.body).popup({
                id: "deletePopup",
                title: "Delete Reaction",
                message: 'Do you really want to delete this from here and the public listing?',
                cancelText: "Keep",
                cancelCallback: function() {},
                doneText: "Delete",
                doneCallback: deleteIt,
                cancelOnly: false
            });
        });

        $(document).on("click", ".piclist li img", function(evt) {
            //$=af;
            $("#memeview ul").append($(this).clone().attr( "id", "zoomPic" ));
            $.ui.showModal("#memeview","fade");
            $("#afui .header").css("margin-bottom", "0px");
            $("#modalHeader .header").css("margin-top", "0px");
            //$("#zoomLi").find("img").attr( "id", "zoomPic");
            sizeIt();
            hammerIt(document.getElementById("zoomPic"));
            var mid = $(this).closest("li")[0].id;
            if(mid.indexOf("my") >= 0){mid = mid.substr(2);}
            if(mid.indexOf("best") >= 0){mid = mid.substr(4);}
            if(mid.indexOf("worst") >= 0){mid = mid.substr(5);}
            $("#modalFooter").append($(this).closest("li").find(".maxW396").clone().attr("data-mid", mid));
            $("#modalFooter").show();
            var fheight = (($(window).height() - $("#header").height()) - $("#modalFooter").height());
            var pheight = $("#zoomPic").height();
            $("#zoomPic").css("margin-top", ((fheight-pheight)/2)-10 +"px");
        });
        
         $(document).on("click", "#modalHeader", function(evt) { // clear and hide modal
            //hammertime.off("");
            //hammertime = "";
            //if(hammerslideworst){hammerslideworst.off(""); hammerslideworst = "";}
            //if(hammerslidebest){hammerslidebest.off(""); hammerslidebest = "";}
            //if(hammerslidelatest){hammerslidelatest.off(""); hammerslidelatest = "";} 
            $("#modalContainer ul").html("");
            $("#modalFooter").html(""); 
            $.ui.hideModal();
            $("#afui .header").css("margin-bottom", "26px");
            // $ = jQuery;
         });
        
        $(document).on("touchend", ".tutMe", function(evt) {
            if($(".skip").is(":visible")){$(".arrow").hide(); $(".skip").fadeOut(); $(".botr").fadeIn(); if ($("#afui").attr("class").toLowerCase().indexOf("ios") >= 0) {$(".botrr").fadeIn();} }else
            if($(".botr").is(":visible")){$(".arrow").hide(); $(".botrr").fadeOut(); $(".topl").fadeIn(); setTimeout(function(){$(".arrow").show();}, 500);}else
            if($(".topl").is(":visible")){$(".arrow").hide(); $(".topl").fadeOut(); $(".topr").fadeIn(); setTimeout(function(){$(".arrow").show();}, 500);}else
            if($(".topr").is(":visible")){$(".arrow").hide(); $(".topr").fadeOut(); $(".tutMe").fadeOut(); /*setTimeout(function(){$(".arrow").show();}, 400);*/ localStorage.tut1 = "1"; /*setTimeout(function(){$(".topl").show();}, 1000);*/ if(!localStorage.loccheck){locCheck();}}
            
        });
        
        $(document).on("click", ".tutorialR", function(evt) {
            $(".tutMe").show(); 
            $(".skip").fadeIn();
            localStorage.scroly = 0;
        });
        $(document).on("click", ".agec", function(evt) {
            ageCheck(); 
        });
        
        $(document).on("click", ".scon", function(evt) { //console.log(evt);
            if(evt.currentTarget.id === "my_page_header"){$.ui.scrollingDivs["my_page"].scrollToTop(900); setTimeout(function(){scrollLi("my_page");}, 1000);}else{
            $.ui.scrollingDivs[memesloaded].scrollToTop(900); setTimeout(function(){scrollLi(memesloaded);}, 1000);}
        });

        $(document).on("click", ".login", function(evt) {
            if($(this).text() != "sign up" && this.id == "login"){
                $.ui.loadContent("my_settings",false,false,"flip");
            }else{
                $.ui.popup({
                    autoCloseDone: 0,
                    onShow: function(){/*if($("#afui").hasClass("android")){$("#loginPopup header").css("height", "76px");}*/ if($("#login span").text() != "sign up"){$( "#loginheader" ).trigger( "click" );} if(!localStorage.userid){$( "#loginPopup header" ).append( "<div class=\"smaller red center\" style=\"position: relative; top: 0px;\">The first 1000 people to sign up get everything for free, forever!</div>" );}else{$("#loginPopup header").css("height", "56px");}},
                    id: "loginPopup",
                    title: '<div id="loginheader" class="left button yellow">Log in</div><div id="signupheader" class="right button ">Sign up</div>',
                    message: '<div><form><input id="email" type="email" placeholder="email"><div id="emaila"></div><input id="password" type="password" placeholder="password"><input id="password2" type="password" placeholder="password again"><div id="passa2"></div><div><input id="inclpics" type="checkbox"><label for="inclpics">Associate My Reactions already taken with this device with this account?</label></div></form></div>',
                    cancelText: "Cancel",
                    cancelCallback: function() {},
                    doneText: "Sign up",
                    doneCallback: function() {if($("#action").hasClass("email")){ if (($("#action").hasClass("password") || $("#action").text() === "Log in") && $("#password").val().length >= 8){login(document.getElementById("email").value, document.getElementById("password").value, document.getElementById("inclpics").checked, document.getElementById("action").innerHTML); }else{document.getElementById("passa2").innerHTML = "<span class=\"red\"><small>password must be 8 or more characters, please try again</small></span>";}}else{document.getElementById("emaila").innerHTML = "<span class=\"red\"><small>email is required</small></span>";}},
                    cancelOnly: false
                });
            }
        });

        $(document).on("click", "#signupheader", function(evt) {
              $("#loginPopup header").html('<div id="loginheader" class="button left yellow">Log in</div><div id="signupheader" class="button right bold">Sign up</div>');
            $("#password2").show();
            $("#action").text("Sign up");
            $("#email").attr("placeholder", "email");
            $("#email").trigger("blur");
        });
        $(document).on("click", "#loginheader", function(evt) {
              $("#loginPopup header").html('<div id="loginheader" class="left button bold">Log in</div><div id="signupheader" class="right yellow button">Sign up</div>');
            $("#password2").hide();
            $("#action").text("Log in");
            $("#email").attr("placeholder", "email or username");
            $("#password2").trigger("input");
            $("#email").trigger("blur");
        });
        $(document).on("input", "#password2", function(evt) {
            if(this.value != ''){if(document.getElementById("password2").value.length <=7 ){document.getElementById('passa2').innerHTML='passwords must match and be longer than 8 characters';}else{checkPassword();}}else{document.getElementById('passa2').innerHTML='';}
        });
        $(document).on("input", "#email", function(evt) {
            if($(this).val().length >= 5){checkEmail(this);}else{document.getElementById("emaila").innerHTML = "";}
        });
        $(document).on("blur", "#email", function(evt) {
            if($(this).val().length >= 5){if($("#action").text() == "Log in"){ccheckUsername(this);}else{ccheckEmail(this);}}
        });
        $(document).on("blur", "#username", function(evt) {
            if($(this).val().length >= 5){ccheckUsername(this);}
        });
        
        $(document).on("click", "#newpass", function(evt) {
            newPassword(document.getElementById("email").value);
        });

        
        $(document).on("click", ".uib_w_113", function(evt) { // UNreport
            var mid;
            //console.log($(this).parents("li"));
            if ($(this).parents("li").length >= 1){mid = $(this).parents("li")[0].id;
                                                   if(mid.indexOf("my") >= 0){mid = mid.substr(2);}
                                                  }else{
                                                  mid = $(this).parent().attr("data-mid");
                                                  }
            var deleteIt = function(data) {
                report(mid, "unreport", "unreport");
            };
            af(document.body).popup({
                id: "unreportPopup",
                title: "UNreport Reaction",
                message: 'Do you really want to UNreport this?',
                cancelText: "Cancel",
                cancelCallback: function() {},
                doneText: "UNreport",
                doneCallback: deleteIt,
                cancelOnly: false
            });
        });
        
        
        window.addEventListener("resize", function(){sizeIt();}, false);
        document.addEventListener('focusout', function(e) {sizeIt();});
        document.addEventListener("backbutton", function(){$.ui.loadContent("mainpage",false,false,"flip");if ($("#largeImage").attr("src") === "") { $("#navbar").hide(); } if (lazyscroll) { clearInterval(lazyscroll); lazyscroll = ""; }}, true);
        document.addEventListener("menubutton", function(){$.ui.loadContent("settings_page",false,false,"flip");}, false);

        
    //hammerIt(document.getElementById("largeImage"));
        
    var latestp,
    bestp,
    worstp,
    hammerslidelatest,
    hammerslidebest,
    hammerslideworst;

    hammerslidelatest = new Hammer(document.getElementById("memeLlatest"), {});
    hammerslidelatest.on('panleft panright panend swipeleft swiperight', function(ev) {
        if (ev.deltaY >= 12 || ev.deltaY <= -12){ev.deltaX = 0;}
        //console.log(ev);
        if((ev.deltaX <= -12 || ev.deltaX >= 12) && ev.type != "swiperight" && ev.type != "swipeleft" && !timer){
        $(".hlatest").css("left", Math.max(Math.min((wwidth*0.35), ev.deltaX), -(wwidth*0.35)));
        $("#reactionthegame_pagesub").css("left", ev.deltaX);
        }

        if((((ev.deltaX <= -50 || ev.deltaX >= 50) && ev.type === "panend") || ev.type === "swiperight" || ev.type === "swipeleft") && !timer){

            timer = true; setTimeout(function(){timer = false;}, 800);
            scrollHeight = $("#memeLlatest").height();
            try{latestp = $("#reactionthegame_pagesub .afScrollPanel").css("-webkit-transform");}catch(err){}
            clearInterval(lazyscroll);
            lazyscroll = ""; 
            //hideLi($("#reactionthegame_pagesub"));
            
            if(ev.deltaX <= -50 || ev.type === "swipeleft"){ 
                    $.ui.loadContent("reactionworst_pagesub",false,false,"slide");
            }else{
                    $.ui.loadContent("reactionbest_pagesub",false,true,"slide");
            }

        }else if(ev.type === "panend" && ev.deltaX > -50 && ev.deltaX < 50 && ev.type != "swiperight" && ev.type != "swipeleft" && !timer){
             $(".hlatest").animate({left: "0px", opacity: 1}, 100);
             $(".hworst").css({right: "0px", opacity: .8});
             $(".hbest").css({left: "0px", opacity: .8});
             $("#reactionthegame_pagesub").animate({left: "0px"}, 100);
                                      }
    });
            
    $("#reactionthegame_pagesub").on("loadpanel", function(){
        setTimeout(function(){
        $(".hlatest").css({left: "0px", opacity: 1}, function(){ }).addClass("yellow");
        $(".hbest").css({left: "-3px", opacity: .8}, function(){ }).removeClass("yellow"); 
        $(".hworst").css({right: "-3px", opacity: .8}, function(){ }).removeClass("yellow");
        $("#reactionthegame_pagesub").css("left", "0px"); $("#reactionbest_pagesub").css("left", "0px"); $("#reactionworst_pagesub").css("left", "0px");
        }, 200);
        setTimeout(function(){
            //showLi($("#reactionthegame_pagesub"));
            if($("#memeUlworst")[0].childElementCount >= 2){$("#memeLlatest").height(scrollHeight);}
            try{$("#reactionthegame_pagesub .afScrollPanel").css("-webkit-transform", latestp);}catch(err){}
            $("#memeLlatest").height("");
            //hideLi($("#reactionthegame_pagesub"));
        }, 100);
        //setTimeout(function(){lazyscroll = setInterval(function(){scrollLi("memeUllatest");}, 1500);}, 1000);
        memesloaded = "reactionthegame_pagesub";
        if($(".infinitelatest").text() === "Loading..."){memeGet("latest");}else{memeFresh("latest");}
    });


    hammerslidebest = new Hammer(document.getElementById("memeLbest"), {});
    hammerslidebest.on('panleft panright panend swipeleft', function(ev) {
        if (ev.deltaY >= 12 || ev.deltaY <= -12){ev.deltaX = 0;}
        if((ev.deltaX <= -12 || ev.deltaX >= 12) && ev.type != "swipeleft" && !timer){
        $(".hbest").css("left", (wwidth*.45)+Math.max(Math.min((wwidth*.35), ev.deltaX), -(wwidth*.35)));
        $("#reactionbest_pagesub").css("left", Math.max(Math.min(0, ev.deltaX), -(wwidth*1.35)));
        }
        
        if(((ev.deltaX <= -50 && ev.type === "panend") || ev.type === "swipeleft") && !timer){
            try{bestp = $("#reactionbest_pagesub .afScrollPanel").css("-webkit-transform");}catch(err){}
            timer = true; setTimeout(function(){timer = false;}, 800);
                clearInterval(lazyscroll);
                lazyscroll = "";
                scrollHeight = $("#memeLbest").height();
                $.ui.loadContent("reactionthegame_pagesub",false,false,"slide");
        }else if(ev.type === "panend" && ev.deltaX > -50 && ev.type != "swipeleft" && !timer){
             $(".hlatest").animate({left: wwidth*.45+"px", opacity: 1}, 100);
             $(".hworst").css({right: "-100px", opacity: .8});
             $(".hbest").css({left: (wwidth*.5)-22+"px", opacity: 1});
             $("#reactionbest_pagesub").animate({left: "0px"}, 100);
        }
    });
        
    $("#reactionbest_pagesub").on("loadpanel", function(){
    setTimeout(function(){
    $(".hlatest").css({left: wwidth*.43+"px", opacity: 1}).removeClass("yellow");
    $(".hworst").css({right: "-100px", opacity: .8}).removeClass("yellow");
    $(".hbest").css({left: (wwidth*.5)-22+"px", opacity: 1}).addClass("yellow"); 
    $("#reactionthegame_pagesub").css("left", "0px"); $("#reactionbest_pagesub").css("left", "0px"); $("#reactionworst_pagesub").css("left", "0px");
    }, 200);
        setTimeout(function(){
            //showLi($("#reactiontbest_pagesub"));
           if($("#memeUlworst")[0].childElementCount >= 2){ $("#memeLbest").height(scrollHeight);}
            try{$("#reactionbest_pagesub .afScrollPanel").css("-webkit-transform", bestp);}catch(err){}
            $("#memeLbest").height("");
        }, 100);
    //setTimeout(function(){lazyscroll = setInterval(function(){scrollLi("memeUlbest");}, 1500);}, 1000);
    memesloaded = "reactionbest_pagesub";
        if($(".infinitebest").text() === "Loading..."){memeGetL("best");}
    });


    hammerslideworst = new Hammer(document.getElementById("memeLworst"), {});
    hammerslideworst.on('panleft panright panend swiperight', function(ev) {
        if (ev.deltaY >= 12 || ev.deltaY <= -12){ev.deltaX = 0;}
        if((ev.deltaX <= -12 || ev.deltaX >= 12) && ev.type != "swiperight" && !timer){
        $(".hworst").css("right", (wwidth*.45)+Math.max(Math.min((wwidth*.35), -ev.deltaX), (-wwidth*.35)));
        $("#reactionworst_pagesub").css("left", Math.max(Math.min((wwidth*1.35), ev.deltaX), 0));
        }
        
        if(((ev.deltaX >= 50 && ev.type === "panend") || ev.type === "swiperight") && !timer){
            try{worstp = $("#reactionworst_pagesub .afScrollPanel").css("-webkit-transform");}catch(err){}
            //hideLi($("#reactionworst_pagesub"));
            timer = true; setTimeout(function(){timer = false;}, 800);
                clearInterval(lazyscroll);
                lazyscroll = "";
                scrollHeight = $("#memeLworst").height();
                $.ui.loadContent("reactionthegame_pagesub",false,true,"slide");
        }else if(ev.type === "panend" && ev.deltaX < 50 && ev.type != "swiperight" && !timer){
             $(".hworst").animate({right: (wwidth*.5)-25+"px", opacity: 1}, 100);
             $(".hbest").css({left: "-100px", opacity: .8});
             $(".hlatest").css({left: -wwidth*.45+"px", opacity: 1});
             $("#reactionworst_pagesub").animate({left: "0px"}, 100);
             }
    });
 
        
        $("#reactionworst_pagesub").on("loadpanel", function(){
        setTimeout(function(){
        $(".hworst").css({right: (wwidth*.5)-25+"px", opacity: 1}).addClass("yellow");
        $(".hbest").css({left: "-100px", opacity: .8}).removeClass("yellow");
        $(".hlatest").css({left: -wwidth*.43+"px", opacity: 1}).removeClass("yellow");
        $("#reactionthegame_pagesub").css("left", "0px"); $("#reactionbest_pagesub").css("left", "0px"); $("#reactionworst_pagesub").css("left", "0px");
    }, 200);
        setTimeout(function(){
            //showLi($("#reactionworst_pagesub"));
            if($("#memeUlworst")[0].childElementCount >= 2){$("#memeLworst").height(scrollHeight);}
            try{$("#reactionworst_pagesub .afScrollPanel").css("-webkit-transform", worstp);}catch(err){}
            $("#memeLworst").height("");
            //hideLi($("#reactionworst_pagesub"));
        }, 100);
        //setTimeout(function(){lazyscroll = setInterval(function(){scrollLi("memeUlworst");}, 1500);}, 1000);
        memesloaded = "reactionworst_pagesub";
        if($(".infiniteworst").text() === "Loading..."){memeGetL("worst");}
    });
 
        $("#my_page").on("loadpanel", function(){ //console.log(myP);
            if(!mytimer){if($(".infinitemine").text() === "Loading..."){
                memeGet("mine");
            }else{ if(myP == false){memeFresh("mine"); myP = true;} 
                mytimer = true;
            }
                        }else{if(myP == false){memeGet("mine"); myP = true;}}
            scrollLi("my_page");
        });
        
        $("#my_settings").on("loadpanel", function(){
            $("#accountdet").html('<div class="list inset pad10"><div class="big bold pad10">Account Details</div><input type="text" id="firstname" placeholder="first name" class="" value="'+user.first+'"><input type="text" id="lastname" placeholder="last name" class="" value="'+user.last+'"><input type="text" id="username" placeholder="username" class="" value="'+user.username+'"><div id="usera"></div><input type="email" id="email" placeholder="email" class="" value="'+user.email+'"><div id="emaila"></div><input type="password" id="pass" placeholder="current password" class=""><div id="passa3"></div><a class="button width99" id="savedetails">Save Details</a></div>');
            $("#passreset").html('<div class="list inset pad10"><div class="big bold pad10">Password Reset</div><input type="password" id="oldpassword" placeholder="current password" class=""><input type="password" id="password" placeholder="new password" class=""><input type="password" id="password2" placeholder="new password again" class="password2"><div id="passa2"></div><a class="button width99" id="savepassword">Save New Password</a></div>');
            sizeIt();
        });
        $("#my_settings").on("unloadpanel", function(){
            $("#accountdet").html('');
            $("#passreset").html('');
        });
        $(document).on("click", '#savedetails', function(){
            if( $("#pass").val().length >= 8){
            accountUpdate(document.getElementById("firstname").value, document.getElementById("lastname").value, document.getElementById("email").value, document.getElementById("username").value, document.getElementById("pass").value, document.getElementById("pass").value, "savedetails");
            }else{ document.getElementById("passa2").innerHTML = "<span class=\"red\"><small>passwords must match and be longer than 8 characters</small></span>"; document.getElementById("passa3").innerHTML = "<span class=\"red\"><small>password required</small></span>"; }
        });
        $(document).on("click", '#savepassword', function(){
            if( $("#passa2").text() == "match"){ 
            accountUpdate(document.getElementById("firstname").value, document.getElementById("lastname").value, document.getElementById("email").value, document.getElementById("username").value, document.getElementById("oldpassword").value, document.getElementById("password").value, "savepassword");
            }
        });

        $("#settings_page").on("loadpanel", function(){
            $('#locslider').trigger("change");
            if(!settingsset){
                $(".wide-control").each(function(){
                    var hammersettings = new Hammer(document.getElementById(this.id), {});
                    hammersettings.on('swipe panend', function(ev) {
                        if(ev.isFinal){
                            var elm;
                            try{elm = ev.target.control.id;}catch(err){}
                            try{elm = ev.target.parentElement.control.id;}catch(err){}
                            if(ev.deltaX <= -1){
                                if ($("#"+elm)[0].checked === true) {$("#"+elm)[0].checked = false;}
                            }else{
                                if ($("#"+elm)[0].checked === false) {$("#"+elm)[0].checked = true;}
                            }
                            $("#"+elm).trigger("change");
                        }
                    });
                });
                settingsset = true;
            }
            $("#afui .header").css("margin-bottom", "0px");
            sizeIt();
        });

        $("#mainpage").on("loadpanel", function(){
            $("#afui .header").css("margin-bottom", "0px");
            sizeIt();
        });

        $("#searchscenariospid").on("focus", function(evt){
            //alert(JSON.stringify(evt.currentTarget.dataset));
            if(!localStorage.searchscenariosPurchased || localStorage.searchscenariosPurchased == 0){
                timer = true;
                setTimeout(function(){timer = false;}, 1000);
                document.getElementById("searchscenariospid").value="";
                $("#searchscenariospid").blur();
                var popup = $.ui.popup({
                    onShow: function(){
                        
                        $("#searchPopup").css("visibility", "visible");
                        popup.positionPopup(1);
                        $(".afPopup").css("webkitTransition", "all .2s ease-in-out");
                    },
                    id: "searchPopup",
                    title: "Search Scenarios",
                    message: '<div class="wcenter"><div id="pdescription" class="bold height50 padb">Would you like to be able to Search the Scenarios in addition to having them randomly found for you?<div><br>Purchase now for just '+evt.currentTarget.dataset.price+'.</div></div></div>',
                    cancelText: "Close",
                    cancelCallback: function() {/*if($("#action").text() == "Purchase"){document.getElementById("searchscenariospid").value=""; localStorage.searchscenariosPurchased = 0; setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, 
                    message:"<br>Search Refunded!"});}, 500);}*/},
                    doneText: "Purchase",
                    doneCallback: function(){if($("#action").text() == "Purchase"){ try{store.order(evt.currentTarget.dataset.pid);}catch(err){unableToPurchase(); /* localStorage.searchscenariosPurchased = 1; setTimeout(function(){$.ui.popup({suppressTitle: true, cancelOnly: true, block: 0, cancelText:" ", onShow: function(){$(".afPopup FOOTER").css("border-top", "0px solid #aaa"); setTimeout(function(){$("#action").trigger("click");}, 1000);}, message:"<br>Search Purchased!"});}, 500);*/}}},
                    cancelOnly: false
                });
                $("#searchPopup").css({top: 1200, opacity: 0}); 
                        $("#action").addClass("yellow");
                        $("#searchPopup header").addClass("yellow");
                        $(".afPopup").css("webkitTransition", "none");
                
            }else{
                
            }
        });
        $("#searchscenariospid").on("input", function(evt){//console.log(evt);
            if($("#searchscenariospid").val().length >= 1){
                $("#searchresults ul").html("");
                var y = 1;
                for(var x = 0; x < scenarios.length; x++){
                    if(scenarios[x].toLowerCase().indexOf(($("#searchscenariospid").val()).toLowerCase()) >= 0){
                        scenario = scenarios[x];
                        $("#scenarios span").text(scenario);
                        $("#scenarios span").textfill(30);
                        setTimeout(function() {
                        $("#scenarios span").css("-webkit-animation", "glow .5s 2 alternate");
                            setTimeout(function() {
                                $("#scenarios span").css("-webkit-animation", "");
                            }, 600);
                        }, 50);
                        if(y >= 1){
                            if(y <= 1000){$("#searchresults ul").append("<li>"+scenarios[x]+"</li>");
                            }else{} 
                        y++;
                        }
                    }
                }
                if($("#searchresults li").length <= 1){$("#searchresults ul").fadeOut(200); setTimeout(function(){$("#searchresults ul").html(""); $("#searchresults ul").addClass("hidden");}, 400);}else{$("#searchresults ul").removeClass("hidden"); $("#searchresults ul").fadeIn(200); $("#searchresults").css("max-height", window.innerHeight - 109 +"px"); var scrollme = $("#searchresults").scroller();}
                $("#searchresults li").on("click", function(){
                    scenario = $(this).text();
                    $("#scenarios span").text(scenario);
                    $("#scenarios span").textfill(30);
                    setTimeout(function() {
                        $("#scenarios span").css("-webkit-animation", "glow .5s 2 alternate");
                            setTimeout(function() {
                                $("#scenarios span").css("-webkit-animation", "");
                            }, 600);
                        }, 50);
                    $("#searchresults ul").fadeOut(200); document.getElementById("searchscenariospid").value=""; setTimeout(function(){$("#searchresults ul").html(""); $("#searchresults ul").addClass("hidden");}, 400);
                });
            }else{$("#searchresults ul").fadeOut(200); document.getElementById("searchscenariospid").value=""; setTimeout(function(){$("#searchresults ul").html(""); $("#searchresults ul").addClass("hidden");}, 400);}
        });
        
        
        $(document).on("click", '.sliderwide', function(){
            //console.log(this);
            if (localStorage.locmet == 1){
            localStorage.locmet = 0;
            }else{localStorage.locmet = 1;}
            $('#locslider').trigger("change");
        });
        $(document).on("change", '#locslider', function(){
            if($('#locslider').hasClass("disabled")){$("#locslider").attr("value", 10);}else{
            localStorage.locslide = this.value;
            if(localStorage.locmet == 1){
            if(this.value == 1){$(".slidercenter").text("");}
            if(this.value == 2){$(".slidercenter").text("1 km");}
            if(this.value == 3){$(".slidercenter").text("5 km");}
            if(this.value == 4){$(".slidercenter").text("10 km");}
            if(this.value == 5){$(".slidercenter").text("50 km");}
            if(this.value == 6){$(".slidercenter").text("100 km");}
            if(this.value == 7){$(".slidercenter").text("500 km");}
            if(this.value == 8){$(".slidercenter").text("1000 km");}
            if(this.value == 9){$(".slidercenter").text("3000 km");}
            if(this.value == 10){$(".slidercenter").text("");}
            }else{
            if(this.value == 1){$(".slidercenter").text("");}
            if(this.value == 2){$(".slidercenter").text("0.6 mi");}
            if(this.value == 3){$(".slidercenter").text("3 mi");}
            if(this.value == 4){$(".slidercenter").text("6 mi");}
            if(this.value == 5){$(".slidercenter").text("30 mi");}
            if(this.value == 6){$(".slidercenter").text("60 mi");}
            if(this.value == 7){$(".slidercenter").text("300 mi");}
            if(this.value == 8){$(".slidercenter").text("600 mi");}
            if(this.value == 9){$(".slidercenter").text("1800 mi");}
            if(this.value == 10){$(".slidercenter").text("");}
            }
            $("#memeUllatest").text("");
            $("#memeUlbest").text("");
            $("#memeUlworst").text("");
            $.ui.scrollingDivs["reactionthegame_pagesub"].scrollToTop();
            $.ui.scrollingDivs["reactionbest_pagesub"].scrollToTop();
            $.ui.scrollingDivs["reactionworst_pagesub"].scrollToTop();
            $(".infinite").text("Loading...");
            }
        });
        $(document).on("change", "#af-flipswitch-loc", function(evt) {
            if ($("#af-flipswitch-loc")[0].checked === true) {
                localStorage.flipswitchloc = "1";
                localStorage.loccheck = 1;
                $("#locslider").removeClass("disabled");
                $("#locslider").removeAttr("disabled");
                getLocation();
            } else {
                $("#locslider").attr("value", 10);
                $('#locslider').trigger("change");
                localStorage.locslide = 10;
                localStorage.flipswitchloc = "0";
                localStorage.loccheck = 0;
                $("#locslider").addClass("disabled");
                $("#locslider").attr("disabled", "disabled");
                hereIam = {coords:{latitude:0, longitude:0}}
            }
        });
        
        
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();