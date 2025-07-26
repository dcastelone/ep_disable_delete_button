'use strict';

/**
 * Drop any client-originated PAD_DELETE messages to ensure pads cannot be deleted via the UI.
 * Returning `null` makes Etherpad discard the message (see PadMessageHandler).
 */
exports.handleMessage = async (hookName, context) => {
  const {message} = context;

  if (message && message.type === 'COLLABROOM' && message.data && message.data.type === 'PAD_DELETE') {
    return null; // Block the deletion request
  }

  // Anything else should proceed untouched.
  return undefined;
}; 