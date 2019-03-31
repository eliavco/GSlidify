// content.js
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "clicked_browser_action" ) {
//         alert("hello worldy");
//       }
//     }
// );
// Array.from(document.querySelectorAll('.btn')).forEach(el => {
//     el.addEventListener('click', () => {
//         console.log("im here");    
//     });
// });
// var keyboardEvent = document.createEvent("KeyboardEvent");
// var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
// keyboardEvent[initMethod](
//                    "keypress", // event type : keydown, keyup, keypress
//                     true, // bubbles
//                     true, // cancelable
//                     window, // viewArg: should be window
//                     false, // ctrlKeyArg
//                     false, // altKeyArg
//                     false, // shiftKeyArg
//                     false, // metaKeyArg
//                     40, // keyCodeArg : unsigned long the virtual key code, else 0
//                     0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
// );
// $(body).addEventListener('click', () => {
//     console.log("hello");
    
//     document.dispatchEvent(keyboardEvent);
// });

// function simulateKeyPress() {
//     jQuery.event.trigger({ type : 'keypress', which : 40, keyCode: 40 });
//   }

// document.body.addEventListener('click', (e) => {
//     document.querySelector('[title="Next (→)"]').style.background-color = 'indigo';
// });

function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
}

eventFire(document.getElementById('anc67'), 'click');