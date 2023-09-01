// Tabs Section Start
const handleTabs = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    console.log(data.data);


    // Dynamically put the Tabs
    const tab = document.getElementById('tab');
    data.data.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleCards('${item.category_id}')" class="tab bg-[#E5E6E6] text-[#252525] text-[16px] mx-2 my-2">${item.category} </a>
        `
    tab.appendChild(div) 
    })
     
}
// Tabs Section End 

const handleCards = async(postID) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${postID}`)
    const data = await response.json();

    const itemContainer = document.getElementById('item-container')
    itemContainer.textContent = ''
    data.data?.forEach((card) => {
        const div = document.createElement('div');
        
        div.innerHTML = `
        


        <div class="card card-compact bg-base-100">
          <!-- Main Image Start -->
          <div class="relative">
            <figure><img class="w-[400px] h-[200px]" src=${card.thumbnail} alt="" /></figure>
          </div>
          <!-- Main Image End -->

          <!-- Time Start -->
          <div class="bg-[#171717] p-1 absolute top-[35%] right-2 rounded-sm">
            <p class="text-white text-xs">${card.others.posted_date}</p>
          </div>
          <!-- Time End -->

          <div class="card-body">
            <div class="card card-side bg-base-100">
              <!-- Author Image Start  -->
              <figure>
                <img src=${card.authors[0]?.profile_picture} class="w-12 h-12 rounded-full" alt="" />
              </figure>
              <!-- Author Image Emd  -->

              <div class="card-body">
                <!-- Tube Title Start -->
                <h2 class="card-title text-[#171717] text-base font-bold my-1">
                  ${card.title}
                </h2>
                <!-- Tube Title End  -->

                <!-- Author Name & Image Start -->
                <div class="flex justify-normal items-center">
                  <div><p class="my-0 leading-3 mr-2">${card.authors[0].profile_name}</p></div>
                  <div>
                    <img src="./images/verified.png" class="w-[30px]" alt="" />
                  </div>
                </div>
                <!-- Author Name & Image End -->

                <!-- View Start -->
                <p>${card.others.views} Views </p>
                <!-- View End -->
              </div>
            </div>
          </div>
        </div>











        `
        itemContainer.appendChild(div)
    })
    console.log(data.data);
    

}




handleTabs()
handleCards('1000')