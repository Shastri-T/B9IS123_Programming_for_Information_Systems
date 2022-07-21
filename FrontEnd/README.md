# CA2 - B9IS123_Programming_for_Information_Systems

In this application, it is demonstrated how a RESTful Web API built using Django can be consumed in a frontend application.

Below are the steps required to run this application:

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


In the below section, we have specified a high level split of the tasks that we performed in this project:

Shastri: 
Creation of Git, 
Creation and testing of Django API,
Assist team members in cart functionality

Mohammed: 
Creation of mongodb atlas account and providing db access to all members,
Added PUT, Delete methods for Products in Django API
Creation of product detail page

Akhil:
Creation of web pages, required files and libraries for frontend
Creation of home page
Added ajax calls to leverage the API in frontend