// Register an event listener to be called when the page is loaded.
    window.addEventListener("load", eventWindowLoaded, false);
var lat = 8;
var long = 22;
var send = document.getElementById('chartButton');
var done = 0;

    // Define the event listener to initialize Web World Wind.
    function eventWindowLoaded() {
        // Create a World Window for the canvas.
        var wwd = new WorldWind.WorldWindow("map");

         //initial position
        wwd.navigator.lookAtLocation.latitude = lat;
        wwd.navigator.lookAtLocation.longitude = long;
        wwd.navigator.range = 2e7;

        // Add some image layers to the World Window's globe.
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

        //go to location
        send.addEventListener("click", function(){
        var lat = document.user_inputs.lat.value;
        var long = document.user_inputs.long.value;
        wwd.goToAnimator.goTo(new WorldWind.Location(lat, long));
        var placemark,
              placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
              highlightAttributes,
              placemarkLayer = new WorldWind.RenderableLayer("Placemark"),
              latitude = lat,
              longitude = long;

          // Set up the common placemark attributes.
          placemarkAttributes.imageScale = 1;
          placemarkAttributes.imageOffset = new WorldWind.Offset(
              WorldWind.OFFSET_FRACTION, 0.5,
              WorldWind.OFFSET_FRACTION, 0.5);
          placemarkAttributes.imageColor = WorldWind.Color.WHITE;
          placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
                      WorldWind.OFFSET_FRACTION, 0.5,
                      WorldWind.OFFSET_FRACTION, 1.0);
          placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;

          // Create the custom image for the placemark.
          var canvas = document.createElement("canvas"),
              ctx2d = canvas.getContext("2d"),
              size = 64, c = size / 2  - 0.5, innerRadius = 5, outerRadius = 20;

          canvas.width = size;
          canvas.height = size;

          var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
          gradient.addColorStop(0, 'rgba(247, 229, 60,1)');
          gradient.addColorStop(0.5, 'rgba(247, 229, 60,0.5)');
          gradient.addColorStop(1, 'rgba(247, 229, 60,0)');

          ctx2d.fillStyle = gradient;
          ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
          ctx2d.fill();

          // Create the placemark.
          placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, 1e2), false, null);
          placemark.label = "The light you donated";
          placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

          // Create the placemark attributes for the placemark.
          placemarkAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
          // Wrap the canvas created above in an ImageSource object to specify it as the placemark image source.
          placemarkAttributes.imageSource = new WorldWind.ImageSource(canvas);
          placemark.attributes = placemarkAttributes;

          // Create the highlight attributes for this placemark. Note that the normal attributes are specified as
          // the default highlight attributes so that all properties are identical except the image scale. You could
          // instead vary the color, image, or other property to control the highlight representation.
          highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
          highlightAttributes.imageScale = 1.2;
          placemark.highlightAttributes = highlightAttributes;

          // Add the placemark to the layer.
                  placemarkLayer.addRenderable(placemark);

          // Add the placemarks layer to the World Window's layer list.
          wwd.addLayer(placemarkLayer);});

    }

var error_space = document.getElementById("errors");

var latitudes = [37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24, -25, -26, -27, -28, -29, -30, -31, -32, -33, -34];
var longitudes = [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17];

function sinDeg (deg){
/*
     PARAMETERS
     ----------
     deg : int or float
     It is the angle in degrees

     FUNCTION
     --------
     It calculates the sin of an angle in degrees after converting it in radians

     RETURNS
     -------
     Math.sin(rad) : float
     The sin of the angle
     */
    var rad = deg * Math.PI/180;
    return Math.sin(rad);}

function cosDeg (deg){
/*
     PARAMETERS
     ----------
     deg : int or float
     It is the angle in degrees

     FUNCTION
     --------
     It calculates the cos of an angle in degrees after converting it in radians

     RETURNS
     -------
     Math.cos(rad) : float
     The cos of the angle
     */
    var rad = deg * Math.PI/180;
    return Math.cos(rad);}

function tanDeg (deg){
/*
     PARAMETERS
     ----------
     deg : int or float
     It is the angle in degrees

     FUNCTION
     --------
     It calculates the tan of an angle in degrees after converting it in radians

     RETURNS
     -------
     Math.tan(rad) : float
     The tan of the angle
     */
    var rad = deg * Math.PI/180;
    return Math.tan(rad);}

function acosDeg(cos){
/*
     PARAMETERS
     ----------
     cos : int or float
     It is the cos of an angle

     FUNCTION
     --------
     It finds the angle in degrees from cos

     RETURNS
     -------
     rad * 180/Math.PI : float
     The angle in degrees
     */
    var rad = Math.acos(cos);
    return rad * 180/Math.PI;}

function atanDeg(tan){
/*
     PARAMETERS
     ----------
     tan : int or float
     It is the tan of an angle

     FUNCTION
     --------
     It finds the angle in degrees from tan

     RETURNS
     -------
     rad * 180/Math.PI : float
     The angle in degrees
     */
    var rad = Math.atan(tan);
    return rad * 180/Math.PI;}

//VALIDATION
function validation(){
    /*
     PARAMETERS
     ----------

     FUNCTION
     --------
     It verifies if the data inserted is right for the calculations that have to be done.
     As regards to the gmt, except if "global" was chosen the location dropdown menu, for each state is inserted the right one.

     RETURNS
     -------

     */

    //location verification
    var lat = document.user_inputs.lat.value;
    var long = document.user_inputs.long.value;

    if ((lat == "") || (lat == "undefined") || isNaN(lat)) {
                   error_space.innerHTML = "Insert longitude in sexadecimal degrees";
                   document.user_inputs.lat.focus();
                   return false;
                }

    if ((long == "") || (long == "undefined") || isNaN(long)) {
           error_space.innerHTML = "Insert longitude in sexadecimal degrees";
           document.user_inputs.long.focus();
           return false;
        }

    //gmt verification
    if(state == "global"){
        var gmt = document.user_inputs.gmt.value;

        if ((gmt == "") || (gmt == "undefined") || isNaN(gmt)) {
                           error_space.innerHTML = "Please, enter the time zone";
                           document.user_inputs.donation.focus();
                           return false;
                        }
    }else{
    if (state=="kenya"){
        var gmt = 3;}

    if(state=="malawi"){
        var gmt = 2;}

    if(state=="zambia"){
        var gmt = 2;}

    if(state == "tanzania"){
        var gmt = 3;}
    }

    //donation verification
    var donation = document.user_inputs.donation.value;
    if ((donation == "") || (donation == "undefined") || isNaN(donation) || (donation < 3)) {
               error_space.innerHTML = "Insert donation higher than 3";
               document.user_inputs.donation.focus();
               return false;
            }


    else{
    console.log("All perfect, let's go!");
    calculation();
    }
}

//FUNCTIONS
 function x1_x2(long,longitudes){
        /*
         PARAMETERS
         ----------
            long : float
            it is the longitudes of the location of the solar panels

            longitudes : list
            it is the list of the longitudes in the csv data


         FUNCTION
         --------
            It calculates the x1 and x2 necessary for the interpolation function

         RETURNS
         -------
            x1 : integer
            x2 : integer
         */
          for(i = 0; i < longitudes.length; i++){
             var long_try = longitudes[i] - long;

              if(long_try < 1 && long_try >= 0){
                  x1 = longitudes[i];
                  x2 = longitudes[i+1];
                  return [x1,x2];
              }
          };
      }

 function y1_y2(lat,latitudes){
        /*
         PARAMETERS
         ----------
            lat : float
            it is the latitudes of the location of the solar panels

            latitudes : list
            it is the list of the latitudes in the csv data


         FUNCTION
         --------
            It calculates the y1 and y2 necessary for the interpolation function

         RETURNS
         -------
            y1 : integer
            y2 : integer
         */
    for(i = 0; i < latitudes.length; i++){
         var lat_try = latitudes[i] - lat;

         if(lat_try < 1 && lat_try >= 0){
              y1 = latitudes[i];
              y2 = latitudes[i+1];
              return [y1,y2];
          }
      };
 }

 function H_month(month,x1_index,x2_index,y1_index,y2_index){
          /*
              PARAMETERS
              ----------
                 month : file
                 it is the variable that represents the file in which the daily averages of sun radiation values
                 of a given month are shown

                 y1_index : integer
                 It is the index used in the latitudes list of the variable y1

                 y2_index : integer
                 It is the index used in the latitudes list of the variable y2

                 x1_index : integer
                 It is the value of x1

                 x2_index :integer
                 It is the value of x2


              FUNCTION
              --------
                 It finds the solar irradiation of the four points nearest to the location inserted by the user.
                 They are necessary in order to do the interpolation

              RETURNS
              -------
                 H_month : list
                 It is the list of the solar irradiation of the four points
              */
         var H1 = month[y1_index][x1_index];
         var H2 = month[y2_index][x1_index];
         var H3 = month[y1_index][x2_index];
         var H4 = month[y2_index][x2_index];

           var H_month = [];
           H_month.push(H1,H2,H3,H4);

           return H_month;}


      //interpolation
      function getFirstArea(lat,long,x1,y1){
          var b = long-x1;
          var h = y1-lat;

          return b*h;
      }

      function getSecondArea(lat,long,x2,y1){
          var b = x2-long;
          var h = y1-lat;

          return b*h;
      }

      function getThirdArea(lat,long,x1,y2){
          var b = long-x1;
          var h = lat-y2;

          return b*h;
      }

      function getFourthArea(lat,long,x1,y2){
          var b = x2-long;
          var h = lat-y2;
          return b*h;
      }

      function interpolation(lat,long,x1,x2,y1,y2,H_xy_array){
            /*
             PARAMETERS
             ----------
                lat : float
                it is the latitudes of the location of the solar panels

                long : float
                it is the list of the latitudes in the csv data

                x1 : integer
                description

                x2 : integer
                description

                y1 : integer
                description

                y2 : integer
                description

                H_xy_array : list
                It is the list of the 4 values of solar irradiance (H) of the points with the coordinates x1,x2,y1,y2
                in the table


             FUNCTION
             --------
                It interpolates the 4 values of solar irradiance of the points in the table
                nearest to the photovoltaic panels location to find out the solar irradiance in
                the given position in a given month

             RETURNS
             -------
                Solar irradiance of the location of the solar panels in the given month
             */

          var A1 = getFirstArea(lat,long,x1,y1);
          var A2 = getSecondArea(lat,long,x2,y1);
          var A3 = getThirdArea(lat,long,x1,y2);
          var A4 = getFourthArea(lat,long,x2,y2);

          var H1 = H_xy_array[0];
          var H2 = H_xy_array[1];
          var H3 = H_xy_array[2];
          var H4 = H_xy_array[3];

          return (A1*H4 + A2*H3 + A3*H2 + A4*H1)/(A1+A2+A3+A4);
      }

      function JulianDaysExtract(solar_table){
      /*
                   PARAMETERS
                   ----------
                      solar_table : csv file

                   FUNCTION
                   --------
                      It finds the Julian Day of the most representative day of each month

                   RETURNS
                   -------
                      JulianDays : list
                      It is the list of the Julian Days of the most representative day of each month
                   */
                JulianDays = [];
                for(i=0; i<12; i++){
                var JulianDay_month = solar_table[i]["giorno_giuliano"];
                JulianDays.push(JulianDay_month);
                };
                return JulianDays;
            }

      function solarDeclination (JulianDays){
      /*
       PARAMETERS
       ----------
          JulianDays : list
          The Julian Days of the most representative day per each month

       FUNCTION
       --------
          It calculates the solar declination in each Julian Day in the list

       RETURNS
       -------
          solarDeclinations : list
          It is the list of the solar declinations per each Julian Day in the list
       */
                solarDeclinations = [];
                for(i=0; i<12; i++){
                  var n = parseFloat(JulianDays[i]);

                  var solInDegree = ((284 + n)/365) * 360
                  var solInRadiants = solInDegree * Math.PI / 180.0;
                  var sol_decl = 23.45 * Math.sin(solInRadiants);

                  solarDeclinations.push(sol_decl);
                };
                return solarDeclinations;
                }


      function Sunset(JulianDays, solarDeclinations, long, lat, time_zone){
      /*
             PARAMETERS
             ----------
                JulianDays : list
                The Julian Days of the most representative day per each month

                solarDeclinations : list
                The solar declinations of all the Julian Days of the most representative days per each month

                long : float
                The longitude inserted by the user in the form "user_inputs"

                lat : float
                The latitude inserted by the user in the form "user_inputs"

                time_zone : int
                The gmt found in the function 'validation' (if "Global" was selected, the gmt is selected by the user)

             FUNCTION
             --------
                It calculates the sunset hour in the most reprensentative day of each month

             RETURNS
             -------
                Sunsets : list
                Sunsets hour in the most representative day of each month
             */
            var Sunsets = [];
                for(i = 0; i < 12; i++){
                var N = JulianDays[i];
                var sol_decl = solarDeclinations[i];
                var LSTM = 15 * time_zone;
                var B = 360/365 * (N - 81);
                var EoT = 9.87 * sinDeg(2 * B) - 7.53 * cosDeg(B) - 1.5 * sinDeg(B);
                var TC = 4 * (long - LSTM) + EoT;
                var Sunset_value = 12 + (1 / Math.pow(15,0)) + acosDeg((-sinDeg(lat) * sinDeg(sol_decl)) / (cosDeg(lat) * cosDeg(sol_decl))) - TC/60;
                var Sunset = 12 + Sunset_value / 15;
                Sunsets.push(Sunset);}

            return Sunsets;
      }

      function Sunrise(JulianDays, solarDeclinations, long, lat, time_zone){
      /*
           PARAMETERS
           ----------
              JulianDays : list
              The Julian Days of the most representative day per each month

              solarDeclinations : list
              The solar declinations of all the Julian Days of the most representative days per each month

              long : float
              The longitude inserted by the user in the form "user_inputs"

              lat : float
              The latitude inserted by the user in the form "user_inputs"

              time_zone : int
              The gmt found in the function 'validation' (if "Global" was selected, the gmt is selected by the user)

           FUNCTION
           --------
              It calculates the sunrise hour in the most reprensentative day of each month

           RETURNS
           -------
              Sunrises : list
              Sunrise hour in the most representative day of each month
           */
                  var Sunrises = [];
                      for(i = 0; i < 12; i++){
                      var N = JulianDays[i];
                      var sol_decl = solarDeclinations[i];
                      var LSTM = 15 * time_zone;
                      var B = 360/365 * (N - 81);
                      var EoT = 9.87 * sinDeg(2 * B) - 7.53 * cosDeg(B) - 1.5 * sinDeg(B);
                      var TC = 4 * (long - LSTM) + EoT;
                      var Sunrise_value = 12 - (1 / Math.pow(15,0)) + acosDeg((-sinDeg(lat) * sinDeg(sol_decl)) / (cosDeg(lat) * cosDeg(sol_decl))) - TC/60;
                      var Sunrise = 12 - Sunrise_value / 15;
                      Sunrises.push(Sunrise);}

                  return Sunrises;
            }

      function DayLightCalc(Sunrises,Sunsets){
      /*
         PARAMETERS
         ----------
            Sunrises : list
            Sunrise hour in the most representative day of each month

            Sunsets : list
            Sunset hour in the most representative day of each month

         FUNCTION
         --------
            It calculates the hours of natural light in the most representative day of each month

         RETURNS
         -------
            Daylight : list
            Hours of natural light in the most representative day of each month
         */
            var DayLight = [];
                  for(i = 0; i < 12; i++){
                  var Sunrise = Sunrises[i];
                  var Sunset = Sunsets[i];
                  var morning = 12 - Sunrise;
                  var afternoon = Sunset - 12;
                  var Hours = morning + afternoon;
                  DayLight.push(Hours);
                  }

            return DayLight;
                  }

      function powerCalc(H){
              /*
               PARAMETERS
               ----------
                  H : float
                  Solar irradiation

               FUNCTION
               --------
                  It calculates the output of the pv panel of the light "Sun King Pico"

               RETURNS
               -------
                  P : float
                  Output of the pv panel of the light "Sun King Pico"
               */
            var wp = 0.38; //watt peak of pv panel of the light "Sun King Pico"
            var P = wp * H * 0.75;
            return P;}

      function LampLightCalc(HofAllMonths, solar_light){
              /*
                 PARAMETERS
                 ----------
                    HofAllMonths : list
                    It is the global solar radiation per each month of the user's location

                    solar_light : int
                    number of "Sun King Pico" lights donated by the user

                 FUNCTION
                 --------
                    It calculates the hours of light added thanks to the use of "Sun King Pico" light in a day

                 RETURNS
                 -------
                    LampLight : list
                    Hours of light added thanks to the use of "Sun King Pico" light in the most representative day of each month
                 */

            var W = 0.88; //watt of the light "Sun King Pico"
            var lamp_kwh = W / 1000; //kwh
            var AH = 0.47;
            var V = 3.2;
            var output_battery = AH * V; //wh

            var LampLight = [];
                for (i = 0; i < 12; i++){
                var H = HofAllMonths[i];
                var P = powerCalc(H);

                    //here says that if the output of the pv panel is higher
                    //than the energy that the battery can contain, the watt-hours that
                    //have to be considered is stored in the variable "output_battery"
                    //If not, the watt-hours is the output of the pv panel (variable "P")
                    if(P >= output_battery){
                    var WH = output_battery}
                    else if (P < output_battery){
                    var WH = P;}

                var lampHours = (WH / (lamp_kwh * 1000)) * 0.96 * solar_light;
                LampLight.push(lampHours);
                }

            return LampLight;}

      function TotalLightCalc(DayLight,lampHours){
      /*
           PARAMETERS
           ----------
              Daylight : list
              Hours of natural light in the most representative day of each month

              lampHours : list
              Hours of light added thanks to the use of "Sun King Pico" light in the most representative day of each month

           FUNCTION
           --------
              It sums the hours of natural day light to the hours added by the "Sun King Pico" lights
              for each representative day of each month.

           RETURNS
           -------
              TotalHoursList : list
              Total of hours of light per each representative day of each month
           */

            var TotalHoursList = [];

            for (i = 0; i < 12; i++){
            var TotalHours = lampHours[i] + DayLight[i];
            TotalHoursList.push(TotalHours);}

            return TotalHoursList;}

      function stateDataCalc(state){
                /*
                 PARAMETERS
                 ----------
                    state : string
                    The state selected by the user

                 FUNCTION
                 --------
                    It assigns values to the variables needed for the report (in the graph page)
                    depending on the state chosen by the user

                 RETURNS
                 -------
                    stateData : list
                    The variables needed for the report of the state chosen by the user
                 */

            var state = document.user_inputs.state.value;
            var stateData = [];
                if (state=="kenya"){
                    var house = 6.8;
                    var saving_val = 116.9;
                    var study_hours = 130;
                    var student = 3.2;
                    var co2 = 1.76;
                    var health = 0.81;}

                if(state == "malawi"){
                    var house = 6.2;
                    var saving_val = 25.18;
                    var study_hours = 221;
                    var student = 3.1;
                    var co2 = 1.76;
                    var health = 0.81;}

                if(state=="zambia"){
                    var house = 7.4;
                    var saving_val = 73.67;
                    var study_hours = 169;
                    var student = 3.3;
                    var co2 = 1.76;
                    var health = 0.81;}

                if(state == "tanzania"){
                    var house = 6.4;
                    var saving_val = 51.61;
                    var study_hours = 156;
                    var student = 2.6;
                    var co2 = 1.76;
                    var health = 0.81;}

                if(state == "global"){
                    var house = 5.0;
                    var saving_val = 79.19;
                    var study_hours = 131.977;
                    var student = 2.6186;
                    var co2 = 1.76;
                    var health = 0.81;}

                if(state == "idk"){
                    var house = 6.7;
                    var saving_val = 66.48;
                    var study_hours = 169;
                    var student = 3.1;
                    var co2 = 1.76;
                    var health = 0.81;}

            stateData.push(house,saving_val,study_hours,student,co2,health);
            console.log(stateData);
            return stateData;
      }

      function solar_lightCalc(donation){
      /*
               PARAMETERS
               ----------
                  donation : float
                  The donation inserted by the user

               FUNCTION
               --------
                  It calculates the number of lights donated thanks to the amount
                  inserted

               RETURNS
               -------
                  solar_light : int
                  Number of lights
               */

            var solar_light = Math.round(donation / 3.1);
            return solar_light;}

      function people_reachedCalc(state,solar_light,house){
      /*
               PARAMETERS
               ----------
                  state : string
                  The state chosen by the user in the form

                  solar_light : int
                  Number of lights

                  house : float
                  Average of people in a family in the state chosen by the user


               FUNCTION
               --------
                  It calculates how many people are reached by the donation done by
                  the user

               RETURNS
               -------
                  people_reached : float
                  people reached by the donation of the user
               */

            if (state == "global"){
                var people_reached = solar_light * house * 0.87;}
            else{
                var people_reached = solar_light * house * 0.95;}

            return people_reached;}

      function extra_studyCalc(state,solar_light,study_hours,student){
                /*
                     PARAMETERS
                     ----------
                        state : string
                        The state chosen by the user in the form

                        solar_light : int
                        Number of lights

                        study_hours : float
                        number of study hours per student in a year in the state selected by the user

                        student : float
                        number of students in a family in the state selected by the user


                     FUNCTION
                     --------
                        It calculates how many hours of studying the user is donating

                     RETURNS
                     -------
                        extra_study : float
                        hours of studying the user is donating
                     */

            if (state == "global"){
                var extra_study = solar_light * study_hours * student * 3 * 0.97;}
            else{
                var extra_study = solar_light * study_hours * student * 3 * 0.95;}


            return extra_study;}

      function co2_avertedCalc(state,solar_light,co2){
      /*
               PARAMETERS
               ----------
                  state : string
                  The state chosen by the user in the form

                  solar_light : int
                  Number of lights

                  co2 : float


               FUNCTION
               --------
                  It calculates how much co2 of the kerosene lamps is averted
                  thanks to the donation of the user in three years

               RETURNS
               -------
                  co2_averted : float
                  co2 averted in 3 years thanks to the donation
               */
            if (state == "global"){
                var co2_averted = solar_light * co2 * 0.37 * 3 * 0.97;}
            else{
                var co2_averted = solar_light * co2 * 0.2 * 3;}

            return co2_averted;
      }

      function healthy_peopleCalc(state,solar_light,health,house){
      /*
             PARAMETERS
             ----------
                state : string
                The state chosen by the user in the form

                solar_light : int
                Number of lights

                health : float
                people experiencing better health thanks to your donation

                house : float
                Average of people in a family in the state chosen by the user

             FUNCTION
             --------
                It calculates how many people can experience better health thanks to the donation

             RETURNS
             -------
                healthy_people : float
                people experiencing better health thanks to the donation
             */

            if (state == "global"){
                var healthy_people = solar_light * health * house * 0.97;}
            else{
                var healthy_people = solar_light * health * house;}

            return healthy_people;
      }

      function reportHappy(state,stateData,donation){
      /*
         PARAMETERS
         ----------
            state : string
            The state chosen by the user in the form

            stateData : list
            The variables found in the function "stateDataCalc" from the state selected by
            the user

            donation : float
            The donation inserted by the user


         FUNCTION
         --------
            It calculates the values for the report in the graph page, basing on the variables
            found in the function "stateDataCalc"

         RETURNS
         -------
            contribute : list
            variables for the report
         */

            var house = stateData[0];
            var saving_val = stateData[1];
            var study_hours = stateData[2];
            var student = stateData[3];
            var co2 = stateData[4];
            var health = stateData[5];

            var contribute = [];

                var solar_light = solar_lightCalc(donation);
                var people_reached = people_reachedCalc(state,solar_light,house);
                var money_saved = solar_light * saving_val * 3;
                var extra_study = extra_studyCalc(state,solar_light,study_hours,student);
                var co2_averted = co2_avertedCalc(state,solar_light,co2);
                var healthy_people = healthy_peopleCalc(state,solar_light,health,house);
                contribute.push(solar_light,people_reached,money_saved,extra_study,co2_averted,healthy_people);

            console.log(contribute);
            return contribute;}


      function loadData(){

           var lat = document.user_inputs.lat.value;
           var long = document.user_inputs.long.value;
           var donation = document.user_inputs.donation.value;
           var gmt = document.user_inputs.gmt.value;

           //finding index to obtain H1,H2,H3,H4
               var y1_index = 37 - y1;
               var y2_index = y1_index + 1;
               var x1_index = x1;
               var x2_index = x2;

           //csv files to load
           d3.queue()
                 .defer(d3.csv, "/data/data_africa/month_1.csv")
                 .defer(d3.csv, "/data/data_africa/month_2.csv")
                 .defer(d3.csv, "/data/data_africa/month_3.csv")
                 .defer(d3.csv, "/data/data_africa/month_4.csv")
                 .defer(d3.csv, "/data/data_africa/month_5.csv")
                 .defer(d3.csv, "/data/data_africa/month_6.csv")
                 .defer(d3.csv, "/data/data_africa/month_7.csv")
                 .defer(d3.csv, "/data/data_africa/month_8.csv")
                 .defer(d3.csv, "/data/data_africa/month_9.csv")
                 .defer(d3.csv, "/data/data_africa/month_10.csv")
                 .defer(d3.csv, "/data/data_africa/month_11.csv")
                 .defer(d3.csv, "/data/data_africa/month_12.csv")
                 .defer(d3.csv, "/data/solar_declination.csv")
                 .await(analyze);

            function analyze(error, month_1, month_2, month_3, month_4, month_5, month_6, month_7, month_8, month_9, month_10, month_11, month_12,solar_table) {
                         if(error) { console.log(error); }
                         console.log('Csv loaded successfully!');
                         console.log(solar_table);

                         console.log('Getting H of all Months of x1,x2,y1,y2')
                         var H_xy_jan = H_month(month_1,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_feb = H_month(month_2,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_mar = H_month(month_3,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_apr = H_month(month_4,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_may = H_month(month_5,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_jun = H_month(month_6,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_jul = H_month(month_7,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_aug = H_month(month_8,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_sep = H_month(month_9,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_oct = H_month(month_10,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_nov = H_month(month_11,x1_index,x2_index,y1_index,y2_index);
                         var H_xy_dec = H_month(month_12,x1_index,x2_index,y1_index,y2_index);


                         console.log('Getting H for solar panels location');
                           var H_jan = interpolation(lat,long,x1,x2,y1,y2,H_xy_jan);
                           var H_feb = interpolation(lat,long,x1,x2,y1,y2,H_xy_feb);
                           var H_mar = interpolation(lat,long,x1,x2,y1,y2,H_xy_mar);
                           var H_apr = interpolation(lat,long,x1,x2,y1,y2,H_xy_apr);
                           var H_may = interpolation(lat,long,x1,x2,y1,y2,H_xy_may);
                           var H_jun = interpolation(lat,long,x1,x2,y1,y2,H_xy_jun);
                           var H_jul = interpolation(lat,long,x1,x2,y1,y2,H_xy_jul);
                           var H_aug = interpolation(lat,long,x1,x2,y1,y2,H_xy_aug);
                           var H_sep = interpolation(lat,long,x1,x2,y1,y2,H_xy_sep);
                           var H_oct = interpolation(lat,long,x1,x2,y1,y2,H_xy_oct);
                           var H_nov = interpolation(lat,long,x1,x2,y1,y2,H_xy_nov);
                           var H_dec = interpolation(lat,long,x1,x2,y1,y2,H_xy_dec);

                           var HofAllMonths = [];
                           HofAllMonths.push(H_jan,H_feb,H_mar,H_apr,H_may,H_jun,H_jul,H_aug,H_sep,H_oct,H_nov,H_dec);
                           console.log('Interpolation completed :)');

                           var JulianDays = [];
                           JulianDays = JulianDaysExtract(solar_table);
                           console.log('Julian Days extracted!');

                           var solarDeclinations = [];
                           solarDeclinations = solarDeclination(JulianDays);
                           console.log('Solar declinations as well');

                           var Sunsets = [];
                           var Sunrises = [];
                           Sunsets = Sunset(JulianDays, solarDeclinations, long, lat, gmt);
                           Sunrises = Sunrise(JulianDays, solarDeclinations, long, lat, gmt);

                           var DayLight = [];
                           DayLight = DayLightCalc(Sunrises,Sunsets);


                           stateData = [];
                           stateData = stateDataCalc(state);
                           console.log('Data regarding to the selected state gathered');

                           var contribute = [];
                           contribute = reportHappy(state,stateData,donation);

                           var solar_light = contribute[0];

                           var LampLight = [];
                           LampLight = LampLightCalc(HofAllMonths,solar_light);
                           console.log(LampLight);

                           var TotalHours = [];
                           TotalHours = TotalLightCalc(DayLight,LampLight);
                           console.log(TotalHours);

                           var LampLightYear = lampLightYearCalc(LampLight);
                           done = 1;

                           var chartButton = document.getElementById("chartButton");
                           chartButton.addEventListener("click", ChartShow(DayLight, contribute));

                           function ChartShow(DayLight, contribute){
                               var ChartPage = window.open('/graph_solaraid');

                               ChartPage.DayLight_chart = DayLight;
                               ChartPage.solar_light = contribute[0];
                               ChartPage.people_reached = Math.round(contribute[1]);
                               ChartPage.money_saved = Math.round(contribute[2]);
                               ChartPage.extra_study = Math.round(contribute[3]);
                               ChartPage.co2_averted = Math.round(contribute[4]);
                               ChartPage.healthy_people = Math.round(contribute[5]);
                               ChartPage.LampLight = TotalHours;
                               ChartPage.donation = donation;
                                 }

                          }




                 }


 //----------------------------MAIN----------------------------------
 function calculation(){
     //VARIABLES
         //user's
         var state = document.user_inputs.state.value;
         var lat = document.user_inputs.lat.value;
         var long = document.user_inputs.long.value;
         var donation = document.user_inputs.donation.value;
         var gmt = document.user_inputs.gmt.value;

         //global
         var x1;
         var x2;
         var y1;
         var y2;
         var HofAllMonths;

         var H;

     console.log("Inputs loaded. Start working...");

     //CALLS
         //x and y
         var x1,x2 = x1_x2(long,longitudes);
         var y1,y2 = y1_y2(lat,latitudes);

         //data loading, analysis and H1,H2,H3,H4
         HofAllMonths = loadData();

     }