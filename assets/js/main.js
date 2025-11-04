import { navHighlight } from './navHighlight.js';
import { formEnhancements } from './form.js';
import { respectReducedData } from './video.js';

document.addEventListener('DOMContentLoaded', () => {
  navHighlight({
    // sections that match your sidebar links:
    selector: 'main section[id]',
    navSelector: '.sidebar nav a'
  });

  formEnhancements({
    form: document.querySelector('#contact form')
  });

  respectReducedData({
    selector: 'video'
  });
});
