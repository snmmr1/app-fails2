javascript:(function()%7B/*1.0.2invert00*/var%20newcss='body%20%7Bfilter:%20invert(100%25) hue-rotate(180deg);%7D%20img,%5Bclass*=%22userpic%22%5D,%5Bclass*=%22avatar%22%5D%20%7Bfilter:%20invert(100%25) hue-rotate(-180deg);;background-color:rgba(255,255,255,0.1);%7D';if(%22%5Cv%22==%22v%22)%7Bdocument.createStyleSheet().cssText=newcss%7Delse%7Bvar%20tag=document.createElement(%22style%22);tag.type=%22text/css%22;document.getElementsByTagName(%22head%22)%5B0%5D.appendChild(tag);tag%5B(typeof%20document.body.style.WebkitAppearance==%22string%22)?%22innerText%22:%22innerHTML%22%5D=newcss%7D%7D)();