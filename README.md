Planning for food delivery App
- App Layout
 - Header
  - Logo, Nav Items
 - Main container
  - search 
  - Restaraunt  card 
   - Img
   - Name of restaurant, star rating, cuisine,  
   - Restaraunt cards 
 - Footer 
  -Addres, copy rights 


- React Hooks
    noraml JS utility function 
      - useState() - superpowerful State variable in react 
         whenever state variable changes, react rerender the components
      - useEffect()

Using useEffect added shimmerUI
Created Login/ logout button 

if no depency array => useEffect is called on every render
if dependency array is empty = [] => useEffect is called on initail render(just once)
if dependency array is [btnName] => called everytime btnName is ipdated
