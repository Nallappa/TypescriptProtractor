

import {browser, element, by} from 'protractor';

        by.addLocator('ngclick',
        function(buttonText, opt_parentElement, opt_rootSelector) {
            // This function will be serialized as a string and will execute in the
            // browser. The first argument is the text for the button. The second
            // argument is the parent element, if any.
            var using = opt_parentElement || document,
                buttons = using.querySelectorAll('button');
            
            // Return an array of buttons with the text.
            return Array.prototype.filter.call(buttons, function(button) {
                return button.textContent === buttonText;
               });
            });
          
            element(by.ngclick('Go!')).click();
    
 // function getByLabel(parentElement, itemListSelector, labelSelector, searchString) {
    //     by.addLocator('ng-click', function(itemList, label, search, parent) {
    //         return Array.prototype.filter.call(parent.querySelectorAll(itemList), function(item) {
    //             var labelElement = item.querySelector(label);
    
    //             if (labelElement && labelElement.innerText) {
    //                 return labelElement.innerText === search;
    //             }
    
    //             return false;
    //         });
    //     });
    
    //     return parentElement.element(by.ngclick(itemListSelector, labelSelector, searchString));
    // }





