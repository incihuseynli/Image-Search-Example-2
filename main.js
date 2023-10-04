document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const inputValue = document.getElementById("input-value");
    const imageWrapper = document.querySelector(".images-wrapper");
  
    let keyword = '';
    let page = 1;
  
    async function search() {
      keyword = inputValue.value;
      const URL = `https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&query=${keyword}`;
  
      
        const response = await fetch(URL);
        const data = await response.json();
  
        if (page === 1) {
          imageWrapper.innerHTML = "";
        }
  
        data.hits.forEach(({ largeImageURL, user, pageURL }) => {
          imageWrapper.innerHTML += `
            <div class="image-box">
              <img src="${largeImageURL}" alt="" />
              <div class="text-box">
                <p>
                  <span>User :</span>
                  <span>${user}</span>
                </p>
                <a href="${pageURL}">Go to page</a>
              </div>
            </div>
          `;
        });
      } 
   
  
    searchBtn.addEventListener("click", search);
  });