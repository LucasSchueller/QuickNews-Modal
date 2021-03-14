/**
 * -------------------------------------------------------------
 *  
 * File: main.js
 * Project: Amoplex Technologies
 * File Created: Tuesday, 19th January 2021 11:05:13 pm
 * Author: Lucas Schüller (lucas@amoplex.de)
 * -----
 * Last Modified: Tuesday, 19th January 2021 11:05:14 pm
 * Modified By: Lucas Schüller (lucas@amoplex.de)
 * -----
 * Copyright - 2021 Amoplex Technologies
 *  
 * -------------------------------------------------------------
 */
$(document).ready(() => {
    refreshPage();
    $(".modal li").on("click", function() {
        $("body").addClass("active");
        $(".modal").addClass("active");
        loadData(this);
    });

    $(".modal #overlay .close").on("click", function() {
        $("body").removeClass("active");
        $(".modal").removeClass("active");
    });
});

function refreshPage() {
    $(".body").children().each((index, li) => {
        $(li).css("opacity", "0");
        setTimeout(() => {
            animateElement(li.nodeName.toLowerCase() + "." + li.className, "fadeInDown", function(li) {
                $(li).removeAttr("style");
            }, li);
        }, 200 * index);
    });
}

function loadData(link) {
    $("#overlay h1").html($(link).find("h2").html());
    $("#overlay .header i").removeClass();
    $("#overlay .header i").addClass($(link).find("i")[0].className);
    $("#overlay p").html($(link).find("p").html());

    $("#overlay").removeClass();
    $("#overlay").addClass(link.className);
}

function animateElement(element, animationName, callback, callbackParam = null) {
    const node = document.querySelector(element);
    node.classList.add('animate__animated', "animate__" + animationName);

    function handleAnimationEnd() {
        node.classList.remove('animate__animated', "animate__" + animationName);
        node.removeEventListener('animationend', handleAnimationEnd);

        if (typeof callback === 'function') {
            if (callbackParam !== null) {
                callback(callbackParam);
            } else {
                callback();
            }
        }

    }
    node.addEventListener('animationend', handleAnimationEnd);
}