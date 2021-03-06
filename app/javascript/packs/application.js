// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("trix")
require("@rails/actiontext")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// Internal imports, e.g:
import "../controllers/index";
import "bootstrap";
// import "cocoon-js";
// import { initSelect2 } from '../components/init_select2';
import "../components/trix_youtube_plugins";
import { initChatroomCable } from '../channels/chatroom_channel'
import { initNotificationCable } from '../channels/notification_channel'

function copy() {
  /* Get the text field */
  var copyText = document.getElementById("url");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied");
}

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  initChatroomCable();
  initNotificationCable();
  const copybtnEl = document.querySelector('.js-copy')
    if(copybtnEl){
      copybtnEl.addEventListener('click', copy)
    }
});

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


