
/**************************************** search functionality ******************************************/





$("#productsearch").keyup(function (event) {
    //console.log($("#productsearch").val());
    if ($("#productsearch").val().trim() == "") {
        $(".navLinks>li>a:contains('Home')").parent().click();
        dynamichtml = "";
       products_list = [];

       $.ajax({  
  
        async: true,  
        url: "http://127.0.0.1:8000/product/",   
        method: "GET",  
      
        headers: {  
            "accept": "application/json;odata=verbose",   
            "content-type": "application/json;odata=verbose"  
        },  
        success: function(data) { 
            products_list=data;
            GetProductHtml(products_list);
        }
        });
        
    }

    else {
        products_list_temp = [];
        $.each(products_list, function (i, v) {
            if (v.Name.toLowerCase().indexOf($("#productsearch").val().toLowerCase()) != -1 || v.Category.toLowerCase().indexOf($("#productsearch").val().toLowerCase()) != -1) {
                products_list_temp.push(v);
            }
        });
        //console.log(products_list);
        GetProductHtml(products_list_temp);
    }

    //added code to set card width, if search displays one result
    if($(".cards_item").length==1)
    {
        $('.cards_item').css("width","65%");
    }
});





/**************************************** document.ready function ******************************************/

$(document).ready(function () {

    category = "";
    category = getUrlParameter("cat");

    products_list=[];


    $.ajax({  
  
    async: true,  
    url: "http://127.0.0.1:8000/product/",   
    method: "GET",  
  
    headers: {  
        "accept": "application/json;odata=verbose",   
        "content-type": "application/json;odata=verbose"  
    },  
    success: function(data) { 
        products_list=data;

     
menu_linkshtml = "";
menu_links = [];
navlink = "";

$.each(products_list, function (index, value) {
    if ($.inArray(value.Category, menu_links) === -1) {
        menu_links.push(value.Category);
    }
});

menu_links.splice(0, 0, "Home");

for (var i = 0; i < menu_links.length; i++) {
    if (i == 0) {
        menu_linkshtml = "<li class='active' style='cursor:pointer'> <a href='./index.html'>" + menu_links[i] + "</a></li>";
    }
    else {
        navlink = "./index.html?cat=" + menu_links[i].trim();
        menu_linkshtml += "<li style='cursor:pointer'> <a href=" + navlink + ">" + menu_links[i] + "</a></li>";
    }
}

$(".navLinks").append(menu_linkshtml);


/**************************************** products card creation ******************************************/


dynamichtml = "";

if (category && category != "Home") {
    $(".navLinks>li>a:contains('Home')").parent().removeClass('active');
    $(".navLinks>li>a:contains('" + category + "')").parent().addClass('active');
    products_list_cat=[];
    products_list_cat = products_list.filter(function (i) {
        return i.Category == category;
    });
    GetProductHtml(products_list_cat);
    //$(".navLinks>li>a:contains('" + category + "')").parent().click();
}

else{
    GetProductHtml(products_list);
}


if(getUrlParameter("id"))
{
    GetProductDetailHtml();
}

}
    
    });
    
});






    $('.navLinks>li').on('click', function () {
        $('li').removeClass('active');
        $(this).toggleClass('active');
   
    
    /*category = "";
    category = getUrlParameter("cat");*/
    
    if (category != "") {
        $(".navLinks>li>a:contains('" + category + "')").parent().click();
    }
    
    if($('.navLinks>li').hasClass('active'))
    {
        if ($('.navLinks>li.active')[0].textContent.trim() != "Home") {
            //products_list = [];
           // products_list = JSON.parse(localStorage.getItem("json"));
    
            products_list = products_list.filter(function (i) {
                return i.Category == $('.navLinks>li.active')[0].textContent.trim();
            });
            //console.log(products_list);
            GetProductHtml(products_list);
        }
    }
    
    else {
        //products_list = [];
        //products_list = JSON.parse(localStorage.getItem("json"));
        GetProductHtml(products_list);
    }          

  });

/**************************************** set css for product cards ****************************************/

function SetProductDetailCSS() {
    $(".product-colors span").click(function () {
        $(".product-colors span").removeClass("active");
        $(this).addClass("active");
        $("body").css("background", $(this).attr("data-color"));
        $(".product-price").css("color", $(this).attr("data-color"));
        $(".product-button").css("color", $(this).attr("data-color"));
        $(".product-pic").css("background-image", $(this).attr("data-pic"));
    });
}


/*************************** function to generate html for product details page ********************************/

function GetProductDetailHtml() {
    $("#cart").hide();
    $("#productdetail").show();
    medialist = "";
    featurelist = "";
    productimg = "";
    categorylinkhtml = "";
    final_rating = 0;
    actual_rating = 0;
    UserRating="";
    userRatingHtml="";

    product_data = products_list.filter(function (i) {
        return i.ID == parseInt(getUrlParameter('id'));
    });

    for (var i = 0; i < product_data[0].Reviews.length; i++) {
        final_rating += product_data[0].Reviews[i].rating
    }

    actual_rating = Math.round(final_rating / product_data[0].Reviews.length * 10) / 10;
    final_rating = Math.round(final_rating / product_data[0].Reviews.length);

    if (final_rating == 5) {
        ratinghtml = "<a style='text-decoration:none' href='#modal'> <div id='product_rating'  class='rating5star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> <span style='color:black'>&nbsp;|&nbsp;" + product_data[0].Reviews.length + " Reviews <span></div> </a>";
    }

    if (final_rating == 4) {
        ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating'  class='rating4star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> <span style='color:black'>&nbsp;|&nbsp;" + product_data[0].Reviews.length + " Reviews <span></div></a>";
    }

    if (final_rating == 3) {
        ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating' onclick='ShowRatings()' class='rating3star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span style='color:black'>&nbsp;|&nbsp;" + product_data[0].Reviews.length + " Reviews <span></div></a>";
    }

    if (final_rating == 2) {
        ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating' onclick='ShowRatings()' class='rating2star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span style='color:black'>&nbsp;|&nbsp;" + product_data[0].Reviews.length + " Reviews <span></div></a>";
    }

    if (final_rating == 1) {
        ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating' onclick='ShowRatings()' class='rating1star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span style='color:black'>&nbsp;|&nbsp;" + product_data[0].Reviews.length + " Reviews <span></div></a>";
    }

    categorylinkhtml = "<a style='color:#02AAB0;text-decoration: none;font-weight:500' href='./index.html?cat=" + product_data[0].Category.trim() + "'>" + product_data[0].Category + "</a>";
    $("#categorylink").append(categorylinkhtml);

    medialist = "<span data-pic='url(" + product_data[0].FeaturedImage + ")' class='active'> <img src='" + product_data[0].FeaturedImage + "'></img> </span>";

    for (var i = 0; i < product_data[0].AdditionalImages.length; i++) {
        medialist += "<span data-pic='url(" + product_data[0].AdditionalImages[i].image + ")'> <img src='" + product_data[0].AdditionalImages[i].image + "'></img> </span>";
    }

    productimg = "<li class='product_card_images'> <div style='display:flex;flex-direction:column;'> <div class='product-pic'></div>  <div class='product-colors'>" + medialist + "</div></div></li>";


    if (product_data[0].Features.length == 1) {
        productimg += "<li class='product_card_desc'> <div style='display:flex;flex-direction:column;'><b><span>" + product_data[0].Description + "</span></b><br/>" + ratinghtml + " </span> <br/> <b><span style='color:brown'>" + product_data[0].Price + "<div style='float:left'> <div style='align-items:center'> <label id='lblqty'>Quantity</label> <select id='productqty'></select> </div> <button id='product_add_to_cart' onclick='AddtoCart()' class='btn card_btn btn-grad'>Add to Cart</button> </div> </span></b></div></li> ";
    }

    else {

        for (var i = 0; i < product_data[0].Features.length; i++) {
            if (i == 0) {
                productimg += "<li class='product_card_desc'> <div style='display:flex;flex-direction:column;'><b><span>" + product_data[0].Description + "</span></b><br/>" + ratinghtml + " </span> <br/> <b><span style='color:brown'>" + product_data[0].Price + " <br/> <div style='align-items:center'><label id='lblqty'>Quantity &nbsp;</label> <select id='productqty'> </select> </div> <button id='product_add_to_cart' onclick='AddtoCart()' class='btn card_btn btn-grad'>Add to Cart</button> </span></b> <ul style='padding-left:15px'><br/>";
            }

            if (i != 0 && i == product_data[0].Features.length - 1) {
                productimg += "<li><span>" + product_data[0].Features[i].feature + "</span></li></ul></div></li>";
            }

            if (i != 0 && i != product_data[0].Features.length - 1) {
                productimg += "<li><span>" + product_data[0].Features[i].feature + "</span></li>";
            }
        }
    }

    $("#product-card").append(productimg);
    $("#product_name").text(product_data[0].Name);
    $(".product-pic").css("background-image", "url('" + product_data[0].FeaturedImage + "')");
    $(".product-pic").css("background-repeat", "no-repeat");
    $(".product-pic").css("background-position", "left center");

    for (var i = 0; i < product_data[0].StockCount; i++) {
        $('#productqty').append('<option value="">' + (i + 1) + '</option>');
    }

    $("#modal h2").html("Reviews & Ratings for "+product_data[0].Name + "<a id='Modalclosebtn' href='#'>X</a>");

    for (var i = 0; i < product_data[0].Reviews.length; i++) {
    if(product_data[0].Reviews[i].rating==5)
    {
        UserRating="★★★★★";
    }

    if(product_data[0].Reviews[i].rating==4)
    {
        UserRating="★★★★";
    }

    if(product_data[0].Reviews[i].rating==3)
    {
        UserRating="★★★";
    }

    if(product_data[0].Reviews[i].rating==2)
    {
        UserRating="★★";
    }

    if(product_data[0].Reviews[i].rating==1)
    {
        UserRating="★";
    }
    
    userRatingHtml +="<br/> <span style='color:orange'>"+UserRating+"</span> by "+product_data[0].Reviews[i].person+" : "+product_data[0].Reviews[i].comment+"<br/>";
    
    }

    $(".copy span").append(userRatingHtml);
}

/********************** function to generate html for products on landing page ***************************/

function GetProductHtml(jsonarray) {
    $("#productcatalog").html("");
    dynamichtml = "";
    $.each(jsonarray, function () {
        ratinghtml = "";
        final_rating = 0;
        actual_rating = 0;

        for (var i = 0; i < this.Reviews.length; i++) {
            final_rating += this.Reviews[i].rating
        }

        actual_rating = Math.round(final_rating / this.Reviews.length * 10) / 10;
        final_rating = Math.round(final_rating / this.Reviews.length);

        console.log(final_rating);

        if (final_rating == 5) {
            ratinghtml = "<div id='rating' class='rating5star'><span class='tooltiptext'>" + actual_rating + " out of 5</span><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>";
        }

        if (final_rating == 4) {
            ratinghtml = "<div id='rating' class='rating4star'><span class='tooltiptext'>" + actual_rating + " out of 5</span><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>";
        }

        if (final_rating == 3) {
            ratinghtml = "<div id='rating' class='rating3star'><span class='tooltiptext'>" + actual_rating + " out of 5</span><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>";
        }

        if (final_rating == 2) {
            ratinghtml = "<div id='rating' class='rating2star'><span class='tooltiptext'>" + actual_rating + " out of 5</span><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>";
        }

        if (final_rating == 1) {
            ratinghtml = "<div id='rating' class='rating1star'><span class='tooltiptext'>" + actual_rating + " out of 5</span><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>";
        }

        dynamichtml += "<li class='cards_item'><div class='card'><a href='./product.html?id=" + this.ID + "'><div class='card_image'><img src='" + this.FeaturedImage + "'></div></a><div class='card_content'><h1 class='card_title'>" + this.Name + "</h1> <div class='card_price'> <span> Price: " + this.Price + "</span></div><br/>" + ratinghtml + "<br/> <div class='card_review'> <span>" + this.Reviews.length + " Reviews </span> </div><br/><button onclick='Navigateproductdetails(" + this.ID + ")'' id='view_product_detail' class='btn card_btn btn-grad'>More</button> </div></div></li>";

        //<button id='add_to_cart' class='btn card_btn btn-grad'>Add to Cart</button>
    });
    $("#productcatalog").append(dynamichtml);
}


/******************************* function to get query string values ***********************************/

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

/********************* function to show navigation menu icon for mobile devices ************************/

function ToggleMenu() {
    $(".navLinks")[0].classList.toggle("responsive");
}

/*********************************** function to navigate to home page *********************************/

function NavigateHome() {
    window.location.href = "./index.html";
}

/**************************** function to navigate to product details page ******************************/

function Navigateproductdetails(itemid) {
    window.location.href = "./product.html?id=" + itemid;
}