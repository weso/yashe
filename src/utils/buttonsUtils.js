var imgs = require("./imgs.js"),
    yutils = require("yasgui-utils"),
    utils = require("./baseUtils.js")

var drawButtons = function(yashe){

    yashe.buttons = $("<div class='yashe_buttons'></div>").appendTo($(yashe.getWrapperElement()));


    /**
     * draw upload button
     */
    var uploadButton = $("<div>", {
      class: "downloadBtns"
    }).append($('<input type="file" accept=".shex" name="file-1[]" id="file-1" class="inputfileBtn" data-multiple-caption="{count}'
    +'files selected" multiple /><label for="file-1">'+imgs.upload+'</label>')
    .attr("title", "Upload you ShEx file")
    .on('change',utils.readFile)
        );
    yashe.buttons.append(uploadButton);
  
  
    /**
     * draw download button
     */
  
    var downloadButton = $("<div>", {
      class: "downloadBtns"
    })
      .append(
        $(yutils.svg.getElement(imgs.download))
          .addClass("yashe_downloadBtn")
          .attr("title", "Download File")
          .click(function() {          
            var textFileAsBlob = new Blob([ yashe.getValue() ], { type: 'text/shex' });
            var fileNameToSaveAs = "document.shex";
  
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.URL != null) {
              // Chrome allows the link to be clicked without actually adding it to the DOM.
              downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            } else {
              // Firefox requires the link to be added to the DOM before it can be clicked.
              downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
              downloadLink.onclick = destroyClickedElement;
              downloadLink.style.display = "none";
              document.body.appendChild(downloadLink);
            }
            downloadLink.click();
          })
      );
    yashe.buttons.append(downloadButton);
  
  
    /**
     * draw copy button
     */
  
    var copyButton = $("<div>", {
      class: "downloadBtns"
    })
      .append(
        $(yutils.svg.getElement(imgs.copy))
          .addClass("yashe_downloadBtn")
          .attr("id", "copy")
          .attr("title", "Copy to the clipboard")
        );
    yashe.buttons.append(copyButton);
  
    /**
       * draw fullscreen button
       */
  
    var toggleFullscreen = $("<div>", {
      class: "fullscreenToggleBtns"
    })
      .append(
        $(yutils.svg.getElement(imgs.fullscreen))
          .addClass("yashe_fullscreenBtn")
          .attr("title", "Set editor full screen")
          .click(function() {
            yashe.setOption("fullScreen", true);
          })
      )
      .append(
        $(yutils.svg.getElement(imgs.smallscreen))
          .addClass("yashe_smallscreenBtn")
          .attr("title", "Set editor to normal size")
          .click(function() {
            yashe.setOption("fullScreen", false);
          })
      );
    yashe.buttons.append(toggleFullscreen);
  
  }



module.exports = {
    drawButtons:drawButtons
}