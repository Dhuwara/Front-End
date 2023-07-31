function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }



//   slider 


  $(function() {
    // Experience Slider
    $("#experience-slider").slider({
      range: true,
      min: 0,
      max: 10,
      values: [3, 5],
      slide: function(event, ui) {
        $("#experience-tooltip").text(ui.values[0] + " - " + ui.values[1]);
        $("#experience-values").text("Min: " + ui.values[0] + ", Max: " + ui.values[1]);
      }
    });
    $("#experience-tooltip").text($("#experience-slider").slider("values", 0) + " - " + $("#experience-slider").slider("values", 1));
    $("#experience-values").text("Min: " + $("#experience-slider").slider("values", 0) + ", Max: " + $("#experience-slider").slider("values", 1));

    // Score Slider
    $("#score-slider").slider({
      range: "min",
      min: 0,
      max: 100,
      value: 50,
      slide: function(event, ui) {
        $("#score-tooltip").text(ui.value);
        $("#score-values").text("Value: " + ui.value);
      }
    });
    $("#score-tooltip").text($("#score-slider").slider("value"));
    $("#score-values").text("Value: " + $("#score-slider").slider("value"));
  });

