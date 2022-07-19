function makeblue(details) {                        //function, name of function,(paramaters, arguements)
    details[`target`][`style`][`color`] = `blue`;   // detals, targets the index tag header_title changes the color to blue om mouseover
}

let header = document.getElementById(`header_title`);       //goes into the index get the id header_title which is = to header
header.addEventListener(`mouseover`, makeblue);             // looks for when header (header_title) is moused over and call's the function





function fontsize(details) {                            //function, name of function,(paramaters, arguements)
    details[`target`][`style`][`fontSize`] = `2rem`;    // detals, targets the index tag header_title changes the font size to 2rem on clicking it
}

let mainH2 = document.getElementById(`main_h2`);         //goes into the index get the id main_h2 which is = to header 
mainH2.addEventListener(`click`, fontsize);              // looks for when mainH2 (main_h2) is moused over and call's the function




function backgroundColor(details) {                        //function, name of function,(paramaters, arguements)
    if(details.charCode === 32) {                          // if the character code is = to 32 (spacebar) it will run the next line or it will end the code
details[`target`][`style`][`backgroundColor`] = `orange`;  // detals, targets the index tag body_tag changes the background color of page to orange if spacebar was pressed
    }
    }

let page = document.getElementById(`body_tag`);             //goes into the index get the id body_tag which is = to page
page.addEventListener(`keypress`, backgroundColor);         // looks for when a key is pressed and call's the function
