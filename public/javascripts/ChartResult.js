window.count = 0;
    Chart.defaults.global.pointHitDetectionRadius = 1;
    var customTooltips = function(tooltip) {

      // Tooltip Element
      var tooltipEl = $('#chartjs-tooltip');

      if (!tooltipEl[0]) {
        $('body').append('<div id="chartjs-tooltip"></div>');
        tooltipEl = $('#chartjs-tooltip');
      }

      // Hide if no tooltip
      if (!tooltip.opacity) {
        tooltipEl.css({
          opacity: 0
        });
        $('.chartjs-wrap canvas')
          .each(function(index, el) {
            $(el).css('cursor', 'default');
          });
        return;
      }

      $(this._chart.canvas).css('cursor', 'pointer');

      // Set caret Position
      tooltipEl.removeClass('above below no-transform');
      if (tooltip.yAlign) {
        tooltipEl.addClass(tooltip.yAlign);
      } else {
        tooltipEl.addClass('no-transform');
      }

      // Set Text
      if (tooltip.body) {
        var innerHtml = [
          (tooltip.beforeTitle || []).join('\n'), (tooltip.title || []).join('\n'), (tooltip.afterTitle || []).join('\n'), (tooltip.beforeBody || []).join('\n'), (tooltip.body || []).join('\n'), (tooltip.afterBody || []).join('\n'), (tooltip.beforeFooter || [])
          .join('\n'), (tooltip.footer || []).join('\n'), (tooltip.afterFooter || []).join('\n')
        ];
        tooltipEl.html(innerHtml.join('\n'));
      }

      // Find Y Location on page
      var top = 0;
      if (tooltip.yAlign) {
        if (tooltip.yAlign == 'above') {
          top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
        } else {
          top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
        }
      }

      var position = $(this._chart.canvas)[0].getBoundingClientRect();

      // Display, position, and set styles for font
      tooltipEl.css({
        opacity: 1,
        width: tooltip.width ? (tooltip.width + 'px') : 'auto',
        left: position.left + tooltip.x + 'px',
        top: position.top + top + 'px',
        fontFamily: tooltip._fontFamily,
        fontSize: tooltip.fontSize,
        fontStyle: tooltip._fontStyle,
        padding: tooltip.yPadding + 'px ' + tooltip.xPadding + 'px',
      });
    };
    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100);
    };
    var lineChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      datasets: [{
        label: "Energy production",
        data: [0.004434462557005918,0.007983842491791572,0.014331447110834242,0.022882986596737036,0.029860334106856082,
        0.03229709734405416,0.03540869629838609,0.029455709393227846,0.020944511815457867,0.011210375602803196,0.005012082036312951,0.0007392406759577044],
          backgroundColor: "rgba(75,192,192,0.4)",


      }, {
        label: "Energy needed",
          backgroundColor: "rgba(75,192,192,0.4)",
        data: [0, 0,0,0,0,0,0,0,0,0,0,0 ]
      }]
    };

    window.onload = function() {
      var chartEl = document.getElementById("chart1");
      window.myLine = new Chart(chartEl, {
        type: 'line',
        data: lineChartData,
        options: {
          title:{
            display:true,
            text:'Graph'
          },
          tooltips: {
            enabled: false,
            custom: customTooltips
          }
        }
      });
    };