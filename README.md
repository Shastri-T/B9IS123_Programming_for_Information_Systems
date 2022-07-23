# CA2 - B9IS123_Programming_for_Information_Systems

Topic: Online fitness web application - with javascript frontend, django web api and mongodb backend database





*** Individual areas of responsibility ***

1. Akhil: Overall Frontend app (home page, product description page, cart)

2. Mohammed : Frontend app (product description page, cart), addition of PUT and DELETE methods in Django product module

3. Shastri: Backend Django API creation and testing





*** Individual contributions ***

Shastri: 
1. Created Git, 
2. Created and Tested Django API, 
3. Assisted team members in cart functionality by providing them information on online resources explaining REST API to update, delete items,
4. Project documentation,
5. Implemented presentation feedback which involved my part - removed  price column from the Cart model in DJango and kept only the UserID, ItemID and Quantity in Cart and migrated the changes from api to the database. Verfied that the new columns got updated successfully.

Mohammed: 
1. Creation of mongodb atlas account and providing db access to all members,
2. Added POST, Delete methods for Products in Django API,
3. Creation of product detail page

Akhil:
1. Creation of web pages, required files and libraries for frontend,
2. Creation of home page,
3. Added ajax calls to leverage the API in frontend






*** Individual code attributions ***

1.	10606539 (Shastri):	I have not taken over the code from anywhere in the API part which I did. However, I would like to acknowledge all the resources which I used for learning, and which served as a reference point for me when I wrote the views, models, URLs, made important settings etc.:

I referred below links to learn about Django Web API:

https://docs.microsoft.com/en-us/learn/paths/django-create-data-driven-websites/

https://www.youtube.com/watch?v=i5JykvxUk_A

https://www.youtube.com/watch?v=ejJ-2oz4AgI

https://www.bezkoder.com/django-mongodb-crud-rest-framework/

Outcomes: After following the above links, I understood the following concepts and created the API by myself –

a)	Basics and usage of models, migrations, URL routing and views.

b)	All the required libraries like Djongo, dnspython etc. that were needed to connect with MongoDB atlas.

c)	Required settings like CORS, Middleware, database connection strings etc.

d)	Testing the API using API testing tools like postman.


Below are few additional links which I used as a reference for learning during this project:

a)	https://www.mongodb.com/compatibility/mongodb-and-django - to know about the different ways available to connect Django with MongoDB.

b)	https://pypi.org/project/django-cors-headers/ - to understand CORS.

c)	https://www.tutorialspoint.com/adding-json-field-in-django-models - followed this to add JSON field in the models.

d)	https://code.visualstudio.com/docs/python/tutorial-django - to create virtual environment, generating requirements.txt file.



2. 10614532	(Mohammed):

Used my CA1 group project of web and mobile course and modified it to consume the Django API for displaying product information details. Below is the github link to my web and mobile group project for reference:

https://github.com/Shastri-T/B9IS124_Web_and_Mobile_Technologies 


Followed below tutorial as a reference to know how to write the Put, Delete methods for product model in Django:

https://www.django-rest-framework.org/tutorial/2-requests-and-responses/



3. 10610852	(Akhil):

Used the existing CA1 group project of my group member’s web and mobile course to modify and consume the API for displaying product information details:

https://github.com/Shastri-T/B9IS124_Web_and_Mobile_Technologies 


Used below tutorials to learn and write the ajax calls in the frontend pages:

https://spring.io/guides/gs/consuming-rest-jquery/

https://bshoo.medium.com/basic-web-app-with-django-rest-framework-and-jquery-ajax-c3a6a2ce3188 

https://www.c-sharpcorner.com/UploadFile/dacca2/web-api-with-ajax-make-put-request-in-restful-web-api-servi/

https://www.c-sharpcorner.com/UploadFile/dacca2/web-api-with-ajax-understand-delete-verb-in-restful-web-api/ 





*** Steps required to run the application ***

1. In order to run this application, mongo db atlas account is required and database connectionstring can be modified to point to the database in the settings.py file


2. The existing virtual environment '.venv' folder can be deleted and a new environment can be created by running the below commands:

py -m venv .venv
.venv\scripts\activate


3. All the required libraries/modules can be installed by running the below command:

pip install -r requirements.txt


4. Any new tables, changes to existing tables and columns can be done by adding or modifying the existing models in models.py file. The below commands migrates the changes into the database:

python manage.py makemigrations FitnessFactoryApp

python manage.py migrate FitnessFactoryApp


5. Run the django app with the below command:

python manage.py runserver



