import React, { useEffect } from "react";
import { InstaAPI } from "../../../config";
import "./InstaConnect.scss";

const InstaConnect = () => {
  useEffect(() => {
    fetch(`${InstaAPI}`, {method:'GET'})
    .then(res => res.json())
    .then(res => {
      if (res.status === 200){
        if(res.data !== undefined && res.data.length > 0){
          for(let i =0; i < 15; i++){
            if(res.data[i]){
              let item = res.data[i];
              let image_url = "";
              let post = "";

              if(item.media_type === "VIDEO"){
                image_url = item.thumbnail_url;
              } else {
                image_url = item.media_url;
              }
              post += '<div class="instagram_item instagram_item' + i + '">';
              post +=
              '<a href="' +
              item.permalink +
              '" target="_blank" rel="noopener noreferrer" style="background-image: url(' +
              image_url +
              ');">';
             post += "<p>" + item.caption + "</p>";
             post += "</a>";
             post += "</div>";
             React.createElement('div', {id:"instagram"}, post)
            //  ("instagram").push(post);
            } 
          }
        }else {
          show_fallback("#insta-item-" + i);
        }
      }else{
        show_fallback(".instagram-item");
      }
    },
    error:function(){
      show_fallback(".instagram-item");
    },
  }, []);

  const show_fallback(el){
    React.()
  }
  return ;
};

export default InstaConnect;
