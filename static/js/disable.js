'use strict';

exports.postAceInit = () => {
  // Function to forcefully hide and disable the delete button
  const hideDeleteButton = () => {
    const $btn = $('#delete-pad');
    if ($btn.length) {
      $btn.prop('disabled', true);
      $btn.css({display: 'none'});
    }
  };

  // Initial attempt (in case the DOM is already there)
  hideDeleteButton();

  // Extra CSS safeguard
  $('head').append('<style>#delete-pad{display:none!important;pointer-events:none!important;}</style>');
}; 