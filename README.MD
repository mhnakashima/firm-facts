# Description

## To run the project

To run this project you should install react and dependencies by:

- Cloning this project and
- installing the dependencies - npm install
- npm run start


## Requirements/Specification

1. The implemented styling should be pixel-perfect and should precisely match the provided
mockup
2. The layout should be responsive and everything should scale proportionally between 768px and
1680px screen width

1. Minimum layout width should be 768px
2. Maximum layout width should be 1680px
3. It would be great If the font size scales too
3. Visual appearance of any component should be controlled via a variant prop passed to the
component

4. All components should be styled via SCSS modules
5. The following CSS transitions should be animated:

1. Color
2. Background color
3. Border color (if applicable)
6. body should not have any paddings or margins set
7. Three React components should be implemented within the scope of this challenge

### Firm Facts component

1. Only one variant of the component is possible
2. The component should wrap everything and implement the cards layout via display:
grid;
3. Note that the buttons' position in the top row differs from the buttons' position in the
bottom row
4. The component should be centered horizontally on the page and positioned at 100px
from the page top

### Firm Fact Card component
1. Appearance of the component should be controlled by a variant prop
2. There can be two variants of the Firm Fact Card:
1. default - top row, on hover the whole background color changes to green
Deliverables
2. border - bottom row, on hover only the border color changes to green
3. Button component
1. Appearance of the component should be controlled by a variant prop
2. There can be two variants of the Button:
1. default - the text should not wrap, the button can have just one line of text,
should maintain paddings, and truncate the text without ellipsis
2. icon - there should be an icon, the button can have one or two lines of text,
should maintain the paddings, and truncate the text with ellipsis
3. The button should have a styled disabled state
1. The three components described in the challenge should be implemented to precisely match the
mockup
2. Please provide a link to a GitHub repo with the implemented challenge
3. Once the repo is cloned locally, after running yarn start we should observe the Firm Facts
component properly rendered and positioned on a page according to the provided specification