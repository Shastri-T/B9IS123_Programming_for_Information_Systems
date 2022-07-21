    $(document).ready(function () {
        $('.navLinks>li').on('click', function () {
            $('li').removeClass('active');
            $(this).toggleClass('active');
        });
    
        category = "";
        category = getUrlParameter("cat");
    
        if (category != "") {
            $(".navLinks>li>a:contains('" + category + "')").parent().click();
        }
    
        if($('.navLinks>li').hasClass('active'))
        {
            if ($('.navLinks>li.active')[0].textContent.trim() != "Home") {
                products_list = [];
                products_list = JSON.parse(localStorage.getItem("json"));
        
                products_list = products_list.filter(function (i) {
                    return i.category == $('.navLinks>li.active')[0].textContent.trim();
                });
                //console.log(products_list);
                GetProductHtml(products_list);
            }
        }
    
        else {
            products_list = [];
            products_list = JSON.parse(localStorage.getItem("json"));
            GetProductHtml(products_list);
        }
    });


    function GetProductDetailHtml(jsonarray) {
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
            return i.id == String(getUrlParameter('id'));
        });
    
        for (var i = 0; i < product_data[0].reviews.length; i++) {
            final_rating += product_data[0].reviews[i].rating
        }
    
        actual_rating = Math.round(final_rating / product_data[0].reviews.length * 10) / 10;
        final_rating = Math.round(final_rating / product_data[0].reviews.length);
    
        if (final_rating == 5) {
            ratinghtml = "<a style='text-decoration:none' href='#modal'> <div id='product_rating'  class='rating5star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> <span style='color:black'>&nbsp;|&nbsp;" + product_data[0].reviews.length + " Reviews <span></div> </a>";
        }
    
        if (final_rating == 4) {
            ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating'  class='rating4star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> <span style='color:black'>&nbsp;|&nbsp;" + product_data[0].reviews.length + " Reviews <span></div></a>";
        }
    
        if (final_rating == 3) {
            ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating' onclick='ShowRatings()' class='rating3star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span style='color:black'>&nbsp;|&nbsp;" + product_data[0].reviews.length + " Reviews <span></div></a>";
        }
    
        if (final_rating == 2) {
            ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating' onclick='ShowRatings()' class='rating2star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span style='color:black'>&nbsp;|&nbsp;" + product_data[0].reviews.length + " Reviews <span></div></a>";
        }
    
        if (final_rating == 1) {
            ratinghtml = "<a style='text-decoration:none' href='#modal'><div id='product_rating' onclick='ShowRatings()' class='rating1star'> <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span><span style='color:black'>&nbsp;|&nbsp;" + product_data[0].reviews.length + " Reviews <span></div></a>";
        }
    
        categorylinkhtml = "<a style='color:#02AAB0;text-decoration: none;font-weight:500' href='./index.html?cat=" + product_data[0].category.trim() + "'>" + product_data[0].category + "</a>";
        $("#categorylink").append(categorylinkhtml);
    
        medialist = "<span data-pic='url(" + product_data[0].featuredimage + ")' class='active'> <img src='" + product_data[0].featuredimage + "'></img> </span>";
    
        for (var i = 0; i < product_data[0].additionalimages.length; i++) {
            medialist += "<span data-pic='url(" + product_data[0].additionalimages[i].image + ")'> <img src='" + product_data[0].additionalimages[i].image + "'></img> </span>";
        }
    
        productimg = "<li class='product_card_images'> <div style='display:flex;flex-direction:column;'> <div class='product-pic'></div>  <div class='product-colors'>" + medialist + "</div></div></li>";
    
    
        if (product_data[0].features.length == 1) {
            productimg += "<li class='product_card_desc'> <div style='display:flex;flex-direction:column;'><b><span>" + product_data[0].description + "</span></b><br/>" + ratinghtml + " </span> <br/> <b><span style='color:brown'>" + product_data[0].price + "<div style='float:left'> <div style='align-items:center'> <label id='lblqty'>Quantity</label> <select id='productqty'></select> </div> <button id='product_add_to_cart' onclick='AddtoCart()' class='btn card_btn btn-grad'>Add to Cart</button> </div> </span></b></div></li> ";
        }
    
        else {
    
            for (var i = 0; i < product_data[0].features.length; i++) {
                if (i == 0) {
                    productimg += "<li class='product_card_desc'> <div style='display:flex;flex-direction:column;'><b><span>" + product_data[0].description + "</span></b><br/>" + ratinghtml + " </span> <br/> <b><span style='color:brown'>" + product_data[0].price + " <br/> <div style='align-items:center'><label id='lblqty'>Quantity &nbsp;</label> <select id='productqty'> </select> </div> <button id='product_add_to_cart' onclick='AddtoCart()' class='btn card_btn btn-grad'>Add to Cart</button> </span></b> <ul style='padding-left:15px'><br/>";
                }
    
                if (i != 0 && i == product_data[0].features.length - 1) {
                    productimg += "<li><span>" + product_data[0].features[i].feature + "</span></li></ul></div></li>";
                }
    
                if (i != 0 && i != product_data[0].features.length - 1) {
                    productimg += "<li><span>" + product_data[0].features[i].feature + "</span></li>";
                }
            }
        }
        $("#product-card").append(productimg);
        $("#product_name").text(product_data[0].name);
        $(".product-pic").css("background-image", "url('" + product_data[0].featuredimage + "')");
        $(".product-pic").css("background-repeat", "no-repeat");
        $(".product-pic").css("background-position", "left center");
    
        for (var i = 0; i < product_data[0].stockcount; i++) {
            $('#productqty').append('<option value="">' + (i + 1) + '</option>');
        }
    
        $("#modal h2").html("Reviews & Ratings for "+product_data[0].name + "<a id='Modalclosebtn' href='#'>X</a>");
    
        for (var i = 0; i < product_data[0].reviews.length; i++) {
        if(product_data[0].reviews[i].rating==5)
        {
            UserRating="★★★★★";
        }
    
        if(product_data[0].reviews[i].rating==4)
        {
            UserRating="★★★★";
        }
    
        if(product_data[0].reviews[i].rating==3)
        {
            UserRating="★★★";
        }
    
        if(product_data[0].reviews[i].rating==2)
        {
            UserRating="★★";
        }
    
        if(product_data[0].reviews[i].rating==1)
        {
            UserRating="★";
        }
        
    
        userRatingHtml +="<br/> <span style='color:orange'>"+UserRating+"</span> by "+product_data[0].reviews[i].person+" : "+product_data[0].reviews[i].comment+"<br/>";
        
        }
    
        $(".copy span").append(userRatingHtml);
    }

    function GetProductHtml(jsonarray) {

    }


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

    function Navigateproductdetails(itemid) {
        window.location.href = "./product.html?id=" + itemid;
    }

    function NavigateHome() {
        window.location.href = "./index.html";
    }
