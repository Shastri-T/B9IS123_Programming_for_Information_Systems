/*added a local json variable to store data for initial data reference, this section will be removed later and will be fetched from mongodb through the REST API's*/
products_list =

    [

        {
         "id": "1",
            "name": "Treadmill Endurance",
            "category": "Cardio",
            "featuredimage": "./Media/product_images/Treadmill_Endurance_T85.png",
            "price": "€ 1200",
            "stockcount": 5,
            "description": "Lets you have control over key variables (duration, speed and incline), so you get great data and can feel more organized than random",
            "features": [
                {
                    "feature": "Tablet / Phone Holder"
                },
                { "feature": "LED Display Computer" },
                { "feature": "Pulse Sensors" },
                { "feature": "Deck size: 121cm x 42cm" }
            ],
            "additionalimages": [
                { "image": "./Media/product_images/additional_images/1/Treadmill_Endurance_A.png" },
                { "image": "./Media/product_images/additional_images/1/Treadmill_Endurance_B.png" },
                { "image": "./Media/product_images/additional_images/1/Treadmill_Endurance_C.png" }
            ],
            "reviews": [
                {
                    "person": "Cody",
                    "comment": "Excellent product and easy to assemble",
                    "rating": 5
                },

                {
                    "person": "Claudia",
                    "comment": "Great Product",
                    "rating": 4
                },

                {
                    "person": "Adam",
                    "comment": "Good Product",
                    "rating": 3
                }

            ]

        },


        {
            "id": "2",
            "name": "Treadclimber Treadmill",
            "category": "Cardio",
            "featuredimage": "./Media/product_images/TreadClimber_MS_100X.png",
            "price": "€ 900",
            "stockcount": 7,
            "description": "Combines a smooth elliptical motion with the stepping effect of a stair climber and the forward motion of a treadmill",
            "features": [
                {
                    "feature": "3.0HP Motor"
                },
                { "feature": "Top running speed: 16kph" },
                { "feature": "Handlebar pulse sensors" },
                {
                    "feature": "Maximum user weight: 130kg"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/2/Treadmill_Climber_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/2/Treadmill_Climber_B.png"
                }
            ],

            "reviews": [
                {
                    "person": "Nicole",
                    "comment": "Awesome Product with multiple features",
                    "rating": 5
                },

                {
                    "person": "Claudia",
                    "comment": "Good Product",
                    "rating": 3
                },

                {
                    "person": "Sara",
                    "comment": "Great Product",
                    "rating": 4
                }

            ]

        },


        {
            "id": "3",
            "name": "Combination Treadmill",
            "category": "Cardio",
            "featuredimage": "./Media/product_images/Combination_Treadmill_AC_SX466.png",
            "price": "€ 1400",
            "stockcount": 10,
            "description": "Cardiovascular health benefits can be achieved by combining treadmill and elliptical exercise in your workout regimen",
            "features": [
                {
                    "feature": "Fully Backlit LCD Display"
                },
                { "feature": "Heart-Rate Monitor" },
                { "feature": "Water Bottle & Media Shelf/Tablet Holder" },
                {
                    "feature": "1.75HP Motor"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/3/Treadmill_Combination_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/3/Treadmill_Combination_B.png"
                }
            ],
            "reviews": [
                {
                    "person": "Robert",
                    "comment": "Great Product",
                    "rating": 5
                },

                {
                    "person": "Monica",
                    "comment": "Excellent Product",
                    "rating": 5
                },

                {
                    "person": "Gilbert",
                    "comment": "Good Product",
                    "rating": 5
                }

            ]

        },

        {
            "id": "4",
            "name": "Dead Lift Shrug Bar",
            "category": "Storage",
            "featuredimage": "./Media/product_images/Dead_Lift_Shrug_Bar.png",
            "price": "€ 100",
            "stockcount": 12,
            "description": "Trains the glutes, hamstrings quads and back, with less stress",
            "features": [
                {
                    "feature": "Accelerate your weight"
                },
                {
                    "feature": "The body to have a wider foot stance"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/4/Deadlift_Shrugbar_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/4/Deadlift_Shrugbar_B.png"
                }
            ],
            "reviews": [
                {
                    "person": "Robert",
                    "comment": "Great Product",
                    "rating": 4
                },

                {
                    "person": "Sam",
                    "comment": "Excellent Product",
                    "rating": 5
                }

            ]

        },

        {
            "id": "5",
            "name": "Hex Dumbbells Solid Pairs",
            "category": "Weights",
            "featuredimage": "./Media/product_images/Hex_Dumbbells_Solid Pairs.png",
            "price": "€ 50",
            "stockcount": 5,
            "description": "For compound, multi-joint or multi-planar movements, which enhance coordination between different body segments",
            "features": [
                {
                    "feature": "Hex dumbbells are ideal for home gym"
                },
                { "feature": "Better for CrossFit and functional fitness" },
                {
                    "feature": "Floor based exercises"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/5/Hex_Dumbbells_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/5/Hex_Dumbbells_B.png"
                }
            ],
            "reviews": [
                {
                    "person": "Peter",
                    "comment": "Great Product",
                    "rating": 5
                },

                {
                    "person": "Samuel",
                    "comment": "Good Product",
                    "rating": 4
                }

            ]

        },

        {
            "id": "6",
            "name": "Dumbbell Set Adjustable",
            "category": "Weights",
            "featuredimage": "./Media/product_images/Dumbbell_Set_Adjustable.png",
            "price": "€ 75",
            "stockcount": 8,
            "description": "Used for joint-isolation exercises such as biceps curls, chest flyes or shoulder raises",
            "features": [
                {
                    "feature": "Use for joint-isolation exercises"
                },
                {
                    "feature": "It is use for full-body, multiplanar movements"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/6/Dumbell_Set_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/6/Dumbell_Set_B.png"
                }
            ],
            "reviews": [
                {
                    "person": "Maria",
                    "comment": "Great Product",
                    "rating": 5
                },

                {
                    "person": "Henry",
                    "comment": "Good Product",
                    "rating": 3
                },

                {
                    "person": "Nancy",
                    "comment": "Excellent Product",
                    "rating": 5
                }

            ]

        },


        {
            "id": "7",
            "name": "Tricep Bicep Rope",
            "category": "Studio",
            "featuredimage": "./Media/product_images/KOMODO_Tricep_Rope_Bicep_Pull_Down_Cable.png",
            "price": "€ 45",
            "stockcount": 9,
            "description": "It is an attachment for cable systems and can be used for a variety of exercises to target triceps, biceps, shoulders, abs, and back",
            "features": [
                {
                    "feature": "Triceps, biceps, shoulders and abs- all effectively trained"
                },
                { "feature": "Designed to optimise triceps contraction" },
                {
                    "feature": "Heavy Duty Triceps Rope"
                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/7/Tricep_Rope_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/7/Tricep_Rope_B.png"
                },
                { "image": "./Media/product_images/additional_images/7/Tricep_Rope_C.png" }
            ],
            "reviews": [
                {
                    "person": "Cody",
                    "comment": "Excellent Product",
                    "rating": 5
                },

                {
                    "person": "Justin",
                    "comment": "Good Product",
                    "rating": 4
                }

            ]

        },

        {
            "id": "8",
            "name": "Chest Supported Row",
            "category": "Weights",
            "featuredimage": "./Media/product_images/Chest_Supported_Row.png",
            "price": "€ 250",
            "stockcount": 7,
            "description": "Chest supported rows are some of the best back exercises that will help isolate the back muscles YET still allow you to lift heavy loads",
            "features": [
                {
                    "feature": "Increase stability and safety of pull exercise"
                },
                {
                    "feature": "It works your back, rear shoulders and improves your posture"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/8/Chest_Support_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/8/Chest_Support_B.png"
                },
                { "image": "./Media/product_images/additional_images/8/Chest_Support_C.png" }
            ],
            "reviews": [
                {
                    "person": "Michael",
                    "comment": "Good Product",
                    "rating": 4
                },

                {
                    "person": "Brendan",
                    "comment": "Great Product",
                    "rating": 4
                },

                {
                    "person": "Gilbert",
                    "comment": "Excellent Product",
                    "rating": 5
                }

            ]

        },

        {
            "id": "9",
            "name": "Push Ups Stands",
            "category": "Storage",
            "featuredimage": "./Media/product_images/Push_Ups_Stands.png",
            "price": "€ 50",
            "stockcount": 14,
            "description": "Push-up stands can help you exercise while you regain strength in your wrists, as push-up stands place your wrists in a more ergonomically neutral position",
            "features": [
                {
                    "feature": "Engage more muscles to maximize results"
                },
                { "feature": "360° stability with non-skid platform allows for use on multiple surfaces" },
                {
                    "feature": "Easy storage with stacking handles"

                }
            ],
            "additionalimages": [
                {
                    "image": "./Media/product_images/additional_images/9/Pushup_Stands_A.png"
                },
                {
                    "image": "./Media/product_images/additional_images/9/Pushup_Stands_B.png"
                },
                {
                    "image": "./Media/product_images/additional_images/9/Pushup_Stands_C.png"
                }
            ],
            "reviews": [
                {
                    "person": "Claudia",
                    "comment": "Good Product",
                    "rating": 4
                },

                {
                    "person": "John",
                    "comment": "Excellent Product",
                    "rating": 5
                },

                {
                    "person": "Nancy",
                    "comment": "Good Product",
                    "rating": 3
                }

            ]

        }

    ];

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
