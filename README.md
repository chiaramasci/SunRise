#SunRise v1.0

<return>SunRise is an open source software that shows how solar energy can contribute both for the developed countries and for the undeveloped ones.
It consists of two subapplications: [companies](http://sunrise.cloudno.de/calculation) and [africa](http://sunrise.cloudno.de/solaraid) </return>
<return>Companies finds whether there is the necessity of optimizing the use of solar energy of a given company basing on the Pv system features and on the monthly electrical need.</return>
<return>Africa gives an idea to [Solar Aid](www.solar-aid.org) donors of how much his donation would contribute in the African people's lives.</return>

The online working website is at [sunrise.cloudno.de](http://sunrise.cloudno.de)

##How to install it?
1. Download the folder from github 
2. Install all npm dependencies with <return> 
```
npm install
```
3- Go to the folder that you downloaded 
```
cd <directory/of/the/downloaded/folder>
```
4- Run it 
```
node server.js
```
5- Go to the url 127.0.0.1/8080 in your browser!

##Usage
###Web application pages
1. [HOME](http://sunrise.cloudno.de): Explanation of what SunRise is
2. [ABOUT](http://sunrise.cloudno.de/about): Info on the Team, the Collaborations and Credits
3. [COMPANIES](http://sunrise.cloudno.de/calculation): App to help the companies to optimize the use of their PV systems
4. [AFRICA](http://sunrise.cloudno.de/solaraid): App to show the donors to Solar Aid how their contribution helps
5. [HELP](http://sunrise.cloudno.de/howto): Explaining the inputs to insert in Companies and in Africa, gives tips, more information about them

##Important notes
###Internet connection needed
Even if you download the application, in order to make it work internet connection is necessary. 

###Popup blocks
To show the graphs of the pages Companies and Africa a popup page is opened in another tab, therefore you should verify that your browser does not block the popups of SunRise. Click [here](http://sunrise.cloudno.de/howto#graph) to have more info.
The Risers Team guarantees that there are no ads on the SunRise website/local app

##Screenshots
###Companies
![companies example screenshot](/public/images/companies2.png)
![companies example screenshot](/public/images/companies3.png)
![companies example screenshot](/public/images/companies4.png)

###Africa
![companies example screenshot](/public/images/africa2.png)
![companies example screenshot](/public/images/africa3.png)
![companies example screenshot](/public/images/africa4.png)

##Credits
* Using Nasa Web World Wind software
* Solar Radiation data of ENEA – Energy Technologies Department – Thermal and Thermodynamic Solar Division – Research Centre Casaccia (RM) 
* African global solar irradiance data from the Joint Research Centre of the European Commission
* Data from Solar Aid 
* Free images from pixabay.com, www.pexels.com