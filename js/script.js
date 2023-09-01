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
        <a class="tab bg-[#E5E6E6] text-[#252525] text-[16px] mx-2 my-2">${item.category} </a>
        `
    tab.appendChild(div)
    })
     
}
// Tabs Section End 

handleTabs()