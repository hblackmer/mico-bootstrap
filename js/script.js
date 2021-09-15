$(function () {
    /* Hide/show test customization modal */
    $('#testButton').click(function () {
        $('#testModal').modal('show');
    });

    /* Hide/show email textbox when email option is toggled */
    $('#emailOption').click(function(){
        var val = $(this).val();
        $('#hidden_content').slideToggle();
    });
});

let currentTab = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    showTab(currentTab);
});

function showTab(n) {
    let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
        document.getElementById("nextBtn").style.display = "none";
    } else {
        document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
        document.getElementById("nextBtn").style.display = "inline";
    }
}

function nextPrev(n) {
    let x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
    }
    showTab(currentTab);
}

function validateForm() {
    let x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}