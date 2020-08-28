# ICT Skills Two - ReactJS App

## Modified Movie Fan App

Name: Grace Finnerty

## Overview.

My plan for this assignment was to utilise the labs and apply what I had created for displaying movies to the actor information stored on TmDB. 
I focused on displaying a list of the most popular actors at the moment, and creating a page that had details about them and the movies they were best known for. I was able to successfully retrieve and display this information with the exception of the movies the actors had starred in. The credits component is created and save into the project however it is not active at this time. 

The two new pages which successfully render are:
 + Popular Actors
 + Actor Details


## Setup requirements.

Clone this repo.  Open an integrate terminal and run:

$ npm install

The MoviesApp communicates with The TMDB API. All requests to the API are authenticated by an API KEY. You should now acquire a personal key for your development by following these steps:

+ Signup for an account.
+ Log in to your account and click the "API" link in the left hand side bar of your account page.
+ In VS Code, in the project base folder create a new file called .env with the following content:

REACT_APP_TMDB_KEY=.... your API key value ...

## API Data Model.

#### Popular Actors Json:
![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/JsonPopPeople.PNG "Popular Actors")


#### Actors Details Json:
![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/JsonPerson.PNG "Actor Details Json")


## App Design.

### Component catalogue.

![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/ActorStories.png "ActorStories")

### UI Design.

I had planned more extensive edits to the UI of the site using the ant design library, however, due to time constraints I did not get as far as I'd hoped. 

#### Home Page Design:
![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/HomePage.png "HomePage")


#### Popular Actor List Design:
![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/ActorList.png "HomePage")

#### Actor Details Design:
![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/ActorDeet.png "HomePage")

#### Add Review Design:
![alt text](https://github.com/gracesfinn/As2React/blob/master/public/images/AddReview.png "HomePage")


### Routing.

The following route have been added to the Movies App:
+ /actors - this route displays all the actors that are returned using the /person/popular API call
+ /person/:id - this route displays the details of the actor who image was clicked on, getting the ID from the current URL via props.params

          

## React feature set.


#### useState and useEffect hooks 
+ src/components/actorCard.js
+ srcpages/actoListPage.js

#### useContext hook 
+ src/hooks/useActor.js
+ src/hooks/useCredits.js

#### Extended Link - 
+ src/components/actorCard.js

#### Programmatic navigation 
+ src/pages/actorDetailPage.js
+ src/pages/actorListPage.js


## Independent learning.
To expand on some of the UI I downloaded the ant library to my project. I tested some of the different feature, used them for some features. However, due to time constraints I did not utilise it as much as I would have liked.
