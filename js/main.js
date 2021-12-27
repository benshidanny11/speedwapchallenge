function widjet() {
  let output = "";
  const element = $(".position-widget").on("change", function (e) {
    output = e.target.value;
    $("#output").text(output);
  });

  return output;
}

widjet();
