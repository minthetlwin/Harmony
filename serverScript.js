document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// .
// .
// .
//  Service Page Drop and Select Image

const dropArea = document.getElementById('dropArea');
        const fileInput = document.getElementById('fileInput');
        const selectedImage = document.getElementById('selectedImage');

        // Prevent default behavior when an image is dragged over the drop area
        dropArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropArea.style.border = '2px dashed #F17400';
        });

        // Handle dropping an image onto the drop area
        dropArea.addEventListener('drop', (e) => {
            e.preventDefault();
            dropArea.style.border = '2px dashed #ccc';
            const file = e.dataTransfer.files[0];
            displayImage(file);
        });

        // Handle selecting an image using the file input
        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            displayImage(file);
        });

        // Display the selected image on the page
        function displayImage(file) {
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    selectedImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                selectedImage.src = '';
            }
        }

    //     const nameInput = document.querySelector('.reviewer-name-input');
    

    // const reviewInput = document.querySelector('.review-description-input');
    

   
    // const Image = document.getElementById('selectedImage');
    
        
    // const putDiv = document.getElementById("slide");
    //     function submit() {
            
    //         let newDiv=document.createElement('div');
    //         newDiv.classList.add('item');
    //         newDiv.innerHTML = `
            
    //         <div class="sec-body">
    //                 <div class="silde-container swiper">
    //                     <div class="slide-content">
    //                         <div class="card-wrapper swiper-wrapper">
    //                             <div class="card swiper-slide">
    //                                 <div class="image-content">
    //                                     <span class="overlay"></span>
    //                                     <div class="card-image">
    //                                         <img src="${Image.src}" alt="" class="card-img">
    //                                     </div>
    //                                 </div>
    //                                 <div class="reviewer-name">
    //                                     ${value.nameInput}
    //                                 </div>
    //                                 <div class="review-text">
    //                                     ${value.reviewInput}
    //                                 </div>
                                    
    //                             </div>    
    //                         </div>
    //                     </div>
    //                 </div>
                    
    //             </div>
    //     `;
    //     putDiv.appendChild(newDiv);
            
    //     }

// const reviewForm=document.querySelector('.review-form');
//     const nameInput = document.querySelector('.reviewer-name-input');
// const reviewInput = document.querySelector('.review-description-input');
// const image = document.getElementById('selectedImage');
// const putDiv = document.getElementById('slide');

// function submit() {
//     const newName = nameInput.value;
//     const newReview = reviewInput.value;

//     let newDiv = document.createElement('div');
//     newDiv.classList.add('item');
//     newDiv.innerHTML = `
//         <div class="sec-body">
//             <div class="silde-container swiper">
//                 <div class="slide-content">
//                     <div class="card-wrapper swiper-wrapper">
//                         <div class="card swiper-slide">
//                             <div class="image-content">
//                                 <span class="overlay"></span>
//                                 <div class="card-image">
//                                     <img src="${image.src}" alt="" class="card-img">
//                                 </div>
//                             </div>
//                             <div class="reviewer-name">
//                                 ${newName}
//                             </div>
//                             <div class="review-text">
//                                 ${newReview}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//     putDiv.appendChild(newDiv);

// }

     
const reviewForm = document.querySelector('.review-form');
const nameInput = document.querySelector('.reviewer-name-input');
const reviewInput = document.querySelector('.review-description-input');
const image = document.getElementById('selectedImage');
const putDiv = document.getElementById('slide');

function submit() {
    const newName = nameInput.value;
    const newReview = reviewInput.value;

    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <div class="sec-body">
            <div class="silde-container swiper">
                <div class="slide-content">
                    <div class="card-wrapper swiper-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-content">
                                <span class="overlay"></span>
                                <div class="card-image">
                                    <img src="${image.src}" alt="" class="card-img">
                                </div>
                            </div>
                            <div class="reviewer-name">
                                ${newName}
                            </div>
                            <div class="review-text">
                                ${newReview}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    putDiv.appendChild(newDiv);

    // Reset the form
    document.querySelector('.reviewer-name-input').value='';
    document.querySelector('.review-description-input').value='';
    document.getElementById('selectedImage').src='photo.png';
}
