//LOADING WEB WORLD WIND
var send = document.getElementById('chartButton');

     // Register an event listener to be called when the page is loaded.
    window.addEventListener("load", eventWindowLoaded, false);
var lat = 42.51;
var long = 12;
    // Define the event listener to initialize Web World Wind.
    function eventWindowLoaded() {
        // Create a World Window for the canvas.
        var wwd = new WorldWind.WorldWindow("map");

         //initial position
       wwd.navigator.lookAtLocation.latitude = lat;
        wwd.navigator.lookAtLocation.longitude = long;
        wwd.navigator.range = 17e5; //200 000 meters


        // Add some image layers to the World Window's globe.
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());

        // Add a compass, a coordinates display and some view controls to the World Window.
        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

    }


//VARIABLES
    //errors
    var error_space = document.getElementById("errors");

    //user's


    //initial
    var latitudes = [48,47,46,45,44,43,42,41,40,39,38,37,36,35];
    var longitudes = [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    var n_days = [31,28,31,30,31,30,31,31,30,31,30,31];
    var Tambs = [25,25,25,25,25,25,25,25,25,25,25,25];//FAKISSIMO

function sinDeg (deg){
    var rad = deg * Math.PI/180;
    return Math.sin(rad);}

function cosDeg (deg){
    var rad = deg * Math.PI/180;
    return Math.cos(rad);}

function tanDeg (deg){
    var rad = deg * Math.PI/180;
    return Math.tan(rad);}

function acosDeg(cos){
    var rad = Math.acos(cos);
    return rad * 180/Math.PI;}

function atanDeg(tan){
    var rad = Math.atan(tan);
    return rad * 180/Math.PI;}

//VALIDATION
function validation(){
    /*
     PARAMETERS
     ----------
     no one

     FUNCTION
     --------
     It checks if the input data is valid.
     If it is valid, it runs calculation() which executes the calculation

     RETURNS
     -------
     nothing
     */

    var lat = document.user_inputs.lat.value;
    var long = document.user_inputs.long.value;
    var tilt = document.user_inputs.tilt.value;
    var azimuth = document.user_inputs.azimuth.value;
    var corifl = document.user_inputs.corifl.value;
    var solar_type = document.user_inputs.type.value;
    var kwp = document.user_inputs.kwp.value;
    var standing = document.user_inputs.standing.value;

     var energy1 = document.user_inputs.energy1.value;
     var energy2 = document.user_inputs.energy2.value;
     var energy3 = document.user_inputs.energy3.value;
     var energy4 = document.user_inputs.energy4.value;
     var energy5 = document.user_inputs.energy5.value;
     var energy6 = document.user_inputs.energy6.value;
     var energy7 = document.user_inputs.energy7.value;
     var energy8 = document.user_inputs.energy8.value;
     var energy9 = document.user_inputs.energy9.value;
     var energy10 = document.user_inputs.energy10.value;
     var energy11 = document.user_inputs.energy11.value;
     var energy12 = document.user_inputs.energy12.value;


    if ((lat == "") || (lat == "undefined") || isNaN(lat) || tilt < 0) {
       error_space.innerHTML = "Inserire latitudine in numeri decimali";
       document.user_inputs.lat.focus();
       return false;
    }

    if ((long == "") || (long == "undefined") || isNaN(long) || long < 0) {
           error_space.innerHTML = "Inserire longitudine in numeri decimali";
           document.user_inputs.long.focus();
           return false;
        }

    if ((tilt == "") || (tilt == "undefined") || isNaN(tilt) || tilt > 90 || tilt < 0) {
               error_space.innerHTML = "Inserire inclinazione";
               document.user_inputs.tilt.focus();
               return false;
            }

    if ((azimuth == "") || (azimuth == "undefined") || isNaN(azimuth) || azimuth > 90 || azimuth < -90) {
                   error_space.innerHTML = "Inserire orientamento tra +90 e -90";
                   document.user_inputs.azimuth.focus();
                   return false;
                }

    if ((corifl == "") || (corifl == "undefined") || isNaN(corifl) || corifl > 1 || corifl < 0) {
                       error_space.innerHTML = "Inserire piano di appoggio";
                       document.user_inputs.corifl.focus();
                       return false;
                    }

    if ((solar_type == "") || (solar_type == "undefined")) {
                           error_space.innerHTML = "Inserire tipo";
                           document.user_inputs.type.focus();
                           return false;
                        }

    if ((kwp == "") || (kwp == "undefined") || isNaN(corifl)) {
                           error_space.innerHTML = "Inserire kwp";
                           document.user_inputs.kwp.focus();
                           return false;
                        }

    if ((standing == "") || (standing == "undefined")) {
                               error_space.innerHTML = "Inserire standing";
                               document.user_inputs.standing.focus();
                               return false;
                            }

    if ((energy1 == "") || (energy1 == "undefined") || isNaN(energy1) || energy1 < 0) {
               error_space.innerHTML = "Inserire longitudine in numeri decimali";
               document.user_inputs.energy1.focus();
               return false;
            }

    if ((energy2 == "") || (energy2 == "undefined") || isNaN(energy2) || energy2 < 0) {
                   error_space.innerHTML = "Inserire longitudine in numeri decimali";
                   document.user_inputs.energy1.focus();
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
                It findes the solar irradiations of the four points nearest to the location inserted by the user.
                They are necessary in order to do the interpolation

             RETURNS
             -------
                H_month : list
                It is the list of the solar irradiations of the four points
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
          JulianDays = [];
          for(i=0; i<12; i++){
          var JulianDay_month = solar_table[i]["giorno_giuliano"];
          JulianDays.push(JulianDay_month);
          };
          return JulianDays;
      }

      function solarDeclination (JulianDays){
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

      function Eo(JulianDays){
          Eos = [];
              for (i = 0; i < 12; i++){
              var n = JulianDays[i];
              n = parseFloat(n);
              var Eo = 1 + 0.033 * cosDeg((n/365)*360);
              Eos.push(Eo);}
          return Eos;
      }

      function Hd(solarDeclinations, lat, HofAllMonths, Eos){
        Hds = [];
            for(i = 0; i < 12; i++){
            var sol_decl = solarDeclinations[i];
            sol_decl = parseFloat(sol_decl);

            var Ws = acosDeg( (-(tanDeg(lat))) * tanDeg(sol_decl));
            Ws = Ws * (Math.PI / 180); //conversion in radiants

            var Ics = 1367;
            var Eo = Eos[i];
            var H = HofAllMonths[i];

            var Ho = Ics * Eo * (24/ Math.PI)*(Ws * sinDeg(lat) * sinDeg(sol_decl) + Math.sin(Ws) * cosDeg(lat) * cosDeg(sol_decl));
            Ho = Ho / 1000; //conversion

            var Kt = H / Ho;
            K = 0.881 - 0.972 * Kt;

            var Hd = K * H;
            Hds.push(Hd);
            };

        return Hds;
      }

      function Hb(HofAllMonths, Hds){
        var Hbs = [];
            for (i = 0; i < 12; i++){
            var Hb = HofAllMonths[i] - Hds[i];
            Hbs.push(Hb);}

        return Hbs;
      }

      function RbCalcFinal(Wc, Wsc, T, U, V, Tn, Un, Ws){
            return (T * (Wsc - Wc) + U * (sinDeg(Wsc) - sinDeg(Wc)) - V * (cosDeg(Wsc) - cosDeg(Wc))) / (2 * (Tn * Ws) + Un * sinDeg(Ws));
      }

      function RbCalc(delta, T, U, V, Tn, Un, Ws, Wa){

                  if (delta > 0){
                      var a = 2 * atanDeg((-V + Math.sqrt(delta)) / (T - U));
                      var b = 2 * atanDeg((-V - Math.sqrt(delta)) / (T - U));

                                if ((V * cosDeg(a)) > (U * sinDeg(a))){
                                var w1 = a;
                                var w2 = b;}

                                else if ((V * cosDeg(b)) > (U * sinDeg(b))){
                                var w1 = b;
                                var w2 = a;
                                }
                                else{
                                console.log('Oh no, something went wrong :(');}

                            if(w1 > Wa){
                            var Wc = w1;}
                            else if(w1 < Wa){
                            var Wc = Wa;}
                            else{
                            console.log('Oh no, something went wrong :(');}

                            if(w2 < Ws){
                            var Wsc = w2;}
                            else if(w2 > Ws){
                            var Wsc = Ws;}
                            else{
                            console.log('Oh no, something went wrong :(');}

                      var Rb = RbCalcFinal(Wc, Wsc, T, U, V, Tn, Un, Ws);

                  } else if(delta < 0 && T + U > 0) {
                  var Wc = Wa;
                  var Wsc = Ws;

                  var Rb = RbCalcFinal(Wc, Wsc, T, U, V, Tn, Un, Ws);

                  } else {
                  var Rb = 0;}

              return Rb;
          }

      function Hb_incl(solarDeclinations, Hbs, lat, tilt, azimuth){
            Hbs_incl = [];
               for(i = 0; i < 12; i++){
               var sol_decl = solarDeclinations[i];
               var Hb = Hbs[i];

                  var Ws = acosDeg( (-(tanDeg(lat))) * tanDeg(sol_decl));
                  var T = sinDeg(sol_decl) * (sinDeg(lat) * cosDeg(tilt) - cosDeg(lat) * sinDeg(tilt) * cosDeg(azimuth));
                  var U = cosDeg(sol_decl) * (cosDeg(lat) * cosDeg(tilt) + sinDeg(lat) * sinDeg(tilt) * cosDeg(azimuth));
                  var V = cosDeg(sol_decl) * sinDeg(tilt) * sinDeg(azimuth);
                  var Tn = sinDeg(sol_decl) * sinDeg(lat);
                  var Un = cosDeg(sol_decl) * cosDeg(lat);

                  var Wa = -Ws;
                  var delta = Math.pow(U,2) + Math.pow(V,2) + Math.pow(T,2);

                  var Rb = RbCalc(delta, T, U, V, Tn, Un, Ws, Wa);
                  var Hb_incl = Rb * Hb;
                  Hbs_incl.push(Hb_incl);}

              return Hbs_incl;
          }

      function Hd_incl(tilt, Hds){
            Hds_incl = [];
            for (i = 0; i < 12; i++){
                var Hd = Hds[i];
                var Rd = (1 + cosDeg(tilt))/2;
                var Hd_incl = Rd * Hd;
                Hds_incl.push(Hd_incl);
            }
            return Hds_incl;
      }

      function Hr_inclCalc(corifl,tilt){
              return corifl * ((1-cosDeg(tilt))/2);
          }

      function Hincl(Hbs_incl,Hds_incl,Hr_incl,n_days){
           Hincls = [];
           Hincls_monthly = [];
                for(i = 0; i < 12; i++){
                var Hb_incl = Hbs_incl[i];
                var Hd_incl = Hds_incl[i];
                var H_incl = Hb_incl + Hd_incl + Hr_incl;
                Hincls.push(H_incl);
                }

              for(i = 0; i < 12; i++){
              var Hincl_monthly = Hincls[i] * n_days[i];
              Hincls_monthly.push(Hincl_monthly);}

              return Hincls_monthly;
          }

      function costantsCalc(solar_type){
              var costants = [];

              switch(solar_type){
              case "c-Si":
                    var k1 = -0.017162;
                    var k2 = -0.040289;
                    var k3 = -0.004681;
                    var k4 = 0.000148;
                    var k5 = 0.000169;
                    var k6 = 0.000005;
                    costants.push(k1,k2,k3,k4,k5,k6);
                    break;


               case "CIS":
                  var k1 = -0.005521;
                  var k2 = -0.038492;
                  var k3 = -0.003701;
                  var k4 = -0.000899;
                  var k5 = -0.001248;
                  var k6 = 0.000001;
                  costants.push(k1,k2,k3,k4,k5,k6);
                  break;

               case "CdTE":
                  var k1 = -0.103251;
                  var k2 = -0.040446;
                  var k3 = -0.001667;
                  var k4 = -0.002075;
                  var k5 = -0.001445;
                  var k6 = -0.000023;
                  costants.push(k1,k2,k3,k4,k5,k6);
                  break;
              }

              return costants
          }

      function K_tmCalc(standing){
            switch(standing){
                case "free_standing":
                  var K_tm = 0.035;
                 case "building_integrated":
                  var K_tm = 0.05;
                }

            return K_tm;
          }

      function eff_relCalc(solar_type, Hincls, standing, Tambs){
              var eff_rels = [];
              var costants = costantsCalc(solar_type);
              var k1 = costants[0];
              var k2 = costants[1];
              var k3 = costants[2];
              var k4 = costants[3];
              var k5 = costants[4];
              var k6 = costants[5];
              var K_tm = K_tmCalc(standing);

                  for (i = 0; i < 12; i++){
                  var Hincl = Hincls[i];
                  var Hincl_1 = Hincl / 1000;
                  var Tamb = Tambs[i]; //Tambs has to be created
                  var Tm = Tamb + (K_tm * Hincl);
                  var Tm_1 = Tm - 25;

                  var eff_rel = 1 + (k1 * Math.log(Hincl_1)) + (k2 *
                  Math.pow((Math.log(Hincl_1)),2)) + (k3 * Tm_1) + (k4 * Tm_1 * Math.log(Hincl_1)) +
                  (k5 * Tm_1 * Math.pow((Math.log(Hincl_1)),2)) + (k6 * Math.pow(Tm_1,2));

                  eff_rels.push(eff_rel);
                  }

              return eff_rels;
          }

      function PCalc(Hincls, P_peak, eff_rels){
      var Ps = [];
            for(i = 0; i < 12; i++){
            var Hincl = Hincls[i];
            var Hincl_1 = Hincl/1000;
            var eff_rel = eff_rels[i];
            var P = Hincl_1 * P_peak * eff_rel;
            P = P * 1000; //converting in WH
            var P_loss = (P/100) * 14; //calculating energy losses
            P = P - P_loss; //removing the energy losses

                    if(P < 0 || isNaN(P)){
                    P = 0;}

            Ps.push(P);
            }

            return Ps;
      }

      function Ptot(Ps){
        Psum = 0;
        console.log("starting list: " + Ps);
        for(i = 0; i < 12; i++){
            Psum = Psum + parseFloat(Ps[i]);}

        console.log("sum: " + Psum);
        return Psum;}

      function ReportCalc(Energies,Ps){
        var report = []
        for (i = 0; i < 12; i++){
            var difference = Ps[i] - Energies[i];
            report.push(difference);
            }
        return report}

        function percentageProd(Psum,Nsum){
        console.log(Nsum);
        var remains = Psum - Nsum;
        console.log(remains);
        var remains = remains * 100/Nsum;

        console.log(remains);

        if (remains <= -100){var markerColor = "#bf3137"}
        if (remains <= -50 && remains > -100){var markerColor = "#bb5945"}
        if (remains <= 0 && remains > -50){var markerColor = "#b47b52"}
        if (remains <= 50 && remains > 0){var markerColor = "#ab9861"}
        if (remains <= 100 && remains > 50){var markerColor = "#9eb06e"}
        if (remains > 100){var markerColor = "#8bc47b"}

        return markerColor;
        }

        function mapWithMarker(lat,long,Psum,Nsum) {
                // Create a World Window for the canvas.
                var wwd = new WorldWind.WorldWindow("map");

                 //initial position
                var startLat = 42.51;
                var startLong = 12;
                wwd.navigator.lookAtLocation.latitude = startLat;
                wwd.navigator.lookAtLocation.longitude = startLong;
                wwd.navigator.range = 17e5; //200 000 meters


                // Add some image layers to the World Window's globe.
                wwd.addLayer(new WorldWind.BMNGOneImageLayer());
                wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());

                // Add a compass, a coordinates display and some view controls to the World Window.
                wwd.addLayer(new WorldWind.CompassLayer());
                wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
                wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

                //go to location
                var lat = document.user_inputs.lat.value;
                var long = document.user_inputs.long.value;
                var markerText = "Annual production: " + Math.round(Psum) + " Wh";
                var markerColor = percentageProd(Psum,Nsum);
                wwd.goToAnimator.goTo(new WorldWind.Location(lat, long, 2e5));

                //SQUARES
              var screenImageLayer = new WorldWind.RenderableLayer();
                                        screenImageLayer.displayName = "Screen Images";

              var square1 = document.createElement("canvas"),
                          ctxsq1 = square1.getContext("2d"),
                          size = 65, c = size / 2;

                      square1.width = size;
                      square1.height = size * 7;

                      ctxsq1.beginPath();
                      ctxsq1.fillStyle = "#8bc47b";
                      ctxsq1.rect(c, c, size, size);
                      ctxsq1.fill();

                      ctxsq1.beginPath();
                      ctxsq1.fillStyle = "#9eb06e";
                      ctxsq1.rect(c, c*2, size, 65/2);
                      ctxsq1.fill();

                      ctxsq1.beginPath();
                      ctxsq1.fillStyle = "#ab9861";
                      ctxsq1.rect(c, c*3, size, 65/2);
                      ctxsq1.fill();

                      ctxsq1.beginPath();
                      ctxsq1.fillStyle = "#b47b52";
                      ctxsq1.rect(c, c*4, size, 65/2);
                      ctxsq1.fill();

                      ctxsq1.beginPath();
                      ctxsq1.fillStyle = "#bb5945";
                      ctxsq1.rect(c, c*5, size, 65/2);
                      ctxsq1.fill();

                      ctxsq1.beginPath();
                      ctxsq1.fillStyle = "#bf3137";
                      ctxsq1.rect(c, c*6, size, 65/2);
                      ctxsq1.fill();

                      // Create the screen image and place it in the upper-left corner.
                      screenOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0, WorldWind.OFFSET_FRACTION, 1);
                      var screenImage1 = new WorldWind.ScreenImage(screenOffset, new WorldWind.ImageSource(square1));
                      screenImage1.imageOffset = new WorldWind.Offset(WorldWind.OFFSET_FRACTION, 0, WorldWind.OFFSET_FRACTION, 1);

                      // Add the screen images to a layer and the layer to the World Window's layer list.
                      screenImageLayer.addRenderable(screenImage1);
                      wwd.addLayer(screenImageLayer);


                //PLACEMARK
                var placemark,
                            placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
                            highlightAttributes,
                            placemarkLayer = new WorldWind.RenderableLayer("Placemarks"),
                            latitude = lat,
                            longitude = long;

                        // Set up the common placemark attributes.
                        placemarkAttributes.imageScale = 1;
                        placemarkAttributes.imageOffset = new WorldWind.Offset(
                            WorldWind.OFFSET_FRACTION, 0.5,
                            WorldWind.OFFSET_FRACTION, 0.5);
                        placemarkAttributes.imageColor = WorldWind.Color.WHITE;

                        // Create the custom image for the placemark.

                        var canvas = document.createElement("canvas"),
                            ctx2d = canvas.getContext("2d"),
                            width = 500, height = 100, cwidth = width / 2, cheight = height / 2;

                        canvas.width = width;
                        canvas.height = height;

                        ctx2d.fillStyle = markerColor;
                        ctx2d.rect(cwidth, cheight, width, height);
                        ctx2d.fill();

                        ctx2d.font = "15px Lato";
                        ctx2d.fillStyle = "black";
                        ctx2d.textAlign = "center";
                        ctx2d.fillText(markerText, cwidth + cwidth/2, cheight + cheight/2);

                        // Create the placemark.
                        placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, 1e2), false, null);
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
                  wwd.addLayer(placemarkLayer);

                  // Now set up to handle highlighting.
                  var highlightController = new WorldWind.HighlightController(wwd);


            }


 function loadData(){
     //finding index to obtain H1,H2,H3,H4
         var y1_index = 48 - y1;
         var y2_index = y1_index + 1;
         var x1_index = x1;
         var x2_index = x2;

     var lat = document.user_inputs.lat.value;
     var long = document.user_inputs.long.value;
     var tilt = document.user_inputs.tilt.value;
     var azimuth = document.user_inputs.azimuth.value;
     var corifl = document.user_inputs.corifl.value;
     var solar_type = document.user_inputs.type.value;
     var standing = document.user_inputs.standing.value;
     var P_peak = document.user_inputs.kwp.value;

     var energy1 = document.user_inputs.energy1.value;
     var energy2 = document.user_inputs.energy2.value;
     var energy3 = document.user_inputs.energy3.value;
     var energy4 = document.user_inputs.energy4.value;
     var energy5 = document.user_inputs.energy5.value;
     var energy6 = document.user_inputs.energy6.value;
     var energy7 = document.user_inputs.energy7.value;
     var energy8 = document.user_inputs.energy8.value;
     var energy9 = document.user_inputs.energy9.value;
     var energy10 = document.user_inputs.energy10.value;
     var energy11 = document.user_inputs.energy11.value;
     var energy12 = document.user_inputs.energy12.value;


     //csv files to load
     d3.queue()
           .defer(d3.csv, "/data/data_italy/month_1.csv")
           .defer(d3.csv, "/data/data_italy/month_2.csv")
           .defer(d3.csv, "/data/data_italy/month_3.csv")
           .defer(d3.csv, "/data/data_italy/month_4.csv")
           .defer(d3.csv, "/data/data_italy/month_5.csv")
           .defer(d3.csv, "/data/data_italy/month_6.csv")
           .defer(d3.csv, "/data/data_italy/month_7.csv")
           .defer(d3.csv, "/data/data_italy/month_8.csv")
           .defer(d3.csv, "/data/data_italy/month_9.csv")
           .defer(d3.csv, "/data/data_italy/month_10.csv")
           .defer(d3.csv, "/data/data_italy/month_11.csv")
           .defer(d3.csv, "/data/data_italy/month_12.csv")
           .defer(d3.csv, "/data/solar_declination.csv")
           .defer(d3.csv, "/data/data_italy/temp1.csv")
           .defer(d3.csv, "/data/data_italy/temp2.csv")
           .defer(d3.csv, "/data/data_italy/temp3.csv")
           .defer(d3.csv, "/data/data_italy/temp4.csv")
           .defer(d3.csv, "/data/data_italy/temp5.csv")
           .defer(d3.csv, "/data/data_italy/temp6.csv")
           .defer(d3.csv, "/data/data_italy/temp7.csv")
           .defer(d3.csv, "/data/data_italy/temp8.csv")
           .defer(d3.csv, "/data/data_italy/temp9.csv")
           .defer(d3.csv, "/data/data_italy/temp10.csv")
           .defer(d3.csv, "/data/data_italy/temp11.csv")
           .defer(d3.csv, "/data/data_italy/temp12.csv")
           .await(analyze);

       function analyze(error, month_1, month_2, month_3, month_4, month_5, month_6, month_7, month_8, month_9, month_10, month_11, month_12,
       solar_table,temp1,temp2,temp3,temp4,temp5,temp6,temp7,temp8,temp9,temp10,temp11,temp12) {
              if(error) { console.log(error); }
              console.log('Csv loaded successfully!');
              console.log(solar_table[0]["mese"]);

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

              console.log("Getting temperatures of x1,x2,y1,y2")
              var temp_xy_jan = H_month(temp1,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_feb = H_month(temp2,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_mar = H_month(temp3,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_apr = H_month(temp4,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_may = H_month(temp5,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_jun = H_month(temp6,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_jul = H_month(temp7,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_aug = H_month(temp8,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_sep = H_month(temp9,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_oct = H_month(temp10,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_nov = H_month(temp11,x1_index,x2_index,y1_index,y2_index);
              var temp_xy_dec = H_month(temp12,x1_index,x2_index,y1_index,y2_index);

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

              console.log("Getting temperatures of x1,x2,y1,y2")
              var temp_jan = interpolation(lat,long,x1,x2,y1,y2,temp_xy_jan);
              var temp_feb = interpolation(lat,long,x1,x2,y1,y2,temp_xy_feb);
              var temp_mar = interpolation(lat,long,x1,x2,y1,y2,temp_xy_mar);
              var temp_apr = interpolation(lat,long,x1,x2,y1,y2,temp_xy_apr);
              var temp_may = interpolation(lat,long,x1,x2,y1,y2,temp_xy_may);
              var temp_jun = interpolation(lat,long,x1,x2,y1,y2,temp_xy_jun);
              var temp_jul = interpolation(lat,long,x1,x2,y1,y2,temp_xy_jul);
              var temp_aug = interpolation(lat,long,x1,x2,y1,y2,temp_xy_aug);
              var temp_sep = interpolation(lat,long,x1,x2,y1,y2,temp_xy_sep);
              var temp_oct = interpolation(lat,long,x1,x2,y1,y2,temp_xy_oct);
              var temp_nov = interpolation(lat,long,x1,x2,y1,y2,temp_xy_nov);
              var temp_dec = interpolation(lat,long,x1,x2,y1,y2,temp_xy_dec);

              var HofAllMonths = [];
              HofAllMonths.push(H_jan,H_feb,H_mar,H_apr,H_may,H_jun,H_jul,H_aug,H_sep,H_oct,H_nov,H_dec);
              console.log('Interpolation of solar irradiation completed :)');

              var Tambs = [];
              Tambs.push(temp_jan,temp_feb,temp_mar,temp_apr,temp_may,temp_jun,temp_jul,temp_aug,temp_sep,temp_oct,temp_nov,temp_dec);
              console.log('Interpolation of temperatures completed :)');
              console.log(Tambs);

              var JulianDays = [];
              JulianDays = JulianDaysExtract(solar_table);
              console.log('Julian Days extracted!');

              var solarDeclinations = [];
              solarDeclinations = solarDeclination(JulianDays);
              console.log('Solar declinations as well');

              var Eos = [];
              Eos = Eo(JulianDays);
              console.log('Distance between Sun and Earth in the Julian Days calculated');

              var Hds = [];
              Hds = Hd(solarDeclinations,lat, HofAllMonths, Eos);
              console.log('Hd done');

              var Hbs = [];
              Hbs = Hb(HofAllMonths,Hds);
              console.log('Hb done');

              var Hbs_incl = [];
              Hbs_incl = Hb_incl(solarDeclinations, Hbs, lat, tilt, azimuth);
              console.log('Hb on sloping plane calculated');

              var Hds_incl = [];
              Hds_incl = Hd_incl(tilt, Hds);
              console.log('Hd on sloping plane calculated');

              var Hr_incl = Hr_inclCalc(corifl,tilt);

              var Hincls_monthly = [];
              Hincls_monthly = Hincl(Hbs_incl,Hds_incl,Hr_incl,n_days);
              console.log(Hincls)
              console.log("Solar irradiance on sloping plane calculated! Let's calculate the producted energy!")

              var eff_rels = [];
              eff_rels = eff_relCalc(solar_type, Hincls_monthly, standing, Tambs);
              console.log(eff_rels);

              var Ps = [];
              Ps = PCalc(Hincls_monthly, P_peak, eff_rels);
              console.log(Ps);

              var Energies = [];
              Energies.push(energy1,energy2,energy3,energy4,energy5,energy6,energy7,energy8,energy9,energy10,energy11,energy12);

              var report = [];
              report = ReportCalc(Energies,Ps);
              console.log(report);

              var Psum = Ptot(Ps);
              var Nsum = Ptot(Energies);

              mapWithMarker(lat,long,Psum,Nsum);

              var chartButton = document.getElementById("chartButton");
              chartButton.addEventListener("click", ChartShow(Ps,report));

              function ChartShow(Ps,report){
                  var ChartPage = window.open('/graph');

                  var buru = Ps;
                  ChartPage.Ps_chart = buru;
                  var lala = Energies;
                  ChartPage.Energies_chart = lala;
                  ChartPage.user_lat = lat;
                  ChartPage.user_long = long;
                  ChartPage.user_tilt = tilt;
                  ChartPage.user_azimuth = azimuth;
                  ChartPage.user_surface = corifl;
                  ChartPage.user_type = solar_type;
                  ChartPage.user_standing = standing;
                  ChartPage.user_kwp = P_peak;
                  var ahah = report;
                  ChartPage.report_user = ahah;
                  }
            };
           }


//----------------------------MAIN----------------------------------
function calculation(){
    //VARIABLES
        //user's
        var lat = document.user_inputs.lat.value;
        var long = document.user_inputs.long.value;
        var tilt = document.user_inputs.tilt.value;
        var azimuth = document.user_inputs.azimuth.value;
        var corifl = document.user_inputs.corifl.value;
        var solar_type = document.user_inputs.type.value;
        var kwp = document.user_inputs.kwp.value;
        var standing = document.user_inputs.standing.value;

         var energy1 = document.user_inputs.energy1.value;
         var energy2 = document.user_inputs.energy2.value;
         var energy3 = document.user_inputs.energy3.value;
         var energy4 = document.user_inputs.energy4.value;
         var energy5 = document.user_inputs.energy5.value;
         var energy6 = document.user_inputs.energy6.value;
         var energy7 = document.user_inputs.energy7.value;
         var energy8 = document.user_inputs.energy8.value;
         var energy9 = document.user_inputs.energy9.value;
         var energy10 = document.user_inputs.energy10.value;
         var energy11 = document.user_inputs.energy11.value;
         var energy12 = document.user_inputs.energy12.value;

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







