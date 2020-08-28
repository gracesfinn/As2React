# ICT Skills Two - ReactJS App

## Modified Movie Fan App

Name: Grace Finnerty

## Overview.

Using the TMDB API as an endpoint I added to the moives react app by providing two new pages:


 + Popular Actors
 + Actor Details



## Setup requirements.

run 
npm install

## API Data Model.

Popular Actor Json
results: [
{
popularity: 66.387,
known_for_department: "Acting",
name: "Tessa Hoder",
id: 2263933,
profile_path: "/oBfjVOzILe9OnYOl3kuIl698GNY.jpg",
adult: false,
known_for: [
{
poster_path: "/uWC8vrvERAjKu7ecT1Tuu6ohKSh.jpg",
vote_count: 7,
video: false,
media_type: "movie",
id: 571683,
adult: false,
backdrop_path: "/zgl7RIABM0HybST6frkyC47pGQO.jpg",
original_language: "da",
original_title: "Selvhenter",
genre_ids: [
35
],
title: "Heavy Load",
vote_average: 6.6,
overview: "The two estranged brothers Emil and Magnus travel to Spain to bring home the body of their drunken and now dead father. What Emil doesn’t know is that Magnus has only agreed to go because of their father’s valuable Rolex watch which can save his bleeding finances. But when it turns out the transportation of the body will cost more than 10,000 Euro, Magnus convinces his reluctant little brother to run away with the body hidden in a roof box on top of a way too small rental car. Soon the two brothers find themselves on a wild escape from the police, and their father’s last trip forces them to face their own problems.",
release_date: "2019-03-07"
},
{
original_name: "Den som dræber - Fanget af mørket",
id: 87542,
media_type: "tv",
name: "Darkness: Those Who Kill",
vote_count: 6,
vote_average: 8.7,
first_air_date: "2019-02-22",
poster_path: "/6bstsCJ5JdAZ38nhmhv5dwzjibm.jpg",
genre_ids: [
80
],
original_language: "da",
backdrop_path: "/fUjCQnmMFP6rtEAmBcx3dFiMNDf.jpg",
overview: "Investigator Jan and profiler Louise constantly move around in the thrilling periphery of a murderer's view as they link a series of killings.",
origin_country: [
"DK"
]
},
{
original_name: "Ondt i Røven",
id: 87545,
media_type: "tv",
name: "Ondt i Røven",
vote_count: 0,
vote_average: 0,
first_air_date: "2019-02-04",
poster_path: "/dL56ODSZEv4YyD08K24W1UukNBV.jpg",
genre_ids: [
18
],
original_language: "da",
backdrop_path: "/kusfD6xOPmSLTqPArNLbKZLhVxk.jpg",
overview: "Tessa is enthralled by the Copenhagen queer community, after she moves onto a couch in the collective "The soft core". Here a new world opens to Tessa, who begins questioning herself and her life, while she eagerly struggles to fit in. It turns out not being too easy; in the queer community she looks too straight, is too privileged and ignorant, but among her hetero friends she's too queer. Sometimes you have find your community to find yourself.",
origin_country: [ ]
}
],
gender: 1
},

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /blogs - displays all published blogs.
+ /blogs/:id (private) - detail view of a particular blog.
+ /blogs/:id/comments (private) - detail view of a particular blog and its comments.
+ etc.
+ /person/:id
+ /actors
          

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/fileA.js
+ useContext hook - src/components/fileb.js
+ Extended Link - src/components/fileA.js
+ Programmatic navigation - src/pages/fileC.js
+ etc
+ etc
+ etc

## Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png