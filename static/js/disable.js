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

  // Observe DOM changes and re-apply if someone tries to inject the button back
  const observer = new MutationObserver(() => hideDeleteButton());
  observer.observe(document.body, {childList: true, subtree: true});

  // Extra CSS safeguard
  $('head').append('<style>#delete-pad{display:none!important;pointer-events:none!important;}</style>');
}; 