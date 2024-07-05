window.onload = async function displayImages() {
    let imgSection = document.getElementById('slider');

    try {
        // Await the response of the fetch call
        const response = await fetch('images/work/list.json');
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Await the parsing of the JSON from the response
        const jsonData = await response.json();
        console.log(jsonData);


        let sliderNavDiv = document.getElementById('slider-nav');

        // Loop through the array of image URLs
        jsonData.forEach(image => {
            // Create a new image element
            let img = document.createElement('img');
            img.src = image.img;
            console.log(image.img);
            img.className = "imgCSS"
            img.id = image.id;

            let attr = document.createElement('a');
            attr.href = "#" + image.id;
            attr.textContent = image.id;
            console.log(image.id);
            // Append the image element to the image section
            imgSection.appendChild(img);
            sliderNavDiv.appendChild(attr);
        });
        let sliderWrapper = document.getElementById('slider-wrapper');
        sliderWrapper.appendChild(sliderNavDiv);
        // Assuming jsonData is an array of image URLs
    } catch (error) {
        console.error('Error fetching or parsing the JSON:', error);
    }
};