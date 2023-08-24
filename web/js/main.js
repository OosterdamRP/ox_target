import { createOptions } from './createOptions.js';

const optionsWrapper = document.getElementById('options-wrapper');
const body = document.body;
const eye = document.getElementById('eyeSvg');

window.addEventListener('message', (event) => {
  optionsWrapper.innerHTML = '';

  switch (event.data.event) {
    case 'visible': {
      body.style.visibility = event.data.state ? 'visible' : 'hidden';
      eye.classList.add("far")
      eye.style.color = '#3d5261';
      return (eye.classList.remove("fas"));
    }

    case 'leftTarget': {
      eye.classList.remove("fas")
      eye.style.color = '#3d5261';
      return (eye.classList.add("far"));
    }

    case 'setTarget': {
      eye.classList.remove("far");
      eye.classList.add("fas");
      eye.style.color = '#3a7daa';

      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1);
          });
        }
      }
    }
  }
});
