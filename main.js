function SearchPhotos() {
  let clientID = "e1a2e06ae94ad6919e3ac6d99a972755f399e771e80abbaa96756b92d5013b0c" 
  let query = document.getElementById("search").value;
  let url = "https://api.unsplash.com/search/photos/?client_id="+clientID+"&query="+query;
  


fetch(url)
.then(function (data){
  return data.json();
})

.then(function(data) {
  console.log(data);
  

  data.results.forEach(photo => {
    
    let result = `
    <img class="pics" src="${photo.urls.small}">
    <p class="para">${photo.alt_description}</p>
    <a href="${photo.links.download_location}">
    `;
    
    $("#result").append(result);
  });
  
})
}
